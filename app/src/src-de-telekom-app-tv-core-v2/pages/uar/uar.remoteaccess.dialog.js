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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "../../component/public", "src/src-de-telekom/public", "../../translation/public"], function (require, exports, React, public_1, public_2, public_3, public_4, public_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UarRemoteAccessDialogComponent = void 0;
    var UarRemoteAccessDialogComponent = (function (_super) {
        __extends(UarRemoteAccessDialogComponent, _super);
        function UarRemoteAccessDialogComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UarRemoteAccessDialogComponent_1 = UarRemoteAccessDialogComponent;
        UarRemoteAccessDialogComponent.prototype.onCloseTimerComplete = function () {
            this.props.closeDialogWithResult({ resultId: "cancel" });
        };
        UarRemoteAccessDialogComponent.prototype.render = function () {
            var _this = this;
            return React.createElement(public_1.NavigationContainer, { className: this.ID + " dialogsize", id: "uarPIN" },
                React.createElement(public_1.NavigationKey, { keyFilter: "0-9", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset1", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset2", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset3", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "MENU_KEY", onKey: function () { return true; } }),
                React.createElement("div", { className: "dttv-genericdialog-v2" },
                    React.createElement("h1", { className: "position-center" }, public_1.Filter.message(this, public_5.messagesCore.STB_RA_0001)),
                    React.createElement("p", null, public_1.Filter.message(this, public_5.messagesCore.STB_RA_0002)),
                    React.createElement(public_3.CloseTimerComponent, { textLine1BeforeSeconds: public_1.Filter.message(this, public_5.messagesCore.STB_ST_TI118_1), seconds: public_4.Configuration.instance.timings.uarRemoteAccessDialogTimeout || 30, textLine1AfterSeconds: public_1.Filter.message(this, public_5.messagesCore.STB_ST_TI118_3), textLine2: public_1.Filter.message(this, public_5.messagesCore.STB_ST_TI118_4), textStyle: public_2.Css.fonts2.a_fo_b1_1, onClose: function () { return _this.onCloseTimerComplete(); } }),
                    React.createElement("div", { className: public_1.Button.Bars.horizontal.center + " buttonMargin" },
                        React.createElement(public_1.Button.StandardV20, { className: "buttonWidth", icon: public_2.Css.sprites.A_IC_029_2_36x36, id: "cancel", onClick: function (e) { return _this.props.closeDialogWithResult({ resultId: e.props.id }); }, text: public_5.messagesCore.STB_CM_TI017_A }),
                        React.createElement(public_1.Button.StandardV20, { className: "buttonWidth", icon: public_2.Css.sprites.A_IC_009_2_36x36, id: "confirm", onClick: function (e) { return _this.props.closeDialogWithResult({ resultId: e.props.id }); }, text: public_5.messagesCore.STB_CM_TI018_A }))));
        };
        var UarRemoteAccessDialogComponent_1;
        UarRemoteAccessDialogComponent.DialogWidth = 936;
        UarRemoteAccessDialogComponent = UarRemoteAccessDialogComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "uar-remoteaccess-dialog-component",
                styles: __spreadArrays(public_1.GenericDialogTemplate.getTemplate(), [
                    public_2.selector("&.dialogsize")
                        .props({
                        width: UarRemoteAccessDialogComponent_1.DialogWidth
                    }),
                    public_2.selector("& .buttonMargin")
                        .props({
                        marginTop: 24
                    })
                ])
            }),
            public_4.logTag()
        ], UarRemoteAccessDialogComponent);
        return UarRemoteAccessDialogComponent;
    }(public_1.ReactBaseComponent));
    exports.UarRemoteAccessDialogComponent = UarRemoteAccessDialogComponent;
});
//# sourceMappingURL=uar.remoteaccess.dialog.js.map