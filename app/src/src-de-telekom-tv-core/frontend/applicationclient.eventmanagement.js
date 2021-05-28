var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "../backend/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EventManagement = void 0;
    var EventManagement = (function () {
        function EventManagement() {
        }
        EventManagement_1 = EventManagement;
        EventManagement.broadcastGlobalUIEvent = function (type) {
            return EventManagement_1.globaleUIEventManager.broadcast("globalUIEvent", type);
        };
        EventManagement.onGlobalUIEvent = function (evtHandlerFunction) {
            return EventManagement_1.globaleUIEventManager.on("globalUIEvent", evtHandlerFunction, EventManagement_1.TAG);
        };
        EventManagement.onDataUpdated = function (evtHandlerFunction) {
            return public_2.ServiceClientContextZosa.instance.serviceClientZosa.onDataUpdated(evtHandlerFunction);
        };
        EventManagement.onMessage = function (evtHandlerFunction) {
            return public_2.ServiceClientContextZosa.instance.serviceClientZosa.onMessage(evtHandlerFunction);
        };
        EventManagement.onParentalBlockingChanged = function (evtHandlerFunction) {
            return public_2.ServiceClientContextZosa.instance.serviceClientZosa.onParentalBlockingChanged(evtHandlerFunction);
        };
        EventManagement.onRecordingBandwidthConflict = function (evtHandlerFunction) {
            return public_2.ServiceClientContextZosa.instance.serviceClientZosa.onRecordingBandwidthConflict(evtHandlerFunction);
        };
        EventManagement.onServiceProviderSessionError = function (evtHandlerFunction) {
            return public_2.ServiceClientContextZosa.instance.serviceClientZosa.onServiceProviderSessionError(evtHandlerFunction);
        };
        EventManagement.onSessionError = function (evtHandlerFunction) {
            return public_2.ServiceClientContextZosa.instance.serviceClientZosa.onSessionError(evtHandlerFunction);
        };
        EventManagement.onCustomApiCreateVod = function (evtHandlerFunction) {
            return public_2.ServiceClientContextZosa.instance.serviceClientZosa.onCustomApiCreateVod(evtHandlerFunction);
        };
        EventManagement.onCustomApiMasterStb = function (evtHandlerFunction) {
            return public_2.ServiceClientContextZosa.instance.serviceClientZosa.onCustomApiMasterStb(evtHandlerFunction);
        };
        EventManagement.onCustomApiDFCC = function (evtHandlerFunction) {
            return public_2.ServiceClientContextZosa.instance.serviceClientZosa.onCustomApiDFCC(evtHandlerFunction);
        };
        EventManagement.onAuthenticationProcessError = function (evtHandlerFunction) {
            return public_2.ServiceClientAuthenticationZosa.onAuthenticationProcessError(evtHandlerFunction);
        };
        EventManagement.onBluetoothDeviceConnected = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothDeviceConnected(evtHandlerFunction);
        };
        EventManagement.onBluetoothDeviceDisconnected = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothDeviceDisconnected(evtHandlerFunction);
        };
        EventManagement.onBluetoothDeviceFound = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothDeviceFound(evtHandlerFunction);
        };
        EventManagement.onBluetoothDevicePaired = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothDevicePaired(evtHandlerFunction);
        };
        EventManagement.onBluetoothDeviceRemoved = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothDeviceRemoved(evtHandlerFunction);
        };
        EventManagement.onBluetoothError = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothError(evtHandlerFunction);
        };
        EventManagement.onBluetoothManagerTerminated = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothManagerTerminated(evtHandlerFunction);
        };
        EventManagement.onBluetoothScanFinished = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothScanFinished(evtHandlerFunction);
        };
        EventManagement.onBluetoothScanStarted = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothScanStarted(evtHandlerFunction);
        };
        EventManagement.onBluetoothStateChanged = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothStateChanged(evtHandlerFunction);
        };
        EventManagement.onBluetoothOTAStarted = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothOTAStarted(evtHandlerFunction);
        };
        EventManagement.onBluetoothOTAProgress = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothOTAProgress(evtHandlerFunction);
        };
        EventManagement.onBluetoothOTAFinished = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothOTAFinished(evtHandlerFunction);
        };
        EventManagement.onBluetoothRecoveryPairingStarted = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothRecoveryPairingStarted(evtHandlerFunction);
        };
        EventManagement.onBluetoothRecoveryPairingFinished = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothRecoveryPairingFinished(evtHandlerFunction);
        };
        EventManagement.onBluetoothVoiceSearchStart = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothVoiceSearchStart(evtHandlerFunction);
        };
        EventManagement.onBluetoothVoiceSearchActive = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothVoiceSearchActive(evtHandlerFunction);
        };
        EventManagement.onBluetoothVoiceSearchStop = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothVoiceSearchStop(evtHandlerFunction);
        };
        EventManagement.onBluetoothVoiceSearchError = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getBluetooth(public_2.ServiceClientContextZac.instance).events.onBluetoothVoiceSearchError(evtHandlerFunction);
        };
        var EventManagement_1;
        EventManagement.globaleUIEventManager = new public_1.EventManager();
        EventManagement = EventManagement_1 = __decorate([
            public_1.logTag()
        ], EventManagement);
        return EventManagement;
    }());
    exports.EventManagement = EventManagement;
});
//# sourceMappingURL=applicationclient.eventmanagement.js.map