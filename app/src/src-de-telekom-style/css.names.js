define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CssNames = void 0;
    var CssNames = (function () {
        function CssNames() {
        }
        CssNames.getVendorName = function (name) {
            var elementStyle = document.createElement("div").style;
            var vendors = ["", "webkit", "Moz", "ms", "O"];
            for (var _i = 0, vendors_1 = vendors; _i < vendors_1.length; _i++) {
                var vendor = vendors_1[_i];
                var vendorName = vendor === "" ? name : vendor + name.substr(0, 1).toUpperCase() + name.substr(1);
                if (vendorName in elementStyle)
                    return vendorName;
            }
            return "transform";
        };
        CssNames.transform = CssNames.getVendorName("transform");
        CssNames.transition = CssNames.getVendorName("transition");
        return CssNames;
    }());
    exports.CssNames = CssNames;
});
//# sourceMappingURL=css.names.js.map