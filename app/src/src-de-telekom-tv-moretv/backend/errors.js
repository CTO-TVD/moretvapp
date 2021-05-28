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
    exports.MtvError = exports.MtvConfigurationError = exports.MTVErrorCode = void 0;
    var MTVErrorCode;
    (function (MTVErrorCode) {
        MTVErrorCode[MTVErrorCode["UNKNOWN"] = 1281] = "UNKNOWN";
        MTVErrorCode[MTVErrorCode["BACKEND_GENERAL"] = 1282] = "BACKEND_GENERAL";
        MTVErrorCode[MTVErrorCode["BARKERMAP_NO_MATCH"] = 1283] = "BARKERMAP_NO_MATCH";
        MTVErrorCode[MTVErrorCode["ERROR_BOOKING_CONDITION"] = 1284] = "ERROR_BOOKING_CONDITION";
        MTVErrorCode[MTVErrorCode["ERROR_BOOKING_CONDITION_EMAIL"] = 1285] = "ERROR_BOOKING_CONDITION_EMAIL";
        MTVErrorCode[MTVErrorCode["ERROR_BOOKING_CONDITION_PHONE"] = 1286] = "ERROR_BOOKING_CONDITION_PHONE";
        MTVErrorCode[MTVErrorCode["ERROR_BOOKING_CONDITION_PENDING_ORDER"] = 1287] = "ERROR_BOOKING_CONDITION_PENDING_ORDER";
        MTVErrorCode[MTVErrorCode["ERROR_BOOKING_CONDITION_BOOKED"] = 1288] = "ERROR_BOOKING_CONDITION_BOOKED";
        MTVErrorCode[MTVErrorCode["ERROR_BOOKING_CONDITION_NOSKY"] = 1289] = "ERROR_BOOKING_CONDITION_NOSKY";
    })(MTVErrorCode = exports.MTVErrorCode || (exports.MTVErrorCode = {}));
    var MtvConfigurationError = (function (_super) {
        __extends(MtvConfigurationError, _super);
        function MtvConfigurationError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x500;
            return _this;
        }
        return MtvConfigurationError;
    }(public_1.BaseError));
    exports.MtvConfigurationError = MtvConfigurationError;
    var MtvError = (function (_super) {
        __extends(MtvError, _super);
        function MtvError(message, code) {
            var _this = _super.call(this, message) || this;
            _this.errorID = 0x501;
            _this.code = code;
            return _this;
        }
        return MtvError;
    }(public_1.BaseError));
    exports.MtvError = MtvError;
});
//# sourceMappingURL=errors.js.map