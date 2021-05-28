import { selector, declaration, CssFunctions } from "./css.base";

/**
 * Based on atomic design: A-IM-X Image Area Sizes and Aspect Ratios
 *
 * Covering:
 * Provides some basic styles.
 *
 * https://github.com/CTO-TVD/STB/tree/master/Atoms/a-im-X
 */
export class CssImageAreas {

    private static readonly a_im_4_1_mixin = declaration()
        .props({
            width: 840,
            height: 472
        });

    public static get a_im_4_1() {

        return CssFunctions.add("a-im-4-1",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_1_mixin)
        );
    }

    private static readonly a_im_4_2_mixin = declaration()
        .props({
            width: 552,
            height: 288
        });

    public static get a_im_4_2() {

        return CssFunctions.add("a-im-4-2",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_2_mixin)
        );
    }

    public static readonly a_im_4_3_mixin = declaration()
        .props({
            width: 408,
            height: 230
        });

    public static get a_im_4_3() {

        return CssFunctions.add("a-im-4-3",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_3_mixin)
        );
    }

    private static readonly a_im_4_4_mixin = declaration()
        .props({
            width: 1704,
            height: 472
        });

    public static get a_im_4_4() {

        return CssFunctions.add("a-im-4-4",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_4_mixin)
        );
    }

    private static readonly a_im_4_5_mixin = declaration()
        .props({
            width: 840,
            height: 230
        });

    public static get a_im_4_5() {

        return CssFunctions.add("a-im-4-5",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_5_mixin)
        );
    }

    private static readonly a_im_4_6_mixin = declaration()
        .props({
            width: 552,
            height: 230
        });

    public static get a_im_4_6() {

        return CssFunctions.add("a-im-4-6",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_6_mixin)
        );
    }

    private static readonly a_im_4_9_mixin = declaration()
        .props({
            height: 264,
            width: 264
        });

    public static get a_im_4_9() {

        return CssFunctions.add("a-im-4-9",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_9_mixin)
        );
    }

    private static readonly a_im_4_10_mixin = declaration()
        .props({
            height: 408,
            width: 408
        });

    public static get a_im_4_10() {

        return CssFunctions.add("a-im-4-10",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_10_mixin)
        );
    }

    public static get a_im_4_11() {

        return CssImageAreas.a_im_4_3;
    }

    private static readonly a_im_4_12_mixin = declaration()
        .props({
            width: 1704,
            height: 960
        });

    public static get a_im_4_12() {

        return CssFunctions.add("a-im-4-12",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_12_mixin)
        );
    }

    private static readonly a_im_4_13_mixin = declaration()
        .props({
            height: 72,
            width: 72
        });

    public static get a_im_4_13() {

        return CssFunctions.add("a-im-4-13",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_13_mixin)
        );
    }

    private static readonly a_im_4_14_mixin = declaration()
        .props({
            width: 1920,
            height: 1080
        });

    public static get a_im_4_14() {

        return CssFunctions.add("a-im-4-14",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_14_mixin)
        );
    }

    private static readonly a_im_4_15_mixin = declaration()
        .props({
            width: 230,
            height: 230
        });

    public static get a_im_4_15() {

        return CssFunctions.add("a-im-4-15",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_15_mixin)
        );
    }

    private static readonly a_im_4_16_mixin = declaration()
        .props({
            width: 264,
            height: 396
        });

    public static get a_im_4_16() {

        return CssFunctions.add("a-im-4-16",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_16_mixin)
        );
    }

    private static readonly a_im_4_17_mixin = declaration()
        .props({
            width: 180,
            height: 240
        });

    public static get a_im_4_17() {

        return CssFunctions.add("a-im-4-17",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_17_mixin)
        );
    }

    private static readonly a_im_4_18_mixin = declaration()
        .props({
            width: 297,
            height: 396
        });

    public static get a_im_4_18() {

        return CssFunctions.add("a-im-4-18",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_18_mixin)
        );
    }

    private static readonly a_im_4_19_mixin = declaration()
        .props({
            width: 426,
            height: 240
        });

    public static get a_im_4_19() {

        return CssFunctions.add("a-im-4-19",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_19_mixin)
        );
    }

    private static readonly a_im_4_20_mixin = declaration()
        .props({
            width: 840,
            height: 756
        });

    public static get a_im_4_20() {

        return CssFunctions.add("a-im-4-20",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_20_mixin)
        );
    }

    private static readonly a_im_4_21_mixin = declaration()
        .props({
            width: 1704,
            height: 512
        });

    public static get a_im_4_21() {

        return CssFunctions.add("a-im-4-21",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_21_mixin)
        );
    }

    private static readonly a_im_4_22_mixin = declaration()
        .props({
            width: 1704,
            height: 388
        });

    public static get a_im_4_22() {

        return CssFunctions.add("a-im-4-22",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_22_mixin)
        );
    }

    private static readonly a_im_4_23_mixin = declaration()
        .props({
            width: 1704,
            height: 374
        });

    public static get a_im_4_23() {

        return CssFunctions.add("a-im-4-23",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_23_mixin)
        );
    }

    private static readonly a_im_4_24_mixin = declaration()
        .props({
            width: 426,
            height: 568
        });

    public static get a_im_4_24() {

        return CssFunctions.add("a-im-4-24",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_24_mixin)
        );
    }

    private static readonly a_im_4_25_mixin = declaration()
        .props({
            width: 126,
            height: 168
        });

    public static get a_im_4_25() {

        return CssFunctions.add("a-im-4-25",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_25_mixin)
        );
    }

    private static readonly a_im_4_26_mixin = declaration()
        .props({
            width: 248,
            height: 372
        });

    public static get a_im_4_26() {

        return CssFunctions.add("a-im-4-26",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_26_mixin)
        );
    }

    private static readonly a_im_4_27_mixin = declaration()
        .props({
            width: 264,
            height: 352
        });

    public static get a_im_4_27() {

        return CssFunctions.add("a-im-4-27",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_27_mixin)
        );
    }

    private static readonly a_im_4_28_mixin = declaration()
        .props({
            width: 120,
            height: 48
        });

    public static get a_im_4_28() {

        return CssFunctions.add("a-im-4-28",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_4_28_mixin)
        );
    }

    private static readonly a_im_5_1_mixin = declaration()
        .props({
            width: 112,
            height: 168
        });

    public static get a_im_5_1() {

        return CssFunctions.add("a-im-5-1",
            style => selector("." + style)
                .extend(CssImageAreas.a_im_5_1_mixin)
        );
    }
}
