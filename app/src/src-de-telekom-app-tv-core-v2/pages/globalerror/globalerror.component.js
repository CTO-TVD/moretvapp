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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "../../translation/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVGlobalErrorComponent = exports.GlobalErrorCode = void 0;
    var GlobalErrorCode;
    (function (GlobalErrorCode) {
        GlobalErrorCode[GlobalErrorCode["Network_102001"] = 0] = "Network_102001";
        GlobalErrorCode[GlobalErrorCode["Network_102004"] = 1] = "Network_102004";
        GlobalErrorCode[GlobalErrorCode["Network_102011"] = 2] = "Network_102011";
    })(GlobalErrorCode = exports.GlobalErrorCode || (exports.GlobalErrorCode = {}));
    var TVGlobalErrorComponent = (function (_super) {
        __extends(TVGlobalErrorComponent, _super);
        function TVGlobalErrorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVGlobalErrorComponent.prototype.render = function () {
            var title;
            var suggestion;
            var bodyText;
            switch (this.props.model.extraData) {
                case GlobalErrorCode.Network_102001:
                    title = public_1.Filter.message(this, public_3.messagesCore.Error_102001_Title);
                    suggestion = public_1.Filter.message(this, public_3.messagesCore.Error_102001_Suggestion);
                    bodyText = public_1.Filter.message(this, public_3.messagesCore.Error_102001_Bodytext);
                    break;
                default:
                    title = "Es ist ein unbekannter Fehler aufgetreten";
                    suggestion = "";
                    bodyText = "Tun Sie irgendetwas !";
                    break;
            }
            var showHeaderH1 = title.length <= 40;
            return React.createElement(public_1.NavigationContainer, { className: this.ID, id: "globalErrorDialog" },
                React.createElement(public_1.NavigationKey, { keyFilter: "0-9", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset1", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset2", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset3", onKey: function () { return true; } }),
                React.createElement("div", { className: "dttv-genericdialog-v2" },
                    showHeaderH1 ? React.createElement("h1", { className: "position-center" }, title) : React.createElement("p", { className: "margin-standard" }, title),
                    React.createElement("p", { className: "margin-to-controls", dangerouslySetInnerHTML: { __html: bodyText } }),
                    React.createElement("p", { className: "margin-to-controls", dangerouslySetInnerHTML: { __html: suggestion } })));
        };
        TVGlobalErrorComponent = __decorate([
            public_1.reactComponent({
                ID: "global-error-component",
                styles: public_1.GenericDialogTemplate.getTemplate()
            }),
            public_2.logTag()
        ], TVGlobalErrorComponent);
        return TVGlobalErrorComponent;
    }(public_1.ReactBaseComponent));
    exports.TVGlobalErrorComponent = TVGlobalErrorComponent;
});
//# sourceMappingURL=globalerror.component.js.map