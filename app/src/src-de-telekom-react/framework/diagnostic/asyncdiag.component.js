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
define(["require", "exports", "react", "../../base/public", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsyncdiagComponent = void 0;
    var AsyncdiagComponent = (function (_super) {
        __extends(AsyncdiagComponent, _super);
        function AsyncdiagComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AsyncdiagComponent.prototype.render = function () {
            if (public_2.DiagnosticManager.intervalTasks === 0 && public_2.DiagnosticManager.timeoutTasks === 0)
                return null;
            return React.createElement("span", { className: this.ID },
                " Timeout/Interval: ",
                public_2.DiagnosticManager.timeoutTasks,
                "/",
                public_2.DiagnosticManager.intervalTasks,
                " ");
        };
        AsyncdiagComponent = __decorate([
            public_1.reactComponent({
                ID: "asyncdiag-component"
            })
        ], AsyncdiagComponent);
        return AsyncdiagComponent;
    }(public_1.ReactBaseComponent));
    exports.AsyncdiagComponent = AsyncdiagComponent;
});
//# sourceMappingURL=asyncdiag.component.js.map