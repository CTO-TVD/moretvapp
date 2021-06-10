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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "react", "../../base/public", "react-transition-group", "src/src-de-telekom-style/public"], function (require, exports, React, public_1, react_transition_group_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeFlashingElement = void 0;
    function makeFlashingElement(InnerComponent) {
        var FlashingElement = (function (_super) {
            __extends(FlashingElement, _super);
            function FlashingElement(props, context) {
                var _this = _super.call(this, props, context) || this;
                _this.funcClick = function (e) {
                    _this.setState({ show: true });
                    setTimeout(function () {
                        _this.setState({ show: false });
                        if (_this.props.onClick)
                            _this.props.onClick(e);
                    }, 50);
                };
                _this.state = { show: false };
                return _this;
            }
            FlashingElement.prototype.render = function () {
                return React.createElement(react_transition_group_1.CSSTransition, { timeout: 50, classNames: public_2.Css.globalStyleClasses.flashTransition, in: this.state.show },
                    React.createElement(InnerComponent, __assign({}, this.props, { onClick: this.funcClick })));
            };
            FlashingElement = __decorate([
                public_1.reactComponent({
                    ID: "flashing-component",
                    isWrapper: true
                })
            ], FlashingElement);
            return FlashingElement;
        }(public_1.ReactBaseComponent));
        return FlashingElement;
    }
    exports.makeFlashingElement = makeFlashingElement;
});
//# sourceMappingURL=flash.component.js.map