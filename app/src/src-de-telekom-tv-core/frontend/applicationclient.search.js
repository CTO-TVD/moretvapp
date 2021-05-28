define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../backend/public", "./applicationclient"], function (require, exports, bluebird, public_1, backend, applicationclient_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Search = void 0;
    var Search = (function () {
        function Search() {
        }
        Search.search = function (parameters) {
            var deviceInfoPromise = applicationclient_1.ApplicationClient.deviceManagement.getStbDevicesInfo(true);
            var satConfigPromise = public_1.Feature.has(public_1.FeatureItems.satellitesubscriber, public_1.FeatureRights.viewItems) ? applicationclient_1.ApplicationClient.outdoor.getSatelliteConfig() : bluebird.resolve(null);
            return bluebird.all([deviceInfoPromise, satConfigPromise])
                .then(function (_a) {
                var _b;
                var deviceInfoResult = _a[0], satConfigResult = _a[1];
                if ((_b = deviceInfoResult === null || deviceInfoResult === void 0 ? void 0 : deviceInfoResult.currentStb) === null || _b === void 0 ? void 0 : _b.customProps) {
                    var channelMapId = deviceInfoResult.currentStb.customProps.filter(function (item) { return item.key == "channelNamespaceName"; })[0];
                    if (channelMapId)
                        parameters.channelMapId = channelMapId.value;
                }
                var partnerMapId = public_1.Feature.getValuePartnerMapId();
                if (partnerMapId) {
                    parameters.partnerMapId = partnerMapId;
                }
                var appMapId = public_1.Feature.getValueAppMapId();
                if (appMapId) {
                    parameters.appMapId = appMapId;
                }
                if (satConfigResult) {
                    var satItems = satConfigResult.data;
                    if (satItems && satItems.length > 0) {
                        parameters.satellites = satItems.map(function (item) { return item.satelliteId; }).join(",");
                    }
                }
                return backend.ServiceClientAuthenticationZosa.search(Search.getServiceClientContextZosa(), parameters);
            });
        };
        Search.getServiceClientContextZosa = function () {
            return backend.ServiceClientContextZosa.instance;
        };
        Search.SEARCH_PROFILE_ALL_IPTV = "all_iptv";
        Search.SEARCH_PROFILE_APP_HUB = "app_hub";
        Search.SEARCH_PROFILE_FILMOGRAPHY_IPTV = "filmography_iptv";
        Search.SEARCH_PROFILE_KIDS_IPTV = "kids_iptv";
        Search.SEARCH_PROFILE_EROTIC_IPTV = "erotic_iptv";
        Search.SEARCH_PROFILE_PERSONS = "persons";
        Search.SEARCH_PROFILE_BROADCAST_GROUPED_IPTV_OTT = "BROADCAST_GROUPED_IPTV_OTT";
        Search.SEARCH_PROFILE_KIDS_BROADCAST_GROUPED_IPTV_OTT = "KIDS_BROADCAST_GROUPED_IPTV_OTT";
        Search.SEARCH_PROFILE_BROADCAST_MORE_IPTV_OTT = "BROADCAST_MORE_IPTV_OTT";
        Search.SEARCH_PROFILE_KIDS_BROADCAST_MORE_IPTV_OTT = "KIDS_BROADCAST_MORE_IPTV_OTT";
        Search.SEARCH_PROFILE_VOD_MORE_IPTV = "VOD_MORE_IPTV";
        Search.SEARCH_PROFILE_KIDS_VOD_MORE_IPTV = "KIDS_VOD_MORE_IPTV";
        Search.SEARCH_PROFILE_EROTIC_VOD_MORE_IPTV = "EROTIC_VOD_MORE_IPTV";
        Search.SEARCH_PROFILE_VOD_MORE_OTT = "VOD_MORE_OTT";
        Search.SEARCH_KIDS_PROFILE_VOD_MORE_OTT = "KIDS_VOD_MORE_OTT";
        Search.SEARCH_PROFILE_APPS_MORE_IPTV_OTT = "APPS_MORE_IPTV_OTT";
        Search.SEARCH_PROFILE_PERSONS_MORE_IPTV = "PERSONS_MORE_IPTV";
        Search.SEARCH_PROFILE_EROTIC_PERSONS_MORE_IPTV = "EROTIC_PERSONS_MORE_IPTV";
        Search.SEARCH_PROFILE_CHANNELS_MORE_IPTV_OTT = "CHANNELS_MORE_IPTV_OTT";
        Search.SEARCH_PROFILE_KIDS_CHANNELS_MORE_IPTV_OTT = "KIDS_CHANNELS_MORE_IPTV_OTT";
        Search.SEARCH_PROFILE_EXTERNAL_NETFLIX = "EXTERNAL_NETFLIX";
        Search.SEARCH_PROFILE_EXTERNAL_NETFLIX_EROTIC = "EXTERNAL_NETFLIX_EROTIC";
        Search.SEARCH_PROFILE_EXTERNAL_NETFLIX_KIDS = "EXTERNAL_NETFLIX_KIDS";
        Search.SEARCH_PROFILE_EXTERNAL_YOUTUBE = "EXTERNAL_YOUTUBE";
        Search.SEARCH_PROFILE_GROUPED_ALL_MORE_IPTV_OTT = "all_more_iptv_ott";
        Search.SEARCH_PROFILE_GROUPED_KIDS_MORE_IPTV_OTT = "kids_more_iptv_ott";
        Search.SEARCH_PROFILE_GROUPED_EROTIC_MORE_IPTV_OTT = "erotic_more_iptv_ott";
        return Search;
    }());
    exports.Search = Search;
});
//# sourceMappingURL=applicationclient.search.js.map