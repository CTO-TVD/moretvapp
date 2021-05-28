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
define(["require", "exports", "bluebird", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/public", "../../translation/public", "./globalerror.component"], function (require, exports, bluebird, public_1, public_2, public_3, public_4, globalerror_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GlobalErrorService = void 0;
    var NetworkChangeType;
    (function (NetworkChangeType) {
        NetworkChangeType[NetworkChangeType["LinkDisconnected"] = 0] = "LinkDisconnected";
        NetworkChangeType[NetworkChangeType["NetworkDisconnected"] = 1] = "NetworkDisconnected";
        NetworkChangeType[NetworkChangeType["LinkConnected"] = 2] = "LinkConnected";
        NetworkChangeType[NetworkChangeType["NetworkConnected"] = 3] = "NetworkConnected";
    })(NetworkChangeType || (NetworkChangeType = {}));
    var GlobalErrorService = (function (_super) {
        __extends(GlobalErrorService, _super);
        function GlobalErrorService() {
            var _a, _b, _c;
            var _this = _super.call(this) || this;
            _this.visibleDialogs = {};
            _this.dialogService = public_1.TVDialogHostService.getInstance();
            _this.network = public_2.ApplicationClient.network.getNetwork();
            _this.networkState = public_2.ApplicationClient.network.getNetworkState(_this.network);
            _this.previousLinkState = _this.networkState.isLinked;
            _this.previousNetworkState = _this.networkState.isConnected;
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("registering network event listener for network " + _this.network.name + ", isLinked: " + _this.networkState.isLinked + ", isConnected: " + _this.networkState.isConnected, GlobalErrorService_1.TAG)); });
            var networks = public_2.ServiceClientZac.getNetworks(public_2.ServiceClientContextZac.instance);
            networks.events.onNetworkLinkStatusChanged(function (event) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("networkLinkStatusChanged " + event.network.name + ", isUp: " + event.isUp, GlobalErrorService_1.TAG)); });
                _this.onLinkStateChange(event.network, event.isUp);
            });
            networks.events.onNetworkNetworkStatusChanged(function (event) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("networkNetworkStatusChanged " + event.network.name + ", isUp: " + event.isUp, GlobalErrorService_1.TAG)); });
                _this.onNetworkStateChange(event.network, event.isUp);
            });
            public_3.ErrorManager.onError(function (errorData) { return errorData && _this.handleError(errorData.error, errorData.classID, errorData.codeID); });
            public_3.ErrorManager.onCloseDialog(function (errorData) { return errorData && _this.closeDialog(errorData.error.errorID); });
            var funcCheckTemplate = function (template) {
                if (template === "appCore.ERROR_TOAST" || template === "appCore.PUSH_SQM")
                    return;
                var result = public_1.Filter.message(public_1.Filter.context(), template);
                if (result === template && result.indexOf(".") !== -1) {
                    throw new public_3.ConfigurationError("The template name '" + template + "' was not found within the translation tables.");
                }
            };
            for (var key in (_b = (_a = public_3.Configuration.instance.error) === null || _a === void 0 ? void 0 : _a.actions) !== null && _b !== void 0 ? _b : {}) {
                var action = (_c = public_3.Configuration.instance.error) === null || _c === void 0 ? void 0 : _c.actions[key];
                if (action && GlobalErrorService_1.isDialog(action)) {
                    if (action.dialogID)
                        funcCheckTemplate(action.dialogID);
                    if (action.dialogMessage)
                        funcCheckTemplate(action.dialogMessage);
                    if (action.dialogTitle)
                        funcCheckTemplate(action.dialogTitle);
                }
                else if (action && GlobalErrorService_1.isSqmEvent(action)) {
                    if (action.sqmTemplate)
                        funcCheckTemplate(action.sqmTemplate);
                }
                else if (action && GlobalErrorService_1.isToast(action)) {
                    if (action.toastTemplate)
                        funcCheckTemplate(action.toastTemplate);
                }
            }
            return _this;
        }
        GlobalErrorService_1 = GlobalErrorService;
        GlobalErrorService.prototype.onNetworkStateChange = function (network, networkStatus) {
            if (network.name != this.network.name) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("NetworkNetworkStateChange ignored for network " + network.name, GlobalErrorService_1.TAG)); });
                return;
            }
            if (!this.previousNetworkState && networkStatus) {
                this.onConnectionChange(NetworkChangeType.NetworkConnected);
            }
            else if (this.previousNetworkState && !networkStatus) {
                this.onConnectionChange(NetworkChangeType.NetworkDisconnected);
            }
            else {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Network state is unchanged (" + networkStatus + ")", GlobalErrorService_1.TAG)); });
            }
            this.previousNetworkState = networkStatus;
        };
        GlobalErrorService.prototype.onLinkStateChange = function (network, linkStatus) {
            if (network.name != this.network.name) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("NetworkLinkStateChange ignored for network " + network.name, GlobalErrorService_1.TAG)); });
                return;
            }
            if (!this.previousLinkState && linkStatus) {
                this.onConnectionChange(NetworkChangeType.LinkConnected);
            }
            else if (this.previousLinkState && !linkStatus) {
                this.onConnectionChange(NetworkChangeType.LinkDisconnected);
            }
            else {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Network state is unchanged (" + linkStatus + ")", GlobalErrorService_1.TAG)); });
            }
            this.previousLinkState = linkStatus;
        };
        GlobalErrorService.prototype.onConnectionChange = function (changeType) {
            var _this = this;
            return bluebird.resolve(null).then(function () {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Network change: " + NetworkChangeType[changeType], GlobalErrorService_1.TAG)); });
                var error;
                switch (changeType) {
                    case NetworkChangeType.LinkConnected:
                        _this.closeDialog(globalerror_component_1.GlobalErrorCode.Network_102001);
                        break;
                    case NetworkChangeType.LinkDisconnected:
                        error = new public_2.NetworkError("Link disconnected!");
                        error.Reason = public_2.NetworkErrorReason.LinkDisconnected;
                        _this.showDialog(error, globalerror_component_1.GlobalErrorCode.Network_102001);
                        break;
                    case NetworkChangeType.NetworkConnected:
                        _this.closeDialog(globalerror_component_1.GlobalErrorCode.Network_102001);
                        break;
                    case NetworkChangeType.NetworkDisconnected:
                        error = new public_2.NetworkError("Network disconnected!");
                        error.Reason = public_2.NetworkErrorReason.NetworkDisconnected;
                        _this.showDialog(error, globalerror_component_1.GlobalErrorCode.Network_102001);
                        break;
                    default:
                        break;
                }
            });
        };
        GlobalErrorService.prototype.closeDialog = function (errorId) {
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("HIDE DIALOG for errorId '" + errorId + "'", GlobalErrorService_1.TAG)); });
            var dialog = this.visibleDialogs[errorId];
            if (dialog) {
                dialog.closeDialogWithResult({ resultId: "aborted" });
            }
        };
        GlobalErrorService.prototype.showDialog = function (error, errorCode) {
            var _this = this;
            try {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("SHOW DIALOG for error code '" + errorCode + "'", GlobalErrorService_1.TAG)); });
                if (this.visibleDialogs[errorCode] != null) {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("DIALOG for error code '" + errorCode + "' already visible.", GlobalErrorService_1.TAG)); });
                    return;
                }
                public_3.ErrorManager.catch(error, GlobalErrorService_1, 0x04);
                var dialog = this.visibleDialogs[errorCode] = this.dialogService.show({ extraData: errorCode }, globalerror_component_1.TVGlobalErrorComponent, { layer: public_1.DialogLayer.dialogLayer4, voiceCommandBehaviour: { disableVoiceCommandExecution: true } });
                dialog
                    .result()
                    .then(function (result) {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("TVGlobalErrorComponent dialog closed with result " + result.resultId, GlobalErrorService_1.TAG)); });
                })
                    .catch(public_3.ErrorManager.catchFunc(GlobalErrorService_1, 0x01))
                    .finally(function () { return delete _this.visibleDialogs[errorCode]; });
            }
            catch (error) {
                public_3.ErrorManager.catch(error, GlobalErrorService_1, 0x02);
            }
        };
        GlobalErrorService.prototype.generateJson = function (error) {
            return JSON.stringify(error, function (key, value) {
                if (key == "stackTrace" && public_3.Guard.isString(value)) {
                    return value
                        .split("\n")
                        .map(function (item) { return item.indexOf("/src-thirdparty/") !== -1 ? undefined : item.trim(); })
                        .filter(public_3.Guard.isDefined)
                        .join(" ");
                }
                else if (key == "componentStack" && public_3.Guard.isString(value)) {
                    return value
                        .split("\n")
                        .map(function (item) { return item.trim(); })
                        .join(" ");
                }
                return value;
            });
        };
        GlobalErrorService.prototype.getErrorData = function (error, classID, codeID) {
            var _a;
            var hexErrorCode = this.getHexErrorCode(error, classID, codeID);
            var additionalErrorCode = ((_a = error.getAdditionalErrorCode) === null || _a === void 0 ? void 0 : _a.call(error)) ? "." + error.getAdditionalErrorCode() : "";
            var buildInfo = public_3.Configuration.instance.buildinfo;
            return {
                error: error === null || error === void 0 ? void 0 : error.toString(),
                errorJSON: this.generateJson(error),
                errorName: error.name,
                errorMessage: error.message,
                hexErrorCode: hexErrorCode,
                additionalErrorCode: additionalErrorCode,
                buildInfo: buildInfo != null ? buildInfo.majorVersion + "." + buildInfo.buildVersion + " (" + buildInfo.buildDate + ")" : "unknown"
            };
        };
        GlobalErrorService.prototype.getHexErrorCode = function (error, classID, codeID) {
            var errorID = error.errorID || 0;
            var errorCode = errorID * 0x100000 + ((classID === null || classID === void 0 ? void 0 : classID.classID) || 0) * 0x100 + (codeID || 0);
            return public_3.StringTools.convertToHexString(errorCode);
        };
        GlobalErrorService.prototype.getFullErrorCode = function (error, classID, codeID) {
            var _a;
            var hexErrorCode = this.getHexErrorCode(error, classID, codeID);
            var additionalErrorCode = ((_a = error.getAdditionalErrorCode) === null || _a === void 0 ? void 0 : _a.call(error)) ? "." + error.getAdditionalErrorCode() : "";
            return "" + hexErrorCode + additionalErrorCode;
        };
        GlobalErrorService.prototype.handleError = function (error, classID, codeID, dialogLayer) {
            var _this = this;
            if (!error) {
                public_3.Logger.error(function (log) { return log(public_3.LogMsg("defaultErrorHandler was called without error data. classID: '" + (classID === null || classID === void 0 ? void 0 : classID.classID) + "', codeID: '" + codeID + "'", GlobalErrorService_1.TAG)); });
                return;
            }
            var errorData = this.getErrorData(error, classID, codeID);
            var config = public_3.Configuration.instance.error ||
                {
                    actions: {
                        report: { internalError: true, sqmTemplate: public_4.messagesCore.PUSH_SQM }
                    },
                    configurations: [],
                    generalConfiguration: {
                        errorCode: ".*",
                        required: [],
                        suppressed: []
                    },
                    reportConfiguration: {
                        errorCode: ".*",
                        required: ["report"],
                        suppressed: []
                    }
                };
            var required = config.reportConfiguration.required || [];
            var suppressed = config.reportConfiguration.suppressed || [];
            var useGeneralConfiguration = true;
            var _loop_1 = function (configuration) {
                var regEx = new RegExp(configuration.errorCode);
                if (regEx.test(errorData.hexErrorCode + errorData.additionalErrorCode)) {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("defaultErrorHandler - the error was handled by : '" + configuration.errorCode + "'", GlobalErrorService_1.TAG)); });
                    required = __spreadArray(__spreadArray(__spreadArray([], []), (required || [])), (configuration.required || []));
                    suppressed = __spreadArray(__spreadArray(__spreadArray([], []), (suppressed || [])), (configuration.suppressed || []));
                    useGeneralConfiguration = configuration.required === undefined;
                    return "break";
                }
            };
            for (var _i = 0, _a = config.configurations; _i < _a.length; _i++) {
                var configuration = _a[_i];
                var state_1 = _loop_1(configuration);
                if (state_1 === "break")
                    break;
            }
            if (useGeneralConfiguration) {
                required = __spreadArray(__spreadArray(__spreadArray([], []), (required || [])), (config.generalConfiguration.required || []));
                suppressed = __spreadArray(__spreadArray(__spreadArray([], []), (suppressed || [])), (config.generalConfiguration.suppressed || []));
            }
            suppressed = suppressed.filter(function (value, index, arr) { return arr.indexOf(value) === index; });
            required = required.filter(function (value, index, arr) { return arr.indexOf(value) === index; });
            required = required.filter(function (value) { return suppressed.indexOf(value) < 0; });
            if (required.length === 0) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("defaultErrorHandler - the error was suppressed: " + JSON.stringify(errorData), GlobalErrorService_1.TAG)); });
            }
            var _loop_2 = function (id) {
                var action = config.actions[id];
                if (action) {
                    if (GlobalErrorService_1.isDialog(action)) {
                        var diagnosticResultId_1 = "diagnostic";
                        var data = {
                            icon: "icon-error",
                            message: action.dialogMessage,
                            title: action.dialogTitle,
                            extraData: {
                                dialogWidth: action.dialogWidth
                            }
                        };
                        var buttons = [];
                        switch (action.dialogID) {
                            case GlobalErrorService_1.GLOBAL_ERROR_DIALOG_DIAGNOSTIC:
                                buttons.push({
                                    autofocus: false,
                                    id: diagnosticResultId_1,
                                    text: public_4.messagesCore.ERROR_DIALOG_BUTTON_DIAGNOSTIC
                                });
                                buttons.push({
                                    autofocus: true,
                                    id: "cancel",
                                    text: public_4.messagesCore.ERROR_DIALOG_BUTTON_CANCEL
                                });
                                break;
                            case GlobalErrorService_1.GLOBAL_ERROR_DIALOG_SIMPLE:
                                buttons.push({
                                    autofocus: true,
                                    id: "close",
                                    text: public_4.messagesCore.ERROR_DIALOG_BUTTON_CLOSE
                                });
                                break;
                        }
                        var dialogReference = this_1.visibleDialogs[error.errorID] = this_1.dialogService.showSystem(data, buttons, dialogLayer);
                        dialogReference
                            .result()
                            .then(function (result) {
                            if (result.resultId == diagnosticResultId_1) {
                                public_1.RouteService.getInstance().startIntent(new public_1.IntentCore.SelfDiagnostic());
                            }
                        })
                            .catch(public_3.ErrorManager.catchFunc(GlobalErrorService_1, 0x03))
                            .finally(function () { return delete _this.visibleDialogs[error.errorID]; });
                    }
                    else if (GlobalErrorService_1.isSqmEvent(action)) {
                        var sqmEvent = {
                            ErrorEventType: action.internalError ? "Device Internal Error" : "Error Message Popup",
                            ErrorMessage: public_1.Filter.message(public_1.Filter.context(), action.sqmTemplate, errorData),
                            ServiceType: error.ServiceType,
                            SubService: error.SubService,
                            URL: error.URL,
                            ErrorCode: "0x73300000"
                        };
                        public_2.ServiceClientZac.pushSqmEvent(public_2.ServiceClientContextZac.instance, sqmEvent);
                    }
                    else if (GlobalErrorService_1.isToast(action)) {
                        public_1.TVNotificationService.getInstance().notifyError({ text: action.toastTemplate, values: errorData });
                    }
                }
            };
            var this_1 = this;
            for (var _b = 0, required_1 = required; _b < required_1.length; _b++) {
                var id = required_1[_b];
                _loop_2(id);
            }
        };
        GlobalErrorService.isDialog = function (arg) {
            var dialog = arg;
            return ((dialog.dialogID !== undefined) || ((dialog.dialogMessage !== undefined) && (dialog.dialogTitle !== undefined)));
        };
        GlobalErrorService.isSqmEvent = function (arg) {
            return arg.sqmTemplate !== undefined;
        };
        GlobalErrorService.isToast = function (arg) {
            return arg.toastTemplate !== undefined;
        };
        var GlobalErrorService_1;
        GlobalErrorService.classID = 0x733;
        GlobalErrorService.GLOBAL_ERROR_DIALOG_DIAGNOSTIC = "GLOBAL_ERROR_DIALOG_DIAGNOSTIC";
        GlobalErrorService.GLOBAL_ERROR_DIALOG_SIMPLE = "GLOBAL_ERROR_DIALOG_SIMPLE";
        GlobalErrorService = GlobalErrorService_1 = __decorate([
            public_3.logTag()
        ], GlobalErrorService);
        return GlobalErrorService;
    }(public_1.ReactBaseService));
    exports.GlobalErrorService = GlobalErrorService;
});
//# sourceMappingURL=globalerror.service.js.map