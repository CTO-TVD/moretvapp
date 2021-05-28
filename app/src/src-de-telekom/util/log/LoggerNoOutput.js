define(["require", "exports", "./ILogger"], function (require, exports, ILogger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoggerNoOutput = void 0;
    var LoggerNoOutput = (function () {
        function LoggerNoOutput() {
            this.verbose = function () { };
            this.debug = function () { };
            this.info = function () { };
            this.warn = function () { };
            this.error = function () { };
        }
        LoggerNoOutput.prototype.getLogLevel = function () {
            return ILogger_1.LogLevel.error;
        };
        LoggerNoOutput.prototype.setLogLevel = function (newlevel) {
        };
        return LoggerNoOutput;
    }());
    exports.LoggerNoOutput = LoggerNoOutput;
});
//# sourceMappingURL=LoggerNoOutput.js.map