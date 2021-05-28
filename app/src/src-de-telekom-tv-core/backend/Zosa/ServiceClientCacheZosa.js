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
define(["require", "exports", "src/src-de-telekom/public", "./zosa.static"], function (require, exports, public_1, zosa_static_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientCacheZosa = void 0;
    var ServiceClientCacheZosa = (function () {
        function ServiceClientCacheZosa() {
        }
        ServiceClientCacheZosa_1 = ServiceClientCacheZosa;
        ServiceClientCacheZosa.addFields = function (parameters, shortFieldsList, longFieldsList) {
            var useLong = (parameters === null || parameters === void 0 ? void 0 : parameters.itemFields) && parameters.itemFields[0] === "long";
            var params = __assign(__assign({}, parameters), { itemFields: useLong ? longFieldsList : shortFieldsList });
            return params;
        };
        ServiceClientCacheZosa.getCacheData = function (cache, key, cacheCallback, useCache) {
            if (useCache === void 0) { useCache = true; }
            return (useCache && cache.getValue(key)) || cache.setValue(key, cacheCallback());
        };
        ServiceClientCacheZosa.generateCacheKey = function (parameters) {
            var data = Object.getOwnPropertyNames(parameters).sort().map(function (key) { return ({ key: key, value: parameters[key] }); });
            return JSON.stringify(data);
        };
        ServiceClientCacheZosa.onCustomApiMasterStbCallback = function (event) {
            public_1.CacheManager.next({ reason: "Devices" });
            return false;
        };
        ServiceClientCacheZosa.onCustomApiDfccCallback = function (event) {
            return false;
        };
        ServiceClientCacheZosa.onDataUpdatedCallback = function (event) {
            if (event.channelNo) {
                public_1.CacheManager.next({ reason: "ChannelNumbering" });
            }
            if (event.channels) {
                public_1.CacheManager.next({ reason: "All" });
            }
            if (event.devices) {
                public_1.CacheManager.next({ reason: "Devices" });
            }
            if (event.favorites) {
                public_1.CacheManager.next({ reason: "Favorite" });
            }
            if (event.locks) {
                public_1.CacheManager.next({ reason: "LockContent" });
            }
            if (event.vas) {
                public_1.CacheManager.next({ reason: "All" });
            }
            return false;
        };
        ServiceClientCacheZosa.onParentalBlockingChangedCallback = function (event) {
            public_1.CacheManager.next({ reason: "ParentalControl" });
            return false;
        };
        ServiceClientCacheZosa.onZosaErrorCallback = function (event) {
            public_1.CacheManager.next({ reason: "ZosaError" });
            return false;
        };
        ServiceClientCacheZosa.login = function (context, parameters) {
            return context.serviceClientZosa.login(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "Login" }); });
        };
        ServiceClientCacheZosa.serviceProviderLogin = function (context, parameters) {
            return context.serviceClientZosa.serviceProviderLogin(context, parameters);
        };
        ServiceClientCacheZosa.getSubscriberInfo = function (context, parameters) {
            var key = ServiceClientCacheZosa_1.generateCacheKey(parameters);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheSubscriberInfo, key, function () { return context.serviceClientZosa.getSubscriberInfo(context, parameters); });
        };
        ServiceClientCacheZosa.getServiceProviders = function (context, parameters) {
            var newParams = ServiceClientCacheZosa_1.addFields(parameters, ["title", "name", "icon", "isActive", "isMainServiceProvider"], ["title", "name", "icon", "isActive", "isMainServiceProvider"]);
            var key = ServiceClientCacheZosa_1.generateCacheKey(newParams);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheServiceProviders, key, function () { return context.serviceClientZosa.getServiceProviders(context, newParams); });
        };
        ServiceClientCacheZosa.createProgramsUpdatedObserver = function (context, parameters) {
            return context.serviceClientZosa.createProgramsUpdatedObserver(context, parameters);
        };
        ServiceClientCacheZosa.getPrograms = function (context, parameters) {
            var newParams = ServiceClientCacheZosa_1.addFields(parameters, ["audioTrackInfo", "channelId", "clientPvrAllowed", "clientPvrSupported", "cmsId", "customProps", "description", "duration", "endTime", "episodeName", "episodeNumber", "genres", "icon", "images", "instantRestartSupported", "isBlocked", "minViewingAge", "parentalRating", "productionYear", "seasonName", "seasonNumber", "seriesId", "startTime", "title"], ["audioTrackInfo", "channelId", "clientPvrAllowed", "clientPvrSupported", "cmsId", "customProps", "description", "duration", "endTime", "episodeName", "episodeNumber", "genres", "icon", "images", "instantRestartSupported", "isBlocked", "minViewingAge", "parentalRating", "participants", "productionRegions", "productionYear", "seasonName", "seasonNumber", "seriesId", "seriesName", "startTime", "subtitleLanguages", "title"]);
            var key = ServiceClientCacheZosa_1.generateCacheKey(newParams);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cachePrograms, key, function () {
                var dataCall = context.serviceClientZosa.getPrograms(context, newParams);
                ServiceClientCacheZosa_1.getProgramsForCmlsIds(newParams, dataCall);
                return dataCall;
            });
        };
        ServiceClientCacheZosa.getProgramsForCmlsIds = function (newParams, dataCall) {
            if (newParams
                && newParams.externalProgramIdType === zosa_static_1.zosaStatic.EXTERNAL_ID_TYPE_CMS
                && Array.isArray(newParams.externalProgramIds)
                && newParams.externalProgramIds.length > 1) {
                var _loop_1 = function (externalProgramId) {
                    var reducedParameters = __assign(__assign({}, newParams), { externalProgramIds: [externalProgramId] });
                    var key = ServiceClientCacheZosa_1.generateCacheKey(reducedParameters);
                    ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cachePrograms, key, function () { return dataCall.then(function (response) {
                        var filteredProgramData = response.data.elements
                            .filter(public_1.Guard.isObject)
                            .filter(function (item) { return item && item.cmsId === externalProgramId; });
                        var metaServiceData = new public_1.MetaInfoService(new public_1.MetaInfoData({ elements: filteredProgramData, total: 1, offset: 0 }), response.serviceData);
                        return metaServiceData;
                    }); });
                };
                for (var _i = 0, _a = newParams.externalProgramIds; _i < _a.length; _i++) {
                    var externalProgramId = _a[_i];
                    _loop_1(externalProgramId);
                }
            }
        };
        ServiceClientCacheZosa.clearCustomChannelNumbering = function (context, parameters) {
            return context.serviceClientZosa.clearCustomChannelNumbering(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "ChannelNumbering" }); });
        };
        ServiceClientCacheZosa.getChannels = function (context, parameters) {
            var channelItemFields = ServiceClientCacheZosa_1.channelItemAllFields;
            if (public_1.Feature.has(public_1.FeatureItems.satellitesubscriber, public_1.FeatureRights.viewItems) &&
                public_1.Feature.has(public_1.FeatureItems.satellite, public_1.FeatureRights.viewItems) &&
                channelItemFields.indexOf("hasOnDemandProgramInfo") === -1) {
                channelItemFields.push("hasOnDemandProgramInfo");
            }
            parameters.itemFields = parameters.itemFields !== null ? channelItemFields : ["channelNumber"];
            var key = ServiceClientCacheZosa_1.generateCacheKey(parameters);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheChannels, key, function () { return context.serviceClientZosa
                .getChannels(context, parameters)
                .then(function (response) {
                var compareFunc = function (channel1, channel2) { return (channel1.channelNumber == channel2.channelNumber) ? 0 : ((channel1.channelNumber || 0) < (channel2.channelNumber || 0)) ? -1 : 1; };
                response.data.elements = response.data.elements.sort(compareFunc);
                return response;
            }); });
        };
        ServiceClientCacheZosa.getCustomChannelNumbering = function (context, parameters) {
            var key = ServiceClientCacheZosa_1.generateCacheKey(parameters);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheChannelNumbering, key, function () { return context.serviceClientZosa.getCustomChannelNumbering(context, parameters); });
        };
        ServiceClientCacheZosa.getSatellites = function (context) {
            var key = "getSatellites";
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheSatellites, key, function () { return context.serviceClientZosa.getSatellites(context); });
        };
        ServiceClientCacheZosa.getReferenceTransponders = function (context, satelliteId) {
            var key = satelliteId;
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheReferenceTransponders, key, function () { return context.serviceClientZosa.getReferenceTransponders(context, satelliteId); });
        };
        ServiceClientCacheZosa.setCustomChannelNumbering = function (context, parameters) {
            return context.serviceClientZosa.setCustomChannelNumbering(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "ChannelNumbering" }); });
        };
        ServiceClientCacheZosa.getDevices = function (context, parameters, useCache) {
            parameters.itemFields = ServiceClientCacheZosa_1.deviceItemAllFields;
            var key = ServiceClientCacheZosa_1.generateCacheKey(parameters);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheDevices, key, function () { return context.serviceClientZosa.getDevices(context, parameters); }, useCache);
        };
        ServiceClientCacheZosa.updateDevice = function (context, parameters) {
            return context.serviceClientZosa.updateDevice(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "Devices" }); });
        };
        ServiceClientCacheZosa.getMediaPersons = function (context, parameters) {
            var newParams = ServiceClientCacheZosa_1.addFields(parameters, ["icon", "images", "title", "cmsId"], ["icon", "images", "title", "cmsId"]);
            var key = ServiceClientCacheZosa_1.generateCacheKey(newParams);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheMediaPersons, key, function () { return context.serviceClientZosa.getMediaPersons(context, newParams); });
        };
        ServiceClientCacheZosa.getOtherInstances = function (context, parameters) {
            var key = ServiceClientCacheZosa_1.generateCacheKey(parameters);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheOtherInstances, key, function () { return context.serviceClientZosa.getOtherInstances(context, parameters); });
        };
        ServiceClientCacheZosa.deleteMarkedRecordingConflicts = function (context, parameters) {
            return context.serviceClientZosa.deleteMarkedRecordingConflicts(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "Recording" }); });
        };
        ServiceClientCacheZosa.getNextRecordingConflict = function (context, parameters) {
            return context.serviceClientZosa.getNextRecordingConflict(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "Recording" }); });
        };
        ServiceClientCacheZosa.getParentRecordings = function (context, parameters) {
            var newParams = ServiceClientCacheZosa_1.addFields(parameters, ["channelId", "deviceId", "endMargin", "icon", "endTime", "parentType", "recordingType", "recurEndTime", "startMargin", "startTime", "title", "episodeSelection"], ["channelId", "deleteMode", "deviceId", "endMargin", "icon", "endTime", "parentType", "recordingType", "recurEndTime", "retainEpisodesCount", "startMargin", "startTime", "title", "videoDefinition", "episodeSelection"]);
            if (public_1.Feature.has(public_1.FeatureItems.satellitesubscriber, public_1.FeatureRights.viewItems)) {
                newParams.itemFields.push("source");
            }
            var key = ServiceClientCacheZosa_1.generateCacheKey(newParams);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheParentRecordings, key, function () { return context.serviceClientZosa.getParentRecordings(context, newParams); });
        };
        ServiceClientCacheZosa.getRecordingSpaceInfo = function (context, parameters) {
            var key = ServiceClientCacheZosa_1.generateCacheKey(parameters);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheRecordingSpaceInfo, key, function () { return context.serviceClientZosa.getRecordingSpaceInfo(context, parameters); });
        };
        ServiceClientCacheZosa.getRecordings = function (context, parameters) {
            var newParams = ServiceClientCacheZosa_1.addFields(parameters, ["endTime", "startTime", "title", "channelId", "parentRecordingId", "parentRecordingIds", "recordingType", "programId", "duration", "icon", "parentalRating", "isBlocked"], ["endTime", "startTime", "availabilityEndTime", "channelId", "deleteMode", "description", "duration", "endMargin", "episodeName", "episodeNumber", "failReason", "icon", "images", "lastPlaybackPosition", "minViewingAge", "parentRecordingId", "parentRecordingIds", "programId", "minProgramViewingAge", "recordingState", "recordingType", "seasonNumber", "seriesName", "sizeKB", "startMargin", "title", "videoDefinition", "parentalRating", "isBlocked", "genres"]);
            if (public_1.Feature.has(public_1.FeatureItems.satellitesubscriber, public_1.FeatureRights.viewItems)) {
                newParams.itemFields.push("source");
            }
            if (public_1.Feature.has(public_1.FeatureItems.mixedpvr, public_1.FeatureRights.viewItems)) {
                newParams.itemFields.push("mixPvrId");
            }
            var key = ServiceClientCacheZosa_1.generateCacheKey(newParams);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheRecordings, key, function () { return context.serviceClientZosa.getRecordings(context, newParams); });
        };
        ServiceClientCacheZosa.removeRecordings = function (context, parameters) {
            return context.serviceClientZosa.removeRecordings(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "Recording" }); });
        };
        ServiceClientCacheZosa.scheduleIntervalRecording = function (context, parameters) {
            return context.serviceClientZosa.scheduleIntervalRecording(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "Recording" }); });
        };
        ServiceClientCacheZosa.scheduleProgramRecording = function (context, parameters) {
            return context.serviceClientZosa.scheduleProgramRecording(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "Recording" }); });
        };
        ServiceClientCacheZosa.updateParentRecording = function (context, parameters) {
            return context.serviceClientZosa.updateParentRecording(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "Recording" }); });
        };
        ServiceClientCacheZosa.updateRecording = function (context, parameters) {
            return context.serviceClientZosa.updateRecording(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "Recording" }); });
        };
        ServiceClientCacheZosa.updateRecordingConflict = function (context, parameters) {
            var _a;
            var resolutionOptions = [];
            if ((_a = parameters.conflictGroup) === null || _a === void 0 ? void 0 : _a.resolutionOptions) {
                for (var _i = 0, _b = parameters.conflictGroup.resolutionOptions; _i < _b.length; _i++) {
                    var option = _b[_i];
                    resolutionOptions.push({
                        markedForDelete: option.markedForDelete,
                        recordings: option.recordings.map(function (item) { return ({
                            $type: "recordingItem",
                            programId: item.programId,
                            channelId: item.channelId,
                            recordingType: item.recordingType,
                            title: item.title,
                            zosaId: item.zosaId,
                            zosaType: item.zosaType,
                            recordingState: item.recordingState,
                            startTime: item.startTime,
                            endTime: item.endTime
                        }); })
                    });
                }
            }
            var newParams = __assign(__assign({}, parameters), { conflictGroup: { resolutionOptions: resolutionOptions } });
            return context.serviceClientZosa.updateRecordingConflict(context, newParams).finally(function () { return public_1.CacheManager.next({ reason: "Recording" }); });
        };
        ServiceClientCacheZosa.getCategories = function (context, parameters) {
            var newParams = ServiceClientCacheZosa_1.addFields(parameters, ["icon", "numContentItems", "parentId", "title"], ["icon", "numContentItems", "parentId", "title"]);
            var key = ServiceClientCacheZosa_1.generateCacheKey(newParams);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheCategories, key, function () { return context.serviceClientZosa.getCategories(context, newParams); });
        };
        ServiceClientCacheZosa.getVasItems = function (context, parameters) {
            parameters.itemFields = ServiceClientCacheZosa_1.vasItemAllFields;
            var key = ServiceClientCacheZosa_1.generateCacheKey(parameters);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheVasItems, key, function () { return context.serviceClientZosa
                .getVasItems(context, parameters)
                .then(function (response) {
                response.data.elements = new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); }, response.data.elements);
                return response;
            }); });
        };
        ServiceClientCacheZosa.getVods = function (context, parameters) {
            return context.serviceClientZosa.getVods(context, parameters);
        };
        ServiceClientCacheZosa.createPlaybackSession = function (context, parameters) {
            return context.serviceClientZosa.createPlaybackSession(context, parameters);
        };
        ServiceClientCacheZosa.getItems = function (context, parameters) {
            var key = ServiceClientCacheZosa_1.generateCacheKey(parameters);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheItems, key, function () { return context.serviceClientZosa.getItems(context, parameters); });
        };
        ServiceClientCacheZosa.getRecommendation = function (context, parameters) {
            var key = ServiceClientCacheZosa_1.generateCacheKey(parameters);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheRecommendation, key, function () { return context.serviceClientZosa.getRecommendation(context, parameters); });
        };
        ServiceClientCacheZosa.getVasCategoryId = function (context) {
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheVasCategoryId, "getVasCategoryId", function () { return context.serviceClientZosa.getVasCategoryId(context); });
        };
        ServiceClientCacheZosa.getTdsParameters = function (context, parameterNames) {
            return context.serviceClientZosa.getTdsParameters(context, parameterNames);
        };
        ServiceClientCacheZosa.setTdsParameters = function (context, parameters) {
            return context.serviceClientZosa.setTdsParameters(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "TdsParameter" }); });
        };
        ServiceClientCacheZosa.getCustomizeConfigParameters = function (context, parameterNames) {
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheGetCustomizeConfigParameters, JSON.stringify(parameterNames), function () { return context.serviceClientZosa.getCustomizeConfigParameters(context, parameterNames); });
        };
        ServiceClientCacheZosa.search = function (context, parameters) {
            var key = ServiceClientCacheZosa_1.generateCacheKey(parameters);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheSearch, key, function () { return context.serviceClientZosa.search(context, parameters); });
        };
        ServiceClientCacheZosa.getMasterStb = function (context, useCache) {
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheMasterStb, "getMasterStb", function () { return context.serviceClientZosa.getMasterStb(context); }, useCache);
        };
        ServiceClientCacheZosa.getBandwithManagerServerUrl = function (context) {
            return context.serviceClientZosa.getBandwithManagerServerUrl(context);
        };
        ServiceClientCacheZosa.resetMasterStb = function (context) {
            return context.serviceClientZosa.resetMasterStb(context).finally(function () { return public_1.CacheManager.next({ reason: "Devices" }); });
        };
        ServiceClientCacheZosa.setMasterStb = function (context, parameters) {
            return context.serviceClientZosa.setMasterStb(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "Devices" }); });
        };
        ServiceClientCacheZosa.createVod = function (context, parameters) {
            return context.serviceClientZosa.createVod(context, parameters);
        };
        ServiceClientCacheZosa.getDFCC = function (context) {
            return context.serviceClientZosa.getDFCC(context);
        };
        ServiceClientCacheZosa.getBandwidthManagerType = function (context) {
            return context.serviceClientZosa.getBandwidthManagerType(context);
        };
        ServiceClientCacheZosa.removeOtherStbDevices = function (context, parameters) {
            return context.serviceClientZosa.removeOtherStbDevices(context, parameters);
        };
        ServiceClientCacheZosa.getParentalControlConfiguration = function (context) {
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheParentalControlConfiguration, "getParentalControlConfiguration", function () { return context.serviceClientZosa.getParentalControlConfiguration(context); });
        };
        ServiceClientCacheZosa.setParentalControlConfiguration = function (context, parameters) {
            return context.serviceClientZosa.setParentalControlConfiguration(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "ParentalControl" }); });
        };
        ServiceClientCacheZosa.activateComfortFeature = function (context) {
            return context.serviceClientZosa.activateComfortFeature(context).finally(function () { return public_1.CacheManager.next({ reason: "ParentalControl" }); });
        };
        ServiceClientCacheZosa.deactivateComfortFeature = function (context) {
            return context.serviceClientZosa.deactivateComfortFeature(context).finally(function () { return public_1.CacheManager.next({ reason: "ParentalControl" }); });
        };
        ServiceClientCacheZosa.isComfortFeatureActive = function (context) {
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheComfortFeatureState, "isComfortFeatureActive", function () { return context.serviceClientZosa.isComfortFeatureActive(context); });
        };
        ServiceClientCacheZosa.getComfortFeatureStatus = function (context) {
            return context.serviceClientZosa.getComfortFeatureStatus(context);
        };
        ServiceClientCacheZosa.getConfigurableUserSettings = function (context, parameters, useCache) {
            var key = ServiceClientCacheZosa_1.generateCacheKey(parameters);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheConfigurableUserSettings, key, function () { return context.serviceClientZosa.getConfigurableUserSettings(context, parameters); }, useCache);
        };
        ServiceClientCacheZosa.getConfigurableUserSettingsValues = function (context, parameters) {
            var key = ServiceClientCacheZosa_1.generateCacheKey(parameters);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheConfigurableUserSettingsValues, key, function () { return context.serviceClientZosa.getConfigurableUserSettingsValues(context, parameters); });
        };
        ServiceClientCacheZosa.setConfigurableUserSettingsValues = function (context, parameters) {
            return context.serviceClientZosa.setConfigurableUserSettingsValues(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "ConfigurableUserSettings" }); });
        };
        ServiceClientCacheZosa.getDTSubscriberInfo = function (context) {
            return context.serviceClientZosa.getDTSubscriberInfo(context);
        };
        ServiceClientCacheZosa.setSubscriberInfo = function (context, parameters) {
            return context.serviceClientZosa.setSubscriberInfo(context, parameters);
        };
        ServiceClientCacheZosa.setImageDownloadConfig = function (context, parameters) {
            return context.serviceClientZosa.setImageDownloadConfig(context, parameters);
        };
        ServiceClientCacheZosa.getParentalBlockingStatus = function (context, parameters) {
            var key = ServiceClientCacheZosa_1.generateCacheKey(parameters);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheParentalControlUnblocking, key, function () { return context.serviceClientZosa.getParentalBlockingStatus(context, parameters); });
        };
        ServiceClientCacheZosa.parentalUnblock = function (context, parameters) {
            return context.serviceClientZosa.parentalUnblock(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "ParentalControl" }); });
        };
        ServiceClientCacheZosa.resetAllParentalUnblockings = function (context, parameters) {
            return context.serviceClientZosa.resetAllParentalUnblockings(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "ParentalControl" }); });
        };
        ServiceClientCacheZosa.resetParentalUnblocking = function (context, parameters) {
            return context.serviceClientZosa.resetParentalUnblocking(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "ParentalControl" }); });
        };
        ServiceClientCacheZosa.addFavorites = function (context, parameters) {
            return context.serviceClientZosa.addFavorites(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "Favorite" }); });
        };
        ServiceClientCacheZosa.getFavoriteLists = function (context, parameters) {
            var newParams = ServiceClientCacheZosa_1.addFields(parameters, ["contentType", "icon", "title"], ["contentType", "icon", "title"]);
            var key = ServiceClientCacheZosa_1.generateCacheKey(newParams);
            return ServiceClientCacheZosa_1.getCacheData(ServiceClientCacheZosa_1.cacheFavoriteLists, key, function () { return context.serviceClientZosa.getFavoriteLists(context, newParams); });
        };
        ServiceClientCacheZosa.removeFavorites = function (context, parameters) {
            return context.serviceClientZosa.removeFavorites(context, parameters).finally(function () { return public_1.CacheManager.next({ reason: "Favorite" }); });
        };
        ServiceClientCacheZosa.getBandwidthInfo = function (context, parameters) {
            return context.serviceClientZosa.getBandwidthInfo(context, parameters);
        };
        ServiceClientCacheZosa.releaseBandwidthBookings = function (context, parameters) {
            return context.serviceClientZosa.releaseBandwidthBookings(context, parameters);
        };
        var ServiceClientCacheZosa_1;
        ServiceClientCacheZosa.classID = 0x102;
        ServiceClientCacheZosa.sizeLevel500 = 500;
        ServiceClientCacheZosa.timeLevel15 = 15 * 60;
        ServiceClientCacheZosa.timeLevel30 = 30 * 60;
        ServiceClientCacheZosa.timeLevel300 = 300 * 60;
        ServiceClientCacheZosa.cacheCategories = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel300, undefined, "Categories");
        ServiceClientCacheZosa.cacheChannelNumbering = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel300, undefined, "ChannelNumbering");
        ServiceClientCacheZosa.cacheChannels = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel300, undefined, "Channels");
        ServiceClientCacheZosa.cacheComfortFeatureState = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "ComfortFeatureState");
        ServiceClientCacheZosa.cacheDevices = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel15, undefined, "Devices");
        ServiceClientCacheZosa.cacheFavoriteLists = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "FavoriteLists");
        ServiceClientCacheZosa.cacheItems = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "ZosaItems");
        ServiceClientCacheZosa.cacheMasterStb = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel15, undefined, "MasterStb");
        ServiceClientCacheZosa.cacheMediaPersons = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "MediaPersons");
        ServiceClientCacheZosa.cacheOtherInstances = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "OtherInstances");
        ServiceClientCacheZosa.cacheParentRecordings = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "ParentRecordings");
        ServiceClientCacheZosa.cacheParentalControlConfiguration = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "ParentalControlConfiguration");
        ServiceClientCacheZosa.cacheParentalControlUnblocking = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "ParentalControlUnblocking");
        ServiceClientCacheZosa.cacheSubscriberInfo = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel300, undefined, "SubscriberInfo");
        ServiceClientCacheZosa.cachePrograms = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, ServiceClientCacheZosa_1.sizeLevel500, "Programs");
        ServiceClientCacheZosa.cacheRecommendation = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "Recommendation");
        ServiceClientCacheZosa.cacheRecordingSpaceInfo = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "RecordingSpaceInfo");
        ServiceClientCacheZosa.cacheRecordings = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "Recordings");
        ServiceClientCacheZosa.cacheSearch = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "Search");
        ServiceClientCacheZosa.cacheServiceProviders = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "ServiceProviders");
        ServiceClientCacheZosa.cacheTopMenuId = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel300, undefined, "TopMenuId");
        ServiceClientCacheZosa.cacheVasCategoryId = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "Categories");
        ServiceClientCacheZosa.cacheVasItems = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "VasItems");
        ServiceClientCacheZosa.cacheVods = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "Vods");
        ServiceClientCacheZosa.cacheConfigurableUserSettings = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "ConfigurableUserSettings");
        ServiceClientCacheZosa.cacheConfigurableUserSettingsValues = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel30, undefined, "ConfigurableUserSettingsValues");
        ServiceClientCacheZosa.cacheSatellites = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel300, 1, "Satellites");
        ServiceClientCacheZosa.cacheReferenceTransponders = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel300, 1, "ReferenceTransponders");
        ServiceClientCacheZosa.cacheTdsParameters = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel300, 1, "TdsParameters");
        ServiceClientCacheZosa.cacheGetCustomizeConfigParameters = new public_1.CacheHashMap(ServiceClientCacheZosa_1.timeLevel300, undefined, "CustomizeConfigParameters");
        ServiceClientCacheZosa.subscription = public_1.CacheManager.subscribe({
            next: function (data) {
                switch (data.reason) {
                    case "All":
                    case "Login":
                    case "ZosaError":
                        ServiceClientCacheZosa_1.cacheCategories.clear();
                        ServiceClientCacheZosa_1.cacheChannelNumbering.clear();
                        ServiceClientCacheZosa_1.cacheChannels.clear();
                        ServiceClientCacheZosa_1.cacheComfortFeatureState.clear();
                        ServiceClientCacheZosa_1.cacheDevices.clear();
                        ServiceClientCacheZosa_1.cacheFavoriteLists.clear();
                        ServiceClientCacheZosa_1.cacheItems.clear();
                        ServiceClientCacheZosa_1.cacheMasterStb.clear();
                        ServiceClientCacheZosa_1.cacheServiceProviders.clear();
                        ServiceClientCacheZosa_1.cacheTopMenuId.clear();
                        ServiceClientCacheZosa_1.cacheMediaPersons.clear();
                        ServiceClientCacheZosa_1.cacheOtherInstances.clear();
                        ServiceClientCacheZosa_1.cacheParentRecordings.clear();
                        ServiceClientCacheZosa_1.cacheParentalControlConfiguration.clear();
                        ServiceClientCacheZosa_1.cacheParentalControlUnblocking.clear();
                        ServiceClientCacheZosa_1.cacheSubscriberInfo.clear();
                        ServiceClientCacheZosa_1.cachePrograms.clear();
                        ServiceClientCacheZosa_1.cacheRecommendation.clear();
                        ServiceClientCacheZosa_1.cacheRecordingSpaceInfo.clear();
                        ServiceClientCacheZosa_1.cacheRecordings.clear();
                        ServiceClientCacheZosa_1.cacheSearch.clear();
                        ServiceClientCacheZosa_1.cacheVasCategoryId.clear();
                        ServiceClientCacheZosa_1.cacheVasItems.clear();
                        ServiceClientCacheZosa_1.cacheVods.clear();
                        ServiceClientCacheZosa_1.cacheConfigurableUserSettings.clear();
                        ServiceClientCacheZosa_1.cacheConfigurableUserSettingsValues.clear();
                        ServiceClientCacheZosa_1.cacheSatellites.clear();
                        ServiceClientCacheZosa_1.cacheReferenceTransponders.clear();
                        ServiceClientCacheZosa_1.cacheTdsParameters.clear();
                        ServiceClientCacheZosa_1.cacheGetCustomizeConfigParameters.clear();
                        break;
                    case "LockContent":
                    case "ParentalControl":
                        ServiceClientCacheZosa_1.cacheComfortFeatureState.clear();
                        ServiceClientCacheZosa_1.cacheMediaPersons.clear();
                        ServiceClientCacheZosa_1.cacheOtherInstances.clear();
                        ServiceClientCacheZosa_1.cacheParentRecordings.clear();
                        ServiceClientCacheZosa_1.cacheParentalControlConfiguration.clear();
                        ServiceClientCacheZosa_1.cacheParentalControlUnblocking.clear();
                        ServiceClientCacheZosa_1.cacheSubscriberInfo.clear();
                        ServiceClientCacheZosa_1.cachePrograms.clear();
                        ServiceClientCacheZosa_1.cacheRecommendation.clear();
                        ServiceClientCacheZosa_1.cacheRecordingSpaceInfo.clear();
                        ServiceClientCacheZosa_1.cacheRecordings.clear();
                        ServiceClientCacheZosa_1.cacheSearch.clear();
                        ServiceClientCacheZosa_1.cacheVasItems.clear();
                        ServiceClientCacheZosa_1.cacheVods.clear();
                        break;
                    case "ProgramUpdate":
                        ServiceClientCacheZosa_1.cachePrograms.clear();
                        ServiceClientCacheZosa_1.cacheRecordings.clear();
                        break;
                    case "Favorite":
                        ServiceClientCacheZosa_1.cacheChannels.clear();
                        ServiceClientCacheZosa_1.cacheFavoriteLists.clear();
                        ServiceClientCacheZosa_1.cachePrograms.clear();
                        ServiceClientCacheZosa_1.cacheParentRecordings.clear();
                        ServiceClientCacheZosa_1.cacheRecordings.clear();
                        break;
                    case "ChannelNumbering":
                        ServiceClientCacheZosa_1.cacheChannelNumbering.clear();
                        ServiceClientCacheZosa_1.cacheChannels.clear();
                        ServiceClientCacheZosa_1.cachePrograms.clear();
                        ServiceClientCacheZosa_1.cacheParentRecordings.clear();
                        ServiceClientCacheZosa_1.cacheRecordings.clear();
                        break;
                    case "Recording":
                        ServiceClientCacheZosa_1.cacheParentRecordings.clear();
                        ServiceClientCacheZosa_1.cacheRecordings.clear();
                        ServiceClientCacheZosa_1.cacheRecordingSpaceInfo.clear();
                        break;
                    case "Tune":
                        break;
                    case "Devices":
                        ServiceClientCacheZosa_1.cacheDevices.clear();
                        ServiceClientCacheZosa_1.cacheMasterStb.clear();
                        break;
                    case "MasterWakesUp":
                        ServiceClientCacheZosa_1.cacheParentRecordings.clear();
                        ServiceClientCacheZosa_1.cacheRecordings.clear();
                        ServiceClientCacheZosa_1.cacheRecordingSpaceInfo.clear();
                        break;
                    case "ConfigurableUserSettings":
                        ServiceClientCacheZosa_1.cacheConfigurableUserSettingsValues.clear();
                        break;
                    case "SatelliteConfigChange":
                        ServiceClientCacheZosa_1.cacheChannels.clear();
                        ServiceClientCacheZosa_1.cachePrograms.clear();
                        ServiceClientCacheZosa_1.cacheFavoriteLists.clear();
                        ServiceClientCacheZosa_1.cacheChannelNumbering.clear();
                        break;
                    case "TdsParameter":
                        ServiceClientCacheZosa_1.cacheTdsParameters.clear();
                        break;
                    case "GetCustomizeConfigParameter":
                        ServiceClientCacheZosa_1.cacheGetCustomizeConfigParameters.clear();
                        break;
                }
            }
        });
        ServiceClientCacheZosa.channelItemAllFields = [
            "channelNumber",
            "channelType",
            "cmsId",
            "customProps",
            "icon",
            "images",
            "isFavorited",
            "isHidden",
            "minViewingAge",
            "parentalRating",
            "pipStream",
            "streams",
            "title",
            "vasItems"
        ];
        ServiceClientCacheZosa.deviceItemAllFields = [
            "customProps",
            "deviceModel",
            "deviceType",
            "icon",
            "isCurrentDevice",
            "isOnline",
            "name",
            "physicalId",
            "title",
            "supportsWoL"
        ];
        ServiceClientCacheZosa.vasItemAllFields = [
            "cmsId",
            "customProps",
            "description",
            "icon",
            "images",
            "isBlocked",
            "isLocked",
            "minViewingAge",
            "parentalRating",
            "title",
            "url"
        ];
        ServiceClientCacheZosa = ServiceClientCacheZosa_1 = __decorate([
            public_1.logTag()
        ], ServiceClientCacheZosa);
        return ServiceClientCacheZosa;
    }());
    exports.ServiceClientCacheZosa = ServiceClientCacheZosa;
});
//# sourceMappingURL=ServiceClientCacheZosa.js.map