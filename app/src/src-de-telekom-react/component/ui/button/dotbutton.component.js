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
    exports.TVDotButton = void 0;
    var TVDotButtonElement = (function (_super) {
        __extends(TVDotButtonElement, _super);
        function TVDotButtonElement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVDotButtonElement.prototype.render = function () {
            var classNames = [this.ID, "border", "primary"];
            return React.createElement("div", { className: classNames.join(" ") },
                React.createElement("span", { className: "icon " + public_1.Css.sprites.A_IC_089_48x48 }));
        };
        TVDotButtonElement = __decorate([
            public_2.reactComponent({
                ID: "dot-button-component",
                styles: [
                    public_1.selector("&")
                        .sub(public_1.selector("&.border")
                        .extend(public_1.Css.mixins.borderWithRadiusControl)
                        .props({
                        borderColor: "transparent",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0,
                        height: 36,
                        width: 88,
                        paddingLeft: 20,
                        paddingRight: 20,
                        backgroundColor: public_1.Css.colors.A_CO_1_15
                    }))
                        .sub(public_1.selector(".icon")
                        .props({
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%,-50%)"
                    })),
                    public_1.selector(".dttv-focused &")
                        .props({
                        backgroundColor: public_1.Css.colors.global_focus_background,
                        borderRadius: 6
                    })
                        .sub(public_1.selector("&.primary")
                        .props({
                        backgroundColor: public_1.Css.colors.A_CO_2
                    }))
                ]
            })
        ], TVDotButtonElement);
        return TVDotButtonElement;
    }(public_2.ReactBaseComponent));
    exports.TVDotButton = public_3.makeNavigationElement(TVDotButtonElement);
});
//# sourceMappingURL=dotbutton.component.js.map