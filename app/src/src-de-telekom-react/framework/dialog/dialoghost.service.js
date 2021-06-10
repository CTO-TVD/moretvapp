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
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "./dialog.interface", "../navigation/public", "../../base/public", "./genericDialog/genericdialog", "src/src-de-telekom-style/public", "src/src-de-telekom/util/public"], function (require, exports, bluebird, public_1, dialog_interface_1, public_2, public_3, genericdialog_1, public_4, public_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVDialogHostService = exports.DialogAbortError = void 0;
    var DialogAbortError = (function (_super) {
        __extends(DialogAbortError, _super);
        function DialogAbortError(message, resultId) {
            var _this = _super.call(this, message) || this;
            _this.resultId = resultId;
            _this.errorID = 0x00B;
            return _this;
        }
        return DialogAbortError;
    }(public_1.BaseError));
    exports.DialogAbortError = DialogAbortError;
    var TVDialogHostService = (function (_super) {
        __extends(TVDialogHostService, _super);
        function TVDialogHostService() {
            var _this = _super.call(this) || this;
            _this.dialogProcess = Object.create(null);
            _this.currentDialog = Object.create(null);
            _this.openDialogs = [];
            _this.dialogTimeoutHandles = {};
            _this.defaultVoiceCommandBehaviour = { disableVoiceCommandExecution: false };
            _this.layerService = public_2.TVLayerManagerService.getInstance();
            for (var _i = 0, _a = public_1.Enums.getValues(dialog_interface_1.DialogLayer); _i < _a.length; _i++) {
                var layer = _a[_i];
                _this.dialogProcess[layer] = bluebird.resolve();
            }
            return _this;
        }
        TVDialogHostService.prototype.getNextDialog = function (layer) {
            return this.currentDialog[layer];
        };
        TVDialogHostService.prototype.createNewDialogData = function (data, dialogComponent, voiceCommandBehaviour, buttons) {
            var deferred = public_1.Defer.defer();
            var dialog = {
                ID: public_5.StringTools.generateUUID(),
                model: data,
                dialog: dialogComponent,
                buttons: buttons,
                isFinished: false,
                voiceCommandBehaviour: voiceCommandBehaviour,
                result: deferred.promise.finally(function () { return dialog.isFinished = true; }),
                abortDialog: function (result) { return deferred.reject(new DialogAbortError("Dialog aborted.", (result === null || result === void 0 ? void 0 : result.resultId) || "")); },
                closeDialogWithResult: function (result) { return deferred.resolve(result); }
            };
            return dialog;
        };
        TVDialogHostService.prototype.closeAllOpenDialogs = function (resultId) {
            this.openDialogs.forEach(function (openDialog) { return openDialog.abortDialog({ resultId: resultId }); });
        };
        TVDialogHostService.prototype.getOpenDialogs = function () {
            return this.openDialogs;
        };
        TVDialogHostService.prototype.getVoiceDisablingDialogCount = function () {
            if (this.openDialogs.length == 0)
                return undefined;
            return this.openDialogs.filter(function (dialog) { var _a; return (_a = dialog.voiceCommandBehaviour) === null || _a === void 0 ? void 0 : _a.disableVoiceCommandExecution; }).length;
        };
        TVDialogHostService.prototype.getCommandExecutionDisabledMessage = function () {
            var _a;
            var disableVoiceCommandDialogs = this.openDialogs.filter(function (dialog) { var _a; return (_a = dialog.voiceCommandBehaviour) === null || _a === void 0 ? void 0 : _a.disableVoiceCommandExecution; });
            if (disableVoiceCommandDialogs.length > 0) {
                var topLayerDialog = disableVoiceCommandDialogs[disableVoiceCommandDialogs.length - 1];
                return (_a = topLayerDialog.voiceCommandBehaviour) === null || _a === void 0 ? void 0 : _a.disableVoiceCommandNotification;
            }
            return undefined;
        };
        TVDialogHostService.prototype.addDialogReference = function (dialog) {
            this.openDialogs.push(dialog);
        };
        TVDialogHostService.prototype.removeDialogReference = function (dialog) {
            this.openDialogs = this.openDialogs.filter(function (openDialog) { return openDialog.ID != dialog.ID; });
            if (public_1.Guard.isNumber(this.dialogTimeoutHandles[dialog.ID])) {
                delete this.dialogTimeoutHandles[dialog.ID];
            }
        };
        TVDialogHostService.prototype.showInformationDialog = function (title, message, confirmButtonText, layer, voiceCommandBehaviour, dialogWidth) {
            return this.showSingleButtonDialog(title, message, confirmButtonText, { layer: layer, voiceCommandBehaviour: voiceCommandBehaviour, icon: "icon-info", dialogWidth: dialogWidth });
        };
        TVDialogHostService.prototype.showErrorDialog = function (title, message, confirmButtonText, layer, voiceCommandBehaviour, autoCloseBehaviour) {
            if (voiceCommandBehaviour === void 0) { voiceCommandBehaviour = { disableVoiceCommandExecution: true }; }
            return this.showSingleButtonDialog(title, message, confirmButtonText, { layer: layer, voiceCommandBehaviour: voiceCommandBehaviour, icon: "icon-error", autoCloseBehaviour: autoCloseBehaviour });
        };
        TVDialogHostService.prototype.showSuccessDialog = function (title, message, confirmButtonText, layer, voiceCommandBehaviour) {
            return this.showSingleButtonDialog(title, message, confirmButtonText, { layer: layer, voiceCommandBehaviour: voiceCommandBehaviour, icon: "icon-success" });
        };
        TVDialogHostService.prototype.showCheckboxDialog = function (title, message, checkboxText, checked, confirmButtonText, cancelButtonText, layer, voiceCommandBehaviour) {
            var data = {
                title: title,
                message: message,
                extraData: {
                    checkboxText: checkboxText,
                    isChecked: checked,
                    withCheckbox: true
                }
            };
            var buttons = [
                {
                    autofocus: false,
                    icon: public_4.Css.sprites.A_IC_029_2_36x36,
                    id: "cancel",
                    text: confirmButtonText
                },
                {
                    autofocus: true,
                    icon: public_4.Css.sprites.A_IC_009_2_36x36,
                    id: "confirm",
                    text: cancelButtonText
                }
            ];
            return this.showSystem(data, buttons, layer, voiceCommandBehaviour)
                .result()
                .then(function (result) { var _a; return result.resultId == "confirm" && !!((_a = result.extraData) === null || _a === void 0 ? void 0 : _a.isChecked); });
        };
        TVDialogHostService.prototype.showSingleButtonDialog = function (title, message, confirmButtonText, additionalParameters) {
            var dialogConfirmationResult = "dialogResultConfirm";
            var defaultVoiceCommandBehaviour = { disableVoiceCommandExecution: true };
            var data = {
                icon: additionalParameters ? additionalParameters.icon : undefined,
                title: title,
                message: message,
                suppressAllKeys: true,
                extraData: {
                    dialogWidth: additionalParameters === null || additionalParameters === void 0 ? void 0 : additionalParameters.dialogWidth
                }
            };
            var buttons = [
                {
                    autofocus: true,
                    id: dialogConfirmationResult,
                    text: confirmButtonText
                }
            ];
            return this.show(data, undefined, {
                buttons: buttons,
                layer: additionalParameters ? additionalParameters.layer : undefined,
                voiceCommandBehaviour: additionalParameters ? additionalParameters.voiceCommandBehaviour : defaultVoiceCommandBehaviour,
                autoCloseBehaviour: additionalParameters ? additionalParameters.autoCloseBehaviour : undefined
            })
                .result()
                .then(function (result) { return result.closed.then(function () { return result.resultId; }); });
        };
        TVDialogHostService.prototype.showConfirmationDialog = function (title, message, confirmButtonText, cancelButtonText, additionalParameters) {
            var dialogConfirmationResult = "dialogResultConfirm";
            var defaultVoiceCommandBehaviour = { disableVoiceCommandExecution: true };
            var data = {
                icon: additionalParameters ? additionalParameters.icon : undefined,
                title: title,
                message: message,
                suppressAllKeys: true,
                extraData: additionalParameters
            };
            var buttons = [
                {
                    autofocus: false,
                    id: "dialogResultCancel",
                    icon: public_4.Css.sprites.A_IC_029_2_36x36,
                    text: cancelButtonText
                },
                {
                    autofocus: true,
                    id: dialogConfirmationResult,
                    icon: public_4.Css.sprites.A_IC_009_2_36x36,
                    text: confirmButtonText
                }
            ];
            return this.showSystem(data, buttons, additionalParameters ? additionalParameters.layer : undefined, additionalParameters ? additionalParameters.voiceCommandBehaviour : defaultVoiceCommandBehaviour)
                .result()
                .then(function (result) { return result.closed.then(function () { return result.resultId == dialogConfirmationResult; }); })
                .catch(function (error) {
                return false;
            });
        };
        TVDialogHostService.prototype.showSystem = function (data, buttons, layer, voiceCommandBehaviour, autoCloseBehaviour) {
            if (voiceCommandBehaviour === void 0) { voiceCommandBehaviour = { disableVoiceCommandExecution: true }; }
            return this.show(data, undefined, { buttons: buttons, layer: layer, voiceCommandBehaviour: voiceCommandBehaviour, autoCloseBehaviour: autoCloseBehaviour });
        };
        TVDialogHostService.prototype.show = function (data, dialogComponent, _a) {
            var _b = _a === void 0 ? {} : _a, buttons = _b.buttons, _c = _b.layer, layer = _c === void 0 ? dialog_interface_1.DialogLayer.dialogLayer1 : _c, _d = _b.voiceCommandBehaviour, voiceCommandBehaviour = _d === void 0 ? this.defaultVoiceCommandBehaviour : _d, _e = _b.autoCloseBehaviour, autoCloseBehaviour = _e === void 0 ? undefined : _e;
            return this.showIntern(data, layer, voiceCommandBehaviour, buttons, dialogComponent, autoCloseBehaviour);
        };
        TVDialogHostService.prototype.showIntern = function (data, layer, dialogVoiceCommandBehaviour, buttons, dialogComponent, autoCloseBehaviour) {
            var _this = this;
            var dialog = this.createNewDialogData(data, dialogComponent ? dialogComponent : genericdialog_1.TVGenericDialogComponent, dialogVoiceCommandBehaviour, buttons);
            this.addDialogReference(dialog);
            var deferred = public_1.Defer.defer();
            this.dialogProcess[layer] = this.dialogProcess[layer]
                .then(function () {
                var funcCloseEvent = function (result, isSuccess) {
                    _this.removeDialogReference(dialog);
                    if (isSuccess) {
                        deferred.resolve(__assign(__assign({}, result), { closed: result.closed || bluebird.resolve(null) }));
                    }
                    else {
                        deferred.reject(result);
                    }
                };
                if (dialog.isFinished) {
                    return dialog.result
                        .then(function (result) { return funcCloseEvent(result, true); })
                        .catch(function (result) { return funcCloseEvent(result, false); });
                }
                else {
                    return bluebird.resolve()
                        .then(function () {
                        _this.currentDialog[layer] = dialog;
                        _this.layerService.show(dialog_interface_1.DialogLayer[layer]);
                        return dialog.result;
                    })
                        .then(function (result) { return funcCloseEvent(result, true); })
                        .catch(function (result) { return funcCloseEvent(result, false); })
                        .delay(350)
                        .finally(function () {
                        _this.currentDialog[layer] = undefined;
                        _this.layerService.hide(dialog_interface_1.DialogLayer[layer]);
                    })
                        .delay(150);
                }
            })
                .catch(function () { });
            if (autoCloseBehaviour) {
                this.dialogTimeoutHandles[dialog.ID] = setTimeout(function () {
                    if (public_1.Guard.isNumber(_this.dialogTimeoutHandles[dialog.ID])) {
                        delete _this.dialogTimeoutHandles[dialog.ID];
                    }
                    dialog.closeDialogWithResult({ resultId: autoCloseBehaviour.autoCloseResultId });
                }, autoCloseBehaviour.autoCloseSeconds * 1000);
            }
            return {
                abortDialog: function (result) { return dialog.abortDialog(result); },
                closeDialogWithResult: function (result) { return dialog.closeDialogWithResult(result); },
                result: function (autoDisposeReference) {
                    if (autoDisposeReference) {
                        autoDisposeReference.onDestroy(function () { return dialog.abortDialog({ resultId: "autoDisposeReference" }); });
                        dialog.result.catch(function () { });
                    }
                    return deferred.promise;
                }
            };
        };
        TVDialogHostService.classID = 0x703;
        TVDialogHostService.TAG = "TVDialogHostService";
        __decorate([
            public_5.log2(function () { return ({ name: TVDialogHostService.TAG }); })
        ], TVDialogHostService.prototype, "closeAllOpenDialogs", null);
        __decorate([
            public_5.log2(function () { return ({ name: TVDialogHostService.TAG }); })
        ], TVDialogHostService.prototype, "getVoiceDisablingDialogCount", null);
        __decorate([
            public_5.log2(function () { return ({ name: TVDialogHostService.TAG }); })
        ], TVDialogHostService.prototype, "addDialogReference", null);
        __decorate([
            public_5.log2(function () { return ({ name: TVDialogHostService.TAG }); })
        ], TVDialogHostService.prototype, "removeDialogReference", null);
        return TVDialogHostService;
    }(public_3.ReactBaseService));
    exports.TVDialogHostService = TVDialogHostService;
});
//# sourceMappingURL=dialoghost.service.js.map