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
define(["require", "exports", "URIjs/URI", "src/src-de-telekom/public", "./eventgenerator", "./zacfrontdisplay", "./zacpower", "./zacsettings", "./zacswupgrade", "./zacoutdoor", "./zacbluetooth"], function (require, exports, urijs, public_1, eventgenerator_1, zacfrontdisplay_1, zacpower_1, zacsettings_1, zacswupgrade_1, zacoutdoor_1, zacbluetooth_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacSystem = void 0;
    var ZacSystem = (function (_super) {
        __extends(ZacSystem, _super);
        function ZacSystem(networks) {
            var _this = _super.call(this) || this;
            _this.FACTORYRESET_MODE_USER = 0;
            _this.FACTORYRESET_MODE_SYSTEM = 1;
            _this.FACTORYRESET_MODE_ALL = 2;
            _this.UI_VERSION = "UI_VERSION";
            _this.bootTime = Date.now();
            _this.FrontDisplay = new zacfrontdisplay_1.ZacFrontDisplay();
            _this.Power = new zacpower_1.ZacPower();
            _this.Networks = networks;
            _this.Settings = new zacsettings_1.ZacSettings();
            _this.SwUpgrade = new zacswupgrade_1.ZacSwUpgrade();
            _this.OutDoorUnitDb = new zacoutdoor_1.ZacOutDoorUnitDb();
            _this.Bluetooth = new zacbluetooth_1.ZacBluetooth();
            var startUrl = typeof window !== "undefined" ? window.location.toString() : "";
            _this.deviceGUID = urijs(startUrl).query(true)["deviceGUID"];
            return _this;
        }
        ZacSystem_1 = ZacSystem;
        ZacSystem.prototype.getEventManagerId = function () { return "ZacSystem"; };
        ZacSystem.prototype.getLogSource = function () { return ZacSystem_1.TAG; };
        ZacSystem.prototype.DoFactoryReset = function (level) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("DoFactoryReset level " + level, "ZacSystem")); });
            return 0;
        };
        ZacSystem.prototype.GetSystemInformation = function () {
            var _a, _b, _c, _d;
            var sysInfo = {
                BootloaderVersion: "1.2.1",
                BuildDate: "2015-09-12",
                ChipID: "4150561E-F69C-465B-AFD0-7AE2FFC62347",
                HwModel: ((_b = (_a = public_1.Configuration.instance.features) === null || _a === void 0 ? void 0 : _a.assignment) === null || _b === void 0 ? void 0 : _b.indexOf("mrg5")) !== -1 ? "MRG5" : "MR601SAT_ACN",
                HwModelType: ((_d = (_c = public_1.Configuration.instance.features) === null || _c === void 0 ? void 0 : _c.assignment) === null || _d === void 0 ? void 0 : _d.indexOf("mrg5")) !== -1 ? "PRO" : "",
                HwVersion: "R01T1",
                UpTime: Math.round((Date.now() - this.bootTime) / 1000),
                GUID: this.deviceGUID || public_1.StringTools.generateUUID("5250561E-F69C-465B-AFD0-XXXXXXXXXXXX"),
                OUI: 5,
                ProductID: 67,
                ProductName: "TMW Client",
                SerialNumber: "1A6A7645-2EB8-4691",
                SwBaseVariant: "Zenterio OS 16.1 unstable",
                SwProductVariant: "PHASE_2B BLOCK_2_1 debug build #7",
                SwVersion: 8,
                AdditionalInformation: "[[\"Netflix ESN\", \"DT0401-B0=991300001008\"], [\"Netflix Version\", \"SDK 4.2.2-release-5f99e43\"], [\"VERSION_HARDWARE_CUSTOMER\", \"1.0\"]]"
            };
            return sysInfo;
        };
        ZacSystem.prototype.GetNetworks = function () {
            return this.Networks.networks;
        };
        ZacSystem.prototype.SetAdditionalInformation = function (property, value) {
            return 0;
        };
        var ZacSystem_1;
        ZacSystem = ZacSystem_1 = __decorate([
            public_1.logTag()
        ], ZacSystem);
        return ZacSystem;
    }(eventgenerator_1.EventGenerator));
    exports.ZacSystem = ZacSystem;
});
//# sourceMappingURL=zacsystem.js.map