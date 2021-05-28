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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../translation/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExitDialogComponent = exports.ExitDialogResult = void 0;
    var ExitDialogResult;
    (function (ExitDialogResult) {
        ExitDialogResult["confirm"] = "confirm";
        ExitDialogResult["cancel"] = "cancel";
    })(ExitDialogResult = exports.ExitDialogResult || (exports.ExitDialogResult = {}));
    var ExitDialogComponent = (function (_super) {
        __extends(ExitDialogComponent, _super);
        function ExitDialogComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ExitDialogComponent.prototype.render = function () {
            var _this = this;
            return React.createElement(public_1.NavigationContainer, { className: this.ID, id: "exitdialog" },
                React.createElement(public_1.NavigationKey, { keyFilter: "EXIT_KEY", onKey: function () { return _this.handleExitKey(); } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "0-9", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset1", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset2", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset3", onKey: function () { return true; } }),
                React.createElement("div", { className: "dttv-genericdialog-v2 exitdialog" },
                    React.createElement("h1", { className: "position-center headline" }, public_1.Filter.join(this, this.props.model.title)),
                    React.createElement("p", { className: "" + public_1.Paragraphs.Standard.class.marginToControls }, public_1.Filter.join(this, this.props.model.message)),
                    React.createElement("div", { className: public_1.Button.Bars.horizontal.center + " buttons" },
                        React.createElement(public_1.Button.StandardV20, { autofocus: false, icon: public_2.Css.sprites.A_IC_029_2_36x36, onClick: function () { return _this.props.closeDialogWithResult({ resultId: ExitDialogResult.cancel }); }, id: ExitDialogResult.cancel, text: public_4.messagesCore.STB_GN_TI004 }),
                        React.createElement(public_1.Button.StandardV20, { autofocus: true, icon: public_2.Css.sprites.A_IC_009_2_36x36, onClick: function () { return _this.props.closeDialogWithResult({ resultId: ExitDialogResult.confirm }); }, id: ExitDialogResult.confirm, text: public_4.messagesCore.STB_GN_TI003 }))));
        };
        ExitDialogComponent.prototype.handleExitKey = function () {
            this.props.closeDialogWithResult({ resultId: ExitDialogResult.confirm });
            return true;
        };
        ExitDialogComponent = __decorate([
            public_1.reactComponent({
                ID: "applauncher-exit-dialog-component",
                styles: __spreadArray(__spreadArray([], public_1.GenericDialogTemplate.getTemplate()), [
                    public_2.selector("&")
                        .sub(public_2.selector(".exitdialog")
                        .props({
                        marginTop: 12
                    }))
                        .sub(public_2.selector(".headline")
                        .props({
                        marginTop: -3
                    }))
                        .sub(public_2.selector(".buttons")
                        .props({
                        top: 6
                    }))
                ])
            }),
            public_3.logTag()
        ], ExitDialogComponent);
        return ExitDialogComponent;
    }(public_1.ReactBaseComponent));
    exports.ExitDialogComponent = ExitDialogComponent;
});
//# sourceMappingURL=exitdialog.component.js.map