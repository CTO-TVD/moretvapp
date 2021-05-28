var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "../backend/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContentManagement = void 0;
    var ContentManagement = (function () {
        function ContentManagement() {
        }
        ContentManagement_1 = ContentManagement;
        ContentManagement.getDFCC = function () {
            return public_2.ServiceClientAuthenticationZosa.getDFCC(public_2.ServiceClientContextZosa.instance)
                .then(function (response) { return JSON.parse(response.data); });
        };
        ContentManagement.getSubscriberInfo = function () {
            var params = {
                serviceProvider: null,
                itemFields: ["customProps"]
            };
            return public_2.ServiceClientAuthenticationZosa.getSubscriberInfo(public_2.ServiceClientContextZosa.instance, params)
                .then(function (subscriberInfo) {
                var properties = {};
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("ZosaSubscriberInfo:", ContentManagement_1.TAG)); });
                if (subscriberInfo.data.customProps) {
                    subscriberInfo.data.customProps.forEach(function (keyValuePair) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg(keyValuePair.key + ":" + keyValuePair.value, ContentManagement_1.TAG)); });
                        properties[keyValuePair.key] = keyValuePair.value;
                    });
                }
                var retValue = {
                    satHouseholdWhitelist: properties.satHouseholdWhiteList ? properties.satHouseholdWhiteList.split(",") : null,
                    satSubscriberTypes: properties.satSubscriberTypes ? properties.satSubscriberTypes.split(",") : null,
                    satHouseholdDeletionList: properties.satHouseholdDeletionList ? properties.satHouseholdDeletionList.split(",") : null,
                    portalUrl: properties.portalUrl,
                    hddWhiteList: properties.hddWhiteList && properties.hddWhiteList.length > 0 ? JSON.parse(properties.hddWhiteList) : null,
                    provisioningType: properties.provisioningType,
                    startPageDisableChannel: properties.StartPageDisableChannel ? properties.StartPageDisableChannel.split(";") : undefined,
                    netflixPartnerId: properties.Netflix_Disc_Partner_ID,
                    netflixPartnerKey: properties.Netflix_Disc_Partner_Key
                };
                return retValue;
            });
        };
        ContentManagement.isStartPageEnabled = function () {
            return public_2.ServiceClientAuthenticationZosa.getConfigurableSettingsTypedValue(public_2.DomainType.device, public_2.ConfigurableUserSettingsKey.StartPageOnOff)
                .then(function (typedValue) { return typedValue.toLowerCase() == "on"; });
        };
        ContentManagement.setStartPageEnabled = function (enabled) {
            return public_2.ServiceClientAuthenticationZosa.setConfigurableUserSettingsValue(public_2.DomainType.device, { key: public_2.ConfigurableUserSettingsKey.StartPageOnOff, value: enabled ? "On" : "Off" });
        };
        var ContentManagement_1;
        __decorate([
            public_1.log2(function () { return ({ name: ContentManagement_1.TAG }); })
        ], ContentManagement, "getDFCC", null);
        __decorate([
            public_1.log2(function () { return ({ name: ContentManagement_1.TAG }); })
        ], ContentManagement, "getSubscriberInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: ContentManagement_1.TAG }); })
        ], ContentManagement, "isStartPageEnabled", null);
        __decorate([
            public_1.log2(function () { return ({ name: ContentManagement_1.TAG }); })
        ], ContentManagement, "setStartPageEnabled", null);
        ContentManagement = ContentManagement_1 = __decorate([
            public_1.logTag()
        ], ContentManagement);
        return ContentManagement;
    }());
    exports.ContentManagement = ContentManagement;
});
//# sourceMappingURL=applicationclient.contentmanagement.js.map