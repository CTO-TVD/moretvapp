var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacDialManager = void 0;
    var ZacDialManager = (function () {
        function ZacDialManager() {
            this.eventManager = new public_1.EventManager();
            this.eventRegistration = {};
            this.DIAL_PROP_ALLOW_STOP = "DIAL_PROP_ALLOW_STOP";
            this.HIDDEN = 2;
            this.RUNNING = 1;
            this.STOPPED = 0;
        }
        ZacDialManager_1 = ZacDialManager;
        ZacDialManager.prototype.registerEventListener = function (evtName, evtHandlerFunction) {
            ZacDialManager_1.eventCounter++;
            this.eventRegistration[ZacDialManager_1.eventCounter] = this.eventManager.on(evtName, function (event) { evtHandlerFunction(event); return true; }, ZacDialManager_1.TAG);
            return ZacDialManager_1.eventCounter;
        };
        ZacDialManager.prototype.unregisterEventListener = function (evtName, id) {
            this.eventRegistration[id]();
            delete this.eventRegistration[id];
        };
        ZacDialManager.prototype.AcknowledgeHideDial = function (appName, appStarted) {
            return 0;
        };
        ZacDialManager.prototype.AcknowledgeStartDial = function (appName, appStarted) {
            return 0;
        };
        ZacDialManager.prototype.AcknowledgeStatusDial = function (appName, appStatus) {
            return 0;
        };
        ZacDialManager.prototype.AcknowledgeStopDial = function (appName) {
            return 0;
        };
        ZacDialManager.prototype.DisableDial = function (appName) {
            return 0;
        };
        ZacDialManager.prototype.EnableDial = function (appName) {
            return 0;
        };
        ZacDialManager.prototype.RegisterDial = function (appName, props) {
            return "http://localhost:8081/apps/" + appName + "/dial_data";
        };
        var ZacDialManager_1;
        ZacDialManager.eventCounter = 0;
        ZacDialManager = ZacDialManager_1 = __decorate([
            public_1.logTag()
        ], ZacDialManager);
        return ZacDialManager;
    }());
    exports.ZacDialManager = ZacDialManager;
});
//# sourceMappingURL=zacdialmanager.js.map