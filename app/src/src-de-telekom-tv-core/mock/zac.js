var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "./zacapp", "./zacappmanager", "./zacauthman", "./zacfrontend", "./zacnetworks", "./zacoutdoor", "./zacoutputs", "./zacpluginversion", "./zacsqmreports", "./zacsqmtracelog", "./zacstoragemanager", "./zacsystem", "./zacsysteminfo", "./zacbluetooth"], function (require, exports, public_1, zacapp_1, zacappmanager_1, zacauthman_1, zacfrontend_1, zacnetworks_1, zacoutdoor_1, zacoutputs_1, zacpluginversion_1, zacsqmreports_1, zacsqmtracelog_1, zacstoragemanager_1, zacsystem_1, zacsysteminfo_1, zacbluetooth_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Zac = void 0;
    var Zac = (function () {
        function Zac() {
            var _this = this;
            this.Networks = Zac_1.getNetworks();
            this.System = new zacsystem_1.ZacSystem(Zac_1.getNetworks());
            this.StorageManager = new zacstoragemanager_1.ZacStorageManager();
            this.PluginVersion = new zacpluginversion_1.ZacPluginVersion();
            this.Bluetooth = new zacbluetooth_1.ZacBluetooth();
            this.Outputs = new zacoutputs_1.ZacOutputs();
            this.AppManager = new zacappmanager_1.ZacAppManager();
            this.OutDoorUnitDb = new zacoutdoor_1.ZacOutDoorUnitDb();
            this.Frontends = new zacfrontend_1.ZacFrontendManager();
            this.RESTRICTED_ACCESS = 6;
            this.SERVICE_UNAVAILABLE = 8;
            this.CONTENT_CORRUPT = 9;
            this.INSUFFICIENT_RESOURCES = 11;
            this.UNKNOWN_ERROR = 12;
            this.TIMEOUT = 14;
            this.NOT_FOUND = 15;
            this.CONTENT_RESTRICTION = 20;
            this.PARENTAL_CONTROL_BLOCKED = 21;
            this.NOT_SUBSCRIBED = 22;
            this.INSUFFICIENT_BANDWIDTH = 23;
            this.DEVICE_NOT_AVAILABLE = 30;
            this.OUTPUT_CAPABILITIES_MISSING = 34;
            setTimeout(function () {
                var authMan = _this.GetCustomAPI("DT-AuthenticationManager");
                var params = {
                    clientID: "",
                    scope: "ngtvvod"
                };
                authMan.Call("GetAccessToken", params);
            }, 10);
        }
        Zac_1 = Zac;
        Zac.getNetworks = function () {
            if (Zac_1.zacNetworks == null) {
                Zac_1.zacNetworks = new zacnetworks_1.ZacNetworks();
            }
            return Zac_1.zacNetworks;
        };
        Zac.prototype.CreateApp = function (manifestName, instanceName) {
            return this.currentZacApp = new zacapp_1.ZacApp();
        };
        Zac.prototype.GetCustomAPI = function (name) {
            var _this = this;
            if (name === "DT-AuthenticationManager") {
                var authMan = new zacauthman_1.ZacAuthMan();
                authMan.dialogRequestFunc = function (event) {
                    var _a;
                    if ((_a = _this.currentZacApp) === null || _a === void 0 ? void 0 : _a.dialogRequestFunc) {
                        _this.currentZacApp.dialogRequestFunc(event);
                    }
                };
                return authMan;
            }
            else if (name === "sqmReportApi") {
                var sqmReportApi = new zacsqmreports_1.ZacSqmReports();
                return sqmReportApi;
            }
            else if (name === "sqmTraceLogApi") {
                var sqmReportApi = new zacsqmtracelog_1.ZacSqmTraceLog();
                return sqmReportApi;
            }
            else if (name === "DT-SystemInformationAPI") {
                var systemInfoApi = new zacsysteminfo_1.ZacSystemInfo();
                return systemInfoApi;
            }
            else {
                return {
                    Call: function (name, input) { return {}; },
                    registerEventListener: function (evtName, evtHandlerFunction) { return {}; },
                    unregisterEventListener: function (evtName, id) { return; }
                };
            }
        };
        Zac.prototype.GetErrorDescription = function (errorCode) {
            return "Not available on jsZAC mock!";
        };
        var Zac_1;
        Zac = Zac_1 = __decorate([
            public_1.logTag()
        ], Zac);
        return Zac;
    }());
    exports.Zac = Zac;
});
//# sourceMappingURL=zac.js.map