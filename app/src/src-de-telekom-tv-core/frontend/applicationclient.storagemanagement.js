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
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../backend/public"], function (require, exports, bluebird, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StorageManagement = exports.SmartStatus = exports.FileStorage = exports.PhysicalDevice = exports.HddFeatureNotSupportedError = exports.HddNotFoundError = void 0;
    var StorageManagementError = (function (_super) {
        __extends(StorageManagementError, _super);
        function StorageManagementError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x604;
            return _this;
        }
        return StorageManagementError;
    }(public_1.BaseError));
    var HddNotFoundError = (function (_super) {
        __extends(HddNotFoundError, _super);
        function HddNotFoundError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x786;
            return _this;
        }
        return HddNotFoundError;
    }(public_1.BaseError));
    exports.HddNotFoundError = HddNotFoundError;
    var HddFeatureNotSupportedError = (function (_super) {
        __extends(HddFeatureNotSupportedError, _super);
        function HddFeatureNotSupportedError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x63A;
            return _this;
        }
        return HddFeatureNotSupportedError;
    }(public_1.BaseError));
    exports.HddFeatureNotSupportedError = HddFeatureNotSupportedError;
    var PhysicalDevice = (function () {
        function PhysicalDevice(zacStorageManager, zacStorage) {
            this.zacStorageManager = zacStorageManager;
            this.eventListenerCloseables = [];
            if (zacStorage.type != public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.PHYSICAL_DEVICE) {
                throw new StorageManagementError("Unable to create instance of PhysicalDevice with zacStorage of type " + this.zacStorageManager.methods.getStorageTypeInfo(zacStorage.type));
            }
            this.zacStorage = zacStorage;
            StorageManagement.LogStorage(this.zacStorage);
        }
        PhysicalDevice_1 = PhysicalDevice;
        PhysicalDevice.prototype.getName = function () {
            return this.zacStorage.name;
        };
        PhysicalDevice.prototype.getState = function () {
            return this.zacStorageManager.methods.getStorageStateInfo(this.zacStorage.state);
        };
        PhysicalDevice.prototype.getPvrPartition = function () {
            var _this = this;
            if (this.zacStorage.partitions == null || this.zacStorage.partitions.length == 0) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("No partition found on physical Storage " + _this.zacStorage.name + ".", PhysicalDevice_1.TAG)); });
                return undefined;
            }
            var validPartitions = this.zacStorage.partitions
                .map(function (zacStorage) { return new FileStorage(_this.zacStorageManager, zacStorage); })
                .filter(function (partition) { return !partition.isCorrupted() && (partition.hasPurposePvr || partition.isRecordingSupported); });
            if (validPartitions && validPartitions.length > 0) {
                return validPartitions[0];
            }
            public_1.Logger.warn(function (log) { return log(public_1.LogMsg("No recording enabled partition found on physical Storage " + _this.zacStorage.name + ".", PhysicalDevice_1.TAG)); });
            return undefined;
        };
        PhysicalDevice.prototype.isCorrupted = function () {
            return this.zacStorage.state == public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.STATE_DISCONNECTED || public_1.Guard.isUndefined(this.getPvrPartition());
        };
        PhysicalDevice.prototype.getSmartStatus = function () {
            var smartValue = this.zacStorage.smartData[public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.KEY_SMART_STATUS];
            return smartValue != 0 ? (smartValue == 1 ? SmartStatus.OK : SmartStatus.AboutToFail) : SmartStatus.unknown;
        };
        PhysicalDevice.prototype.createPvrPartition = function () {
            var baseLogString = "Unable initialize physical storage  " + this.zacStorage.name + " for PVR: ";
            if (!this.zacStorage.partitions == null || this.zacStorage.partitions.length == 0) {
                throw new StorageManagementError(baseLogString + ": no partitions available.");
            }
            if (this.zacStorage.state != public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.STATE_OPERATIONAL) {
                throw new StorageManagementError(baseLogString + ": not in operational state: " + this.zacStorageManager.methods.getStorageStateInfo(this.zacStorage.state));
            }
            var firstPartition = this.zacStorage.partitions[0];
            if (firstPartition.information == null || firstPartition.information.uuid == null) {
                throw new StorageManagementError(baseLogString + ": no information/UUID available on first partition on drive " + firstPartition.name);
            }
            this.setPartitionPurpose(firstPartition, public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.PURPOSE_PVR);
            this.setPartitionPurpose(firstPartition, public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.PURPOSE_LIVE_DELAY);
            return new FileStorage(this.zacStorageManager, firstPartition);
        };
        PhysicalDevice.prototype.format = function (onProgressChange) {
            var _this = this;
            return new bluebird(function (resolve, reject) {
                _this.eventListenerCloseables.push(_this.zacStorageManager.events.onStorageListUpdated(function (event) {
                    if (event.eventType == public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.FILE_STORAGE_ADDED) {
                        _this.eventListenerCloseables.push(_this.zacStorageManager.methods.onStorageStateChangedEvent(event.storage, function (event) {
                            if (event.state == public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.STATE_OPERATIONAL) {
                                _this.setPartitionPurpose(event.storage, public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.PURPOSE_PVR);
                                _this.setPartitionPurpose(event.storage, public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.PURPOSE_LIVE_DELAY);
                                _this.unregisterEventListener();
                                resolve();
                            }
                        }));
                    }
                }));
                _this.eventListenerCloseables.push(_this.zacStorageManager.methods.onStorageEvent(_this.zacStorage, function (event) {
                    if (event.storage.name === _this.zacStorage.name) {
                        switch (event.eventType) {
                            case public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.FORMATTING_PROGRESS:
                                onProgressChange(event.value);
                                break;
                            case public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.FORMATTING_FAILED:
                                _this.unregisterEventListener();
                                reject(new StorageManagementError("Formatting failed."));
                                break;
                        }
                    }
                }));
                return _this.cancelFormat()
                    .then(function () {
                    _this.unregisterEventListener();
                    throw new StorageManagementError("Could not start formating because Cancel is in progress ...");
                })
                    .catch(function (cancelError) {
                    _this.formatInternal()
                        .then(function () { public_1.Logger.debug(function (log) { return log(public_1.LogMsg("FORMAT of " + _this.zacStorage.name + " started successfully.", PhysicalDevice_1.TAG)); }); })
                        .catch(function (formatError) {
                        _this.unregisterEventListener();
                        throw formatError;
                    });
                });
            });
        };
        PhysicalDevice.prototype.formatInternal = function () {
            var _this = this;
            return public_2.ServiceClientZac.evaluateZacResponse(function () { return _this.zacStorage.Format(_this.zacStorage.name); }, function (retVal) { return retVal == 4 ? "Called in invalid state." : "Unknown error"; });
        };
        PhysicalDevice.prototype.cancelFormat = function () {
            var _this = this;
            return public_2.ServiceClientZac.evaluateZacResponse(function () { return _this.zacStorage.Cancel(); }, function (retVal) { return retVal == 4 ? "Called in invalid state. Formatting is not in progress." : "Unknown error"; });
        };
        PhysicalDevice.prototype.setPartitionPurpose = function (partition, purpose) {
            var _this = this;
            var partitionInfo = partition.information;
            if (public_1.Guard.isUndefined(partitionInfo)) {
                throw new public_1.IllegalArgumentError("Unable to setPartitionPurpose - partition.information is undefined");
            }
            var purposeString = this.zacStorageManager.methods.getStoragePurposeInfo(purpose);
            public_1.Logger.info(function (log) { return log(public_1.LogMsg("Set " + purposeString + " for partition " + partition.name + ".", PhysicalDevice_1.TAG)); });
            return public_2.ServiceClientZac.evaluateZacResponse(function () { return _this.zacStorageManager.object.SetStoragesForPurpose(purpose, [partitionInfo.uuid]); });
        };
        PhysicalDevice.prototype.unregisterEventListener = function () {
            try {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Unregistering all storage event listeners.", PhysicalDevice_1.TAG)); });
                this.eventListenerCloseables.forEach(function (eventListenerCloseable) { return eventListenerCloseable(); });
                this.eventListenerCloseables = [];
            }
            catch (error) {
                public_1.Logger.error(function (log) { return log(public_1.LogMsg("Error unregistering all storage event listeners. " + error, PhysicalDevice_1.TAG)); });
            }
        };
        var PhysicalDevice_1;
        __decorate([
            public_1.log2(function () { return ({ name: PhysicalDevice_1.TAG }); })
        ], PhysicalDevice.prototype, "setPartitionPurpose", null);
        PhysicalDevice = PhysicalDevice_1 = __decorate([
            public_1.logTag()
        ], PhysicalDevice);
        return PhysicalDevice;
    }());
    exports.PhysicalDevice = PhysicalDevice;
    var FileStorage = (function () {
        function FileStorage(zacStorageManager, zacStorage) {
            var _this = this;
            var _a;
            this.zacStorageManager = zacStorageManager;
            this.conversionFactor = 1000;
            this.percentageUsage = 0;
            this.totalStorageGb = 0;
            this.freeStorageGb = 0;
            this.usedStorageGb = 0;
            this.zacStorage = zacStorage;
            this.name = this.zacStorage.name;
            try {
                this.totalStorageGb = Math.round(this.zacStorage.totalSpaceKiB / this.conversionFactor / this.conversionFactor);
                this.freeStorageGb = public_1.Guard.isNumber(this.zacStorage.freeSpaceKiB) ? Math.round(this.zacStorage.freeSpaceKiB / this.conversionFactor / this.conversionFactor) : 0;
                this.usedStorageGb = Math.round(this.totalStorageGb - this.freeStorageGb);
                this.percentageUsage = Math.round(this.usedStorageGb / this.totalStorageGb * 100);
            }
            catch (error) {
                public_1.Logger.error(function (log) { return log(public_1.LogMsg("Error calculating partition space: " + error, PhysicalDevice.TAG)); });
            }
            var pvrPartitionsUUIDs = this.zacStorageManager.object.GetStoragesForPurpose(public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.PURPOSE_PVR) || [];
            var liveDelayPartitionsUUIDs = this.zacStorageManager.object.GetStoragesForPurpose(public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.PURPOSE_LIVE_DELAY) || [];
            public_1.Logger.debug(function (log) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("System PURPOSED storages:", PhysicalDevice.TAG)); });
                pvrPartitionsUUIDs.forEach(function (pvrPartitionUUID) { log(public_1.LogMsg("uuid: " + pvrPartitionUUID + ": PURPOSE_PVR", PhysicalDevice.TAG)); });
                liveDelayPartitionsUUIDs.forEach(function (liveDelayPartitionsUUID) { log(public_1.LogMsg("uuid: " + liveDelayPartitionsUUID + ": PURPOSE_LIVE_DELAY", PhysicalDevice.TAG)); });
            });
            this.hasPurposePvr = this.zacStorage.information != null && pvrPartitionsUUIDs.indexOf(this.zacStorage.information.uuid) >= 0;
            this.hasPurposeLiveDelay = this.zacStorage.information != null && liveDelayPartitionsUUIDs.indexOf(this.zacStorage.information.uuid) >= 0;
            this.isRecordingSupported = !!((_a = this.zacStorage.information) === null || _a === void 0 ? void 0 : _a.recordingSupported);
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("File Storage " + _this.name + " initialized successfully. [hasPurposePvr: " + _this.hasPurposePvr + ", isRecordingSupported: " + _this.isRecordingSupported + "]", PhysicalDevice.TAG)); });
        }
        FileStorage.prototype.isOperationalState = function () {
            return this.zacStorage.state == public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.STATE_OPERATIONAL;
        };
        FileStorage.prototype.isCorrupted = function () {
            return this.zacStorage.state == public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.STATE_DISCONNECTED ||
                this.zacStorage.state == public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.STATE_UNMOUNTED;
        };
        FileStorage = __decorate([
            public_1.logTag()
        ], FileStorage);
        return FileStorage;
    }());
    exports.FileStorage = FileStorage;
    var SmartStatus;
    (function (SmartStatus) {
        SmartStatus[SmartStatus["unknown"] = 0] = "unknown";
        SmartStatus[SmartStatus["OK"] = 1] = "OK";
        SmartStatus[SmartStatus["AboutToFail"] = 2] = "AboutToFail";
    })(SmartStatus = exports.SmartStatus || (exports.SmartStatus = {}));
    var StorageManagement = (function () {
        function StorageManagement() {
        }
        StorageManagement_1 = StorageManagement;
        StorageManagement.getHddState = function () {
            return bluebird.try(function () {
                try {
                    if (public_1.Feature.has(public_1.FeatureItems.hdd, public_1.FeatureRights.none)) {
                        return { notFoundReason: "HDD feature is not supported." };
                    }
                    var storageManager = public_2.ServiceClientZac.getStorageManager(public_2.ServiceClientContextZac.instance);
                    var physicalStorages = storageManager.object.physicalDevices;
                    if (physicalStorages == null || physicalStorages.length == 0) {
                        return { notFoundReason: "Found no physical storages." };
                    }
                    if (!physicalStorages.some(function (storage) { return storage.connectionType == public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.CONNECTION_TYPE_SATA; })) {
                        return { notFoundReason: "Found no SATA physical storage." };
                    }
                    return {
                        physicalDevice: new PhysicalDevice(storageManager, physicalStorages.filter(function (storage) { return storage.connectionType == public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.CONNECTION_TYPE_SATA; })[0])
                    };
                }
                catch (error) {
                    return { notFoundReason: "Error getting hdd information: " + JSON.stringify(error) };
                }
            });
        };
        StorageManagement.LogStorage = function (storage) {
            public_1.Logger.debug(function (log) {
                var storageManager = public_2.ServiceClientZac.getStorageManager(public_2.ServiceClientContextZac.instance);
                switch (storage.type) {
                    case public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.PHYSICAL_DEVICE:
                        log(public_1.LogMsg("name: " + storage.name + ", state: " + storageManager.methods.getStorageStateInfo(storage.state) + ", totalSpaceKiB: " + storage.totalSpaceKiB, StorageManagement_1.TAG));
                        log(public_1.LogMsg("connectionType: " + storageManager.methods.getConnectionTypeInfo(storage.connectionType), StorageManagement_1.TAG));
                        if (storage.smartData != null) {
                            var smartStatus = storage.smartData[public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.KEY_SMART_STATUS];
                            log(public_1.LogMsg("smart status: " + smartStatus + " [" + (smartStatus != null ? (smartStatus == "1" ? "OK" : "NOK") : "") + "]", StorageManagement_1.TAG));
                            log(public_1.LogMsg("smart temperature: " + storage.smartData[public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.KEY_SMART_TEMPERATURE], StorageManagement_1.TAG));
                        }
                        if (storage.deviceData != null) {
                            log(public_1.LogMsg("model name: " + storage.smartData[public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.KEY_MODEL_NAME], StorageManagement_1.TAG));
                            log(public_1.LogMsg("serial number: " + storage.smartData[public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.KEY_SERIAL_NUMBER], StorageManagement_1.TAG));
                            log(public_1.LogMsg("firmware revision: " + storage.smartData[public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.KEY_FIRMWARE_REVISION], StorageManagement_1.TAG));
                        }
                        if (storage.partitions != null && storage.partitions.length > 0) {
                            storage.partitions.forEach(function (partition) { return StorageManagement_1.LogStorage(partition); });
                        }
                        break;
                    case public_2.ServiceClientContextZac.instance.zacAPI.StorageManager.FILE_STORAGE:
                        log(public_1.LogMsg("    name: " + storage.name + ", state: " + storageManager.methods.getStorageStateInfo(storage.state) + ", totalSpaceKiB: " + storage.totalSpaceKiB, StorageManagement_1.TAG));
                        log(public_1.LogMsg("    freeSpaceKiB: " + storage.freeSpaceKiB, StorageManagement_1.TAG));
                        log(public_1.LogMsg("    parent: " + (storage.parent != null ? storage.parent.name : ""), StorageManagement_1.TAG));
                        if (storage.information != null) {
                            log(public_1.LogMsg("    label : " + storage.information.label, StorageManagement_1.TAG));
                            log(public_1.LogMsg("    fileSystem: " + storageManager.methods.getFileSystemInfo(storage.information.fileSystem), StorageManagement_1.TAG));
                            log(public_1.LogMsg("    path : " + storage.information.path, StorageManagement_1.TAG));
                            log(public_1.LogMsg("    recordingSupported : " + storage.information.recordingSupported, StorageManagement_1.TAG));
                            log(public_1.LogMsg("    uuid : " + storage.information.uuid, StorageManagement_1.TAG));
                        }
                        break;
                    default:
                        log(public_1.LogMsg("Unknown storage type: " + storage.type, StorageManagement_1.TAG));
                        break;
                }
            });
        };
        var StorageManagement_1;
        __decorate([
            public_1.log2(function () { return ({ name: StorageManagement_1.TAG }); })
        ], StorageManagement, "getHddState", null);
        StorageManagement = StorageManagement_1 = __decorate([
            public_1.logTag()
        ], StorageManagement);
        return StorageManagement;
    }());
    exports.StorageManagement = StorageManagement;
});
//# sourceMappingURL=applicationclient.storagemanagement.js.map