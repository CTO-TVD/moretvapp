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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public"], function (require, exports, React, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVCircleProgressBarComponent = void 0;
    var TVCircleProgressBarComponent = (function (_super) {
        __extends(TVCircleProgressBarComponent, _super);
        function TVCircleProgressBarComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.defaultBorderWidth = 6;
            return _this;
        }
        TVCircleProgressBarComponent.prototype.render = function () {
            var color = this.props.dttvTheme == "blue" ? public_1.Css.colors.A_CO_9 : public_1.Css.colors.A_CO_2;
            var scaledSize = public_1.Css.scale(this.props.dttvSize);
            var outerBorderWidth = public_1.Css.scale(this.props.dttvOuterborderwidth || this.defaultBorderWidth);
            var border = outerBorderWidth + "px solid grey";
            var dttvBorderwidth = this.props.dttvBorderwidth || this.defaultBorderWidth;
            var scaledBorderWidth = public_1.Css.scale(dttvBorderwidth);
            var center = scaledSize / 2;
            var radius = center - scaledBorderWidth / 2;
            var innerAreaSize = this.props.dttvWithtext ? this.props.dttvIconSize + 66 : this.props.dttvIconSize;
            var marginIconSizeTop = public_1.Css.scale(this.props.dttvIconSize / -2);
            var marginIconSizeLeft = public_1.Css.scale(innerAreaSize / -2);
            var fullExtent = Math.PI * 2 * radius;
            var partialExtent = this.props.dttvMaxvalue !== 0 ? this.props.dttvValue / this.props.dttvMaxvalue * fullExtent : undefined;
            var strokeDasharray = partialExtent + "," + fullExtent;
            var transform = "rotate(270 " + center + " " + center + ")";
            return React.createElement("div", { className: this.ID + " " + this.props.className },
                React.createElement("div", { id: "cnt", style: { width: scaledSize, height: scaledSize, border: border, boxSizing: "border-box" } },
                    React.createElement("svg", { id: "svg", style: { width: scaledSize, height: scaledSize, marginTop: -outerBorderWidth, marginLeft: -outerBorderWidth }, version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("circle", { r: radius, cx: center, cy: center, fill: "transparent", strokeDasharray: strokeDasharray, style: { stroke: color, strokeWidth: scaledBorderWidth }, transform: transform })),
                    React.createElement("div", { className: "innerarea", style: { marginTop: marginIconSizeTop, marginLeft: marginIconSizeLeft } },
                        React.createElement("div", { className: this.props.dttvIcon }),
                        React.createElement("span", { className: "text " + public_1.Css.fonts2.a_fo_h2__ }, this.props.dttvText))));
        };
        TVCircleProgressBarComponent = __decorate([
            public_2.reactComponent({
                ID: "tv-circleprogressbar-component",
                styles: [
                    public_1.selector("& #cnt")
                        .props({
                        backgroundColor: "transparent",
                        borderRadius: "50%"
                    }),
                    public_1.selector("& #svg")
                        .props({
                        position: "absolute"
                    }),
                    public_1.selector("& .innerarea")
                        .props({
                        position: "relative",
                        top: "50%",
                        left: "50%",
                        display: "flex"
                    }),
                    public_1.selector("& .text")
                        .props({
                        lineHeight: 46
                    })
                ]
            })
        ], TVCircleProgressBarComponent);
        return TVCircleProgressBarComponent;
    }(public_2.ReactBaseComponent));
    exports.TVCircleProgressBarComponent = TVCircleProgressBarComponent;
});
//# sourceMappingURL=circleprogressbar.component.js.map