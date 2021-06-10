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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "../../../translation/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CloseTimerComponent = void 0;
    var CloseTimerComponent = (function (_super) {
        __extends(CloseTimerComponent, _super);
        function CloseTimerComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = {
                currentSecond: _this.props.seconds,
                dialogFocussed: true
            };
            return _this;
        }
        CloseTimerComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
            var layerComponent = this.findParentComponent(public_2.LayerId).component;
            if (layerComponent && prevState.dialogFocussed !== layerComponent.isActive) {
                this.setState({ dialogFocussed: layerComponent.isActive });
            }
        };
        CloseTimerComponent.prototype.componentWillUnmount = function () {
            clearInterval(this.timerID);
        };
        CloseTimerComponent.prototype.componentDidMount = function () {
            var _this = this;
            this.timerID = setInterval(function () { return _this.setState(function (prevState) {
                if (!prevState.dialogFocussed)
                    return null;
                if (prevState.currentSecond > 0) {
                    return { currentSecond: prevState.currentSecond - 1 };
                }
                else {
                    clearInterval(_this.timerID);
                    if (_this.props.onClose)
                        _this.props.onClose();
                }
                return null;
            }); }, 1000);
        };
        CloseTimerComponent.prototype.render = function () {
            var secondsString = this.state.currentSecond + " " + public_2.Filter.message(this, public_4.messagesCore.STB_ST_TI118_2) + " ";
            var secondsPaddingLeft = this.props.textLine1BeforeSeconds != null && this.props.textLine1BeforeSeconds.length > 0 ? public_1.Css.scale(8) : 0;
            return React.createElement("div", { className: this.ID },
                React.createElement("div", { className: "margin-bottom" },
                    React.createElement("div", { className: this.props.centerText ? "center-horizontally" : "" },
                        React.createElement("div", { style: { display: "-webkit-flex" } },
                            React.createElement("div", { className: this.props.textStyle }, public_2.Filter.message(this, this.props.textLine1BeforeSeconds)),
                            React.createElement("div", { className: this.props.textStyle + " seconds", style: { paddingLeft: secondsPaddingLeft } }, secondsString),
                            React.createElement("div", { className: this.props.textStyle }, public_2.Filter.message(this, this.props.textLine1AfterSeconds)))),
                    React.createElement("div", { className: this.props.centerText ? "center-horizontally" : "" },
                        React.createElement("div", { className: this.props.textStyle }, public_2.Filter.message(this, this.props.textLine2)))));
        };
        CloseTimerComponent.defaultProps = {
            textStyle: public_1.Css.fonts2.a_fo_b2__,
            centerText: true
        };
        CloseTimerComponent = __decorate([
            public_2.reactComponent({
                ID: "close-timer-component",
                styles: [
                    public_1.selector("& .center-horizontally")
                        .props({
                        display: "table",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }),
                    public_1.selector("& .seconds")
                        .props({
                        color: public_1.Css.colors.A_CO_10,
                        paddingRight: 8
                    }),
                    public_1.selector("& .seconds-left")
                        .props({
                        paddingLeft: 8
                    }),
                    public_1.selector("& .margin-bottom")
                        .props({
                        marginBottom: 36
                    })
                ]
            }),
            public_3.logTag()
        ], CloseTimerComponent);
        return CloseTimerComponent;
    }(public_2.ReactBaseComponent));
    exports.CloseTimerComponent = CloseTimerComponent;
});
//# sourceMappingURL=closetimer.component.js.map