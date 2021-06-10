var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
define(["require", "exports", "rxjs", "rxjs/operators", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/public", "../../pages/applauncher/public", "../../pages/core/livetv/livetvplayer.service", "../../translation/public", "./Instrumentation.errors", "../usagetracker/public", "../../framework/public", "src/src-de-telekom/caching/public"], function (require, exports, rxjs_1, operators_1, public_1, public_2, public_3, public_4, public_5, livetvplayer_service_1, public_6, Instrumentation_errors_1, public_7, public_8, public_9) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InstrumentationService = void 0;
    var InstrumentationService = (function (_super) {
        __extends(InstrumentationService, _super);
        function InstrumentationService() {
            var _this = _super.call(this) || this;
            _this.eventManager = new public_4.EventManager();
            _this.dialogButtons = [
                {
                    autofocus: false,
                    icon: public_2.Css.sprites.A_IC_029_2_36x36,
                    id: "cancel",
                    text: public_6.messagesCore.ERROR_DIALOG_BUTTON_CANCEL
                }
            ];
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("constructor", InstrumentationService_1.TAG)); });
            InstrumentationService_1.instrumentationServiceMessageSubject
                .subscribe({ next: function (data) { return public_4.Logger.debug(function (log) { return log(public_4.LogMsg("onMessage: '" + data.message + "'" + (data.value ? " - '" + public_4.StringTools.dataStringify(data.value) + "'" : ""), InstrumentationService_1.TAG)); }); } });
            _this.mqttStateStatistic = {
                counterConnected: 0,
                counterDisconnected: 0,
                counterReconnected: 0,
                counterError: 0,
                lastConnectionTime: undefined
            };
            _this.initializeMqttMessageHandler();
            return _this;
        }
        InstrumentationService_1 = InstrumentationService;
        InstrumentationService.prototype.broadcastGetContext = function (message) {
            this.eventManager.broadcast(InstrumentationService_1.MqttGetContextEventName, message);
        };
        InstrumentationService.prototype.getStateStatistic = function () {
            return this.mqttStateStatistic;
        };
        InstrumentationService.prototype.getMqttState = function () {
            return this.mqttState;
        };
        InstrumentationService.prototype.getMqttStateDisplay = function () {
            switch (this.mqttState) {
                case "connected":
                    return public_6.messagesCore.System_BrokerStatus_connected;
                case "error":
                    return public_6.messagesCore.System_BrokerStatus_error;
                case "disconnected":
                    return public_6.messagesCore.System_BrokerStatus_disconnected;
                case "offline":
                    return public_6.messagesCore.System_BrokerStatus_offline;
                case "reconnect":
                    return public_6.messagesCore.System_BrokerStatus_connected;
                default:
                    return public_6.messagesCore.System_BrokerStatus_notConnected;
            }
        };
        InstrumentationService.prototype.getDeviceRegistrationState = function () {
            return public_3.ApplicationClient.instrumentationManagement.getDeviceRegistrationState();
        };
        InstrumentationService.prototype.onGetContextEvent = function (evtHandlerFunction) {
            return this.eventManager.on(InstrumentationService_1.MqttGetContextEventName, function (message) {
                evtHandlerFunction(message);
                return false;
            }, InstrumentationService_1.TAG);
        };
        Object.defineProperty(InstrumentationService, "onMessage", {
            get: function () {
                return InstrumentationService_1.instrumentationServiceMessageSubject;
            },
            enumerable: false,
            configurable: true
        });
        InstrumentationService.prototype.startKeyRecording = function (serviceRootTopic) {
            var _this = this;
            if (!this.keyRecordingSubscription) {
                InstrumentationService_1.instrumentationServiceMessageSubject.next({ message: "StartRecording" });
                var observableKeyHandler = public_3.ServiceClientContextInstrumentation.instance.serviceClient
                    .connect()
                    .pipe(operators_1.mergeMap(function (_a) {
                    var client = _a[0], topicInformation = _a[1];
                    var messageStartRecording = { $type: "services.instrumentation.controlrecording", action: "start" };
                    return client
                        .observeReply(serviceRootTopic + "/_command", { $replyToTopic: topicInformation.testing.deviceTopic + "/_reply", payload: messageStartRecording })
                        .pipe(public_4.filterMqttMessage("services.instrumentation.controlrecording"), operators_1.filter(function (message) { return message.payload.action === "started" && public_4.Guard.isDefined(message.$sessionId); }), operators_1.tap(function () { return InstrumentationService_1.instrumentationServiceMessageSubject.next({ message: "RecordingStarted" }); }), operators_1.mergeMap(function (message) { return _this.handleKeys().pipe(operators_1.map(function (keyMessage) { return ({ message: keyMessage, client: client, topicInformation: topicInformation, sessionId: message.$sessionId }); })); }));
                }), operators_1.publish(), operators_1.refCount());
                var observableStopMessage = observableKeyHandler
                    .pipe(operators_1.filter(function (_a) {
                    var message = _a.message;
                    return (message.$type === "services.instrumentation.controlrecording") && (message.action === "stop");
                }), operators_1.mergeMap(function (_a) {
                    var message = _a.message, client = _a.client, topicInformation = _a.topicInformation, sessionId = _a.sessionId;
                    InstrumentationService_1.instrumentationServiceMessageSubject.next({ message: "StopRecording" });
                    return client.observeReply(serviceRootTopic + "/_command", { $replyToTopic: topicInformation.testing.deviceTopic + "/_reply", $sessionId: sessionId, $timeStamp: Date.now(), payload: message });
                }), public_4.filterMqttMessage("services.instrumentation.controlrecording"), operators_1.filter(function (message) { return message.payload.action === "stopped"; }), operators_1.tap(function () {
                    if (public_4.Guard.isDefined(_this.keyRecordingSubscription)) {
                        _this.keyRecordingSubscription.unsubscribe();
                        _this.keyRecordingSubscription = undefined;
                    }
                    InstrumentationService_1.instrumentationServiceMessageSubject.next({ message: "RecordingStopped" });
                }));
                var observableActionMessage = observableKeyHandler
                    .pipe(operators_1.filter(function (_a) {
                    var message = _a.message;
                    return (message.$type !== "services.instrumentation.controlrecording");
                }), operators_1.mergeMap(function (_a) {
                    var message = _a.message, client = _a.client, sessionId = _a.sessionId;
                    return client.publish(serviceRootTopic + "/_command", { $sessionId: sessionId, $timeStamp: Date.now(), payload: message });
                }));
                this.keyRecordingSubscription = rxjs_1.merge(observableStopMessage, observableActionMessage).subscribe();
            }
        };
        InstrumentationService.prototype.handleKeys = function () {
            var beforeKeyObservable = new rxjs_1.Observable(function (subscriber) {
                var onBeforeKeyHandler = public_1.TVKeyEventManagerService.getInstance()
                    .onBefore(function (event) {
                    var isHandled = false;
                    try {
                        switch (event.virtualKey) {
                            case public_1.TVKeyCodeConfig.RED_KEY:
                            case public_1.TVKeyCodeConfig.YELLOW_KEY: {
                                subscriber.next(event);
                                isHandled = true;
                                break;
                            }
                            case public_1.TVKeyCodeConfig.AUTOCLOSE_1_KEY:
                            case public_1.TVKeyCodeConfig.AUTOCLOSE_2_KEY:
                            case public_1.TVKeyCodeConfig.KEYEVENT_UP_KEY: {
                                break;
                            }
                            default: {
                                subscriber.next(event);
                                break;
                            }
                        }
                    }
                    finally { }
                    return isHandled;
                }, InstrumentationService_1.TAG);
                return function () {
                    onBeforeKeyHandler();
                };
            });
            var keyEventsStartEnd = beforeKeyObservable
                .pipe(operators_1.mergeMap(function (item) { return rxjs_1.merge(rxjs_1.of({ id: 1, item: item }), rxjs_1.of({ id: 2, item: item })); }), operators_1.share());
            var trigger = keyEventsStartEnd
                .pipe(operators_1.map(function (item) { return item.item; }), operators_1.switchMap(function (item) {
                return rxjs_1.merge(rxjs_1.of(item), rxjs_1.timer(500)).pipe(operators_1.take(2));
            }), operators_1.scan(function (a, v) {
                return !public_4.Guard.isNumber(v) && (v.virtualKey === public_1.TVKeyCodeConfig.YELLOW_KEY)
                    ? a == 2 ? -1 : a + 1
                    : -1;
            }, -1), operators_1.filter(function (item) { return item == -1; }));
            var result = keyEventsStartEnd
                .pipe(operators_1.filter(function (item) { return item.id == 1; }), operators_1.map(function (item) { return item.item; }), operators_1.buffer(trigger), operators_1.filter(function (item) { return item.length > 0; }));
            var redKeyMessage = result
                .pipe(operators_1.filter(function (item) { return (item.length === 1) && (item[0].virtualKey === public_1.TVKeyCodeConfig.RED_KEY); }), operators_1.map(function () { return ({ action: "stop", $type: "services.instrumentation.controlrecording" }); }));
            var snapshotMessage = result
                .pipe(operators_1.filter(function (item) { return (item.length === 1) && (item[0].virtualKey === public_1.TVKeyCodeConfig.YELLOW_KEY); }), operators_1.map(function () { return ({ action: "send", rootElement: window.document.body.outerHTML, $type: "services.instrumentation.snapshot" }); }));
            var virtualKeyMessage = result
                .pipe(operators_1.filter(function (item) { return (item.length === 1) && (item[0].virtualKey !== public_1.TVKeyCodeConfig.YELLOW_KEY); }), operators_1.map(function (item) { return ({ virtualKey: item[0].virtualKey, $type: "services.keyevent.sendkey" }); }));
            return rxjs_1.merge(redKeyMessage, snapshotMessage, virtualKeyMessage);
        };
        InstrumentationService.prototype.showConnectionErrorDialog = function () {
            var data = {
                title: public_1.Filter.message(public_1.Filter.context(), public_6.messagesCore.MQTT_CONNECTIONERROR_TITLE),
                message: public_1.Filter.message(public_1.Filter.context(), public_6.messagesCore.MQTT_CONNECTIONERROR_TEXT),
                extraData: {
                    checkboxText: public_1.Filter.message(public_1.Filter.context(), public_6.messagesCore.MQTT_CONNECTIONERROR_CHECKBOX),
                    isChecked: true,
                    withCheckbox: true
                }
            };
            var buttons = [
                {
                    autofocus: false,
                    icon: public_2.Css.sprites.A_IC_029_2_36x36,
                    id: "cancel",
                    text: public_6.messagesCore.STB_FIRSTTIMEUSAGE_CANCEL
                },
                {
                    autofocus: true,
                    icon: public_2.Css.sprites.A_IC_009_2_36x36,
                    id: "confirm",
                    text: public_6.messagesCore.STB_FIRSTTIMEUSAGE_CONFIRM
                }
            ];
            if (!public_3.ApplicationClient.powerManagement.isInStandbyMode()) {
                public_1.TVDialogHostService.getInstance().showSystem(data, buttons).result()
                    .then(function (result) {
                    var _a;
                    if (result.resultId == "confirm" && ((_a = result.extraData) === null || _a === void 0 ? void 0 : _a.isChecked)) {
                        public_3.ApplicationClient.instrumentationManagement.setRemoteControlAllowed(false);
                    }
                });
            }
        };
        InstrumentationService.prototype.initializeMqttMessageHandler = function () {
            var _this = this;
            public_4.MqttClient
                .onStateSubject
                .subscribe({
                next: function (data) {
                    _this.mqttState = data;
                    if (data == "disconnected") {
                        _this.mqttStateStatistic.counterDisconnected++;
                        public_4.Logger.warn(function (log) { return log(public_4.LogMsg("Broker connection is disconnected.", InstrumentationService_1.TAG)); });
                    }
                    else if (data == "connected") {
                        _this.mqttStateStatistic.counterConnected++;
                        _this.mqttStateStatistic.lastConnectionTime = new Date();
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("Broker is connected.", InstrumentationService_1.TAG)); });
                    }
                    else if (data == "reconnect") {
                        _this.mqttStateStatistic.counterReconnected++;
                        _this.mqttStateStatistic.lastConnectionTime = new Date();
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("Broker is reconnected.", InstrumentationService_1.TAG)); });
                    }
                    else if (data == "error") {
                        _this.mqttStateStatistic.counterError++;
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("Broker in in error state.", InstrumentationService_1.TAG)); });
                    }
                }
            });
            var retryAttempts = 0;
            public_3.ApplicationClient
                .instrumentationManagement
                .getQueryObservable(["standard", "testing"])
                .pipe(operators_1.mergeMap(function (_a) {
                var client = _a.client, message = _a.message;
                return rxjs_1.of(message)
                    .pipe(public_4.filterMqttMessage("services.route.getstatus"), operators_1.mergeMap(function (item) {
                    return (item.$correlationId && item.$replyToTopic) ? rxjs_1.of({ correlationId: item.$correlationId, replyToTopic: item.$replyToTopic }) : rxjs_1.NEVER;
                }), operators_1.mergeMap(function (_a) {
                    var correlationId = _a.correlationId, replyToTopic = _a.replyToTopic;
                    return rxjs_1.combineLatest([rxjs_1.of(correlationId), rxjs_1.of(replyToTopic)]);
                }), operators_1.mergeMap(function (_a) {
                    var _b;
                    var correlationId = _a[0], replyToTopic = _a[1];
                    var statusMessage = {
                        $type: "services.route.returnstatus",
                        intent: {
                            pathname: public_1.RouteService.getInstance().location.intent.pathname,
                            data: public_1.RouteService.getInstance().location.intent.data
                        },
                        basePath: (_b = public_1.RouteService.getInstance().getBasePath()) === null || _b === void 0 ? void 0 : _b.pathname
                    };
                    return client.publish(replyToTopic, { $correlationId: correlationId, payload: statusMessage });
                }));
            }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x0D), operators_1.retryWhen(function (attempts) { return attempts.pipe(operators_1.mergeMap(function (error) {
                if (++retryAttempts > public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard) {
                    retryAttempts = 0;
                    return rxjs_1.throwError(error);
                }
                else {
                    _this.showConnectionErrorDialog();
                }
                return rxjs_1.timer(public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard);
            })); }), operators_1.tap(function () {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("retry finished", InstrumentationService_1.TAG)); });
            }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getCommandObservable(["standard", "testing"])
                .pipe(operators_1.map(function (_a) {
                var message = _a.message;
                return message;
            }), public_4.filterMqttMessage("services.notification.show"), operators_1.tap(function (message) { return public_1.TVNotificationService.getInstance().notify(message.payload); }), operators_1.tap(function (message) {
                var tracker = public_7.TVUsageTrackerService.getInstance().Tracker;
                if (tracker && message.trackingInformation) {
                    tracker.trackRemoteMessage(message);
                }
            }), operators_1.tap(function (message) { return message.errorInformation ? public_3.ApplicationClient.instrumentationManagement.pushSqmEvent(message.errorInformation) : null; }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x02), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getCommandObservable(["standard", "testing"])
                .pipe(operators_1.map(function (_a) {
                var message = _a.message;
                return message;
            }), public_4.filterMqttMessage("services.livetv.playcontent"), operators_1.tap(function (item) {
                var funcExecuteMessage = function () {
                    var _a, _b;
                    switch (item.payload.contentType) {
                        case "vod": {
                            if (public_4.Feature.has(public_4.FeatureItems.videoondemand, public_4.FeatureRights.viewItems)) {
                                var vodData = {
                                    mediaId: item.payload.contentId,
                                    startPosition: ((_a = item.payload.startPositionSeconds) === null || _a === void 0 ? void 0 : _a.toString()) || "",
                                    contentId: "",
                                    contentType: "2",
                                    useBookMark: "",
                                    EventType: "StartPlayRequest"
                                };
                                public_1.RouteService.getInstance().startIntent(new public_1.IntentVod.PlayMovie(vodData));
                            }
                            else {
                                public_1.TVNotificationService.getInstance().notifyInfo(public_6.messagesCore.STB_TM094_1);
                            }
                            break;
                        }
                        case "vodtrailer": {
                            if (public_4.Feature.has(public_4.FeatureItems.videoondemand, public_4.FeatureRights.viewItems)) {
                                var vodData = {
                                    mediaId: item.payload.contentId,
                                    startPosition: ((_b = item.payload.startPositionSeconds) === null || _b === void 0 ? void 0 : _b.toString()) || "",
                                    contentId: "",
                                    contentType: "10",
                                    useBookMark: "",
                                    EventType: "StartPlayRequest"
                                };
                                public_1.RouteService.getInstance().startIntent(new public_1.IntentVod.PlayTrailer(vodData));
                            }
                            else {
                                public_1.TVNotificationService.getInstance().notifyInfo(public_6.messagesCore.STB_TM094_1);
                            }
                            break;
                        }
                        case "program": {
                            public_3.ApplicationClient.programManagement
                                .getPrograms({ externalProgramIds: [item.payload.contentId], externalProgramIdType: public_3.zosaStatic.EXTERNAL_ID_TYPE_CMS })
                                .then(function (response) {
                                if (response && response.length > 0) {
                                    livetvplayer_service_1.LiveTVPlayerService.getInstance().instantRestart(response[0].zosaId);
                                }
                                else {
                                    throw new Instrumentation_errors_1.InstrumentationServiceError("Unable to find program with id: '" + item.payload.contentId + "'!");
                                }
                            })
                                .catch(public_4.ErrorManager.catchFunc(InstrumentationService_1, 0x16));
                        }
                    }
                };
                item.payload.navigateToPlayer ? public_1.RouteService.getInstance().startIntent(undefined, { type: "exit", exitMarkerName: "application", priority: "high" })
                    .then(function () { return public_1.RouteService.getInstance().startIntent(new public_1.IntentCore.LiveTV()); })
                    .then(function () { return funcExecuteMessage(); })
                    : funcExecuteMessage();
            }), operators_1.tap(function (message) {
                var tracker = public_7.TVUsageTrackerService.getInstance().Tracker;
                if (tracker && message.trackingInformation) {
                    tracker.trackRemoteMessage(message);
                }
            }), operators_1.tap(function (message) { return message.errorInformation ? public_3.ApplicationClient.instrumentationManagement.pushSqmEvent(message.errorInformation) : null; }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x03), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getQueryObservable(["standard", "testing"])
                .pipe(operators_1.mergeMap(function (_a) {
                var client = _a.client, message = _a.message;
                return rxjs_1.of(message)
                    .pipe(public_4.filterMqttMessage("services.settings.getvalues"), operators_1.mergeMap(function (item) {
                    return (item.$correlationId && item.$replyToTopic) ? rxjs_1.of({ correlationId: item.$correlationId, replyToTopic: item.$replyToTopic }) : rxjs_1.NEVER;
                }), operators_1.mergeMap(function (_a) {
                    var correlationId = _a.correlationId, replyToTopic = _a.replyToTopic;
                    return rxjs_1.combineLatest([rxjs_1.of(correlationId), rxjs_1.of(replyToTopic), public_3.ApplicationClient.instrumentationManagement.isRemoteControlAllowed(), public_3.ServiceClientZac.getRcsFlag()]);
                }), operators_1.mergeMap(function (_a) {
                    var correlationId = _a[0], replyToTopic = _a[1], remoteControlAllowed = _a[2], rcsFlagEnabled = _a[3];
                    var statusMessage = {
                        $type: "services.settings.returnstatus",
                        remoteControlAllowed: remoteControlAllowed,
                        rcsFlagEnabled: rcsFlagEnabled
                    };
                    return client.publish(replyToTopic, { $correlationId: correlationId, payload: statusMessage });
                }));
            }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x12), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getCommandObservable(["standard", "testing"])
                .pipe(operators_1.map(function (_a) {
                var message = _a.message;
                return message;
            }), public_4.filterMqttMessage("services.settings.setvalues"), operators_1.tap(function (item) {
                if (public_4.Guard.isDefined(item.payload.useMultiChannel)) {
                    item.payload.useMultiChannel ?
                        (public_3.ApplicationClient.settings.enableMultichannel()
                            .then(function () { return public_1.TVVolumeControlService.getInstance().setValue(public_1.TVVolumeControlService.getInstance().maximumValue); })) :
                        (public_3.ApplicationClient.settings.disableMultichannel()
                            .then(function () { return public_1.TVVolumeControlService.getInstance().setValue(public_1.TVVolumeControlService.getInstance().defaultValue); }));
                }
                if (public_4.Guard.isDefined(item.payload.directRecording)) {
                    public_3.ApplicationClient.recordingManagement.getGlobalRecordingSettings()
                        .then(function (settings) {
                        settings.directRecordingEnabled = item.payload.directRecording ? item.payload.directRecording : false;
                        public_3.ApplicationClient.recordingManagement.setGlobalRecordingSettings(settings);
                    });
                }
            }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x0F), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getCommandObservable(["testing"])
                .pipe(operators_1.map(function (_a) {
                var message = _a.message;
                return message;
            }), public_4.filterMqttMessage("services.instrumentation.controlremotesession"), operators_1.mergeMap(function (item) { return (item.payload.action && item.$sessionId) ? rxjs_1.of({ action: item.payload.action, sessionId: item.$sessionId }) : rxjs_1.NEVER; }), operators_1.tap(function (_a) {
                var action = _a.action, sessionId = _a.sessionId;
                switch (action) {
                    case "started": {
                        InstrumentationService_1.getInstance().runningRemoteSession = sessionId;
                        public_1.TVNotificationService.getInstance().notifyInfo("RemoteSession started!");
                        break;
                    }
                    case "stopped": {
                        public_1.TVNotificationService.getInstance().notifyInfo("RemoteSession stopped!");
                        InstrumentationService_1.getInstance().runningRemoteSession = undefined;
                        break;
                    }
                }
            }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x04), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getCommandObservable(["testing"])
                .pipe(operators_1.map(function (_a) {
                var message = _a.message;
                return message;
            }), public_4.filterMqttMessage("services.instrumentation.testresult"), operators_1.mergeMap(function (item) { return (item.$sessionId) ? rxjs_1.of({ sessionId: item.$sessionId, result: item.payload.lastRun.result, payload: item.payload.lastRun.payload }) : rxjs_1.NEVER; }), operators_1.tap(function (_a) {
                var sessionId = _a.sessionId, result = _a.result, payload = _a.payload;
                switch (result) {
                    case "success": {
                        public_1.TVNotificationService.getInstance().notifySuccess("RemoteSession successfully executed!");
                        InstrumentationService_1.getInstance().lastRemoteSessionResult = undefined;
                        break;
                    }
                    case "failed": {
                        public_1.TVNotificationService.getInstance().notifyError("RemoteSession failed!");
                        InstrumentationService_1.getInstance().lastRemoteSessionResult = payload;
                        break;
                    }
                }
            }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x13), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getCommandObservable(["standard", "testing"])
                .pipe(operators_1.mergeMap(function (_a) {
                var client = _a.client, message = _a.message;
                return rxjs_1.of(message)
                    .pipe(public_4.filterMqttMessage("services.instrumentation.snapshot"), operators_1.mergeMap(function (item) { return (item.payload.action === "request" && item.$replyToTopic) ? rxjs_1.of({ correlationId: item.$correlationId, replyToTopic: item.$replyToTopic }) : rxjs_1.NEVER; }), operators_1.mergeMap(function (_a) {
                    var correlationId = _a.correlationId, replyToTopic = _a.replyToTopic;
                    var snapshot = { action: "send", rootElement: window.document.body.outerHTML, $type: "services.instrumentation.snapshot" };
                    return client.publish(replyToTopic, { payload: snapshot, $correlationId: correlationId });
                }));
            }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x05), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getCommandObservable(["standard", "testing"])
                .pipe(operators_1.map(function (_a) {
                var message = _a.message;
                return message;
            }), public_4.filterMqttMessage("services.systemdialog.show"), operators_1.tap(function (item) { return public_1.TVDialogHostService.getInstance().showSystem(item.payload, _this.dialogButtons); }), operators_1.tap(function (message) {
                var tracker = public_7.TVUsageTrackerService.getInstance().Tracker;
                if (tracker && message.trackingInformation) {
                    tracker.trackRemoteMessage(message);
                }
            }), operators_1.tap(function (message) { return message.errorInformation ? public_3.ApplicationClient.instrumentationManagement.pushSqmEvent(message.errorInformation) : null; }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x0A), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            var statusOperator = function (deviceType) {
                return rxjs_1.pipe(operators_1.mergeMap(function (_a) {
                    var client = _a.client, topicInformation = _a.topicInformation, message = _a.message;
                    return rxjs_1.of(message)
                        .pipe(public_4.filterMqttMessage("services.instrumentation.getstatus"), operators_1.mergeMap(function (item) {
                        return (item.$correlationId && item.$replyToTopic) ? rxjs_1.of({ correlationId: item.$correlationId, replyToTopic: item.$replyToTopic }) : rxjs_1.NEVER;
                    }), operators_1.mergeMap(function (_a) {
                        var correlationId = _a.correlationId, replyToTopic = _a.replyToTopic;
                        return rxjs_1.combineLatest([rxjs_1.of(correlationId), rxjs_1.of(replyToTopic), public_3.ApplicationClient.deviceManagement.getMyDevice()]);
                    }), operators_1.mergeMap(function (_a) {
                        var _b;
                        var correlationId = _a[0], replyToTopic = _a[1], deviceInfo = _a[2];
                        var statusMessage = {
                            $type: "services.instrumentation.returnstatus",
                            description: public_3.ApplicationClient.system.getUiVersion(),
                            name: deviceInfo.device.name || deviceInfo.device.deviceModel || "STB UI",
                            physicalId: deviceInfo.device.physicalId,
                            deviceModel: deviceInfo.device.deviceModel,
                            deviceName: (_b = deviceInfo.device.name) !== null && _b !== void 0 ? _b : undefined,
                            isMaster: deviceInfo.isMaster,
                            instanceId: "",
                            objectType: "stbClient",
                            rootTopic: (deviceType === "standard") ? topicInformation.device.deviceTopic : topicInformation.testing.deviceTopic,
                            stateStatistic: _this.mqttStateStatistic,
                            features: {
                                remoteMessageGroupSearchSupported: public_4.Feature.has(public_4.FeatureItems.remoteMessageGroupSearch, public_4.FeatureRights.viewItems),
                                sendRestrictedGroupedResults: true,
                                sendMainMenu: true
                            },
                            intents: public_8.FlexActionMapper.remoteSupportedIntents()
                        };
                        return client.publish(replyToTopic, { $correlationId: correlationId, payload: statusMessage });
                    }));
                }));
            };
            public_3.ApplicationClient
                .instrumentationManagement
                .getQueryObservable(["standard"])
                .pipe(statusOperator("standard"), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x06), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getQueryObservable(["testing"])
                .pipe(statusOperator("testing"), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x07), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getCommandObservable(["standard", "testing"])
                .pipe(operators_1.map(function (_a) {
                var message = _a.message;
                return message;
            }), public_4.filterMqttMessage("services.keyevent.sendkey"), operators_1.tap(function (item) {
                var virtualKey = item.payload.virtualKey ? item.payload.virtualKey.toString() : undefined;
                var blackList = [public_1.TVKeyCodeConfig.VOICE_KEY.toString()];
                if (virtualKey && blackList.indexOf(virtualKey) == -1) {
                    var resolvedKey = public_1.TVKeyEventManagerService.getInstance().resolveVirtualKey(virtualKey);
                    if (public_5.AppLauncherService.getInstance().hasRunningApplication &&
                        ((resolvedKey === null || resolvedKey === void 0 ? void 0 : resolvedKey.keyCode) && resolvedKey.keyCode < 990000)) {
                        var replacedVirtualKey = resolvedKey.virtualKey == public_1.TVKeyCodeConfig.PAUSE_KEY || resolvedKey.virtualKey == public_1.TVKeyCodeConfig.PLAY_KEY ? public_1.TVKeyCodeConfig.PAUSEPLAY_KEY : resolvedKey.virtualKey;
                        var replacedKey = public_1.TVKeyEventManagerService.getInstance().resolveVirtualKey(replacedVirtualKey);
                        var keyCode_1 = (replacedKey === null || replacedKey === void 0 ? void 0 : replacedKey.keyCode) ? replacedKey === null || replacedKey === void 0 ? void 0 : replacedKey.keyCode.toString() : resolvedKey.keyCode.toString();
                        var result_1 = public_3.ApplicationClient.instrumentationManagement.sendVoiceKey(keyCode_1);
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("active app detected and send keycode ->" + keyCode_1 + " to TMW with result -> " + result_1, InstrumentationService_1.TAG)); });
                    }
                    else {
                        public_1.TVKeyEventManagerService.getInstance().sendVirtualKey(virtualKey);
                    }
                }
            }), operators_1.tap(function (message) {
                var tracker = public_7.TVUsageTrackerService.getInstance().Tracker;
                if (tracker && message.trackingInformation) {
                    tracker.trackRemoteMessage(message);
                }
            }), operators_1.tap(function (message) { return message.errorInformation ? public_3.ApplicationClient.instrumentationManagement.pushSqmEvent(message.errorInformation) : null; }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x08), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getCommandObservable(["standard", "testing"])
                .pipe(operators_1.map(function (_a) {
                var message = _a.message;
                return message;
            }), public_4.filterMqttMessage("services.remote.show"), operators_1.tap(function (message) {
                var tracker = public_7.TVUsageTrackerService.getInstance().Tracker;
                if (tracker && message.trackingInformation) {
                    tracker.trackRemoteMessage(message);
                }
            }), operators_1.map(function (item) { return item.payload; }), public_1.RemoteService.getInstance().notifyOperator(), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x09), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getCommandObservable(["standard", "testing"])
                .pipe(operators_1.map(function (_a) {
                var message = _a.message;
                return message;
            }), public_4.filterMqttMessage("services.remote.hide"), operators_1.mergeMap(function () {
                public_1.RemoteService.getInstance().fadeOutLayer();
                return rxjs_1.timer(public_2.Css.transitions.middleMs);
            }), operators_1.tap(function () { return public_1.RemoteService.getInstance().hideLayer(); }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x14), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient.
                instrumentationManagement.
                getCommandObservable(["standard"])
                .pipe(operators_1.tap(function (item) {
                var _a, _b;
                if (item.message.$type == "message" &&
                    ((_a = item.message.mqttMessage.payload) === null || _a === void 0 ? void 0 : _a.$type) != "services.remote.show" &&
                    ((_b = item.message.mqttMessage.payload) === null || _b === void 0 ? void 0 : _b.$type) != "services.keyevent.sendkey") {
                    public_1.TVDialogHostService.getInstance().closeAllOpenDialogs("abortedByVoiceCommand");
                }
            }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x19), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getCommandObservableUnfiltered(["standard", "testing"])
                .pipe(operators_1.tap(function (message) {
                var _a;
                var item = message.message.$type == "message" ? message : undefined;
                if (item && public_3.ApplicationClient.instrumentationManagement.isCommandExecutionDisabled(item) && !(item.message.$type == "message" && ((_a = item.message.mqttMessage.payload) === null || _a === void 0 ? void 0 : _a.$type) == "services.remote.show")) {
                    public_1.TVNotificationService.getInstance().notifyInfo(public_3.ApplicationClient.instrumentationManagement.getCommandExecutionDisabledMessage());
                }
            }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x17), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getQueryObservable(["standard", "testing"])
                .pipe(operators_1.mergeMap(function (_a) {
                var client = _a.client, message = _a.message;
                return rxjs_1.of(message)
                    .pipe(public_4.filterMqttMessage("services.volume.getstatus"), operators_1.mergeMap(function (item) {
                    return (item.$correlationId && item.$replyToTopic) ? rxjs_1.of({ correlationId: item.$correlationId, replyToTopic: item.$replyToTopic }) : rxjs_1.NEVER;
                }), operators_1.mergeMap(function (_a) {
                    var correlationId = _a.correlationId, replyToTopic = _a.replyToTopic;
                    return rxjs_1.combineLatest([rxjs_1.of(correlationId), rxjs_1.of(replyToTopic), public_1.TVVolumeControlService.getInstance().getVolumeStatus()]);
                }), operators_1.mergeMap(function (_a) {
                    var correlationId = _a[0], replyToTopic = _a[1], volumeInfo = _a[2];
                    var statusMessage = {
                        $type: "services.volume.returnstatus",
                        volumeData: {
                            isMuted: volumeInfo.isMuted,
                            volume: volumeInfo.volume
                        },
                        useMultiChannel: volumeInfo.useMultiChannel
                    };
                    return client.publish(replyToTopic, { $correlationId: correlationId, payload: statusMessage });
                }));
            }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x0E), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getCommandObservable(["standard", "testing"])
                .pipe(operators_1.map(function (_a) {
                var message = _a.message;
                return message;
            }), public_4.filterMqttMessage("services.volume.setvalue"), operators_1.tap(function (item) { return public_1.TVVolumeControlService.getInstance().setValue(item.payload.volume, item.payload.volumeMode); }), operators_1.tap(function (message) {
                var tracker = public_7.TVUsageTrackerService.getInstance().Tracker;
                if (tracker && message.trackingInformation) {
                    tracker.trackRemoteMessage(message);
                }
            }), operators_1.tap(function (message) { return message.errorInformation ? public_3.ApplicationClient.instrumentationManagement.pushSqmEvent(message.errorInformation) : null; }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x10), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getQueryObservable(["standard", "testing"])
                .pipe(operators_1.mergeMap(function (_a) {
                var client = _a.client, message = _a.message;
                return rxjs_1.of(message)
                    .pipe(public_4.filterMqttMessage("services.context.getstatus"), operators_1.mergeMap(function (item) {
                    return (item.$correlationId && item.$replyToTopic) ? rxjs_1.of({ correlationId: item.$correlationId, replyToTopic: item.$replyToTopic }) : rxjs_1.NEVER;
                }), operators_1.mergeMap(function (_a) {
                    var correlationId = _a.correlationId, replyToTopic = _a.replyToTopic;
                    return rxjs_1.combineLatest(rxjs_1.of(correlationId), rxjs_1.of(replyToTopic));
                }), operators_1.mergeMap(function (_a) {
                    var _b, _c;
                    var correlationId = _a[0], replyToTopic = _a[1];
                    if (!((_c = (_b = public_1.RouteService.getInstance().location.intent) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.disableGetContextGlobal)) {
                        var message_1 = { searchContext: "" };
                        _this.broadcastGetContext(message_1);
                        var statusMessage = __assign({ $type: "services.context.returnstatus" }, message_1);
                        return client.publish(replyToTopic, { $correlationId: correlationId, payload: statusMessage });
                    }
                    return rxjs_1.NEVER;
                }));
            }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x11), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient
                .instrumentationManagement
                .getCommandObservable(["standard", "testing"])
                .pipe(operators_1.map(function (_a) {
                var message = _a.message;
                return message;
            }), public_4.filterMqttMessage("services.cache.clear"), operators_1.tap(function () { return public_9.CacheManager.next({ reason: "All" }); }), public_4.ErrorManager.catchOperator(InstrumentationService_1, 0x1A), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
        };
        var InstrumentationService_1;
        InstrumentationService.classID = 0xA04;
        InstrumentationService.MqttGetContextEventName = "MqttGetContextEventName";
        InstrumentationService.instrumentationServiceMessageSubject = new rxjs_1.Subject();
        InstrumentationService = InstrumentationService_1 = __decorate([
            public_4.logTag()
        ], InstrumentationService);
        return InstrumentationService;
    }(public_1.ReactBaseService));
    exports.InstrumentationService = InstrumentationService;
});
//# sourceMappingURL=instrumentation.service.js.map