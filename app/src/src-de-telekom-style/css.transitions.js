define(["require", "exports", "./css.base"], function (require, exports, css_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CssTransitions = void 0;
    var CssTransitions = (function () {
        function CssTransitions() {
        }
        CssTransitions.shortest = ".1s";
        CssTransitions.veryshort = ".2s";
        CssTransitions.middle = ".3s";
        CssTransitions.middleMs = 300;
        CssTransitions.short = ".4s";
        CssTransitions.shortMs = 400;
        CssTransitions.long = ".8s";
        CssTransitions.longMs = 800;
        CssTransitions.hub = "0.5s";
        CssTransitions.easeOutExpo = "cubic-bezier(0.190, 1.000, 0.220, 1.000)";
        CssTransitions.easeOutQuad = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
        CssTransitions.easeInQuad = "cubic-bezier(0.55, 0.085, 0.68, 0.53)";
        CssTransitions.hubTimingFunction = "cubic-bezier(0.075, 0.82, 0.165, 1)";
        CssTransitions.transformShort = "dttv-transform-short";
        CssTransitions.transitionExchangeContentIn = "dttv-transition-content-in";
        return CssTransitions;
    }());
    exports.CssTransitions = CssTransitions;
    var CssTransitionsMixins = (function () {
        function CssTransitionsMixins() {
        }
        CssTransitionsMixins.transitionExchangeContentIn = new css_base_1.CssDeclaration()
            .props({
            willChange: "transform, opacity",
            transition: "transform " + CssTransitions.short + " " + CssTransitions.easeOutExpo + ", opacity " + CssTransitions.veryshort + " linear"
        });
        CssTransitionsMixins.shortTransform = new css_base_1.CssDeclaration()
            .props({
            willChange: "transform",
            transition: "transform " + CssTransitions.short + " " + CssTransitions.easeOutExpo
        });
        return CssTransitionsMixins;
    }());
    css_base_1.CssFunctions.appendStyle(css_base_1.selector("." + CssTransitions.transformShort)
        .extend(CssTransitionsMixins.shortTransform), css_base_1.selector("." + CssTransitions.transitionExchangeContentIn)
        .extend(CssTransitionsMixins.transitionExchangeContentIn));
});
//# sourceMappingURL=css.transitions.js.map