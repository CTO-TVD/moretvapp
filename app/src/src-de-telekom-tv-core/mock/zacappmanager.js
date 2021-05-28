var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "./zacdialmanager"], function (require, exports, public_1, zacdialmanager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacAppManager = void 0;
    var ZacAppManager = (function () {
        function ZacAppManager() {
            this.eventManager = new public_1.EventManager();
            this.eventRegistration = {};
            this.runningApps = [];
            this.APP_STARTED_STATUS_STOP_DISPOSABLE_APPS_TIMEOUT = 0;
            this.APP_STARTED_STATUS_LACK_OF_MEMORY_TO_START = 1;
            this.STATUS_CHANGED_REASON_ACTIVATION_STATE_CHANGED = 2;
            this.DialManager = new zacdialmanager_1.ZacDialManager();
        }
        ZacAppManager_1 = ZacAppManager;
        ZacAppManager.prototype.registerEventListener = function (evtName, evtHandlerFunction) {
            ZacAppManager_1.eventCounter++;
            this.eventRegistration[ZacAppManager_1.eventCounter] = this.eventManager.on(evtName, function (event) { evtHandlerFunction(event); return true; }, ZacAppManager_1.TAG);
            return ZacAppManager_1.eventCounter;
        };
        ZacAppManager.prototype.unregisterEventListener = function (evtName, id) {
            this.eventRegistration[id]();
            delete this.eventRegistration[id];
        };
        ZacAppManager.prototype.Activate = function (instance) {
            var appInstance = this.runningApps.filter(function (app) { return app.name === instance; })[0];
            if (appInstance) {
                appInstance.isActive = true;
                return 0;
            }
            return 1;
        };
        ZacAppManager.prototype.Deactivate = function (instance) {
            var appInstance = this.runningApps.filter(function (app) { return app.name === instance; })[0];
            if (appInstance) {
                appInstance.isActive = false;
                return 0;
            }
            return 1;
        };
        ZacAppManager.prototype.GetActivated = function (instance) {
            var appInstance = this.runningApps.filter(function (app) { return app.name === instance; })[0];
            if (appInstance) {
                return appInstance.isActive;
            }
            return false;
        };
        ZacAppManager.prototype.GetAppInstancesProperties = function () {
            return this.runningApps;
        };
        ZacAppManager.prototype.GetVisibility = function (instanceName) {
            return true;
        };
        ZacAppManager.prototype.GetZOrder = function (instanceName) {
            return 0;
        };
        ZacAppManager.prototype.SendCommand = function (instance, command) {
            return 0;
        };
        ZacAppManager.prototype.SetInputPriority = function (instanceName, priority) {
            return 0;
        };
        ZacAppManager.prototype.SetVisibility = function (instanceName, visible) {
            return 0;
        };
        ZacAppManager.prototype.SetZOrder = function (instanceName, zOrder) {
            return 0;
        };
        ZacAppManager.prototype.Start = function (manifest, instance, commands) {
            this.runningApps.push({ isActive: true, isInternal: false, name: instance });
            var event1 = {
                instanceId: instance,
                isRegistered: true
            };
            this.eventManager.broadcast("AppRegistrationEvent", event1);
            var event2 = {
                instanceId: instance,
                isActive: true,
                reason: 0
            };
            this.eventManager.broadcast("AppStatusChangedEvent", event2);
            return 0;
        };
        ZacAppManager.prototype.Stop = function (instance) {
            var appInstance = this.runningApps.filter(function (app) { return app.name === instance; })[0];
            var index = this.runningApps.indexOf(appInstance);
            if (index != -1) {
                this.runningApps.splice(index, 1);
            }
            var event1 = {
                instanceId: instance,
                isRegistered: false
            };
            this.eventManager.broadcast("AppRegistrationEvent", event1);
            var event2 = {
                exitStatus: 0,
                instanceId: instance
            };
            this.eventManager.broadcast("AppExitEvent", event2);
            return 0;
        };
        var ZacAppManager_1;
        ZacAppManager.eventCounter = 0;
        ZacAppManager = ZacAppManager_1 = __decorate([
            public_1.logTag()
        ], ZacAppManager);
        return ZacAppManager;
    }());
    exports.ZacAppManager = ZacAppManager;
});
//# sourceMappingURL=zacappmanager.js.map