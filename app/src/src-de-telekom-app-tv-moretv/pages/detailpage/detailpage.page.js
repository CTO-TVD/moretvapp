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
define(["require", "exports", "react", "bluebird", "src/src-de-telekom/public", "src/src-de-telekom-tv-moretv/public", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "../../component/detailpage/preview.component", "../../component/detailpage/description.component", "../../component/detailpage/offer.component", "../../component/detailpage/channelgrid.component", "../../component/detailpage/public", "../../translation/public", "../util/public", "../../public", "../../component/public", "src/src-de-telekom-app-tv-core-v2/public"], function (require, exports, React, bluebird, public_1, mtv, public_2, public_3, preview, description_component_1, offer_component_1, channelgrid_component_1, public_4, public_5, util, public_6, public_7, public_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvDetailPage = void 0;
    var MtvDetailPage = (function (_super) {
        __extends(MtvDetailPage, _super);
        function MtvDetailPage(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.scrollLeft = 0;
            _this.showTermsOfUse = function () {
                _this.setState(function (prevState) { var _a; return ({ showTermsOfUse: { id: ((_a = prevState.package) === null || _a === void 0 ? void 0 : _a.TermsOfUse) || "" } }); });
                return true;
            };
            _this.onPageloading = function (loading) {
                _this.setState({ pageloading: loading, enableAnimation: false });
            };
            _this.showErrorDialog = function (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("SHOW DIALOG for error code " + error, MtvDetailPage_1.TAG)); });
                public_7.MtvMessageOverlayComponent
                    .createDialogByError({ error: error })
                    .result(_this)
                    .then(function (result) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("MTVGenericErrorComponent dialog closed with result " + result.resultId + " ", MtvDetailPage_1.TAG)); });
                    _this.startIntent(undefined, { type: "exit" });
                })
                    .catch(function (error) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("showDialogClick: dialog aborted -> " + error + " ", MtvDetailPage_1.TAG)); });
                    _this.startIntent(undefined, { type: "exit" });
                });
            };
            _this.goToAllChannelPage = function (packageId, chGroupIndex) {
                var intent = new public_2.IntentMoreTV.ChannelGridPage({ packageId: packageId, channelGroupIndex: chGroupIndex });
                _this.startIntent(intent);
            };
            var intent = new public_2.IntentMoreTV.Detailpage(_this.location.intent.data);
            _this.pid = intent.data.id || "";
            _this.mtv_token = intent.data.token;
            return _this;
        }
        MtvDetailPage_1 = MtvDetailPage;
        MtvDetailPage.prototype.onPushstateLoad = function () {
            _super.prototype.onPushstateLoad.call(this);
            this.state = {
                scrollLeft: this.scrollLeft,
                enableAnimation: false,
                pageloading: false,
                isMHCustomer: false,
                isPurchaseBtnClicked: false
            };
        };
        MtvDetailPage.prototype.onPushstateSave = function (args) {
            this.scrollLeft = this.state.scrollLeft;
            _super.prototype.onPushstateSave.call(this, args);
        };
        MtvDetailPage.prototype.componentDidMount = function () {
            var _this = this;
            bluebird.all([
                mtv.ApplicationClient.getPackages(),
                mtv.ApplicationClient.getCatalogs(),
                mtv.ApplicationClient.isMagentaHausCustomer()
            ])
                .then(function (_a) {
                var packages = _a[0], cats = _a[1], isMHC = _a[2];
                _this.setState({ tvpackages: packages, catalogs: cats, isMHCustomer: isMHC });
                return mtv.ApplicationClient.getPackage(_this.pid);
            })
                .then(function (packet) {
                var _a;
                if (!packet)
                    throw new Error("package not found for packageId: " + _this.pid);
                var grouplist = packet.ChannelGroups.map(function (g) { return g.Title; }).filter(function (v) { return v; }).join(",<br/>");
                _this.setState({
                    package: packet,
                    title: packet.Title,
                    showSubtitle: public_1.Guard.isNumber(packet.ChannelCount) && packet.ChannelCount > 0,
                    previewData: __assign(__assign({}, _this.state.previewData), { image: packet.Image, title: grouplist ? public_2.Filter.message(_this, public_5.messagesMtv.PACKETVIEW_HEAD_INFOTEXT) : undefined, subtitle: grouplist
                            ? grouplist
                            : ((_a = packet.CustomValues) === null || _a === void 0 ? void 0 : _a.InfoText) })
                });
                return packet;
            })
                .then(function (packet) {
                return bluebird.all([
                    mtv.ApplicationClient.getCatalog(packet.ContentProvider),
                    _this.loadChannelsData(packet),
                    bluebird.resolve(packet)
                ]);
            })
                .then(function (_a) {
                var _b;
                var catalog = _a[0], gridData = _a[1], packet = _a[2];
                if (!catalog) {
                    throw new Error("catalog expected");
                }
                var ToUType = packet.TermsOfUse ? (((_b = packet.PriceInfo) === null || _b === void 0 ? void 0 : _b.Price) && packet.PriceInfo.Price.indexOf("*") >= 0 ? "s" : "n") : undefined;
                _this.setState(__assign({ catalog: catalog, selectedToUType: ToUType, gridData: gridData }, util.convertMtvThemepack(catalog)));
            })
                .catch(function (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("detailPage.getPackage() -> " + error.message, MtvDetailPage_1.TAG)); });
                public_1.ErrorManager.catch(error, MtvDetailPage_1, 0x01);
                _this.showErrorDialog(error);
            });
        };
        MtvDetailPage.prototype.loadChannelsData = function (pckg) {
            var _this = this;
            if (!pckg || !pckg.ChannelGroups) {
                return bluebird.resolve(undefined);
            }
            return mtv.ApplicationClient
                .getChannels()
                .then(function (allChannels) {
                var chLine = [];
                if (pckg.ChannelGroups.length === 1) {
                    var refChannels = pckg.ChannelGroups[0].Channels;
                    var r = {
                        rows: chLine,
                        isUnstructuredGrid: true,
                        isStructuredGrid: false,
                        cssGridType: "unstructured",
                        channels: public_6.ChannelGridBase.resolveChannels(refChannels, allChannels),
                        channelCount: pckg.ChannelCount || 0
                    };
                    return bluebird.resolve(r);
                }
                else if (pckg.ChannelGroups.length > 1) {
                    var cm = pckg.ChannelGroups.length;
                    for (var x = 0, y = 0; x < cm; x++) {
                        if (!pckg.ChannelGroups[x] || !pckg.ChannelGroups[x].Channels || pckg.ChannelGroups[x].Channels.length == 0) {
                            continue;
                        }
                        var chLineIds = pckg.ChannelGroups[x].Channels;
                        var allChannelsInGroup = public_6.ChannelGridBase.resolveChannels(chLineIds, allChannels);
                        chLine[y] = {
                            index: y,
                            items: allChannelsInGroup,
                            title: pckg.ChannelGroups[x].Title,
                            totalCount: chLineIds.length
                        };
                        y++;
                    }
                    var r = {
                        rows: chLine,
                        isUnstructuredGrid: false,
                        isStructuredGrid: true,
                        cssGridType: "structured",
                        channels: [],
                        channelCount: 0
                    };
                    return bluebird.resolve(r);
                }
                return bluebird.resolve(undefined);
            })
                .catch(function (error) {
                public_1.ErrorManager.catch(error, channelgrid_component_1.MtvDetailChannelgridComponent, 0x01);
                if (error instanceof mtv.MtvError) {
                    _this.showErrorDialog(error);
                }
                else {
                    _this.showErrorDialog();
                }
                return bluebird.resolve(undefined);
            });
        };
        MtvDetailPage.prototype.moduleFocused = function (index) {
            if (index === 2) {
                this.setState({ scrollLeft: public_3.Css.scale(MtvDetailPage_1.MODULE_LEFT[2]) });
            }
            else if (index === 0) {
                this.setState({ scrollLeft: public_3.Css.scale(MtvDetailPage_1.MODULE_LEFT[0]) });
            }
        };
        MtvDetailPage.prototype.onUndimming = function () {
            this.setState({ dimmed: false });
        };
        MtvDetailPage.prototype.onDimming = function () {
            this.setState({ dimmed: true });
        };
        MtvDetailPage.prototype.gotoPurchase = function () {
            var _this = this;
            var _a;
            if (this.state.isPurchaseBtnClicked)
                return;
            this.setState({ isPurchaseBtnClicked: true });
            this.onPageloading(true);
            switch ((_a = this.state.package) === null || _a === void 0 ? void 0 : _a.ContentProvider) {
                case "DT":
                    if (this.state.isMHCustomer) {
                        this.startMagentaHausApp(this.state.package);
                    }
                    else {
                        var iDt = new public_2.IntentMoreTV.PurchaseDT({ id: this.state.package.ID, token: this.mtv_token });
                        this.startIntent(iDt);
                    }
                    break;
                case "Sky":
                    if (this.state.isMHCustomer) {
                        this.showErrorDialog(new mtv.MtvError("ERROR", mtv.MTVErrorCode.ERROR_BOOKING_CONDITION_NOSKY));
                    }
                    else {
                        this.startIntent(new public_2.IntentMoreTV.PurchaseSky({ id: this.state.package.ID }), { exitMarker: true });
                    }
                    break;
                default:
                    public_1.Logger.debug(function (log) { var _a; return log(public_1.LogMsg("unknown content provider -> " + ((_a = _this.state.package) === null || _a === void 0 ? void 0 : _a.ContentProvider), MtvDetailPage_1.TAG)); });
                    this.onPageloading(false);
                    this.setState({ isPurchaseBtnClicked: false });
                    break;
            }
        };
        MtvDetailPage.prototype.startMagentaHausApp = function (mtvpackage) {
            var _this = this;
            var _a, _b, _c;
            if (((_a = mtvpackage === null || mtvpackage === void 0 ? void 0 : mtvpackage.CustomValues) === null || _a === void 0 ? void 0 : _a.MhProductOfferingId) != undefined) {
                var MagentaHausAppId_1 = (_b = public_1.Configuration.instance.moretv) === null || _b === void 0 ? void 0 : _b.MagentaHausAppId;
                var additionalUrlParameters_1 = [["scenario", "detail"], ["productOfferingId", (_c = mtvpackage === null || mtvpackage === void 0 ? void 0 : mtvpackage.CustomValues) === null || _c === void 0 ? void 0 : _c.MhProductOfferingId]];
                if (MagentaHausAppId_1 != undefined) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Starting App: cmsId: '" + MagentaHausAppId_1 + "' parameters: " + public_1.StringTools.dataStringify(additionalUrlParameters_1) + " ", MtvDetailPage_1.TAG)); });
                    public_8.AppLauncherService.getInstance().startApplicationByCmsId(MagentaHausAppId_1, undefined, undefined, additionalUrlParameters_1)
                        .catch(function (error) {
                        public_2.TVNotificationService.getInstance().notifyError(public_8.messagesCore.STB_TM011_ERROR);
                        public_1.Logger.error(function (log) { return log(public_1.LogMsg("Error starting APP: " + error.message, MtvDetailPage_1.TAG)); });
                        _this.onPageloading(false);
                        _this.setState({ isPurchaseBtnClicked: false });
                    });
                }
                else {
                    public_2.TVNotificationService.getInstance().notifyError(public_8.messagesCore.STB_TM011_ERROR);
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("Missing configuration: MagentaHausAppId", MtvDetailPage_1.TAG)); });
                    this.onPageloading(false);
                    this.setState({ isPurchaseBtnClicked: false });
                }
            }
            else {
                public_2.TVNotificationService.getInstance().notifyError(public_8.messagesCore.STB_TM011_ERROR);
                public_1.Logger.error(function (log) { return log(public_1.LogMsg("Missing package data for MagentaHaus booking: packageId: " + (mtvpackage === null || mtvpackage === void 0 ? void 0 : mtvpackage.ID) + " packageTitle: " + (mtvpackage === null || mtvpackage === void 0 ? void 0 : mtvpackage.Title), MtvDetailPage_1.TAG)); });
                this.onPageloading(false);
                this.setState({ isPurchaseBtnClicked: false });
            }
        };
        MtvDetailPage.prototype.render = function () {
            var _this = this;
            var style = public_3.declaration().props({ transform: "translate(" + -1 * this.state.scrollLeft + "px, 0px)" });
            return React.createElement("div", { className: [this.ID, public_3.Css.globalStyleClasses.defaultBackgroundImage, "page", public_2.TvThemepackKeys.CSSROOT].join(" ") },
                (this.state.package && this.state.catalog) &&
                    React.createElement(public_2.NavigationContainer, { id: "mtvDetailPage#" + this.state.catalog.ContentProvider + "#" + this.state.package.ID, strictHorizontal: true, strictVertical: false, onFocusInTree: function () {
                            _this.setState({ enableAnimation: true });
                        } },
                        React.createElement(public_2.NavigationKey, { keyFilter: "INFO_KEY", onKey: this.showTermsOfUse }),
                        React.createElement(public_7.MtvTermsOfUseDialogWrapper, { idObject: this.state.showTermsOfUse, onError: this.showErrorDialog }),
                        this.state.background && React.createElement(public_2.TvBackgroundSustainer, __assign({}, this.state.background)),
                        this.state.themepack && React.createElement(public_2.TvThemepack, { data: this.state.themepack }),
                        this.state.package.Title && React.createElement("div", { id: "title", className: public_3.Css.fonts2.a_fo_h6_2 + " singleline-ellipsis" }, this.state.package.Title),
                        this.state.showSubtitle && React.createElement("div", { id: "subtitle", style: { color: public_3.Css.colors.A_CO_6 }, className: public_3.Css.fonts2.a_fo_h2_3 + " singleline-ellipsis" },
                            this.state.package.ChannelCount,
                            " ",
                            this.state.package.Subtitle),
                        React.createElement("div", { id: "modules" },
                            React.createElement("div", { id: "scrollarea", className: public_3.Css.transitions.transitionExchangeContentIn, style: style.toStyle() },
                                this.state.previewData &&
                                    React.createElement(public_4.MtvDetailpageComponent.DetailPreview, { className: "mtv-detail-preview", data: this.state.previewData }),
                                (this.state.package.Description || this.state.package.Description !== null) &&
                                    React.createElement(public_2.NavigationContainer, { id: "description", className: "mtv-detail-description", overrides: { right: "offer", up: "description", down: "description" }, autofocus: false, onFocusIn: function () {
                                            _this.moduleFocused(0);
                                        } },
                                        React.createElement(public_4.MtvDetailpageComponent.DetailDescription, { data: this.state.package })),
                                React.createElement(public_2.NavigationContainer, { id: "offer", autofocus: true, className: "mtv-detail-offer", overrides: { right: "grid", left: "description", down: "offer" }, onFocusIn: function () {
                                        _this.moduleFocused(1);
                                    } },
                                    React.createElement(public_4.MtvDetailpageComponent.DetailOffer, { data: this.state.package, catalog: this.state.catalog, selectedToUType: this.state.selectedToUType, showinfo: function () { return _this.showTermsOfUse(); }, gotoPurchase: function () { return _this.gotoPurchase(); } })),
                                this.state.gridData && React.createElement(public_2.NavigationContainer, { id: "grid", className: "mtv-detail-channelgrid", onFocusIn: function () {
                                        _this.moduleFocused(2);
                                    } },
                                    React.createElement(public_4.MtvDetailpageComponent.DetailChannelgrid, { data: this.state.gridData, packageId: this.state.package.ID, packages: this.state.tvpackages || [], catalogs: this.state.catalogs || [], pageloading: function (e) { _this.onPageloading(e); }, goToAllChannelPage: function (e) {
                                            _this.goToAllChannelPage(e.packageId, e.channelGroupIndex);
                                        } }),
                                    " ")),
                            this.state.dimmed && React.createElement("div", { id: "dimout", className: public_3.Css.transitions.transitionExchangeContentIn }))),
                React.createElement(public_2.BusyIndicatorComponent, { isBusy: this.state.pageloading, delay: 0 }));
        };
        var MtvDetailPage_1;
        MtvDetailPage.classID = 0xC03;
        MtvDetailPage.MODULE_LEFT = [
            0,
            preview.MtvDetailPreviewComponent.COMPONENT_WIDTH,
            preview.MtvDetailPreviewComponent.COMPONENT_WIDTH + description_component_1.MtvDetailDescriptionComponent.COMPONENT_WIDTH,
            preview.MtvDetailPreviewComponent.COMPONENT_WIDTH + description_component_1.MtvDetailDescriptionComponent.COMPONENT_WIDTH + offer_component_1.MtvDetailOfferComponent.COMPONENT_WIDTH
        ];
        __decorate([
            public_2.reactPushState()
        ], MtvDetailPage.prototype, "scrollLeft", void 0);
        MtvDetailPage = MtvDetailPage_1 = __decorate([
            public_2.reactComponent({
                ID: "mtv-detailpage-component",
                styles: [
                    public_3.selector("& #title")
                        .props({
                        position: "absolute",
                        top: public_3.Css.dimensions.safeareaTop + 40,
                        left: public_3.Css.dimensions.safeareaLeft,
                        width: 1104
                    }),
                    public_3.selector("& #subtitle")
                        .props({
                        position: "absolute",
                        top: public_3.Css.dimensions.safeareaTop + 92,
                        left: public_3.Css.dimensions.safeareaLeft,
                        width: 1104
                    }),
                    public_3.selector("& #scrollarea")
                        .props({
                        position: "absolute",
                        top: 0,
                        left: 0
                    }),
                    public_3.selector("& #modules")
                        .props({
                        position: "absolute",
                        top: 256,
                        left: public_3.Css.dimensions.safeareaLeft,
                        height: 0,
                        width: 0
                    })
                        .sub(public_3.selector(".mtv-detail-preview")
                        .props({
                        position: "absolute",
                        left: 0,
                        width: preview.MtvDetailPreviewComponent.COMPONENT_WIDTH,
                        height: 744
                    }))
                        .sub(public_3.selector(".mtv-detail-description")
                        .props({
                        position: "absolute",
                        top: 39,
                        left: MtvDetailPage_1.MODULE_LEFT[1],
                        height: 732,
                        width: 664
                    }))
                        .sub(public_3.selector(".mtv-detail-offer")
                        .props({
                        position: "absolute",
                        left: MtvDetailPage_1.MODULE_LEFT[2],
                        width: offer_component_1.MtvDetailOfferComponent.COMPONENT_WIDTH,
                        height: 744,
                        paddingRight: 66,
                        paddingTop: 43
                    }))
                        .sub(public_3.selector(".mtv-detail-channelgrid")
                        .props({
                        position: "absolute",
                        width: channelgrid_component_1.MtvDetailChannelgridComponent.COMPONENT_WIDTH,
                        height: 744,
                        left: MtvDetailPage_1.MODULE_LEFT[3]
                    }))
                        .sub(public_3.selector("& #dimout")
                        .props({
                        opacity: 1,
                        backgroundColor: public_3.Css.colors.global_background_systemfeedback_transparent,
                        position: "absolute",
                        width: public_3.Css.dimensions.screenWidth,
                        height: public_3.Css.dimensions.screenHeight,
                        top: 0,
                        left: 0
                    }))
                ]
            }),
            public_1.logTag()
        ], MtvDetailPage);
        return MtvDetailPage;
    }(public_2.ReactBaseComponent));
    exports.MtvDetailPage = MtvDetailPage;
});
//# sourceMappingURL=detailpage.page.js.map