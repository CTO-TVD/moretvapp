var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define(["require", "exports", "src/src-de-telekom-tv-core/public", "./diagnostic.helper", "src/src-de-telekom/typing/guard"], function (require, exports, public_1, diagnostic_helper_1, guard_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticStartpage = void 0;
    var DiagnosticStartpage = (function () {
        function DiagnosticStartpage() {
        }
        DiagnosticStartpage.getStartpagePageResults = function (startPagePerformanceEvents) {
            var aggregatedEvents = DiagnosticStartpage.getStartPageMenuItemPerformanceEvents(startPagePerformanceEvents);
            return DiagnosticStartpage.convertToPageResults(aggregatedEvents);
        };
        DiagnosticStartpage.getStartPageMenuItemPerformanceEvents = function (startPagePerformanceEvents) {
            var menuItemPerformanceInfos = {};
            startPagePerformanceEvents.forEach(function (event) {
                var eventData = event.data;
                var pageTitle = ((eventData === null || eventData === void 0 ? void 0 : eventData.pageTitle) || "undefined").toLowerCase();
                if (!menuItemPerformanceInfos[pageTitle]) {
                    menuItemPerformanceInfos[pageTitle] = [];
                }
                menuItemPerformanceInfos[pageTitle].push(event);
            });
            return menuItemPerformanceInfos;
        };
        DiagnosticStartpage.convertToPageResults = function (allPagesEvents) {
            return Object.keys(allPagesEvents).map(function (pageName) {
                var pageEvents = allPagesEvents[pageName];
                var timestamps = __spreadArrays(pageEvents.map(function (item) { return item.timestamp || 0; }));
                var totalStartMs = Math.min.apply(Math, timestamps);
                var totalEndMs = Math.max.apply(Math, timestamps);
                return {
                    page: pageName,
                    updated: diagnostic_helper_1.DiagnosticHelper.millisecondsToDate(totalStartMs),
                    durationMs: totalEndMs - totalStartMs,
                    items: DiagnosticStartpage.aggregateToProcessResults(pageEvents)
                        .map(function (item) {
                        var _a, _b;
                        return ({
                            itemType: item.processName,
                            description: (_a = item.parameters) === null || _a === void 0 ? void 0 : _a.laneTitle,
                            durationMs: (item.end || 0) - (item.start || 0),
                            subItemsCount: ((_b = item.parameters) === null || _b === void 0 ? void 0 : _b.numElements) || 0,
                            offsetMs: guard_1.Guard.isNumber(item.start) ? item.start - totalStartMs : 0,
                            result: item.result,
                            error: item.error
                        });
                    })
                };
            });
        };
        DiagnosticStartpage.aggregateToProcessResults = function (pageEvents) {
            var pageElementEvents = {};
            var pageElementprocessResults = {};
            pageEvents.forEach(function (event) {
                var eventData = event.data;
                var key = event.componentName + "::" + event.processName + "::" + ((eventData === null || eventData === void 0 ? void 0 : eventData.laneTitle) || "undefined");
                if (!pageElementEvents[key]) {
                    pageElementEvents[key] = [];
                    pageElementprocessResults[key] = {
                        componentName: event.componentName || "",
                        processName: event.processName || ""
                    };
                }
                pageElementEvents[key].push(event);
            });
            var _loop_1 = function (key) {
                var comp_proc_result = pageElementprocessResults[key];
                pageElementEvents[key].forEach(function (comp_proc_event) {
                    switch (comp_proc_event.data.state) {
                        case public_1.ProcessState.started:
                            comp_proc_result.start = comp_proc_event.timestamp;
                            break;
                        case public_1.ProcessState.successful:
                            comp_proc_result.end = comp_proc_event.timestamp;
                            comp_proc_result.parameters = comp_proc_event.data;
                            comp_proc_result.result = "success";
                            break;
                        case public_1.ProcessState.failed:
                            comp_proc_result.end = comp_proc_event.timestamp;
                            comp_proc_result.parameters = comp_proc_event.data;
                            comp_proc_result.result = "failed";
                            comp_proc_result.error = comp_proc_event.data.error;
                            break;
                    }
                });
            };
            for (var key in pageElementEvents) {
                _loop_1(key);
            }
            return Object.keys(pageElementprocessResults).map(function (key) { return pageElementprocessResults[key]; });
        };
        return DiagnosticStartpage;
    }());
    exports.DiagnosticStartpage = DiagnosticStartpage;
});
//# sourceMappingURL=diagnostic.startpage.js.map