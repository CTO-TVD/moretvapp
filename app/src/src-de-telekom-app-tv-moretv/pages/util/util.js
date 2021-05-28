define(["require", "exports", "src/src-de-telekom/public", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom-tv-moretv/public"], function (require, exports, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertMTVErrors = exports.Styles = exports.convertMtvThemepack = void 0;
    function convertMtvThemepack(cat) {
        var _a, _b;
        var background = {
            image: ((_a = cat === null || cat === void 0 ? void 0 : cat.CustomImages) === null || _a === void 0 ? void 0 : _a.wlBackgroundImage) ? public_1.ImageScale.scale(cat.CustomImages.wlBackgroundImage, {
                y: 1080,
                x: 720,
                ar: "ignore"
            }) : undefined,
            dimmed: false,
            logo: ((_b = cat === null || cat === void 0 ? void 0 : cat.CustomImages) === null || _b === void 0 ? void 0 : _b.wlLogo) ? public_1.ImageScale.scale(cat.CustomImages.wlLogo, {
                y: 120,
                ar: "keep"
            }) : undefined
        };
        var colors = new Map();
        var keysValues = Object.keys(public_2.TvThemepackKeys).map(function (it) { return public_2.TvThemepackKeys[it]; });
        if (cat === null || cat === void 0 ? void 0 : cat.CustomValues) {
            for (var cv in cat.CustomValues) {
                if (keysValues.indexOf(cv) >= 0) {
                    colors.set(cv, cat.CustomValues[cv]);
                }
            }
        }
        var themepack = {
            images: undefined,
            colors: colors,
            strings: undefined,
            cssclasses: undefined
        };
        return {
            background: background,
            themepack: themepack
        };
    }
    exports.convertMtvThemepack = convertMtvThemepack;
    var Styles = (function () {
        function Styles() {
        }
        Styles.Separator = public_3.declaration()
            .props({
            margin: 0,
            height: 3,
            display: "-webkit-box",
            width: "100%",
            marginBottom: 1,
            backgroundColor: public_3.Css.colors.A_CO_1_30
        });
        return Styles;
    }());
    exports.Styles = Styles;
    function convertMTVErrors(error) {
        if (error.backendCode == "ERROR_BOOKING_CONDITION") {
            switch (error.backendCodeDetail) {
                case "MTV_ERROR_PACKAGE_ALREADY_BOOKED": return public_4.MTVErrorCode.ERROR_BOOKING_CONDITION_BOOKED;
                case "ERR_ORDER_NOT_POSSIBLE": return public_4.MTVErrorCode.ERROR_BOOKING_CONDITION_PENDING_ORDER;
                case "ERR_CUST_EMAIL_NOT_EXIST": return public_4.MTVErrorCode.ERROR_BOOKING_CONDITION_EMAIL;
                case "ERR_CUST_CALLBACK_NOT_EXIST":
                case "ERR_CUST_CALLBACKNUMBER_NOT_EXIST": return public_4.MTVErrorCode.ERROR_BOOKING_CONDITION_PHONE;
                default: return public_4.MTVErrorCode.ERROR_BOOKING_CONDITION;
            }
        }
        else {
            return public_4.MTVErrorCode.BACKEND_GENERAL;
        }
    }
    exports.convertMTVErrors = convertMTVErrors;
});
//# sourceMappingURL=util.js.map