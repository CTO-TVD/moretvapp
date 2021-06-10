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
define(["require", "exports", "bluebird", "../backend/public", "underscore", "src/src-de-telekom/public", "../public", "./applicationclient.recordingmanagement", "./applicationclient.storagemanagement", "./applicationclient.contentmanagement"], function (require, exports, bluebird, backend, _, public_1, public_2, applicationclient_recordingmanagement_1, applicationclient_storagemanagement_1, applicationclient_contentmanagement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DeviceManagement = exports.DeviceModel = exports.BlockBootReason = exports.DeviceEnhanceOption = exports.GetMasterStbStorageError = exports.MasterStbStorageErrorReason = void 0;
    var MasterStbStorageErrorReason;
    (function (MasterStbStorageErrorReason) {
        MasterStbStorageErrorReason["MasterNotSet"] = "MasterNotSet";
        MasterStbStorageErrorReason["MasterOffline"] = "MasterOffline";
    })(MasterStbStorageErrorReason = exports.MasterStbStorageErrorReason || (exports.MasterStbStorageErrorReason = {}));
    var GetMasterStbStorageError = (function (_super) {
        __extends(GetMasterStbStorageError, _super);
        function GetMasterStbStorageError(message, reason) {
            var _this = _super.call(this, message || "") || this;
            _this.errorID = 0x60C;
            _this.reason = reason;
            return _this;
        }
        return GetMasterStbStorageError;
    }(public_1.BaseError));
    exports.GetMasterStbStorageError = GetMasterStbStorageError;
    var DeviceEnhanceOption;
    (function (DeviceEnhanceOption) {
        DeviceEnhanceOption["None"] = "None";
        DeviceEnhanceOption["Migration"] = "Migration";
        DeviceEnhanceOption["EnforceMaster"] = "EnforceMaster";
        DeviceEnhanceOption["OptionalMaster"] = "OptionalMaster";
    })(DeviceEnhanceOption = exports.DeviceEnhanceOption || (exports.DeviceEnhanceOption = {}));
    var DeviceManagementError = (function (_super) {
        __extends(DeviceManagementError, _super);
        function DeviceManagementError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x619;
            return _this;
        }
        return DeviceManagementError;
    }(public_1.BaseError));
    var WakeupDeviceError = (function (_super) {
        __extends(WakeupDeviceError, _super);
        function WakeupDeviceError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x626;
            return _this;
        }
        return WakeupDeviceError;
    }(public_1.BaseError));
    var HddStateError = (function (_super) {
        __extends(HddStateError, _super);
        function HddStateError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x633;
            return _this;
        }
        return HddStateError;
    }(public_1.BaseError));
    var BlockBootReason;
    (function (BlockBootReason) {
        BlockBootReason["SubscriberInfoError"] = "SubscriberInfoError";
        BlockBootReason["SatDevicesWhitelistEmpty"] = "SatDevicesWhitelistEmpty";
        BlockBootReason["DeviceTypeNotWhitelisted"] = "DeviceTypeNotWhitelisted";
        BlockBootReason["ForbiddenDeviceType"] = "ForbiddenDeviceType";
    })(BlockBootReason = exports.BlockBootReason || (exports.BlockBootReason = {}));
    var DeviceModel;
    (function (DeviceModel) {
        DeviceModel["MRG5"] = "MRG5";
        DeviceModel["MR400Z"] = "MR400Z";
        DeviceModel["MR200Z"] = "MR200Z";
        DeviceModel["MR401A"] = "MR401A";
        DeviceModel["MR401B"] = "MR401B";
        DeviceModel["MR201"] = "MR201";
        DeviceModel["MR601SAT"] = "MR601SAT";
        DeviceModel["MRENTRY"] = "MRENTRY";
        DeviceModel["MR400Z_DEV"] = "MR400Z_DEV";
        DeviceModel["MR200Z_DEV"] = "MR200Z_DEV";
        DeviceModel["MR401A_DEV"] = "MR401A_DEV";
        DeviceModel["MR401B_DEV"] = "MR401B_DEV";
        DeviceModel["MR201_DEV"] = "MR201_DEV";
        DeviceModel["MR601SAT_DEV"] = "MR601SAT_DEV";
        DeviceModel["MRENTRY_DEV"] = "MRENTRY_DEV";
        DeviceModel["MR401A_ACN"] = "MR401A_ACN";
        DeviceModel["MR401B_ACN"] = "MR401B_ACN";
        DeviceModel["MR201_ACN"] = "MR201_ACN";
        DeviceModel["MR601SAT_ACN"] = "MR601SAT_ACN";
        DeviceModel["MR401A_ACN_DEV"] = "MR401A_ACN_DEV";
        DeviceModel["MR401B_ACN_DEV"] = "MR401B_ACN_DEV";
        DeviceModel["MR201_ACN_DEV"] = "MR201_ACN_DEV";
        DeviceModel["MR601SAT_ACN_DEV"] = "MR601SAT_ACN_DEV";
    })(DeviceModel = exports.DeviceModel || (exports.DeviceModel = {}));
    var DeviceManagement = (function () {
        function DeviceManagement() {
        }
        DeviceManagement_1 = DeviceManagement;
        DeviceManagement.getNighlyRebootParameters = function () {
            return public_2.ServiceClientAuthenticationZosa.getConfigurableSettingsTypedValues(public_2.DomainType.device, [
                public_2.ConfigurableUserSettingsKey.STBNightlyReboot,
                public_2.ConfigurableUserSettingsKey.STBNightlyRebootStartTime,
                public_2.ConfigurableUserSettingsKey.STBNightlyRebootEndTime,
                public_2.ConfigurableUserSettingsKey.STBNightlyRebootAfterUpTimeInMinutes,
                public_2.ConfigurableUserSettingsKey.STBNightlyRebootRetryDurationInMinutes
            ])
                .then(function (typedValues) { return ({
                Enabled: typedValues[public_2.ConfigurableUserSettingsKey.STBNightlyReboot].toLowerCase() == "on",
                StartTime: typedValues[public_2.ConfigurableUserSettingsKey.STBNightlyRebootStartTime],
                EndTime: typedValues[public_2.ConfigurableUserSettingsKey.STBNightlyRebootEndTime],
                MinimumUptimeMinutes: typedValues[public_2.ConfigurableUserSettingsKey.STBNightlyRebootAfterUpTimeInMinutes],
                RetryIntervalMinutes: typedValues[public_2.ConfigurableUserSettingsKey.STBNightlyRebootRetryDurationInMinutes]
            }); });
        };
        DeviceManagement.updateDevice = function (parameters) {
            return backend.ServiceClientAuthenticationZosa.updateDevice(backend.ServiceClientContextZosa.instance, parameters);
        };
        DeviceManagement.resetMasterStb = function (reason) {
            return backend.ServiceClientAuthenticationZosa.resetMasterStb(backend.ServiceClientContextZosa.instance)
                .then(function () { return undefined; });
        };
        DeviceManagement.getOnlineSlavesStbs = function (useCache) {
            if (useCache === void 0) { useCache = false; }
            return DeviceManagement_1.getStbDevicesInfo(useCache)
                .then(function (devicesInfo) { return devicesInfo.allStbs.filter(function (stb) { return stb.isOnline && stb.zosaId != devicesInfo.currentStb.zosaId; }); });
        };
        DeviceManagement.isSatStbOnSatAccount = function () {
            return public_1.Feature.has(public_1.FeatureItems.satellitesubscriber, public_1.FeatureRights.viewItems) &&
                public_1.Feature.has(public_1.FeatureItems.satellite, public_1.FeatureRights.viewItems);
        };
        DeviceManagement.setMasterStb = function (zosaId, removeOtherStbDevices) {
            if (removeOtherStbDevices === void 0) { removeOtherStbDevices = false; }
            return (removeOtherStbDevices ? public_2.ApplicationClient.deviceManagement.removeOtherStbDevices(false).then(function () { }) : bluebird.resolve())
                .catch(public_1.ErrorManager.catchFunc(DeviceManagement_1, 0x01))
                .then(function () { return public_2.ApplicationClient.userStorage.resetSuppressAskToSetMaster(); })
                .catch(public_1.ErrorManager.catchFunc(DeviceManagement_1, 0x02))
                .then(function () { return backend.ServiceClientAuthenticationZosa.setMasterStb(backend.ServiceClientContextZosa.instance, { MasterSTB: zosaId }); })
                .then(function (response) { return response.data; });
        };
        DeviceManagement.getMyDeviceOngoingAndScheduledRecordings = function (scheduledRecordingsThresholdMs) {
            return !public_1.Feature.has(public_1.FeatureItems.recording, public_1.FeatureRights.viewItems)
                ? bluebird.resolve(null)
                : public_2.ApplicationClient.deviceManagement.getMyDevice()
                    .then(function (myDevice) { return !myDevice || !myDevice.isMaster ? bluebird.resolve(null) :
                    public_2.ApplicationClient.recordingManagement.getOngoingAndScheduledRecordings(myDevice.device.zosaId, scheduledRecordingsThresholdMs); });
        };
        DeviceManagement.getMyDeviceOngoingAndScheduledRecordingsCount = function (scheduledRecordingsThresholdMs) {
            return DeviceManagement_1.getMyDeviceOngoingAndScheduledRecordings(scheduledRecordingsThresholdMs)
                .then(function (recordingsResult) {
                if (recordingsResult && (recordingsResult.hasOngoingRecordings || recordingsResult.hasScheduledRecordings)) {
                    return (recordingsResult.ongoingRecordings ? recordingsResult.ongoingRecordings.length : 0) +
                        (recordingsResult.scheduledRecordings ? recordingsResult.scheduledRecordings.length : 0);
                }
                return 0;
            });
        };
        DeviceManagement.getStbDevices = function (useCache) {
            if (useCache === void 0) { useCache = false; }
            return backend.ServiceClientAuthenticationZosa.getDevices(backend.ServiceClientContextZosa.instance, { serviceProvider: null, deviceTypes: [public_2.zosaStatic.DEVICE_TYPE_STB] }, useCache)
                .then(function (response) {
                var devices = response.data.elements;
                if (devices.some(function (device) { return public_1.Guard.isDefined(device.isCurrentDevice) && device.isCurrentDevice; })) {
                    var currentDevice_1 = devices.filter(function (device) { return device.isCurrentDevice; })[0];
                    if (!currentDevice_1.isOnline) {
                        public_1.Logger.warn(function (log) { return log(public_1.LogMsg("Current STB online status has been fixed for " + currentDevice_1.zosaId, DeviceManagement_1.TAG)); });
                        currentDevice_1.isOnline = true;
                    }
                }
                if (!useCache) {
                    public_1.Logger.debug(function (log) {
                        response.data.elements.forEach(function (stb, idx) {
                            log(public_1.LogMsg(idx + " STB id: " + stb.zosaId, DeviceManagement_1.TAG));
                            log(public_1.LogMsg(idx + " -----------------------------------------------", DeviceManagement_1.TAG));
                            log(public_1.LogMsg(idx + " deviceModel: " + stb.deviceModel, DeviceManagement_1.TAG));
                            log(public_1.LogMsg(idx + " deviceType: " + stb.deviceType, DeviceManagement_1.TAG));
                            log(public_1.LogMsg(idx + " physicalId: " + stb.physicalId, DeviceManagement_1.TAG));
                            log(public_1.LogMsg(idx + " isOnline: " + stb.isOnline, DeviceManagement_1.TAG));
                            log(public_1.LogMsg(idx + " supportsWoL: " + stb.supportsWoL, DeviceManagement_1.TAG));
                            log(public_1.LogMsg(idx + " title: " + stb.title, DeviceManagement_1.TAG));
                            log(public_1.LogMsg(idx + " name: " + stb.name, DeviceManagement_1.TAG));
                            log(public_1.LogMsg(idx + " isCurrentDevice: " + stb.isCurrentDevice, DeviceManagement_1.TAG));
                            if (stb.customProps && stb.customProps.length > 0) {
                                stb.customProps.forEach(function (keyValuePair) { return log(public_1.LogMsg(keyValuePair.key + ": " + keyValuePair.value, DeviceManagement_1.TAG)); });
                            }
                        });
                    });
                }
                return devices;
            });
        };
        DeviceManagement.getMasterStbId = function (useCache) {
            if (useCache === void 0) { useCache = true; }
            return (!public_1.Feature.has(public_1.FeatureItems.recording, public_1.FeatureRights.viewItems)) ? bluebird.resolve(null) :
                backend.ServiceClientAuthenticationZosa.getMasterStb(backend.ServiceClientContextZosa.instance, useCache)
                    .then(function (response) { return response.data; })
                    .catch(function (error) {
                    if (error instanceof backend.ZosaNotFoundError) {
                        return null;
                    }
                    return bluebird.reject(error);
                });
        };
        DeviceManagement.getStbDevicesInfo = function (useCache) {
            return bluebird.all([
                DeviceManagement_1.getStbDevices(useCache),
                DeviceManagement_1.getMasterStbId(useCache).reflect()
            ])
                .then(function (_a) {
                var devices = _a[0], masterStb = _a[1];
                if (devices == null || devices.length == 0) {
                    throw new DeviceManagementError("No STB devices found.");
                }
                if (!devices.some(function (stb) { return public_1.Guard.isDefined(stb.isCurrentDevice) && stb.isCurrentDevice; })) {
                    throw new DeviceManagementError("isCurrentDevice is not set on any STB.");
                }
                var mediaReceivers = {
                    allStbs: new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); }, devices),
                    currentStb: devices.filter(function (stb) { return stb.isCurrentDevice; })[0]
                };
                if (masterStb.isFulfilled()) {
                    var masterStbZosaId_1 = masterStb.value();
                    if (mediaReceivers.allStbs.some(function (device) { return device.zosaId == masterStbZosaId_1; })) {
                        mediaReceivers.masterStb = mediaReceivers.allStbs.filter(function (device) { return device.zosaId == masterStbZosaId_1; })[0];
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Master STB: " + ((mediaReceivers === null || mediaReceivers === void 0 ? void 0 : mediaReceivers.masterStb) ? mediaReceivers.masterStb.zosaId : "undefined"), DeviceManagement_1.TAG)); });
                    }
                    else {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("No device found with ID " + masterStbZosaId_1 + ".", DeviceManagement_1.TAG)); });
                    }
                }
                return mediaReceivers;
            });
        };
        DeviceManagement.wakeupDevice = function (physicalAddress, timeoutMs) {
            if (public_1.Guard.isUndefined(physicalAddress) || physicalAddress.length == 0) {
                return bluebird.reject(new WakeupDeviceError("wakeupDevice error: physicalAddress is UNDEFINED or EMPTY."));
            }
            if (DeviceManagement_1.deviceWakeups[physicalAddress] == null) {
                DeviceManagement_1.deviceWakeups[physicalAddress] = new bluebird(function (resolve, reject) {
                    DeviceManagement_1.wakeOnLan(physicalAddress)
                        .then(function () {
                        var timeoutHandle = setTimeout(function () {
                            eventHandlerCloseable();
                            reject(new WakeupDeviceError("WakeUpDevice timeout after " + timeoutMs + " ms."));
                        }, timeoutMs);
                        var eventHandlerCloseable = public_2.ApplicationClient.events.onDataUpdated(function (event) {
                            if (event.devices) {
                                DeviceManagement_1.getStbDevicesInfo(false)
                                    .then(function (devices) {
                                    var device = _.find(devices.allStbs, function (stb) { return stb.physicalId == physicalAddress; });
                                    if (device === null || device === void 0 ? void 0 : device.isOnline) {
                                        clearTimeout(timeoutHandle);
                                        eventHandlerCloseable();
                                        resolve();
                                    }
                                });
                            }
                            return false;
                        });
                    })
                        .catch(function (error) {
                        public_1.Logger.error(function (log) { return log(public_1.LogMsg("Failed to wakeup device " + physicalAddress + ": " + error + ".", DeviceManagement_1.TAG)); });
                        reject(new WakeupDeviceError("WakeUpDevice failed with error " + error));
                    })
                        .finally(function () { return delete DeviceManagement_1.deviceWakeups[physicalAddress]; });
                });
            }
            return DeviceManagement_1.deviceWakeups[physicalAddress];
        };
        DeviceManagement.wakeOnLan = function (physicalAddress) {
            var networks = backend.ServiceClientZac.getNetworks(backend.ServiceClientContextZac.instance);
            return public_2.ServiceClientZac.evaluateZacResponse(function () { return networks.object.WakeOnLan(physicalAddress); });
        };
        DeviceManagement.getMasterStb = function (useCache) {
            return DeviceManagement_1.getStbDevicesInfo(useCache)
                .then(function (info) { return info ? info.masterStb : null; });
        };
        DeviceManagement.getMyDevice = function () {
            return DeviceManagement_1.getStbDevicesInfo(false)
                .then(function (stbDevicesInfo) {
                var _a;
                return ({
                    device: stbDevicesInfo.currentStb,
                    isMaster: stbDevicesInfo.masterStb ? stbDevicesInfo.currentStb.zosaId == stbDevicesInfo.masterStb.zosaId : false,
                    masterExists: stbDevicesInfo.masterStb != null,
                    masterIsOnline: ((_a = stbDevicesInfo.masterStb) === null || _a === void 0 ? void 0 : _a.isOnline) == true
                });
            });
        };
        DeviceManagement.getDeviceEnhanceOption = function (useDevicesInfoCache) {
            if (useDevicesInfoCache === void 0) { useDevicesInfoCache = false; }
            var deviceEnhanceOption = {
                enhanceOption: DeviceEnhanceOption.None,
                enhanceOptionParameters: {}
            };
            return DeviceManagement_1.getStbDevicesInfo(useDevicesInfoCache)
                .catch(function (error) {
                deviceEnhanceOption.enhanceOptionParameters.deviceInfoError = error.message || JSON.stringify(error);
                public_1.ErrorManager.catch(error, DeviceManagement_1, 0x0B);
                return undefined;
            })
                .then(function (devicesInfo) {
                if (devicesInfo) {
                    deviceEnhanceOption.mediaReceiversInfo = devicesInfo;
                    return public_2.ApplicationClient.subscriberInfo.universalTarifEnabled();
                }
                return undefined;
            })
                .catch(function (error) {
                deviceEnhanceOption.enhanceOptionParameters.tarifInfoError = error.message || JSON.stringify(error);
                public_1.ErrorManager.catch(error, DeviceManagement_1, 0x0B);
                return undefined;
            })
                .then(function (universalTarifEnabled) {
                var _a, _b, _c, _d;
                if (!deviceEnhanceOption.mediaReceiversInfo) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("MediaReeceiverInfoError: " + JSON.stringify(deviceEnhanceOption.enhanceOptionParameters), DeviceManagement_1.TAG)); });
                    return;
                }
                var isSatAccount = public_1.Feature.has(public_1.FeatureItems.satellitesubscriber, public_1.FeatureRights.viewItems);
                var isSatStb = public_1.Feature.has(public_1.FeatureItems.satellite, public_1.FeatureRights.viewItems);
                var deviceIsMaster = ((_a = deviceEnhanceOption.mediaReceiversInfo.masterStb) === null || _a === void 0 ? void 0 : _a.zosaId) == ((_b = deviceEnhanceOption.mediaReceiversInfo.currentStb) === null || _b === void 0 ? void 0 : _b.zosaId);
                var masterIsSet = public_1.Guard.isDefined(deviceEnhanceOption.mediaReceiversInfo.masterStb);
                var masterIsOnline = !!((_c = deviceEnhanceOption.mediaReceiversInfo.masterStb) === null || _c === void 0 ? void 0 : _c.isOnline);
                var migrationOption = universalTarifEnabled && isSatAccount != isSatStb;
                deviceEnhanceOption.enhanceOptionParameters.universalTarifEnabled = universalTarifEnabled;
                deviceEnhanceOption.enhanceOptionParameters.deviceIsMaster = deviceIsMaster;
                deviceEnhanceOption.enhanceOptionParameters.isSatAccount = isSatAccount;
                deviceEnhanceOption.enhanceOptionParameters.isSatStb = isSatStb;
                deviceEnhanceOption.enhanceOptionParameters.currentStb = deviceEnhanceOption.mediaReceiversInfo.currentStb.name + " [" + deviceEnhanceOption.mediaReceiversInfo.currentStb.zosaId + "]";
                deviceEnhanceOption.enhanceOptionParameters.masterStb = "" + (deviceEnhanceOption.mediaReceiversInfo.masterStb ? ((_d = deviceEnhanceOption.mediaReceiversInfo) === null || _d === void 0 ? void 0 : _d.masterStb.name) + " [" + deviceEnhanceOption.mediaReceiversInfo.masterStb.zosaId + "], Online: " + deviceEnhanceOption.mediaReceiversInfo.masterStb.isOnline : "None");
                deviceEnhanceOption.enhanceOptionParameters.migrationOption = migrationOption;
                deviceEnhanceOption.enhanceOptionParameters.masterIsSet = masterIsSet;
                deviceEnhanceOption.enhanceOptionParameters.masterIsOnline = masterIsOnline;
                deviceEnhanceOption.enhanceOptionParameters.deviceCanBecomeMigrationMaster = !deviceIsMaster && migrationOption && (!masterIsSet || !masterIsOnline);
                deviceEnhanceOption.enhanceOptionParameters.deviceTypeCanBecomeMaster = !deviceIsMaster && ((!isSatAccount && !isSatStb) ||
                    (isSatAccount && isSatStb && (!masterIsSet || !masterIsOnline)));
                if (!deviceEnhanceOption.enhanceOptionParameters.deviceCanBecomeMigrationMaster &&
                    !deviceEnhanceOption.enhanceOptionParameters.deviceTypeCanBecomeMaster) {
                    return;
                }
                return applicationclient_storagemanagement_1.StorageManagement.getHddState()
                    .then(function (hddState) {
                    if (hddState.physicalDevice && !hddState.physicalDevice.isCorrupted()) {
                        deviceEnhanceOption.enhanceOptionParameters.hasHdd = true;
                        deviceEnhanceOption.enhanceOption = deviceEnhanceOption.enhanceOptionParameters.deviceCanBecomeMigrationMaster ?
                            DeviceEnhanceOption.Migration :
                            !masterIsSet || (isSatStb && isSatAccount) ? DeviceEnhanceOption.EnforceMaster : DeviceEnhanceOption.OptionalMaster;
                    }
                });
            })
                .then(function () {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg(JSON.stringify(deviceEnhanceOption.enhanceOptionParameters), DeviceManagement_1.TAG)); });
                return deviceEnhanceOption;
            })
                .catch(function (error) {
                public_1.ErrorManager.catch(error, DeviceManagement_1, 0x0B);
                return deviceEnhanceOption;
            });
        };
        DeviceManagement.getDeviceDisplayName = function (mediaReceiver) {
            return public_1.Guard.isString(mediaReceiver.name) && mediaReceiver.name.length > 0 ? mediaReceiver.name : (mediaReceiver.physicalId || "");
        };
        DeviceManagement.removeOtherStbDevices = function (useDeletionList) {
            return useDeletionList
                ? applicationclient_contentmanagement_1.ContentManagement.getSubscriberInfo()
                    .then(function (subscriberInfo) {
                    var parameters = (subscriberInfo.satHouseholdDeletionList && subscriberInfo.satHouseholdDeletionList.length > 0) ? { models: subscriberInfo.satHouseholdDeletionList } : undefined;
                    return backend.ServiceClientAuthenticationZosa.removeOtherStbDevices(backend.ServiceClientContextZosa.instance, parameters);
                })
                : backend.ServiceClientAuthenticationZosa.removeOtherStbDevices(backend.ServiceClientContextZosa.instance);
        };
        DeviceManagement.getMasterStbStorageInformation = function () {
            return DeviceManagement_1.getStbDevicesInfo(false)
                .then(function (devicesInfo) {
                if (public_1.Guard.isUndefined(devicesInfo.masterStb)) {
                    throw new GetMasterStbStorageError("Unable to get storage info from Master because master not set.", MasterStbStorageErrorReason.MasterNotSet);
                }
                if (!devicesInfo.masterStb.isOnline) {
                    throw new GetMasterStbStorageError("Unable to get storage info from Master because master is offline.", MasterStbStorageErrorReason.MasterOffline);
                }
                return applicationclient_recordingmanagement_1.RecordingManagement.getRecordingSpaceInfo(devicesInfo.masterStb.zosaId)
                    .then(function (recordingSpaceInfo) {
                    var spaceInfo = recordingSpaceInfo.data.elements[0];
                    if (!spaceInfo.availableKiB || !spaceInfo.totalKiB || spaceInfo.totalKiB == 0 || spaceInfo.totalKiB < spaceInfo.availableKiB) {
                        throw new HddStateError("Invalid Recording Space Info: DeviceId: " + spaceInfo.deviceId + ", availableKiB: " + spaceInfo.availableKiB + ", totalKiB: " + spaceInfo.totalKiB);
                    }
                    var usedStorageKiB = spaceInfo.totalKiB - spaceInfo.availableKiB;
                    var storageInfo = {
                        mediaReceiverIsMaster: public_1.Guard.isDefined(devicesInfo.masterStb) && devicesInfo.currentStb.zosaId == devicesInfo.masterStb.zosaId,
                        percentageUsage: Math.round(usedStorageKiB / spaceInfo.totalKiB * 100),
                        totalStorageGb: Math.round(spaceInfo.totalKiB / 1000 / 1000),
                        systemReservedStorageGb: (spaceInfo.softLimitKiB || 0) / 1000 / 1000,
                        systemReservedPercentage: Math.round((spaceInfo.softLimitKiB || 0) / spaceInfo.totalKiB * 100),
                        usedStorageGb: Math.round(usedStorageKiB / 1000 / 1000)
                    };
                    if (storageInfo.mediaReceiverIsMaster) {
                        return applicationclient_storagemanagement_1.StorageManagement.getHddState()
                            .then(function (hddState) {
                            if (!hddState.physicalDevice) {
                                throw new HddStateError("Could not get hdd information: " + hddState.notFoundReason);
                            }
                            storageInfo.pvrStorage = hddState.physicalDevice;
                            return storageInfo;
                        })
                            .catch(function (error) {
                            public_1.ErrorManager.catch(error, DeviceManagement_1, 0x03);
                            return storageInfo;
                        });
                    }
                    return storageInfo;
                });
            });
        };
        DeviceManagement.setMasterStbAndSwitchAccountType = function (zosaId) {
            return public_2.ApplicationClient.deviceManagement.setMasterStb(zosaId)
                .then(function () { return public_1.Feature.has(public_1.FeatureItems.satellitesubscriber, public_1.FeatureRights.viewItems) ? public_2.ApplicationClient.subscriberInfo.setAccountToIptv() : public_2.ApplicationClient.subscriberInfo.setAccountToSat(); })
                .then(function () { return public_2.ApplicationClient.powerManagement.reboot(true, false); });
        };
        var DeviceManagement_1;
        DeviceManagement.classID = 0xD04;
        DeviceManagement.deviceWakeups = {};
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "getNighlyRebootParameters", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "resetMasterStb", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "isSatStbOnSatAccount", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "setMasterStb", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "getMyDeviceOngoingAndScheduledRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "getMyDeviceOngoingAndScheduledRecordingsCount", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "getStbDevices", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "getMasterStbId", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "getStbDevicesInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "wakeupDevice", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "wakeOnLan", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "getMasterStb", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "getMyDevice", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "getDeviceEnhanceOption", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "removeOtherStbDevices", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "getMasterStbStorageInformation", null);
        __decorate([
            public_1.log2(function () { return ({ name: DeviceManagement_1.TAG }); })
        ], DeviceManagement, "setMasterStbAndSwitchAccountType", null);
        DeviceManagement = DeviceManagement_1 = __decorate([
            public_1.logTag()
        ], DeviceManagement);
        return DeviceManagement;
    }());
    exports.DeviceManagement = DeviceManagement;
});
//# sourceMappingURL=applicationclient.devicemanagement.js.map