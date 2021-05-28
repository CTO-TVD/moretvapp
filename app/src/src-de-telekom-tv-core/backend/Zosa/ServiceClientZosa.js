var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "rxjs", "URIjs/URI", "bluebird", "src/src-de-telekom/public", "zosaJS", "../public", "./zosa.errors"], function (require, exports, rxjs_1, uriJS, bluebird, public_1, zosaJS, backend, zosa_errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientZosa = exports.DomainType = exports.ConfigurableUserSettingsKey = void 0;
    function validateZosaId(callback) {
        return function (target, key, descriptor) {
            var originalValue = descriptor.value;
            descriptor.value = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return originalValue.apply(this, args)
                    .then(function (data) {
                    var dataToValidate = callback(data);
                    if (dataToValidate && dataToValidate.length > 0 && dataToValidate.indexOf("zosa:") == -1) {
                        throw new backend.ZosaDataValidationError("The value '" + dataToValidate + "' returned from '" + key + "()' is not a ZosaId.");
                    }
                    else {
                        return data;
                    }
                });
            };
            return descriptor;
        };
    }
    var ConfigurableUserSettingsKey;
    (function (ConfigurableUserSettingsKey) {
        ConfigurableUserSettingsKey["STBNightlyReboot"] = "STBNightlyReboot";
        ConfigurableUserSettingsKey["STBNightlyRebootStartTime"] = "STBNightlyRebootStartTime";
        ConfigurableUserSettingsKey["STBNightlyRebootEndTime"] = "STBNightlyRebootEndTime";
        ConfigurableUserSettingsKey["STBNightlyRebootAfterUpTimeInMinutes"] = "STBNightlyRebootAfterUpTimeInMinutes";
        ConfigurableUserSettingsKey["STBNightlyRebootRetryDurationInMinutes"] = "STBNightlyRebootRetryDurationInMinutes";
        ConfigurableUserSettingsKey["STBSatSettings"] = "STBSatSettings";
        ConfigurableUserSettingsKey["STBDeviceSettings"] = "STBDeviceSettings";
        ConfigurableUserSettingsKey["StartPageOnOff"] = "StartPageOnOff";
        ConfigurableUserSettingsKey["PconLockForAgeRatings"] = "PconLockForAgeRatings";
        ConfigurableUserSettingsKey["PconLockForUnratedContent"] = "PconLockForUnratedContent";
        ConfigurableUserSettingsKey["PconLockForPurchase"] = "PconLockForPurchase";
        ConfigurableUserSettingsKey["PconLockForEroticContent"] = "PconLockForEroticContent";
        ConfigurableUserSettingsKey["PconLockForSearchResults"] = "PconLockForSearchResults";
        ConfigurableUserSettingsKey["PconComfortFeature"] = "PconComfortFeature";
        ConfigurableUserSettingsKey["RemoteControlAllowed"] = "RemoteControlAllowed";
        ConfigurableUserSettingsKey["PermissionProductImprovementsHistory"] = "permissionProductImprovementHistory";
        ConfigurableUserSettingsKey["PermissionInfoToThirdPartyHistory"] = "permissionInfoTo3rdPartyHistory";
        ConfigurableUserSettingsKey["PermissionPersonalizedUiHistory"] = "permissionPersonalizedUIHistory";
        ConfigurableUserSettingsKey["PermissionPersonalizedAdvertisingHistory"] = "permissionPersAdvertisingHistory";
        ConfigurableUserSettingsKey["PermissionInfoServiceHistory"] = "permissionInfoServiceHistory";
        ConfigurableUserSettingsKey["PermissionInfoToBroadcastersHistory"] = "permissionInfoToBroadcastersHistory";
    })(ConfigurableUserSettingsKey = exports.ConfigurableUserSettingsKey || (exports.ConfigurableUserSettingsKey = {}));
    var DomainType;
    (function (DomainType) {
        DomainType[DomainType["subscriber"] = 0] = "subscriber";
        DomainType[DomainType["device"] = 1] = "device";
        DomainType[DomainType["profile"] = 2] = "profile";
    })(DomainType = exports.DomainType || (exports.DomainType = {}));
    var ServiceClientZosa = (function () {
        function ServiceClientZosa() {
            var _this = this;
            this.eventManager = new public_1.EventManager();
            this.timeout = 60000;
            this.zosaInstance = new zosaJS();
            this.zosaCustomApi = {};
            this.subjectOnRecordingChanged = new rxjs_1.Subject();
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("constructor called.", ServiceClientZosa_1.TAG)); });
            this.zosaInstance.setOnDataUpdated(function (event) { return _this.eventManager.broadcast("onDataUpdated", event); });
            this.zosaInstance.setOnMessage(function (event) { return _this.eventManager.broadcast("onMessage", event); });
            this.zosaInstance.setOnParentalBlockingChanged(function (event) { return _this.eventManager.broadcast("onParentalBlockingChanged", event); });
            this.zosaInstance.setOnRecordingBandwidthConflict(function (event) { return _this.eventManager.broadcast("onRecordingBandwidthConflict", event); });
            this.zosaInstance.setOnRecordingChanged(function (event) { return _this.subjectOnRecordingChanged.next(event); });
            this.zosaInstance.setOnServiceProviderSessionError(function (event) {
                _this.zosaCustomApi = {};
                return _this.eventManager.broadcast("onServiceProviderSessionError", event);
            });
            this.zosaInstance.setOnSessionError(function (event) {
                _this.zosaCustomApi = {};
                return _this.eventManager.broadcast("onSessionError", event);
            });
        }
        ServiceClientZosa_1 = ServiceClientZosa;
        ServiceClientZosa.prototype.dispose = function () {
            this.zosaInstance.setOnDataUpdated(function (event) { });
            this.zosaInstance.setOnMessage(function (event) { });
            this.zosaInstance.setOnParentalBlockingChanged(function (event) { });
            this.zosaInstance.setOnRecordingBandwidthConflict(function (event) { });
            this.zosaInstance.setOnRecordingChanged(function (event) { });
            this.zosaInstance.setOnServiceProviderSessionError(function (event) { });
            this.zosaInstance.setOnSessionError(function (event) { });
        };
        ServiceClientZosa.create = function () {
            if (ServiceClientZosa_1.instance)
                ServiceClientZosa_1.instance.dispose();
            ServiceClientZosa_1.instance = new ServiceClientZosa_1();
            return ServiceClientZosa_1.instance;
        };
        ServiceClientZosa.prototype.getOnRecordingChangedSubject = function () {
            return this.subjectOnRecordingChanged;
        };
        ServiceClientZosa.prototype.login = function (context, parameters) {
            return this.toPromise(this.zosaInstance.login(parameters));
        };
        ServiceClientZosa.prototype.serviceProviderLogin = function (context, parameters) {
            return this.toPromise(this.zosaInstance.serviceProviderLogin(parameters));
        };
        ServiceClientZosa.prototype.getSubscriberInfo = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getSubscriberInfo(parameters));
        };
        ServiceClientZosa.prototype.createProgramsUpdatedObserver = function (context, parameters) {
            return this.toPromise(this.zosaInstance.createProgramsUpdatedObserver(parameters));
        };
        ServiceClientZosa.prototype.getPrograms = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getPrograms(parameters))
                .then(function (data) {
                public_1.Logger.debug(function (log) {
                    if (!data) {
                        log(public_1.LogMsg("getPrograms - response is null or undefined.", ServiceClientZosa_1.TAG));
                    }
                    else if (!data.data) {
                        log(public_1.LogMsg("getPrograms - data is null or undefined.", ServiceClientZosa_1.TAG));
                    }
                    else if (!data.data.elements) {
                        log(public_1.LogMsg("getPrograms - elements is null or undefined.", ServiceClientZosa_1.TAG));
                    }
                    else {
                        log(public_1.LogMsg("getPrograms - get " + data.data.elements.length + " program items.", ServiceClientZosa_1.TAG));
                    }
                });
                data.data.elements
                    .forEach(function (program) {
                    if (program && (!program.startTime || !program.endTime)) {
                        public_1.Logger.warn(function (log) { return log(public_1.LogMsg("getPrograms - StartTime or EndTime is missing for program '" + program.title + " (" + program.cmsId + ")'!", ServiceClientZosa_1.TAG)); });
                    }
                });
                return data;
            });
        };
        ServiceClientZosa.prototype.clearCustomChannelNumbering = function (context, parameters) {
            return this.toPromise(this.zosaInstance.clearCustomChannelNumbering(parameters));
        };
        ServiceClientZosa.prototype.getChannels = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getChannels(parameters));
        };
        ServiceClientZosa.prototype.getCustomChannelNumbering = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getCustomChannelNumbering(parameters));
        };
        ServiceClientZosa.prototype.setCustomChannelNumbering = function (context, parameters) {
            return this.toPromise(this.zosaInstance.setCustomChannelNumbering(parameters));
        };
        ServiceClientZosa.prototype.getDevices = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getDevices(parameters));
        };
        ServiceClientZosa.prototype.getMediaPersons = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getMediaPersons(parameters));
        };
        ServiceClientZosa.prototype.getOtherInstances = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getOtherInstances(parameters));
        };
        ServiceClientZosa.prototype.deleteMarkedRecordingConflicts = function (context, parameters) {
            return this.toPromise(this.zosaInstance.deleteMarkedRecordingConflicts(parameters));
        };
        ServiceClientZosa.prototype.getNextRecordingConflict = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getNextRecordingConflict(parameters));
        };
        ServiceClientZosa.prototype.getParentRecordings = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getParentRecordings(parameters));
        };
        ServiceClientZosa.prototype.getRecordingSpaceInfo = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getRecordingSpaceInfo(parameters));
        };
        ServiceClientZosa.prototype.getRecordings = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getRecordings(parameters))
                .then(function (response) {
                var _a;
                if ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.elements) {
                    if (response.data.elements.length > 1000) {
                        public_1.Logger.warn(function (log) { return log(public_1.LogMsg("getRecordings - the number of recordings reaches warn level. recording items: '" + response.data.elements.length + "' state: '" + parameters.state + "'", ServiceClientZosa_1.TAG)); });
                    }
                    else {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getRecordings - get " + response.data.elements.length + " recording items.", ServiceClientZosa_1.TAG)); });
                    }
                }
                return response;
            });
        };
        ServiceClientZosa.prototype.removeRecordings = function (context, parameters) {
            return this.toPromise(this.zosaInstance.removeRecordings(parameters));
        };
        ServiceClientZosa.prototype.scheduleIntervalRecording = function (context, parameters) {
            return this.toPromise(this.zosaInstance.scheduleIntervalRecording(parameters));
        };
        ServiceClientZosa.prototype.scheduleProgramRecording = function (context, parameters) {
            return this.toPromise(this.zosaInstance.scheduleProgramRecording(parameters));
        };
        ServiceClientZosa.prototype.updateParentRecording = function (context, parameters) {
            return this.toPromise(this.zosaInstance.updateParentRecording(parameters));
        };
        ServiceClientZosa.prototype.updateRecording = function (context, parameters) {
            return this.toPromise(this.zosaInstance.updateRecording(parameters));
        };
        ServiceClientZosa.prototype.updateRecordingConflict = function (context, parameters) {
            return this.toPromise(this.zosaInstance.updateRecordingConflict(parameters));
        };
        ServiceClientZosa.prototype.getServiceProviders = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getServiceProviders(parameters));
        };
        ServiceClientZosa.prototype.updateDevice = function (context, parameters) {
            return this.toPromise(this.zosaInstance.updateDevice(parameters));
        };
        ServiceClientZosa.prototype.getCategories = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getCategories(parameters));
        };
        ServiceClientZosa.prototype.getVasItems = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getVasItems(parameters));
        };
        ServiceClientZosa.prototype.getVods = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getVods(parameters));
        };
        ServiceClientZosa.prototype.createPlaybackSession = function (context, parameters) {
            return this.toPromise(this.zosaInstance.createPlaybackSession(parameters));
        };
        ServiceClientZosa.prototype.getItems = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getItems(parameters));
        };
        ServiceClientZosa.prototype.addFavorites = function (context, parameters) {
            return this.toPromise(this.zosaInstance.addFavorites(parameters));
        };
        ServiceClientZosa.prototype.getFavoriteLists = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getFavoriteLists(parameters));
        };
        ServiceClientZosa.prototype.removeFavorites = function (context, parameters) {
            return this.toPromise(this.zosaInstance.removeFavorites(parameters));
        };
        ServiceClientZosa.prototype.getBandwidthInfo = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getBandwidthInfo(parameters));
        };
        ServiceClientZosa.prototype.releaseBandwidthBookings = function (context, parameters) {
            return this.toPromise(this.zosaInstance.releaseBandwidthBookings(parameters));
        };
        ServiceClientZosa.prototype.createCustomApi = function (context, parameters, callback) {
            var _this = this;
            if (!this.zosaCustomApi[parameters.apiName]) {
                this.zosaCustomApi[parameters.apiName] = this.toPromise(this.zosaInstance.createCustomApi(parameters))
                    .then(function (response) {
                    response.data.setOnCustomApiEvent(function (event) { return _this.eventManager.broadcast("onCustomApi" + parameters.apiName, event); });
                    return response.data;
                })
                    .catch(function (error) {
                    delete _this.zosaCustomApi[parameters.apiName];
                    return bluebird.reject(error);
                });
            }
            return this.zosaCustomApi[parameters.apiName]
                .then(function (customApi) { return callback(customApi); })
                .catch(function (error) {
                if (error instanceof backend.ZosaUnknownError
                    && error.message
                    && error.message.indexOf("Failed to call custom API") !== -1) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("remove all custom API entries from cache", ServiceClientZosa_1.TAG)); });
                    _this.zosaCustomApi = {};
                    error.message += " apiName: " + parameters.apiName;
                }
                return bluebird.reject(error);
            });
        };
        ServiceClientZosa.prototype.getRecommendation = function (context, parameters) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_BACKEND_DATA_ACCESS }, function (response) {
                var requestURI = uriJS("/recommendations/ngtv/" + parameters.recommendationProfileId + "/" + parameters.scenarioId + "/")
                    .addSearch(parameters)
                    .removeSearch(["recommendationProfileId", "scenarioId"]);
                var callParameters = {
                    functionName: "GET",
                    input: { url: requestURI.valueOf() }
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(_this.parseZosaData(response.data.data, "0x05")), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.getVasCategoryId = function (context) {
            var _this = this;
            if (public_1.Feature.getValue("vasCategoryId")[0]) {
                return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(public_1.Feature.getValue("vasCategoryId")[0])));
            }
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_BACKEND_DATA_ACCESS }, function (response) {
                var callParameters = {
                    functionName: "GetVasCategoryId"
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(response.data.vasCategoryId), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.search = function (context, parameters) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_BACKEND_DATA_ACCESS }, function (response) {
                parameters.query = parameters.query || "*";
                parameters.size = (parameters.size || 0) >= 0 ? parameters.size : 10;
                var requestURI = uriJS("/search/ngtv/select/" + parameters.searchProfileId + "/")
                    .addSearch(parameters)
                    .removeSearch("searchProfileId");
                var callParameters = {
                    functionName: "GET",
                    input: { url: requestURI.valueOf() }
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) {
                    if (!response.data || !response.data.data) {
                        throw new zosa_errors_1.ZosaDataValidationError("search returns wrong format");
                    }
                    else {
                        return new public_1.MetaInfoService(new public_1.MetaInfoData(_this.parseZosaData(response.data.data, "0x06")), response.serviceData);
                    }
                });
            });
        };
        ServiceClientZosa.prototype.getTdsParameters = function (context, parameterNames, httpHeaders) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_BACKEND_DATA_ACCESS }, function (response) {
                var tdsGetParams = {
                    parameterName: parameterNames
                };
                var input = {
                    apiName: "TDSGet",
                    requestBody: JSON.stringify(tdsGetParams),
                    requestHeaders: httpHeaders && httpHeaders.length > 0 ? JSON.stringify(httpHeaders) : undefined
                };
                var callParameters = {
                    functionName: "CallBackendApi",
                    input: input
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) {
                    if (!response.data || !response.data.data) {
                        throw new zosa_errors_1.ZosaDataValidationError("search returns wrong format");
                    }
                    else {
                        return new public_1.MetaInfoService(new public_1.MetaInfoData(_this.parseZosaData(response.data.data, "0xFF")), response.serviceData);
                    }
                });
            });
        };
        ServiceClientZosa.prototype.setTdsParameters = function (context, parameters, httpHeaders) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_BACKEND_DATA_ACCESS }, function (response) {
                var tdsSetParams = {
                    parameters: parameters
                };
                var input = {
                    apiName: "TDSSet",
                    requestBody: JSON.stringify(tdsSetParams),
                    requestHeaders: JSON.stringify(httpHeaders)
                };
                var callParameters = {
                    functionName: "CallBackendApi",
                    input: input
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.getCustomizeConfigParameters = function (context, parameters) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_BACKEND_DATA_ACCESS }, function (response) {
                var customizeConfigParameters = {
                    parameters: parameters
                };
                var input = {
                    apiName: "GetCustomizeConfig",
                    requestBody: JSON.stringify(customizeConfigParameters)
                };
                var callParameters = {
                    functionName: "CallBackendApi",
                    input: input
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) {
                    var _a;
                    if (!response.data || !response.data.data) {
                        throw new zosa_errors_1.ZosaDataValidationError("search returns wrong format");
                    }
                    else {
                        var structuredResponse = _this.parseZosaData(response.data.data, "0xFF");
                        (_a = structuredResponse.extensionInfo) === null || _a === void 0 ? void 0 : _a.forEach(function (entryPair) {
                            if (entryPair.key === "ATI_VOICE_PAGE_HITS_ENABLED" && entryPair.value !== undefined && typeof entryPair.value === "string") {
                                entryPair.value = entryPair.value.toLowerCase();
                                switch (entryPair.value) {
                                    case ("yes"):
                                        entryPair.value = true;
                                        break;
                                    case ("no"):
                                        entryPair.value = false;
                                        break;
                                    default:
                                        entryPair.value = true;
                                }
                            }
                        });
                        return new public_1.MetaInfoService(new public_1.MetaInfoData(structuredResponse), response.serviceData);
                    }
                });
            });
        };
        ServiceClientZosa.prototype.getBandwithManagerServerUrl = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_BANDWITH_MANAGER_SERVER_URL }, function (response) {
                var callParameters = {
                    functionName: "BandwidthManagerServerUrl",
                    input: {}
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(response.data.BandwidthManagerServerUrl), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.getLoginInformation = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_LOGININFORMATION }, function (response) {
                var callParameters = {
                    functionName: "GetCurrentLoginInformation",
                    input: {}
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) {
                    return new public_1.MetaInfoService(new public_1.MetaInfoData(response.data), response.serviceData);
                });
            });
        };
        ServiceClientZosa.prototype.getMasterStb = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_MASTER_STB }, function (response) {
                var callParameters = {
                    functionName: "GET",
                    input: {}
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(response.data.MasterSTB), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.resetMasterStb = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_MASTER_STB }, function (response) {
                var callParameters = {
                    functionName: "RESET",
                    input: {}
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.setMasterStb = function (context, parameters) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_MASTER_STB }, function (response) {
                var callParameters = {
                    functionName: "SET",
                    input: parameters
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.createVod = function (context, parameters) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_CREATE_VOD }, function (response) {
                var callParameters = {
                    functionName: "CreateVod",
                    input: parameters
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.isPlatformReachable = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_DIAGNOSTICS }, function (response) {
                var callParameters = {
                    functionName: "isPlatformReachable",
                    input: {}
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(true), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.getConfig = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_UIUPGRADE }, function (response) {
                var callParameters = {
                    functionName: "getConfig",
                    input: {}
                };
                var result = response.call(callParameters);
                return _this.toPromise(result);
            });
        };
        ServiceClientZosa.prototype.activateComfortFeature = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_PARENTAL_CONTROL }, function (response) {
                var callParameters = {
                    functionName: "ActivateComfortFeature",
                    input: {}
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.deactivateComfortFeature = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_PARENTAL_CONTROL }, function (response) {
                var callParameters = {
                    functionName: "DeactivateComfortFeature",
                    input: {}
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.getConfigurableUserSettings = function (context, parameters) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_CONFIGURABLE_USER_SETTINGS }, function (response) {
                var callParameters = {
                    functionName: "GetSettings",
                    input: parameters
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) {
                    var result = JSON.parse(response.data.settings);
                    return new public_1.MetaInfoService(new public_1.MetaInfoData(result), response.serviceData);
                });
            });
        };
        ServiceClientZosa.prototype.getConfigurableUserSettingsValues = function (context, parameters) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_CONFIGURABLE_USER_SETTINGS }, function (response) {
                var callParameters = {
                    functionName: "GetValues",
                    input: parameters
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) {
                    var result = JSON.parse(response.data.values);
                    return new public_1.MetaInfoService(new public_1.MetaInfoData(result), response.serviceData);
                });
            });
        };
        ServiceClientZosa.prototype.setConfigurableUserSettingsValues = function (context, parameters) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_CONFIGURABLE_USER_SETTINGS }, function (response) {
                var callParameters = {
                    functionName: "SetValues",
                    input: parameters
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.getParentalControlConfiguration = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_PARENTAL_CONTROL }, function (response) {
                var callParameters = {
                    functionName: "GetConfiguration",
                    input: {}
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) {
                    var result = {
                        ageRatingCfg: _this.parseZosaData(response.data.ageRatingCfg, "0x07"),
                        parentalCtrlCfg: _this.parseZosaData(response.data.parentalCtrlCfg, "0x08")
                    };
                    return new public_1.MetaInfoService(new public_1.MetaInfoData(result), response.serviceData);
                });
            });
        };
        ServiceClientZosa.prototype.getBandwidthManagerType = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_BANDITH_MANAGER_TYPE }, function (response) {
                var callParameters = {
                    functionName: "BandwidthManagerType",
                    input: {}
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) {
                    var result = {
                        BandwidthManagerType: response.data.BandwidthManagerType
                    };
                    return new public_1.MetaInfoService(new public_1.MetaInfoData(result), response.serviceData);
                });
            });
        };
        ServiceClientZosa.prototype.getComfortFeatureStatus = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_PARENTAL_CONTROL }, function (response) {
                var callParameters = {
                    functionName: "GetComfortFeatureStatus",
                    input: {}
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) {
                    var result = {
                        comfortFeatureRemainingTime: response.data.comfortFeatureRemainingTime
                    };
                    return new public_1.MetaInfoService(new public_1.MetaInfoData(result), response.serviceData);
                });
            });
        };
        ServiceClientZosa.prototype.removeOtherStbDevices = function (context, parameters) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_REMOVE_OTHER_STB_DEVICES }, function (response) {
                var callParameters = {
                    functionName: "RemoveOtherStbDevices",
                    input: parameters ? { models: JSON.stringify(parameters.models) } : {}
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.isComfortFeatureActive = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_PARENTAL_CONTROL }, function (response) {
                var callParameters = {
                    functionName: "IsComfortFeatureActive",
                    input: {}
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) {
                    var result = {
                        isActive: response.data.isActive == "1"
                    };
                    return new public_1.MetaInfoService(new public_1.MetaInfoData(result), response.serviceData);
                });
            });
        };
        ServiceClientZosa.prototype.setParentalControlConfiguration = function (context, parameters) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_PARENTAL_CONTROL }, function (response) {
                var callParameters = {
                    functionName: "SetConfiguration",
                    input: {
                        parentalCtrlCfg: JSON.stringify(parameters.parentalCtrlCfg),
                        ageRatingCfg: JSON.stringify(parameters.ageRatingCfg)
                    }
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.getDTSubscriberInfo = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_SUBSCRIBER_INFO }, function (response) {
                var callParameters = {
                    functionName: "GET",
                    input: {}
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) {
                    var result = {
                        RecCfgDefinition: Number(response.data.RecCfgDefinition),
                        RecCfgKeepMode: Number(response.data.RecCfgKeepMode),
                        RecCfgSingleOrSeries: response.data.RecCfgSingleOrSeries,
                        RecCfgOneClickEnable: Number(response.data.RecCfgOneClickEnable),
                        RecCfgSeriesTimeMode: Number(response.data.RecCfgSeriesTimeMode),
                        RecCfgPVRType: Number(response.data.RecCfgPVRType),
                        RecCfgPrePadding: Number(response.data.RecCfgPrePadding),
                        RecCfgPostPadding: Number(response.data.RecCfgPostPadding),
                        DefaultPlayDefinition: response.data.DefaultPlayDefinition
                    };
                    return new public_1.MetaInfoService(new public_1.MetaInfoData(result), response.serviceData);
                });
            });
        };
        ServiceClientZosa.prototype.setSubscriberInfo = function (context, parameters) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_SUBSCRIBER_INFO }, function (response) {
                var input = {};
                input.RecCfgDefinition = JSON.stringify(parameters.RecCfgDefinition);
                input.RecCfgKeepMode = JSON.stringify(parameters.RecCfgKeepMode);
                input.RecCfgSingleOrSeries = parameters.RecCfgSingleOrSeries;
                input.RecCfgOneClickEnable = JSON.stringify(parameters.RecCfgOneClickEnable);
                if (parameters.RecCfgSeriesTimeMode != undefined && parameters.RecCfgSeriesTimeMode != null) {
                    input.RecCfgSeriesTimeMode = JSON.stringify(parameters.RecCfgSeriesTimeMode);
                }
                input.RecCfgPVRType = JSON.stringify(parameters.RecCfgPVRType);
                input.RecCfgPrePadding = JSON.stringify(parameters.RecCfgPrePadding);
                input.RecCfgPostPadding = JSON.stringify(parameters.RecCfgPostPadding);
                var callParameters = {
                    functionName: "SET",
                    input: input
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.setImageDownloadConfig = function (context, parameters) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_IMAGE_DOWNLOAD_CONFIG }, function (response) {
                var callParameters = {
                    functionName: "SetRecordingImageDownloadConfigParams",
                    input: parameters ? {
                        images: JSON.stringify(parameters.images),
                        downloadUrlTemplate: parameters.downloadUrlTemplate
                    } : {}
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.getParentalBlockingStatus = function (context, parameters) {
            return this.toPromise(this.zosaInstance.getParentalBlockingStatus(parameters));
        };
        ServiceClientZosa.prototype.parentalUnblock = function (context, parameters) {
            return this.toPromise(this.zosaInstance.parentalUnblock(parameters));
        };
        ServiceClientZosa.prototype.resetAllParentalUnblockings = function (context, parameters) {
            return this.toPromise(this.zosaInstance.resetAllParentalUnblockings(parameters));
        };
        ServiceClientZosa.prototype.resetParentalUnblocking = function (context, parameters) {
            return this.toPromise(this.zosaInstance.resetParentalUnblocking(parameters));
        };
        ServiceClientZosa.prototype.onDataUpdated = function (evtHandlerFunction) {
            return this.eventManager.on("onDataUpdated", evtHandlerFunction, ServiceClientZosa_1.TAG);
        };
        ServiceClientZosa.prototype.onMessage = function (evtHandlerFunction) {
            return this.eventManager.on("onMessage", evtHandlerFunction, ServiceClientZosa_1.TAG);
        };
        ServiceClientZosa.prototype.onParentalBlockingChanged = function (evtHandlerFunction) {
            return this.eventManager.on("onParentalBlockingChanged", evtHandlerFunction, ServiceClientZosa_1.TAG);
        };
        ServiceClientZosa.prototype.onRecordingBandwidthConflict = function (evtHandlerFunction) {
            return this.eventManager.on("onRecordingBandwidthConflict", evtHandlerFunction, ServiceClientZosa_1.TAG);
        };
        ServiceClientZosa.prototype.onRecordingChanged = function (evtHandlerFunction) {
            return this.eventManager.on("onRecordingChanged", evtHandlerFunction, ServiceClientZosa_1.TAG);
        };
        ServiceClientZosa.prototype.onServiceProviderSessionError = function (evtHandlerFunction) {
            return this.eventManager.on("onServiceProviderSessionError", evtHandlerFunction, ServiceClientZosa_1.TAG);
        };
        ServiceClientZosa.prototype.onSessionError = function (evtHandlerFunction) {
            return this.eventManager.on("onSessionError", evtHandlerFunction, ServiceClientZosa_1.TAG);
        };
        ServiceClientZosa.prototype.onCustomApiCreateVod = function (evtHandlerFunction) {
            return this.eventManager.on("onCustomApi" + ServiceClientZosa_1.CUSTOM_API_DT_CREATE_VOD, evtHandlerFunction, ServiceClientZosa_1.TAG);
        };
        ServiceClientZosa.prototype.onCustomApiMasterStb = function (evtHandlerFunction) {
            return this.eventManager.on("onCustomApi" + ServiceClientZosa_1.CUSTOM_API_MASTER_STB, evtHandlerFunction, ServiceClientZosa_1.TAG);
        };
        ServiceClientZosa.prototype.onCustomApiDFCC = function (evtHandlerFunction) {
            return this.eventManager.on("onCustomApi" + ServiceClientZosa_1.CUSTOM_API_DFCC, evtHandlerFunction, ServiceClientZosa_1.TAG);
        };
        ServiceClientZosa.prototype.getSatellites = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_SATELLITE_INFORMATION_MANAGER }, function (response) {
                var callParameters = {
                    functionName: "GetSatellites"
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) {
                    var satelllites = JSON.parse(response.data.satellites);
                    return new public_1.MetaInfoService(new public_1.MetaInfoData(satelllites), response.serviceData);
                });
            });
        };
        ServiceClientZosa.prototype.getReferenceTransponders = function (context, satelliteId) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_SATELLITE_INFORMATION_MANAGER }, function (response) {
                var params = {
                    satelliteId: satelliteId
                };
                var callParameters = {
                    functionName: "GetReferenceTransponders",
                    input: params
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) {
                    var satelliteReferenceTransponders = JSON.parse(response.data.referenceTransponders);
                    return new public_1.MetaInfoService(new public_1.MetaInfoData(satelliteReferenceTransponders), response.serviceData);
                });
            });
        };
        ServiceClientZosa.prototype.getSatelliteConfig = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_SATELLITE_INFORMATION_MANAGER }, function (response) {
                var callParameters = {
                    functionName: "GetSatelliteConfig"
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) {
                    var result = public_1.Guard.isString(response.data.satelliteConfig) ? JSON.parse(response.data.satelliteConfig) : [];
                    return new public_1.MetaInfoService(new public_1.MetaInfoData(result), response.serviceData);
                });
            });
        };
        ServiceClientZosa.prototype.setSatelliteConfig = function (context, parameters) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DT_SATELLITE_INFORMATION_MANAGER }, function (response) {
                var params = {
                    satelliteConfig: JSON.stringify(parameters)
                };
                var callParameters = {
                    functionName: "SetSatelliteConfig",
                    input: params
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.getDFCC = function (context) {
            var _this = this;
            return this.createCustomApi(context, { apiName: ServiceClientZosa_1.CUSTOM_API_DFCC }, function (response) {
                var callParameters = {
                    functionName: "GetDFCC"
                };
                var result = response.call(callParameters);
                return _this.toPromise(result)
                    .then(function (response) { return new public_1.MetaInfoService(new public_1.MetaInfoData(response.data.DFCC), response.serviceData); });
            });
        };
        ServiceClientZosa.prototype.toPromise = function (request, serviceData) {
            var _this = this;
            if (serviceData === void 0) { serviceData = new public_1.MetaInfoServiceData(); }
            return new bluebird(function (resolve, reject) {
                var handle = setTimeout(function () {
                    reject(new backend.ZosaInternalTimeoutError("The " + ServiceClientZosa_1.TAG + " does not answer within the defined timeout."));
                }, _this.timeout);
                request.success(function (event) {
                    clearTimeout(handle);
                    serviceData.responseTime = new Date();
                    resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(event.response), serviceData));
                });
                request.failure(function (event) {
                    clearTimeout(handle);
                    if (event === null || event === void 0 ? void 0 : event.error) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Error code: " + event.error.code + " [" + (event.error.code == _this.zosaInstance.UNKNOWN_ERROR ? "UNKNOWN" : "TYPED") + "]", ServiceClientZosa_1.TAG)); });
                        switch (event.error.code) {
                            case _this.zosaInstance.ACOUNT_IS_LOCKED:
                                reject(new backend.ZosaAccountLockedError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.CANCELED:
                                reject(new backend.ZosaCanceledError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.COMMUNICATION_ERROR:
                                reject(new backend.ZosaCommunicationError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.CONTENT_RESTRICTION:
                                reject(new backend.ZosaContentRestrictionError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.FEATURE_NOT_SUPPORTED:
                                reject(new backend.ZosaFeatureNotSupportedError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.INSUFFICIENT_BANDWIDTH:
                                var errorBandwidth = event.error;
                                if (_this.isZosaRecordingConflictError(errorBandwidth)) {
                                    var recordingConflictError = new backend.ZosaRecordingConflictError(errorBandwidth.message, event.error);
                                    recordingConflictError.conflictId = errorBandwidth.conflictId;
                                    recordingConflictError.conflicts = errorBandwidth.conflicts;
                                    recordingConflictError.recommendedSchedulingOption = errorBandwidth.recommendedSchedulingOption;
                                    reject(recordingConflictError);
                                    break;
                                }
                                reject(new backend.ZosaInsufficientBandwidthError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.INSUFFICIENT_RESOURCES:
                                var error = event.error;
                                if (_this.isZosaRecordingConflictError(error)) {
                                    var recordingConflictError = new backend.ZosaRecordingConflictError(error.message, event.error);
                                    recordingConflictError.conflictId = error.conflictId;
                                    recordingConflictError.conflicts = error.conflicts;
                                    recordingConflictError.recommendedSchedulingOption = error.recommendedSchedulingOption;
                                    reject(recordingConflictError);
                                    break;
                                }
                                reject(new backend.ZosaInsufficientResourcesError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.INSUFFICIENT_WAN_BANDWIDTH:
                                reject(new backend.ZosaInsufficientWanBandwidthError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.INSUFFICIENT_STORAGE:
                                reject(new backend.ZosaInsufficientStorageError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.ALREADY_EXISTS:
                                reject(new backend.ZosaAlreadyExistsError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.INVALID_CREDENTIALS:
                                reject(new backend.ZosaInvalidCredentialsError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.INVALID_OPERATION:
                                reject(new backend.ZosaInvalidOperationError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.INVALID_PARAMETER:
                                reject(new backend.ZosaInvalidParameterError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.NOT_FOUND:
                                reject(new backend.ZosaNotFoundError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.NOT_LOGGED_IN:
                                reject(new backend.ZosaNotLoggedInError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.NOT_PROVISIONED:
                                reject(new backend.ZosaNotProvisionedError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.DEVICE_NOT_AVAILABLE:
                                reject(new backend.ZosaDeviceNotAvailableError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.NOT_SUBSCRIBED:
                                reject(new backend.ZosaNotSubscribedError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.OPERATION_PENDING:
                                reject(new backend.ZosaOperationPendingError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.PARENTAL_CONTROL_BLOCKED:
                                reject(new backend.ZosaParentalControlBlockedError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.RESTRICTED_ACCESS:
                                reject(new backend.ZosaRestrictedAccessError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.SESSION_EXPIRED:
                                reject(new backend.ZosaSessionExpiredError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.TIMEOUT:
                                reject(new backend.ZosaTimeoutError(event.error.message, event.error));
                                break;
                            case _this.zosaInstance.UNKNOWN_ERROR:
                                reject(new backend.ZosaUnknownError(event.error.message, event.error));
                                break;
                            default:
                                reject(new backend.ZosaDefaultFallbackError(event.error.message, event.error));
                                break;
                        }
                    }
                    else {
                        reject(new public_1.IOError("The " + ServiceClientZosa_1.TAG + " error response does not contain error information."));
                    }
                });
            });
        };
        ServiceClientZosa.prototype.parseZosaData = function (data, additionalErrorCode) {
            try {
                return data ? JSON.parse(data) : data;
            }
            catch (error) {
                throw new backend.ZosaParseError("Error while parsing string data. Error: '" + error.message + "' Data: '" + data + "'", additionalErrorCode);
            }
        };
        ServiceClientZosa.prototype.isZosaRecordingConflictError = function (arg) {
            return (arg.conflictId !== undefined) || (arg.conflicts !== undefined);
        };
        ServiceClientZosa.getRecordingStateInfo = function (zosaStatic, recordingState) {
            return ServiceClientZosa_1.getTypeInfo(zosaStatic, [
                "RECORDING_STATE_COMPLETE",
                "RECORDING_STATE_CONFLICT",
                "RECORDING_STATE_FAILED",
                "RECORDING_STATE_NONE",
                "RECORDING_STATE_OFFLINE",
                "RECORDING_STATE_ONGOING",
                "RECORDING_STATE_PARTIALLY_COMPLETE",
                "RECORDING_STATE_SCHEDULED"
            ], recordingState);
        };
        ServiceClientZosa.getRecordingTypeInfo = function (zosaStatic, recordingType) {
            return ServiceClientZosa_1.getTypeInfo(zosaStatic, [
                "RECORDING_TYPE_CPVR",
                "RECORDING_TYPE_NONE",
                "RECORDING_TYPE_NPVR",
                "RECORDING_TYPE_NPVR_CPVR"
            ], recordingType);
        };
        ServiceClientZosa.getRecordingSourceInfo = function (zosaStatic, recordingSource) {
            return ServiceClientZosa_1.getTypeInfo(zosaStatic, [
                "SOURCE_DVB",
                "SOURCE_IP"
            ], recordingSource);
        };
        ServiceClientZosa.getDeleteModeInfo = function (zosaStatic, deleteMode) {
            return ServiceClientZosa_1.getTypeInfo(zosaStatic, [
                "RECORDING_DELETE_MODE_AUTO",
                "RECORDING_DELETE_MODE_MANUAL",
                "RECORDING_DELETE_MODE_RETAIN_EPISODES"
            ], deleteMode);
        };
        ServiceClientZosa.getTypeInfo = function (obj, fields, value) {
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                if (obj[field] === value) {
                    return value + " [" + field + "]";
                }
            }
            return value + " [unknown]";
        };
        var ServiceClientZosa_1;
        ServiceClientZosa.classID = 0x101;
        ServiceClientZosa.CUSTOM_API_DT_BACKEND_DATA_ACCESS = "DT-BackendDataAccess";
        ServiceClientZosa.CUSTOM_API_DT_CONFIGURABLE_USER_SETTINGS = "DT-ConfigurableUserSettings";
        ServiceClientZosa.CUSTOM_API_DT_CREATE_VOD = "DT-CreateVod";
        ServiceClientZosa.CUSTOM_API_DT_DIAGNOSTICS = "DT-Diagnostics";
        ServiceClientZosa.CUSTOM_API_DT_SUBSCRIBER_INFO = "DT-SubscriberInfo";
        ServiceClientZosa.CUSTOM_API_DT_UIUPGRADE = "DT-UIUpgrade";
        ServiceClientZosa.CUSTOM_API_MASTER_STB = "MasterSTB";
        ServiceClientZosa.CUSTOM_API_DT_SATELLITE_INFORMATION_MANAGER = "DT-SatelliteInformationManager";
        ServiceClientZosa.CUSTOM_API_PARENTAL_CONTROL = "DT-ParentalControl";
        ServiceClientZosa.CUSTOM_API_BANDITH_MANAGER_TYPE = "BandwidthManagerTypeApi";
        ServiceClientZosa.CUSTOM_API_REMOVE_OTHER_STB_DEVICES = "RemoveOtherStbDevicesApi";
        ServiceClientZosa.CUSTOM_API_IMAGE_DOWNLOAD_CONFIG = "ImageDownloadConfigApi";
        ServiceClientZosa.CUSTOM_API_DFCC = "DT-Dfcc";
        ServiceClientZosa.CUSTOM_API_BANDWITH_MANAGER_SERVER_URL = "BandwidthManagerServerUrlApi";
        ServiceClientZosa.CUSTOM_API_DT_LOGININFORMATION = "DT-LoginInformation";
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "login", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "serviceProviderLogin", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getSubscriberInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "createProgramsUpdatedObserver", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, outlen: 0, parameters: [1], monitorPromise: true, monitorThreshold: 1500 }); })
        ], ServiceClientZosa.prototype, "getPrograms", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "clearCustomChannelNumbering", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1], monitorPromise: true, monitorThreshold: 1500 }); })
        ], ServiceClientZosa.prototype, "getChannels", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getCustomChannelNumbering", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "setCustomChannelNumbering", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1], monitorPromise: true, monitorThreshold: 1500 }); })
        ], ServiceClientZosa.prototype, "getDevices", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1], monitorPromise: true, monitorThreshold: 1500 }); })
        ], ServiceClientZosa.prototype, "getMediaPersons", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1], monitorPromise: true, monitorThreshold: 1500 }); })
        ], ServiceClientZosa.prototype, "getOtherInstances", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "deleteMarkedRecordingConflicts", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getNextRecordingConflict", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1], monitorPromise: true, monitorThreshold: 1500 }); })
        ], ServiceClientZosa.prototype, "getParentRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1], monitorPromise: true, monitorThreshold: 1500 }); })
        ], ServiceClientZosa.prototype, "getRecordingSpaceInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1], monitorPromise: true, monitorThreshold: 1500 }); })
        ], ServiceClientZosa.prototype, "getRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "removeRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "scheduleIntervalRecording", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "scheduleProgramRecording", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "updateParentRecording", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "updateRecording", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "updateRecordingConflict", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getServiceProviders", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "updateDevice", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getCategories", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getVasItems", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getVods", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "createPlaybackSession", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getItems", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "addFavorites", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getFavoriteLists", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "removeFavorites", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getBandwidthInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "releaseBandwidthBookings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "createCustomApi", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getRecommendation", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getVasCategoryId", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "search", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getTdsParameters", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "setTdsParameters", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getCustomizeConfigParameters", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getBandwithManagerServerUrl", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getLoginInformation", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); }),
            validateZosaId(function (data) { return data.data; })
        ], ServiceClientZosa.prototype, "getMasterStb", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "resetMasterStb", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "setMasterStb", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "createVod", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "isPlatformReachable", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getConfig", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "activateComfortFeature", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "deactivateComfortFeature", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, outlen: 20000, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getConfigurableUserSettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, outlen: 20000, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getConfigurableUserSettingsValues", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "setConfigurableUserSettingsValues", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getParentalControlConfiguration", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getBandwidthManagerType", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getComfortFeatureStatus", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "removeOtherStbDevices", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "isComfortFeatureActive", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "setParentalControlConfiguration", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getDTSubscriberInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "setSubscriberInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "setImageDownloadConfig", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getParentalBlockingStatus", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "parentalUnblock", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "resetAllParentalUnblockings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "resetParentalUnblocking", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "setSatelliteConfig", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosa_1.TAG, parameters: [1] }); })
        ], ServiceClientZosa.prototype, "getDFCC", null);
        ServiceClientZosa = ServiceClientZosa_1 = __decorate([
            public_1.logTag()
        ], ServiceClientZosa);
        return ServiceClientZosa;
    }());
    exports.ServiceClientZosa = ServiceClientZosa;
});
//# sourceMappingURL=ServiceClientZosa.js.map