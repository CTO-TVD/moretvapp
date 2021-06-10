define(["require", "exports", "rxjs/operators", "src/src-de-telekom/util/log/Logger", "src/src-de-telekom/util/log/LogMessage", "./doOnSubscribe"], function (require, exports, operators_1, Logger_1, LogMessage_1, doOnSubscribe_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.log = void 0;
    exports.log = function (_a) {
        var _b = _a.prefix, prefix = _b === void 0 ? "" : _b, _c = _a.level, level = _c === void 0 ? "debug" : _c, _d = _a.tag, tag = _d === void 0 ? "Logger" : _d;
        return function (source) {
            var log = function (message) {
                switch (level) {
                    case "debug":
                        Logger_1.Logger.debug(function (log) { return log(LogMessage_1.LogMsg("" + prefix + message, tag)); });
                        break;
                    case "warn":
                        Logger_1.Logger.warn(function (log) { return log(LogMessage_1.LogMsg("" + prefix + message, tag)); });
                        break;
                    case "error":
                        Logger_1.Logger.error(function (log) { return log(LogMessage_1.LogMsg("" + prefix + message, tag)); });
                        break;
                    default:
                        break;
                }
            };
            return source.pipe(doOnSubscribe_1.doOnSubscribe(function () { return log("doOnSubscribe"); }), operators_1.tap({
                next: function (it) { return log("doOnNext - item: " + it); },
                error: function (error) { return log("doOnError - item: " + error); },
                complete: function () { return log("doOnComplete"); }
            }), operators_1.finalize(function () { return log("doFinally"); }));
        };
    };
});
//# sourceMappingURL=logOperator.js.map