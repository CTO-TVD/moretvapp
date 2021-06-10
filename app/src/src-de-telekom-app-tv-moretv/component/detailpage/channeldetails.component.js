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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "../public", "src/src-de-telekom-style/public", "../../translation/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvChannelDetailComponent = void 0;
    var MtvChannelDetailComponent = (function (_super) {
        __extends(MtvChannelDetailComponent, _super);
        function MtvChannelDetailComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = { index: props.model.extraData.initialIdx };
            return _this;
        }
        MtvChannelDetailComponent_1 = MtvChannelDetailComponent;
        MtvChannelDetailComponent.createDialog = function (dialogService, extraData) {
            return dialogService.show({
                extraData: extraData,
                icon: undefined,
                ignoreSafeArea: true
            }, MtvChannelDetailComponent_1);
        };
        MtvChannelDetailComponent.prototype.showNextChannel = function () {
            var newIdx = this.state.index + 1 < this.props.model.extraData.channels.length ? this.state.index + 1 : 0;
            this.setState({ index: newIdx });
            return true;
        };
        MtvChannelDetailComponent.prototype.showPrevChannel = function () {
            var newIdx = this.state.index !== 0 ? this.state.index - 1 : this.props.model.extraData.channels.length - 1;
            this.setState({ index: newIdx });
            return true;
        };
        MtvChannelDetailComponent.prototype.render = function () {
            var _this = this;
            var extraData = this.props.model.extraData;
            var buttons = [
                {
                    autofocus: true,
                    icon: undefined,
                    id: "OK",
                    text: public_1.Filter.message(this, public_4.messagesMtv.CHANNELVIEW_BUTTON)
                }
            ];
            return React.createElement(public_1.NavigationContainer, { className: this.ID, id: "channelDetails", useCycle: true },
                React.createElement(public_1.NavigationKey, { keyFilter: "0-9", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset1", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset2", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset3", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "RIGHT_KEY", onKey: function () { return _this.showNextChannel(); } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "LEFT_KEY", onKey: function () { return _this.showPrevChannel(); } }),
                React.createElement("div", { className: "content" },
                    React.createElement("div", { id: "head" },
                        React.createElement("img", { className: public_3.Css.sprites.A_IC_013_3_36x36 + " image", src: public_3.Css.images.inlineTransparentPixel }),
                        React.createElement("span", { id: "title", className: public_3.Css.fonts2.a_fo_h6_2 + " singleline-ellipsis display-inline-block" }, extraData.channels[this.state.index].Title),
                        React.createElement("img", { className: public_3.Css.sprites.A_IC_013_1_36x36 + " image", src: public_3.Css.images.inlineTransparentPixel })),
                    React.createElement("hr", { id: "hr_top" }),
                    React.createElement("div", { id: "details" },
                        React.createElement("div", { id: "info", style: { color: public_3.Css.colors.A_CO_6 }, className: public_3.Css.fonts2.a_fo_b2__ },
                            extraData.channels[this.state.index].Image && React.createElement("img", { id: "channelImage", src: extraData.channels[this.state.index].Image }),
                            !extraData.channels[this.state.index].Image && React.createElement("img", { id: "defaultImage" }),
                            React.createElement("p", { id: "genre" },
                                " ",
                                extraData.channels[this.state.index].ShortDescription,
                                React.createElement("span", { className: "qualitiesContainer" },
                                    extraData.channels[this.state.index].SD && React.createElement("img", { id: "sd", className: public_3.Css.sprites.A_IC_058_1_48x48 + " image img-quality", src: public_3.Css.images.inlineTransparentPixel }),
                                    extraData.channels[this.state.index].HD && React.createElement("img", { id: "hd", className: public_3.Css.sprites.A_IC_059_1_48x48 + " image img-quality", src: public_3.Css.images.inlineTransparentPixel })))),
                        React.createElement("div", { id: "desc", className: public_3.Css.fonts2.a_fo_b1_1 }, extraData.channels[this.state.index].Description)),
                    React.createElement("hr", { id: "hr_bottom" }),
                    React.createElement("div", { className: "buttonContainer dttv-right " + public_1.Button.Bars.horizontal }, buttons.map(function (item) { return React.createElement(public_2.ButtonMtv.Standard, { key: item.id, id: item.id, text: item.text, icon: item.icon, autofocus: item.autofocus, type: "secondary", onClick: function () { return _this.props.closeDialogWithResult({ resultId: buttons[0].id, extraData: { channels: extraData.channels, initialIdx: _this.state.index } }); } }); }))));
        };
        var MtvChannelDetailComponent_1;
        MtvChannelDetailComponent.COMPONENT_WIDTH = 415;
        MtvChannelDetailComponent = MtvChannelDetailComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-channeldetails-component",
                styles: [
                    public_3.selector("& .content")
                        .props({
                        position: "absolute",
                        top: "38%",
                        left: "50%",
                        transform: "translate(-50%, -38%);",
                        width: 1176,
                        height: 660
                    }),
                    public_3.selector("& #head")
                        .props({
                        position: "absolute",
                        textAlign: "center",
                        width: "inherit"
                    }),
                    public_3.selector("& .image")
                        .props({
                        top: 5,
                        position: "relative",
                        verticalAlign: "top"
                    }),
                    public_3.selector("& #title")
                        .props({
                        marginLeft: 24,
                        marginRight: 24,
                        maxWidth: 950
                    }),
                    public_3.selector("& .display-inline-block")
                        .props({
                        display: "inline-block"
                    }),
                    public_3.selector("& hr")
                        .props({
                        backgroundColor: public_3.Css.colors.global_focus_background,
                        borderColor: public_3.Css.colors.global_focus_background,
                        height: 3
                    }),
                    public_3.selector("& #hr_top")
                        .props({
                        position: "absolute",
                        top: 47,
                        width: "inherit"
                    }),
                    public_3.selector("& #hr_bottom")
                        .props({
                        position: "absolute",
                        top: 523,
                        width: "inherit"
                    }),
                    public_3.selector("& #details")
                        .props({
                        position: "absolute",
                        top: 101,
                        height: 400
                    }),
                    public_3.selector("& #info")
                        .props({
                        display: "table-cell",
                        width: 426,
                        float: "left",
                        height: "100%",
                        marginRight: 48
                    }),
                    public_3.selector("& #desc")
                        .props({
                        height: 392,
                        position: "relative",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 8,
                        WebkitBoxOrient: "vertical"
                    }),
                    public_3.selector("& #genre")
                        .props({
                        height: 128,
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        position: "relative",
                        marginTop: 22
                    }),
                    public_3.selector("& #channelImage")
                        .props({
                        width: 426,
                        height: 240,
                        top: 12,
                        position: "relative"
                    }),
                    public_3.selector("& #defaultImage")
                        .props({
                        width: 426,
                        height: 240,
                        top: 12,
                        position: "relative",
                        backgroundColor: public_3.Css.colors.global_tile_background
                    }),
                    public_3.selector("& .qualitiesContainer")
                        .props({
                        marginLeft: 3
                    }),
                    public_3.selector("& .img-quality")
                        .props({
                        width: 48,
                        height: 48,
                        marginRight: -2,
                        verticalAlign: "top"
                    }),
                    public_3.selector("& .buttonContainer")
                        .props({
                        position: "absolute",
                        width: "inherit",
                        top: 588
                    })
                ]
            })
        ], MtvChannelDetailComponent);
        return MtvChannelDetailComponent;
    }(public_1.ReactBaseComponent));
    exports.MtvChannelDetailComponent = MtvChannelDetailComponent;
});
//# sourceMappingURL=channeldetails.component.js.map