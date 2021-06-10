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
define(["require", "exports", "bluebird", "./zenterioTime", "src/src-de-telekom/public", "./zosa.errors", "./ServiceClientCacheZosa", "./ServiceClientContextZosa", "./zosa.static", "./ServiceClientZosa"], function (require, exports, bluebird, zenterioTime_1, public_1, zosa_errors_1, ServiceClientCacheZosa_1, ServiceClientContextZosa_1, zosa_static_1, ServiceClientZosa_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientAuthenticationZosa = exports.ConfigurableUserSettingsError = void 0;
    var ConfigurableUserSettingsError = (function (_super) {
        __extends(ConfigurableUserSettingsError, _super);
        function ConfigurableUserSettingsError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x62D;
            return _this;
        }
        return ConfigurableUserSettingsError;
    }(public_1.BaseError));
    exports.ConfigurableUserSettingsError = ConfigurableUserSettingsError;
    var ServiceClientAuthenticationZosa = (function () {
        function ServiceClientAuthenticationZosa() {
        }
        ServiceClientAuthenticationZosa_1 = ServiceClientAuthenticationZosa;
        ServiceClientAuthenticationZosa.getAuthenticationProcess = function () {
            return ServiceClientAuthenticationZosa_1.deferAuthentication.promise;
        };
        ServiceClientAuthenticationZosa.onAuthenticationProcessError = function (evtHandlerFunction) {
            return ServiceClientAuthenticationZosa_1.eventManager.on("onAuthenticationProcessError", evtHandlerFunction, ServiceClientAuthenticationZosa_1.TAG);
        };
        ServiceClientAuthenticationZosa.broadcastAuthenticationProcessError = function (event) {
            ServiceClientAuthenticationZosa_1.eventManager.broadcast("onAuthenticationProcessError", event);
        };
        ServiceClientAuthenticationZosa.getSubscriberInfo = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getSubscriberInfo(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.createProgramsUpdatedObserver = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.createProgramsUpdatedObserver(context, parameters); });
        };
        ServiceClientAuthenticationZosa.getPrograms = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                if (parameters && (parameters.serviceProviderProgramIds || parameters.externalProgramIds || parameters.dvbEventId)) {
                    parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                }
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getPrograms(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.clearCustomChannelNumbering = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                if (parameters.serviceProvider !== undefined) {
                    parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                }
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.clearCustomChannelNumbering(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.getChannels = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                if (parameters.serviceProvider !== undefined) {
                    parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                }
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getChannels(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.getSatellites = function (context) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getSatellites(context);
            });
        };
        ServiceClientAuthenticationZosa.getReferenceTransponders = function (context, satelliteId) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getReferenceTransponders(context, satelliteId);
            });
        };
        ServiceClientAuthenticationZosa.getCustomChannelNumbering = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                if (parameters.serviceProvider !== undefined) {
                    parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                }
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getCustomChannelNumbering(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.setCustomChannelNumbering = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                if (parameters.serviceProvider !== undefined) {
                    parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                }
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.setCustomChannelNumbering(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.getDevices = function (context, parameters, useCache) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getDevices(context, parameters, useCache);
            });
        };
        ServiceClientAuthenticationZosa.updateDevice = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.updateDevice(context, parameters); });
        };
        ServiceClientAuthenticationZosa.getMediaPersons = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getMediaPersons(context, parameters); });
        };
        ServiceClientAuthenticationZosa.getOtherInstances = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getOtherInstances(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.deleteMarkedRecordingConflicts = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.deleteMarkedRecordingConflicts(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.getNextRecordingConflict = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getNextRecordingConflict(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.getParentRecordings = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getParentRecordings(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.getRecordingSpaceInfo = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getRecordingSpaceInfo(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.getRecordings = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getRecordings(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.removeRecordings = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.removeRecordings(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.scheduleIntervalRecording = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.scheduleIntervalRecording(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.scheduleProgramRecording = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.scheduleProgramRecording(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.updateParentRecording = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.updateParentRecording(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.updateRecording = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.updateRecording(context, parameters); });
        };
        ServiceClientAuthenticationZosa.updateRecordingConflict = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.updateRecordingConflict(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.getRecommendation = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getRecommendation(context, parameters); });
        };
        ServiceClientAuthenticationZosa.search = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.search(context, parameters); });
        };
        ServiceClientAuthenticationZosa.getCategories = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getCategories(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.getVasItems = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getVasItems(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.getVods = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getVods(context, parameters); });
        };
        ServiceClientAuthenticationZosa.createPlaybackSession = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.createPlaybackSession(context, parameters); });
        };
        ServiceClientAuthenticationZosa.getItems = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getItems(context, parameters); });
        };
        ServiceClientAuthenticationZosa.getVasCategoryId = function (context) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getVasCategoryId(context); });
        };
        ServiceClientAuthenticationZosa.getTdsParameters = function (context, parameterNames) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getTdsParameters(context, parameterNames); });
        };
        ServiceClientAuthenticationZosa.setTdsParameters = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.setTdsParameters(context, parameters); });
        };
        ServiceClientAuthenticationZosa.getCustomizeConfigParameters = function (context, parameterNames) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getCustomizeConfigParameters(context, parameterNames); });
        };
        ServiceClientAuthenticationZosa.getBandwithManagerServerUrl = function (context) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getBandwithManagerServerUrl(context); });
        };
        ServiceClientAuthenticationZosa.getMasterStb = function (context, useCache) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getMasterStb(context, useCache); });
        };
        ServiceClientAuthenticationZosa.resetMasterStb = function (context) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.resetMasterStb(context); });
        };
        ServiceClientAuthenticationZosa.setMasterStb = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.setMasterStb(context, parameters); });
        };
        ServiceClientAuthenticationZosa.createVod = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.createVod(context, parameters); });
        };
        ServiceClientAuthenticationZosa.getConfig = function (context) {
            return context.serviceClientZosa.getConfig(context);
        };
        ServiceClientAuthenticationZosa.getBandwidthManagerType = function (context) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getBandwidthManagerType(context); });
        };
        ServiceClientAuthenticationZosa.removeOtherStbDevices = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.removeOtherStbDevices(context, parameters); });
        };
        ServiceClientAuthenticationZosa.getDFCC = function (context) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getDFCC(context); });
        };
        ServiceClientAuthenticationZosa.getParentalControlConfiguration = function (context) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getParentalControlConfiguration(context); });
        };
        ServiceClientAuthenticationZosa.setParentalControlConfiguration = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.setParentalControlConfiguration(context, parameters); });
        };
        ServiceClientAuthenticationZosa.activateComfortFeature = function (context) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.activateComfortFeature(context); });
        };
        ServiceClientAuthenticationZosa.deactivateComfortFeature = function (context) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.deactivateComfortFeature(context); });
        };
        ServiceClientAuthenticationZosa.isComfortFeatureActive = function (context) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.isComfortFeatureActive(context); });
        };
        ServiceClientAuthenticationZosa.getComfortFeatureStatus = function (context) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getComfortFeatureStatus(context); });
        };
        ServiceClientAuthenticationZosa.getDTSubscriberInfo = function (context) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getDTSubscriberInfo(context); });
        };
        ServiceClientAuthenticationZosa.setSubscriberInfo = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.setSubscriberInfo(context, parameters); });
        };
        ServiceClientAuthenticationZosa.setImageDownloadConfig = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.setImageDownloadConfig(context, parameters); });
        };
        ServiceClientAuthenticationZosa.getParentalBlockingStatus = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getParentalBlockingStatus(context, parameters); });
        };
        ServiceClientAuthenticationZosa.parentalUnblock = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.parentalUnblock(context, parameters); });
        };
        ServiceClientAuthenticationZosa.resetAllParentalUnblockings = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.resetAllParentalUnblockings(context, parameters); });
        };
        ServiceClientAuthenticationZosa.resetParentalUnblocking = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.resetParentalUnblocking(context, parameters); });
        };
        ServiceClientAuthenticationZosa.addFavorites = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.addFavorites(context, parameters); });
        };
        ServiceClientAuthenticationZosa.getFavoriteLists = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                if (parameters.serviceProvider !== undefined) {
                    parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                }
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getFavoriteLists(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.removeFavorites = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.removeFavorites(context, parameters); });
        };
        ServiceClientAuthenticationZosa.getBandwidthInfo = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function (initData) {
                parameters.serviceProvider = initData.currentServiceProvider.zosaId;
                return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getBandwidthInfo(context, parameters);
            });
        };
        ServiceClientAuthenticationZosa.releaseBandwidthBookings = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.releaseBandwidthBookings(context, parameters); });
        };
        ServiceClientAuthenticationZosa.authenticate = function (context, callback) {
            return ServiceClientAuthenticationZosa_1.initialize(context, false)
                .then(function (initData) { return callback(initData); })
                .catch(function (error) {
                public_1.Logger.error(function (log) { return log(public_1.LogMsg("The client reports an error while calling ZOSA. " + public_1.StringTools.dataStringify(error), ServiceClientAuthenticationZosa_1.TAG)); });
                ServiceClientAuthenticationZosa_1.renewAuthentication(context, error.errorCode, false);
                return bluebird.reject(error);
            });
        };
        ServiceClientAuthenticationZosa.renewAuthentication = function (context, errorCode, completeProcess) {
            var _a;
            try {
                if ((_a = ServiceClientAuthenticationZosa_1.initProvider) === null || _a === void 0 ? void 0 : _a.isFulfilled()) {
                    if (completeProcess) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("performing complete initialization.", ServiceClientAuthenticationZosa_1.TAG)); });
                        ServiceClientAuthenticationZosa_1.initProvider = undefined;
                        ServiceClientAuthenticationZosa_1.initLogin = undefined;
                    }
                    else if (errorCode == zosa_static_1.zosaStatic.TIMEOUT || errorCode == zosa_static_1.zosaStatic.SESSION_EXPIRED) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("performing initialization for service provider login.", ServiceClientAuthenticationZosa_1.TAG)); });
                        ServiceClientAuthenticationZosa_1.initProvider = undefined;
                    }
                    ServiceClientAuthenticationZosa_1.initialize(context, true);
                }
            }
            catch (error) { }
        };
        ServiceClientAuthenticationZosa.initialize = function (context, forceServiceProviderLogin) {
            if (!this.initEvents) {
                context.serviceClientZosa.onServiceProviderSessionError(function (event) {
                    var _a;
                    public_1.Logger.error(function (log) { var _a, _b; return log(public_1.LogMsg("The client reports a service provider session error. Error: " + ((_a = event.error) === null || _a === void 0 ? void 0 : _a.code) + " Message: " + ((_b = event.error) === null || _b === void 0 ? void 0 : _b.message), ServiceClientAuthenticationZosa_1.TAG)); });
                    ServiceClientAuthenticationZosa_1.renewAuthentication(context, (_a = event.error) === null || _a === void 0 ? void 0 : _a.code, false);
                    return false;
                });
                context.serviceClientZosa.onSessionError(function (event) {
                    public_1.Logger.error(function (log) { var _a, _b; return log(public_1.LogMsg("The client reports a session error. Error: " + ((_a = event.error) === null || _a === void 0 ? void 0 : _a.code) + " Message: " + ((_b = event.error) === null || _b === void 0 ? void 0 : _b.message), ServiceClientAuthenticationZosa_1.TAG)); });
                    ServiceClientAuthenticationZosa_1.renewAuthentication(context, undefined, true);
                    return false;
                });
                this.initEvents = true;
            }
            var spreadTime = forceServiceProviderLogin ? Math.round(Math.random() * 30000) : 0;
            var funcInitLogin = function () {
                var errorReported = false;
                public_1.Logger.info(function (log) { return log(public_1.LogMsg("The client initialization starts (login).", ServiceClientAuthenticationZosa_1.TAG)); });
                if (forceServiceProviderLogin)
                    ServiceClientAuthenticationZosa_1.broadcastAuthenticationProcessError(new zosa_errors_1.ZosaAuthenticationProcessError("The client initialization starts (login).", spreadTime, "0"));
                var initLogin = bluebird.delay(spreadTime)
                    .then(function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.login(context, { url: context.url, username: context.username, password: context.password }); })
                    .then(function (response) {
                    public_1.Logger.info(function (log) { return log(public_1.LogMsg("The client initialization was successful (login).", ServiceClientAuthenticationZosa_1.TAG)); });
                    return response;
                })
                    .catch(function (error) {
                    if (!errorReported) {
                        public_1.Logger.error(function (log) { return log(public_1.LogMsg("The client initialization failed (login). " + public_1.StringTools.dataStringify(error), ServiceClientAuthenticationZosa_1.TAG)); });
                        errorReported = true;
                    }
                    ServiceClientAuthenticationZosa_1.initLogin = undefined;
                    throw error;
                });
                spreadTime = 0;
                return initLogin;
            };
            var funcInitProvider = function (initLogin) {
                var errorReported = false;
                public_1.Logger.info(function (log) { return log(public_1.LogMsg("The client initialization starts (provider).", ServiceClientAuthenticationZosa_1.TAG)); });
                if (forceServiceProviderLogin)
                    ServiceClientAuthenticationZosa_1.broadcastAuthenticationProcessError(new zosa_errors_1.ZosaAuthenticationProcessError("The client initialization starts (provider).", spreadTime, "1"));
                var initProvider = bluebird.delay(spreadTime)
                    .then(function () { return initLogin; })
                    .then(function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getServiceProviders(context, {}); })
                    .then(function (response) {
                    var serviceProvider = response.data.elements.filter(function (item) { return item.isMainServiceProvider; })[0] || response.data.elements[0];
                    if (!serviceProvider.isActive || forceServiceProviderLogin) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("call serviceProviderLogin. serviceProvider.isActive: " + serviceProvider.isActive + " forceServiceProviderLogin: " + forceServiceProviderLogin, ServiceClientAuthenticationZosa_1.TAG)); });
                        return ServiceClientCacheZosa_1.ServiceClientCacheZosa
                            .serviceProviderLogin(context, { serviceProvider: serviceProvider.zosaId })
                            .then(function () { return ({ currentServiceProvider: serviceProvider }); })
                            .catch(function (error) {
                            var _a;
                            if ((_a = error === null || error === void 0 ? void 0 : error.zosaError) === null || _a === void 0 ? void 0 : _a.loginRetryTime) {
                                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Zosa service provider login cannot be performed. Waiting '" + error.zosaError.loginRetryTime + "' seconds.", ServiceClientAuthenticationZosa_1.TAG)); });
                                ServiceClientAuthenticationZosa_1.broadcastAuthenticationProcessError(new zosa_errors_1.ZosaAuthenticationProcessError("Zosa service provider login cannot be performed. Waiting '" + error.zosaError.loginRetryTime + "' seconds.", error.zosaError.loginRetryTime * 1000, "2"));
                                return bluebird.delay(error.zosaError.loginRetryTime * 1000).then(function () { throw new zosa_errors_1.ZosaLoginDelayError("Zosa service provider login cannot be performed. Waiting '" + error.zosaError.loginRetryTime + "' seconds."); });
                            }
                            return bluebird.reject(error);
                        });
                    }
                    else {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("skip serviceProviderLogin", ServiceClientAuthenticationZosa_1.TAG)); });
                        return { currentServiceProvider: serviceProvider };
                    }
                })
                    .then(function (response) {
                    public_1.Logger.info(function (log) { return log(public_1.LogMsg("The client initialization was successful (provider).", ServiceClientAuthenticationZosa_1.TAG)); });
                    ServiceClientAuthenticationZosa_1.deferAuthentication.resolve();
                    return response;
                })
                    .catch(function (error) {
                    if (!errorReported) {
                        public_1.Logger.error(function (log) { return log(public_1.LogMsg("The client initialization failed (provider). " + public_1.StringTools.dataStringify(error), ServiceClientAuthenticationZosa_1.TAG)); });
                        errorReported = true;
                    }
                    if (error instanceof zosa_errors_1.ZosaCommunicationError) {
                        ServiceClientAuthenticationZosa_1.initLogin = undefined;
                    }
                    ServiceClientAuthenticationZosa_1.initProvider = undefined;
                    ServiceClientAuthenticationZosa_1.initialize(context, true);
                    return bluebird.reject(error);
                });
                return initProvider;
            };
            var initLogin = this.initLogin || (this.initLogin = funcInitLogin());
            var initProvider = this.initProvider || (this.initProvider = funcInitProvider(initLogin));
            return initProvider;
        };
        ServiceClientAuthenticationZosa.getSTBDeviceSettings = function () {
            return ServiceClientAuthenticationZosa_1.getConfigurableSettingsTypedValue(ServiceClientZosa_1.DomainType.device, ServiceClientZosa_1.ConfigurableUserSettingsKey.STBDeviceSettings)
                .then(function (typedValue) { return typedValue; });
        };
        ServiceClientAuthenticationZosa.getConfigurableSettingsTypedValue = function (domainType, settingKey) {
            return ServiceClientAuthenticationZosa_1.getConfigurableSettingsTypedValues(domainType, [settingKey])
                .then(function (typedValuesDictionary) { return typedValuesDictionary[settingKey]; });
        };
        ServiceClientAuthenticationZosa.getConfigurableSettingsTypedValues = function (domainType, settingKeys) {
            return bluebird.all([
                ServiceClientAuthenticationZosa_1.getConfigurableSettingKeys(settingKeys, domainType),
                ServiceClientAuthenticationZosa_1.getConfigurableSettingsStringValues(settingKeys, domainType)
            ])
                .then(function (_a) {
                var settings = _a[0], values = _a[1];
                return ServiceClientAuthenticationZosa_1.getTypedValues(settings, values);
            });
        };
        ServiceClientAuthenticationZosa.getConfigurableUserSettingsValues = function (domain, keys) {
            var params = { domainType: ServiceClientZosa_1.DomainType[domain] };
            return ServiceClientAuthenticationZosa_1.getConfigurableUserSettingsValuesZosa(ServiceClientContextZosa_1.ServiceClientContextZosa.instance, params);
        };
        ServiceClientAuthenticationZosa.getTypedValues = function (settings, keyValues) {
            var typedValues = {};
            for (var settingKey in settings) {
                typedValues[settingKey] = ServiceClientAuthenticationZosa_1.getConfigurableUserSettingKeyValue(settings[settingKey], keyValues[settingKey]);
            }
            return typedValues;
        };
        ServiceClientAuthenticationZosa.getConfigurableSettingKeys = function (settingKeys, domainType) {
            var configurableSettingItems = {};
            return ServiceClientAuthenticationZosa_1.getConfigurableUserSettings(domainType)
                .then(function (allSettings) {
                settingKeys.forEach(function (key) {
                    if (!allSettings.data.some(function (setting) { return setting.key === key; })) {
                        throw new ConfigurableUserSettingsError("Missing ConfigurableUserSetting '" + key + "' for DomainType " + ServiceClientZosa_1.DomainType[domainType]);
                    }
                });
                allSettings.data
                    .filter(function (setting) { return settingKeys.indexOf(setting.key) >= 0; })
                    .forEach(function (setting) { return configurableSettingItems[setting.key] = setting; });
                return configurableSettingItems;
            });
        };
        ServiceClientAuthenticationZosa.getConfigurableSettingsStringValues = function (settingKeys, domainType) {
            var configurableSettingsValues = {};
            return ServiceClientAuthenticationZosa_1.getConfigurableUserSettingsValues(domainType, settingKeys)
                .then(function (keyValuePairs) {
                settingKeys.forEach(function (key) {
                    if (!keyValuePairs.data.some(function (keyValuePair) { return keyValuePair.key === key; })) {
                        throw new ConfigurableUserSettingsError("Missing key/value for ConfigurableUserSetting " + key);
                    }
                    if (keyValuePairs.data.filter(function (keyValuePair) { return keyValuePair.key === key; })[0] == null) {
                        throw new ConfigurableUserSettingsError("key/value " + key + " value is NULL.");
                    }
                });
                keyValuePairs.data.forEach(function (value) { return configurableSettingsValues[value.key] = value.value; });
                return configurableSettingsValues;
            });
        };
        ServiceClientAuthenticationZosa.getConfigurableUserSettingKeyValue = function (setting, value) {
            if (!setting) {
                public_1.Logger.error(function (log) { return log(public_1.LogMsg("Undefined setting - return value", ServiceClientAuthenticationZosa_1.TAG)); });
                return value;
            }
            var dataType = setting.dataType.toLowerCase();
            if (dataType == "time") {
                return new zenterioTime_1.ZenterioTime(value);
            }
            if (dataType == "enum") {
                if ((setting.enumOptions || []).indexOf(value) < 0) {
                    throw new ConfigurableUserSettingsError("Enum value " + value + " is not valid for enumOptions " + (setting.enumOptions || []).join("|"));
                }
                return value;
            }
            if (dataType == "int" || dataType == "long" || dataType == "float" || dataType == "double") {
                return Number(value);
            }
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Transparent dataType " + dataType + " with value " + value, ServiceClientAuthenticationZosa_1.TAG)); });
            return value;
        };
        ServiceClientAuthenticationZosa.setSTBDeviceSettings = function (STBDeviceSettings) {
            return ServiceClientAuthenticationZosa_1.setConfigurableUserSettingsValue(ServiceClientZosa_1.DomainType.device, { key: ServiceClientZosa_1.ConfigurableUserSettingsKey.STBDeviceSettings, value: STBDeviceSettings });
        };
        ServiceClientAuthenticationZosa.setConfigurableUserSettingsValue = function (domain, value) {
            return ServiceClientAuthenticationZosa_1.setConfigurableUserSettingsValues(domain, [value]);
        };
        ServiceClientAuthenticationZosa.setConfigurableUserSettingsValues = function (domain, values) {
            var params = { domainType: ServiceClientZosa_1.DomainType[domain], values: JSON.stringify(values) };
            return ServiceClientAuthenticationZosa_1.setConfigurableUserSettingsValuesZosa(ServiceClientContextZosa_1.ServiceClientContextZosa.instance, params);
        };
        ServiceClientAuthenticationZosa.setConfigurableUserSettingsValuesZosa = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.setConfigurableUserSettingsValues(context, parameters); });
        };
        ServiceClientAuthenticationZosa.getConfigurableUserSettingsValuesZosa = function (context, parameters) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getConfigurableUserSettingsValues(context, parameters); });
        };
        ServiceClientAuthenticationZosa.getConfigurableUserSettingsZosa = function (context, parameters, useCache) {
            return ServiceClientAuthenticationZosa_1.authenticate(context, function () { return ServiceClientCacheZosa_1.ServiceClientCacheZosa.getConfigurableUserSettings(context, parameters, useCache); });
        };
        ServiceClientAuthenticationZosa.getConfigurableUserSettings = function (domain, useCache) {
            if (useCache === void 0) { useCache = true; }
            var params = domain ? { domainType: ServiceClientZosa_1.DomainType[domain] } : {};
            return ServiceClientAuthenticationZosa_1.getConfigurableUserSettingsZosa(ServiceClientContextZosa_1.ServiceClientContextZosa.instance, params, useCache);
        };
        var ServiceClientAuthenticationZosa_1;
        ServiceClientAuthenticationZosa.classID = 0x103;
        ServiceClientAuthenticationZosa.initEvents = false;
        ServiceClientAuthenticationZosa.deferAuthentication = public_1.Defer.defer();
        ServiceClientAuthenticationZosa.eventManager = new public_1.EventManager();
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationZosa_1.TAG }); })
        ], ServiceClientAuthenticationZosa, "getSTBDeviceSettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationZosa_1.TAG }); })
        ], ServiceClientAuthenticationZosa, "getConfigurableSettingsTypedValue", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationZosa_1.TAG }); })
        ], ServiceClientAuthenticationZosa, "getConfigurableSettingsTypedValues", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationZosa_1.TAG }); })
        ], ServiceClientAuthenticationZosa, "getConfigurableUserSettingsValues", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationZosa_1.TAG }); })
        ], ServiceClientAuthenticationZosa, "getTypedValues", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationZosa_1.TAG }); })
        ], ServiceClientAuthenticationZosa, "getConfigurableSettingKeys", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationZosa_1.TAG }); })
        ], ServiceClientAuthenticationZosa, "getConfigurableSettingsStringValues", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationZosa_1.TAG, outlen: 20000 }); })
        ], ServiceClientAuthenticationZosa, "getConfigurableUserSettingKeyValue", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationZosa_1.TAG, inlen: 100000 }); })
        ], ServiceClientAuthenticationZosa, "setSTBDeviceSettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationZosa_1.TAG }); })
        ], ServiceClientAuthenticationZosa, "setConfigurableUserSettingsValue", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthenticationZosa_1.TAG }); })
        ], ServiceClientAuthenticationZosa, "setConfigurableUserSettingsValues", null);
        ServiceClientAuthenticationZosa = ServiceClientAuthenticationZosa_1 = __decorate([
            public_1.logTag()
        ], ServiceClientAuthenticationZosa);
        return ServiceClientAuthenticationZosa;
    }());
    exports.ServiceClientAuthenticationZosa = ServiceClientAuthenticationZosa;
});
//# sourceMappingURL=ServiceClientAuthenticationZosa.js.map