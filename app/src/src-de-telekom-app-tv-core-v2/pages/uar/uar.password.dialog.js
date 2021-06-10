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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../translation/public", "../../component/dialog/textinputdialog/textinputdialog", "src/src-de-telekom/typing/guard"], function (require, exports, React, public_1, public_2, public_3, public_4, textinputdialog_1, guard_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UarPasswordDialogComponent = void 0;
    var UarPasswordDialogComponent = (function (_super) {
        __extends(UarPasswordDialogComponent, _super);
        function UarPasswordDialogComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.alreadyClosed = false;
            _this.state = { success: false, clear: {}, confirmDisabled: true };
            _this.onDestroy(function () {
                if (!_this.alreadyClosed) {
                    _this.alreadyClosed = true;
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Pin dialog closed at destroy.", UarPasswordDialogComponent_1.TAG)); });
                    props.closeDialogWithResult({ resultId: "cancel" });
                }
            });
            return _this;
        }
        UarPasswordDialogComponent_1 = UarPasswordDialogComponent;
        UarPasswordDialogComponent.prototype.render = function () {
            var _this = this;
            var contentElement = document.getElementById("content");
            var marginTop = contentElement ? Math.round(((document.body.scrollHeight - contentElement.offsetHeight) * 0.38)) : 200;
            return React.createElement(public_1.NavigationContainer, { className: "" + this.ID, id: "uarPIN" },
                React.createElement(public_1.NavigationKey, { keyFilter: "0-9", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset1", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset2", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset3", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "MENU_KEY", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "AUTOCLOSE_1_KEY", onKey: function (event) { return _this.autoCloseHandling(event); } }),
                React.createElement("div", { id: "content", style: { marginTop: marginTop } },
                    React.createElement("div", { id: "head" },
                        React.createElement("div", { id: "title", className: "position-center margin " + public_2.Css.fonts2.a_fo_h2__ }, public_1.Filter.message(this, public_4.messagesCore.STB_PIN_RESET_TITLE)),
                        React.createElement("hr", { id: "hr_top" })),
                    React.createElement("div", null, this.props.model.extraData.dialogTitle && React.createElement("div", { className: "dialog1 " + public_2.Css.fonts2.a_fo_b1_1 }, this.props.model.extraData.dialogTitle)),
                    React.createElement(public_1.NavigateTVPinEntryComponent, { maxLength: 16, stars: true, autofocus: true, password: this.state.stars, onChanged: function (response) { return _this.handlePinEntry(response.value); }, onClick: function () { return _this.onTextEntryButtonClick("pin"); }, className: "pinAlignment" }),
                    React.createElement("div", null, this.props.model.extraData.paragraph1 && React.createElement("div", { className: "para1 " + public_2.Css.fonts2.a_fo_b2__ }, this.props.model.extraData.paragraph1)),
                    React.createElement(public_1.NavigationContainer, { id: "uarpasswordbuttons", className: "uarpasswordbuttons", autofocus: false, strictHorizontal: false, strictVertical: true },
                        React.createElement("div", { className: public_1.Button.Bars.horizontal.center + " buttonMargin" },
                            React.createElement(public_1.Button.StandardV20, { className: "buttonWidth", icon: public_2.Css.sprites.A_IC_029_2_36x36, id: "cancel", onClick: function (e) { return _this.closeDialog("cancel"); }, text: public_4.messagesCore.STB_RS_TI005 }),
                            React.createElement(public_1.Button.StandardV20, { className: "buttonWidth", icon: public_2.Css.sprites.A_IC_009_2_36x36, autofocus: true, id: "confirm", disabled: this.state.confirmDisabled, onClick: function (e) { return _this.handlePasswordEntry(); }, text: public_4.messagesCore.STB_RS_TI009 })))));
        };
        UarPasswordDialogComponent.prototype.handlePasswordEntry = function () {
            var _this = this;
            var extraData = this.props.model.extraData;
            extraData.disabled = true;
            if (extraData.sendData && this.state.pin) {
                extraData.sendData(this.state.pin).then(function (data) {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("closing dialog with success", UarPasswordDialogComponent_1.TAG)); });
                    _this.setState({ success: data.success, clear: data.clearPinEntry ? {} : undefined });
                    if (data.success) {
                        setTimeout(function () {
                            _this.closeDialog("success");
                        }, 1200);
                    }
                });
            }
        };
        UarPasswordDialogComponent.prototype.onTextEntryButtonClick = function (type) {
            var _this = this;
            var minLength = 8;
            var maxLength = 16;
            var dialogModel = {
                title: this.state.pin,
                titleMinLength: minLength,
                titleMaxLength: maxLength,
                titleMinLengthMessage: public_1.Filter.message(this, public_4.messagesCore.LOGIN_INPUT_PASSWORD_MIN_MESSAGE, { minLength: minLength }),
                titleMaxLengthMessage: public_1.Filter.message(this, public_4.messagesCore.LOGIN_INPUT_PASSWORD_MAX_MESSAGE, { maxLength: maxLength }),
                headline: public_1.Filter.message(this, public_4.messagesCore.STB_PIN_KEYBOARD_TITLE),
                layout: "pin_password",
                autoCase: false
            };
            var dialog = textinputdialog_1.TextInputDialogComponent.createDialog(dialogModel, public_1.DialogLayer.dialogLayer2);
            dialog
                .result(this)
                .then(function (result) {
                if (result.resultId == "okay" && result.extraData) {
                    var userInput_1 = result.extraData.title ? result.extraData.title : "";
                    _this.setState(function (prevState) {
                        var valid = userInput_1.length > 0 && guard_1.Guard.isDefined(userInput_1);
                        return __assign(__assign({}, prevState), { confirmDisabled: !valid, pin: userInput_1, stars: Array(userInput_1.length + 1).join("•") });
                    });
                }
                else {
                    _this.setState(function (prevState) {
                        var valid = guard_1.Guard.isDefined(prevState.pin);
                        return __assign(__assign({}, prevState), { confirmDisabled: !valid });
                    });
                }
            });
        };
        UarPasswordDialogComponent.prototype.handlePinEntry = function (userInput) {
            this.setState(function (prevState) {
                var valid = userInput.length > 7 && guard_1.Guard.isDefined(userInput);
                return __assign(__assign({}, prevState), { confirmDisabled: !valid, pin: userInput, stars: Array(userInput.length + 1).join("•") });
            });
        };
        UarPasswordDialogComponent.prototype.autoCloseHandling = function (event) {
            this.closeDialog("cancel");
            return false;
        };
        UarPasswordDialogComponent.prototype.closeDialog = function (resultId) {
            this.alreadyClosed = true;
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Pin dialog closed at normal way.", UarPasswordDialogComponent_1.TAG)); });
            this.props.closeDialogWithResult({ resultId: resultId });
        };
        var UarPasswordDialogComponent_1;
        UarPasswordDialogComponent = UarPasswordDialogComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "uar-password-dialog-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backgroundColor: public_2.Css.colors.global_background_low_transparent
                    }),
                    public_2.selector("& #content")
                        .props({
                        margin: "auto",
                        width: 1046
                    }),
                    public_2.selector("& #head")
                        .props({
                        textAlign: "center"
                    }),
                    public_2.selector("& #title")
                        .props({
                        marginLeft: 24,
                        marginRight: 24
                    }),
                    public_2.selector("& hr")
                        .props({
                        backgroundColor: public_2.Css.colors.global_focus_background,
                        borderColor: public_2.Css.colors.global_focus_background,
                        height: 3
                    }),
                    public_2.selector("& #hr_top")
                        .props({
                        marginTop: 21,
                        width: "inherit"
                    }),
                    public_2.selector("& .dialog1")
                        .props({
                        textAlign: "center",
                        marginTop: 19
                    }),
                    public_2.selector("& .pinAlignment")
                        .props({
                        textAlign: "center",
                        margin: "auto",
                        marginTop: 60,
                        width: 602
                    }),
                    public_2.selector("& .para1")
                        .props({
                        textAlign: "center",
                        marginTop: 60
                    }),
                    public_2.selector("& .uarpasswordbuttons")
                        .props({
                        marginTop: 48
                    })
                ]
            }),
            public_3.logTag()
        ], UarPasswordDialogComponent);
        return UarPasswordDialogComponent;
    }(public_1.ReactBaseComponent));
    exports.UarPasswordDialogComponent = UarPasswordDialogComponent;
});
//# sourceMappingURL=uar.password.dialog.js.map