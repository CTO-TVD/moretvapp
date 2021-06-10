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
    exports.ServiceClientRestServiceClientError = exports.ServiceClientRestInternalServerError = exports.ServiceClientRestAuthenticationError = exports.ServiceClientRestConfigurationError = exports.ServiceClientRestUnknownError = exports.ServiceClientRestBaseError = void 0;
    var ServiceClientRestBaseError = (function (_super) {
        __extends(ServiceClientRestBaseError, _super);
        function ServiceClientRestBaseError(message, code, responseData) {
            var _this = _super.call(this, message) || this;
            _this.code = code;
            _this.responseData = responseData;
            _this.errorID = 0xD00;
            return _this;
        }
        ServiceClientRestBaseError.prototype.getAdditionalErrorCode = function () {
            return public_1.Guard.isNumber(this.code) ? "" + this.code.toString(16) : undefined;
        };
        return ServiceClientRestBaseError;
    }(public_1.BaseError));
    exports.ServiceClientRestBaseError = ServiceClientRestBaseError;
    var ServiceClientRestUnknownError = (function (_super) {
        __extends(ServiceClientRestUnknownError, _super);
        function ServiceClientRestUnknownError(message, code, responseData) {
            var _this = _super.call(this, message, code, responseData) || this;
            _this.errorID = 0xD01;
            return _this;
        }
        return ServiceClientRestUnknownError;
    }(ServiceClientRestBaseError));
    exports.ServiceClientRestUnknownError = ServiceClientRestUnknownError;
    var ServiceClientRestConfigurationError = (function (_super) {
        __extends(ServiceClientRestConfigurationError, _super);
        function ServiceClientRestConfigurationError(message, code) {
            var _this = _super.call(this, message, code) || this;
            _this.errorID = 0xD02;
            return _this;
        }
        return ServiceClientRestConfigurationError;
    }(ServiceClientRestBaseError));
    exports.ServiceClientRestConfigurationError = ServiceClientRestConfigurationError;
    var ServiceClientRestAuthenticationError = (function (_super) {
        __extends(ServiceClientRestAuthenticationError, _super);
        function ServiceClientRestAuthenticationError(message, code, responseData) {
            var _this = _super.call(this, message, code, responseData) || this;
            _this.errorID = 0xD03;
            return _this;
        }
        return ServiceClientRestAuthenticationError;
    }(ServiceClientRestBaseError));
    exports.ServiceClientRestAuthenticationError = ServiceClientRestAuthenticationError;
    var ServiceClientRestInternalServerError = (function (_super) {
        __extends(ServiceClientRestInternalServerError, _super);
        function ServiceClientRestInternalServerError(message, code, responseData) {
            var _this = _super.call(this, message, code, responseData) || this;
            _this.errorID = 0xD04;
            return _this;
        }
        return ServiceClientRestInternalServerError;
    }(ServiceClientRestBaseError));
    exports.ServiceClientRestInternalServerError = ServiceClientRestInternalServerError;
    var ServiceClientRestServiceClientError = (function (_super) {
        __extends(ServiceClientRestServiceClientError, _super);
        function ServiceClientRestServiceClientError(message, code) {
            var _this = _super.call(this, message, code) || this;
            _this.errorID = 0xD05;
            return _this;
        }
        return ServiceClientRestServiceClientError;
    }(ServiceClientRestBaseError));
    exports.ServiceClientRestServiceClientError = ServiceClientRestServiceClientError;
});
//# sourceMappingURL=ServiceClientRest.errors.js.map