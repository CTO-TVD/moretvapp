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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../filter/public", "../../../base/public", "../../../framework/navigation/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVFormButtonV20 = void 0;
    var TVFormButtonV20Component = (function (_super) {
        __extends(TVFormButtonV20Component, _super);
        function TVFormButtonV20Component() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVFormButtonV20Component.prototype.render = function () {
            var icon = this.props.icon;
            var componentClassNames = [this.ID];
            var parentElement = this.findParentComponent(public_4.NavigationElementId).component;
            if (icon) {
                componentClassNames.push("dttv-icon");
            }
            if (parentElement === null || parentElement === void 0 ? void 0 : parentElement.disabled) {
                componentClassNames.push("inactive");
            }
            if (this.props.type == "inputField") {
                componentClassNames.push("inputField");
            }
            else {
                componentClassNames.push("selectionField");
            }
            if (this.props.hasError && this.props.type == "inputField") {
                componentClassNames.push("error");
            }
            var textClassNames = ["text"];
            if (this.props.linesOfText !== undefined) {
                switch (this.props.linesOfText) {
                    case 1:
                        textClassNames.push("singleline-ellipsis");
                        break;
                    case 2:
                        textClassNames.push("twolines-ellipsis");
                        break;
                }
            }
            var iconClassNames = (icon && icon !== "") ? ["icon", icon] : undefined;
            return React.createElement("div", { className: componentClassNames.join(" ") },
                iconClassNames && React.createElement("div", { className: iconClassNames.join(" ") }),
                React.createElement("div", { className: textClassNames.join(" ") }, public_2.Filter.join(this, this.props.text)),
                React.createElement("div", { className: "border" }),
                React.createElement("div", { className: public_1.Css.globalStyleClasses.flash }));
        };
        TVFormButtonV20Component.defaultProps = {
            text: ""
        };
        TVFormButtonV20Component = __decorate([
            public_3.reactComponent({
                ID: "tv-form-button-20-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "relative",
                        lineHeight: "1",
                        paddingLeft: 11,
                        paddingTop: 21,
                        paddingBottom: 12
                    })
                        .extend(public_1.Css.mixins.singlelineEllipsis)
                        .sub(public_1.selector(".border")
                        .props({
                        borderRadius: public_1.Css.dimensions.borderRadius,
                        backgroundColor: public_1.Css.colors.A_CO_1_15,
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0
                    }))
                        .props({
                        minWidth: 264,
                        height: 84
                    })
                        .sub(public_1.selector(".icon")
                        .props({
                        position: "absolute",
                        left: 24
                    }))
                        .sub(public_1.selector(".text")
                        .extend(public_1.Css.fonts2.a_fo_b1_2_mixin)
                        .props({
                        textAlign: "left",
                        position: "relative",
                        marginLeft: 23,
                        marginRight: 36
                    }))
                        .sub(public_1.selector(".icon + .text")
                        .props({
                        textAlign: "left",
                        marginLeft: 30
                    })),
                    public_1.selector("&.dttv-icon")
                        .props({
                        paddingLeft: 48,
                        minWidth: 272
                    }),
                    public_1.selector("&.inputField.error")
                        .props({
                        borderRadius: 6
                    })
                        .sub(public_1.selector(".border")
                        .props({
                        borderWidth: 3,
                        borderStyle: "solid",
                        borderColor: public_1.Css.colors.A_CO_12,
                        display: "initial"
                    })),
                    public_1.selector(".dttv-focused &.selectionField")
                        .props({
                        backgroundColor: public_1.Css.colors.A_CO_2,
                        borderRadius: 6
                    })
                        .sub(public_1.selector(".border")
                        .props({
                        display: "none"
                    })),
                    public_1.selector(".dttv-focused &.inputField")
                        .props({
                        borderRadius: 6
                    })
                        .sub(public_1.selector(".border")
                        .props({
                        borderWidth: 3,
                        borderStyle: "solid",
                        borderColor: public_1.Css.colors.A_CO_1,
                        display: "initial"
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
                    })
                ]
            })
        ], TVFormButtonV20Component);
        return TVFormButtonV20Component;
    }(public_3.ReactBaseComponent));
    exports.TVFormButtonV20 = public_4.makeFlashingElement(public_4.makeNavigationElement(TVFormButtonV20Component));
});
//# sourceMappingURL=formbuttonV20.component.js.map