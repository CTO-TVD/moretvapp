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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "src/src-de-telekom-style/public", "../../translation/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GenericMessageOverlayComponent = void 0;
    var GenericMessageOverlayComponent = (function (_super) {
        __extends(GenericMessageOverlayComponent, _super);
        function GenericMessageOverlayComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GenericMessageOverlayComponent_1 = GenericMessageOverlayComponent;
        GenericMessageOverlayComponent.createDialog = function (dialogService, extraData) {
            return dialogService.show({
                extraData: extraData,
                icon: "icon-error",
                ignoreSafeArea: true
            }, GenericMessageOverlayComponent_1);
        };
        GenericMessageOverlayComponent.prototype.handleExitKey = function () {
            this.props.closeDialogWithResult({ resultId: "cancel" });
            return true;
        };
        GenericMessageOverlayComponent.prototype.render = function () {
            var _this = this;
            var extraData = this.props.model.extraData;
            var title = extraData.title || public_1.Filter.message(this, public_4.messagesErrors.ERROR_TITLE);
            var bodyText = extraData.text || public_1.Filter.message(this, public_4.messagesErrors.ERROR_DESCRIPTION);
            var suggestion = extraData.suggestion;
            var buttons = [
                {
                    autofocus: true,
                    icon: public_3.Css.sprites.A_IC_029_2_36x36,
                    id: "cancel",
                    text: extraData.okButtonText
                }
            ];
            return React.createElement(public_1.NavigationContainer, { className: this.ID, id: "genericMsgDialog", useCycle: true },
                React.createElement(public_1.NavigationKey, { keyFilter: "EXIT_KEY", onKey: function () { return _this.handleExitKey(); } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "0-9", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset1", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset2", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset3", onKey: function () { return true; } }),
                React.createElement("div", { className: "dttv-genericdialog" },
                    React.createElement("h1", { className: "position-center icon icon-error" }, title),
                    React.createElement("p", { className: public_3.Css.fonts2.a_fo_b1_1 + " margin-to-controls", dangerouslySetInnerHTML: { __html: bodyText } }),
                    React.createElement("p", { className: public_3.Css.fonts2.a_fo_b1_1 + " margin-to-controls", dangerouslySetInnerHTML: { __html: suggestion } }),
                    React.createElement("div", { className: "dttv-center " + public_1.Button.Bars.horizontal }, buttons.map(function (item) { return React.createElement(public_1.Button.StandardV20, { key: item.id, id: item.id, text: item.text, icon: item.icon, autofocus: item.autofocus, onClick: function () { return _this.props.closeDialogWithResult({ resultId: item.id }); } }); }))));
        };
        var GenericMessageOverlayComponent_1;
        GenericMessageOverlayComponent = GenericMessageOverlayComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "vodplayer-genericmessageoverlay-component",
                styles: [
                    public_3.selector("& p.margin-to-controls")
                        .props({
                        marginBottom: 39
                    })
                ]
            }),
            public_2.logTag()
        ], GenericMessageOverlayComponent);
        return GenericMessageOverlayComponent;
    }(public_1.ReactBaseComponent));
    exports.GenericMessageOverlayComponent = GenericMessageOverlayComponent;
});
//# sourceMappingURL=generic_messageoverlay.component.js.map