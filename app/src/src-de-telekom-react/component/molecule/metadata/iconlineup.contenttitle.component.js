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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "./iconlineup.base.component"], function (require, exports, React, public_1, public_2, iconlineup_base_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IconLineupContentTitleComponent = void 0;
    var IconLineupContentTitleComponent = (function (_super) {
        __extends(IconLineupContentTitleComponent, _super);
        function IconLineupContentTitleComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IconLineupContentTitleComponent_1 = IconLineupContentTitleComponent;
        IconLineupContentTitleComponent.getAllIcons = function (iconState, size) {
            return [
                {
                    name: size == "big" ? public_1.Css.sprites.A_IC_049_1_77x36 : public_1.Css.sprites.A_IC_049_1_64x30,
                    show: function () { return !!(iconState.showSeriesRecording); }
                },
                {
                    name: size == "big" ? public_1.Css.sprites.A_IC_028_1_36x36 : public_1.Css.sprites.A_IC_028_1_30x30,
                    show: function () { return !!(iconState.showRecording); }
                },
                {
                    name: size == "big" ? public_1.Css.sprites.A_IC_051_1_30x30 : public_1.Css.sprites.A_IC_051_1_30x30,
                    show: function () { return !!(iconState.showTipp); }
                },
                {
                    name: size == "big" ? public_1.Css.sprites.A_IC_122_36x36 : public_1.Css.sprites.A_IC_122_30x30,
                    show: function () { return !!(iconState.showFavourite); }
                },
                {
                    name: size == "big" ? public_1.Css.sprites.A_IC_046_1_36x36 : public_1.Css.sprites.A_IC_046_1_30x30,
                    show: function () { return !!(iconState.showLocked); }
                }
            ];
        };
        IconLineupContentTitleComponent.prototype.render = function () {
            var icons = this.props.iconState ? IconLineupContentTitleComponent_1.getAllIcons(this.props.iconState, this.props.size) : [];
            var classNames = [this.ID];
            if (this.props.className) {
                classNames.push(this.props.className);
            }
            return React.createElement(iconlineup_base_component_1.IconLineupBaseComponent, { className: classNames.join(" "), icons: icons });
        };
        var IconLineupContentTitleComponent_1;
        IconLineupContentTitleComponent = IconLineupContentTitleComponent_1 = __decorate([
            public_2.reactComponent({
                ID: "atomic-iconlineup-contenttitle",
                styles: [
                    public_1.selector("&")
                        .props({
                        height: 30
                    }),
                    public_1.selector("& *:not(:first-child)")
                        .props({
                        marginLeft: 12
                    })
                ]
            })
        ], IconLineupContentTitleComponent);
        return IconLineupContentTitleComponent;
    }(public_2.ReactBaseComponent));
    exports.IconLineupContentTitleComponent = IconLineupContentTitleComponent;
});
//# sourceMappingURL=iconlineup.contenttitle.component.js.map