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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../../../service/keyeventmanager/public", "../../../framework/navigation/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NavigateTVPinEntryComponent = exports.TVPinEntryComponent = void 0;
    var TVPinEntryComponent = (function (_super) {
        __extends(TVPinEntryComponent, _super);
        function TVPinEntryComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = {
                characters: "",
                pin: ""
            };
            return _this;
        }
        TVPinEntryComponent_1 = TVPinEntryComponent;
        TVPinEntryComponent.prototype.onKey = function (keyEvent) {
            var handled = false;
            if (this.state.pin.length < this.props.maxLength) {
                switch (keyEvent.virtualKey) {
                    case public_3.TVKeyCodeConfig.ZERO_KEY:
                        this.sendNumber("0");
                        handled = true;
                        break;
                    case public_3.TVKeyCodeConfig.ONE_KEY:
                        this.sendNumber("1");
                        handled = true;
                        break;
                    case public_3.TVKeyCodeConfig.TWO_KEY:
                        this.sendNumber("2");
                        handled = true;
                        break;
                    case public_3.TVKeyCodeConfig.THREE_KEY:
                        this.sendNumber("3");
                        handled = true;
                        break;
                    case public_3.TVKeyCodeConfig.FOUR_KEY:
                        this.sendNumber("4");
                        handled = true;
                        break;
                    case public_3.TVKeyCodeConfig.FIVE_KEY:
                        this.sendNumber("5");
                        handled = true;
                        break;
                    case public_3.TVKeyCodeConfig.SIX_KEY:
                        this.sendNumber("6");
                        handled = true;
                        break;
                    case public_3.TVKeyCodeConfig.SEVEN_KEY:
                        this.sendNumber("7");
                        handled = true;
                        break;
                    case public_3.TVKeyCodeConfig.EIGHT_KEY:
                        this.sendNumber("8");
                        handled = true;
                        break;
                    case public_3.TVKeyCodeConfig.NINE_KEY:
                        this.sendNumber("9");
                        handled = true;
                        break;
                }
            }
            switch (keyEvent.virtualKey) {
                case public_3.TVKeyCodeConfig.DELETE_KEY:
                    this.executeBackspace();
                    handled = true;
                    break;
            }
            if (handled) {
                this.update();
            }
            return handled;
        };
        TVPinEntryComponent.prototype.executeBackspace = function () {
            this.setState(function (prevState) {
                if (prevState.pin.length > 0) {
                    return { pin: prevState.pin.substr(0, prevState.pin.length - 1) };
                }
                return null;
            });
        };
        TVPinEntryComponent.prototype.sendNumber = function (num) {
            this.setState(function (prevState) {
                return { pin: prevState.pin + num };
            });
        };
        TVPinEntryComponent.prototype.update = function () {
            var _this = this;
            this.setState(function (prevstate) {
                if (_this.props.onChanged) {
                    _this.props.onChanged({ value: prevstate.pin });
                }
                if (_this.props.maxLength != null && prevstate.pin.length >= _this.props.maxLength) {
                    if (_this.props.onCompleted) {
                        _this.props.onCompleted({ value: prevstate.pin });
                    }
                }
                return {
                    characters: _this.props.stars
                        ? Array(prevstate.pin.length + 1).join("•")
                        : prevstate.pin
                };
            });
        };
        TVPinEntryComponent.prototype.componentDidUpdate = function (prevProps) {
            if (this.props.reset !== prevProps.reset) {
                this.setState({ pin: "" });
                this.update();
            }
            if (this.props.password && this.props.password !== prevProps.password) {
                this.setState({ characters: this.props.password });
            }
        };
        TVPinEntryComponent.prototype.render = function () {
            var _this = this;
            return React.createElement("div", { className: this.ID + " " + this.props.className },
                React.createElement(public_4.NavigationKey, { keyFilter: "*", onKey: function (e) { return _this.onKey(e); } }),
                React.createElement("div", { className: "pinField focus-background-transition" + (this.props.accepted ? " accepted" : "") + (this.props.disabled ? " disabled" : "") },
                    React.createElement("label", { className: "pinLabel" + (this.props.stars ? " stars " + public_1.Css.fonts2.a_fo_h6 : " noStars " + public_1.Css.fonts2.a_fo_h6) }, this.state.characters),
                    React.createElement("div", { className: "interactive-cursor" })));
        };
        var TVPinEntryComponent_1;
        TVPinEntryComponent.CssHeight = 84;
        TVPinEntryComponent.defaultProps = {
            accepted: false,
            disabled: false,
            maxLength: 4,
            stars: true,
            className: "",
            password: ""
        };
        TVPinEntryComponent = TVPinEntryComponent_1 = __decorate([
            public_2.reactComponent({
                ID: "pin-entry-component",
                styles: [
                    public_1.selector(".dttv-focused & .interactive-cursor")
                        .props({
                        width: public_1.Css.dimensions.cursorWidth,
                        animation: public_1.Css.globalStyleClasses.blinkTransition + " 800ms linear infinite"
                    }),
                    public_1.selector(".dttv-focused & .pinField")
                        .props({
                        borderColor: public_1.Css.colors.A_CO_1
                    }),
                    public_1.selector("& .pinField")
                        .props({
                        borderRadius: public_1.Css.dimensions.borderRadius,
                        backgroundColor: public_1.Css.colors.A_CO_1_15,
                        borderWidth: 3,
                        borderStyle: "solid",
                        borderColor: "transparent",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0
                    }),
                    public_1.selector("& .interactive-cursor")
                        .props({
                        backgroundColor: public_1.Css.colors.A_CO_6,
                        marginBottom: 18,
                        marginTop: 18,
                        height: 36,
                        width: 0,
                        display: "inline-block",
                        verticalAlign: "bottom"
                    }),
                    public_1.selector("& .pinField")
                        .props({
                        height: TVPinEntryComponent_1.CssHeight,
                        width: "inherit",
                        position: "relative",
                        textAlign: "center"
                    }),
                    public_1.selector("& .stars")
                        .props({
                        verticalAlign: "middle",
                        alignItems: "center",
                        lineHeight: 70
                    }),
                    public_1.selector("& .noStars")
                        .props({
                        verticalAlign: "super"
                    }),
                    public_1.selector("& .accepted::after")
                        .props({
                        content: "''",
                        position: "absolute",
                        width: 27,
                        height: 14,
                        backgroundColor: public_1.Css.colors.A_CO_0,
                        top: "50%",
                        left: "50%"
                    })
                        .extend(public_1.Css.mixins.borderCheckedControl)
                        .props({
                        transform: "translate(-50%, -50%) rotate(-45deg)"
                    }),
                    public_1.selector("& .disabled::after")
                        .props({
                        content: "''",
                        position: "absolute",
                        width: 60,
                        height: 60,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        background: "url('src/src-de-telekom-style/icon/spinner_small_40x40_sprite.png') left center",
                        animation: "play 4s steps(50) infinite"
                    }),
                    public_1.selector("& .accepted .interactive-cursor")
                        .props({
                        visibility: "hidden"
                    }),
                    public_1.selector("& .disabled .interactive-cursor")
                        .props({
                        visibility: "hidden"
                    }),
                    public_1.selector("& .accepted .pinLabel")
                        .props({
                        visibility: "hidden"
                    }),
                    public_1.selector("& .disabled .pinLabel")
                        .props({
                        visibility: "hidden"
                    })
                ]
            })
        ], TVPinEntryComponent);
        return TVPinEntryComponent;
    }(public_2.ReactBaseComponent));
    exports.TVPinEntryComponent = TVPinEntryComponent;
    exports.NavigateTVPinEntryComponent = public_4.makeNavigationElement(TVPinEntryComponent);
});
//# sourceMappingURL=pinentry.component.js.map