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
    exports.MemorydiagJavascriptComponent = void 0;
    var MemorydiagJavascriptComponent = (function (_super) {
        __extends(MemorydiagJavascriptComponent, _super);
        function MemorydiagJavascriptComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MemorydiagJavascriptComponent.prototype.render = function () {
            var performance = window.performance;
            var memoryUsed = 0;
            var memoryTotal = 0;
            if (performance === null || performance === void 0 ? void 0 : performance.memory) {
                memoryUsed = performance.memory.usedJSHeapSize ? Math.round(performance.memory.usedJSHeapSize / 1024) : 0;
                memoryTotal = performance.memory.totalJSHeapSize ? Math.round(performance.memory.totalJSHeapSize / 1024) : 0;
            }
            return React.createElement("span", { className: this.ID },
                " JSHeap used/total: ",
                memoryUsed,
                "/",
                memoryTotal);
        };
        MemorydiagJavascriptComponent = __decorate([
            public_1.reactComponent({
                ID: "memorydiag-javascript-component"
            })
        ], MemorydiagJavascriptComponent);
        return MemorydiagJavascriptComponent;
    }(public_1.ReactBaseComponent));
    exports.MemorydiagJavascriptComponent = MemorydiagJavascriptComponent;
});
//# sourceMappingURL=memorydiag.javascript.component.js.map