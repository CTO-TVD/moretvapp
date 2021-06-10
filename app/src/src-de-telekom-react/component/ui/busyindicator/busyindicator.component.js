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
    exports.BusyIndicatorComponent = void 0;
    var BusyIndicatorComponent = (function (_super) {
        __extends(BusyIndicatorComponent, _super);
        function BusyIndicatorComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = { show: props.isBusy };
            return _this;
        }
        BusyIndicatorComponent_1 = BusyIndicatorComponent;
        BusyIndicatorComponent.prototype.componentDidUpdate = function (prevProps) {
            var _this = this;
            if (prevProps.isBusy !== this.props.isBusy) {
                if (this.props.isBusy == true) {
                    setTimeout(function () {
                        if (_this.destroyed)
                            return;
                        _this.setState(function (prevState, props) {
                            if (props.isBusy == true) {
                                return { show: true };
                            }
                            return null;
                        });
                    }, this.props.delay == undefined ? BusyIndicatorComponent_1.DELAY : this.props.delay);
                }
                else {
                    setTimeout(function () {
                        if (_this.destroyed)
                            return;
                        _this.setState({ show: false });
                    }, this.props.closeDelay == undefined ? 0 : this.props.closeDelay);
                }
            }
        };
        Object.defineProperty(BusyIndicatorComponent, "busyIndicatorRotatorKeyframeAnimation", {
            get: function () {
                return public_1.Css.add("busyindicator_rotator", function () { return public_1.keyframe("busyindicator_rotator")
                    .block(0, public_1.declaration()
                    .props({
                    transform: "rotate(0deg)"
                }))
                    .block(100, public_1.declaration()
                    .props({
                    transform: "rotate(360deg)"
                })); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BusyIndicatorComponent, "busyIndicatorSpinnerKeyframeAnimation", {
            get: function () {
                var busyIndicatorSize = 3.14 * 225;
                return public_1.Css.add("busyindicator_spinner", function () { return public_1.keyframe("busyindicator_spinner")
                    .block(0, public_1.declaration()
                    .props({
                    strokeDashoffset: busyIndicatorSize,
                    transform: "rotate(0deg)"
                }))
                    .block(50, public_1.declaration()
                    .props({
                    strokeDashoffset: busyIndicatorSize / 4,
                    transform: "rotate(220deg)"
                }))
                    .block(100, public_1.declaration()
                    .props({
                    strokeDashoffset: busyIndicatorSize,
                    transform: "rotate(720deg)"
                })); });
            },
            enumerable: false,
            configurable: true
        });
        BusyIndicatorComponent.prototype.render = function () {
            var size = BusyIndicatorComponent_1.SIZE;
            var strokeWidth = BusyIndicatorComponent_1.STROKE_WIDH;
            var className = this.props.size == "small" ? "a-a-13-small" : "a-a-13";
            var buysIndicator = React.createElement("div", { className: [this.ID, "busyindicator"].join(" ") },
                React.createElement("svg", { className: className, xmlns: "http://www.w3.org/2000/svg", version: "1.1", width: public_1.Css.scale(size), height: public_1.Css.scale(size), viewBox: "0 0 " + public_1.Css.scale(size) + " " + public_1.Css.scale(size) },
                    React.createElement("circle", { className: "bg", cx: public_1.Css.scale(size) / 2, cy: public_1.Css.scale(size) / 2, r: (public_1.Css.scale(size) - strokeWidth) / 2, fill: "none", stroke: public_1.Css.colors.A_CO_1_15, strokeWidth: public_1.Css.scale(strokeWidth) }),
                    React.createElement("circle", { className: "path", cx: public_1.Css.scale(size) / 2, cy: public_1.Css.scale(size) / 2, r: (public_1.Css.scale(size) - strokeWidth) / 2, fill: "none", stroke: public_1.Css.colors.A_CO_2, strokeWidth: public_1.Css.scale(strokeWidth), strokeLinecap: "square", strokeDasharray: 3.14 * public_1.Css.scale(size) })));
            return this.state.show ? buysIndicator : null;
        };
        var BusyIndicatorComponent_1;
        BusyIndicatorComponent.CSS_SPINNER_DURATION = "2.8s";
        BusyIndicatorComponent.DELAY = 1000;
        BusyIndicatorComponent.SIZE = 225;
        BusyIndicatorComponent.SIZESMALL = 72;
        BusyIndicatorComponent.STROKE_WIDH = 16;
        BusyIndicatorComponent = BusyIndicatorComponent_1 = __decorate([
            public_2.reactComponent({
                ID: "busy-indicator-component",
                styles: [
                    public_1.selector("&.busyindicator")
                        .props({
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        display: "flex"
                    }),
                    public_1.selector("& .a-a-13")
                        .props({
                        width: BusyIndicatorComponent_1.SIZE,
                        height: BusyIndicatorComponent_1.SIZE,
                        animation: BusyIndicatorComponent_1.busyIndicatorRotatorKeyframeAnimation + " " + BusyIndicatorComponent_1.CSS_SPINNER_DURATION + " linear infinite",
                        margin: "auto"
                    }),
                    public_1.selector("& .a-a-13-small")
                        .props({
                        width: BusyIndicatorComponent_1.SIZESMALL,
                        height: BusyIndicatorComponent_1.SIZESMALL,
                        animation: BusyIndicatorComponent_1.busyIndicatorRotatorKeyframeAnimation + " " + BusyIndicatorComponent_1.CSS_SPINNER_DURATION + " linear infinite",
                        margin: "auto"
                    }),
                    public_1.selector("& circle")
                        .props({
                        position: "absolute",
                        transformOrigin: "center",
                        animation: BusyIndicatorComponent_1.busyIndicatorSpinnerKeyframeAnimation + " " + BusyIndicatorComponent_1.CSS_SPINNER_DURATION + " ease-in-out infinite"
                    })
                ]
            })
        ], BusyIndicatorComponent);
        return BusyIndicatorComponent;
    }(public_2.ReactBaseComponent));
    exports.BusyIndicatorComponent = BusyIndicatorComponent;
});
//# sourceMappingURL=busyindicator.component.js.map