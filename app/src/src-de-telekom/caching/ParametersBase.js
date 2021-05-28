define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParametersBase = void 0;
    var ParametersBase = (function () {
        function ParametersBase() {
        }
        ParametersBase.prototype.getParams = function () {
            return null;
        };
        ParametersBase.prototype.getPostAndOther = function () {
            return null;
        };
        ParametersBase.prototype.getKeyString = function () {
            var builder = [];
            var params = this.getParams();
            if (params) {
                for (var key in params) {
                    builder.push(params[key].key);
                    builder.push("__");
                    builder.push(params[key].value);
                    builder.push("__");
                }
            }
            var postData = this.getPostAndOther();
            if (postData) {
                builder.push(postData);
            }
            return builder.join("");
        };
        return ParametersBase;
    }());
    exports.ParametersBase = ParametersBase;
});
//# sourceMappingURL=ParametersBase.js.map