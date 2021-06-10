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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TunerStateComponent = exports.TuningState = void 0;
    var TuningState;
    (function (TuningState) {
        TuningState["none"] = "none";
        TuningState["tuning"] = "tuning";
        TuningState["tuning_success"] = "tuning_success";
        TuningState["tuning_failed"] = "tuning_failed";
    })(TuningState = exports.TuningState || (exports.TuningState = {}));
    var TunerStateComponent = (function (_super) {
        __extends(TunerStateComponent, _super);
        function TunerStateComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.animationClassNames = [
                public_1.Css.sprites.A_IC_115_2_5_36x36,
                public_1.Css.sprites.A_IC_115_2_4_36x36,
                public_1.Css.sprites.A_IC_115_2_3_36x36,
                public_1.Css.sprites.A_IC_115_2_2_36x36,
                public_1.Css.sprites.A_IC_115_2_1_36x36
            ];
            _this.successImages = [
                { image: public_1.Css.sprites.A_IC_115_1_5_36x36, from: 0, to: 0 },
                { image: public_1.Css.sprites.A_IC_115_1_4_36x36, from: 1, to: 25 },
                { image: public_1.Css.sprites.A_IC_115_1_3_36x36, from: 26, to: 50 },
                { image: public_1.Css.sprites.A_IC_115_1_2_36x36, from: 51, to: 75 },
                { image: public_1.Css.sprites.A_IC_115_1_1_36x36, from: 76, to: 100 }
            ];
            _this.state = { animationIndex: 0 };
            if (_this.props.tuningState == TuningState.tuning) {
                _this.startAnimation();
            }
            _this.onDestroy(function () { return _this.stopAnimation(); });
            return _this;
        }
        TunerStateComponent.prototype.startAnimation = function () {
            var _this = this;
            this.interval = setInterval(function () { return _this.setState(function (prevState) {
                return public_3.Guard.isNumber(prevState.animationIndex) ? { animationIndex: prevState.animationIndex == 4 ? 0 : prevState.animationIndex + 1 } : null;
            }); }, 400);
        };
        TunerStateComponent.prototype.componentDidUpdate = function (prevProps) {
            if (this.props.tuningState != prevProps.tuningState) {
                this.setState({ animationIndex: 0 });
                if (this.props.tuningState == TuningState.tuning) {
                    this.startAnimation();
                }
                else {
                    this.stopAnimation();
                }
            }
        };
        TunerStateComponent.prototype.getImageContainer = function (imageClassNames, isVisibleFunc) {
            return React.createElement("div", { className: "image-container" }, imageClassNames.map(function (imageClass, index) {
                return React.createElement("img", { key: "image_" + index, style: { marginLeft: public_1.Css.scale(index == 0 ? 0 : -36) }, className: "signalimage " + imageClass + " " + (isVisibleFunc(index) ? "visible" : "invisible"), src: "" + public_1.Css.images.inlineTransparentPixel });
            }));
        };
        TunerStateComponent.prototype.stopAnimation = function () {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = undefined;
            }
        };
        TunerStateComponent.prototype.getSignalValue = function () {
            switch (this.props.tuningState) {
                case TuningState.tuning_failed: return "0%";
                case TuningState.tuning_success: return this.props.value + "%";
                default: return "";
            }
        };
        TunerStateComponent.prototype.render = function () {
            var _this = this;
            return React.createElement("div", { className: this.ID },
                (this.props.tuningState == TuningState.none || this.props.tuningState == TuningState.tuning_failed) &&
                    this.getImageContainer([public_1.Css.sprites.A_IC_115_2_5_36x36], function (index) { return true; }),
                this.props.tuningState == TuningState.tuning &&
                    this.getImageContainer(this.animationClassNames, function (index) { return _this.state.animationIndex == index; }),
                this.props.tuningState == TuningState.tuning_success &&
                    this.getImageContainer(this.successImages.map(function (imageRange) { return imageRange.image; }), function (index) { return public_3.Guard.isDefined(_this.props.value) && _this.props.value >= _this.successImages[index].from && _this.props.value <= _this.successImages[index].to; }),
                React.createElement("div", { className: "signalvalue" + (this.props.tuningState == TuningState.tuning_failed || (public_3.Guard.isNumber(this.props.value) && this.props.value < 40) ? " red" : "") }, "" + this.getSignalValue()));
        };
        TunerStateComponent = __decorate([
            public_2.reactComponent({
                ID: "tuner-state-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        display: "flex",
                        height: 42,
                        color: public_1.Css.colors.A_CO_6
                    })
                        .extend(public_1.Css.fonts2.a_fo_b2___mixin),
                    public_1.selector("& .image-container")
                        .props({
                        display: "flex",
                        marginRight: 18
                    }),
                    public_1.selector("& .signalvalue ")
                        .props({
                        width: 81,
                        padding: 0,
                        float: "right"
                    }),
                    public_1.selector("& .red")
                        .props({
                        color: "#D90000"
                    }),
                    public_1.selector("& .visible")
                        .props({
                        visibility: "visible"
                    }),
                    public_1.selector("& .invisible")
                        .props({
                        visibility: "hidden"
                    }),
                ]
            })
        ], TunerStateComponent);
        return TunerStateComponent;
    }(public_2.ReactBaseComponent));
    exports.TunerStateComponent = TunerStateComponent;
});
//# sourceMappingURL=tunerstate.component.js.map