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
define(["require", "exports", "react", "../../../base/public", "src/src-de-telekom/public", "src/src-de-telekom-style/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVPercentageCounterComponent = exports.CounterUnit = exports.ProgressState = void 0;
    var ProgressState;
    (function (ProgressState) {
        ProgressState[ProgressState["none"] = 0] = "none";
        ProgressState[ProgressState["inprocess"] = 1] = "inprocess";
        ProgressState[ProgressState["success"] = 2] = "success";
        ProgressState[ProgressState["error"] = 3] = "error";
    })(ProgressState = exports.ProgressState || (exports.ProgressState = {}));
    var CounterUnit;
    (function (CounterUnit) {
        CounterUnit[CounterUnit["percent"] = 0] = "percent";
        CounterUnit[CounterUnit["seconds"] = 1] = "seconds";
    })(CounterUnit = exports.CounterUnit || (exports.CounterUnit = {}));
    var TVPercentageCounterComponent = (function (_super) {
        __extends(TVPercentageCounterComponent, _super);
        function TVPercentageCounterComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.defaultBorderWidth = 6;
            return _this;
        }
        TVPercentageCounterComponent_1 = TVPercentageCounterComponent;
        TVPercentageCounterComponent.prototype.getFontLeft = function () {
            var _this = this;
            switch (this.props.dttvUnit) {
                case CounterUnit.percent:
                    return this.props.dttvValue < 10 ? 93 : this.props.dttvValue < 100 ? 79 : 58;
                case CounterUnit.seconds:
                    return this.props.dttvValue < 10 ? 80 : this.props.dttvValue < 100 ? 67 : 49;
                default:
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("Unspecified CounterUnit: " + _this.props.dttvUnit, TVPercentageCounterComponent_1.TAG)); });
                    return 0;
            }
        };
        TVPercentageCounterComponent.prototype.render = function () {
            var _this = this;
            var iconSize = 144;
            var valueLineHeight = 66;
            var dttvUnitValue = this.props.dttvUnit == CounterUnit.seconds ? "Sek" : "%";
            var color = this.props.dttvTheme == "blue" ? public_3.Css.colors.A_CO_9 : public_3.Css.colors.A_CO_2;
            var outerBorderWidth = public_3.Css.scale(this.props.dttvOuterborderwidth == null ? this.defaultBorderWidth : this.props.dttvOuterborderwidth);
            var scaledSize = public_3.Css.scale(this.props.dttvSize);
            var borderwidth = this.props.dttvBorderwidth == null || this.props.dttvBorderwidth == 0 ? this.defaultBorderWidth : this.props.dttvBorderwidth;
            var iconMargin = public_3.Css.scale((this.props.dttvSize - iconSize) / 2 - (this.props.dttvOuterborderwidth || this.defaultBorderWidth));
            var innerAreaMarginTop = public_3.Css.scale((this.props.dttvSize - valueLineHeight) / 2 - (this.props.dttvOuterborderwidth || this.defaultBorderWidth));
            var scaledBorderWidth = public_3.Css.scale(borderwidth);
            var center = scaledSize / 2;
            var radius = center - scaledBorderWidth / 2;
            var fullExtent = Math.PI * 2 * radius;
            public_2.Logger.debug(function (log) { return log(public_2.LogMsg("Value update: " + _this.props.dttvValue + " of " + _this.props.dttvMaxValue + ", progessState: " + _this.props.dttvProgressState, TVPercentageCounterComponent_1.TAG)); });
            var partialExtent = this.props.dttvProgressState == ProgressState.success || this.props.dttvProgressState == ProgressState.error ? 0 : (this.props.dttvInvert ? this.props.dttvMaxValue - this.props.dttvValue : this.props.dttvValue) / this.props.dttvMaxValue * fullExtent;
            var fontLeft = public_3.Css.scale(this.getFontLeft());
            var outerCircleColor = this.props.dttvProgressState == ProgressState.success ? public_3.Css.colors.A_CO_1 : public_3.Css.colors.A_CO_5;
            return React.createElement("div", { className: this.ID + " " + this.props.className },
                React.createElement("div", { id: "content", style: { width: scaledSize, height: scaledSize, border: outerBorderWidth + "px solid " + outerCircleColor, boxSizing: "border-box" } },
                    React.createElement("svg", { id: "svg", style: { width: scaledSize, height: scaledSize, marginTop: -outerBorderWidth, marginLeft: -outerBorderWidth }, version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
                        React.createElement("circle", { r: radius, cx: center, cy: center, fill: "transparent", strokeDasharray: partialExtent + "," + fullExtent, style: { stroke: color, strokeWidth: scaledBorderWidth }, transform: "rotate(270 " + center + " " + center + ")" })),
                    this.props.dttvProgressState < ProgressState.success && React.createElement("div", { className: "innerarea", style: { marginLeft: fontLeft, marginTop: innerAreaMarginTop } },
                        React.createElement("div", { className: public_3.Css.fonts2.a_fo_h2__ }, this.props.dttvValue),
                        React.createElement("div", { className: public_3.Css.fonts2.a_fo_b1_1 + " percent" }, dttvUnitValue)),
                    this.props.dttvProgressState == ProgressState.success && React.createElement("div", { style: { marginTop: iconMargin, marginLeft: iconMargin }, className: "" + public_3.Css.sprites.A_IC_130_144x144 }),
                    this.props.dttvProgressState == ProgressState.error && React.createElement("div", { style: { marginTop: iconMargin, marginLeft: iconMargin }, className: "" + public_3.Css.sprites.A_IC_131_144x144 })));
        };
        var TVPercentageCounterComponent_1;
        TVPercentageCounterComponent.defaultProps = {
            dttvUnit: CounterUnit.percent,
            dttvMaxValue: 100,
            dttvProgressState: ProgressState.none
        };
        TVPercentageCounterComponent = TVPercentageCounterComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "percentage-counter-component",
                styles: [
                    public_3.selector("& #content")
                        .props({
                        backgroundColor: "transparent",
                        borderRadius: "50%"
                    }),
                    public_3.selector("& #content #svg")
                        .props({
                        position: "absolute",
                        display: "inherit"
                    }),
                    public_3.selector("& #content .innerarea")
                        .props({
                        display: "flex"
                    }),
                    public_3.selector("& #content .innerarea .percent")
                        .props({
                        marginTop: 17,
                        paddingLeft: 6
                    })
                ]
            }),
            public_2.logTag()
        ], TVPercentageCounterComponent);
        return TVPercentageCounterComponent;
    }(public_1.ReactBaseComponent));
    exports.TVPercentageCounterComponent = TVPercentageCounterComponent;
});
//# sourceMappingURL=percentagecounter.component.js.map