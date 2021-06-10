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
define(["require", "exports", "react", "react-transition-group", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../../translation/public"], function (require, exports, React, react_transition_group_1, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextInputDialogComponent = void 0;
    var TextInputDialogComponent = (function (_super) {
        __extends(TextInputDialogComponent, _super);
        function TextInputDialogComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = {
                extraData: JSON.parse(JSON.stringify(_this.props.model.extraData)),
                renderPanel: true,
                show: false,
                resetInput: {},
                action: ""
            };
            return _this;
        }
        TextInputDialogComponent_1 = TextInputDialogComponent;
        TextInputDialogComponent.prototype.onExited = function (node) {
            this.setState({ renderPanel: false });
            this.props.closeDialogWithResult({ resultId: this.state.action, extraData: this.state.extraData });
        };
        TextInputDialogComponent.prototype.onClose = function () {
            this.setState({ show: false, action: "okay" });
            return true;
        };
        TextInputDialogComponent.prototype.onCancel = function () {
            this.setState({ show: false, action: "cancel" });
            return true;
        };
        TextInputDialogComponent.prototype.handleInput = function (text) {
            this.setState(function (prevState) {
                prevState.extraData.title = text;
                return prevState;
            });
        };
        TextInputDialogComponent.prototype.validate = function () {
            try {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Start validation of new title", TextInputDialogComponent_1.TAG)); });
                var dialogData_1 = this.state.extraData;
                var notificationService = public_1.TVNotificationService.getInstance();
                if (!dialogData_1.title) {
                    if (dialogData_1.titleMinLengthMessage != null && dialogData_1.titleMinLengthMessage.length > 0) {
                        notificationService.notifyError(dialogData_1.titleMinLengthMessage);
                        return false;
                    }
                    else {
                        throw new public_3.IllegalArgumentError("validate failed for empty title");
                    }
                }
                else {
                    var spaceCroppedTitle_1 = dialogData_1.title.replace(/\s+/g, "");
                    if (dialogData_1.titleBlacklist != null && dialogData_1.titleBlacklist.length > 0) {
                        for (var _i = 0, _a = dialogData_1.titleBlacklist; _i < _a.length; _i++) {
                            var blacklistEntry = _a[_i];
                            if (blacklistEntry.toLowerCase() == dialogData_1.title.toLowerCase()) {
                                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Valiation fails because title " + dialogData_1.title + " is on blacklist", TextInputDialogComponent_1.TAG)); });
                                notificationService.notifyError(dialogData_1.titleBlacklistMessage);
                                return false;
                            }
                        }
                    }
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Checking minimum length ...", TextInputDialogComponent_1.TAG)); });
                    if (spaceCroppedTitle_1.length < dialogData_1.titleMinLength) {
                        public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Title length " + spaceCroppedTitle_1.length + " less than minLenght of " + dialogData_1.titleMinLength, TextInputDialogComponent_1.TAG)); });
                        if (dialogData_1.titleMinLengthMessage != null && dialogData_1.titleMinLengthMessage.length > 0) {
                            notificationService.notifyError(dialogData_1.titleMinLengthMessage);
                        }
                        return false;
                    }
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Checking maximum length ...", TextInputDialogComponent_1.TAG)); });
                    if (spaceCroppedTitle_1.length > dialogData_1.titleMaxLength) {
                        public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Title length " + spaceCroppedTitle_1.length + " more than maxLenght of " + dialogData_1.titleMaxLength, TextInputDialogComponent_1.TAG)); });
                        if (dialogData_1.titleMaxLengthMessage != null && dialogData_1.titleMaxLengthMessage.length > 0) {
                            notificationService.notifyError(dialogData_1.titleMaxLengthMessage);
                        }
                        return false;
                    }
                    return true;
                }
            }
            catch (error) {
                var notificationService = public_1.TVNotificationService.getInstance();
                public_3.Logger.error(function (log) { return log(public_3.LogMsg("validate exception: " + JSON.stringify(error), TextInputDialogComponent_1.TAG)); });
                notificationService.notifyError(public_4.messagesCore.STB_PC_TI035_D);
                return false;
            }
        };
        TextInputDialogComponent.createDialog = function (dialogData, layer) {
            if (layer === void 0) { layer = public_1.DialogLayer.dialogLayer1; }
            return public_1.TVDialogHostService.getInstance().show({ extraData: dialogData, disableAnimation: true, hideBackground: true, ignoreSafeArea: true }, TextInputDialogComponent_1, { layer: layer, voiceCommandBehaviour: { disableVoiceCommandExecution: true } });
        };
        TextInputDialogComponent.prototype.componentDidMount = function () {
            this.setState({ show: true });
        };
        TextInputDialogComponent.prototype.render = function () {
            var _this = this;
            var titleClasses = ["title", public_2.Css.fonts2.a_fo_h3_2];
            return React.createElement(public_1.NavigationContainer, { className: this.ID, id: this.ID, strictHorizontal: true },
                React.createElement(public_1.NavigationKey, { keyFilter: "0-9", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset1", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset2", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset3", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "BACK_KEY", onKey: function () { return _this.onCancel(); } }),
                React.createElement(react_transition_group_1.CSSTransition, { timeout: TextInputDialogComponent_1.backgroundAnimationDuration, classNames: "fade", in: this.state.show },
                    React.createElement("div", { className: "background" })),
                this.state.renderPanel &&
                    React.createElement(react_transition_group_1.CSSTransition, { timeout: TextInputDialogComponent_1.transitionScaleInDuration, classNames: "close", in: this.state.show, onExited: function (node) { return _this.onExited(node); } },
                        React.createElement(react_transition_group_1.CSSTransition, { timeout: TextInputDialogComponent_1.transitionScaleInDuration, classNames: "show", in: this.state.show },
                            React.createElement("div", { className: "backgroundContainer" },
                                React.createElement("div", { className: titleClasses.join(" ") }, public_1.Filter.message(this, this.state.extraData.headline)),
                                React.createElement(public_1.TVBlockInputComponent, { className: "input", autoCase: this.state.extraData.autoCase, layout: this.state.extraData.layout, maxlength: this.state.extraData.titleMaxLength, reset: this.state.resetInput, inputtext: this.state.extraData.title, type: "textinput", onInputData: function (text) { return _this.handleInput(text); }, useCycle: false, onMaxLength: function () { if (_this.state.extraData.titleMaxLengthMessage)
                                        public_1.TVNotificationService.getInstance().notifyError(_this.state.extraData.titleMaxLengthMessage); } }),
                                React.createElement(public_1.NavigationContainer, { className: public_1.Button.Bars.horizontal.autoStretch.center + " buttobarPositionWidth", id: "buttons", autofocus: false },
                                    React.createElement(public_1.Button.StandardV20, { id: "cancel", text: public_1.Filter.message(this, public_4.messagesCore.STB_RS_TI005), icon: public_2.Css.sprites.A_IC_029_2_36x36, onClick: function (e) { return _this.onCancel(); } }),
                                    React.createElement(public_1.Button.StandardV20, { id: "okay", autofocus: true, text: public_1.Filter.message(this, public_4.messagesCore.STB_RS_TI009), icon: public_2.Css.sprites.A_IC_009_2_36x36, onClick: function (e) { return _this.validate() ? _this.onClose() : true; } }))))));
        };
        var TextInputDialogComponent_1;
        TextInputDialogComponent.backgroundAnimationDuration = 250;
        TextInputDialogComponent.transitionScaleInDuration = 250;
        TextInputDialogComponent.blackPanelLeftPosition = 1065;
        TextInputDialogComponent = TextInputDialogComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "text-input-dialog-component",
                styles: [
                    public_2.selector("& .background")
                        .props({
                        backgroundColor: public_2.Css.colors.A_CO_4_35,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        opacity: 0,
                        height: public_2.Css.dimensions.screenHeight,
                        width: public_2.Css.dimensions.screenWidth,
                    }),
                    public_2.selector("& .background.fade-enter")
                        .props({
                        opacity: 0
                    }),
                    public_2.selector("& .background.fade-enter-done")
                        .props({
                        opacity: 1
                    }),
                    public_2.selector("& .background.fade-enter.fade-enter-active")
                        .props({
                        opacity: 1,
                        transition: "opacity " + TextInputDialogComponent_1.backgroundAnimationDuration + "ms ease"
                    }),
                    public_2.selector("& .background.fade-exit")
                        .props({
                        opacity: 1
                    }),
                    public_2.selector("& .background.fade-exit.fade-exit-active")
                        .props({
                        opacity: 0,
                        transition: "opacity " + TextInputDialogComponent_1.backgroundAnimationDuration + "ms ease"
                    }),
                    public_2.selector("& ." + public_1.TVInputFieldComponent.ID)
                        .props({
                        left: 18
                    }),
                    public_2.selector("& .mycontainer")
                        .props({
                        position: "absolute",
                        top: 0,
                        bottom: 0
                    }),
                    public_2.selector("& .backgroundContainer")
                        .props({
                        position: "absolute",
                        width: public_2.Css.dimensions.screenWidth - (TextInputDialogComponent_1.blackPanelLeftPosition + public_2.Css.dimensions.safeareaLeft),
                        height: public_2.Css.dimensions.screenHeight,
                        top: 0,
                        overflow: "hidden",
                        left: TextInputDialogComponent_1.blackPanelLeftPosition + public_2.Css.dimensions.safeareaLeft,
                        backgroundColor: public_2.Css.colors.A_CO_4_90,
                        willChange: "transform, opacity"
                    }),
                    public_2.selector("& .buttobarPositionWidth")
                        .props({
                        top: 795,
                        marginLeft: 72,
                        marginRight: 72
                    }),
                    public_2.selector("& .title")
                        .props({
                        position: "absolute",
                        top: 77,
                        left: 96
                    }),
                    public_2.selector("& .input")
                        .props({
                        top: 284,
                        left: 72,
                        width: 552,
                        overflow: "hidden"
                    }),
                    public_2.selector("& .show-enter")
                        .props({
                        opacity: 0,
                        transform: "translateX(25%)"
                    }),
                    public_2.selector("& .show-enter.show-enter-active")
                        .props({
                        transform: "translateX(0)",
                        opacity: 1,
                        transition: "transform " + TextInputDialogComponent_1.transitionScaleInDuration + "ms ease, opacity " + TextInputDialogComponent_1.transitionScaleInDuration + "ms ease"
                    }),
                    public_2.selector("& .close-exit")
                        .props({
                        opacity: 1,
                        transform: "translateX(0)"
                    }),
                    public_2.selector("& .close-exit.close-exit-active")
                        .props({
                        transform: "translateX(50%)",
                        opacity: 0,
                        transition: "transform " + TextInputDialogComponent_1.transitionScaleInDuration + "ms ease, opacity " + TextInputDialogComponent_1.transitionScaleInDuration + "ms ease"
                    })
                ]
            }),
            public_3.logTag()
        ], TextInputDialogComponent);
        return TextInputDialogComponent;
    }(public_1.ReactBaseComponent));
    exports.TextInputDialogComponent = TextInputDialogComponent;
});
//# sourceMappingURL=textinputdialog.js.map