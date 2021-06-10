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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define(["require", "exports", "bluebird", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/public", "../../translation/public", "./applauncher.host.component", "./applauncher.service", "./applauncher.startup.component", "./exitdialog.component", "./applauncher.service", "./uiactiontracker", "./applauncher.mqtt.messages"], function (require, exports, bluebird, React, public_1, public_2, public_3, public_4, applauncher_host_component_1, applauncher_service_1, applauncher_startup_component_1, exitdialog_component_1, applauncher_service_2, uiactiontracker_1, applauncher_mqtt_messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppLauncherModule = void 0;
    __exportStar(applauncher_service_2, exports);
    __exportStar(uiactiontracker_1, exports);
    __exportStar(applauncher_mqtt_messages_1, exports);
    var AppLauncherModuleError = (function (_super) {
        __extends(AppLauncherModuleError, _super);
        function AppLauncherModuleError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x60B;
            return _this;
        }
        return AppLauncherModuleError;
    }(public_3.BaseError));
    var AppLauncherModule = (function (_super) {
        __extends(AppLauncherModule, _super);
        function AppLauncherModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AppLauncherModule_1 = AppLauncherModule;
        AppLauncherModule.prototype.run = function () {
            var _this = this;
            public_1.RouteService.getInstance().registerRoute([
                function (key) { return React.createElement(public_1.Route, { key: key, path: public_1.IntentCore.AppLauncherHost, component: applauncher_host_component_1.AppLauncherHostComponent }); },
                function (key) { return React.createElement(public_1.Route, { key: key, path: public_1.IntentCore.AppLauncherStartup, component: applauncher_startup_component_1.AppLauncherStartupComponent, onEnter: function (nextLocation, checkOptions) { return _this.onEnter(nextLocation, checkOptions); } }); }
            ]);
            applauncher_service_1.AppLauncherService.getInstance();
        };
        AppLauncherModule.prototype.onEnter = function (nextLocation, checkOptions) {
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("onEnter", AppLauncherModule_1.TAG)); });
            var nextIntent = new public_1.IntentCore.AppLauncherStartup(nextLocation.intent.data);
            if (nextLocation.isBackNavigation && !nextIntent.data.ignoreExit) {
                var oldIntentTemp = void 0;
                if (nextLocation.state) {
                    for (var key in nextLocation.state) {
                        if (key.indexOf(applauncher_startup_component_1.AppLauncherStartupComponent.ID) > 0) {
                            oldIntentTemp = new public_1.IntentCore.AppLauncherStartup(nextLocation.state[key].oldIntent.data);
                        }
                    }
                }
                if (public_3.Guard.isDefined(oldIntentTemp)) {
                    var oldIntent_1 = oldIntentTemp;
                    if ((nextIntent.data.application.dtExtensions.instanceId === oldIntent_1.data.application.dtExtensions.instanceId) && (nextIntent.data.timestamp !== oldIntent_1.data.timestamp)) {
                        return bluebird.reject(new AppLauncherModuleError("The application with the instandId: '" + nextIntent.data.application.dtExtensions.instanceId + "' is already running!"));
                    }
                    var data = {
                        title: public_4.messagesCore.STB_GN_TI001,
                        message: { text: public_4.messagesCore.STB_GN_TI002, values: { appName: oldIntent_1.data.application.title } },
                        extraData: {}
                    };
                    var deferExitApplication_1 = public_3.Defer.defer();
                    var closableOnAppStatusChangedEvent_1 = public_2.ApplicationClient.appManagement.onAppStatusChangedEvent(function (event) {
                        public_3.Logger.verbose(function (log) { return log(public_3.LogMsg("onAppStatusChangedEvent - event: '" + JSON.stringify(event) + "'", AppLauncherModule_1.TAG)); });
                        if ((oldIntent_1.data.application.dtExtensions.instanceId === event.instanceId) && (!event.isActive)) {
                            deferExitApplication_1.resolve();
                        }
                        return false;
                    });
                    var closableOnAppExit_1 = public_2.ApplicationClient.appManagement.onAppExitEvent(function (event) {
                        public_3.Logger.verbose(function (log) { return log(public_3.LogMsg("onAppExitEvent - event: '" + JSON.stringify(event) + "'", AppLauncherModule_1.TAG)); });
                        if (oldIntent_1.data.application.dtExtensions.instanceId === event.instanceId) {
                            deferExitApplication_1.resolve();
                        }
                        return false;
                    });
                    var timeout_1;
                    var closedPromise = (checkOptions.priority === "normal")
                        ? public_1.TVDialogHostService.getInstance().show(data, exitdialog_component_1.ExitDialogComponent).result()
                        : bluebird.resolve({ resultId: exitdialog_component_1.ExitDialogResult.confirm, closed: bluebird.resolve() });
                    return closedPromise
                        .then(function (result) { return result.closed.then(function () {
                        public_3.Logger.debug(function (log) { return log(public_3.LogMsg("onEnter - dialog result: '" + result.resultId + "'", AppLauncherModule_1.TAG)); });
                        if (result.resultId === exitdialog_component_1.ExitDialogResult.confirm) {
                            timeout_1 = setTimeout(function () {
                                public_3.Logger.verbose(function (log) { return log(public_3.LogMsg("onEnter - deferExitApplication timeout called", AppLauncherModule_1.TAG)); });
                                deferExitApplication_1.resolve();
                            }, 5000);
                            var oldInstanceId_1 = oldIntent_1.data.application.dtExtensions.instanceId;
                            if (oldInstanceId_1 === applauncher_service_1.AppLauncherService.IDENTIFIER_NETFLIX) {
                                var command = "suspend exit_type=" + 2;
                                var result_1 = public_2.ApplicationClient.appManagement.sendCommand(oldInstanceId_1, command);
                                if (result_1) {
                                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("'" + oldInstanceId_1 + "' failed to suspend. SendCommand() returned " + result_1 + " (" + public_2.ServiceClientContextZac.instance.zacAPI.GetErrorDescription(result_1) + ")", AppLauncherModule_1.TAG)); });
                                }
                                public_2.ApplicationClient.appManagement.setVisibility(oldInstanceId_1, false);
                                public_2.ApplicationClient.appManagement.deActivate(oldInstanceId_1);
                                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("onEnter - closed Netflix: '" + oldInstanceId_1 + "'", AppLauncherModule_1.TAG)); });
                                return deferExitApplication_1.promise;
                            }
                            else if (applauncher_startup_component_1.AppLauncherStartupComponent.regExpUrlPattern.test(oldIntent_1.data.application.url)) {
                                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("onEnter - closed internal app: '" + oldInstanceId_1 + "'", AppLauncherModule_1.TAG)); });
                                return bluebird.resolve();
                            }
                            else {
                                var result_2 = public_2.ApplicationClient.appManagement.stop(oldInstanceId_1);
                                if (result_2) {
                                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("'" + oldInstanceId_1 + "' failed to stop. Stop() returned " + result_2 + " (" + public_2.ServiceClientContextZac.instance.zacAPI.GetErrorDescription(result_2) + ")", AppLauncherModule_1.TAG)); });
                                }
                                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("onEnter - closed application: '" + oldInstanceId_1 + "'", AppLauncherModule_1.TAG)); });
                                return deferExitApplication_1.promise;
                            }
                        }
                        else {
                            return bluebird.reject(new AppLauncherModuleError("The application should not be stopped after all."));
                        }
                    }); })
                        .finally(function () {
                        public_3.Logger.debug(function (log) { return log(public_3.LogMsg("onEnter - finally: '" + oldIntent_1.data.application.dtExtensions.instanceId + "'", AppLauncherModule_1.TAG)); });
                        if (closableOnAppStatusChangedEvent_1) {
                            closableOnAppStatusChangedEvent_1();
                        }
                        if (closableOnAppExit_1) {
                            closableOnAppExit_1();
                        }
                        clearTimeout(timeout_1);
                    });
                }
            }
            return undefined;
        };
        var AppLauncherModule_1;
        AppLauncherModule.classID = 0x71E;
        AppLauncherModule = AppLauncherModule_1 = __decorate([
            public_3.logTag()
        ], AppLauncherModule);
        return AppLauncherModule;
    }(public_1.ReactBaseModule));
    exports.AppLauncherModule = AppLauncherModule;
});
//# sourceMappingURL=public.js.map