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
    exports.ZosaSessionExpiredError = exports.ZosaDefaultFallbackError = exports.ZosaDeviceNotAvailableError = exports.ZosaAccountLockedError = exports.ZosaAlreadyExistsError = exports.ZosaInsufficientStorageError = exports.ZosaTimeoutError = exports.ZosaRestrictedAccessError = exports.ZosaRecordingConflictError = exports.ZosaParentalControlBlockedError = exports.ZosaOperationPendingError = exports.ZosaNotSubscribedError = exports.ZosaNotProvisionedError = exports.ZosaNotLoggedInError = exports.ZosaNotFoundError = exports.ZosaInvalidParameterError = exports.ZosaInvalidOperationError = exports.ZosaInvalidCredentialsError = exports.ZosaCanceledError = exports.ZosaInsufficientWanBandwidthError = exports.ZosaInsufficientResourcesError = exports.ZosaInsufficientBandwidthError = exports.ZosaFeatureNotSupportedError = exports.ZosaContentRestrictionError = exports.ZosaCommunicationError = exports.ZosaUnknownError = exports.ZosaBaseError = exports.ZosaDataValidationError = exports.ZosaParseError = exports.ZosaLoginDelayError = exports.ZosaPerformanceError = exports.ZosaAuthenticationProcessError = exports.ZosaInternalTimeoutError = void 0;
    var ZosaInternalTimeoutError = (function (_super) {
        __extends(ZosaInternalTimeoutError, _super);
        function ZosaInternalTimeoutError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x122;
            return _this;
        }
        return ZosaInternalTimeoutError;
    }(public_1.BaseError));
    exports.ZosaInternalTimeoutError = ZosaInternalTimeoutError;
    var ZosaAuthenticationProcessError = (function (_super) {
        __extends(ZosaAuthenticationProcessError, _super);
        function ZosaAuthenticationProcessError(message, delayTime, additionalErrorCode) {
            var _this = _super.call(this, message) || this;
            _this.delayTime = delayTime;
            _this.additionalErrorCode = additionalErrorCode;
            _this.errorID = 0x123;
            return _this;
        }
        ZosaAuthenticationProcessError.prototype.getAdditionalErrorCode = function () {
            return this.additionalErrorCode;
        };
        return ZosaAuthenticationProcessError;
    }(public_1.BaseError));
    exports.ZosaAuthenticationProcessError = ZosaAuthenticationProcessError;
    var ZosaPerformanceError = (function (_super) {
        __extends(ZosaPerformanceError, _super);
        function ZosaPerformanceError(message, timeMs) {
            var _this = _super.call(this, message) || this;
            _this.errorID = 0x124;
            _this.timeMs = Math.round(timeMs);
            return _this;
        }
        ZosaPerformanceError.prototype.getAdditionalErrorCode = function () {
            return (this.timeMs || 0).toString();
        };
        return ZosaPerformanceError;
    }(public_1.BaseError));
    exports.ZosaPerformanceError = ZosaPerformanceError;
    var ZosaLoginDelayError = (function (_super) {
        __extends(ZosaLoginDelayError, _super);
        function ZosaLoginDelayError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x118;
            return _this;
        }
        return ZosaLoginDelayError;
    }(public_1.BaseError));
    exports.ZosaLoginDelayError = ZosaLoginDelayError;
    var ZosaParseError = (function (_super) {
        __extends(ZosaParseError, _super);
        function ZosaParseError(message, additionalErrorCode) {
            var _this = _super.call(this, message) || this;
            _this.additionalErrorCode = additionalErrorCode;
            _this.errorID = 0x117;
            return _this;
        }
        ZosaParseError.prototype.getAdditionalErrorCode = function () {
            return this.additionalErrorCode;
        };
        return ZosaParseError;
    }(public_1.BaseError));
    exports.ZosaParseError = ZosaParseError;
    var ZosaDataValidationError = (function (_super) {
        __extends(ZosaDataValidationError, _super);
        function ZosaDataValidationError(message, additionalErrorCode) {
            var _this = _super.call(this, message) || this;
            _this.additionalErrorCode = additionalErrorCode;
            _this.errorID = 0x127;
            return _this;
        }
        ZosaDataValidationError.prototype.getAdditionalErrorCode = function () {
            return this.additionalErrorCode;
        };
        return ZosaDataValidationError;
    }(public_1.BaseError));
    exports.ZosaDataValidationError = ZosaDataValidationError;
    var ZosaBaseError = (function (_super) {
        __extends(ZosaBaseError, _super);
        function ZosaBaseError(message, zosaError) {
            var _this = _super.call(this, message) || this;
            _this.zosaError = zosaError;
            _this.errorID = 0x101;
            return _this;
        }
        Object.defineProperty(ZosaBaseError.prototype, "errorCode", {
            get: function () {
                var _a, _b;
                return (_b = (_a = this.zosaError) === null || _a === void 0 ? void 0 : _a.code) !== null && _b !== void 0 ? _b : 0;
            },
            enumerable: false,
            configurable: true
        });
        ZosaBaseError.prototype.getAdditionalErrorCode = function () {
            return typeof this.errorCode === "number" ? this.errorCode.toString() : _super.prototype.getAdditionalErrorCode.call(this);
        };
        return ZosaBaseError;
    }(public_1.BaseError));
    exports.ZosaBaseError = ZosaBaseError;
    var ZosaUnknownError = (function (_super) {
        __extends(ZosaUnknownError, _super);
        function ZosaUnknownError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x102;
            return _this;
        }
        return ZosaUnknownError;
    }(ZosaBaseError));
    exports.ZosaUnknownError = ZosaUnknownError;
    var ZosaCommunicationError = (function (_super) {
        __extends(ZosaCommunicationError, _super);
        function ZosaCommunicationError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x103;
            return _this;
        }
        return ZosaCommunicationError;
    }(ZosaBaseError));
    exports.ZosaCommunicationError = ZosaCommunicationError;
    var ZosaContentRestrictionError = (function (_super) {
        __extends(ZosaContentRestrictionError, _super);
        function ZosaContentRestrictionError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x104;
            return _this;
        }
        return ZosaContentRestrictionError;
    }(ZosaBaseError));
    exports.ZosaContentRestrictionError = ZosaContentRestrictionError;
    var ZosaFeatureNotSupportedError = (function (_super) {
        __extends(ZosaFeatureNotSupportedError, _super);
        function ZosaFeatureNotSupportedError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x105;
            return _this;
        }
        return ZosaFeatureNotSupportedError;
    }(ZosaBaseError));
    exports.ZosaFeatureNotSupportedError = ZosaFeatureNotSupportedError;
    var ZosaInsufficientBandwidthError = (function (_super) {
        __extends(ZosaInsufficientBandwidthError, _super);
        function ZosaInsufficientBandwidthError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x106;
            return _this;
        }
        return ZosaInsufficientBandwidthError;
    }(ZosaBaseError));
    exports.ZosaInsufficientBandwidthError = ZosaInsufficientBandwidthError;
    var ZosaInsufficientResourcesError = (function (_super) {
        __extends(ZosaInsufficientResourcesError, _super);
        function ZosaInsufficientResourcesError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x107;
            return _this;
        }
        return ZosaInsufficientResourcesError;
    }(ZosaBaseError));
    exports.ZosaInsufficientResourcesError = ZosaInsufficientResourcesError;
    var ZosaInsufficientWanBandwidthError = (function (_super) {
        __extends(ZosaInsufficientWanBandwidthError, _super);
        function ZosaInsufficientWanBandwidthError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x125;
            return _this;
        }
        return ZosaInsufficientWanBandwidthError;
    }(ZosaBaseError));
    exports.ZosaInsufficientWanBandwidthError = ZosaInsufficientWanBandwidthError;
    var ZosaCanceledError = (function (_super) {
        __extends(ZosaCanceledError, _super);
        function ZosaCanceledError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x126;
            return _this;
        }
        return ZosaCanceledError;
    }(ZosaBaseError));
    exports.ZosaCanceledError = ZosaCanceledError;
    var ZosaInvalidCredentialsError = (function (_super) {
        __extends(ZosaInvalidCredentialsError, _super);
        function ZosaInvalidCredentialsError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x108;
            return _this;
        }
        return ZosaInvalidCredentialsError;
    }(ZosaBaseError));
    exports.ZosaInvalidCredentialsError = ZosaInvalidCredentialsError;
    var ZosaInvalidOperationError = (function (_super) {
        __extends(ZosaInvalidOperationError, _super);
        function ZosaInvalidOperationError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x109;
            return _this;
        }
        return ZosaInvalidOperationError;
    }(ZosaBaseError));
    exports.ZosaInvalidOperationError = ZosaInvalidOperationError;
    var ZosaInvalidParameterError = (function (_super) {
        __extends(ZosaInvalidParameterError, _super);
        function ZosaInvalidParameterError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x10A;
            return _this;
        }
        return ZosaInvalidParameterError;
    }(ZosaBaseError));
    exports.ZosaInvalidParameterError = ZosaInvalidParameterError;
    var ZosaNotFoundError = (function (_super) {
        __extends(ZosaNotFoundError, _super);
        function ZosaNotFoundError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x10B;
            return _this;
        }
        return ZosaNotFoundError;
    }(ZosaBaseError));
    exports.ZosaNotFoundError = ZosaNotFoundError;
    var ZosaNotLoggedInError = (function (_super) {
        __extends(ZosaNotLoggedInError, _super);
        function ZosaNotLoggedInError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x10C;
            return _this;
        }
        return ZosaNotLoggedInError;
    }(ZosaBaseError));
    exports.ZosaNotLoggedInError = ZosaNotLoggedInError;
    var ZosaNotProvisionedError = (function (_super) {
        __extends(ZosaNotProvisionedError, _super);
        function ZosaNotProvisionedError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x10D;
            return _this;
        }
        return ZosaNotProvisionedError;
    }(ZosaBaseError));
    exports.ZosaNotProvisionedError = ZosaNotProvisionedError;
    var ZosaNotSubscribedError = (function (_super) {
        __extends(ZosaNotSubscribedError, _super);
        function ZosaNotSubscribedError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x10E;
            return _this;
        }
        return ZosaNotSubscribedError;
    }(ZosaBaseError));
    exports.ZosaNotSubscribedError = ZosaNotSubscribedError;
    var ZosaOperationPendingError = (function (_super) {
        __extends(ZosaOperationPendingError, _super);
        function ZosaOperationPendingError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x10F;
            return _this;
        }
        return ZosaOperationPendingError;
    }(ZosaBaseError));
    exports.ZosaOperationPendingError = ZosaOperationPendingError;
    var ZosaParentalControlBlockedError = (function (_super) {
        __extends(ZosaParentalControlBlockedError, _super);
        function ZosaParentalControlBlockedError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x110;
            return _this;
        }
        return ZosaParentalControlBlockedError;
    }(ZosaBaseError));
    exports.ZosaParentalControlBlockedError = ZosaParentalControlBlockedError;
    var ZosaRecordingConflictError = (function (_super) {
        __extends(ZosaRecordingConflictError, _super);
        function ZosaRecordingConflictError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x111;
            return _this;
        }
        return ZosaRecordingConflictError;
    }(ZosaBaseError));
    exports.ZosaRecordingConflictError = ZosaRecordingConflictError;
    var ZosaRestrictedAccessError = (function (_super) {
        __extends(ZosaRestrictedAccessError, _super);
        function ZosaRestrictedAccessError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x112;
            return _this;
        }
        return ZosaRestrictedAccessError;
    }(ZosaBaseError));
    exports.ZosaRestrictedAccessError = ZosaRestrictedAccessError;
    var ZosaTimeoutError = (function (_super) {
        __extends(ZosaTimeoutError, _super);
        function ZosaTimeoutError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x114;
            return _this;
        }
        return ZosaTimeoutError;
    }(ZosaBaseError));
    exports.ZosaTimeoutError = ZosaTimeoutError;
    var ZosaInsufficientStorageError = (function (_super) {
        __extends(ZosaInsufficientStorageError, _super);
        function ZosaInsufficientStorageError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x115;
            return _this;
        }
        return ZosaInsufficientStorageError;
    }(ZosaBaseError));
    exports.ZosaInsufficientStorageError = ZosaInsufficientStorageError;
    var ZosaAlreadyExistsError = (function (_super) {
        __extends(ZosaAlreadyExistsError, _super);
        function ZosaAlreadyExistsError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x128;
            return _this;
        }
        return ZosaAlreadyExistsError;
    }(ZosaBaseError));
    exports.ZosaAlreadyExistsError = ZosaAlreadyExistsError;
    var ZosaAccountLockedError = (function (_super) {
        __extends(ZosaAccountLockedError, _super);
        function ZosaAccountLockedError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x116;
            return _this;
        }
        return ZosaAccountLockedError;
    }(ZosaBaseError));
    exports.ZosaAccountLockedError = ZosaAccountLockedError;
    var ZosaDeviceNotAvailableError = (function (_super) {
        __extends(ZosaDeviceNotAvailableError, _super);
        function ZosaDeviceNotAvailableError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x119;
            return _this;
        }
        return ZosaDeviceNotAvailableError;
    }(ZosaBaseError));
    exports.ZosaDeviceNotAvailableError = ZosaDeviceNotAvailableError;
    var ZosaDefaultFallbackError = (function (_super) {
        __extends(ZosaDefaultFallbackError, _super);
        function ZosaDefaultFallbackError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x120;
            return _this;
        }
        return ZosaDefaultFallbackError;
    }(ZosaBaseError));
    exports.ZosaDefaultFallbackError = ZosaDefaultFallbackError;
    var ZosaSessionExpiredError = (function (_super) {
        __extends(ZosaSessionExpiredError, _super);
        function ZosaSessionExpiredError(message, zosaError) {
            var _this = _super.call(this, message, zosaError) || this;
            _this.errorID = 0x121;
            return _this;
        }
        return ZosaSessionExpiredError;
    }(ZosaBaseError));
    exports.ZosaSessionExpiredError = ZosaSessionExpiredError;
});
//# sourceMappingURL=zosa.errors.js.map