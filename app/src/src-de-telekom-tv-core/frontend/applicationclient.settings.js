var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../backend/public", "./applicationclient.userstorage"], function (require, exports, bluebird, public_1, public_2, applicationclient_userstorage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Settings = exports.StandbyFunctionality = exports.SatCableLength = exports.PreferedStreamQuality = void 0;
    var PreferedStreamQuality;
    (function (PreferedStreamQuality) {
        PreferedStreamQuality[PreferedStreamQuality["UHD"] = 0] = "UHD";
        PreferedStreamQuality[PreferedStreamQuality["HD"] = 1] = "HD";
        PreferedStreamQuality[PreferedStreamQuality["SD"] = 2] = "SD";
    })(PreferedStreamQuality = exports.PreferedStreamQuality || (exports.PreferedStreamQuality = {}));
    var SatCableLength;
    (function (SatCableLength) {
        SatCableLength[SatCableLength["Short"] = 0] = "Short";
        SatCableLength[SatCableLength["Long"] = 1] = "Long";
    })(SatCableLength = exports.SatCableLength || (exports.SatCableLength = {}));
    var StandbyFunctionality;
    (function (StandbyFunctionality) {
        StandbyFunctionality["None"] = "None";
        StandbyFunctionality["QuickStart"] = "QuickStart";
        StandbyFunctionality["WakeOnLan"] = "WakeOnLan";
    })(StandbyFunctionality = exports.StandbyFunctionality || (exports.StandbyFunctionality = {}));
    var Settings = (function () {
        function Settings() {
        }
        Settings_1 = Settings;
        Settings.getObject = function () {
            return public_2.ServiceClientZac.getSettings(public_2.ServiceClientContextZac.instance).object;
        };
        Object.defineProperty(Settings, "PREFERRED_STREAM_QUALITY_UHD", {
            get: function () {
                return Settings_1.getObject().PREFERRED_STREAM_QUALITY_UHD;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Settings, "PREFERRED_STREAM_QUALITY_HD", {
            get: function () {
                return Settings_1.getObject().PREFERRED_STREAM_QUALITY_HD;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Settings, "PREFERRED_STREAM_QUALITY_SD", {
            get: function () {
                return Settings_1.getObject().PREFERRED_STREAM_QUALITY_SD;
            },
            enumerable: false,
            configurable: true
        });
        Settings.setCustomSettings = function (settingsObject) {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_DMS_FRIENDLY_NAME, settingsObject);
        };
        Settings.getCustomSettings = function () {
            return public_2.ServiceClientZac.getKeyValue(Settings_1.getObject().KEY_DMS_FRIENDLY_NAME);
        };
        Settings.setStandbyFunctionality = function (standbyFunctionality) {
            var values = [];
            if (standbyFunctionality == StandbyFunctionality.QuickStart) {
                values.push(Settings_1.getObject().STANDBY_FUNCTIONALITY_QUICK_START);
            }
            if (standbyFunctionality == StandbyFunctionality.WakeOnLan) {
                values.push(Settings_1.getObject().STANDBY_FUNCTIONALITY_WOL);
            }
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_STANDBY_FUNCTIONALITY, values);
        };
        Settings.getStandbyIdleTimeSeconds = function () {
            return public_2.ServiceClientZac.getKeyValue(Settings_1.getObject().KEY_STANDBY_IDLE_TIME);
        };
        Settings.restoreAutoStandbyTimer = function () {
            return applicationclient_userstorage_1.UserStorage.getAutoStandbyTimerSeconds()
                .then(function (seconds) {
                if (public_1.Guard.isNumber(seconds)) {
                    Settings_1.setStandbyIdleTimeSeconds(seconds)
                        .then(function () { return applicationclient_userstorage_1.UserStorage.deleteAutoStandbyTimerSeconds(); });
                }
            })
                .catch(public_1.ErrorManager.catchFunc(Settings_1, 0x01));
        };
        Settings.deactivateAutoStandbyTimer = function () {
            return Settings_1.getStandbyIdleTimeSeconds()
                .then(function (seconds) { return applicationclient_userstorage_1.UserStorage.setAutoStandbyTimerSeconds(seconds); })
                .then(function () { return Settings_1.setStandbyIdleTimeSeconds(0); })
                .catch(public_1.ErrorManager.catchFunc(Settings_1, 0x02));
        };
        Settings.setStandbyIdleTimeSeconds = function (seconds) {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_STANDBY_IDLE_TIME, seconds);
        };
        Settings.getStandbyFunctionality = function () {
            return public_2.ServiceClientZac.getKeyValues(Settings_1.getObject().KEY_STANDBY_FUNCTIONALITY)
                .then(function (values) {
                if (values.indexOf(Settings_1.getObject().STANDBY_FUNCTIONALITY_QUICK_START) >= 0) {
                    return StandbyFunctionality.QuickStart;
                }
                else if (values.indexOf(Settings_1.getObject().STANDBY_FUNCTIONALITY_WOL) >= 0) {
                    return StandbyFunctionality.WakeOnLan;
                }
                return StandbyFunctionality.None;
            });
        };
        Settings.enableDoNotTrack = function () {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_HTTP_DO_NOT_TRACK, 1);
        };
        Settings.disableDoNotTrack = function () {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_HTTP_DO_NOT_TRACK, 0);
        };
        Settings.preInit = function (timeshiftDelaySeconds) {
            if (timeshiftDelaySeconds === void 0) { timeshiftDelaySeconds = 5; }
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_TIMESHIFT_DELAY_SECONDS, timeshiftDelaySeconds)
                .then(function () {
                return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_PACO_CONTENT_BLOCKING_MODE, !public_1.Feature.has(public_1.FeatureItems.blockedcontent, public_1.FeatureRights.viewItems) ? Settings_1.getObject().PACO_BLOCKING_DISABLED_PERMANENTLY : Settings_1.getObject().PACO_BLOCKING_ENABLED);
            });
        };
        Settings.setPreferedAudioLanguage = function (ISO_639_2_LANGUAGE_STRING) {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_AUDIO_LANGUAGES, [ISO_639_2_LANGUAGE_STRING]);
        };
        Settings.setPreferredStreamQuality = function (preferedStreamQuality) {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_PREFERRED_STREAM_QUALITY, preferedStreamQuality == PreferedStreamQuality.UHD ? Settings_1.PREFERRED_STREAM_QUALITY_UHD :
                preferedStreamQuality == PreferedStreamQuality.HD ? Settings_1.PREFERRED_STREAM_QUALITY_HD :
                    Settings_1.PREFERRED_STREAM_QUALITY_SD);
        };
        Settings.getPreferredStreamQuality = function () {
            return public_2.ServiceClientZac.getKeyValue(Settings_1.getObject().KEY_PREFERRED_STREAM_QUALITY)
                .then(function (preferedStramQuality) {
                return preferedStramQuality == Settings_1.PREFERRED_STREAM_QUALITY_UHD ? PreferedStreamQuality.UHD :
                    preferedStramQuality == Settings_1.PREFERRED_STREAM_QUALITY_HD ? PreferedStreamQuality.HD : PreferedStreamQuality.SD;
            });
        };
        Settings.enableSubtitleWithLanguage = function (ISO_639_2_LANGUAGE_STRING) {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_SUBTITLE_DEFAULT_ENABLED, 1)
                .then(function () { public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_SUBTITLE_TYPE, Settings_1.getObject().SUBTITLINGTYPE_HEARINGIMPAIRED); })
                .then(function () { public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_SUBTITLE_LANGUAGES, [ISO_639_2_LANGUAGE_STRING]); });
        };
        Settings.disableSubtitle = function () {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_SUBTITLE_DEFAULT_ENABLED, 0);
        };
        Settings.setAudioDescriptionOn = function () {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_AUDIO_TYPE, [
                Settings_1.getObject().AUDIO_TYPE_VISUAL_COMMENTARY,
                Settings_1.getObject().AUDIO_TYPE_VISUAL_IMPAIRED_SPOKEN_SUBT,
                Settings_1.getObject().AUDIO_TYPE_NORMAL,
                Settings_1.getObject().AUDIO_TYPE_CLEAR
            ]);
        };
        Settings.setAudioDescriptionOff = function () {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_AUDIO_TYPE, [
                Settings_1.getObject().AUDIO_TYPE_NORMAL,
                Settings_1.getObject().AUDIO_TYPE_CLEAR,
                Settings_1.getObject().AUDIO_TYPE_HEARING_IMPAIRED,
                Settings_1.getObject().AUDIO_TYPE_VISUAL_COMMENTARY
            ]);
        };
        Settings.enableMultichannel = function () {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_AUDIO_MULTICHANNEL, 1);
        };
        Settings.disableMultichannel = function () {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_AUDIO_MULTICHANNEL, 0);
        };
        Settings.isHdcpForAllChannelsEnabled = function () {
            return public_2.ServiceClientZac.getKeyValue(Settings_1.getObject().KEY_HDCP_WHEN_OPTIONAL);
        };
        Settings.enableHdcpForAllChannels = function () {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_HDCP_WHEN_OPTIONAL, 1);
        };
        Settings.getHdmiCecSettings = function () {
            var hdmiCecSettings = {};
            return bluebird.all([
                Settings_1.isHdmiCecEnabled().reflect(),
                Settings_1.isHdmiCecVolumeControlEnabled().reflect()
            ])
                .then(function (_a) {
                var powerOnOffEnabled = _a[0], volumeControlEnabled = _a[1];
                if (powerOnOffEnabled.isFulfilled()) {
                    hdmiCecSettings.powerOnOffEnabled = powerOnOffEnabled.value();
                }
                if (volumeControlEnabled.isFulfilled()) {
                    hdmiCecSettings.volumeControlEnabled = volumeControlEnabled.value();
                }
                return hdmiCecSettings;
            });
        };
        Settings.isHdmiCecEnabled = function () {
            return Settings_1.getBooleanValue(Settings_1.getObject().KEY_HDMI_CEC_MODE, Settings_1.getObject().HDMI_CEC_MODE_ENABLED, Settings_1.getObject().HDMI_CEC_MODE_DISABLED);
        };
        Settings.isHdmiCecVolumeControlEnabled = function () {
            return Settings_1.getBooleanValue(Settings_1.getObject().KEY_HDMI_CEC_AUDIO_CONTROL_MODE, Settings_1.getObject().HDMI_CEC_AUDIO_CONTROL_TV, Settings_1.getObject().HDMI_CEC_AUDIO_CONTROL_OFF);
        };
        Settings.setHdmiCecMode = function (enabled) {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_HDMI_CEC_MODE, enabled ? Settings_1.getObject().HDMI_CEC_MODE_ENABLED : Settings_1.getObject().HDMI_CEC_MODE_DISABLED);
        };
        Settings.setHdmiCecVolumeControlMode = function (enabled) {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_HDMI_CEC_AUDIO_CONTROL_MODE, enabled ? Settings_1.getObject().HDMI_CEC_AUDIO_CONTROL_TV : Settings_1.getObject().HDMI_CEC_AUDIO_CONTROL_OFF);
        };
        Settings.getBooleanValue = function (key, stringValueTrue, stringValueFalse) {
            return public_2.ServiceClientZac.getKeyValue(key)
                .then(function (keyValue) {
                if (keyValue == stringValueFalse) {
                    return false;
                }
                else if (keyValue == stringValueTrue) {
                    return true;
                }
                throw new Error("Unexpected value " + keyValue + " for key " + key);
            });
        };
        Settings.disableHdcpForAllChannels = function () {
            return public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_HDCP_WHEN_OPTIONAL, 0);
        };
        Settings.useAudioMultichannel = function () {
            return public_2.ServiceClientZac.getKeyValue(Settings_1.getObject().KEY_AUDIO_MULTICHANNEL);
        };
        Settings.useAudioDescription = function () {
            return Settings_1.getAudioType(Settings_1.getObject().AUDIO_TYPE_NORMAL)
                .then(function (audioTypes) { return audioTypes[0] == Settings_1.getObject().AUDIO_TYPE_VISUAL_COMMENTARY; });
        };
        Settings.enableAudioForUnpreferredLanguage = function () {
            return public_2.ServiceClientZac.getKeyValue(Settings_1.getObject().KEY_AUDIO_ACCEPT_OTHER);
        };
        Settings.enableSubtitles = function () {
            return public_2.ServiceClientZac.getKeyValue(Settings_1.getObject().KEY_SUBTITLE_DEFAULT_ENABLED);
        };
        Settings.enableSubtitleForUnpreferredLanguage = function () {
            return public_2.ServiceClientZac.getKeyValue(Settings_1.getObject().KEY_SUBTITLE_ACCEPT_OTHER);
        };
        Settings.getAudioLanguage = function (defaultLanguage) {
            return Settings_1.getLanguage(Settings_1.getObject(), Settings_1.getObject().KEY_AUDIO_LANGUAGES, defaultLanguage);
        };
        Settings.getSubtitleLanguage = function (defaultLanguage) {
            return Settings_1.getLanguage(Settings_1.getObject(), Settings_1.getObject().KEY_SUBTITLE_LANGUAGES, defaultLanguage);
        };
        Settings.setSoftwareUpgradeFlag = function () {
            return public_2.ServiceClientZac.setKeyValue("pretzel.swupgrade.flag", "1");
        };
        Settings.resetSoftwareUpgradeFlag = function () {
            return public_2.ServiceClientZac.setKeyValue("pretzel.swupgrade.flag", "0");
        };
        Settings.getSoftwareUpgradeFlag = function () {
            return public_2.ServiceClientZac.getKeyValue("pretzel.swupgrade.flag");
        };
        Settings.setDRAFlag = function () {
            var settingChangedEventTimeoutMs = 3000;
            return new bluebird(function (resolve, reject) {
                var errorText = "setDRAFlag failed because there was no onSettingChanged event for key " + Settings_1.getObject().KEY_REBOOT_REASON + " within " + settingChangedEventTimeoutMs + " milliseconds.";
                var timeoutHandle = setTimeout(function () { reject(new Error(errorText)); }, settingChangedEventTimeoutMs);
                public_2.ServiceClientZac.getSettings(public_2.ServiceClientContextZac.instance).events.onSettingChanged(function (settingChangedEvent) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("onSettingChanged " + settingChangedEvent.key, Settings_1.TAG)); });
                    if (settingChangedEvent.key == Settings_1.getObject().KEY_REBOOT_REASON_EXECSTATUS) {
                        clearTimeout(timeoutHandle);
                        resolve();
                    }
                });
                public_2.ServiceClientZac.setKeyValue(Settings_1.getObject().KEY_REBOOT_REASON, "1");
            });
        };
        Settings.getAudioType = function (defaultAudioType) {
            return public_2.ServiceClientZac.getKeyValues(Settings_1.getObject().KEY_AUDIO_TYPE, [defaultAudioType]);
        };
        Settings.getLanguage = function (settings, key, defaultLanguage) {
            return public_2.ServiceClientZac.getKeyValues(key, [defaultLanguage])
                .then(function (languages) { return languages === null || languages === void 0 ? void 0 : languages[0]; });
        };
        var Settings_1;
        Settings.classID = 0x759;
        __decorate([
            public_1.log2(function () { return ({ name: Settings_1.TAG }); })
        ], Settings, "setStandbyIdleTimeSeconds", null);
        __decorate([
            public_1.log2(function () { return ({ name: Settings_1.TAG }); })
        ], Settings, "isHdcpForAllChannelsEnabled", null);
        __decorate([
            public_1.log2(function () { return ({ name: Settings_1.TAG }); })
        ], Settings, "enableHdcpForAllChannels", null);
        __decorate([
            public_1.log2(function () { return ({ name: Settings_1.TAG }); })
        ], Settings, "getHdmiCecSettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: Settings_1.TAG }); })
        ], Settings, "isHdmiCecEnabled", null);
        __decorate([
            public_1.log2(function () { return ({ name: Settings_1.TAG }); })
        ], Settings, "isHdmiCecVolumeControlEnabled", null);
        __decorate([
            public_1.log2(function () { return ({ name: Settings_1.TAG }); })
        ], Settings, "setHdmiCecMode", null);
        __decorate([
            public_1.log2(function () { return ({ name: Settings_1.TAG }); })
        ], Settings, "setHdmiCecVolumeControlMode", null);
        __decorate([
            public_1.log2(function () { return ({ name: Settings_1.TAG }); })
        ], Settings, "setDRAFlag", null);
        Settings = Settings_1 = __decorate([
            public_1.logTag()
        ], Settings);
        return Settings;
    }());
    exports.Settings = Settings;
});
//# sourceMappingURL=applicationclient.settings.js.map