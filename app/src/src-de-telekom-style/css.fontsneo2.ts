import { CssFunctions, declaration, selector } from "./css.base";
import { Configuration, IFileBlobConfiguration } from "src/src-de-telekom/public";

/**
 *  normal, bold, regular, ultra ==> new Fonts??
 * https://github.com/CTO-TVD/UIDesign/tree/master/Atoms/a-fo-fonts
 *
 * weight : 400 normal ; 600 medium; 700 bold; 900 extrabold
 *
 *  !! colors are no longer part of the atom fonts !!
 *
 * apply colors at elements as necessary
 * proposal: set safewhite at each page as color and add distinct colors as needed
 */

const fileblob = Configuration.instance.fileblob || {} as IFileBlobConfiguration;

CssFunctions.appendStyle(
    selector("@font-face")
        .props({
            fontFamily: "'Tele-Neo'",
            fontStyle: "normal",
            fontWeight: 400,
            src: `url(${fileblob.TeleNeoRegular || "src/src-de-telekom-style/font/TeleNeoUI-Regular.woff"}) format('woff')`
        }),

    selector("@font-face")
        .props({
            fontFamily: "'Tele-Neo'",
            fontStyle: "normal",
            fontWeight: 600,
            src: `url(${fileblob.TeleNeoMedium || "src/src-de-telekom-style/font/TeleNeoUI-Medium.woff"}) format('woff')`
        }),

    selector("@font-face")
        .props({
            fontFamily: "'Tele-Neo'",
            fontStyle: "normal",
            fontWeight: 700,
            src: `url(${fileblob.TeleNeoBold || "src/src-de-telekom-style/font/TeleNeoUI-Bold.woff"}) format('woff')`
        }),

    selector("@font-face")
        .props({
            fontFamily: "'Tele-Neo'",
            fontStyle: "normal",
            fontWeight: 900,
            src: `url(${fileblob.TeleNeoExtraBold || "src/src-de-telekom-style/font/TeleNeoUI-ExtraBold.woff"}) format('woff')`
        })

);
export class CssFonts2 {

    // fonts have been copied from ui10 and might need adjustement

    // all header fonts have 6px bigger line-height to avoid cropping of fonts "g,y"

