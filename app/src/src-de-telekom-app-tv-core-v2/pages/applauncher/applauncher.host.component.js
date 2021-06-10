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
define(["require", "exports", "bluebird", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/public", "./applauncher.service", "./applauncher.startup.component", "../uar/uar.service"], function (require, exports, bluebird, React, public_1, public_2, public_3, applauncher_service_1, applauncher_startup_component_1, uar_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppLauncherHostComponent = void 0;
    var AppLauncherHostError = (function (_super) {
        __extends(AppLauncherHostError, _super);
        function AppLauncherHostError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x60A;
            return _this;
        }
        return AppLauncherHostError;
    }(public_3.BaseError));
    var AppLauncherHostComponent = (function (_super) {
        __extends(AppLauncherHostComponent, _super);
        function AppLauncherHostComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.currentIntent = new public_1.IntentCore.AppLauncherHost(props.location.intent.data);
            var makeBackNavigation = true;
            var deferApplicationIsRegisterd = public_3.Defer.defer();
            var closableOnAppRegistrationEvent = public_2.ApplicationClient.appManagement.onAppRegistrationEvent(function (event) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("onAppRegistrationEvent - event: '" + JSON.stringify(event) + "'", AppLauncherHostComponent_1.TAG)); });
                if (_this.currentIntent.data.application.dtExtensions.instanceId === event.instanceId) {
                    deferApplicationIsRegisterd.resolve();
                    if (!_this.destroyed) {
                        if (event.isRegistered) {
                            _this.activateApplication(event.instanceId);
                        }
                        else {
                            _this.deactivateApplication(event.instanceId);
                        }
                    }
                }
                return false;
            });
            var closableOnAppExitEvent = public_2.ApplicationClient.appManagement.onAppExitEvent(function (event) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("onAppExitEvent - event: '" + JSON.stringify(event) + "'", AppLauncherHostComponent_1.TAG)); });
                if (_this.currentIntent.data.application.dtExtensions.instanceId === event.instanceId) {
                    _this.deactivateApplication(event.instanceId);
                    setTimeout(function () {
                        if (!_this.destroyed && makeBackNavigation) {
                            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("onAppExitEvent - startIntent", AppLauncherHostComponent_1.TAG)); });
                            _this.startIntent({ data: { ignoreExit: true } }, { type: "backward" });
                        }
                    }, 100);
                }
                return false;
            });
            var closableOnAppStatusChangedEvent = public_2.ApplicationClient.appManagement.onAppStatusChangedEvent(function (event) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("onAppStatusChangedEvent - event: " + JSON.stringify(event), AppLauncherHostComponent_1.TAG)); });
                if (_this.currentIntent.data.application.dtExtensions.instanceId === event.instanceId) {
                    deferApplicationIsRegisterd.resolve();
                    if (!event.isActive) {
                        _this.deactivateApplication(event.instanceId);
                    }
                    setTimeout(function () {
                        if (!_this.destroyed && !event.isActive && makeBackNavigation) {
                            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("onAppStatusChangedEvent - startIntent", AppLauncherHostComponent_1.TAG)); });
                            _this.startIntent({ data: { ignoreExit: true } }, { type: "backward" });
                        }
                    }, 100);
                }
                return false;
            });
            var closableOnLeave = props.events.onLeave(function (nextLocation) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("onLeave", AppLauncherHostComponent_1.TAG)); });
                if (!nextLocation.isBackNavigation) {
                    public_3.Logger.error(function (log) { return log(public_3.LogMsg("onLeave - forward navigation not allowed!", AppLauncherHostComponent_1.TAG)); });
                    return bluebird.reject(new AppLauncherHostError("onLeave - forward navigation not allowed!"));
                }
                var funcMakeBackNavigation = function (state) {
                    var nextIntent = new public_1.IntentCore.AppLauncherStartup(nextLocation.intent.data);
                    var oldIntent;
                    for (var key in state) {
                        if (key.indexOf(applauncher_startup_component_1.AppLauncherStartupComponent.ID) > 0) {
                            oldIntent = new public_1.IntentCore.AppLauncherStartup(state[key].oldIntent.data);
                        }
                    }
                    return oldIntent ? (nextIntent.data.application.dtExtensions.instanceId === oldIntent.data.application.dtExtensions.instanceId) : false;
                };
                makeBackNavigation = funcMakeBackNavigation(nextLocation.state || {});
                setTimeout(function () { return deferApplicationIsRegisterd.resolve(); }, 2000);
                return deferApplicationIsRegisterd.promise;
            });
            var closeableRegisterPinForgotten = uar_service_1.UarService.getInstance().registerPinForgotten(function () {
                return _this.startIntent(undefined, { type: "exit", exitMarkerName: "application", priority: "high" }).then(function () { return undefined; });
            });
            _this.onDestroy(function () {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("onDestroy", AppLauncherHostComponent_1.TAG)); });
                if (closableOnAppExitEvent) {
                    closableOnAppExitEvent();
                }
                if (closableOnAppRegistrationEvent) {
                    closableOnAppRegistrationEvent();
                }
                if (closableOnAppStatusChangedEvent) {
                    closableOnAppStatusChangedEvent();
                }
                if (closeableRegisterPinForgotten) {
                    closeableRegisterPinForgotten();
                }
                closableOnLeave();
            });
            _this.handleApplication();
            return _this;
        }
        AppLauncherHostComponent_1 = AppLauncherHostComponent;
        AppLauncherHostComponent.prototype.deactivateApplication = function (instanceId) {
            public_2.ApplicationClient.appManagement.deActivate(instanceId);
            public_2.ApplicationClient.appManagement.givePortalPriority();
        };
        AppLauncherHostComponent.prototype.activateApplication = function (instanceId) {
            public_2.ApplicationClient.appManagement.activate(instanceId);
            public_2.ApplicationClient.appManagement.giveAppPriority(instanceId);
        };
        AppLauncherHostComponent.prototype.componentDidUpdate = function () {
            var instanceId = this.currentIntent.data.application.dtExtensions.instanceId;
            var layerComponent = this.findParentComponent(public_1.LayerId).component;
            var isActive = !!(layerComponent === null || layerComponent === void 0 ? void 0 : layerComponent.isActive);
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("componentDidUpdate - isActive: '" + isActive + "'", AppLauncherHostComponent_1.TAG)); });
            isActive ? public_2.ApplicationClient.appManagement.giveAppPriority(instanceId) : public_2.ApplicationClient.appManagement.givePortalPriority();
        };
        AppLauncherHostComponent.prototype.handleApplication = function () {
            if (!this.currentIntent)
                return;
            var application = this.currentIntent.data.application;
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("handleApplication - cmsID " + application.dtExtensions.instanceId, AppLauncherHostComponent_1.TAG)); });
            switch (application.dtExtensions.instanceId) {
                default:
                    return this.startApplication(application, applauncher_service_1.AppLauncherService.getInstance().createCommandsForGenericApplication(this.currentIntent.data));
            }
        };
        AppLauncherHostComponent.prototype.startApplication = function (application, commands) {
            public_1.TVDialogHostService.getInstance().closeAllOpenDialogs("abortedByAppStart");
            this.callAppManager(application.dtExtensions.instanceId, application.zosaId, function () { return public_2.ApplicationClient.appManagement.start(application.dtExtensions.customProperties.manifestName, application.dtExtensions.instanceId, commands, public_2.ApplicationClient.appManagement.getRunningExternalApps().map(function (app) { return app.name; })); }, "start", "Start()");
        };
        AppLauncherHostComponent.prototype.callAppManager = function (appCmsId, appZosaId, appManagerCall, action, method) {
            var appManagerCallResult = appManagerCall();
            if (appManagerCallResult != 0) {
                var errorDescription_1 = public_2.ServiceClientContextZac.instance.zacAPI.GetErrorDescription(appManagerCallResult);
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("'" + appCmsId + "' failed to " + action + ". " + method + " returned " + appManagerCallResult + " (" + errorDescription_1 + ")", AppLauncherHostComponent_1.TAG)); });
                this.startIntent({ data: { ignoreExit: true } }, { type: "backward" });
            }
            else {
                public_2.ApplicationClient.playbackHistory.registerItem(appZosaId, 6);
                public_2.ApplicationClient.playbackHistory.addItem(appZosaId);
            }
        };
        AppLauncherHostComponent.prototype.render = function () {
            return React.createElement(public_1.NavigationContainer, { id: "appLauncherHost" },
                React.createElement(public_1.NavigationKey, { keyFilter: "AUTOCLOSE_1_KEY", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationElement, { id: "dummy" }));
        };
        var AppLauncherHostComponent_1;
        __decorate([
            public_3.log2(function () { return ({ name: AppLauncherHostComponent_1.TAG }); })
        ], AppLauncherHostComponent.prototype, "deactivateApplication", null);
        __decorate([
            public_3.log2(function () { return ({ name: AppLauncherHostComponent_1.TAG }); })
        ], AppLauncherHostComponent.prototype, "activateApplication", null);
        __decorate([
            public_3.log2(function () { return ({ name: AppLauncherHostComponent_1.TAG }); })
        ], AppLauncherHostComponent.prototype, "startApplication", null);
        __decorate([
            public_3.log2(function () { return ({ name: AppLauncherHostComponent_1.TAG }); })
        ], AppLauncherHostComponent.prototype, "callAppManager", null);
        AppLauncherHostComponent = AppLauncherHostComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "applauncher-host-component"
            }),
            public_3.logTag()
        ], AppLauncherHostComponent);
        return AppLauncherHostComponent;
    }(public_1.ReactBaseComponent));
    exports.AppLauncherHostComponent = AppLauncherHostComponent;
});
//# sourceMappingURL=applauncher.host.component.js.map