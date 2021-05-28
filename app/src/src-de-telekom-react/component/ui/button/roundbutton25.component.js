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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../../../framework/navigation/public", "../../../filter/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVRoundButton25 = exports.TVButtonRoundIconComponent = void 0;
    var TVButtonRoundIconComponent = (function (_super) {
        __extends(TVButtonRoundIconComponent, _super);
        function TVButtonRoundIconComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVButtonRoundIconComponent_1 = TVButtonRoundIconComponent;
        TVButtonRoundIconComponent.prototype.render = function () {
            var componentClassNames = [this.ID, this.props.inactive ? "inactive" : undefined, this.props.className];
            return React.createElement("div", { className: componentClassNames.join(" ") },
                React.createElement("div", { className: "button" },
                    React.createElement("svg", { className: "background", width: public_1.Css.scale(120), height: public_1.Css.scale(120), version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("circle", { cx: public_1.Css.scale(60), cy: public_1.Css.scale(60), r: public_1.Css.scale(60), stroke: "none" })),
                    React.createElement("div", { className: [this.props.icon, "icon"].join(" ") })),
                this.props.text &&
                    React.createElement("div", { className: ["text", public_1.Css.fonts2.a_fo_b2_2].join(" ") }, public_4.Filter.message(this, this.props.text) || "\u00A0"));
        };
        var TVButtonRoundIconComponent_1;
        TVButtonRoundIconComponent.HEIGHT = 120;
        TVButtonRoundIconComponent = TVButtonRoundIconComponent_1 = __decorate([
            public_2.reactComponent({
                ID: "m-button-roundicon-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "relative",
                        textAlign: "center"
                    })
                        .sub(public_1.selector(" > .button")
                        .props({
                        width: TVButtonRoundIconComponent_1.HEIGHT,
                        height: TVButtonRoundIconComponent_1.HEIGHT,
                        display: "flex",
                        margin: "auto",
                        justifyContent: "center",
                        borderWidth: 3,
                        borderColor: public_1.Css.colors.A_CO_1,
                        borderStyle: "solid",
                        borderRadius: 72,
                        alignItems: "center"
                    })
                        .sub(public_1.selector("& > .background", "& > .icon")
                        .props({
                        position: "absolute"
                    })))
                        .sub(public_1.selector(" >.text")
                        .props({
                        marginTop: 9,
                        justifyContent: "center",
                        visibility: "hidden"
                    })),
                    public_1.selector("." + public_3.NavigationElement.ID + public_1.Css.contentStates.FOCUSED + " &:not(.inactive)")
                        .sub(public_1.selector(".background")
                        .props({
                        fill: public_1.Css.colors.A_CO_2
                    }))
                        .sub(public_1.selector(".button")
                        .props({
                        borderWidth: 0
                    }))
                        .sub(public_1.selector(".text")
                        .props({
                        visibility: "initial",
                        opacity: 0.5,
                        textAlign: "center",
                        position: "relative",
                        left: -36,
                        width: 200,
                        overflow: "hidden",
                        whiteSpace: "break-spaces"
                    }))
                        .sub(public_1.selector(".icon")
                        .props({
                        opacity: 1
                    })),
                    public_1.selector("." + public_3.NavigationElement.ID + public_1.Css.contentStates.FOCUSED + " &.inactive")
                        .sub(public_1.selector(".background")
                        .props({
                        fill: public_1.Css.colors.A_CO_2,
                        opacity: 0.3
                    }))
                        .sub(public_1.selector(".button")
                        .props({
                        borderWidth: 0,
                    }))
                        .sub(public_1.selector(".text")
                        .props({
                        visibility: "initial",
                        opacity: 0.6,
                        textAlign: "center",
                        position: "relative",
                        left: -36,
                        width: 200,
                        overflow: "hidden",
                        whiteSpace: "break-spaces"
                    }))
                        .sub(public_1.selector(".icon")
                        .props({
                        opacity: 0.3
                    })),
                    public_1.selector("." + public_3.NavigationElement.ID + public_1.Css.contentStates.BLURRED + " &")
                        .sub(public_1.selector(".background")
                        .props({
                        fill: public_1.Css.colors.global_transparent_black,
                        opacity: 0
                    }))
                        .sub(public_1.selector(".text")
                        .props({
                        visibility: "hidden"
                    })),
                    public_1.selector("." + public_3.NavigationElement.ID + public_1.Css.contentStates.BLURRED + " &.inactive")
                        .sub(public_1.selector(".icon")
                        .props({
                        opacity: 0.3
                    }))
                        .sub(public_1.selector(".button")
                        .props({
                        borderColor: public_1.Css.colors.A_CO_6
                    }))
                ]
            })
        ], TVButtonRoundIconComponent);
        return TVButtonRoundIconComponent;
    }(public_2.ReactBaseComponent));
    exports.TVButtonRoundIconComponent = TVButtonRoundIconComponent;
    exports.TVRoundButton25 = public_3.makeFlashingElement(public_3.makeNavigationElement(TVButtonRoundIconComponent));
});
//# sourceMappingURL=roundbutton25.component.js.map