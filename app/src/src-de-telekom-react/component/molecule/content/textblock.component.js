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
define(["require", "exports", "react", "../../../base/public", "./continuoustext.component", "src/src-de-telekom-style/public", "../../../framework/navigation/public", "src/src-de-telekom/public", "../../../service/keyeventmanager/public"], function (require, exports, React, public_1, continuoustext_component_1, public_2, public_3, public_4, public_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextBlockComponent = void 0;
    var TextBlockComponent = (function (_super) {
        __extends(TextBlockComponent, _super);
        function TextBlockComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.currentPosition = 0;
            _this.longPressDetection = new public_4.LongPressDetection();
            _this.state = { focused: false, position: 0 };
            return _this;
        }
        TextBlockComponent.prototype.componentDidUpdate = function (prevProps) {
            if (this.props.items !== prevProps.items) {
                this.setState({ position: 0 });
            }
        };
        TextBlockComponent.prototype.keyHandling = function (ev) {
            var handled = false;
            var keyHandled = this.currentPosition != 0;
            var newPosition = 0;
            switch (ev.virtualKey) {
                case public_5.TVKeyCodeConfig.DOWN_KEY:
                    this.longPressDetection.addEvent();
                    newPosition = this.currentPosition + this.props.step * (this.longPressDetection.isLongPress() ? this.props.speedFactor : 1);
                    if (this.props.onPositionChanged)
                        this.props.onPositionChanged(newPosition, false);
                    this.setState(function (prevState) { return ({ position: newPosition }); });
                    handled = true;
                    break;
                case public_5.TVKeyCodeConfig.UP_KEY:
                    this.longPressDetection.addEvent();
                    newPosition = this.currentPosition - this.props.step * (this.longPressDetection.isLongPress() ? this.props.speedFactor : 1);
                    if (this.props.onPositionChanged)
                        this.props.onPositionChanged(newPosition, false);
                    this.setState(function (prevState) { return ({ position: newPosition }); });
                    handled = keyHandled;
                    break;
                case public_5.TVKeyCodeConfig.CHANNEL_DOWN_KEY:
                    this.longPressDetection.addEvent();
                    newPosition = this.currentPosition + this.props.step * this.props.pageFactor;
                    if (this.props.onPositionChanged)
                        this.props.onPositionChanged(newPosition, false);
                    this.setState(function (prevState) { return ({ position: newPosition }); });
                    handled = true;
                    break;
                case public_5.TVKeyCodeConfig.CHANNEL_UP_KEY:
                    this.longPressDetection.addEvent();
                    newPosition = this.currentPosition - this.props.step * this.props.pageFactor;
                    if (this.props.onPositionChanged)
                        this.props.onPositionChanged(newPosition, false);
                    this.setState(function (prevState) { return ({ position: newPosition }); });
                    handled = true;
                    break;
            }
            return handled;
        };
        TextBlockComponent.prototype.onFocus = function (value) {
            this.setState({ focused: value });
        };
        TextBlockComponent.prototype.render = function () {
            var _this = this;
            return React.createElement(public_3.NavigationElement, { id: this.props.id, disabled: this.props.hideArrows, className: this.ID + " " + (this.props.className || ""), onFocusIn: function () { return _this.onFocus(true); }, onFocusOut: function () { return _this.onFocus(false); } },
                !this.props.hideArrows && React.createElement(public_3.NavigationKey, { keyFilter: "*", onKey: function (key) { return _this.keyHandling(key); } }),
                React.createElement(continuoustext_component_1.ContinuousTextComponent, { items: this.props.items, fontClass: this.props.fontClass, active: this.state.focused, scrollPosition: this.state.position, hideArrows: this.props.hideArrows, onScroll: function (pos, endReached) {
                        _this.currentPosition = pos;
                        if (_this.props.onEndReached && endReached)
                            _this.props.onEndReached(endReached);
                    }, title: this.props.title, showFocusBorder: this.props.showFocusBorder, contentPostionTop: this.props.contentPostionTop }));
        };
        TextBlockComponent.defaultProps = {
            step: 60,
            pageFactor: 5,
            speedFactor: 3
        };
        TextBlockComponent = __decorate([
            public_1.reactComponent({
                ID: "text-block-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        width: "inherit",
                        height: "inherit"
                    })
                ]
            })
        ], TextBlockComponent);
        return TextBlockComponent;
    }(public_1.ReactBaseComponent));
    exports.TextBlockComponent = TextBlockComponent;
});
//# sourceMappingURL=textblock.component.js.map