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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../filter/public", "../../../base/public", "../../../framework/navigation/public", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2, public_3, public_4, public_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVFunctionalButton = void 0;
    var TVFunctionalButtonComponent = (function (_super) {
        __extends(TVFunctionalButtonComponent, _super);
        function TVFunctionalButtonComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVFunctionalButtonComponent.prototype.getProgresIcon = function (progress, progressIndication) {
            if (public_5.Guard.isUndefined(progressIndication) || public_5.Guard.isUndefined(progress)) {
                return undefined;
            }
            if (progressIndication.some(function (indication) { return progress > indication.threshhold; })) {
                return progressIndication
                    .filter(function (indication) { return progress > indication.threshhold; })
                    .sort(function (a, b) { return b.threshhold - a.threshhold; })[0].icon;
            }
            return undefined;
        };
        TVFunctionalButtonComponent.prototype.render = function () {
            var icon = this.props.icon;
            var componentClassNames = [this.ID, "functional", public_1.Css.fonts2.a_fo_b1_2];
            var parentElement = this.findParentComponent(public_4.NavigationElementId).component;
            if (icon) {
                componentClassNames.push("dttv-icon");
            }
            if (parentElement === null || parentElement === void 0 ? void 0 : parentElement.disabled) {
                componentClassNames.push("inactive");
            }
            var textClassNames = ["text"];
            var iconClassNames = (icon && icon !== "") ? ["icon", icon] : undefined;
            if (this.props.linesOfText !== undefined) {
                switch (this.props.linesOfText) {
                    case 1:
                        textClassNames.push("singleline-ellipsis");
                        break;
                    case 2:
                        textClassNames.push("twolines-ellipsis");
                        textClassNames.push("texttwoline");
                        iconClassNames === null || iconClassNames === void 0 ? void 0 : iconClassNames.push("icontwoline");
                        break;
                }
            }
            var progressIndicationAreaClassNames = this.props.progressIndication && this.props.progress ? ["progress-indicator", this.getProgresIcon(this.props.progress, this.props.progressIndication)] : undefined;
            return React.createElement("div", { className: componentClassNames.join(" ") },
                iconClassNames && React.createElement("div", { className: iconClassNames.join(" ") }),
                React.createElement("div", { className: textClassNames.join(" ") }, public_2.Filter.join(this, this.props.text)),
                React.createElement("div", { className: "border" }),
                React.createElement("div", { className: public_1.Css.globalStyleClasses.flash }),
                progressIndicationAreaClassNames && React.createElement("div", { className: progressIndicationAreaClassNames.join(" ") }));
        };
        TVFunctionalButtonComponent.defaultProps = {
            text: ""
        };
        TVFunctionalButtonComponent = __decorate([
            public_3.reactComponent({
                ID: "tv-functional-button-component",
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
                    public_1.selector(".dttv-focused &.functional")
                        .props({
                        outlineWidth: 3,
                        outlineStyle: "solid",
                        outlineColor: public_1.Css.colors.A_CO_1
                    }),
                    public_1.selector("&.functional")
                        .props({
                        width: 288,
                        height: 288,
                        backgroundColor: public_1.Css.colors.A_CO_1_15
                    })
                        .sub(public_1.selector(".border")
                        .props({
                        borderWidth: 0,
                        borderRadius: 0
                    }))
                        .sub(public_1.selector(".icon")
                        .props({
                        position: "absolute",
                        left: 107,
                        top: 72
                    }))
                        .sub(public_1.selector(".icontwoline")
                        .props({
                        left: 111,
                        top: 42
                    }))
                        .sub(public_1.selector(".text")
                        .props({
                        position: "absolute",
                        top: 180,
                        left: 24,
                        right: 24,
                        textAlign: "center"
                    }))
                        .sub(public_1.selector(".texttwoline")
                        .props({
                        top: 156
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
                    }))
                        .sub(public_1.selector("&.functional")
                        .props({
                        borderRadius: 0,
                        backgroundColor: public_1.Css.colors.A_CO_1_15
                    })),
                    public_1.selector("&.inactive")
                        .props({
                        opacity: 0.3
                    }),
                    public_1.selector("& .surrounding-area")
                        .props({
                        position: "absolute",
                        top: 12,
                        right: 12
                    }),
                    public_1.selector("& .progress-indicator")
                        .props({
                        position: "absolute",
                        top: 18,
                        right: 18
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
        ], TVFunctionalButtonComponent);
        return TVFunctionalButtonComponent;
    }(public_3.ReactBaseComponent));
    exports.TVFunctionalButton = public_4.makeFlashingElement(public_4.makeNavigationElement(TVFunctionalButtonComponent));
});
//# sourceMappingURL=functionalButton.component.js.map