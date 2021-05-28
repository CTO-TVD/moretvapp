import { Css } from "./css";
import { selector, CssFunctions } from "./css.base";

export function commonHeaderStyles() {

    CssFunctions.appendStyle(

        selector(".header-dialog")
            .extend(Css.fonts2.a_fo_h6_2_mixin)
            .props({
                textAlign: "center"
            })
            .sub(selector("&.margin-standard")
                .props({
                    marginBottom: 12
                })),

        selector("h1")
            .extend(Css.fonts2.a_fo_b1_1_mixin)
            .props({
                textTransform: "uppercase",
                width: "100%",
                WebkitMarginAfter: 0,
                WebkitMarginBefore: 0,
                WebkitMarginStart: 0,
                WebkitMarginEnd: 0
            })
            .sub(selector("&.position-center")
                .props({
                    width: "50%",
                    margin: "0 auto",
                    textAlign: "center"
                })),

        selector("h2")
            .extend(Css.fonts2.a_fo_h6_2_mixin)
            .props({
                WebkitMarginAfter: 0,
                WebkitMarginBefore: 0,
                WebkitMarginStart: 0,
                WebkitMarginEnd: 0
            })
            .sub(selector("&.margin-standard")
                .props({
                    marginBottom: 19
                })),

        selector("h3")
            .extend(Css.fonts2.a_fo_b2_2__mixin)
            .props({
                textTransform: "uppercase",
                WebkitMarginAfter: 0,
                WebkitMarginBefore: 0,
                WebkitMarginStart: 0,
                WebkitMarginEnd: 0
            })
            .sub(selector("&.margin-standard")
                .props({
                    marginBottom: 42
                }))
            .sub(selector("&.margin-to-controls")
                .props({
                    marginBottom: 16
                }))
            .sub(selector("&.margin-to-controls-1")
                .props({
                    marginBottom: 44
                })),

        selector("h4")
            .extend(Css.fonts2.a_fo_b1_1_mixin)
            .props({
                color: Css.colors.A_CO_1,
                marginBottom: 4,
                WebkitMarginAfter: 0,
                WebkitMarginBefore: 0,
                WebkitMarginStart: 0,
                WebkitMarginEnd: 0
            })
    );
}
