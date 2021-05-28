import { Configuration } from "src/src-de-telekom/public";
import { CssBackgrounds } from "./css.backgrounds";
import { CssColors } from "./css.colors";
import { CssContentStates } from "./css.contentstates";
import { CssDimensions } from "./css.dimensions";
import { CssFonts2 } from "./css.fontsneo2";
import { CssFunctions } from "./css.base";
import { CssGlobalStyles } from "./css.global";
import { CssGradients } from "./css.gradients";
import { CssImageAreas } from "./css.imageareas";
import { CssMixins } from "./css.mixins";
import { CssNames } from "./css.names";
import { CssSprites1080p } from "./css.sprites.1080p";
import { CssSprites720p } from "./css.sprites.720p";
import { CssSvg } from "./css.svg";
import { CssTransitions } from "./css.transitions";
import { ICssImages } from "./css.images.interface";
import { ICssSprites } from "./css.sprites.interface";

export class Css {

    private static cssSprites: ICssSprites;
    private static cssGlobals: CssGlobalStyles;

    public static readonly backgrounds = CssBackgrounds;

    public static readonly colors = CssColors;

    public static readonly contentStates = CssContentStates;

    public static readonly dimensions = CssDimensions;

    public static readonly gradients = CssGradients;

    public static get images(): ICssImages {

        return {
            inlineTransparentPixel : `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=`
        };
    }

    public static readonly fonts2 = CssFonts2;

    public static readonly imageAreas = CssImageAreas;

    public static readonly mixins = CssMixins;

    public static readonly names = CssNames;

    public static readonly scale = CssFunctions.scale;
    public static readonly scaleBack = CssFunctions.scaleBack;

    public static readonly add = CssFunctions.add;

    public static readonly svgs = CssSvg;

    public static readonly transitions = CssTransitions;

    public static get sprites(): ICssSprites {

        if (Css.cssSprites === undefined) {

            const resolution = Configuration.instance ? (Configuration.instance.resolution || "1080p") : "1080p";

            switch (resolution) {
                case "720p":

                    Css.cssSprites = new CssSprites720p();

                    break;

                case "1080p":

                    Css.cssSprites = new CssSprites1080p();

                    break;
            }
        }

        return Css.cssSprites;
    }

    public static get globalStyleClasses(): CssGlobalStyles {
        if (Css.cssGlobals === undefined) {
            Css.cssGlobals = new CssGlobalStyles(Css.images);
        }

        return Css.cssGlobals;
    }
}
