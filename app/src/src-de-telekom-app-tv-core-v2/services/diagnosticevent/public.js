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
define(["require", "exports", "src/src-de-telekom-react/public", "./diagnosticevent.service", "src/src-de-telekom/public", "./diagnostic.logger", "./diagnosticevent.service", "./diagnostic.startpage", "./diagnostic.deviceaction", "./diagnostic.helper"], function (require, exports, public_1, diagnosticevent_service_1, public_2, diagnostic_logger_1, diagnosticevent_service_2, diagnostic_startpage_1, diagnostic_deviceaction_1, diagnostic_helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticEventModule = exports.DiagnosticHelper = exports.DiagnosticDeviceAction = exports.DiagnosticStartpage = exports.DiagnosticEventService = void 0;
    Object.defineProperty(exports, "DiagnosticEventService", { enumerable: true, get: function () { return diagnosticevent_service_2.DiagnosticEventService; } });
    Object.defineProperty(exports, "DiagnosticStartpage", { enumerable: true, get: function () { return diagnostic_startpage_1.DiagnosticStartpage; } });
    Object.defineProperty(exports, "DiagnosticDeviceAction", { enumerable: true, get: function () { return diagnostic_deviceaction_1.DiagnosticDeviceAction; } });
    Object.defineProperty(exports, "DiagnosticHelper", { enumerable: true, get: function () { return diagnostic_helper_1.DiagnosticHelper; } });
    var DiagnosticEventModule = (function (_super) {
        __extends(DiagnosticEventModule, _super);
        function DiagnosticEventModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DiagnosticEventModule.prototype.run = function () {
            diagnosticevent_service_1.DiagnosticEventService.getInstance();
        };
        DiagnosticEventModule.prototype.active = function () {
            public_2.Logger.registerAdditionalLogger(new diagnostic_logger_1.DiagnosticLogger());
        };
        return DiagnosticEventModule;
    }(public_1.ReactBaseModule));
    exports.DiagnosticEventModule = DiagnosticEventModule;
});
//# sourceMappingURL=public.js.map