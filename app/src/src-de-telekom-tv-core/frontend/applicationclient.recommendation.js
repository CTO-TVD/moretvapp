define(["require", "exports", "bluebird", "../backend/public", "src/src-de-telekom/public", "./applicationclient"], function (require, exports, bluebird, backend, public_1, applicationclient_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Recommendation = void 0;
    var Recommendation = (function () {
        function Recommendation() {
        }
        Recommendation.getItem2ItemVodRecommendation = function (itemId, partnerId) {
            return applicationclient_1.ApplicationClient.deviceManagement.getStbDevicesInfo(true)
                .then(function (result) {
                var _a;
                var parameters = {
                    itemId: itemId,
                    partnerId: partnerId,
                    recommendationProfileId: Recommendation.PROFILE_DEFAULT,
                    scenarioId: Recommendation.SCENARIO_ITEM_TO_ITEM_VOD
                };
                if ((_a = result === null || result === void 0 ? void 0 : result.currentStb) === null || _a === void 0 ? void 0 : _a.customProps) {
                    var channelMapId = result.currentStb.customProps.filter(function (item) { return item.key == "channelNamespaceName"; })[0];
                    if (channelMapId)
                        parameters.channelMapId = channelMapId.value;
                }
                var partnerMapId = public_1.Feature.getValuePartnerMapId();
                if (partnerMapId) {
                    parameters.partnerMapId = partnerMapId;
                }
                return backend.ServiceClientAuthenticationZosa.getRecommendation(Recommendation.getServiceClientContextZosa(), parameters);
            });
        };
        Recommendation.getRecommendationForProgram = function (program) {
            return Recommendation.getItem2ItemTvRecommendation(program)
                .then(function (response) {
                var _a;
                var recommendationId = ((_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.results) ? response.data.results.map(function (item) { return item.id; }) : [];
                var parameters = {
                    itemFields: ["long"],
                    externalProgramIds: recommendationId,
                    externalProgramIdType: backend.zosaStatic.EXTERNAL_ID_TYPE_CMS
                };
                return applicationclient_1.ApplicationClient.programManagement.getPrograms(parameters);
            });
        };
        Recommendation.getItem2ItemTvRecommendation = function (program) {
            if (public_1.Guard.isUndefined(program) || public_1.Guard.isUndefined(program.dtExtensions.channel)) {
                return bluebird.resolve(new public_1.MetaInfoCache(new public_1.MetaInfoService(new public_1.MetaInfoData())));
            }
            return applicationclient_1.ApplicationClient.deviceManagement.getStbDevicesInfo(true)
                .then(function (result) {
                var _a, _b;
                var parameters = {
                    channelId: ((_a = program.dtExtensions) === null || _a === void 0 ? void 0 : _a.channel) ? program.dtExtensions.channel.cmsId : undefined,
                    itemId: "tvBroadcast:" + program.cmsId,
                    recommendationProfileId: Recommendation.PROFILE_DEFAULT,
                    scenarioId: Recommendation.SCENARIO_ITEM_TO_ITEM_TV
                };
                if ((_b = result === null || result === void 0 ? void 0 : result.currentStb) === null || _b === void 0 ? void 0 : _b.customProps) {
                    var channelMapId = result.currentStb.customProps.filter(function (item) { return item.key == "channelNamespaceName"; })[0];
                    if (channelMapId)
                        parameters.channelMapId = channelMapId.value;
                }
                var partnerMapId = public_1.Feature.getValuePartnerMapId();
                if (partnerMapId) {
                    parameters.partnerMapId = partnerMapId;
                }
                return backend.ServiceClientAuthenticationZosa.getRecommendation(Recommendation.getServiceClientContextZosa(), parameters);
            });
        };
        Recommendation.getServiceClientContextZosa = function () {
            return backend.ServiceClientContextZosa.instance;
        };
        Recommendation.PROFILE_DEFAULT = "default";
        Recommendation.SCENARIO_ITEM_TO_ITEM_TV = "i2i-tv";
        Recommendation.SCENARIO_ITEM_TO_ITEM_VOD = "i2i-vod";
        return Recommendation;
    }());
    exports.Recommendation = Recommendation;
});
//# sourceMappingURL=applicationclient.recommendation.js.map