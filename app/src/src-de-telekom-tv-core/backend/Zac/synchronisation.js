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
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../Zosa/ServiceClientAuthenticationZosa", "./ServiceClientContextZac", "./ServiceClientZac"], function (require, exports, bluebird, public_1, ServiceClientAuthenticationZosa_1, ServiceClientContextZac_1, ServiceClientZac_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Synchronization = void 0;
    var Synchronization = (function () {
        function Synchronization() {
        }
        Synchronization.synchronizeKey = function (type, key) {
            var syncronizedSettingKeys = Synchronization.getSettingsReferences()
                .filter(function (deviceSetting) { return deviceSetting.type == type; })
                .map(function (zacSetting) { return zacSetting.key; });
            if (syncronizedSettingKeys.indexOf(key) >= 0) {
                setTimeout(function () { return Synchronization.backupDeviceSettings().catch(public_1.ErrorManager.catchFunc(Synchronization, 0x01)); }, 1000);
            }
        };
        Synchronization.getSettingsReferences = function () {
            if (!this.deviceSetings) {
                var zacSettings = ServiceClientZac_1.ServiceClientZac.getSettings(ServiceClientContextZac_1.ServiceClientContextZac.instance).object;
                this.deviceSetings = [];
                Synchronization.addZacSetting(zacSettings.KEY_AUDIO_MULTICHANNEL, "boolean");
                Synchronization.addZacSetting(zacSettings.KEY_AUDIO_TYPE, "string_array");
                Synchronization.addZacSetting(zacSettings.KEY_AUDIO_LANGUAGES, "string_array");
                Synchronization.addZacSetting(zacSettings.KEY_SUBTITLE_DEFAULT_ENABLED, "boolean");
                Synchronization.addZacSetting(zacSettings.KEY_SUBTITLE_TYPE, "string");
                Synchronization.addZacSetting(zacSettings.KEY_SUBTITLE_LANGUAGES, "string_array");
                Synchronization.addZacSetting(zacSettings.KEY_PREFERRED_STREAM_QUALITY, "string");
                Synchronization.addZacSetting(zacSettings.KEY_STANDBY_FUNCTIONALITY, "string_array");
                Synchronization.addUserStorageSetting(public_1.Configuration.instance.settings.userStoreKeyPwrMgmtSelectionIsDefault, "false");
                Synchronization.addZacSetting(zacSettings.KEY_STANDBY_IDLE_TIME, "number");
                Synchronization.addZacSetting(zacSettings.KEY_HDMI_CEC_MODE, "string");
                Synchronization.addZacSetting(zacSettings.KEY_HDMI_CEC_AUDIO_CONTROL_MODE, "string");
                Synchronization.addUserStorageSetting(public_1.Configuration.instance.settings.userStoreKeyIsCustomScreenformat, JSON.stringify({}));
                Synchronization.addUserStorageSetting("appCore.colorKeyFunction_yellow");
                Synchronization.addUserStorageSetting("appCore.colorKeyFunction_green");
                Synchronization.addUserStorageSetting("appCore.colorKeyFunction_blue");
                if (public_1.Feature.has(public_1.FeatureItems.bluetooth, public_1.FeatureRights.viewItems)) {
                    Synchronization.addOtherDeviceSetting("rcs_flag", "boolean");
                }
                Synchronization.addUserStorageSetting(ServiceClientZac_1.ServiceClientZac.stbFirstBootTimeKey);
                Synchronization.addUserStorageSetting(ServiceClientZac_1.ServiceClientZac.ACTIVE_CHANNEL_LIST);
                Synchronization.addUserStorageSetting(public_1.Configuration.instance.settings.userStoreKeyOnDemandAutoPlay);
                Synchronization.addUserStorageSetting(public_1.Configuration.instance.settings.userStoreKeyStartFirstTimeUsage, public_1.Configuration.instance.settings.defaultValueStartFirstTimeUsage);
                var isSatStbOnSatAccount = public_1.Feature.has(public_1.FeatureItems.satellitesubscriber, public_1.FeatureRights.viewItems) && public_1.Feature.has(public_1.FeatureItems.satellite, public_1.FeatureRights.viewItems);
                if (isSatStbOnSatAccount) {
                    Synchronization.addUserStorageSetting(public_1.Configuration.instance.settings.userStoreKeySatWizardLastRuntime);
                }
            }
            return this.deviceSetings;
        };
        Synchronization.addUserStorageSetting = function (key, defaultValue) {
            if (key && key.length > 0) {
                this.deviceSetings.push(Synchronization.getUserStorageSetting(key, defaultValue));
            }
            else {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Unable to backup user storage setting with defaultValue '" + defaultValue + "' because KEY is empty.", ServiceClientZac_1.ServiceClientZac.TAG)); });
            }
        };
        Synchronization.addZacSetting = function (key, valueType) {
            if (key && key.length > 0) {
                this.deviceSetings.push(Synchronization.getZacSettingsSetting(key, valueType));
            }
            else {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Unable to backup ZAC setting '" + valueType + "' because KEY is empty.", ServiceClientZac_1.ServiceClientZac.TAG)); });
            }
        };
        Synchronization.getZacSettingsSetting = function (key, valueType) {
            return {
                type: "zacSetting",
                key: key,
                valueType: valueType
            };
        };
        Synchronization.addOtherDeviceSetting = function (key, valueType) {
            this.deviceSetings.push(Synchronization.getOtherSettingsSetting(key, valueType));
        };
        Synchronization.getOtherSettingsSetting = function (key, valueType) {
            return {
                type: "otherSetting",
                key: key,
                valueType: valueType
            };
        };
        Synchronization.getUserStorageSetting = function (key, defaultValue) {
            if (defaultValue === void 0) { defaultValue = ""; }
            return {
                type: "userStorage",
                key: key,
                defaultValue: defaultValue
            };
        };
        Synchronization.getDeviceSettingValue = function (setting) {
            switch (setting.type) {
                case "userStorage":
                    return ServiceClientZac_1.ServiceClientZac.getUserStorageValue(String(setting.key), setting.defaultValue || "");
                case "zacSetting":
                    switch (setting.valueType) {
                        case "boolean":
                            return ServiceClientZac_1.ServiceClientZac.getKeyValue(String(setting.key));
                        case "number":
                            return ServiceClientZac_1.ServiceClientZac.getKeyValue(String(setting.key));
                        case "string":
                            return ServiceClientZac_1.ServiceClientZac.getKeyValue(String(setting.key));
                        case "string_array":
                            return ServiceClientZac_1.ServiceClientZac.getKeyValues(String(setting.key));
                        default:
                            throw new Error("Unhandled setting.valueType " + setting.valueType);
                    }
                case "otherSetting":
                    switch (setting.key) {
                        case "rcs_flag":
                            return ServiceClientZac_1.ServiceClientZac.getRcsFlag();
                        default:
                            throw new Error("getDeviceSettingValue: Unhandled OtherSettingsKey setting.key " + setting.key);
                    }
                default:
                    throw new Error("Unhandled setting.type " + setting.type);
            }
        };
        Synchronization.setDeviceSettingValue = function (setting) {
            switch (setting.type) {
                case "userStorage":
                    return ServiceClientZac_1.ServiceClientZac.writeItem(String(setting.key), String(setting.value));
                case "zacSetting":
                    switch (setting.valueType) {
                        case "boolean":
                            return ServiceClientZac_1.ServiceClientZac.setKeyValue(String(setting.key), Boolean(setting.value));
                        case "number":
                            return ServiceClientZac_1.ServiceClientZac.setKeyValue(String(setting.key), Number(setting.value));
                        case "string":
                            return ServiceClientZac_1.ServiceClientZac.setKeyValue(String(setting.key), String(setting.value));
                        case "string_array":
                            return ServiceClientZac_1.ServiceClientZac.setKeyValue(String(setting.key), setting.value);
                        default:
                            throw new Error("Unhandled setting.valueType " + setting.valueType);
                    }
                case "otherSetting":
                    switch (setting.key) {
                        case "rcs_flag":
                            return ServiceClientZac_1.ServiceClientZac.setRcsFlag(setting.value);
                        default:
                            throw new Error("setDeviceSettingValue: Unhandled OtherSettingsKey setting.key " + setting.key);
                    }
                default:
                    throw new Error("Unhandled setting.type " + setting.type);
            }
        };
        Synchronization.restoreDeviceSettings = function () {
            var systemInformation = ServiceClientZac_1.ServiceClientZac.getSystemInformation();
            return ServiceClientZac_1.ServiceClientZac.getUserStorageValue(Synchronization.deviceSettingsRestoredTimestampKey, "")
                .then(function (value) {
                if (value && value.length > 0) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Skip restore device settings because it was already restored on this device at " + Synchronization.dateStringFromNumber(Number(value)), Synchronization.TAG)); });
                    return bluebird.resolve(false);
                }
                return Synchronization.getDeviceSettingsBackup()
                    .then(function (deviceSettings) {
                    if (!deviceSettings) {
                        return Synchronization.confirmDeviceSettingsRestoredLocal().then(function () { return false; });
                    }
                    if (deviceSettings.deviceGuid != systemInformation.GUID) {
                        throw new Error("Unable to restore device settings because GUID does not match. This GUID: " + systemInformation.GUID + ", Settings GUID: " + deviceSettings.deviceGuid);
                    }
                    if (deviceSettings.restoreTime) {
                        var restoreTime_1 = deviceSettings.restoreTime;
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Skip restore device settings because it was already restored on this device at " + Synchronization.dateStringFromNumber(restoreTime_1), ServiceClientZac_1.ServiceClientZac.TAG)); });
                        return Synchronization.confirmDeviceSettingsRestoredLocal(restoreTime_1).then(function () { return false; });
                    }
                    return Synchronization.restoreDeviceSetting(deviceSettings.settings, 0)
                        .then(function () { return Synchronization.validateCustomVideoFormat()
                        .then(function () { return Synchronization.confirmDeviceSettingsRestored(deviceSettings).then(function () { return true; }); }); })
                        .catch(function (error) {
                        public_1.Logger.error(function (log) { return log(public_1.LogMsg("Restore DeviceSettings Error: " + error, ServiceClientZac_1.ServiceClientZac.TAG)); });
                        return Synchronization.confirmDeviceSettingsRestored(deviceSettings).then(function () { return false; });
                    });
                });
            });
        };
        Synchronization.confirmDeviceSettingsRestored = function (deviceSettings) {
            deviceSettings.restoreTime = new Date().valueOf();
            return Synchronization.confirmDeviceSettingsRestoredLocal(deviceSettings.restoreTime)
                .then(function () { return ServiceClientAuthenticationZosa_1.ServiceClientAuthenticationZosa.setSTBDeviceSettings(JSON.stringify(deviceSettings)); });
        };
        Synchronization.confirmDeviceSettingsRestoredLocal = function (timestamp) {
            if (timestamp === void 0) { timestamp = new Date().valueOf(); }
            return ServiceClientZac_1.ServiceClientZac.writeItem(Synchronization.deviceSettingsRestoredTimestampKey, String(timestamp));
        };
        Synchronization.clearDeviceSettingsRestoreDateBackend = function () {
            return Synchronization.getDeviceSettingsBackup()
                .then(function (deviceSettintgs) {
                if (deviceSettintgs) {
                    deviceSettintgs.restoreTime = undefined;
                    return ServiceClientAuthenticationZosa_1.ServiceClientAuthenticationZosa.setSTBDeviceSettings(JSON.stringify(deviceSettintgs))
                        .then(function () { return true; });
                }
                return false;
            });
        };
        Synchronization.clearDeviceSettingsRestoreDateLocal = function () {
            return ServiceClientZac_1.ServiceClientZac.writeItem(Synchronization.deviceSettingsRestoredTimestampKey, "");
        };
        Synchronization.getDeviceSettingsBackup = function () {
            return ServiceClientAuthenticationZosa_1.ServiceClientAuthenticationZosa.getSTBDeviceSettings()
                .then(function (jsonDeviceSettings) {
                if (!jsonDeviceSettings || jsonDeviceSettings.length < 3) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("STBDeviceSettings have not been backed up yet.", Synchronization.TAG)); });
                    return undefined;
                }
                return JSON.parse(jsonDeviceSettings);
            });
        };
        Synchronization.getDeviceSettingsBackupLocalTimestamp = function () {
            return ServiceClientZac_1.ServiceClientZac.getUserStorageValue(Synchronization.deviceSettingsLocalBackupTimestampKey, "")
                .then(function (value) { return value && value.length > 0 ? bluebird.resolve(Number(value)) : bluebird.resolve(undefined); });
        };
        Synchronization.deviceSettingsBackupIsObsolete = function () {
            return bluebird.all([
                Synchronization.getDeviceSettingsBackup(),
                Synchronization.getDeviceSettingsBackupLocalTimestamp()
            ])
                .then(function (_a) {
                var serverBackup = _a[0], localTimestamp = _a[1];
                return (serverBackup === null || serverBackup === void 0 ? void 0 : serverBackup.backupTime) != localTimestamp;
            });
        };
        Synchronization.clearDeviceSettingsBackup = function () {
            return ServiceClientAuthenticationZosa_1.ServiceClientAuthenticationZosa.setSTBDeviceSettings("");
        };
        Synchronization.backupDeviceSettings = function () {
            return Synchronization.getDeviceSettingsSnapshot()
                .then(function (deviceSettingsSnapshot) {
                var maxStringLength = 10240;
                var stringValue = JSON.stringify(deviceSettingsSnapshot);
                if (stringValue.length > maxStringLength) {
                    throw new Error("Unable to backup device settings because serialized data (" + stringValue.length + " bytes) exceeds the maximum length of " + maxStringLength + " bytes.");
                }
                return ServiceClientAuthenticationZosa_1.ServiceClientAuthenticationZosa.setSTBDeviceSettings(stringValue)
                    .then(function () { return ServiceClientZac_1.ServiceClientZac.writeItem(Synchronization.deviceSettingsLocalBackupTimestampKey, String(deviceSettingsSnapshot.backupTime)); });
            });
        };
        Synchronization.getDeviceSettingsSnapshot = function () {
            return Synchronization.backupDeviceSetting(Synchronization.getSettingsReferences(), [], 0)
                .then(function (backedUpSettings) {
                var systemInformation = ServiceClientZac_1.ServiceClientZac.getSystemInformation();
                return {
                    backupTime: new Date().valueOf(),
                    deviceGuid: systemInformation.GUID,
                    deviceType: systemInformation.HwModel,
                    settings: backedUpSettings
                };
            });
        };
        Synchronization.validateCustomVideoFormat = function () {
            return ServiceClientZac_1.ServiceClientZac.isDisplayConnected()
                .then(function (displayIsConnected) {
                if (!displayIsConnected)
                    return;
                return ServiceClientZac_1.ServiceClientZac.getCustomScreenFormat()
                    .then(function (customScreenFormatInfo) {
                    if (!customScreenFormatInfo.currentCustomFormat)
                        return;
                    var customFormat = customScreenFormatInfo.currentCustomFormat;
                    return ServiceClientZac_1.ServiceClientZac.getDefaultZacVideoFormat()
                        .then(function (defaultZacVideoFormat) {
                        if (defaultZacVideoFormat == customScreenFormatInfo.currentCustomFormat)
                            return;
                        return ServiceClientZac_1.ServiceClientZac.getZacVideoFormatFromString(customFormat)
                            .then(function (zacVideoFormat) {
                            if (zacVideoFormat) {
                                ServiceClientZac_1.ServiceClientZac.setDefaultVideoFormat(zacVideoFormat.uiVideoFormat, false);
                            }
                        });
                    });
                });
            })
                .catch(function (error) { return public_1.Logger.error(function (log) { return log(public_1.LogMsg("Validate Custom VideoFormat Error: " + error, Synchronization.TAG)); }); });
        };
        Synchronization.backupDeviceSetting = function (allSettings, backedUpSettings, index) {
            var deviceSetting = allSettings[index];
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("backupDeviceSetting " + public_1.StringTools.dataStringify(deviceSetting), Synchronization.TAG)); });
            return Synchronization.getDeviceSettingValue(deviceSetting)
                .then(function (result) {
                backedUpSettings.push(__assign(__assign({}, deviceSetting), { value: result }));
                return index < allSettings.length - 1 ? Synchronization.backupDeviceSetting(allSettings, backedUpSettings, index + 1) : bluebird.resolve(backedUpSettings);
            })
                .catch(function (error) {
                public_1.Logger.error(function (log) { return log(public_1.LogMsg("Error backup setting " + deviceSetting.type + " '" + deviceSetting.key + "': '" + public_1.StringTools.dataStringify(error) + "'", Synchronization.TAG)); });
                return index < allSettings.length - 1 ? Synchronization.backupDeviceSetting(allSettings, backedUpSettings, index + 1) : bluebird.resolve(backedUpSettings);
            });
        };
        Synchronization.restoreDeviceSetting = function (allSettings, index) {
            var deviceSetting = allSettings[index];
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("restoreDeviceSetting " + public_1.StringTools.dataStringify(deviceSetting), Synchronization.TAG)); });
            return Synchronization.getDeviceSettingValue(deviceSetting)
                .then(function (currentValue) {
                if (Synchronization.valueMatch(currentValue, deviceSetting.value)) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg(deviceSetting.type + "-Setting '" + deviceSetting.key + "': value match: '" + deviceSetting.value + "'", Synchronization.TAG)); });
                    return;
                }
                else {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg(deviceSetting.type + "-Setting '" + deviceSetting.key + "': value mismatch, current: '" + currentValue + "', backup: '" + deviceSetting.value + "'", Synchronization.TAG)); });
                    return Synchronization.setDeviceSettingValue(deviceSetting)
                        .then(function () { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg(deviceSetting.type + "-Setting '" + deviceSetting.key + "': successfully restored to value '" + deviceSetting.value + "'", Synchronization.TAG)); }); })
                        .catch(function (error) { return public_1.Logger.error(function (log) { return log(public_1.LogMsg(deviceSetting.type + "-Setting '" + deviceSetting.key + "':  error restoring to value '" + deviceSetting.value + "': '" + error + "'", Synchronization.TAG)); }); });
                }
            })
                .catch(function (error) { return public_1.Logger.error(function (log) { return log(public_1.LogMsg(deviceSetting.type + "-Setting '" + deviceSetting.key + "': error getting current value: '" + error + "'", Synchronization.TAG)); }); })
                .then(function () { return index < allSettings.length - 1 ? Synchronization.restoreDeviceSetting(allSettings, index + 1) : bluebird.resolve(); });
        };
        Synchronization.valueMatch = function (currentValue, backupValue) {
            if (Array.isArray(currentValue) && Array.isArray(backupValue)) {
                if (currentValue.length != backupValue.length) {
                    return false;
                }
                var matchesArray = currentValue.map(function (currentArrayValue, index) { return backupValue[index] === currentArrayValue; });
                return !matchesArray.some(function (match) { return match == false; });
            }
            return currentValue === backupValue;
        };
        Synchronization.dateStringFromNumber = function (millisecondsSince1970) {
            var dateString = "";
            try {
                dateString = new Date(Number(millisecondsSince1970)).toUTCString();
            }
            catch (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Invalid date value " + millisecondsSince1970 + ": " + error, Synchronization.TAG)); });
            }
            return dateString;
        };
        Synchronization.deviceSettingsRestoredTimestampKey = "deviceSettingsRestoredTimestamp";
        Synchronization.deviceSettingsLocalBackupTimestampKey = "deviceSettingsBackupTimestamp";
        Synchronization.classID = 0x766;
        __decorate([
            public_1.log2(function () { return ({ name: Synchronization.TAG }); })
        ], Synchronization, "getDeviceSettingValue", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.ServiceClientZac.TAG }); })
        ], Synchronization, "restoreDeviceSettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.ServiceClientZac.TAG }); })
        ], Synchronization, "confirmDeviceSettingsRestored", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.ServiceClientZac.TAG }); })
        ], Synchronization, "confirmDeviceSettingsRestoredLocal", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.ServiceClientZac.TAG }); })
        ], Synchronization, "clearDeviceSettingsRestoreDateBackend", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.ServiceClientZac.TAG }); })
        ], Synchronization, "clearDeviceSettingsRestoreDateLocal", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.ServiceClientZac.TAG }); })
        ], Synchronization, "getDeviceSettingsBackup", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.ServiceClientZac.TAG }); })
        ], Synchronization, "getDeviceSettingsBackupLocalTimestamp", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.ServiceClientZac.TAG }); })
        ], Synchronization, "deviceSettingsBackupIsObsolete", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.ServiceClientZac.TAG }); })
        ], Synchronization, "clearDeviceSettingsBackup", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.ServiceClientZac.TAG }); })
        ], Synchronization, "backupDeviceSettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.ServiceClientZac.TAG }); })
        ], Synchronization, "getDeviceSettingsSnapshot", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.ServiceClientZac.TAG }); })
        ], Synchronization, "validateCustomVideoFormat", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.ServiceClientZac.TAG }); })
        ], Synchronization, "valueMatch", null);
        return Synchronization;
    }());
    exports.Synchronization = Synchronization;
});
//# sourceMappingURL=synchronisation.js.map