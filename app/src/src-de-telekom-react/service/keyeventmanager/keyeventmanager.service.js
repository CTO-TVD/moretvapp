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
define(["require", "exports", "../../base/public", "src/src-de-telekom/public", "./keycode.config", "./keyevent.source.PC", "./keyevent.source.FireTV", "./keyevent.source.STB.standby", "./keyevent.source.STB", "./keyevent.source.PC.standby"], function (require, exports, public_1, public_2, keycode_config_1, keyevent_source_PC_1, keyevent_source_FireTV_1, keyevent_source_STB_standby_1, keyevent_source_STB_1, keyevent_source_PC_standby_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVKeyEventManagerService = void 0;
    var TVKeyEventManagerService = (function (_super) {
        __extends(TVKeyEventManagerService, _super);
        function TVKeyEventManagerService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.eventChannel = new public_2.EventChannel();
            _this.autoClose1KeyMs = public_2.Configuration.instance.timings.autoClose1KeyMs || 600000;
            _this.autoClose2KeyMs = public_2.Configuration.instance.timings.autoClose2KeyMs || 15000;
            return _this;
        }
        TVKeyEventManagerService.prototype.onAfter = function (listener, id) {
            return this.eventChannel.onAfter(listener, id);
        };
        TVKeyEventManagerService.prototype.onBefore = function (listener, id) {
            return this.eventChannel.onBefore(listener, id);
        };
        TVKeyEventManagerService.prototype.sendMessage = function (arg) {
            this.eventChannel.sendMessage(arg);
        };
        TVKeyEventManagerService.prototype.resolveVirtualKey = function (virtualKey) {
            var _a;
            return (_a = this.keyEventSource) === null || _a === void 0 ? void 0 : _a.resolveVirtualKey(virtualKey);
        };
        TVKeyEventManagerService.prototype.sendVirtualKey = function (virtualKey) {
            var _a;
            var key = (_a = this.keyEventSource) === null || _a === void 0 ? void 0 : _a.resolveVirtualKey(virtualKey);
            if (key) {
                this.sendMessage(key);
            }
        };
        TVKeyEventManagerService.prototype.registerChannel = function (channel) {
            return this.eventChannel.registerChannel(channel);
        };
        TVKeyEventManagerService.prototype.setSource = function (deviceIsInStadbyMode) {
            var _this = this;
            if (deviceIsInStadbyMode === void 0) { deviceIsInStadbyMode = false; }
            switch (public_2.Configuration.instance.keymap) {
                case "pc":
                    this.keyEventSource = this.getKeyEventSourcePC(deviceIsInStadbyMode);
                    break;
                case "stb":
                    this.keyEventSource = this.getKeyEventSourceStb(deviceIsInStadbyMode);
                    break;
                case "firetv":
                    this.keyEventSource = new keyevent_source_FireTV_1.TVKeyEventSourceFireTV();
                    break;
                default:
                    this.keyEventSource = public_2.Configuration.instance.device.isSetTopBox ?
                        this.getKeyEventSourceStb(deviceIsInStadbyMode) :
                        this.getKeyEventSourcePC(deviceIsInStadbyMode);
            }
            this.keyEventSource.onKeyEvent = function (keyEvent) {
                _this.sendMessage(keyEvent);
                _this.autoClose();
            };
        };
        TVKeyEventManagerService.prototype.getKeyEventSourceStb = function (deviceIsInStadbyMode) {
            return deviceIsInStadbyMode ? new keyevent_source_STB_standby_1.TVKeyEventSourceSTBStandby() : new keyevent_source_STB_1.TVKeyEventSourceSTB();
        };
        TVKeyEventManagerService.prototype.getKeyEventSourcePC = function (deviceIsInStadbyMode) {
            return deviceIsInStadbyMode ? new keyevent_source_PC_standby_1.TVKeyEventSourcePCStandby() : new keyevent_source_PC_1.TVKeyEventSourcePC();
        };
        TVKeyEventManagerService.prototype.autoClose = function () {
            var _this = this;
            clearTimeout(this.autoCloseHandler1);
            this.autoCloseHandler1 = setTimeout(function () {
                var eventAutoCLose = { virtualKey: keycode_config_1.TVKeyCodeConfig.AUTOCLOSE_1_KEY };
                _this.sendMessage(eventAutoCLose);
            }, this.autoClose1KeyMs);
            clearTimeout(this.autoCloseHandler2);
            this.autoCloseHandler2 = setTimeout(function () {
                var eventAutoCLose = { virtualKey: keycode_config_1.TVKeyCodeConfig.AUTOCLOSE_2_KEY };
                _this.sendMessage(eventAutoCLose);
            }, this.autoClose2KeyMs);
        };
        return TVKeyEventManagerService;
    }(public_1.ReactBaseService));
    exports.TVKeyEventManagerService = TVKeyEventManagerService;
});
//# sourceMappingURL=keyeventmanager.service.js.map