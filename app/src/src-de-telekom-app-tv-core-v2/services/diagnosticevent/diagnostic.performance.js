var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "src/src-de-telekom-tv-core/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticPerformance = void 0;
    var DiagnosticPerformance = (function () {
        function DiagnosticPerformance() {
        }
        DiagnosticPerformance_1 = DiagnosticPerformance;
        DiagnosticPerformance.getMemoryHistoryItems = function () {
            return public_2.ApplicationClient.userStorage.readValue(this.saveMemoryUsageKey)
                .then(function (serializedValue) {
                if (!serializedValue || serializedValue.length == 0)
                    return [];
                var history = JSON.parse(serializedValue);
                var retVal = [];
                var _loop_1 = function (key) {
                    history.items[key].forEach(function (minifiedEvent) {
                        retVal.push({ intentPath: key, valueKb: minifiedEvent.v, timestamp: minifiedEvent.t });
                    });
                };
                for (var key in history.items) {
                    _loop_1(key);
                }
                return retVal;
            });
        };
        DiagnosticPerformance.saveMemoryUsageHistory = function (memoryUsageEvents) {
            var maxEventsCount = 60;
            if (memoryUsageEvents.length > maxEventsCount) {
                memoryUsageEvents = memoryUsageEvents.slice(memoryUsageEvents.length - maxEventsCount);
            }
            var eventsForSerialization = memoryUsageEvents.map(function (event) { return ({
                timestamp: event.timestamp || 0,
                valueKb: event.data.value,
                intentPath: event.data.intentPath || "undefined"
            }); });
            var history = { items: {} };
            eventsForSerialization.forEach(function (event) {
                if (!history.items[event.intentPath]) {
                    history.items[event.intentPath] = [];
                }
                history.items[event.intentPath].push({ t: event.timestamp, v: event.valueKb });
            });
            var serializationString = JSON.stringify(history);
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("saveMemoryUsageHistory: '" + serializationString + "'", DiagnosticPerformance_1.TAG)); });
            return public_2.ApplicationClient.userStorage.writeValue(this.saveMemoryUsageKey, serializationString);
        };
        var DiagnosticPerformance_1;
        DiagnosticPerformance.saveMemoryUsageKey = "diagnosticeventservice.savememoryusage";
        __decorate([
            public_1.log2(function () { return ({ name: DiagnosticPerformance_1.TAG }); })
        ], DiagnosticPerformance, "saveMemoryUsageHistory", null);
        DiagnosticPerformance = DiagnosticPerformance_1 = __decorate([
            public_1.logTag()
        ], DiagnosticPerformance);
        return DiagnosticPerformance;
    }());
    exports.DiagnosticPerformance = DiagnosticPerformance;
});
//# sourceMappingURL=diagnostic.performance.js.map