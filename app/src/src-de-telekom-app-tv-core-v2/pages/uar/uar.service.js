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
define(["require", "exports", "bluebird", "rxjs", "rxjs/operators", "../../framework/public", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/public", "../../component/public", "../../services/public", "../../translation/public", "./uar.password.dialog", "./uar.pin.dialog", "./uar.remoteaccess.dialog"], function (require, exports, bluebird, rxjs_1, operators_1, public_1, public_2, public_3, public_4, public_5, public_6, public_7, uar_password_dialog_1, uar_pin_dialog_1, uar_remoteaccess_dialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UarService = exports.UarDialogAbortError = void 0;
    var UarServiceError = (function () {
        function UarServiceError() {
        }
        UarServiceError.ERROR_PARENTALUNBLOCK = "Error at parentalUnblock";
        UarServiceError.ERROR_DIALOGCANCEL_RECEIVED = "DialogCancel called for UAR";
        UarServiceError.ERROR_DIALOG_ALREADY_CANCELED = "DialogCancel already sent for this dialog";
        UarServiceError.ERROR_DIALOGCLOSE_NOSUCCESS = "Pin Dialog closed with no success";
        UarServiceError.ERROR_DIALOGCLOSE_PINFORGOTTEN = "Pin Dialog closed pin forgotten triggered";
        UarServiceError.ERROR_AVS_FEATURE_NOT_SET = "AVS feature not set";
        UarServiceError.ERROR_INVALID_DIALOG = "invalid dialog data";
        UarServiceError.ERROR_LOGIN_GETACCESSTOKEN = "Error at getting access token";
        UarServiceError.ERROR_LOGIN_CREDENTIALS = "Error at passing credentials";
        return UarServiceError;
    }());
    var UarError = (function (_super) {
        __extends(UarError, _super);
        function UarError(subReason, message) {
            var _this = _super.call(this, message) || this;
            _this.subReason = subReason;
            _this.errorID = 0x601;
            return _this;
        }
        UarError.prototype.getAdditionalErrorCode = function () {
            return "" + this.subReason;
        };
        return UarError;
    }(public_4.BaseError));
    var UarDialogAbortError = (function (_super) {
        __extends(UarDialogAbortError, _super);
        function UarDialogAbortError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x621;
            return _this;
        }
        return UarDialogAbortError;
    }(public_4.BaseError));
    exports.UarDialogAbortError = UarDialogAbortError;
    var UarErrorPinForgottenCalled = (function (_super) {
        __extends(UarErrorPinForgottenCalled, _super);
        function UarErrorPinForgottenCalled() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x622;
            return _this;
        }
        return UarErrorPinForgottenCalled;
    }(public_4.BaseError));
    var UarErrorReason;
    (function (UarErrorReason) {
        UarErrorReason[UarErrorReason["ERROR_AVS_FEATURE_NOT_SET"] = 0] = "ERROR_AVS_FEATURE_NOT_SET";
        UarErrorReason[UarErrorReason["ERROR_ZOSA_PARENTALUNBLOCK"] = 1] = "ERROR_ZOSA_PARENTALUNBLOCK";
        UarErrorReason[UarErrorReason["ERROR_PLAYER_PARENTALUNBLOCK"] = 2] = "ERROR_PLAYER_PARENTALUNBLOCK";
        UarErrorReason[UarErrorReason["ERROR_INVALID_DIALOG"] = 3] = "ERROR_INVALID_DIALOG";
        UarErrorReason[UarErrorReason["ERROR_DIALOG_ALREADY_CANCELED"] = 4] = "ERROR_DIALOG_ALREADY_CANCELED";
        UarErrorReason[UarErrorReason["ERROR_DIALOGCANCEL_RECEIVED"] = 5] = "ERROR_DIALOGCANCEL_RECEIVED";
        UarErrorReason[UarErrorReason["ERROR_LOGIN_GETACCESSTOKEN"] = 6] = "ERROR_LOGIN_GETACCESSTOKEN";
    })(UarErrorReason || (UarErrorReason = {}));
    var UarService = (function (_super) {
        __extends(UarService, _super);
        function UarService() {
            var _this = _super.call(this) || this;
            _this.eventManager = new public_4.EventManager();
            public_3.ApplicationClient.events.onParentalBlockingChanged(function (event) { return _this.onParentalBlockingChanged(event); });
            _this.initializeMqttMessageHandler();
            return _this;
        }
        UarService_1 = UarService;
        UarService.prototype.getAVSBlockingStatus = function () {
            var _this = this;
            var isAVSBlocked = this.isAVSBlocked;
            if (public_4.Guard.isUndefined(isAVSBlocked)) {
                return public_1.PconGroupedContentLockManager.isAvsLocked()
                    .then(function (isBlocked) {
                    _this.isAVSBlocked = isBlocked;
                    return isBlocked;
                })
                    .catch(function (error) {
                    public_4.ErrorManager.catch(error, UarService_1, 0x08);
                    return true;
                });
            }
            else {
                return bluebird.resolve(isAVSBlocked);
            }
        };
        UarService.prototype.parentalUnblock = function (parameters, waitForDialogClose, ignoreComfortFeature) {
            var _this = this;
            if (waitForDialogClose === void 0) { waitForDialogClose = false; }
            if (ignoreComfortFeature === void 0) { ignoreComfortFeature = false; }
            var deferred = this.deferred = public_4.Defer.defer();
            public_3.ApplicationClient.parentalControlManagement
                .isComfortFeatureActive()
                .then(function (response) {
                if (response.data.isActive && !ignoreComfortFeature) {
                    deferred.resolve(undefined);
                }
                else {
                    if (parameters.scenario == UarService_1.AVSCONTENT_SCENARIO && !public_4.Feature.has(public_4.FeatureItems.avscontent, public_4.FeatureRights.viewItems)) {
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("parentalUnblock - AVS feature not set", UarService_1.TAG)); });
                        var notificationService = public_2.TVNotificationService.getInstance();
                        notificationService.notifyInfo(public_7.messagesCore.STB_CR_TI024_AVS_FEATURE_DEACTIVATED);
                        deferred.reject(new UarError(UarErrorReason.ERROR_AVS_FEATURE_NOT_SET, UarServiceError.ERROR_AVS_FEATURE_NOT_SET));
                    }
                    else {
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("parentalUnblock - start", UarService_1.TAG)); });
                        _this.waitForDialogClose = waitForDialogClose;
                        public_3.ApplicationClient.parentalControlManagement.parentalUnblock(parameters).then(function (response) {
                            if (!response.data.unblockingPending && !response.data.isBlocked && _this.deferred)
                                _this.deferred.resolve({});
                        }).catch(function () {
                            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("parentalUnblock - error at parentalUnblock Zosa call", UarService_1.TAG)); });
                            deferred.reject(new UarError(UarErrorReason.ERROR_ZOSA_PARENTALUNBLOCK, UarServiceError.ERROR_PARENTALUNBLOCK));
                        });
                    }
                }
            });
            return deferred.promise;
        };
        UarService.prototype.parentalUnblockLiveTV = function (waitForDialogClose) {
            if (waitForDialogClose === void 0) { waitForDialogClose = false; }
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("parentalUnblockLiveTV - start", UarService_1.TAG)); });
            var deferred = this.deferred = public_4.Defer.defer();
            this.waitForDialogClose = waitForDialogClose;
            return deferred.promise;
        };
        UarService.prototype.parentalUnblockRecording = function (waitForDialogClose) {
            if (waitForDialogClose === void 0) { waitForDialogClose = false; }
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("parentalUnblockRecording - start", UarService_1.TAG)); });
            var deferred = this.deferred = public_4.Defer.defer();
            this.waitForDialogClose = waitForDialogClose;
            return deferred.promise;
        };
        UarService.prototype.triggerLogin = function () {
            var _a;
            var scope = "ngtvepg";
            var clients = (_a = public_4.Configuration.instance.sam3) === null || _a === void 0 ? void 0 : _a.clients;
            var clientData = clients && (clients[scope] || clients.default) || { clientID: "", clientSecret: "" };
            var deferred = public_4.Defer.defer();
            var loginRequest = {
                acr: "login",
                scope: scope,
                clientID: clientData.clientID,
                clientSecret: clientData.clientSecret,
                userData: ""
            };
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("+++ getAccessToken requestId->'" + JSON.stringify(loginRequest) + "'", UarService_1.TAG)); });
            public_3.ApplicationClient.authMan
                .getAccessToken(loginRequest)
                .then(function (tokenResponse) {
                var lineToken = (tokenResponse === null || tokenResponse === void 0 ? void 0 : tokenResponse.accessToken) || "";
                var isRefreshTokenStored = tokenResponse && tokenResponse.isRefreshTokenStored == 1;
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("got token -> '" + JSON.stringify(tokenResponse) + "'", UarService_1.TAG)); });
                deferred.resolve({ lineToken: lineToken, isRefreshTokenStored: isRefreshTokenStored });
            })
                .catch(function (error) {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("failed to get a token -> '" + JSON.stringify(error) + "'", UarService_1.TAG)); });
                deferred.reject(new UarError(UarErrorReason.ERROR_LOGIN_GETACCESSTOKEN, UarServiceError.ERROR_LOGIN_GETACCESSTOKEN));
            });
            return deferred.promise;
        };
        UarService.prototype.cancelLogin = function () {
            var _this = this;
            if (public_4.Guard.isDefined(this.loginDialogRequest)) {
                public_4.Logger.debug(function (log) { var _a; return log(public_4.LogMsg("##### cancelLogin for " + ((_a = _this.loginDialogRequest) === null || _a === void 0 ? void 0 : _a.id), UarService_1.TAG)); });
                this.loginDialogRequest.PostCancel();
                this.loginDialogRequest = undefined;
            }
        };
        UarService.prototype.loginUser = function (userName, password) {
            var _this = this;
            var deferred = this.deferredLogin = public_4.Defer.defer();
            if (this.loginDialogRequest) {
                public_4.Logger.debug(function (log) { var _a; return log(public_4.LogMsg("+++ PostResponse -> requestId->'" + ((_a = _this.loginDialogRequest) === null || _a === void 0 ? void 0 : _a.id) + "'", UarService_1.TAG)); });
                this.loginDialogRequest.PostResponse([userName, password]);
            }
            return deferred.promise;
        };
        UarService.prototype.onAvsBlockingChangedEvent = function (evtHandlerFunction) {
            return this.eventManager.on("onAvsBlockingChangedEvent", evtHandlerFunction, UarService_1.TAG);
        };
        UarService.prototype.getAVSGetParentalBlockingStatusParams = function () {
            return { scenario: UarService_1.AVSCONTENT_SCENARIO, scenarioIsAdult: true };
        };
        UarService.prototype.getAVSResetParentalUnblockParams = function () {
            return { scenario: UarService_1.AVSCONTENT_SCENARIO, scenarioIsAdult: true };
        };
        UarService.prototype.getAVSUnblockParentalParams = function () {
            return { scenario: UarService_1.AVSCONTENT_SCENARIO, scenarioIsAdult: true };
        };
        UarService.prototype.getVasParentalUnblockParams = function (item, appFunctionLocked) {
            var scenarioArea = {
                contentTitle: "",
                contentType: public_3.ParentalUnlockArea.Customize,
                custom: {
                    dialogTitle: public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_PH_TI001),
                    dialogParagraph1: public_2.Filter.message(public_2.Filter.context(), appFunctionLocked ? public_7.messagesCore.STB_CR_TI018a : public_7.messagesCore.STB_CR_TI018, { apptitle: item.title, agerating: public_2.Filter.message(public_2.Filter.context(), public_5.ProgramItemFormatter.formatAgeRating(item.dtExtensions.ageRating)) }),
                    dialogParagraph2: public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_CR_TI017c)
                }
            };
            var scenario = JSON.stringify(scenarioArea);
            return { scenario: scenario, scenarioIsAdult: false, timeout: 2 };
        };
        UarService.prototype.registerForUar = function (app) {
            var _this = this;
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("registerForUar - start", UarService_1.TAG)); });
            app.events.onDialogRequest(function (event) {
                var _a, _b, _c, _d, _e, _f;
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("DialogRequest json: " + event.request.json, UarService_1.TAG)); });
                var request = event.request;
                var jsonResult;
                try {
                    jsonResult = JSON.parse(request.json);
                }
                catch (error) {
                    public_4.Logger.warn(function (log) { return log(public_4.LogMsg("DialogRequest invalid JSON format", UarService_1.TAG)); });
                    request.PostAcknowledge(true);
                    _this.rejectAndCancel(request);
                    return;
                }
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("DialogRequest id: " + jsonResult.id, UarService_1.TAG)); });
                if (request.type === request.DIALOG_TYPE_CONDITIONAL_ACCESS || request.type === request.DIALOG_TYPE_LOCK) {
                    public_4.Logger.debug(function (log) { return log(public_4.LogMsg("UAR Level 1 - DialogRequest: " + jsonResult.id + " DIALOG_TYPE_CONDITIONAL_ACCESS or DIALOG_TYPE_LOCK, contentId: " + jsonResult.header.source.variables["CONTENT-ID"], UarService_1.TAG)); });
                    if (request.inputFieldType === request.DIALOG_INPUTFIELD_PIN) {
                        request.PostAcknowledge(true);
                        _this.handlePinDialog(request, jsonResult);
                    }
                    else if (request.inputFieldType === request.DIALOG_INPUTFIELD_PASSWORD) {
                        request.PostAcknowledge(true);
                        _this.handlePasswordDialog(request, jsonResult);
                    }
                    else if (request.inputFieldType === request.DIALOG_INPUTFIELD_LOGIN) {
                        if (((_b = (_a = jsonResult.header.source) === null || _a === void 0 ? void 0 : _a.variables) === null || _b === void 0 ? void 0 : _b["ERROR-STRING"]) && jsonResult.header.source.variables["ERROR-STRING"].length > 0) {
                            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("+++ Error handling for login->'" + request.id + "'", UarService_1.TAG)); });
                            _this.handleLoginError(request, jsonResult);
                        }
                        else {
                            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("+++ PostAcknowledge requestId->'" + request.id + "'", UarService_1.TAG)); });
                            request.PostAcknowledge(true);
                            _this.handleLoginDialog(request, jsonResult);
                        }
                    }
                }
                else if (request.type === request.DIALOG_TYPE_ATTENTION || request.type === request.DIALOG_TYPE_QUESTION) {
                    if (jsonResult.header.source.id === UarService_1.UarDialogSuccessHeader || jsonResult.header.source.id === UarService_1.UarAuthDialogSuccessHeader) {
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("UAR Level 1 - DialogRequest with success header: " + jsonResult.id, UarService_1.TAG)); });
                        request.PostAcknowledge(true);
                        _this.handleSuccessMessage(request, jsonResult);
                    }
                    else if (jsonResult.header.source.id === UarService_1.UarRemoteAccessHeader) {
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("UAR Level 1 - DialogRequest: " + jsonResult.id + ". Remoteaccess request", UarService_1.TAG)); });
                        _this.handleRemoteAccessRequest(request);
                    }
                    else {
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("UAR Level 1 - DialogRequest: " + jsonResult.id + " Other type: " + request.type + ", header: " + jsonResult.header.source.id + ", content-id: " + jsonResult.header.source.variables["CONTENT-ID"], UarService_1.TAG)); });
                        request.PostAcknowledge(true);
                        if (((_d = (_c = jsonResult.header.source) === null || _c === void 0 ? void 0 : _c.variables) === null || _d === void 0 ? void 0 : _d.ACR) && jsonResult.header.source.variables.ACR === "password") {
                            _this.handlePasswordDialog(request, jsonResult);
                        }
                        else if (((_f = (_e = jsonResult.header.source) === null || _e === void 0 ? void 0 : _e.variables) === null || _f === void 0 ? void 0 : _f.ACR) && jsonResult.header.source.variables.ACR === "login") {
                            _this.handleLoginError(request, jsonResult);
                        }
                        else {
                            _this.handlePinDialog(request, jsonResult);
                        }
                    }
                }
            });
            app.events.onDialogCancel(function (event) {
                var extraData = _this.lastActiveDialogModel ? _this.lastActiveDialogModel.extraData : null;
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("UAR Level 1 - DialogCancel: " + event.id + " waitingForResponse: " + (extraData ? extraData.waitingForResponse : ""), UarService_1.TAG)); });
                if (extraData === null || extraData === void 0 ? void 0 : extraData.waitingForResponse) {
                    public_4.Logger.debug(function (log) { return log(public_4.LogMsg("UAR Level 1 - DialogCancel:ignoring because of waitingForResponse Id in model: " + extraData.id + " Cancel ID: " + event.id, UarService_1.TAG)); });
                    return;
                }
                if (_this.loginDialogRequest) {
                    public_4.Logger.debug(function (log) { return log(public_4.LogMsg("UAR Level 1 - DialogCancel:ignoring because of waiting for response Cancel ID: " + event.id, UarService_1.TAG)); });
                    return;
                }
                if (_this.lastActiveDialogModel && extraData && extraData.dialogOpen && extraData.id == event.id) {
                    public_4.Logger.debug(function (log) { return log(public_4.LogMsg("DialogCancel force closing dialog " + JSON.stringify(_this.lastActiveDialogModel), UarService_1.TAG)); });
                    if (extraData.dialog)
                        extraData.dialog.abortDialog({});
                }
                else {
                    if (_this.lastActiveDialogModel && extraData && extraData.id == event.id) {
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("DialogCancel cancel prepared dialog model before showing with id " + event.id, UarService_1.TAG)); });
                        _this.cancelNonActiveDialog();
                    }
                }
            });
            app.object.AcceptsUserActionRequests(true);
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("registerForUar - end", UarService_1.TAG)); });
        };
        UarService.prototype.registerPinForgotten = function (func) {
            var _this = this;
            this.pinForgottenFunc = func;
            return function () {
                _this.pinForgottenFunc = undefined;
            };
        };
        UarService.prototype.handleParentalAutoUnlock = function (ageRating, isBlocked, channelId, triggeredByApp) {
            var _this = this;
            if (triggeredByApp === void 0) { triggeredByApp = false; }
            if (this.debounceParentalAutoLockHandler)
                clearTimeout(this.debounceParentalAutoLockHandler);
            if (public_4.Guard.isNumber(ageRating) && ageRating >= 16) {
                var is16AgeRating_1 = ageRating >= 16 && ageRating < 18;
                bluebird.all([
                    public_3.ApplicationClient.parentalControlManagement.getParentalControlConfiguration(),
                    public_3.ApplicationClient.parentalControlManagement.isComfortFeatureActive(),
                    public_6.TVMediaPlayerHostService.getInstance().getMediaPlayerController()
                ]).then(function (_a) {
                    var parentalConfiguration = _a[0], isComfortFeatureActiveResult = _a[1], mediaPlayer = _a[2];
                    var isUnlockedBySetting = is16AgeRating_1 ? parentalConfiguration.data.ageRatingCfg[16] && !parentalConfiguration.data.ageRatingCfg[16].isLocked : parentalConfiguration.data.ageRatingCfg[18] && !parentalConfiguration.data.ageRatingCfg[18].isLocked;
                    if (!isComfortFeatureActiveResult.data.isActive && !isBlocked && isUnlockedBySetting) {
                        _this.debounceParentalAutoLockHandler = setTimeout(function () {
                            var currentChannelId = public_3.ApplicationClient.channelManagement.getLastTunedChannelId();
                            var playerState = public_6.MediaPlayerUtils.getState(mediaPlayer);
                            if ((playerState == mediaPlayer.PLAYERSTATE_PLAYING && (currentChannelId == channelId || public_4.Guard.isUndefined(channelId))) || triggeredByApp) {
                                var notificationService = public_2.TVNotificationService.getInstance();
                                notificationService.notifyUnLocked(is16AgeRating_1 ? public_7.messagesCore.PLAYER_16_CONTENT_UNLOCKED : public_7.messagesCore.PLAYER_18_CONTENT_UNLOCKED);
                            }
                        }, UarService_1.debounceParentalAutoUnlock);
                    }
                }).catch(public_4.ErrorManager.catchFunc(UarService_1, 0x09));
            }
        };
        UarService.prototype.handleRemoteAccessRequest = function (request) {
            var dialogService = public_2.TVDialogHostService.getInstance();
            var data = {
                extraData: "data"
            };
            request.PostAcknowledge(true);
            dialogService
                .show(data, uar_remoteaccess_dialog_1.UarRemoteAccessDialogComponent, { layer: public_2.DialogLayer.dialogLayer4, voiceCommandBehaviour: { disableVoiceCommandExecution: true } })
                .result()
                .then(function (result) {
                if (result.resultId === "confirm") {
                    request.PostResponse("0");
                }
                else {
                    request.PostCancel();
                }
            })
                .catch(function (error) {
                public_4.Logger.error(function (log) { return log(public_4.LogMsg("Error handling remote access request: " + JSON.stringify(request), UarService_1.TAG)); });
                request.PostCancel();
            });
        };
        UarService.prototype.handleSuccessMessage = function (request, jsonResult) {
            if (jsonResult.header.source.variables.ACR == "login" && this.deferredLogin) {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### handleSuccessMessage for user login request->" + request.id, UarService_1.TAG)); });
                this.deferredLogin.resolve();
                this.loginDialogRequest = undefined;
                return;
            }
            var contentId = jsonResult ? jsonResult.header.source.variables["CONTENT-ID"] : null;
            var programId = jsonResult ? jsonResult.header.source.variables["PROGRAM-ID"] : null;
            var userData = jsonResult ? jsonResult.header.source.variables["USER-DATA"] : null;
            var headerId = jsonResult ? jsonResult.header.source.id : null;
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### handleSuccessMessage for CONTENT-ID: " + contentId + " PROGRAM-ID: " + programId + " USER-DATA: " + userData, UarService_1.TAG)); });
            if (userData) {
                contentId = userData;
            }
            var extraData = this.lastActiveDialogModel ? this.lastActiveDialogModel.extraData : null;
            if (this.lastActiveDialogModel && extraData && contentId === extraData.contentId && (programId === extraData.programId || headerId === UarService_1.UarAuthDialogSuccessHeader)) {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### handleSuccessMessage show green checkbox", UarService_1.TAG)); });
                if (this.deferSendData)
                    this.deferSendData.resolve({ success: true, clearPinEntry: false });
                extraData.uarRequest = request;
            }
        };
        UarService.prototype.mapPinDialogErrorString = function (errorString) {
            if (errorString.indexOf("Invalid username or password; Account locked temporarily;") >= 0 ||
                errorString.indexOf("Account locked temporarily;") >= 0) {
                var arr = errorString.split(";");
                if (arr.length > 1) {
                    var secondsLocked = arr[arr.length - 1].trim();
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI017, { seconds: secondsLocked });
                }
            }
            switch (errorString) {
                case "Invalid pin; Account locked":
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI025);
                case "Account locked":
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TINEW);
                case "Invalid pin":
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI022);
                case "Invalid pin; one more try":
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI024);
                case "User has no pin":
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI023);
                case "Invalid avs-pin":
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI026);
                case "Invalid avs-pin; Account locked":
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI027);
                case "User has no avs-pin":
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI028);
                case "Invalid avs-pin; one more try":
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI029);
                case "Missing avs registration":
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI030);
                case "Invalid avs-pin; avs max sms per day reached":
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI030c);
                case "Invalid avs-pin; missing msisdn, unable to send avs-otp":
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI030b);
                case "avs-otp required":
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI030a);
                case "Invalid username or password; Account locked":
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI018);
                case "timeout":
                    return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI019);
                default:
                    if (errorString && errorString.length > 0) {
                        return errorString;
                    }
                    else {
                        return public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_GN_TI025a);
                    }
            }
        };
        UarService.prototype.isSpecialContentId = function (contentId) {
            if (public_4.Guard.isUndefined(contentId))
                return false;
            if (contentId === UarService_1.AVSCONTENT_SCENARIO)
                return true;
            try {
                var parentalArea = JSON.parse(contentId);
                if (public_4.Guard.isDefined(parentalArea.contentType))
                    return true;
            }
            catch (error) {
                return false;
            }
            return false;
        };
        UarService.prototype.enrichAuthDialogModel = function (userData) {
            var _a;
            var extraData = (_a = this.lastActiveDialogModel) === null || _a === void 0 ? void 0 : _a.extraData;
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### enrichAuthDialogModel for " + userData, UarService_1.TAG)); });
            var userDataJson;
            if (public_4.Guard.isUndefined(userData) || userData == "")
                return false;
            try {
                userDataJson = JSON.parse(userData);
            }
            catch (error) {
                public_4.Logger.warn(function (log) { return log(public_4.LogMsg("##### enrichAuthDialogModel error parsing Json USER-DATA " + userData, UarService_1.TAG)); });
                return false;
            }
            if (extraData && userDataJson && userDataJson.version == "0.1") {
                extraData.dialogTitle = userDataJson ? userDataJson.dialogTitle : "Unknown title";
                extraData.paragraph1 = userDataJson ? userDataJson.dialogParagraph1 : undefined;
                extraData.paragraph2 = userDataJson ? userDataJson.dialogParagraph2 : undefined;
                extraData.subtext = userDataJson.subtext;
                extraData.removePinForgotten = userDataJson.removePinForgotten;
                extraData.navigateBackAtCancel = userDataJson.navigateBackAtCancel;
                if (this.lastActiveDialogModel) {
                    this.lastActiveDialogModel.opaqueBackground = userDataJson.opaqueBackground;
                }
            }
            else {
                public_4.Logger.warn(function (log) { return log(public_4.LogMsg("##### enrichAuthDialogModel unsupported version number: " + (userDataJson ? userDataJson.version : "unknown"), UarService_1.TAG)); });
                throw new Error("unsupported version number of authentication dialog: " + (userDataJson ? userDataJson.version : "unknown"));
            }
            extraData.hideComfortFeature = true;
            return true;
        };
        UarService.prototype.rejectAndCancel = function (request) {
            if (this.deferred)
                this.deferred.reject(new UarError(UarErrorReason.ERROR_INVALID_DIALOG, UarServiceError.ERROR_INVALID_DIALOG));
            this.deferred = undefined;
            this.lastActiveDialogModel = undefined;
            request.PostCancel();
        };
        UarService.prototype.handlePinDialog = function (request, jsonResult) {
            var _this = this;
            var jsonContentId = jsonResult ? jsonResult.header.source.variables["CONTENT-ID"] : undefined;
            var errorStringHeader = jsonResult ? jsonResult.header.source.variables["ERROR-STRING"] : "";
            var userData = jsonResult ? jsonResult.header.source.variables["USER-DATA"] : undefined;
            var programId = jsonResult ? jsonResult.header.source.variables["PROGRAM-ID"] : undefined;
            var scope = jsonResult ? jsonResult.header.source.variables.SCOPE : undefined;
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### handlePinDialog for " + (jsonContentId || userData), UarService_1.TAG)); });
            var extraData = this.lastActiveDialogModel ? this.lastActiveDialogModel.extraData : null;
            var isContentUar = jsonContentId != null;
            var isAuthUar = (jsonResult === null || jsonResult === void 0 ? void 0 : jsonResult.header) &&
                (jsonResult.header.source.id === "AuthenticationManager.UAR.Input.Header" ||
                    jsonResult.header.source.id === "AuthenticationManager" ||
                    jsonResult.header.source.id === "AuthenticationManager.UAR.Error.Header");
            var contentId = isAuthUar ? userData : jsonContentId;
            var recordingFunctionLocked = jsonResult.header.source.variables.TYPE == "group-locked" && jsonResult.header.source.variables["LOCK-ID"] && jsonResult.header.source.variables["LOCK-ID"] == UarService_1.UarRecordingFunctionLockName;
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### handlePinDialog recordingFunctionLocked: " + recordingFunctionLocked, UarService_1.TAG)); });
            var isDialogUpdate = false;
            if (isContentUar) {
                isDialogUpdate = !!(extraData && extraData.contentId === contentId && extraData.programId === programId);
            }
            else if (isAuthUar) {
                isDialogUpdate = !!(extraData && extraData.contentId === contentId);
            }
            if (isDialogUpdate) {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### handlePinDialog dialog update (contentUar: " + isContentUar + ") with CONTENT-ID: " + contentId + " PROGRAM-ID: " + programId + " SCOPE: " + scope, UarService_1.TAG)); });
                var errorString = this.mapPinDialogErrorString(errorStringHeader);
                this.updateDialogModel(request, errorString);
            }
            else {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### handlePinDialog create dialog (contentUar: " + isContentUar + ") for CONTENT-ID: " + contentId + " PROGRAM-ID: " + programId + " SCOPE: " + scope, UarService_1.TAG)); });
                var paragraph1 = "Unknown pin dialog case for scope " + scope + " and content-id " + contentId;
                var paragraph2 = public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_CR_TI017c);
                var dialogTitle = public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_PH_TI001);
                var extraData_1 = {
                    dialogTitle: dialogTitle,
                    paragraph1: paragraph1,
                    paragraph2: paragraph2,
                    sendData: function (value) {
                        extraData_1.waitingForResponse = true;
                        _this.deferSendData = public_4.Defer.defer();
                        request.PostResponse(value);
                        return _this.deferSendData.promise;
                    },
                    uarRequest: request,
                    disabled: false,
                    dialogOpen: false,
                    contentId: contentId,
                    programId: programId,
                    id: jsonResult ? jsonResult.id : undefined,
                    dialog: undefined,
                    waitingForResponse: false
                };
                this.lastActiveDialogModel = {
                    message: "",
                    extraData: extraData_1,
                    ignoreSafeArea: true
                };
                if (recordingFunctionLocked) {
                    var extraData_2 = this.lastActiveDialogModel.extraData;
                    extraData_2.paragraph1 = public_2.Filter.message(public_2.Filter.context(), public_7.messagesCore.STB_CR_TI025);
                    this.showPinDialog();
                }
                else if (isContentUar) {
                }
                else if (isAuthUar) {
                    if (this.enrichAuthDialogModel(userData)) {
                        this.showPinDialog();
                    }
                    else {
                        this.rejectAndCancel(extraData_1.uarRequest);
                        if (scope == "program" || scope == "content") {
                            public_4.Logger.warn(function (log) { return log(public_4.LogMsg("##### handlePinDialog unhandled AuthUar dialog for CONTENT-ID: " + contentId + " PROGRAM-ID: " + programId + " SCOPE: " + scope, UarService_1.TAG)); });
                        }
                    }
                }
                else {
                    this.rejectAndCancel(extraData_1.uarRequest);
                    if (scope == "program" || scope == "content") {
                        public_4.Logger.warn(function (log) { return log(public_4.LogMsg("##### handlePinDialog unhandled dialog for CONTENT-ID: " + contentId + " PROGRAM-ID: " + programId + " SCOPE: " + scope, UarService_1.TAG)); });
                    }
                }
            }
        };
        UarService.prototype.cancelNonActiveDialog = function () {
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### DialogCancel reject promise because canceled before shown", UarService_1.TAG)); });
            if (this.deferred) {
                this.deferred.reject(new UarError(UarErrorReason.ERROR_DIALOG_ALREADY_CANCELED, UarServiceError.ERROR_DIALOG_ALREADY_CANCELED));
            }
            this.deferred = undefined;
            this.lastActiveDialogModel = undefined;
        };
        UarService.prototype.updateDialogModel = function (request, errorString) {
            var _this = this;
            var _a;
            var extraData = (_a = this.lastActiveDialogModel) === null || _a === void 0 ? void 0 : _a.extraData;
            if (extraData) {
                extraData.waitingForResponse = false;
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### updateDialogModel triggered", UarService_1.TAG)); });
                extraData.disabled = false;
                extraData.sendData = function (value) {
                    extraData.waitingForResponse = true;
                    _this.deferSendData = public_4.Defer.defer();
                    request.PostResponse(value);
                    return _this.deferSendData.promise;
                };
                if (this.deferSendData)
                    this.deferSendData.resolve({ success: false, clearPinEntry: true });
                extraData.uarRequest = request;
                extraData.id = request.id;
                if (errorString && errorString.length > 0) {
                    var notificationService = public_2.TVNotificationService.getInstance();
                    notificationService.notifyError(errorString);
                }
            }
        };
        UarService.prototype.showPinDialog = function () {
            var _this = this;
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("showPinDialog - start part 1", UarService_1.TAG)); });
            if (this.lastActiveDialogModel) {
                var dialogService = public_2.TVDialogHostService.getInstance();
                var extraData_3 = this.lastActiveDialogModel.extraData;
                extraData_3.waitingForResponse = false;
                extraData_3.dialogOpen = true;
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("showPinDialog - start part 2", UarService_1.TAG)); });
                extraData_3.dialog = dialogService.show(this.lastActiveDialogModel, uar_pin_dialog_1.UarPinDialogComponent, { voiceCommandBehaviour: { disableVoiceCommandExecution: true } });
                extraData_3.dialog
                    .result()
                    .then(function (result) {
                    public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### showPinDialog closed with " + result.resultId + " for " + extraData_3.paragraph1, UarService_1.TAG)); });
                    if (result.resultId === "success") {
                        return result.closed.then(function () {
                            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### showPinDialog try resolving promise " + _this.deferred, UarService_1.TAG)); });
                            if (_this.deferred) {
                                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### showPinDialog resolve promise", UarService_1.TAG)); });
                                _this.deferred.resolve({});
                            }
                            _this.deferred = undefined;
                        });
                    }
                    else {
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### showPinDialog reject promise", UarService_1.TAG)); });
                        if (result.resultId === "pinforgotten") {
                            extraData_3.uarRequest.PostCancel();
                            var promise = bluebird.resolve(undefined);
                            if (_this.pinForgottenFunc) {
                                promise = _this.pinForgottenFunc();
                                _this.pinForgottenFunc = undefined;
                            }
                            if (_this.deferred)
                                _this.deferred.reject(new UarErrorPinForgottenCalled(UarServiceError.ERROR_DIALOGCLOSE_PINFORGOTTEN));
                            _this.deferred = undefined;
                            promise
                                .catch(public_4.ErrorManager.catchFunc(UarService_1, 0x0A))
                                .finally(function () {
                                public_2.RouteService.getInstance().startIntent(new public_2.IntentUac.UserPin({ pinForgotten: true, navigateBackAtCancel: extraData_3.navigateBackAtCancel }));
                            });
                        }
                        else {
                            if (_this.deferred)
                                _this.deferred.reject(new UarDialogAbortError(UarServiceError.ERROR_DIALOGCLOSE_NOSUCCESS));
                            _this.deferred = undefined;
                            extraData_3.uarRequest.PostCancel();
                        }
                        return bluebird.resolve(null);
                    }
                })
                    .catch(function (e) {
                    public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### showPinDialog was canceled by user: reject promise", UarService_1.TAG)); });
                    if (_this.deferred)
                        _this.deferred.reject(new UarDialogAbortError(UarServiceError.ERROR_DIALOGCLOSE_NOSUCCESS));
                    _this.deferred = undefined;
                    extraData_3.uarRequest.PostCancel();
                })
                    .finally(function () {
                    public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### showPinDialog reset active indicator for " + extraData_3.paragraph1, UarService_1.TAG)); });
                    _this.lastActiveDialogModel = undefined;
                });
            }
            else {
                public_4.Logger.warn(function (log) { return log(public_4.LogMsg("##### showPinDialog no dialog model available", UarService_1.TAG)); });
                if (this.deferred)
                    this.deferred.reject(new UarError(UarErrorReason.ERROR_DIALOGCANCEL_RECEIVED, UarServiceError.ERROR_DIALOGCANCEL_RECEIVED));
                this.deferred = undefined;
            }
        };
        UarService.prototype.handleLoginDialog = function (request, jsonResult) {
            var scope = jsonResult ? jsonResult.header.source.variables.SCOPE : undefined;
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### handleLoginDialog for scope->" + scope + " request->" + request.id, UarService_1.TAG)); });
            this.loginDialogRequest = request;
        };
        UarService.prototype.handleLoginError = function (request, jsonResult) {
            var errorStringHeader = jsonResult ? jsonResult.header.source.variables["ERROR-STRING"] : "";
            var retval = jsonResult ? jsonResult.header.source.variables.RETVAL : "";
            if (this.deferredLogin) {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### handleLoginError for ->" + errorStringHeader + " requestId->" + request.id, UarService_1.TAG)); });
                this.loginDialogRequest = request;
                if (request) {
                    var message = errorStringHeader ? errorStringHeader : this.getErrorMessageForRetVal(retval);
                    this.deferredLogin.reject(new UarError(UarErrorReason.ERROR_LOGIN_GETACCESSTOKEN, message));
                }
            }
        };
        UarService.prototype.getErrorMessageForRetVal = function (retval) {
            if (retval == "33") {
                return "timeout";
            }
            return "";
        };
        UarService.prototype.handlePasswordDialog = function (request, jsonResult) {
            var _this = this;
            var userData = jsonResult ? jsonResult.header.source.variables["USER-DATA"] : undefined;
            var scope = jsonResult ? jsonResult.header.source.variables.SCOPE : undefined;
            var errorStringHeader = jsonResult ? jsonResult.header.source.variables["ERROR-STRING"] : "";
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### handlePasswordDialog for " + userData, UarService_1.TAG)); });
            var extraData = this.lastActiveDialogModel ? this.lastActiveDialogModel.extraData : null;
            var isDialogUpdate = extraData && extraData.contentId === userData;
            if (isDialogUpdate) {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### handlePasswordDialog dialog update with CONTENT-ID: " + userData + " SCOPE: " + scope, UarService_1.TAG)); });
                var errorString = this.mapPinDialogErrorString(errorStringHeader);
                this.updateDialogModel(request, errorString);
            }
            else {
                var extraData_4 = {
                    dialogTitle: "Unknown title",
                    paragraph1: "",
                    paragraph2: "",
                    uarRequest: request,
                    disabled: false,
                    dialogOpen: false,
                    contentId: userData,
                    programId: undefined,
                    id: jsonResult ? jsonResult.id : undefined,
                    dialog: undefined,
                    sendData: function (value) {
                        extraData_4.waitingForResponse = true;
                        _this.deferSendData = public_4.Defer.defer();
                        request.PostResponse(value);
                        return _this.deferSendData.promise;
                    },
                    waitingForResponse: false
                };
                this.lastActiveDialogModel = {
                    message: request.message,
                    extraData: extraData_4,
                    ignoreSafeArea: true
                };
                if (this.enrichAuthDialogModel(userData)) {
                    var dialogService = public_2.TVDialogHostService.getInstance();
                    extraData_4.dialog = dialogService.show(this.lastActiveDialogModel, uar_password_dialog_1.UarPasswordDialogComponent, { voiceCommandBehaviour: { disableVoiceCommandExecution: true } });
                    extraData_4.dialog
                        .result()
                        .then(function (result) {
                        if (result && result.resultId == "success") {
                            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### handlePasswordDialog confirmed.", UarService_1.TAG)); });
                            if (_this.deferred)
                                _this.deferred.resolve({});
                            _this.deferred = undefined;
                        }
                        else {
                            if (_this.deferred)
                                _this.deferred.reject(new UarDialogAbortError(UarServiceError.ERROR_DIALOGCLOSE_NOSUCCESS));
                            _this.deferred = undefined;
                            extraData_4.uarRequest.PostCancel();
                        }
                    })
                        .catch(function () {
                        if (_this.deferred)
                            _this.deferred.reject(new UarDialogAbortError(UarServiceError.ERROR_DIALOGCLOSE_NOSUCCESS));
                        _this.deferred = undefined;
                        extraData_4.uarRequest.PostCancel();
                    })
                        .finally(function () {
                        public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### handlePasswordDialog reset active indicator for " + extraData_4.paragraph1, UarService_1.TAG)); });
                        _this.lastActiveDialogModel = undefined;
                    });
                }
                else {
                    this.rejectAndCancel(extraData_4.uarRequest);
                }
            }
        };
        UarService.prototype.checkResolvePromise = function () {
            var _this = this;
            if (!this.waitForDialogClose) {
                public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### onParentalBlockingChanged called not waitForDialogClose", UarService_1.TAG)); });
                var request = {};
                var extraData_5 = this.lastActiveDialogModel ? this.lastActiveDialogModel.extraData : null;
                if (extraData_5 && this.deferred) {
                    if (this.isSpecialContentId(extraData_5.contentId)) {
                        request.scenario = extraData_5.contentId;
                    }
                    else {
                        request.content = extraData_5.contentId;
                    }
                    public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### onParentalBlockingChanged check blocking status for: CONTENT-ID: " + extraData_5.contentId + " PROGRAM-ID: " + extraData_5.programId, UarService_1.TAG)); });
                    public_3.ApplicationClient.parentalControlManagement.getParentalBlockingStatus(request).then(function (response) {
                        if (!response.data.isBlocked) {
                            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### onParentalBlockingChanged resolve promise", UarService_1.TAG)); });
                            if (_this.deferred)
                                _this.deferred.resolve({});
                            _this.deferred = undefined;
                        }
                    }).catch(public_4.ErrorManager.catchFunc(UarService_1, 0x02));
                }
            }
        };
        UarService.prototype.onParentalBlockingChanged = function (event) {
            var _this = this;
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("##### onParentalBlockingChanged called", UarService_1.TAG)); });
            var notificationService = public_2.TVNotificationService.getInstance();
            public_3.ApplicationClient.parentalControlManagement.getParentalBlockingStatus(this.getAVSGetParentalBlockingStatusParams())
                .then(function (response) {
                if (response.data.isBlocked !== _this.isAVSBlocked) {
                    _this.eventManager.broadcast("onAvsBlockingChangedEvent", { oldIsAvsBlocked: _this.isAVSBlocked, newIsAvsBlocked: response.data.isBlocked });
                    _this.isAVSBlocked = response.data.isBlocked;
                    var minutes = public_4.Guard.isNumber(response.data.avsSessionRemainingTime) ? Math.floor((response.data.avsSessionRemainingTime + 5) / 60) : 30;
                    _this.isAVSBlocked
                        ? notificationService.notifyInfo(public_7.messagesCore.STB_TM031)
                        : notificationService.notifyInfo({ text: public_7.messagesCore.STB_TM030, values: { minutes: minutes } });
                }
            })
                .catch(public_4.ErrorManager.catchFunc(UarService_1, 0x03));
            this.checkResolvePromise();
            return false;
        };
        UarService.prototype.initializeMqttMessageHandler = function () {
            var _this = this;
            public_3.ApplicationClient
                .instrumentationManagement
                .getQueryObservable(["standard", "testing"])
                .pipe(operators_1.mergeMap(function (_a) {
                var client = _a.client, message = _a.message;
                return rxjs_1.of(message)
                    .pipe(public_4.filterMqttMessage("services.uar.getstatus"), operators_1.mergeMap(function (item) {
                    return (item.$correlationId && item.$replyToTopic) ? rxjs_1.of({ correlationId: item.$correlationId, replyToTopic: item.$replyToTopic }) : rxjs_1.NEVER;
                }), operators_1.mergeMap(function (_a) {
                    var correlationId = _a.correlationId, replyToTopic = _a.replyToTopic;
                    return rxjs_1.combineLatest([
                        rxjs_1.of(correlationId),
                        rxjs_1.of(replyToTopic),
                        public_3.ApplicationClient.parentalControlManagement.isComfortFeatureActive(),
                        _this.getAVSBlockingStatus(),
                        public_1.PconGroupedContentLockManager.getGroupedContentLockInfo(),
                    ]);
                }), operators_1.mergeMap(function (_a) {
                    var _b, _c, _d;
                    var correlationId = _a[0], replyToTopic = _a[1], isComfortFeatureActive = _a[2], avsBlockingStatus = _a[3], parentalInfo = _a[4];
                    var statusMessage = {
                        $type: "services.uar.returnstatus",
                        isAVSBlocked: avsBlockingStatus,
                        isComfortFeatureActive: isComfortFeatureActive.data.isActive,
                        hideAgeRating: (_b = (parentalInfo.maskedInfo.maskedContent && parentalInfo.isPconLocked ? parentalInfo.ageRatingValue : undefined)) !== null && _b !== void 0 ? _b : false,
                        hideUnrated: (_c = (parentalInfo.maskedInfo.maskedContent && parentalInfo.isPconLocked ? parentalInfo.isUnratedLocked : undefined)) !== null && _c !== void 0 ? _c : false,
                        hideErotic: (_d = (!avsBlockingStatus ? false : parentalInfo.maskedInfo.eroticCategory)) !== null && _d !== void 0 ? _d : false
                    };
                    return client.publish(replyToTopic, { $correlationId: correlationId, payload: statusMessage });
                }));
            }), public_4.ErrorManager.catchOperator(UarService_1, 0x0B), public_4.retryDelay({ delay: public_3.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_3.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
        };
        var UarService_1;
        UarService.classID = 0x702;
        UarService.UarDialogSuccessHeader = "UAR.PinDialog.Success.Header";
        UarService.UarAuthDialogSuccessHeader = "AuthenticationManager.UAR.Success.Header";
        UarService.UarRemoteAccessHeader = "UAR.RemoteAccess.Header";
        UarService.UarRecordingFunctionLockName = "RecordingFunctionLock";
        UarService.AVSCONTENT_SCENARIO = "ADULT_SESSION";
        UarService.debounceParentalAutoUnlock = 3000;
        __decorate([
            public_4.log2(function () { return ({ name: UarService_1.TAG }); })
        ], UarService.prototype, "handleParentalAutoUnlock", null);
        UarService = UarService_1 = __decorate([
            public_4.logTag()
        ], UarService);
        return UarService;
    }(public_2.ReactBaseService));
    exports.UarService = UarService;
});
//# sourceMappingURL=uar.service.js.map