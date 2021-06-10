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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "src/src-de-telekom-react/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVButtonIconTextRectangle = exports.TVButtonIconTextRectangleComponent = void 0;
    var TVButtonIconTextRectangleComponent = (function (_super) {
        __extends(TVButtonIconTextRectangleComponent, _super);
        function TVButtonIconTextRectangleComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVButtonIconTextRectangleComponent.prototype.render = function () {
            var icon = this.props.icon;
            var componentClassNames = [this.ID];
            var parentElement = this.findParentComponent(public_3.NavigationElementId).component;
            componentClassNames.push("functional");
            if (!this.props.textClassNames)
                componentClassNames.push(public_1.Css.fonts2.a_fo_h6_2);
            if (icon) {
                componentClassNames.push("dttv-icon");
            }
            if (parentElement === null || parentElement === void 0 ? void 0 : parentElement.disabled) {
                componentClassNames.push("inactive");
            }
            var textClassNames = this.props.textClassNames && this.props.booked ?
                [this.props.textClassNames, "textWithLicense"] : this.props.subTextClassNames ?
                [this.props.textClassNames, "textWithSubtext"] : this.props.textClassNames ?
                [this.props.textClassNames, "text"] : ["text"];
            var subTextClassNames = this.props.subTextClassNames ? [this.props.subTextClassNames, "subtext"] : ["subtext"];
            var subLabelClassNames = this.props.subLabelClassNames ? [this.props.subLabelClassNames, "sublabel"] : ["sublabel"];
            var iconClassNames = (icon && icon !== "") ? ["icon", icon] : undefined;
            var surroundingAreaClassNames = this.props.checked ? ["surrounding-area", public_1.Css.sprites.A_IC_022_48x48] : undefined;
            return React.createElement("div", { className: componentClassNames.join(" ") },
                iconClassNames && React.createElement("div", { className: iconClassNames.join(" ") }),
                React.createElement("div", { className: textClassNames.join(" ") }, public_2.Guard.isString(this.props.text) ? (public_3.Filter.message(this, this.props.text) || "\u00A0") : this.props.text() ? this.props.text() : "\u00A0"),
                !this.props.booked && this.props.subLabel && this.props.subText &&
                    React.createElement("div", { className: subLabelClassNames.join(" ") }, public_2.Guard.isString(this.props.subLabel) ? (public_3.Filter.message(this, this.props.subLabel) || "\u00A0") : this.props.subLabel() ? this.props.subLabel() : "\u00A0"),
                !this.props.booked && this.props.subLabel && this.props.subText &&
                    React.createElement("div", { className: subTextClassNames.join(" ") }, public_2.Guard.isString(this.props.subText) ? (public_3.Filter.message(this, this.props.subText) || "\u00A0") : this.props.subText() ? this.props.subText() : "\u00A0"),
                React.createElement("div", { className: "border" }),
                React.createElement("div", { className: public_1.Css.globalStyleClasses.flash }),
                surroundingAreaClassNames && React.createElement("div", { className: surroundingAreaClassNames.join(" ") }));
        };
        TVButtonIconTextRectangleComponent.defaultProps = {
            checked: false,
            text: ""
        };
        TVButtonIconTextRectangleComponent = __decorate([
            public_3.reactComponent({
                ID: "m-14-03-01-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "relative",
                        lineHeight: "1"
                    })
                        .sub(public_1.selector(".border")
                        .extend(public_1.Css.mixins.borderWithRadiusControl)
                        .props({
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0
                    })),
                    public_1.selector("&.functional")
                        .props({
                        width: 330,
                        height: 186
                    })
                        .sub(public_1.selector(".border")
                        .props({
                        borderRadius: 0
                    }))
                        .sub(public_1.selector(".icon")
                        .props({
                        position: "absolute",
                        left: 126,
                        top: 32
                    }))
                        .sub(public_1.selector(".text")
                        .props({
                        position: "absolute",
                        top: 117,
                        left: 36,
                        right: 36,
                        textAlign: "center"
                    }))
                        .sub(public_1.selector(".textWithLicense")
                        .props({
                        position: "absolute",
                        top: 123,
                        left: 36,
                        right: 36,
                        textAlign: "center"
                    }))
                        .sub(public_1.selector(".textWithSubtext")
                        .props({
                        position: "absolute",
                        top: 106,
                        left: 36,
                        right: 36,
                        textAlign: "center"
                    }))
                        .sub(public_1.selector(".sublabel")
                        .props({
                        position: "absolute",
                        top: 146,
                        left: 95,
                        right: 36
                    }))
                        .sub(public_1.selector(".subtext")
                        .props({
                        position: "absolute",
                        top: 146,
                        left: 150,
                        textDecoration: "line-through"
                    })),
                    public_1.selector(".dttv-focused &")
                        .props({
                        backgroundColor: public_1.Css.colors.global_focus_background,
                        borderRadius: 6
                    })
                        .sub(public_1.selector(".border")
                        .props({
                        display: "none"
                    }))
                        .sub(public_1.selector("&.functional")
                        .props({
                        borderRadius: 0
                    })),
                    public_1.selector("&.inactive")
                        .props({
                        opacity: 0.3
                    }),
                    public_1.selector("& .surrounding-area")
                        .props({
                        position: "absolute",
                        top: -12,
                        right: -12
                    }),
                    public_1.selector("& .hide")
                        .props({
                        display: "none"
                    }),
                    public_1.selector("&.padded")
                        .props({
                        padding: 6
                    })
                ]
            })
        ], TVButtonIconTextRectangleComponent);
        return TVButtonIconTextRectangleComponent;
    }(public_3.ReactBaseComponent));
    exports.TVButtonIconTextRectangleComponent = TVButtonIconTextRectangleComponent;
    exports.TVButtonIconTextRectangle = public_3.makeFlashingElement(public_3.makeNavigationElement(TVButtonIconTextRectangleComponent));
});
//# sourceMappingURL=button3.component.js.map