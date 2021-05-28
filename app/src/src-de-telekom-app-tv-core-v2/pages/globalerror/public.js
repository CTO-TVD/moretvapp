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
define(["require", "exports", "src/src-de-telekom-react/public", "./globalerror.service", "./sqmlogger", "src/src-de-telekom/public"], function (require, exports, public_1, globalerror_service_1, sqmlogger_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GlobalErrorModule = void 0;
    var GlobalErrorModule = (function (_super) {
        __extends(GlobalErrorModule, _super);
        function GlobalErrorModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GlobalErrorModule.prototype.run = function () {
            globalerror_service_1.GlobalErrorService.getInstance();
        };
        GlobalErrorModule.prototype.active = function () {
            public_2.Logger.registerAdditionalLogger(new sqmlogger_1.SqmLogger());
        };
        return GlobalErrorModule;
    }(public_1.ReactBaseModule));
    exports.GlobalErrorModule = GlobalErrorModule;
});
//# sourceMappingURL=public.js.map