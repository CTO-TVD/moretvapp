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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "src/src-de-telekom/public", "../../public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParagraphMiniPlayerLTVComponent = void 0;
    var ParagraphMiniPlayerLTVComponent = (function (_super) {
        __extends(ParagraphMiniPlayerLTVComponent, _super);
        function ParagraphMiniPlayerLTVComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = {
                channelNo: "",
                channelInputOptions: __assign(__assign({}, public_3.Configuration.instance.channelinput), { autoDelayCloseTimeoutMs: 0 }),
                isInputVisible: false
            };
            return _this;
        }
        ParagraphMiniPlayerLTVComponent.prototype.onChannelInputVisibilityChanged = function (isVisible) {
            this.props.onInputVisibilityChanged(isVisible);
            this.setState({ isInputVisible: isVisible });
        };
        ParagraphMiniPlayerLTVComponent.prototype.onNumberEntered = function (channel) {
            this.setState({ channelNo: channel.toString() });
            this.props.onNumberEntered(channel);
        };
        ParagraphMiniPlayerLTVComponent.prototype.onInputAborted = function () {
            var _a;
            this.setState({ channelNo: ((_a = this.props.channel) === null || _a === void 0 ? void 0 : _a.channelNumber) ? this.props.channel.channelNumber.toString() : "" });
            this.props.onInputAborted();
        };
        ParagraphMiniPlayerLTVComponent.prototype.componentDidUpdate = function (prevProps) {
            var _a;
            if (prevProps.channel != this.props.channel) {
                this.setState({ channelNo: ((_a = this.props.channel) === null || _a === void 0 ? void 0 : _a.channelNumber) ? this.props.channel.channelNumber.toString() : "" });
            }
            if (prevProps.isVisible != this.props.isVisible && !this.props.isVisible) {
                this.setState({ isInputVisible: false });
            }
        };
        ParagraphMiniPlayerLTVComponent.prototype.render = function () {
            var _this = this;
            var _a, _b;
            var containerClassNames = ["container"];
            if (this.props.disabled) {
                containerClassNames.push("disabled");
            }
            return React.createElement("div", { className: [this.ID, this.props.className].join(" "), style: this.props.style },
                React.createElement("div", { className: "topLine" },
                    (this.props.withChannel) && React.createElement(public_4.TVChannelInput, { textClassName: public_1.Css.fonts2.a_fo_h2_2, className: "bottom-line withoverflow", maxDigits: 4, cancelInput: this.props.cancelInput, options: this.state.channelInputOptions, input: this.props.keyEvent, onChannelEntered: function (channel) { return _this.onNumberEntered(channel); }, onInputAborted: function () { return _this.onInputAborted(); }, isVisible: this.state.isInputVisible, suppressAutoformat: true, onVisibilityChanged: function (isVisible) { return _this.onChannelInputVisibilityChanged(isVisible); } }),
                    (this.props.isVisible && this.props.withChannel && this.props.channel) && React.createElement(React.Fragment, null,
                        React.createElement("div", { className: ["channelNo", public_1.Css.fonts2.a_fo_h2_2].join(" ") }, !this.state.isInputVisible ? this.state.channelNo : ""),
                        React.createElement(public_4.ChannelLogoSmallComponent, { className: "channelLogo", position: "center", expandChannelTitle: true, disabled: this.props.disabled, channelTitle: ((_a = this.props.channel) === null || _a === void 0 ? void 0 : _a.title) || "", channelLogo: ((_b = this.props.channel) === null || _b === void 0 ? void 0 : _b.dtExtensions.channelLogoNew.url) || "" }))),
                this.props.isVisible && React.createElement("div", { className: containerClassNames.join(" ") },
                    React.createElement("div", { className: ["title", public_1.Css.fonts2.a_fo_h2__].join(" ") },
                        React.createElement("span", { className: "singleline-ellipsis" }, this.props.title),
                        this.props.iconState && React.createElement(public_4.IconLineupContentTitleComponent, { size: "small", className: "icons", iconState: this.props.iconState })),
                    React.createElement("div", { className: ["metadata", public_1.Css.fonts2.a_fo_b2__].join(" ") },
                        this.props.metaline && public_3.Guard.isString(this.props.metaline) &&
                            this.props.metaline,
                        this.props.metaline && !public_3.Guard.isString(this.props.metaline) &&
                            this.props.metaline())));
        };
        ParagraphMiniPlayerLTVComponent = __decorate([
            public_2.reactComponent({
                ID: "m-23-01-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        width: 1368
                    })
                        .sub(public_1.selector(".topLine")
                        .props({
                        display: "flex",
                        height: 48,
                        marginBottom: 43,
                    }))
                        .sub(public_1.selector(".container.disabled")
                        .props({
                        opacity: 0.3
                    }))
                        .sub(public_1.selector(".title")
                        .props({
                        width: 1776,
                        marginBottom: 16,
                        display: "flex"
                    }))
                        .sub(public_1.selector(".channelNo")
                        .props({
                        marginRight: 24
                    }))
                        .sub(public_1.selector(".channelLogo")
                        .props({
                        marginTop: 12
                    })),
                    public_1.selector("& .icons")
                        .props({
                        flexShrink: 0,
                        marginLeft: 12,
                        marginTop: -12
                    }),
                ]
            })
        ], ParagraphMiniPlayerLTVComponent);
        return ParagraphMiniPlayerLTVComponent;
    }(public_2.ReactBaseComponent));
    exports.ParagraphMiniPlayerLTVComponent = ParagraphMiniPlayerLTVComponent;
});
//# sourceMappingURL=miniplayerltv.component.js.map