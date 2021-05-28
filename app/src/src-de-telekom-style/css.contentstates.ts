import { declaration, selector, CssFunctions } from "./css.base";
import { CssColors } from "./css.colors";

/**
 * Based on atomic design: A-CS Content State
 *
 * Covering:
 * Provides some basic styles.
 *
 * https://ngtv.preview.denkwerk.com/STB/Atoms/a-cs-content-state
 */

export class CssContentStates {

    private static readonly BORDER_RADIUS = 6;
    private static readonly BORDER_WIDTH = 3;
    public static readonly FOCUSED = ".dttv-focused";
    public static readonly BLURRED = ":not(.dttv-focused)";

    private static borderWithRadius = declaration()  // no color; just the border behavior
        .props({
            borderRadius: CssContentStates.BORDER_RADIUS,
            borderStyle: "solid",
            borderWidth: CssContentStates.BORDER_WIDTH
        });

    public static get a_cs_1_1() {

        return CssFunctions.add("a-cs-1-1",
            style => selector("." + style)
                .props({
                    backgroundColor: CssColors.A_CO_2
                })
        );
    }

    public static get a_cs_1_1_focused() {

        return CssFunctions.add("a-cs-1-1-focused",
            style => selector(CssContentStates.FOCUSED + "." + style)
                .extend(CssContentStates.borderWithRadius)
                .props({
                    backgroundColor: CssColors.A_CO_2,
                    borderColor: "transparent" // the backgroundColor fills the area, too => and easier to overwrite bg-color in case of whitelabel; but need transparent to overwrite default color
                })
        );
    }

    public static get a_cs_1_2() {

        return CssFunctions.add("a-cs-1-2",
            style => selector("." + style)
                .props({
                    backgroundColor: CssColors.A_CO_2,
                    borderRadius: CssContentStates.BORDER_RADIUS
                })
        );
    }

    public static readonly a_cs_2_mixin = declaration()
        .props({
            backgroundColor: CssColors.A_CO_1_30
        });

    public static get a_cs_2_focused() {

        return CssFunctions.add("a-cs-2-focused",
            style => selector(CssContentStates.FOCUSED + "." + style)
                .extend(CssContentStates.a_cs_2_mixin)
                .props({
                    borderColor: "transparent"
                })
        );
    }

    public static get a_cs_2_1() {

        return CssFunctions.add("a-cs-2-1",
            style => selector("." + style)
                .extend(CssContentStates.a_cs_2_mixin)
        );
    }

    public static get a_cs_2_1_focused() {

        return CssFunctions.add("a-cs-2-1-focused",
            style => selector(CssContentStates.FOCUSED + "." + style)
                .extend(CssContentStates.borderWithRadius)
                .extend(CssContentStates.a_cs_2_mixin)
                .props({
                    borderColor: "transparent"
                })
        );
    }

    public static get a_cs_2_2() {

        return CssFunctions.add("a-cs-2-2",
            style => selector("." + style)
                .props({
                    backgroundColor: CssColors.A_CO_1_30,
                    borderRadius: CssContentStates.BORDER_RADIUS
                })
        );
    }

    public static get a_cs_2_3() {

        return CssFunctions.add("a-cs-2-3",
            style => selector("." + style)
                .props({
                    backgroundColor: CssColors.A_CO_6_70
                })
        );
    }

    public static get a_cs_3_1() {

        return CssFunctions.add("a-cs-3-1",
            style => selector("." + style)
        );
    }

    public static get a_cs_3_2() {

        return CssFunctions.add("a-cs-3-2",
            style => selector("." + style)
                .extend(CssContentStates.borderWithRadius)
                .props({
                    borderColor: CssColors.A_CO_1_30
                })
        );
    }

    public static get a_cs_3_2_blurred() {

        return CssFunctions.add("a-cs-3-2-blurred",
            style => selector(`${CssContentStates.BLURRED}.${style}`)
                .extend(CssContentStates.borderWithRadius)
                .props({
                    borderColor: CssColors.A_CO_1_30
                })
        );
    }

    public static get a_cs_3_2_invalid() {  // artifical state see M-IN-1-1

        return CssFunctions.add("a-cs-3-2-invalid",
            style => selector(`.${style}`)
                .extend(CssContentStates.borderWithRadius)
                .props({
                    borderColor: CssColors.A_CO_12
                })
        );
    }

    public static get a_cs_3_3() {

        return CssFunctions.add("a-cs-3-3",
            style => selector("." + style)
                .props({
                    borderColor: CssColors.A_CO_1_30,
                    borderStyle: "solid",
                    borderWidth: CssContentStates.BORDER_WIDTH
                })
        );
    }

    public static get a_cs_3_4() {

        return CssFunctions.add("a-cs-3-4",
            style => selector("." + style)
                .props({
                    backgroundColor: CssColors.A_CO_6_30
                })
        );
    }

    public static get a_cs_4_1() {

        return CssFunctions.add("a-cs-4-1",
            style => selector("." + style)
                .props({
                    backgroundColor: CssColors.A_CO_1
                })
        );
    }

    public static get a_cs_4_2() {

        return CssFunctions.add("a-cs-4-2",
            style => selector("." + style)
                .props({
                    backgroundColor: CssColors.A_CO_1,
                    borderRadius: CssContentStates.BORDER_RADIUS
                })
        );
    }

    public static get a_cs_5() {

        return CssFunctions.add("a-cs-5",
            style => selector("." + style)
                .props({
                    backgroundColor: CssColors.A_CO_1_30,
                    borderColor: CssColors.A_CO_1,
                    borderStyle: "solid",
                    borderWidth: 2 * CssContentStates.BORDER_WIDTH
                })
        );
    }

    public static get a_cs_6() {

        return CssFunctions.add("a-cs-6",
            style => selector("." + style)
                .props({
                    outlineColor: CssColors.A_CO_1,
                    outlineStyle: "solid",
                    outlineWidth: 2 * CssContentStates.BORDER_WIDTH
                })
        );
    }

    public static get a_cs_6_focussed_sub() {

        return CssFunctions.add("a-cs-6-fs",
            style => selector(`.${style} ${CssContentStates.FOCUSED}`)
                .props({
                    outlineColor: CssColors.A_CO_1,
                    outlineStyle: "solid",
                    outlineWidth: 2 * CssContentStates.BORDER_WIDTH
                })
        );
    }

    public static get a_cs_7() {

        return CssFunctions.add("a-cs-7",
            style => selector("." + style)
                .props({
                    outlineColor: CssColors.A_CO_6,
                    outlineStyle: "solid",
                    outlineWidth: CssContentStates.BORDER_WIDTH
                })
        );
    }

    public static get a_cs_8() {

        return CssFunctions.add("a-cs-8",
            style => selector("." + style)
                .props({
                    outlineColor: CssColors.A_CO_2,
                    outlineStyle: "solid",
                    outlineWidth: CssContentStates.BORDER_WIDTH
                })
        );
    }

    public static get a_cs_9() {

        return CssFunctions.add("a-cs-9",
            style => selector("." + style)
                .props({
                    display: "block",
                    outlineColor: CssColors.A_CO_1,
                    outlineStyle: "solid",
                    outlineWidth: CssContentStates.BORDER_WIDTH
                })
        );
    }

    public static get a_cs_10() {

        return CssFunctions.add("a-cs-10",
            style => selector("." + style)
                .props({
                    outlineColor: CssColors.A_CO_9,
                    outlineStyle: "solid",
                    outlineWidth: 2
                })
        );
    }
}
