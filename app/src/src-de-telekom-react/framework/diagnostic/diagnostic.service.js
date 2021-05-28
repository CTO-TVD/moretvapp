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
define(["require", "exports", "src/src-de-telekom/public", "../../base/public", "../../framework/public"], function (require, exports, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticService = void 0;
    var DiagnosticService = (function (_super) {
        __extends(DiagnosticService, _super);
        function DiagnosticService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isVisible = false;
            _this.counter = 0;
            _this.timer = 0;
            _this.diagnostics = [];
            return _this;
        }
        DiagnosticService.prototype.addDiagnosticsComponent = function (component) {
            this.diagnostics.push(component);
        };
        Object.defineProperty(DiagnosticService.prototype, "diagnosticsComponents", {
            get: function () {
                return this.diagnostics;
            },
            enumerable: false,
            configurable: true
        });
        DiagnosticService.prototype.toggle = function () {
            var layerService = public_3.TVLayerManagerService.getInstance();
            var layerKey = "diagnosticLayer";
            if (this.isVisible) {
                this.isVisible = false;
                layerService.hide(layerKey);
            }
            else {
                this.isVisible = true;
                layerService.show(layerKey);
                public_1.Logger.toggle();
            }
        };
        DiagnosticService.prototype.startDiagnostic = function () {
            var _this = this;
            clearTimeout(this.timer);
            this.timer = setTimeout(function () {
                _this.counter = 0;
            }, 1000);
            if (this.counter == 1) {
                this.counter = 0;
                this.toggle();
            }
            else {
                this.counter++;
            }
            return true;
        };
        return DiagnosticService;
    }(public_2.ReactBaseService));
    exports.DiagnosticService = DiagnosticService;
});
//# sourceMappingURL=diagnostic.service.js.map