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
define(["require", "exports", "react", "../../../base/public", "src/src-de-telekom-style/public", "./busyindicator.component", "../../../framework/public"], function (require, exports, React, public_1, public_2, busyindicator_component_1, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PageBusyDialogComponent = void 0;
    var PageBusyDialogComponent = (function (_super) {
        __extends(PageBusyDialogComponent, _super);
        function PageBusyDialogComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PageBusyDialogComponent.prototype.render = function () {
            return React.createElement(public_3.NavigationContainer, { className: this.ID, id: this.ID },
                React.createElement(busyindicator_component_1.BusyIndicatorComponent, { isBusy: true, delay: 0 }),
                React.createElement(public_3.NavigationElement, { id: "dummy", autofocus: true }));
        };
        PageBusyDialogComponent = __decorate([
            public_1.reactComponent({
                ID: "page-busy-dialog-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        height: "inherit",
                        width: "inherit"
                    })
                ]
            })
        ], PageBusyDialogComponent);
        return PageBusyDialogComponent;
    }(public_1.ReactBaseComponent));
    exports.PageBusyDialogComponent = PageBusyDialogComponent;
});
//# sourceMappingURL=page.busy.dialog.component.js.map