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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom-react/public"], function (require, exports, React, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVButton_Deprecated = void 0;
    var TVButtonComponent = (function (_super) {
        __extends(TVButtonComponent, _super);
        function TVButtonComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVButtonComponent.prototype.render = function () {
            var icon = this.props.icon;
            var componentClassNames = [this.ID];
            var parentElement = this.findParentComponent(public_2.NavigationElementId).component;
            switch (this.props.type) {
                case "more":
                    componentClassNames.push("more");
                    componentClassNames.push("" + this.props.format);
                    switch (this.props.format) {
                        case "m-bu-16-3-1":
                            componentClassNames.push(public_1.Css.fonts2.a_fo_b2_2);
                            icon = public_1.Css.sprites.A_IC_089_54x54;
                            break;
                        case "m-bu-16-3":
                            componentClassNames.push(public_1.Css.fonts2.a_fo_b1_1);
                            icon = public_1.Css.sprites.A_IC_089_72x72;
                            break;
                        default:
                            componentClassNames.push(public_1.Css.fonts2.a_fo_b1_1);
                            break;
                    }
                    break;
                case "primary":
                    componentClassNames.push("primary");
                    componentClassNames.push(public_1.Css.fonts2.a_fo_b2__);
                    break;
                case "secondary":
                    componentClassNames.push("secondary");
                    componentClassNames.push(public_1.Css.fonts2.a_fo_b2__);
                    break;
            }
            if (icon) {
                componentClassNames.push("dttv-icon");
            }
            if (parentElement === null || parentElement === void 0 ? void 0 : parentElement.disabled) {
                componentClassNames.push("inactive");
            }
            var textClassNames = ["text"];
            if (this.props.format == "m-bu-16-3-1") {
                componentClassNames.push("dttv-focus-frame");
            }
            textClassNames.push("singleline-ellipsis");
            var iconClassNames = (icon && icon !== "") ? ["icon", icon] : undefined;
            return React.createElement("div", { className: componentClassNames.join(" ") },
                iconClassNames && React.createElement("div", { className: iconClassNames.join(" ") }),
                React.createElement("div", { className: textClassNames.join(" ") }, public_2.Filter.join(this, this.props.text)),
                React.createElement("div", { className: "border" }),
                React.createElement("div", { className: public_1.Css.globalStyleClasses.flash }));
        };
        TVButtonComponent.defaultProps = {
            format: "m-bu-16-1",
            text: "",
            type: "primary"
        };
        TVButtonComponent = __decorate([
            public_2.reactComponent({
                ID: "tv-button-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "relative",
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
                    public_1.selector("&.more")
                        .sub(public_1.selector(".border")
                        .props({
                        borderRadius: 0
                    }))
                        .sub(public_1.selector(".icon")
                        .props({
                        position: "absolute"
                    }))
                        .sub(public_1.selector(".text")
                        .props({
                        position: "absolute",
                        left: 30,
                        right: 30,
                        textAlign: "center",
                    }))
                        .sub(public_1.selector("&.m-bu-16-1")
                        .props({
                        height: 264,
                        width: 264
                    })
                        .sub(public_1.selector(".icon")
                        .props({
                        left: 96,
                        top: 72
                    }))
                        .sub(public_1.selector(".text")
                        .props({
                        top: 144
                    })))
                        .sub(public_1.selector("&.m-bu-16-3")
                        .props({
                        height: 230,
                        width: 408
                    })
                        .sub(public_1.selector(".icon")
                        .props({
                        left: 177,
                        top: 54
                    }))
                        .sub(public_1.selector(".text")
                        .props({
                        top: 135
                    })))
                        .sub(public_1.selector("&.m-bu-16-3-1")
                        .props({
                        height: 142,
                        width: 252
                    })
                        .sub(public_1.selector(".icon")
                        .props({
                        left: 99,
                        top: 21
                    }))
                        .sub(public_1.selector(".text")
                        .props({
                        top: 87
                    }))),
                    public_1.selector("&.primary, &.secondary")
                        .props({
                        minWidth: 264,
                        height: 72
                    })
                        .sub(public_1.selector(".icon")
                        .props({
                        position: "absolute",
                        left: 39,
                        top: 22
                    }))
                        .sub(public_1.selector(".text")
                        .props({
                        position: "relative",
                        top: 18,
                        marginLeft: 33,
                        marginRight: 33,
                    }))
                        .sub(public_1.selector(".icon + .text")
                        .props({
                        textAlign: "left",
                        marginRight: 48,
                        marginLeft: 87
                    })),
                    public_1.selector("&.primary.dttv-icon, &.secondary.dttv-icon")
                        .props({
                        minWidth: 272
                    }),
                    public_1.selector(".dttv-focused &")
                        .props({
                        backgroundColor: public_1.Css.colors.global_focus_background,
                        borderRadius: 6
                    })
                        .sub(public_1.selector(".border")
                        .props({
                        display: "none"
                    }))
                        .sub(public_1.selector("&.primary")
                        .props({
                        backgroundColor: public_1.Css.colors.A_CO_2
                    }))
                        .sub(public_1.selector("&.more")
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
                        top: 12,
                        right: 12
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
        ], TVButtonComponent);
        return TVButtonComponent;
    }(public_2.ReactBaseComponent));
    exports.TVButton_Deprecated = public_2.makeFlashingElement(public_2.makeNavigationElement(TVButtonComponent));
});
//# sourceMappingURL=button.component.js.map