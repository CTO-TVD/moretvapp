define(["require", "exports", "./message.filter", "src/src-de-telekom/public"], function (require, exports, message_filter_1, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.filterJoin = void 0;
    function filterJoin(component, args, separator, translate) {
        if (separator === void 0) { separator = " "; }
        if (translate === void 0) { translate = true; }
        if (Array.isArray(args)) {
            return args
                .map(function (item) { return translateArgs(component, item, translate); })
                .filter(function (item) { return (item !== undefined) && (item !== null) && (item.length > 0); })
                .join(separator);
        }
        else {
            return translateArgs(component, args, translate);
        }
    }
    exports.filterJoin = filterJoin;
    function translateArgs(component, args, translate) {
        if (public_1.Guard.isString(args)) {
            return translate ? message_filter_1.filterMessage(component, args) : args;
        }
        else if (public_1.Guard.isObject(args)) {
            return translate ? message_filter_1.filterMessage(component, args.text, args.values) : args.text;
        }
        else {
            return "";
        }
    }
});
//# sourceMappingURL=join.filter.js.map