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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../../../framework/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVMenuButton = exports.TVMenuButtonComponent = void 0;
    var TVMenuButtonComponent = (function (_super) {
        __extends(TVMenuButtonComponent, _super);
        function TVMenuButtonComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVMenuButtonComponent_1 = TVMenuButtonComponent;
        TVMenuButtonComponent.prototype.shouldComponentUpdate = function (nextProps) {
            return nextProps.text != this.props.text
                || nextProps.icons != nextProps.icons;
        };
        TVMenuButtonComponent.prototype.render = function () {
            var _a, _b, _c, _d;
            var isIcon = (_a = this.props.icons) === null || _a === void 0 ? void 0 : _a.default;
            var isUnderline = !this.props.icons || this.props.icons.iconSize !== 72;
            var componentClassNames = [this.ID, this.props.className, isIcon ? TVMenuButtonComponent_1.CSS_SELECTOR_ICON : TVMenuButtonComponent_1.CSS_SELECTOR_TEXT];
            var underlineIcon = isIcon
                ? isUnderline
                    ? React.createElement("div", { className: ["icon-element", "smallAndUnderlined", (_b = this.props.icons) === null || _b === void 0 ? void 0 : _b.default].join(" ") })
                    : React.createElement(React.Fragment, null,
                        React.createElement("div", { className: ["icon-element", "bigAndSwitching", "focus", (_c = this.props.icons) === null || _c === void 0 ? void 0 : _c.focussed].join(" ") }),
                        React.createElement("div", { className: ["icon-element", "bigAndSwitching", "default", (_d = this.props.icons) === null || _d === void 0 ? void 0 : _d.default].join(" ") }))
                : undefined;
            return React.createElement("div", { className: componentClassNames.join(" ") },
                underlineIcon,
                !isIcon &&
                    React.createElement("div", { className: [public_1.Css.fonts2.a_fo_h3_2, "text"].join(" ") }, this.props.text),
                isUnderline &&
                    React.createElement("div", { className: "underline" }));
        };
        var TVMenuButtonComponent_1;
        TVMenuButtonComponent.CSS_SELECTOR_TEXT = "text";
        TVMenuButtonComponent.CSS_SELECTOR_ICON = "icon";
        TVMenuButtonComponent = TVMenuButtonComponent_1 = __decorate([
            public_2.reactComponent({
                ID: "menu-button-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        height: 72,
                        minWidth: 30,
                        display: "table-cell",
                        verticalAlign: "bottom",
                    })
                        .sub(public_1.selector(".underline")
                        .props({
                        width: "100%",
                        left: 0,
                        height: 3,
                        marginTop: 9,
                        marginBottom: 3,
                        backgroundColor: public_1.Css.colors.A_CO_1,
                        transform: "scaleX(0.7)",
                        transition: "transform 0s",
                        visibility: "hidden"
                    })
                        .sub(public_1.selector("." + TVMenuButtonComponent_1.CSS_SELECTOR_ICON + " &")
                        .props({
                        marginTop: 12
                    }))
                        .sub(public_1.selector(public_1.Css.contentStates.FOCUSED + " &")
                        .props({
                        visibility: "visible",
                        transform: "scaleX(1)",
                        transition: "transform " + public_1.Css.transitions.long
                    })))
                        .sub(public_1.selector("& .icon-element")
                        .props({
                        maxWidth: 72,
                        display: "block"
                    })
                        .sub(public_1.selector("&.bigAndSwitching")
                        .props({
                        float: "left"
                    }))
                        .sub(public_1.selector(public_1.Css.contentStates.FOCUSED + " > &")
                        .sub(public_1.selector("&.default")
                        .props({
                        display: "none"
                    })))
                        .sub(public_1.selector(public_1.Css.contentStates.BLURRED + " > &")
                        .sub(public_1.selector("&.focus")
                        .props({
                        display: "none"
                    })))
                        .sub(public_1.selector("&.smallAndUnderlined")
                        .props({
                        float: "none"
                    })))
                ]
            })
        ], TVMenuButtonComponent);
        return TVMenuButtonComponent;
    }(public_2.ReactBaseComponent));
    exports.TVMenuButtonComponent = TVMenuButtonComponent;
    exports.TVMenuButton = public_3.makeFlashingElement(public_3.makeNavigationElement(TVMenuButtonComponent));
});
//# sourceMappingURL=menubutton.component.js.map