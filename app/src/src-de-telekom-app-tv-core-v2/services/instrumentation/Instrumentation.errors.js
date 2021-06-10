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
    exports.InstrumentationServiceError = void 0;
    var InstrumentationServiceError = (function (_super) {
        __extends(InstrumentationServiceError, _super);
        function InstrumentationServiceError(message) {
            var _this = _super.call(this, message) || this;
            _this.errorID = 0x020;
            return _this;
        }
        return InstrumentationServiceError;
    }(public_1.BaseError));
    exports.InstrumentationServiceError = InstrumentationServiceError;
});
//# sourceMappingURL=Instrumentation.errors.js.map