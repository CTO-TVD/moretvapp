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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "react", "URIjs/URI", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "./applauncher.service", "src/src-de-telekom-tv-core/public", "../../framework/public"], function (require, exports, React, urijs, public_1, public_2, applauncher_service_1, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppLauncherStartupComponent = void 0;
    var AppLauncherStartupComponent = (function (_super) {
        __extends(AppLauncherStartupComponent, _super);
        function AppLauncherStartupComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.validScopes = ["ngtvepg", "ngtvvod", "sdpnf", "dcp", "smarthub"];
            _this.appLauncherService = applauncher_service_1.AppLauncherService.getInstance();
            var closableEvent = props.events.onLeave(function () {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("onLeave", AppLauncherStartupComponent_1.TAG)); });
            });
            _this.onDestroy(function () {
                closableEvent();
                public_4.PconGroupedContentLockManager.resetPconLock();
            });
            return _this;
        }
        AppLauncherStartupComponent_1 = AppLauncherStartupComponent;
        AppLauncherStartupComponent.prototype.onPushstateLoad = function () {
            var _this = this;
            _super.prototype.onPushstateLoad.call(this);
            var intent = new public_1.IntentCore.AppLauncherStartup(this.props.location.intent.data);
            public_2.Logger.debug(function (log) { return log(public_2.LogMsg("onPushstateLoad - oldIntent: '" + JSON.stringify(_this.oldIntent) + "'", AppLauncherStartupComponent_1.TAG)); });
            public_2.Logger.debug(function (log) { return log(public_2.LogMsg("onPushstateLoad - intent: '" + JSON.stringify(intent) + "'", AppLauncherStartupComponent_1.TAG)); });
            if (!this.props.location.isBackNavigation) {
                this.handleApplicationStart(intent);
            }
            if (this.props.location.isBackNavigation && this.props.location.isExitMarker) {
                this.appLauncherService.hasRunningApplication = false;
                if (this.oldIntent) {
                    this.appLauncherService.destroyPlaybackSession(this.oldIntent.data.application.dtExtensions.instanceId);
                }
                if (this.oldIntent && this.oldIntent.data.timestamp === intent.data.timestamp) {
                    if ((intent.data.application.dtExtensions.customProperties.turnVideoOff) || (intent.data.application.title === "Konferenz-Alarm")) {
                        public_2.Logger.debug(function (log) { return log(public_2.LogMsg("onPushstateLoad - start last played content", AppLauncherStartupComponent_1.TAG)); });
                        public_1.RouteService.getInstance().setBasePath(public_1.IntentCore.LiveTV);
                    }
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("onPushstateLoad - startIntent", AppLauncherStartupComponent_1.TAG)); });
                    this.startIntent(undefined, { type: "backward" })
                        .then(function () {
                        _this.appLauncherService.resolvePowerStateChangedEvent();
                    });
                }
                else {
                    this.handleApplicationStart(intent);
                }
            }
        };
        AppLauncherStartupComponent.prototype.handleApplicationStart = function (intent) {
            var _this = this;
            public_2.Logger.debug(function (log) { return log(public_2.LogMsg("handleApplicationStart - instanceId: '" + intent.data.application.dtExtensions.instanceId + "'", AppLauncherStartupComponent_1.TAG)); });
            this.oldIntent = intent;
            if (!intent.data.startSuspended) {
                this.appLauncherService.createPlaybackSession(intent.data.application);
            }
            if (intent.data.application.dtExtensions.customProperties.turnVideoOff) {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("handleApplicationStart - stop player", AppLauncherStartupComponent_1.TAG)); });
            }
            public_4.PconGroupedContentLockManager.resetAvsLock()
                .then(function () {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("reset resetParentalUnblockingIfBlocked AVS ... done. handleApplicationStart", AppLauncherStartupComponent_1.TAG)); });
                if (AppLauncherStartupComponent_1.regExpUrlPattern.test(intent.data.application.url)) {
                    _this.handleInternalApplications(intent);
                }
                else {
                    _this.handleExternalApplications(intent);
                }
            })
                .catch(public_2.ErrorManager.catchFunc(AppLauncherStartupComponent_1, 0x02));
        };
        AppLauncherStartupComponent.prototype.isScopeValid = function (scope) {
            return this.validScopes.map(function (scope) { return scope; }).indexOf(scope) >= 0;
        };
        AppLauncherStartupComponent.prototype.handleExternalApplications = function (intent) {
            var _this = this;
            if (intent.data.application.dtExtensions.customProperties.token) {
                var tokenScope_1 = intent.data.application.dtExtensions.customProperties.token;
                if (!this.isScopeValid(tokenScope_1)) {
                    public_2.Logger.error(function (log) { return log(public_2.LogMsg("Scope " + tokenScope_1 + " could not be found in the list of valid scopes [" + _this.validScopes.join("|") + "]", AppLauncherStartupComponent_1.TAG)); });
                    this.startApplication(intent);
                }
                else {
                    public_3.ApplicationClient.authMan.getAccessTokenForScope(tokenScope_1)
                        .then(function (tokenValue) {
                        if (!intent.data.additionalUrlParameters) {
                            intent.data.additionalUrlParameters = [];
                        }
                        intent.data.additionalUrlParameters.push(["token", tokenValue]);
                        _this.startApplication(intent);
                    })
                        .catch(function (error) {
                        public_2.ErrorManager.catch(error, AppLauncherStartupComponent_1, 0x03);
                        _this.startApplication(intent);
                    });
                }
            }
            else {
                this.startApplication(intent);
            }
        };
        AppLauncherStartupComponent.prototype.startApplication = function (intent) {
            var _this = this;
            this.startIntent(new public_1.IntentCore.AppLauncherHost(intent.data), { exitMarker: true, exitMarkerName: "application" })
                .then(function () { return _this.appLauncherService.hasRunningApplication = true; });
        };
        AppLauncherStartupComponent.prototype.handleInternalApplications = function (intent) {
            var _this = this;
            if (AppLauncherStartupComponent_1.regExpLocalChannelUrl.test(intent.data.application.url)) {
                public_3.ApplicationClient.playbackHistory.registerItem(intent.data.application.zosaId, 6);
                public_3.ApplicationClient.playbackHistory.addItem(intent.data.application.zosaId);
                this.startIntent(new public_1.IntentCore.Epg({ showLocalChannels: true }), { type: "replace" });
            }
            else if (AppLauncherStartupComponent_1.regExpWebRadioUrl.test(intent.data.application.url)) {
                public_3.ApplicationClient.playbackHistory.registerItem(intent.data.application.zosaId, 6);
                public_3.ApplicationClient.playbackHistory.addItem(intent.data.application.zosaId);
                this.startIntent(new public_1.IntentRadio.Main(), { exitMarker: true, exitMarkerName: "application" })
                    .then(function () { return _this.appLauncherService.hasRunningApplication = true; });
            }
            else if (AppLauncherStartupComponent_1.regExpWhiteLabelUrl.test(intent.data.application.url)) {
                var queryString = new urijs(intent.data.application.url.replace("Internal:WhiteLableAPP", "Internal_WhiteLableAPP")).query();
                var queryObject = urijs.parseQuery(queryString);
                if (queryObject === null || queryObject === void 0 ? void 0 : queryObject.ServiceID) {
                    var serviceID = queryObject.ServiceID.indexOf(AppLauncherStartupComponent_1.prefix) === 0 ? queryObject.ServiceID : "" + AppLauncherStartupComponent_1.prefix + queryObject.ServiceID;
                    public_3.ApplicationClient.playbackHistory.registerItem(intent.data.application.zosaId, 6);
                    public_3.ApplicationClient.playbackHistory.addItem(intent.data.application.zosaId);
                    this.startIntent(new public_1.IntentCore.MenuHub({ gridpath: serviceID }), { exitMarker: true, exitMarkerName: "application" })
                        .then(function () { return _this.appLauncherService.hasRunningApplication = true; });
                }
            }
        };
        AppLauncherStartupComponent.prototype.render = function () {
            return React.createElement("div", null);
        };
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var AppLauncherStartupComponent_1;
        AppLauncherStartupComponent.classID = 0x720;
        AppLauncherStartupComponent.prefix = "TVHS_";
        AppLauncherStartupComponent.urlPattern = ((_b = (_a = public_2.Configuration.instance.vas) === null || _a === void 0 ? void 0 : _a.internalApps) === null || _b === void 0 ? void 0 : _b.urlPattern) || "^.*Internal:";
        AppLauncherStartupComponent.localChannelUrlPattern = ((_d = (_c = public_2.Configuration.instance.vas) === null || _c === void 0 ? void 0 : _c.internalApps) === null || _d === void 0 ? void 0 : _d.localChannelUrlPattern) || "^http(s)*://Internal:LocalChannel$";
        AppLauncherStartupComponent.webRadioUrlPattern = ((_f = (_e = public_2.Configuration.instance.vas) === null || _e === void 0 ? void 0 : _e.internalApps) === null || _f === void 0 ? void 0 : _f.webRadioUrlPattern) || "^http(s)*://Internal:WebRadio$";
        AppLauncherStartupComponent.whiteLabelUrlPattern = ((_h = (_g = public_2.Configuration.instance.vas) === null || _g === void 0 ? void 0 : _g.internalApps) === null || _h === void 0 ? void 0 : _h.whiteLabelUrlPattern) || "^http(s)*://Internal:WhiteLableAPP";
        AppLauncherStartupComponent.regExpUrlPattern = new RegExp(AppLauncherStartupComponent_1.urlPattern);
        AppLauncherStartupComponent.regExpLocalChannelUrl = new RegExp(AppLauncherStartupComponent_1.localChannelUrlPattern);
        AppLauncherStartupComponent.regExpWebRadioUrl = new RegExp(AppLauncherStartupComponent_1.webRadioUrlPattern);
        AppLauncherStartupComponent.regExpWhiteLabelUrl = new RegExp(AppLauncherStartupComponent_1.whiteLabelUrlPattern);
        __decorate([
            public_1.reactPushState()
        ], AppLauncherStartupComponent.prototype, "oldIntent", void 0);
        AppLauncherStartupComponent = AppLauncherStartupComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "applauncher-startup-component"
            }),
            public_2.logTag()
        ], AppLauncherStartupComponent);
        return AppLauncherStartupComponent;
    }(public_1.ReactBaseComponent));
    exports.AppLauncherStartupComponent = AppLauncherStartupComponent;
});
//# sourceMappingURL=applauncher.startup.component.js.map