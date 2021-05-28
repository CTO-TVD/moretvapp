define(["require", "exports", "./css.base", "./css.colors"], function (require, exports, css_base_1, css_colors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CssBackgrounds = void 0;
    var CssBackgrounds = (function () {
        function CssBackgrounds() {
        }
        Object.defineProperty(CssBackgrounds, "a_bg_4", {
            get: function () {
                return css_base_1.CssFunctions.add("a-bg-4", function (style) { return css_base_1.selector("." + style)
                    .props({
                    backgroundColor: css_colors_1.CssColors.global_background_high_transparent
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssBackgrounds, "a_bg_5", {
            get: function () {
                return css_base_1.CssFunctions.add("a-bg-5", function (style) { return css_base_1.selector("." + style)
                    .props({
                    backgroundColor: css_colors_1.CssColors.A_CO_4_75
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssBackgrounds, "a_bg_6", {
            get: function () {
                return css_base_1.CssFunctions.add("a-bg-6", function (style) { return css_base_1.selector("." + style)
                    .props({
                    backgroundColor: css_colors_1.CssColors.A_CO_4_90
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssBackgrounds, "default_image_background", {
            get: function () {
                return css_base_1.CssFunctions.add("default-image-background", function (style) { return css_base_1.selector("." + style)
                    .props({
                    backgroundColor: css_colors_1.CssColors.A_CO_13
                }); });
            },
            enumerable: false,
            configurable: true
        });
        return CssBackgrounds;
    }());
    exports.CssBackgrounds = CssBackgrounds;
});
//# sourceMappingURL=css.backgrounds.js.map