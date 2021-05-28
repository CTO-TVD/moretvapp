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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "src/src-de-telekom-style/public", "../../translation/public", "./sky_customer_edit.dialog", "./header.component", "./sky_customer.forms", "./form.component", "../util/util", "../../component/public"], function (require, exports, React, public_1, public_2, public_3, public_4, sky_customer_edit_dialog_1, header_component_1, sky_customer_forms_1, form_component_1, util, public_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvSkyPurchaseStep2Page = void 0;
    var MtvSkyPurchaseStep2Page = (function (_super) {
        __extends(MtvSkyPurchaseStep2Page, _super);
        function MtvSkyPurchaseStep2Page(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.disableNotification = true;
            _this.form = sky_customer_forms_1.SkyForms.Person(_this);
            _this.edit = function (_a) {
                var scenario = _a.scenario;
                if (_this.props.customerdata) {
                    var index = _this.form.indexOf(scenario);
                    _this.visibleDialog = sky_customer_edit_dialog_1.MtvSkyCustomerEditDialog.show({ dialogService: _this.dialogService, customer: _this.props.customerdata, step: index, form: _this.form });
                    _this.visibleDialog
                        .result(_this)
                        .then(function (result) {
                        public_2.Logger.debug(function (log) { return log(public_2.LogMsg("Dialog closed with result " + result.resultId + " ", MtvSkyPurchaseStep2Page_1.TAG)); });
                        _this.validateForm();
                    })
                        .catch(function (error) {
                        public_2.Logger.debug(function (log) { return log(public_2.LogMsg("Dialog aborted -> " + error + " ", MtvSkyPurchaseStep2Page_1.TAG)); });
                    });
                }
            };
            _this.dialogService = public_1.TVDialogHostService.getInstance();
            return _this;
        }
        MtvSkyPurchaseStep2Page_1 = MtvSkyPurchaseStep2Page;
        MtvSkyPurchaseStep2Page.prototype.onPushstateLoad = function () {
            _super.prototype.onPushstateLoad.call(this);
            this.notificationService = public_1.TVNotificationService.getInstance();
            this.state = { nextDisabled: true };
        };
        MtvSkyPurchaseStep2Page.prototype.componentWillUnmount = function () {
            if (this.visibleDialog) {
                this.visibleDialog.closeDialogWithResult({ resultId: "aborted" });
            }
        };
        MtvSkyPurchaseStep2Page.prototype.componentDidMount = function () {
            this.validateForm({ disableNotification: true });
        };
        MtvSkyPurchaseStep2Page.prototype.validateForm = function (_a) {
            var _b = _a === void 0 ? { disableNotification: false } : _a, _c = _b.disableNotification, disableNotification = _c === void 0 ? false : _c;
            var valid = true;
            var invalidFieldName;
            this.disableNotification = disableNotification;
            if (this.props.customerdata) {
                for (var _i = 0, _d = this.form; _i < _d.length; _i++) {
                    var s = _d[_i];
                    valid = sky_customer_forms_1.SkyForms.validateScenario(s, this.props.customerdata[s.key]);
                    if (!valid) {
                        invalidFieldName = s.key;
                        if (!disableNotification && this.notificationService) {
                            this.notificationService.notifyError(public_1.Filter.message(this, public_4.messagesMtv.sky_STEP2_HINT_EMPTY_FIELDS));
                        }
                        break;
                    }
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
        MtvSkyPurchaseStep2Page.prototype.setFocus = function () {
            if (this.navContainer) {
                if (this.state.nextDisabled) {
                    this.navContainer.focus("goBack");
                }
                else {
                    this.navContainer.focus("next");
                }
            }
        };
        MtvSkyPurchaseStep2Page.prototype.render = function () {
            var _this = this;
            var _a;
            if (!this.props.package || !this.props.customerdata || !this.props.catalog) {
                return null;
            }
            return React.createElement(public_1.NavigationContainer, { id: "mtvPurchase#SKY_2_personal", className: this.ID, strictHorizontal: false, onReady: function (container) { _this.navContainer = container; } },
                React.createElement("div", { id: "title", className: "headline" },
                    React.createElement("span", { className: public_3.Css.fonts2.a_fo_h6_2 }, public_1.Filter.message(this, public_4.messagesMtv.sky_STEP2_HEADLINE_1)),
                    React.createElement("span", { style: { color: public_3.Css.colors.A_CO_6 }, className: public_3.Css.fonts2.a_fo_h2_3 }, " (2/6)")),
                React.createElement(header_component_1.MtvSkyPurchaseStepHeader, { package: this.props.package, catalog: this.props.catalog }),
                React.createElement(public_1.NavigationContainer, { id: "form", className: ["Booking_Formular", public_3.Css.fonts2.a_fo_b2__].join(" "), strictHorizontal: true, onFocusOutTree: function () { return _this.setFocus(); } },
                    React.createElement("div", { className: "Booking_FormularLine" },
                        React.createElement(form_component_1.MtvFormElement, { className: "Booking_Salutation", customer: this.props.customerdata, scenario: this.form[0], onClick: this.edit, hideValidationresult: this.disableNotification }),
                        React.createElement(form_component_1.MtvFormElement, { className: "Booking_FamilyName", customer: this.props.customerdata, scenario: this.form[1], onClick: this.edit, hideValidationresult: this.disableNotification }),
                        React.createElement(form_component_1.MtvFormElement, { className: "booking_FirstName", customer: this.props.customerdata, scenario: this.form[2], onClick: this.edit, hideValidationresult: this.disableNotification })),
                    React.createElement("div", { className: "Booking_FormularLine" },
                        React.createElement(form_component_1.MtvFormElement, { className: "Booking_Street", customer: this.props.customerdata, scenario: this.form[3], onClick: this.edit, hideValidationresult: this.disableNotification }),
                        React.createElement(form_component_1.MtvFormElement, { className: "Booking_Houseno", customer: this.props.customerdata, scenario: this.form[4], onClick: this.edit, hideValidationresult: this.disableNotification }),
                        React.createElement(form_component_1.MtvFormElement, { className: "Booking_Postalcode", customer: this.props.customerdata, scenario: this.form[5], onClick: this.edit, hideValidationresult: this.disableNotification }),
                        React.createElement(form_component_1.MtvFormElement, { className: "Booking_City", customer: this.props.customerdata, scenario: this.form[6], onClick: this.edit, hideValidationresult: this.disableNotification })),
                    React.createElement("div", { className: "Booking_FormularLine" },
                        React.createElement(form_component_1.MtvFormElement, { className: "Booking_Additionaladdress", customer: this.props.customerdata, scenario: this.form[7], onClick: this.edit, hideValidationresult: this.disableNotification }),
                        React.createElement(form_component_1.MtvFormElement, { className: "Booking_Phone", customer: this.props.customerdata, scenario: this.form[8], onClick: this.edit, hideValidationresult: this.disableNotification })),
                    React.createElement("div", { className: "Booking_FormularLine" },
                        React.createElement(form_component_1.MtvFormElement, { className: "Booking_Email", customer: this.props.customerdata, scenario: this.form[9], onClick: this.edit, hideValidationresult: this.disableNotification }),
                        React.createElement(form_component_1.MtvFormElement, { className: "Booking_Dateofbirth", customer: this.props.customerdata, scenario: this.form[10], onClick: this.edit, hideValidationresult: this.disableNotification }))),
                React.createElement("div", { className: "lineseparator" }),
                React.createElement("div", { id: "BookingStep1_ButtonHelper", className: ["Booking_ButtonHelper", public_1.Button.Bars.horizontal].join(" ") },
                    React.createElement(public_5.ButtonMtv.Standard, { id: "cancel", icon: public_3.Css.sprites.A_IC_029_2_30x30, text: public_1.Filter.message(this, public_4.messagesMtv.sky_COMMON_BTN_CANCEL), type: "primary", onClick: function () { return _this.startIntent(undefined, { type: "exit" }); } }),
                    React.createElement(public_5.ButtonMtv.Standard, { id: "goBack", text: public_1.Filter.message(this, public_4.messagesMtv.sky_STEP2_BTN_BACK), type: "primary", onClick: function () { return _this.startIntent(undefined, { type: "backward" }); } }),
                    React.createElement(public_5.ButtonMtv.Standard, { id: "next", text: public_1.Filter.message(this, public_4.messagesMtv.sky_STEP2_BTN_NEXT), type: "primary", onClick: this.props.next, disabled: this.state.nextDisabled })),
                React.createElement("div", { id: "SmallPrint", style: { color: public_3.Css.colors.A_CO_6 }, className: [public_3.Css.fonts2.a_fo_b2_2, "Booking_SmallPrint", "singleline-ellipsis"].join(" ") }, ((_a = this.props.package) === null || _a === void 0 ? void 0 : _a.CustomValues) &&
                    this.props.package.CustomValues.SmallPrint));
        };
        var MtvSkyPurchaseStep2Page_1;
        MtvSkyPurchaseStep2Page = MtvSkyPurchaseStep2Page_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-skypurchase-step2-component",
                styles: [
                    public_3.selector("&")
                        .props({
                        overflow: "hidden",
                        position: "absolute",
                        top: public_3.Css.dimensions.safeareaTop + 52,
                        left: public_3.Css.dimensions.safeareaLeft + 143,
                        width: 1418,
                        height: 933
                    })
                        .sub(public_3.selector(".Booking_Formular")
                        .props({
                        marginTop: 27
                    }))
                        .sub(public_3.selector(".Booking_FormularLine")
                        .props({
                        height: 96
                    }))
                        .sub(public_3.selector(".Booking_Salutation")
                        .props({
                        width: 168
                    }))
                        .sub(public_3.selector(".Booking_FamilyName")
                        .props({
                        width: 623
                    }))
                        .sub(public_3.selector(".booking_FirstName")
                        .props({
                        width: 574
                    }))
                        .sub(public_3.selector(".Booking_Street")
                        .props({
                        width: 672
                    }))
                        .sub(public_3.selector(".Booking_Houseno")
                        .props({
                        width: 120
                    }))
                        .sub(public_3.selector(".Booking_Postalcode")
                        .props({
                        width: 120
                    }))
                        .sub(public_3.selector(".Booking_City")
                        .props({
                        width: 431
                    }))
                        .sub(public_3.selector(".Booking_Additionaladdress")
                        .props({
                        width: 816
                    }))
                        .sub(public_3.selector(".Booking_Phone")
                        .props({
                        width: 574
                    }))
                        .sub(public_3.selector(".Booking_Email")
                        .props({
                        width: 816
                    }))
                        .sub(public_3.selector(".Booking_Dateofbirth")
                        .props({
                        width: 574
                    }))
                        .sub(public_3.selector(".Booking_ButtonHelper")
                        .props({
                        marginTop: 31,
                        marginBottom: 48,
                        float: "right",
                        display: "flex",
                        justifyContent: "center"
                    }))
                        .sub(public_3.selector(".Booking_SmallPrint")
                        .props({
                        marginTop: 32,
                        float: "left",
                        width: "inherit"
                    })),
                    public_3.selector("& .lineseparator")
                        .extend(util.Styles.Separator)
                ]
            }),
            public_2.logTag()
        ], MtvSkyPurchaseStep2Page);
        return MtvSkyPurchaseStep2Page;
    }(public_1.ReactBaseComponent));
    exports.MtvSkyPurchaseStep2Page = MtvSkyPurchaseStep2Page;
});
//# sourceMappingURL=step2.component.js.map