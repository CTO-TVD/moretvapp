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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "./sky_customer.forms", "../../translation/public", "../../component/purchase/public", "../../component/radiobutton/radiobutton.component", "../../component/public"], function (require, exports, React, public_1, public_2, public_3, sky_customer_forms_1, public_4, public_5, radiobutton_component_1, public_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvSkyCustomerEditDialog = void 0;
    var MtvSkyCustomerEditDialog = (function (_super) {
        __extends(MtvSkyCustomerEditDialog, _super);
        function MtvSkyCustomerEditDialog(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.inputLeft = function () {
                var _a;
                if ((_a = _this.state.currentScenario) === null || _a === void 0 ? void 0 : _a.warn) {
                    var valid = sky_customer_forms_1.SkyForms.validateScenario(_this.state.currentScenario, _this.state.currentValue);
                    if (!valid) {
                        _this.notificationService.notifyError(_this.state.currentScenario.warn);
                    }
                }
                if (_this.btnContainer) {
                    if (_this.state.nextButtonDisabled) {
                        _this.btnContainer.focus("previous");
                    }
                    else {
                        if (_this.state.step == _this.formData.length - 1) {
                            _this.btnContainer.focus("close");
                        }
                        else {
                            _this.btnContainer.focus("next");
                        }
                    }
                }
            };
            var step;
            var extra = _this.props.model.extraData;
            _this.notificationService = public_1.TVNotificationService.getInstance();
            _this.customer = extra.customer;
            _this.formData = extra.scenarios;
            _this.translatedMale = public_1.Filter.message(_this, public_4.messagesMtv.SALUTATION_MALE);
            _this.translatedFemale = public_1.Filter.message(_this, public_4.messagesMtv.SALUTATION_FEMALE);
            if (!extra || !extra.step) {
                step = 0;
            }
            else {
                if (extra.step > _this.formData.length - 1) {
                    step = _this.formData.length - 1;
                }
                else {
                    step = extra.step;
                }
            }
            var currentScenario = _this.formData[step];
            var currentValue = _this.customer[currentScenario.key] || "";
            var valid = sky_customer_forms_1.SkyForms.validateScenario(currentScenario, currentValue);
            _this.state = { nextButtonDisabled: !valid, currentValue: currentValue, currentScenario: currentScenario, step: step, reset: {} };
            setTimeout(function () {
                if ((!currentValue || !valid) && _this.navContainer) {
                    if (step == 0) {
                        _this.navContainer.focus("male");
                    }
                    else {
                        _this.navContainer.focus("inputfield");
                    }
                }
            });
            return _this;
        }
        MtvSkyCustomerEditDialog_1 = MtvSkyCustomerEditDialog;
        MtvSkyCustomerEditDialog.prototype.setCurrentData = function (step) {
            var _this = this;
            var currentScenario = this.formData[step];
            var currentValue = this.customer[currentScenario.key] || "";
            var valid = sky_customer_forms_1.SkyForms.validateScenario(currentScenario, currentValue);
            this.setState({ nextButtonDisabled: !valid, currentValue: currentValue, currentScenario: currentScenario, step: step, reset: {} }, function () {
                setTimeout(function () {
                    if ((!_this.state.currentValue || !valid) && _this.navContainer) {
                        if (_this.state.step == 0) {
                            _this.navContainer.focus("male");
                        }
                        else {
                            _this.navContainer.focus("inputfield");
                        }
                    }
                });
            });
        };
        MtvSkyCustomerEditDialog.prototype.clickClose = function (value) {
            this.props.closeDialogWithResult({ resultId: value });
        };
        MtvSkyCustomerEditDialog.prototype.clickPrevious = function () {
            var step;
            if (this.state.step > 0) {
                step = this.state.step - 1;
                this.setCurrentData(step);
                if (step == 0 && this.btnContainer) {
                    this.btnContainer.focus("next");
                }
            }
        };
        MtvSkyCustomerEditDialog.prototype.clickNext = function () {
            var step;
            if (this.state.step + 1 < this.formData.length) {
                step = this.state.step + 1;
                this.setCurrentData(step);
                if (step == this.formData.length - 1 && this.btnContainer) {
                    this.btnContainer.focus("previous");
                }
            }
        };
        MtvSkyCustomerEditDialog.prototype.validateCurrentValue = function (newvalue) {
            var _this = this;
            this.setState(function (prevState) {
                _this.customer[_this.state.currentScenario.key] = newvalue.trim();
                if (_this.state.currentScenario.key === "DateOfBirth" &&
                    newvalue && (newvalue.trim().length === 2 || newvalue.trim().length === 5) &&
                    prevState.currentValue && (newvalue.trim().length > prevState.currentValue.trim().length)) {
                    _this.setState({ reset: {} });
                    newvalue += ".";
                }
                var valid = sky_customer_forms_1.SkyForms.validateScenario(_this.state.currentScenario, newvalue);
                return { currentValue: newvalue, nextButtonDisabled: !valid };
            });
        };
        MtvSkyCustomerEditDialog.show = function (_a) {
            var dialogService = _a.dialogService, customer = _a.customer, step = _a.step, form = _a.form;
            var visibleDialog = dialogService
                .show({
                title: undefined,
                message: undefined,
                extraData: { customer: customer, step: step, scenarios: form },
                ignoreSafeArea: true
            }, MtvSkyCustomerEditDialog_1);
            return visibleDialog;
        };
        MtvSkyCustomerEditDialog.prototype.setLayout = function (key) {
            var layout;
            switch (key) {
                case "DateOfBirth":
                    layout = "numeric";
                    break;
                case "Phone":
                    layout = "numeric";
                    break;
                case "PostalCode":
                    layout = "numeric";
                    break;
                default:
                    layout = "standard";
                    break;
            }
            return layout;
        };
        MtvSkyCustomerEditDialog.prototype.render = function () {
            var _this = this;
            return React.createElement(React.Fragment, null, this.state.currentScenario && React.createElement(public_1.NavigationContainer, { className: this.ID + " dttvAppCore", id: "mtvPurchase#SKY_EditDialog", autofocus: true, onReady: function (container) { return _this.navContainer = container; } },
                React.createElement(public_1.NavigationKey, { keyFilter: "0-9", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset1", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset2", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset3", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "BACK_KEY", onKey: function () {
                        _this.clickClose(_this.state.currentValue);
                        return true;
                    } }),
                React.createElement("div", { className: "editlabel h4_2 " + (this.state.currentScenario.type == "salutation" && "radio") }, public_1.Filter.message(this, this.state.currentScenario.label)),
                this.state.currentScenario.type == undefined &&
                    React.createElement(public_1.TVInputFieldComponent, { inputtext: this.state.currentValue, reset: this.state.reset, autoCase: true, layout: this.setLayout(this.state.currentScenario.key), type: "", maxlength: 40, placeholderText: this.state.currentScenario.key == "DateOfBirth" ? public_1.Filter.message(this, public_4.messagesMtv.sky_INPUTFIELD_PLHO_DATEOFBIRTH) : "", onInputData: function (text) { return _this.validateCurrentValue(text); } }),
                this.state.currentScenario.type == "salutation" &&
                    React.createElement("div", { className: "radiogroup_center " + public_1.Button.Bars.vertical },
                        React.createElement("div", { className: "radiogroup" },
                            React.createElement(radiobutton_component_1.TVRadioButtonDeprecated, { id: "male", isChecked: this.state.currentValue == this.translatedMale, text: this.translatedMale, onClick: function () { return _this.validateCurrentValue(_this.translatedMale); } }),
                            React.createElement(radiobutton_component_1.TVRadioButtonDeprecated, { id: "female", isChecked: this.state.currentValue == this.translatedFemale, text: this.translatedFemale, onClick: function () { return _this.validateCurrentValue(_this.translatedFemale); } }))),
                React.createElement(public_1.NavigationContainer, { id: "buttonsContainer", className: "buttons " + public_1.Button.Bars.horizontal.left, strictHorizontal: true, autofocus: false, onReady: function (container) { return _this.btnContainer = container; }, onFocusInTree: this.inputLeft },
                    React.createElement(public_6.ButtonMtv.Standard, { id: "close", text: public_1.Filter.message(this, public_4.messagesMtv.COMMON_BTN_DONE), type: "secondary", icon: public_2.Css.sprites.A_IC_009_1_36x36, autofocus: true, onClick: function (e) { return _this.clickClose(_this.state.currentValue); } }),
                    this.state && this.state.step !== 0 && React.createElement(public_6.ButtonMtv.Standard, { id: "previous", text: public_1.Filter.message(this, public_4.messagesMtv.COMMON_BACK), type: "secondary", autofocus: false, onClick: function (e) { return _this.clickPrevious(); } }),
                    this.state && this.state.step !== this.formData.length - 1 && React.createElement(public_6.ButtonMtv.Standard, { id: "next", text: public_1.Filter.message(this, public_4.messagesMtv.COMMON_BTN_NEXT), type: "secondary", autofocus: false, disabled: this.state.nextButtonDisabled, onClick: function (e) { return _this.clickNext(); } })),
                React.createElement(public_5.MtvPurchaseComponent.PagingIndicatorComponent, { index: this.state.step, total: this.formData.length })));
        };
        var MtvSkyCustomerEditDialog_1;
        MtvSkyCustomerEditDialog = MtvSkyCustomerEditDialog_1 = __decorate([
            public_1.reactComponent({
                ID: "sky-customer-editdialog-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        position: "absolute",
                        top: 0,
                        left: public_2.Css.dimensions.safeareaLeft,
                        width: public_2.Css.dimensions.safeareaWidth,
                        height: 600
                    })
                        .sub(public_2.selector(".editlabel")
                        .props({
                        position: "absolute",
                        paddingLeft: 86,
                        top: 285
                    }))
                        .sub(public_2.selector(".radio")
                        .props({
                        left: "50%",
                        marginLeft: -132,
                        width: 264,
                        textAlign: "center"
                    }))
                        .sub(public_2.selector(".inputfield-component")
                        .props({
                        position: "absolute",
                        top: 354,
                        left: 27
                    }))
                        .sub(public_2.selector(".radiogroup_center")
                        .props({
                        position: "absolute",
                        top: 348,
                        left: "50%",
                        marginLeft: -132
                    }))
                        .sub(public_2.selector(".radiogroup")
                        .props({
                        position: "absolute",
                        width: 264
                    }))
                        .sub(public_2.selector(".buttons")
                        .props({
                        position: "absolute",
                        textAlign: "center",
                        width: "inherit",
                        display: "flex",
                        justifyContent: "center",
                        top: 615
                    }))
                        .sub(public_2.selector("h4_2")
                        .props({
                        color: public_2.Css.colors.A_CO_6,
                    })
                        .extend(public_2.Css.fonts2.a_fo_h4_mixin))
                ]
            }),
            public_3.logTag()
        ], MtvSkyCustomerEditDialog);
        return MtvSkyCustomerEditDialog;
    }(public_1.ReactBaseComponent));
    exports.MtvSkyCustomerEditDialog = MtvSkyCustomerEditDialog;
});
//# sourceMappingURL=sky_customer_edit.dialog.js.map