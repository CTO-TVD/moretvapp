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
define(["require", "exports", "./zacnetwork", "src/src-de-telekom/public", "./eventgenerator"], function (require, exports, zacnetwork_1, public_1, eventgenerator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacNetworks = void 0;
    var ZacNetworks = (function (_super) {
        __extends(ZacNetworks, _super);
        function ZacNetworks() {
            var _this = _super.call(this) || this;
            _this.PROPERTY_TYPE_LINK = 0;
            _this.KEY_INTERFACE_TYPE = "KEY_INTERFACE_TYPE";
            _this.INTERFACE_TYPE_ETHERNET = 0;
            _this.KEY_MAC_ADDRESS = "KEY_MAC_ADDRESS";
            _this.KEY_LINK_STATUS = "KEY_LINK_STATUS";
            _this.STATUS_UP = 1;
            _this.STATUS_DOWN = 0;
            _this.STATUS_CONNECTED = 1;
            _this.STATUS_DISCONNECTED = 0;
            _this.PROPERTY_TYPE_NETWORK = 1;
            _this.KEY_IPV4_ADDRESS_MODE = "KEY_IPV4_ADDRESS_MODE";
            _this.MODE_DHCP = 0;
            _this.MODE_STATIC = 1;
            _this.KEY_IPV4_ADDRESS = "KEY_IPV4_ADDRESS";
            _this.KEY_IPV4_NETMASK = "KEY_IPV4_NETMASK";
            _this.KEY_IPV4_GATEWAY = "KEY_IPV4_GATEWAY";
            _this.KEY_IPV4_DNS = "KEY_IPV4_DNS";
            _this.KEY_IPV4_USR_DNS = "KEY_IPV4_USR_DNS";
            _this.KEY_CONNECTION_STATUS = "KEY_CONNECTION_STATUS";
            _this.KEY_DHCP_OPTIONS = "KEY_DHCP_OPTIONS";
            _this.KEY_LINK_SPEED = "KEY_LINK_SPEED";
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Created new ZacNetworks instance", _this.getLogSource())); });
            _this.networks = [];
            var network = new zacnetwork_1.ZacNetwork(_this);
            network.name = "local network";
            network.linkStatus = true;
            network.networkStatus = true;
            network.type = "LAN";
            _this.networks.push(network);
            return _this;
        }
        ZacNetworks_1 = ZacNetworks;
        ZacNetworks.prototype.getEventManagerId = function () { return "ZacNetworks"; };
        ZacNetworks.prototype.getLogSource = function () { return ZacNetworks_1.TAG; };
        ZacNetworks.prototype.GetNetworkByName = function (name) {
            return null;
        };
        ZacNetworks.prototype.WakeOnLan = function (mac) {
            return 0;
        };
        var ZacNetworks_1;
        ZacNetworks = ZacNetworks_1 = __decorate([
            public_1.logTag()
        ], ZacNetworks);
        return ZacNetworks;
    }(eventgenerator_1.EventGenerator));
    exports.ZacNetworks = ZacNetworks;
});
//# sourceMappingURL=zacnetworks.js.map