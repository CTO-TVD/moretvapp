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
    exports.TVRadioButtonDeprecated = void 0;
    var RadiobuttonDeprecatedComponent = (function (_super) {
        __extends(RadiobuttonDeprecatedComponent, _super);
        function RadiobuttonDeprecatedComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.diameter = public_1.Css.scale(42);
            _this.lineWidth = public_1.Css.scale(3);
            _this.radius = Math.round(_this.diameter / 2);
            _this.innerRadius = Math.round(_this.radius * 0.33);
            _this.centerXY = _this.radius + _this.lineWidth;
            _this.svgSize = _this.diameter + 2 * _this.lineWidth;
            return _this;
        }
        RadiobuttonDeprecatedComponent.prototype.render = function () {
            var classNames = [this.ID, "radiobutton"];
            if ((this.props.subText && this.props.subTextPosition == "bottom") || this.props.children) {
                classNames.push("with-bottom-subtext");
            }
            var innerRadius = this.props.isChecked ? this.innerRadius : 0;
            var classNamesText = [public_1.Css.fonts2.a_fo_b1_1, "text"];
            var classNamesSvg = ["svg-container"];
            if (this.props.icon) {
                classNamesText.push("withIcon");
                classNamesSvg.push("withIcon");
            }
            if (this.props.linesOfText !== undefined) {
                switch (this.props.linesOfText) {
                    case 1:
                        classNamesText.push("singleline-ellipsis");
                        break;
                    case 2:
                        classNamesText.push("twolines-ellipsis");
                        classNames.push("twolines");
                        break;
                }
            }
            return React.createElement("div", { className: classNames.join(" ") },
                React.createElement("div", { className: classNamesSvg.join(" ") },
                    React.createElement("svg", { height: this.svgSize, width: this.svgSize },
                        React.createElement("circle", { cx: this.centerXY, cy: this.centerXY, r: this.radius, stroke: "rgba(252, 252, 252, 0.3)", strokeWidth: this.lineWidth, fill: "transparent" }),
                        React.createElement("circle", { cx: this.centerXY, cy: this.centerXY, r: innerRadius, fill: "#f8007f" }))),
                this.props.icon && React.createElement("div", { className: this.props.icon }),
                React.createElement("div", { className: classNamesText.join(" ") },
                    public_2.Filter.join(this, this.props.text),
                    (this.props.subText && (this.props.subTextPosition == undefined || this.props.subTextPosition == "right")) ? React.createElement("span", { style: { color: public_1.Css.colors.A_CO_6 }, className: public_1.Css.fonts2.a_fo_b2__ },
                        "\u00A0",
                        public_2.Filter.join(this, this.props.subText)) : null,
                    (this.props.subText && this.props.subIcon) ? React.createElement("div", null,
                        React.createElement("div", { className: "icon-line2 " + this.props.subIcon }),
                        React.createElement("p", { style: { color: public_1.Css.colors.A_CO_6 }, className: public_1.Css.fonts2.a_fo_b2_2 + " line2" }, public_2.Filter.join(this, this.props.subText))) : null,
                    (this.props.subText && this.props.subTextPosition == "bottom" && !this.props.subIcon) ? React.createElement("p", { style: { color: public_1.Css.colors.A_CO_6 }, className: public_1.Css.fonts2.a_fo_b2__ }, public_2.Filter.join(this, this.props.subText)) : null,
                    this.props.children &&
                        React.createElement("div", { className: "customcontent" }, this.props.children)));
        };
        RadiobuttonDeprecatedComponent.defaultProps = {
            text: "<please provide text>",
            isChecked: false
        };
        RadiobuttonDeprecatedComponent = __decorate([
            public_2.reactComponent({
                ID: "tv-radiobutton-component",
                styles: [
                    public_1.selector("&.radiobutton")
                        .props({
                        display: "-webkit-flex",
                        height: 72,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 14,
                        paddingBottom: 15
                    })
                        .sub(public_1.selector("&.twolines")
                        .props({
                        height: 144
                    })),
                    public_1.selector("&.radiobutton.with-bottom-subtext")
                        .props({
                        height: "auto"
                    }),
                    public_1.selector("&.radiobutton .svg-container")
                        .props({
                        paddingRight: 24
                    }),
                    public_1.selector("&.radiobutton .svg-container.withIcon")
                        .props({
                        paddingRight: 18
                    }),
                    public_1.selector("&.radiobutton .text.withIcon")
                        .props({
                        paddingLeft: 18
                    }),
                    public_1.selector("&.radiobutton .line2")
                        .extend(public_1.Css.mixins.singlelineEllipsis),
                    public_1.selector("&.radiobutton .icon-line2")
                        .props({
                        float: "left",
                        marginRight: 21
                    }),
                    public_1.selector(".dttv-focused &.radiobutton")
                        .props({
                        backgroundColor: "rgba(252, 252, 252, 0.3)"
                    })
                ]
            })
        ], RadiobuttonDeprecatedComponent);
        return RadiobuttonDeprecatedComponent;
    }(public_2.ReactBaseComponent));
    exports.TVRadioButtonDeprecated = public_2.makeNavigationElement(RadiobuttonDeprecatedComponent);
});
//# sourceMappingURL=radiobutton.component.js.map