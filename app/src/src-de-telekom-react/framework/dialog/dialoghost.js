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
define(["require", "exports", "react", "../../base/public", "./dialog.interface", "./dialoghost.service", "../navigation/public", "react-transition-group", "src/src-de-telekom-style/public", "src/src-de-telekom/public"], function (require, exports, React, public_1, dialog_interface_1, dialoghost_service_1, public_2, react_transition_group_1, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVDialogHostComponent = void 0;
    var TVDialogHostComponent = (function (_super) {
        __extends(TVDialogHostComponent, _super);
        function TVDialogHostComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            var dialogService = dialoghost_service_1.TVDialogHostService.getInstance();
            _this.state = { panelVisible: true, show: false, hasError: false };
            var parentLayer = _this.findParentComponent(public_2.LayerId).component;
            if (parentLayer) {
                var layer = dialog_interface_1.DialogLayer[parentLayer.activationKey];
                _this.currentDialog = dialogService.getNextDialog(layer);
            }
            return _this;
        }
        TVDialogHostComponent_1 = TVDialogHostComponent;
        TVDialogHostComponent.prototype.componentWillUnmount = function () {
            if (this.currentDialog) {
                this.currentDialog.abortDialog({ resultId: "Dialog aborted." });
            }
            if (this.onExitCallback) {
                this.onExitCallback();
                this.onExitCallback = undefined;
            }
        };
        TVDialogHostComponent.prototype.componentDidCatch = function (error, errorInfo) {
            this.setState({ hasError: true });
            this.closeDialogAbort({ resultId: error === null || error === void 0 ? void 0 : error.message });
            public_4.ErrorManager.catch(new public_1.ReactUnhandledApplicationError(error.message, error.name, error.stack, errorInfo.componentStack), TVDialogHostComponent_1, 0x1);
        };
        TVDialogHostComponent.prototype.closeDialogWithResult = function (result) {
            if (this.currentDialog) {
                this.setState({ show: false });
                var defer_1 = public_4.Defer.defer();
                this.currentDialog.closeDialogWithResult(__assign(__assign({}, result), { closed: defer_1.promise }));
                this.onExitCallback = function () { return defer_1.resolve(null); };
            }
        };
        TVDialogHostComponent.prototype.closeDialogAbort = function (result) {
            if (this.currentDialog) {
                this.setState({ show: false });
                this.currentDialog.abortDialog(__assign({}, result));
            }
        };
        TVDialogHostComponent.prototype.hasEntered = function () {
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("transition is finished", TVDialogHostComponent_1.TAG)); });
        };
        TVDialogHostComponent.prototype.componentDidMount = function () {
            this.setState({ show: true });
        };
        TVDialogHostComponent.prototype.render = function () {
            var _this = this;
            var _a;
            if (this.state.hasError) {
                return null;
            }
            if (this.currentDialog) {
                var DialogComponent = this.currentDialog.dialog;
                var containerClasses = ["dialoghostContainer"];
                if (!this.currentDialog.model.disableAnimation) {
                    containerClasses.push("animated");
                }
                var props = {
                    model: this.currentDialog.model,
                    buttons: this.currentDialog.buttons,
                    closeDialogWithResult: function (result) { return _this.closeDialogWithResult(result); },
                    abortDialog: function (result) { return _this.closeDialogAbort(result); }
                };
                return this.state.panelVisible &&
                    React.createElement(React.Fragment, null,
                        React.createElement(public_2.NavigationKey, { keyFilter: "BACK_KEY", onKey: function () {
                                _this.setState({ show: false });
                                if (_this.currentDialog)
                                    _this.currentDialog.abortDialog({ resultId: "Dialog aborted." });
                                return true;
                            } }),
                        React.createElement("div", { className: "dttv-dialog " + this.ID + " " + (this.currentDialog.model.ignoreSafeArea ? " ignoresafearea" : "") },
                            !this.currentDialog.model.hideBackground &&
                                React.createElement(react_transition_group_1.CSSTransition, { timeout: public_3.Css.transitions.middleMs, classNames: "fade", in: true, appear: true },
                                    React.createElement("div", { className: ["background", this.currentDialog.model.opaqueBackground ? "opaque" : undefined].join(" ") })),
                            this.currentDialog.model.disableAnimation ?
                                React.createElement("div", { className: "dialoghostContainer" },
                                    React.createElement(DialogComponent, __assign({}, props)))
                                :
                                    React.createElement(react_transition_group_1.CSSTransition, { timeout: public_3.Css.transitions.middleMs, classNames: "fadeIn", in: (_a = this.state) === null || _a === void 0 ? void 0 : _a.show, onExited: function () { return _this.setState({ panelVisible: false }); }, onEntered: function () { return _this.hasEntered(); } },
                                        React.createElement("div", { className: containerClasses.join(" ") },
                                            React.createElement(DialogComponent, __assign({}, props))))));
            }
            return null;
        };
        var TVDialogHostComponent_1;
        TVDialogHostComponent.classID = 0x727;
        TVDialogHostComponent = TVDialogHostComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "dialog-host-component",
                styles: [public_3.selector("&")
                        .sub(public_3.selector("& .background.fade-appear")
                        .props({
                        opacity: 0
                    }))
                        .sub(public_3.selector("& .background.fade-appear.fade-appear-active")
                        .props({
                        opacity: 1,
                        transition: "opacity " + public_3.Css.transitions.middle + " ease",
                    }))
                        .sub(public_3.selector("& .dialoghostContainer.animated")
                        .props({
                        willChange: "transform, opacity",
                        opacity: 0
                    }))
                        .sub(public_3.selector("& .dialoghostContainer.fadeIn-enter")
                        .props({
                        opacity: 0,
                        transform: "scale(0.8)"
                    }))
                        .sub(public_3.selector("& .dialoghostContainer.fadeIn-enter-done")
                        .props({
                        opacity: 1
                    }))
                        .sub(public_3.selector("& .dialoghostContainer.fadeIn-enter.fadeIn-enter-active")
                        .props({
                        transform: "scale(1)",
                        opacity: 1,
                        transition: "transform " + public_3.Css.transitions.middle + " " + public_3.Css.transitions.easeOutQuad + ", opacity " + public_3.Css.transitions.middle + " " + public_3.Css.transitions.easeOutQuad,
                    }))
                        .sub(public_3.selector("& .dialoghostContainer.fadeIn-exit")
                        .props({
                        transform: "scale(1)",
                        opacity: 1
                    }))
                        .sub(public_3.selector("& .dialoghostContainer.fadeIn-exit.fadeIn-exit-active")
                        .props({
                        opacity: 0,
                        transform: "scale(0.8)",
                        transition: "transform " + public_3.Css.transitions.veryshort + " " + public_3.Css.transitions.easeOutQuad + ", opacity " + public_3.Css.transitions.veryshort + " " + public_3.Css.transitions.easeOutQuad,
                    }))
                ]
            })
        ], TVDialogHostComponent);
        return TVDialogHostComponent;
    }(public_1.ReactBaseComponent));
    exports.TVDialogHostComponent = TVDialogHostComponent;
});
//# sourceMappingURL=dialoghost.js.map