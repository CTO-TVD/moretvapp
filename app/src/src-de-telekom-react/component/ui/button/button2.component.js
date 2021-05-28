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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../../../framework/navigation/public", "src/src-de-telekom/public", "../../../filter/public"], function (require, exports, React, public_1, public_2, public_3, public_4, public_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVButtonOneLine = exports.TVButtonOneLineIconOnlyComponent = void 0;
    var TVButtonOneLineIconOnlyComponent = (function (_super) {
        __extends(TVButtonOneLineIconOnlyComponent, _super);
        function TVButtonOneLineIconOnlyComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVButtonOneLineIconOnlyComponent.prototype.render = function () {
            var parentElement = this.findParentComponent(public_3.NavigationElementId).component;
            var componentClassNames = [this.ID, (parentElement === null || parentElement === void 0 ? void 0 : parentElement.disabled) ? "inactive" : undefined];
            var progressContainerClassNames = ["progressbarcontainer"];
            var upcomingImage = !this.props.icon && this.props.image ? public_4.ImageScale.rescale(this.props.image || public_1.Css.images.inlineTransparentPixel, { y: 36, x: 36, ar: "ignore" }) : undefined;
            var fontsClass = this.props.size == "small" ? public_1.Css.fonts2.a_fo_b2__ : public_1.Css.fonts2.a_fo_b1_2;
            if (public_4.Guard.isUndefined(this.props.icon)) {
                componentClassNames.push("noIcon");
                progressContainerClassNames.push("noIcon");
            }
            if (this.props.size == "small") {
                componentClassNames.push("small");
            }
            return React.createElement("div", { className: componentClassNames.join(" ") },
                this.props.progressClassname &&
                    React.createElement("div", { className: progressContainerClassNames.join(" ") },
                        React.createElement("div", { className: ["progressbar", this.props.progressClassname].join(" ") })),
                this.props.icon &&
                    React.createElement("div", { className: "dttv-icon " + this.props.icon }),
                upcomingImage &&
                    React.createElement("img", { className: "dttv-icon", src: upcomingImage }),
                React.createElement("div", { className: "border" }),
                React.createElement("div", { className: "text " + fontsClass }, public_4.Guard.isString(this.props.text) ? (public_5.Filter.message(this, this.props.text) || "\u00A0") : this.props.text ? this.props.text() : "\u00A0"),
                React.createElement("div", { className: public_1.Css.globalStyleClasses.flash }));
        };
        TVButtonOneLineIconOnlyComponent = __decorate([
            public_2.reactComponent({
                ID: "m-06-02-03-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        display: "flex",
                        position: "relative",
                        lineHeight: "1",
                        textAlign: "left",
                        height: 84,
                        paddingLeft: 24,
                        paddingRight: 24,
                        whiteSpace: "nowrap"
                    })
                        .sub(public_1.selector("&.small")
                        .props({
                        height: 75
                    }))
                        .sub(public_1.selector("&.noIcon")
                        .props({
                        paddingLeft: 36,
                        paddingRight: 36,
                        minWidth: 264
                    })
                        .sub(public_1.selector("& .text")
                        .props({
                        marginLeft: "auto",
                        marginRight: "auto"
                    })))
                        .sub(public_1.selector(".border")
                        .props({
                        backgroundColor: public_1.Css.colors.A_CO_1_15,
                        borderRadius: 6,
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0
                    }))
                        .sub(public_1.selector(".text")
                        .props({
                        whiteSpace: "nowrap",
                        paddingLeft: 12,
                        paddingRight: 12,
                        marginBottom: "auto",
                        marginTop: "auto"
                    })),
                    public_1.selector("&.inactive")
                        .props({
                        opacity: 0.3
                    }),
                    public_1.selector("& .dttv-icon")
                        .props({
                        alignSelf: "center",
                        float: "left",
                        height: 36,
                        width: 36,
                        marginRight: 6,
                    }),
                    public_1.selector(".dttv-focused &")
                        .props({
                        borderRadius: 6,
                        backgroundColor: public_1.Css.colors.A_CO_2
                    })
                        .sub(public_1.selector(".border")
                        .props({
                        display: "none"
                    })),
                    public_1.selector("& .progressbarcontainer")
                        .props({
                        position: "absolute",
                        backgroundColor: public_1.Css.colors.A_CO_1,
                        width: "100%",
                        height: 9,
                        marginLeft: -24,
                        borderTop: public_1.Css.scale(3) + "px solid black",
                        borderRadius: "0px 0px " + public_1.Css.scale(6) + "px " + public_1.Css.scale(6) + "px",
                        top: 84,
                        overflow: "hidden"
                    })
                        .sub(public_1.selector("&.noIcon")
                        .props({
                        marginLeft: -36,
                    })),
                    public_1.selector("& .progressbar")
                        .props({
                        height: "inherit",
                        backgroundColor: public_1.Css.colors.A_CO_2
                    })
                ]
            })
        ], TVButtonOneLineIconOnlyComponent);
        return TVButtonOneLineIconOnlyComponent;
    }(public_2.ReactBaseComponent));
    exports.TVButtonOneLineIconOnlyComponent = TVButtonOneLineIconOnlyComponent;
    exports.TVButtonOneLine = public_3.makeFlashingElement(public_3.makeNavigationElement(TVButtonOneLineIconOnlyComponent));
});
//# sourceMappingURL=button2.component.js.map