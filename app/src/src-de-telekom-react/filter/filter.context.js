define(["require", "exports", "../translation/translation.service"], function (require, exports, translation_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getFilterContext = void 0;
    function getFilterContext() {
        return {
            context: {
                intl: translation_service_1.TranslationService.getInstance().getTranslation()
            }
        };
    }
    exports.getFilterContext = getFilterContext;
});
//# sourceMappingURL=filter.context.js.map