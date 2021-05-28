define(["require", "exports", "./css.base", "./css.colors"], function (require, exports, css_base_1, css_colors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CssContentStates = void 0;
    var CssContentStates = (function () {
        function CssContentStates() {
        }
        Object.defineProperty(CssContentStates, "a_cs_1_1", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-1-1", function (style) { return css_base_1.selector("." + style)
                    .props({
                    backgroundColor: css_colors_1.CssColors.A_CO_2
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_1_1_focused", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-1-1-focused", function (style) { return css_base_1.selector(CssContentStates.FOCUSED + "." + style)
                    .extend(CssContentStates.borderWithRadius)
                    .props({
                    backgroundColor: css_colors_1.CssColors.A_CO_2,
                    borderColor: "transparent"
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_1_2", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-1-2", function (style) { return css_base_1.selector("." + style)
                    .props({
                    backgroundColor: css_colors_1.CssColors.A_CO_2,
                    borderRadius: CssContentStates.BORDER_RADIUS
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_2_focused", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-2-focused", function (style) { return css_base_1.selector(CssContentStates.FOCUSED + "." + style)
                    .extend(CssContentStates.a_cs_2_mixin)
                    .props({
                    borderColor: "transparent"
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_2_1", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-2-1", function (style) { return css_base_1.selector("." + style)
                    .extend(CssContentStates.a_cs_2_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_2_1_focused", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-2-1-focused", function (style) { return css_base_1.selector(CssContentStates.FOCUSED + "." + style)
                    .extend(CssContentStates.borderWithRadius)
                    .extend(CssContentStates.a_cs_2_mixin)
                    .props({
                    borderColor: "transparent"
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_2_2", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-2-2", function (style) { return css_base_1.selector("." + style)
                    .props({
                    backgroundColor: css_colors_1.CssColors.A_CO_1_30,
                    borderRadius: CssContentStates.BORDER_RADIUS
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_2_3", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-2-3", function (style) { return css_base_1.selector("." + style)
                    .props({
                    backgroundColor: css_colors_1.CssColors.A_CO_6_70
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_3_1", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-3-1", function (style) { return css_base_1.selector("." + style); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_3_2", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-3-2", function (style) { return css_base_1.selector("." + style)
                    .extend(CssContentStates.borderWithRadius)
                    .props({
                    borderColor: css_colors_1.CssColors.A_CO_1_30
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_3_2_blurred", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-3-2-blurred", function (style) { return css_base_1.selector(CssContentStates.BLURRED + "." + style)
                    .extend(CssContentStates.borderWithRadius)
                    .props({
                    borderColor: css_colors_1.CssColors.A_CO_1_30
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_3_2_invalid", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-3-2-invalid", function (style) { return css_base_1.selector("." + style)
                    .extend(CssContentStates.borderWithRadius)
                    .props({
                    borderColor: css_colors_1.CssColors.A_CO_12
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_3_3", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-3-3", function (style) { return css_base_1.selector("." + style)
                    .props({
                    borderColor: css_colors_1.CssColors.A_CO_1_30,
                    borderStyle: "solid",
                    borderWidth: CssContentStates.BORDER_WIDTH
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_3_4", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-3-4", function (style) { return css_base_1.selector("." + style)
                    .props({
                    backgroundColor: css_colors_1.CssColors.A_CO_6_30
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_4_1", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-4-1", function (style) { return css_base_1.selector("." + style)
                    .props({
                    backgroundColor: css_colors_1.CssColors.A_CO_1
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_4_2", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-4-2", function (style) { return css_base_1.selector("." + style)
                    .props({
                    backgroundColor: css_colors_1.CssColors.A_CO_1,
                    borderRadius: CssContentStates.BORDER_RADIUS
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_5", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-5", function (style) { return css_base_1.selector("." + style)
                    .props({
                    backgroundColor: css_colors_1.CssColors.A_CO_1_30,
                    borderColor: css_colors_1.CssColors.A_CO_1,
                    borderStyle: "solid",
                    borderWidth: 2 * CssContentStates.BORDER_WIDTH
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_6", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-6", function (style) { return css_base_1.selector("." + style)
                    .props({
                    outlineColor: css_colors_1.CssColors.A_CO_1,
                    outlineStyle: "solid",
                    outlineWidth: 2 * CssContentStates.BORDER_WIDTH
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_6_focussed_sub", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-6-fs", function (style) { return css_base_1.selector("." + style + " " + CssContentStates.FOCUSED)
                    .props({
                    outlineColor: css_colors_1.CssColors.A_CO_1,
                    outlineStyle: "solid",
                    outlineWidth: 2 * CssContentStates.BORDER_WIDTH
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_7", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-7", function (style) { return css_base_1.selector("." + style)
                    .props({
                    outlineColor: css_colors_1.CssColors.A_CO_6,
                    outlineStyle: "solid",
                    outlineWidth: CssContentStates.BORDER_WIDTH
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_8", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-8", function (style) { return css_base_1.selector("." + style)
                    .props({
                    outlineColor: css_colors_1.CssColors.A_CO_2,
                    outlineStyle: "solid",
                    outlineWidth: CssContentStates.BORDER_WIDTH
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_9", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-9", function (style) { return css_base_1.selector("." + style)
                    .props({
                    display: "block",
                    outlineColor: css_colors_1.CssColors.A_CO_1,
                    outlineStyle: "solid",
                    outlineWidth: CssContentStates.BORDER_WIDTH
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssContentStates, "a_cs_10", {
            get: function () {
                return css_base_1.CssFunctions.add("a-cs-10", function (style) { return css_base_1.selector("." + style)
                    .props({
                    outlineColor: css_colors_1.CssColors.A_CO_9,
                    outlineStyle: "solid",
                    outlineWidth: 2
                }); });
            },
            enumerable: false,
            configurable: true
        });
        CssContentStates.BORDER_RADIUS = 6;
        CssContentStates.BORDER_WIDTH = 3;
        CssContentStates.FOCUSED = ".dttv-focused";
        CssContentStates.BLURRED = ":not(.dttv-focused)";
        CssContentStates.borderWithRadius = css_base_1.declaration()
            .props({
            borderRadius: CssContentStates.BORDER_RADIUS,
            borderStyle: "solid",
            borderWidth: CssContentStates.BORDER_WIDTH
        });
        CssContentStates.a_cs_2_mixin = css_base_1.declaration()
            .props({
            backgroundColor: css_colors_1.CssColors.A_CO_1_30
        });
        return CssContentStates;
    }());
    exports.CssContentStates = CssContentStates;
});
//# sourceMappingURL=css.contentstates.js.map