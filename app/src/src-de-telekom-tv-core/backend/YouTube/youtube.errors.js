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
    exports.YoutubeServiceClientError = exports.YoutubeInternalServerError = exports.YoutubeAuthenticationError = exports.YoutubeConfigurationError = exports.YoutubeUnknownError = exports.YoutubeBaseError = void 0;
    var YoutubeBaseError = (function (_super) {
        __extends(YoutubeBaseError, _super);
        function YoutubeBaseError(message, code, responseData) {
            var _this = _super.call(this, message) || this;
            _this.code = code;
            _this.responseData = responseData;
            _this.errorID = 0xB81;
            return _this;
        }
        YoutubeBaseError.prototype.getAdditionalErrorCode = function () {
            return public_1.Guard.isNumber(this.code) ? "" + this.code.toString(16) : undefined;
        };
        return YoutubeBaseError;
    }(public_1.BaseError));
    exports.YoutubeBaseError = YoutubeBaseError;
    var YoutubeUnknownError = (function (_super) {
        __extends(YoutubeUnknownError, _super);
        function YoutubeUnknownError(message, code, responseData) {
            var _this = _super.call(this, message, code, responseData) || this;
            _this.errorID = 0xB82;
            return _this;
        }
        return YoutubeUnknownError;
    }(YoutubeBaseError));
    exports.YoutubeUnknownError = YoutubeUnknownError;
    var YoutubeConfigurationError = (function (_super) {
        __extends(YoutubeConfigurationError, _super);
        function YoutubeConfigurationError(message, code) {
            var _this = _super.call(this, message, code) || this;
            _this.errorID = 0xB83;
            return _this;
        }
        return YoutubeConfigurationError;
    }(YoutubeBaseError));
    exports.YoutubeConfigurationError = YoutubeConfigurationError;
    var YoutubeAuthenticationError = (function (_super) {
        __extends(YoutubeAuthenticationError, _super);
        function YoutubeAuthenticationError(message, code, responseData) {
            var _this = _super.call(this, message, code, responseData) || this;
            _this.errorID = 0xB84;
            return _this;
        }
        return YoutubeAuthenticationError;
    }(YoutubeBaseError));
    exports.YoutubeAuthenticationError = YoutubeAuthenticationError;
    var YoutubeInternalServerError = (function (_super) {
        __extends(YoutubeInternalServerError, _super);
        function YoutubeInternalServerError(message, code, responseData) {
            var _this = _super.call(this, message, code, responseData) || this;
            _this.errorID = 0xB85;
            return _this;
        }
        return YoutubeInternalServerError;
    }(YoutubeBaseError));
    exports.YoutubeInternalServerError = YoutubeInternalServerError;
    var YoutubeServiceClientError = (function (_super) {
        __extends(YoutubeServiceClientError, _super);
        function YoutubeServiceClientError(message, code) {
            var _this = _super.call(this, message, code) || this;
            _this.errorID = 0xB86;
            return _this;
        }
        return YoutubeServiceClientError;
    }(YoutubeBaseError));
    exports.YoutubeServiceClientError = YoutubeServiceClientError;
});
//# sourceMappingURL=youtube.errors.js.map