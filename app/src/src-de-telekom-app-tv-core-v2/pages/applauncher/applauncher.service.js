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
define(["require", "exports", "URIjs/URI", "bluebird", "rxjs", "rxjs/operators", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/public", "../../pages/core/public", "../uar/uar.service"], function (require, exports, urijs, bluebird, rxjs_1, operators_1, public_1, public_2, public_3, public_4, uar_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppLauncherService = exports.AppLauncherServiceMissingFeatureError = void 0;
    var AppLauncherServiceMissingFeatureError = (function (_super) {
        __extends(AppLauncherServiceMissingFeatureError, _super);
        function AppLauncherServiceMissingFeatureError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x60D;
            return _this;
        }
        return AppLauncherServiceMissingFeatureError;
    }(public_3.BaseError));
    exports.AppLauncherServiceMissingFeatureError = AppLauncherServiceMissingFeatureError;
    var AppLauncherService = (function (_super) {
        __extends(AppLauncherService, _super);
        function AppLauncherService() {
            var _this = _super.call(this) || this;
            _this._hasRunningApplication = false;
            _this.additionalDataUrls = {};
            _this.activePlaybackSessions = {};
            _this.keyMappingTransformation = {
                DEFAULT: "",
                MR400: "/usr/share/browser/MR400",
                YT2016: "/usr/share/browser/YouTube2016",
                YT2017: "/usr/share/browser/YouTube2017",
                HbbTV: ""
            };
            _this.liveTVPlayerService = public_4.LiveTVPlayerService.getInstance();
            _this.uarService = uar_service_1.UarService.getInstance();
            _this.dialStartActivationTimer = setTimeout(function () {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("dialStartActivation - forced activation", AppLauncherService_1.TAG)); });
                _this.dialStartActivation.resolve();
            }, 60000);
            _this.dialStartActivation = public_3.Defer.defer();
            _this.initializeMqttMessageHandler();
            try {
                public_2.ApplicationClient.app.registerForCobaltErrors();
            }
            catch (error) {
                public_3.ErrorManager.catch(error, AppLauncherService_1, 0x0E);
            }
            public_3.Logger.verbose(function (log) {
                public_2.ApplicationClient.appManagement.onAppExitEvent(function (event) {
                    log(public_3.LogMsg("onAppExitEvent - event: " + JSON.stringify(event), AppLauncherService_1.TAG));
                    return false;
                });
                public_2.ApplicationClient.appManagement.onAppRegistrationEvent(function (event) {
                    log(public_3.LogMsg("onAppRegistrationEvent - event: " + JSON.stringify(event), AppLauncherService_1.TAG));
                    return false;
                });
                public_2.ApplicationClient.appManagement.onAppStartedStatusEvent(function (event) {
                    log(public_3.LogMsg("onAppStartedStatusEvent - event: " + JSON.stringify(event), AppLauncherService_1.TAG));
                    return false;
                });
                public_2.ApplicationClient.appManagement.onAppStatusChangedEvent(function (event) {
                    log(public_3.LogMsg("onAppStatusChangedEvent - event: " + JSON.stringify(event), AppLauncherService_1.TAG));
                    return false;
                });
                public_2.ApplicationClient.appManagement.onDialAppHideRequestEvent(function (event) {
                    log(public_3.LogMsg("onDialAppHideRequestEvent - event: " + JSON.stringify(event), AppLauncherService_1.TAG));
                    return false;
                });
                public_2.ApplicationClient.appManagement.onDialAppStartRequestEvent(function (event) {
                    log(public_3.LogMsg("onDialAppStartRequestEvent - event: " + JSON.stringify(event), AppLauncherService_1.TAG));
                    return false;
                });
                public_2.ApplicationClient.appManagement.onDialAppStatusRequestEvent(function (event) {
                    log(public_3.LogMsg("onDialAppStatusRequestEvent - event: " + JSON.stringify(event), AppLauncherService_1.TAG));
                    return false;
                });
                public_2.ApplicationClient.appManagement.onDialAppStopRequestEvent(function (event) {
                    log(public_3.LogMsg("onDialAppStopRequestEvent - event: " + JSON.stringify(event), AppLauncherService_1.TAG));
                    return false;
                });
            });
            return _this;
        }
        AppLauncherService_1 = AppLauncherService;
        Object.defineProperty(AppLauncherService.prototype, "hasRunningApplication", {
            get: function () {
                return this._hasRunningApplication;
            },
            set: function (value) {
                this._hasRunningApplication = value;
                if (!this._hasRunningApplication) {
                    this.activeAppId = undefined;
                }
            },
            enumerable: false,
            configurable: true
        });
        AppLauncherService.prototype.initializeMqttMessageHandler = function () {
            var _this = this;
            public_2.ApplicationClient
                .instrumentationManagement
                .getQueryObservable(["standard", "testing"])
                .pipe(operators_1.mergeMap(function (_a) {
                var client = _a.client, message = _a.message;
                return rxjs_1.of(message)
                    .pipe(public_3.filterMqttMessage("services.applauncher.getstatus"), operators_1.mergeMap(function (item) {
                    return (item.$correlationId && item.$replyToTopic) ? rxjs_1.of({ correlationId: item.$correlationId, replyToTopic: item.$replyToTopic }) : rxjs_1.NEVER;
                }), operators_1.mergeMap(function (_a) {
                    var correlationId = _a.correlationId, replyToTopic = _a.replyToTopic;
                    return rxjs_1.combineLatest(rxjs_1.of(correlationId), rxjs_1.of(replyToTopic));
                }), operators_1.mergeMap(function (_a) {
                    var correlationId = _a[0], replyToTopic = _a[1];
                    var runningApp = public_2.ApplicationClient.appManagement.getRunningExternalApps().filter(function (app) { return app.isActive; })[0];
                    var statusMessage = {
                        $type: "services.applauncher.returnstatus",
                        hasRunningApplication: _this.hasRunningApplication,
                        appId: _this.activeAppId,
                        externalApp: !!runningApp
                    };
                    return client.publish(replyToTopic, { $correlationId: correlationId, payload: statusMessage });
                }));
            }), public_3.ErrorManager.catchOperator(AppLauncherService_1, 0x04), public_3.retryDelay({ delay: public_2.ServiceClientContextInstrumentation.instance.retryDelayStandard, maxRetryAttempts: public_2.ServiceClientContextInstrumentation.instance.retryMaxAttemptsStandard }))
                .subscribe();
        };
        AppLauncherService.prototype.activateDialStartEvent = function () {
            clearTimeout(this.dialStartActivationTimer);
            this.dialStartActivation.resolve();
        };
        AppLauncherService.prototype.createCommandsForGenericApplication = function (intentData) {
            var additionalDataUrl = intentData.additionalDataUrl, additionalUrlParameters = intentData.additionalUrlParameters, application = intentData.application, contentLink = intentData.contentLink, dialPayload = intentData.dialPayload;
            var commands = [];
            var keyMapping = this.keyMappingTransformation[application.dtExtensions.customProperties.keyMappingId];
            if (keyMapping) {
                commands.push(["-rcu", keyMapping]);
            }
            if (application.dtExtensions.customProperties.resolution) {
                var appTargetResolution = public_3.Configuration.instance ? public_3.Configuration.instance.appTargetResolution : 1080;
                var startHD = (application.dtExtensions.customProperties.resolution.indexOf("720") != -1) && (appTargetResolution >= 720);
                var startFHD = (application.dtExtensions.customProperties.resolution.indexOf("1080") != -1) && (appTargetResolution >= 1080);
                var startUHD = (application.dtExtensions.customProperties.resolution.indexOf("2160") != -1) && (appTargetResolution >= 2160);
                if (startUHD) {
                    commands.push(["-height", "2160"]);
                    commands.push(["-width", "3840"]);
                }
                else if (startFHD) {
                    commands.push(["-height", "1080"]);
                    commands.push(["-width", "1920"]);
                }
                else if (startHD) {
                    commands.push(["-height", "720"]);
                    commands.push(["-width", "1280"]);
                }
            }
            var url = new urijs(contentLink || application.url);
            if (additionalDataUrl) {
                url.addQuery("additionalDataUrl", additionalDataUrl);
            }
            else if (this.additionalDataUrls[application.zosaId]) {
                url.addQuery("additionalDataUrl", this.additionalDataUrls[application.zosaId]);
            }
            (additionalUrlParameters || []).forEach(function (value) { return url.addQuery(value[0], value[1]); });
            var completeUrl = url.href() + (dialPayload ? "&" + dialPayload : "");
            commands.push(["--url", completeUrl]);
            var command = commands.map(function (value) { return value.join(" "); }).join(" ");
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("createCommandsForGenericApplication - command: " + command, AppLauncherService_1.TAG)); });
            return command;
        };
        AppLauncherService.prototype.createPlaybackSession = function (application) {
            var _this = this;
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("createPlaybackSession - instanceId: '" + application.dtExtensions.instanceId + "'", AppLauncherService_1.TAG)); });
            var openPlaybackSessionIds = Object.keys(this.activePlaybackSessions);
            if (openPlaybackSessionIds.length > 0) {
                public_3.Logger.warn(function (log) { return log(public_3.LogMsg("createPlaybackSession - still open playbackSessions were found: '" + public_3.StringTools.dataStringify(Object.keys(_this.activePlaybackSessions)) + "'", AppLauncherService_1.TAG)); });
            }
            public_2.ApplicationClient.appManagement
                .createPlaybackSession(application)
                .then(function (playbackSession) {
                if (public_3.Guard.isDefined(playbackSession)) {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("createPlaybackSession - playbackSession created for instandeId: '" + application.dtExtensions.instanceId + "'", AppLauncherService_1.TAG)); });
                    _this.activePlaybackSessions[application.dtExtensions.instanceId] = playbackSession.data;
                }
            })
                .catch(public_3.ErrorManager.catchFunc(AppLauncherService_1, 0x14));
        };
        AppLauncherService.prototype.destroyPlaybackSession = function (instanceId) {
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("destroyPlaybackSession - instanceId: '" + instanceId + "'", AppLauncherService_1.TAG)); });
            var playbackSession = this.activePlaybackSessions[instanceId];
            if (public_3.Guard.isDefined(playbackSession)) {
                delete this.activePlaybackSessions[instanceId];
                playbackSession.destroy({});
            }
            else {
                public_3.Logger.warn(function (log) { return log(public_3.LogMsg("destroyPlaybackSession - no playbackSession found for instanceId: '" + instanceId + "'", AppLauncherService_1.TAG)); });
            }
        };
        AppLauncherService.prototype.resolvePowerStateChangedEvent = function () {
            var _a;
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("resolvePowerStateChangedEvent", AppLauncherService_1.TAG)); });
            if ((_a = this.powerStateChanged) === null || _a === void 0 ? void 0 : _a.promise.isPending) {
                this.powerStateChanged.resolve();
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("resolvePowerStateChangedEvent - resolved", AppLauncherService_1.TAG)); });
            }
        };
        AppLauncherService.prototype.startApplicationByCmsId = function (cmsId, contentLink, sourceTypePayload, additionalUrlParameters, checkSubscription, prio) {
            var _this = this;
            if (checkSubscription === void 0) { checkSubscription = false; }
            if (public_3.Feature.has(public_3.FeatureItems.apps, public_3.FeatureRights.viewItems)) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("startApplicationByCmsId - cmsId: '" + cmsId + "', contentLink: '" + contentLink + "', sourceTypePayload: '" + public_3.StringTools.dataStringify(sourceTypePayload) + "'", AppLauncherService_1.TAG)); });
                return public_2.ApplicationClient.vasManagement.findVasItemByCmsId(cmsId)
                    .then(function (application) {
                    _this.activeAppId = cmsId;
                    return _this.prepareApplicationStart({
                        additionalUrlParameters: additionalUrlParameters,
                        application: application,
                        contentLink: contentLink,
                        sourceTypePayload: sourceTypePayload
                    }, {
                        type: _this.hasRunningApplication ? "exit" : "forward",
                        priority: prio
                    });
                });
            }
            return bluebird.reject(new AppLauncherServiceMissingFeatureError("The feature was not activated."));
        };
        AppLauncherService.prototype.isAppRunning = function (applicationIdentifier) {
            var runningNetflix = public_2.ApplicationClient.appManagement.getRunningExternalApps().filter(function (app) { return app.name === applicationIdentifier; })[0];
            return public_3.Guard.isDefined(runningNetflix);
        };
        AppLauncherService.prototype.prepareApplicationStart = function (appLauncherData, intentOptions) {
            var _this = this;
            this.liveTVPlayerService.unsetAutoMuted();
            var promiseRestriction = this.liveTVPlayerService.isLiveTVPageRegistered ? this.liveTVPlayerService.checkTuneNewChannelRestriction() : bluebird.resolve(true);
            return promiseRestriction
                .then(function (confirmed) {
                if (confirmed) {
                    _this.uarService.parentalUnblock({ content: appLauncherData.application.zosaId, timeout: 2 }, false)
                        .then(function () {
                        _this.uarService.handleParentalAutoUnlock(appLauncherData.application.dtExtensions.ageRating, appLauncherData.application.dtExtensions.isLocked, undefined, true);
                        public_1.RouteService.getInstance().startIntent(new public_1.IntentCore.AppLauncherStartup(appLauncherData), intentOptions);
                    });
                }
                return bluebird.resolve(null);
            });
        };
        var AppLauncherService_1;
        AppLauncherService.classID = 0x71F;
        AppLauncherService.IDENTIFIER_AMAZON = "amazon";
        AppLauncherService.IDENTIFIER_NETFLIX = "netflix";
        AppLauncherService.IDENTIFIER_DISNEY = "disneyplus";
        AppLauncherService.IDENTIFIER_WEBRADIO_URL = "https://Internal:WebRadio";
        AppLauncherService.hasPendingDialStartRequest = false;
        __decorate([
            public_3.log2(function () { return ({ name: AppLauncherService_1.TAG }); })
        ], AppLauncherService.prototype, "activateDialStartEvent", null);
        __decorate([
            public_3.log2(function () { return ({ name: AppLauncherService_1.TAG, parameters: [] }); })
        ], AppLauncherService.prototype, "createCommandsForGenericApplication", null);
        __decorate([
            public_3.log2(function () { return ({ name: AppLauncherService_1.TAG }); })
        ], AppLauncherService.prototype, "startApplicationByCmsId", null);
        __decorate([
            public_3.log2(function () { return ({ name: AppLauncherService_1.TAG }); })
        ], AppLauncherService.prototype, "isAppRunning", null);
        __decorate([
            public_3.log2(function () { return ({ name: AppLauncherService_1.TAG }); })
        ], AppLauncherService.prototype, "prepareApplicationStart", null);
        AppLauncherService = AppLauncherService_1 = __decorate([
            public_3.logTag()
        ], AppLauncherService);
        return AppLauncherService;
    }(public_1.ReactBaseService));
    exports.AppLauncherService = AppLauncherService;
});
//# sourceMappingURL=applauncher.service.js.map