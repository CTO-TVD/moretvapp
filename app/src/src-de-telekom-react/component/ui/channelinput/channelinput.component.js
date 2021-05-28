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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../service/keyeventmanager/public", "../../../framework/public", "../../../base/public", "src/src-de-telekom/public", "./channelinput.options"], function (require, exports, React, public_1, public_2, public_3, public_4, public_5, channelinput_options_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVChannelInput = void 0;
    var TVChannelInput = (function (_super) {
        __extends(TVChannelInput, _super);
        function TVChannelInput(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.options = __assign(__assign(__assign({}, new channelinput_options_1.TVChannelInputOptions()), public_5.Configuration.instance.channelinput), props.options);
            _this.state = {
                initialInput: props.input,
                text: ""
            };
            return _this;
        }
        TVChannelInput.prototype.componentDidUpdate = function (prevProps) {
            var _a;
            if (((_a = this.props) === null || _a === void 0 ? void 0 : _a.input) && (prevProps.input !== this.props.input) && (this.props.input !== this.state.initialInput)) {
                this.handleNumberInput(this.props.input);
            }
            if (this.props && prevProps.cancelInput != this.props.cancelInput) {
                this.cancelInput();
            }
        };
        TVChannelInput.prototype.componentWillUnmount = function () {
            clearTimeout(this.onLeaveTimer);
            clearTimeout(this.onShowAutoformatTimer);
        };
        TVChannelInput.prototype.render = function () {
            var _this = this;
            var classNames = [this.ID, this.props.className];
            var textClassNames = this.props.textClassName ? this.props.textClassName : "channel-input-text";
            return (this.props.isVisible &&
                React.createElement(public_3.NavigationElement, { id: "tvChannelInput", onClick: function () { return _this.onClick(); }, onReady: function (e) { return e.focus(); } },
                    React.createElement(public_3.NavigationKey, { keyFilter: "DELETE_KEY", onKey: function (e) { return _this.executeBackspace(); } }),
                    React.createElement(public_3.NavigationKey, { keyFilter: "UP_KEY", onKey: function (e) { return true; } }),
                    React.createElement(public_3.NavigationKey, { keyFilter: "DOWN_KEY", onKey: function (e) { return true; } }),
                    React.createElement(public_3.NavigationKey, { keyFilter: "LEFT_KEY", onKey: function (e) { return true; } }),
                    React.createElement(public_3.NavigationKey, { keyFilter: "RIGHT_KEY", onKey: function (e) { return true; } }),
                    React.createElement(public_3.NavigationKey, { keyFilter: "VOLUME_DOWN_KEY", onKey: function (e) { return true; } }),
                    React.createElement(public_3.NavigationKey, { keyFilter: "VOLUME_UP_KEY", onKey: function (e) { return true; } }),
                    React.createElement(public_3.NavigationKey, { keyFilter: "MUTE_KEY", onKey: function (e) { return true; } }),
                    React.createElement(public_3.NavigationKey, { keyFilter: "BACK_KEY", onKey: function (e) { return _this.handleBackKey(); } }),
                    React.createElement("div", { className: classNames.join(" ") },
                        React.createElement("div", { className: "channel-input-container" },
                            React.createElement("span", { className: textClassNames }, this.state.text)))));
        };
        TVChannelInput.prototype.autoFormat = function () {
            var _this = this;
            if (this.props.maxDigits) {
                this.setState(function (prevState) { return ({ text: _this.pad(prevState.text, _this.props.maxDigits) }); });
            }
        };
        TVChannelInput.prototype.checkAutoLeave = function () {
            var _this = this;
            clearTimeout(this.onLeaveTimer);
            this.onLeaveTimer = setTimeout(function () { _this.onClick(); }, this.options.autoCloseInputTimeoutMs);
        };
        TVChannelInput.prototype.executeBackspace = function () {
            var _this = this;
            if (!this.props.isVisible) {
                return false;
            }
            this.setState(function (prevState) {
                if (prevState.text.length > 0) {
                    var text = prevState.text.substring(0, prevState.text.length - 1);
                    if (text === "") {
                        text = "0";
                    }
                    _this.checkAutoLeave();
                    return { text: text };
                }
                return null;
            });
            return true;
        };
        TVChannelInput.prototype.handleNumberInput = function (event) {
            if (!this.lastFocusedElementId) {
                this.lastFocusedElementId = public_3.NavigationService.getInstance().getFocusElementId();
            }
            switch (event.virtualKey) {
                case public_2.TVKeyCodeConfig.ZERO_KEY:
                    return this.sendNumber(0);
                case public_2.TVKeyCodeConfig.ONE_KEY:
                    return this.sendNumber(1);
                case public_2.TVKeyCodeConfig.TWO_KEY:
                    return this.sendNumber(2);
                case public_2.TVKeyCodeConfig.THREE_KEY:
                    return this.sendNumber(3);
                case public_2.TVKeyCodeConfig.FOUR_KEY:
                    return this.sendNumber(4);
                case public_2.TVKeyCodeConfig.FIVE_KEY:
                    return this.sendNumber(5);
                case public_2.TVKeyCodeConfig.SIX_KEY:
                    return this.sendNumber(6);
                case public_2.TVKeyCodeConfig.SEVEN_KEY:
                    return this.sendNumber(7);
                case public_2.TVKeyCodeConfig.EIGHT_KEY:
                    return this.sendNumber(8);
                case public_2.TVKeyCodeConfig.NINE_KEY:
                    return this.sendNumber(9);
                default:
                    return false;
            }
        };
        TVChannelInput.prototype.handleBackKey = function () {
            return this.cancelInput();
        };
        TVChannelInput.prototype.cancelInput = function () {
            if (this.props.onInputAborted)
                this.props.onInputAborted();
            if (this.props.onVisibilityChanged)
                this.props.onVisibilityChanged(false);
            this.setState({ text: "" });
            return false;
        };
        TVChannelInput.prototype.onClick = function () {
            var _this = this;
            if (!this.props.isVisible) {
                return false;
            }
            if (!this.props.suppressAutoformat)
                this.autoFormat();
            this.onShowAutoformatTimer = setTimeout(function () {
                if (_this.props.onVisibilityChanged) {
                    _this.props.onVisibilityChanged(false);
                }
                if (_this.lastFocusedElementId) {
                    public_3.NavigationService.getInstance().focus(_this.lastFocusedElementId);
                    _this.lastFocusedElementId = null;
                }
                if (_this.props.onChannelEntered) {
                    _this.props.onChannelEntered(parseInt(_this.state.text, 10));
                }
                _this.setState({ text: "" });
            }, this.options.autoDelayCloseTimeoutMs);
            if (this.props.onChannelEntered) {
                return true;
            }
            return false;
        };
        TVChannelInput.prototype.pad = function (num, size) {
            var str = num;
            while (str.length < size) {
                str = "0" + str;
            }
            return str;
        };
        TVChannelInput.prototype.sendNumber = function (value) {
            var _this = this;
            this.setState(function (prevState) {
                var input = 0;
                var text;
                if (!isNaN(parseInt(prevState.text, 10))) {
                    input = parseInt(prevState.text, 10);
                }
                if (_this.props.maxDigits) {
                    if (input.toString().length >= _this.props.maxDigits) {
                        text = value.toString();
                        _this.checkAutoLeave();
                        return { text: text };
                    }
                }
                text = (input.toString() !== "0") ? input.toString() + value : value.toString();
                _this.checkAutoLeave();
                return { text: text };
            });
            if (this.props.onVisibilityChanged) {
                this.props.onVisibilityChanged(true);
            }
            return true;
        };
        TVChannelInput.defaultProps = {
            isVisible: false,
            maxDigits: 4
        };
        TVChannelInput = __decorate([
            public_4.reactComponent({
                ID: "tv-channel-input",
                styles: [
                    public_1.selector("&")
                        .sub(public_1.selector("& .channel-input-container")
                        .props({
                        position: "relative",
                        overflow: "hidden",
                        outline: "none"
                    })
                        .sub(public_1.selector("& .channel-input-text")
                        .props({
                        display: "inline-block"
                    })
                        .extend(public_1.Css.fonts2.a_fo_h2_2__mixin)))
                        .sub(public_1.selector("&.withoverflow .channel-input-container")
                        .props({
                        overflow: "visible"
                    }))
                        .sub(public_1.selector("&.font-m2 .channel-input-text")
                        .extend(public_1.Css.fonts2.font_b2_2))
                        .props({
                        color: public_1.Css.colors.A_CO_1
                    })
                        .sub(public_1.selector("&.font-b1 .channel-input-text")
                        .extend(public_1.Css.fonts2.a_fo_b1_1_mixin))
                        .sub(public_1.selector("&.bottom-line")
                        .sub(public_1.selector("&.font-h2 .channel-input-text, &.font-m2 .channel-input-text, &.font-b1 .channel-input-text")
                        .props({
                        paddingBottom: 2
                    }))
                        .sub(public_1.selector("& .channel-input-text")
                        .props({
                        paddingBottom: 8
                    }))
                        .sub(public_1.selector(".dttv-focused & .channel-input-container >span")
                        .props({
                        borderBottom: public_1.Css.scale(3) + "px solid " + public_1.Css.colors.A_CO_2
                    })))
                        .sub(public_1.selector("&.padding-standard .channel-input-container")
                        .props({
                        paddingBottom: 24,
                        paddingTop: 24
                    }))
                        .sub(public_1.selector("&.align-center .channel-input-container")
                        .props({
                        textAlign: "center"
                    }))
                        .sub(public_1.selector("&.align-right")
                        .sub(public_1.selector(".channel-input-container")
                        .props({
                        textAlign: "right"
                    }))
                        .sub(public_1.selector(".channel-input-text")
                        .props({
                        width: 78
                    })))
                ]
            })
        ], TVChannelInput);
        return TVChannelInput;
    }(public_4.ReactBaseComponent));
    exports.TVChannelInput = TVChannelInput;
});
//# sourceMappingURL=channelinput.component.js.map