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
define(["require", "exports", "react", "../../../base/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BadgeContentTileComponent = void 0;
    var BadgeContentTileComponent = (function (_super) {
        __extends(BadgeContentTileComponent, _super);
        function BadgeContentTileComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BadgeContentTileComponent.prototype.render = function () {
            if (this.props.text) {
                return React.createElement("div", { className: [this.ID, this.props.className, "singleline-ellipsis", this.props.badgeStyle == "white" ? "white" : undefined, public_2.Css.fonts2.a_fo_l1_2].join(" "), style: { visibility: this.props.text ? "visible" : "hidden" } }, public_3.Guard.isString(this.props.text) ? this.props.text : this.props.text ? this.props.text() : "");
            }
            return null;
        };
        BadgeContentTileComponent = __decorate([
            public_1.reactComponent({
                ID: "badge-contenttile-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        backgroundColor: public_2.Css.colors.A_CO_3_70,
                        color: public_2.Css.colors.A_CO_1,
                        position: "absolute",
                        paddingLeft: 12,
                        paddingRight: 12,
                        paddingTop: 3,
                        top: 6,
                        right: 6,
                        maxWidth: 313,
                        height: 36
                    })
                        .sub(public_2.selector("&.white")
                        .props({
                        backgroundColor: public_2.Css.colors.A_CO_1_70,
                        color: public_2.Css.colors.A_CO_3
                    }))
                ]
            })
        ], BadgeContentTileComponent);
        return BadgeContentTileComponent;
    }(public_1.ReactBaseComponent));
    exports.BadgeContentTileComponent = BadgeContentTileComponent;
});
//# sourceMappingURL=badge.contenttile.component.js.map