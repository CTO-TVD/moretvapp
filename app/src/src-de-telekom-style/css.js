define(["require", "exports", "src/src-de-telekom/public", "./css.backgrounds", "./css.colors", "./css.contentstates", "./css.dimensions", "./css.fontsneo2", "./css.base", "./css.global", "./css.gradients", "./css.imageareas", "./css.mixins", "./css.names", "./css.sprites.1080p", "./css.sprites.720p", "./css.svg", "./css.transitions"], function (require, exports, public_1, css_backgrounds_1, css_colors_1, css_contentstates_1, css_dimensions_1, css_fontsneo2_1, css_base_1, css_global_1, css_gradients_1, css_imageareas_1, css_mixins_1, css_names_1, css_sprites_1080p_1, css_sprites_720p_1, css_svg_1, css_transitions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Css = void 0;
    var Css = (function () {
        function Css() {
        }
        Object.defineProperty(Css, "images", {
            get: function () {
                return {
                    inlineTransparentPixel: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Css, "sprites", {
            get: function () {
                if (Css.cssSprites === undefined) {
                    var resolution = public_1.Configuration.instance ? (public_1.Configuration.instance.resolution || "1080p") : "1080p";
                    switch (resolution) {
                        case "720p":
                            Css.cssSprites = new css_sprites_720p_1.CssSprites720p();
                            break;
                        case "1080p":
                            Css.cssSprites = new css_sprites_1080p_1.CssSprites1080p();
                            break;
                    }
                }
                return Css.cssSprites;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Css, "globalStyleClasses", {
            get: function () {
                if (Css.cssGlobals === undefined) {
                    Css.cssGlobals = new css_global_1.CssGlobalStyles(Css.images);
                }
                return Css.cssGlobals;
            },
            enumerable: false,
            configurable: true
        });
        Css.backgrounds = css_backgrounds_1.CssBackgrounds;
        Css.colors = css_colors_1.CssColors;
        Css.contentStates = css_contentstates_1.CssContentStates;
        Css.dimensions = css_dimensions_1.CssDimensions;
        Css.gradients = css_gradients_1.CssGradients;
        Css.fonts2 = css_fontsneo2_1.CssFonts2;
        Css.imageAreas = css_imageareas_1.CssImageAreas;
        Css.mixins = css_mixins_1.CssMixins;
        Css.names = css_names_1.CssNames;
        Css.scale = css_base_1.CssFunctions.scale;
        Css.scaleBack = css_base_1.CssFunctions.scaleBack;
        Css.add = css_base_1.CssFunctions.add;
        Css.svgs = css_svg_1.CssSvg;
        Css.transitions = css_transitions_1.CssTransitions;
        return Css;
    }());
    exports.Css = Css;
});
//# sourceMappingURL=css.js.map