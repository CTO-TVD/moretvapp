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
define(["require", "exports", "src/src-de-telekom/public", "./eventgenerator"], function (require, exports, public_1, eventgenerator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacPower = void 0;
    var ZacStandbyHandler = (function (_super) {
        __extends(ZacStandbyHandler, _super);
        function ZacStandbyHandler() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZacStandbyHandler_1 = ZacStandbyHandler;
        ZacStandbyHandler.prototype.getEventManagerId = function () { return "PowerStandbyPendingEvent"; };
        ZacStandbyHandler.prototype.getLogSource = function () { return ZacStandbyHandler_1.TAG; };
        ZacStandbyHandler.prototype.KeepAlive = function (keepAlive) {
            return 0;
        };
        ZacStandbyHandler.prototype.ResetStandbyHandlerCountdown = function () {
            return 0;
        };
        ZacStandbyHandler.prototype.StandbyOk = function () {
            return 0;
        };
        var ZacStandbyHandler_1;
        ZacStandbyHandler = ZacStandbyHandler_1 = __decorate([
            public_1.logTag()
        ], ZacStandbyHandler);
        return ZacStandbyHandler;
    }(eventgenerator_1.EventGenerator));
    var ZacPower = (function (_super) {
        __extends(ZacPower, _super);
        function ZacPower() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.POWER_ACTIVE = 0;
            _this.POWER_FAKE_STANDBY = 1;
            _this.POWER_STANDBY = 2;
            _this.POWER_STANDBY_PENDING = 3;
            _this.POWER_STANDBY_PENDING_ABORTED = 4;
            _this.WAKEUPREASON_UNKNOWN = 0;
            _this.WAKEUPREASON_PLUGIN = 1;
            _this.WAKEUPREASON_BUTTON = 2;
            _this.WAKEUPREASON_TIMER = 3;
            _this.WAKEUPREASON_NETWORK = 4;
            _this.currentState = _this.POWER_ACTIVE;
            _this.wakeupReason = _this.WAKEUPREASON_BUTTON;
            return _this;
        }
        ZacPower_1 = ZacPower;
        ZacPower.prototype.getEventManagerId = function () { return "PowerStateChangedEvent"; };
        ZacPower.prototype.getLogSource = function () { return ZacPower_1.TAG; };
        ZacPower.prototype.sendPowerStateChangedEvent = function (state, delayMs) {
            var _this = this;
            setTimeout(function () {
                _this.currentState = state;
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Send PowerStateChangedEvent", ZacPower_1.TAG)); });
                var event = { state: state, standbyCapabilities: {} };
                _this.eventManager.broadcast("PowerStateChanged", event);
            }, delayMs != null ? delayMs : 0);
        };
        ZacPower.prototype.GetState = function () {
            return this.currentState;
        };
        ZacPower.prototype.CreateStandbyHandler = function () {
            if (this.standbyHandler == null) {
                this.standbyHandler = new ZacStandbyHandler();
            }
            return this.standbyHandler;
        };
        ZacPower.prototype.GetWakeupReason = function () {
            return this.wakeupReason;
        };
        ZacPower.prototype.Reboot = function (force) {
            return 0;
        };
        ZacPower.prototype.SetState = function (state) {
            this.sendPowerStateChangedEvent(state, 3000);
            return 0;
        };
        var ZacPower_1;
        ZacPower = ZacPower_1 = __decorate([
            public_1.logTag()
        ], ZacPower);
        return ZacPower;
    }(eventgenerator_1.EventGenerator));
    exports.ZacPower = ZacPower;
});
//# sourceMappingURL=zacpower.js.map