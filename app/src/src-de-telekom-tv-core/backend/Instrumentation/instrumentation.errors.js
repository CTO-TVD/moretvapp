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
define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InstrumentationConfigurationError = exports.InstrumentationUnknownError = exports.InstrumentationBaseError = void 0;
    var InstrumentationBaseError = (function (_super) {
        __extends(InstrumentationBaseError, _super);
        function InstrumentationBaseError(message, code, responseData) {
            var _this = _super.call(this, message) || this;
            _this.code = code;
            _this.responseData = responseData;
            _this.errorID = 0xA01;
            return _this;
        }
        InstrumentationBaseError.prototype.getAdditionalErrorCode = function () {
            return public_1.Guard.isNumber(this.code) ? "" + public_1.StringTools.convertToHexString(this.code, 2) : undefined;
        };
        return InstrumentationBaseError;
    }(public_1.BaseError));
    exports.InstrumentationBaseError = InstrumentationBaseError;
    var InstrumentationUnknownError = (function (_super) {
        __extends(InstrumentationUnknownError, _super);
        function InstrumentationUnknownError(message, code, responseData) {
            var _this = _super.call(this, message, code, responseData) || this;
            _this.errorID = 0xA02;
            return _this;
        }
        return InstrumentationUnknownError;
    }(InstrumentationBaseError));
    exports.InstrumentationUnknownError = InstrumentationUnknownError;
    var InstrumentationConfigurationError = (function (_super) {
        __extends(InstrumentationConfigurationError, _super);
        function InstrumentationConfigurationError(message, code) {
            var _this = _super.call(this, message, code) || this;
            _this.errorID = 0xA03;
            return _this;
        }
        return InstrumentationConfigurationError;
    }(InstrumentationBaseError));
    exports.InstrumentationConfigurationError = InstrumentationConfigurationError;
});
//# sourceMappingURL=instrumentation.errors.js.map