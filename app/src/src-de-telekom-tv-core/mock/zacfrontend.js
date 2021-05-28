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
define(["require", "exports", "src/src-de-telekom/public", "./zacoutdoor"], function (require, exports, public_1, zacoutdoor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacFrontendManager = exports.ZacFrontend = void 0;
    var ZacFrontendConstants = (function () {
        function ZacFrontendConstants() {
            this.KEY_POLARIZATION = "xxKEY_POLARIZATION";
            this.KEY_FREQ_KHZ = "xxKEY_FREQ_KHZ";
            this.KEY_MODULATION = "xxKEY_MODULATION";
            this.KEY_SYMBOL_RATE_KBAUD = "xxKEY_SYMBOL_RATE_KBAUD";
            this.KEY_ORBITAL_POSITION = "xxKEY_ORBITAL_POSITION";
            this.KEY_POLARIZATIO = "xxKEY_POLARIZATIO";
            this.KEY_FEC_INNER = "xxKEY_FEC_INNER";
            this.KEY_SAT_NAME = "xxKEY_SAT_NAME";
            this.KEY_ROLLOFF = "xxKEY_ROLLOFF";
            this.KEY_SAT_SYSTEM = "xxKEY_SAT_SYSTEM";
            this.KEY_TUNING_TYPE = "xxKEY_TUNING_TYPE";
            this.KEY_DELIVERY_SYSTEM_DESCRIPTOR = "xxKEY_DELIVERY_SYSTEM_DESCRIPTOR";
            this.KEY_FRONTEND_CONNECTOR = "xxKEY_FRONTEND_CONNECTOR";
            this.TUNING_TYPE_DSD = "xxTUNING_TYPE_DSD";
            this.TUNING_TYPE_CABLE = "TUNING_TYPE_CABLE";
            this.TUNING_TYPE_TERRESTRIAL = "TUNING_TYPE_TERRESTRIAL";
            this.TUNING_TYPE_SATELLITE = "TUNING_TYPE_SATELLITE";
            this.TUNER_STATUS_LOCKED = 7;
            this.TUNER_STATUS_TUNING = 12;
            this.TUNER_STATUS_NOT_LOCKED = 28;
            this.FRONTEND_USAGE_RECORDING = 1;
            this.FRONTEND_USAGE_MAIN_PLAYER = 2;
            this.FRONTEND_USAGE_OTHER_PLAYER = 4;
            this.FRONTEND_USAGE_UNDEFINED = 8;
            this.KEY_USERBAND_SLOT = "KEY_USERBAND_SLOT";
            this.MOD_QAM16 = 1000;
            this.MOD_QAM32 = 1001;
            this.MOD_QAM64 = 1002;
            this.MOD_QAM128 = 1003;
            this.MOD_QAM256 = 1004;
            this.MOD_QAM25 = 1005;
            this.MOD_AUTO = 1006;
            this.MOD_QPSK = 1007;
            this.MOD_8PSK = 1008;
            this.FEC_INNER_NOT_DEFINED = "FEC_INNER_NOT_DEFINED";
            this.FEC_1_2 = "FEC_1_2";
            this.FEC_2_3 = "FEC_2_3";
            this.FEC_3_4 = "FEC_3_4";
            this.FEC_5_6 = "FEC_5_6";
            this.FEC_7_8 = "FEC_7_8";
            this.FEC_8_9 = "FEC_8_9";
            this.FEC_3_5 = "FEC_3_5";
            this.FEC_4_5 = "FEC_4_5";
            this.FEC_9_10 = "FEC_9_10";
            this.FEC_NO_CONV_CODING = "FEC_NO_CONV_CODING";
            this.POL_HORIZONTAL = "POL_HORIZONTAL";
            this.POL_VERTICAL = "POL_VERTICAL";
            this.POL_CIRC_LEFT = "POL_CIRC_LEFT";
            this.POL_CIRC_RIGHT = "POL_CIRC_RIGHT";
            this.ROLLOFF_035 = "ROLLOFF_035";
            this.ROLLOFF_025 = "ROLLOFF_025";
            this.ROLLOFF_020 = "ROLLOFF_020";
            this.ROLLOFF_NA = "ROLLOFF_NA";
            this.SAT_DVB_S = "SAT_DVB_S";
            this.SAT_DVB_S2 = "SAT_DVB_S2";
        }
        return ZacFrontendConstants;
    }());
    var satelliteNames;
    (function (satelliteNames) {
        satelliteNames["astra19"] = "Astra 19,2\u00B0 Ost";
        satelliteNames["hotbird"] = "Hotbird 13\u00B0 Ost";
        satelliteNames["hispasat"] = "Hispasat 30\u00B0 West";
        satelliteNames["astra31"] = "Astra 31,5\u00B0 Ost";
    })(satelliteNames || (satelliteNames = {}));
    var ZacFrontend = (function () {
        function ZacFrontend() {
            this.eventManager = new public_1.EventManager();
            this.eventRegistration = {};
            this.satellitesConfig = [
                {
                    name: satelliteNames.astra19,
                    orbitalPosition: 192,
                    transponderResults: [
                        this.getTransponderTuneResult("430b0121100001928102750003"),
                        this.getTransponderTuneResult("430b012480000192a102750003"),
                        this.getTransponderTuneResult("430b0121100001928102750004"),
                        this.getTransponderTuneResult("430b012480000192a102750004")
                    ]
                },
                {
                    name: satelliteNames.hotbird,
                    orbitalPosition: 130,
                    transponderResults: [
                        this.getTransponderTuneResult("430b0109300001308603000002"),
                        this.getTransponderTuneResult("430b011919000130a102990004"),
                        this.getTransponderTuneResult("430b0109300001308603000005", false),
                        this.getTransponderTuneResult("430b011919000130a102990006", false)
                    ]
                },
                {
                    name: satelliteNames.hispasat,
                    orbitalPosition: -300,
                    transponderResults: [
                        this.getTransponderTuneResult("430b0107700003000603000004"),
                        this.getTransponderTuneResult("430b0118910003002103000004"),
                        this.getTransponderTuneResult("430b0107700003000603000005"),
                        this.getTransponderTuneResult("430b0118910003002103000006")
                    ]
                },
                {
                    name: satelliteNames.astra31,
                    orbitalPosition: 315,
                    transponderResults: [
                        this.getTransponderTuneResult("430b0118360003158603000007"),
                        this.getTransponderTuneResult("430b012012000315a603000003"),
                        this.getTransponderTuneResult("430b0118360003158603000008"),
                        this.getTransponderTuneResult("430b012012000315a603000009")
                    ]
                }
            ];
            this.state = this.getTuningEvent(0, 0, ZacFrontend_1.constants.TUNER_STATUS_NOT_LOCKED);
        }
        ZacFrontend_1 = ZacFrontend;
        ZacFrontend.prototype.getTransponderTuneResult = function (dsd, success) {
            if (success === void 0) { success = true; }
            return {
                dsd: dsd,
                strength: success ? this.randomizePercentValue() : undefined,
                quality: success ? this.randomizePercentValue() : undefined
            };
        };
        ZacFrontend.prototype.randomizePercentValue = function (minValue) {
            if (minValue === void 0) { minValue = 40; }
            return Math.floor(Math.random() * (100 - minValue + 1)) + minValue;
        };
        ZacFrontend.prototype.getSatellitePorts = function (satellite) {
            switch (satellite.name) {
                case satelliteNames.astra19: return ["0", "0/0", "1", "1/0"];
                case satelliteNames.hotbird: return ["0/1", "1/1"];
                case satelliteNames.hispasat: return ["0/2", "1/2"];
                case satelliteNames.astra31: return ["0/3", "1/3"];
            }
            return [];
        };
        ZacFrontend.prototype.getSatelliteUserBands = function (satellite) {
            switch (satellite.name) {
                case satelliteNames.astra19: return [{ slot: 5, frequency: 1800000 }];
                case satelliteNames.hotbird: return [{ slot: 5, frequency: 1800000 }];
                case satelliteNames.hispasat: return [{ slot: 5, frequency: 1800000 }];
                case satelliteNames.astra31: return [{ slot: 5, frequency: 1800000 }];
            }
            return [];
        };
        ZacFrontend.prototype.isUnicable = function () {
            var ports = zacoutdoor_1.ZacOutDoorUnitDb.S_ZACOUTDOORCONFIGURATION.GetPorts();
            var portTypes = ports.map(function (port) { return zacoutdoor_1.ZacOutDoorUnitDb.S_ZACOUTDOORCONFIGURATION.GetType(port); });
            return portTypes.some(function (portType) { return portType == zacoutdoor_1.ZacOutDoorUnitDb.S_ZACOUTDOORCONFIGURATION.ODU_UNICABLE; });
        };
        ZacFrontend.prototype.getTuningEvent = function (signalQualityPercent, signalStrengthPercent, lockStatus) {
            return {
                usage: 7,
                bitErrorRatePPB: 0,
                signalNoiseRatioDB: 0,
                signalQualityPercent: signalQualityPercent,
                signalStrengthDBm: 0,
                signalStrengthPercent: signalStrengthPercent,
                tuningParams: {},
                lockStatus: lockStatus,
                uncorrectedErrors: 0
            };
        };
        ZacFrontend.prototype.Tune = function (params) {
            var _this = this;
            setTimeout(function () {
                _this.state = _this.getTuningEvent(0, 0, ZacFrontend_1.constants.TUNER_STATUS_TUNING);
                _this.eventManager.broadcast("TuningEvent", _this.state);
            }, 200);
            setTimeout(function () {
                _this.state = _this.getMockedSignal(params.xxKEY_DELIVERY_SYSTEM_DESCRIPTOR);
                _this.eventManager.broadcast("TuningEvent", _this.state);
            }, 500);
            return 0;
        };
        ZacFrontend.prototype.Acquire = function (connector) {
            return 0;
        };
        ZacFrontend.prototype.GetConnectors = function () {
            return ["LNB1", "LNB2"];
        };
        ZacFrontend.prototype.Release = function () {
            return 0;
        };
        ZacFrontend.prototype.GetInfo = function () {
            return this.state;
        };
        ZacFrontend.prototype.SetSignalQualityThreshold = function (min, max) {
            throw new Error("Method not implemented.");
        };
        ZacFrontend.prototype.registerEventListener = function (evtName, evtHandlerFunction) {
            ZacFrontend_1.eventCounter++;
            this.eventRegistration[ZacFrontend_1.eventCounter] = this.eventManager.on(evtName, function (event) { evtHandlerFunction(event); return true; }, ZacFrontend_1.TAG);
            return ZacFrontend_1.eventCounter;
        };
        ZacFrontend.prototype.unregisterEventListener = function (evtName, id) {
            this.eventRegistration[id]();
            delete this.eventRegistration[id];
        };
        ZacFrontend.prototype.getMockedSignal = function (dsd) {
            var _a, _b;
            var strength = 0;
            var quality = 0;
            var satelliteConfig = this.satellitesConfig.filter(function (satelliteConfig) { var _a; return (_a = satelliteConfig.transponderResults) === null || _a === void 0 ? void 0 : _a.some(function (result) { return result.dsd == dsd; }); })[0];
            if (satelliteConfig) {
                if (this.isUnicable()) {
                    var satellitesUnicableConfig = __assign(__assign({}, satelliteConfig), { userBands: this.getSatelliteUserBands(satelliteConfig) });
                    var outdoorUnitUserbands = this.getSatelliteOutdoorUnitUserbands(satellitesUnicableConfig);
                    if (outdoorUnitUserbands.length > 0) {
                        var transponderTuneResult = (_a = satelliteConfig.transponderResults) === null || _a === void 0 ? void 0 : _a.filter(function (result) { return result.dsd == dsd; })[0];
                        quality = (transponderTuneResult === null || transponderTuneResult === void 0 ? void 0 : transponderTuneResult.quality) || 0;
                        strength = (transponderTuneResult === null || transponderTuneResult === void 0 ? void 0 : transponderTuneResult.strength) || 0;
                    }
                }
                else {
                    var satellitesLegacyConfig = __assign(__assign({}, satelliteConfig), { outdoorUnitPorts: this.getSatellitePorts(satelliteConfig) });
                    var outdoorUnitPorts = this.getSatelliteOutdoorUnitPorts(satellitesLegacyConfig);
                    var matchingPorts = this.getMatchingElements(outdoorUnitPorts, satellitesLegacyConfig.outdoorUnitPorts);
                    if (matchingPorts.length > 0) {
                        var transponderTuneResult = (_b = satelliteConfig.transponderResults) === null || _b === void 0 ? void 0 : _b.filter(function (result) { return result.dsd == dsd; })[0];
                        quality = (transponderTuneResult === null || transponderTuneResult === void 0 ? void 0 : transponderTuneResult.quality) || 0;
                        strength = (transponderTuneResult === null || transponderTuneResult === void 0 ? void 0 : transponderTuneResult.strength) || 0;
                    }
                }
            }
            return this.getTuningEvent(quality, strength, ZacFrontend_1.constants.TUNER_STATUS_LOCKED);
        };
        ZacFrontend.prototype.getMatchingElements = function (array1, array2, compareFunc) {
            var sameElements = [];
            array1.forEach(function (array1item) {
                array2.forEach(function (array2item) {
                    if (compareFunc ? compareFunc(array1item, array2item) : array1item == array2item) {
                        sameElements.push(array1item);
                    }
                });
            });
            return sameElements;
        };
        ZacFrontend.prototype.getSatelliteOutdoorUnitUserbands = function (satelliteConfig) {
            var ports = zacoutdoor_1.ZacOutDoorUnitDb.S_ZACOUTDOORCONFIGURATION.GetPorts();
            var portInfo = zacoutdoor_1.ZacOutDoorUnitDb.S_ZACOUTDOORCONFIGURATION.GetPortInfo(ports[0]);
            var matchingUserbands = this.getMatchingElements(portInfo.userbands || [], satelliteConfig.userBands, function (el1, el2) { return el1.frequency == el2.frequency && el1.slot == el2.slot; });
            return matchingUserbands;
        };
        ZacFrontend.prototype.getSatelliteOutdoorUnitPorts = function (satelliteConfig) {
            var outdoorUnitPorts = [];
            var ports = zacoutdoor_1.ZacOutDoorUnitDb.S_ZACOUTDOORCONFIGURATION.GetPorts();
            var lnbPorts = ports.filter(function (port) { return zacoutdoor_1.ZacOutDoorUnitDb.S_ZACOUTDOORCONFIGURATION.GetType(port) == zacoutdoor_1.ZacOutDoorUnitDb.S_ZACOUTDOORCONFIGURATION.ODU_LNB; });
            lnbPorts.forEach(function (lnbPort) {
                var portInfo = zacoutdoor_1.ZacOutDoorUnitDb.S_ZACOUTDOORCONFIGURATION.GetPortInfo(lnbPort);
                if (portInfo.orbitalPos == satelliteConfig.orbitalPosition) {
                    outdoorUnitPorts.push(lnbPort);
                }
            });
            return outdoorUnitPorts;
        };
        var ZacFrontend_1;
        ZacFrontend.eventCounter = 0;
        ZacFrontend.constants = new ZacFrontendConstants();
        ZacFrontend = ZacFrontend_1 = __decorate([
            public_1.logTag()
        ], ZacFrontend);
        return ZacFrontend;
    }());
    exports.ZacFrontend = ZacFrontend;
    var ZacFrontendManager = (function () {
        function ZacFrontendManager() {
            this.Constants = new ZacFrontendConstants();
            this.frontends = [new ZacFrontend(), new ZacFrontend(), new ZacFrontend(), new ZacFrontend()];
            this.numberOfFrontends = 4;
        }
        ZacFrontendManager.prototype.GetFrontend = function (index) {
            return this.frontends[index];
        };
        ZacFrontendManager.prototype.GetConnectors = function () {
            return [{
                    name: "LNB1",
                    odudbId: "0"
                },
                {
                    name: "LNB2",
                    odudbId: "1"
                }];
        };
        return ZacFrontendManager;
    }());
    exports.ZacFrontendManager = ZacFrontendManager;
});
//# sourceMappingURL=zacfrontend.js.map