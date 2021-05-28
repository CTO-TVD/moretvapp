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
    exports.TVRadioButtonV20 = exports.TVRadiobuttonV20Component = void 0;
    var TVRadiobuttonV20Component = (function (_super) {
        __extends(TVRadiobuttonV20Component, _super);
        function TVRadiobuttonV20Component() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.diameter = public_1.Css.scale(38);
            _this.lineWidth = public_1.Css.scale(3);
            _this.radius = Math.round(_this.diameter / 2);
            _this.innerRadius = Math.round(_this.radius * 0.33);
            _this.svgCompleteSize = public_1.Css.scale(48);
            _this.centerXY = public_1.Css.scale(24);
            return _this;
        }
        TVRadiobuttonV20Component.prototype.render = function () {
            var classNames = [this.ID, "radiobutton"];
            if (this.props.expanded) {
                classNames.push("with-bottom-subtext");
            }
            if (!this.props.subText) {
                classNames.push("subtextInvisible");
            }
            if (this.props.subText) {
                classNames.push("withSubtext");
            }
            if (this.props.type == "small") {
                classNames.push("small");
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
                        break;
                }
            }
            return React.createElement("div", { className: classNames.join(" ") },
                React.createElement("div", { className: classNamesSvg.join(" ") },
                    React.createElement("svg", { height: this.svgCompleteSize, width: this.svgCompleteSize },
                        React.createElement("circle", { cx: this.centerXY, cy: this.centerXY, r: this.radius, className: "circle", strokeWidth: this.lineWidth, fill: "transparent" }),
                        React.createElement("circle", { cx: this.centerXY, cy: this.centerXY, r: innerRadius, className: "innerCircle" }))),
                this.props.icon && React.createElement("div", { className: this.props.icon }),
                React.createElement("div", { className: "textcontainer" },
                    React.createElement("div", { className: classNamesText.join(" ") }, public_4.Filter.join(this, this.props.text)),
                    (this.props.subText && this.props.subIcon) ? React.createElement("div", null,
                        React.createElement("div", { className: "icon-line2 " + this.props.subIcon }),
                        React.createElement("p", { className: public_1.Css.fonts2.a_fo_b2_2 + " line2" }, public_4.Filter.join(this, this.props.subText))) : null,
                    (this.props.subText && !this.props.subIcon) ? React.createElement("p", { className: public_1.Css.fonts2.a_fo_b2_2 + " subtext", dangerouslySetInnerHTML: { __html: public_4.Filter.join(this, this.props.subText) } }) : null,
                    this.props.children &&
                        React.createElement("div", { className: "customcontent" }, this.props.children)));
        };
        TVRadiobuttonV20Component.defaultProps = {
            text: "<please provide text>",
            isChecked: false
        };
        TVRadiobuttonV20Component = __decorate([
            public_2.reactComponent({
                ID: "tv-radiobuttonv20-component",
                styles: [
                    public_1.selector("&.radiobutton")
                        .props({
                        display: "-webkit-flex",
                        height: 96,
                        width: 1200,
                        paddingLeft: 20,
                        paddingRight: 48,
                        paddingTop: 25,
                        paddingBottom: 13
                    }),
                    public_1.selector("&.radiobutton.small")
                        .props({
                        width: 800,
                        paddingRight: 0
                    }),
                    public_1.selector("&.radiobutton.withSubtext")
                        .props({
                        height: 129
                    }),
                    public_1.selector(".customWidth &.radiobutton")
                        .props({
                        width: "inherit"
                    }),
                    public_1.selector("&.radiobutton.with-bottom-subtext")
                        .props({
                        paddingTop: 24,
                        paddingBottom: 32,
                        height: "auto"
                    }),
                    public_1.selector("&.radiobutton.with-bottom-subtext.subtextInvisible")
                        .props({
                        paddingTop: 24,
                        paddingBottom: 27
                    }),
                    public_1.selector("&.radiobutton .svg-container")
                        .props({
                        width: 48,
                        height: 48,
                        marginRight: 22
                    }),
                    public_1.selector("&.radiobutton .subtext")
                        .props({
                        color: public_1.Css.colors.A_CO_1
                    }),
                    public_1.selector("&.radiobutton .svg-container.withIcon")
                        .props({
                        marginRight: 18
                    }),
                    public_1.selector("&.radiobutton .textcontainer")
                        .props({
                        paddingRight: 48
                    }),
                    public_1.selector("&.radiobutton .text.withIcon")
                        .props({
                        paddingLeft: 20
                    }),
                    public_1.selector("&.radiobutton .textcontainer.withIcon")
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
                    public_1.selector("&.radiobutton .innerCircle")
                        .props({
                        fill: public_1.Css.colors.A_CO_2
                    }),
                    public_1.selector("&.radiobutton .circle")
                        .props({
                        stroke: "rgba(252, 252, 252, 0.3)"
                    }),
                    public_1.selector(".dttv-focused &.radiobutton .innerCircle")
                        .props({
                        fill: public_1.Css.colors.A_CO_1
                    }),
                    public_1.selector(".dttv-focused &.radiobutton .circle")
                        .props({
                        stroke: public_1.Css.colors.A_CO_1
                    }),
                    public_1.selector(".dttv-focused &.radiobutton")
                        .props({
                        backgroundColor: public_1.Css.colors.A_CO_2
                    })
                ]
            })
        ], TVRadiobuttonV20Component);
        return TVRadiobuttonV20Component;
    }(public_2.ReactBaseComponent));
    exports.TVRadiobuttonV20Component = TVRadiobuttonV20Component;
    exports.TVRadioButtonV20 = public_3.makeNavigationElement(TVRadiobuttonV20Component);
});
//# sourceMappingURL=radiobuttonV20.component.js.map