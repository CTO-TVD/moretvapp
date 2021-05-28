import { CssDeclaration, selector, CssFunctions } from "./css.base";

/**
 * only if the rendered name will be different from the generated global style
 */

export class CssTransitions {

    public static readonly shortest = ".1s";
    public static readonly veryshort = ".2s";
    public static readonly middle = ".3s";
    public static readonly middleMs = 300;
    public static readonly short = ".4s";
    public static readonly shortMs = 400;
    public static readonly long = ".8s";
    public static readonly longMs = 800;
    public static readonly hub = "0.5s";

    public static readonly easeOutExpo = "cubic-bezier(0.190, 1.000, 0.220, 1.000)"; /* easeOutExpo */
    public static readonly easeOutQuad = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
    public static readonly easeInQuad = "cubic-bezier(0.55, 0.085, 0.68, 0.53)";
    public static readonly hubTimingFunction = "cubic-bezier(0.075, 0.82, 0.165, 1)";

    // simple transitions name
    public static readonly transformShort = "dttv-transform-short";
    public static readonly transitionExchangeContentIn = "dttv-transition-content-in";
}

class CssTransitionsMixins {

    public static readonly transitionExchangeContentIn = new CssDeclaration()
        .props({
            willChange: "transform, opacity",
            transition: `transform ${CssTransitions.short} ${CssTransitions.easeOutExpo}, opacity ${CssTransitions.veryshort} linear`
        });

    public static readonly shortTransform = new CssDeclaration()
        .props({
            willChange: "transform",
            transition: `transform ${CssTransitions.short} ${CssTransitions.easeOutExpo}`
        });
}

CssFunctions.appendStyle(
    selector(`.${CssTransitions.transformShort}`)
        .extend(CssTransitionsMixins.shortTransform),

    selector(`.${CssTransitions.transitionExchangeContentIn}`)
        .extend(CssTransitionsMixins.transitionExchangeContentIn)
);
