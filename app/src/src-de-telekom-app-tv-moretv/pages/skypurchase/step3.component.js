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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "src/src-de-telekom-style/public", "../../translation/public", "./header.component", "./sky_customer.forms", "./form.component", "../util/util", "../../component/public", "./sky_customer_edit.dialog"], function (require, exports, React, public_1, public_2, public_3, public_4, header_component_1, sky_customer_forms_1, form_component_1, util, public_5, sky_customer_edit_dialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvSkyPurchaseStep3Page = void 0;
    var MtvSkyPurchaseStep3Page = (function (_super) {
        __extends(MtvSkyPurchaseStep3Page, _super);
        function MtvSkyPurchaseStep3Page(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.form = sky_customer_forms_1.SkyForms.Account(_this);
            _this.disableNotification = true;
            _this.edit = function (_a) {
                var scenario = _a.scenario;
                if (!_this.props.customerdata) {
                    return;
                }
                var index = _this.form.indexOf(scenario);
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("edit - not yet implemented '" + scenario.key + "':" + index, MtvSkyPurchaseStep3Page_1.TAG)); });
                _this.visibleDialog = sky_customer_edit_dialog_1.MtvSkyCustomerEditDialog.show({ dialogService: _this.dialogService, customer: _this.props.customerdata, step: index, form: _this.form });
                _this.visibleDialog
                    .result(_this)
                    .then(function (result) {
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("Dialog closed with result " + result.resultId + " ", MtvSkyPurchaseStep3Page_1.TAG)); });
                    _this.validateForm();
                })
                    .catch(function (error) {
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("Dialog aborted -> " + error + " ", MtvSkyPurchaseStep3Page_1.TAG)); });
                });
            };
            _this.setFocus = function () {
                if (_this.navContainer) {
                    if (_this.state.nextDisabled) {
                        _this.navContainer.focus("goBack");
                    }
                    else {
                        _this.navContainer.focus("next");
                    }
                }
            };
            _this.dialogService = public_1.TVDialogHostService.getInstance();
            if (_this.props.customerdata && !_this.props.customerdata.BankAccountFamilyName) {
                _this.props.customerdata.BankAccountFamilyName = _this.props.customerdata.FamilyName;
            }
            if (_this.props.customerdata && !_this.props.customerdata.BankAccountFirstName) {
                _this.props.customerdata.BankAccountFirstName = _this.props.customerdata.FirstName;
            }
            return _this;
        }
        MtvSkyPurchaseStep3Page_1 = MtvSkyPurchaseStep3Page;
        MtvSkyPurchaseStep3Page.prototype.onPushstateLoad = function () {
            _super.prototype.onPushstateLoad.call(this);
            this.notificationService = public_1.TVNotificationService.getInstance();
            this.state = { nextDisabled: true };
        };
        MtvSkyPurchaseStep3Page.prototype.componentDidMount = function () {
            this.validateForm({ disableNotification: true });
        };
        MtvSkyPurchaseStep3Page.prototype.validateForm = function (_a) {
            var _b = (_a === void 0 ? { disableNotification: false } : _a).disableNotification, disableNotification = _b === void 0 ? false : _b;
            if (!this.props.customerdata) {
                return;
            }
            var valid = true;
            var invalidFieldName;
            this.disableNotification = disableNotification;
            for (var _i = 0, _c = this.form; _i < _c.length; _i++) {
                var s = _c[_i];
                valid = sky_customer_forms_1.SkyForms.validateScenario(s, this.props.customerdata[s.key]);
                if (!valid) {
                    invalidFieldName = s.key;
                    if (!disableNotification && this.notificationService) {
                        this.notificationService.notifyError(public_1.Filter.message(this, public_4.messagesMtv.sky_STEP2_HINT_EMPTY_FIELDS));
                    }
                    break;
                }
            }
            this.setState({ nextDisabled: !valid });
            if (this.navContainer) {
                if (invalidFieldName) {
                    this.navContainer.focus(invalidFieldName);
                }
                else {
                    this.navContainer.focus("next");
                }
            }
        };
        MtvSkyPurchaseStep3Page.prototype.render = function () {
            var _this = this;
            var _a, _b;
            if (!this.props.package || !this.props.customerdata || !this.props.catalog) {
                return null;
            }
            return React.createElement(React.Fragment, null,
                React.createElement(public_1.NavigationContainer, { id: "mtvPurchase#SKY_3_bank", className: this.ID },
                    React.createElement(public_1.NavigationContainer, { id: "mtvPurchase#SKY_3_bank_data", className: "Content_Container", onReady: function (container) {
                            _this.navContainer = container;
                        }, overrides: { right: "mtvPurchase#SKY_3_bank_data" } },
                        React.createElement(public_5.MtvTermsOfUseDialogWrapper, { idObject: this.state.showTermsOfUse, onError: this.props.onError }),
                        React.createElement("div", { id: "title", className: "headline" },
                            React.createElement("span", { className: public_3.Css.fonts2.a_fo_h6_2 }, public_1.Filter.message(this, public_4.messagesMtv.sky_STEP3_HEADLINE_1)),
                            React.createElement("span", { style: { color: public_3.Css.colors.A_CO_6 }, className: public_3.Css.fonts2.a_fo_h2_3 }, " (3/6)")),
                        React.createElement(header_component_1.MtvSkyPurchaseStepHeader, { package: this.props.package, catalog: this.props.catalog }),
                        React.createElement(public_1.NavigationContainer, { id: "Booking_Formular_s3", className: [public_3.Css.fonts2.a_fo_b2__, "Booking_Formular"].join(" ") },
                            React.createElement("div", { className: "Booking_FormularLine" },
                                React.createElement(form_component_1.MtvFormElement, { className: "Booking_Bankaccount", customer: this.props.customerdata, scenario: this.form[0], onClick: this.edit, hideValidationresult: this.disableNotification }),
                                React.createElement(form_component_1.MtvFormElement, { className: "Booking_Bankaccount", customer: this.props.customerdata, scenario: this.form[1], onClick: this.edit, hideValidationresult: this.disableNotification })),
                            React.createElement("div", { className: "Booking_FormularLine" },
                                React.createElement(form_component_1.MtvFormElement, { className: "Booking_Bankaccount", customer: this.props.customerdata, scenario: this.form[2], onClick: this.edit, hideValidationresult: this.disableNotification }),
                                React.createElement(form_component_1.MtvFormElement, { className: "Booking_Bankaccount", customer: this.props.customerdata, scenario: this.form[3], onClick: this.edit, hideValidationresult: this.disableNotification })),
                            React.createElement("div", { id: "BookingStep3_AuthorizationText", className: [public_3.Css.fonts2.a_fo_b1_1, "Booking_AuthorizationText"].join(" ") },
                                public_1.Filter.message(this, public_4.messagesMtv.sky_STEP3_AUTHORIZATIONTXT_1),
                                React.createElement("span", { style: { color: public_3.Css.colors.A_CO_9 }, className: public_3.Css.fonts2.a_fo_b1_1 },
                                    public_1.Filter.message(this, public_4.messagesMtv.sky_STEP3_AUTHORIZATIONTXT_2),
                                    React.createElement("br", null)),
                                public_1.Filter.message(this, public_4.messagesMtv.sky_STEP3_AUTHORIZATIONTXT_3))),
                        React.createElement("div", { className: "lineseparator" }),
                        React.createElement(public_1.NavigationWatcher, { onFocusInTree: this.setFocus },
                            React.createElement("div", { id: "BookingStep1_ButtonHelper", className: ["Booking_ButtonHelper", public_1.Button.Bars.horizontal].join(" ") },
                                React.createElement(public_5.ButtonMtv.Standard, { id: "cancel", autofocus: false, icon: public_3.Css.sprites.A_IC_029_2_30x30, text: public_1.Filter.message(this, public_4.messagesMtv.sky_COMMON_BTN_CANCEL), type: "primary", onClick: function () { return _this.startIntent(undefined, { type: "exit" }); } }),
                                React.createElement(public_5.ButtonMtv.Standard, { id: "goBack", text: public_1.Filter.message(this, public_4.messagesMtv.sky_STEP3_BTN_BACK), type: "primary", onClick: function () { return _this.startIntent(undefined, { type: "backward" }); } }),
                                React.createElement(public_5.ButtonMtv.Standard, { id: "next", autofocus: true, text: public_1.Filter.message(this, public_4.messagesMtv.sky_STEP3_BTN_NEXT), type: "primary", onClick: this.props.next, disabled: this.state.nextDisabled }))),
                        React.createElement("div", { id: "SmallPrint", style: { color: public_3.Css.colors.A_CO_6 }, className: [public_3.Css.fonts2.a_fo_b2_2, "Booking_SmallPrint", "singleline-ellipsis"].join(" ") }, (_b = (_a = this.props.package) === null || _a === void 0 ? void 0 : _a.CustomValues) === null || _b === void 0 ? void 0 : _b.SmallPrint)),
                    React.createElement(public_1.NavigationKey, { keyFilter: "INFO_KEY", onKey: function () { var _a; _this.setState({ showTermsOfUse: { id: ((_a = _this.props.catalog) === null || _a === void 0 ? void 0 : _a.PaymentInfo) || "" } }); return true; } }),
                    React.createElement(public_1.HintComponent, { id: "hint", className: "hint", text: public_1.Filter.message(this, public_4.messagesMtv.sky_STEP3_INFO_1), iconClass: public_3.Css.sprites.A_IC_034_3_36x36, onClick: function () { var _a; _this.setState({ showTermsOfUse: { id: ((_a = _this.props.catalog) === null || _a === void 0 ? void 0 : _a.PaymentInfo) || "" } }); return true; }, overrides: { left: "hint" } })));
        };
        var MtvSkyPurchaseStep3Page_1;
        MtvSkyPurchaseStep3Page = MtvSkyPurchaseStep3Page_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-skypurchase-step3-component",
                styles: [
                    public_3.selector("&")
                        .props({
                        overflow: "hidden",
                        position: "absolute",
                        width: public_3.Css.dimensions.screenWidth,
                        height: public_3.Css.dimensions.screenHeight
                    })
                        .sub(public_3.selector(".Content_Container")
                        .props({
                        overflow: "hidden",
                        position: "absolute",
                        top: public_3.Css.dimensions.safeareaTop + 53,
                        left: public_3.Css.dimensions.safeareaLeft + 142,
                        width: 1416,
                        height: 933
                    }))
                        .sub(public_3.selector(".headline")
                        .props({
                        textAlign: "center",
                        marginBottom: 15
                    }))
                        .sub(public_3.selector(".Booking_Formular")
                        .props({
                        marginTop: 23
                    }))
                        .sub(public_3.selector(".Booking_FormularLine")
                        .props({
                        height: 96
                    }))
                        .sub(public_3.selector(".Booking_Bankaccount")
                        .props({
                        width: 695
                    }))
                        .sub(public_3.selector(".Booking_AuthorizationText")
                        .props({
                        marginTop: 17,
                        marginBottom: 40
                    }))
                        .sub(public_3.selector(".Booking_ButtonHelper")
                        .props({
                        marginTop: 33,
                        marginBottom: 48,
                        float: "right",
                        display: "flex",
                        justifyContent: "center"
                    }))
                        .sub(public_3.selector(".Booking_SmallPrint")
                        .props({
                        marginTop: 75,
                        float: "left",
                        width: "inherit"
                    })),
                    public_3.selector("& .lineseparator")
                        .extend(util.Styles.Separator),
                    public_3.selector("& .hint")
                        .props({
                        position: "absolute",
                        right: 72,
                        top: 64
                    })
                ]
            }),
            public_2.logTag()
        ], MtvSkyPurchaseStep3Page);
        return MtvSkyPurchaseStep3Page;
    }(public_1.ReactBaseComponent));
    exports.MtvSkyPurchaseStep3Page = MtvSkyPurchaseStep3Page;
});
//# sourceMappingURL=step3.component.js.map