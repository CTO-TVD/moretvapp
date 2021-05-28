var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "rxjs", "src/src-de-telekom/typing/guard", "src/src-de-telekom/public"], function (require, exports, rxjs_1, guard_1, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EventLog = exports.ProcessState = exports.Performance = exports.DeviceActionEventType = void 0;
    var DeviceActionEventType;
    (function (DeviceActionEventType) {
        DeviceActionEventType["PowerStateStandby"] = "PowerStateStandby";
        DeviceActionEventType["PowerKeyPress"] = "PowerKeyPress";
        DeviceActionEventType["PowerStateActive"] = "PowerStateActive";
        DeviceActionEventType["StartupInit"] = "StartupInit";
        DeviceActionEventType["RootIntentIdentified"] = "RootIntentIdentified";
        DeviceActionEventType["ResetAvsContentLock"] = "ResetAvsContentLock";
        DeviceActionEventType["ResetPconContentLock"] = "ResetPconContentLock";
        DeviceActionEventType["HdcpEngaged"] = "HdcpEngaged";
        DeviceActionEventType["PlayUrl"] = "PlayUrl";
        DeviceActionEventType["LiveTvComponentInit"] = "LiveTvComponentInit";
        DeviceActionEventType["PlayerConnecting"] = "PlayerConnecting";
        DeviceActionEventType["PlayerBuffering"] = "PlayerBuffering";
        DeviceActionEventType["PlayerPlaying"] = "PlayerPlaying";
        DeviceActionEventType["PlayerDisconnected"] = "PlayerDisconnected";
        DeviceActionEventType["PlayerError"] = "PlayerError";
        DeviceActionEventType["TuneFromEpg"] = "TuneFromEpg";
    })(DeviceActionEventType = exports.DeviceActionEventType || (exports.DeviceActionEventType = {}));
    var Performance = (function () {
        function Performance() {
        }
        Performance.memoryInfoEnabled = function () {
            return guard_1.Guard.isDefined(window.getFreeMemoryInBytes);
        };
        Performance.getMemoryInfo = function (getFreeMemory, getUsedMemory) {
            if (getFreeMemory === void 0) { getFreeMemory = true; }
            if (getUsedMemory === void 0) { getUsedMemory = true; }
            var memoryBrowser = window;
            return {
                freeMemoryKb: getFreeMemory && memoryBrowser.getFreeMemoryInBytes ? Math.round(memoryBrowser.getFreeMemoryInBytes() / 1024) : undefined,
                usedMemoryKb: getUsedMemory && memoryBrowser.getUsedMemoryInBytes ? Math.round(memoryBrowser.getUsedMemoryInBytes() / 1024) : undefined
            };
        };
        Performance.executePromiseInPerformanceContext = function (componentName, processName, pageTitle, laneTitle, promise, getNumElementsFunc, exceptionBehaviour) {
            Performance.MainMenuPageLoadPerformanceObservable.next({
                componentName: componentName,
                processName: processName,
                data: { pageTitle: pageTitle, laneTitle: laneTitle, state: ProcessState.started }
            });
            return promise
                .then(function (value) {
                Performance.MainMenuPageLoadPerformanceObservable.next({
                    componentName: componentName,
                    processName: processName,
                    data: { pageTitle: pageTitle, laneTitle: laneTitle, numElements: getNumElementsFunc(value), state: ProcessState.successful }
                });
                return value;
            })
                .catch(function (error) {
                public_1.ErrorManager.catch(error, exceptionBehaviour.classID, exceptionBehaviour.codeID);
                Performance.MainMenuPageLoadPerformanceObservable.next({
                    componentName: componentName,
                    processName: processName,
                    data: { pageTitle: pageTitle, laneTitle: laneTitle, error: error, state: ProcessState.failed }
                });
                if (!exceptionBehaviour.throwException) {
                    return exceptionBehaviour.returnValue;
                }
                throw error;
            });
        };
        Performance.MainMenuPageLoadPerformanceObservable = new rxjs_1.Subject();
        Performance.DeviceActionEventObservable = new rxjs_1.Subject();
        Performance.ErrorEventObservable = new rxjs_1.Subject();
        return Performance;
    }());
    exports.Performance = Performance;
    var ProcessState;
    (function (ProcessState) {
        ProcessState["started"] = "started";
        ProcessState["successful"] = "successful";
        ProcessState["failed"] = "failed";
    })(ProcessState = exports.ProcessState || (exports.ProcessState = {}));
    var EventLog = (function () {
        function EventLog(type, maxEntries) {
            if (maxEntries === void 0) { maxEntries = 1000; }
            this.events = [];
            this.maxEntries = maxEntries;
            this.name = type;
        }
        EventLog.prototype.getEventLogName = function () {
            return this.name;
        };
        EventLog.prototype.addEvent = function (event) {
            if (guard_1.Guard.isUndefined(event.timestamp)) {
                event.timestamp = new Date().valueOf();
            }
            this.events.push(event);
            while (this.events.length > this.maxEntries) {
                this.events.shift();
            }
        };
        EventLog.prototype.getEvents = function (filterParams) {
            return !filterParams ? this.events :
                this.events.filter(function (event) {
                    return (!filterParams.componentName || (event.componentName && event.componentName.toLowerCase() == filterParams.componentName.toLowerCase())) &&
                        (!filterParams.processName || (event.processName && event.processName.toLowerCase() == filterParams.processName.toLowerCase())) &&
                        (!filterParams.sessionId || event.sessionId == filterParams.sessionId);
                });
        };
        EventLog.prototype.removeAllEvents = function () {
            this.events = [];
        };
        __decorate([
            public_1.log2(function () { return ({ name: EventLog.TAG }); })
        ], EventLog.prototype, "getEvents", null);
        __decorate([
            public_1.log2(function () { return ({ name: EventLog.TAG }); })
        ], EventLog.prototype, "removeAllEvents", null);
        return EventLog;
    }());
    exports.EventLog = EventLog;
});
//# sourceMappingURL=applicationclient.performance.js.map