    public static readonly font_b1 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 36,
            lineHeight: 48,
            letterSpacing: "0.037em"
        });

    public static readonly font_b1_2 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 600,
            fontSize: 36,
            lineHeight: 42,
            letterSpacing: "0.05em"
        });

    public static readonly font_b1_3 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 700,
            fontSize: 36,
            lineHeight: 48,
            letterSpacing: "0.05em"
        });

    public static readonly font_b1_4 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 900,
            fontSize: 36,
            lineHeight: 48,
            letterSpacing: "0.05em",
            textTransform: "uppercase"
        });

    public static readonly font_b2 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 30,
            lineHeight: 40,
            letterSpacing: "0.07em"
        });

    public static readonly font_b2_2 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 30,
            lineHeight: 32,
            letterSpacing: "0.07em"
        });

    public static readonly font_b2_3 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 30,
            lineHeight: 30,
            letterSpacing: "0.07em"
        });

    public static readonly font_h0 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 96,
            lineHeight: 102,
            letterSpacing: "0.02em"
        });

    public static readonly font_h1_1 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 78,
            lineHeight: 84,
            letterSpacing: "0.02em"
        });

    public static readonly font_h1_2 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 700,
            fontSize: 78,
            lineHeight: 84,
            letterSpacing: "0.02em"
        });

    public static readonly font_h2__ = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 60,
            lineHeight: 66,
            letterSpacing: "0.025em"
        });

    public static readonly font_h2_2 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 600,
            fontSize: 60,
            lineHeight: 66,
            textTransform: "uppercase",
            letterSpacing: "0.02em"
        });

    // Defined because of migration
    public static readonly font_h2_3 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 42,
            lineHeight: 46,
            letterSpacing: "0.025em"
        });

    public static readonly font_h3_1 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 900,
            fontSize: 36,
            lineHeight: 42,
            letterSpacing: "0.09em",
            textTransform: "uppercase"
        });

    public static readonly font_h3_2 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 700,
            fontSize: 36,
            lineHeight: 42,
            letterSpacing: "0.085em",
            textTransform: "uppercase"
        });

    public static readonly font_h4 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 900,
            fontSize: 30,
            lineHeight: 36,
            letterSpacing: "0.1em",
            textTransform: "uppercase"
        });

    public static readonly font_h5 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 144,
            lineHeight: 96,
            letterSpacing: "0.01em"
        });

    public static readonly font_h6 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 48,
            lineHeight: 63,
            letterSpacing: "0.03em"
        });

    public static readonly font_h6_1 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 700,
            fontSize: 48,
            lineHeight: 63,
            letterSpacing: "0.03em"
        });

    // Defined because of migration
    public static readonly font_h6_2 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 48,
            lineHeight: 51,
            letterSpacing: "0.03em"
        });

    public static readonly font_l1 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 33,
            letterSpacing: "0.05em"
        });

    public static readonly font_l1_1 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 33,
            textTransform: "uppercase",
            letterSpacing: "0.05em"
        });

    public static readonly font_l1_2 = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 900,
            fontSize: 24,
            lineHeight: 33,
            textTransform: "uppercase",
            letterSpacing: "0.05em"
        });

    // ------- Deprecated fonts

    // => Team B, needs clarification with Designer
    public static readonly font_l1_labels_hints_deprecated_ = declaration()
        .props({
            fontFamily: "Tele-Neo",
            fontWeight: 600,
            fontSize: 27,
            lineHeight: 30,
            letterSpacing: "0.120em"
        });

    // ------- font classes

    public static readonly a_fo_b1_1_mixin = declaration()
        .extend(CssFonts2.font_b1);

    public static get a_fo_b1_1() {
        return CssFunctions.add("a-fo-b1-1-ui20", style => selector("." + style).extend(CssFonts2.a_fo_b1_1_mixin));
    }

    public static readonly a_fo_b1_2_mixin = declaration()
        .extend(CssFonts2.font_b1_2);

    public static get a_fo_b1_2() {
        return CssFunctions.add("a-fo-b1-2-ui20", style => selector("." + style).extend(CssFonts2.a_fo_b1_2_mixin));
    }

    public static readonly a_fo_b1_3_mixin = declaration()
        .extend(CssFonts2.font_b1_3); // different color

    public static get a_fo_b1_3() {
        return CssFunctions.add("a-fo-b1-3-ui20", style => selector("." + style).extend(CssFonts2.a_fo_b1_3_mixin));
    }

    public static readonly a_fo_b1_4_mixin = declaration()
        .extend(CssFonts2.font_b1_4);

    public static get a_fo_b1_4() {
        return CssFunctions.add("a-fo-b1-4-ui20", style => selector("." + style).extend(CssFonts2.a_fo_b1_4_mixin));
    }

    public static readonly a_fo_b2___mixin = declaration()
        .extend(CssFonts2.font_b2);

    public static get a_fo_b2__() {
        return CssFunctions.add("a-fo-b2-ui20", style => selector("." + style).extend(CssFonts2.a_fo_b2___mixin));
    }

    public static readonly a_fo_b2_2__mixin = declaration()
        .extend(CssFonts2.font_b2_2);

    // e.g. used in m10-03 but not in atomic design
    public static get a_fo_b2_2() {
        return CssFunctions.add("a-fo-b2-2-ui20", style => selector("." + style).extend(CssFonts2.a_fo_b2_2__mixin));
    }

    public static readonly a_fo_b2_3__mixin = declaration()
        .extend(CssFonts2.font_b2_3);

    // e.g. used in m10-03 but not in atomic design
    public static get a_fo_b2_3() {
        return CssFunctions.add("a-fo-b2-3-ui20", style => selector("." + style).extend(CssFonts2.a_fo_b2_3__mixin));
    }

    public static readonly a_fo_h0_mixin = declaration()
        .extend(CssFonts2.font_h0);

    public static get a_fo_h0() {
        return CssFunctions.add("a-fo-h0-ui20", style => selector("." + style).extend(CssFonts2.a_fo_h0_mixin));
    }

    public static readonly a_fo_h1_1_mixin = declaration()
        .extend(CssFonts2.font_h1_1);

    public static get a_fo_h1_1() {
        return CssFunctions.add("a-fo-h1-1-ui20", style => selector("." + style).extend(CssFonts2.a_fo_h1_1_mixin));
    }

    public static readonly a_fo_h1_2_mixin = declaration()
        .extend(CssFonts2.font_h1_2);

    public static get a_fo_h1_2() {
        return CssFunctions.add("a-fo-h1-2-ui20", style => selector("." + style).extend(CssFonts2.a_fo_h1_2_mixin));
    }

    public static readonly a_fo_h2___mixin = declaration()
        .extend(CssFonts2.font_h2__);

    // it has no subnumber in atomic
    public static get a_fo_h2__() {
        return CssFunctions.add("a-fo-h2-1-ui20", style => selector("." + style).extend(CssFonts2.a_fo_h2___mixin));
    }

    public static readonly a_fo_h2_2__mixin = declaration()
        .extend(CssFonts2.font_h2_2);

    // it has no subnumber in atomic
    public static get a_fo_h2_2() {
        return CssFunctions.add("a-fo-h2-2-ui20", style => selector("." + style).extend(CssFonts2.a_fo_h2_2__mixin));
    }

    // Defined because of migration
    public static readonly a_fo_h2_3__mixin = declaration()
        .extend(CssFonts2.font_h2_3);

    // Defined because of migration
    public static get a_fo_h2_3() {
        return CssFunctions.add("a-fo-h2-3-ui20", style => selector("." + style).extend(CssFonts2.a_fo_h2_3__mixin));
    }

    public static readonly a_fo_h3_1_mixin = declaration()
        .extend(CssFonts2.font_h3_1);

    public static get a_fo_h3_1() {
        return CssFunctions.add("a-fo-h3-1-ui20", style => selector("." + style).extend(CssFonts2.a_fo_h3_1_mixin));
    }

    public static readonly a_fo_h3_2_mixin = declaration()
        .extend(CssFonts2.font_h3_2);

    public static get a_fo_h3_2() {
        return CssFunctions.add("a-fo-h3-2-ui20", style => selector("." + style).extend(CssFonts2.a_fo_h3_2_mixin));
    }

    public static readonly a_fo_h4_mixin = declaration()
        .extend(CssFonts2.font_h4);

    public static get a_fo_h4() {
        return CssFunctions.add("a-fo-h4-ui20", style => selector("." + style).extend(CssFonts2.a_fo_h4_mixin));
    }

    public static readonly a_fo_h5_mixin = declaration()
        .extend(CssFonts2.font_h5);

    public static get a_fo_h5() {
        return CssFunctions.add("a-fo-h5-ui20", style => selector("." + style).extend(CssFonts2.a_fo_h5_mixin));
    }

    public static readonly a_fo_h6_mixin = declaration()
        .extend(CssFonts2.font_h6);

    public static get a_fo_h6() {
        return CssFunctions.add("a-fo-h6-ui20", style => selector("." + style).extend(CssFonts2.a_fo_h6_mixin));
    }

    public static readonly a_fo_h6_1_mixin = declaration()
        .extend(CssFonts2.font_h6_1);

    public static get a_fo_h6_1() {
        return CssFunctions.add("a-fo-h6-1-ui20", style => selector("." + style).extend(CssFonts2.a_fo_h6_1_mixin));
    }

    // Defined because of migration
    public static readonly a_fo_h6_2_mixin = declaration()
        .extend(CssFonts2.font_h6_2);

    // Defined because of migration
    public static get a_fo_h6_2() {
        return CssFunctions.add("a-fo-h6-2-ui20", style => selector("." + style).extend(CssFonts2.a_fo_h6_2_mixin));
    }

    public static readonly a_fo_l1_mixin = declaration()
        .extend(CssFonts2.font_l1);

    public static get a_fo_l1() {
        return CssFunctions.add("a-fo-l1-ui20", style => selector("." + style).extend(CssFonts2.a_fo_l1_mixin));
    }

    public static readonly a_fo_l1_1_mixin = declaration()
        .extend(CssFonts2.font_l1_1);

    public static get a_fo_l1_1() {
        return CssFunctions.add("a-fo-l1-1-ui20", style => selector("." + style).extend(CssFonts2.a_fo_l1_1_mixin));
    }

    public static readonly a_fo_l1_2_mixin = declaration()
        .extend(CssFonts2.font_l1_2);

    public static get a_fo_l1_2() {
        return CssFunctions.add("a-fo-l1-2-ui20", style => selector("." + style).extend(CssFonts2.a_fo_l1_2_mixin));
    }
}
