define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTranslations = exports.createTranslationKeys = void 0;
    function isMessageDescriptor(arg) {
        return public_1.Guard.isPureObject(arg) && public_1.Guard.isDefined(arg.id);
    }
    function createTranslationKeys(list, namespace) {
        var convertedList = {};
        for (var key in list) {
            var value = list[key];
            if (isMessageDescriptor(value)) {
                convertedList[key] = namespace + "." + value.id;
            }
            else {
                convertedList[key] = namespace + "." + key;
            }
        }
        return convertedList;
    }
    exports.createTranslationKeys = createTranslationKeys;
    function createTranslations(list, namespace) {
        var convertedList = {};
        for (var key in list) {
            var value = list[key];
            if (isMessageDescriptor(value)) {
                convertedList[namespace + "." + value.id] = value.defaultMessage;
            }
            else {
                convertedList[namespace + "." + key] = value;
            }
        }
        return convertedList;
    }
    exports.createTranslations = createTranslations;
});
//# sourceMappingURL=utils.js.map