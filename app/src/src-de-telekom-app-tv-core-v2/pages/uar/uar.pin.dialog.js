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
define(["require", "exports", "react", "bluebird", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../translation/public", "src/src-de-telekom-tv-core/public", "../../component/infoArea/infoDialog.component", "../setting/common/dialog/user.agreement.dialog.component"], function (require, exports, React, bluebird, public_1, public_2, public_3, public_4, public_5, infoDialog_component_1, user_agreement_dialog_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UarPinDialogComponent = void 0;
    var UarPinDialogComponent = (function (_super) {
        __extends(UarPinDialogComponent, _super);
        function UarPinDialogComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.alreadyClosed = false;
            _this.state = {
                success: false,
                clear: {},
                activateComfortFunction: false,
                comfortFunctionAvailable: false,
                comfortFunctionAvailableForTimeString: "",
                isBusy: true
            };
            _this.onDestroy(function () {
                if (!_this.alreadyClosed) {
                    _this.alreadyClosed = true;
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Pin dialog closed at destroy.", UarPinDialogComponent_1.TAG)); });
                    props.closeDialogWithResult({ resultId: "cancel" });
                }
            });
            return _this;
        }
        UarPinDialogComponent_1 = UarPinDialogComponent;
        UarPinDialogComponent.prototype.componentDidMount = function () {
            var _this = this;
            if (!this.props.model.extraData.hideComfortFeature) {
                public_5.ApplicationClient.parentalControlManagement.isComfortFeatureActive()
                    .then(function (isComfortFeatureActiveResult) { return isComfortFeatureActiveResult.data.isActive ? bluebird.resolve() :
                    public_5.ApplicationClient.parentalControlManagement.getComfortFeatureProperties()
                        .then(function (comfortFeatureProperties) {
                        _this.setState({
                            comfortFunctionAvailable: comfortFeatureProperties.isSupported,
                            comfortFunctionAvailableForTimeString: comfortFeatureProperties.comfortFunctionForTimeString
                        });
                    }); })
                    .catch(public_3.ErrorManager.catchFunc(UarPinDialogComponent_1, 0x01))
                    .finally(function () { return _this.setState({ isBusy: false }); });
            }
            else {
                this.setState({ isBusy: false });
            }
        };
        UarPinDialogComponent.prototype.validatePinAndCloseDialog = function (pinValue) {
            var _this = this;
            var extraData = this.props.model.extraData;
            extraData.disabled = true;
            return extraData.sendData ?
                extraData.sendData(pinValue)
                    .then(function (data) {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("closing dialog with success", UarPinDialogComponent_1.TAG)); });
                    _this.setState({ success: data.success, clear: data.clearPinEntry ? {} : undefined });
                    if (data.success) {
                        if (extraData.hideComfortFeature || !_this.state.activateComfortFunction) {
                            setTimeout(function () { return _this.closeDialog("success"); }, 1200);
                        }
                        else {
                            public_5.ApplicationClient.userStorage.getComfortFunctionInfoTextEnabled()
                                .then(function (showInfoText) { return showInfoText ? _this.showComfortfunctionConfirmationDialog() : bluebird.resolve(); })
                                .finally(function () {
                                if (_this.state.activateComfortFunction) {
                                    public_5.ApplicationClient.parentalControlManagement.activateComfortFeature();
                                }
                                setTimeout(function () { return _this.closeDialog("success"); }, 1200);
                            });
                        }
                    }
                }) : bluebird.resolve();
        };
        UarPinDialogComponent.prototype.showComfortfunctionConfirmationDialog = function () {
            return public_1.TVDialogHostService.getInstance().show({
                extraData: {
                    title: public_1.Filter.message(public_1.Filter.context(), public_4.messagesCore.STB_COMFORTFUNCTION_INFO_TITLE),
                    infoTextHtml: public_1.Filter.message(public_1.Filter.context(), public_4.messagesCore.STB_COMFORTFUNCTION_INFO_TEXT_FIRSTTIME, { comfortFunctionForTimeString: this.state.comfortFunctionAvailableForTimeString }),
                    checkBoxText: public_1.Filter.message(public_1.Filter.context(), public_4.messagesCore.STB_COMFORTFUNCTION_INFO_CHECKBOX),
                    confirmButtonText: public_1.Filter.message(public_1.Filter.context(), public_4.messagesCore.STB_COMFORTFUNCTION_INFO_BUTTON_CONFIRM),
                    checkBoxChecked: false
                }
            }, user_agreement_dialog_component_1.UserAgreementDialogComponent, { layer: public_1.DialogLayer.dialogLayer4, voiceCommandBehaviour: { disableVoiceCommandExecution: true } })
                .result(this)
                .then(function (result) { return result.extraData && !!result.extraData.checkBoxChecked ? public_5.ApplicationClient.userStorage.setComfortFunctionInfoTextEnabled(false) : bluebird.resolve(); })
                .catch(public_3.ErrorManager.catchFunc(UarPinDialogComponent_1, 0x04));
        };
        UarPinDialogComponent.prototype.showComfortFeatureInfoDialog = function () {
            var infoDialogData = {
                title: public_1.Filter.message(this, public_4.messagesCore.STB_COMFORTFUNCTION_INFO_TITLE),
                extraData: public_1.Filter.message(this, public_4.messagesCore.STB_COMFORTFUNCTION_INFO_TEXT_FIRSTTIME, { comfortFunctionForTimeString: this.state.comfortFunctionAvailableForTimeString }),
                customClass: "text-alignLeft",
                ignoreSafeArea: true
            };
            return public_1.TVDialogHostService.getInstance().show(infoDialogData, infoDialog_component_1.InfoDialogComponent, { layer: public_1.DialogLayer.dialogLayer4 })
                .result(this)
                .catch(public_3.ErrorManager.catchFunc(UarPinDialogComponent_1, 0x03));
        };
        UarPinDialogComponent.prototype.autoCloseHandling = function (event) {
            this.closeDialog("cancel");
            return false;
        };
        UarPinDialogComponent.prototype.closeDialog = function (resultId) {
            this.alreadyClosed = true;
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Pin dialog closed at normal way.", UarPinDialogComponent_1.TAG)); });
            this.props.closeDialogWithResult({ resultId: resultId });
        };
        UarPinDialogComponent.prototype.onCheckboxReady = function () {
            if (this.container) {
                this.container.focus("checkbox_activate_comfort_feature");
            }
        };
        UarPinDialogComponent.prototype.toggleActivateComfortFunction = function () {
            if (this.container) {
                this.container.focus("input");
            }
            this.setState(function (prevState) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Set activateComfortFunction from " + prevState.activateComfortFunction + " to " + !prevState.activateComfortFunction + ".", UarPinDialogComponent_1.TAG)); });
                return { activateComfortFunction: !prevState.activateComfortFunction };
            });
        };
        UarPinDialogComponent.prototype.render = function () {
            var _this = this;
            return this.state.isBusy ? null : React.createElement(public_1.NavigationContainer, { className: "" + this.ID, id: "uarPIN", onReady: function (container) { return _this.container = container; } },
                React.createElement(public_1.NavigationKey, { keyFilter: "0-9", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset1", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset2", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset3", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "AUTOCLOSE_1_KEY", onKey: function (event) { return _this.autoCloseHandling(event); } }),
                React.createElement("div", { className: "dttv-genericdialog-v2 dialogsize" },
                    React.createElement("h1", { className: "position-center margin" }, this.props.model.extraData.dialogTitle),
                    React.createElement("p", null, this.props.model.extraData.paragraph1),
                    React.createElement("p", null, this.props.model.extraData.paragraph2),
                    this.state.comfortFunctionAvailable ?
                        React.createElement("div", { className: "comfortSection" },
                            React.createElement(public_1.Button.CheckboxV20Option, { id: "checkbox_activate_comfort_feature", className: "marginTopCheckbox", type: "small", text: public_1.Filter.message(this, public_4.messagesCore.STB_PIN_DIALOG_COMFORT_FUNCTION_CHECKBOX_TEXT), onClick: function () { return _this.toggleActivateComfortFunction(); }, onReady: function (e) { return _this.onCheckboxReady(); }, isChecked: this.state.activateComfortFunction }),
                            React.createElement("div", { className: public_2.Css.fonts2.a_fo_b2_2 }, public_1.Filter.message(this, public_4.messagesCore.STB_PIN_DIALOG_COMFORT_FUNCTION_CHECKBOX_DESCRIPTION, { comfortFunctionForTimeString: this.state.comfortFunctionAvailableForTimeString }))) : null,
                    React.createElement("div", null,
                        React.createElement(public_1.NavigationElement, { id: "input", className: "marginTopPin" },
                            React.createElement(public_1.TVPinEntryComponent, { maxLength: 4, stars: true, accepted: this.state.success, reset: this.state.clear, onCompleted: function (response) { return _this.validatePinAndCloseDialog(response.value); }, className: "margin-standard pinAlignment" }))),
                    !this.props.model.extraData.removePinForgotten &&
                        React.createElement("div", { className: public_1.Button.Bars.horizontal.center + " buttonMargin" },
                            React.createElement(public_1.Button.StandardV20, { className: "buttonWidth", icon: public_2.Css.sprites.A_IC_034_36x36, id: "pinforgotten", onClick: function (e) { return _this.closeDialog("pinforgotten"); }, text: public_4.messagesCore.STB_PH_TI003 }),
                            this.state.comfortFunctionAvailable ?
                                React.createElement(public_1.Button.StandardV20, { className: "buttonWidth", icon: public_2.Css.sprites.A_IC_034_36x36, id: "comfortfunctioninfo", onClick: function (e) { return _this.showComfortFeatureInfoDialog(); }, text: public_4.messagesCore.STB_PIN_DIALOG_COMFORT_FUNCTION_BUTTON_TEXT }) : null),
                    this.props.model.extraData.subtext &&
                        React.createElement("p", null, this.props.model.extraData.subtext)));
        };
        var UarPinDialogComponent_1;
        UarPinDialogComponent.classID = 0x800;
        UarPinDialogComponent.PinEntryFieldWidth = 408;
        UarPinDialogComponent.DialogWidth = 966;
        __decorate([
            public_3.log2(function () { return ({ name: UarPinDialogComponent_1.TAG }); })
        ], UarPinDialogComponent.prototype, "validatePinAndCloseDialog", null);
        __decorate([
            public_3.log2(function () { return ({ name: UarPinDialogComponent_1.TAG }); })
        ], UarPinDialogComponent.prototype, "toggleActivateComfortFunction", null);
        UarPinDialogComponent = UarPinDialogComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "uar-pin-dialog-component",
                styles: __spreadArrays(public_1.GenericDialogTemplate.getTemplate(), [public_2.selector("& .pinAlignment")
                        .props({
                        position: "relative",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: UarPinDialogComponent_1.PinEntryFieldWidth
                    }),
                    public_2.selector("& .marginTopCheckbox")
                        .props({
                        marginTop: 39,
                        marginBottom: 27
                    }),
                    public_2.selector("& .marginTopPin")
                        .props({
                        marginTop: 58
                    }),
                    public_2.selector("& .dttv-genericdialog-v2 h1.margin")
                        .props({
                        marginBottom: 40
                    }),
                    public_2.selector("& .dialogsize")
                        .props({
                        width: UarPinDialogComponent_1.DialogWidth
                    }),
                    public_2.selector("& .buttonMargin")
                        .props({
                        marginTop: 60
                    }),
                    public_2.selector("& .buttonWidth")
                        .props({
                        width: UarPinDialogComponent_1.PinEntryFieldWidth
                    }),
                    public_2.selector("& .comfortSection")
                        .props({
                        marginLeft: 111,
                        marginRight: 111
                    }),
                    public_2.selector("& p")
                        .props({
                        whiteSpace: "pre-line"
                    })
                ])
            }),
            public_3.logTag()
        ], UarPinDialogComponent);
        return UarPinDialogComponent;
    }(public_1.ReactBaseComponent));
    exports.UarPinDialogComponent = UarPinDialogComponent;
});
//# sourceMappingURL=uar.pin.dialog.js.map