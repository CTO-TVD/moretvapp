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
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "src/src-de-telekom-tv-core/public", "./tvms.messagereader", "src/src-de-telekom-react/public"], function (require, exports, bluebird, public_1, public_2, tvms_messagereader_1, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TvmsService = void 0;
    var TvmsService = (function (_super) {
        __extends(TvmsService, _super);
        function TvmsService() {
            var _this = _super.call(this) || this;
            var power = public_2.ServiceClientZac.getPower(public_2.ServiceClientContextZac.instance);
            power.events.onPowerStateChanged(function (event) {
                return _this.tvMessageLifecycle(event.state);
            });
            return _this;
        }
        TvmsService_1 = TvmsService;
        TvmsService.prototype.handleTvmsMessage = function (event) {
            public_3.DiagnosticNotificationComponent.notify("TVMS Message:", JSON.stringify(event));
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("TVMS message:  " + JSON.stringify(event), TvmsService_1.TAG)); });
            var powerstate = public_2.ApplicationClient.powerManagement.getZacPowerState();
            if (powerstate === public_2.ServiceClientContextZac.instance.zacAPI.System.Power.POWER_STANDBY ||
                powerstate === public_2.ServiceClientContextZac.instance.zacAPI.System.Power.POWER_STANDBY_PENDING) {
                this.saveEventUntilWakeup(event);
            }
            else {
                tvms_messagereader_1.TvmsMessageReader.showTvMessage(event);
            }
            return false;
        };
        TvmsService.prototype.saveEventUntilWakeup = function (event) {
            public_2.ApplicationClient.userStorage.getTvMessageEvents()
                .then(function (events) {
                if (events) {
                    events.push(event);
                    return public_2.ApplicationClient.userStorage.setTvMessageEvents(events);
                }
                return bluebird.resolve(null);
            })
                .catch(function (error) {
                public_1.Logger.error(function (log) { return log(public_1.LogMsg("Error saving TVMS message:  " + JSON.stringify(event) + ". Error: " + error, TvmsService_1.TAG)); });
                public_1.ErrorManager.catch(error, TvmsService_1, 0x01);
            });
        };
        TvmsService.prototype.tvMessageLifecycle = function (state) {
            if (state == public_2.ServiceClientContextZac.instance.zacAPI.System.Power.POWER_ACTIVE) {
                public_2.ApplicationClient.userStorage.getTvMessageEvents()
                    .then(function (tvMessageEvents) {
                    if (tvMessageEvents && tvMessageEvents.length > 0) {
                        var promise = tvms_messagereader_1.TvmsMessageReader.showTvMessage(tvMessageEvents[0]);
                        var _loop_1 = function (i) {
                            promise = promise.then(function () { return tvms_messagereader_1.TvmsMessageReader.showTvMessage(tvMessageEvents[i]); });
                        };
                        for (var i = 1; i < tvMessageEvents.length; i++) {
                            _loop_1(i);
                        }
                        promise.then(function () { return public_2.ApplicationClient.userStorage.setTvMessageEvents([]); })
                            .catch(public_1.ErrorManager.catchFunc(TvmsService_1, 0x02));
                    }
                })
                    .catch(function (error) {
                    public_1.ErrorManager.catch(error, TvmsService_1, 0x03);
                });
            }
        };
        var TvmsService_1;
        TvmsService.classID = 0x77D;
        TvmsService = TvmsService_1 = __decorate([
            public_1.logTag()
        ], TvmsService);
        return TvmsService;
    }(public_3.ReactBaseService));
    exports.TvmsService = TvmsService;
});
//# sourceMappingURL=tvms.service.js.map