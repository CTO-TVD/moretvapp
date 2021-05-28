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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../../../framework/navigation/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVOnlyIconButton = void 0;
    var OnlyIconButton = (function (_super) {
        __extends(OnlyIconButton, _super);
        function OnlyIconButton() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OnlyIconButton.prototype.render = function () {
            var classNames = [this.ID];
            if (this.props.small) {
                classNames.push("small");
            }
            if (this.props.disabled) {
                classNames.push("inactive");
            }
            return React.createElement("div", { className: classNames.join(" ") },
                React.createElement("div", { className: ["icon", this.props.iconClass].join(" ") }),
                React.createElement("div", { className: public_1.Css.globalStyleClasses.flash }));
        };
        OnlyIconButton = __decorate([
            public_2.reactComponent({
                ID: "m-06-04-and-05-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 84,
                        height: 84,
                        borderRadius: public_1.Css.dimensions.borderRadius,
                        backgroundColor: public_1.Css.colors.A_CO_1_15
                    }),
                    public_1.selector("&.small")
                        .props({
                        width: 60,
                        height: 60
                    }),
                    public_1.selector(".dttv-focused &")
                        .props({
                        backgroundColor: public_1.Css.colors.A_CO_2
                    }),
                    public_1.selector("&.inactive")
                        .props({
                        opacity: 0.3
                    }),
                ]
            })
        ], OnlyIconButton);
        return OnlyIconButton;
    }(public_2.ReactBaseComponent));
    exports.TVOnlyIconButton = public_3.makeFlashingElement(public_3.makeNavigationElement(OnlyIconButton));
});
//# sourceMappingURL=onlyiconbutton.component.js.map