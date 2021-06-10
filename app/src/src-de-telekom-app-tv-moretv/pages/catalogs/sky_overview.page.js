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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "src/src-de-telekom-style/public", "src/src-de-telekom-tv-moretv/public", "../../translation/public", "../../public", "../../component/public", "./sky_data.loader"], function (require, exports, React, public_1, public_2, public_3, mtv, public_4, public_5, public_6, sky_data_loader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvSkyOverviewPage = void 0;
    var MtvSkyOverviewPage = (function (_super) {
        __extends(MtvSkyOverviewPage, _super);
        function MtvSkyOverviewPage(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.rowheight = public_5.ContentMtvTiles.SkyTile.HEIGHT + MtvSkyOverviewPage_1.laneItemsTiltleMargin;
            _this.showErrorDialog = function (error) {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("SHOW DIALOG for error code " + error, MtvSkyOverviewPage_1.TAG)); });
                _this.genericDialog = error
                    ? public_6.MtvMessageOverlayComponent.createDialogByError({ error: error })
                    : public_6.MtvMessageOverlayComponent.createSkyDialog();
                _this.genericDialog
                    .result(_this)
                    .then(function (result) {
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("MTVGenericErrorComponent dialog closed with result " + result.resultId + " ", MtvSkyOverviewPage_1.TAG)); });
                })
                    .catch(function (error) {
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("showDialogClick: dialog aborted -> " + error + " ", MtvSkyOverviewPage_1.TAG)); });
                });
            };
            _this.showTermsOfUse = function () {
                _this.setState(function (prevState) { return prevState.associatedTermesOfUse ? { showTermsOfUse: { id: prevState.associatedTermesOfUse } } : null; });
                return true;
            };
            _this.state = {
                topPosition: 0,
                hinttextType: undefined
            };
            return _this;
        }
        MtvSkyOverviewPage_1 = MtvSkyOverviewPage;
        MtvSkyOverviewPage.prototype.componentDidMount = function () {
            var _this = this;
            sky_data_loader_1.SkyCatalogDataLoader
                .loadData()
                .then(function (data) {
                if (data.rows) {
                    data.rows.forEach(function (row, rowIndex) {
                        var gridOffset = data.teaser ? (MtvSkyOverviewPage_1.TEASERHEIGHT + MtvSkyOverviewPage_1.TEASERMARGIN) : 0;
                        row.topPosition = _this.rowheight * rowIndex + gridOffset;
                        row.styles = public_3.declaration()
                            .props({
                            position: "absolute",
                            top: row.topPosition,
                            height: _this.rowheight
                        })
                            .toStyle();
                        row.items.forEach(function (item, x) {
                            item.styles = public_3.declaration()
                                .props({
                                left: (public_5.ContentMtvTiles.SkyTile.WIDTH + 24) * x,
                                top: MtvSkyOverviewPage_1.laneItemsTiltleMargin,
                                position: "absolute"
                            })
                                .toStyle();
                        });
                    });
                }
                _this.setState(__assign({}, data));
            })
                .catch(function (error) {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("ERROR: Show Sky Catalog: " + error.message, MtvSkyOverviewPage_1.TAG)); });
                _this.showErrorDialog();
            });
        };
        MtvSkyOverviewPage.prototype.componentWillUnmount = function () {
            if (this.genericDialog) {
                this.genericDialog.closeDialogWithResult({ resultId: "aborted" });
            }
        };
        MtvSkyOverviewPage.prototype.render = function () {
            var _this = this;
            var _a, _b, _c;
            var gridTranslation = public_3.declaration().props({ transform: "translate(0px, " + -1 * this.state.topPosition + "px)" });
            var teaserImage = ((_a = this.state.teaser) === null || _a === void 0 ? void 0 : _a.image)
                ? public_2.ImageScale.scale(this.state.teaser.image, { ar: "ignore", x: public_3.Css.dimensions.safeareaWidth, y: MtvSkyOverviewPage_1.TEASERHEIGHT })
                : public_3.Css.images.inlineTransparentPixel;
            return React.createElement("div", { className: [this.ID, public_3.Css.globalStyleClasses.defaultBackgroundImage, "page", public_1.TvThemepackKeys.CSSROOT].join(" ") }, (this.state.teaser || this.state.rows) &&
                React.createElement(public_1.NavigationContainer, { id: "mtvCatalog#SKY", strictHorizontal: true },
                    React.createElement(public_1.TvBackgroundSustainer, { image: (_b = this.state.background) === null || _b === void 0 ? void 0 : _b.image }),
                    React.createElement(public_1.TvThemepack, { data: this.state.themepack }),
                    React.createElement(public_1.NavigationKey, { keyFilter: "INFO_KEY", onKey: this.showTermsOfUse }),
                    React.createElement(public_6.MtvTermsOfUseDialogWrapper, { idObject: this.state.showTermsOfUse, onError: this.showErrorDialog }),
                    React.createElement("h1", { style: { textTransform: "uppercase" }, className: [public_3.Css.fonts2.a_fo_b1_1, "singleline-ellipsis"].join(" ") }, this.state.title),
                    React.createElement("div", { className: "grid" },
                        React.createElement("div", { className: [public_3.Css.transitions.transformShort, "animContainer"].join(" "), style: gridTranslation.toStyle() },
                            this.state.teaser &&
                                React.createElement(public_1.NavigationElement, { id: "teaser", overrides: { down: "lane_0_0" }, onFocusIn: function () { return _this.setState(function (prevState) {
                                        var _a;
                                        return ({
                                            hinttextType: prevState.teaser ? prevState.teaser.termsOfUseType : undefined,
                                            associatedTermesOfUse: (_a = prevState.teaser) === null || _a === void 0 ? void 0 : _a.termsOfUse,
                                            topPosition: 0
                                        });
                                    }); }, className: "dttv-bigTeaser-item-frame-wide", onClick: function () { var _a; return ((_a = _this.state.teaser) === null || _a === void 0 ? void 0 : _a.packageRef) && _this.startIntent(new public_1.IntentMoreTV.Detailpage({ id: _this.state.teaser.packageRef, options: { sustainBackground: true } })); } },
                                    React.createElement("div", { className: "dttv-bigTeaser-image dttv-focus-frame" },
                                        React.createElement("img", { className: "dttv-bigTeaser-image-href-wide", src: teaserImage }),
                                        React.createElement("div", { className: "price singleline-ellipsis" },
                                            React.createElement("span", { className: public_3.Css.fonts2.a_fo_b2_2 }, this.state.teaser.period),
                                            React.createElement("span", { className: public_3.Css.fonts2.a_fo_b2__ }, this.state.teaser.price)),
                                        React.createElement("div", { className: "title" },
                                            React.createElement("p", { className: ["title2", "h5_1", "twolines-ellipsis"].join(" ") }, this.state.teaser.title)),
                                        React.createElement("div", { className: ["subtitle", public_3.Css.fonts2.a_fo_b2_2, "twolines-ellipsis"].join(" ") }, this.state.teaser.subtitle))), (_c = this.state.rows) === null || _c === void 0 ? void 0 :
                            _c.map(function (line, x) {
                                return React.createElement("div", { className: "row dttv-create-layer", style: line.styles, key: x.toString() },
                                    React.createElement(public_1.NavigationWatcher, { onFocusInTree: function () { return _this.setState({ topPosition: public_3.Css.scale(line.topPosition || 0) }); } },
                                        React.createElement("div", { className: ["subheadline", "singleline-ellipsis", "h4_1"].join(" ") },
                                            line.title,
                                            line.totalCount &&
                                                React.createElement("span", { className: "h4_2" },
                                                    " (",
                                                    line.totalCount,
                                                    ")")),
                                        line.items.map(function (item, ix) {
                                            return !item.more
                                                ? React.createElement(public_1.NavigationWatcher, { key: ix, onFocusIn: function () { return _this.setState({ hinttextType: item.termsOfUseType, associatedTermesOfUse: item.termsOfUse }); } },
                                                    React.createElement(public_5.ContentMtvTiles.SkyTile, { style: item.styles, asset: item, autofocus: false, focusId: "lane_" + line.index + "_" + ix }))
                                                : React.createElement(public_6.ButtonMtv.Standard, { id: "lane_" + x + "_more", type: "more", format: "m-bu-16-3", className: "morehelper", key: ix, style: __assign({ height: public_3.Css.scale(public_5.ContentMtvTiles.SkyTile.HEIGHT) }, item.styles), text: public_4.messagesVod.STB_VD_TI071, onFocusIn: function () { return _this.setState({ hinttextType: undefined, associatedTermesOfUse: undefined }); }, onClick: function () { return _this.startIntent(new public_1.IntentMoreTV.DisplayGroup({ provider: mtv.ApplicationClient.PROVIDER_SKY, group: line.title })); } });
                                        })));
                            })))));
        };
        var MtvSkyOverviewPage_1;
        MtvSkyOverviewPage.classID = 0xC07;
        MtvSkyOverviewPage.TEASERHEIGHT = 472;
        MtvSkyOverviewPage.TEASERMARGIN = 96;
        MtvSkyOverviewPage.laneItemsTiltleMargin = 44;
        MtvSkyOverviewPage = MtvSkyOverviewPage_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-skycatalog-page",
                styles: [
                    public_3.selector("&")
                        .props({
                        width: public_3.Css.dimensions.screenWidth,
                        height: public_3.Css.dimensions.screenHeight
                    }),
                    public_3.selector("& .grid")
                        .props({
                        position: "absolute",
                        top: public_3.Css.dimensions.safeareaTop + 138,
                        left: public_3.Css.dimensions.safeareaLeft - public_3.Css.dimensions.borderWidth,
                        width: public_3.Css.dimensions.safeareaWidth + 2 * public_3.Css.dimensions.borderWidth,
                        height: public_3.Css.dimensions.screenHeight,
                        overflow: "hidden"
                    }),
                    public_3.selector("& .animContainer")
                        .props({
                        position: "absolute"
                    }),
                    public_3.selector("& .row")
                        .props({
                        position: "absolute"
                    }),
                    public_3.selector("& .dttv-bigTeaser-item-frame-wide")
                        .props({
                        padding: public_3.Css.dimensions.borderWidth,
                        position: "absolute",
                        width: public_3.Css.dimensions.safeareaWidth + 2 * public_3.Css.dimensions.borderWidth,
                        height: MtvSkyOverviewPage_1.TEASERHEIGHT + 2 * public_3.Css.dimensions.borderWidth
                    }),
                    public_3.selector("& .dttv-bigTeaser-image")
                        .props({
                        position: "absolute",
                        height: MtvSkyOverviewPage_1.TEASERHEIGHT,
                        width: public_3.Css.dimensions.safeareaWidth
                    }),
                    public_3.selector("& .dttv-bigTeaser-image-href-wide")
                        .props({
                        position: "absolute",
                        top: 0,
                        width: public_3.Css.dimensions.safeareaWidth,
                        height: MtvSkyOverviewPage_1.TEASERHEIGHT
                    }),
                    public_3.selector("& h1")
                        .props({
                        width: public_3.Css.dimensions.safeareaWidth
                    }),
                    public_3.selector("& .morehelper")
                        .props({
                        position: "absolute",
                        padding: public_3.Css.dimensions.borderWidth
                    }),
                    public_3.selector("& .subheadline")
                        .props({
                        position: "absolute",
                        left: public_3.Css.dimensions.borderWidth
                    }),
                    public_3.selector("& h1")
                        .props({
                        position: "fixed",
                        top: public_3.Css.dimensions.safeareaTop + 36,
                        left: public_3.Css.dimensions.safeareaLeft
                    }),
                    public_3.selector("& .h4_1")
                        .extend(public_3.Css.fonts2.a_fo_h4_mixin),
                    public_3.selector("& .h4_2")
                        .props({
                        color: public_3.Css.colors.A_CO_6,
                    })
                        .extend(public_3.Css.fonts2.a_fo_h4_mixin),
                    public_3.selector("& .h5_1")
                        .extend(public_3.Css.fonts2.a_fo_h2___mixin)
                ]
            }),
            public_2.logTag()
        ], MtvSkyOverviewPage);
        return MtvSkyOverviewPage;
    }(public_1.ReactBaseComponent));
    exports.MtvSkyOverviewPage = MtvSkyOverviewPage;
});
//# sourceMappingURL=sky_overview.page.js.map