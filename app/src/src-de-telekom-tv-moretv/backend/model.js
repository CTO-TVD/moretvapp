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
    exports.SkyBookingRequest = exports.DtBookingRequest = exports.BaseEntity = exports.BaseRequest = void 0;
    var BaseRequest = (function () {
        function BaseRequest() {
        }
        BaseRequest.prototype.getHttpEntity = function () {
            return new BaseEntity(this);
        };
        return BaseRequest;
    }());
    exports.BaseRequest = BaseRequest;
    var BaseEntity = (function (_super) {
        __extends(BaseEntity, _super);
        function BaseEntity(request) {
            var _this = _super.call(this) || this;
            _this.contentType = "application/json";
            _this.request = request;
            return _this;
        }
        BaseEntity.prototype.getContent = function () {
            return JSON.stringify(this.request);
        };
        return BaseEntity;
    }(public_1.HttpEntity));
    exports.BaseEntity = BaseEntity;
    var DtBookingRequest = (function (_super) {
        __extends(DtBookingRequest, _super);
        function DtBookingRequest(productId, transactionId) {
            var _this = _super.call(this) || this;
            _this.productId = productId;
            _this.transactionId = transactionId;
            return _this;
        }
        return DtBookingRequest;
    }(BaseRequest));
    exports.DtBookingRequest = DtBookingRequest;
    var SkyBookingRequest = (function (_super) {
        __extends(SkyBookingRequest, _super);
        function SkyBookingRequest(productId, transactionId, marketingPermission, agbPermission, customerData) {
            var _this = _super.call(this) || this;
            _this.productId = productId;
            _this.transactionId = transactionId;
            _this.marketingPermission = marketingPermission;
            _this.agbPermission = agbPermission;
            _this.customerData = customerData;
            return _this;
        }
        return SkyBookingRequest;
    }(BaseRequest));
    exports.SkyBookingRequest = SkyBookingRequest;
});
//# sourceMappingURL=model.js.map