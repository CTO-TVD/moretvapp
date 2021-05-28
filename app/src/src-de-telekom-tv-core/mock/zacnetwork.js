define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacNetwork = void 0;
    var ZacNetwork = (function () {
        function ZacNetwork(networks) {
            this.name = "eth0";
            this.type = "ethernet";
            this.linkStatus = true;
            this.networkStatus = true;
            this.networks = networks;
        }
        ZacNetwork.prototype.GetProperties = function (type) {
            var properties = {};
            if (type == this.networks.PROPERTY_TYPE_LINK) {
                properties[this.networks.KEY_INTERFACE_TYPE] = this.networks.INTERFACE_TYPE_ETHERNET;
                properties[this.networks.KEY_MAC_ADDRESS] = "00:26:B9:CF:48:7D";
                properties[this.networks.KEY_LINK_STATUS] = this.networks.STATUS_UP;
                properties[this.networks.KEY_LINK_SPEED] = "100M";
            }
            if (type == this.networks.PROPERTY_TYPE_NETWORK) {
                properties[this.networks.KEY_IPV4_ADDRESS_MODE] = this.networks.MODE_DHCP;
                properties[this.networks.KEY_IPV4_ADDRESS] = "192.168.2.103";
                properties[this.networks.KEY_IPV4_NETMASK] = "255.255.255.0";
                properties[this.networks.KEY_IPV4_GATEWAY] = "192.168.2.1";
                properties[this.networks.KEY_IPV4_DNS] = "192.168.2.1";
                properties[this.networks.KEY_IPV4_USR_DNS] = "192.168.2.1";
                properties[this.networks.KEY_CONNECTION_STATUS] = this.networks.STATUS_CONNECTED;
            }
            return properties;
        };
        return ZacNetwork;
    }());
    exports.ZacNetwork = ZacNetwork;
});
//# sourceMappingURL=zacnetwork.js.map