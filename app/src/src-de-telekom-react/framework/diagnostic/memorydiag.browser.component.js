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
define(["require", "exports", "react", "../../base/public"], function (require, exports, React, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MemorydiagBrowserComponent = void 0;
    var MemorydiagBrowserComponent = (function (_super) {
        __extends(MemorydiagBrowserComponent, _super);
        function MemorydiagBrowserComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MemorydiagBrowserComponent.prototype.render = function () {
            var memoryBrowser = window;
            var memoryUsed = memoryBrowser.getUsedMemoryInBytes ? Math.round(memoryBrowser.getUsedMemoryInBytes() / 1024) : 0;
            var memoryFree = memoryBrowser.getFreeMemoryInBytes ? Math.round(memoryBrowser.getFreeMemoryInBytes() / 1024) : 0;
            return React.createElement("span", { className: this.ID },
                " Browser used/free: ",
                memoryUsed,
                "/",
                memoryFree);
        };
        MemorydiagBrowserComponent = __decorate([
            public_1.reactComponent({
                ID: "memorydiag-browser-component"
            })
        ], MemorydiagBrowserComponent);
        return MemorydiagBrowserComponent;
    }(public_1.ReactBaseComponent));
    exports.MemorydiagBrowserComponent = MemorydiagBrowserComponent;
});
//# sourceMappingURL=memorydiag.browser.component.js.map