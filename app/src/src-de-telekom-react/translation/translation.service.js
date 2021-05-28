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
define(["require", "exports", "react-intl", "../base/public", "src/src-de-telekom/public"], function (require, exports, react_intl_1, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TranslationService = void 0;
    var TranslationService = (function (_super) {
        __extends(TranslationService, _super);
        function TranslationService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.translations = [];
            return _this;
        }
        TranslationService.prototype.registerTranslations = function (translation) {
            var language = public_2.Configuration.instance.language;
            this.translations.push(translation(language || "de"));
        };
        TranslationService.prototype.getTranslationData = function () {
            var _a;
            var language = (_a = public_2.Configuration.instance.language) !== null && _a !== void 0 ? _a : "de";
            var messageList = {};
            for (var _i = 0, _b = this.translations; _i < _b.length; _i++) {
                var list = _b[_i];
                messageList = __assign(__assign({}, messageList), list);
            }
            return { locale: language, messages: messageList };
        };
        TranslationService.prototype.createTranslation = function () {
            var cache = react_intl_1.createIntlCache();
            var translationData = this.getTranslationData();
            var intl = react_intl_1.createIntl({
                locale: translationData.locale,
                messages: translationData.messages
            }, cache);
            return intl;
        };
        TranslationService.prototype.getTranslation = function () {
            if (public_1.ReactBaseModule.currentPhase < public_1.ReactBaseModulePhase.run) {
                throw new public_1.ReactBaseError("The translation is only available in the 'run' phase.");
            }
            return this.translationShape || (this.translationShape = this.createTranslation());
        };
        TranslationService.minPhase = public_1.ReactBaseModulePhase.config;
        return TranslationService;
    }(public_1.ReactBaseService));
    exports.TranslationService = TranslationService;
});
//# sourceMappingURL=translation.service.js.map