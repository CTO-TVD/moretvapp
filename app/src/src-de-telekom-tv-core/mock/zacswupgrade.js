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
    exports.ZacSwUpgrade = void 0;
    var ZacSwUpgrade = (function (_super) {
        __extends(ZacSwUpgrade, _super);
        function ZacSwUpgrade() {
            var _this = _super.call(this) || this;
            _this.Constants = {
                SW_UPGRADE_COMPONENT_UNKNOWN: 6,
                SW_UPGRADE_COMPONENT_BOOT_IMAGE: 7,
                SW_UPGRADE_COMPONENT_BOOT_LOADER: 8,
                SW_UPGRADE_COMPONENT_FRONT_PANEL: 9,
                SW_UPGRADE_COMPONENT_FRONT_PANEL_FONT: 10,
                SW_UPGRADE_COMPONENT_SPLASH_SCREEN: 11,
                SW_UPGRADE_COMPONENT_SECURITY_FIRMWARE: 12,
                SW_UPGRADE_COMPONENT_POWER_FIRMWARE: 13,
                SW_UPGRADE_COMPONENT_CHANNEL_LOGOS: 14
            };
            return _this;
        }
        ZacSwUpgrade_1 = ZacSwUpgrade;
        ZacSwUpgrade.prototype.getEventManagerId = function () { return "ZacSwUpgrade"; };
        ZacSwUpgrade.prototype.getLogSource = function () { return ZacSwUpgrade_1.TAG; };
        ZacSwUpgrade.prototype.Search = function (options) {
            var _this = this;
            setTimeout(function () {
                _this.sendSwUpgradeSearchResultEvent();
            }, 0);
            return 0;
        };
        ZacSwUpgrade.prototype.sendSwUpgradeSearchResultEvent = function () {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("send jszacSwUpgradeSearchResultEvent", ZacSwUpgrade_1.TAG)); });
            var event = { version: 57, available: false, forced: false, versions: undefined };
            this.eventManager.broadcast("SearchResult", event);
        };
        var ZacSwUpgrade_1;
        ZacSwUpgrade = ZacSwUpgrade_1 = __decorate([
            public_1.logTag()
        ], ZacSwUpgrade);
        return ZacSwUpgrade;
    }(eventgenerator_1.EventGenerator));
    exports.ZacSwUpgrade = ZacSwUpgrade;
});
//# sourceMappingURL=zacswupgrade.js.map