define(["require", "exports", "./css", "./css.base"], function (require, exports, css_1, css_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.commonHeaderStyles = void 0;
    function commonHeaderStyles() {
        css_base_1.CssFunctions.appendStyle(css_base_1.selector(".header-dialog")
            .extend(css_1.Css.fonts2.a_fo_h6_2_mixin)
            .props({
            textAlign: "center"
        })
            .sub(css_base_1.selector("&.margin-standard")
            .props({
            marginBottom: 12
        })), css_base_1.selector("h1")
            .extend(css_1.Css.fonts2.a_fo_b1_1_mixin)
            .props({
            textTransform: "uppercase",
            width: "100%",
            WebkitMarginAfter: 0,
            WebkitMarginBefore: 0,
            WebkitMarginStart: 0,
            WebkitMarginEnd: 0
        })
            .sub(css_base_1.selector("&.position-center")
            .props({
            width: "50%",
            margin: "0 auto",
            textAlign: "center"
        })), css_base_1.selector("h2")
            .extend(css_1.Css.fonts2.a_fo_h6_2_mixin)
            .props({
            WebkitMarginAfter: 0,
            WebkitMarginBefore: 0,
            WebkitMarginStart: 0,
            WebkitMarginEnd: 0
        })
            .sub(css_base_1.selector("&.margin-standard")
            .props({
            marginBottom: 19
        })), css_base_1.selector("h3")
            .extend(css_1.Css.fonts2.a_fo_b2_2__mixin)
            .props({
            textTransform: "uppercase",
            WebkitMarginAfter: 0,
            WebkitMarginBefore: 0,
            WebkitMarginStart: 0,
            WebkitMarginEnd: 0
        })
            .sub(css_base_1.selector("&.margin-standard")
            .props({
            marginBottom: 42
        }))
            .sub(css_base_1.selector("&.margin-to-controls")
            .props({
            marginBottom: 16
        }))
            .sub(css_base_1.selector("&.margin-to-controls-1")
            .props({
            marginBottom: 44
        })), css_base_1.selector("h4")
            .extend(css_1.Css.fonts2.a_fo_b1_1_mixin)
            .props({
            color: css_1.Css.colors.A_CO_1,
            marginBottom: 4,
            WebkitMarginAfter: 0,
            WebkitMarginBefore: 0,
            WebkitMarginStart: 0,
            WebkitMarginEnd: 0
        }));
    }
    exports.commonHeaderStyles = commonHeaderStyles;
});
//# sourceMappingURL=css.commonheader.js.map