define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.filterCurrency = void 0;
    function filterCurrency(value) {
        if (value === undefined) {
            return "NaN";
        }
        return value.toFixed(2).replace(/\./, ",") + "€";
    }
    exports.filterCurrency = filterCurrency;
});
//# sourceMappingURL=currency.filter.js.map