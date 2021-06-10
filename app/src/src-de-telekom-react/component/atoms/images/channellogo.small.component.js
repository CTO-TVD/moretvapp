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
    exports.ChannelLogoSmallComponent = void 0;
    var ChannelLogoSmallComponent = (function (_super) {
        __extends(ChannelLogoSmallComponent, _super);
        function ChannelLogoSmallComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = {};
            return _this;
        }
        ChannelLogoSmallComponent_1 = ChannelLogoSmallComponent;
        ChannelLogoSmallComponent.getDerivedStateFromProps = function (nextProps, prevState) {
            if (nextProps.channelLogo !== prevState.channelLogo) {
                return { channelLogo: nextProps.channelLogo, currentImageUrl: nextProps.channelLogo };
            }
            return null;
        };
        ChannelLogoSmallComponent.prototype.loadImage = function (state) {
            if (state == "error") {
                this.setState({ currentImageUrl: undefined });
            }
            if (this.props.imageLoaded) {
                this.props.imageLoaded(state);
            }
        };
        ChannelLogoSmallComponent.prototype.render = function () {
            var _this = this;
            var classNames = this.props.position ? [this.props.position] : [];
            var rootclassNames = [this.ID];
            if (this.props.className)
                classNames.push(this.props.className);
            if (this.props.rootClassName)
                rootclassNames.push(this.props.rootClassName);
            if (this.props.expandChannelTitle && !this.state.currentImageUrl)
                classNames.push("expanded");
            if (this.props.disabled)
                classNames.push("disabled");
            if (!this.props.channelTitle && !this.state.currentImageUrl && (this.props.useDefaultImage != false))
                classNames.push("showDefaultImage");
            if (this.props.channelTitle && !this.state.currentImageUrl && (this.props.useDefaultImage != false))
                classNames.push("showDefaultText");
            return React.createElement("div", { className: rootclassNames.join(" ") },
                React.createElement("div", { className: "atomicChannelLogo " + classNames.join(" ") },
                    this.state.currentImageUrl &&
                        React.createElement("img", { src: this.state.currentImageUrl, onAbort: function () { return _this.loadImage("abort"); }, onError: function () { return _this.loadImage("error"); }, onLoad: function () { return _this.loadImage("load"); } }),
                    !this.state.currentImageUrl &&
                        React.createElement("div", { className: this.props.expandChannelTitle ? "expandedTitle" : "" }, this.props.channelTitle),
                    React.createElement("span", null)));
        };
        var ChannelLogoSmallComponent_1;
        ChannelLogoSmallComponent.height = 42;
        ChannelLogoSmallComponent.width = 120;
        ChannelLogoSmallComponent = ChannelLogoSmallComponent_1 = __decorate([
            public_2.reactComponent({
                ID: "atomic-channel-logo-small",
                styles: [
                    public_1.selector("&")
                        .props({
                        height: ChannelLogoSmallComponent_1.height
                    }),
                    public_1.selector("& > div.atomicChannelLogo")
                        .props({
                        height: ChannelLogoSmallComponent_1.height,
                        maxWidth: ChannelLogoSmallComponent_1.width,
                        width: ChannelLogoSmallComponent_1.width,
                        display: "flex"
                    }),
                    public_1.selector("& > div.atomicChannelLogo.expanded")
                        .props({
                        maxWidth: "inherit",
                        width: "inherit",
                        display: "flex"
                    }),
                    public_1.selector("& > div.atomicChannelLogo > img")
                        .props({
                        height: "100%",
                        maxWidth: "100%"
                    }),
                    public_1.selector("& > div.atomicChannelLogo > span")
                        .extend(public_1.Css.sprites.A_IC_046_1_24x24_mixin)
                        .props({
                        display: "none",
                        marginLeft: 18,
                        flex: "0 0 auto"
                    }),
                    public_1.selector("& > div.atomicChannelLogo.center > img")
                        .props({
                        margin: "auto"
                    }),
                    public_1.selector("& > div.atomicChannelLogo.right > img")
                        .props({
                        margin: "auto 0 auto auto"
                    }),
                    public_1.selector("& > div.atomicChannelLogo.disabled")
                        .props({
                        opacity: 0.3
                    }),
                    public_1.selector("& > div.atomicChannelLogo.showDefaultImage")
                        .props({
                        backgroundColor: public_1.Css.colors.A_CO_1_10
                    }),
                    public_1.selector("& > div.atomicChannelLogo.showDefaultText")
                        .props({
                        backgroundColor: public_1.Css.colors.A_CO_1_10
                    }),
                    public_1.selector("& > div.atomicChannelLogo.showDefaultImage > div")
                        .extend(public_1.Css.sprites.A_IC_072_30x30_mixin)
                        .props({
                        display: "block",
                        margin: "auto",
                        opacity: 0.09
                    }),
                    public_1.selector("& > div.atomicChannelLogo.showDefaultText > div")
                        .props({
                        display: "block",
                        margin: "auto",
                        opacity: 0.8
                    })
                        .extend(public_1.Css.fonts2.a_fo_l1_1_mixin)
                        .extend(public_1.Css.mixins.singlelineEllipsis)
                        .props({
                        paddingRight: 12,
                        paddingLeft: 12,
                        textAlign: "center"
                    }),
                    public_1.selector("& > div.atomicChannelLogo.showDefaultText > div.expandedTitle")
                        .props({
                        display: "block",
                        margin: "auto",
                        opacity: 1
                    })
                        .extend(public_1.Css.fonts2.a_fo_l1_1_mixin)
                        .extend(public_1.Css.mixins.singlelineEllipsis)
                        .props({
                        paddingRight: 12,
                        paddingLeft: 12,
                        textAlign: "center"
                    })
                ]
            }),
            public_3.logTag()
        ], ChannelLogoSmallComponent);
        return ChannelLogoSmallComponent;
    }(public_2.ReactBaseComponent));
    exports.ChannelLogoSmallComponent = ChannelLogoSmallComponent;
});
//# sourceMappingURL=channellogo.small.component.js.map