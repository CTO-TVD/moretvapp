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
define(["require", "exports", "bluebird", "react", "src/src-de-telekom-tv-moretv/public", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "../../translation/public", "../../component/content_tiles/public", "src/src-de-telekom/public", "../dtpurchase/business_error.dialog", "../../component/public", "src/src-de-telekom-app-tv-core-v2/public", "src/src-de-telekom-tv-core/public"], function (require, exports, bluebird, React, mtv, public_1, public_2, public_3, public_4, public_5, business_error_dialog_1, public_6, public_7, public_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvContractsPage = void 0;
    var MtvContractsPage = (function (_super) {
        __extends(MtvContractsPage, _super);
        function MtvContractsPage(props, context) {
            var _this = _super.call(this, props, context) || this;
            var intent = new public_1.IntentMoreTV.Contracts(_this.location.intent.data);
            _this.mtv_token = intent.data.token;
            _this.dialogService = public_1.TVDialogHostService.getInstance();
            _this.uarService = public_7.UarService.getInstance();
            var closePinForgotten = _this.uarService.registerPinForgotten(function () {
                _this.pinForgottenCalled(_this);
                return bluebird.resolve(undefined);
            });
            _this.dlgActionPinForgotten = false;
            _this.state = { title: "", topPosition: 0, pageloading: false };
            _this.pinContext = {
                acr: "userpin",
                scope: mtv.ApplicationClient.DefaultScope,
                force: true,
                dialogDataCallback: function () {
                    return {
                        contentId: "12345789",
                        dialogTitle: public_1.Filter.message(_this, public_3.messagesMtv.MYSUBSCRIPTIONS_PINDIALOG_TITLE),
                        dialogParagraph1: public_1.Filter.message(_this, public_3.messagesMtv.MYSUBSCRIPTIONS_PINDIALOG_P1),
                        dialogParagraph2: public_1.Filter.message(_this, public_3.messagesMtv.MYSUBSCRIPTIONS_PINDIALOG_P2),
                        version: "0.1",
                        dialogId: "2",
                        navigateBackAtCancel: true
                    };
                }
            };
            _this.onDestroy(function () {
                closePinForgotten();
            });
            return _this;
        }
        MtvContractsPage_1 = MtvContractsPage;
        MtvContractsPage.prototype.componentDidMount = function () {
            mtv.ApplicationClient.clearTokenCache();
            this.setup();
        };
        MtvContractsPage.prototype.componentWillUnmount = function () {
            mtv.ApplicationClient.clearTokenCache();
        };
        MtvContractsPage.prototype.setup = function () {
            mtv.ApplicationClient.getCatalogs().catch(public_5.ErrorManager.catchFunc(MtvContractsPage_1, 0x01));
            mtv.ApplicationClient.getPackages().catch(public_5.ErrorManager.catchFunc(MtvContractsPage_1, 0x02));
            this.getContracts();
        };
        MtvContractsPage.prototype.getContracts = function () {
            var _this = this;
            this.setState({ pageloading: true });
            return mtv.ApplicationClient
                .getContracts(this.pinContext, this.mtv_token)
                .then(function (value) {
                public_1.DiagnosticNotificationComponent.notify("DtBooking: " + value.HttpStatusCode);
                if (value.HttpStatusCode == 202) {
                    public_5.Logger.debug(function (log) { return log(public_5.LogMsg("resolveContracts: 202 waiting...", MtvContractsPage_1.TAG)); });
                    setTimeout(function () {
                        return _this.getContracts();
                    }, 1000);
                }
                else {
                    return _this.resolveContracts(value);
                }
            })
                .catch(function (error) {
                if (error instanceof public_5.ClientAuthorizationRequiredError || error instanceof public_8.ZacAuthenticationProcessError) {
                    if (_this.dlgActionPinForgotten) {
                        public_5.Logger.debug(function (log) { return log(public_5.LogMsg("Pin Dialog canceled via Pin forgotten", MtvContractsPage_1.TAG)); });
                    }
                    var promise = _this.location.isBackNavigation ? bluebird.delay(500) : bluebird.delay(0);
                    promise.then(function () {
                        if (!_this.destroyed && !_this.dlgActionPinForgotten) {
                            public_5.Logger.debug(function (log) { return log(public_5.LogMsg("Navigating Back", MtvContractsPage_1.TAG)); });
                            _this.startIntent(undefined, { type: "backward" });
                        }
                        else
                            return;
                    });
                    return;
                }
                if (error instanceof mtv.MtvBackendError) {
                    public_1.DiagnosticNotificationComponent.notify("DtBooking: failed", error.statusCode + " - " + error.backendCode);
                    public_5.Logger.debug(function (log) { return log(public_5.LogMsg("getcontracts failed: " + error.statusCode + " - " + error.backendCode + "}", MtvContractsPage_1.TAG)); });
                }
                else {
                    public_1.DiagnosticNotificationComponent.notify("DtBooking failed: " + JSON.stringify(error));
                }
                public_5.Logger.debug(function (log) { return log(public_5.LogMsg("getcontracts failed: " + JSON.stringify(error), MtvContractsPage_1.TAG)); });
                _this.showErrorDialog();
                _this.setState({ pageloading: false });
            });
        };
        MtvContractsPage.prototype.resolveContracts = function (contracts) {
            if (contracts.HttpStatusCode === 200) {
                this.setState({ pageloading: false });
                this.mapContracts(contracts.Contratcs);
            }
            else if (contracts.HttpStatusCode === 400) {
                public_5.Logger.debug(function (log) { return log(public_5.LogMsg("resolveContracts: state -> " + contracts.State, MtvContractsPage_1.TAG)); });
                switch (contracts.Errorcode) {
                    case "ERROR_BACKEND_SYSTEM":
                        public_5.Logger.error(function (log) { return log(public_5.LogMsg("resolveContracts: Invalid request.", MtvContractsPage_1.TAG)); });
                        break;
                    case "ERROR_TRANSACTION_INVALID":
                        public_5.Logger.error(function (log) { return log(public_5.LogMsg("resolveContracts: Invalid transaction.", MtvContractsPage_1.TAG)); });
                        break;
                    default:
                        public_5.Logger.error(function (log) { return log(public_5.LogMsg("resolveContracts: code ->  " + contracts.HttpStatusCode + ". Unknown error.", MtvContractsPage_1.TAG)); });
                }
                throw new Error("unhandled error");
            }
            else {
                public_5.Logger.error(function (log) { return log(public_5.LogMsg("resolveConfirmBooking: code:" + contracts.HttpStatusCode + " state -> " + contracts.State, MtvContractsPage_1.TAG)); });
                throw new Error("unhandled error");
            }
        };
        MtvContractsPage.prototype.mapContracts = function (contracts) {
            var _this = this;
            if (!contracts)
                return;
            var dtContracts = contracts.get(mtv.ApplicationClient.PROVIDER_DT);
            var skyContracts = contracts.get(mtv.ApplicationClient.PROVIDER_SKY);
            if (!dtContracts && !skyContracts) {
                var sourcelist_1 = [];
                bluebird
                    .resolve(public_5.Feature.has(public_5.FeatureItems.moreTvMySubscriptionsVendors, public_5.FeatureRights.viewItems) ? this.resolveVendors() : [])
                    .then(function (vendors) {
                    if (vendors && vendors.length > 0) {
                        sourcelist_1.push.apply(sourcelist_1, vendors);
                    }
                    return public_5.Feature.has(public_5.FeatureItems.moreTvMySubscriptionsPackages, public_5.FeatureRights.viewItems) ? _this.resovlePromotedPackages(sourcelist_1.length) : [];
                })
                    .then(function (promotions) {
                    if (promotions && promotions.length > 0) {
                        sourcelist_1.push.apply(sourcelist_1, promotions);
                    }
                    _this.setState({ vendors: sourcelist_1 });
                });
                return;
            }
            var promise = bluebird.resolve();
            var sourcelist = [];
            if (dtContracts) {
                var dtCatalog_1;
                promise = promise
                    .then(function () {
                    return mtv.ApplicationClient.getCatalog(mtv.ApplicationClient.PROVIDER_DT);
                })
                    .then(function (catalog) {
                    if (!catalog) {
                        throw new Error("catalog for DT expected");
                    }
                    dtCatalog_1 = catalog;
                    return mtv.ApplicationClient.getPackages();
                })
                    .then(function (packages) {
                    var subtitlePrefix = public_1.Filter.message(_this, public_3.messagesMtv.MYSUBSCRIPTIONS_BOOKED_AT);
                    var i = 0;
                    dtContracts.map(function (p) {
                        var ref = packages.filter(function (s) {
                            return s.ID == p.PackageID;
                        })[0];
                        if (ref == undefined) {
                            return undefined;
                        }
                        var it = {
                            title: ref.Title,
                            image: ref.Image,
                            subtitle: subtitlePrefix + " " + (!!p.StartDate ? p.StartDate : ""),
                            subtitleOnFocusOnly: true,
                            meta: public_5.Guard.isNumber(ref.ChannelCount) && ref.ChannelCount > 0 ? "(" + ref.ChannelCount + ")" : "",
                            detailRef: undefined,
                            vendor: ref.ContentProvider,
                            vendorHotline: dtCatalog_1.CustomValues ? dtCatalog_1.CustomValues.Hotline : undefined,
                            vendorLogo: undefined,
                            index: i
                        };
                        sourcelist.push(it);
                        i++;
                        return;
                    });
                });
            }
            if (skyContracts && skyContracts.length > 0) {
                promise = promise
                    .then(function () {
                    return mtv.ApplicationClient.getCatalog(mtv.ApplicationClient.PROVIDER_SKY);
                })
                    .then(function (skyCatalog) {
                    if (!skyCatalog) {
                        throw new Error("catalog for sky expected");
                    }
                    var i = sourcelist.length;
                    var skypackage = {
                        title: skyCatalog.CoverSubscribed ? skyCatalog.CoverSubscribed.Title : "",
                        image: skyCatalog.CoverSubscribed ? skyCatalog.CoverSubscribed.Image : "",
                        subtitle: skyCatalog.CoverSubscribed ? skyCatalog.CoverSubscribed.Subtitle : "",
                        subtitleOnFocusOnly: true,
                        meta: "",
                        detailRef: undefined,
                        vendor: skyCatalog.ContentProvider,
                        vendorHotline: skyCatalog.CustomValues ? skyCatalog.CustomValues.Hotline : undefined,
                        vendorLogo: skyCatalog.Logo,
                        index: i
                    };
                    sourcelist.push(skypackage);
                });
            }
            promise
                .then(function () {
                _this.setState({ totalCount: sourcelist.length, data: sourcelist });
            })
                .catch(function (error) {
                public_5.Logger.debug(function (log) { return log(public_5.LogMsg("renderContracts failed: " + error.toString(), MtvContractsPage_1.TAG)); });
            });
        };
        MtvContractsPage.prototype.resovlePromotedPackages = function (startIndex) {
            return mtv.ApplicationClient.getPackages()
                .then(function (packages) {
                var filteredPackages = packages.filter(function (p) {
                    var _a;
                    return ((_a = p.CustomValues) === null || _a === void 0 ? void 0 : _a.MySubscriptionsPromotion) !== undefined;
                }).sort(function (a, b) {
                    return (a.CustomValues && b.CustomValues && a.CustomValues.MySubscriptionsPromotion && b.CustomValues.MySubscriptionsPromotion)
                        ? a.CustomValues.MySubscriptionsPromotion.localeCompare(b.CustomValues.MySubscriptionsPromotion) : 0;
                });
                var sourcelist = filteredPackages.map(function (p) {
                    var subtitle = p.PriceInfo ? p.PriceInfo.Period + " " + p.PriceInfo.Price : "";
                    if (subtitle.length > 0) {
                        subtitle = subtitle.charAt(0).toUpperCase() + subtitle.slice(1);
                    }
                    var result = {
                        title: p.Title,
                        image: p.Image,
                        subtitle: subtitle,
                        meta: public_5.Guard.isNumber(p.ChannelCount) && p.ChannelCount > 0 ? "(" + p.ChannelCount + ")" : "",
                        detailRef: p.ID,
                        vendor: undefined
                    };
                    return result;
                });
                return sourcelist;
            });
        };
        MtvContractsPage.prototype.resolveVendors = function () {
            return mtv.ApplicationClient.getCatalogs()
                .then(function (cs) {
                var sourcelist = [];
                var catalogsFiltered = [];
                var c1 = cs.filter(function (c) {
                    return c.ContentProvider == mtv.ApplicationClient.PROVIDER_DT;
                })[0];
                if (c1 !== undefined) {
                    catalogsFiltered.push(c1);
                }
                var c2 = cs.filter(function (c) {
                    return c.ContentProvider == mtv.ApplicationClient.PROVIDER_SKY;
                })[0];
                if (c2 !== undefined) {
                    catalogsFiltered.push(c2);
                }
                var i = 0;
                catalogsFiltered.map(function (cat) {
                    if (!cat.Cover)
                        return;
                    var it = {
                        title: cat.Cover.Title,
                        image: cat.Cover.Image,
                        subtitle: cat.Cover.Subtitle,
                        subtitleOnFocusOnly: true,
                        meta: "",
                        detailRef: undefined,
                        vendor: cat.ContentProvider,
                        index: i
                    };
                    sourcelist.push(it);
                    i++;
                });
                return sourcelist;
            })
                .catch(function (error) {
                public_5.Logger.debug(function (log) { return log(public_5.LogMsg("getCatalogs failed: " + error.toString(), MtvContractsPage_1.TAG)); });
                return [];
            });
        };
        MtvContractsPage.prototype.showVendorDialog = function (vendor) {
            var title;
            var message;
            var footnote;
            var hotline;
            if (vendor && !!vendor.vendor) {
                var VENDOR = vendor.vendor.toLowerCase();
                if (VENDOR == mtv.ApplicationClient.PROVIDER_DT.toLowerCase()) {
                    title = public_1.Filter.message(this, public_3.messagesMtv.ABO_INFO_SIGNOFF_dt_HEAD);
                    message = public_1.Filter.message(this, public_3.messagesMtv.ABO_INFO_SIGNOFF_dt_TEXT);
                    footnote = public_1.Filter.message(this, public_3.messagesMtv.dt_PHONE_COMMENT);
                    hotline = vendor.vendorHotline ? vendor.vendorHotline : public_1.Filter.message(this, public_3.messagesMtv.dt_PHONE);
                }
                if (VENDOR == mtv.ApplicationClient.PROVIDER_SKY.toLowerCase()) {
                    title = public_1.Filter.message(this, public_3.messagesMtv.ABO_INFO_SIGNOFF_sky_HEAD);
                    message = public_1.Filter.message(this, public_3.messagesMtv.ABO_INFO_SIGNOFF_sky_TEXT);
                    footnote = public_1.Filter.message(this, public_3.messagesMtv.sky_PHONE_COMMENT);
                    hotline = vendor.vendorHotline ? vendor.vendorHotline : public_1.Filter.message(this, public_3.messagesMtv.sky_PHONE);
                }
            }
            else {
                title = public_1.Filter.message(this, public_3.messagesMtv.ABO_INFO_SIGNOFF_dt_HEAD);
                message = public_1.Filter.message(this, public_3.messagesMtv.ABO_INFO_SIGNOFF_dt_TEXT);
                footnote = public_1.Filter.message(this, public_3.messagesMtv.dt_PHONE_COMMENT);
                hotline = public_1.Filter.message(this, public_3.messagesMtv.dt_PHONE);
            }
            this.createBusinessErrorDialog(title, message, footnote, hotline);
        };
        MtvContractsPage.prototype.showErrorDialog = function (error) {
            var _this = this;
            public_5.Logger.debug(function (log) { return log(public_5.LogMsg("SHOW DIALOG for error code " + error, MtvContractsPage_1.TAG)); });
            this.genericDialog = public_6.MtvMessageOverlayComponent.createDialogByError({ error: error });
            this.genericDialog
                .result(this)
                .then(function (result) {
                public_5.Logger.debug(function (log) { return log(public_5.LogMsg("MTVGenericErrorComponent dialog closed with result " + result.resultId + " ", MtvContractsPage_1.TAG)); });
                _this.startIntent(undefined, { type: "exit" });
            })
                .catch(function (error) {
                public_5.Logger.debug(function (log) { return log(public_5.LogMsg("showDialogClick: dialog aborted -> " + error + " ", MtvContractsPage_1.TAG)); });
                _this.startIntent(undefined, { type: "exit" });
            });
        };
        MtvContractsPage.prototype.createBusinessErrorDialog = function (title, message, footnote, hotline) {
            var _this = this;
            var extraData = { telephone: hotline, footnote: footnote };
            this.genericDialog = business_error_dialog_1.MtvBusinessErrorDialog.createBusinessErrorDialog(this.dialogService, extraData, title, message);
            this.genericDialog
                .result(this)
                .then(function (result) {
                public_5.Logger.debug(function (log) { return log(public_5.LogMsg("MTVGenericErrorComponent dialog closed with result " + result.resultId + " ", MtvContractsPage_1.TAG)); });
                return result.closed;
            })
                .catch(function (error) {
                public_5.Logger.debug(function (log) { return log(public_5.LogMsg("showDialogClick: dialog aborted -> " + error + " ", MtvContractsPage_1.TAG)); });
                _this.startIntent(undefined, { type: "exit" });
            });
        };
        MtvContractsPage.prototype.gotoCatalog = function (item) {
            if (item.vendor) {
                if (item.vendor.toUpperCase() == mtv.ApplicationClient.PROVIDER_DT.toUpperCase()) {
                    this.startIntent(new public_1.IntentMoreTV.OverviewDT());
                }
                else if (item.vendor.toUpperCase() == mtv.ApplicationClient.PROVIDER_SKY.toUpperCase()) {
                    this.startIntent(new public_1.IntentMoreTV.OverviewSky());
                }
                else {
                    public_5.Logger.info(function (l) { return l(public_5.LogMsg("unknown vendor: " + item.vendor, MtvContractsPage_1.TAG)); });
                }
            }
        };
        MtvContractsPage.prototype.pinForgottenCalled = function (self) {
            public_5.Logger.debug(function (log) { return log(public_5.LogMsg("pinForgottenCalled:", MtvContractsPage_1.TAG)); });
            self.dlgActionPinForgotten = true;
        };
        MtvContractsPage.prototype.render = function () {
            var _this = this;
            var style = {};
            style[public_2.Css.names.transform] = "translate(0px, " + -1 * public_2.Css.scale(this.state.topPosition) + "px)";
            return React.createElement("div", { className: [this.ID, public_2.Css.globalStyleClasses.defaultBackgroundImage, "page", public_1.TvThemepackKeys.CSSROOT].join(" ") },
                this.state.background && React.createElement(public_1.TvBackgroundSustainer, __assign({}, this.state.background)),
                React.createElement("h1", { style: { textTransform: "uppercase" }, className: public_2.Css.fonts2.a_fo_b1_1 + " singleline-ellipsis title" },
                    public_1.Filter.message(this, public_3.messagesMtv.MYSUBSCRIPTIONS),
                    " ",
                    (this.state.focusIndex && this.state.totalCount) && React.createElement("span", { style: { textTransform: "uppercase", color: public_2.Css.colors.A_CO_6 }, className: public_2.Css.fonts2.a_fo_b1_1 },
                        "(",
                        this.state.focusIndex,
                        "/",
                        this.state.totalCount,
                        ") ")),
                (this.state.data || this.state.vendors) && React.createElement("div", { id: "contracts" },
                    React.createElement(public_1.NavigationContainer, { id: "mtvContracts#DT", strictHorizontal: true, strictVertical: false },
                        React.createElement("div", { className: "animContainer " + public_2.Css.transitions.transformShort, style: style },
                            this.state.data && React.createElement(public_1.NavigationContainer, { id: "abosGrid", className: "grid_container", autofocus: true }, this.state.data.map(function (element, x) {
                                var px = (public_4.ContentMtvTiles.Tile16x9.WIDTH + 12) * (x % 4);
                                var py = (public_4.ContentMtvTiles.Tile16x9.HEIGHT) * (Math.floor(x / 4));
                                return React.createElement(public_1.NavigationElement, { id: x.toString(), key: x.toString(), className: "tile16x9", style: public_2.declaration()
                                        .props({
                                        top: py,
                                        left: px
                                    }).toStyle(), onFocusIn: function () {
                                        _this.setState({ topPosition: py, focusIndex: x + 1 });
                                    }, onClick: function () {
                                        _this.showVendorDialog(element);
                                    } },
                                    React.createElement(public_4.ContentMtvTiles.Tile16x9, { data: { title: element.title, image: element.image, subtitle: element.subtitle, meta: element.meta } }));
                            })),
                            this.state.vendors && React.createElement("div", { id: "grid" },
                                React.createElement("p", { id: "title", className: "text " + public_2.Css.fonts2.a_fo_h6_2 }, public_1.Filter.message(this, public_3.messagesMtv.MYSUBSCRIPTIONS_VENDOROVERVIEW_TITLE)),
                                React.createElement("p", { id: "text", style: { color: public_2.Css.colors.A_CO_6 }, className: "text " + public_2.Css.fonts2.a_fo_b2__, dangerouslySetInnerHTML: { __html: public_1.Filter.message(this, public_3.messagesMtv.MYSUBSCRIPTIONS_VENDOROVERVIEW_DESCR) } }),
                                React.createElement(public_1.NavigationContainer, { id: "vendorsGrid", className: "vendors_container", autofocus: true }, this.state.vendors.map(function (vendor, x) {
                                    var px = (public_4.ContentMtvTiles.Tile16x9.WIDTH + 12) * (x % 4);
                                    var py = (public_4.ContentMtvTiles.Tile16x9.HEIGHT) * (Math.floor(x / 4));
                                    return React.createElement(public_1.NavigationElement, { id: x.toString(), key: x.toString(), className: "tile16x9", style: public_2.declaration()
                                            .props({
                                            top: py,
                                            left: px
                                        }).toStyle(), onClick: function () {
                                            _this.gotoCatalog(vendor);
                                        } },
                                        React.createElement(public_4.ContentMtvTiles.Tile16x9, { data: { title: vendor.title, image: vendor.image, subtitle: vendor.subtitle, meta: vendor.meta } }));
                                })))))),
                React.createElement(public_1.BusyIndicatorComponent, { isBusy: this.state.pageloading, delay: 0 }));
        };
        var MtvContractsPage_1;
        MtvContractsPage.classID = 0x80D;
        MtvContractsPage = MtvContractsPage_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-contracts-component",
                styles: [
                    public_2.selector("&")
                        .sub(public_2.selector(".title")
                        .props({
                        position: "absolute",
                        top: public_2.Css.dimensions.safeareaTop + 36,
                        left: public_2.Css.dimensions.safeareaLeft
                    }))
                        .sub(public_2.selector(".text")
                        .props({
                        marginBottom: 20,
                        width: 1032
                    }))
                        .sub(public_2.selector("#contracts")
                        .props({
                        position: "absolute",
                        top: public_2.Css.dimensions.safeareaTop + 140,
                        left: public_2.Css.dimensions.safeareaLeft - public_2.Css.dimensions.borderWidth,
                        width: public_2.Css.dimensions.safeareaWidth + 2 * public_2.Css.dimensions.borderWidth,
                        height: public_2.Css.dimensions.screenHeight,
                        overflow: "hidden"
                    })
                        .sub(public_2.selector(".animContainer")
                        .props({
                        position: "absolute"
                    })
                        .sub(public_2.selector(".vendors_container")
                        .props({
                        position: "absolute",
                        top: 234
                    }))
                        .sub(public_2.selector(".grid_container")
                        .props({
                        position: "absolute"
                    }))
                        .sub(public_2.selector(".tile16x9")
                        .props({
                        width: public_4.ContentMtvTiles.Tile16x9.WIDTH,
                        height: public_4.ContentMtvTiles.Tile16x9.HEIGHT,
                        overflow: "hidden",
                        display: "inline-block",
                        position: "absolute"
                    }))
                        .sub(public_2.selector(".tile16x9-component .content-subtitle")
                        .props({
                        color: public_2.Css.colors.A_CO_6
                    }))))
                ]
            }),
            public_5.logTag()
        ], MtvContractsPage);
        return MtvContractsPage;
    }(public_1.ReactBaseComponent));
    exports.MtvContractsPage = MtvContractsPage;
});
//# sourceMappingURL=contracts.page.js.map