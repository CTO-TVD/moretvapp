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
define(["require", "exports", "react", "bluebird", "src/src-de-telekom-tv-moretv/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "src/src-de-telekom-react/public", "../../translation/public", "src/src-de-telekom-app-tv-core-v2/public", "./step1.component", "./step2.component", "./step3.component", "./step4.component", "./step5.component", "./step6.component", "./alreadybooked.component", "../../component/public", "./loader", "src/src-de-telekom-tv-core/public"], function (require, exports, React, bluebird, mtv, public_1, public_2, public_3, public_4, public_5, step1_component_1, step2_component_1, step3_component_1, step4_component_1, step5_component_1, step6_component_1, alreadybooked_component_1, public_6, loader_1, public_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvSkyPurchasePage = void 0;
    var MtvSkyPurchasePage = (function (_super) {
        __extends(MtvSkyPurchasePage, _super);
        function MtvSkyPurchasePage(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.userClickedPinForgotten = false;
            _this.onLeave = function () {
                if (_this.state.step >= 6 || _this.userClickedPinForgotten) {
                    return bluebird.resolve();
                }
                var data = {
                    title: public_3.Filter.message(_this, public_4.messagesMtv.CANCEL_TITLE),
                    message: public_3.Filter.message(_this, public_4.messagesMtv.CANCEL_DESCRIPTION),
                    extraData: {}
                };
                _this.genericDialog = _this.dialogService
                    .showSystem(data, [
                    {
                        text: public_3.Filter.message(_this, public_4.messagesMtv.CANCEL_NOBUTTON),
                        autofocus: false,
                        id: "cancel"
                    },
                    {
                        text: public_3.Filter.message(_this, public_4.messagesMtv.CANCEL_YESBUTTON),
                        autofocus: true,
                        id: "confirm"
                    }
                ]);
                return _this.genericDialog
                    .result(_this)
                    .then(function (result) {
                    if (result.resultId === "confirm") {
                        mtv.ApplicationClient.clearTokenCache();
                        return;
                    }
                    throw new public_2.PromiseCancelError();
                });
            };
            _this.finishBooking = function () {
                if (!_this.state.customerData) {
                    public_2.ErrorManager.catch(new public_2.IllegalArgumentError("no customer data"), MtvSkyPurchasePage_1, 0x06);
                    return;
                }
                _this.setState({ pageloading: true });
                _this.dataHelper
                    .submitBooking({
                    agbPermission: _this.state.agbPermission,
                    customerData: _this.state.customerData,
                    marketingPermission: _this.state.marketingPermission
                })
                    .then(function (shoppingCartState) {
                    _this.setState(function (prevState) {
                        return {
                            pageloading: (shoppingCartState.Message === "OK" || shoppingCartState.Message === "KO") ? false : prevState.pageloading
                        };
                    }, function () {
                        if (shoppingCartState.Message === "OK") {
                            _this.onGoingToStep6();
                        }
                        else {
                            _this.onGoingToStep5();
                        }
                    });
                    if (shoppingCartState.Message === "KO") {
                        _this.showErrorDialog();
                    }
                })
                    .catch(function (error) {
                    public_2.Logger.error(function (log) { return log(public_2.LogMsg("finishBooking: " + error, MtvSkyPurchasePage_1.TAG)); });
                    _this.showErrorDialog();
                });
            };
            _this.onGoingToStep1 = function () {
                _this.setState({ step: 1 }, function () { return !_this.destroyed && _this.startIntent(new public_3.IntentMoreTV.PurchaseSkyStep1({ id: _this.packageId }), { type: "replace" }); });
            };
            _this.onGoingToStep2 = function (manualFill) {
                if (manualFill == false) {
                    _this.getCostumerData();
                }
                else {
                    _this.setState(function (prevState) { return ({
                        step: 2,
                        customerData: prevState.customerData || {}
                    }); }, function () { return !_this.destroyed && _this.startIntent(new public_3.IntentMoreTV.PurchaseSkyStep2({ id: _this.packageId })); });
                }
            };
            _this.onGoingToStep3 = function () {
                _this.setState({ step: 3 }, function () { return !_this.destroyed && _this.startIntent(new public_3.IntentMoreTV.PurchaseSkyStep3({ id: _this.packageId })); });
            };
            _this.onGoingToStep4 = function () {
                _this.setState({ step: 4 }, function () { return !_this.destroyed && _this.startIntent(new public_3.IntentMoreTV.PurchaseSkyStep4({ id: _this.packageId })); });
            };
            _this.onGoingToStep5 = function () {
                _this.setState({ step: 5 }, function () { return !_this.destroyed && _this.startIntent(new public_3.IntentMoreTV.PurchaseSkyStep5({ id: _this.packageId })); });
            };
            _this.onGoingToStep6 = function () {
                _this.setState({ step: 6, pageloading: false }, function () { return !_this.destroyed && _this.startIntent(new public_3.IntentMoreTV.PurchaseSkyStep6({ id: _this.packageId })); });
            };
            var intent = new public_3.IntentMoreTV.PurchaseSky(_this.location.intent.data);
            _this.packageId = intent.data.id;
            _this.dataHelper = new loader_1.SkyPurchaseDataLoader(intent.data.id);
            var closableEvent = _this.props.events.onLeave(_this.onLeave);
            _this.onDestroy(function () {
                closableEvent();
            });
            _this.dialogService = public_3.TVDialogHostService.getInstance();
            _this.uarService = public_5.UarService.getInstance();
            _this.closePinForgotten = _this.uarService.registerPinForgotten(function () {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("pinForgottenCalled: ", MtvSkyPurchasePage_1.TAG)); });
                _this.userClickedPinForgotten = true;
                return bluebird.resolve(undefined);
            });
            _this.state = {
                step: 0,
                agbPermission: false,
                marketingPermission: false,
                pageloading: true
            };
            return _this;
        }
        MtvSkyPurchasePage_1 = MtvSkyPurchasePage;
        MtvSkyPurchasePage.prototype.componentDidMount = function () {
            var _this = this;
            if (this.dataHelper) {
                this.dataHelper
                    .isSkyCustomer()
                    .then(function (isSkyCustomer) {
                    if (!isSkyCustomer) {
                        _this.loadMetaData();
                    }
                    else if (_this.dataHelper) {
                        _this.dataHelper
                            .getCatalogMetadata()
                            .then(function (meta) {
                            return _this.setState(__assign(__assign({}, meta), { pageloading: false, step: 997 }), function () { return !_this.destroyed && _this.startIntent(new public_3.IntentMoreTV.PurchaseSkyAlreadyBooked(), { type: "replace" }); });
                        })
                            .catch(public_2.ErrorManager.catchFunc(MtvSkyPurchasePage_1, 0x01));
                    }
                })
                    .catch(function (error) {
                    public_2.Logger.error(function (log) { return log(public_2.LogMsg("" + public_2.StringTools.dataStringify(error), MtvSkyPurchasePage_1.TAG)); });
                    _this.showErrorDialog();
                });
            }
            else {
                public_2.ErrorManager.catch(new public_2.IllegalArgumentError("loader has not been inialized due to lack of parameter"), MtvSkyPurchasePage_1, 0x02);
            }
        };
        MtvSkyPurchasePage.prototype.componentWillUnmount = function () {
            if (this.genericDialog) {
                this.genericDialog.closeDialogWithResult({ resultId: "aborted" });
            }
        };
        MtvSkyPurchasePage.prototype.loadMetaData = function () {
            var _this = this;
            bluebird
                .all([
                this.dataHelper.getCatalogMetadata(),
                this.dataHelper.getPackage()
            ])
                .then(function (_a) {
                var catalog = _a[0], packet = _a[1];
                _this.setState(__assign(__assign({}, catalog), { package: packet, pageloading: false }), _this.onGoingToStep1);
            })
                .catch(function () {
                public_2.Logger.error(function (log) { return log(public_2.LogMsg("error getting metadata", MtvSkyPurchasePage_1.TAG)); });
                _this.showErrorDialog();
            });
        };
        MtvSkyPurchasePage.prototype.getCostumerData = function () {
            var _this = this;
            this.userClickedPinForgotten = false;
            this.setState({ pageloading: true });
            this.dataHelper
                .getCustomerData()
                .then(function (customerdata) {
                _this.setState({
                    customerData: customerdata,
                    pageloading: false
                }, _this.onGoingToStep2);
            })
                .catch(function (error) {
                public_2.Logger.error(function (log) { return log(public_2.LogMsg("getCostumerData: " + error, MtvSkyPurchasePage_1.TAG)); });
                _this.setState({ pageloading: false });
                if (error instanceof public_2.ClientAuthorizationRequiredError || error instanceof public_7.ZacAuthenticationProcessError) {
                }
                else {
                    _this.showErrorDialog();
                }
                _this.setState({ pageloading: false });
            });
        };
        MtvSkyPurchasePage.prototype.render = function () {
            var _this = this;
            var _a;
            return React.createElement("div", { className: [this.ID, public_1.Css.globalStyleClasses.defaultBackgroundImage, public_3.TvThemepackKeys.CSSROOT].join(" ") },
                React.createElement(public_3.TvBackgroundSustainer, { image: (_a = this.state.background) === null || _a === void 0 ? void 0 : _a.image }),
                React.createElement(public_3.TvThemepack, { data: this.state.themepack }),
                React.createElement("div", { style: { display: this.state.pageloading ? "none" : "initial" } },
                    React.createElement(public_3.Route, { path: public_3.IntentMoreTV.PurchaseSkyAlreadyBooked, render: function () { return React.createElement(alreadybooked_component_1.MtvSkyPurchaseAlreadyBooked, { logo: _this.state.logo }); } }),
                    React.createElement(public_3.Route, { path: public_3.IntentMoreTV.PurchaseSkyStep1, render: function () { return React.createElement(step1_component_1.MtvSkyPurchaseStep1Page, { catalog: _this.state.catalog, package: _this.state.package, customerdata: _this.state.customerData, next: function (ev) { return _this.onGoingToStep2(ev.manualFill); } }); } }),
                    React.createElement(public_3.Route, { path: public_3.IntentMoreTV.PurchaseSkyStep2, render: function () { return React.createElement(step2_component_1.MtvSkyPurchaseStep2Page, { catalog: _this.state.catalog, package: _this.state.package, customerdata: _this.state.customerData, next: _this.onGoingToStep3 }); } }),
                    React.createElement(public_3.Route, { path: public_3.IntentMoreTV.PurchaseSkyStep3, render: function () { return React.createElement(step3_component_1.MtvSkyPurchaseStep3Page, { catalog: _this.state.catalog, package: _this.state.package, customerdata: _this.state.customerData, next: _this.onGoingToStep4, onError: _this.showErrorDialog }); } }),
                    React.createElement(public_3.Route, { path: public_3.IntentMoreTV.PurchaseSkyStep4, render: function () { return React.createElement(step4_component_1.MtvSkyPurchaseStep4Page, { catalog: _this.state.catalog, package: _this.state.package, customerdata: _this.state.customerData, next: _this.onGoingToStep5, onError: _this.showErrorDialog, agbPermission: _this.state.agbPermission, agbPermissionClicked: function () { return _this.setState(function (prevState) { return ({ agbPermission: !prevState.agbPermission }); }); }, marketingPermission: _this.state.marketingPermission, marketingPermissionClicked: function () { return _this.setState(function (prevState) { return ({ marketingPermission: !prevState.marketingPermission }); }); } }); } }),
                    React.createElement(public_3.Route, { path: public_3.IntentMoreTV.PurchaseSkyStep5, render: function () { return React.createElement(step5_component_1.MtvSkyPurchaseStep5Page, { catalog: _this.state.catalog, package: _this.state.package, customerdata: _this.state.customerData, next: _this.finishBooking }); } }),
                    React.createElement(public_3.Route, { path: public_3.IntentMoreTV.PurchaseSkyStep6, render: function () { return React.createElement(step6_component_1.MtvSkyPurchaseStep6Page, { catalog: _this.state.catalog, package: _this.state.package, customerdata: _this.state.customerData }); } })),
                React.createElement(public_3.BusyIndicatorComponent, { isBusy: this.state.pageloading }));
        };
        MtvSkyPurchasePage.prototype.showErrorDialog = function (error) {
            var _this = this;
            public_2.Logger.debug(function (log) { return log(public_2.LogMsg("SHOW DIALOG for error code " + error, MtvSkyPurchasePage_1.TAG)); });
            this.genericDialog = error
                ? public_6.MtvMessageOverlayComponent.createDialogByError({ error: error })
                : public_6.MtvMessageOverlayComponent.createSkyDialog();
            this.genericDialog
                .result(this)
                .then(function (result) {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("MTVGenericErrorComponent dialog closed with result " + result.resultId + " ", MtvSkyPurchasePage_1.TAG)); });
                _this.setState({ step: 998 }, function () { return _this.startIntent(undefined, { type: "exit" }); });
            })
                .catch(function (error) {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("showDialogClick: dialog aborted -> " + error + " ", MtvSkyPurchasePage_1.TAG)); });
                _this.setState({ step: 999 }, function () { return _this.startIntent(undefined, { type: "exit" }); });
            });
        };
        var MtvSkyPurchasePage_1;
        MtvSkyPurchasePage.classID = 0x505;
        MtvSkyPurchasePage = MtvSkyPurchasePage_1 = __decorate([
            public_3.reactComponent({
                ID: "mtv-skypurchase-page",
                styles: [
                    public_1.selector("&")
                        .props({
                        width: public_1.Css.dimensions.screenWidth,
                        height: public_1.Css.dimensions.screenHeight
                    })
                        .sub(public_1.selector(".headline")
                        .props({
                        textAlign: "center",
                        marginBottom: 15
                    }))
                        .sub(public_1.selector(".Booking_AuthorizationText")
                        .props({
                        marginTop: 24,
                        marginBottom: 55
                    }))
                        .sub(public_1.selector("& hr")
                        .props({
                        borderWidth: 2,
                        borderColor: public_1.Css.colors.A_CO_5
                    }))
                ]
            }),
            public_2.logTag()
        ], MtvSkyPurchasePage);
        return MtvSkyPurchasePage;
    }(public_3.ReactBaseComponent));
    exports.MtvSkyPurchasePage = MtvSkyPurchasePage;
});
//# sourceMappingURL=sky_purchase.page.js.map