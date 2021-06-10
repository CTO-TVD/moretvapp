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
define(["require", "exports", "src/src-de-telekom-react/public", "src/src-de-telekom/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TimerComponent = void 0;
    var TimerComponent = (function (_super) {
        __extends(TimerComponent, _super);
        function TimerComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = {
                currentSecond: _this.props.seconds,
                dialogFocussed: true
            };
            return _this;
        }
        TimerComponent.prototype.componentDidUpdate = function (prevProps, prevState) {
            var layerComponent = this.findParentComponent(public_1.LayerId).component;
            if (layerComponent && prevState.dialogFocussed !== layerComponent.isActive) {
                this.setState({ dialogFocussed: layerComponent.isActive });
            }
        };
        TimerComponent.prototype.componentWillUnmount = function () {
            clearInterval(this.timerID);
        };
        TimerComponent.prototype.componentDidMount = function () {
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
        TimerComponent.prototype.render = function () {
            return null;
        };
        TimerComponent = __decorate([
            public_1.reactComponent({
                ID: "timer-component"
            }),
            public_2.logTag()
        ], TimerComponent);
        return TimerComponent;
    }(public_1.ReactBaseComponent));
    exports.TimerComponent = TimerComponent;
});
//# sourceMappingURL=timer.component.js.map