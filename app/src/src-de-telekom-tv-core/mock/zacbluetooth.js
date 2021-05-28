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
define(["require", "exports", "src/src-de-telekom/public", "./eventgenerator"], function (require, exports, public_1, eventgenerator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacBluetooth = void 0;
    var ZacBluetooth = (function (_super) {
        __extends(ZacBluetooth, _super);
        function ZacBluetooth() {
            var _this = _super.call(this) || this;
            _this.BT_STATE_INIT = 0;
            _this.BT_STATE_PAIRED = 1;
            _this.BT_STATE_PAIRED_NOT_CONNECTED = 2;
            _this.BT_STATE_PAIRING = 3;
            _this.BT_STATE_SCANNING = 4;
            _this.BT_STATE_OTA = 5;
            _this.BT_STATE_TERMINATING = 6;
            _this.bluetoothDevices = [
                ZacBluetooth_1.generateBluetoothDevice(0, "AA:AA:AA:08:AA:FF", "DTG5-RCU1")
            ];
            setTimeout(function () { _this.sendBluetoothDeviceConnectedEvent(_this.bluetoothDevices[0].Address); }, 10000);
            return _this;
        }
        ZacBluetooth_1 = ZacBluetooth;
        ZacBluetooth.prototype.getEventManagerId = function () { return "Bluetooth"; };
        ZacBluetooth.prototype.getLogSource = function () { return ZacBluetooth_1.TAG; };
        ZacBluetooth.prototype.GetState = function () {
            if (this.bluetoothDevices.length > 0) {
                return this.bluetoothDevices.some(function (device) { return !!device.isConnected; }) ? this.BT_STATE_PAIRED : this.BT_STATE_PAIRED_NOT_CONNECTED;
            }
            return this.BT_STATE_INIT;
        };
        ZacBluetooth.prototype.StartScan = function () {
            var _this = this;
            this.sendBluetoothScanStartedEvent();
            this.sendBluetoothStateChangedEvent(this.BT_STATE_SCANNING);
            setTimeout(function () { return _this.sendBluetoothDeviceFoundEvent(); }, 10000);
        };
        ZacBluetooth.prototype.StopScan = function () {
            this.sendBluetoothScanFinishedEvent();
        };
        ZacBluetooth.prototype.Pair = function (MAC_ADDRESS) {
            var _this = this;
            setTimeout(function () {
                _this.bluetoothDevices.push(ZacBluetooth_1.generateBluetoothDevice(_this.bluetoothDevices.length, MAC_ADDRESS, "DTG5-RCU1"));
                _this.sendBluetoothDevicePairedEvent(MAC_ADDRESS);
                setTimeout(function () {
                    _this.sendBluetoothDeviceConnectedEvent(MAC_ADDRESS);
                    _this.sendBluetoothStateChangedEvent(_this.BT_STATE_PAIRED);
                }, 1000);
            }, 1000);
        };
        ZacBluetooth.prototype.Remove = function (MAC_ADDRESS) {
            this.bluetoothDevices = this.bluetoothDevices.filter(function (device) { return device.Address != MAC_ADDRESS; });
        };
        ZacBluetooth.prototype.GetDevices = function () {
            return this.bluetoothDevices;
        };
        ZacBluetooth.generateBluetoothDevice = function (id, mac, name) {
            return {
                ID: id,
                Name: name,
                Address: mac,
                FW_Version: "FW 0.1.0",
                HW_Version: "HW 0.1.0",
                SW_Version: "SW 0.1.0",
                ModelNumber: "Model 01",
                SystemID: "SystemId 01",
                CertificationData: "Certification data",
                PnP_ID: "PnP ID",
                BatteryLevel: 70,
                isConnected: true,
                FW_UpdateAvailable: false
            };
        };
        ZacBluetooth.prototype.UpdateFirmware = function (MAC_ADDRESS) {
            var _this = this;
            if (this.bluetoothDevices.some(function (device) { return device.Address == MAC_ADDRESS; })) {
                this.bluetoothDevices.filter(function (device) { return device.Address == MAC_ADDRESS; })[0].FW_UpdateAvailable = false;
            }
            this.sendBluetoothFirmwareUpdateStartedEvent(MAC_ADDRESS);
            var percentageValue = 0;
            var stepSize = 5;
            var intervallMs = 500;
            var intervalHandle = setInterval(function () {
                percentageValue = percentageValue + stepSize <= 100 ? percentageValue + stepSize : 100;
                _this.sendBluetoothFirmwareUpdateProgressEvent(MAC_ADDRESS, percentageValue);
                if (percentageValue >= 100) {
                    clearInterval(intervalHandle);
                    _this.sendBluetoothFirmwareUpdateFinishedEvent(MAC_ADDRESS);
                    setTimeout(function () { _this.sendBluetoothDeviceConnectedEvent(_this.bluetoothDevices[0].Address); }, 5000);
                }
            }, intervallMs);
        };
        ZacBluetooth.prototype.SetRcsFlag = function (value) {
        };
        ZacBluetooth.prototype.GetRcsFlag = function () {
            return 0;
        };
        ZacBluetooth.prototype.sendBluetoothDeviceFoundEvent = function () {
            var event = {
                mac: "AF:0C:FD:08:AA:FF",
                rssi: "RSSI",
                name: "DTG5-RCU1"
            };
            this.eventManager.broadcast("BT_DEVICE_FOUND", event);
        };
        ZacBluetooth.prototype.sendBluetoothDevicePairedEvent = function (mac) {
            var event = {
                mac: mac
            };
            this.eventManager.broadcast("BT_DEVICE_PAIRED", event);
        };
        ZacBluetooth.prototype.sendBluetoothDeviceConnectedEvent = function (mac) {
            var event = {
                mac: mac
            };
            this.eventManager.broadcast("BT_DEVICE_CONNECTED", event);
        };
        ZacBluetooth.prototype.sendBluetoothScanFinishedEvent = function () {
            this.eventManager.broadcast("BT_SCAN_FINISHED", {});
        };
        ZacBluetooth.prototype.sendBluetoothScanStartedEvent = function () {
            this.eventManager.broadcast("BT_SCAN_STARTED", {});
        };
        ZacBluetooth.prototype.sendBluetoothStateChangedEvent = function (state) {
            var event = {
                state: state
            };
            this.eventManager.broadcast("BT_STATE_CHANGED", event);
        };
        ZacBluetooth.prototype.sendBluetoothFirmwareUpdateStartedEvent = function (mac) {
            var event = { mac: mac };
            this.eventManager.broadcast("BT_OTA_STARTED", event);
        };
        ZacBluetooth.prototype.sendBluetoothFirmwareUpdateProgressEvent = function (mac, progress) {
            var event = { mac: mac, progress: progress };
            this.eventManager.broadcast("BT_OTA_PROGRESS", event);
        };
        ZacBluetooth.prototype.sendBluetoothFirmwareUpdateFinishedEvent = function (mac, result) {
            if (result === void 0) { result = true; }
            var event = { mac: mac, result: result };
            this.eventManager.broadcast("BT_OTA_FINISHED", event);
        };
        var ZacBluetooth_1;
        __decorate([
            public_1.log2(function () { return ({ name: ZacBluetooth_1.TAG }); })
        ], ZacBluetooth.prototype, "sendBluetoothDeviceFoundEvent", null);
        __decorate([
            public_1.log2(function () { return ({ name: ZacBluetooth_1.TAG }); })
        ], ZacBluetooth.prototype, "sendBluetoothDevicePairedEvent", null);
        __decorate([
            public_1.log2(function () { return ({ name: ZacBluetooth_1.TAG }); })
        ], ZacBluetooth.prototype, "sendBluetoothDeviceConnectedEvent", null);
        __decorate([
            public_1.log2(function () { return ({ name: ZacBluetooth_1.TAG }); })
        ], ZacBluetooth.prototype, "sendBluetoothScanFinishedEvent", null);
        __decorate([
            public_1.log2(function () { return ({ name: ZacBluetooth_1.TAG }); })
        ], ZacBluetooth.prototype, "sendBluetoothScanStartedEvent", null);
        __decorate([
            public_1.log2(function () { return ({ name: ZacBluetooth_1.TAG }); })
        ], ZacBluetooth.prototype, "sendBluetoothStateChangedEvent", null);
        __decorate([
            public_1.log2(function () { return ({ name: ZacBluetooth_1.TAG }); })
        ], ZacBluetooth.prototype, "sendBluetoothFirmwareUpdateStartedEvent", null);
        __decorate([
            public_1.log2(function () { return ({ name: ZacBluetooth_1.TAG }); })
        ], ZacBluetooth.prototype, "sendBluetoothFirmwareUpdateProgressEvent", null);
        __decorate([
            public_1.log2(function () { return ({ name: ZacBluetooth_1.TAG }); })
        ], ZacBluetooth.prototype, "sendBluetoothFirmwareUpdateFinishedEvent", null);
        ZacBluetooth = ZacBluetooth_1 = __decorate([
            public_1.logTag()
        ], ZacBluetooth);
        return ZacBluetooth;
    }(eventgenerator_1.EventGenerator));
    exports.ZacBluetooth = ZacBluetooth;
});
//# sourceMappingURL=zacbluetooth.js.map