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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "../../base/public", "./diagnostic.service"], function (require, exports, public_1, diagnostic_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticsOverviewComponent = void 0;
    var DiagnosticsOverviewComponent = (function (_super) {
        __extends(DiagnosticsOverviewComponent, _super);
        function DiagnosticsOverviewComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DiagnosticsOverviewComponent.prototype.componentDidMount = function () {
            var _this = this;
            var interval = setInterval(function () {
                if (_this.destroyed) {
                    clearInterval(interval);
                }
                else {
                    _this.setState({});
                }
            }, 1000);
        };
        DiagnosticsOverviewComponent.prototype.render = function () {
            var components = diagnostic_service_1.DiagnosticService.getInstance().diagnosticsComponents;
            return components.map(function (item, index) { return item(index); });
        };
        DiagnosticsOverviewComponent = __decorate([
            public_1.reactComponent({
                ID: "diagnostics-overview-component"
            })
        ], DiagnosticsOverviewComponent);
        return DiagnosticsOverviewComponent;
    }(public_1.ReactBaseComponent));
    exports.DiagnosticsOverviewComponent = DiagnosticsOverviewComponent;
});
//# sourceMappingURL=overview.component.js.map