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
define(["require", "exports", "react", "bluebird", "src/src-de-telekom-react/public", "./interfaces", "../../component/content_tiles/public", "src/src-de-telekom-style/public", "src/src-de-telekom-tv-moretv/public", "src/src-de-telekom/public", "../../component/public", "../util/public"], function (require, exports, React, bluebird, public_1, interfaces_1, public_2, public_3, mtv, public_4, public_5, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvDtOverviewPage = void 0;
    var MtvDtOverviewPage = (function (_super) {
        __extends(MtvDtOverviewPage, _super);
        function MtvDtOverviewPage(props, context) {
            var _this = _super.call(this, props, context) || this;
            var intent = new public_1.IntentMoreTV.OverviewDT(_this.location.intent.data);
            _this.mtv_token = intent.data.token;
            _this.state = { title: undefined, topPosition: 0 };
            return _this;
        }
        MtvDtOverviewPage_1 = MtvDtOverviewPage;
        MtvDtOverviewPage.prototype.componentDidMount = function () {
            this.loadData();
        };
        MtvDtOverviewPage.prototype.loadData = function () {
            var _this = this;
            var waitingTeaser;
            mtv.ApplicationClient
                .getCatalog(mtv.ApplicationClient.PROVIDER_DT)
                .then(function (cat) {
                if (!cat) {
                    throw new public_4.IllegalArgumentError("provider for catalog DT expected");
                }
                _this.setState(__assign({ title: cat.Title }, util.convertMtvThemepack(cat)));
                if (cat.CustomImages !== undefined && cat.CustomImages.BannerImage !== "") {
                    waitingTeaser = {
                        image: cat.CustomImages.BannerImage,
                        title: cat.CustomValues.BannerTitle,
                        subtitle: cat.CustomValues.BannerSubtitle,
                        price: undefined,
                        period: undefined,
                        packageRef: cat.PrimePackage
                    };
                }
                else {
                    waitingTeaser = undefined;
                }
                return cat;
            })
                .then(function (cat) {
                return mtv.ApplicationClient
                    .getGroupAndPacketsByCatalog(cat);
            })
                .then(function (groups) {
                if (groups && groups.length > 0) {
                    var ps = groups[0];
                    var sourcelist = ps.Packages.map(function (p, i) {
                        var subtitle = p.PriceInfo ? p.PriceInfo.Period + " " + p.PriceInfo.Price : "";
                        var result = {
                            title: p.Title,
                            image: p.Image,
                            subtitle: subtitle,
                            meta: public_4.Guard.isNumber(p.ChannelCount) && p.ChannelCount > 0 ? "(" + p.ChannelCount + ")" : "",
                            detailRef: p.ID
                        };
                        return result;
                    });
                    _this.setState({ bigTeaser: waitingTeaser, data: sourcelist });
                }
                return;
            })
                .then(function () {
                if (waitingTeaser === null || waitingTeaser === void 0 ? void 0 : waitingTeaser.packageRef) {
                    return mtv.ApplicationClient
                        .getPackage(waitingTeaser.packageRef);
                }
                else {
                    return bluebird.resolve(undefined);
                }
            })
                .then(function (p) {
                if (!p) {
                    return;
                }
                if (p.PriceInfo) {
                    _this.setState({
                        bigTeaser: __assign(__assign({}, _this.state.bigTeaser), { period: p.PriceInfo.Period, price: p.PriceInfo.Price })
                    });
                }
                _this.setState({
                    bigTeaser: __assign(__assign({}, _this.state.bigTeaser), { packageRef: p.ID })
                });
            }).catch(function (error) {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("ERROR: Show DT Catalog: " + error.message, MtvDtOverviewPage_1.TAG)); });
                public_4.ErrorManager.catch(error, MtvDtOverviewPage_1, 0x01);
                _this.showErrorDialog(error);
            });
        };
        MtvDtOverviewPage.prototype.teaserClick = function () {
            if (!this.state.bigTeaser || this.state.bigTeaser.packageRef == "") {
                return;
            }
            var intent = new public_1.IntentMoreTV.Detailpage({ id: this.state.bigTeaser.packageRef, token: this.mtv_token });
            this.startIntent(intent);
        };
        MtvDtOverviewPage.prototype.showErrorDialog = function (error) {
            var _this = this;
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("SHOW DIALOG for error code " + error, MtvDtOverviewPage_1.TAG)); });
            this.genericDialog = public_5.MtvMessageOverlayComponent.createDialogByError({ error: error });
            this.genericDialog
                .result(this)
                .then(function (result) {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("MTVGenericErrorComponent dialog closed with result " + result.resultId + " ", MtvDtOverviewPage_1.TAG)); });
                _this.startIntent(undefined, { type: "exit" });
            })
                .catch(function (error) {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("showDialogClick: dialog aborted -> " + error + " ", MtvDtOverviewPage_1.TAG)); });
                _this.startIntent(undefined, { type: "exit" });
            });
        };
        MtvDtOverviewPage.prototype.render = function () {
            var _this = this;
            var style = public_3.declaration().props({ transform: "translate(0px, " + -1 * public_3.Css.scale(this.state.topPosition) + "px)" });
            return React.createElement("div", { className: [this.ID, public_3.Css.globalStyleClasses.defaultBackgroundImage, "page"].join(" ") },
                this.state.background && React.createElement(public_1.TvBackgroundSustainer, __assign({}, this.state.background)),
                this.state.title && React.createElement("h1", { style: { textTransform: "uppercase" }, className: public_3.Css.fonts2.a_fo_b1_1 + " singleline-ellipsis" }, this.state.title),
                (this.state.bigTeaser || this.state.data) && React.createElement("div", { id: "catalog" },
                    React.createElement(public_1.NavigationContainer, { id: "mtvCatalog#DT", strictHorizontal: true, strictVertical: false },
                        React.createElement("div", { className: "animContainer " + public_3.Css.transitions.transformShort, style: style.toStyle() },
                            this.state.bigTeaser && React.createElement(public_1.NavigationContainer, { id: "teaser", className: "dttv-bigTeaser-item-frame-wide", overrides: { down: "grid" }, autofocus: true },
                                React.createElement(public_1.NavigationElement, { id: "bigTeaser", onFocusIn: function () {
                                        _this.setState({ topPosition: 0 });
                                    }, onClick: function () {
                                        _this.teaserClick();
                                    } },
                                    React.createElement("div", { className: "dttv-bigTeaser-image dttv-focus-frame" },
                                        this.state.bigTeaser.image && React.createElement("img", { className: "dttv-bigTeaser-image-href-wide", src: public_4.ImageScale.rescale(this.state.bigTeaser.image, { ar: "ignore", x: public_3.Css.dimensions.safeareaWidth, y: public_3.Css.scale(interfaces_1.MtvOverviewPageBase.TEASERHEIGHT) }) }),
                                        this.state.bigTeaser.period && React.createElement("div", { className: "price singleline-ellipsis" },
                                            React.createElement("span", { className: public_3.Css.fonts2.a_fo_b2_2 }, this.state.bigTeaser.period),
                                            " ",
                                            React.createElement("span", { className: public_3.Css.fonts2.a_fo_h2__ }, this.state.bigTeaser.price)),
                                        this.state.bigTeaser.title && React.createElement("div", { className: "title" },
                                            React.createElement("p", { className: "title2 h5_1 twolines-ellipsis" }, this.state.bigTeaser.title)),
                                        this.state.bigTeaser.subtitle && React.createElement("div", { className: "subtitle " + public_3.Css.fonts2.a_fo_b2_2 + " twolines-ellipsis" }, this.state.bigTeaser.subtitle)))),
                            this.state.data && React.createElement(public_1.NavigationContainer, { id: "grid", className: "grid_container" }, this.state.data.map(function (element, x) {
                                var px = (public_2.ContentMtvTiles.Tile16x9.WIDTH + 12) * (x % 4);
                                var py = (public_2.ContentMtvTiles.Tile16x9.HEIGHT) * (Math.floor(x / 4));
                                return React.createElement(public_1.NavigationElement, { id: x.toString(), key: x.toString(), className: "tile16x9", style: public_3.declaration().props({ top: py, left: px }).toStyle(), onFocusIn: function () {
                                        _this.setState({ topPosition: py + interfaces_1.MtvOverviewPageBase.TEASERHEIGHT + interfaces_1.MtvOverviewPageBase.TEASERMARGIN + (2 * public_3.Css.dimensions.borderWidth) });
                                    }, onClick: function () {
                                        var intent = new public_1.IntentMoreTV.Detailpage({ id: element.detailRef, token: _this.mtv_token });
                                        _this.startIntent(intent);
                                    } },
                                    React.createElement(public_2.ContentMtvTiles.Tile16x9, { data: { title: element.title, image: element.image, subtitle: element.subtitle, meta: element.meta } }));
                            }))))));
        };
        var MtvDtOverviewPage_1;
        MtvDtOverviewPage.classID = 0xC02;
        MtvDtOverviewPage = MtvDtOverviewPage_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-dtcatalog-component",
                styles: [
                    public_3.selector("&")
                        .sub(public_3.selector("h1")
                        .props({
                        position: "fixed",
                        top: public_3.Css.dimensions.safeareaTop + 36,
                        left: public_3.Css.dimensions.safeareaLeft,
                        width: public_3.Css.dimensions.safeareaWidth
                    }))
                        .sub(public_3.selector("#catalog")
                        .props({
                        position: "absolute",
                        top: public_3.Css.dimensions.safeareaTop + 138,
                        left: public_3.Css.dimensions.safeareaLeft - public_3.Css.dimensions.borderWidth,
                        width: public_3.Css.dimensions.safeareaWidth + 2 * public_3.Css.dimensions.borderWidth,
                        height: public_3.Css.dimensions.screenHeight,
                        overflow: "hidden"
                    })
                        .sub(public_3.selector(".animContainer")
                        .props({
                        position: "absolute"
                    })
                        .sub(public_3.selector(".dttv-bigTeaser-item-frame-wide")
                        .props({
                        padding: public_3.Css.dimensions.borderWidth,
                        position: "absolute",
                        width: public_3.Css.dimensions.safeareaWidth + 2 * public_3.Css.dimensions.borderWidth,
                        height: interfaces_1.MtvOverviewPageBase.TEASERHEIGHT + 2 * public_3.Css.dimensions.borderWidth
                    }))
                        .sub(public_3.selector(".dttv-bigTeaser-image")
                        .props({
                        position: "absolute",
                        height: interfaces_1.MtvOverviewPageBase.TEASERHEIGHT,
                        width: public_3.Css.dimensions.safeareaWidth
                    }))
                        .sub(public_3.selector(".dttv-bigTeaser-image-href-wide")
                        .props({
                        position: "absolute",
                        top: 0,
                        width: public_3.Css.dimensions.safeareaWidth,
                        height: interfaces_1.MtvOverviewPageBase.TEASERHEIGHT
                    }))
                        .sub(public_3.selector(".title")
                        .props({
                        position: "absolute",
                        top: 265,
                        left: 36,
                        width: 804,
                        height: 120,
                        display: "flex",
                        color: public_3.Css.colors.A_CO_1
                    }))
                        .sub(public_3.selector(".title .title2")
                        .props({
                        verticalAlign: "bottom",
                        marginTop: "auto"
                    }))
                        .sub(public_3.selector(".price")
                        .props({
                        position: "absolute",
                        top: 204,
                        left: 36,
                        width: 804,
                        color: public_3.Css.colors.A_CO_1
                    }))
                        .sub(public_3.selector(".subtitle")
                        .props({
                        position: "absolute",
                        top: 384,
                        left: 36,
                        height: 64,
                        width: 804,
                        color: public_3.Css.colors.A_CO_1
                    }))
                        .sub(public_3.selector(".grid_container")
                        .props({
                        position: "absolute",
                        top: 591
                    }))
                        .sub(public_3.selector("& .tile16x9")
                        .props({
                        width: public_2.ContentMtvTiles.Tile16x9.WIDTH,
                        height: public_2.ContentMtvTiles.Tile16x9.HEIGHT,
                        overflow: "hidden",
                        display: "inline-block",
                        position: "absolute"
                    }))
                        .sub(public_3.selector("h5_1")
                        .extend(public_3.Css.fonts2.a_fo_h2___mixin))))
                ]
            }),
            public_4.logTag()
        ], MtvDtOverviewPage);
        return MtvDtOverviewPage;
    }(public_1.ReactBaseComponent));
    exports.MtvDtOverviewPage = MtvDtOverviewPage;
});
//# sourceMappingURL=dt_overview.page.js.map