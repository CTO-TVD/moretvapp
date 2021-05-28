var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/typing/guard"], function (require, exports, public_1, public_2, guard_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticDeviceAction = void 0;
    var DiagnosticDeviceAction = (function () {
        function DiagnosticDeviceAction() {
        }
        DiagnosticDeviceAction_1 = DiagnosticDeviceAction;
        DiagnosticDeviceAction.getStandbyTimeMs = function (deviceActionEvents) {
            var powerStateStandbyEvent = deviceActionEvents.filter(function (event) { return event.data == public_2.DeviceActionEventType.PowerStateStandby; })[0];
            var powerStateActiveEvent = deviceActionEvents.filter(function (event) { return event.data == public_2.DeviceActionEventType.PowerStateActive; })[0];
            if (!powerStateStandbyEvent || guard_1.Guard.isUndefined(powerStateStandbyEvent.timestamp))
                return undefined;
            return powerStateActiveEvent && guard_1.Guard.isNumber(powerStateActiveEvent.timestamp) ?
                powerStateActiveEvent.timestamp - powerStateStandbyEvent.timestamp :
                new Date().valueOf() - powerStateStandbyEvent.timestamp;
        };
        var DiagnosticDeviceAction_1;
        __decorate([
            public_1.log2(function () { return ({ name: DiagnosticDeviceAction_1.TAG }); })
        ], DiagnosticDeviceAction, "getStandbyTimeMs", null);
        DiagnosticDeviceAction = DiagnosticDeviceAction_1 = __decorate([
            public_1.logTag()
        ], DiagnosticDeviceAction);
        return DiagnosticDeviceAction;
    }());
    exports.DiagnosticDeviceAction = DiagnosticDeviceAction;
});
//# sourceMappingURL=diagnostic.deviceaction.js.map