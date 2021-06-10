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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "../../translation/public", "../../component/public", "src/src-de-telekom/public", "src/src-de-telekom-style/public", "src/src-de-telekom/util/public"], function (require, exports, React, public_1, public_2, public_3, public_4, public_5, public_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AutostandbyConfirmationDialogComponent = void 0;
    var AutostandbyConfirmationDialogComponent = (function (_super) {
        __extends(AutostandbyConfirmationDialogComponent, _super);
        function AutostandbyConfirmationDialogComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.onDestroy(function () { return public_6.Logger.debug(function (log) { return log(public_6.LogMsg("onDestroy", AutostandbyConfirmationDialogComponent_1.TAG)); }); });
            return _this;
        }
        AutostandbyConfirmationDialogComponent_1 = AutostandbyConfirmationDialogComponent;
        AutostandbyConfirmationDialogComponent.prototype.anyKeyPressed = function () {
            this.props.closeDialogWithResult({ resultId: "keyPress" });
            return true;
        };
        AutostandbyConfirmationDialogComponent.prototype.componentDidMount = function () {
        };
        AutostandbyConfirmationDialogComponent.prototype.render = function () {
            var _this = this;
            return React.createElement("div", { className: this.ID },
                React.createElement(public_1.NavigationContainer, { id: this.ID },
                    React.createElement(public_1.NavigationKey, { keyFilter: "*", onKey: function () { return _this.anyKeyPressed(); } }),
                    React.createElement("div", { className: "dttv-genericdialog-v2" },
                        React.createElement("h1", { className: "position-center" }, public_1.Filter.join(this, public_2.messagesCore.AUTOSTANDBY_ABORT_DIALOG_TITLE)),
                        React.createElement(public_3.CloseTimerComponent, { textLine1BeforeSeconds: public_2.messagesCore.AUTOSTANDBY_ABORT_DIALOG_MESSAGE_1, seconds: this.props.model.extraData.timeout, textStyle: public_5.Css.fonts2.a_fo_b1_1, textLine1AfterSeconds: public_2.messagesCore.AUTOSTANDBY_ABORT_DIALOG_MESSAGE_3, textLine2: public_2.messagesCore.AUTOSTANDBY_ABORT_DIALOG_MESSAGE_4, onClose: function () { return _this.props.abortDialog({ resultId: "timedOut" }); } }),
                        React.createElement("div", { className: "" + public_1.Button.Bars.horizontal.center },
                            React.createElement(public_1.Button.StandardV20, { autofocus: true, id: "confirm", text: public_2.messagesCore.AUTOSTANDBY_ABORT_DIALOG_BUTTON, onClick: function (e) { return _this.props.closeDialogWithResult({ resultId: e.props.id }); } })))));
        };
        var AutostandbyConfirmationDialogComponent_1;
        __decorate([
            public_6.log2(function () { return ({ name: AutostandbyConfirmationDialogComponent_1.TAG }); })
        ], AutostandbyConfirmationDialogComponent.prototype, "componentDidMount", null);
        AutostandbyConfirmationDialogComponent = AutostandbyConfirmationDialogComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "autostandby-confirmation-dialog-component",
                styles: public_1.GenericDialogTemplate.getTemplate()
            }),
            public_4.logTag()
        ], AutostandbyConfirmationDialogComponent);
        return AutostandbyConfirmationDialogComponent;
    }(public_1.ReactBaseComponent));
    exports.AutostandbyConfirmationDialogComponent = AutostandbyConfirmationDialogComponent;
});
//# sourceMappingURL=autostandby.confirmation.dialog.js.map