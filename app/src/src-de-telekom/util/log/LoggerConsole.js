define(["require", "exports", "./ILogger", "../../Enums"], function (require, exports, ILogger_1, Enums_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoggerConsole = void 0;
    var LoggerConsole = (function () {
        function LoggerConsole() {
            this.logLevel = ILogger_1.LogLevel.info;
            this.verbose = console.debug.bind(console);
            this.debug = console.debug.bind(console);
            this.info = console.info.bind(console);
            this.warn = console.warn.bind(console);
            this.error = console.error.bind(console);
        }
        LoggerConsole.prototype.getLogLevel = function () {
            return this.logLevel;
        };
        LoggerConsole.prototype.setLogLevel = function (newlevel) {
            this.logLevel = newlevel;
            for (var _i = 0, _a = Enums_1.Enums.getValues(ILogger_1.LogLevel); _i < _a.length; _i++) {
                var level = _a[_i];
                var levelstr = ILogger_1.LogLevel[level];
                this[levelstr] = level >= newlevel ? console[level === ILogger_1.LogLevel.verbose ? ILogger_1.LogLevel[ILogger_1.LogLevel.debug] : levelstr].bind(console) : function () { };
            }
        };
        return LoggerConsole;
    }());
    exports.LoggerConsole = LoggerConsole;
});
//# sourceMappingURL=LoggerConsole.js.map