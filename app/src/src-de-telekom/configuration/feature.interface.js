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
define(["require", "exports", "../errorhandling/BaseError"], function (require, exports, BaseError_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FeatureError = void 0;
    var FeatureError = (function (_super) {
        __extends(FeatureError, _super);
        function FeatureError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x009;
            return _this;
        }
        return FeatureError;
    }(BaseError_1.BaseError));
    exports.FeatureError = FeatureError;
});
//# sourceMappingURL=feature.interface.js.map