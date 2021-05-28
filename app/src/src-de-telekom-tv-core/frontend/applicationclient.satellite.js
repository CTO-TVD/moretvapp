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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
define(["require", "exports", "bluebird", "./applicationclient.frontendmanager", "./applicationclient.outdoor", "src/src-de-telekom/public", "./applicationclient", "../backend/public"], function (require, exports, bluebird, applicationclient_frontendmanager_1, applicationclient_outdoor_1, public_1, applicationclient_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Satellite = exports.TSatWizardExecutionMode = exports.CableNumberConfiguration = exports.SatelliteNumberConfiguration = void 0;
    var Polarity;
    (function (Polarity) {
        Polarity[Polarity["Left_Circular"] = 0] = "Left_Circular";
        Polarity[Polarity["Right_Circular"] = 1] = "Right_Circular";
        Polarity[Polarity["Vertical"] = 2] = "Vertical";
        Polarity[Polarity["Horizontal"] = 3] = "Horizontal";
    })(Polarity || (Polarity = {}));
    var SatelliteNumberConfiguration;
    (function (SatelliteNumberConfiguration) {
        SatelliteNumberConfiguration[SatelliteNumberConfiguration["single"] = 0] = "single";
        SatelliteNumberConfiguration[SatelliteNumberConfiguration["multiple"] = 1] = "multiple";
    })(SatelliteNumberConfiguration = exports.SatelliteNumberConfiguration || (exports.SatelliteNumberConfiguration = {}));
    var CableNumberConfiguration;
    (function (CableNumberConfiguration) {
        CableNumberConfiguration[CableNumberConfiguration["single"] = 0] = "single";
        CableNumberConfiguration[CableNumberConfiguration["double"] = 1] = "double";
        CableNumberConfiguration[CableNumberConfiguration["unicable"] = 2] = "unicable";
    })(CableNumberConfiguration = exports.CableNumberConfiguration || (exports.CableNumberConfiguration = {}));
    var TSatWizardExecutionMode;
    (function (TSatWizardExecutionMode) {
        TSatWizardExecutionMode["initial"] = "initial";
        TSatWizardExecutionMode["migration"] = "migration";
        TSatWizardExecutionMode["reconfigure"] = "reconfigure";
    })(TSatWizardExecutionMode = exports.TSatWizardExecutionMode || (exports.TSatWizardExecutionMode = {}));
    var Satellite = (function () {
        function Satellite() {
        }
        Satellite_1 = Satellite;
        Satellite.getMultiswitchInputLetter = function (satelliteListIndex) {
            return String.fromCharCode(satelliteListIndex + 65);
        };
        Satellite.getSatWizardSettings = function (defaultSatelliteId) {
            return bluebird.all([
                applicationclient_1.ApplicationClient.outdoor.getSatellites(),
                applicationclient_1.ApplicationClient.outdoor.getConfiguration(),
                applicationclient_1.ApplicationClient.satellite.getSTBSatSettings(),
                applicationclient_1.ApplicationClient.userStorage.getSatWizardLastRuntime()
            ])
                .then(function (_a) {
                var allSatellites = _a[0], outdoorUnitConfiguration = _a[1], userSatSettings = _a[2], satWizardLastRuntime = _a[3];
                var satWizardSettings = {
                    satelliteNumberChoice: SatelliteNumberConfiguration.single,
                    executionMode: TSatWizardExecutionMode.initial,
                    cableNumberChoice: CableNumberConfiguration.single,
                    allSatellites: allSatellites.data,
                    enabledPorts: outdoorUnitConfiguration.portNames,
                    configuredSatList: []
                };
                if (userSatSettings) {
                    satWizardSettings.satelliteNumberChoice = userSatSettings.satelliteIDs && userSatSettings.satelliteIDs.length > 1 ?
                        SatelliteNumberConfiguration.multiple :
                        SatelliteNumberConfiguration.single;
                    satWizardSettings.unicableConfiguration = userSatSettings.tunerFrequences && ({
                        tunerConfigurations: userSatSettings.tunerFrequences
                            .filter(function (tunerFrequence) { return public_1.Guard.isDefined(tunerFrequence.frequence); })
                            .map(function (item) { return ({
                            slot: item.slot,
                            frequency: item.frequence
                        }); })
                    });
                }
                satWizardSettings.cableNumberChoice = outdoorUnitConfiguration.switch === "unicable" ? CableNumberConfiguration.unicable :
                    (outdoorUnitConfiguration.cableCount == 1 ? CableNumberConfiguration.single : CableNumberConfiguration.double);
                satWizardSettings.configuredSatList = outdoorUnitConfiguration.satellites.map(function (satellitePosition) {
                    if (public_1.Guard.isNumber(satellitePosition) && allSatellites.data.some(function (satellite) { return satellite.satellitePosition == satellitePosition; })) {
                        return allSatellites.data.filter(function (satellite) { return satellite.satellitePosition == satellitePosition; })[0].satelliteId;
                    }
                    else {
                        return undefined;
                    }
                });
                if (satWizardSettings.configuredSatList.every(function (i) { return public_1.Guard.isUndefined(i); }) && satWizardSettings.configuredSatList.length > 0) {
                    satWizardSettings.configuredSatList[0] = defaultSatelliteId;
                }
                satWizardSettings.executionMode = !satWizardLastRuntime || !userSatSettings ? TSatWizardExecutionMode.initial : TSatWizardExecutionMode.reconfigure;
                return satWizardSettings;
            });
        };
        Satellite.getSTBSatSettings = function () {
            return public_2.ServiceClientAuthenticationZosa.getConfigurableSettingsTypedValue(public_2.DomainType.subscriber, public_2.ConfigurableUserSettingsKey.STBSatSettings)
                .then(function (typedValue) {
                var jsonString = typedValue;
                if (jsonString == "") {
                    return undefined;
                }
                try {
                    return JSON.parse(jsonString);
                }
                catch (error) {
                    throw new Error("Error parsing SatSettings JSON string " + jsonString + ": " + JSON.stringify(error));
                }
            });
        };
        Satellite.clearSTBSatSettings = function () {
            return public_2.ServiceClientAuthenticationZosa.setConfigurableUserSettingsValue(public_2.DomainType.subscriber, { key: public_2.ConfigurableUserSettingsKey.STBSatSettings, value: "" });
        };
        Satellite.setSTBSatSettings = function (stbSatSettings) {
            try {
                if (!stbSatSettings.cableIsUnicable) {
                    stbSatSettings.tunerFrequences = undefined;
                }
                var serializedSettings = JSON.stringify(stbSatSettings);
                return public_2.ServiceClientAuthenticationZosa.setConfigurableUserSettingsValue(public_2.DomainType.subscriber, { key: public_2.ConfigurableUserSettingsKey.STBSatSettings, value: serializedSettings });
            }
            catch (error) {
                throw new Error("Failed to serialize SatSettings: " + JSON.stringify(error));
            }
        };
        Satellite.onSatellitesAutoScanEvent = function (callback) {
            return Satellite_1.satellitesAutoScanEventManager.on(Satellite_1.SatellitesAutoScanEventName, callback, applicationclient_outdoor_1.OutdoorUnitDb.TAG);
        };
        Satellite.onSatelliteScanEvent = function (callback) {
            return Satellite_1.satelliteScanEventManager.on(Satellite_1.SatelliteScanEventName, callback, applicationclient_outdoor_1.OutdoorUnitDb.TAG);
        };
        Satellite.onSatellitePortScanEvent = function (callback) {
            return Satellite_1.satellitePortScanEventManager.on(Satellite_1.SatellitePortScanEventName, callback, applicationclient_outdoor_1.OutdoorUnitDb.TAG);
        };
        Satellite.onSatelliteTuneEvent = function (callback) {
            return Satellite_1.satelliteTuneEventManager.on(Satellite_1.SatelliteTuneEventName, callback, Satellite_1.TAG);
        };
        Satellite.onTransponderTuneEvent = function (callback) {
            return Satellite_1.transponderTuneEventManager.on(Satellite_1.TransponderTuneEventName, callback, Satellite_1.TAG);
        };
        Satellite.isTuneReferenceTranspondersRunning = function () {
            return Satellite_1.tuneReferenceTranspondersRunning;
        };
        Satellite.waitUntilTuneReferenceTranspondersDone = function () {
            return Satellite_1.tuneReferenceTranspondersRunning ? Satellite_1.tuneSatellitesReferenceTranspondersPromise : bluebird.resolve(null);
        };
        Satellite.scanForSatellite = function (satellite, scanParameter) {
            var _this = this;
            Satellite_1.autoScanRunning = true;
            var physicalPortScanInformations = Satellite_1.getPhyicalPortsScanInformation(scanParameter);
            public_1.Logger.debug(function (log) { log(public_1.LogMsg("PhysicalPortScanInformations: " + JSON.stringify(physicalPortScanInformations), Satellite_1.TAG)); });
            this.satellitesAutoScanEventManager.broadcast(Satellite_1.SatellitesAutoScanEventName, { state: "start", satellite: satellite, physicalPortScanParameters: physicalPortScanInformations });
            this.autoScanPromise = Satellite_1.scanPhysicalPortForSatellite(satellite, physicalPortScanInformations, 0, [])
                .then(function (result) {
                _this.satellitesAutoScanEventManager.broadcast(Satellite_1.SatellitesAutoScanEventName, { state: "finished", satellite: satellite, physicalPortScanParameters: physicalPortScanInformations, result: result });
            })
                .catch(function (error) {
                public_1.ErrorManager.catch(error, applicationclient_outdoor_1.OutdoorUnitDb, 0x04);
                _this.satellitesAutoScanEventManager.broadcast(Satellite_1.SatellitesAutoScanEventName, { state: "error", satellite: satellite, physicalPortScanParameters: physicalPortScanInformations, error: error });
            })
                .finally(function () {
                Satellite_1.autoScanRunning = false;
                applicationclient_outdoor_1.OutdoorUnitDb.restoreConfiguration();
            });
            return this.autoScanPromise;
        };
        Satellite.scanPhysicalPortForSatellite = function (satellite, physicalPortScanInfo, physicalPortScanInfoIndex, result) {
            var _this = this;
            if (this.interruptAutoScan) {
                return bluebird.resolve(result);
            }
            var currentPhysicalPortInfo = physicalPortScanInfo[physicalPortScanInfoIndex];
            this.satelliteScanEventManager.broadcast(Satellite_1.SatelliteScanEventName, { state: "start", satellite: satellite, physicalPortScanParameters: currentPhysicalPortInfo });
            var retFunc = function (result, event) {
                if (physicalPortScanInfoIndex < physicalPortScanInfo.length - 1) {
                    return Satellite_1.scanPhysicalPortForSatellite(satellite, physicalPortScanInfo, physicalPortScanInfoIndex + 1, result);
                }
                _this.satelliteScanEventManager.broadcast(Satellite_1.SatelliteScanEventName, event);
                return bluebird.resolve(result);
            };
            return Satellite_1.scanForSatelliteWithPortScanIndex(satellite, currentPhysicalPortInfo.scanInfos, result)
                .then(function (portScanResult) {
                return retFunc(result, { state: "finished", satellite: satellite, result: portScanResult, physicalPortScanParameters: currentPhysicalPortInfo });
            })
                .catch(function (error) {
                public_1.ErrorManager.catch(error, applicationclient_outdoor_1.OutdoorUnitDb, 0x02);
                return retFunc(result, { state: "error", satellite: satellite, physicalPortScanParameters: currentPhysicalPortInfo });
            });
        };
        Satellite.scanForSatelliteWithPortScanIndex = function (satellite, portScanInfos, result, portScanInfoIndex) {
            var _this = this;
            if (portScanInfoIndex === void 0) { portScanInfoIndex = 0; }
            var scanInfo = portScanInfos[portScanInfoIndex];
            if (this.interruptAutoScan) {
                return bluebird.resolve({
                    satellite: satellite,
                    scanInfo: scanInfo,
                    foundReferenceTransponders: 0
                });
            }
            this.satellitePortScanEventManager.broadcast(Satellite_1.SatellitePortScanEventName, { state: "start", satellite: satellite, scanInfo: scanInfo });
            return Satellite_1.setPortsConfiguration(satellite, scanInfo)
                .then(function () { return Satellite_1.tuneSatellitesReferenceTransponders([satellite], true); })
                .then(function (satelliteTuneResults) {
                _this.satellitePortScanEventManager.broadcast(Satellite_1.SatellitePortScanEventName, { state: "finished", satellite: satellite, scanInfo: scanInfo });
                var satelliteTuneResult = satelliteTuneResults && satelliteTuneResults != null ? satelliteTuneResults[0] : undefined;
                var isLastPort = portScanInfoIndex == portScanInfos.length - 1;
                var allReferenceTransponderFound = satelliteTuneResult ? satelliteTuneResult.allTranspondersFound : false;
                var portScanResult = {
                    satellite: satellite,
                    scanInfo: scanInfo,
                    tuneResult: satelliteTuneResult
                };
                result.push(portScanResult);
                var successfulResults = result.filter(function (satellitePortScanResult) { var _a; return (_a = satellitePortScanResult.tuneResult) === null || _a === void 0 ? void 0 : _a.allTranspondersFound; });
                var isUnicableConfig = public_1.Guard.isDefined(scanInfo.userbandScanInfo);
                var interruptUnicableSuccess = isUnicableConfig && successfulResults.length >= 2;
                var interruptLegacyAllRefereceTranspondersFound = !isUnicableConfig && allReferenceTransponderFound;
                var interruptScanning = interruptUnicableSuccess || interruptLegacyAllRefereceTranspondersFound || isLastPort;
                public_1.Logger.debug(function (log) { log(public_1.LogMsg("interruptScanning: " + interruptScanning + ", interruptUnicableSuccess: " + interruptUnicableSuccess + ", interruptLegacyAllRefereceTranspondersFound: " + interruptLegacyAllRefereceTranspondersFound + ", isLastPort: " + isLastPort, Satellite_1.TAG)); });
                return interruptScanning ? portScanResult : Satellite_1.scanForSatelliteWithPortScanIndex(satellite, portScanInfos, result, portScanInfoIndex + 1);
            })
                .catch(function (error) {
                public_1.ErrorManager.catch(error, applicationclient_outdoor_1.OutdoorUnitDb, 0x03);
                _this.satellitePortScanEventManager.broadcast(Satellite_1.SatellitePortScanEventName, { state: "error", satellite: satellite, scanInfo: scanInfo });
                var errorResult = {
                    satellite: satellite,
                    scanInfo: scanInfo
                };
                result.push(errorResult);
                return errorResult;
            });
        };
        Satellite.getPhyicalPortsScanInformation = function (scanParameters) {
            switch (scanParameters.scanOption) {
                case "multiswitch":
                case "lnb":
                    return [
                        { physicalPort: 0, scanInfos: Satellite_1.getScanInfomation(0, scanParameters) },
                        { physicalPort: 1, scanInfos: Satellite_1.getScanInfomation(1, scanParameters) }
                    ];
                case "unicable":
                    return [{ physicalPort: 0, scanInfos: Satellite_1.getScanInfomation(0, scanParameters) }];
            }
        };
        Satellite.getMultiswitchScanInformation = function (port) {
            return [0, 1, 2, 3].map(function (subPortIndex) { return ({ portScanInfo: { port: port, subPort: subPortIndex } }); });
        };
        Satellite.getUnicableScanInformation = function (portsCount) {
            var frequencies1 = [1210, 1315, 1420, 1550, 1680, 1800, 1920, 2040];
            var frequencies116Mhz = [1068, 1284, 1400, 1516, 1632, 1748, 1864, 1980, 2096];
            var frequencies102Mhz = [974, 1076, 1178, 1280, 1382, 1484, 1586, 1688, 1790, 1892, 1994];
            var userbandIds = [];
            for (var index = 0; index < portsCount; index++) {
                userbandIds.push(index);
            }
            var allFrequencies = __spreadArray(__spreadArray(__spreadArray([], frequencies1), frequencies116Mhz), frequencies102Mhz);
            var satellitePositions = [0, 1];
            return Satellite_1.getUnicableScanInformationWithParams(userbandIds, allFrequencies, satellitePositions);
        };
        Satellite.getUnicableScanInformationForTesting = function () {
            var satellitePositions = [0];
            var testFrequencies = [1484, 1586, 1688];
            var userbandIds = [0, 1, 2, 3];
            return Satellite_1.getUnicableScanInformationWithParams(userbandIds, testFrequencies, satellitePositions);
        };
        Satellite.getUnicableScanInformationWithParams = function (userbandIds, frequencies, satellitePositions) {
            var unicableScanInfos = [];
            satellitePositions.forEach(function (satellitePosition) {
                frequencies.forEach(function (frequency) {
                    userbandIds.forEach(function (userbandId) {
                        unicableScanInfos.push({ userbandScanInfo: { frequency: frequency, slot: userbandId, satellitePosition: satellitePosition } });
                    });
                });
            });
            return unicableScanInfos;
        };
        Satellite.getScanInfomation = function (port, scanParameters) {
            switch (scanParameters.scanOption) {
                case "lnb":
                    return __spreadArray([{ portScanInfo: { port: port, subPort: undefined } }], Satellite_1.getMultiswitchScanInformation(port));
                case "multiswitch":
                    return Satellite_1.getMultiswitchScanInformation(port);
                case "unicable":
                    return Satellite_1.getUnicableScanInformation(scanParameters.ports || 8);
                default:
                    public_1.Logger.error(function (log) { log(public_1.LogMsg("Unhandled scan option " + scanParameters.scanOption, Satellite_1.TAG)); });
                    return [];
            }
        };
        Satellite.setPortsConfiguration = function (satellite, scanInfo) {
            if (scanInfo.portScanInfo) {
                if (public_1.Guard.isNumber(scanInfo.portScanInfo.subPort)) {
                    var satPositions = [0, 0, 0, 0];
                    satPositions[scanInfo.portScanInfo.subPort || 0] = satellite.satellitePosition;
                    return applicationclient_outdoor_1.OutdoorUnitDb.commitLegacyOutdoorConfiguration(1, satPositions, scanInfo.portScanInfo.port);
                }
                else {
                    return applicationclient_outdoor_1.OutdoorUnitDb.commitLegacyOutdoorConfiguration(1, [satellite.satellitePosition], scanInfo.portScanInfo.port);
                }
            }
            else if (scanInfo.userbandScanInfo) {
                return applicationclient_outdoor_1.OutdoorUnitDb.commitUnicableOutdoorConfiguration([
                    {
                        frequency: scanInfo.userbandScanInfo.frequency,
                        slot: scanInfo.userbandScanInfo.slot
                    },
                    undefined
                ], scanInfo.userbandScanInfo.satellitePosition == 1 ? [0, satellite.satellitePosition] : [satellite.satellitePosition]);
            }
            throw new Error("Invalid scanInfo");
        };
        Satellite.stopAutoScan = function () {
            if (!Satellite_1.autoScanRunning)
                return bluebird.resolve(undefined);
            public_1.Logger.debug(function (log) { log(public_1.LogMsg("SET interruptAutoScan to TRUE", Satellite_1.TAG)); });
            Satellite_1.interruptAutoScan = true;
            return Satellite_1.autoScanPromise
                .finally(function () {
                public_1.Logger.debug(function (log) { log(public_1.LogMsg("Reset interruptAutoScan SWITCH to FALSE", Satellite_1.TAG)); });
                Satellite_1.interruptAutoScan = false;
            });
        };
        Satellite.stopTuneSatellitesReferenceTransponders = function () {
            if (!Satellite_1.tuneReferenceTranspondersRunning)
                return bluebird.resolve(null);
            public_1.Logger.debug(function (log) { log(public_1.LogMsg("SET interruptTuneReferenceTransponders to TRUE", Satellite_1.TAG)); });
            Satellite_1.interruptTuneReferenceTransponders = true;
            return Satellite_1.tuneSatellitesReferenceTranspondersPromise
                .finally(function () {
                public_1.Logger.debug(function (log) { log(public_1.LogMsg("Reset interruptTuneReferenceTransponders SWITCH to FALSE", Satellite_1.TAG)); });
                Satellite_1.interruptTuneReferenceTransponders = false;
            });
        };
        Satellite.tuneConfiguredSatellitesReferenceTransponders = function () {
            return applicationclient_frontendmanager_1.FrontendManager.getConfiguredSatellites()
                .then(function (configuredSatellites) { return configuredSatellites.length > 0 ? Satellite_1.tuneSatellitesReferenceTransponders(configuredSatellites) : bluebird.resolve(null); });
        };
        Satellite.validateConnectors = function (connectors, portsInfo) {
            var enabledConnectors = [];
            if (portsInfo.some(function (port) { return port.enabled && port.name == "0"; })) {
                enabledConnectors.push(connectors[0]);
            }
            if (portsInfo.some(function (port) { return port.enabled && port.name == "1"; })) {
                enabledConnectors.push(connectors[1]);
            }
            return enabledConnectors;
        };
        Satellite.tuneSatellitesReferenceTransponders = function (satellites, forceTuneAllTransponders) {
            var _this = this;
            if (forceTuneAllTransponders === void 0) { forceTuneAllTransponders = false; }
            Satellite_1.tuneReferenceTranspondersRunning = true;
            var tuner;
            var portsInfo;
            Satellite_1.tuneSatellitesReferenceTranspondersPromise = satellites.length == 0 ? bluebird.resolve(null) :
                applicationclient_frontendmanager_1.FrontendManager.getAvailableFrontends()
                    .then(function (availableFrontends) {
                    tuner = availableFrontends[0];
                    return applicationclient_outdoor_1.OutdoorUnitDb.getEnabledMainPorts();
                })
                    .then(function (pInfo) {
                    portsInfo = pInfo;
                    return applicationclient_frontendmanager_1.FrontendManager.getConnectors();
                })
                    .then(function (allConnectors) {
                    var connectors = Satellite_1.validateConnectors(allConnectors, portsInfo);
                    if (!connectors || connectors.length == 0) {
                        public_1.Logger.error(function (log) { log(public_1.LogMsg("FrontendManager - No connectors found .", applicationclient_frontendmanager_1.FrontendManager.TAG)); });
                        return bluebird.resolve([]);
                    }
                    _this.satelliteTuneEventManager.broadcast(Satellite_1.SatelliteTuneEventName, { state: "start", satellite: satellites[0], connector: connectors[0] });
                    return Satellite_1.tuneSatelliteReferenceTransponderWithIndex(connectors, 0, satellites, 0, 0, forceTuneAllTransponders, tuner)
                        .then(function (satelliteTuneResults) {
                        Satellite_1.logSatelliteTuneResult(satelliteTuneResults);
                        return satelliteTuneResults;
                    });
                })
                    .finally(function () { return Satellite_1.tuneReferenceTranspondersRunning = false; });
            return Satellite_1.tuneSatellitesReferenceTranspondersPromise;
        };
        Satellite.tuneSatelliteReferenceTransponderWithIndex = function (connectors, connectorIndex, satellites, satelliteIndex, transponderIndex, forceTuneAllTransponders, tuner, satelliteTuneResults) {
            var _this = this;
            if (satelliteTuneResults === void 0) { satelliteTuneResults = []; }
            var currentSatellite = satellites[satelliteIndex];
            var connector = connectors[connectorIndex];
            var satelliteReferenceTransponders;
            return applicationclient_outdoor_1.OutdoorUnitDb.getReferenceTransponders([currentSatellite])
                .then(function (satelliteInfo) {
                satelliteReferenceTransponders = satelliteInfo[0].referenceTransponders;
                return Satellite_1.tuneTransponder(connector, currentSatellite, satelliteReferenceTransponders[transponderIndex], tuner);
            })
                .then(function (tunerTunerResults) {
                if (Satellite_1.interruptTuneReferenceTransponders) {
                    public_1.Logger.debug(function (log) { log(public_1.LogMsg("Detected interruptTuneReferenceTransponders == TRUE", applicationclient_frontendmanager_1.FrontendManager.TAG)); });
                    var failedTuneResult = {
                        satellite: currentSatellite,
                        transponderTuneResults: [],
                        interruptedByUser: true
                    };
                    satelliteTuneResults.push(failedTuneResult);
                    _this.satelliteTuneEventManager.broadcast(Satellite_1.SatelliteTuneEventName, { state: "finished", satellite: currentSatellite, result: failedTuneResult, connector: connector });
                    return bluebird.resolve(satelliteTuneResults);
                }
                if (!satelliteTuneResults.some(function (tuneResult) { return tuneResult.satellite.satelliteId == currentSatellite.satelliteId; })) {
                    satelliteTuneResults.push({
                        satellite: currentSatellite,
                        transponderTuneResults: [],
                        interruptedByUser: false
                    });
                }
                var satelliteTuneResult = satelliteTuneResults.filter(function (tuneResult) { return tuneResult.satellite.satelliteId == currentSatellite.satelliteId; })[0];
                var transponderTuneResult = {
                    transponder: satelliteReferenceTransponders[transponderIndex],
                    tunerTuneResult: tunerTunerResults,
                    connector: connector
                };
                satelliteTuneResult.transponderTuneResults.push(transponderTuneResult);
                satelliteTuneResult.allTranspondersFound = satelliteTuneResult.transponderTuneResults.every(function (tuneResult) { return Satellite_1.tuneResultIsSuccessful(tuneResult); });
                satelliteTuneResult.transpondersFound = satelliteTuneResult.transponderTuneResults.filter(function (tuneResult) { return Satellite_1.tuneResultIsSuccessful(tuneResult); }).length;
                var isLastTransponder = transponderIndex == satelliteReferenceTransponders.length - 1;
                var isLastSatellite = satelliteIndex == satellites.length - 1;
                var isLastConnector = connectorIndex == connectors.length - 1;
                var transponderTuningIsDone = isLastTransponder || (Satellite_1.tuneResultIsSuccessful(transponderTuneResult) && !forceTuneAllTransponders);
                if (!transponderTuningIsDone) {
                    return Satellite_1.tuneSatelliteReferenceTransponderWithIndex(connectors, connectorIndex, satellites, satelliteIndex, transponderIndex + 1, forceTuneAllTransponders, tuner, satelliteTuneResults);
                }
                var connectorResult = __assign(__assign({}, satelliteTuneResult), { transponderTuneResults: satelliteTuneResult.transponderTuneResults.filter(function (transponderTuneResult) { return transponderTuneResult.connector.odudbId == connector.odudbId; }) });
                if (!isLastConnector) {
                    _this.satelliteTuneEventManager.broadcast(Satellite_1.SatelliteTuneEventName, { state: "finished", satellite: currentSatellite, connector: connector, result: connectorResult });
                    _this.satelliteTuneEventManager.broadcast(Satellite_1.SatelliteTuneEventName, { state: "start", satellite: currentSatellite, connector: connectors[connectorIndex + 1] });
                    return Satellite_1.tuneSatelliteReferenceTransponderWithIndex(connectors, connectorIndex + 1, satellites, satelliteIndex, 0, forceTuneAllTransponders, tuner, satelliteTuneResults);
                }
                if (!isLastSatellite) {
                    _this.satelliteTuneEventManager.broadcast(Satellite_1.SatelliteTuneEventName, { state: "finished", satellite: currentSatellite, connector: connector, result: connectorResult });
                    _this.satelliteTuneEventManager.broadcast(Satellite_1.SatelliteTuneEventName, { state: "start", satellite: satellites[satelliteIndex + 1], connector: connectors[0] });
                    return Satellite_1.tuneSatelliteReferenceTransponderWithIndex(connectors, 0, satellites, satelliteIndex + 1, 0, forceTuneAllTransponders, tuner, satelliteTuneResults);
                }
                _this.satelliteTuneEventManager.broadcast(Satellite_1.SatelliteTuneEventName, { state: "finished", satellite: satellites[satelliteIndex], connector: connector, result: connectorResult });
                return satelliteTuneResults;
            });
        };
        Satellite.tuneResultIsSuccessful = function (tuneResult) {
            return tuneResult.tunerTuneResult.signalParams.signalQualityPercent && tuneResult.tunerTuneResult.signalParams.signalStrengthPercent;
        };
        Satellite.tuneTransponder = function (connector, satellite, transponder, tuner) {
            var _this = this;
            this.transponderTuneEventManager.broadcast(Satellite_1.TransponderTuneEventName, {
                state: "start",
                satellite: satellite,
                transponder: transponder,
                connector: connector
            });
            return new SatTuner(tuner).tuneTransponder(connector, transponder)
                .then(function (tuneParams) {
                _this.transponderTuneEventManager.broadcast(Satellite_1.TransponderTuneEventName, {
                    state: "completed",
                    satellite: satellite,
                    transponder: transponder,
                    result: tuneParams,
                    connector: connector
                });
                return { signalParams: tuneParams };
            })
                .catch(function (error) {
                _this.transponderTuneEventManager.broadcast(Satellite_1.TransponderTuneEventName, {
                    state: "error",
                    satellite: satellite,
                    transponder: transponder,
                    connector: connector
                });
                return { signalParams: {}, error: error };
            });
        };
        Satellite.getTransponderTuneInfo = function (transponderTuneResult) {
            var signalStrength = transponderTuneResult.tunerTuneResult.signalParams.signalStrengthPercent ? transponderTuneResult.tunerTuneResult.signalParams.signalStrengthPercent + " %" : "0 %";
            var signalQuality = transponderTuneResult.tunerTuneResult.signalParams.signalQualityPercent ? transponderTuneResult.tunerTuneResult.signalParams.signalQualityPercent + " %" : "0 %";
            return this.getTransponderInfo(transponderTuneResult.transponder) + " Quality: " + signalQuality + ", Strength: " + signalStrength + "}";
        };
        Satellite.getTransponderInfo = function (transponder) {
            return transponder.frequency ? Satellite_1.getFrequencyInfo(transponder.frequency) + " " + Polarity[transponder.polarity] : "not available";
        };
        Satellite.getFrequencyInfo = function (frequencyKhz) {
            var lowBandMaxMhz = 11700;
            var frequencyMhz = (frequencyKhz / 1000).toFixed(2) + " MHz";
            var bandTitle = frequencyKhz <= lowBandMaxMhz ? "Low Band [10.7 - 11.7 GHz]" : "High Band [11.7 - 12.75 GHz]";
            return frequencyMhz + " " + bandTitle;
        };
        Satellite.logSatelliteTuneResult = function (satelliteTuneResults) {
            try {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("TUNE RESULTS:", applicationclient_frontendmanager_1.FrontendManager.TAG)); });
                satelliteTuneResults.forEach(function (satelliteTuneResult) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Satellite: " + satelliteTuneResult.satellite.name, applicationclient_frontendmanager_1.FrontendManager.TAG)); });
                    satelliteTuneResult.transponderTuneResults.forEach(function (transponderTuneResult) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Connector: " + transponderTuneResult.connector.name + ", DSD: " + transponderTuneResult.transponder.deliverySystemDescriptor + ", STRENGTH: " + transponderTuneResult.tunerTuneResult.signalParams.signalStrengthPercent + ", QUALITY: " + transponderTuneResult.tunerTuneResult.signalParams.signalQualityPercent, applicationclient_frontendmanager_1.FrontendManager.TAG)); });
                    });
                });
            }
            catch (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("logSatelliteTuneResult Exception: " + error, applicationclient_frontendmanager_1.FrontendManager.TAG)); });
            }
        };
        var Satellite_1;
        Satellite.classID = 0x74F;
        Satellite.interruptAutoScan = false;
        Satellite.autoScanRunning = false;
        Satellite.interruptTuneReferenceTransponders = false;
        Satellite.tuneReferenceTranspondersRunning = false;
        Satellite.SatelliteTuneEventName = "SatelliteTuneEvent";
        Satellite.TransponderTuneEventName = "TransponderTuneEvent";
        Satellite.SatellitesAutoScanEventName = "SatellitesAutoScanEvent";
        Satellite.SatelliteScanEventName = "SatelliteScanEvent";
        Satellite.SatellitePortScanEventName = "SatellitePortScanEvent";
        Satellite.satellitesAutoScanEventManager = new public_1.EventManager();
        Satellite.satelliteScanEventManager = new public_1.EventManager();
        Satellite.satellitePortScanEventManager = new public_1.EventManager();
        Satellite.satelliteTuneEventManager = new public_1.EventManager();
        Satellite.transponderTuneEventManager = new public_1.EventManager();
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG }); })
        ], Satellite, "getSatWizardSettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG }); })
        ], Satellite, "getSTBSatSettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG }); })
        ], Satellite, "clearSTBSatSettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG }); })
        ], Satellite, "setSTBSatSettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG }); })
        ], Satellite, "scanForSatellite", null);
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG, parameters: [0, 3] }); })
        ], Satellite, "scanPhysicalPortForSatellite", null);
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG, parameters: [1, 3] }); })
        ], Satellite, "scanForSatelliteWithPortScanIndex", null);
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG }); })
        ], Satellite, "getPhyicalPortsScanInformation", null);
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG }); })
        ], Satellite, "getScanInfomation", null);
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG }); })
        ], Satellite, "setPortsConfiguration", null);
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG }); })
        ], Satellite, "stopAutoScan", null);
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG }); })
        ], Satellite, "stopTuneSatellitesReferenceTransponders", null);
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG }); })
        ], Satellite, "tuneConfiguredSatellitesReferenceTransponders", null);
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG }); })
        ], Satellite, "tuneSatellitesReferenceTransponders", null);
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG, parameters: [1, 3, 4] }); })
        ], Satellite, "tuneSatelliteReferenceTransponderWithIndex", null);
        __decorate([
            public_1.log2(function () { return ({ name: Satellite_1.TAG, parameters: [4] }); })
        ], Satellite, "tuneTransponder", null);
        Satellite = Satellite_1 = __decorate([
            public_1.logTag()
        ], Satellite);
        return Satellite;
    }());
    exports.Satellite = Satellite;
    var SatTuner = (function () {
        function SatTuner(tuner) {
            this.tunerUnlockedTimeoutHandle = -1;
            this.tunerCrashTimeoutHandle = -1;
            this.tunerUnlockedTimeoutMs = 2000;
            this.tunerCrashTimeoutMs = 20000;
            this.tuner = tuner;
        }
        SatTuner_1 = SatTuner;
        SatTuner.prototype.tuneTransponder = function (connector, transponder) {
            var _this = this;
            return new bluebird(function (resolve, reject) {
                _this.release();
                var tuneParams = {};
                tuneParams[applicationclient_frontendmanager_1.FrontendManager.KEY_TUNING_TYPE] = applicationclient_frontendmanager_1.FrontendManager.TUNING_TYPE_DSD;
                tuneParams[applicationclient_frontendmanager_1.FrontendManager.KEY_DELIVERY_SYSTEM_DESCRIPTOR] = transponder.deliverySystemDescriptor;
                _this.acquire(connector);
                _this.eventListenerId = _this.tuner.registerEventListener("TuningEvent", function (event) {
                    try {
                        public_1.Logger.debug(function (log) { log(public_1.LogMsg("TuningEvent DSD:" + transponder.deliverySystemDescriptor + " " + _this.getLockStateInfo(event.lockStatus), SatTuner_1.TAG)); });
                        switch (event.lockStatus) {
                            case applicationclient_frontendmanager_1.FrontendManager.TUNER_STATUS_LOCKED:
                                var tunerInfo = _this.tuner.GetInfo();
                                var qualityPercent = tunerInfo.signalQualityPercent;
                                var signalStrength = tunerInfo.signalStrengthPercent;
                                _this.disposeObjects();
                                resolve({ signalQualityPercent: qualityPercent, signalStrengthPercent: signalStrength });
                                break;
                            case applicationclient_frontendmanager_1.FrontendManager.TUNER_STATUS_NOT_LOCKED:
                                public_1.Logger.debug(function (log) { log(public_1.LogMsg("TEMPORARY TUNER_STATUS_NOT_LOCKED - Waiting for " + _this.tunerUnlockedTimeoutMs + " ms ....", SatTuner_1.TAG)); });
                                _this.tunerUnlockedTimeoutHandle = setTimeout(function () {
                                    _this.disposeObjects();
                                    resolve({ signalQualityPercent: 0, signalStrengthPercent: 0 });
                                }, _this.tunerUnlockedTimeoutMs);
                                break;
                            case applicationclient_frontendmanager_1.FrontendManager.TUNER_STATUS_TUNING:
                                _this.clearTunerCrashTimer();
                                _this.tunerCrashTimeoutHandle = setTimeout(function () {
                                    public_1.Logger.error(function (log) { log(public_1.LogMsg("No events have been raised for " + _this.tunerCrashTimeoutMs + " ms - interrupt tuning.", SatTuner_1.TAG)); });
                                    _this.disposeObjects();
                                    resolve({ signalQualityPercent: 0, signalStrengthPercent: 0 });
                                }, _this.tunerCrashTimeoutMs);
                                public_1.Logger.debug(function (log) { log(public_1.LogMsg("Tuner started tuning - Waiting for " + _this.tunerCrashTimeoutMs + " ms for next events .... [" + _this.tunerCrashTimeoutHandle + "]", SatTuner_1.TAG)); });
                                break;
                        }
                    }
                    catch (error) {
                        public_1.Logger.error(function (log) { log(public_1.LogMsg("OnTuneResult - ERROR: " + error, SatTuner_1.TAG)); });
                        _this.disposeObjects();
                        reject(error);
                    }
                });
                public_1.Logger.debug(function (log) { log(public_1.LogMsg("Tuner Tune DeliverySystemDescriptor " + transponder.deliverySystemDescriptor + "...", SatTuner_1.TAG)); });
                _this.tune(tuneParams);
            });
        };
        SatTuner.prototype.disposeObjects = function () {
            if (this.eventListenerId !== undefined)
                this.tuner.unregisterEventListener("TuningEvent", this.eventListenerId);
            this.release();
            this.clearTunerUnlockTimer();
            this.clearTunerCrashTimer();
        };
        SatTuner.prototype.clearTunerUnlockTimer = function () {
            if (this.tunerUnlockedTimeoutHandle >= 0) {
                clearTimeout(this.tunerUnlockedTimeoutHandle);
                this.tunerUnlockedTimeoutHandle = -1;
            }
        };
        SatTuner.prototype.clearTunerCrashTimer = function () {
            var _this = this;
            if (this.tunerCrashTimeoutHandle >= 0) {
                public_1.Logger.debug(function (log) { log(public_1.LogMsg("Clear tunerCrashTimeoutHandle [" + _this.tunerCrashTimeoutHandle + "]", SatTuner_1.TAG)); });
                clearTimeout(this.tunerCrashTimeoutHandle);
                this.tunerCrashTimeoutHandle = -1;
            }
        };
        SatTuner.prototype.acquire = function (connector) {
            var _this = this;
            var tunerConnectors = this.tuner.GetConnectors();
            public_1.Logger.debug(function (log) { log(public_1.LogMsg("Tuner Connectors: " + tunerConnectors.join(";"), SatTuner_1.TAG)); });
            if (tunerConnectors.indexOf(connector.name) >= 0) {
                public_2.ServiceClientZac.evaluateZacResponseSync(function () { return _this.tuner.Acquire(connector.name); });
            }
            else {
                public_1.Logger.debug(function (log) { log(public_1.LogMsg("Call tuner.Acquire() without params because tuner is not connected to " + connector.name + ".", SatTuner_1.TAG)); });
                public_2.ServiceClientZac.evaluateZacResponseSync(function () { return _this.tuner.Acquire(); });
            }
        };
        SatTuner.prototype.tune = function (tuneParams) {
            var _this = this;
            public_2.ServiceClientZac.evaluateZacResponseSync(function () { return _this.tuner.Tune(tuneParams); });
        };
        SatTuner.prototype.release = function () {
            var _this = this;
            var tunerInfoBefore = this.tuner.GetInfo();
            public_2.ServiceClientZac.evaluateZacResponseSync(function () { return _this.tuner.Release(); });
            var tunerInfoAfter = this.tuner.GetInfo();
            public_1.Logger.debug(function (log) { log(public_1.LogMsg("" + _this.getReleaseResult(tunerInfoBefore, tunerInfoAfter), SatTuner_1.TAG)); });
        };
        SatTuner.prototype.getReleaseResult = function (tunerInfoBefore, tunerInfoAfter) {
            var lockStateString = tunerInfoBefore && tunerInfoAfter ? tunerInfoBefore.lockStatus != tunerInfoAfter.lockStatus ?
                this.getLockStateInfo(tunerInfoBefore.lockStatus) + " -> " + this.getLockStateInfo(tunerInfoAfter.lockStatus) :
                this.getLockStateInfo(tunerInfoAfter.lockStatus) : "n.a.";
            var usageString = tunerInfoBefore && tunerInfoAfter ? (tunerInfoBefore.usage != tunerInfoAfter.usage ?
                applicationclient_frontendmanager_1.FrontendManager.GetUsageAsString(tunerInfoBefore.usage) + " -> " + applicationclient_frontendmanager_1.FrontendManager.GetUsageAsString(tunerInfoAfter.usage) :
                applicationclient_frontendmanager_1.FrontendManager.GetUsageAsString(tunerInfoAfter.usage)) : "n.a";
            return "LockState: " + lockStateString + ", Usage: " + usageString + ", " + JSON.stringify(tunerInfoAfter);
        };
        SatTuner.prototype.getLockStateInfo = function (lockState) {
            switch (lockState) {
                case applicationclient_frontendmanager_1.FrontendManager.TUNER_STATUS_LOCKED: return "TUNER_STATUS_LOCKED";
                case applicationclient_frontendmanager_1.FrontendManager.TUNER_STATUS_NOT_LOCKED: return "TUNER_STATUS_NOT_LOCKED";
                case applicationclient_frontendmanager_1.FrontendManager.TUNER_STATUS_TUNING: return "TUNER_STATUS_TUNING";
                default: return "UNKNOWN";
            }
        };
        var SatTuner_1;
        __decorate([
            public_1.log2(function () { return ({ name: SatTuner_1.TAG, parameters: [] }); })
        ], SatTuner.prototype, "tuneTransponder", null);
        __decorate([
            public_1.log2(function () { return ({ name: SatTuner_1.TAG }); })
        ], SatTuner.prototype, "acquire", null);
        __decorate([
            public_1.log2(function () { return ({ name: SatTuner_1.TAG }); })
        ], SatTuner.prototype, "tune", null);
        __decorate([
            public_1.log2(function () { return ({ name: SatTuner_1.TAG, parameters: [1] }); })
        ], SatTuner.prototype, "release", null);
        SatTuner = SatTuner_1 = __decorate([
            public_1.logTag()
        ], SatTuner);
        return SatTuner;
    }());
});
//# sourceMappingURL=applicationclient.satellite.js.map