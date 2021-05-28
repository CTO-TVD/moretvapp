define(["require", "exports", "../../typing/guard"], function (require, exports, guard_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogStack = exports.LogCustomData = exports.LogMsg = void 0;
    var customData;
    function LogMsg(msg, name) {
        return "[" + (name || "") + (customData ? ", " + customData : "") + "] " + msg;
    }
    exports.LogMsg = LogMsg;
    function LogCustomData(data) {
        customData = data;
    }
    exports.LogCustomData = LogCustomData;
    function LogStack() {
        return (new Error().stack || "")
            .split("\n")
            .map(function (item) { return item.indexOf("/src-thirdparty/") !== -1 ? undefined : item.trim(); })
            .filter(guard_1.Guard.isDefined)
            .slice(1)
            .join(" ");
    }
    exports.LogStack = LogStack;
});
//# sourceMappingURL=LogMessage.js.map