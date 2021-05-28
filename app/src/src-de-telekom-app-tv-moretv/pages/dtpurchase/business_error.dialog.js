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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../translation/public", "../../component/public"], function (require, exports, React, public_1, public_2, public_3, public_4, public_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvBusinessErrorDialog = void 0;
    var MtvBusinessErrorDialog = (function (_super) {
        __extends(MtvBusinessErrorDialog, _super);
        function MtvBusinessErrorDialog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MtvBusinessErrorDialog_1 = MtvBusinessErrorDialog;
        MtvBusinessErrorDialog.createBusinessErrorDialog = function (dialogService, extraData, title, message) {
            return dialogService
                .show({
                title: title,
                message: message,
                extraData: extraData,
                icon: "icon-error",
                ignoreSafeArea: true,
                navigationId: "mtvMessage"
            }, MtvBusinessErrorDialog_1);
        };
        MtvBusinessErrorDialog.prototype.handleExitKey = function () {
            this.props.closeDialogWithResult({ resultId: "cancel" });
            return true;
        };
        MtvBusinessErrorDialog.prototype.render = function () {
            var _this = this;
            var vendorData = {
                telephone: this.props.model.extraData.telephone && this.props.model.extraData.footnote ? this.props.model.extraData.telephone + "*" : this.props.model.extraData.telephone,
                footnote: this.props.model.extraData.telephone && this.props.model.extraData.footnote ? "*" + this.props.model.extraData.footnote : this.props.model.extraData.footnote
            };
            var buttons = [
                {
                    autofocus: true,
                    id: "close",
                    text: public_1.Filter.message(this, public_4.messagesMtv.COMMON_BTN_CLOSE)
                }
            ];
            return React.createElement(React.Fragment, null,
                React.createElement(public_1.NavigationContainer, { className: this.ID + " dttvAppCore", id: "mtvBusinessErrorDialog", useCycle: true },
                    React.createElement(public_1.NavigationKey, { keyFilter: "EXIT_KEY", onKey: function () { return _this.handleExitKey(); } }),
                    React.createElement(public_1.NavigationKey, { keyFilter: "0-9", onKey: function () { return true; } }),
                    React.createElement(public_1.NavigationKey, { keyFilter: "keyset1", onKey: function () { return true; } }),
                    React.createElement(public_1.NavigationKey, { keyFilter: "keyset2", onKey: function () { return true; } }),
                    React.createElement(public_1.NavigationKey, { keyFilter: "keyset3", onKey: function () { return true; } }),
                    React.createElement("div", { id: "dttv-genericdialog" },
                        React.createElement("p", { className: public_2.Css.fonts2.a_fo_h6_2 + " icon icon-error", style: { textAlign: "center" } }, public_1.Filter.join(this, this.props.model.title)),
                        React.createElement("div", { className: "borders" },
                            React.createElement("p", { className: public_2.Css.fonts2.a_fo_b1_1 }, public_1.Filter.join(this, this.props.model.message)),
                            (vendorData.telephone || vendorData.footnote) && React.createElement("p", { className: public_2.Css.fonts2.a_fo_b1_1 }, "\u00A0"),
                            vendorData.telephone && React.createElement("p", { style: { color: public_2.Css.colors.A_CO_9 }, className: public_2.Css.fonts2.a_fo_b1_1, id: "telephone" },
                                React.createElement("span", { className: public_2.Css.sprites.A_IC_076_36x36 + " empty" }),
                                "\u00A0",
                                React.createElement("span", null, vendorData.telephone)),
                            vendorData.footnote && React.createElement("p", { style: { color: public_2.Css.colors.A_CO_6 }, className: public_2.Css.fonts2.a_fo_b1_1, id: "footnote" }, vendorData.footnote)),
                        React.createElement("div", { className: "" + public_1.Button.Bars.horizontal.right }, buttons.map(function (btn) { return React.createElement(public_5.ButtonMtv.Standard, { key: btn.id, id: btn.id, text: btn.text, type: "secondary", autofocus: btn.autofocus, icon: btn.icon, onClick: function (e) {
                                _this.props.closeDialogWithResult({ resultId: btn.id });
                            } }); })))));
        };
        var MtvBusinessErrorDialog_1;
        MtvBusinessErrorDialog = MtvBusinessErrorDialog_1 = __decorate([
            public_1.reactComponent({
                ID: "business-errordialog-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        position: "absolute",
                        top: "38%",
                        left: "50%",
                        transform: "translate(-50%, -38%);",
                        width: 1176
                    }),
                    public_2.selector("& p")
                        .props({
                        textAlign: "left"
                    }),
                    public_2.selector("& #telephone + #footnote")
                        .props({
                        marginTop: 6
                    }),
                    public_2.selector("& .borders")
                        .props({
                        borderTop: public_2.Css.scale(3) + "px solid " + public_2.Css.colors.global_focus_background,
                        marginTop: 14,
                        paddingTop: 37,
                        borderBottom: public_2.Css.scale(3) + "px solid " + public_2.Css.colors.global_focus_background,
                        paddingBottom: 38,
                        marginBottom: 48
                    }),
                    public_2.selector("& .titlelogo")
                        .props({
                        verticalAlign: "bottom",
                        marginRight: 24
                    }),
                    public_2.selector("& .empty")
                        .props({
                        display: "inline-block",
                        verticalAlign: "text-top"
                    }),
                    public_2.selector("& .qrcode")
                        .props({
                        position: "absolute",
                        width: 150,
                        left: 0,
                        bottom: 150,
                    }),
                ]
            }),
            public_3.logTag()
        ], MtvBusinessErrorDialog);
        return MtvBusinessErrorDialog;
    }(public_1.ReactBaseComponent));
    exports.MtvBusinessErrorDialog = MtvBusinessErrorDialog;
});
//# sourceMappingURL=business_error.dialog.js.map