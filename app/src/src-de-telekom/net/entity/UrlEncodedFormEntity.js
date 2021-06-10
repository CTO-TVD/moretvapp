var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "URIjs/URI", "./StringEntity"], function (require, exports, urijs, StringEntity_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UrlEncodedFormEntity = void 0;
    var UrlEncodedFormEntity = (function (_super) {
        __extends(UrlEncodedFormEntity, _super);
        function UrlEncodedFormEntity(parameters) {
            var _this = this;
            var data = new urijs("");
            for (var _i = 0, parameters_1 = parameters; _i < parameters_1.length; _i++) {
                var param = parameters_1[_i];
                data.addQuery(param.key, param.value);
            }
            _this = _super.call(this, data.query(), "application/x-www-form-urlencoded") || this;
            return _this;
        }
        return UrlEncodedFormEntity;
    }(StringEntity_1.StringEntity));
    exports.UrlEncodedFormEntity = UrlEncodedFormEntity;
});
//# sourceMappingURL=UrlEncodedFormEntity.js.map