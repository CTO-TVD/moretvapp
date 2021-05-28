var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define(["require", "exports", "../base/public", "./translation.service", "./utils", "./strings.angular.de", "./strings.angular.en", "./translations_de", "./translations_en", "./utils", "./translation.service", "./translation.component", "./translation.interface"], function (require, exports, public_1, translation_service_1, utils_1, strings_angular_de_1, strings_angular_en_1, translations_de_1, translations_en_1, utils_2, translation_service_2, translation_component_1, translation_interface_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TranslationModule = exports.messagesBase = exports.TranslationComponent = exports.TranslationService = exports.createTranslations = exports.createTranslationKeys = void 0;
    Object.defineProperty(exports, "createTranslationKeys", { enumerable: true, get: function () { return utils_2.createTranslationKeys; } });
    Object.defineProperty(exports, "createTranslations", { enumerable: true, get: function () { return utils_2.createTranslations; } });
    Object.defineProperty(exports, "TranslationService", { enumerable: true, get: function () { return translation_service_2.TranslationService; } });
    Object.defineProperty(exports, "TranslationComponent", { enumerable: true, get: function () { return translation_component_1.TranslationComponent; } });
    __exportStar(translation_interface_1, exports);
    exports.messagesBase = __assign(__assign({}, utils_1.createTranslationKeys(translations_de_1.translations, "base")), utils_1.createTranslationKeys(strings_angular_de_1.GermanTranslationTable.Table.angular, "base"));
    var TranslationModule = (function (_super) {
        __extends(TranslationModule, _super);
        function TranslationModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TranslationModule.prototype.config = function () {
            translation_service_1.TranslationService.getInstance().registerTranslations(function (language) {
                if (language === "de")
                    return __assign(__assign({}, utils_1.createTranslations(translations_de_1.translations, "base")), utils_1.createTranslations(strings_angular_de_1.GermanTranslationTable.Table.angular, "base"));
                else
                    return __assign(__assign({}, utils_1.createTranslations(translations_en_1.translations, "base")), utils_1.createTranslations(strings_angular_en_1.EnglishTranslationTable.Table.angular, "base"));
            });
        };
        return TranslationModule;
    }(public_1.ReactBaseModule));
    exports.TranslationModule = TranslationModule;
});
//# sourceMappingURL=public.js.map