define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColorHelper = void 0;
    var ColorHelper = (function () {
        function ColorHelper() {
        }
        ColorHelper.argbHexToRgbaString = function (hex) {
            var v = ColorHelper.argbHexToRgba(hex);
            return "rgba(" + v.r + ", " + v.g + ", " + v.b + ", " + v.a + ")";
        };
        ColorHelper.argbHexToRgba = function (hex) {
            if (!hex || hex.length !== 8) {
                return { r: 0, g: 0, b: 0, a: 0 };
            }
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[2], 16),
                g: parseInt(result[3], 16),
                b: parseInt(result[4], 16),
                a: Math.round((parseInt(result[1], 16) / 255) * 1000) / 1000
            } : { r: 0, g: 0, b: 0, a: 0 };
        };
        ColorHelper.hexToRgb = function (hex) {
            var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
            hex = hex.replace(shorthandRegex, function (m, r, g, b) {
                return r + r + g + g + b + b;
            });
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        };
        return ColorHelper;
    }());
    exports.ColorHelper = ColorHelper;
});
//# sourceMappingURL=color_helper.js.map