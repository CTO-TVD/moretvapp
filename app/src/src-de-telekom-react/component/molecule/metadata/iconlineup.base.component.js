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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public"], function (require, exports, React, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IconLineupBaseComponent = void 0;
    var IconLineupBaseComponent = (function (_super) {
        __extends(IconLineupBaseComponent, _super);
        function IconLineupBaseComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IconLineupBaseComponent.prototype.render = function () {
            return React.createElement("div", { className: [this.ID, this.props.className].join(" ") }, this.props.icons
                .filter(function (icon) { return icon.show(); })
                .map(function (icon) { return React.createElement("span", { key: icon.name, className: icon.name }); }));
        };
        IconLineupBaseComponent = __decorate([
            public_2.reactComponent({
                ID: "iconlineup-base-component",
                styles: [
                    public_1.selector("& span")
                        .props({
                        display: "inline-block"
                    })
                ]
            })
        ], IconLineupBaseComponent);
        return IconLineupBaseComponent;
    }(public_2.ReactBaseComponent));
    exports.IconLineupBaseComponent = IconLineupBaseComponent;
});
//# sourceMappingURL=iconlineup.base.component.js.map