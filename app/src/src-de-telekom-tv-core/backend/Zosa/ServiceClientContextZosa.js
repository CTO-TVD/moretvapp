define(["require", "exports", "src/src-de-telekom/public", "../public", "../../mock/public"], function (require, exports, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientContextZosa = void 0;
    var ZosaMode;
    (function (ZosaMode) {
        ZosaMode[ZosaMode["auto"] = 0] = "auto";
        ZosaMode[ZosaMode["prod"] = 1] = "prod";
        ZosaMode[ZosaMode["mock"] = 2] = "mock";
    })(ZosaMode || (ZosaMode = {}));
    var ZosaEndpointMode;
    (function (ZosaEndpointMode) {
        ZosaEndpointMode[ZosaEndpointMode["auto"] = 0] = "auto";
        ZosaEndpointMode[ZosaEndpointMode["local"] = 1] = "local";
        ZosaEndpointMode[ZosaEndpointMode["remote"] = 2] = "remote";
    })(ZosaEndpointMode || (ZosaEndpointMode = {}));
    var ServiceClientContextZosa = (function () {
        function ServiceClientContextZosa() {
            var _a, _b;
            this.url = "ws://zosa:8001";
            this.username = "";
            this.password = "";
            var zosaConfig = ((_a = public_1.Configuration.instance.zenterio) === null || _a === void 0 ? void 0 : _a.zosa) ? public_1.Configuration.instance.zenterio.zosa : {};
            zosaConfig.endpoints = zosaConfig.endpoints || {};
            var isSetTopBox = (_b = public_1.Configuration.instance.device) === null || _b === void 0 ? void 0 : _b.isSetTopBox;
            var zosaMode = ZosaMode[zosaConfig.mode] || ZosaMode.auto;
            var zosaEndpointMode = ZosaEndpointMode[zosaConfig.endpointMode] || ZosaEndpointMode.auto;
            if (isSetTopBox && zosaMode == ZosaMode.auto || zosaMode == ZosaMode.prod) {
                this.serviceClientZosa = public_2.ServiceClientZosa.create();
                this.serviceClientZosa.getOnRecordingChangedSubject().subscribe(function () { return public_1.CacheManager.next({ reason: "Recording" }); });
                this.serviceClientZosa.onDataUpdated(public_2.ServiceClientCacheZosa.onDataUpdatedCallback);
                this.serviceClientZosa.onParentalBlockingChanged(public_2.ServiceClientCacheZosa.onParentalBlockingChangedCallback);
                this.serviceClientZosa.onServiceProviderSessionError(public_2.ServiceClientCacheZosa.onZosaErrorCallback);
                this.serviceClientZosa.onSessionError(public_2.ServiceClientCacheZosa.onZosaErrorCallback);
                this.serviceClientZosa.onCustomApiMasterStb(public_2.ServiceClientCacheZosa.onCustomApiMasterStbCallback);
                this.serviceClientZosa.onCustomApiDFCC(public_2.ServiceClientCacheZosa.onCustomApiDfccCallback);
                var endpoint = void 0;
                if (isSetTopBox && zosaEndpointMode == ZosaEndpointMode.auto || zosaEndpointMode == ZosaEndpointMode.local) {
                    endpoint = zosaConfig.endpoints.local || {};
                }
                else {
                    endpoint = zosaConfig.endpoints.remote || {};
                }
                this.url = endpoint.url || this.url;
                this.username = endpoint.username || this.username;
                this.password = endpoint.password || this.password;
            }
            else {
                var endpoint = void 0;
                if (zosaEndpointMode == ZosaEndpointMode.auto || zosaEndpointMode == ZosaEndpointMode.local) {
                    endpoint = zosaConfig.endpoints.local || {};
                }
                else {
                    endpoint = zosaConfig.endpoints.remote || {};
                }
                this.url = endpoint.url || this.url;
                this.username = endpoint.username || this.username;
                this.password = endpoint.password || this.password;
                this.serviceClientZosa = new public_3.ServiceClientZosaMock();
            }
        }
        return ServiceClientContextZosa;
    }());
    exports.ServiceClientContextZosa = ServiceClientContextZosa;
});
//# sourceMappingURL=ServiceClientContextZosa.js.map