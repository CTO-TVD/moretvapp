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
define(["require", "exports", "rxjs", "rxjs/operators", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/public", "./pages/public", "./services/public", "./translation/public", "src/src-de-telekom-style/public", "./component/public", "src/src-de-telekom-tv-core/frontend/applicationclient.powermanagement", "./pages/public", "./component/public", "./translation/public", "./framework/public", "./pages/public", "./services/public"], function (require, exports, rxjs_1, operators_1, public_1, public_2, public_3, public_4, public_5, public_6, public_7, public_8, applicationclient_powermanagement_1, public_9, public_10, public_11, public_12, public_13, public_14) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppTvCoreModule = exports.InstrumentationService = exports.FrontDisplayService = exports.TVUsageTrackerService = exports.NavigationHelper = exports.PconGroupedContentLockManager = exports.FlexActionKeywords = exports.FlexActionMapper = exports.messagesSatwizard = exports.messagesCore = exports.InfoDialogComponent = exports.MetadataAggregator = exports.MetaDataFormatter = exports.ProgramItemFormatter = exports.UarDialogAbortError = exports.AppLauncherService = exports.UIActionTracker = exports.UIAction = exports.UarService = void 0;
    Object.defineProperty(exports, "UarService", { enumerable: true, get: function () { return public_9.UarService; } });
    Object.defineProperty(exports, "UIAction", { enumerable: true, get: function () { return public_9.UIAction; } });
    Object.defineProperty(exports, "UIActionTracker", { enumerable: true, get: function () { return public_9.UIActionTracker; } });
    Object.defineProperty(exports, "AppLauncherService", { enumerable: true, get: function () { return public_9.AppLauncherService; } });
    Object.defineProperty(exports, "UarDialogAbortError", { enumerable: true, get: function () { return public_9.UarDialogAbortError; } });
    Object.defineProperty(exports, "ProgramItemFormatter", { enumerable: true, get: function () { return public_10.ProgramItemFormatter; } });
    Object.defineProperty(exports, "MetaDataFormatter", { enumerable: true, get: function () { return public_10.MetaDataFormatter; } });
    Object.defineProperty(exports, "MetadataAggregator", { enumerable: true, get: function () { return public_10.MetadataAggregator; } });
    Object.defineProperty(exports, "InfoDialogComponent", { enumerable: true, get: function () { return public_10.InfoDialogComponent; } });
    Object.defineProperty(exports, "messagesCore", { enumerable: true, get: function () { return public_11.messagesCore; } });
    Object.defineProperty(exports, "messagesSatwizard", { enumerable: true, get: function () { return public_11.messagesSatwizard; } });
    Object.defineProperty(exports, "FlexActionMapper", { enumerable: true, get: function () { return public_12.FlexActionMapper; } });
    Object.defineProperty(exports, "FlexActionKeywords", { enumerable: true, get: function () { return public_12.FlexActionKeywords; } });
    Object.defineProperty(exports, "PconGroupedContentLockManager", { enumerable: true, get: function () { return public_12.PconGroupedContentLockManager; } });
    Object.defineProperty(exports, "NavigationHelper", { enumerable: true, get: function () { return public_13.NavigationHelper; } });
    Object.defineProperty(exports, "TVUsageTrackerService", { enumerable: true, get: function () { return public_14.TVUsageTrackerService; } });
    Object.defineProperty(exports, "FrontDisplayService", { enumerable: true, get: function () { return public_14.FrontDisplayService; } });
    Object.defineProperty(exports, "InstrumentationService", { enumerable: true, get: function () { return public_14.InstrumentationService; } });
    var AppTvCoreModule = (function (_super) {
        __extends(AppTvCoreModule, _super);
        function AppTvCoreModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AppTvCoreModule_1 = AppTvCoreModule;
        AppTvCoreModule.prototype.config = function () {
            if (!public_2.ServiceClientContextZac.instance) {
                public_2.ServiceClientContextZac.instance = new public_2.ServiceClientContextZac();
            }
            if (!public_2.ServiceClientContextZosa.instance) {
                public_2.ServiceClientContextZosa.instance = new public_2.ServiceClientContextZosa();
            }
            if (!public_2.ServiceClientContextInstrumentation.instance) {
                public_2.ServiceClientContextInstrumentation.instance = new public_2.ServiceClientContextInstrumentation();
                public_2.ServiceClientContextInstrumentation.instance.setBrokerUrlCallback(function (url, transformationRule) {
                    switch (transformationRule) {
                        case "aws": {
                            var params = {
                                clientID: public_2.ServiceClientContextInstrumentation.instance.clientID,
                                clientSecret: public_2.ServiceClientContextInstrumentation.instance.clientSecret,
                                scope: public_2.ServiceClientContextInstrumentation.instance.scope
                            };
                            return rxjs_1.of(params)
                                .pipe(operators_1.mergeMap(function (params) { return public_2.ApplicationClient.authMan.getAccessToken(params); }), operators_1.mergeMap(function (accessToken) {
                                var headers = [new public_3.KeyValuePair("authorization", "Bearer " + accessToken.accessToken)];
                                return public_3.RestClient.instance
                                    .post(url, headers)
                                    .then(function (response) {
                                    if (response && response.statusCode >= 300) {
                                        throw new public_3.MqttConnectionError("AWS transformation rule cannot be executed. Error: '" + response.responseData + "'");
                                    }
                                    var content = JSON.parse(response.responseData);
                                    if (((content === null || content === void 0 ? void 0 : content.url) || "").length == 0) {
                                        throw new public_3.MqttConnectionError("AWS transformation rule cannot be executed. The url is empty.");
                                    }
                                    return content.url;
                                });
                            }), public_3.retryDelay({ delay: 10000, maxRetryAttempts: 6 }));
                        }
                    }
                    return url;
                });
            }
            public_2.ApplicationClient.powerManagement.getBasicStartupState()
                .then(function (basicStartupState) {
                if (basicStartupState == applicationclient_powermanagement_1.BasicStartupState.BrowserRestart) {
                    public_2.ApplicationClient.appManagement.setStartUpPortalPhaseFinalized();
                }
            })
                .finally(function () { return public_2.ApplicationClient.appManagement.setStartUpPortalState(25); });
            public_2.ApplicationClient.netflix.imageScale = public_7.Css.scale;
        };
        AppTvCoreModule.prototype.run = function () {
            var _a;
            public_2.ApplicationClient.appManagement.setStartUpPortalState(50);
            var notifyFunc = function (name, event) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("notify - name: '" + name + "', event: '" + JSON.stringify(event) + "'", AppTvCoreModule_1.TAG)); });
                public_1.DiagnosticNotificationComponent.notify(name, JSON.stringify(event));
                return false;
            };
            public_2.ApplicationClient.events.onDataUpdated(function (event) { return notifyFunc("onDataUpdated", event); });
            public_2.ApplicationClient.events.onServiceProviderSessionError(function (event) { return notifyFunc("onServiceProviderSessionError", event); });
            public_2.ApplicationClient.events.onSessionError(function (event) { return notifyFunc("onSessionError", event); });
            public_2.ApplicationClient.traceLog.startTraceLogClient();
            var volumeControlService = public_1.TVVolumeControlService.getInstance();
            volumeControlService.inject(public_2.ApplicationClient.volumeControl, public_3.Configuration.instance.timings ? public_3.Configuration.instance.timings.autoCloseWaitingMs : 2000);
            volumeControlService.setLastVolume();
            var timeshiftDelaySeconds = (_a = public_3.Configuration.instance.timings) === null || _a === void 0 ? void 0 : _a.timeshiftDelaySeconds;
            public_2.ApplicationClient.settings.preInit(timeshiftDelaySeconds);
            if (public_3.Configuration.instance.imagescale) {
                var imagescale = public_3.Configuration.instance.imagescale;
                if (imagescale.iss && imagescale.client) {
                    public_2.ApplicationClient.recordingManagement
                        .setRecordingImageDownloadConfig(imagescale.iss, imagescale.client)
                        .catch(public_3.ErrorManager.catchFunc(AppTvCoreModule_1, 0x01));
                }
            }
        };
        var AppTvCoreModule_1;
        AppTvCoreModule.classID = 0x701;
        AppTvCoreModule = AppTvCoreModule_1 = __decorate([
            public_1.reactSubModule(public_4.AppTvCorePagesModule),
            public_1.reactSubModule(public_5.AppCoreServicesModule),
            public_1.reactSubModule(public_6.TranslationModule),
            public_1.reactSubModule(public_8.CoreComponentModule),
            public_3.logTag()
        ], AppTvCoreModule);
        return AppTvCoreModule;
    }(public_1.ReactBaseModule));
    exports.AppTvCoreModule = AppTvCoreModule;
});
//# sourceMappingURL=public.js.map