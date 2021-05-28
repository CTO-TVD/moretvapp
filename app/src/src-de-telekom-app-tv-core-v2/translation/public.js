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
define(["require", "exports", "src/src-de-telekom-react/public", "./strings.appCore.de", "./strings.appCore.en"], function (require, exports, public_1, strings_appCore_de_1, strings_appCore_en_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TranslationModule = exports.messagesSatwizard = exports.messagesCore = void 0;
    exports.messagesCore = public_1.createTranslationKeys(strings_appCore_de_1.GermanTranslationTable.get().appCore, "appCore");
    exports.messagesSatwizard = public_1.createTranslationKeys(strings_appCore_de_1.GermanTranslationTable.get().appSatSetup, "appSatSetup");
    var TranslationModule = (function (_super) {
        __extends(TranslationModule, _super);
        function TranslationModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TranslationModule.prototype.config = function () {
            public_1.TranslationService.getInstance().registerTranslations(function (language) {
                if (language === "de")
                    return public_1.createTranslations(strings_appCore_de_1.GermanTranslationTable.get().appCore, "appCore");
                else
                    return public_1.createTranslations(strings_appCore_en_1.EnglishTranslationTable.get().appCore, "appCore");
            });
            public_1.TranslationService.getInstance().registerTranslations(function (language) {
                if (language === "de")
                    return public_1.createTranslations(strings_appCore_de_1.GermanTranslationTable.get().appSatSetup, "appSatSetup");
                else
                    return public_1.createTranslations(strings_appCore_en_1.EnglishTranslationTable.get().appSatSetup, "appSatSetup");
            });
        };
        return TranslationModule;
    }(public_1.ReactBaseModule));
    exports.TranslationModule = TranslationModule;
});
//# sourceMappingURL=public.js.map