var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NetflixServiceClientError = exports.NetflixInternalServerError = exports.NetflixAuthenticationError = exports.NetflixConfigurationError = exports.NetflixUnknownError = exports.NetflixEsnBundleError = exports.NetflixBaseError = void 0;
    var NetflixBaseError = (function (_super) {
        __extends(NetflixBaseError, _super);
        function NetflixBaseError(message, code, responseData) {
            var _this = _super.call(this, message) || this;
            _this.code = code;
            _this.responseData = responseData;
            _this.errorID = 0xB01;
            return _this;
        }
        NetflixBaseError.prototype.getAdditionalErrorCode = function () {
            return public_1.Guard.isNumber(this.code) ? "" + this.code.toString(16) : undefined;
        };
        return NetflixBaseError;
    }(public_1.BaseError));
    exports.NetflixBaseError = NetflixBaseError;
    var NetflixEsnBundleError = (function (_super) {
        __extends(NetflixEsnBundleError, _super);
        function NetflixEsnBundleError(message, error) {
            var _this = _super.call(this, message) || this;
            _this.error = error;
            _this.errorID = 0xB00;
            return _this;
        }
        return NetflixEsnBundleError;
    }(public_1.BaseError));
    exports.NetflixEsnBundleError = NetflixEsnBundleError;
    var NetflixUnknownError = (function (_super) {
        __extends(NetflixUnknownError, _super);
        function NetflixUnknownError(message, code, responseData) {
            var _this = _super.call(this, message, code, responseData) || this;
            _this.errorID = 0xB02;
            return _this;
        }
        return NetflixUnknownError;
    }(NetflixBaseError));
    exports.NetflixUnknownError = NetflixUnknownError;
    var NetflixConfigurationError = (function (_super) {
        __extends(NetflixConfigurationError, _super);
        function NetflixConfigurationError(message, code) {
            var _this = _super.call(this, message, code) || this;
            _this.errorID = 0xB03;
            return _this;
        }
        return NetflixConfigurationError;
    }(NetflixBaseError));
    exports.NetflixConfigurationError = NetflixConfigurationError;
    var NetflixAuthenticationError = (function (_super) {
        __extends(NetflixAuthenticationError, _super);
        function NetflixAuthenticationError(message, cookie, code, responseData) {
            var _this = _super.call(this, message, code, responseData) || this;
            _this.cookie = cookie;
            _this.errorID = 0xB04;
            var cookieLength = _this.cookie ? _this.cookie.length : 0;
            _this.message = _this.message + " - Length of authentication cookies: " + cookieLength;
            return _this;
        }
        return NetflixAuthenticationError;
    }(NetflixBaseError));
    exports.NetflixAuthenticationError = NetflixAuthenticationError;
    var NetflixInternalServerError = (function (_super) {
        __extends(NetflixInternalServerError, _super);
        function NetflixInternalServerError(message, code, responseData) {
            var _this = _super.call(this, message, code, responseData) || this;
            _this.errorID = 0xB05;
            return _this;
        }
        return NetflixInternalServerError;
    }(NetflixBaseError));
    exports.NetflixInternalServerError = NetflixInternalServerError;
    var NetflixServiceClientError = (function (_super) {
        __extends(NetflixServiceClientError, _super);
        function NetflixServiceClientError(message, code) {
            var _this = _super.call(this, message, code) || this;
            _this.errorID = 0xB06;
            return _this;
        }
        return NetflixServiceClientError;
    }(NetflixBaseError));
    exports.NetflixServiceClientError = NetflixServiceClientError;
});
//# sourceMappingURL=netflix.errors.js.map