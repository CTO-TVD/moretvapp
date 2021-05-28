var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacOutDoorUnitDb = void 0;
    var ZacOutDoorConfiguration = (function () {
        function ZacOutDoorConfiguration(filled) {
            this.UNKNOWN_SAT_POS = -1;
            this.NO_SATELLITE = 0;
            this.ODU_DISABLED = "xx_disable";
            this.ODU_DISEQC_2 = "xx_ODU_DISEQC_2";
            this.ODU_DISEQC_4 = "xx_ODU_DISEQC_4";
            this.ODU_DISEQC_MOTOR = "xx_ODU_DISEQC_MOTOR";
            this.ODU_LNB = "xx_ODU_LNB";
            this.ODU_LNB_BAND_TYPE_C = "xx_ODU_LNB_BAND_TYPE_C";
            this.ODU_LNB_BAND_TYPE_KU = "xx_ODU_LNB_BAND_TYPE_KU";
            this.ODU_SATSCAN_MOTOR = "xx ODU_SATSCAN_MOTOR";
            this.ODU_SLAVEPORT = "xx ODU_SLAVEPORT";
            this.ODU_UNICABLE = "xx unicable";
            if (filled) {
                this.ports = [
                    { id: "0", type: this.ODU_DISEQC_2, info: {} },
                    { id: "0/0", type: this.ODU_LNB, info: { lnbType: this.ODU_LNB, orbitalPos: 192, DCOffset: false, satellites: [] } },
                    { id: "0/1", type: this.ODU_LNB, info: { lnbType: this.ODU_LNB, orbitalPos: 192, DCOffset: false, satellites: [] } },
                    { id: "1", type: this.ODU_LNB, info: { lnbType: this.ODU_LNB, orbitalPos: 192, DCOffset: false, satellites: [] } },
                ];
            }
            else {
                this.ports = [];
            }
        }
        ZacOutDoorConfiguration_1 = ZacOutDoorConfiguration;
        ZacOutDoorConfiguration.empty = function () {
            return [];
        };
        ZacOutDoorConfiguration.prototype.SetType = function (port, type) {
            var it = this.ports.filter(function (x) { return x.id == port; });
            if (it.length > 0) {
                it[0].type = type;
            }
            else {
                this.ports.push({ id: port, type: type, info: {} });
            }
            return 0;
        };
        ZacOutDoorConfiguration.prototype.GetType = function (port) {
            var it = this.ports.filter(function (x) { return x.id == port; });
            if (it.length > 0) {
                return it[0].type;
            }
            throw new public_1.IllegalArgumentError("port not configured");
        };
        ZacOutDoorConfiguration.prototype.SetPortInfo = function (port, portInfo) {
            var it = this.ports.filter(function (x) { return x.id == port; });
            if (it.length > 0) {
                it[0].info = portInfo;
            }
            else {
                this.ports.push({ id: port, type: portInfo.lnbType || "", info: portInfo });
            }
            return 0;
        };
        ZacOutDoorConfiguration.prototype.GetPortInfo = function (port) {
            var it = this.ports.filter(function (x) { return x.id == port; });
            if (it.length > 0) {
                return __assign({ lnbType: it[0].type }, it[0].info);
            }
            throw new public_1.IllegalArgumentError("port not configured");
        };
        ZacOutDoorConfiguration.prototype.GetPorts = function () {
            return this.ports.map(function (it) { return it.id; });
        };
        var ZacOutDoorConfiguration_1;
        __decorate([
            public_1.log2(function () { return ({ name: ZacOutDoorConfiguration_1.TAG }); })
        ], ZacOutDoorConfiguration.prototype, "SetType", null);
        __decorate([
            public_1.log2(function () { return ({ name: ZacOutDoorConfiguration_1.TAG }); })
        ], ZacOutDoorConfiguration.prototype, "GetType", null);
        __decorate([
            public_1.log2(function () { return ({ name: ZacOutDoorConfiguration_1.TAG }); })
        ], ZacOutDoorConfiguration.prototype, "SetPortInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: ZacOutDoorConfiguration_1.TAG }); })
        ], ZacOutDoorConfiguration.prototype, "GetPortInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: ZacOutDoorConfiguration_1.TAG }); })
        ], ZacOutDoorConfiguration.prototype, "GetPorts", null);
        ZacOutDoorConfiguration = ZacOutDoorConfiguration_1 = __decorate([
            public_1.logTag()
        ], ZacOutDoorConfiguration);
        return ZacOutDoorConfiguration;
    }());
    var ZacOutDoorUnitDb = (function () {
        function ZacOutDoorUnitDb() {
            this.BAND_KU = 1234;
            this.BAND_C = 1235;
        }
        ZacOutDoorUnitDb.prototype.GetConfiguration = function (current) {
            if (current) {
                return ZacOutDoorUnitDb.S_ZACOUTDOORCONFIGURATION;
            }
            else {
                return (ZacOutDoorUnitDb.S_TEMP = new ZacOutDoorConfiguration(false));
            }
        };
        ZacOutDoorUnitDb.prototype.Commit = function (configuration) {
            ZacOutDoorUnitDb.S_ZACOUTDOORCONFIGURATION = configuration;
            return 0;
        };
        ZacOutDoorUnitDb.prototype.ReadFromStorage = function () {
            ZacOutDoorUnitDb.S_TEMP = ZacOutDoorUnitDb.S_ZACOUTDOORCONFIGURATION;
            return 0;
        };
        ZacOutDoorUnitDb.prototype.WriteToStorage = function () {
            ZacOutDoorUnitDb.S_ZACOUTDOORCONFIGURATION = ZacOutDoorUnitDb.S_TEMP;
            return 0;
        };
        ZacOutDoorUnitDb.prototype.GetLNBTypeInfo = function (name) {
            throw new Error("Method not implemented.");
        };
        ZacOutDoorUnitDb.prototype.DeleteLNBType = function (name) {
            throw new Error("Method not implemented.");
        };
        ZacOutDoorUnitDb.prototype.AddLNBType = function (name, lnbInfo) {
            throw new Error("Method not implemented.");
        };
        ZacOutDoorUnitDb.prototype.GetLNBTypes = function () {
            throw new Error("Method not implemented.");
        };
        ZacOutDoorUnitDb.prototype.GetSatellites = function () {
            throw new Error("Method not implemented. Check if you are looking for Zoas.GetSatellites()!!)");
        };
        ZacOutDoorUnitDb.S_ZACOUTDOORCONFIGURATION = new ZacOutDoorConfiguration(true);
        return ZacOutDoorUnitDb;
    }());
    exports.ZacOutDoorUnitDb = ZacOutDoorUnitDb;
});
//# sourceMappingURL=zacoutdoor.js.map