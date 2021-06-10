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
define(["require", "exports", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/public"], function (require, exports, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RootRoutingService = void 0;
    var RootRoutingService = (function (_super) {
        __extends(RootRoutingService, _super);
        function RootRoutingService() {
            var _this = _super.call(this) || this;
            _this.startupComponentFirstRun = true;
            _this.stbWasInActiveStandbyMode = false;
            var power = public_2.ServiceClientZac.getPower(public_2.ServiceClientContextZac.instance);
            power.events.onPowerStateChanged(function (event) {
                if (event.state == public_2.ServiceClientContextZac.instance.zacAPI.System.Power.POWER_FAKE_STANDBY) {
                    _this.startupComponentFirstRun = true;
                    _this.stbWasInActiveStandbyMode = true;
                    public_2.ApplicationClient.userStorage.setStartupBootTimeReferenceMs(-1);
                }
            });
            return _this;
        }
        RootRoutingService.classID = 0x777;
        RootRoutingService = __decorate([
            public_3.logTag()
        ], RootRoutingService);
        return RootRoutingService;
    }(public_1.ReactBaseService));
    exports.RootRoutingService = RootRoutingService;
});
//# sourceMappingURL=rootRouting.service.js.map