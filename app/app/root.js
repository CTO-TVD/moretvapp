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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public"], function (require, exports, React, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Root = void 0;
    var Root = (function (_super) {
        __extends(Root, _super);
        function Root(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.changeDialogLayer = function (e) {
                _this.setState(function (prevState) {
                    var _a;
                    if (prevState[e.activationKey] === e.isActive) {
                        return null;
                    }
                    return _a = {}, _a[e.activationKey] = e.isActive, _a;
                });
            };
            _this.state = {};
            return _this;
        }
        Root.prototype.render = function () {
            var _this = this;
            return React.createElement(React.Fragment, null,
                React.createElement("div", { style: { position: "fixed", opacity: 0.00001 }, className: public_2.Css.sprites.A_IC_059_1_36x36 }),
                React.createElement("span", { style: { top: -66, position: "absolute" } },
                    React.createElement("span", { className: "" + public_2.Css.fonts2.a_fo_b1_1 }, "A"),
                    " ",
                    React.createElement("span", { className: "" + public_2.Css.fonts2.a_fo_b1_3 }, "B"),
                    " ",
                    React.createElement("span", { className: "" + public_2.Css.fonts2.a_fo_h2_2 }, "C"),
                    " ",
                    React.createElement("span", { className: "" + public_2.Css.fonts2.a_fo_h3_1 }, "D"),
                    " ",
                    React.createElement("span", { className: "" + public_2.Css.fonts2.a_fo_b1_4 }, "E"),
                    " "),
                React.createElement(public_1.ErrorBoundaryComponent, null,
                    React.createElement(public_1.Layer, { className: "dttv-background-layer", priority: -30, activationKey: "backgroundLayer" }, function () { return React.createElement(React.Fragment, null,
                        React.createElement(public_1.BackgroundComponent, { backgroundId: public_1.BackgroundService.COMPONENT_PLAYER_MASKING }),
                        React.createElement(public_1.BackgroundComponent, { backgroundId: public_1.BackgroundService.COMPONENT_PAGE_BACKGROUND })); }),
                    React.createElement(public_1.Layer, { className: "dttv-root-layer page", priority: 10 }, function () { var _a, _b; return (_b = (_a = _this.props).children) === null || _b === void 0 ? void 0 : _b.call(_a); }),
                    React.createElement(public_1.Layer, { className: "dttv-optionpanel-layer", priority: 50, activationKey: "optionPanelLayer" }, function () { return React.createElement(public_1.TVOptionPanelComponent, null); }),
                    React.createElement(public_1.Layer, { className: "dttv-dialog-layer" + (this.state.dialogLayer2 ? " dimmed" : ""), priority: 100, activationKey: "dialogLayer1", onChange: this.changeDialogLayer }, function () { return React.createElement(public_1.TVDialogHostComponent, null); }),
                    React.createElement(public_1.Layer, { className: "dttv-dialog-layer" + (this.state.dialogLayer3 ? " dimmed" : ""), priority: 110, activationKey: "dialogLayer2", onChange: this.changeDialogLayer }, function () { return React.createElement(public_1.TVDialogHostComponent, null); }),
                    React.createElement(public_1.Layer, { className: "dttv-dialog-layer" + (this.state.dialogLayer4 ? " dimmed" : ""), priority: 120, activationKey: "dialogLayer3", onChange: this.changeDialogLayer }, function () { return React.createElement(public_1.TVDialogHostComponent, null); }),
                    React.createElement(public_1.Layer, { className: "dttv-dialog-layer", priority: 130, activationKey: "dialogLayer4", onChange: this.changeDialogLayer }, function () { return React.createElement(public_1.TVDialogHostComponent, null); }),
                    React.createElement(public_1.Layer, { className: "dttv-remote-layer", priority: 135, activationKey: "remoteLayer" }, function (layerprops) { return React.createElement(public_1.RemoteInteractionComponent, { notification: layerprops }); }),
                    React.createElement(public_1.Layer, { className: "dttv-notification-layer", priority: 200, activationKey: "notificationLayer" }, function () { return React.createElement(public_1.TVNotificationComponent, null); }),
                    React.createElement(public_1.Layer, { className: "dttv-volume-layer", priority: 250, activationKey: "volumeLayer" }, function (layerprops) { return React.createElement(public_1.TVVolumeControl, { volumeData: layerprops }); }),
                    React.createElement(public_1.Layer, { className: "dttv-diagnostic-layer", priority: 300, activationKey: "diagnosticLayer" }, function () { return React.createElement(public_1.DiagnosticsOverviewComponent, null); })));
        };
        Root = __decorate([
            public_1.reactComponent({
                ID: "root-component"
            })
        ], Root);
        return Root;
    }(public_1.ReactBaseComponent));
    exports.Root = Root;
});
//# sourceMappingURL=root.js.map