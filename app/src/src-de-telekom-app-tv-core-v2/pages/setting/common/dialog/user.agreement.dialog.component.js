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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "src/src-de-telekom-style/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserAgreementDialogComponent = exports.UserAgreementDialogResult = void 0;
    var UserAgreementDialogResult;
    (function (UserAgreementDialogResult) {
        UserAgreementDialogResult["Confirm"] = "Confirm";
        UserAgreementDialogResult["Cancel"] = "Cancel";
    })(UserAgreementDialogResult = exports.UserAgreementDialogResult || (exports.UserAgreementDialogResult = {}));
    var UserAgreementDialogComponent = (function (_super) {
        __extends(UserAgreementDialogComponent, _super);
        function UserAgreementDialogComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = { reset: {}, props: JSON.parse(JSON.stringify(_this.props.model.extraData)) };
            return _this;
        }
        UserAgreementDialogComponent_1 = UserAgreementDialogComponent;
        UserAgreementDialogComponent.prototype.toggleCheckboxValue = function () {
            this.setState(function (prevState) {
                var newProps = __assign({}, prevState.props);
                newProps.checkBoxChecked = !prevState.props.checkBoxChecked;
                return { props: newProps, reset: {} };
            });
        };
        UserAgreementDialogComponent.prototype.render = function () {
            var _this = this;
            return React.createElement(public_1.NavigationContainer, { className: this.ID, id: "comfortfunction-info-dialog" },
                React.createElement(public_1.NavigationKey, { keyFilter: "0-9", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset1", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset2", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset3", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "MENU_KEY", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "EXIT_KEY", onKey: function () { return true; } }),
                React.createElement("div", { className: "info-dialog" },
                    React.createElement("h1", { className: "position-center" }, this.props.model.extraData.title),
                    React.createElement("div", { className: public_1.Paragraphs.Standard.class.marginToControls11 + " info-area " + this.props.model.customClass },
                        React.createElement("p", { dangerouslySetInnerHTML: { __html: this.props.model.extraData.infoTextHtml } })),
                    React.createElement(public_1.Button.CheckboxV20Option, { autofocus: true, id: "user_agreement_checkbox", className: "checkbox-margins", text: this.props.model.extraData.checkBoxText, onClick: function () { return _this.toggleCheckboxValue(); }, isChecked: this.state.props.checkBoxChecked }),
                    React.createElement(public_1.NavigationContainer, { id: "comfortfunction-info-dialog-buttons", reset: this.state.reset, className: public_1.Button.Bars.horizontal.right + " top-line" },
                        this.props.model.extraData.cancelButtonText && React.createElement(public_1.Button.StandardV20, { autofocus: false, icon: public_3.Css.sprites.A_IC_029_2_36x36, id: "cancel_button", text: this.props.model.extraData.cancelButtonText, onClick: function (e) { return _this.props.closeDialogWithResult({ resultId: UserAgreementDialogResult.Cancel, extraData: _this.state.props }); } }),
                        React.createElement(public_1.Button.StandardV20, { autofocus: true, id: "confirm_button", text: this.props.model.extraData.confirmButtonText, icon: public_3.Css.sprites.A_IC_009_2_36x36, disabled: public_2.Guard.isDefined(this.props.model.extraData.buttonDisabledCheckBoxValue) && this.state.props.checkBoxChecked == this.props.model.extraData.buttonDisabledCheckBoxValue, onClick: function (e) { return _this.props.closeDialogWithResult({ resultId: UserAgreementDialogResult.Confirm, extraData: _this.state.props }); } }))));
        };
        var UserAgreementDialogComponent_1;
        UserAgreementDialogComponent.classID = 0x820;
        UserAgreementDialogComponent.dialogWidth = 1512;
        UserAgreementDialogComponent = UserAgreementDialogComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "user-agreement-dialog-component",
                styles: [
                    public_3.selector("& .info-dialog")
                        .props({
                        width: UserAgreementDialogComponent_1.dialogWidth,
                        position: "absolute",
                        top: "38%",
                        left: "50%",
                        transform: "translate(-50%,-38%)"
                    })
                        .sub(public_3.selector("h1")
                        .extend(public_3.Css.fonts2.a_fo_h2___mixin)
                        .props({
                        textTransform: "none",
                        position: "relative",
                        width: "100%",
                        left: 0,
                        paddingBottom: 11,
                        borderBottom: public_3.Css.scale(3) + "px solid " + public_3.Css.colors.global_focus_background,
                        marginBottom: 21
                    }))
                        .sub(public_3.selector("p")
                        .props({
                        color: public_3.Css.colors.A_CO_1
                    })
                        .extend(public_3.Css.fonts2.a_fo_b1_1_mixin))
                        .sub(public_3.selector(".info-area")
                        .props({
                        width: UserAgreementDialogComponent_1.dialogWidth,
                        position: "relative"
                    }))
                        .sub(public_3.selector(".checkbox-margins")
                        .props({
                        marginTop: 24,
                        marginBottom: 30
                    }))
                        .sub(public_3.selector(".top-line")
                        .props({
                        borderTop: public_3.Css.scale(3) + "px solid " + public_3.Css.colors.global_focus_background,
                        paddingTop: 36
                    }))
                        .sub(public_3.selector(".flex")
                        .props({
                        display: "-webkit-flex"
                    }))
                ]
            }),
            public_2.logTag()
        ], UserAgreementDialogComponent);
        return UserAgreementDialogComponent;
    }(public_1.ReactBaseComponent));
    exports.UserAgreementDialogComponent = UserAgreementDialogComponent;
});
//# sourceMappingURL=user.agreement.dialog.component.js.map