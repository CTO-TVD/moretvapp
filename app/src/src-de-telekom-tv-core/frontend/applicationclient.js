var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../backend/public", "./applicationclient.amazon", "./applicationclient.disney", "./applicationclient.app", "./applicationclient.appmanagement", "./applicationclient.authman", "./applicationclient.bandwidthmanagement", "./applicationclient.bluetooth", "./applicationclient.channelmanagement", "./applicationclient.contentmanagement", "./applicationclient.devicemanagement", "./applicationclient.eventmanagement", "./applicationclient.frontdisplay", "./applicationclient.frontendmanager", "./applicationclient.instrumentation", "./applicationclient.netflix", "./applicationclient.network", "./applicationclient.outdoor", "./applicationclient.outputs", "./applicationclient.parentalcontrolmanagement", "./applicationclient.persondetails", "./applicationclient.playbackhistory", "./applicationclient.powermanagement", "./applicationclient.programmanagement", "./applicationclient.recommendation", "./applicationclient.recordingmanagement", "./applicationclient.report", "./applicationclient.satellite", "./applicationclient.search", "./applicationclient.searchhistory", "./applicationclient.settings", "./applicationclient.softwareupgrade", "./applicationclient.storagemanagement", "./applicationclient.subscriberinfo", "./applicationclient.system", "./applicationclient.systeminformation", "./applicationclient.tracelog", "./applicationclient.userstorage", "./applicationclient.vasmanagement", "./applicationclient.vodmanagement", "./applicationclient.volumecontrol", "./applicationclient.youtube", "./applicationclient.voicehistory", "./applicationclient.tds", "./applicationclient.usagetracking", "./applicationclient.performance", "./applicationclient.devicemanagement", "./applicationclient.frontdisplay", "./applicationclient.netflix", "./applicationclient.network", "./applicationclient.outputs", "./applicationclient.persondetails", "./applicationclient.powermanagement", "./applicationclient.recordingmanagement", "./applicationclient.settings", "./applicationclient.storagemanagement", "./applicationclient.userstorage", "./applicationclient.searchhistory", "./applicationclient.bluetooth", "./applicationclient.satellite", "./applicationclient.tds", "./applicationclient.subscriberinfo", "./applicationclient.performance"], function (require, exports, bluebird, public_1, backend, applicationclient_amazon_1, applicationclient_disney_1, applicationclient_app_1, applicationclient_appmanagement_1, applicationclient_authman_1, applicationclient_bandwidthmanagement_1, applicationclient_bluetooth_1, applicationclient_channelmanagement_1, applicationclient_contentmanagement_1, applicationclient_devicemanagement_1, applicationclient_eventmanagement_1, applicationclient_frontdisplay_1, applicationclient_frontendmanager_1, applicationclient_instrumentation_1, applicationclient_netflix_1, applicationclient_network_1, applicationclient_outdoor_1, applicationclient_outputs_1, applicationclient_parentalcontrolmanagement_1, applicationclient_persondetails_1, applicationclient_playbackhistory_1, applicationclient_powermanagement_1, applicationclient_programmanagement_1, applicationclient_recommendation_1, applicationclient_recordingmanagement_1, applicationclient_report_1, applicationclient_satellite_1, applicationclient_search_1, applicationclient_searchhistory_1, applicationclient_settings_1, applicationclient_softwareupgrade_1, applicationclient_storagemanagement_1, applicationclient_subscriberinfo_1, applicationclient_system_1, applicationclient_systeminformation_1, applicationclient_tracelog_1, applicationclient_userstorage_1, applicationclient_vasmanagement_1, applicationclient_vodmanagement_1, applicationclient_volumecontrol_1, applicationclient_youtube_1, applicationclient_voicehistory_1, applicationclient_tds_1, applicationclient_usagetracking_1, applicationclient_performance_1, applicationclient_devicemanagement_2, applicationclient_frontdisplay_2, applicationclient_netflix_2, applicationclient_network_2, applicationclient_outputs_2, applicationclient_persondetails_2, applicationclient_powermanagement_2, applicationclient_recordingmanagement_2, applicationclient_settings_2, applicationclient_storagemanagement_2, applicationclient_userstorage_2, applicationclient_searchhistory_2, applicationclient_bluetooth_2, applicationclient_satellite_2, applicationclient_tds_2, applicationclient_subscriberinfo_2, applicationclient_performance_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApplicationClient = exports.ProcessState = exports.DeviceActionEventType = exports.EventLog = exports.CustomPrivacyItem = exports.TdsParameterName = exports.TSatWizardExecutionMode = exports.SatelliteNumberConfiguration = exports.CableNumberConfiguration = exports.BluetoothErrorCode = exports.SearchContext = exports.RecordingFilterTypes = exports.RecordingSortTypes = exports.SmartStatus = exports.PhysicalDevice = exports.HddNotFoundError = exports.HddFeatureNotSupportedError = exports.FileStorage = exports.StandbyFunctionality = exports.SatCableLength = exports.PreferedStreamQuality = exports.RecordingType = exports.RecordingStorageOption = exports.RecordingQuality = exports.RecordingNoMasterError = exports.MasterStbPreferredStreamQuality = exports.StartupState = exports.PowerStateChangedReason = exports.PowerState = exports.PersonDetailModules = exports.ZacOutputsEventMapper = exports.NetworkErrorReason = exports.NetworkError = exports.NetflixInteractionId = exports.NetflixLaneType = exports.FrontDisplaySymbol = exports.GetMasterStbStorageError = exports.DeviceEnhanceOption = exports.BlockBootReason = exports.DeviceModel = void 0;
    Object.defineProperty(exports, "DeviceModel", { enumerable: true, get: function () { return applicationclient_devicemanagement_2.DeviceModel; } });
    Object.defineProperty(exports, "BlockBootReason", { enumerable: true, get: function () { return applicationclient_devicemanagement_2.BlockBootReason; } });
    Object.defineProperty(exports, "DeviceEnhanceOption", { enumerable: true, get: function () { return applicationclient_devicemanagement_2.DeviceEnhanceOption; } });
    Object.defineProperty(exports, "GetMasterStbStorageError", { enumerable: true, get: function () { return applicationclient_devicemanagement_2.GetMasterStbStorageError; } });
    Object.defineProperty(exports, "FrontDisplaySymbol", { enumerable: true, get: function () { return applicationclient_frontdisplay_2.FrontDisplaySymbol; } });
    Object.defineProperty(exports, "NetflixLaneType", { enumerable: true, get: function () { return applicationclient_netflix_2.NetflixLaneType; } });
    Object.defineProperty(exports, "NetflixInteractionId", { enumerable: true, get: function () { return applicationclient_netflix_2.NetflixInteractionId; } });
    Object.defineProperty(exports, "NetworkError", { enumerable: true, get: function () { return applicationclient_network_2.NetworkError; } });
    Object.defineProperty(exports, "NetworkErrorReason", { enumerable: true, get: function () { return applicationclient_network_2.NetworkErrorReason; } });
    Object.defineProperty(exports, "ZacOutputsEventMapper", { enumerable: true, get: function () { return applicationclient_outputs_2.ZacOutputsEventMapper; } });
    Object.defineProperty(exports, "PersonDetailModules", { enumerable: true, get: function () { return applicationclient_persondetails_2.PersonDetailModules; } });
    Object.defineProperty(exports, "PowerState", { enumerable: true, get: function () { return applicationclient_powermanagement_2.PowerState; } });
    Object.defineProperty(exports, "PowerStateChangedReason", { enumerable: true, get: function () { return applicationclient_powermanagement_2.PowerStateChangedReason; } });
    Object.defineProperty(exports, "StartupState", { enumerable: true, get: function () { return applicationclient_powermanagement_2.StartupState; } });
    Object.defineProperty(exports, "MasterStbPreferredStreamQuality", { enumerable: true, get: function () { return applicationclient_recordingmanagement_2.MasterStbPreferredStreamQuality; } });
    Object.defineProperty(exports, "RecordingNoMasterError", { enumerable: true, get: function () { return applicationclient_recordingmanagement_2.RecordingNoMasterError; } });
    Object.defineProperty(exports, "RecordingQuality", { enumerable: true, get: function () { return applicationclient_recordingmanagement_2.RecordingQuality; } });
    Object.defineProperty(exports, "RecordingStorageOption", { enumerable: true, get: function () { return applicationclient_recordingmanagement_2.RecordingStorageOption; } });
    Object.defineProperty(exports, "RecordingType", { enumerable: true, get: function () { return applicationclient_recordingmanagement_2.RecordingType; } });
    Object.defineProperty(exports, "PreferedStreamQuality", { enumerable: true, get: function () { return applicationclient_settings_2.PreferedStreamQuality; } });
    Object.defineProperty(exports, "SatCableLength", { enumerable: true, get: function () { return applicationclient_settings_2.SatCableLength; } });
    Object.defineProperty(exports, "StandbyFunctionality", { enumerable: true, get: function () { return applicationclient_settings_2.StandbyFunctionality; } });
    Object.defineProperty(exports, "FileStorage", { enumerable: true, get: function () { return applicationclient_storagemanagement_2.FileStorage; } });
    Object.defineProperty(exports, "HddFeatureNotSupportedError", { enumerable: true, get: function () { return applicationclient_storagemanagement_2.HddFeatureNotSupportedError; } });
    Object.defineProperty(exports, "HddNotFoundError", { enumerable: true, get: function () { return applicationclient_storagemanagement_2.HddNotFoundError; } });
    Object.defineProperty(exports, "PhysicalDevice", { enumerable: true, get: function () { return applicationclient_storagemanagement_2.PhysicalDevice; } });
    Object.defineProperty(exports, "SmartStatus", { enumerable: true, get: function () { return applicationclient_storagemanagement_2.SmartStatus; } });
    Object.defineProperty(exports, "RecordingSortTypes", { enumerable: true, get: function () { return applicationclient_userstorage_2.RecordingSortTypes; } });
    Object.defineProperty(exports, "RecordingFilterTypes", { enumerable: true, get: function () { return applicationclient_userstorage_2.RecordingFilterTypes; } });
    Object.defineProperty(exports, "SearchContext", { enumerable: true, get: function () { return applicationclient_searchhistory_2.SearchContext; } });
    Object.defineProperty(exports, "BluetoothErrorCode", { enumerable: true, get: function () { return applicationclient_bluetooth_2.BluetoothErrorCode; } });
    Object.defineProperty(exports, "CableNumberConfiguration", { enumerable: true, get: function () { return applicationclient_satellite_2.CableNumberConfiguration; } });
    Object.defineProperty(exports, "SatelliteNumberConfiguration", { enumerable: true, get: function () { return applicationclient_satellite_2.SatelliteNumberConfiguration; } });
    Object.defineProperty(exports, "TSatWizardExecutionMode", { enumerable: true, get: function () { return applicationclient_satellite_2.TSatWizardExecutionMode; } });
    Object.defineProperty(exports, "TdsParameterName", { enumerable: true, get: function () { return applicationclient_tds_2.TdsParameterName; } });
    Object.defineProperty(exports, "CustomPrivacyItem", { enumerable: true, get: function () { return applicationclient_subscriberinfo_2.CustomPrivacyItem; } });
    Object.defineProperty(exports, "EventLog", { enumerable: true, get: function () { return applicationclient_performance_2.EventLog; } });
    Object.defineProperty(exports, "DeviceActionEventType", { enumerable: true, get: function () { return applicationclient_performance_2.DeviceActionEventType; } });
    Object.defineProperty(exports, "ProcessState", { enumerable: true, get: function () { return applicationclient_performance_2.ProcessState; } });
    var ApplicationClient = (function () {
        function ApplicationClient() {
        }
        ApplicationClient_1 = ApplicationClient;
        ApplicationClient.cloneParameter = function (obj) {
            if (typeof obj !== "object")
                return obj;
            var target = {};
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    var value = obj[i];
                    if (value instanceof Date) {
                        var cloneDate = new Date(value.valueOf());
                        cloneDate.setSeconds(0, 0);
                        target[i] = cloneDate;
                    }
                    else {
                        target[i] = value;
                    }
                }
            }
            return target;
        };
        ApplicationClient.onRcuBatteryLowEvent = function (callback) {
            var system = backend.ServiceClientZac.getSystem(backend.ServiceClientContextZac.instance);
            return system.events.onRcuBatteryLowEvent(callback);
        };
        ApplicationClient.getItemById = function (zosaId) {
            return backend.ServiceClientAuthenticationZosa
                .getItems(backend.ServiceClientContextZosa.instance, { items: [zosaId] })
                .then(function (response) {
                var _a;
                var resultPromise = bluebird.resolve(undefined);
                if (((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.elements) && response.data.elements.length == 1) {
                    var zosaItem_1 = response.data.elements[0];
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getItemById returns " + JSON.stringify(zosaItem_1) + " for " + zosaId, ApplicationClient_1.TAG)); });
                    if (zosaItem_1) {
                        switch (zosaItem_1.zosaType) {
                            case backend.zosaStatic.ZOSA_TYPE_CHANNEL_ITEM:
                                resultPromise = ApplicationClient_1.channelManagement.getChannelByZosaId(zosaItem_1.zosaId);
                                break;
                            case backend.zosaStatic.ZOSA_TYPE_PROGRAM_ITEM:
                                resultPromise = ApplicationClient_1.programManagement
                                    .getPrograms({ itemFields: ["long"], programs: [zosaItem_1.zosaId] })
                                    .then(function (response) { return response.getItem(zosaItem_1.zosaId); });
                                break;
                            case backend.zosaStatic.ZOSA_TYPE_RECORDING_ITEM:
                                resultPromise = ApplicationClient_1.recordingManagement
                                    .getRecordings({ itemFields: ["long"], recordings: [zosaItem_1.zosaId], serviceProvider: null })
                                    .then(function (response) { return response.getItem(zosaItem_1.zosaId); });
                                break;
                            case backend.zosaStatic.ZOSA_TYPE_VAS_ITEM:
                                resultPromise = ApplicationClient_1.vasManagement
                                    .getVasItems({ itemFields: ["long"], serviceProvider: null, vasItems: [zosaItem_1.zosaId] })
                                    .then(function (response) { return response.getItem(zosaItem_1.zosaId); });
                                break;
                        }
                    }
                }
                return resultPromise;
            });
        };
        var ApplicationClient_1;
        ApplicationClient.amazon = applicationclient_amazon_1.Amazon;
        ApplicationClient.disney = applicationclient_disney_1.Disney;
        ApplicationClient.app = applicationclient_app_1.ZacApp;
        ApplicationClient.appManagement = applicationclient_appmanagement_1.AppManagement;
        ApplicationClient.authMan = applicationclient_authman_1.ZacAuthenticationManager;
        ApplicationClient.bandwidthManagement = applicationclient_bandwidthmanagement_1.BandwidthManagement;
        ApplicationClient.bluetooth = applicationclient_bluetooth_1.Bluetooth;
        ApplicationClient.channelManagement = applicationclient_channelmanagement_1.ChannelManagement;
        ApplicationClient.contentManagement = applicationclient_contentmanagement_1.ContentManagement;
        ApplicationClient.deviceManagement = applicationclient_devicemanagement_1.DeviceManagement;
        ApplicationClient.events = applicationclient_eventmanagement_1.EventManagement;
        ApplicationClient.frontDisplay = applicationclient_frontdisplay_1.FrontDisplay;
        ApplicationClient.frontendManager = applicationclient_frontendmanager_1.FrontendManager;
        ApplicationClient.instrumentationManagement = applicationclient_instrumentation_1.InstrumentationManagement;
        ApplicationClient.netflix = applicationclient_netflix_1.Netflix;
        ApplicationClient.network = applicationclient_network_1.Network;
        ApplicationClient.outdoor = applicationclient_outdoor_1.OutdoorUnitDb;
        ApplicationClient.outputs = applicationclient_outputs_1.Outputs;
        ApplicationClient.parentalControlManagement = applicationclient_parentalcontrolmanagement_1.ParentalControlManagement;
        ApplicationClient.personDetails = applicationclient_persondetails_1.PersonDetails;
        ApplicationClient.playbackHistory = applicationclient_playbackhistory_1.PlaybackHistory;
        ApplicationClient.powerManagement = applicationclient_powermanagement_1.PowerManagement;
        ApplicationClient.programManagement = applicationclient_programmanagement_1.ProgramManagement;
        ApplicationClient.recommendation = applicationclient_recommendation_1.Recommendation;
        ApplicationClient.recordingManagement = applicationclient_recordingmanagement_1.RecordingManagement;
        ApplicationClient.report = applicationclient_report_1.Report;
        ApplicationClient.satellite = applicationclient_satellite_1.Satellite;
        ApplicationClient.search = applicationclient_search_1.Search;
        ApplicationClient.searchHistory = applicationclient_searchhistory_1.SearchHistory;
        ApplicationClient.settings = applicationclient_settings_1.Settings;
        ApplicationClient.softwareUpgrade = applicationclient_softwareupgrade_1.SoftwareUpgrade;
        ApplicationClient.storageManagement = applicationclient_storagemanagement_1.StorageManagement;
        ApplicationClient.system = applicationclient_system_1.System;
        ApplicationClient.systemInformation = applicationclient_systeminformation_1.SystemInformation;
        ApplicationClient.traceLog = applicationclient_tracelog_1.TraceLog;
        ApplicationClient.userStorage = applicationclient_userstorage_1.UserStorage;
        ApplicationClient.vasManagement = applicationclient_vasmanagement_1.VasManagement;
        ApplicationClient.vodManagement = applicationclient_vodmanagement_1.VodManagement;
        ApplicationClient.volumeControl = applicationclient_volumecontrol_1.VolumeControl;
        ApplicationClient.youtube = applicationclient_youtube_1.Youtube;
        ApplicationClient.voicehistory = applicationclient_voicehistory_1.VoiceHistory;
        ApplicationClient.tds = applicationclient_tds_1.Tds;
        ApplicationClient.usageTracking = applicationclient_usagetracking_1.UsageTracking;
        ApplicationClient.subscriberInfo = applicationclient_subscriberinfo_1.SubscriberInfo;
        ApplicationClient.performance = applicationclient_performance_1.Performance;
        ApplicationClient = ApplicationClient_1 = __decorate([
            public_1.logTag()
        ], ApplicationClient);
        return ApplicationClient;
    }());
    exports.ApplicationClient = ApplicationClient;
});
//# sourceMappingURL=applicationclient.js.map