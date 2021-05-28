var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "../backend/public", "src/src-de-telekom/public", "./applicationclient.outdoor", "./applicationclient.devicemanagement"], function (require, exports, bluebird, backend, public_1, applicationclient_outdoor_1, applicationclient_devicemanagement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FrontendManager = void 0;
    var FrontendManager = (function () {
        function FrontendManager() {
        }
        FrontendManager_1 = FrontendManager;
        FrontendManager.getFrontend = function (index) {
            var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
            return zac.object.GetFrontend(index);
        };
        FrontendManager.getConnectors = function () {
            var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
            return zac.object.GetConnectors();
        };
        FrontendManager.getAvailableFrontends = function () {
            return bluebird.resolve().then(function () {
                var frontends = [];
                for (var i = 0; i < FrontendManager_1.numberOfFrontends; i++) {
                    frontends.push(FrontendManager_1.getFrontend(i));
                }
                return frontends;
            });
        };
        FrontendManager.satRecordingsOngoing = function () {
            var _this = this;
            if (!applicationclient_devicemanagement_1.DeviceManagement.isSatStbOnSatAccount()) {
                return bluebird.resolve(false);
            }
            return FrontendManager_1.getAvailableFrontends()
                .then(function (frontends) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Frontends count " + frontends.length, FrontendManager_1.TAG)); });
                var tunerUsageRecordingCount = 0;
                frontends.forEach(function (frontend, index) {
                    var info = frontend.GetInfo();
                    if (info && info.usage == FrontendManager_1.FRONTEND_USAGE_RECORDING)
                        tunerUsageRecordingCount++;
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Frontend " + index + " usage: " + (info ? _this.GetUsageAsString(info.usage) : "n.a."), FrontendManager_1.TAG)); });
                });
                return tunerUsageRecordingCount > 0;
            });
        };
        FrontendManager.getFrontendForUsage = function (usage) {
            var numberOfFrontends = FrontendManager_1.numberOfFrontends;
            for (var i = 0; i < numberOfFrontends; i++) {
                var frontendInfo = FrontendManager_1.getFrontend(i).GetInfo();
                if (frontendInfo && (frontendInfo.usage & usage)) {
                    return frontendInfo;
                }
            }
            return undefined;
        };
        FrontendManager.getFrontendMainPlayer = function () {
            return FrontendManager_1.getFrontendForUsage(FrontendManager_1.FRONTEND_USAGE_MAIN_PLAYER);
        };
        FrontendManager.getMainPlayerTuningParams = function () {
            var mainPlayerFrontend = FrontendManager_1.getFrontendForUsage(FrontendManager_1.FRONTEND_USAGE_MAIN_PLAYER);
            return mainPlayerFrontend ? FrontendManager_1.getTuningParams(mainPlayerFrontend) : undefined;
        };
        FrontendManager.getTuningParams = function (frontend) {
            return {
                freqKhz: frontend.tuningParams[FrontendManager_1.getFrontendConstants().KEY_FREQ_KHZ],
                modulation: frontend.tuningParams[FrontendManager_1.getFrontendConstants().KEY_MODULATION],
                symbolRateKBaud: frontend.tuningParams[FrontendManager_1.getFrontendConstants().KEY_SYMBOL_RATE_KBAUD],
                orbitalPosition: frontend.tuningParams[FrontendManager_1.getFrontendConstants().KEY_ORBITAL_POSITION],
                polarization: frontend.tuningParams[FrontendManager_1.getFrontendConstants().KEY_POLARIZATION],
                fecInner: frontend.tuningParams[FrontendManager_1.getFrontendConstants().KEY_FEC_INNER],
                satName: frontend.tuningParams[FrontendManager_1.getFrontendConstants().KEY_SAT_NAME],
                deliverySystemDescriptor: frontend.tuningParams[FrontendManager_1.getFrontendConstants().KEY_DELIVERY_SYSTEM_DESCRIPTOR],
                rolloff: frontend.tuningParams[FrontendManager_1.getFrontendConstants().KEY_ROLLOFF],
                satSystem: frontend.tuningParams[FrontendManager_1.getFrontendConstants().KEY_SAT_SYSTEM],
                frontendConnector: frontend.tuningParams[FrontendManager_1.getFrontendConstants().KEY_FRONTEND_CONNECTOR],
                userbandSlot: frontend.tuningParams[FrontendManager_1.getFrontendConstants().KEY_USERBAND_SLOT]
            };
        };
        FrontendManager.getFrontendRecording = function () {
            return FrontendManager_1.getFrontendForUsage(FrontendManager_1.FRONTEND_USAGE_RECORDING);
        };
        Object.defineProperty(FrontendManager, "numberOfFrontends", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.numberOfFrontends;
            },
            enumerable: false,
            configurable: true
        });
        FrontendManager.setQualityThresholdForAllFrontends = function (minValue, maxValue) {
            var numberOfFrontends = FrontendManager_1.numberOfFrontends;
            for (var i = 0; i < numberOfFrontends; i++) {
                var frontend = FrontendManager_1.getFrontend(i);
                frontend.SetSignalQualityThreshold(minValue, maxValue);
            }
        };
        FrontendManager.GetLockstatusAsString = function (lockStatus) {
            var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
            var fc = zac.object.Constants;
            if (lockStatus == fc.TUNER_STATUS_LOCKED)
                return "locked";
            if (lockStatus == fc.TUNER_STATUS_NOT_LOCKED)
                return "not locked";
            if (lockStatus == fc.TUNER_STATUS_TUNING)
                return "tuning";
            return "unknown";
        };
        FrontendManager.GetUsageAsString = function (usage) {
            var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
            var fc = zac.object.Constants;
            if (usage == fc.FRONTEND_USAGE_MAIN_PLAYER)
                return "MAIN PLAYER";
            if (usage == fc.FRONTEND_USAGE_OTHER_PLAYER)
                return "OTHER PLAYER";
            if (usage == fc.FRONTEND_USAGE_RECORDING)
                return "RECORDING";
            if (usage == fc.FRONTEND_USAGE_UNDEFINED)
                return "UNDFINED";
            return "unknown";
        };
        Object.defineProperty(FrontendManager, "TUNER_STATUS_LOCKED", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.TUNER_STATUS_LOCKED;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "TUNER_STATUS_NOT_LOCKED", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.TUNER_STATUS_NOT_LOCKED;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "TUNER_STATUS_TUNING", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.TUNER_STATUS_TUNING;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "FRONTEND_USAGE_RECORDING", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.FRONTEND_USAGE_RECORDING;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "FRONTEND_USAGE_MAIN_PLAYER", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.FRONTEND_USAGE_MAIN_PLAYER;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "FRONTEND_USAGE_OTHER_PLAYER", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.FRONTEND_USAGE_OTHER_PLAYER;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "FRONTEND_USAGE_UNDEFINED", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.FRONTEND_USAGE_UNDEFINED;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "KEY_TUNING_TYPE", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.KEY_TUNING_TYPE;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "KEY_DELIVERY_SYSTEM_DESCRIPTOR", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.KEY_DELIVERY_SYSTEM_DESCRIPTOR;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "KEY_FRONTEND_CONNECTOR", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.KEY_FRONTEND_CONNECTOR;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "TUNING_TYPE_DSD", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.TUNING_TYPE_DSD;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "TUNING_TYPE_CABLE", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.TUNING_TYPE_CABLE;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "TUNING_TYPE_TERRESTRIAL", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.TUNING_TYPE_TERRESTRIAL;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "TUNING_TYPE_SATELLITE", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.TUNING_TYPE_SATELLITE;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "KEY_FREQ_KHZ", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.KEY_FREQ_KHZ;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "KEY_SYMBOL_RATE_KBAUD", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.KEY_SYMBOL_RATE_KBAUD;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "KEY_MODULATION", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.KEY_MODULATION;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrontendManager, "MOD_QAM64", {
            get: function () {
                var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
                return zac.object.Constants.MOD_QAM32;
            },
            enumerable: false,
            configurable: true
        });
        FrontendManager.getFrontendConstants = function () {
            var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
            return zac.object.Constants;
        };
        FrontendManager.getUsageTypeInfo = function (usage) {
            return FrontendManager_1.getTypeInfo(FrontendManager_1.getFrontendConstants(), [
                "FRONTEND_USAGE_MAIN_PLAYER",
                "FRONTEND_USAGE_OTHER_PLAYER",
                "FRONTEND_USAGE_RECORDING",
                "FRONTEND_USAGE_UNDEFINED"
            ], usage);
        };
        FrontendManager.getLockStatusTypeInfo = function (lockStatus) {
            return FrontendManager_1.getTypeInfo(FrontendManager_1.getFrontendConstants(), [
                "TUNER_STATUS_LOCKED",
                "TUNER_STATUS_NOT_LOCKED",
                "TUNER_STATUS_TUNING"
            ], lockStatus);
        };
        FrontendManager.getTypeInfo = function (obj, fields, value) {
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                if (obj[field] === value) {
                    return value + " [" + field + "]";
                }
            }
            return value + " [unknown]";
        };
        FrontendManager.releaseAllFrontends = function () {
            var _this = this;
            var zac = backend.ServiceClientZac.getFrontendManager(backend.ServiceClientContextZac.instance);
            return this.getAvailableFrontends()
                .then(function (frontends) {
                if (!frontends)
                    return;
                frontends.forEach(function (f, i) {
                    var rel = f.Release();
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Release Frontend " + i + " returned:  " + rel, FrontendManager_1.TAG)); });
                    var status = f.GetInfo();
                    if (status) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Frontend " + i + " status:  " + _this.GetLockstatusAsString(status.lockStatus), FrontendManager_1.TAG)); });
                        if (status.lockStatus === zac.object.Constants.TUNER_STATUS_LOCKED) {
                            public_1.Logger.debug(function (log) {
                                log(public_1.LogMsg("Tuner is locked", FrontendManager_1.TAG));
                                log(public_1.LogMsg("----------------------------------------------", FrontendManager_1.TAG));
                                log(public_1.LogMsg("signalQuality " + status.signalQualityPercent + "%", FrontendManager_1.TAG));
                                log(public_1.LogMsg("signalStrength " + status.signalStrengthDBm + "dbm", FrontendManager_1.TAG));
                                log(public_1.LogMsg("signalStrength " + status.signalStrengthPercent + "%", FrontendManager_1.TAG));
                                log(public_1.LogMsg("SNR " + status.signalNoiseRatioDB + "db", FrontendManager_1.TAG));
                                log(public_1.LogMsg("BER " + status.bitErrorRatePPB + " PPB", FrontendManager_1.TAG));
                                log(public_1.LogMsg("usage " + _this.GetUsageAsString(status.usage), FrontendManager_1.TAG));
                                log(public_1.LogMsg("tuningParams " + JSON.stringify(status.tuningParams), FrontendManager_1.TAG));
                                log(public_1.LogMsg("----------------------------------------------", FrontendManager_1.TAG));
                            });
                        }
                    }
                });
            });
        };
        FrontendManager.getConfiguredSatellites = function () {
            return bluebird.all([
                applicationclient_outdoor_1.OutdoorUnitDb.getSatellites(),
                applicationclient_outdoor_1.OutdoorUnitDb.getSatelliteConfig()
            ])
                .then(function (_a) {
                var satellites = _a[0], configuredSatellites = _a[1];
                var configuredSatelliteIds = configuredSatellites.data.map(function (configuredSatellite) { return configuredSatellite.satelliteId; });
                return satellites.data.filter(function (satellite) { return configuredSatelliteIds.indexOf(satellite.satelliteId) >= 0; });
            })
                .then(function (satellites) { return satellites.length > 4 ? satellites.slice(0, 3) : satellites; });
        };
        var FrontendManager_1;
        __decorate([
            public_1.log2(function () { return ({ name: FrontendManager_1.TAG }); })
        ], FrontendManager, "getConnectors", null);
        __decorate([
            public_1.log2(function () { return ({ name: FrontendManager_1.TAG }); })
        ], FrontendManager, "getAvailableFrontends", null);
        __decorate([
            public_1.log2(function () { return ({ name: FrontendManager_1.TAG }); })
        ], FrontendManager, "satRecordingsOngoing", null);
        __decorate([
            public_1.log2(function () { return ({ name: FrontendManager_1.TAG }); })
        ], FrontendManager, "getConfiguredSatellites", null);
        FrontendManager = FrontendManager_1 = __decorate([
            public_1.logTag()
        ], FrontendManager);
        return FrontendManager;
    }());
    exports.FrontendManager = FrontendManager;
});
//# sourceMappingURL=applicationclient.frontendmanager.js.map