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
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../backend/public", "./applicationclient"], function (require, exports, bluebird, public_1, public_2, applicationclient_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PowerManagement = exports.BasicStartupState = exports.StartupState = exports.PowerStateChangedReason = exports.WakeupDeviceError = exports.PowerState = void 0;
    var PowerManagementError = (function (_super) {
        __extends(PowerManagementError, _super);
        function PowerManagementError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x616;
            return _this;
        }
        return PowerManagementError;
    }(public_1.BaseError));
    var PowerState;
    (function (PowerState) {
        PowerState["active"] = "active";
        PowerState["standBy"] = "standBy";
        PowerState["powerSave"] = "powerSave";
        PowerState["powerSavePlus"] = "powerSavePlus";
    })(PowerState = exports.PowerState || (exports.PowerState = {}));
    var WakeupDeviceError = (function (_super) {
        __extends(WakeupDeviceError, _super);
        function WakeupDeviceError(message) {
            var _this = _super.call(this, message) || this;
            _this.errorID = 0x611;
            return _this;
        }
        return WakeupDeviceError;
    }(public_1.BaseError));
    exports.WakeupDeviceError = WakeupDeviceError;
    var PowerStateChangedReason;
    (function (PowerStateChangedReason) {
        PowerStateChangedReason[PowerStateChangedReason["Active"] = 0] = "Active";
        PowerStateChangedReason[PowerStateChangedReason["AutomaticStandby"] = 1] = "AutomaticStandby";
        PowerStateChangedReason[PowerStateChangedReason["ManualStandby"] = 2] = "ManualStandby";
        PowerStateChangedReason[PowerStateChangedReason["Reboot"] = 3] = "Reboot";
    })(PowerStateChangedReason = exports.PowerStateChangedReason || (exports.PowerStateChangedReason = {}));
    var StartupState;
    (function (StartupState) {
        StartupState["NormalBoot"] = "NormalBoot";
        StartupState["BrowserRestart"] = "BrowserRestart";
        StartupState["FirstStbBoot"] = "FirstStbBoot";
        StartupState["FromStandby"] = "FromStandby";
        StartupState["ForbiddenMultipleStb"] = "ForbiddenMultipleStb";
        StartupState["ForbiddenNoHdd"] = "ForbiddenNoHdd";
    })(StartupState = exports.StartupState || (exports.StartupState = {}));
    var BasicStartupState;
    (function (BasicStartupState) {
        BasicStartupState["FirstBoot"] = "FirstBoot";
        BasicStartupState["NormalBootOrFromStandby"] = "NormalBootOrFromStandby";
        BasicStartupState["BrowserRestart"] = "BrowserRestart";
    })(BasicStartupState = exports.BasicStartupState || (exports.BasicStartupState = {}));
    var PowerManagement = (function () {
        function PowerManagement() {
        }
        PowerManagement_1 = PowerManagement;
        PowerManagement.resetAllParentalUnblockingsAndGoToStandby = function () {
            return applicationclient_1.ApplicationClient.parentalControlManagement
                .resetAllParentalUnblockings({})
                .then(function (response) { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("resetAllParentalUnblockings successful.", PowerManagement_1.TAG)); }); })
                .catch(function (error) { return public_1.Logger.error(function (log) { return log(public_1.LogMsg("Could not resetAllParentalUnblockings: " + error + ".", PowerManagement_1.TAG)); }); })
                .finally(function () { return PowerManagement_1.setPowerState(PowerState.standBy); });
        };
        PowerManagement.raisePowerStateChangedEvent = function (targetPowerState, reason) {
            return PowerManagement_1.eventManager.broadcast(PowerManagement_1.ON_UI_POWERSTATE_CHANGED, { targetPowerState: targetPowerState, reason: reason });
        };
        PowerManagement.onUIPowerStateChangedEvent = function (evtHandlerFunction) {
            return PowerManagement_1.eventManager.on(PowerManagement_1.ON_UI_POWERSTATE_CHANGED, evtHandlerFunction, PowerManagement_1.TAG);
        };
        PowerManagement.onSystemStartup = function (callback) {
            return PowerManagement_1.startupEventManager.on(PowerManagement_1.SystemStartupEventName, callback, PowerManagement_1.TAG);
        };
        PowerManagement.raiseStartupEvent = function (startupState) {
            PowerManagement_1.startupEventManager.broadcast(PowerManagement_1.SystemStartupEventName, { startupState: startupState });
        };
        PowerManagement.setPowerState = function (targetState) {
            var power = public_2.ServiceClientZac.getPower(public_2.ServiceClientContextZac.instance);
            var zacTargetState = PowerManagement_1.mapPowerState(targetState);
            return new bluebird(function (resolve, reject) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("setPowerState " + power.methods.getPowerStateInfo(zacTargetState) + ")", PowerManagement_1.TAG)); });
                if (PowerManagement_1.getZacPowerState() == zacTargetState) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("state " + power.methods.getPowerStateInfo(zacTargetState) + " already set.", PowerManagement_1.TAG)); });
                    resolve();
                }
                var powerStateHandlerCloseable = power.events.onPowerStateChanged(function (event) {
                    if (event.state == zacTargetState) {
                        powerStateHandlerCloseable();
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("setPowerState succeeded to state " + power.methods.getPowerStateInfo(event.state), PowerManagement_1.TAG)); });
                        resolve();
                    }
                });
                PowerManagement_1.setZacPowerState(zacTargetState);
            });
        };
        PowerManagement.wakeupDevice = function () {
            var wakeupTimeoutMs = 10000;
            if (!PowerManagement_1.wakeupPromise) {
                PowerManagement_1.wakeupPromise = new bluebird(function (resolve, reject) {
                    if (!PowerManagement_1.isInStandbyMode()) {
                        resolve();
                    }
                    var timeoutHandle = setTimeout(function () {
                        closeable();
                        reject(new WakeupDeviceError("wakeupDevice timed out after " + wakeupTimeoutMs + " ms."));
                    }, wakeupTimeoutMs);
                    var closeable = PowerManagement_1.onSystemStartup(function (event) {
                        if (event.startupState == StartupState.FromStandby) {
                            clearTimeout(timeoutHandle);
                            closeable();
                            resolve();
                        }
                    });
                    applicationclient_1.ApplicationClient.powerManagement.setPowerState(PowerState.active);
                }).finally(function () { return PowerManagement_1.wakeupPromise = undefined; });
            }
            return PowerManagement_1.wakeupPromise;
        };
        PowerManagement.setZacPowerState = function (zacTargetState) {
            var power = public_2.ServiceClientZac.getPower(public_2.ServiceClientContextZac.instance);
            return public_2.ServiceClientZac.evaluateZacResponse(function () { return power.object.SetState(zacTargetState); }).timeout(30000);
        };
        PowerManagement.isActiveState = function () {
            return PowerManagement_1.getZacPowerState() == public_2.ServiceClientContextZac.instance.zacAPI.System.Power.POWER_ACTIVE;
        };
        PowerManagement.isInStandbyMode = function () {
            var currentPowerState = PowerManagement_1.getZacPowerState();
            return currentPowerState == public_2.ServiceClientContextZac.instance.zacAPI.System.Power.POWER_FAKE_STANDBY || currentPowerState == public_2.ServiceClientContextZac.instance.zacAPI.System.Power.POWER_STANDBY;
        };
        PowerManagement.getZacPowerState = function () {
            var power = public_2.ServiceClientZac.getPower(public_2.ServiceClientContextZac.instance);
            var state = power.object.GetState();
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Current powerState is " + power.methods.getPowerStateInfo(state) + ")", PowerManagement_1.TAG)); });
            return state;
        };
        PowerManagement.rebootForDRA = function () {
            var power = public_2.ServiceClientZac.getPower(public_2.ServiceClientContextZac.instance);
            return applicationclient_1.ApplicationClient.settings.setDRAFlag()
                .then(function () { return public_2.ServiceClientZac.evaluateZacResponse(function () { return power.object.Reboot(true); }); });
        };
        PowerManagement.reboot = function (force, setClientUpdateFlag) {
            if (setClientUpdateFlag) {
                applicationclient_1.ApplicationClient.settings.setSoftwareUpgradeFlag();
            }
            var power = public_2.ServiceClientZac.getPower(public_2.ServiceClientContextZac.instance);
            return public_2.ServiceClientZac.evaluateZacResponse(function () { return power.object.Reboot(force); });
        };
        PowerManagement.getPwrMgmtSelectionIsDefault = function () {
            return public_2.ServiceClientZac.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyPwrMgmtSelectionIsDefault, "false", ["true", "false"])
                .then(function (configValue) { return configValue.toLowerCase() == "true"; });
        };
        PowerManagement.getPowerSaveMode = function () {
            return applicationclient_1.ApplicationClient.settings.getStandbyFunctionality()
                .then(function (standbyFunctionality) {
                switch (standbyFunctionality) {
                    case applicationclient_1.StandbyFunctionality.WakeOnLan: return PowerState.powerSavePlus;
                    case applicationclient_1.StandbyFunctionality.QuickStart: return PowerState.standBy;
                    default: return PowerState.powerSave;
                }
            });
        };
        PowerManagement.savePowerManagementMode = function (mode) {
            return applicationclient_1.ApplicationClient.settings.setStandbyFunctionality(mode == PowerState.standBy ? applicationclient_1.StandbyFunctionality.QuickStart :
                mode == PowerState.powerSavePlus ? applicationclient_1.StandbyFunctionality.WakeOnLan : applicationclient_1.StandbyFunctionality.None);
        };
        PowerManagement.savePwrMgmtSelectionIsDefault = function (isDefault) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Save PwrMgmtSelectionIsDefault " + String(isDefault), PowerManagement_1.TAG)); });
            public_2.ServiceClientZac.writeItem(public_1.Configuration.instance.settings.userStoreKeyPwrMgmtSelectionIsDefault, String(isDefault));
        };
        PowerManagement.mapPowerState = function (powerState) {
            switch (powerState) {
                case PowerState.active: return public_2.ServiceClientContextZac.instance.zacAPI.System.Power.POWER_ACTIVE;
                case PowerState.standBy: return public_2.ServiceClientContextZac.instance.zacAPI.System.Power.POWER_FAKE_STANDBY;
                case PowerState.powerSave: return public_2.ServiceClientContextZac.instance.zacAPI.System.Power.POWER_STANDBY;
                case PowerState.powerSavePlus: return public_2.ServiceClientContextZac.instance.zacAPI.System.Power.POWER_STANDBY;
                default: throw new PowerManagementError("Cannot map power state " + powerState);
            }
        };
        PowerManagement.getBasicStartupState = function () {
            return applicationclient_1.ApplicationClient.userStorage.getFirstBootTimeMs()
                .then(function (firstBootTimeMs) {
                if (firstBootTimeMs < 0) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("STB is booting for the first time.", PowerManagement_1.TAG)); });
                    return bluebird.resolve(BasicStartupState.FirstBoot);
                }
                return applicationclient_1.ApplicationClient.userStorage.getStartPageBootTimeReferenceMs()
                    .then(function (startPageBootTimeReferenceMs) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("startPageBootTimeReferenceMs: " + startPageBootTimeReferenceMs, PowerManagement_1.TAG)); });
                    if (startPageBootTimeReferenceMs < 0) {
                        return BasicStartupState.NormalBootOrFromStandby;
                    }
                    var startPageHasBeenAlreadyShown = Math.abs(startPageBootTimeReferenceMs - applicationclient_1.ApplicationClient.system.getLastBootTimeMilliseconds()) < 2000;
                    return startPageHasBeenAlreadyShown ? BasicStartupState.BrowserRestart : BasicStartupState.NormalBootOrFromStandby;
                });
            });
        };
        PowerManagement.getStartupState = function (stbWasInActiveStandbyMode) {
            return PowerManagement_1.getBasicStartupState()
                .then(function (basicStartupState) {
                switch (basicStartupState) {
                    case BasicStartupState.BrowserRestart:
                        return StartupState.BrowserRestart;
                    case BasicStartupState.FirstBoot:
                        return StartupState.FirstStbBoot;
                    case BasicStartupState.NormalBootOrFromStandby:
                        return stbWasInActiveStandbyMode ? StartupState.FromStandby : StartupState.NormalBoot;
                }
            })
                .then(function (startupState) {
                if (startupState == StartupState.FirstStbBoot ||
                    startupState == StartupState.NormalBoot) {
                    return applicationclient_1.ApplicationClient.deviceManagement.getStbDevicesInfo(false)
                        .then(function (devicesInfo) {
                        var otherOnlineStbs = devicesInfo.allStbs.filter(function (stb) { return stb.zosaId != devicesInfo.currentStb.zosaId && stb.isOnline; });
                        var masterIsOnline = otherOnlineStbs.some(function (otherOnlineStb) { var _a; return otherOnlineStb.zosaId == ((_a = devicesInfo.masterStb) === null || _a === void 0 ? void 0 : _a.zosaId); });
                        var isSatellitesubscriber = public_1.Feature.has(public_1.FeatureItems.satellitesubscriber, public_1.FeatureRights.viewItems);
                        var isSatelliteStb = public_1.Feature.has(public_1.FeatureItems.satellite, public_1.FeatureRights.viewItems);
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("isSatellitesubscriber: " + isSatellitesubscriber + ", isSatelliteStb: " + isSatelliteStb + ", otherOnlineStbs: " + otherOnlineStbs.length + ", masterIsOnline: " + masterIsOnline, PowerManagement_1.TAG)); });
                        if (isSatelliteStb && isSatellitesubscriber) {
                            if (masterIsOnline) {
                                return StartupState.ForbiddenMultipleStb;
                            }
                            return applicationclient_1.ApplicationClient.storageManagement.getHddState()
                                .then(function (hddState) { return hddState.physicalDevice ? startupState : StartupState.ForbiddenNoHdd; });
                        }
                        return startupState;
                    });
                }
                return startupState;
            });
        };
        var PowerManagement_1;
        PowerManagement.eventManager = new public_1.AsyncEventManager();
        PowerManagement.ON_UI_POWERSTATE_CHANGED = "onUIPowerStateChanged";
        PowerManagement.SystemStartupEventName = "SystemStartupEvent";
        PowerManagement.startupEventManager = new public_1.EventManager();
        __decorate([
            public_1.log2(function () { return ({ name: PowerManagement_1.TAG }); })
        ], PowerManagement, "raiseStartupEvent", null);
        __decorate([
            public_1.log2(function () { return ({ name: PowerManagement_1.TAG }); })
        ], PowerManagement, "wakeupDevice", null);
        __decorate([
            public_1.log2(function () { return ({ name: PowerManagement_1.TAG }); })
        ], PowerManagement, "isInStandbyMode", null);
        __decorate([
            public_1.log2(function () { return ({ name: PowerManagement_1.TAG }); })
        ], PowerManagement, "rebootForDRA", null);
        __decorate([
            public_1.log2(function () { return ({ name: PowerManagement_1.TAG }); })
        ], PowerManagement, "getPowerSaveMode", null);
        __decorate([
            public_1.log2(function () { return ({ name: PowerManagement_1.TAG }); })
        ], PowerManagement, "savePowerManagementMode", null);
        __decorate([
            public_1.log2(function () { return ({ name: PowerManagement_1.TAG }); })
        ], PowerManagement, "getBasicStartupState", null);
        __decorate([
            public_1.log2(function () { return ({ name: PowerManagement_1.TAG }); })
        ], PowerManagement, "getStartupState", null);
        PowerManagement = PowerManagement_1 = __decorate([
            public_1.logTag()
        ], PowerManagement);
        return PowerManagement;
    }());
    exports.PowerManagement = PowerManagement;
});
//# sourceMappingURL=applicationclient.powermanagement.js.map