var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "../backend/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppManagement = void 0;
    var AppManagement = (function () {
        function AppManagement() {
        }
        AppManagement_1 = AppManagement;
        AppManagement.acknowledgeHideDial = function (appName, supportsHiddenState) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Application acknowledgeHideDial -> appName: " + appName + ", supportsHiddenState: " + supportsHiddenState, AppManagement_1.TAG)); });
            var dialManager = AppManagement_1.getDialManager();
            if (dialManager) {
                return dialManager.AcknowledgeHideDial(appName, supportsHiddenState);
            }
            return 0;
        };
        AppManagement.acknowledgeStartDial = function (appName, appStarted) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Application acknowledgeStartDial -> appName: " + appName + ", appStarted: " + appStarted, AppManagement_1.TAG)); });
            var dialManager = AppManagement_1.getDialManager();
            if (dialManager) {
                return dialManager.AcknowledgeStartDial(appName, true);
            }
            return 0;
        };
        AppManagement.acknowledgeStatusDial = function (appName, appStatus) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Application acknowledgeStatusDial -> appName: " + appName + ", appStatus: " + appStatus, AppManagement_1.TAG)); });
            var dialManager = AppManagement_1.getDialManager();
            if (dialManager) {
                return dialManager.AcknowledgeStatusDial(appName, appStatus);
            }
            return 0;
        };
        AppManagement.acknowledgeStopDial = function (appName) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Application acknowledgeStopDial -> appName: " + appName, AppManagement_1.TAG)); });
            var dialManager = AppManagement_1.getDialManager();
            if (dialManager) {
                return dialManager.AcknowledgeStopDial(appName);
            }
            return 0;
        };
        AppManagement.activate = function (instance) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Application activate -> instance: " + instance, AppManagement_1.TAG)); });
            var appManager = AppManagement_1.getAppManager();
            appManager.Activate(instance);
            appManager.SetZOrder(instance, 0);
        };
        AppManagement.createPlaybackSession = function (vasItem) {
            return public_2.ServiceClientAuthenticationZosa
                .createPlaybackSession(public_2.ServiceClientContextZosa.instance, { media: vasItem.zosaId });
        };
        AppManagement.deActivate = function (instance) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Application deActivate -> instance: " + instance, AppManagement_1.TAG)); });
            var appManager = AppManagement_1.getAppManager();
            appManager.Deactivate(instance);
        };
        AppManagement.getRunningExternalApps = function () {
            var excludeApps = [
                public_2.ServiceClientZac.INSTANCE_NAME,
                "zosaTest",
                "browser",
                "zss"
            ];
            var runningExternalApps = AppManagement_1.getRunningApps().filter(function (app) { return (excludeApps.indexOf(app.name) === -1) && (app.isInternal === false); });
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getRunningExternalApps -> runningExternalApps: " + JSON.stringify(runningExternalApps), AppManagement_1.TAG)); });
            return runningExternalApps;
        };
        AppManagement.getVisibility = function (instance) {
            var appManager = AppManagement_1.getAppManager();
            return appManager.GetVisibility(instance);
        };
        AppManagement.givePortalPriority = function (additionalApps) {
            if (additionalApps === void 0) { additionalApps = []; }
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Application givePortalPriority", AppManagement_1.TAG)); });
            var runningApps = AppManagement_1.getRunningExternalApps().map(function (app) { return app.name; });
            runningApps.push.apply(runningApps, additionalApps);
            var appManager = AppManagement_1.getAppManager();
            runningApps.forEach(function (app) { return appManager.SetInputPriority(app, 1); });
            appManager.SetInputPriority(AppManagement_1.INSTANCE_NAME_PORTAL, 100);
            appManager.SetZOrder(AppManagement_1.INSTANCE_NAME_PORTAL, 999999);
        };
        AppManagement.giveAppPriority = function (appInstanceName) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Application giveAppPriority -> appInstanceName: " + appInstanceName, AppManagement_1.TAG)); });
            var appManager = AppManagement_1.getAppManager();
            appManager.SetInputPriority(appInstanceName, 100);
            appManager.SetInputPriority(AppManagement_1.INSTANCE_NAME_PORTAL, 1);
        };
        AppManagement.isAppActive = function (instanceName) {
            var runningApps = AppManagement_1.getRunningApps().filter(function (app) { return app.name === instanceName; });
            return (runningApps && (runningApps.length > 0) && runningApps[0].isActive);
        };
        AppManagement.isAppRunning = function (instanceName) {
            var runningApps = AppManagement_1.getRunningApps().filter(function (app) { return app.name === instanceName; });
            return (runningApps && (runningApps.length > 0));
        };
        AppManagement.onAppRegistrationEvent = function (evtHandlerFunction) {
            return this.eventManager.on("onAppRegistrationEvent", evtHandlerFunction, AppManagement_1.TAG);
        };
        AppManagement.onAppExitEvent = function (evtHandlerFunction) {
            return this.eventManager.on("onAppExitEvent", evtHandlerFunction, AppManagement_1.TAG);
        };
        AppManagement.onAppStartedStatusEvent = function (evtHandlerFunction) {
            return this.eventManager.on("onAppStartedStatusEvent", evtHandlerFunction, AppManagement_1.TAG);
        };
        AppManagement.onAppStatusChangedEvent = function (evtHandlerFunction) {
            return this.eventManager.on("onAppStatusChangedEvent", evtHandlerFunction, AppManagement_1.TAG);
        };
        AppManagement.onDialAppHideRequestEvent = function (evtHandlerFunction) {
            return this.eventManager.on("onDialAppHideRequestEvent", evtHandlerFunction, AppManagement_1.TAG);
        };
        AppManagement.onDialAppStartRequestEvent = function (evtHandlerFunction) {
            return this.eventManager.on("onDialAppStartRequestEvent", evtHandlerFunction, AppManagement_1.TAG);
        };
        AppManagement.onDialAppStatusRequestEvent = function (evtHandlerFunction) {
            return this.eventManager.on("onDialAppStatusRequestEvent", evtHandlerFunction, AppManagement_1.TAG);
        };
        AppManagement.onDialAppStopRequestEvent = function (evtHandlerFunction) {
            return this.eventManager.on("onDialAppStopRequestEvent", evtHandlerFunction, AppManagement_1.TAG);
        };
        AppManagement.registerAppToDialServer = function (appName, allowStop) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Application registerAppToDialServer -> appName: " + appName + ", allowStop: " + allowStop, AppManagement_1.TAG)); });
            var additionalDataUrl;
            var dialManager = AppManagement_1.getDialManager();
            if (dialManager) {
                var properties = {};
                properties[dialManager.DIAL_PROP_ALLOW_STOP] = allowStop;
                additionalDataUrl = dialManager.RegisterDial(appName, properties);
                dialManager.EnableDial(appName);
            }
            return additionalDataUrl;
        };
        AppManagement.setStartUpPortalPhaseFinalized = function () {
            AppManagement_1.startUpPortalPhase = 100;
        };
        AppManagement.setStartUpPortalState = function (loadingProgress, speed) {
            if (AppManagement_1.startUpPortalPhase < 100 && AppManagement_1.startUpPortalPhase < loadingProgress) {
                AppManagement_1.startUpPortalPhase = loadingProgress;
                var appManager = AppManagement_1.getAppManager();
                var data = {
                    loadingProgress: loadingProgress,
                    speed: speed
                };
                appManager.SendCommand("startUpPortal", JSON.stringify(data));
            }
        };
        AppManagement.setVisibility = function (instance, visible) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Application setVisibility -> instance: " + instance + ", visible: " + visible, AppManagement_1.TAG)); });
            var appManager = AppManagement_1.getAppManager();
            return appManager.SetVisibility(instance, visible);
        };
        AppManagement.sendCommand = function (instance, command) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Application sendCommand -> instance: " + instance + ", command: " + command, AppManagement_1.TAG)); });
            var appManager = AppManagement_1.getAppManager();
            return appManager.SendCommand(instance, command);
        };
        AppManagement.start = function (manifest, instance, commands, disposableApps) {
            if (commands === void 0) { commands = ""; }
            if (disposableApps === void 0) { disposableApps = []; }
            var appManager = AppManagement_1.getAppManager();
            return appManager.Start(manifest, instance, commands, disposableApps);
        };
        AppManagement.stop = function (instance) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Application stop -> instance: " + instance, AppManagement_1.TAG)); });
            var appManager = AppManagement_1.getAppManager();
            return appManager.Stop(instance);
        };
        AppManagement.switchTeletextPriority = function (active) {
            if (AppManagement_1.teletextMode !== "off") {
                active ? AppManagement_1.giveAppPriority("teletext") : AppManagement_1.givePortalPriority(["teletext"]);
            }
        };
        AppManagement.getTeletextMode = function () {
            return AppManagement_1.teletextMode;
        };
        AppManagement.toggleTeletext = function () {
            var appManager = AppManagement_1.getAppManager();
            if (!appManager.GetActivated("teletext")) {
                AppManagement_1.teletextMode = "off";
            }
            switch (AppManagement_1.teletextMode) {
                case "off":
                    AppManagement_1.giveAppPriority("teletext");
                    appManager.SendCommand("teletext", "show");
                    appManager.SendCommand("teletext", "setMode normal");
                    AppManagement_1.teletextMode = "normal";
                    break;
                case "normal":
                    appManager.SendCommand("teletext", "setMode mixed");
                    AppManagement_1.teletextMode = "mixed";
                    break;
                default:
                    AppManagement_1.givePortalPriority(["teletext"]);
                    appManager.SendCommand("teletext", "hide");
                    AppManagement_1.teletextMode = "off";
                    break;
            }
        };
        AppManagement.teletextOff = function () {
            var appManager = AppManagement_1.getAppManager();
            AppManagement_1.givePortalPriority(["teletext"]);
            appManager.SendCommand("teletext", "hide");
            AppManagement_1.teletextMode = "off";
        };
        AppManagement.getAppManager = function () {
            var _this = this;
            var appManager = public_2.ServiceClientZac.getAppManager(public_2.ServiceClientContextZac.instance);
            if (appManager && !AppManagement_1.registrationDone) {
                AppManagement_1.registrationDone = true;
                appManager.events.onAppExitEvent(function (event) { return _this.eventManager.broadcast("onAppExitEvent", event); });
                appManager.events.onAppRegistrationEvent(function (event) { return _this.eventManager.broadcast("onAppRegistrationEvent", event); });
                appManager.events.onAppStartedStatusEvent(function (event) { return _this.eventManager.broadcast("onAppStartedStatusEvent", event); });
                appManager.events.onAppStatusChangedEvent(function (event) { return _this.eventManager.broadcast("onAppStatusChangedEvent", event); });
                var dialManager = public_2.ServiceClientZac.getDialManager(public_2.ServiceClientContextZac.instance);
                if (dialManager) {
                    dialManager.events.onDialAppHideRequestEvent(function (event) { return _this.eventManager.broadcast("onDialAppHideRequestEvent", event); });
                    dialManager.events.onDialAppStartRequestEvent(function (event) { return _this.eventManager.broadcast("onDialAppStartRequestEvent", event); });
                    dialManager.events.onDialAppStatusRequestEvent(function (event) { return _this.eventManager.broadcast("onDialAppStatusRequestEvent", event); });
                    dialManager.events.onDialAppStopRequestEvent(function (event) { return _this.eventManager.broadcast("onDialAppStopRequestEvent", event); });
                }
            }
            return appManager.object;
        };
        AppManagement.getDialManager = function () {
            return public_2.ServiceClientZac.getDialManager(public_2.ServiceClientContextZac.instance).object;
        };
        AppManagement.getRunningApps = function () {
            return AppManagement_1.getAppManager().GetAppInstancesProperties();
        };
        var AppManagement_1;
        AppManagement.INSTANCE_NAME_PORTAL = "browser";
        AppManagement.registrationDone = false;
        AppManagement.eventManager = new public_1.EventManager();
        AppManagement.startUpPortalPhase = 0;
        AppManagement.teletextMode = "off";
        __decorate([
            public_1.log2(function () { return ({ name: AppManagement_1.TAG }); })
        ], AppManagement, "setStartUpPortalPhaseFinalized", null);
        __decorate([
            public_1.log2(function () { return ({ name: AppManagement_1.TAG }); })
        ], AppManagement, "setStartUpPortalState", null);
        __decorate([
            public_1.log2(function () { return ({ name: AppManagement_1.TAG }); })
        ], AppManagement, "start", null);
        AppManagement = AppManagement_1 = __decorate([
            public_1.logTag()
        ], AppManagement);
        return AppManagement;
    }());
    exports.AppManagement = AppManagement;
});
//# sourceMappingURL=applicationclient.appmanagement.js.map