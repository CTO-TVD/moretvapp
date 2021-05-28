define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogLevel = void 0;
    var LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["error"] = 4] = "error";
        LogLevel[LogLevel["warn"] = 3] = "warn";
        LogLevel[LogLevel["info"] = 2] = "info";
        LogLevel[LogLevel["debug"] = 1] = "debug";
        LogLevel[LogLevel["verbose"] = 0] = "verbose";
    })(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
});
//# sourceMappingURL=ILogger.js.map