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
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../backend/public"], function (require, exports, bluebird, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Bluetooth = exports.BluetoothError = exports.BluetoothErrorCode = void 0;
    var BluetoothErrorCode;
    (function (BluetoothErrorCode) {
        BluetoothErrorCode[BluetoothErrorCode["Result_OK"] = 0] = "Result_OK";
        BluetoothErrorCode[BluetoothErrorCode["Result_AlreadyConnected"] = 1] = "Result_AlreadyConnected";
        BluetoothErrorCode[BluetoothErrorCode["Result_AlreadyExists"] = 2] = "Result_AlreadyExists";
        BluetoothErrorCode[BluetoothErrorCode["Result_AuthenticationCanceled"] = 3] = "Result_AuthenticationCanceled";
        BluetoothErrorCode[BluetoothErrorCode["Result_AuthenticationFailed"] = 4] = "Result_AuthenticationFailed";
        BluetoothErrorCode[BluetoothErrorCode["Result_AuthenticationRejected"] = 5] = "Result_AuthenticationRejected";
        BluetoothErrorCode[BluetoothErrorCode["Result_AuthenticationTimeout"] = 6] = "Result_AuthenticationTimeout";
        BluetoothErrorCode[BluetoothErrorCode["Result_CommError"] = 7] = "Result_CommError";
        BluetoothErrorCode[BluetoothErrorCode["Result_ConnectionAttemptFailed"] = 8] = "Result_ConnectionAttemptFailed";
        BluetoothErrorCode[BluetoothErrorCode["Result_DeviceIsNotAvailable"] = 9] = "Result_DeviceIsNotAvailable";
        BluetoothErrorCode[BluetoothErrorCode["Result_DoesNotExist"] = 10] = "Result_DoesNotExist";
        BluetoothErrorCode[BluetoothErrorCode["Result_Failure"] = 11] = "Result_Failure";
        BluetoothErrorCode[BluetoothErrorCode["Result_InProgress"] = 12] = "Result_InProgress";
        BluetoothErrorCode[BluetoothErrorCode["Result_MethodNotFound"] = 13] = "Result_MethodNotFound";
        BluetoothErrorCode[BluetoothErrorCode["Result_NoDiscoveryStarted"] = 14] = "Result_NoDiscoveryStarted";
        BluetoothErrorCode[BluetoothErrorCode["Result_NotConnected"] = 15] = "Result_NotConnected";
        BluetoothErrorCode[BluetoothErrorCode["Result_NotReady"] = 16] = "Result_NotReady";
        BluetoothErrorCode[BluetoothErrorCode["Result_SignatureMismatch"] = 17] = "Result_SignatureMismatch";
        BluetoothErrorCode[BluetoothErrorCode["Result_Timeout"] = 18] = "Result_Timeout";
        BluetoothErrorCode[BluetoothErrorCode["Result_OTAConnParams"] = 19] = "Result_OTAConnParams";
        BluetoothErrorCode[BluetoothErrorCode["Result_OTAImageActivate"] = 20] = "Result_OTAImageActivate";
        BluetoothErrorCode[BluetoothErrorCode["Result_OTAImageFile"] = 21] = "Result_OTAImageFile";
        BluetoothErrorCode[BluetoothErrorCode["Result_OTAImageReceive"] = 22] = "Result_OTAImageReceive";
        BluetoothErrorCode[BluetoothErrorCode["Result_OTAImageReport"] = 23] = "Result_OTAImageReport";
        BluetoothErrorCode[BluetoothErrorCode["Result_OTAImageVerify"] = 24] = "Result_OTAImageVerify";
        BluetoothErrorCode[BluetoothErrorCode["Result_OTAImageWrite"] = 25] = "Result_OTAImageWrite";
        BluetoothErrorCode[BluetoothErrorCode["Result_OTAReset"] = 26] = "Result_OTAReset";
        BluetoothErrorCode[BluetoothErrorCode["Result_OTAInit"] = 27] = "Result_OTAInit";
        BluetoothErrorCode[BluetoothErrorCode["Result_OTAInProgress"] = 28] = "Result_OTAInProgress";
        BluetoothErrorCode[BluetoothErrorCode["Result_OTALowBattery"] = 29] = "Result_OTALowBattery";
        BluetoothErrorCode[BluetoothErrorCode["Result_OTANotAvailable"] = 30] = "Result_OTANotAvailable";
        BluetoothErrorCode[BluetoothErrorCode["Result_OTANotConnected"] = 31] = "Result_OTANotConnected";
        BluetoothErrorCode[BluetoothErrorCode["Result_OTAServices"] = 32] = "Result_OTAServices";
        BluetoothErrorCode[BluetoothErrorCode["Result_OTAStartDFU"] = 34] = "Result_OTAStartDFU";
        BluetoothErrorCode[BluetoothErrorCode["ResultMAX"] = 35] = "ResultMAX";
    })(BluetoothErrorCode = exports.BluetoothErrorCode || (exports.BluetoothErrorCode = {}));
    var BluetoothError = (function (_super) {
        __extends(BluetoothError, _super);
        function BluetoothError(message, code) {
            var _this = _super.call(this, message) || this;
            _this.errorID = 0x603;
            _this.code = code;
            return _this;
        }
        return BluetoothError;
    }(public_1.BaseError));
    exports.BluetoothError = BluetoothError;
    var Bluetooth = (function () {
        function Bluetooth() {
        }
        Bluetooth_1 = Bluetooth;
        Bluetooth.deviceIsRemoteControl = function (deviceName) {
            return this.bluetoothRemoteControlDeviceNames.indexOf(deviceName) >= 0;
        };
        Bluetooth.getState = function () {
            return bluebird.try(function () {
                var bluetooth = public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance);
                var state = bluetooth.methods.GetState();
                return {
                    state: state,
                    info: bluetooth.methods.getBluetoothStateInfo(bluetooth.object, state)
                };
            });
        };
        Bluetooth.connectNewRemoteControl = function (deviceNameWhitelist) {
            if (deviceNameWhitelist === void 0) { deviceNameWhitelist = this.bluetoothRemoteControlDeviceNames; }
            return Bluetooth_1.stopScan()
                .catch(function (error) { return public_1.Logger.info(function (log) { return log(public_1.LogMsg("Stop scan failed: " + error, Bluetooth_1.TAG)); }); })
                .then(function () { return Bluetooth_1.connectNewDevice(deviceNameWhitelist); });
        };
        Bluetooth.connectNewKeyboard = function () {
            return Bluetooth_1.connectNewDevice(["Keyboard"]);
        };
        Bluetooth.connectNewDevice = function (deviceNameWhitelist, ingnoreCase) {
            if (ingnoreCase === void 0) { ingnoreCase = true; }
            var bluetooth = public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance);
            return new bluebird(function (resolve, reject) {
                var timeoutHandler = setTimeout(function () { return releaseFunc({ error: new Error("Bluetooth Scan timed out after " + Bluetooth_1.ScanTimeoutMs + " ms.") }); }, Bluetooth_1.ScanTimeoutMs);
                var deviceFoundCloseable = bluetooth.events.onBluetoothDeviceFound(function (event) {
                    var deviceNamesLowerCase = deviceNameWhitelist.map(function (deviceName) { return ingnoreCase ? deviceName.toLowerCase() : deviceName; });
                    var foundDeviceNameLowerCase = ingnoreCase ? event.name.toLowerCase() : event.name;
                    if (deviceNamesLowerCase.some(function (deviceName) { return foundDeviceNameLowerCase.indexOf(deviceName) >= 0; })) {
                        public_1.Logger.info(function (log) { return log(public_1.LogMsg("Device name found in device names-whitelist: " + deviceNameWhitelist.join("|") + " - try to pair device ...", Bluetooth_1.TAG)); });
                        Bluetooth_1.getAllDevices()
                            .then(function (allDevices) {
                            if (!allDevices.some(function (device) { return device.Address === event.mac; })) {
                                Bluetooth_1.stopScan()
                                    .then(function () { return Bluetooth_1.pairDevice(event.mac)
                                    .then(function (pairedDevice) { return releaseFunc({ device: pairedDevice }); })
                                    .catch(function (error) { return public_1.Logger.error(function (log) { return log(public_1.LogMsg("Pairing device MAC:" + event.mac + " failed: " + JSON.stringify(error), Bluetooth_1.TAG)); }); }); });
                            }
                            else {
                                public_1.Logger.info(function (log) { return log(public_1.LogMsg("Device MAC: " + event.mac + " already in the list of paired devices.", Bluetooth_1.TAG)); });
                            }
                        });
                    }
                });
                var releaseFunc = function (args) {
                    Bluetooth_1.stopScan()
                        .finally(function () {
                        deviceFoundCloseable();
                        clearTimeout(timeoutHandler);
                        if (args.error) {
                            reject(args.error);
                        }
                        else {
                            resolve(args.device);
                        }
                    });
                };
                Bluetooth_1.startScan()
                    .catch(function (error) { return releaseFunc({ error: new Error("Error starting scan: " + JSON.stringify(error)) }); });
            });
        };
        Bluetooth.scanForDevices = function (durationSeconds) {
            if (durationSeconds === void 0) { durationSeconds = 120; }
            var bluetooth = public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance);
            return new bluebird(function (resolve, reject) {
                var foundDevices = [];
                var durationTimeoutHandler;
                var onBluetoothScanFinishedCloseable = bluetooth.events.onBluetoothScanFinished(function (e) { return releaseFunc({ devices: foundDevices }); });
                var onBluetoothDeviceFoundCloseable = bluetooth.events.onBluetoothDeviceFound(function (e) { return foundDevices.push({ Name: e.name, Address: e.mac }); });
                var releaseFunc = function (args) {
                    onBluetoothScanFinishedCloseable();
                    onBluetoothDeviceFoundCloseable();
                    if (durationTimeoutHandler) {
                        clearTimeout(durationTimeoutHandler);
                    }
                    if (args.error) {
                        reject(args.error);
                    }
                    else {
                        resolve(args.devices);
                    }
                };
                if (durationSeconds) {
                    durationTimeoutHandler = setTimeout(function () {
                        Bluetooth_1.stopScan()
                            .catch(function (error) { return releaseFunc({ error: error }); });
                    }, durationSeconds * 1000);
                }
                Bluetooth_1.startScan()
                    .catch(function (error) { return releaseFunc(error); });
            });
        };
        Bluetooth.startScan = function () {
            var bluetooth = public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance);
            return new bluebird(function (resolve, reject) {
                var timeoutHandler = setTimeout(function () { return releaseFunc(new Error("start scan interrupted after " + Bluetooth_1.StartScanTimeoutMs)); }, Bluetooth_1.StartScanTimeoutMs);
                var onBluetoothScanStartedCloseable = bluetooth.events.onBluetoothScanStarted(function (e) { return releaseFunc(); });
                var onBluetoothErrorCloseable = bluetooth.events.onBluetoothError(function (e) {
                    if (e.func.toLowerCase() == "startscan") {
                        releaseFunc({ error: new BluetoothError(e.desc, e.code) });
                    }
                });
                var releaseFunc = function (error) {
                    onBluetoothErrorCloseable();
                    onBluetoothScanStartedCloseable();
                    clearTimeout(timeoutHandler);
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve();
                    }
                };
                Bluetooth_1.getState()
                    .then(function (currentState) {
                    if (currentState.state != bluetooth.object.BT_STATE_SCANNING) {
                        bluetooth.methods.StartScan();
                    }
                    else {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Cannot start scan because it is is already running. Current state is " + currentState.info + ".", Bluetooth_1.TAG)); });
                        releaseFunc();
                    }
                });
            });
        };
        Bluetooth.stopScan = function () {
            var bluetooth = public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance);
            return new bluebird(function (resolve, reject) {
                var timeoutHandler = setTimeout(function () {
                    return releaseFunc(new Error("stop scan interrupted after " + Bluetooth_1.StopScanTimeoutMs));
                }, Bluetooth_1.StopScanTimeoutMs);
                var onBluetoothScanFinishedCloseable = bluetooth.events.onBluetoothScanFinished(function (e) { return releaseFunc(); });
                var onBluetoothErrorCloseable = bluetooth.events.onBluetoothError(function (e) {
                    if (e.func.toLowerCase() == "stopscan") {
                        releaseFunc({ error: new BluetoothError(e.desc, e.code) });
                    }
                });
                var releaseFunc = function (error) {
                    onBluetoothErrorCloseable();
                    onBluetoothScanFinishedCloseable();
                    clearTimeout(timeoutHandler);
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve();
                    }
                };
                Bluetooth_1.getState()
                    .then(function (currentState) {
                    if (currentState.state == bluetooth.object.BT_STATE_SCANNING) {
                        bluetooth.methods.StopScan();
                    }
                    else {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Unable to stopScan because current state is " + currentState.info + ".", Bluetooth_1.TAG)); });
                        releaseFunc();
                    }
                })
                    .catch(function (error) { return releaseFunc(new Error("Unable to get state: " + JSON.stringify(error))); });
            });
        };
        Bluetooth.isScanOngoing = function () {
            var bluetooth = public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance);
            return Bluetooth_1.getState()
                .then(function (currentState) { return currentState.state == bluetooth.object.BT_STATE_SCANNING; });
        };
        Bluetooth.pairDevice = function (macAddress) {
            var bluetooth = public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance);
            return new bluebird(function (resolve, reject) {
                var timeoutHandler = setTimeout(function () {
                    return resolveFunc({ error: new Error("Pairing for MAC:" + macAddress + " was interrupted after " + Bluetooth_1.PairTimeoutMs + " ms.") });
                }, Bluetooth_1.PairTimeoutMs);
                var onBluetoothDevicePairedCloseable = bluetooth.events.onBluetoothDevicePaired(function (e) {
                    Bluetooth_1.getDevice(e.mac)
                        .then(function (device) { return resolveFunc({ device: device }); })
                        .catch(function (error) { return resolveFunc({ error: error }); });
                });
                var onBluetoothErrorCloseable = bluetooth.events.onBluetoothError(function (e) {
                    if (e.func.toLowerCase() == "pair") {
                        resolveFunc({ error: new BluetoothError(e.desc, e.code) });
                    }
                });
                var resolveFunc = function (args) {
                    onBluetoothDevicePairedCloseable();
                    onBluetoothErrorCloseable();
                    clearTimeout(timeoutHandler);
                    if (args.error) {
                        reject(args.error);
                    }
                    else {
                        resolve(args.device);
                    }
                };
                bluetooth.methods.Pair(macAddress);
            });
        };
        Bluetooth.removeDevice = function (macAddress) {
            var bluetooth = public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance);
            return new bluebird(function (resolve, reject) {
                var timeoutHandler = setTimeout(function () {
                    return resolveFunc(new Error("Removing device :" + macAddress + " failed because of timeout after " + Bluetooth_1.RemoveTimeoutMs + " ms."));
                }, Bluetooth_1.RemoveTimeoutMs);
                var onBluetoothDeviceRemovedCloseable = bluetooth.events.onBluetoothDeviceRemoved(function (e) {
                    if (e.mac === macAddress) {
                        public_1.Logger.info(function (log) { return log(public_1.LogMsg("Successfully removed device " + macAddress, Bluetooth_1.TAG)); });
                        resolveFunc();
                    }
                });
                var resolveFunc = function (error) {
                    onBluetoothDeviceRemovedCloseable();
                    clearTimeout(timeoutHandler);
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve();
                    }
                };
                bluetooth.methods.Remove(macAddress);
            });
        };
        Bluetooth.removeAllDevices = function () {
            return Bluetooth_1.getAllDevices()
                .then(function (devices) { return devices.map(function (device) { return Bluetooth_1.removeDevice(device.Address); }); })
                .then(function (removePromises) { return bluebird.all(removePromises); });
        };
        Bluetooth.remove = function (macAddress) {
            return bluebird.try(function () { return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).methods.Remove(macAddress); });
        };
        Bluetooth.getAllDevices = function () {
            return bluebird.try(function () { return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).methods.GetDevices(); });
        };
        Bluetooth.getConnectedRemoteControl = function () {
            return Bluetooth_1.getRemoteControlDevices()
                .then(function (remoteControlDevices) { return remoteControlDevices.some(function (rc) { return !!rc.isConnected; }) ? remoteControlDevices.filter(function (rc) { return rc.isConnected; })[0] : undefined; });
        };
        Bluetooth.getRemoteControlDevices = function () {
            return Bluetooth_1.getAllDevices().then(function (allDevices) { return allDevices.filter(function (device) { return Bluetooth_1.deviceIsRemoteControl(device.Name); }); });
        };
        Bluetooth.getDevice = function (macAddress) {
            return bluebird.try(function () {
                var bluetooth = public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance);
                var pairedDevices = bluetooth.methods.GetDevices();
                return pairedDevices.some(function (device) { return device.Address === macAddress; }) ? pairedDevices.filter(function (device) { return device.Address === macAddress; })[0] : undefined;
            });
        };
        Bluetooth.updateFirmware = function (macAddress) {
            return bluebird.try(function () { return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).methods.UpdateFirmware(macAddress); });
        };
        Bluetooth.logDevice = function (device) {
            public_1.Logger.debug(function (log) {
                log(public_1.LogMsg("BLUETOOTH DEVICE:", Bluetooth_1.TAG));
                log(public_1.LogMsg("----------------------------------------------------------------------------------", Bluetooth_1.TAG));
                log(public_1.LogMsg("Name: " + device.Name, Bluetooth_1.TAG));
                log(public_1.LogMsg("ID: " + device.ID, Bluetooth_1.TAG));
                log(public_1.LogMsg("Address: " + device.Address, Bluetooth_1.TAG));
                log(public_1.LogMsg("ModelNumber: " + device.ModelNumber, Bluetooth_1.TAG));
                log(public_1.LogMsg("isConnected: " + device.isConnected, Bluetooth_1.TAG));
                log(public_1.LogMsg("BatteryLevel: " + device.BatteryLevel, Bluetooth_1.TAG));
                log(public_1.LogMsg("CertificationData: " + device.CertificationData, Bluetooth_1.TAG));
                log(public_1.LogMsg("FW_UpdateAvailable: " + device.FW_UpdateAvailable, Bluetooth_1.TAG));
                log(public_1.LogMsg("FW_Version: " + device.FW_Version, Bluetooth_1.TAG));
                log(public_1.LogMsg("HW_Version: " + device.HW_Version, Bluetooth_1.TAG));
                log(public_1.LogMsg("PnP_ID: " + device.PnP_ID, Bluetooth_1.TAG));
                log(public_1.LogMsg("SW_Version: " + device.SW_Version, Bluetooth_1.TAG));
                log(public_1.LogMsg("SystemID: " + device.SystemID, Bluetooth_1.TAG));
            });
        };
        var Bluetooth_1;
        Bluetooth.ScanTimeoutMs = 90 * 1000;
        Bluetooth.PairTimeoutMs = 30 * 1000;
        Bluetooth.RemoveTimeoutMs = 10 * 1000;
        Bluetooth.StopScanTimeoutMs = 30 * 1000;
        Bluetooth.StartScanTimeoutMs = 30 * 1000;
        Bluetooth.bluetoothRemoteControlDeviceNames = [
            "STB-3038RC1",
            "DTG5-RCU1"
        ];
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "getState", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "connectNewRemoteControl", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "connectNewKeyboard", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "connectNewDevice", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "scanForDevices", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "startScan", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "stopScan", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "isScanOngoing", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "pairDevice", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "removeDevice", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "removeAllDevices", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "remove", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "getAllDevices", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "getConnectedRemoteControl", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "getRemoteControlDevices", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "getDevice", null);
        __decorate([
            public_1.log2(function () { return ({ name: Bluetooth_1.TAG }); })
        ], Bluetooth, "updateFirmware", null);
        Bluetooth = Bluetooth_1 = __decorate([
            public_1.logTag()
        ], Bluetooth);
        return Bluetooth;
    }());
    exports.Bluetooth = Bluetooth;
});
//# sourceMappingURL=applicationclient.bluetooth.js.map