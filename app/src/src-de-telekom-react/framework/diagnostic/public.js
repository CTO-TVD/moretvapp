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
define(["require", "exports", "react", "../../base/public", "./diagnostic.service", "./notification.component", "./memorydiag.browser.component", "./memorydiag.javascript.component", "./cachediag.component", "./eventsdiag.component", "./asyncdiag.component", "./notification.component", "./overview.component", "./diagnostic.service"], function (require, exports, React, public_1, diagnostic_service_1, notification_component_1, memorydiag_browser_component_1, memorydiag_javascript_component_1, cachediag_component_1, eventsdiag_component_1, asyncdiag_component_1, notification_component_2, overview_component_1, diagnostic_service_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticModule = void 0;
    __exportStar(notification_component_2, exports);
    __exportStar(overview_component_1, exports);
    __exportStar(diagnostic_service_2, exports);
    var DiagnosticModule = (function (_super) {
        __extends(DiagnosticModule, _super);
        function DiagnosticModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DiagnosticModule.prototype.run = function () {
            var service = diagnostic_service_1.DiagnosticService.getInstance();
            service.addDiagnosticsComponent(function (key) { return React.createElement(cachediag_component_1.CachediagComponent, { key: key }); });
            service.addDiagnosticsComponent(function (key) { return React.createElement(asyncdiag_component_1.AsyncdiagComponent, { key: key }); });
            service.addDiagnosticsComponent(function (key) { return React.createElement(eventsdiag_component_1.EventsdiagComponent, { key: key }); });
            service.addDiagnosticsComponent(function (key) { return React.createElement(memorydiag_javascript_component_1.MemorydiagJavascriptComponent, { key: key }); });
            service.addDiagnosticsComponent(function (key) { return React.createElement(memorydiag_browser_component_1.MemorydiagBrowserComponent, { key: key }); });
            service.addDiagnosticsComponent(function (key) { return React.createElement("br", { key: key }); });
            service.addDiagnosticsComponent(function (key) { return React.createElement(notification_component_1.DiagnosticNotificationComponent, { key: key }); });
        };
        return DiagnosticModule;
    }(public_1.ReactBaseModule));
    exports.DiagnosticModule = DiagnosticModule;
});
//# sourceMappingURL=public.js.map