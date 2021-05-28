define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticHelper = void 0;
    var DiagnosticHelper = (function () {
        function DiagnosticHelper() {
        }
        DiagnosticHelper.groupBy = function (array, keyFunc) {
            var result = {};
            array.forEach(function (item) {
                var key = keyFunc(item);
                if (!result[key]) {
                    result[key] = [];
                }
                result[key].push(item);
            });
            return result;
        };
        DiagnosticHelper.millisecondsToDate = function (milliseconds) {
            var getNumberStringFunc = function (value, numDigits) {
                if (numDigits === void 0) { numDigits = 2; }
                var strValue = String(value);
                while (strValue.length < numDigits) {
                    strValue = "0" + strValue;
                }
                return strValue;
            };
            var date = new Date(milliseconds);
            return getNumberStringFunc(date.getDate()) + "." + getNumberStringFunc(date.getMonth() + 1) + "." + date.getFullYear() + " " + getNumberStringFunc(date.getHours()) + ":" + getNumberStringFunc(date.getMinutes()) + ":" + getNumberStringFunc(date.getSeconds()) + "." + getNumberStringFunc(date.getMilliseconds(), 3);
        };
        return DiagnosticHelper;
    }());
    exports.DiagnosticHelper = DiagnosticHelper;
});
//# sourceMappingURL=diagnostic.helper.js.map