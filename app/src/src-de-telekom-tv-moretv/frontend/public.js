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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define(["require", "exports", "src/src-de-telekom/public", "./model", "./ApplicationClient"], function (require, exports, public_1, model_1, ApplicationClient_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvBackendError = void 0;
    __exportStar(model_1, exports);
    __exportStar(ApplicationClient_1, exports);
    var MtvBackendError = (function (_super) {
        __extends(MtvBackendError, _super);
        function MtvBackendError(statusCode, backendCode, state, backendCodeDetail) {
            var _this = _super.call(this, "statusCode: " + statusCode + " backend:" + backendCode + " state:" + state) || this;
            _this.statusCode = statusCode;
            _this.backendCode = backendCode;
            _this.state = state;
            _this.backendCodeDetail = backendCodeDetail;
            _this.errorID = 0x502;
            return _this;
        }
        return MtvBackendError;
    }(public_1.BaseError));
    exports.MtvBackendError = MtvBackendError;
});
//# sourceMappingURL=public.js.map