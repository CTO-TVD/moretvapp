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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "src/src-de-telekom-tv-core/public", "../../translation/public"], function (require, exports, React, public_1, public_2, public_3, Core, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvDetailPageActions20 = void 0;
    var MtvDetailPageActions20 = (function (_super) {
        __extends(MtvDetailPageActions20, _super);
        function MtvDetailPageActions20(props, context) {
            var _a;
            var _this = _super.call(this, props, context) || this;
            _this.FOCUS_INDENT = 0;
            _this.navigateToLiveTVDetailPage = function () {
                if (!_this.props.secondary || _this.props.secondary.broadcasts.length == 0) {
                    return;
                }
                var parameters = {
                    externalProgramIds: _this.props.secondary.broadcasts,
                    externalProgramIdType: Core.zosaStatic.EXTERNAL_ID_TYPE_CMS
                };
                Core.ApplicationClient.programManagement
                    .getPrograms(parameters)
                    .then(function (programs) {
                    if (programs && programs.length > 0) {
                        _this.startIntent(new public_1.IntentCore.ProgramDetail({ contentId: programs[0].zosaId, idType: "ZOSA" }));
                    }
                    else {
                    }
                });
            };
            _this.wrapperindention = 0;
            _this.primaryButtons = [];
            _this.primaryButtonOnReady = function (e, focusId) {
                _this.primaryButtons.push({ element: e, left: e.getBoundingClientRect().left, focusId: focusId });
            };
            var favoriteButtonLabel = (props === null || props === void 0 ? void 0 : props.secondary) ? public_1.Filter.message(_this, props.secondary.marked ? public_4.messagesVod.REMOVE_FROM_WATCHLIST : public_4.messagesVod.STB_VD_TI035) : undefined;
            _this.state = {
                watchlistStatus: ((_a = props.secondary) === null || _a === void 0 ? void 0 : _a.marked) ? "tagged" : "removed",
                watchlistButtonLabel: favoriteButtonLabel,
                primaryButtonTranslation: 0
            };
            return _this;
        }
        MtvDetailPageActions20.prototype.componentDidUpdate = function (nextProps) {
            if (nextProps != this.props) {
            }
        };
        MtvDetailPageActions20.prototype.goToPurchase = function () {
            if (this.props.onClickToPurchase)
                this.props.onClickToPurchase();
        };
        MtvDetailPageActions20.prototype.getButtonText = function () {
            return React.createElement(React.Fragment, null,
                React.createElement("span", { className: public_2.Css.fonts2.a_fo_b1_3 }, "Jetzt 6 Monate (tbd)"),
                React.createElement("br", null),
                "Gratis starten* (tbd)");
        };
        MtvDetailPageActions20.prototype.trackClick = function (text, clickType, additionalToTrack) {
            if (this.props.onClickTracking)
                this.props.onClickTracking(text, clickType, additionalToTrack);
        };
        MtvDetailPageActions20.prototype.render = function () {
            var _this = this;
            var listTranslate = public_2.declaration().props({ transform: "translate(" + -1 * this.state.primaryButtonTranslation + "px,0)" });
            var secondaryTopPosition = undefined;
            return React.createElement("div", { className: [this.ID, this.props.className].join(" "), style: this.props.style },
                React.createElement(public_1.NavigationContainer, { id: "primaryActions", className: ["primaryActions"].join(" "), overrides: { left: "primaryActions", right: "primaryActions" }, autofocus: this.props.autofocus, onReady: function (e) {
                        _this.wrapperindention = e.getBoundingClientRect().left;
                    }, onFocusFollow: function (itemId, state) {
                        if (state == "inactive" || _this.primaryButtons.length == 0) {
                            return;
                        }
                        var id = itemId.split("::").pop();
                        var centralFocus = 2;
                        var buttonIndexFocussed = id ? _this.primaryButtons.map(function (it) { return it.focusId; }).indexOf(id) : -1;
                        var listShiftedByElements = Math.max(buttonIndexFocussed - centralFocus, 0);
                        _this.setState({ primaryButtonTranslation: _this.primaryButtons[listShiftedByElements].left - _this.wrapperindention });
                    } },
                    React.createElement("div", { className: [public_1.Button.Bars.horizontal.verticalAlignTop.marginButton20, "actionListAnimator"].join(" "), style: listTranslate.toStyle() },
                        React.createElement(public_1.Button.Image2LinesAndText, { id: "purchaseoptionrent", text: function () { return _this.getButtonText(); }, onClick: function () { return _this.goToPurchase(); }, subtext: this.state.rentSubtext, onReady: function (e) { return _this.primaryButtonOnReady(e, "purchaseoptionrent"); } }))),
                React.createElement("div", { className: ["secondaryActions", public_1.Button.Bars.horizontal].join(" "), style: secondaryTopPosition },
                    React.createElement(public_1.TVTabBarComponent, { centralIndex: 4, autofocus: this.props.autofocus, tabs: [
                            { title: public_1.Filter.message(this, public_4.messagesVod.STB_VD_TI032b), onClick: function () { _this.props.onMoreInfo(); _this.trackClick(public_1.Filter.message(_this, public_4.messagesVod.STB_VD_TI032b), public_3.IClickType.Action); } },
                            { title: public_1.Filter.message(this, public_4.messagesMtv.PACKETVIEW_CONTRACTDETAILS), onClick: function () { _this.props.onClickToTermsOfUse(); _this.trackClick(public_1.Filter.message(_this, public_4.messagesVod.STB_VD_TI032b), public_3.IClickType.Action); } },
                        ].filter(public_3.Guard.isDefined) })));
        };
        MtvDetailPageActions20.classID = 0x804;
        MtvDetailPageActions20.HEIGHT = 375;
        MtvDetailPageActions20.HEIGHT_ONLY_SECONDARY = 175 - 20;
        MtvDetailPageActions20 = __decorate([
            public_1.reactComponent({
                ID: "mtv-detailpage-actions",
                styles: [
                    public_2.selector("&")
                        .props({
                        position: "absolute"
                    })
                        .sub(public_2.selector(".primaryActions")
                        .props({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: public_2.Css.dimensions.screenWidth,
                        height: 80
                    })
                        .sub(public_2.selector(".buttonLabelCombo")
                        .props({
                        float: "left",
                        paddingRight: 20
                    })
                        .sub(public_2.selector(".button")
                        .props({
                        position: "absolute",
                        top: 0
                    }))
                        .sub(public_2.selector(".label")
                        .props({
                        position: "absolute",
                        top: 129
                    }))))
                        .sub(public_2.selector(".secondaryActions")
                        .props({
                        position: "absolute",
                        top: 228,
                        left: -1 * public_2.Css.dimensions.safeareaLeft_UI20,
                    }))
                        .sub(public_2.selector(".actionListAnimator")
                        .props({
                        transition: "transform 400ms",
                        whiteSpace: "nowrap",
                        willChange: "transform"
                    }))
                        .sub(public_2.selector(".strikethroughText")
                        .props({
                        textDecoration: "line-through"
                    }))
                ]
            }),
            public_3.logTag()
        ], MtvDetailPageActions20);
        return MtvDetailPageActions20;
    }(public_1.ReactBaseComponent));
    exports.MtvDetailPageActions20 = MtvDetailPageActions20;
});
//# sourceMappingURL=actions.component20.js.map