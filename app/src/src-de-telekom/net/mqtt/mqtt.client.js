var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "mqtt", "../../util/public", "./mqtt.errors", "rxjs", "rxjs/operators", "../../typing/guard", "../../rxjs/ObservableCache", "../../rxjs/operators"], function (require, exports, mqtt, public_1, mqtt_errors_1, rxjs_1, operators_1, guard_1, ObservableCache_1, operators_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MqttClient = void 0;
    var MqttClient = (function () {
        function MqttClient(mqttClient) {
            this.mqttClient = mqttClient;
            this.subscriptionCache = new ObservableCache_1.ObservableCache("MqttClient_Subscriptions", 30000);
            this.endSubject = new rxjs_1.Subject();
            this.onMessageObservable = MqttClient_1.registerEvent(this, "message").pipe(operators_1.share());
            var onConnectObservable = MqttClient_1.registerEvent(this, "connect").pipe(operators_1.map(function () { return "connected"; }));
            var onErrorObservable = rxjs_1.merge(MqttClient_1.registerEvent(this, "error"), MqttClient_1.registerStreamEvent(this, "error")).pipe(operators_1.map(function () { return "error"; }));
            var onOfflineObservable = MqttClient_1.registerEvent(this, "offline").pipe(operators_1.map(function () { return "offline"; }));
            var onReconnectObservable = MqttClient_1.registerEvent(this, "reconnect").pipe(operators_1.map(function () { return "reconnect"; }));
            var onEndObservable = this.endSubject.pipe(operators_1.take(1), operators_1.map(function () { return "disconnected"; }));
            rxjs_1.merge(onConnectObservable, onErrorObservable, onOfflineObservable, onReconnectObservable, onEndObservable)
                .subscribe({ next: function (data) { return MqttClient_1.onStateSubject.next(data); } });
        }
        MqttClient_1 = MqttClient;
        MqttClient.connect = function (brokerUrl, opts) {
            return MqttClient_1.clientCache.createCache("connect", function () { return MqttClient_1.connectInternal(guard_1.Guard.isString(brokerUrl) ? rxjs_1.of(brokerUrl) : brokerUrl, opts); });
        };
        MqttClient.prototype.end = function () {
            this.endSubject.next("end");
        };
        MqttClient.prototype.observe = function (topic, opts) {
            if (opts === void 0) { opts = { qos: 0 }; }
            var matcher = this.buildMatchingRegex(topic);
            return rxjs_1.merge(this.onMessageObservable.pipe(operators_1.filter(function (value) { return matcher(value.topic); })), this.subscribe(topic, opts));
        };
        MqttClient.prototype.observeReply = function (topic, message, opts) {
            var _this = this;
            return !guard_1.Guard.isNonEmptyString(message.$replyToTopic)
                ? rxjs_1.throwError(new mqtt_errors_1.MqttPublishError("The reply topic is missing!"))
                : rxjs_1.of({
                    message: message,
                    correlationId: this.mqttClient.options.clientId + "_" + Date.now(),
                    replyToTopic: message.$replyToTopic
                })
                    .pipe(operators_1.mergeMap(function (messageData) { return _this.observe(messageData.replyToTopic, opts)
                    .pipe(operators_1.filter(function (value) { return (value.$type === "grants") || (value.mqttMessage.$correlationId === messageData.correlationId); }), operators_1.mergeMap(function (value) {
                    if (value.$type === "grants") {
                        return rxjs_1.merge(rxjs_1.of(value), _this.publish(topic, __assign(__assign({}, messageData.message), { $correlationId: messageData.correlationId }), opts).pipe(operators_1.ignoreElements()));
                    }
                    return rxjs_1.of(value);
                })); }));
        };
        MqttClient.prototype.publish = function (topic, message, opts) {
            var _this = this;
            if (opts === void 0) { opts = { qos: 0 }; }
            if (!guard_1.Guard.isNonEmptyString(topic)) {
                throw new mqtt_errors_1.MqttPublishError("Topic '" + topic + "' is invalid.");
            }
            return new rxjs_1.Observable(function (observer) {
                _this.mqttClient
                    .publish(topic, JSON.stringify(message), opts, function (error, result) {
                    if (error) {
                        observer.error(error);
                    }
                    else {
                        observer.next(result);
                        observer.complete();
                    }
                });
            });
        };
        MqttClient.prototype.buildMatchingRegex = function (topic) {
            var topics = [];
            if (typeof topic === "string") {
                topics.push(new RegExp("^" + topic.replace(/\+/g, "[^/]+").replace(/#/g, ".+") + "$"));
            }
            else {
                topic.forEach(function (item) { return topics.push(new RegExp("^" + item.replace(/\+/g, "[^/]+").replace(/#/g, ".+") + "$")); });
            }
            return function (topic) {
                for (var _i = 0, topics_1 = topics; _i < topics_1.length; _i++) {
                    var regex = topics_1[_i];
                    if (regex.test(topic)) {
                        return true;
                    }
                }
                return false;
            };
        };
        MqttClient.connectInternal = function (brokerUrl, opts) {
            var createClient = function (url) { return new rxjs_1.Observable(function (observer) {
                var localUrl = url;
                var mqttClient = new MqttClient_1(mqtt.connect(url, __assign(__assign({}, opts), { transformWsUrl: function (url, options, client) {
                        brokerUrl.pipe(operators_1.take(1)).subscribe({ next: function (data) { return localUrl = data; } });
                        return (opts === null || opts === void 0 ? void 0 : opts.transformWsUrl) ? opts.transformWsUrl(localUrl, options, client) : localUrl;
                    } })));
                observer.next(mqttClient);
                return function () {
                    mqttClient.mqttClient.end(true);
                    mqttClient.endSubject.next("end");
                };
            }); };
            return brokerUrl
                .pipe(operators_1.mergeMap(function (url) { return createClient(url); }), operators_1.mergeMap(function (client) { return rxjs_1.race(MqttClient_1
                .registerEvent(client, "connect")
                .pipe(operators_1.take(1), operators_1.mergeMap(function () { return rxjs_1.of(client); })), MqttClient_1
                .registerStreamEvent(client, "error")
                .pipe(operators_1.take(1), operators_1.mergeMap(function (args) { return rxjs_1.throwError(new mqtt_errors_1.MqttConnectionError("Connection to '" + brokerUrl + "' failed: Error in connection establishment.", args)); })))
                .pipe(operators_1.takeUntil(client.endSubject)); }), operators_2.retryDelay({ delay: 30000, maxRetryAttempts: 10 }));
        };
        MqttClient.prototype.subscribe = function (topic, opts) {
            var _this = this;
            var key = JSON.stringify(topic);
            return this.subscriptionCache.createCache(key, function () { return MqttClient_1.subscribeInternal(_this, topic, opts); });
        };
        MqttClient.subscribeInternal = function (client, topic, opts) {
            return new rxjs_1.Observable(function (observer) {
                client.mqttClient
                    .subscribe(topic, opts, function (error, result) {
                    if (error) {
                        observer.error(error);
                    }
                    else {
                        observer.next(({ $type: "grants", subscriptionGrants: result }));
                    }
                });
                return function () {
                    client.mqttClient.unsubscribe(topic);
                };
            })
                .pipe(operators_1.takeUntil(client.endSubject));
        };
        MqttClient.registerEvent = function (client, event) {
            return new rxjs_1.Observable(function (observer) {
                var funcError = function (error) { return observer.next(error); };
                var funcMessage = function (topic, payload, packet) {
                    try {
                        var message = { $type: "message", mqttMessage: JSON.parse("" + payload), topic: topic };
                        observer.next(message);
                    }
                    catch (error) {
                        public_1.Logger.warn(function (log) { return log(public_1.LogMsg("Unable to parse MQTT message ('" + public_1.StringTools.dataStringify(error) + "')", MqttClient_1.TAG)); });
                    }
                };
                var func = event === "error" ? funcError : event === "message" ? funcMessage : function () { return observer.next(); };
                client.mqttClient.addListener(event, func);
                return function () {
                    client.mqttClient.removeListener(event, func);
                };
            })
                .pipe(operators_1.takeUntil(client.endSubject));
        };
        MqttClient.registerStreamEvent = function (client, event) {
            return new rxjs_1.Observable(function (observer) {
                var stream = client.mqttClient.stream;
                var func = function (error) { return observer.next(error); };
                stream.addListener(event, func);
                return function () {
                    stream.removeListener(event, func);
                };
            })
                .pipe(operators_1.takeUntil(client.endSubject));
        };
        var MqttClient_1;
        MqttClient.clientCache = new ObservableCache_1.ObservableCache("MqttClient", 60000);
        MqttClient.onStateSubject = new rxjs_1.Subject();
        __decorate([
            public_1.log2(function () { return ({ name: "MqttClient" }); })
        ], MqttClient.prototype, "observe", null);
        __decorate([
            public_1.log2(function () { return ({ name: "MqttClient" }); })
        ], MqttClient.prototype, "observeReply", null);
        __decorate([
            public_1.log2(function () { return ({ name: "MqttClient" }); })
        ], MqttClient.prototype, "publish", null);
        __decorate([
            public_1.log2(function () { return ({ name: "MqttClient" }); })
        ], MqttClient, "connect", null);
        __decorate([
            public_1.log2(function () { return ({ name: "MqttClient" }); })
        ], MqttClient, "connectInternal", null);
        __decorate([
            public_1.log2(function () { return ({ name: "MqttClient" }); })
        ], MqttClient, "subscribeInternal", null);
        MqttClient = MqttClient_1 = __decorate([
            public_1.logTag()
        ], MqttClient);
        return MqttClient;
    }());
    exports.MqttClient = MqttClient;
});
//# sourceMappingURL=mqtt.client.js.map