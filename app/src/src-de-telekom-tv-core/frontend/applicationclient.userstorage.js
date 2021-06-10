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
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../public", "./applicationclient"], function (require, exports, bluebird, public_1, public_2, applicationclient_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserStorage = exports.RecordingFilterTypes = exports.RecordingSortTypes = void 0;
    var RecordingSortTypes;
    (function (RecordingSortTypes) {
        RecordingSortTypes["dateAsc"] = "dateAsc";
        RecordingSortTypes["dateDesc"] = "dateDesc";
        RecordingSortTypes["azAsc"] = "azAsc";
        RecordingSortTypes["azDesc"] = "azDesc";
        RecordingSortTypes["seasonEpisode"] = "seasonEpisode";
    })(RecordingSortTypes = exports.RecordingSortTypes || (exports.RecordingSortTypes = {}));
    var RecordingFilterTypes;
    (function (RecordingFilterTypes) {
        RecordingFilterTypes["available"] = "available";
        RecordingFilterTypes["notavailable"] = "notavailable";
        RecordingFilterTypes["failed"] = "failed";
        RecordingFilterTypes["watched"] = "watched";
        RecordingFilterTypes["unwatched"] = "unwatched";
        RecordingFilterTypes["stb"] = "stb";
        RecordingFilterTypes["cloud"] = "cloud";
    })(RecordingFilterTypes = exports.RecordingFilterTypes || (exports.RecordingFilterTypes = {}));
    var UserStorageUnexpectedValueError = (function (_super) {
        __extends(UserStorageUnexpectedValueError, _super);
        function UserStorageUnexpectedValueError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x600;
            return _this;
        }
        return UserStorageUnexpectedValueError;
    }(public_1.BaseError));
    var UserStoreKey;
    (function (UserStoreKey) {
        UserStoreKey["NetflixSilentSignInInfo"] = "NetflixSilentSignInInfo";
        UserStoreKey["UserStartupInfo"] = "UserStartupInfo";
    })(UserStoreKey || (UserStoreKey = {}));
    var UserStorage = (function () {
        function UserStorage() {
        }
        UserStorage_1 = UserStorage;
        UserStorage.readValue = function (key, defaultValue) {
            if (defaultValue === void 0) { defaultValue = ""; }
            return public_2.ServiceClientZac.getUserStorageValue(key, defaultValue);
        };
        UserStorage.writeValue = function (key, value) {
            return public_2.ServiceClientZac.writeItem(key, value);
        };
        UserStorage.getActiveChannelListId = function (completeChannelListId) {
            return public_2.ServiceClientZac.getUserStorageValue(public_2.ServiceClientZac.ACTIVE_CHANNEL_LIST, completeChannelListId);
        };
        UserStorage.setActiveChannelListId = function (activeChannelListId) {
            return public_2.ServiceClientZac.writeItem(public_2.ServiceClientZac.ACTIVE_CHANNEL_LIST, activeChannelListId);
        };
        UserStorage.getFirstBootTimeMs = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_2.ServiceClientZac.stbFirstBootTimeKey, "")
                .then(function (value) { return value && value.length > 0 ? Number(value) : -1; });
        };
        UserStorage.setFirstBootTimeMs = function () {
            return public_2.ServiceClientZac.writeItem(public_2.ServiceClientZac.stbFirstBootTimeKey, String(new Date().getTime()));
        };
        UserStorage.resetFirstBootTimeValue = function () {
            return public_2.ServiceClientZac.writeItem(public_2.ServiceClientZac.stbFirstBootTimeKey, "");
        };
        UserStorage.getStartPageBootTimeReferenceMs = function () {
            return public_2.ServiceClientZac.getUserStorageValue(this.startPageBootTimeReferenceKey, "")
                .then(function (value) { return value && value.length > 0 ? Number(value) : -1; });
        };
        UserStorage.setStartupBootTimeReferenceMs = function (startPageBootTimeReferenceMs) {
            return public_2.ServiceClientZac.writeItem(this.startPageBootTimeReferenceKey, String(startPageBootTimeReferenceMs));
        };
        UserStorage.updateStartupBootTimeReference = function () {
            return applicationclient_1.ApplicationClient.userStorage.setStartupBootTimeReferenceMs(applicationclient_1.ApplicationClient.system.getLastBootTimeMilliseconds());
        };
        UserStorage.getCampaignParameters = function (campaignId) {
            var defaultValue = { campaignId: campaignId, count: 0 };
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyStartPageParameters, JSON.stringify(defaultValue))
                .then(function (value) { return JSON.parse(value); })
                .then(function (startPageParameters) {
                if (startPageParameters.campaignId != campaignId) {
                    startPageParameters.campaignId = campaignId;
                    startPageParameters.count = 0;
                }
                return startPageParameters;
            });
        };
        UserStorage.getStartupPageCount = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyStartPageParameters, "")
                .then(function (value) { return value.length > 0 ? JSON.parse(value) : undefined; })
                .then(function (startupPageParameters) { return startupPageParameters ? startupPageParameters.count : 0; });
        };
        UserStorage.increaseCampaignCount = function (campaignId) {
            var defaultValue = { campaignId: campaignId, count: 0 };
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyStartPageParameters, JSON.stringify(defaultValue))
                .then(function (value) { return JSON.parse(value); })
                .then(function (startPageParameters) {
                if (startPageParameters.campaignId == campaignId) {
                    startPageParameters.count++;
                }
                else {
                    startPageParameters.campaignId = campaignId;
                    startPageParameters.count = 1;
                }
                return startPageParameters;
            })
                .then(function (startPageParameters) { return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyStartPageParameters, JSON.stringify(startPageParameters))
                .then(function () { return startPageParameters.count; }); });
        };
        UserStorage.resetCampaignCount = function () {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyStartPageParameters, "");
        };
        UserStorage.getMenuSoundsEnabled = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyMenuSounds, public_1.Configuration.instance.settings.defaultValueMenuSounds)
                .then(function (value) { return value.toLowerCase() == "true"; });
        };
        UserStorage.setMenuSoundsEnabled = function (enable) {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyMenuSounds, String(enable));
        };
        UserStorage.getDiagnosticEventServiceEnabled = function () {
            return public_2.ServiceClientZac.getUserStorageValue(UserStorage_1.diagnosticEventServiceEnabledKey, UserStorage_1.diagnosticEventServiceEnabledDefaultValue)
                .then(function (value) { return value.toLowerCase() == "true"; });
        };
        UserStorage.setDiagnosticEventServiceEnabled = function (enable) {
            return public_2.ServiceClientZac.writeItem(UserStorage_1.diagnosticEventServiceEnabledKey, String(enable));
        };
        UserStorage.getDiagnosticEventServicePerformanceCounterEnabled = function () {
            return public_2.ServiceClientZac.getUserStorageValue(UserStorage_1.diagnosticEventServicePerformanceCounterEnabledKey, UserStorage_1.diagnosticEventServiceEnabledPerformanceCounterDefaultValue)
                .then(function (value) { return value.toLowerCase() == "true"; });
        };
        UserStorage.setDiagnosticEventServicePerformanceCounterEnabled = function (enable) {
            return public_2.ServiceClientZac.writeItem(UserStorage_1.diagnosticEventServicePerformanceCounterEnabledKey, String(enable));
        };
        UserStorage.getLiveTvBackChannelSelectionActivated = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyLiveTvBackChannelSelectionActivate, public_1.Configuration.instance.settings.defaultValueLiveTvBackChannelSelectionActivate)
                .then(function (value) { return value.toLowerCase() == "true"; });
        };
        UserStorage.setLiveTvBackChannelSelectionActivated = function (activated) {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyLiveTvBackChannelSelectionActivate, String(activated));
        };
        UserStorage.getComfortFunctionInfoTextEnabled = function () {
            var settingsKey = public_1.Configuration.instance.settings.userStoreKeyComfortFeatureInfoText;
            var defaultValue = public_1.Configuration.instance.settings.defaultValueComfortFeatureInfoText;
            return public_2.ServiceClientZac.getUserStorageValue(settingsKey, defaultValue)
                .then(function (value) { return value.toLowerCase() == "true"; });
        };
        UserStorage.setComfortFunctionInfoTextEnabled = function (enable) {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyComfortFeatureInfoText, String(enable));
        };
        UserStorage.getRecordingListSortScheduledRecordings = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyRecordingListSortScheduledRecordings, "")
                .then(function (value) { return value && value.length > 0 ? RecordingSortTypes[value] : undefined; });
        };
        UserStorage.setRecordingListSortScheduledRecordings = function (sortType) {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyRecordingListSortScheduledRecordings, sortType ? sortType : "");
        };
        UserStorage.getRecordingListSortMyRecordings = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyRecordingListSortMyRecordings, "")
                .then(function (value) { return value && value.length > 0 ? RecordingSortTypes[value] : undefined; });
        };
        UserStorage.setRecordingListSortMyRecordings = function (sortType) {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyRecordingListSortMyRecordings, sortType ? sortType : "");
        };
        UserStorage.getRecordingListSortEpisodes = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyRecordingListSortEpisodes, "")
                .then(function (value) { return value && value.length > 0 ? RecordingSortTypes[value] : undefined; });
        };
        UserStorage.setRecordingListSortEpisodes = function (sortType) {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyRecordingListSortEpisodes, sortType ? sortType : "");
        };
        UserStorage.getRecordingListFilterScheduledRecordings = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyRecordingListFilterScheduledRecordings, "")
                .then(function (value) { return value && value.length > 0 ? RecordingFilterTypes[value] : undefined; });
        };
        UserStorage.setRecordingListFilterScheduledRecordings = function (filterType) {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyRecordingListFilterScheduledRecordings, filterType ? filterType : "");
        };
        UserStorage.getRecordingListFilterMyRecordings = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyRecordingListFilterMyRecordings, "")
                .then(function (value) { return value && value.length > 0 ? RecordingFilterTypes[value] : undefined; });
        };
        UserStorage.setRecordingListFilterMyRecordings = function (FilterType) {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyRecordingListFilterMyRecordings, FilterType ? FilterType : "");
        };
        UserStorage.getRecordingListFilterEpisodes = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyRecordingListFilterEpisodes, "")
                .then(function (value) { return value && value.length > 0 ? RecordingFilterTypes[value] : undefined; });
        };
        UserStorage.setRecordingListFilterEpisodes = function (filterType) {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyRecordingListFilterEpisodes, filterType ? filterType : "");
        };
        UserStorage.getOnDemandAutoPlayEnabled = function () {
            var settingsKey = public_1.Configuration.instance.settings.userStoreKeyOnDemandAutoPlay;
            var defaultValue = public_1.Configuration.instance.settings.defaultValueOnDemandAutoPlay;
            return public_2.ServiceClientZac.getUserStorageValue(settingsKey, defaultValue)
                .then(function (value) { return value.toLowerCase() == "true"; });
        };
        UserStorage.setOnDemandAutoPlayEnabled = function (enable) {
            var settingsKey = public_1.Configuration.instance.settings.userStoreKeyOnDemandAutoPlay;
            return public_2.ServiceClientZac.writeItem(settingsKey, String(enable));
        };
        UserStorage.getYoutubeVisibilityEnabled = function () {
            var settingsKey = public_1.Configuration.instance.settings.userStoreKeyYoutubeVisibility;
            var defaultValue = public_1.Configuration.instance.settings.defaultValueYoutubeVisibility;
            return public_2.ServiceClientZac.getUserStorageValue(settingsKey, defaultValue)
                .then(function (value) { return value.toLowerCase() == "true"; });
        };
        UserStorage.setYoutubeVisibilityEnabled = function (enable) {
            var settingsKey = public_1.Configuration.instance.settings.userStoreKeyYoutubeVisibility;
            return public_2.ServiceClientZac.writeItem(settingsKey, String(enable));
        };
        UserStorage.getLoginEmail = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyLoginEmail, "");
        };
        UserStorage.setLoginEmail = function (loginEmail) {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyLoginEmail, loginEmail);
        };
        UserStorage.getColorKeyFunction = function (color) {
            var settingsKey = "appCore.colorKeyFunction_" + color;
            return public_2.ServiceClientZac.getUserStorageValue(settingsKey, "undefined")
                .then(function (functionId) { return functionId.length > 0 ? functionId : "undefined"; });
        };
        UserStorage.setColorKeyFunction = function (color, functionId, removeFunctionFromOtherKeys) {
            if (removeFunctionFromOtherKeys === void 0) { removeFunctionFromOtherKeys = false; }
            var settingsKey = "appCore.colorKeyFunction_" + color;
            return public_2.ServiceClientZac.writeItem(settingsKey, functionId)
                .then(function () { return functionId == "undefined" || !removeFunctionFromOtherKeys ? bluebird.resolve() :
                UserStorage_1.clearColorFunction(["blue", "green", "yellow"].filter(function (clr) { return clr != color; }), functionId); });
        };
        UserStorage.clearColorFunction = function (otherColors, functionId, index) {
            if (index === void 0) { index = 0; }
            var color = otherColors[index];
            return UserStorage_1.getColorKeyFunction(color)
                .then(function (colorFunctionId) { return (colorFunctionId != functionId ? bluebird.resolve() : UserStorage_1.setColorKeyFunction(color, "undefined"))
                .then(function () { return index >= otherColors.length - 1 ? bluebird.resolve() : UserStorage_1.clearColorFunction(otherColors, functionId, index + 1); }); });
        };
        UserStorage.getStartFirstTimeUsage = function () {
            var settingsKey = public_1.Configuration.instance.settings.userStoreKeyStartFirstTimeUsage;
            var defaultValue = public_1.Configuration.instance.settings.defaultValueStartFirstTimeUsage;
            return public_2.ServiceClientZac.getUserStorageValue(settingsKey, defaultValue)
                .then(function (value) { return value.toLowerCase() == "true"; });
        };
        UserStorage.setStartFirstTimeUsage = function (start) {
            var settingsKey = public_1.Configuration.instance.settings.userStoreKeyStartFirstTimeUsage;
            return public_2.ServiceClientZac.writeItem(settingsKey, String(start));
        };
        UserStorage.resetStartFirstTimeUsage = function () {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyStartFirstTimeUsage, "");
        };
        UserStorage.getFtuPassedDate = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyFtuPassedDate, "")
                .then(function (ftuPassedDateString) { return ftuPassedDateString.length > 0 ? new Date(Number(ftuPassedDateString)) : undefined; });
        };
        UserStorage.setFtuPassed = function () {
            return applicationclient_1.ApplicationClient.userStorage.getFtuPassedDate()
                .then(function (ftuPassedDate) {
                if (ftuPassedDate)
                    return;
                return applicationclient_1.ApplicationClient.userStorage.setFtuPassedDate()
                    .then(function () { return applicationclient_1.ApplicationClient.userStorage.getFtuPassedDate(); })
                    .then(function (ftuPassedDate) { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("FTU passed at " + (ftuPassedDate === null || ftuPassedDate === void 0 ? void 0 : ftuPassedDate.toLocaleDateString()), UserStorage_1.TAG)); }); })
                    .catch(public_1.ErrorManager.catchFunc(UserStorage_1, 0x01));
            })
                .catch(public_1.ErrorManager.catchFunc(UserStorage_1, 0x02));
        };
        UserStorage.setFtuPassedDate = function (ftuPassedDate) {
            var timeString = String((ftuPassedDate == undefined ? new Date() : ftuPassedDate).valueOf());
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyFtuPassedDate, timeString);
        };
        UserStorage.resetFtuPassedDate = function () {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyFtuPassedDate, "");
        };
        UserStorage.deleteFtuPassedDate = function () {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyFtuPassedDate, "");
        };
        UserStorage.getContinueWatchingTimestampMs = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyContinueWatchingTimeStamp, "")
                .then(function (value) { return value && value.length > 0 ? Number(value) : undefined; });
        };
        UserStorage.setContinueWatchingTimestampMs = function () {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyContinueWatchingTimeStamp, String(new Date().getTime()));
        };
        UserStorage.getPurchasesLocked = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyPurchasesLock, public_1.Configuration.instance.settings.defaultValuePurchasesLock)
                .then(function (value) { return value.toLowerCase() == "true"; });
        };
        UserStorage.setPurchasesLocked = function (lock) {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyPurchasesLock, String(lock));
        };
        UserStorage.getHideNewYouthProtectionNotification = function () {
            return public_2.ServiceClientZac.getUserStorageValue(UserStorage_1.hideNewYouthProtectionInfoKey, "")
                .then(function (value) { return value.toLowerCase() == "true"; });
        };
        UserStorage.setHideNewYouthProtectionNotification = function (hide) {
            if (hide === void 0) { hide = true; }
            return public_2.ServiceClientZac.writeItem(UserStorage_1.hideNewYouthProtectionInfoKey, String(hide));
        };
        UserStorage.getUsbMediaLocked = function () {
            var settingsKey = public_1.Configuration.instance.settings.userStoreKeyUsbMediaLock;
            var defaultValue = public_1.Configuration.instance.settings.defaultValueUsbMediaLock;
            return public_2.ServiceClientZac.getUserStorageValue(settingsKey, defaultValue)
                .then(function (value) { return value.toLowerCase() == "true"; });
        };
        UserStorage.setUsbMediaLocked = function (lock) {
            var settingsKey = public_1.Configuration.instance.settings.userStoreKeyUsbMediaLock;
            return public_2.ServiceClientZac.writeItem(settingsKey, String(lock));
        };
        UserStorage.getTvMessageEvents = function () {
            var settingsKey = public_1.Configuration.instance.settings.userStoreKeyTvMessages;
            var result = [];
            return public_2.ServiceClientZac.getUserStorageValue(settingsKey, "")
                .then(function (serialized) {
                try {
                    if (serialized) {
                        result = JSON.parse(serialized);
                    }
                }
                catch (_a) { }
                return result;
            });
        };
        UserStorage.setTvMessageEvents = function (tvMessages) {
            var settingsKey = public_1.Configuration.instance.settings.userStoreKeyTvMessages;
            var serialized = "";
            if (tvMessages) {
                tvMessages.slice(-10);
                serialized = JSON.stringify(tvMessages);
            }
            return public_2.ServiceClientZac.writeItem(settingsKey, serialized);
        };
        UserStorage.getNextNighlyRebootTime = function () {
            return public_2.ServiceClientZac.getUserStorageValue(this.nextNighlyRebootTimeSettingsKey, "");
        };
        UserStorage.setNextNighlyRebootTime = function (localTimeString) {
            return public_2.ServiceClientZac.writeItem(this.nextNighlyRebootTimeSettingsKey, localTimeString, false);
        };
        UserStorage.resetNextNighlyRebootTime = function () {
            return public_2.ServiceClientZac.writeItem(this.nextNighlyRebootTimeSettingsKey, "", false);
        };
        UserStorage.getSatWizardLastRuntime = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeySatWizardLastRuntime, "");
        };
        UserStorage.deleteSatWizardLastRuntime = function () {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeySatWizardLastRuntime, "");
        };
        UserStorage.setSatWizardLastRuntime = function (lastRuntime) {
            var timeString = String((lastRuntime == undefined ? new Date() : lastRuntime).getTime());
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeySatWizardLastRuntime, timeString);
        };
        UserStorage.getAutoStandbyTimerSeconds = function () {
            return public_2.ServiceClientZac.getUserStorageValue(UserStorage_1.autoStandbyTimerSecondsKey, "")
                .then(function (value) { return value && value.length > 0 ? Number(value) : undefined; });
        };
        UserStorage.deleteAutoStandbyTimerSeconds = function () {
            return public_2.ServiceClientZac.writeItem(UserStorage_1.autoStandbyTimerSecondsKey, "");
        };
        UserStorage.setAutoStandbyTimerSeconds = function (seconds) {
            return public_2.ServiceClientZac.writeItem(UserStorage_1.autoStandbyTimerSecondsKey, String(seconds));
        };
        UserStorage.setSuppressAskToSetMaster = function () {
            return applicationclient_1.ApplicationClient.authMan.getIdToken()
                .then(function (idToken) { return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeySuppressAskToSetMaster, idToken.anid || "UNKNOWN_ANID"); });
        };
        UserStorage.resetSuppressAskToSetMaster = function () {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeySuppressAskToSetMaster, "");
        };
        UserStorage.getSuppressAskToSetMaster = function () {
            return applicationclient_1.ApplicationClient.authMan.getIdToken()
                .then(function (idToken) {
                return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeySuppressAskToSetMaster, "")
                    .then(function (refAnid) { return refAnid == idToken.anid; });
            });
        };
        UserStorage.getEpgGridTipsEnabled = function () {
            return public_2.ServiceClientZac.getUserStorageValue(UserStorage_1.epgGridTipsEnabledKey, "false")
                .then(function (value) { return value.toLowerCase() == "true"; });
        };
        UserStorage.setEpgGridTipsEnabled = function (epgGridTipsEnabled) {
            return public_2.ServiceClientZac.writeItem(UserStorage_1.epgGridTipsEnabledKey, String(epgGridTipsEnabled));
        };
        UserStorage.getNetflixSilentSignInInfo = function () {
            return public_2.ServiceClientZac.getUserStorageValue(UserStoreKey.NetflixSilentSignInInfo, "")
                .then(function (value) { return value.length > 0 ? JSON.parse(value) : undefined; });
        };
        UserStorage.setNetflixSilentSignInInfo = function () {
            return applicationclient_1.ApplicationClient.authMan.getIdToken()
                .then(function (event) {
                if (!event.anid) {
                    throw new UserStorageUnexpectedValueError("Unable to set NetflixSilentSignInInfo: ANID is empty.");
                }
                var netflixSSIInfo = {
                    timestamp: new Date().valueOf()
                };
                return public_2.ServiceClientZac.writeItem(UserStoreKey.NetflixSilentSignInInfo, JSON.stringify(netflixSSIInfo));
            });
        };
        UserStorage.deleteNetflixSilentSignInInfo = function () {
            return public_2.ServiceClientZac.writeItem(UserStoreKey.NetflixSilentSignInInfo, "");
        };
        UserStorage.getUserStartupInfo = function () {
            return public_2.ServiceClientZac.getUserStorageValue(UserStoreKey.UserStartupInfo, "")
                .then(function (value) { return value.length > 0 ? JSON.parse(value) : undefined; });
        };
        UserStorage.setUserStartupInfo = function () {
            return applicationclient_1.ApplicationClient.authMan.getIdToken()
                .then(function (event) {
                if (!event.anid) {
                    throw new UserStorageUnexpectedValueError("Unable to set UserStartupInfo: ANID is empty.");
                }
                var userStartupInfo = {
                    anid: event.anid,
                    timestamp: new Date().valueOf()
                };
                return public_2.ServiceClientZac.writeItem(UserStoreKey.UserStartupInfo, JSON.stringify(userStartupInfo));
            });
        };
        UserStorage.deleteUserStartupInfo = function () {
            return public_2.ServiceClientZac.writeItem(UserStoreKey.UserStartupInfo, "");
        };
        UserStorage.getRadioMigrationAppChoice = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyRadioAppChoice, "")
                .then(function (value) { return value; });
        };
        UserStorage.setRadioMigrationAppChoice = function (choice) {
            return public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyRadioAppChoice, choice);
        };
        var UserStorage_1;
        UserStorage.classID = 0x756;
        UserStorage.nextNighlyRebootTimeSettingsKey = "appCore.temp.nextnighlyreboottime";
        UserStorage.startPageBootTimeReferenceKey = "appCore.temp.startPageBootTimeReference";
        UserStorage.epgGridTipsEnabledKey = "EpgGridTipsEnabled";
        UserStorage.hideNewYouthProtectionInfoKey = "HideNewYouthProtection";
        UserStorage.autoStandbyTimerSecondsKey = "AutoStandbyTimerSeconds";
        UserStorage.diagnosticEventServiceEnabledKey = "DiagnosticEventServiceEnabled";
        UserStorage.diagnosticEventServicePerformanceCounterEnabledKey = "DiagnosticEventServicePerformanceCounterEnabled";
        UserStorage.diagnosticEventServiceEnabledDefaultValue = "false";
        UserStorage.diagnosticEventServiceEnabledPerformanceCounterDefaultValue = "false";
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "setStartupBootTimeReferenceMs", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "updateStartupBootTimeReference", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getCampaignParameters", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getStartupPageCount", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "increaseCampaignCount", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "resetCampaignCount", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getComfortFunctionInfoTextEnabled", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getRecordingListSortScheduledRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getRecordingListSortMyRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getRecordingListSortEpisodes", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getRecordingListFilterScheduledRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getRecordingListFilterMyRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getRecordingListFilterEpisodes", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getOnDemandAutoPlayEnabled", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getYoutubeVisibilityEnabled", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getLoginEmail", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "clearColorFunction", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getStartFirstTimeUsage", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "setFtuPassed", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getAutoStandbyTimerSeconds", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "deleteAutoStandbyTimerSeconds", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "setAutoStandbyTimerSeconds", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "setSuppressAskToSetMaster", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "resetSuppressAskToSetMaster", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getSuppressAskToSetMaster", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getEpgGridTipsEnabled", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "setEpgGridTipsEnabled", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getNetflixSilentSignInInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "setNetflixSilentSignInInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "deleteNetflixSilentSignInInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getUserStartupInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "setUserStartupInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "deleteUserStartupInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "getRadioMigrationAppChoice", null);
        __decorate([
            public_1.log2(function () { return ({ name: UserStorage_1.TAG }); })
        ], UserStorage, "setRadioMigrationAppChoice", null);
        UserStorage = UserStorage_1 = __decorate([
            public_1.logTag()
        ], UserStorage);
        return UserStorage;
    }());
    exports.UserStorage = UserStorage;
});
//# sourceMappingURL=applicationclient.userstorage.js.map