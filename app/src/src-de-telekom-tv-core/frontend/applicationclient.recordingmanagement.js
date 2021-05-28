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
define(["require", "exports", "rxjs/operators", "rxjs", "bluebird", "src/src-de-telekom/public", "underscore", "../backend/public", "../common/extensions", "../common/public", "./applicationclient", "./applicationclient.devicemanagement"], function (require, exports, operators_1, rxjs_1, bluebird, public_1, _, backend, extensions_1, public_2, applicationclient_1, applicationclient_devicemanagement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RecordingManagement = exports.RecordingNoMasterError = exports.MasterStbPreferredStreamQuality = exports.RecordingStorageOption = exports.RecordingQuality = exports.RecordingType = void 0;
    var RecordingType;
    (function (RecordingType) {
        RecordingType[RecordingType["single"] = 0] = "single";
        RecordingType[RecordingType["series_Selection_All"] = 1] = "series_Selection_All";
        RecordingType[RecordingType["series_Selection_Time"] = 2] = "series_Selection_Time";
        RecordingType[RecordingType["series_Selection_Current_or_Newer_Season"] = 3] = "series_Selection_Current_or_Newer_Season";
    })(RecordingType = exports.RecordingType || (exports.RecordingType = {}));
    var RecordingQuality;
    (function (RecordingQuality) {
        RecordingQuality[RecordingQuality["alwaysSd"] = 0] = "alwaysSd";
        RecordingQuality[RecordingQuality["bestQualityOfMasterStb"] = 1] = "bestQualityOfMasterStb";
    })(RecordingQuality = exports.RecordingQuality || (exports.RecordingQuality = {}));
    var RecordingStorageOption;
    (function (RecordingStorageOption) {
        RecordingStorageOption[RecordingStorageOption["untilHddIsFull"] = 0] = "untilHddIsFull";
        RecordingStorageOption[RecordingStorageOption["newest_10_Episodes"] = 1] = "newest_10_Episodes";
        RecordingStorageOption[RecordingStorageOption["newest_5_Episodes"] = 2] = "newest_5_Episodes";
        RecordingStorageOption[RecordingStorageOption["untilManualDelete"] = 3] = "untilManualDelete";
    })(RecordingStorageOption = exports.RecordingStorageOption || (exports.RecordingStorageOption = {}));
    var MasterStbPreferredStreamQuality;
    (function (MasterStbPreferredStreamQuality) {
        MasterStbPreferredStreamQuality["UNKNOWN"] = "UNKNOWN";
        MasterStbPreferredStreamQuality["SD"] = "SD";
        MasterStbPreferredStreamQuality["HD"] = "HD";
        MasterStbPreferredStreamQuality["UHD"] = "UHD";
    })(MasterStbPreferredStreamQuality = exports.MasterStbPreferredStreamQuality || (exports.MasterStbPreferredStreamQuality = {}));
    var DeleteAlienRecordingsError = (function (_super) {
        __extends(DeleteAlienRecordingsError, _super);
        function DeleteAlienRecordingsError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x642;
            return _this;
        }
        return DeleteAlienRecordingsError;
    }(public_1.BaseError));
    var RecordingNoMasterError = (function (_super) {
        __extends(RecordingNoMasterError, _super);
        function RecordingNoMasterError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x625;
            return _this;
        }
        return RecordingNoMasterError;
    }(public_1.BaseError));
    exports.RecordingNoMasterError = RecordingNoMasterError;
    var RecordingConflictDataError = (function (_super) {
        __extends(RecordingConflictDataError, _super);
        function RecordingConflictDataError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x62C;
            return _this;
        }
        return RecordingConflictDataError;
    }(public_1.BaseError));
    var FrontendModelMapper = (function () {
        function FrontendModelMapper() {
        }
        FrontendModelMapper_1 = FrontendModelMapper;
        FrontendModelMapper.GetGlobalRecordingSettingsFromSubscriberInfo = function (subInfo) {
            var data = subInfo ? {
                directRecordingEnabled: FrontendModelMapper_1.getDirectRecordingEnabled(subInfo.RecCfgOneClickEnable, false),
                recordingType: FrontendModelMapper_1.getRecordingType(subInfo.RecCfgSingleOrSeries, subInfo.RecCfgSeriesTimeMode, RecordingType.series_Selection_All),
                quality: FrontendModelMapper_1.getQuality(subInfo.RecCfgDefinition, RecordingQuality.bestQualityOfMasterStb),
                storageOption: FrontendModelMapper_1.getStorageOption(subInfo.RecCfgKeepMode, RecordingStorageOption.untilHddIsFull),
                recordToStb: true,
                recordToCloud: FrontendModelMapper_1.getRecordToCloud(subInfo.RecCfgPVRType, false),
                timeBufferMinutesBefore: FrontendModelMapper_1.getTimeBufferMinutesBefore(subInfo.RecCfgPrePadding, RecordingManagement.RecordingPrePaddingDefault),
                timeBufferMinutesAfter: FrontendModelMapper_1.getTimeBufferMinutesAfter(subInfo.RecCfgPostPadding, RecordingManagement.RecordingPostPaddingDefault)
            } : {
                directRecordingEnabled: false,
                recordingType: RecordingType.series_Selection_All,
                quality: RecordingQuality.bestQualityOfMasterStb,
                storageOption: RecordingStorageOption.untilHddIsFull,
                recordToStb: true,
                recordToCloud: false,
                timeBufferMinutesBefore: RecordingManagement.RecordingPrePaddingDefault,
                timeBufferMinutesAfter: RecordingManagement.RecordingPostPaddingDefault
            };
            return data;
        };
        FrontendModelMapper.GetSubscriberInfoFromGlobalRecordingSettings = function (subInfo, globalRecordingSettings) {
            var _a, _b;
            return __assign(__assign({}, subInfo), { RecCfgSeriesTimeMode: FrontendModelMapper_1.getSeriesTimeMode(globalRecordingSettings.recordingType), RecCfgKeepMode: FrontendModelMapper_1.getKeepMode(globalRecordingSettings.storageOption), RecCfgPVRType: FrontendModelMapper_1.getPvrType(globalRecordingSettings.recordToStb, globalRecordingSettings.recordToCloud), RecCfgOneClickEnable: globalRecordingSettings.directRecordingEnabled ? 1 : 0, RecCfgSingleOrSeries: globalRecordingSettings.recordingType == RecordingType.single ? "Single" : "Series", RecCfgDefinition: globalRecordingSettings.quality == RecordingQuality.bestQualityOfMasterStb ? 1 : 0, RecCfgPrePadding: (_a = globalRecordingSettings.timeBufferMinutesBefore) !== null && _a !== void 0 ? _a : RecordingManagement.RecordingPrePaddingDefault, RecCfgPostPadding: (_b = globalRecordingSettings.timeBufferMinutesAfter) !== null && _b !== void 0 ? _b : RecordingManagement.RecordingPostPaddingDefault });
        };
        FrontendModelMapper.getRecordToCloud = function (RecCfgPVRType, defaultValue) {
            return public_1.Guard.isUndefined(RecCfgPVRType) || RecCfgPVRType == null || isNaN(RecCfgPVRType) || RecCfgPVRType == 0 ? defaultValue :
                RecCfgPVRType == 2 || RecCfgPVRType == 3;
        };
        FrontendModelMapper.getTimeBufferMinutesBefore = function (RecCfgPrePadding, defaultValue) {
            return public_1.Guard.isUndefined(RecCfgPrePadding) || RecCfgPrePadding == null || isNaN(RecCfgPrePadding) || RecordingManagement.ValidTimesRecordingBufferBefore.indexOf(RecCfgPrePadding) < 0 ? defaultValue : RecCfgPrePadding;
        };
        FrontendModelMapper.getTimeBufferMinutesAfter = function (RecCfgPostPadding, defaultValue) {
            return public_1.Guard.isUndefined(RecCfgPostPadding) || RecCfgPostPadding == null || isNaN(RecCfgPostPadding) || RecordingManagement.ValidTimesRecordingBufferAfter.indexOf(RecCfgPostPadding) < 0 ? defaultValue : RecCfgPostPadding;
        };
        FrontendModelMapper.getDirectRecordingEnabled = function (RecCfgOneClickEnable, defaultValue) {
            return public_1.Guard.isUndefined(RecCfgOneClickEnable) || RecCfgOneClickEnable == null ? defaultValue : RecCfgOneClickEnable == 1;
        };
        FrontendModelMapper.getRecordingType = function (RecCfgSingleOrSeries, RecCfgSeriesTimeMode, defaultValue) {
            if (public_1.Guard.isUndefined(RecCfgSingleOrSeries) || RecCfgSingleOrSeries == null)
                return defaultValue;
            if (RecCfgSingleOrSeries.indexOf("Single") >= 0)
                return RecordingType.single;
            switch (RecCfgSeriesTimeMode) {
                case 0: return RecordingType.series_Selection_All;
                case 1: return RecordingType.series_Selection_Current_or_Newer_Season;
                case 2: return RecordingType.series_Selection_Time;
            }
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Invalid RecCfgSeriesTimeMode enum value " + RecCfgSeriesTimeMode + " - set to default.", RecordingManagement.TAG)); });
            return defaultValue;
        };
        FrontendModelMapper.getQuality = function (RecCfgDefinition, defaultValue) {
            if (public_1.Guard.isUndefined(RecCfgDefinition) || RecCfgDefinition == null)
                return defaultValue;
            switch (RecCfgDefinition) {
                case 1: return RecordingQuality.bestQualityOfMasterStb;
                case 0: return RecordingQuality.alwaysSd;
            }
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Invalid RecCfgDefinition enum value " + RecCfgDefinition + " - set to default.", RecordingManagement.TAG)); });
            return defaultValue;
        };
        FrontendModelMapper.getStorageOption = function (RecCfgKeepMode, defaultValue) {
            if (public_1.Guard.isUndefined(RecCfgKeepMode) || RecCfgKeepMode == null)
                return defaultValue;
            switch (RecCfgKeepMode) {
                case 5: return RecordingStorageOption.newest_5_Episodes;
                case 10: return RecordingStorageOption.newest_10_Episodes;
                case 0: return RecordingStorageOption.untilHddIsFull;
                case 1: return RecordingStorageOption.untilManualDelete;
                default: return defaultValue;
            }
        };
        FrontendModelMapper.getKeepMode = function (storageOption) {
            switch (storageOption) {
                case RecordingStorageOption.newest_5_Episodes: return 5;
                case RecordingStorageOption.newest_10_Episodes: return 10;
                case RecordingStorageOption.untilHddIsFull: return 0;
                case RecordingStorageOption.untilManualDelete: return 1;
                default: return 0;
            }
        };
        FrontendModelMapper.getSeriesTimeMode = function (recordingType) {
            if (recordingType == RecordingType.single)
                return undefined;
            switch (recordingType) {
                case RecordingType.series_Selection_All: return 0;
                case RecordingType.series_Selection_Current_or_Newer_Season: return 1;
                case RecordingType.series_Selection_Time: return 2;
            }
            return 0;
        };
        FrontendModelMapper.getPvrType = function (recordToStb, recordToCloud) {
            if (recordToStb && recordToCloud) {
                return 3;
            }
            if (recordToStb) {
                return 1;
            }
            if (recordToCloud) {
                return 2;
            }
            return 1;
        };
        var FrontendModelMapper_1;
        __decorate([
            public_1.log2(function () { return ({ name: FrontendModelMapper_1.TAG }); })
        ], FrontendModelMapper, "GetGlobalRecordingSettingsFromSubscriberInfo", null);
        FrontendModelMapper = FrontendModelMapper_1 = __decorate([
            public_1.logTag()
        ], FrontendModelMapper);
        return FrontendModelMapper;
    }());
    var RecordingManagement = (function () {
        function RecordingManagement() {
        }
        RecordingManagement_1 = RecordingManagement;
        RecordingManagement.getOnRecordingChangedObservable = function () {
            return backend.ServiceClientContextZosa.instance.serviceClientZosa.getOnRecordingChangedSubject().pipe(operators_1.delay(50));
        };
        RecordingManagement.getMasterStbSelectedStreamQuality = function () {
            return backend.ServiceClientAuthenticationZosa.getDTSubscriberInfo(backend.ServiceClientContextZosa.instance)
                .then(function (subscriberInfo) {
                var _a;
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("DTSubscriberInfo: " + JSON.stringify(subscriberInfo.data), RecordingManagement_1.TAG)); });
                if (public_1.Guard.isDefined((_a = subscriberInfo.data) === null || _a === void 0 ? void 0 : _a.DefaultPlayDefinition)) {
                    switch (subscriberInfo.data.DefaultPlayDefinition) {
                        case 2:
                            return MasterStbPreferredStreamQuality.UHD;
                        case 1:
                            return MasterStbPreferredStreamQuality.HD;
                        case 0:
                            return MasterStbPreferredStreamQuality.SD;
                    }
                }
                return MasterStbPreferredStreamQuality.UNKNOWN;
            });
        };
        RecordingManagement.getGlobalRecordingSettings = function () {
            return backend.ServiceClientAuthenticationZosa.getDTSubscriberInfo(backend.ServiceClientContextZosa.instance)
                .then(function (subscriberInfo) { return FrontendModelMapper.GetGlobalRecordingSettingsFromSubscriberInfo(subscriberInfo.data); });
        };
        RecordingManagement.setGlobalRecordingSettings = function (globalRecordingSettings) {
            return backend.ServiceClientAuthenticationZosa
                .getDTSubscriberInfo(backend.ServiceClientContextZosa.instance)
                .then(function (subscriberInfo) {
                return backend.ServiceClientAuthenticationZosa.setSubscriberInfo(backend.ServiceClientContextZosa.instance, FrontendModelMapper.GetSubscriberInfoFromGlobalRecordingSettings(subscriberInfo.data, globalRecordingSettings));
            });
        };
        RecordingManagement.deleteRecordings = function (parameters) {
            return RecordingManagement_1.removeRecordings(parameters);
        };
        RecordingManagement.getAssociatedRecordings = function (refRecording, onlyShowMoreRecentItems) {
            if (onlyShowMoreRecentItems === void 0) { onlyShowMoreRecentItems = false; }
            if (!refRecording.parentRecordingIds || refRecording.parentRecordingIds.length == 0) {
                return bluebird.resolve([]);
            }
            return applicationclient_1.ApplicationClient.recordingManagement.getRecordingsByState(backend.zosaStatic.RECORDING_STATE_COMPLETE |
                backend.zosaStatic.RECORDING_STATE_PARTIALLY_COMPLETE |
                backend.zosaStatic.RECORDING_STATE_ONGOING)
                .then(function (allRecordings) { return allRecordings
                .filter(function (recording) { return recording.zosaId !== refRecording.zosaId && (!onlyShowMoreRecentItems || RecordingManagement_1.recordingIsMoreRecent(recording, refRecording)); })
                .filter(function (recording) { return RecordingManagement_1.getOverlappingParentRecordingIds(recording, refRecording).length > 0; })
                .sort(RecordingManagement_1.sortEpisodeSeasonAsc); });
        };
        RecordingManagement.recordingIsMoreRecent = function (recording1, recording2) {
            if (public_1.Guard.isNumber(recording1.seasonNumber) &&
                public_1.Guard.isNumber(recording2.seasonNumber) &&
                public_1.Guard.isNumber(recording1.episodeNumber) &&
                public_1.Guard.isNumber(recording2.episodeNumber)) {
                return recording1.seasonNumber > recording2.seasonNumber ||
                    (recording1.seasonNumber == recording2.seasonNumber && recording1.episodeNumber > recording2.episodeNumber);
            }
            if (public_1.Guard.isNumber(recording1.seasonNumber) &&
                public_1.Guard.isNumber(recording2.seasonNumber)) {
                return recording1.seasonNumber > recording2.seasonNumber;
            }
            if (public_1.Guard.isNumber(recording1.episodeNumber) &&
                public_1.Guard.isNumber(recording2.episodeNumber)) {
                return recording1.episodeNumber > recording2.episodeNumber;
            }
            return recording1.startTime > recording2.startTime;
        };
        RecordingManagement.getOverlappingParentRecordingIds = function (recording1, recording2) {
            if (!recording1.parentRecordingIds || recording1.parentRecordingIds.length == 0 ||
                !recording2.parentRecordingIds || recording2.parentRecordingIds.length == 0) {
                return [];
            }
            return recording1.parentRecordingIds.filter(function (parentRecording1) { return (recording2 === null || recording2 === void 0 ? void 0 : recording2.parentRecordingIds) && recording2.parentRecordingIds.indexOf(parentRecording1) >= 0; });
        };
        RecordingManagement.deleteRecordingsByCriteria = function (parameters) {
            var deleteParameters = {
                serviceProvider: parameters.serviceProvider,
                recordings: []
            };
            return RecordingManagement_1.getRecordings({
                state: parameters.state,
                serviceProvider: parameters.serviceProvider
            }).then(function (recordings) {
                var childRecordings = recordings.filter(function (rec) { return rec.parentRecordingId == parameters.parentRecording; });
                deleteParameters.recordings = childRecordings.map(function (item) { return item.zosaId; });
                return RecordingManagement_1.removeRecordings(deleteParameters);
            });
        };
        RecordingManagement.getNextPlayableRecording = function (crecording) {
            var state = backend.zosaStatic.RECORDING_STATE_COMPLETE | backend.zosaStatic.RECORDING_STATE_PARTIALLY_COMPLETE | backend.zosaStatic.RECORDING_STATE_ONGOING;
            return RecordingManagement_1
                .getRecordingsByState(state, {
                itemFields: ["long"],
                serviceProvider: null
            })
                .then(function (recordings) {
                var sortedRecordings = recordings.sort(RecordingManagement_1.sortDateAsc);
                var recording = sortedRecordings.getItem(backend.convertToString(crecording));
                if (!recording || public_1.Guard.isUndefined(recording.parentRecordingId)) {
                    return null;
                }
                else {
                    var episodes = sortedRecordings.filter(function (item) { var _a; return (_a = item.parentRecordingIds) === null || _a === void 0 ? void 0 : _a.some(function (p) { var _a; return !!((_a = recording.parentRecordingIds) === null || _a === void 0 ? void 0 : _a.some(function (pp) { return pp == p; })); }); });
                    var newIndex = episodes.indexOf(recording);
                    newIndex++;
                    if (newIndex > episodes.length - 1) {
                        return null;
                    }
                    return episodes[newIndex];
                }
            });
        };
        RecordingManagement.getFirstUnwatchedEpisodeOfSerie = function (parentRecordingId) {
            if (!parentRecordingId) {
                return (bluebird.resolve(null));
            }
            return RecordingManagement_1
                .getRecordingsByState()
                .then(function (recordings) {
                var episodes = recordings.filter(function (item) {
                    return item.parentRecordingId == parentRecordingId &&
                        (item.dtExtensions.recordingState == backend.zosaStatic.RECORDING_STATE_ONGOING || item.dtExtensions.recordingState == backend.zosaStatic.RECORDING_STATE_COMPLETE || item.dtExtensions.recordingState == backend.zosaStatic.RECORDING_STATE_PARTIALLY_COMPLETE) &&
                        public_1.Guard.isDefined(item.lastPlaybackPosition) &&
                        item.duration &&
                        item.lastPlaybackPosition < item.duration * .9;
                });
                var sortedRecordings = episodes.sort(RecordingManagement_1.sortEpisodeSeasonAsc);
                if (sortedRecordings && sortedRecordings.length > 0) {
                    return sortedRecordings[0];
                }
                return null;
            });
        };
        RecordingManagement.getNextEpisodeOfSerie = function (crecording) {
            var state = backend.zosaStatic.RECORDING_STATE_COMPLETE | backend.zosaStatic.RECORDING_STATE_PARTIALLY_COMPLETE | backend.zosaStatic.RECORDING_STATE_ONGOING;
            return RecordingManagement_1
                .getRecordingsByState(state, {
                itemFields: ["long"],
                serviceProvider: null
            })
                .then(function (recordings) {
                var recording = recordings.getItem(backend.convertToString(crecording));
                if (!recording || public_1.Guard.isUndefined(recording.parentRecordingId)) {
                    return null;
                }
                else {
                    var episodes = recordings.filter(function (item) { var _a; return (_a = item.parentRecordingIds) === null || _a === void 0 ? void 0 : _a.some(function (p) { var _a; return !!((_a = recording.parentRecordingIds) === null || _a === void 0 ? void 0 : _a.some(function (pp) { return pp == p; })); }); });
                    var sortedRecordings = episodes.sort(RecordingManagement_1.sortEpisodeSeasonAsc);
                    var newIndex = sortedRecordings.indexOf(recording);
                    newIndex++;
                    if (newIndex > episodes.length - 1) {
                        return null;
                    }
                    return episodes[newIndex];
                }
            });
        };
        RecordingManagement.getStbRecordingResources = function () {
            return RecordingManagement_1.getRecordings()
                .then(function (recordings) {
                var result = recordings.filter(function (recording) { return (recording.recordingType == backend.zosaStatic.RECORDING_TYPE_CPVR || recording.recordingType == backend.zosaStatic.RECORDING_TYPE_NPVR_CPVR); });
                var recordingResources = {
                    completedRecordings: 0,
                    scheduledRecordings: 0,
                    completedRecordingsSizeKb: 0,
                    completedRecordingsDurationMs: 0,
                    scheduledRecordingsDurationMs: 0,
                    failedRecordings: 0,
                    offlineRecordings: 0
                };
                result
                    .forEach(function (recording) {
                    if (recording.dtExtensions.recordingState === backend.zosaStatic.RECORDING_STATE_SCHEDULED) {
                        recordingResources.scheduledRecordings++;
                        recordingResources.scheduledRecordingsDurationMs += Math.round(recording.duration ? recording.duration : recording.endTime - recording.startTime);
                    }
                    else if (recording.dtExtensions.recordingState === backend.zosaStatic.RECORDING_STATE_ONGOING ||
                        recording.dtExtensions.recordingState === backend.zosaStatic.RECORDING_STATE_PARTIALLY_COMPLETE ||
                        recording.dtExtensions.recordingState === backend.zosaStatic.RECORDING_STATE_COMPLETE) {
                        recordingResources.completedRecordings++;
                        recordingResources.completedRecordingsSizeKb += public_1.Guard.isNumber(recording.sizeKB) ? recording.sizeKB : 0;
                        recordingResources.completedRecordingsDurationMs += public_1.Guard.isNumber(recording.duration) ? Math.round(recording.duration) : 0;
                    }
                    else if (recording.dtExtensions.recordingState === backend.zosaStatic.RECORDING_STATE_FAILED) {
                        recordingResources.failedRecordings++;
                    }
                    else if (recording.dtExtensions.recordingState === backend.zosaStatic.RECORDING_STATE_OFFLINE) {
                        recordingResources.offlineRecordings++;
                    }
                });
                return recordingResources;
            });
        };
        RecordingManagement.getStbRecordingsSizeKb = function (deviceId) {
            var state = backend.zosaStatic.RECORDING_STATE_ONGOING | backend.zosaStatic.RECORDING_STATE_COMPLETE | backend.zosaStatic.RECORDING_STATE_PARTIALLY_COMPLETE;
            return RecordingManagement_1.getRecordingsForStbByState(deviceId, state)
                .then(function (result) {
                var sizeKb = 0;
                result.forEach(function (recording) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Recording " + recording.title + ", type: " + recording.recordingType + ", size: " + recording.sizeKB + " KB", RecordingManagement_1.TAG)); });
                    sizeKb += public_1.Guard.isNumber(recording.sizeKB) ? recording.sizeKB : 0;
                });
                return sizeKb;
            });
        };
        RecordingManagement.removeAllRecordings = function () {
            return RecordingManagement_1.getRecordings()
                .then(function (result) {
                var recordingIds = [];
                result.forEach(function (recording) {
                    recordingIds.push(recording);
                });
                return recordingIds;
            })
                .then(function (recordings) { return recordings && recordings.length > 0 ? { request: applicationclient_1.ApplicationClient.recordingManagement.removeRecordings({ recordings: (recordings.map(function (recording) { return recording.zosaId; })) }), length: recordings.length } : null; })
                .then(function (results) { return results ? results.request.then(function () { return results.length; }) : 0; });
        };
        RecordingManagement.getFailedRecordings = function () {
            return applicationclient_1.ApplicationClient.recordingManagement.getRecordings({ serviceProvider: null, state: backend.zosaStatic.RECORDING_STATE_FAILED });
        };
        RecordingManagement.removeAllFailedRecordings = function () {
            return RecordingManagement_1.getFailedRecordings()
                .then(function (recordings) { return recordings && recordings.length > 0 ? { request: applicationclient_1.ApplicationClient.recordingManagement.removeRecordings({ recordings: (recordings.map(function (recording) { return recording.zosaId; })) }), length: recordings.length } : null; })
                .then(function (results) { return results ? results.request.then(function () { return results.length; }) : 0; });
        };
        RecordingManagement.removeAllOfflineRecordings = function () {
            return applicationclient_1.ApplicationClient.recordingManagement.getRecordings({ serviceProvider: null, state: backend.zosaStatic.RECORDING_STATE_OFFLINE })
                .then(function (recordings) { return recordings && recordings.length > 0 ? { request: applicationclient_1.ApplicationClient.recordingManagement.removeRecordings({ recordings: (recordings.map(function (recording) { return recording.zosaId; })) }), length: recordings.length } : null; })
                .then(function (results) { return results ? results.request.then(function () { return results.length; }) : 0; });
        };
        RecordingManagement.removeAllSeriesRecordings = function () {
            return RecordingManagement_1.getAllSeriesRecordings()
                .then(function (seriesRecordings) { return seriesRecordings && seriesRecordings.length > 0 ? seriesRecordings.map(function (seriesRecording) { return RecordingManagement_1.updateParentRecording({ recording: seriesRecording.zosaId, recurEndTime: new Date().valueOf() }); }) : null; })
                .then(function (requests) { return requests ? bluebird.all(requests).then(function () { return requests.length; }) : 0; });
        };
        RecordingManagement.deleteMasterStbRecordings = function () {
            var state = backend.zosaStatic.RECORDING_STATE_ONGOING | backend.zosaStatic.RECORDING_STATE_COMPLETE | backend.zosaStatic.RECORDING_STATE_PARTIALLY_COMPLETE;
            return RecordingManagement_1.getRecordingsByState(state)
                .then(function (recordings) { return recordings && recordings.length > 0 ? applicationclient_1.ApplicationClient.recordingManagement.deleteRecordings({ recordings: recordings.map(function (recording) { return recording.zosaId; }) }) : bluebird.resolve(null); });
        };
        RecordingManagement.getAllSeriesRecordings = function () {
            return RecordingManagement_1.getParentRecordings()
                .then(function (result) { return result.filter(function (rec) { return rec.parentType == backend.zosaStatic.PARENT_RECORDING_TYPE_SERIES; }); });
        };
        RecordingManagement.stopOngoingDVBRecordings = function () {
            return RecordingManagement_1.stopOngoingRecordings(function (result) { return result.filter(function (item) { return item.source == backend.zosaStatic.SOURCE_DVB; }); });
        };
        RecordingManagement.stopOngoingRecordings = function (filterFunc) {
            return RecordingManagement_1.getRecordingsByState(backend.zosaStatic.RECORDING_STATE_ONGOING)
                .then(function (result) {
                var recordingsToStop = filterFunc ? filterFunc(result) : result.toArray();
                return recordingsToStop.length == 0 ? undefined : RecordingManagement_1.stopRecordingWithIndex(recordingsToStop);
            });
        };
        RecordingManagement.stopRecordingWithIndex = function (recordings, index) {
            if (index === void 0) { index = 0; }
            return RecordingManagement_1.stopRecording(recordings[index])
                .then(function () {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Successfully stopped recording id: " + recordings[index].zosaId, RecordingManagement_1.TAG)); });
                return index < recordings.length - 1 ? RecordingManagement_1.stopRecordingWithIndex(recordings, index + 1) : bluebird.resolve();
            });
        };
        RecordingManagement.getOngoingAndScheduledRecordings = function (deviceId, scheduledRecordingsThresholdMs) {
            var state = backend.zosaStatic.RECORDING_STATE_ONGOING | backend.zosaStatic.RECORDING_STATE_SCHEDULED;
            return RecordingManagement_1.getRecordingsForStbByState(deviceId, state)
                .then(function (result) {
                var ongoingRecordings = result.filter(function (recordingItem) { return recordingItem.dtExtensions.recordingState == backend.zosaStatic.RECORDING_STATE_ONGOING; });
                var scheduledRecordings = result.filter(function (recordingItem) { return (recordingItem.dtExtensions.recordingState == backend.zosaStatic.RECORDING_STATE_SCHEDULED) &&
                    (recordingItem.startTime > new Date().getTime()) &&
                    (recordingItem.startTime - new Date().getTime() <= scheduledRecordingsThresholdMs); });
                RecordingManagement_1.logOngoingAndScheduledRecordings(ongoingRecordings, scheduledRecordings);
                return {
                    ongoingRecordings: ongoingRecordings,
                    scheduledRecordings: scheduledRecordings,
                    hasOngoingRecordings: ongoingRecordings != null && ongoingRecordings.length > 0,
                    hasScheduledRecordings: scheduledRecordings != null && scheduledRecordings.length > 0
                };
            });
        };
        RecordingManagement.getRecordingsByProgramId = function (programId) {
            return RecordingManagement_1
                .getRecordingsByProgramIds([programId])
                .then(function (response) { return response.get(programId) || []; });
        };
        RecordingManagement.getRecordingsByProgramIds = function (programIds) {
            var recordingState = backend.zosaStatic.RECORDING_STATE_COMPLETE | backend.zosaStatic.RECORDING_STATE_ONGOING | backend.zosaStatic.RECORDING_STATE_PARTIALLY_COMPLETE | backend.zosaStatic.RECORDING_STATE_SCHEDULED;
            return RecordingManagement_1
                .getRecordingsByState(recordingState)
                .then(function (response) {
                var result = new Map();
                var _loop_1 = function (programId) {
                    result.set(programId, response.filter(function (value) { return (value.programId == programId) && (value.recordingType == backend.zosaStatic.RECORDING_TYPE_CPVR || value.recordingType == backend.zosaStatic.RECORDING_TYPE_NPVR_CPVR); }));
                };
                for (var _i = 0, programIds_1 = programIds; _i < programIds_1.length; _i++) {
                    var programId = programIds_1[_i];
                    _loop_1(programId);
                }
                return result;
            });
        };
        RecordingManagement.stopRecording = function (recording) {
            var _this = this;
            var timeoutMs = 20000;
            return new bluebird(function (resolve, reject) {
                var unsubscribe = new rxjs_1.Subject();
                _this.getOnRecordingChangedObservable()
                    .pipe(rxjs_1.pipe(operators_1.timeout(timeoutMs), operators_1.mergeMap(function (recordingChangedItem) { return RecordingManagement_1.getRecordingsByState(backend.zosaStatic.RECORDING_STATE_ONGOING); }), operators_1.mergeMap(function (items) { return rxjs_1.of({ dataFound: public_1.Guard.isDefined(items.getItem(recording.zosaId)), hasError: false }); }), operators_1.catchError(function (_) { return rxjs_1.of({ dataFound: false, hasError: true }); })), operators_1.takeUntil(unsubscribe))
                    .subscribe(function (result) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("stopRecording dataFound:" + result.dataFound + " hasError:" + result.hasError, RecordingManagement_1.TAG)); });
                    if (result.hasError) {
                        reject(new Error("Recording " + recording.zosaId + " did not stop within " + timeoutMs + " ms."));
                    }
                    else {
                        if (!result.dataFound) {
                            unsubscribe.next();
                            unsubscribe.complete();
                            resolve();
                        }
                    }
                });
                RecordingManagement_1.updateRecording({ endMargin: 0, endTime: new Date(), recording: recording.zosaId })
                    .catch(function (error) {
                    unsubscribe.next();
                    unsubscribe.complete();
                    reject(error);
                });
            });
        };
        RecordingManagement.deleteMarkedRecordingConflicts = function (parameters) {
            return backend.ServiceClientAuthenticationZosa.deleteMarkedRecordingConflicts(backend.ServiceClientContextZosa.instance, parameters);
        };
        RecordingManagement.getNextRecordingConflict = function (parameters) {
            var _this = this;
            return backend.ServiceClientAuthenticationZosa.getNextRecordingConflict(backend.ServiceClientContextZosa.instance, parameters)
                .then(function (response) {
                if (!response.data.conflictGroup || !response.data.conflictGroup.resolutionOptions || response.data.conflictGroup.resolutionOptions.length == 0) {
                    throw new RecordingConflictDataError("The recording conflict does not contain any resolution options.");
                }
                else {
                    var allRecordings_1 = [];
                    response.data.conflictGroup.resolutionOptions.forEach(function (resolutionOption) {
                        return resolutionOption.recordings.forEach(function (recording) {
                            return allRecordings_1.push(recording);
                        });
                    });
                    return _this.extendRecordingConflictResponse(allRecordings_1)
                        .then(function () { return response; });
                }
            });
        };
        RecordingManagement.extendRecordingConflictResponse = function (recordings) {
            return this.extendRecordingConflict(recordings, undefined);
        };
        RecordingManagement.extendRecordingConflict = function (recordings, recordingOptions) {
            if (recordings && recordings.length > 0) {
                var programIDs = recordings.map(function (recording) { return recording.programId; }).filter(public_1.Guard.isDefined);
                return bluebird.allSettled([
                    applicationclient_1.ApplicationClient.channelManagement.getCompleteChannelList(),
                    applicationclient_1.ApplicationClient.programManagement.getPrograms({ programs: programIDs })
                ])
                    .then(function (response) {
                    var channels = response[0].isFulfilled() ? response[0].value() : undefined;
                    var programs = response[1].isFulfilled() ? response[1].value() : undefined;
                    RecordingManagement_1.updateRecordings(recordings, channels, programs);
                    if (recordingOptions && recordingOptions.length > 0) {
                        RecordingManagement_1.updateSchedulingOptions(recordingOptions, channels);
                    }
                });
            }
            else if (recordingOptions) {
                return applicationclient_1.ApplicationClient.channelManagement.getCompleteChannelList()
                    .then(function (channels) { return RecordingManagement_1.updateSchedulingOptions(recordingOptions, channels); });
            }
            return bluebird.resolve();
        };
        RecordingManagement.updateRecordings = function (recordings, channels, programs) {
            recordings.forEach(function (recording) { return extensions_1.ZosaRecordingItemExtensions.update(recording, programs && recording.programId ? programs.getItem(recording.programId) : undefined, channels === null || channels === void 0 ? void 0 : channels.getItem(recording.channelId)); });
        };
        RecordingManagement.updateSchedulingOptions = function (schedulingOptions, channels) {
            schedulingOptions.forEach(function (item) { return item.program && public_2.ZosaProgramItemExtensions.update(item.program, channels === null || channels === void 0 ? void 0 : channels.getItem(item.program.channelId)); });
        };
        RecordingManagement.getParentRecordingsForStb = function (deviceId, parameters) {
            if (parameters === void 0) { parameters = { itemFields: ["long"], serviceProvider: null }; }
            var parentRecordingPromise = backend.ServiceClientAuthenticationZosa.getParentRecordings(backend.ServiceClientContextZosa.instance, parameters);
            var channelsPromise = applicationclient_1.ApplicationClient.channelManagement.getCompleteChannelList();
            return bluebird.allSettled([parentRecordingPromise, channelsPromise])
                .then(function (response) {
                var parentRecordings = response[0].isFulfilled() ? (response[0].value() && response[0].value().data && response[0].value().data.elements ? response[0].value().data.elements.filter(function (item) { return item.deviceId == deviceId || !item.deviceId; }) : undefined) : undefined;
                var channels = response[1].isFulfilled() ? response[1].value() : undefined;
                var data = parentRecordings === null || parentRecordings === void 0 ? void 0 : parentRecordings.filter(function (recording) { return recording.recordingType == backend.zosaStatic.RECORDING_TYPE_CPVR || recording.recordingType == backend.zosaStatic.RECORDING_TYPE_NPVR_CPVR; });
                var result;
                if (data) {
                    result = data.map(function (recording) { return extensions_1.ZosaParentRecordingItemExtensions.update(recording, channels === null || channels === void 0 ? void 0 : channels.getItem(recording.channelId)); });
                }
                return new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); }, result);
            });
        };
        RecordingManagement.getMasterClientRecordingSpaceInfo = function () {
            return applicationclient_devicemanagement_1.DeviceManagement.getMasterStbId()
                .then(function (masterStbId) { return !masterStbId ? bluebird.resolve(null) : RecordingManagement_1.getRecordingSpaceInfo(masterStbId); });
        };
        RecordingManagement.getRecordingSpaceInfo = function (deviceId) {
            var params = {
                serviceProvider: null,
                recordingSpaceType: [backend.zosaStatic.RECORDING_SPACE_TYPE_CLIENT],
                devices: [deviceId]
            };
            return backend.ServiceClientAuthenticationZosa.getRecordingSpaceInfo(backend.ServiceClientContextZosa.instance, params);
        };
        RecordingManagement.getOngoingDvbRecordings = function () {
            return RecordingManagement_1.getRecordingsByState(backend.zosaStatic.RECORDING_STATE_ONGOING)
                .then(function (recordingList) { return recordingList.filter(function (item) { return ((item.dtExtensions.isActiveRecording || item.dtExtensions.isActiveSeriesRecording) && item.source == backend.zosaStatic.SOURCE_DVB); }); })
                .then(function (filterResult) { return filterResult && filterResult.length > 0 ? filterResult : undefined; });
        };
        RecordingManagement.getRecordingsByState = function (state, parameters) {
            if (state === void 0) { state = backend.zosaStatic.RECORDING_STATE_COMPLETE | backend.zosaStatic.RECORDING_STATE_ONGOING | backend.zosaStatic.RECORDING_STATE_PARTIALLY_COMPLETE | backend.zosaStatic.RECORDING_STATE_SCHEDULED; }
            if (parameters === void 0) { parameters = { itemFields: ["long"], serviceProvider: null }; }
            var allRecordingsState = backend.zosaStatic.RECORDING_STATE_COMPLETE | backend.zosaStatic.RECORDING_STATE_ONGOING | backend.zosaStatic.RECORDING_STATE_PARTIALLY_COMPLETE | backend.zosaStatic.RECORDING_STATE_SCHEDULED;
            parameters.state = ((state & backend.zosaStatic.RECORDING_STATE_COMPLETE) || (state & backend.zosaStatic.RECORDING_STATE_ONGOING)
                || (state & backend.zosaStatic.RECORDING_STATE_PARTIALLY_COMPLETE) || (state & backend.zosaStatic.RECORDING_STATE_SCHEDULED)) ?
                allRecordingsState :
                parameters.state = state;
            return RecordingManagement_1.getRecordings(parameters)
                .then(function (recordings) {
                var data = recordings.filter(function (recording) { return (recording.dtExtensions.recordingState & state) && (recording.recordingType == backend.zosaStatic.RECORDING_TYPE_CPVR || recording.recordingType == backend.zosaStatic.RECORDING_TYPE_NPVR_CPVR); });
                return new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); }, data);
            });
        };
        RecordingManagement.getRecordingsForStbByState = function (masterStbId, state, parameters) {
            if (parameters === void 0) { parameters = { itemFields: ["long"], serviceProvider: null }; }
            var allRecordingsState = backend.zosaStatic.RECORDING_STATE_COMPLETE | backend.zosaStatic.RECORDING_STATE_ONGOING | backend.zosaStatic.RECORDING_STATE_PARTIALLY_COMPLETE | backend.zosaStatic.RECORDING_STATE_SCHEDULED;
            parameters.state = ((state & backend.zosaStatic.RECORDING_STATE_COMPLETE) || (state & backend.zosaStatic.RECORDING_STATE_ONGOING)
                || (state & backend.zosaStatic.RECORDING_STATE_PARTIALLY_COMPLETE) || (state & backend.zosaStatic.RECORDING_STATE_SCHEDULED)) ?
                allRecordingsState :
                parameters.state = state;
            return RecordingManagement_1.getRecordingsForStb(masterStbId, parameters)
                .then(function (recordings) {
                var data = recordings.filter(function (recording) { return (recording.dtExtensions.recordingState & state) && (recording.recordingType == backend.zosaStatic.RECORDING_TYPE_CPVR || recording.recordingType == backend.zosaStatic.RECORDING_TYPE_NPVR_CPVR); });
                return new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); }, data);
            });
        };
        RecordingManagement.getChildRecordings = function (parentRecordingId) {
            var parameters = { itemFields: ["long"], parentRecording: parentRecordingId, serviceProvider: null };
            return applicationclient_devicemanagement_1.DeviceManagement.getMasterStbId()
                .then(function (masterStbId) { return masterStbId ? RecordingManagement_1.getRecordingsForStb(masterStbId, parameters) :
                bluebird.resolve(new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); })); });
        };
        RecordingManagement.getRecordings = function (parameters) {
            if (parameters === void 0) { parameters = { itemFields: ["long"], serviceProvider: null }; }
            return applicationclient_devicemanagement_1.DeviceManagement.getMasterStbId()
                .then(function (masterStbId) { return masterStbId ? RecordingManagement_1.getRecordingsForStb(masterStbId, parameters) :
                bluebird.resolve(new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); })); });
        };
        RecordingManagement.getParentRecordings = function (parameters) {
            if (parameters === void 0) { parameters = { itemFields: ["long"], serviceProvider: null }; }
            return applicationclient_devicemanagement_1.DeviceManagement.getMasterStbId()
                .then(function (masterStbId) { return masterStbId ? RecordingManagement_1.getParentRecordingsForStb(masterStbId, parameters) :
                bluebird.resolve(new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); })); });
        };
        RecordingManagement.getRecordingsByIdForStb = function (deviceId, zosaId) {
            var parameters = { itemFields: ["long"], serviceProvider: null, recordings: [zosaId] };
            return this.getRecordingsForStb(deviceId, parameters)
                .then(function (response) { return response.getItem(zosaId); });
        };
        RecordingManagement.getRecordingsForStb = function (deviceId, parameters) {
            if (parameters === void 0) { parameters = { itemFields: ["long"], serviceProvider: null }; }
            parameters.devices = [deviceId];
            return backend.ServiceClientAuthenticationZosa.getRecordings(backend.ServiceClientContextZosa.instance, parameters)
                .then(function (response) {
                var programIDs = response.data.elements.map(function (recording) { return recording.programId; }).filter(public_1.Guard.isDefined);
                var channelsPromise = applicationclient_1.ApplicationClient.channelManagement.getCompleteChannelList();
                var programsPromise = applicationclient_1.ApplicationClient.programManagement.getPrograms({ programs: programIDs });
                return bluebird.allSettled([bluebird.resolve(response), channelsPromise, programsPromise]);
            })
                .then(function (response) {
                var _a;
                var recordings = response[0].isFulfilled() ? response[0].value() : undefined;
                var channels = response[1].isFulfilled() ? response[1].value() : undefined;
                var programs = response[2].isFulfilled() ? response[2].value() : undefined;
                var result;
                if ((_a = recordings === null || recordings === void 0 ? void 0 : recordings.data) === null || _a === void 0 ? void 0 : _a.elements) {
                    result = recordings.data.elements.map(function (recording) { return extensions_1.ZosaRecordingItemExtensions.update(recording, programs === null || programs === void 0 ? void 0 : programs.getItem(recording.programId ? recording.programId : ""), channels === null || channels === void 0 ? void 0 : channels.getItem(recording.channelId)); });
                }
                return new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); }, result);
            });
        };
        RecordingManagement.removeRecordings = function (parameters) {
            return backend.ServiceClientAuthenticationZosa.removeRecordings(backend.ServiceClientContextZosa.instance, parameters)
                .then(function (response) {
                RecordingManagement_1.getOnRecordingChangedObservable()
                    .pipe(operators_1.take(1), operators_1.timeout(RecordingManagement_1.RecordingChangedTimeOutMs)).subscribe({
                    error: function () { return public_1.Logger.warn(function (log) { return log(public_1.LogMsg("removeRecordings timeout on waiting for recording changed", RecordingManagement_1.TAG)); }); },
                });
                return response.data;
            });
        };
        RecordingManagement.scheduleIntervalRecording = function (parameters) {
            var _this = this;
            return applicationclient_devicemanagement_1.DeviceManagement.getMasterStbId()
                .then(function (masterStbId) {
                if (!masterStbId)
                    return bluebird.reject(new RecordingNoMasterError("No Master STB defined"));
                parameters.device = masterStbId;
                return backend.ServiceClientAuthenticationZosa.scheduleIntervalRecording(backend.ServiceClientContextZosa.instance, parameters)
                    .then(function (response) {
                    RecordingManagement_1.getOnRecordingChangedObservable()
                        .pipe(operators_1.take(1), operators_1.timeout(RecordingManagement_1.RecordingChangedTimeOutMs)).subscribe({
                        error: function () { return public_1.Logger.warn(function (log) { return log(public_1.LogMsg("scheduleIntervalRecording timeout on waiting for recording changed", RecordingManagement_1.TAG)); }); },
                    });
                    return response;
                });
            })
                .catch(function (error) {
                if (error instanceof backend.ZosaRecordingConflictError && error && (error.conflicts || error.recommendedSchedulingOption)) {
                    return _this.extendRecordingConflict(error.conflicts, error.recommendedSchedulingOption)
                        .then(function () { return bluebird.reject(error); });
                }
                else {
                    throw error;
                }
            });
        };
        RecordingManagement.scheduleProgramRecording = function (parameters) {
            var _this = this;
            parameters.useTimeshiftBuffer = true;
            return applicationclient_devicemanagement_1.DeviceManagement.getMasterStbId()
                .then(function (masterStbId) {
                if (!masterStbId)
                    return bluebird.reject(new RecordingNoMasterError("No Master STB defined"));
                parameters.device = masterStbId;
                return backend.ServiceClientAuthenticationZosa.scheduleProgramRecording(backend.ServiceClientContextZosa.instance, parameters)
                    .then(function (response) {
                    RecordingManagement_1.getOnRecordingChangedObservable()
                        .pipe(operators_1.take(1), operators_1.timeout(RecordingManagement_1.RecordingChangedTimeOutMs)).subscribe({
                        error: function () { return public_1.Logger.warn(function (log) { return log(public_1.LogMsg("scheduleProgramRecording timeout on waiting for recording changed", RecordingManagement_1.TAG)); }); },
                    });
                    return response;
                });
            })
                .catch(function (error) {
                if (error instanceof backend.ZosaRecordingConflictError && error && (error.conflicts || error.recommendedSchedulingOption)) {
                    return _this.extendRecordingConflict(error.conflicts, error.recommendedSchedulingOption)
                        .then(function () { return bluebird.reject(error); });
                }
                else {
                    throw error;
                }
            });
        };
        RecordingManagement.updateParentRecording = function (parameters) {
            return backend.ServiceClientAuthenticationZosa.updateParentRecording(backend.ServiceClientContextZosa.instance, parameters)
                .then(function (response) {
                RecordingManagement_1.getOnRecordingChangedObservable()
                    .pipe(operators_1.take(1), operators_1.timeout(RecordingManagement_1.RecordingChangedTimeOutMs)).subscribe({
                    error: function () { return public_1.Logger.warn(function (log) { return log(public_1.LogMsg("updateParentRecording timeout on waiting for recording changed", RecordingManagement_1.TAG)); }); },
                });
                return response.data;
            });
        };
        RecordingManagement.updateRecording = function (parameters) {
            return backend.ServiceClientAuthenticationZosa.updateRecording(backend.ServiceClientContextZosa.instance, parameters)
                .then(function (response) {
                RecordingManagement_1.getOnRecordingChangedObservable()
                    .pipe(operators_1.take(1), operators_1.timeout(RecordingManagement_1.RecordingChangedTimeOutMs)).subscribe({
                    error: function () { return public_1.Logger.warn(function (log) { return log(public_1.LogMsg("updateRecording timeout on waiting for recording changed", RecordingManagement_1.TAG)); }); },
                });
                return response;
            });
        };
        RecordingManagement.updateRecordingConflict = function (parameters) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("updateRecordingConflict conflictId:" + parameters.conflictId, RecordingManagement_1.TAG)); });
            RecordingManagement_1.logRecordingConflictResolutionGroup(parameters.conflictGroup);
            return backend.ServiceClientAuthenticationZosa.updateRecordingConflict(backend.ServiceClientContextZosa.instance, parameters)
                .then(function (response) {
                RecordingManagement_1.getOnRecordingChangedObservable()
                    .pipe(operators_1.take(1), operators_1.timeout(RecordingManagement_1.RecordingChangedTimeOutMs)).subscribe({
                    error: function () { return public_1.Logger.warn(function (log) { return log(public_1.LogMsg("updateRecordingConflict timeout on waiting for recording changed", RecordingManagement_1.TAG)); }); },
                });
                return response;
            });
        };
        RecordingManagement.getRecordingChannelData = function (recordingId) {
            var state = backend.zosaStatic.RECORDING_STATE_COMPLETE | backend.zosaStatic.RECORDING_STATE_PARTIALLY_COMPLETE | backend.zosaStatic.RECORDING_STATE_ONGOING;
            var recordingsPromise = RecordingManagement_1.getRecordingsByState(state);
            var lastPlayedRecordingPromise = applicationclient_1.ApplicationClient.playbackHistory.getLastPlayedRecording();
            var lastPlayedRecording;
            return bluebird.allSettled([recordingsPromise, lastPlayedRecordingPromise])
                .then(function (response) {
                var recordings = response[0].isFulfilled() ? response[0].value().sort(RecordingManagement_1.sortDateDesc) : undefined;
                lastPlayedRecording = response[1].isFulfilled() ? response[1].value() : undefined;
                var groupedData = recordings ? _.groupBy(recordings, function (item) { return item.parentRecordingId; }) : undefined;
                var _loop_2 = function (key) {
                    if (groupedData.hasOwnProperty(key)) {
                        var startTime_1;
                        groupedData[key].forEach(function (item, index) {
                            if (key === "undefined") {
                                item.dtExtensions.recordingChannelSortingValue = item.startTime;
                            }
                            else {
                                if (index === 0) {
                                    startTime_1 = item.startTime;
                                }
                                item.dtExtensions.recordingChannelSortingValue = startTime_1 - (index * 0.001);
                            }
                        });
                    }
                };
                for (var key in groupedData) {
                    _loop_2(key);
                }
                return new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); }, recordings ? _.sortBy(recordings, function (item) { return item.dtExtensions.recordingChannelSortingValue; }).reverse() : []);
            })
                .then(function (sortedRecordings) {
                var currentRecording = (recordingId && sortedRecordings.getItem(recordingId)) || ((lastPlayedRecording === null || lastPlayedRecording === void 0 ? void 0 : lastPlayedRecording.id) && sortedRecordings.getItem(lastPlayedRecording.id));
                var result;
                if (currentRecording) {
                    result = {
                        current: currentRecording,
                        next: sortedRecordings[sortedRecordings.indexOf(currentRecording) - 1],
                        previous: sortedRecordings[sortedRecordings.indexOf(currentRecording) + 1]
                    };
                }
                return result;
            });
        };
        RecordingManagement.sortDateDesc = function (beforeItem, afterItem) {
            if (afterItem.startTime < beforeItem.startTime)
                return -1;
            if (afterItem.startTime > beforeItem.startTime)
                return 1;
            return 0;
        };
        RecordingManagement.sortDateAsc = function (beforeItem, afterItem) {
            if (afterItem.startTime < beforeItem.startTime)
                return 1;
            if (afterItem.startTime > beforeItem.startTime)
                return -1;
            return 0;
        };
        RecordingManagement.sortEpisodeSeasonAsc = function (beforeItem, afterItem) {
            if (public_1.Guard.isDefined(afterItem.seasonNumber) && public_1.Guard.isDefined(beforeItem.seasonNumber) &&
                afterItem.seasonNumber < beforeItem.seasonNumber)
                return 1;
            if (public_1.Guard.isDefined(afterItem.seasonNumber) && public_1.Guard.isDefined(beforeItem.seasonNumber) &&
                afterItem.seasonNumber > beforeItem.seasonNumber)
                return -1;
            if (public_1.Guard.isDefined(afterItem.episodeNumber) && public_1.Guard.isDefined(beforeItem.episodeNumber) &&
                afterItem.episodeNumber < beforeItem.episodeNumber)
                return 1;
            if (public_1.Guard.isDefined(afterItem.episodeNumber) && public_1.Guard.isDefined(beforeItem.episodeNumber) &&
                afterItem.episodeNumber > beforeItem.episodeNumber)
                return -1;
            return RecordingManagement_1.sortDateAsc(beforeItem, afterItem);
        };
        RecordingManagement.findRecordingById = function (zosaId) {
            return RecordingManagement_1
                .getRecordings()
                .then(function (recordings) { return recordings.filter(function (recording) { return recording.zosaId == zosaId; })[0]; });
        };
        RecordingManagement.setRecordingImageDownloadConfig = function (imageScalingUrl, client) {
            var images = [
                { imageType: parseInt(extensions_1.ZosaRecordingItemExtensions.IMAGE_TYPE_RECORDING_FULLSIZE_HD, 10), width: 1280, height: 720 },
                { imageType: parseInt(extensions_1.ZosaRecordingItemExtensions.IMAGE_TYPE_RECORDING_BACKGROUND, 10), width: 983, height: 553 },
                { imageType: parseInt(extensions_1.ZosaRecordingItemExtensions.IMAGE_TYPE_RECORDING_MIDDLE, 10), width: 272, height: 153 },
                { imageType: parseInt(extensions_1.ZosaRecordingItemExtensions.IMAGE_TYPE_RECORDING_SMALL, 10), width: 220, height: 124 }
            ];
            var templateUrl = imageScalingUrl + "?client=" + client + "&ar=keep&y=<height>&src=<src>";
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("setRecordingImageDownloadConfig, url: '" + templateUrl + "'", RecordingManagement_1.TAG)); });
            var parameters = {
                downloadUrlTemplate: templateUrl,
                images: images
            };
            return backend.ServiceClientAuthenticationZosa.setImageDownloadConfig(backend.ServiceClientContextZosa.instance, parameters);
        };
        RecordingManagement.getAlienRecordingsState = function (uuid) {
            return bluebird.resolve()
                .then(function () { return backend.ServiceClientZac.getCustomApiAlienRecordings(backend.ServiceClientContextZac.instance).methods.getAlienRecordingStatus(uuid); })
                .then(function (state) { return ({
                count: state.alienRecordingsCount ? Number(state.alienRecordingsCount) : 0,
                sizeKb: state.alienRecordingsTotalSizeKiB ? Number(state.alienRecordingsTotalSizeKiB) : 0
            }); });
        };
        RecordingManagement.alienRecordingsSizeExceedsThreshold = function (uuid) {
            var alienRecordingsSizeThresholdMB = 300;
            return RecordingManagement_1.getAlienRecordingsState(uuid)
                .then(function (alienRecordingsStatus) {
                if (alienRecordingsStatus.count == 0)
                    return false;
                var sizeMB = alienRecordingsStatus.sizeKb / 1000;
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("alienRecordingsSize: " + sizeMB + " MB, alienRecordingsSizeThresholdMB: " + alienRecordingsSizeThresholdMB + " MB", RecordingManagement_1.TAG)); });
                return sizeMB >= alienRecordingsSizeThresholdMB;
            });
        };
        RecordingManagement.onAlienRecordingsEvent = function (callback) {
            return backend.ServiceClientZac.getCustomApiAlienRecordings(backend.ServiceClientContextZac.instance).events.onCustomAPIEvent(callback);
        };
        RecordingManagement.deleteAlienRecordings = function (uuid) {
            var deleteAlienRecordingsTimeoutMs = 60000;
            return RecordingManagement_1.getAlienRecordingsState(uuid)
                .then(function (alienRecordingsState) {
                if (alienRecordingsState.count == 0)
                    return bluebird.resolve(0);
                return new bluebird(function (resolve, reject) {
                    var timeoutHandle = setTimeout(function () {
                        reject(new DeleteAlienRecordingsError("deleteAlienRecordings timed out after " + deleteAlienRecordingsTimeoutMs + " ms."));
                    }, deleteAlienRecordingsTimeoutMs);
                    var closeEvent = RecordingManagement_1.onAlienRecordingsEvent(function (event) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("onAlienRecordingsEvent, eventType: " + event.eventType + ", requestId: " + event.requestId + ", status: " + event.status, RecordingManagement_1.TAG)); });
                        if (event.eventType == "DeleteAlienRecordingsResponse" && event.requestId == requestId) {
                            closeEvent();
                            clearTimeout(timeoutHandle);
                            if (event.status == "0") {
                                RecordingManagement_1.getAlienRecordingsState(uuid)
                                    .then(function (newState) {
                                    resolve(alienRecordingsState.count - newState.count);
                                })
                                    .catch(function (error) {
                                    reject(error);
                                });
                            }
                            else {
                                reject(new DeleteAlienRecordingsError("deleteAlienRecordings failed with status " + event.status));
                            }
                        }
                    });
                    var requestId = backend.ServiceClientZac.getCustomApiAlienRecordings(backend.ServiceClientContextZac.instance).methods.deleteAlienRecordings(uuid).requestId;
                });
            });
        };
        RecordingManagement.logScheduleProgramRecordingParams = function (programItem, params) {
            var _this = this;
            public_1.Logger.debug(function (log) {
                log(public_1.LogMsg("TRY scheduleProgramRecording '" + params.name + "' on channel " + params.channel, RecordingManagement_1.TAG));
                log(public_1.LogMsg("StartTime [UTC]: " + _this.dateToString(programItem.startTime), RecordingManagement_1.TAG));
                log(public_1.LogMsg("EndTime [UTC]: " + _this.dateToString(programItem.endTime), RecordingManagement_1.TAG));
                log(public_1.LogMsg("IsSeries: " + params.isSeries, RecordingManagement_1.TAG));
                log(public_1.LogMsg("source: " + (public_1.Guard.isDefined(params.source) ? backend.ServiceClientZosa.getRecordingSourceInfo(backend.zosaStatic, params.source) : "undefined"), RecordingManagement_1.TAG));
                log(public_1.LogMsg("startMargin: " + params.startMargin, RecordingManagement_1.TAG));
                log(public_1.LogMsg("endMargin: " + params.endMargin, RecordingManagement_1.TAG));
                log(public_1.LogMsg("deleteMode: " + (public_1.Guard.isDefined(params.deleteMode) ? backend.ServiceClientZosa.getDeleteModeInfo(backend.zosaStatic, params.deleteMode) : "undefined"), RecordingManagement_1.TAG));
                log(public_1.LogMsg("retainEpisodesCount: " + params.retainEpisodesCount, RecordingManagement_1.TAG));
            });
        };
        RecordingManagement.dateToString = function (zosaDate) {
            if (public_1.Guard.isUndefined(zosaDate))
                return "undefined";
            if (public_1.Guard.isNumber(zosaDate))
                return new Date(zosaDate).toUTCString();
            try {
                return zosaDate.toUTCString();
            }
            catch (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Unable to stringify zosaDate: " + error, RecordingManagement_1.TAG)); });
                return "undefined";
            }
        };
        RecordingManagement.logOngoingAndScheduledRecordings = function (ongoingRecordings, scheduledRecordings) {
            public_1.Logger.debug(function (log) {
                if (ongoingRecordings.length > 0) {
                    log(public_1.LogMsg("Ongoing recordings:", RecordingManagement_1.TAG));
                    log(public_1.LogMsg("--------------------------------------------------------", RecordingManagement_1.TAG));
                    ongoingRecordings.forEach(function (ongoingRecording) {
                        log(public_1.LogMsg(ongoingRecording.title + ", StartTime: " + new Date(ongoingRecording.startTime).toUTCString() + " [" + ongoingRecording.startTime + "], EndTime: " + new Date(ongoingRecording.endTime).toUTCString(), RecordingManagement_1.TAG));
                    });
                }
                if (scheduledRecordings.length > 0) {
                    log(public_1.LogMsg("Scheduled recordings: [CurrentTime: " + new Date().getTime() + "]", RecordingManagement_1.TAG));
                    log(public_1.LogMsg("--------------------------------------------------------", RecordingManagement_1.TAG));
                    scheduledRecordings.forEach(function (scheduledRecording) {
                        var startsInSeconds = (scheduledRecording.startTime - new Date().getTime()) / 1000;
                        log(public_1.LogMsg(scheduledRecording.title + ", StartTime: " + new Date(scheduledRecording.startTime).toUTCString() + " [in " + startsInSeconds + " seconds], EndTime: " + new Date(scheduledRecording.endTime).toUTCString(), RecordingManagement_1.TAG));
                    });
                }
            });
        };
        RecordingManagement.logRecordingConflictResponse = function (getRecordingConflictResponse) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Recording conflict " + (getRecordingConflictResponse.groupIndex + 1) + " of " + getRecordingConflictResponse.groupCount, RecordingManagement_1.TAG)); });
            RecordingManagement_1.logRecordingConflictResolutionGroup(getRecordingConflictResponse.conflictGroup);
        };
        RecordingManagement.logRecordingConflictError = function (conflictError) {
            public_1.Logger.debug(function (log) {
                log(public_1.LogMsg("ZosaRecordingConflictError: " + conflictError.message, RecordingManagement_1.TAG));
                if (conflictError.conflictId) {
                    log(public_1.LogMsg("conflictId: '" + conflictError.conflictId + "'", RecordingManagement_1.TAG));
                }
                if (conflictError.conflicts) {
                    conflictError.conflicts.forEach(function (conflict, index) {
                        log(public_1.LogMsg("Conflict " + index + ":", RecordingManagement_1.TAG));
                        log(public_1.LogMsg("------------------------------------------", RecordingManagement_1.TAG));
                        applicationclient_1.ApplicationClient.recordingManagement.logRecordingItem(conflict);
                    });
                }
            });
        };
        RecordingManagement.logRecordingConflictResolutionGroup = function (conflictResolutionGroup) {
            public_1.Logger.debug(function (log) {
                conflictResolutionGroup.resolutionOptions.forEach(function (resolutionOption) {
                    log(public_1.LogMsg("markedForDelete: " + resolutionOption.markedForDelete, RecordingManagement_1.TAG));
                    resolutionOption.recordings.forEach(function (recording) { return RecordingManagement_1.logRecordingItem(recording, 1); });
                });
            });
        };
        RecordingManagement.logRecordingItem = function (recording, indentLevel) {
            if (indentLevel === void 0) { indentLevel = 0; }
            var indentPrefix = RecordingManagement_1.getIndentPrefix(indentLevel);
            public_1.Logger.debug(function (log) {
                log(public_1.LogMsg(indentPrefix + " ID:" + recording.zosaId, RecordingManagement_1.TAG));
                log(public_1.LogMsg(indentPrefix + " Title:" + recording.title, RecordingManagement_1.TAG));
                log(public_1.LogMsg(indentPrefix + " State:" + backend.ServiceClientZosa.getRecordingStateInfo(backend.zosaStatic, recording.dtExtensions.recordingState), RecordingManagement_1.TAG));
                log(public_1.LogMsg(indentPrefix + " Type:" + backend.ServiceClientZosa.getRecordingTypeInfo(backend.zosaStatic, recording.recordingType), RecordingManagement_1.TAG));
                log(public_1.LogMsg(indentPrefix + " Source:" + (recording.source ? backend.ServiceClientZosa.getRecordingSourceInfo(backend.zosaStatic, recording.source) : "undefined"), RecordingManagement_1.TAG));
                log(public_1.LogMsg(indentPrefix + " notYetCreated:" + recording.notYetCreated, RecordingManagement_1.TAG));
            });
        };
        RecordingManagement.getIndentPrefix = function (indentLevel) {
            if (indentLevel === void 0) { indentLevel = 0; }
            var indentPrefix = "";
            for (var index = 0; index < indentLevel; index++) {
                indentPrefix += "      ";
            }
            return indentPrefix;
        };
        var RecordingManagement_1;
        RecordingManagement.classID = 0x917;
        RecordingManagement.ValidTimesRecordingBufferBefore = [0, 1, 2, 3, 5, 10];
        RecordingManagement.ValidTimesRecordingBufferAfter = [0, 1, 2, 3, 5, 10, 15, 30, 60, 120];
        RecordingManagement.RecordingPrePaddingDefault = 5;
        RecordingManagement.RecordingPostPaddingDefault = 2;
        RecordingManagement.RecordingChangedTimeOutMs = 20000;
        __decorate([
            public_1.log2(function () { return ({ name: FrontendModelMapper.TAG }); })
        ], RecordingManagement, "getOnRecordingChangedObservable", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "getMasterStbSelectedStreamQuality", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "getStbRecordingResources", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "getStbRecordingsSizeKb", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "removeAllFailedRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "deleteMasterStbRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "getAllSeriesRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "stopOngoingDVBRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "stopOngoingRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "stopRecordingWithIndex", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "getOngoingAndScheduledRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "stopRecording", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "getRecordingSpaceInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "getRecordingsByState", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "getRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "getParentRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "getRecordingsForStb", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG, inlen: 5000 }); })
        ], RecordingManagement, "scheduleIntervalRecording", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "scheduleProgramRecording", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "getAlienRecordingsState", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "alienRecordingsSizeExceedsThreshold", null);
        __decorate([
            public_1.log2(function () { return ({ name: RecordingManagement_1.TAG }); })
        ], RecordingManagement, "deleteAlienRecordings", null);
        RecordingManagement = RecordingManagement_1 = __decorate([
            public_1.logTag()
        ], RecordingManagement);
        return RecordingManagement;
    }());
    exports.RecordingManagement = RecordingManagement;
});
//# sourceMappingURL=applicationclient.recordingmanagement.js.map