define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Enums = void 0;
    var Enums = (function () {
        function Enums() {
        }
        Enums.getNames = function (enumeration) {
            return Object.keys(enumeration).filter(function (v) { return isNaN(parseInt(v, 10)); });
        };
        Enums.getValues = function (enumeration) {
            return Object.keys(enumeration).map(function (v) { return parseInt(v, 10); }).filter(function (v) { return !isNaN(v); });
        };
        return Enums;
    }());
    exports.Enums = Enums;
});
//# sourceMappingURL=Enums.js.map