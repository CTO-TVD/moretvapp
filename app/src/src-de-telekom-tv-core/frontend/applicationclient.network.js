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
define(["require", "exports", "src/src-de-telekom/public", "../backend/public"], function (require, exports, public_1, backend) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LinkProperties = exports.NetworkProperties = exports.Ipv4AddressMode = exports.NetworkConnectionState = exports.LinkState = exports.NetworkInterfaceType = exports.Network = exports.NetworkError = exports.NetworkErrorReason = void 0;
    var NetworkErrorReason;
    (function (NetworkErrorReason) {
        NetworkErrorReason[NetworkErrorReason["Unknown"] = 0] = "Unknown";
        NetworkErrorReason[NetworkErrorReason["LinkDisconnected"] = 1] = "LinkDisconnected";
        NetworkErrorReason[NetworkErrorReason["NetworkDisconnected"] = 2] = "NetworkDisconnected";
    })(NetworkErrorReason = exports.NetworkErrorReason || (exports.NetworkErrorReason = {}));
    var NetworkError = (function (_super) {
        __extends(NetworkError, _super);
        function NetworkError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x618;
            _this.Reason = NetworkErrorReason.Unknown;
            return _this;
        }
        NetworkError.prototype.getAdditionalErrorCode = function () {
            return "" + this.Reason;
        };
        return NetworkError;
    }(public_1.BaseError));
    exports.NetworkError = NetworkError;
    var Network = (function () {
        function Network() {
        }
        Network_1 = Network;
        Network.getNetworkManager = function () {
            if (Network_1.networkManager == null) {
                Network_1.networkManager = backend.ServiceClientContextZac.instance.zacAPI.Networks;
                if (Network_1.networkManager == null) {
                    throw new NetworkError("zacAPI.Networks is NULL or undefined");
                }
            }
            return Network_1.networkManager;
        };
        Network.getNetwork = function () {
            if (Network_1.getNetworkManager().networks.length == 0) {
                throw new NetworkError("No network could be found.");
            }
            if (Network_1.getNetworkManager().networks.length > 1) {
                public_1.Logger.warn(function (log) { return log(public_1.LogMsg("Found " + Network_1.getNetworkManager().networks.length + " networks - this function returns first network in this case. Please check if this is correct.", Network_1.TAG)); });
            }
            return Network_1.getNetworkManager().networks[0];
        };
        Network.getLinkProperties = function (network) {
            var net = network || Network_1.getNetwork();
            return new LinkProperties(net.GetProperties(Network_1.getNetworkManager().PROPERTY_TYPE_LINK));
        };
        Network.getNetworkProperties = function (network) {
            var net = network || Network_1.getNetwork();
            return new NetworkProperties(net.GetProperties(Network_1.getNetworkManager().PROPERTY_TYPE_NETWORK));
        };
        Network.getNetworkState = function (network) {
            if (network == null) {
                network = Network_1.getNetwork();
            }
            return {
                isLinked: Network_1.getLinkProperties(network).State == LinkState.UP,
                isConnected: Network_1.getNetworkProperties(network).ConnectionState == NetworkConnectionState.Connected
            };
        };
        var Network_1;
        Network = Network_1 = __decorate([
            public_1.logTag()
        ], Network);
        return Network;
    }());
    exports.Network = Network;
    var NetworkInterfaceType;
    (function (NetworkInterfaceType) {
        NetworkInterfaceType[NetworkInterfaceType["Unknown"] = 0] = "Unknown";
        NetworkInterfaceType[NetworkInterfaceType["Ethernet"] = 1] = "Ethernet";
    })(NetworkInterfaceType = exports.NetworkInterfaceType || (exports.NetworkInterfaceType = {}));
    var LinkState;
    (function (LinkState) {
        LinkState[LinkState["Unknown"] = 0] = "Unknown";
        LinkState[LinkState["UP"] = 1] = "UP";
        LinkState[LinkState["DOWN"] = 2] = "DOWN";
    })(LinkState = exports.LinkState || (exports.LinkState = {}));
    var NetworkConnectionState;
    (function (NetworkConnectionState) {
        NetworkConnectionState[NetworkConnectionState["Unknown"] = 0] = "Unknown";
        NetworkConnectionState[NetworkConnectionState["Connected"] = 1] = "Connected";
        NetworkConnectionState[NetworkConnectionState["Disconnected"] = 2] = "Disconnected";
    })(NetworkConnectionState = exports.NetworkConnectionState || (exports.NetworkConnectionState = {}));
    var Ipv4AddressMode;
    (function (Ipv4AddressMode) {
        Ipv4AddressMode[Ipv4AddressMode["Unknown"] = 0] = "Unknown";
        Ipv4AddressMode[Ipv4AddressMode["DHCP"] = 1] = "DHCP";
        Ipv4AddressMode[Ipv4AddressMode["STATIC"] = 2] = "STATIC";
    })(Ipv4AddressMode = exports.Ipv4AddressMode || (exports.Ipv4AddressMode = {}));
    var NetworkProperties = (function () {
        function NetworkProperties(zacNetworkPropertites) {
            var addressMode = zacNetworkPropertites[Network.getNetworkManager().KEY_IPV4_ADDRESS_MODE];
            switch (addressMode) {
                case Network.getNetworkManager().MODE_DHCP:
                    this.AddressMode = Ipv4AddressMode.DHCP;
                    break;
                case Network.getNetworkManager().MODE_STATIC:
                    this.AddressMode = Ipv4AddressMode.STATIC;
                    break;
                default:
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("Unable to resolve IPV4 address mode value " + addressMode, NetworkProperties_1.TAG)); });
                    this.AddressMode = Ipv4AddressMode.Unknown;
                    break;
            }
            var connectionState = zacNetworkPropertites[Network.getNetworkManager().KEY_CONNECTION_STATUS];
            switch (connectionState) {
                case Network.getNetworkManager().STATUS_CONNECTED:
                    this.ConnectionState = NetworkConnectionState.Connected;
                    break;
                case Network.getNetworkManager().STATUS_DISCONNECTED:
                    this.ConnectionState = NetworkConnectionState.Disconnected;
                    break;
                default:
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("Unable to resolve network connection state value " + addressMode, NetworkProperties_1.TAG)); });
                    this.ConnectionState = NetworkConnectionState.Unknown;
                    break;
            }
            this.Ip4Address = zacNetworkPropertites[Network.getNetworkManager().KEY_IPV4_ADDRESS];
            this.Ip4Netmask = zacNetworkPropertites[Network.getNetworkManager().KEY_IPV4_NETMASK];
            this.Ip4Gateway = zacNetworkPropertites[Network.getNetworkManager().KEY_IPV4_GATEWAY];
            this.Ip4Dns = zacNetworkPropertites[Network.getNetworkManager().KEY_IPV4_DNS];
            this.Ip4UsrDns = zacNetworkPropertites[Network.getNetworkManager().KEY_IPV4_USR_DNS];
            this.DhcpOptions = zacNetworkPropertites[Network.getNetworkManager().KEY_DHCP_OPTIONS];
        }
        NetworkProperties_1 = NetworkProperties;
        var NetworkProperties_1;
        NetworkProperties = NetworkProperties_1 = __decorate([
            public_1.logTag()
        ], NetworkProperties);
        return NetworkProperties;
    }());
    exports.NetworkProperties = NetworkProperties;
    var LinkProperties = (function () {
        function LinkProperties(zacLinkPropertites) {
            var _this = this;
            var interfaceTypeValue = zacLinkPropertites[Network.getNetworkManager().KEY_INTERFACE_TYPE];
            switch (interfaceTypeValue) {
                case Network.getNetworkManager().INTERFACE_TYPE_ETHERNET:
                    this.InterfaceType = NetworkInterfaceType.Ethernet;
                    break;
                default:
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("Unable to resolve interface type value " + interfaceTypeValue, LinkProperties_1.TAG)); });
                    this.InterfaceType = NetworkInterfaceType.Unknown;
                    break;
            }
            var linkStateValue = zacLinkPropertites[Network.getNetworkManager().KEY_LINK_STATUS];
            switch (linkStateValue) {
                case Network.getNetworkManager().STATUS_UP:
                    this.State = LinkState.UP;
                    break;
                case Network.getNetworkManager().STATUS_DOWN:
                    this.State = LinkState.DOWN;
                    break;
                default:
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("Unable to resolve link state value " + linkStateValue, LinkProperties_1.TAG)); });
                    this.State = LinkState.Unknown;
                    break;
            }
            this.MacAddress = zacLinkPropertites[Network.getNetworkManager().KEY_MAC_ADDRESS];
            var linkSpeedStr = zacLinkPropertites[Network.getNetworkManager().KEY_LINK_SPEED];
            var regExp = /([0-9]*)([HF])?/g;
            var regExpResult = regExp.exec(linkSpeedStr);
            if (regExpResult == null || regExpResult.length < 3) {
                public_1.Logger.error(function (log) { return log(public_1.LogMsg("Unable to parse link speed from " + linkSpeedStr, LinkProperties_1.TAG)); });
            }
            else {
                this.LinkSpeed = Number(regExpResult[1]);
            }
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("LinkProperties: LinkSpeed: " + linkSpeedStr + "=>" + _this.LinkSpeed + ", MacAddress: " + _this.MacAddress + ", State: " + LinkState[_this.State] + ", InterfaceType: " + NetworkInterfaceType[_this.InterfaceType], LinkProperties_1.TAG)); });
        }
        LinkProperties_1 = LinkProperties;
        var LinkProperties_1;
        LinkProperties = LinkProperties_1 = __decorate([
            public_1.logTag()
        ], LinkProperties);
        return LinkProperties;
    }());
    exports.LinkProperties = LinkProperties;
});
//# sourceMappingURL=applicationclient.network.js.map