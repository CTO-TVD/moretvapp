import { declaration, CssFunctions } from "./css.base";
import { CssColors } from "./css.colors";
import { CssDimensions } from "./css.dimensions";

export class CssMixins {

    public static readonly borderControl = declaration()
        .props({
            border: `${CssFunctions.scale(3)}px solid ${CssColors.global_focus_background}`
        });

    public static readonly borderWithRadiusControl = declaration()
        .extend(CssMixins.borderControl)
        .props({
            borderRadius: CssDimensions.borderRadius
        });

    public static readonly borderCheckedControl = declaration()
        .props({
            border: `${CssFunctions.scale(5)}px solid ${CssColors.A_CO_11}`,
            transform: "rotate(-45deg)",
            borderTop: "none",
            borderRight: "none"
        });

    public static readonly borderBottomGrey = declaration()
        .props({
            borderBottom: `${CssFunctions.scale(3)}px solid ${CssColors.A_CO_7}`
        });

    public static readonly borderTopGrey = declaration()
        .props({
            borderTop: `${CssFunctions.scale(3)}px solid ${CssColors.A_CO_7}`
        });

    public static readonly systemfeedbackPanel = declaration()
        .props({
            position: "absolute",
            left: CssDimensions.screenWidth - CssDimensions.safeareaLeft - 216,
            top: 0,
            width: 216,
            height: 192 + CssDimensions.safeareaTop,
            backgroundColor: CssColors.global_background_systemfeedback_transparent
        });

    public static readonly singlelineEllipsis = declaration()
        .props({
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
        });

    public static readonly twolineEllipsis = declaration()
        .props({
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            wordWrap: "break-word"
        });

    public static readonly threelineEllipsis = declaration()
        .props({
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            wordWrap: "break-word"
        });

    public static readonly fourlineEllipsis = declaration()
        .props({
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            wordWrap: "break-word"
        });

    public static readonly golden_ratio_center = declaration()
        .props({
            top: "38%",
            left: "50%",
            transform: "translate(-50%, -38%);"
        });
}
