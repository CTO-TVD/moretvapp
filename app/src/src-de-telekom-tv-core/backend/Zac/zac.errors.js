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
    exports.ZacAuthenticationProcessError = exports.ZacMediaPlayerError = exports.ZacAppManagerError = exports.ZacBaseError = void 0;
    var ZacBaseError = (function (_super) {
        __extends(ZacBaseError, _super);
        function ZacBaseError(errorCode, message) {
            var _this = _super.call(this, message) || this;
            _this.errorCode = errorCode;
            _this.errorID = 0x201;
            return _this;
        }
        return ZacBaseError;
    }(public_1.BaseError));
    exports.ZacBaseError = ZacBaseError;
    var ZacAppManagerError = (function (_super) {
        __extends(ZacAppManagerError, _super);
        function ZacAppManagerError(errorCode, message) {
            var _this = _super.call(this, errorCode, message) || this;
            _this.errorID = 0x202;
            return _this;
        }
        return ZacAppManagerError;
    }(ZacBaseError));
    exports.ZacAppManagerError = ZacAppManagerError;
    var ZacMediaPlayerError = (function (_super) {
        __extends(ZacMediaPlayerError, _super);
        function ZacMediaPlayerError(errorCode, message) {
            var _this = _super.call(this, errorCode, message) || this;
            _this.errorID = 0x203;
            return _this;
        }
        ZacMediaPlayerError.prototype.getAdditionalErrorCode = function () {
            return this.errorCode + "." + this.SubReason;
        };
        return ZacMediaPlayerError;
    }(ZacBaseError));
    exports.ZacMediaPlayerError = ZacMediaPlayerError;
    var ZacAuthenticationProcessError = (function (_super) {
        __extends(ZacAuthenticationProcessError, _super);
        function ZacAuthenticationProcessError(message) {
            var _this = _super.call(this, 0, message) || this;
            _this.errorID = 0x204;
            return _this;
        }
        ZacAuthenticationProcessError.prototype.getAdditionalErrorCode = function () {
            return "" + this.ReturnCode;
        };
        return ZacAuthenticationProcessError;
    }(ZacBaseError));
    exports.ZacAuthenticationProcessError = ZacAuthenticationProcessError;
});
//# sourceMappingURL=zac.errors.js.map