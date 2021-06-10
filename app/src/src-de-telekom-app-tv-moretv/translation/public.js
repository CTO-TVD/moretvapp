var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "src/src-de-telekom-react/public", "./strings.appVod.de", "./strings.appVod.en"], function (require, exports, public_1, strings_appVod_de_1, strings_appVod_en_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TranslationModule = exports.messagesErrors = exports.messagesUac = exports.messagesMtv = exports.messagesVod = void 0;
    exports.messagesVod = public_1.createTranslationKeys(strings_appVod_de_1.GermanTranslationTable.get().appVod, "appVod");
    exports.messagesMtv = public_1.createTranslationKeys(strings_appVod_de_1.GermanTranslationTable.get().appMtv, "appMtv");
    exports.messagesUac = public_1.createTranslationKeys(strings_appVod_de_1.GermanTranslationTable.get().appUac, "appUac");
    exports.messagesErrors = public_1.createTranslationKeys(strings_appVod_de_1.GermanTranslationTable.get().errorresource, "errorresource");
    var TranslationModule = (function (_super) {
        __extends(TranslationModule, _super);
        function TranslationModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TranslationModule.prototype.config = function () {
            public_1.TranslationService.getInstance().registerTranslations(function (language) {
                if (language === "de")
                    return public_1.createTranslations(strings_appVod_de_1.GermanTranslationTable.get().appVod, "appVod");
                else
                    return public_1.createTranslations(strings_appVod_en_1.EnglishTranslationTable.get().appVod, "appVod");
            });
            public_1.TranslationService.getInstance().registerTranslations(function (language) {
                if (language === "de")
                    return public_1.createTranslations(strings_appVod_de_1.GermanTranslationTable.get().appMtv, "appMtv");
                else
                    return public_1.createTranslations(strings_appVod_en_1.EnglishTranslationTable.get().appMtv, "appMtv");
            });
            public_1.TranslationService.getInstance().registerTranslations(function (language) {
                if (language === "de")
                    return public_1.createTranslations(strings_appVod_de_1.GermanTranslationTable.get().appUac, "appUac");
                else
                    return public_1.createTranslations(strings_appVod_en_1.EnglishTranslationTable.get().appUac, "appUac");
            });
            public_1.TranslationService.getInstance().registerTranslations(function (language) {
                if (language === "de")
                    return public_1.createTranslations(strings_appVod_de_1.GermanTranslationTable.get().errorresource, "errorresource");
                else
                    return public_1.createTranslations(strings_appVod_en_1.EnglishTranslationTable.get().appUac, "errorresource");
            });
        };
        return TranslationModule;
    }(public_1.ReactBaseModule));
    exports.TranslationModule = TranslationModule;
});
//# sourceMappingURL=public.js.map