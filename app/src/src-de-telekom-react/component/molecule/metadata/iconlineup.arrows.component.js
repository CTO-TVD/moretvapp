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
define(["require", "exports", "react", "./iconlineup.base.component", "src/src-de-telekom-style/public", "../../../base/public"], function (require, exports, React, iconlineup_base_component_1, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IconLineupArrowsComponent = void 0;
    var IconLineupArrowsComponent = (function (_super) {
        __extends(IconLineupArrowsComponent, _super);
        function IconLineupArrowsComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IconLineupArrowsComponent_1 = IconLineupArrowsComponent;
        IconLineupArrowsComponent.getAllIcons = function (iconState, active) {
            return [
                {
                    name: public_1.Css.sprites.A_IC_015_4_2_36x36,
                    show: function () { return !!(iconState.showDown && active); }
                },
                {
                    name: public_1.Css.sprites.A_IC_015_3_2_36x36 + " up",
                    show: function () { return !!(iconState.showUp && active); }
                },
                {
                    name: public_1.Css.sprites.A_IC_015_4_1_36x36,
                    show: function () { return !!(iconState.showDown && !active); }
                },
                {
                    name: public_1.Css.sprites.A_IC_015_3_1_36x36 + " up",
                    show: function () { return !!(iconState.showUp && !active); }
                }
            ];
        };
        IconLineupArrowsComponent.prototype.render = function () {
            var icons = IconLineupArrowsComponent_1.getAllIcons(this.props.iconState, !!this.props.active);
            return React.createElement(iconlineup_base_component_1.IconLineupBaseComponent, { className: this.ID, icons: icons });
        };
        var IconLineupArrowsComponent_1;
        IconLineupArrowsComponent = IconLineupArrowsComponent_1 = __decorate([
            public_2.reactComponent({
                ID: "iconlineup-arrows-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        height: 36
                    }),
                    public_1.selector("& span")
                        .props({
                        left: "50%",
                        position: "relative",
                        transform: "translateX(-50%)"
                    }),
                    public_1.selector("& span:not(:first-child)")
                        .props({
                        marginLeft: 8
                    }),
                    public_1.selector("& span.up:only-child")
                        .props({
                        marginLeft: 44
                    })
                ]
            })
        ], IconLineupArrowsComponent);
        return IconLineupArrowsComponent;
    }(public_2.ReactBaseComponent));
    exports.IconLineupArrowsComponent = IconLineupArrowsComponent;
});
//# sourceMappingURL=iconlineup.arrows.component.js.map