define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.filterMessage = void 0;
    function filterMessage(component, text, values) {
        var intl = component.context.intl;
        if (text) {
            if (intl.messages[text]) {
                return intl.formatMessage({ id: text }, values);
            }
            else if (intl.messages[text] === "") {
                return "";
            }
            else {
                return text;
            }
        }
        return "";
    }
    exports.filterMessage = filterMessage;
});
//# sourceMappingURL=message.filter.js.map