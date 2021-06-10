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
define(["require", "exports", "../backend/public", "bluebird", "src/src-de-telekom/public"], function (require, exports, backend, bluebird, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OutdoorUnitDb = exports.SatCableLength = void 0;
    var MIN_SLOT = 0;
    var MAX_SLOT = 7;
    var SatCableLength;
    (function (SatCableLength) {
        SatCableLength[SatCableLength["Short"] = 0] = "Short";
        SatCableLength[SatCableLength["Long"] = 1] = "Long";
    })(SatCableLength = exports.SatCableLength || (exports.SatCableLength = {}));
    var OutdoorUnitDbError = (function (_super) {
        __extends(OutdoorUnitDbError, _super);
        function OutdoorUnitDbError(message, errorCode) {
            var _this = _super.call(this, message) || this;
            _this.message = message;
            _this.errorCode = errorCode;
            _this.errorID = 0x61B;
            return _this;
        }
        OutdoorUnitDbError.prototype.getAdditionalErrorCode = function () {
            return this.errorCode !== undefined ? "" + this.errorCode : undefined;
        };
        return OutdoorUnitDbError;
    }(public_1.BaseError));
    var OutdoorUnitDb = (function () {
        function OutdoorUnitDb() {
        }
        OutdoorUnitDb_1 = OutdoorUnitDb;
        OutdoorUnitDb.getSatellites = function () {
            return backend.ServiceClientAuthenticationZosa.getSatellites(backend.ServiceClientContextZosa.instance);
        };
        OutdoorUnitDb.getReferenceTransponders = function (satellites) {
            return bluebird.try(function () { return satellites.map(function (satellite) { return ({
                satellite: satellite,
                referenceTransponders: satellite.referenceTransponders ? satellite.referenceTransponders : []
            }); }); });
        };
        OutdoorUnitDb.getReferenceTranspondersForSatelliteId = function (satellites, index, result) {
            return backend.ServiceClientAuthenticationZosa.getReferenceTransponders(backend.ServiceClientContextZosa.instance, satellites[index].satelliteId)
                .then(function (transpondersResponse) {
                result.push({
                    satellite: satellites[index],
                    referenceTransponders: transpondersResponse.data
                });
                return index < satellites.length - 1 ? OutdoorUnitDb_1.getReferenceTranspondersForSatelliteId(satellites, index + 1, result) : bluebird.resolve(result);
            });
        };
        OutdoorUnitDb.getOutdoorUnitDbSatellites = function () {
            var zac = backend.ServiceClientZac.getOutdoorUnitDb(backend.ServiceClientContextZac.instance);
            return bluebird.try(function () {
                return zac.object.GetSatellites();
            });
        };
        OutdoorUnitDb.getSatelliteConfig = function () {
            var zosa = backend.ServiceClientContextZosa.instance.serviceClientZosa;
            var config = zosa.getSatelliteConfig(backend.ServiceClientContextZosa.instance);
            return config;
        };
        OutdoorUnitDb.saveConfiguration = function (parameters) {
            if (parameters == undefined) {
                throw new OutdoorUnitDbError("satellite array is undefined, provide empty array", 0xA);
            }
            return backend.ServiceClientContextZosa.instance.serviceClientZosa
                .setSatelliteConfig(backend.ServiceClientContextZosa.instance, parameters.filter(public_1.Guard.isDefined))
                .then(function () {
                var zac = backend.ServiceClientZac.getOutdoorUnitDb(backend.ServiceClientContextZac.instance);
                return backend.ServiceClientZac.evaluateZacResponse(function () { return zac.object.WriteToStorage(); });
            });
        };
        OutdoorUnitDb.saveOutdoorUnitConfiguration = function () {
            var zac = backend.ServiceClientZac.getOutdoorUnitDb(backend.ServiceClientContextZac.instance);
            return backend.ServiceClientZac.evaluateZacResponse(function () { return zac.object.WriteToStorage(); });
        };
        OutdoorUnitDb.restoreConfiguration = function () {
            var zac = backend.ServiceClientZac.getOutdoorUnitDb(backend.ServiceClientContextZac.instance);
            return backend.ServiceClientZac.evaluateZacResponse(function () { return zac.object.ReadFromStorage(); });
        };
        OutdoorUnitDb.getPortsInfo = function () {
            return bluebird.try(function () {
                var configs = [];
                var zac = backend.ServiceClientZac.getOutdoorUnitDb(backend.ServiceClientContextZac.instance);
                var cfg = zac.object.GetConfiguration(true);
                var portConfigurations = cfg.GetPorts();
                portConfigurations.forEach(function (port) {
                    var portType = cfg.GetType(port);
                    if (portType != cfg.ODU_DISABLED &&
                        portType != cfg.ODU_DISEQC_4 &&
                        portType != cfg.ODU_DISEQC_2) {
                        configs.push(cfg.GetPortInfo(port));
                    }
                });
                return configs;
            });
        };
        OutdoorUnitDb.getEnabledMainPorts = function () {
            return bluebird.resolve().then(function () {
                var zac = backend.ServiceClientZac.getOutdoorUnitDb(backend.ServiceClientContextZac.instance);
                var cfg = zac.object.GetConfiguration(true);
                var portConfigurations = cfg.GetPorts()
                    .map(function (port, index) {
                    var portType = cfg.GetType(port);
                    var portNumbers = port.split("/");
                    var portConfiguration = {
                        name: port,
                        type: portType,
                        info: undefined,
                        enabled: portType != cfg.ODU_DISABLED,
                        isSubPort: portNumbers.length > 1,
                        mainPort: Number(portNumbers[0]),
                        subPort: portNumbers.length > 1 ? Number(portNumbers[1]) : undefined
                    };
                    try {
                        if (portType != cfg.ODU_DISABLED &&
                            portType != cfg.ODU_DISEQC_4 &&
                            portType != cfg.ODU_DISEQC_2) {
                            portConfiguration.info = cfg.GetPortInfo(port);
                        }
                    }
                    catch (error) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Error getting portInfo of port " + port + ": " + error, OutdoorUnitDb_1.TAG)); });
                    }
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg(index + ":" + JSON.stringify(portConfiguration), OutdoorUnitDb_1.TAG)); });
                    return portConfiguration;
                });
                var enabledMainPorts = portConfigurations.filter(function (port) { return !port.isSubPort && port.enabled; });
                var subPorts = portConfigurations.filter(function (port) { return port.isSubPort; });
                enabledMainPorts.forEach(function (mainPort) {
                    return mainPort.subPorts = subPorts.filter(function (subPort) { return subPort.mainPort == mainPort.mainPort; });
                });
                return enabledMainPorts;
            });
        };
        OutdoorUnitDb.getConfiguration = function () {
            return OutdoorUnitDb_1.getEnabledMainPorts()
                .then(function (enabledMainPorts) {
                var _a, _b;
                var zac = backend.ServiceClientZac.getOutdoorUnitDb(backend.ServiceClientContextZac.instance);
                var cfg = zac.object.GetConfiguration(true);
                var satellites = [undefined, undefined, undefined, undefined];
                if (enabledMainPorts.some(function (port) { return port.type == cfg.ODU_UNICABLE; })) {
                    var userbands = [undefined, undefined];
                    var satellites_1 = [undefined, undefined];
                    var unicablePort = enabledMainPorts.filter(function (port) { return port.type == cfg.ODU_UNICABLE; })[0];
                    if (unicablePort.info) {
                        if (unicablePort.info.satellites && unicablePort.info.satellites.length > 0) {
                            satellites_1[0] = (_a = unicablePort.info.satellites[0]) === null || _a === void 0 ? void 0 : _a.orbitalPos;
                            if (unicablePort.info.satellites.length > 1) {
                                satellites_1[1] = (_b = unicablePort.info.satellites[1]) === null || _b === void 0 ? void 0 : _b.orbitalPos;
                            }
                        }
                        if (unicablePort.info.userbands && unicablePort.info.userbands.length > 0) {
                            userbands[0] = unicablePort.info.userbands[0] && { slot: unicablePort.info.userbands[0].slot, frequency: unicablePort.info.userbands[0].frequency / 1000 };
                            if (unicablePort.info.userbands.length > 1) {
                                userbands[1] = unicablePort.info.userbands[1] && { slot: unicablePort.info.userbands[1].slot, frequency: unicablePort.info.userbands[1].frequency / 1000 };
                            }
                        }
                    }
                    var unicableConfig = {
                        switch: "unicable",
                        satellites: satellites_1,
                        userbands: userbands,
                        portNames: [unicablePort.name]
                    };
                    return unicableConfig;
                }
                var cable = enabledMainPorts.length > 1 ? 2 : 1;
                if (enabledMainPorts.some(function (port) { return port.type == cfg.ODU_LNB; })) {
                    var portConfiguration = enabledMainPorts.filter(function (port) { return port.type == cfg.ODU_LNB; })[0];
                    satellites[0] = public_1.Guard.isDefined(portConfiguration.info) ? portConfiguration.info.orbitalPos : undefined;
                    var diseqConfig = {
                        cableCount: cable,
                        satellites: satellites,
                        switch: "none",
                        portNames: [portConfiguration.name]
                    };
                    return diseqConfig;
                }
                else {
                    enabledMainPorts.forEach(function (mainPort) {
                        (mainPort.subPorts || []).forEach(function (sPort) {
                            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Mapping subport " + sPort.name + ": Satellite " + sPort.subPort + " orbitalPos = " + (public_1.Guard.isDefined(sPort.info) ? sPort.info.orbitalPos : "undefined"), OutdoorUnitDb_1.TAG)); });
                            if (sPort.subPort != undefined)
                                satellites[sPort.subPort] = public_1.Guard.isDefined(sPort.info) ? sPort.info.orbitalPos : undefined;
                        });
                    });
                    var diseqConfig = {
                        cableCount: cable,
                        satellites: satellites,
                        switch: "multi",
                        portNames: enabledMainPorts.map(function (port) { return port.name; })
                    };
                    return diseqConfig;
                }
            });
        };
        OutdoorUnitDb.commitUnicableOutdoorConfiguration = function (userbands, satPositions) {
            var satellitePositions = [satPositions[0], satPositions[1]];
            return bluebird.try(function () {
                var zac = backend.ServiceClientZac.getOutdoorUnitDb(backend.ServiceClientContextZac.instance);
                var cfg = zac.object.GetConfiguration(false);
                if (satellitePositions.every(function (satellitePosition) { return satellitePosition == undefined; })) {
                    OutdoorUnitDb_1.setPortParameters(cfg, { port: 0, portType: cfg.ODU_DISABLED });
                    OutdoorUnitDb_1.setPortParameters(cfg, { port: 1, portType: cfg.ODU_DISABLED });
                }
                else {
                    var satellites = satellitePositions.map(function (satellitePosition) { return ({ orbitalPos: satellitePosition || 0, lnbType: "Universal" }); });
                    satellites.forEach(function (satellite) { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("satellite POS:" + satellite.orbitalPos + " LNB:" + satellite.lnbType, OutdoorUnitDb_1.TAG)); }); });
                    if (satellites.length > 2) {
                        throw new OutdoorUnitDbError("max 2 satellites are supported for unicable", 0x9);
                    }
                    var zacUserbands = userbands.filter(public_1.Guard.isDefined).map(function (userBand) {
                        if (userBand.slot == undefined) {
                            throw new OutdoorUnitDbError("slot not defined", 0x2);
                        }
                        else if (userBand.slot < MIN_SLOT) {
                            throw new OutdoorUnitDbError("slot smaller than 0", 0x3);
                        }
                        else if (userBand.slot > MAX_SLOT) {
                            throw new OutdoorUnitDbError("slot smaller than 0", 0x4);
                        }
                        if (userBand.frequency == undefined) {
                            throw new OutdoorUnitDbError("missing frequencey", 0x5);
                        }
                        else if (userBand.frequency < 950) {
                            throw new OutdoorUnitDbError("frequencey smaller than 950 MHz", 0x6);
                        }
                        else if (userBand.frequency > 2150) {
                            throw new OutdoorUnitDbError("frequencey higher than 2150 MHz", 0x7);
                        }
                        return { frequency: userBand.frequency * 1000, slot: userBand.slot };
                    });
                    if (userbands.length > 2) {
                        throw new OutdoorUnitDbError("max 2 userbands are allowed", 0x8);
                    }
                    OutdoorUnitDb_1.setPortParameters(cfg, { port: 0, portType: cfg.ODU_UNICABLE }, { userbands: zacUserbands, satellites: satellites, DCOffset: OutdoorUnitDb_1.DCOffsetDefaultValue });
                    OutdoorUnitDb_1.setPortParameters(cfg, { port: 1, portType: cfg.ODU_DISABLED });
                }
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Commit configuration ...", OutdoorUnitDb_1.TAG)); });
                return backend.ServiceClientZac.evaluateZacResponse(function () { return zac.object.Commit(cfg); });
            });
        };
        OutdoorUnitDb.getSatellitePortInfo = function (satellitePosition) {
            return {
                orbitalPos: satellitePosition || 0,
                lnbType: "Universal",
                DCOffset: OutdoorUnitDb_1.DCOffsetDefaultValue
            };
        };
        OutdoorUnitDb.commitLegacyOutdoorConfiguration = function (cableCount, satPositions, targetPort) {
            if (targetPort === void 0) { targetPort = 0; }
            return bluebird.try(function () {
                var zac = backend.ServiceClientZac.getOutdoorUnitDb(backend.ServiceClientContextZac.instance);
                var cfg = zac.object.GetConfiguration(false);
                if (satPositions.every(function (satellitePosition) { return satellitePosition == undefined; })) {
                    OutdoorUnitDb_1.setPortParameters(cfg, { port: 0, portType: cfg.ODU_DISABLED });
                    OutdoorUnitDb_1.setPortParameters(cfg, { port: 1, portType: cfg.ODU_DISABLED });
                }
                else if (satPositions.length === 1) {
                    if (cableCount == 2) {
                        OutdoorUnitDb_1.setPortParameters(cfg, { port: 0, portType: cfg.ODU_LNB }, OutdoorUnitDb_1.getSatellitePortInfo(satPositions[0]));
                        OutdoorUnitDb_1.setPortParameters(cfg, { port: 1, portType: cfg.ODU_LNB }, OutdoorUnitDb_1.getSatellitePortInfo(satPositions[0]));
                    }
                    else if (targetPort == 1) {
                        OutdoorUnitDb_1.setPortParameters(cfg, { port: 0, portType: cfg.ODU_DISABLED });
                        OutdoorUnitDb_1.setPortParameters(cfg, { port: 1, portType: cfg.ODU_LNB }, OutdoorUnitDb_1.getSatellitePortInfo(satPositions[0]));
                    }
                    else {
                        OutdoorUnitDb_1.setPortParameters(cfg, { port: 0, portType: cfg.ODU_LNB }, OutdoorUnitDb_1.getSatellitePortInfo(satPositions[0]));
                        OutdoorUnitDb_1.setPortParameters(cfg, { port: 1, portType: cfg.ODU_DISABLED });
                    }
                }
                else {
                    var satellitePositions = [satPositions[0], satPositions[1], satPositions[2], satPositions[3]];
                    if (cableCount == 2) {
                        OutdoorUnitDb_1.setDiseqcConfig(cfg, 0, satellitePositions);
                        OutdoorUnitDb_1.setDiseqcConfig(cfg, 1, satellitePositions);
                    }
                    else if (targetPort == 1) {
                        OutdoorUnitDb_1.setPortParameters(cfg, { port: 0, portType: cfg.ODU_DISABLED });
                        OutdoorUnitDb_1.setDiseqcConfig(cfg, 1, satellitePositions);
                    }
                    else {
                        OutdoorUnitDb_1.setDiseqcConfig(cfg, 0, satellitePositions);
                        OutdoorUnitDb_1.setPortParameters(cfg, { port: 1, portType: cfg.ODU_DISABLED });
                    }
                }
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Commit configuration ...", OutdoorUnitDb_1.TAG)); });
                return backend.ServiceClientZac.evaluateZacResponse(function () { return zac.object.Commit(cfg); });
            });
        };
        OutdoorUnitDb.setDiseqcConfig = function (cfg, port, satellitePositions) {
            OutdoorUnitDb_1.setPortParameters(cfg, { port: port, portType: cfg.ODU_DISEQC_4 });
            satellitePositions.forEach(function (satellitePosition, index) {
                if (satellitePosition) {
                    OutdoorUnitDb_1.setPortParameters(cfg, { port: port, subPort: index, portType: cfg.ODU_LNB }, OutdoorUnitDb_1.getSatellitePortInfo(satellitePosition));
                }
                else {
                    OutdoorUnitDb_1.setPortParameters(cfg, { port: port, subPort: index, portType: cfg.ODU_DISABLED });
                }
            });
        };
        OutdoorUnitDb.setPortParameters = function (config, portDef, portInfo) {
            var portId = public_1.Guard.isNumber(portDef.subPort) ? portDef.port + "/" + portDef.subPort : "" + portDef.port;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("SetType port " + portId + " to " + portDef.portType, OutdoorUnitDb_1.TAG)); });
            backend.ServiceClientZac.evaluateZacResponseSync(function () { return config.SetType(portId, portDef.portType); });
            if (public_1.Guard.isDefined(portInfo)) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("SetPortInfo port " + portId + " to " + JSON.stringify(portInfo), OutdoorUnitDb_1.TAG)); });
                backend.ServiceClientZac.evaluateZacResponseSync(function () { return config.SetPortInfo(portId, portInfo); });
            }
        };
        OutdoorUnitDb.setSatCableLength = function (satCableLength) {
            var zac = backend.ServiceClientZac.getOutdoorUnitDb(backend.ServiceClientContextZac.instance);
            var satConfig = zac.object.GetConfiguration(true);
            return OutdoorUnitDb_1
                .getLnbPortInfos(satConfig)
                .then(function (portInfos) {
                portInfos.forEach(function (portInfo) {
                    if (!portInfo.info) {
                        throw new OutdoorUnitDbError("slot smaller than 0", 0xB);
                    }
                    portInfo.info.DCOffset = satCableLength == SatCableLength.Long;
                    var info = portInfo.info;
                    backend.ServiceClientZac.evaluateZacResponseSync(function () { return satConfig.SetPortInfo(portInfo.name, info); });
                });
                return backend.ServiceClientZac.evaluateZacResponse(function () { return zac.object.Commit(satConfig); });
            })
                .then(function () {
                return backend.ServiceClientZac.evaluateZacResponse(function () { return zac.object.WriteToStorage(); });
            });
        };
        OutdoorUnitDb.getSatCableLength = function () {
            var zac = backend.ServiceClientZac.getOutdoorUnitDb(backend.ServiceClientContextZac.instance);
            var cfg = zac.object.GetConfiguration(true);
            return OutdoorUnitDb_1
                .getLnbPortInfos(cfg)
                .then(function (portInfos) { return portInfos.some(function (port) { var _a; return ((_a = port.info) === null || _a === void 0 ? void 0 : _a.DCOffset) != undefined && port.info.DCOffset == true ? true : false; }) ? SatCableLength.Long : SatCableLength.Short; });
        };
        OutdoorUnitDb.getLnbPortInfos = function (satConfig) {
            return bluebird.resolve(satConfig
                .GetPorts()
                .filter(function (port) { return satConfig.GetType(port) == satConfig.ODU_LNB; })
                .map(function (port) {
                var portType = satConfig.GetType(port);
                var retValue = {
                    name: port,
                    type: portType,
                    typeDesc: OutdoorUnitDb_1.getPortTypeInfo(satConfig, portType),
                    info: satConfig.GetPortInfo(port)
                };
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg(JSON.stringify(retValue), OutdoorUnitDb_1.TAG)); });
                return retValue;
            }));
        };
        OutdoorUnitDb.getPortTypeInfo = function (config, portType) {
            switch (portType) {
                case config.ODU_DISABLED: return "ODU_DISABLED";
                case config.ODU_LNB: return "ODU_LNB";
                case config.ODU_DISEQC_2: return "ODU_DISEQC_2";
                case config.ODU_DISEQC_4: return "ODU_DISEQC_4";
                case config.ODU_DISEQC_MOTOR: return "ODU_DISEQC_MOTOR";
                case config.ODU_SATSCAN_MOTOR: return "ODU_SATSCAN_MOTOR";
                case config.ODU_SLAVEPORT: return "ODU_SLAVEPORT";
                case config.ODU_LNB_BAND_TYPE_C: return "ODU_LNB_BAND_TYPE_C";
                case config.ODU_LNB_BAND_TYPE_KU: return "ODU_LNB_BAND_TYPE_KU";
                case config.ODU_UNICABLE: return "ODU_UNICABLE";
                default: return "UNKNOWN";
            }
        };
        var OutdoorUnitDb_1;
        OutdoorUnitDb.classID = 0x700;
        OutdoorUnitDb.DCOffsetDefaultValue = true;
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG }); })
        ], OutdoorUnitDb, "getSatellites", null);
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG }); })
        ], OutdoorUnitDb, "getReferenceTransponders", null);
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG }); })
        ], OutdoorUnitDb, "getOutdoorUnitDbSatellites", null);
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG }); })
        ], OutdoorUnitDb, "getSatelliteConfig", null);
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG }); })
        ], OutdoorUnitDb, "saveConfiguration", null);
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG }); })
        ], OutdoorUnitDb, "saveOutdoorUnitConfiguration", null);
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG }); })
        ], OutdoorUnitDb, "restoreConfiguration", null);
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG }); })
        ], OutdoorUnitDb, "getPortsInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG }); })
        ], OutdoorUnitDb, "getEnabledMainPorts", null);
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG }); })
        ], OutdoorUnitDb, "getConfiguration", null);
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG }); })
        ], OutdoorUnitDb, "commitUnicableOutdoorConfiguration", null);
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG }); })
        ], OutdoorUnitDb, "commitLegacyOutdoorConfiguration", null);
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG, parameters: [1, 2] }); })
        ], OutdoorUnitDb, "setDiseqcConfig", null);
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG, parameters: [1, 2] }); })
        ], OutdoorUnitDb, "setPortParameters", null);
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG }); })
        ], OutdoorUnitDb, "setSatCableLength", null);
        __decorate([
            public_1.log2(function () { return ({ name: OutdoorUnitDb_1.TAG }); })
        ], OutdoorUnitDb, "getSatCableLength", null);
        OutdoorUnitDb = OutdoorUnitDb_1 = __decorate([
            public_1.logTag()
        ], OutdoorUnitDb);
        return OutdoorUnitDb;
    }());
    exports.OutdoorUnitDb = OutdoorUnitDb;
});
//# sourceMappingURL=applicationclient.outdoor.js.map