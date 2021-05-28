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
define(["require", "exports", "bluebird", "moment", "./applicationclient.devicemanagement", "./applicationclient.network", "./applicationclient.outputs", "./applicationclient.system", "./applicationclient.channelmanagement", "./applicationclient.bandwidthmanagement", "./applicationclient.userstorage", "./applicationclient.recordingmanagement", "./applicationclient.contentmanagement", "src/src-de-telekom/public", "../backend/public", "./applicationclient.subscriberinfo", "src/src-de-telekom/errorhandling/public"], function (require, exports, bluebird, moment, applicationclient_devicemanagement_1, applicationclient_network_1, applicationclient_outputs_1, applicationclient_system_1, applicationclient_channelmanagement_1, applicationclient_bandwidthmanagement_1, applicationclient_userstorage_1, applicationclient_recordingmanagement_1, applicationclient_contentmanagement_1, public_1, public_2, applicationclient_subscriberinfo_1, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SystemInformation = void 0;
    var SystemInformation = (function () {
        function SystemInformation() {
        }
        SystemInformation_1 = SystemInformation;
        SystemInformation.getTvProgramInfoProperties = function (timeFormat, suffix) {
            return applicationclient_channelmanagement_1.ChannelManagement.getCacheTime()
                .then(function (result) { return ({ programInfoLastUpdate: moment(result).format(timeFormat) + " " + suffix }); });
        };
        SystemInformation.getNetworkProperties = function () {
            var networkProperties = applicationclient_network_1.Network.getNetworkProperties();
            var linkProperties = applicationclient_network_1.Network.getLinkProperties();
            return bluebird.resolve({
                macAddress: linkProperties.MacAddress,
                ipv4Address: networkProperties.Ip4Address,
                ipv4Gateway: networkProperties.Ip4Gateway,
                ipv4Dns: networkProperties.Ip4Dns,
                bootServer: public_1.Configuration.instance.startUrl
            });
        };
        SystemInformation.getSystemProperties = function (timeFormat, suffix) {
            return bluebird.all([
                applicationclient_outputs_1.Outputs.getDisplayInformation(),
                applicationclient_userstorage_1.UserStorage.getNextNighlyRebootTime(),
                applicationclient_contentmanagement_1.ContentManagement.getSubscriberInfo(),
                applicationclient_subscriberinfo_1.SubscriberInfo.universalTarifEnabled()
            ])
                .then(function (_a) {
                var displayInformation = _a[0], nextNightlyRebootTime = _a[1], subscriberInfo = _a[2], universalTarifEnabled = _a[3];
                var sysInfos = public_2.ServiceClientZac.getSystemInformation(true);
                return {
                    hardware: {
                        model: "" + sysInfos.HwModel + (sysInfos.HwModelType ? " " + sysInfos.HwModelType : ""),
                        version: sysInfos.VersionHardwareCustomer ? "HW " + sysInfos.VersionHardwareCustomer + " / " + sysInfos.HwVersion : sysInfos.HwVersion,
                        serialNumber: sysInfos.SerialNumber,
                        guid: sysInfos.GUID,
                        socFamilyId: sysInfos.SocFamilyId ? sysInfos.SocFamilyId : "n.a.",
                        socProductId: sysInfos.SocProductId ? sysInfos.SocProductId : "n.a."
                    },
                    terminalMiddleware: {
                        bls2Version: sysInfos.BootloaderVersion,
                        swProductVariant: sysInfos.SwProductVariant,
                        browserVersion: navigator.userAgent
                    },
                    applicationsInfo: public_1.Feature.has(public_1.FeatureItems.apps, public_1.FeatureRights.viewItems) ? {
                        netflixEsn: sysInfos.NetflixEsn ? sysInfos.NetflixEsn : "n.a.",
                        netflixVersion: sysInfos.NetflixVersion ? sysInfos.NetflixVersion : "n.a.",
                        amazonVersion: sysInfos.amazonVersion ? sysInfos.amazonVersion : "n.a.",
                        amazonFontVersion: sysInfos.amazonFontVersion ? sysInfos.amazonFontVersion : "n.a."
                    } : undefined,
                    ui: {
                        version: applicationclient_system_1.System.getUiVersion(),
                        upTime: moment(new Date(new Date().getTime() - sysInfos.UpTime * 1000)).format(timeFormat) + " " + suffix,
                        userAssignment: SystemInformation_1.getSubscriberType(),
                        maintenenceRebootTime: nextNightlyRebootTime + " " + suffix,
                        subscriberType: subscriberInfo.provisioningType,
                        universalTarifEnabled: universalTarifEnabled ? "ja" : "nein"
                    },
                    displayInformation: {
                        tvModel: displayInformation.TvModel && displayInformation.TvModel.length > 0 ? displayInformation.TvModel : undefined,
                        tvManufacturerDate: displayInformation.TvManufacturerDate && displayInformation.TvManufacturerDate.length > 0 ? displayInformation.TvManufacturerDate : undefined,
                        supportsUhd: displayInformation.SupportsUhd ? "ja" : "nein",
                        hdcpVersion: displayInformation.HdcpVersion ? String(displayInformation.HdcpVersion) : "n.a.",
                        hdcpEngaged: displayInformation.HdcpEngaged ? (displayInformation.HdcpEngaged ? "ja" : "nein") : "n.a.",
                        supportedHdrFormats: displayInformation.SupportedHdrFormats && displayInformation.SupportedHdrFormats.length > 0 ? displayInformation.SupportedHdrFormats : "n.a."
                    }
                };
            });
        };
        SystemInformation.getResourceProperties = function (bandwithManagerUnknownValue) {
            var _this = this;
            return bluebird.all([
                applicationclient_devicemanagement_1.DeviceManagement.getStbDevicesInfo(false),
                applicationclient_bandwidthmanagement_1.BandwidthManagement.getBandwidthManagerType(),
                applicationclient_bandwidthmanagement_1.BandwidthManagement.getBandwidthInfo()
            ])
                .then(function (_a) {
                var devicesInfo = _a[0], bandwidthManagerType = _a[1], zosaBandwidthInfo = _a[2];
                _this.logBandwidthInfo(zosaBandwidthInfo.data);
                var currentDeviceId = devicesInfo.currentStb.zosaId;
                var masterDeviceId = devicesInfo.masterStb ? devicesInfo.masterStb.zosaId : undefined;
                var onlineReceiverCount = devicesInfo.allStbs.filter(function (stb) { return stb.isOnline; }).length;
                var uhdStreamsCounter = 0;
                var hdStreamsCounter = 0;
                var sdStreamsCounter = 0;
                zosaBandwidthInfo.data.bookings
                    .filter(function (booking) { return booking.device && booking.device.zosaId == currentDeviceId; })
                    .forEach(function (booking) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("booking info -> " + JSON.stringify(booking), SystemInformation_1.TAG)); });
                    if (booking.videoDefinition) {
                        switch (booking.videoDefinition) {
                            case public_2.zosaStatic.VIDEO_DEFINITION_UHD:
                                uhdStreamsCounter++;
                                break;
                            case public_2.zosaStatic.VIDEO_DEFINITION_HD:
                                hdStreamsCounter++;
                                break;
                            case public_2.zosaStatic.VIDEO_DEFINITION_SD:
                                sdStreamsCounter++;
                                break;
                            default:
                                public_1.Logger.warn(function (log) { return log(public_1.LogMsg("Unknown stream quality -> " + booking.videoDefinition, SystemInformation_1.TAG)); });
                                break;
                        }
                    }
                });
                var uhdStreamsInfo = public_1.Feature.has(public_1.FeatureItems.streamuhd, public_1.FeatureRights.viewItems) ? uhdStreamsCounter + " UHD / " : "";
                var usedStreamsInfo = uhdStreamsInfo + " " + hdStreamsCounter + " HD / " + sdStreamsCounter + " SD, " + _this.round(zosaBandwidthInfo.data.deviceUsedBitrate / SystemInformation_1.conversionFactor) + " Mbit/s";
                return {
                    totalBandwidth: _this.round(zosaBandwidthInfo.data.subscriberMaxBitrate / SystemInformation_1.conversionFactor) + " Mbit/s",
                    usedBandwidth: _this.round(zosaBandwidthInfo.data.subscriberUsedBitrate / SystemInformation_1.conversionFactor) + " Mbit/s",
                    usedStreams: usedStreamsInfo,
                    onlineReceiversCount: String(onlineReceiverCount),
                    bandwidthManagerType: bandwidthManagerType ? bandwidthManagerType.data.BandwidthManagerType : bandwithManagerUnknownValue,
                    ressourcesTableInfo: masterDeviceId ? SystemInformation_1.getRessourcesInformation(masterDeviceId, currentDeviceId, zosaBandwidthInfo.data) : []
                };
            });
        };
        SystemInformation.getRecordingFunctionProperties = function () {
            var props = {
                masterReceiverIsSet: true,
                masterReceiverIsOnline: true,
                percentageUsage: 0,
                totalStorageGb: 0,
                usedStorageGb: 0,
                systemReservedPercentage: 0,
                systemReservedStorageGb: 0,
                mediaReceiverIsMaster: false
            };
            var partition;
            return applicationclient_devicemanagement_1.DeviceManagement.getMasterStbStorageInformation()
                .then(function (storageInfo) {
                partition = storageInfo.pvrStorage ? storageInfo.pvrStorage.getPvrPartition() : undefined;
                props = __assign(__assign({}, storageInfo), { masterReceiverIsSet: true, masterReceiverIsOnline: true, hardDiscStorageInfo: Math.round(storageInfo.usedStorageGb / storageInfo.totalStorageGb * 100) + " % belegt davon " + storageInfo.systemReservedPercentage + " % durch System" });
            })
                .catch(function (error) {
                public_3.ErrorManager.catch(error, SystemInformation_1, 0x01);
                props.masterStbStorageError = error;
                if (error instanceof applicationclient_devicemanagement_1.GetMasterStbStorageError) {
                    var storageError = error;
                    props.masterReceiverIsOnline = false;
                    props.masterReceiverIsSet = storageError.reason == applicationclient_devicemanagement_1.MasterStbStorageErrorReason.MasterOffline;
                }
                return props;
            })
                .then(function () { return !props.masterReceiverIsSet ? undefined : applicationclient_recordingmanagement_1.RecordingManagement.getStbRecordingResources(); })
                .catch(function (error) {
                public_3.ErrorManager.catch(error, SystemInformation_1, 0x02);
                props.recordingResourcesError = error;
                return undefined;
            })
                .then(function (recordingResources) {
                props.recordingResources = recordingResources;
                return (partition === null || partition === void 0 ? void 0 : partition.zacStorage.information) ? applicationclient_recordingmanagement_1.RecordingManagement.getAlienRecordingsState(partition.zacStorage.information.uuid) : undefined;
            })
                .catch(function (error) {
                public_3.ErrorManager.catch(error, SystemInformation_1, 0x03);
                props.alienRecordingsError = error;
                return undefined;
            })
                .then(function (alienRecordings) {
                props.alienRecordingsCount = alienRecordings === null || alienRecordings === void 0 ? void 0 : alienRecordings.count;
                props.alienRecordingsTotalSizeKiB = alienRecordings === null || alienRecordings === void 0 ? void 0 : alienRecordings.sizeKb;
                return props;
            });
        };
        SystemInformation.getZosaBandwidthBookingItemTypeInfo = function (booking) {
            switch (booking.bookingType) {
                case public_2.zosaStatic.BANDWIDTH_BOOKING_TYPE_PVR: return "REC";
                case public_2.zosaStatic.BANDWIDTH_BOOKING_TYPE_VOD: return "VOD";
                case public_2.zosaStatic.BANDWIDTH_BOOKING_TYPE_CATCHUP_TV_IR: return "IR";
                case public_2.zosaStatic.BANDWIDTH_BOOKING_TYPE_DOWNLOAD: return "DOWN";
                case public_2.zosaStatic.BANDWIDTH_BOOKING_TYPE_LIVE_TV: return "LiveTV";
                default: return "N.A.";
            }
        };
        SystemInformation.getZosaBandwidthBookingItemBandwithInfo = function (booking) {
            switch (booking.videoDefinition) {
                case public_2.zosaStatic.VIDEO_DEFINITION_UHD: return "UHD";
                case public_2.zosaStatic.VIDEO_DEFINITION_HD: return "HD";
                case public_2.zosaStatic.VIDEO_DEFINITION_SD: return "SD";
                default: return "N.A.";
            }
        };
        SystemInformation.getRessourcesInformation = function (masterDeviceZosaId, currentDeviceZosaId, zosaBandwidthInfo) {
            var retValue = [];
            var groupedArrayByDevice = SystemInformation_1.groupBy(zosaBandwidthInfo.bookings, function (item) { return SystemInformation_1.getBandwithBookingItemDisplayName(item); });
            for (var stbName in groupedArrayByDevice) {
                var firstBookingStbName = SystemInformation_1.getStbBookingItems(stbName, zosaBandwidthInfo.bookings)[0];
                if (firstBookingStbName === null || firstBookingStbName === void 0 ? void 0 : firstBookingStbName.device) {
                    var deviceRessourceInfo = {
                        deviceName: stbName,
                        isCurrentDevice: firstBookingStbName.device.zosaId == currentDeviceZosaId,
                        isMasterDevice: firstBookingStbName.device.zosaId == masterDeviceZosaId,
                        ressources: groupedArrayByDevice[stbName].map(function (booking) { return ({
                            ressourceName: "" + (booking.content ? booking.content.title : "N.A.") + (booking.bookingType == public_2.zosaStatic.BANDWIDTH_BOOKING_TYPE_LIVE_TV && booking.isUnicast ? " (UC)" : ""),
                            bandwithInfo: SystemInformation_1.getZosaBandwidthBookingItemBandwithInfo(booking),
                            typeInfo: SystemInformation_1.getZosaBandwidthBookingItemTypeInfo(booking),
                            lanBandwith: "" + (booking.lanBitrate / SystemInformation_1.conversionFactor).toFixed(3).replace(".", ","),
                            wanBandwith: "" + (booking.wanBitrate / SystemInformation_1.conversionFactor).toFixed(3).replace(".", ",")
                        }); })
                    };
                    retValue.push(deviceRessourceInfo);
                }
            }
            return retValue;
        };
        SystemInformation.getStbBookingItems = function (stbName, bookingItems) {
            return bookingItems.filter(function (bookingItem) {
                return bookingItem.device && bookingItem.device.name == stbName ||
                    bookingItem.device && bookingItem.device.title == stbName;
            });
        };
        SystemInformation.getBandwithBookingItemDisplayName = function (bookingItem) {
            var _a, _b;
            return ((_a = bookingItem.device) === null || _a === void 0 ? void 0 : _a.name) ? bookingItem.device.name :
                (((_b = bookingItem.device) === null || _b === void 0 ? void 0 : _b.title) ? bookingItem.device.title : "no_name");
        };
        SystemInformation.groupBy = function (array, keyFunc) {
            var result = {};
            array.forEach(function (item) {
                var key = keyFunc(item);
                if (!result[key]) {
                    result[key] = [];
                }
                result[key].push(item);
            });
            return result;
        };
        SystemInformation.getSubscriberType = function () {
            return public_1.Configuration.instance.features.assignment.join(",");
        };
        SystemInformation.round = function (value, decimals) {
            if (decimals === void 0) { decimals = 3; }
            return parseFloat(value.toFixed(decimals)).toString().replace(".", ",");
        };
        SystemInformation.logBandwidthInfo = function (bandwidthInfo) {
            public_1.Logger.debug(function (log) {
                log(public_1.LogMsg("---------------------- BandwidthInfo------------------------", SystemInformation_1.TAG));
                log(public_1.LogMsg("deviceUsedBitrate: " + bandwidthInfo.deviceUsedBitrate, SystemInformation_1.TAG));
                log(public_1.LogMsg("deviceMaxBitrate: " + bandwidthInfo.deviceMaxBitrate, SystemInformation_1.TAG));
                log(public_1.LogMsg("subscriberUsedBitrate: " + bandwidthInfo.subscriberUsedBitrate, SystemInformation_1.TAG));
                log(public_1.LogMsg("subscriberMaxBitrate: " + bandwidthInfo.subscriberMaxBitrate, SystemInformation_1.TAG));
            });
            var _loop_1 = function (zosaBandwidthBookingItem) {
                public_1.Logger.debug(function (log) {
                    log(public_1.LogMsg("    --- Booked item id: " + zosaBandwidthBookingItem.zosaId + ", title: '" + zosaBandwidthBookingItem.title + ", device: " + (zosaBandwidthBookingItem.device ? zosaBandwidthBookingItem.device.zosaId : "undefined") + "' ---", SystemInformation_1.TAG));
                    log(public_1.LogMsg("        type: " + applicationclient_bandwidthmanagement_1.BandwidthManagement.getBookingTypeInfo(zosaBandwidthBookingItem.bookingType), SystemInformation_1.TAG));
                    log(public_1.LogMsg("        lanBitrate: " + zosaBandwidthBookingItem.lanBitrate, SystemInformation_1.TAG));
                    log(public_1.LogMsg("        wanBitrate: " + zosaBandwidthBookingItem.wanBitrate, SystemInformation_1.TAG));
                    log(public_1.LogMsg("        videoDefinition: " + (zosaBandwidthBookingItem.videoDefinition ? applicationclient_bandwidthmanagement_1.BandwidthManagement.getQualityInfo(zosaBandwidthBookingItem.videoDefinition) : "undefined"), SystemInformation_1.TAG));
                });
            };
            for (var _i = 0, _a = bandwidthInfo.bookings; _i < _a.length; _i++) {
                var zosaBandwidthBookingItem = _a[_i];
                _loop_1(zosaBandwidthBookingItem);
            }
        };
        var SystemInformation_1;
        SystemInformation.classID = 0x792;
        SystemInformation.conversionFactor = 1000;
        SystemInformation = SystemInformation_1 = __decorate([
            public_1.logTag()
        ], SystemInformation);
        return SystemInformation;
    }());
    exports.SystemInformation = SystemInformation;
});
//# sourceMappingURL=applicationclient.systeminformation.js.map