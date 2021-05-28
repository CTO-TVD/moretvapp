var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "rxjs", "rxjs/operators", "src/src-de-telekom/public", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/typing/guard", "src/src-de-telekom/diagnostic/public", "./diagnostic.performance"], function (require, exports, bluebird, rxjs_1, operators_1, public_1, public_2, public_3, guard_1, public_4, diagnostic_performance_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticEventService = void 0;
    var DiagnosticEventService = (function (_super) {
        __extends(DiagnosticEventService, _super);
        function DiagnosticEventService() {
            var _this = _super.call(this) || this;
            _this.eventLogs = {};
            _this.sessions = {};
            _this.suspendObservers = new rxjs_1.BehaviorSubject(true);
            _this.suspendObserversPerformanceCounter = new rxjs_1.BehaviorSubject(true);
            _this.eventLogs.DeviceAction = new public_3.EventLog("DeviceAction");
            _this.eventLogs.Errors = new public_3.EventLog("Errors");
            _this.eventLogs.StartPagePerformance = new public_3.EventLog("StartPagePerformance");
            _this.eventLogs.PerformanceCounter = new public_3.EventLog("PerformanceCounter");
            public_3.ApplicationClient.powerManagement.onSystemStartup(function (event) {
                _this.startupInformation = event;
            });
            public_3.ApplicationClient.performance.MainMenuPageLoadPerformanceObservable
                .pipe(public_1.suspend(_this.suspendObservers))
                .subscribe(function (data) { return _this.onMainMenuPageLoadPerformanceEvent(data); });
            public_3.ApplicationClient.performance.ErrorEventObservable
                .pipe(public_1.suspend(_this.suspendObservers), operators_1.filter(function (item) { return _this.filterError(item); }))
                .subscribe(function (data) { return _this.onErrorEvent(data); });
            public_3.ApplicationClient.performance.DeviceActionEventObservable
                .pipe(public_1.suspend(_this.suspendObservers))
                .subscribe(function (data) { return _this.onDeviceActionEvent(data); });
            public_4.DiagnosticManager.PerformanceCounterEventObservable
                .pipe(public_1.suspend(_this.suspendObserversPerformanceCounter))
                .subscribe(function (data) { return _this.onPerformanceCounterEvent(data); });
            public_1.ErrorManager.onError(function (errorData) {
                if (errorData) {
                    public_3.ApplicationClient.performance.ErrorEventObservable.next({ componentName: "ErrorManager", processName: "onError", data: errorData });
                }
            });
            _this.initializeMqttMessageHandler();
            bluebird.all([public_3.ApplicationClient.userStorage.getDiagnosticEventServiceEnabled(), public_3.ApplicationClient.userStorage.getDiagnosticEventServicePerformanceCounterEnabled()])
                .then(function (_a) {
                var enabled = _a[0], performanceCounterEnabled = _a[1];
                _this.suspendObservers.next(!enabled);
                _this.suspendObserversPerformanceCounter.next(!performanceCounterEnabled);
            })
                .finally(function () { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("DiagnosticEventService started successfully.", DiagnosticEventService_1.TAG)); }); });
            return _this;
        }
        DiagnosticEventService_1 = DiagnosticEventService;
        DiagnosticEventService.prototype.getDeviceActionEvents = function (filterParams) {
            return this.eventLogs.DeviceAction.getEvents(filterParams);
        };
        DiagnosticEventService.prototype.getErrorEvents = function (filterParams) {
            return this.eventLogs.Errors.getEvents(filterParams);
        };
        DiagnosticEventService.prototype.getStartPagePerformanceEvents = function (filterParams) {
            return this.eventLogs.StartPagePerformance.getEvents(filterParams);
        };
        DiagnosticEventService.prototype.getPerformanceCounterEvents = function (filterParams) {
            return this.eventLogs.PerformanceCounter.getEvents(filterParams);
        };
        DiagnosticEventService.prototype.filterError = function (errorEvent) {
            return errorEvent.data.error.errorID != new public_2.DialogAbortError("", "").errorID &&
                errorEvent.data.error.errorID != new public_2.OptionPanelServiceError("", "").errorID;
        };
        DiagnosticEventService.prototype.setObserversEnabled = function (enabled) {
            this.suspendObservers.next(!enabled);
        };
        DiagnosticEventService.prototype.setObserversPerformanceCounterEnabled = function (enabled) {
            this.suspendObserversPerformanceCounter.next(!enabled);
        };
        DiagnosticEventService.prototype.getSessions = function () {
            return this.sessions;
        };
        DiagnosticEventService.prototype.startSession = function (sessionId, sessionTimeoutSeconds) {
            var _this = this;
            if (this.sessions[sessionId]) {
                public_1.Logger.warn(function (log) { return log(public_1.LogMsg("Trace sessionId " + sessionId + " already exists and will be overridden.", DiagnosticEventService_1.TAG)); });
                delete this.sessions[sessionId];
            }
            else {
                this.stopSession();
            }
            this.currentSessionId = sessionId;
            this.sessions[sessionId] = { sessionId: sessionId, start: new Date().valueOf() };
            if (guard_1.Guard.isNumber(sessionTimeoutSeconds)) {
                this.sessionTimeoutHandle = setTimeout(function () {
                    _this.stopSession();
                    _this.sessionTimeoutHandle = undefined;
                }, sessionTimeoutSeconds * 1000);
            }
            return this.currentSessionId;
        };
        DiagnosticEventService.prototype.stopSession = function () {
            var stoppedSessionId;
            if (guard_1.Guard.isNumber(this.sessionTimeoutHandle)) {
                clearTimeout(this.sessionTimeoutHandle);
                this.sessionTimeoutHandle = undefined;
            }
            if (this.currentSessionId && this.sessions[this.currentSessionId]) {
                this.sessions[this.currentSessionId].end = new Date().valueOf();
                stoppedSessionId = this.currentSessionId;
            }
            this.currentSessionId = undefined;
            return stoppedSessionId;
        };
        DiagnosticEventService.prototype.getStartupInformation = function () {
            return this.startupInformation;
        };
        DiagnosticEventService.prototype.clearEventLogs = function () {
            var _this = this;
            Object.keys(this.eventLogs).forEach(function (eventLog) {
                _this.eventLogs[eventLog].removeAllEvents();
            });
        };
        DiagnosticEventService.prototype.onDeviceActionEvent = function (event) {
            switch (event.data) {
                case public_3.DeviceActionEventType.PowerStateStandby:
                    event.sessionId = this.startSession("WakeupFromStandby_" + new Date().valueOf(), 120);
                    break;
                case public_3.DeviceActionEventType.TuneFromEpg:
                    event.sessionId = this.startSession("TuneFromEpg_" + new Date().valueOf(), 20);
                    break;
                case public_3.DeviceActionEventType.PlayerPlaying:
                case public_3.DeviceActionEventType.PlayerError:
                    event.sessionId = this.stopSession();
                    break;
                default:
                    event.sessionId = this.currentSessionId;
                    break;
            }
            this.eventLogs.DeviceAction.addEvent(event);
        };
        DiagnosticEventService.prototype.onMainMenuPageLoadPerformanceEvent = function (event) {
            if (event.componentName == "MainMenu" && event.processName == "constructor") {
                this.eventLogs.StartPagePerformance.removeAllEvents();
            }
            else {
                event.sessionId = this.currentSessionId;
                this.eventLogs.StartPagePerformance.addEvent(event);
            }
        };
        DiagnosticEventService.prototype.onPerformanceCounterEvent = function (event) {
            var _a;
            event.sessionId = this.currentSessionId;
            var intentPath = public_2.RouteService.getInstance().location.intent.pathname;
            event.data.intentPath = intentPath == "/" ? (_a = public_2.RouteService.getInstance().getBasePath()) === null || _a === void 0 ? void 0 : _a.pathname : intentPath;
            this.eventLogs.PerformanceCounter.addEvent(event);
            if (event.data.counterType == "Memory") {
                var memoryUsageExceedsThreshold = guard_1.Guard.isNumber(this.previousFreeMemory) &&
                    this.previousFreeMemory > DiagnosticEventService_1.expectBrowserCrashThresholdKb &&
                    event.data.value <= DiagnosticEventService_1.expectBrowserCrashThresholdKb;
                if (memoryUsageExceedsThreshold) {
                    diagnostic_performance_1.DiagnosticPerformance.saveMemoryUsageHistory(this.getPerformanceCounterEvents());
                }
                this.previousFreeMemory = event.data.value;
            }
        };
        DiagnosticEventService.prototype.onErrorEvent = function (event) {
            event.sessionId = this.currentSessionId;
            this.eventLogs.Errors.addEvent(event);
        };
        DiagnosticEventService.prototype.initializeMqttMessageHandler = function () {
            var _this = this;
            public_3.ApplicationClient.instrumentationManagement.getQueryObservable(["standard", "testing"])
                .pipe(operators_1.mergeMap(function (_a) {
                var client = _a.client, message = _a.message;
                return rxjs_1.of(message)
                    .pipe(public_1.filterMqttMessage("services.diagnosticevent.geteventlog"), operators_1.mergeMap(function (item) {
                    return (item.$correlationId && item.$replyToTopic) ? rxjs_1.of({ correlationId: item.$correlationId, replyToTopic: item.$replyToTopic, filter: item.payload.filter }) : rxjs_1.NEVER;
                }), operators_1.mergeMap(function (_a) {
                    var correlationId = _a.correlationId, replyToTopic = _a.replyToTopic, filter = _a.filter;
                    return rxjs_1.combineLatest([rxjs_1.of(correlationId), rxjs_1.of(replyToTopic), rxjs_1.of(filter)]);
                }), operators_1.mergeMap(function (_a) {
                    var correlationId = _a[0], replyToTopic = _a[1], filter = _a[2];
                    var sysInfos = public_3.ServiceClientZac.getSystemInformation();
                    var statusMessage = {
                        $type: "services.diagnosticevent.eventlog",
                        eventLogInformation: {
                            tmwVersion: sysInfos.SwProductVariant,
                            uiVersion: public_3.ApplicationClient.system.getUiVersion(),
                            hwModel: "" + sysInfos.HwModel + (sysInfos.HwModelType ? " " + sysInfos.HwModelType : ""),
                            eventLogType: filter.eventLogType,
                            eventLogEvents: _this.eventLogs[filter.eventLogType].getEvents()
                        }
                    };
                    return client.publish(replyToTopic, { $correlationId: correlationId, payload: statusMessage });
                }));
            }), public_1.ErrorManager.catchOperator(DiagnosticEventService_1, 0x05), public_1.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
            public_3.ApplicationClient.instrumentationManagement.getQueryObservable(["standard", "testing"])
                .pipe(operators_1.mergeMap(function (_a) {
                var client = _a.client, message = _a.message;
                return rxjs_1.of(message)
                    .pipe(public_1.filterMqttMessage("services.diagnosticevent.getmemoryinfo"), operators_1.mergeMap(function (item) {
                    return (item.$correlationId && item.$replyToTopic) ? rxjs_1.of({ correlationId: item.$correlationId, replyToTopic: item.$replyToTopic }) : rxjs_1.NEVER;
                }), operators_1.mergeMap(function (_a) {
                    var correlationId = _a.correlationId, replyToTopic = _a.replyToTopic;
                    return rxjs_1.combineLatest([rxjs_1.of(correlationId), rxjs_1.of(replyToTopic)]);
                }), operators_1.mergeMap(function (_a) {
                    var correlationId = _a[0], replyToTopic = _a[1];
                    var memoryInfo = public_3.ApplicationClient.performance.getMemoryInfo();
                    var statusMessage = {
                        $type: "services.diagnosticevent.memoryinfo",
                        memoryUsed: memoryInfo.usedMemoryKb || 0,
                        memoryFree: memoryInfo.freeMemoryKb || 0
                    };
                    return client.publish(replyToTopic, { $correlationId: correlationId, payload: statusMessage });
                }));
            }), public_1.ErrorManager.catchOperator(DiagnosticEventService_1, 0x05), public_1.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
        };
        var DiagnosticEventService_1;
        DiagnosticEventService.classID = 0x75D;
        DiagnosticEventService.expectBrowserCrashThresholdKb = 15000;
        __decorate([
            public_1.log2(function () { return ({ name: DiagnosticEventService_1.TAG }); })
        ], DiagnosticEventService.prototype, "setObserversEnabled", null);
        __decorate([
            public_1.log2(function () { return ({ name: DiagnosticEventService_1.TAG }); })
        ], DiagnosticEventService.prototype, "setObserversPerformanceCounterEnabled", null);
        __decorate([
            public_1.log2(function () { return ({ name: DiagnosticEventService_1.TAG }); })
        ], DiagnosticEventService.prototype, "startSession", null);
        __decorate([
            public_1.log2(function () { return ({ name: DiagnosticEventService_1.TAG }); })
        ], DiagnosticEventService.prototype, "stopSession", null);
        __decorate([
            public_1.log2(function () { return ({ name: DiagnosticEventService_1.TAG }); })
        ], DiagnosticEventService.prototype, "clearEventLogs", null);
        __decorate([
            public_1.log2(function () { return ({ name: DiagnosticEventService_1.TAG }); })
        ], DiagnosticEventService.prototype, "onDeviceActionEvent", null);
        __decorate([
            public_1.log2(function () { return ({ name: DiagnosticEventService_1.TAG }); })
        ], DiagnosticEventService.prototype, "onMainMenuPageLoadPerformanceEvent", null);
        __decorate([
            public_1.log2(function () { return ({ name: DiagnosticEventService_1.TAG }); })
        ], DiagnosticEventService.prototype, "onPerformanceCounterEvent", null);
        __decorate([
            public_1.log2(function () { return ({ name: DiagnosticEventService_1.TAG }); })
        ], DiagnosticEventService.prototype, "onErrorEvent", null);
        DiagnosticEventService = DiagnosticEventService_1 = __decorate([
            public_1.logTag()
        ], DiagnosticEventService);
        return DiagnosticEventService;
    }(public_2.ReactBaseService));
    exports.DiagnosticEventService = DiagnosticEventService;
});
//# sourceMappingURL=diagnosticevent.service.js.map