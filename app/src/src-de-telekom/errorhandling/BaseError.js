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
define(["require", "exports", "../util/objectTools"], function (require, exports, objectTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfigurationError = exports.AbortError = exports.TimeoutError = exports.PromiseCancelError = exports.PromiseCanceledByUserError = exports.NotImplementedError = exports.IOError = exports.HttpError = exports.ClientAuthorizationRequiredError = exports.VodAuthorizationRequiredError = exports.IllegalArgumentError = exports.BaseError = void 0;
    var BaseError = (function (_super) {
        __extends(BaseError, _super);
        function BaseError(message) {
            var _newTarget = this.constructor;
            var _this = _super.call(this, message || "") || this;
            _this.message = message;
            _this.errorID = 0x000;
            objectTools_1.setPrototypeOf(_this, _newTarget.prototype);
            _this.name = (_this.constructor.toString().match(/\w+/g) || {})[1];
            return _this;
        }
        BaseError.prototype.getAdditionalErrorCode = function () {
            return null;
        };
        return BaseError;
    }(Error));
    exports.BaseError = BaseError;
    var IllegalArgumentError = (function (_super) {
        __extends(IllegalArgumentError, _super);
        function IllegalArgumentError(message, argumentName, argumentValue) {
            var _this = _super.call(this, message) || this;
            _this.errorID = 0x001;
            _this.argumentName = argumentName;
            _this.argumentValue = argumentValue;
            return _this;
        }
        return IllegalArgumentError;
    }(BaseError));
    exports.IllegalArgumentError = IllegalArgumentError;
    var VodAuthorizationRequiredError = (function (_super) {
        __extends(VodAuthorizationRequiredError, _super);
        function VodAuthorizationRequiredError(message, type) {
            var _this = _super.call(this, message) || this;
            _this.type = type;
            _this.errorID = 0x002;
            return _this;
        }
        return VodAuthorizationRequiredError;
    }(BaseError));
    exports.VodAuthorizationRequiredError = VodAuthorizationRequiredError;
    var ClientAuthorizationRequiredError = (function (_super) {
        __extends(ClientAuthorizationRequiredError, _super);
        function ClientAuthorizationRequiredError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x014;
            return _this;
        }
        return ClientAuthorizationRequiredError;
    }(BaseError));
    exports.ClientAuthorizationRequiredError = ClientAuthorizationRequiredError;
    var HttpError = (function (_super) {
        __extends(HttpError, _super);
        function HttpError(statusCode, requestURL) {
            var _this = _super.call(this, "http-error: " + statusCode + " URL: " + requestURL) || this;
            _this.statusCode = statusCode;
            _this.errorID = 0x003;
            return _this;
        }
        HttpError.prototype.getAdditionalErrorCode = function () {
            return this.statusCode ? this.statusCode.toString(10) : undefined;
        };
        return HttpError;
    }(BaseError));
    exports.HttpError = HttpError;
    var IOError = (function (_super) {
        __extends(IOError, _super);
        function IOError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x004;
            return _this;
        }
        return IOError;
    }(BaseError));
    exports.IOError = IOError;
    var NotImplementedError = (function (_super) {
        __extends(NotImplementedError, _super);
        function NotImplementedError(message, functionName) {
            var _this = _super.call(this, message || "") || this;
            _this.errorID = 0x005;
            _this.functionName = functionName;
            return _this;
        }
        return NotImplementedError;
    }(BaseError));
    exports.NotImplementedError = NotImplementedError;
    var PromiseCanceledByUserError = (function (_super) {
        __extends(PromiseCanceledByUserError, _super);
        function PromiseCanceledByUserError(message) {
            var _this = _super.call(this, message) || this;
            _this.errorID = 0x006;
            return _this;
        }
        return PromiseCanceledByUserError;
    }(BaseError));
    exports.PromiseCanceledByUserError = PromiseCanceledByUserError;
    var PromiseCancelError = (function (_super) {
        __extends(PromiseCancelError, _super);
        function PromiseCancelError(message) {
            var _this = _super.call(this, message || "") || this;
            _this.errorID = 0x007;
            return _this;
        }
        return PromiseCancelError;
    }(BaseError));
    exports.PromiseCancelError = PromiseCancelError;
    var TimeoutError = (function (_super) {
        __extends(TimeoutError, _super);
        function TimeoutError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x008;
            return _this;
        }
        return TimeoutError;
    }(BaseError));
    exports.TimeoutError = TimeoutError;
    var AbortError = (function (_super) {
        __extends(AbortError, _super);
        function AbortError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x00C;
            return _this;
        }
        return AbortError;
    }(BaseError));
    exports.AbortError = AbortError;
    var ConfigurationError = (function (_super) {
        __extends(ConfigurationError, _super);
        function ConfigurationError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x00F;
            return _this;
        }
        return ConfigurationError;
    }(BaseError));
    exports.ConfigurationError = ConfigurationError;
});
//# sourceMappingURL=BaseError.js.map