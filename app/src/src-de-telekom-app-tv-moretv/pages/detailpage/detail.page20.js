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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define(["require", "exports", "react", "underscore", "src/src-de-telekom-tv-moretv/public", "../menu/util/public", "../util/public", "bluebird", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "src/src-de-telekom-app-tv-core-v2/public", "../../component/animation/animation", "./actions.component20", "./data.mapper", "../../translation/public", "../../component/public", "../../component/detailpage/channelgrid.component", "../../public"], function (require, exports, React, _, mtv, util, mtvUtil, bluebird, public_1, public_2, public_3, public_4, animation_1, actions_component20_1, data_mapper_1, public_5, public_6, channelgrid_component_1, public_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvDetailPage20 = void 0;
    var Module;
    (function (Module) {
        Module[Module["Preview"] = 0] = "Preview";
        Module[Module["Actions"] = 1] = "Actions";
        Module[Module["ChannelStage"] = 2] = "ChannelStage";
        Module[Module["ChannelList"] = 3] = "ChannelList";
        Module[Module["CombiChannelGrid"] = 4] = "CombiChannelGrid";
        Module[Module["CombiChannelList"] = 5] = "CombiChannelList";
        Module[Module["Info"] = 6] = "Info";
        Module[Module["MetaDetails"] = 7] = "MetaDetails";
    })(Module || (Module = {}));
    var MtvDetailPage20 = (function (_super) {
        __extends(MtvDetailPage20, _super);
        function MtvDetailPage20(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.navigationId = MtvDetailPage20_1.defaultNavigationID;
            _this.isReEntry = false;
            _this.channelListConfiguration = {
                itemCount: 5,
                itemSize: public_1.ContentTiles.Vod.WIDTH + 24,
                centralIndex: 0,
                fixedFocus: true,
                focusLayer: public_1.FocusLayer.Foreground,
                orientation: public_1.ListOrientation.Horizontal,
                boundaryCount: 2,
                disableDefaultClipping: true
            };
            _this.moduleFocussed = 0;
            _this.selectedChannel = 0;
            _this.gridScrollPosition = 0;
            _this.isLastRow = false;
            _this.auth = {};
            _this.scrollLeft = 0;
            _this.showErrorDialog = function (error) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("SHOW DIALOG for error code " + error, MtvDetailPage20_1.TAG)); });
                public_6.MtvMessageOverlayComponent
                    .createDialogByError({ error: error })
                    .result(_this)
                    .then(function (result) {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("MTVGenericErrorComponent dialog closed with result " + result.resultId + " ", MtvDetailPage20_1.TAG)); });
                    _this.startIntent(undefined, { type: "exit" });
                })
                    .catch(function (error) {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("showDialogClick: dialog aborted -> " + error + " ", MtvDetailPage20_1.TAG)); });
                    _this.startIntent(undefined, { type: "exit" });
                });
            };
            _this.onPageloading = function (loading) {
                _this.setState({ pageloading: loading, enableAnimation: false });
            };
            _this.showTermsOfUse = function () {
                _this.setState(function (prevState) { var _a; return ({ showTermsOfUse: { id: ((_a = prevState.package) === null || _a === void 0 ? void 0 : _a.TermsOfUse) || "hola" } }); });
                return true;
            };
            _this.channelRenderer = function (style) {
                return React.createElement("div", { className: "contenttile focus_container focus dttv-focused", style: style },
                    React.createElement("div", { className: "focusFrame dttv-focus-frame " }));
            };
            _this.channelItemRenderer = function (viewItem, navigationId) {
                var _a;
                return React.createElement(public_1.ContentTiles.OFA, { id: navigationId, onClick: (_a = viewItem.data) === null || _a === void 0 ? void 0 : _a.onClick, onFocusIn: function () { _this.setState({ selectedChannel: viewItem.data }); }, data: viewItem.data, badgeStyle: "white", disableFocusFrame: true });
            };
            var intent = new public_1.IntentMoreTV.Detailpage(_this.location.intent.data);
            _this.pid = intent.data.id || "";
            return _this;
        }
        MtvDetailPage20_1 = MtvDetailPage20;
        MtvDetailPage20.prototype.onPushstateLoad = function () {
            _super.prototype.onPushstateLoad.call(this);
            var intent = new public_1.IntentVod.DetailPage(this.location.intent.data);
            this.state = {
                scrollLeft: this.scrollLeft,
                enableAnimation: false,
                isMHCustomer: false,
                isPurchaseBtnClicked: false,
                moduleFocussed: this.moduleFocussed,
                meta: {},
                pageloading: true,
                vmod: [],
                modules: MtvDetailPage20_1.prepareLayout(),
                breadcrumb: intent.data.breadcrumb,
                whitelabel: {
                    backgroundImage: this.backgroundImage || intent.data.backgroundImageUrl,
                    partnerLogo: this.partnerLogo || intent.data.partnerLogoUrl
                },
                asInfoPage: intent.data.asInfoPage,
                link: intent.data.link || "",
                isOafContent: false,
                channelselection: { index: this.selectedChannel },
                gridScrollPosition: this.gridScrollPosition,
                isLastItemFocussed: this.isLastRow,
            };
        };
        MtvDetailPage20.prototype.onPushstateSave = function (args) {
            this.moduleFocussed = this.state.moduleFocussed;
            _super.prototype.onPushstateSave.call(this, args);
        };
        MtvDetailPage20.prototype.componentWillUnmount = function () {
            clearTimeout(this.recoStageTimerId);
            clearTimeout(this.subassetStageTimerId);
            clearTimeout(this.subassetPagingTimerId);
        };
        MtvDetailPage20.prototype.componentDidMount = function () {
            this.load();
        };
        MtvDetailPage20.prototype.load = function (resetSuggestions) {
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
                if (!packet)
                    throw new Error("package not found for packageId: " + _this.pid);
                util.MtvPackageStageUtil.loadAssetPreviewData({ pk: packet })
                    .then(function (preview) {
                    var partialState = _this.createMiniPreviewData(packet, preview);
                    _this.setState(partialState);
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
                _this.setState(__assign({ catalog: catalog, package: packet, selectedToUType: ToUType, gridData: gridData }, mtvUtil.convertMtvThemepack(catalog)));
                _this.navigationId = packet.ID || "";
                var metaState = MtvDetailPage20_1.getFirstData({
                    context: _this, pk: packet,
                    auth: _this.auth, component: _this,
                    gridData: _this.state.gridData,
                    packages: _this.state.tvpackages,
                    catalogs: _this.state.catalogs
                });
                _this.setState(function (prevState) {
                    return __assign(__assign({}, metaState), MtvDetailPage20_1.setLayout(__assign(__assign({}, prevState), metaState)));
                });
                _this.setState({ pageloading: false });
            })
                .catch(function (error) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("detailPage.getPackage() -> " + error.message, MtvDetailPage20_1.TAG)); });
                public_3.ErrorManager.catch(error, MtvDetailPage20_1, 0x01);
                _this.showErrorDialog(error);
            });
        };
        MtvDetailPage20.prototype.createMiniPreviewData = function (pk, preview) {
            var _a, _b, _c;
            var maxdescriptionLength = 100;
            var grouplist = pk.ChannelGroups.map(function (g) { return g.Title; }).filter(function (v) { return v; }).join(", ");
            var subtitleLabel = grouplist ? public_1.Filter.message(this, public_5.messagesMtv.PACKETVIEW_HEAD_INFOTEXT).concat(":") : undefined;
            var subtitleText = grouplist ? grouplist : ((_a = pk.CustomValues) === null || _a === void 0 ? void 0 : _a.InfoText);
            var showTripleDotButton = false;
            var shortDescription = [subtitleLabel, subtitleText].join(" ");
            if (shortDescription && shortDescription.length > maxdescriptionLength) {
                var lastWordEndsAt = shortDescription.lastIndexOf(" ", maxdescriptionLength);
                shortDescription = shortDescription.substr(0, lastWordEndsAt);
                showTripleDotButton = true;
            }
            return {
                descriptionShort: shortDescription,
                showTripleDotButton: showTripleDotButton,
                metaline: (_b = preview === null || preview === void 0 ? void 0 : preview.metaline) === null || _b === void 0 ? void 0 : _b.call(preview),
                metalineShort: (_c = preview === null || preview === void 0 ? void 0 : preview.metalineShort) === null || _c === void 0 ? void 0 : _c.call(preview)
            };
        };
        MtvDetailPage20.prototype.loadChannelsData = function (pckg) {
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
                        channels: public_7.ChannelGridBase.resolveChannels(refChannels, allChannels),
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
                        var allChannelsInGroup = public_7.ChannelGridBase.resolveChannels(chLineIds, allChannels);
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
                public_3.ErrorManager.catch(error, channelgrid_component_1.MtvDetailChannelgridComponent, 0x01);
                if (error instanceof mtv.MtvError) {
                    _this.showErrorDialog(error);
                }
                else {
                    _this.showErrorDialog();
                }
                return bluebird.resolve(undefined);
            });
        };
        MtvDetailPage20.prototype.startMagentaHausApp = function (mtvpackage) {
            var _this = this;
            var _a, _b, _c;
            if (((_a = mtvpackage === null || mtvpackage === void 0 ? void 0 : mtvpackage.CustomValues) === null || _a === void 0 ? void 0 : _a.MhProductOfferingId) != undefined) {
                var MagentaHausAppId_1 = (_b = public_3.Configuration.instance.moretv) === null || _b === void 0 ? void 0 : _b.MagentaHausAppId;
                var additionalUrlParameters_1 = [["scenario", "detail"], ["productOfferingId", (_c = mtvpackage === null || mtvpackage === void 0 ? void 0 : mtvpackage.CustomValues) === null || _c === void 0 ? void 0 : _c.MhProductOfferingId]];
                if (MagentaHausAppId_1 != undefined) {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Starting App: cmsId: '" + MagentaHausAppId_1 + "' parameters: " + public_3.StringTools.dataStringify(additionalUrlParameters_1) + " ", MtvDetailPage20_1.TAG)); });
                    public_4.AppLauncherService.getInstance().startApplicationByCmsId(MagentaHausAppId_1, undefined, undefined, additionalUrlParameters_1)
                        .catch(function (error) {
                        public_1.TVNotificationService.getInstance().notifyError(public_4.messagesCore.STB_TM011_ERROR);
                        public_3.Logger.error(function (log) { return log(public_3.LogMsg("Error starting APP: " + error.message, MtvDetailPage20_1.TAG)); });
                        _this.onPageloading(false);
                        _this.setState({ isPurchaseBtnClicked: false });
                    });
                }
                else {
                    public_1.TVNotificationService.getInstance().notifyError(public_4.messagesCore.STB_TM011_ERROR);
                    public_3.Logger.error(function (log) { return log(public_3.LogMsg("Missing configuration: MagentaHausAppId", MtvDetailPage20_1.TAG)); });
                    this.onPageloading(false);
                    this.setState({ isPurchaseBtnClicked: false });
                }
            }
            else {
                public_1.TVNotificationService.getInstance().notifyError(public_4.messagesCore.STB_TM011_ERROR);
                public_3.Logger.error(function (log) { return log(public_3.LogMsg("Missing package data for MagentaHaus booking: packageId: " + (mtvpackage === null || mtvpackage === void 0 ? void 0 : mtvpackage.ID) + " packageTitle: " + (mtvpackage === null || mtvpackage === void 0 ? void 0 : mtvpackage.Title), MtvDetailPage20_1.TAG)); });
                this.onPageloading(false);
                this.setState({ isPurchaseBtnClicked: false });
            }
        };
        MtvDetailPage20.prototype.gotoPurchase = function () {
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
                        var iDt = new public_1.IntentMoreTV.PurchaseDT({ id: this.state.package.ID });
                        this.startIntent(iDt);
                    }
                    break;
                case "Sky":
                    this.startIntent(new public_1.IntentMoreTV.PurchaseSky({ id: this.state.package.ID }), { exitMarker: true });
                    break;
                default:
                    public_3.Logger.debug(function (log) { var _a; return log(public_3.LogMsg("unknown content provider -> " + ((_a = _this.state.package) === null || _a === void 0 ? void 0 : _a.ContentProvider), MtvDetailPage20_1.TAG)); });
                    this.onPageloading(false);
                    this.setState({ isPurchaseBtnClicked: false });
                    break;
            }
        };
        MtvDetailPage20.prepareLayout = function () {
            var mods = [];
            mods[Module.Preview] = { height: 360, prefixStage: true };
            mods[Module.Actions] = { height: actions_component20_1.MtvDetailPageActions20.HEIGHT };
            mods[Module.ChannelStage] = { height: 349 - 26, prefixStage: true };
            mods[Module.ChannelList] = { height: 392 };
            mods[Module.CombiChannelList] = { height: 392 };
            mods[Module.CombiChannelGrid] = { height: 0 };
            mods[Module.Info] = { height: 498, marginBottom: 84, offset: 15 };
            mods[Module.MetaDetails] = { height: 540, marginBottom: 84, offset: 15 };
            return mods;
        };
        MtvDetailPage20.setLayout = function (prevState) {
            var _a, _b, _c, _d, _e, _f, _g;
            var modules = __spreadArrays(prevState.modules);
            var vmods = [];
            if (!((_a = prevState.gridData) === null || _a === void 0 ? void 0 : _a.channels) || prevState.gridData.channels.length == 0) {
                if (!((_b = prevState.gridData) === null || _b === void 0 ? void 0 : _b.rows) || prevState.gridData.rows.length == 0) {
                    modules[Module.ChannelStage].height = 0;
                }
                modules[Module.ChannelList].height = 0;
            }
            if (!((_c = prevState.gridData) === null || _c === void 0 ? void 0 : _c.rows) || prevState.gridData.rows.length == 0) {
                if (!((_d = prevState.gridData) === null || _d === void 0 ? void 0 : _d.channels) || prevState.gridData.channels.length == 0) {
                    modules[Module.ChannelStage].height = 0;
                }
                modules[Module.CombiChannelList].height = 0;
                modules[Module.CombiChannelGrid].height = 0;
            }
            else if ((_e = prevState.gridData) === null || _e === void 0 ? void 0 : _e.rows) {
                modules[Module.CombiChannelGrid].height = 392 * ((_g = (_f = prevState.gridData) === null || _f === void 0 ? void 0 : _f.rows) === null || _g === void 0 ? void 0 : _g.length);
            }
            if (!prevState.descriptionLong) {
                modules[Module.Info].height = 0;
            }
            var refModules = __spreadArrays(modules);
            var topPosition = 0;
            for (var i = 0; i < refModules.length; i++) {
                if (i == Module.CombiChannelGrid) {
                    vmods[i] = {
                        style: {
                            top: public_2.Css.scale(0),
                            height: public_2.Css.scale(modules[Module.CombiChannelGrid].height)
                        },
                        scrollPostion: public_2.Css.scale(0)
                    };
                    continue;
                }
                var referenceModule = refModules[i];
                if (!referenceModule || referenceModule.height === 0) {
                    continue;
                }
                if (referenceModule.prefixStage) {
                    topPosition -= referenceModule.height;
                }
                vmods[i] = {
                    style: {
                        top: public_2.Css.scale(topPosition),
                        height: public_2.Css.scale(referenceModule.height)
                    },
                    scrollPostion: public_2.Css.scale(topPosition - (referenceModule.offset ? referenceModule.offset : 0))
                };
                if (i !== Module.CombiChannelGrid) {
                    topPosition += referenceModule.height + (referenceModule.marginBottom != undefined ? referenceModule.marginBottom : 0);
                }
            }
            return { modules: modules, vmod: vmods };
        };
        MtvDetailPage20.prototype.setModuleSize = function (moduleId, height) {
            var _this = this;
            this.setState(function (prevState) {
                var oldState = __assign({}, prevState);
                oldState.modules = __spreadArrays(_this.state.modules);
                var unscaledHeight = public_2.Css.scaleBack(height);
                if (oldState.modules[moduleId].height != unscaledHeight) {
                    oldState.modules[moduleId].height = unscaledHeight;
                    return MtvDetailPage20_1.setLayout(oldState);
                }
                return null;
            });
        };
        MtvDetailPage20.getFirstData = function (_a) {
            var context = _a.context, pk = _a.pk, auth = _a.auth, gridData = _a.gridData, packages = _a.packages, catalogs = _a.catalogs;
            if (!pk) {
                throw new public_3.IllegalArgumentError("getFirstData insufficient data");
            }
            var wlBackgroundImage = "";
            var wlPartnerLogo = "";
            var wlPartnerOverlayImage = "";
            var wlPartnerOverlayID = "";
            var actionTemplate = __assign({ backgroundImageUrl: wlBackgroundImage, partnerLogoUrl: wlPartnerLogo, breadcrumb: undefined, partnerOverlayID: wlPartnerOverlayID, partnerOverlayImageUrl: wlPartnerOverlayImage }, auth);
            var meta = data_mapper_1.MtvDetailPageDataMapper.mapOffersMetadata(context, pk);
            return {
                logo: pk.Logo,
                meta: meta.meta,
                descriptionLong: pk.Description,
                metatable: data_mapper_1.MtvDetailPageDataMapper.mapInfoTable(context, pk),
                channels: data_mapper_1.MtvDetailPageDataMapper.mapChannels(context, gridData, packages, catalogs, pk.ID).map(function (it, x) { return ({ index: x, data: it }); }),
                rows: data_mapper_1.MtvDetailPageDataMapper.mapRows(context, gridData, packages, catalogs, pk.ID),
                actionTemplate: actionTemplate,
                backgroundImage: pk.Image,
                backgroundImageOrignal: pk.Image,
                isOafContent: false,
            };
        };
        MtvDetailPage20.prototype.getMoreTvMapping = function (timeout) {
            var _a;
            var timeoutvalue = timeout ? timeout : ((_a = public_3.Configuration.instance.vod) === null || _a === void 0 ? void 0 : _a.timeout_fast_response) || 3001;
            return this.getMtvPackMapping()
                .timeout(timeoutvalue)
                .catch(bluebird.TimeoutError, function (e) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Error: " + e + " : getMoreTvMapping: TIMEOUT", MtvDetailPage20_1.TAG)); });
                return { mappedPackages: [], packages: [] };
            })
                .catch(function (e) {
                public_3.Logger.warn(function (log) { return log(public_3.LogMsg("Error: " + e + ": getMoreTvMapping", MtvDetailPage20_1.TAG)); });
                return { mappedPackages: [], packages: [] };
            });
        };
        MtvDetailPage20.prototype.getMtvPackMapping = function () {
            var map = { mappedPackages: [], packages: [] };
            return mtv.ApplicationClient.getPackageMappingTable()
                .then(function (mappedPacks) {
                map.mappedPackages = mappedPacks;
                return mtv.ApplicationClient.getPackages();
            })
                .then(function (packs) {
                map.packages = packs;
                return map;
            })
                .catch(function (e) {
                public_3.Logger.warn(function (log) { return log(public_3.LogMsg("Error: " + e + ": getMtvPackMapping", MtvDetailPage20_1.TAG)); });
                return map;
            });
        };
        MtvDetailPage20.resolveSubscriptionMoreTvLink = function (partner, mtvMap, mtvPackages) {
            var _a;
            if (!_.isEmpty(partner.url) && !_.isEmpty(partner.appId)) {
                return { title: partner.title, packageId: undefined };
            }
            if (!partner.missingSelection) {
                return { title: partner.title, packageId: undefined };
            }
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Mapping missing selection: " + partner.missingSelection, MtvDetailPage20_1.TAG)); });
            var mappedPackage = _.find(mtvMap, function (p) {
                return p.channelId === partner.missingSelection;
            });
            if (mappedPackage === undefined) {
                return { title: partner.title, packageId: undefined };
            }
            else {
                var tvpackage_1 = _.findWhere(mtvPackages, { ID: mappedPackage.package });
                if (!tvpackage_1) {
                    return { title: partner.title, packageId: undefined };
                }
                else {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Mapping missing selection: " + partner.missingSelection + " to package: " + tvpackage_1.ID + " DG: " + mappedPackage.documentGroup, MtvDetailPage20_1.TAG)); });
                    return {
                        title: ((_a = tvpackage_1.CustomValues) === null || _a === void 0 ? void 0 : _a.ShortTitle) && !_.isEmpty(tvpackage_1.CustomValues.ShortTitle) ? tvpackage_1.CustomValues.ShortTitle : tvpackage_1.Title,
                        packageId: tvpackage_1.ID,
                        documentGroup: mappedPackage.documentGroup
                    };
                }
            }
        };
        MtvDetailPage20.prototype.onChangeMarked = function (marked) {
            this.setState(function (prevState) {
                if (!prevState.secondaryActions) {
                    return null;
                }
                return { secondaryActions: __assign(__assign({}, prevState.secondaryActions), { marked: marked }) };
            });
        };
        MtvDetailPage20.prototype.render = function () {
            var _this = this;
            var _a, _b, _c;
            var gridStyle = this.state.rows && this.state.rows.length > 0 ? public_2.declaration().props({ transform: "translate(0, " + -1 * this.state.gridScrollPosition + "px)" }) : public_2.declaration();
            var scrollPosition = this.state.vmod[this.state.moduleFocussed] ? this.state.vmod[this.state.moduleFocussed].scrollPostion : 0;
            var contentTranslation = this.state.vmod.length > 0 ? public_2.declaration().props({ transform: "translate(0, " + -1 * scrollPosition + "px)" }) : public_2.declaration();
            var backgroundImage = this.state.backgroundImage ? public_3.ImageScale.scale(this.state.backgroundImage, { x: public_2.Css.dimensions.SceneImageWidth, y: public_2.Css.dimensions.SceneImageHeight, ar: "ignore", out: "jpeg" }) : public_2.Css.images.inlineTransparentPixel;
            var logo = this.state.logo ? public_3.ImageScale.rescale(this.state.logo, { y: 48, ar: "keep" }) : undefined;
            var showLogo = this.state.logo && this.state.moduleFocussed <= 1;
            var showTitle = this.state.moduleFocussed > 1;
            var cListStyle = [];
            if (this.state.rows && this.state.vmod[Module.CombiChannelList]) {
                this.state.rows.map(function (row, ix) {
                    var compListStyle = { style: { top: 0, height: 0 }, scrollPostion: 0 };
                    var style = {
                        top: _this.state.vmod[Module.CombiChannelList].style.top + (_this.state.vmod[Module.CombiChannelList].style.height * ix),
                        height: _this.state.vmod[Module.CombiChannelList].style.height
                    };
                    compListStyle.style = style;
                    compListStyle.scrollPostion = _this.state.vmod[Module.CombiChannelList].style.height * ix;
                    cListStyle.push(compListStyle);
                });
            }
            return React.createElement("div", { className: [this.ID, public_1.TvThemepackKeys.CSSROOT, public_2.Css.globalStyleClasses.defaultBackgroundImage].join(" ") },
                React.createElement(public_1.TvBackgroundSustainer, { image: this.state.whitelabel.backgroundImage }),
                React.createElement(public_1.TvThemepack, { data: this.state.whitelabel.themepack }),
                React.createElement(public_1.Mask, { type: "miniPreview", className: "previewBgMask" },
                    React.createElement("img", { className: "previewBgImage", src: backgroundImage })),
                !this.state.pageloading &&
                    React.createElement(public_1.NavigationContainer, { id: "vod_detailpage_#" + this.navigationId, onReady: function (e) { _this.moduleNavigationContainer = e; }, onFocusInTree: function (e) { _this.trackPageImpression(); } },
                        React.createElement(public_1.NavigationKey, { keyFilter: "INFO_KEY", onKey: this.showTermsOfUse }),
                        React.createElement(public_6.MtvTermsOfUseDialogWrapper, { idObject: this.state.showTermsOfUse, onError: this.showErrorDialog }),
                        showLogo && React.createElement("img", { id: "topLogo", className: "logo", src: logo }),
                        !showLogo &&
                            React.createElement("div", { className: ["breadcrumb", public_2.Css.fonts2.a_fo_h3_2, "singleline-ellipsis"].join(" ") }, showTitle && (this.state.meta.title || "")),
                        React.createElement("div", { className: "clipper" },
                            React.createElement("div", { className: "modules", style: contentTranslation.toStyle() },
                                React.createElement("div", { id: "preview", className: ["module", this.state.moduleFocussed > Module.Preview ? "hidden" : undefined].join(" "), style: this.state.vmod[Module.Preview].style },
                                    React.createElement(public_1.Paragraphs.StageMultiLine, { lineNumber: 2, style: this.state.vmod[Module.Preview].style, text: function () {
                                            return React.createElement(React.Fragment, null,
                                                _this.state.descriptionShort,
                                                "\u00A0",
                                                _this.state.showTripleDotButton &&
                                                    React.createElement(public_1.Button.DotButton, { id: "previewMore", className: "inlinebutton", onClick: function () { _this.trackClick("...", public_3.IClickType.Action); if (_this.moduleNavigationContainer)
                                                            _this.moduleNavigationContainer.focus("info"); } }));
                                        }, metaline: function () { return _this.state.metaline; }, title: this.state.meta.title })),
                                this.state.vmod[Module.Actions] && this.state.gridScrollPosition == 0 &&
                                    React.createElement(public_1.NavigationWatcher, { onFocusInTree: function () {
                                            _this.setState({ moduleFocussed: Module.Preview });
                                        } },
                                        React.createElement(actions_component20_1.MtvDetailPageActions20, { className: ["module", "actions",
                                                (this.state.moduleFocussed > 1 ? "hidden" : undefined)
                                            ].join(" "), autofocus: true, style: this.state.vmod[Module.Actions].style, assetRefId: this.state.link, themepack: this.state.themepack, actionTemplate: this.state.actionTemplate, secondary: this.state.secondaryActions, primary: this.state.primaryActions, meta: this.state.meta, auth: this.auth, onMoreInfo: function () { if (_this.moduleNavigationContainer)
                                                _this.moduleNavigationContainer.focus("info"); }, onChangeMarked: undefined, asInfoPage: this.state.asInfoPage, onClickTracking: function (text, clickType, pi) { return _this.trackClick(text, clickType, pi); }, onClickToPurchase: function () { return _this.gotoPurchase(); }, onClickToTermsOfUse: function () { return _this.showTermsOfUse(); } })),
                                this.state.vmod[Module.ChannelStage] && this.state.selectedChannel &&
                                    React.createElement("div", { className: ["module", this.state.moduleFocussed < Module.ChannelStage ? "hidden" : undefined].join(" "), style: this.state.vmod[Module.ChannelStage].style },
                                        React.createElement(public_1.Paragraphs.StageMultiLine, { lineNumber: 2, className: "header", title: this.state.selectedChannel.title, metaline: function () { return _this.state.metaline; }, text: this.state.selectedChannel.description })),
                                this.state.vmod[Module.ChannelList] && ((_a = this.state.gridData) === null || _a === void 0 ? void 0 : _a.isUnstructuredGrid) &&
                                    React.createElement(public_1.NavigationWatcher, { onFocusInTree: function () { _this.setState({ moduleFocussed: Module.ChannelStage, isLastItemFocussed: true }); _this.moduleFocussed = Module.ChannelStage; } },
                                        React.createElement("div", { className: ["module", this.state.moduleFocussed !== Module.ChannelStage ? "faded" : undefined].join(" "), style: this.state.vmod[Module.ChannelList].style },
                                            React.createElement("div", { className: ["listtitle", public_2.Css.fonts2.a_fo_h3_2, "singleline-ellipsis"].join(" ") },
                                                public_1.Filter.message(this, public_5.messagesMtv.PACKETVIEW_INC_CHANNELS),
                                                " (",
                                                this.state.gridData.channelCount,
                                                ")"),
                                            React.createElement(public_1.NavigationContainer, { id: "subassets", className: "contentlist", strictHorizontal: true, overrides: { right: "subassets", left: "subassets" }, style: { width: public_2.Css.dimensions.safeareaWidth } },
                                                React.createElement(public_1.ListComponent, __assign({ selection: this.state.channelselection, items: this.state.channels || [], itemRenderer: this.channelItemRenderer, focusRenderer: this.channelRenderer, onSelectionChanged: function (index) { if (public_3.Guard.isNumber(index))
                                                        _this.selectedChannel = index; } }, this.channelListConfiguration))))),
                                this.state.vmod[Module.CombiChannelList] && ((_b = this.state.gridData) === null || _b === void 0 ? void 0 : _b.isStructuredGrid) &&
                                    React.createElement("div", { id: "channelgrid", className: ["channelgrid"].join(" "), style: { height: this.state.vmod[Module.CombiChannelGrid].style.height } },
                                        React.createElement("div", { className: ["animContainer", this.state.moduleFocussed !== Module.ChannelStage ? "faded" : undefined].join(" "), style: gridStyle.toStyle() }, (_c = this.state.rows) === null || _c === void 0 ? void 0 : _c.map(function (row, index) {
                                            return React.createElement(public_1.NavigationWatcher, { onFocusInTree: function () {
                                                    var _a, _b, _c, _d;
                                                    _this.setState({ moduleFocussed: Module.ChannelStage, gridScrollPosition: cListStyle[index].scrollPostion, isLastItemFocussed: ((_b = (_a = _this.state.gridData) === null || _a === void 0 ? void 0 : _a.rows) === null || _b === void 0 ? void 0 : _b.length) ? index == ((_d = (_c = _this.state.gridData) === null || _c === void 0 ? void 0 : _c.rows) === null || _d === void 0 ? void 0 : _d.length) - 1 : false });
                                                    _this.moduleFocussed = Module.ChannelStage;
                                                } },
                                                React.createElement("div", { className: "listModule", style: cListStyle && cListStyle.length > 0 ? cListStyle[index].style : undefined },
                                                    React.createElement("div", { className: ["listtitle", public_2.Css.fonts2.a_fo_h3_2, "singleline-ellipsis"].join(" ") },
                                                        public_1.Filter.message(_this, public_5.messagesMtv.PACKETVIEW_INC_CHANNELS_SUBPACKAGE),
                                                        " ",
                                                        row.title,
                                                        " (",
                                                        row.channels.length,
                                                        ")"),
                                                    React.createElement(public_1.NavigationContainer, { id: ["channel_", index].join(""), className: "contentlist", strictHorizontal: true, overrides: { right: "channels", left: "channels" }, style: { width: public_2.Css.dimensions.safeareaWidth } },
                                                        React.createElement(public_1.ListComponent, __assign({ selection: _this.state.channelselection, items: row.channels || [], itemRenderer: _this.channelItemRenderer, focusRenderer: _this.channelRenderer, onSelectionChanged: function (index) { if (public_3.Guard.isNumber(index))
                                                                _this.selectedChannel = index; } }, _this.channelListConfiguration)))));
                                        }))),
                                this.state.vmod[Module.Info] && this.state.isLastItemFocussed &&
                                    React.createElement(public_1.NavigationWatcher, { onFocusInTree: function () { _this.setState({ moduleFocussed: Module.Info }); } },
                                        React.createElement("div", { id: "info", className: ["module", this.state.moduleFocussed < Module.Info ? "faded" : this.state.moduleFocussed > Module.Info ? "hidden" : undefined].join(" "), style: this.state.vmod[Module.Info].style },
                                            React.createElement(public_1.Paragraphs.Info, { focusId: "info", title: public_1.Filter.message(this, public_5.messagesVod.STB_VD_TI032b), text: this.state.descriptionLong, onSizeChange: function (height) { return _this.setModuleSize(Module.Info, height); } }))),
                                this.state.vmod[Module.MetaDetails] && this.state.isLastItemFocussed &&
                                    React.createElement(public_1.NavigationWatcher, { onFocusInTree: function () { _this.setState({ moduleFocussed: Module.MetaDetails }); } },
                                        React.createElement("div", { id: "details", className: ["module", this.state.moduleFocussed < Module.MetaDetails ? "faded" : this.state.moduleFocussed > Module.MetaDetails ? "hidden" : undefined].join(" "), style: this.state.vmod[Module.MetaDetails].style },
                                            React.createElement(public_1.Paragraphs.TwoColumns, { title: public_1.Filter.message(this, public_5.messagesVod.STB_VD_TI032), items: this.state.metatable || [], onSizeChange: function (height) { return _this.setModuleSize(Module.MetaDetails, height); } })))))),
                React.createElement(public_1.PartnerLogo, { url: this.state.whitelabel.partnerLogo }));
        };
        MtvDetailPage20.prototype.trackPageImpression = function () {
            this.track(this.state.trackInfo_page, "Primary Action Container");
        };
        MtvDetailPage20.prototype.trackClick = function (clickString, clickType, additionalToTrack) {
            var pageInfo = this.state.trackInfo_page;
            if (additionalToTrack && pageInfo) {
                pageInfo.AppID = additionalToTrack.AppID || "";
                pageInfo.PartnerID = additionalToTrack.PartnerID || "";
            }
            var buttonInfo = additionalToTrack ? {
                buttonContext: additionalToTrack === null || additionalToTrack === void 0 ? void 0 : additionalToTrack.ButtonContext,
                buttonPrice: additionalToTrack === null || additionalToTrack === void 0 ? void 0 : additionalToTrack.ButtonPrice
            } : undefined;
            if (pageInfo) {
                this.track(pageInfo, clickString, clickType, buttonInfo);
            }
        };
        MtvDetailPage20.prototype.track = function (pageInfo, pixelName, clickType, buttonInfo) {
            var _a;
            if (this.tracker) {
                var chapters = (pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.chapters) ? pageInfo.chapters : [];
                chapters[3] = pixelName || "";
                var stcValue = public_3.StringTools.dataStringify({ ObjectType: public_3.DtObjTypes.ObjTypeDetail, TV_VOD_ID: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.contentID, PartnerID: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.PartnerID, AppID: pageInfo === null || pageInfo === void 0 ? void 0 : pageInfo.AppID, ButtonContext: buttonInfo === null || buttonInfo === void 0 ? void 0 : buttonInfo.buttonContext, ButtonPrice: buttonInfo === null || buttonInfo === void 0 ? void 0 : buttonInfo.buttonPrice });
                var pageVariable = (_a = {},
                    _a[public_3.DtSiteVariables.ContentType] = public_3.ContentType.DetailVOD,
                    _a[public_3.DtGlobalVariables.STC] = stcValue,
                    _a);
                this.tracker.track({ chapters: chapters, lvl2id: public_3.Level2Ids.DETAIL_PAGE, params: pageVariable, clickType: clickType });
            }
        };
        var MtvDetailPage20_1;
        MtvDetailPage20.classID = 0x810;
        MtvDetailPage20.defaultNavigationID = "unknown";
        __decorate([
            public_1.reactPushState()
        ], MtvDetailPage20.prototype, "moduleFocussed", void 0);
        __decorate([
            public_1.reactPushState()
        ], MtvDetailPage20.prototype, "backgroundImage", void 0);
        __decorate([
            public_1.reactPushState()
        ], MtvDetailPage20.prototype, "partnerLogo", void 0);
        __decorate([
            public_1.reactPushState()
        ], MtvDetailPage20.prototype, "selectedChannel", void 0);
        __decorate([
            public_1.reactPushState()
        ], MtvDetailPage20.prototype, "gridScrollPosition", void 0);
        __decorate([
            public_1.reactPushState()
        ], MtvDetailPage20.prototype, "isLastRow", void 0);
        __decorate([
            public_1.reactPushState()
        ], MtvDetailPage20.prototype, "scrollLeft", void 0);
        MtvDetailPage20 = MtvDetailPage20_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-detailpage20-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    })
                        .sub(public_2.selector(".breadcrumb")
                        .props({
                        position: "absolute",
                        top: 77,
                        left: public_2.Css.dimensions.safeareaLeft_UI20,
                        width: 854
                    }))
                        .sub(public_2.selector(".clipper")
                        .props({
                        top: 117,
                        height: public_2.Css.dimensions.screenHeight,
                        width: public_2.Css.dimensions.screenWidth,
                        position: "absolute",
                        overflow: "hidden"
                    }))
                        .sub(public_2.selector(".modules")
                        .props({
                        position: "absolute",
                        top: 17,
                    })
                        .extend(animation_1.Animations.movable))
                        .sub(public_2.selector(".channelgrid")
                        .props({
                        width: public_2.Css.dimensions.screenWidth,
                        left: public_2.Css.dimensions.safeareaLeft_UI20,
                        position: "absolute",
                        overflow: "hidden",
                        top: 380
                    })
                        .sub(public_2.selector(".animContainer")
                        .props({
                        position: "absolute"
                    })
                        .extend(animation_1.Animations.movable)))
                        .sub(public_2.selector(".faded")
                        .props({
                        opacity: 0.6
                    }))
                        .sub(public_2.selector(".module")
                        .props({
                        position: "absolute",
                        left: public_2.Css.dimensions.safeareaLeft_UI20,
                        opacity: 1,
                        willChange: "transform, opacity",
                        transition: "opacity " + public_2.Css.transitions.short
                    })
                        .sub(public_2.selector("&.faded")
                        .props({
                        opacity: 0.6
                    }))
                        .sub(public_2.selector("&.hidden")
                        .props({
                        opacity: 0
                    }))
                        .sub(public_2.selector(".listtitle")
                        .props({
                        position: "absolute",
                        top: 0,
                        width: 1200
                    }))
                        .sub(public_2.selector(".castlist")
                        .props({
                        position: "absolute",
                        top: 66,
                        left: -public_2.Css.dimensions.borderWidth,
                        height: public_1.ContentTiles.Cast.HEIGHT,
                        width: public_2.Css.dimensions.screenWidth
                    }))
                        .sub(public_2.selector(".contentlist")
                        .props({
                        position: "absolute",
                        top: 66,
                        left: -public_2.Css.dimensions.borderWidth,
                        height: public_1.ContentTiles.Vod.COVER_HEIGHT + 99,
                    }))
                        .sub(public_2.selector(".inlinebutton")
                        .props({
                        display: "inline-block",
                        position: "relative",
                        width: 88,
                        top: 5,
                        verticalAlign: "text-top"
                    }))
                        .sub(public_2.selector(".ratings")
                        .props({
                        top: 3,
                    }))
                        .sub(public_2.selector(".ratingstable")
                        .props({
                        top: 3,
                        marginRight: 9,
                    }))
                        .sub(public_2.selector(".ratingscount")
                        .props({
                        marginRight: 9,
                    }))),
                    public_2.selector("& .previewBgImage", "& .previewBgMask")
                        .props({
                        top: 0,
                        right: 0,
                        position: "absolute",
                        width: public_2.Css.dimensions.SceneImageWidth,
                        height: public_2.Css.dimensions.SceneImageHeight
                    }),
                    public_2.selector("& .logo")
                        .props({
                        position: "absolute",
                        top: public_2.Css.dimensions.safeareaTop_UI20,
                        left: public_2.Css.dimensions.safeareaLeft_UI20
                    }),
                    public_2.selector("&")
                        .sub(public_2.selector("& .person")
                        .sub(public_2.selector("&.focus")
                        .props({
                        position: "absolute",
                        width: public_1.ContentTiles.Cast.WIDTH + 2 * public_2.Css.dimensions.borderWidth,
                        height: public_1.ContentTiles.Cast.COVER_HEIGHT + 2 * public_2.Css.dimensions.borderWidth,
                        padding: public_2.Css.dimensions.borderWidth,
                        visibility: "hidden",
                        transition: "transform " + public_2.Css.transitions.easeOutQuad + " " + public_2.Css.transitions.middle
                    }))
                        .sub(public_2.selector("& .focusFrame")
                        .props({
                        height: public_1.ContentTiles.Cast.COVER_HEIGHT,
                        width: public_1.ContentTiles.Cast.WIDTH
                    })))
                        .sub(public_2.selector("& .contenttile")
                        .sub(public_2.selector("&.focus")
                        .props({
                        position: "absolute",
                        width: public_1.ContentTiles.Vod.WIDTH + 2 * public_2.Css.dimensions.borderWidth,
                        height: public_1.ContentTiles.Vod.COVER_HEIGHT + 2 * public_2.Css.dimensions.borderWidth,
                        padding: public_2.Css.dimensions.borderWidth,
                        visibility: "hidden",
                        transition: "transform " + public_2.Css.transitions.easeOutQuad + " " + public_2.Css.transitions.middle
                    }))
                        .sub(public_2.selector("& .focusFrame")
                        .props({
                        height: public_1.ContentTiles.Vod.COVER_HEIGHT,
                        width: public_1.ContentTiles.Vod.WIDTH
                    }))),
                    public_2.selector("& .hasFocus .focus")
                        .props({
                        visibility: "visible"
                    })
                ]
            }),
            public_3.logTag()
        ], MtvDetailPage20);
        return MtvDetailPage20;
    }(public_1.ReactBaseComponent));
    exports.MtvDetailPage20 = MtvDetailPage20;
});
//# sourceMappingURL=detail.page20.js.map