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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define(["require", "exports", "bluebird", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom-app-tv-core-v2/public", "src/src-de-telekom-tv-moretv/public", "../util/public", "src/src-de-telekom/public", "../../translation/public", "./dt_purchasestep_opt1", "./dt_purchasestep_opt2", "./dt_purchasestep1", "./dt_purchasestep2", "./dt_purchasestep3", "../../component/public", "./business_error.dialog", "src/src-de-telekom-tv-core/public"], function (require, exports, bluebird, React, public_1, public_2, public_3, mtv, util, public_4, public_5, dt_purchasestep_opt1_1, dt_purchasestep_opt2_1, dt_purchasestep1_1, dt_purchasestep2_1, dt_purchasestep3_1, public_6, business_error_dialog_1, public_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvDtPurchasePage = void 0;
    var MtvDtPurchasePage = (function (_super) {
        __extends(MtvDtPurchasePage, _super);
        function MtvDtPurchasePage(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.onCancel = function () {
                _this.startIntent(undefined, { type: "backward" });
            };
            _this.onFinish = function () {
                _this.startIntent(undefined, { type: "backward" });
            };
            _this.onNext = function () {
                var step = _this.state.step + 1;
                for (var index = step - 1; index < _this.state.contexts.length; index++) {
                    if (_this.state.contexts[index].enabled == false) {
                        step = step + 1;
                    }
                    else
                        break;
                }
                _this.setState({ step: step }, function () {
                    if (_this.state.step == 5) {
                        _this.setState({ pageloading: true });
                        _this.confirmBooking();
                    }
                    else {
                        _this.renderSteps(_this.state.step);
                    }
                });
            };
            _this.onBack = function () {
                var step = _this.state.step - 1;
                for (var index = _this.state.step - 1; index >= 0; index--) {
                    if (_this.state.contexts[index].enabled == false) {
                        step = step - 1;
                    }
                    else
                        break;
                }
                _this.setState({ step: step }, function () { return _this.renderSteps(step); });
            };
            _this.changeOptionAccepted = function (option, isChecked, ctxt) {
                var newContexts = __spreadArrays(_this.state.contexts);
                newContexts[ctxt].optionsAccepted[option] = isChecked;
                _this.setState({ contexts: newContexts }, function () {
                    public_4.Logger.debug(function (log) { return log(public_4.LogMsg("accepted option: '" + _this.state.contexts[ctxt].optionsAccepted[option] + "'", MtvDtPurchasePage_1.TAG)); });
                });
            };
            _this.dialogService = public_1.TVDialogHostService.getInstance();
            _this.notificationService = public_1.TVNotificationService.getInstance();
            _this.uarService = public_3.UarService.getInstance();
            _this.closePinForgotten = _this.uarService.registerPinForgotten(function () {
                _this.pinForgottenCalled(_this);
                return bluebird.resolve(undefined);
            });
            _this.dlgActionPinForgotten = false;
            var intent = new public_1.IntentMoreTV.PurchaseDT(_this.location.intent.data);
            _this.packageId = intent.data.id || "";
            _this.mtv_token = intent.data.token;
            _this.state = {
                pageloading: true,
                background: { image: undefined },
                step: 0,
                contexts: [],
                transactionId: undefined,
                auth: {
                    dialogDataCallback: function () { return ({
                        contentId: "12345789",
                        dialogTitle: public_1.Filter.message(_this, public_5.messagesMtv.PURCHASE_PINDIALOG_TITLE),
                        dialogParagraph1: public_1.Filter.message(_this, public_5.messagesMtv.PURCHASE_PINDIALOG_P1),
                        dialogParagraph2: public_1.Filter.message(_this, public_5.messagesMtv.PURCHASE_PINDIALOG_P2),
                        version: "0.1",
                        dialogId: "2",
                        navigateBackAtCancel: true
                    }); },
                    force: _this.location.state != null ? false : true,
                    acr: "userpin"
                }
            };
            return _this;
        }
        MtvDtPurchasePage_1 = MtvDtPurchasePage;
        MtvDtPurchasePage.prototype.pinForgottenCalled = function (self) {
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("pinForgottenCalled:", MtvDtPurchasePage_1.TAG)); });
            self.dlgActionPinForgotten = true;
        };
        MtvDtPurchasePage.prototype.componentDidMount = function () {
            mtv.ApplicationClient.clearTokenCache();
            this.prepareBooking();
        };
        MtvDtPurchasePage.prototype.componentWillUnmount = function () {
            mtv.ApplicationClient.clearTokenCache();
        };
        Object.defineProperty(MtvDtPurchasePage.prototype, "TransferPage", {
            get: function () {
                var _a, _b;
                return ((_b = (_a = this.state.package) === null || _a === void 0 ? void 0 : _a.CustomValues) === null || _b === void 0 ? void 0 : _b.DataTransfer) ? 1 : 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MtvDtPurchasePage.prototype, "PartnerPage", {
            get: function () {
                var _a, _b;
                return ((_b = (_a = this.state.package) === null || _a === void 0 ? void 0 : _a.CustomValues) === null || _b === void 0 ? void 0 : _b.Partner) ? 1 : 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MtvDtPurchasePage.prototype, "TermsOfUsePage", {
            get: function () {
                var _a, _b;
                return ((_b = (_a = this.state.package) === null || _a === void 0 ? void 0 : _a.CustomValues) === null || _b === void 0 ? void 0 : _b.TermsOfUse) ? 1 : 0;
            },
            enumerable: false,
            configurable: true
        });
        MtvDtPurchasePage.prototype.confirmBooking = function () {
            var _this = this;
            if (this.state.transactionId) {
                mtv.ApplicationClient.confirmBooking(this.state.transactionId, this.packageId, this.state.auth, this.mtv_token)
                    .then(function (value) {
                    _this.resolveConfirmBooking(value);
                })
                    .catch(function (error) {
                    if (error instanceof mtv.MtvBackendError) {
                        public_1.DiagnosticNotificationComponent.notify("DtBooking: failed", error.statusCode + " - " + error.backendCode);
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("confirmBooking failed: " + error.statusCode + " - " + error.backendCode + "}", MtvDtPurchasePage_1.TAG)); });
                    }
                    else {
                        public_1.DiagnosticNotificationComponent.notify("DtBooking failed: " + JSON.stringify(error));
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("confirmBooking failed: " + JSON.stringify(error), MtvDtPurchasePage_1.TAG)); });
                    }
                    _this.setState({ pageloading: false });
                    _this.showErrorDialog();
                });
            }
            else {
                public_1.DiagnosticNotificationComponent.notify("DtBooking failed: Missing transactionID");
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("confirmBooking failed: Missing transactionID", MtvDtPurchasePage_1.TAG)); });
                this.setState({ pageloading: false });
                this.showErrorDialog();
            }
        };
        MtvDtPurchasePage.prototype.showTermOfUseDialog = function (termsOfUseId) {
            var _this = this;
            mtv.ApplicationClient
                .getTermsOfUse(termsOfUseId)
                .then(function (termsOfUse) {
                var infoDialogData;
                if (termsOfUse) {
                    infoDialogData = {
                        title: termsOfUse.Title,
                        message: termsOfUse.Content,
                        customClass: "text-alignLeft",
                        extraData: "<div class='text'>" + termsOfUse.Content + "</div>",
                        ignoreSafeArea: true
                    };
                }
                else {
                    infoDialogData = {
                        title: "Dokument konnte nicht gefunden werden.",
                        message: "",
                        customClass: "text-alignLeft",
                        extraData: "",
                        ignoreSafeArea: true
                    };
                }
                public_1.TVDialogHostService.getInstance()
                    .show(infoDialogData, public_3.InfoDialogComponent)
                    .result(_this)
                    .catch(function (error) {
                    public_4.Logger.debug(function (log) { return log(public_4.LogMsg("showDialogClick: dialog aborted -> " + error, MtvDtPurchasePage_1.TAG)); });
                });
            })
                .catch(function (error) {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("ERROR: Show DT Catalog: " + error.message, MtvDtPurchasePage_1.TAG)); });
                public_4.ErrorManager.catch(error, MtvDtPurchasePage_1, 0x01);
                _this.showErrorDialog();
            });
        };
        MtvDtPurchasePage.prototype.handleInfoKey = function () {
            if (this.state.step < 4) {
                this.showTermOfUseDialog(this.state.termsOfUse || "");
                return true;
            }
            return false;
        };
        MtvDtPurchasePage.prototype.resolveConfirmBooking = function (data) {
            var _this = this;
            if (data.HttpStatusCode === 200) {
                if (data.State === "done") {
                    public_4.Logger.debug(function (log) { return log(public_4.LogMsg("resolveConfirmBooking: state -> " + data.State, MtvDtPurchasePage_1.TAG)); });
                    this.setState({
                        pageloading: false,
                        booking: data,
                        step: 5
                    }, function () { return _this.startIntent(new public_1.IntentMoreTV.PurchaseStep3(), { type: "replace" }); });
                }
            }
            if (data.HttpStatusCode === 202) {
                if (this.state.isDestroying) {
                    throw new public_4.PromiseCancelError();
                }
                switch (data.State) {
                    case "starting":
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("resolveConfirmBooking: state -> " + data.State, MtvDtPurchasePage_1.TAG)); });
                    case "started":
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("resolveConfirmBooking: state -> " + data.State, MtvDtPurchasePage_1.TAG)); });
                        var transactionId_1 = this.state.transactionId;
                        if (!this.state.isDestroying && transactionId_1) {
                            setTimeout(function () {
                                if (!_this.destroyed) {
                                    mtv.ApplicationClient.confirmBooking(transactionId_1, _this.packageId, _this.state.auth, _this.mtv_token)
                                        .then(function (value) {
                                        _this.resolveConfirmBooking(value);
                                    })
                                        .catch(function (error) {
                                        if (error instanceof mtv.MtvBackendError) {
                                            _this.handleConfirmBookingErrors(error);
                                            public_1.DiagnosticNotificationComponent.notify("DtBooking: failed", error.statusCode + " - " + error.backendCode);
                                            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("confirmBooking failed: " + error.statusCode + " - " + error.backendCode + "}", MtvDtPurchasePage_1.TAG)); });
                                        }
                                        else {
                                            public_1.DiagnosticNotificationComponent.notify("DtBooking failed: " + JSON.stringify(error));
                                            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("confirmBooking failed: " + JSON.stringify(error), MtvDtPurchasePage_1.TAG)); });
                                            _this.setState({ pageloading: false });
                                            _this.showErrorDialog();
                                        }
                                    });
                                }
                            }, 1000);
                        }
                        else if (!transactionId_1) {
                            public_1.DiagnosticNotificationComponent.notify("DtBooking failed: Missing transactionID");
                            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("confirmBooking failed: Missing transactionID", MtvDtPurchasePage_1.TAG)); });
                            this.setState({ pageloading: false });
                            this.showErrorDialog();
                        }
                        break;
                    case "exception":
                        public_4.Logger.warn(function (log) { return log(public_4.LogMsg("confirmBooking failed: state -> " + data.State + " for packageId: " + _this.packageId, MtvDtPurchasePage_1.TAG)); });
                        this.setState({ pageloading: false });
                        this.showErrorDialog();
                        break;
                    default:
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("resolveConfirmBooking: state -> " + data.State, MtvDtPurchasePage_1.TAG)); });
                        break;
                }
            }
        };
        MtvDtPurchasePage.prototype.handleConfirmBookingErrors = function (e) {
            switch (e.statusCode) {
                case 400: {
                    if (e.state === "error") {
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("resolveConfirmBooking: state -> " + e.state, MtvDtPurchasePage_1.TAG)); });
                        switch (e.backendCode) {
                            case "ERROR_BACKEND_SYSTEM":
                                public_4.Logger.error(function (log) { return log(public_4.LogMsg("resolveConfirmBooking: Invalid request.", MtvDtPurchasePage_1.TAG)); });
                                break;
                            case "ERROR_TRANSACTION_INVALID":
                                public_4.Logger.error(function (log) { return log(public_4.LogMsg("resolveConfirmBooking: Invalid transaction.", MtvDtPurchasePage_1.TAG)); });
                                break;
                            default:
                                public_4.Logger.error(function (log) { return log(public_4.LogMsg("resolvePrepareBooking: code ->  " + e.backendCode + ". Unknown error.", MtvDtPurchasePage_1.TAG)); });
                        }
                        this.setState({ pageloading: false });
                        this.showErrorDialog();
                    }
                    break;
                }
                case 404: {
                    this.setState({ transactionId: undefined });
                    this.prepareBooking();
                    break;
                }
                case 500: {
                    if (e.state === "exception" || e.state === "undefined") {
                        public_4.Logger.error(function (log) { return log(public_4.LogMsg("resolveConfirmBooking: state -> " + e.state, MtvDtPurchasePage_1.TAG)); });
                        this.setState({ pageloading: false });
                        this.showErrorDialog();
                    }
                    break;
                }
                default: {
                    public_4.Logger.error(function (log) { return log(public_4.LogMsg("resolveConfirmBooking: statuscode ->  " + e.statusCode + ". Unknown error. (" + e.backendCode + ")", MtvDtPurchasePage_1.TAG)); });
                    this.setState({ pageloading: false });
                    this.showErrorDialog();
                    break;
                }
            }
        };
        MtvDtPurchasePage.prototype.resolvePrepareBooking = function (data) {
            var _this = this;
            var step;
            public_1.DiagnosticNotificationComponent.notify("DtBooking: " + data.HttpStatusCode, data.State + " " + data.Errorcode);
            if (data.HttpStatusCode === 200) {
                if (data.State === "done") {
                    public_4.Logger.debug(function (log) { return log(public_4.LogMsg("resolvePrepareBooking: state -> " + data.State, MtvDtPurchasePage_1.TAG)); });
                    var newState = {
                        booking: data,
                        price: data.Pricepermonth,
                        transactionId: data.TransactionId,
                        pageloading: this.state.step === 4,
                        step: this.state.step
                    };
                    if (this.state.step === 4) {
                        this.setState(newState, function () {
                            _this.renderSteps(4);
                            _this.confirmBooking();
                        });
                    }
                    else {
                        if (!this.state.step) {
                            step = 1;
                            for (var _i = 0, _a = this.state.contexts; _i < _a.length; _i++) {
                                var k = _a[_i];
                                if (k.enabled) {
                                    break;
                                }
                                else {
                                    step++;
                                }
                            }
                            newState.step = step;
                        }
                        this.setState(newState, function () { return _this.renderSteps(step); });
                    }
                }
            }
            if (data.HttpStatusCode === 202) {
                if (this.state.isDestroying) {
                    throw new public_4.PromiseCancelError();
                }
                switch (data.State) {
                    case "starting":
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("resolvePrepareBooking: state -> " + data.State, MtvDtPurchasePage_1.TAG)); });
                    case "started":
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("resolvePrepareBooking: state -> " + data.State, MtvDtPurchasePage_1.TAG)); });
                        if (!this.state.isDestroying) {
                            setTimeout(function () {
                                if (!_this.destroyed) {
                                    return mtv.ApplicationClient.prepareBooking(_this.packageId, _this.state.auth, _this.mtv_token)
                                        .then(function (value) {
                                        _this.resolvePrepareBooking(value);
                                    })
                                        .catch(function (error) {
                                        if (error instanceof mtv.MtvBackendError) {
                                            _this.handlePrepareBookingErrors(error);
                                            public_1.DiagnosticNotificationComponent.notify("DtBooking: failed", error.statusCode + " - " + error.backendCode);
                                            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("prepareBooking failed: " + error.statusCode + " - " + error.backendCode + "}", MtvDtPurchasePage_1.TAG)); });
                                        }
                                        else {
                                            public_1.DiagnosticNotificationComponent.notify("DtBooking failed: " + JSON.stringify(error));
                                            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("prepareBooking failed: " + JSON.stringify(error), MtvDtPurchasePage_1.TAG)); });
                                            _this.showErrorDialog();
                                            _this.setState({ pageloading: false });
                                        }
                                    });
                                }
                                else
                                    return undefined;
                            }, 1000);
                        }
                        break;
                    case "exception":
                        public_4.Logger.warn(function (log) { return log(public_4.LogMsg("PrepareBooking failed: state -> " + data.State + " for packageId: " + _this.packageId, MtvDtPurchasePage_1.TAG)); });
                        this.setState({ pageloading: false });
                        this.showErrorDialog();
                        break;
                    default:
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("resolvePrepareBooking: state -> " + data.State, MtvDtPurchasePage_1.TAG)); });
                        break;
                }
            }
        };
        MtvDtPurchasePage.prototype.handlePrepareBookingErrors = function (e) {
            var _this = this;
            switch (e.statusCode) {
                case 400: {
                    if (e.state === "error") {
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("resolvePrepareBooking: state -> " + e.state, MtvDtPurchasePage_1.TAG)); });
                        var handled = false;
                        switch (e.backendCode) {
                            case "ERROR_BACKEND_SYSTEM":
                                public_4.Logger.error(function (log) { return log(public_4.LogMsg("resolvePrepareBooking: Contract error backend system.", MtvDtPurchasePage_1.TAG)); });
                                break;
                            case "ERROR_BOOKING_CONDITION":
                                public_4.Logger.error(function (log) { return log(public_4.LogMsg("resolvePrepareBooking: Error booking condition. productId: " + _this.packageId, MtvDtPurchasePage_1.TAG)); });
                                handled = true;
                                this.showBusinessErrorDialog(util.convertMTVErrors(e));
                                break;
                            case "ERROR_BOOKING_MAX_NUMBER":
                                public_4.Logger.error(function (log) { return log(public_4.LogMsg("resolvePrepareBooking: Error booking max number.", MtvDtPurchasePage_1.TAG)); });
                                handled = true;
                                this.showBusinessErrorDialog(mtv.MTVErrorCode.ERROR_BOOKING_CONDITION);
                                break;
                            case "ERROR_PRODUCT_ID_UNKNOWN":
                                public_4.Logger.error(function (log) { return log(public_4.LogMsg("resolvePrepareBooking: Error product id unknown. productId: " + _this.packageId, MtvDtPurchasePage_1.TAG)); });
                                break;
                            case "ERROR_ACCESS_DENIED":
                                public_4.Logger.error(function (log) { return log(public_4.LogMsg("resolvePrepareBooking: Error access denied.", MtvDtPurchasePage_1.TAG)); });
                                break;
                            default:
                                public_4.Logger.error(function (log) { return log(public_4.LogMsg("resolvePrepareBooking: statuscode ->  " + e.statusCode + ". Unknown error. (" + e.backendCode + ") productId: " + _this.packageId, MtvDtPurchasePage_1.TAG)); });
                        }
                        this.setState({ pageloading: false });
                        if (!handled) {
                            this.showErrorDialog();
                        }
                    }
                    break;
                }
                case 500: {
                    if (e.state === "exception" || e.state === "undefined") {
                        public_4.Logger.error(function (log) { return log(public_4.LogMsg("resolvePrepareBooking: state -> " + e.state, MtvDtPurchasePage_1.TAG)); });
                        this.setState({ pageloading: false });
                        this.showErrorDialog();
                    }
                    break;
                }
                default: {
                    public_4.Logger.error(function (log) { return log(public_4.LogMsg("resolvePrepareBooking: statuscode ->  " + e.statusCode + ". Unknown error. (" + e.backendCode + ")", MtvDtPurchasePage_1.TAG)); });
                    this.setState({ pageloading: false });
                    this.showErrorDialog();
                }
            }
        };
        MtvDtPurchasePage.prototype.prepareBooking = function () {
            var _this = this;
            this.setState({ pageloading: true });
            mtv.ApplicationClient
                .getPackage(this.packageId)
                .then(function (tvpackage) {
                var _a;
                if (!tvpackage) {
                    throw new public_4.IllegalArgumentError("package '" + _this.packageId + "' could not be found");
                }
                _this.setState({ package: tvpackage, termsOfUse: tvpackage.TermsOfUse });
                var Transfer = _this.TransferPage;
                var Partner = _this.PartnerPage;
                var TermsOfUse = _this.TermsOfUsePage;
                var Total = 2 + Transfer + Partner + TermsOfUse;
                var transfersAccepted = [];
                var partnerAccepted = [];
                var touAccepted = [];
                if (transfersAccepted.length == 0 && tvpackage.CustomValues) {
                    transfersAccepted = [];
                    if ((_a = tvpackage.CustomValues.DataTransfer) === null || _a === void 0 ? void 0 : _a.Opt1) {
                        transfersAccepted.push(false);
                        if (tvpackage.CustomValues.DataTransfer.Opt2) {
                            transfersAccepted.push(false);
                        }
                    }
                    if (partnerAccepted.length == 0 && tvpackage.CustomValues.Partner && tvpackage.CustomValues.Partner.Opt1) {
                        partnerAccepted = [];
                        partnerAccepted.push(false);
                        if (tvpackage.CustomValues.Partner.Opt2) {
                            partnerAccepted.push(false);
                        }
                    }
                    if (touAccepted.length == 0 && tvpackage.CustomValues.TermsOfUse && tvpackage.CustomValues.TermsOfUse.Opt1) {
                        touAccepted = [];
                        touAccepted.push(false);
                        if (tvpackage.CustomValues.TermsOfUse.Opt2) {
                            touAccepted.push(false);
                        }
                    }
                }
                _this.setState({
                    contexts: [
                        { enabled: Transfer ? true : false, step: 1, total: Total, cancel: _this.onCancel, next: _this.onNext, back: undefined, optionsAccepted: transfersAccepted },
                        { enabled: Partner ? true : false, step: 1 + Transfer, total: Total, cancel: _this.onCancel, next: _this.onNext, back: Transfer ? _this.onBack : undefined, optionsAccepted: partnerAccepted },
                        { enabled: TermsOfUse ? true : false, step: 1 + Transfer + Partner, total: Total, cancel: _this.onCancel, next: _this.onNext, back: Transfer || Partner ? _this.onBack : undefined, optionsAccepted: touAccepted },
                        { enabled: true, step: 1 + TermsOfUse + Transfer + Partner, total: Total, cancel: _this.onCancel, next: _this.onNext, back: Transfer || Partner || TermsOfUse ? _this.onBack : undefined, optionsAccepted: [] },
                        { enabled: true, step: 2 + TermsOfUse + Transfer + Partner, total: Total, cancel: undefined, next: _this.onFinish, back: _this.onBack, optionsAccepted: [] }
                    ]
                });
                return mtv.ApplicationClient.prepareBooking(_this.packageId, _this.state.auth, _this.mtv_token);
            })
                .then(function (value) {
                _this.resolvePrepareBooking(value);
            })
                .catch(function (error) {
                if (error instanceof public_4.PromiseCancelError) {
                    throw error;
                }
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("prepareBooking: state -> {}", MtvDtPurchasePage_1.TAG)); });
                if (error instanceof public_4.ClientAuthorizationRequiredError || error instanceof public_7.ZacAuthenticationProcessError) {
                    if (_this.dlgActionPinForgotten) {
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("Pin Dialog canceled via Pin forgotten", MtvDtPurchasePage_1.TAG)); });
                    }
                    else {
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("Navigating Back", MtvDtPurchasePage_1.TAG)); });
                        _this.startIntent(undefined, { type: "backward" });
                    }
                }
                else {
                    _this.showErrorDialog();
                }
            });
        };
        MtvDtPurchasePage.prototype.renderSteps = function (step) {
            var _this = this;
            switch (step) {
                case 1: {
                    this.setState({ pageloading: false }, function () { return _this.startIntent(new public_1.IntentMoreTV.PurchaseStepOpt1(), { type: "replace" }); });
                    break;
                }
                case 2: {
                    this.setState({ pageloading: false }, function () { return _this.startIntent(new public_1.IntentMoreTV.PurchaseStepOpt2(), { type: "replace" }); });
                    break;
                }
                case 3: {
                    this.setState({ pageloading: false }, function () { return _this.startIntent(new public_1.IntentMoreTV.PurchaseStep1(), { type: "replace" }); });
                    break;
                }
                case 4: {
                    this.setState({ pageloading: false }, function () { return _this.startIntent(new public_1.IntentMoreTV.PurchaseStep2(), { type: "replace" }); });
                    break;
                }
                case 5: {
                    this.setState({ pageloading: false }, function () { return _this.startIntent(new public_1.IntentMoreTV.PurchaseStep3(), { type: "replace" }); });
                    break;
                }
                default:
                    public_4.Logger.debug(function (log) { return log(public_4.LogMsg("Unknown step value '" + step + "'", MtvDtPurchasePage_1.TAG)); });
                    break;
            }
        };
        MtvDtPurchasePage.prototype.showErrorDialog = function (error) {
            var _this = this;
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("SHOW DIALOG for error code " + error, MtvDtPurchasePage_1.TAG)); });
            var genericDialog = public_6.MtvMessageOverlayComponent.createDialogByError({ error: error });
            genericDialog
                .result(this)
                .then(function (result) {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("MTVGenericErrorComponent dialog closed with result " + result.resultId + " ", MtvDtPurchasePage_1.TAG)); });
                _this.setState({ step: 998 }, function () { return _this.startIntent(undefined, { type: "exit" }); });
            })
                .catch(function (error) {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("showDialogClick: dialog aborted -> " + error + " ", MtvDtPurchasePage_1.TAG)); });
                _this.setState({ step: 999 }, function () { return _this.startIntent(undefined, { type: "exit" }); });
            });
        };
        MtvDtPurchasePage.prototype.showBusinessErrorDialog = function (code) {
            var _this = this;
            mtv.ApplicationClient.getCatalog(mtv.ApplicationClient.PROVIDER_DT)
                .then(function (vendor) {
                var _a;
                var hotline = ((_a = vendor === null || vendor === void 0 ? void 0 : vendor.CustomValues) === null || _a === void 0 ? void 0 : _a.Hotline) ? vendor.CustomValues.Hotline : public_1.Filter.message(_this, public_5.messagesMtv.dt_PHONE);
                _this.createBusinessErrorDialog(hotline, code);
            })
                .timeout(200)
                .catch(function (error) {
                var hotline = public_1.Filter.message(_this, public_5.messagesMtv.dt_PHONE);
                _this.createBusinessErrorDialog(hotline, code);
            });
        };
        MtvDtPurchasePage.prototype.createBusinessErrorDialog = function (hotline, errorcode) {
            var _this = this;
            var extraData = { telephone: hotline, footnote: public_1.Filter.message(this, public_5.messagesMtv.dt_PHONE_COMMENT), showQrCode: this.showQrCodeforBusinessError(errorcode) };
            var title = public_1.Filter.message(this, public_5.messagesMtv.dt_ERROR_BOOKING_CONDITION_TITLE);
            var message = public_1.Filter.message(this, this.mapBusinessErrorTotext(errorcode));
            var genericDialog = business_error_dialog_1.MtvBusinessErrorDialog.createBusinessErrorDialog(this.dialogService, extraData, title, message);
            genericDialog
                .result(this)
                .then(function (result) {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("MTVGenericErrorComponent dialog closed with result " + result.resultId + " ", MtvDtPurchasePage_1.TAG)); });
                _this.setState({ step: 998 }, function () { return _this.startIntent(undefined, { type: "exit" }); });
            })
                .catch(function (error) {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("showDialogClick: dialog aborted -> " + error + " ", MtvDtPurchasePage_1.TAG)); });
                _this.setState({ step: 999 }, function () { return _this.startIntent(undefined, { type: "exit" }); });
            });
        };
        MtvDtPurchasePage.prototype.mapBusinessErrorTotext = function (errorcode) {
            switch (errorcode) {
                case mtv.MTVErrorCode.ERROR_BOOKING_CONDITION_EMAIL: return public_5.messagesMtv.dt_ERROR_BOOKING_CONDITION_EMAIL;
                case mtv.MTVErrorCode.ERROR_BOOKING_CONDITION_PHONE: return public_5.messagesMtv.dt_ERROR_BOOKING_CONDITION_PHONE;
                case mtv.MTVErrorCode.ERROR_BOOKING_CONDITION_PENDING_ORDER: return public_5.messagesMtv.dt_ERROR_BOOKING_CONDITION_PENDING_ORDER;
                case mtv.MTVErrorCode.ERROR_BOOKING_CONDITION_BOOKED: return public_5.messagesMtv.dt_ERROR_BOOKING_CONDITION_BOOKED;
                default: return public_5.messagesMtv.dt_ERROR_BOOKING_CONDITION;
            }
        };
        MtvDtPurchasePage.prototype.showQrCodeforBusinessError = function (errorcode) {
            switch (errorcode) {
                case mtv.MTVErrorCode.ERROR_BOOKING_CONDITION_EMAIL: return true;
                case mtv.MTVErrorCode.ERROR_BOOKING_CONDITION_PHONE: return true;
                case mtv.MTVErrorCode.ERROR_BOOKING_CONDITION_PENDING_ORDER: return false;
                case mtv.MTVErrorCode.ERROR_BOOKING_CONDITION_BOOKED: return true;
                default: return false;
            }
        };
        MtvDtPurchasePage.prototype.render = function () {
            var _this = this;
            var pckg = this.state.package;
            var lxPrice = this.state.price;
            return React.createElement("div", { id: "dt_mtvpurchasepage", className: this.ID + " " + public_2.Css.globalStyleClasses.defaultBackgroundImage + " page" },
                (!this.state.pageloading && pckg && lxPrice) && React.createElement("div", { id: "bookingContainer" },
                    React.createElement(public_1.Route, { path: public_1.IntentMoreTV.PurchaseStepOpt1, render: function () { return React.createElement(dt_purchasestep_opt1_1.MtvPurchaseStepOpt1Component, { package: pckg, context: _this.state.contexts[0], lexusprice: lxPrice, handleInfoKey: function () { _this.handleInfoKey(); }, changeOptionAccepted: function (e) { return _this.changeOptionAccepted(e.option, e.isChecked, e.context); } }); } }),
                    React.createElement(public_1.Route, { path: public_1.IntentMoreTV.PurchaseStepOpt2, render: function () { return React.createElement(dt_purchasestep_opt2_1.MtvPurchaseStepOpt2Component, { package: pckg, context: _this.state.contexts[1], lexusprice: lxPrice, handleInfoKey: function () { _this.handleInfoKey(); }, changeOptionAccepted: function (e) { return _this.changeOptionAccepted(e.option, e.isChecked, e.context); } }); } }),
                    React.createElement(public_1.Route, { path: public_1.IntentMoreTV.PurchaseStep1, render: function () { return React.createElement(dt_purchasestep1_1.MtvDtPurchaseStep1Component, { package: pckg, context: _this.state.contexts[2], lexusprice: lxPrice, handleInfoKey: function () { _this.handleInfoKey(); }, changeOptionAccepted: function (e) { return _this.changeOptionAccepted(e.option, e.isChecked, e.context); } }); } }),
                    React.createElement(public_1.Route, { path: public_1.IntentMoreTV.PurchaseStep2, render: function () { return React.createElement(dt_purchasestep2_1.MtvDtPurchaseStep2Component, { package: pckg, context: _this.state.contexts[3], lexusprice: lxPrice }); } }),
                    React.createElement(public_1.Route, { path: public_1.IntentMoreTV.PurchaseStep3, render: function () {
                            var _a;
                            return React.createElement(dt_purchasestep3_1.MtvDtPurchaseStep3Component, { package: pckg, context: _this.state.contexts[4], lexusprice: lxPrice, emailaddress: (_a = _this.state.booking) === null || _a === void 0 ? void 0 : _a.EmailAddress });
                        } })),
                React.createElement(public_1.BusyIndicatorComponent, { isBusy: this.state.pageloading, delay: 0 }));
        };
        var MtvDtPurchasePage_1;
        MtvDtPurchasePage.classID = 0xC06;
        MtvDtPurchasePage = MtvDtPurchasePage_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-dtpurchase-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        width: public_2.Css.dimensions.screenWidth,
                        height: public_2.Css.dimensions.screenHeight
                    })
                        .sub(public_2.selector(".headline")
                        .props({
                        textAlign: "center",
                        marginBottom: 15
                    }))
                        .sub(public_2.selector(" .dttv-m-in51 + .dttv-m-in51")
                        .props({
                        marginTop: 36
                    }))
                        .sub(public_2.selector(" .dttv-m-in51")
                        .props({
                        width: "100%"
                    }))
                ]
            }),
            public_4.logTag()
        ], MtvDtPurchasePage);
        return MtvDtPurchasePage;
    }(public_1.ReactBaseComponent));
    exports.MtvDtPurchasePage = MtvDtPurchasePage;
});
//# sourceMappingURL=dt_purchase.page.js.map