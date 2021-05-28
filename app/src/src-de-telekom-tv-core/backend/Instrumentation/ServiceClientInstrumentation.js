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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
define(["require", "exports", "rxjs", "src/src-de-telekom/public", "rxjs/operators", "./ServiceClientContextInstrumentation", "../../frontend/applicationclient"], function (require, exports, rxjs_1, public_1, operators_1, ServiceClientContextInstrumentation_1, applicationclient_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientInstrumentation = void 0;
    var ServiceClientInstrumentation = (function () {
        function ServiceClientInstrumentation() {
            var _a, _b;
            this.subjectToSuspendStandardDevice = new rxjs_1.BehaviorSubject(true);
            this.subjectToSuspendTestingDevice = new rxjs_1.BehaviorSubject(true);
            this.regExpStatusMessages = new RegExp("^services\\..*\\.getstatus$");
            this.ignoreCommands = false;
            var mockDeviceId = (_b = (_a = public_1.Configuration.instance.instrumentation) === null || _a === void 0 ? void 0 : _a.mock) === null || _b === void 0 ? void 0 : _b.deviceId;
            var linkProperties = applicationclient_1.ApplicationClient.network.getLinkProperties();
            var macAddress = (mockDeviceId || linkProperties.MacAddress).replace(/:/g, "").toUpperCase();
            var randomPart = Math.random().toString(16).substr(2, 8);
            this.options = {
                reconnectPeriod: 10000,
                transformWsUrl: function (url) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("transformWsUrl called - '" + url + "'", ServiceClientInstrumentation_1.TAG)); });
                    return url;
                },
                clientId: "UISTB" + applicationclient_1.ApplicationClient.system.getUiBuildVersion() + "_" + macAddress + "_" + randomPart
            };
        }
        ServiceClientInstrumentation_1 = ServiceClientInstrumentation;
        ServiceClientInstrumentation.create = function () {
            ServiceClientInstrumentation_1.instance = new ServiceClientInstrumentation_1();
            return ServiceClientInstrumentation_1.instance;
        };
        ServiceClientInstrumentation.prototype.getDeviceRegistrationState = function () {
            return {
                standardDeviceRegistered: !this.subjectToSuspendStandardDevice.value,
                testingDeviceRegistered: !this.subjectToSuspendTestingDevice.value
            };
        };
        ServiceClientInstrumentation.prototype.changeBehaviorOfStandardDevice = function (suspended) {
            if (ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.isEndpointDefined) {
                this.subjectToSuspendStandardDevice.next(suspended);
            }
        };
        ServiceClientInstrumentation.prototype.changeBehaviorOfTestingDevice = function (suspended) {
            if (ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.isEndpointDefined) {
                this.subjectToSuspendTestingDevice.next(suspended);
            }
        };
        ServiceClientInstrumentation.prototype.setIgnoreCommands = function (ignoreCommands) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("setIgnoreCommands() to " + ignoreCommands, ServiceClientInstrumentation_1.TAG)); });
            this.ignoreCommands = ignoreCommands;
        };
        ServiceClientInstrumentation.prototype.connect = function () {
            return rxjs_1.combineLatest([public_1.MqttClient.connect(ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.getBrokerUrl, this.options), ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.getTopicInformation()]);
        };
        ServiceClientInstrumentation.prototype.getStandardCommand = function () {
            var _this = this;
            if (this.ignoreCommands) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getStandardCommand() skipped because of ignoreCommands", ServiceClientInstrumentation_1.TAG)); });
                return rxjs_1.NEVER;
            }
            else {
                return rxjs_1.of(undefined)
                    .pipe(operators_1.mergeMap(function () { return _this.connect(); }), operators_1.mergeMap(function (_a) {
                    var client = _a[0], topicInformation = _a[1];
                    return client
                        .observe(topicInformation.device.deviceTopic + "/_command")
                        .pipe(operators_1.map(function (message) { return ({ client: client, topicInformation: topicInformation, message: message }); }));
                }), public_1.suspend(this.subjectToSuspendStandardDevice), operators_1.share());
            }
        };
        ServiceClientInstrumentation.prototype.getTestingCommand = function () {
            var _this = this;
            return rxjs_1.of(undefined)
                .pipe(operators_1.mergeMap(function () { return _this.connect(); }), operators_1.mergeMap(function (_a) {
                var client = _a[0], topicInformation = _a[1];
                return client
                    .observe(topicInformation.testing.deviceTopic + "/_command")
                    .pipe(operators_1.map(function (message) { return ({ client: client, topicInformation: topicInformation, message: message }); }));
            }), public_1.suspend(this.subjectToSuspendTestingDevice), operators_1.share());
        };
        ServiceClientInstrumentation.prototype.getCommandObservable = function (deviceType) {
            var _this = this;
            return rxjs_1.from(deviceType)
                .pipe(operators_1.mergeMap(function (type) {
                switch (type) {
                    case "standard": {
                        return _this.getStandardCommand();
                    }
                    case "testing": {
                        return _this.getTestingCommand();
                    }
                    default: {
                        return rxjs_1.NEVER;
                    }
                }
            }));
        };
        ServiceClientInstrumentation.prototype.getStandardQuery = function () {
            var _this = this;
            return rxjs_1.of(undefined)
                .pipe(operators_1.mergeMap(function () { return _this.connect(); }), operators_1.mergeMap(function (_a) {
                var client = _a[0], topicInformation = _a[1];
                return client
                    .observe([
                    topicInformation.device.customerTopic + "/_query",
                    topicInformation.device.deviceClassTopic + "/_query",
                    topicInformation.device.deviceTopic + "/_query"
                ])
                    .pipe(operators_1.map(function (message) { return ({ client: client, topicInformation: topicInformation, message: message }); }));
            }), public_1.suspend(this.subjectToSuspendStandardDevice), operators_1.share());
        };
        ServiceClientInstrumentation.prototype.getTestingQuery = function () {
            var _this = this;
            return rxjs_1.of(undefined)
                .pipe(operators_1.mergeMap(function () { return _this.connect(); }), operators_1.mergeMap(function (_a) {
                var client = _a[0], topicInformation = _a[1];
                return client
                    .observe([
                    topicInformation.testing.testingDeviceTopic + "/_query",
                    topicInformation.testing.customerTopic + "/_query",
                    topicInformation.testing.deviceClassTopic + "/_query",
                    topicInformation.testing.deviceTopic + "/_query"
                ])
                    .pipe(operators_1.map(function (message) { return ({ client: client, topicInformation: topicInformation, message: message }); }));
            }), public_1.suspend(this.subjectToSuspendTestingDevice), operators_1.share());
        };
        ServiceClientInstrumentation.prototype.getQueryObservable = function (deviceType) {
            var _this = this;
            return rxjs_1.from(deviceType)
                .pipe(operators_1.mergeMap(function (type) {
                switch (type) {
                    case "standard": {
                        return _this.getStandardQuery();
                    }
                    case "testing": {
                        return _this.getTestingQuery();
                    }
                    default: {
                        return rxjs_1.NEVER;
                    }
                }
            }), operators_1.mergeMap(function (item) {
                var _a, _b;
                var message = item.message;
                if ((message.$type === "message") && public_1.Guard.isDefined(message.mqttMessage.payload) && _this.regExpStatusMessages.test((_a = message.mqttMessage.payload) === null || _a === void 0 ? void 0 : _a.$type)) {
                    var statusMessage = message.mqttMessage.payload;
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getQueryObservable -> " + JSON.stringify(deviceType), ServiceClientInstrumentation_1.TAG)); });
                    if ((_b = statusMessage.additionalServices) === null || _b === void 0 ? void 0 : _b.length) {
                        var newItems = __spreadArray([statusMessage.$type], statusMessage.additionalServices).map(function (service) { return (__assign(__assign({}, item), { message: __assign(__assign({}, message), { mqttMessage: __assign(__assign({}, message.mqttMessage), { payload: { $type: service } }) }) })); });
                        return rxjs_1.from(newItems);
                    }
                }
                return rxjs_1.from([item]);
            }));
        };
        var ServiceClientInstrumentation_1;
        ServiceClientInstrumentation.classID = 0xA01;
        __decorate([
            public_1.Memoize.decorator()
        ], ServiceClientInstrumentation.prototype, "getStandardCommand", null);
        __decorate([
            public_1.Memoize.decorator()
        ], ServiceClientInstrumentation.prototype, "getTestingCommand", null);
        __decorate([
            public_1.Memoize.decorator()
        ], ServiceClientInstrumentation.prototype, "getStandardQuery", null);
        __decorate([
            public_1.Memoize.decorator()
        ], ServiceClientInstrumentation.prototype, "getTestingQuery", null);
        ServiceClientInstrumentation = ServiceClientInstrumentation_1 = __decorate([
            public_1.logTag()
        ], ServiceClientInstrumentation);
        return ServiceClientInstrumentation;
    }());
    exports.ServiceClientInstrumentation = ServiceClientInstrumentation;
});
//# sourceMappingURL=ServiceClientInstrumentation.js.map