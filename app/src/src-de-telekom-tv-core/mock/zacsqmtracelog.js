define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacSqmTraceLog = void 0;
    var ZacSqmTraceLog = (function () {
        function ZacSqmTraceLog() {
        }
        ZacSqmTraceLog.prototype.Call = function (name, parameters) {
            if (name === "PushTraceLogEntry") {
                var input = parameters;
                return input.Message;
            }
            return undefined;
        };
        ZacSqmTraceLog.prototype.registerEventListener = function (evtName, evtHandlerFunction) {
            var _this = this;
            if (evtName == "CustomAPIEvent") {
                this.evtHandlerFunc = evtHandlerFunction;
                setTimeout(function () {
                    if (_this.evtHandlerFunc) {
                        _this.evtHandlerFunc({ EventType: "SettingsChanged", Level: "2", Duration: "0", Server: "testserver", StartTime: Date.now().toString() });
                        _this.evtHandlerFunc({ EventType: "SessionStateChanged", SessionState: "Ongoing" });
                    }
                }, 3000);
                setTimeout(function () {
                    if (_this.evtHandlerFunc) {
                        _this.evtHandlerFunc({ EventType: "SessionStateChanged", SessionState: "Finished" });
                    }
                }, 20000);
            }
            return 0;
        };
        ZacSqmTraceLog.prototype.unregisterEventListener = function (evtName, id) {
        };
        return ZacSqmTraceLog;
    }());
    exports.ZacSqmTraceLog = ZacSqmTraceLog;
});
//# sourceMappingURL=zacsqmtracelog.js.map