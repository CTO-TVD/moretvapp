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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "../../../base/public", "./page.busy.dialog.component", "src/src-de-telekom/public", "../../../framework/public"], function (require, exports, public_1, page_busy_dialog_component_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PageBusyComponent = void 0;
    var PageBusyComponent = (function (_super) {
        __extends(PageBusyComponent, _super);
        function PageBusyComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PageBusyComponent.prototype.handleBusyDialog = function () {
            var _this = this;
            if (this.props.isBusy && public_2.Guard.isUndefined(this.dialogReference) && public_2.Guard.isUndefined(this.timeoutReference)) {
                this.timeoutReference = setTimeout(function () {
                    _this.dialogReference = public_3.TVDialogHostService.getInstance().show({ extraData: {} }, page_busy_dialog_component_1.PageBusyDialogComponent, { layer: public_3.DialogLayer.dialogLayer4, voiceCommandBehaviour: { disableVoiceCommandExecution: true } });
                    _this.dialogReference.result(_this);
                    _this.timeoutReference = undefined;
                }, public_2.Guard.isDefined(this.props.delayMs) && this.props.delayMs > 0 ? this.props.delayMs : 0);
            }
            else if (!this.props.isBusy && (public_2.Guard.isDefined(this.dialogReference) || public_2.Guard.isDefined(this.timeoutReference))) {
                clearTimeout(this.timeoutReference);
                this.timeoutReference = undefined;
                if (public_2.Guard.isDefined(this.dialogReference)) {
                    this.dialogReference.closeDialogWithResult({ resultId: "closed" });
                    this.dialogReference = undefined;
                }
            }
        };
        PageBusyComponent.prototype.componentDidMount = function () {
            this.handleBusyDialog();
        };
        PageBusyComponent.prototype.componentDidUpdate = function () {
            this.handleBusyDialog();
        };
        PageBusyComponent.prototype.componentWillUnmount = function () {
            clearTimeout(this.timeoutReference);
            this.timeoutReference = undefined;
        };
        PageBusyComponent.prototype.render = function () {
            return null;
        };
        PageBusyComponent = __decorate([
            public_1.reactComponent({
                ID: "page-busy-component"
            })
        ], PageBusyComponent);
        return PageBusyComponent;
    }(public_1.ReactBaseComponent));
    exports.PageBusyComponent = PageBusyComponent;
});
//# sourceMappingURL=page.busy.component.js.map