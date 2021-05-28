define(["require", "exports", "./css.base", "./css.colors", "./css.dimensions"], function (require, exports, css_base_1, css_colors_1, css_dimensions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CssMixins = void 0;
    var CssMixins = (function () {
        function CssMixins() {
        }
        CssMixins.borderControl = css_base_1.declaration()
            .props({
            border: css_base_1.CssFunctions.scale(3) + "px solid " + css_colors_1.CssColors.global_focus_background
        });
        CssMixins.borderWithRadiusControl = css_base_1.declaration()
            .extend(CssMixins.borderControl)
            .props({
            borderRadius: css_dimensions_1.CssDimensions.borderRadius
        });
        CssMixins.borderCheckedControl = css_base_1.declaration()
            .props({
            border: css_base_1.CssFunctions.scale(5) + "px solid " + css_colors_1.CssColors.A_CO_11,
            transform: "rotate(-45deg)",
            borderTop: "none",
            borderRight: "none"
        });
        CssMixins.borderBottomGrey = css_base_1.declaration()
            .props({
            borderBottom: css_base_1.CssFunctions.scale(3) + "px solid " + css_colors_1.CssColors.A_CO_7
        });
        CssMixins.borderTopGrey = css_base_1.declaration()
            .props({
            borderTop: css_base_1.CssFunctions.scale(3) + "px solid " + css_colors_1.CssColors.A_CO_7
        });
        CssMixins.systemfeedbackPanel = css_base_1.declaration()
            .props({
            position: "absolute",
            left: css_dimensions_1.CssDimensions.screenWidth - css_dimensions_1.CssDimensions.safeareaLeft - 216,
            top: 0,
            width: 216,
            height: 192 + css_dimensions_1.CssDimensions.safeareaTop,
            backgroundColor: css_colors_1.CssColors.global_background_systemfeedback_transparent
        });
        CssMixins.singlelineEllipsis = css_base_1.declaration()
            .props({
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
        });
        CssMixins.twolineEllipsis = css_base_1.declaration()
            .props({
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            wordWrap: "break-word"
        });
        CssMixins.threelineEllipsis = css_base_1.declaration()
            .props({
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            wordWrap: "break-word"
        });
        CssMixins.fourlineEllipsis = css_base_1.declaration()
            .props({
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            wordWrap: "break-word"
        });
        CssMixins.golden_ratio_center = css_base_1.declaration()
            .props({
            top: "38%",
            left: "50%",
            transform: "translate(-50%, -38%);"
        });
        return CssMixins;
    }());
    exports.CssMixins = CssMixins;
});
//# sourceMappingURL=css.mixins.js.map