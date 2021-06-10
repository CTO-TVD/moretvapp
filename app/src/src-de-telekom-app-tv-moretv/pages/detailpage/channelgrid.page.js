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
define(["require", "exports", "react", "src/src-de-telekom-tv-moretv/public", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "src/src-de-telekom-style/public", "src/src-de-telekom-app-tv-core-v2/public", "../../component/detailpage/channelgrid.base", "../../public", "../../component/public", "../util/public", "bluebird"], function (require, exports, React, mtv, public_1, public_2, public_3, public_4, channelgrid_base_1, public_5, public_6, util, bluebird) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvDetailChannelgridPage = void 0;
    var MtvDetailChannelgridPage = (function (_super) {
        __extends(MtvDetailChannelgridPage, _super);
        function MtvDetailChannelgridPage(props, context) {
            var _this = _super.call(this, props, context) || this;
            var intent = new public_1.IntentMoreTV.ChannelGridPage(_this.location.intent.data);
            _this.pid = intent.data.packageId;
            _this.channelGroupIndex = intent.data.channelGroupIndex;
            _this.state = { topPosition: 0 };
            return _this;
        }
        MtvDetailChannelgridPage_1 = MtvDetailChannelgridPage;
        MtvDetailChannelgridPage.prototype.componentDidMount = function () {
            this.loadData(this.pid, this.channelGroupIndex);
        };
        MtvDetailChannelgridPage.prototype.loadData = function (packageId, channelGroupIndex) {
            var _this = this;
            if (!!packageId && public_2.Guard.isNumber(channelGroupIndex)) {
                bluebird.all([
                    mtv.ApplicationClient.getPackages(),
                    mtv.ApplicationClient.getCatalogs()
                ])
                    .then(function (_a) {
                    var packages = _a[0], cats = _a[1];
                    _this.setState({ tvpackages: packages, catalogs: cats });
                    return mtv.ApplicationClient.getPackage(packageId);
                })
                    .then(function (tvpackage) {
                    _this.setState({ tvpackage: tvpackage });
                    if (!_this.state.tvpackage || !_this.state.tvpackage.ChannelGroups || channelGroupIndex >= _this.state.tvpackage.ChannelGroups.length) {
                        throw Error("invalid channel group index");
                    }
                    return mtv.ApplicationClient.getCatalog(_this.state.tvpackage.ContentProvider);
                })
                    .then(function (cat) {
                    var _a;
                    var ToUType = ((_a = _this.state.tvpackage) === null || _a === void 0 ? void 0 : _a.TermsOfUse) && _this.state.tvpackage.PriceInfo ? (_this.state.tvpackage.PriceInfo.Price && _this.state.tvpackage.PriceInfo.Price.indexOf("*") >= 0 ? "s" : "n") : undefined;
                    _this.setState(__assign({ catalog: cat, selectedToUType: ToUType }, util.convertMtvThemepack(cat)));
                    return mtv.ApplicationClient
                        .getChannels();
                })
                    .then(function (allChannels) {
                    var _a;
                    var refChannels = _this.state.tvpackage ? _this.state.tvpackage.ChannelGroups[channelGroupIndex].Channels : [];
                    _this.setState({
                        isUnstructuredGrid: true,
                        isStructuredGrid: false,
                        cssGridType: "unstructured",
                        groupTitle: (_a = _this.state.tvpackage) === null || _a === void 0 ? void 0 : _a.ChannelGroups[channelGroupIndex].Title,
                        channels: channelgrid_base_1.ChannelGridBase.resolveChannels(refChannels, allChannels)
                    });
                    if (!_this.state.tvpackage || !_this.state.tvpackage.ChannelGroups[channelGroupIndex]) {
                        throw Error("requested channelgroup by index is empty.");
                    }
                })
                    .catch(function (error) {
                    public_2.Logger.warn(function (log) { return log(public_2.LogMsg("loadData " + error, MtvDetailChannelgridPage_1.TAG)); });
                    public_2.ErrorManager.catch(error, MtvDetailChannelgridPage_1, 0x01);
                    _this.showErrorDialog(error);
                });
            }
            else
                return;
        };
        MtvDetailChannelgridPage.prototype.handleInfoKey = function () {
            var _a;
            if ((_a = this.state.tvpackage) === null || _a === void 0 ? void 0 : _a.TermsOfUse) {
                this.showTermOfUse(this.state.tvpackage.TermsOfUse);
                return true;
            }
            return false;
        };
        MtvDetailChannelgridPage.prototype.showTermOfUse = function (termsOfUseId) {
            var _this = this;
            mtv.ApplicationClient
                .getTermsOfUse(termsOfUseId)
                .then(function (termsOfUse) {
                if (termsOfUse) {
                    _this.infoDialogData = {
                        title: termsOfUse.Title,
                        message: termsOfUse.Content,
                        customClass: "text-alignLeft",
                        extraData: "<div class='text'>" + termsOfUse.Content + "</div>",
                        ignoreSafeArea: true
                    };
                }
                else {
                    _this.infoDialogData = {
                        title: "Dokument konnte nicht gefunden werden.",
                        message: "",
                        customClass: "text-alignLeft",
                        extraData: "",
                        ignoreSafeArea: true
                    };
                }
                public_1.TVDialogHostService.getInstance()
                    .show(_this.infoDialogData, public_4.InfoDialogComponent)
                    .result(_this)
                    .catch(function (error) {
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("showDialogClick: dialog aborted -> " + error, MtvDetailChannelgridPage_1.TAG)); });
                });
            })
                .catch(function (error) {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("ERROR: Show DT Catalog: " + error.message, MtvDetailChannelgridPage_1.TAG)); });
                public_2.ErrorManager.catch(error, MtvDetailChannelgridPage_1, 0x01);
                _this.showErrorDialog();
            });
        };
        MtvDetailChannelgridPage.prototype.showErrorDialog = function (error) {
            var _this = this;
            public_2.Logger.debug(function (log) { return log(public_2.LogMsg("SHOW DIALOG for error code " + error, MtvDetailChannelgridPage_1.TAG)); });
            public_6.MtvMessageOverlayComponent
                .createDialogByError({ error: error })
                .result(this)
                .then(function (result) {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("MTVGenericErrorComponent dialog closed with result " + result.resultId + " ", MtvDetailChannelgridPage_1.TAG)); });
                _this.startIntent(undefined, { type: "exit" });
            })
                .catch(function (error) {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("showDialogClick: dialog aborted -> " + error + " ", MtvDetailChannelgridPage_1.TAG)); });
                _this.startIntent(undefined, { type: "exit" });
            });
        };
        MtvDetailChannelgridPage.prototype.showChannelDetails = function (idx) {
            var _this = this;
            var extraData = { initialIdx: idx, channels: this.state.channels || [], packages: this.state.tvpackages };
            this.visibleDialog = public_5.MtvDetailpageComponent.ChannelDetails.createDialog(public_1.TVDialogHostService.getInstance(), extraData);
            this.visibleDialog
                .result(this)
                .then(function (result) {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("showChannelDetails dialog closed with result " + result.resultId, MtvDetailChannelgridPage_1.TAG)); });
                var idx = result.extraData ? result.extraData.initialIdx : undefined;
                var channel = idx !== undefined && result.extraData ? result.extraData.channels[idx] : undefined;
                if (channel) {
                    var extraData_1 = {
                        channelId: channel.ID,
                        channelTitle: channel.Title || "",
                        contentProvider: _this.state.tvpackage ? _this.state.tvpackage.ContentProvider : "",
                        originTvPackageId: _this.pid || "",
                        packages: _this.state.tvpackages || [],
                        catalogs: _this.state.catalogs || []
                    };
                    _this.visibleDialog = public_5.MtvDetailpageComponent.TVPackages.createDialog(public_1.TVDialogHostService.getInstance(), extraData_1);
                    return _this.visibleDialog.result(_this);
                }
                else {
                    throw new Error("Missing Channel Info");
                }
            })
                .then(function (result) {
                if (result.resultId != "") {
                    _this.startIntent(new public_1.IntentMoreTV.Detailpage({ id: result.resultId }), { type: "replace" });
                }
            })
                .catch(function (error) {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("showChannelDetails: dialog aborted -> " + error, MtvDetailChannelgridPage_1.TAG)); });
                return null;
            });
        };
        MtvDetailChannelgridPage.prototype.render = function () {
            var _this = this;
            var _a;
            var style = {};
            style[public_3.Css.names.transform] = "translate(0px, " + -1 * public_3.Css.scale(this.state.topPosition) + "px)";
            return React.createElement("div", { className: [this.ID, public_3.Css.globalStyleClasses.defaultBackgroundImage, "page", public_1.TvThemepackKeys.CSSROOT].join(" ") },
                this.state.background && React.createElement(public_1.TvBackgroundSustainer, __assign({}, this.state.background)),
                this.state.themepack && React.createElement(public_1.TvThemepack, { data: this.state.themepack }),
                ((_a = this.state.tvpackage) === null || _a === void 0 ? void 0 : _a.Title) && React.createElement("div", { id: "title", className: public_3.Css.fonts2.a_fo_h6_2 + " singleline-ellipsis" }, this.state.tvpackage.Title),
                React.createElement("div", { className: "subheader " },
                    this.state.groupTitle && React.createElement("div", { id: "grouptitle", className: "h4_1" + " singleline-ellipsis" }, this.state.groupTitle),
                    (this.state.channels && this.state.channels.length > 0 && this.state.selectedIndex) && React.createElement("div", { id: "index", className: "h4_2" },
                        "\u00A0(",
                        this.state.selectedIndex,
                        "/",
                        this.state.channels.length,
                        ")")),
                React.createElement("div", { id: "grid" },
                    React.createElement("div", { className: "animContainer " + public_3.Css.transitions.transformShort, style: style }, (this.state.isUnstructuredGrid && this.state.channels) &&
                        React.createElement(public_1.NavigationContainer, { id: "mtvChannelGridPage", className: "grid_container", strictHorizontal: true },
                            React.createElement(public_1.NavigationKey, { keyFilter: "INFO_KEY", onKey: function (key) { return _this.handleInfoKey(); } }),
                            this.state.channels.map(function (element, x) {
                                var px = (public_5.ContentMtvTiles.TileChannel.WIDTH) * (x % 6);
                                var py = (public_5.ContentMtvTiles.TileChannel.HEIGHT) * (Math.floor(x / 6));
                                var tileId = x.toString();
                                return React.createElement(public_1.NavigationElement, { id: tileId, key: x.toString(), className: "tileChannel", style: public_3.declaration()
                                        .props({
                                        top: py,
                                        left: px
                                    }).toStyle(), onFocusIn: function () {
                                        _this.setState({ topPosition: py, selectedIndex: x + 1 });
                                    }, onClick: function () {
                                        _this.showChannelDetails(x);
                                    } },
                                    React.createElement(public_5.ContentMtvTiles.TileChannel, { data: { title: element.Title, image: element.Logo } }));
                            })))));
        };
        var MtvDetailChannelgridPage_1;
        MtvDetailChannelgridPage.classID = 0xC05;
        MtvDetailChannelgridPage = MtvDetailChannelgridPage_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-channelgridpage-component",
                styles: [
                    public_3.selector("& #title")
                        .props({
                        position: "absolute",
                        top: 97,
                        width: 1104,
                        left: public_3.Css.dimensions.safeareaLeft
                    }),
                    public_3.selector("& .subheader")
                        .props({
                        position: "absolute",
                        top: 250,
                        width: 1104,
                        display: "flex",
                        left: public_3.Css.dimensions.safeareaLeft
                    }),
                    public_3.selector("& #index")
                        .props({
                        flexShrink: 0
                    }),
                    public_3.selector("& #grid")
                        .props({
                        width: public_3.Css.dimensions.safeareaWidth + 2 * public_3.Css.dimensions.borderWidth,
                        height: public_3.Css.dimensions.screenHeight,
                        position: "absolute",
                        overflow: "hidden",
                        top: 301,
                        left: public_3.Css.dimensions.safeareaLeft - public_3.Css.dimensions.borderWidth
                    })
                        .sub(public_3.selector("& .unstructured")
                        .props({
                        top: 44
                    }))
                        .sub(public_3.selector("& .grid_container")
                        .props({
                        position: "absolute"
                    })
                        .sub(public_3.selector(".tileChannel")
                        .props({
                        width: 264,
                        height: 228,
                        overflow: "hidden",
                        display: "inline-block",
                        position: "absolute"
                    }))
                        .sub(public_3.selector("& .subheadline")
                        .props({
                        position: "absolute",
                        left: public_3.Css.dimensions.borderWidth
                    }))
                        .sub(public_3.selector("h4_1")
                        .extend(public_3.Css.fonts2.a_fo_h4_mixin))
                        .sub(public_3.selector("h4_2")
                        .props({
                        color: public_3.Css.colors.A_CO_6,
                    })
                        .extend(public_3.Css.fonts2.a_fo_h4_mixin))),
                    public_3.selector("& .animContainer")
                        .props({
                        position: "absolute"
                    })
                ]
            }),
            public_2.logTag()
        ], MtvDetailChannelgridPage);
        return MtvDetailChannelgridPage;
    }(public_1.ReactBaseComponent));
    exports.MtvDetailChannelgridPage = MtvDetailChannelgridPage;
});
//# sourceMappingURL=channelgrid.page.js.map