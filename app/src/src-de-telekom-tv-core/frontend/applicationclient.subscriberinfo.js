var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define(["require", "exports", "bluebird", "moment", "src/src-de-telekom/public", "src/src-de-telekom/util/public", "../backend/public", "../backend/Zac/ServiceClientZac", "../backend/Zosa/ServiceClientZosa", "./applicationclient.system", "./applicationclient.tds", "./applicationclient.voicehistory"], function (require, exports, bluebird, moment, public_1, public_2, public_3, ServiceClientZac_1, ServiceClientZosa_1, applicationclient_system_1, applicationclient_tds_1, applicationclient_voicehistory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SubscriberInfo = exports.CustomPrivacyItem = void 0;
    var CustomPrivacyItem;
    (function (CustomPrivacyItem) {
        CustomPrivacyItem["AllowVoiceDataAnalysis"] = "AllowVoiceDataAnalysis";
    })(CustomPrivacyItem = exports.CustomPrivacyItem || (exports.CustomPrivacyItem = {}));
    var SubscriberInfo = (function () {
        function SubscriberInfo() {
        }
        SubscriberInfo_1 = SubscriberInfo;
        SubscriberInfo.getTdsPrivacyItemTemplates = function () {
            return [
                applicationclient_tds_1.TdsParameterName.Recommendation,
                applicationclient_tds_1.TdsParameterName.ProductImprovements,
                applicationclient_tds_1.TdsParameterName.PersonalAdvertising,
                applicationclient_tds_1.TdsParameterName.ReportingForBroadcasters,
                applicationclient_tds_1.TdsParameterName.HandoverDataToThirdParty
            ]
                .map(function (tdsParameterName) { return SubscriberInfo_1.getTdsPrivacyItemTemplate(tdsParameterName); })
                .filter(public_1.Guard.isDefined);
        };
        SubscriberInfo.getTdsPrivacyItemTemplate = function (tdsParameterName) {
            switch (tdsParameterName) {
                case applicationclient_tds_1.TdsParameterName.Recommendation:
                    return {
                        tdsParameterName: applicationclient_tds_1.TdsParameterName.Recommendation,
                        type: "OptOut",
                        order: 0
                    };
                case applicationclient_tds_1.TdsParameterName.ProductImprovements:
                    return {
                        tdsParameterName: applicationclient_tds_1.TdsParameterName.ProductImprovements,
                        type: "OptIn",
                        order: 1
                    };
                case applicationclient_tds_1.TdsParameterName.PersonalAdvertising:
                    return {
                        tdsParameterName: applicationclient_tds_1.TdsParameterName.PersonalAdvertising,
                        type: "OptIn",
                        order: 2
                    };
                case applicationclient_tds_1.TdsParameterName.ReportingForBroadcasters:
                    return {
                        tdsParameterName: applicationclient_tds_1.TdsParameterName.ReportingForBroadcasters,
                        type: "OptOut",
                        order: 4
                    };
                case applicationclient_tds_1.TdsParameterName.HandoverDataToThirdParty:
                    return {
                        tdsParameterName: applicationclient_tds_1.TdsParameterName.HandoverDataToThirdParty,
                        type: "OptIn",
                        order: 5
                    };
                case applicationclient_tds_1.TdsParameterName.InfoService:
                    return {
                        tdsParameterName: applicationclient_tds_1.TdsParameterName.InfoService,
                        type: "OptIn",
                        order: 6
                    };
                default:
                    return undefined;
            }
        };
        SubscriberInfo.universalTarifEnabled = function () {
            return applicationclient_tds_1.Tds.isFlagSet(applicationclient_tds_1.TdsParameterName.UniversalTarifIdentifier)
                .catch(function (error) {
                public_1.ErrorManager.catch(error, applicationclient_tds_1.Tds, 0x02);
                return false;
            });
        };
        SubscriberInfo.setAccountToSat = function () {
            return applicationclient_tds_1.Tds.setFlagValue({ key: applicationclient_tds_1.TdsParameterName.SatTarif, value: "1" });
        };
        SubscriberInfo.setAccountToIptv = function () {
            return applicationclient_tds_1.Tds.setFlagValue({ key: applicationclient_tds_1.TdsParameterName.SatTarif, value: "0" });
        };
        SubscriberInfo.getTdsPrivacyItems = function (type, checked) {
            return SubscriberInfo_1.getTdsPrivacyItemTemplates()
                .filter(function (template) { return (!type || template.type == type) && template.tdsParameterName; })
                .map(function (privacyItemTemplate) { return ({
                isTdsParameter: true,
                checked: checked,
                parameterName: privacyItemTemplate.tdsParameterName,
                type: privacyItemTemplate.type,
                order: privacyItemTemplate.order
            }); });
        };
        SubscriberInfo.getPrivacyItems = function (type, includeCustomItems) {
            var tdsPrivacyItems = SubscriberInfo_1.getTdsPrivacyItems(type);
            var tdsParameterNames = tdsPrivacyItems.map(function (privacyItem) { return privacyItem.parameterName; });
            return applicationclient_tds_1.Tds.getFlagValues(tdsParameterNames)
                .then(function (flagValues) {
                flagValues.forEach(function (flagValue) {
                    var privacyItem = tdsPrivacyItems.filter(function (privacyItem) { return privacyItem.parameterName == flagValue.key; })[0];
                    if (privacyItem) {
                        privacyItem.checked = flagValue.value == "1";
                    }
                });
                return tdsPrivacyItems;
            })
                .then(function (tdsPrivacyItems) {
                if (!includeCustomItems) {
                    return tdsPrivacyItems;
                }
                var customPrivacyItems = [
                    {
                        type: "OptIn",
                        parameterName: CustomPrivacyItem.AllowVoiceDataAnalysis,
                        order: 3,
                        isItemCheckedFunc: function (parameterName) { return applicationclient_voicehistory_1.VoiceHistory.getListenVoicePrivacyState(); },
                        checkItemFunc: function (isChecked) { return applicationclient_voicehistory_1.VoiceHistory.setListenVoicePrivacyState(isChecked).then(function () { }); }
                    }
                ];
                return bluebird.all(customPrivacyItems.map(function (customPrivacyItem) { return customPrivacyItem.isItemCheckedFunc ? customPrivacyItem.isItemCheckedFunc(customPrivacyItem.parameterName) : bluebird.resolve(false); }))
                    .then(function (results) {
                    customPrivacyItems.forEach(function (customPrivacyItem, index) { return customPrivacyItem.checked = results[index]; });
                    return __spreadArrays(tdsPrivacyItems, customPrivacyItems).sort(function (a, b) { return a.order < b.order ? -1 : (a.order == b.order ? 0 : 1); });
                });
            });
        };
        SubscriberInfo.getAtiTrackingInfo = function () {
            var relevantTdsParameters = [
                applicationclient_tds_1.TdsParameterName.Recommendation,
                applicationclient_tds_1.TdsParameterName.ProductImprovements,
                applicationclient_tds_1.TdsParameterName.PersonalAdvertising,
                applicationclient_tds_1.TdsParameterName.ReportingForBroadcasters
            ];
            return applicationclient_tds_1.Tds.getFlagValues(relevantTdsParameters)
                .then(function (response) {
                var atiTrackingParameters = relevantTdsParameters.map(function (parameter) { return SubscriberInfo_1.isAllowed(parameter, response); });
                return {
                    atiTrackingEnabled: atiTrackingParameters.some(function (parameter) { return parameter.isEnabled; }),
                    trackingParameters: atiTrackingParameters
                };
            })
                .catch(function (error) {
                public_1.ErrorManager.catch(error, SubscriberInfo_1, 0x03);
                return { atiTrackingEnabled: false };
            });
        };
        SubscriberInfo.isAllowed = function (tdsParameter, tdsResponse) {
            var addidionalInfo = SubscriberInfo_1.getTdsPrivacyItemTemplate(tdsParameter);
            if (!addidionalInfo) {
                public_2.Logger.warn(function (log) { return log(public_2.LogMsg("Missing privacy template for Tds Parameter " + tdsParameter, SubscriberInfo_1.TAG)); });
                return { parameter: tdsParameter, isEnabled: false };
            }
            var tdsValue = tdsResponse.filter(function (tdsResponse) { return tdsResponse.key === tdsParameter; })[0];
            public_2.Logger.debug(function (log) { return log(public_2.LogMsg(tdsParameter + " value [" + addidionalInfo.type + "]: " + (tdsValue ? tdsValue.value : "undefined"), SubscriberInfo_1.TAG)); });
            return addidionalInfo.type == "OptIn" ?
                { parameter: tdsParameter, isEnabled: public_1.Guard.isDefined(tdsValue) && tdsValue.value == "1" } :
                { parameter: tdsParameter, isEnabled: public_1.Guard.isUndefined(tdsValue) || tdsValue.value == "0" };
        };
        SubscriberInfo.getUninitializedTdsPrivacyItems = function () {
            return SubscriberInfo_1.getPrivacyItems("OptIn", false)
                .then(function (privacyItems) { return privacyItems.filter(function (privacyItem) { return public_1.Guard.isUndefined(privacyItem.checked); }); });
        };
        SubscriberInfo.setPrivacyValues = function (privacyItems) {
            var tdsValues = privacyItems
                .filter(function (privacyItem) { return privacyItem.isTdsParameter; })
                .map(function (tdsPrivacyItem) { return ({
                key: tdsPrivacyItem.parameterName,
                value: public_1.Guard.isUndefined(tdsPrivacyItem.checked) ? undefined : (tdsPrivacyItem.checked ? "1" : "0")
            }); });
            var customSetValuePromises = privacyItems
                .filter(function (privacyItem) { return !privacyItem.isTdsParameter; })
                .map(function (customPrivacyItem) { return customPrivacyItem.checkItemFunc ? customPrivacyItem.checkItemFunc(!!customPrivacyItem.checked) : undefined; })
                .filter(public_1.Guard.isDefined);
            return applicationclient_tds_1.Tds.setFlagValues(tdsValues)
                .then(function () { return bluebird.all(customSetValuePromises); });
        };
        SubscriberInfo.getOptInFlagMetadata = function (tdsParameterName) {
            return bluebird.resolve()
                .then(function () {
                var key = SubscriberInfo_1.getConfigurableUserSettingsMetadataKey(tdsParameterName);
                return public_3.ServiceClientAuthenticationZosa.getConfigurableSettingsTypedValue(ServiceClientZosa_1.DomainType.subscriber, key);
            })
                .then(function (typedValue) {
                var historyJson = typedValue;
                return historyJson && historyJson.length > 0 ? JSON.parse(historyJson) : undefined;
            });
        };
        SubscriberInfo.resetOptInFlagMetadata = function (tdsParameterName) {
            var key = SubscriberInfo_1.getConfigurableUserSettingsMetadataKey(tdsParameterName);
            return public_3.ServiceClientAuthenticationZosa.setConfigurableUserSettingsValue(ServiceClientZosa_1.DomainType.subscriber, { key: key, value: "" });
        };
        SubscriberInfo.getConfigurableUserSettingsMetadataKey = function (tdsParameterName) {
            switch (tdsParameterName) {
                case applicationclient_tds_1.TdsParameterName.InfoService: return ServiceClientZosa_1.ConfigurableUserSettingsKey.PermissionInfoServiceHistory;
                case applicationclient_tds_1.TdsParameterName.ProductImprovements: return ServiceClientZosa_1.ConfigurableUserSettingsKey.PermissionProductImprovementsHistory;
                case applicationclient_tds_1.TdsParameterName.PersonalAdvertising: return ServiceClientZosa_1.ConfigurableUserSettingsKey.PermissionPersonalizedAdvertisingHistory;
                case applicationclient_tds_1.TdsParameterName.HandoverDataToThirdParty: return ServiceClientZosa_1.ConfigurableUserSettingsKey.PermissionInfoToThirdPartyHistory;
                case applicationclient_tds_1.TdsParameterName.Recommendation: return ServiceClientZosa_1.ConfigurableUserSettingsKey.PermissionPersonalizedUiHistory;
                case applicationclient_tds_1.TdsParameterName.ReportingForBroadcasters: return ServiceClientZosa_1.ConfigurableUserSettingsKey.PermissionInfoToBroadcastersHistory;
            }
            throw new Error("No history available for tds parameter " + tdsParameterName + ".");
        };
        SubscriberInfo.setOptInFlagsMetadata = function (origin, privacyItems) {
            if (!privacyItems.some(function (privacyItem) { return privacyItem.isTdsParameter; })) {
                return bluebird.resolve();
            }
            var systemInformation = ServiceClientZac_1.ServiceClientZac.getSystemInformation();
            var values = privacyItems.filter(function (privacyItem) { return privacyItem.isTdsParameter; }).map(function (privacyItem) {
                var key = SubscriberInfo_1.getConfigurableUserSettingsMetadataKey(privacyItem.parameterName);
                var now = moment();
                var metaData = {
                    changedAt: now.utc().format("YYYYMMDDHHmmss"),
                    deviceModel: "" + systemInformation.HwModel + (systemInformation.HwModelType ? " " + systemInformation.HwModelType : ""),
                    deviceId: systemInformation.GUID,
                    softwareVersion: applicationclient_system_1.System.getUiVersion(),
                    status: SubscriberInfo_1.getStatus(privacyItem),
                    origin: origin
                };
                return { key: key, value: JSON.stringify(metaData) };
            });
            return public_3.ServiceClientAuthenticationZosa.setConfigurableUserSettingsValues(ServiceClientZosa_1.DomainType.subscriber, values).then(function () { });
        };
        SubscriberInfo.getStatus = function (privacyItem) {
            return privacyItem.type == "OptIn" ?
                (privacyItem.checked ? "permitted" : "revoked") :
                (privacyItem.checked ? "revoked" : "permitted");
        };
        var SubscriberInfo_1;
        SubscriberInfo.classID = 0x7B5;
        __decorate([
            public_1.log2(function () { return ({ name: applicationclient_tds_1.Tds.TAG }); })
        ], SubscriberInfo, "universalTarifEnabled", null);
        __decorate([
            public_1.log2(function () { return ({ name: applicationclient_tds_1.Tds.TAG }); })
        ], SubscriberInfo, "setAccountToSat", null);
        __decorate([
            public_1.log2(function () { return ({ name: applicationclient_tds_1.Tds.TAG }); })
        ], SubscriberInfo, "setAccountToIptv", null);
        __decorate([
            public_1.log2(function () { return ({ name: SubscriberInfo_1.TAG }); })
        ], SubscriberInfo, "getTdsPrivacyItems", null);
        __decorate([
            public_1.log2(function () { return ({ name: SubscriberInfo_1.TAG }); })
        ], SubscriberInfo, "getPrivacyItems", null);
        __decorate([
            public_1.log2(function () { return ({ name: SubscriberInfo_1.TAG }); })
        ], SubscriberInfo, "getAtiTrackingInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: SubscriberInfo_1.TAG, parameters: [0, 1] }); })
        ], SubscriberInfo, "isAllowed", null);
        __decorate([
            public_1.log2(function () { return ({ name: SubscriberInfo_1.TAG }); })
        ], SubscriberInfo, "getUninitializedTdsPrivacyItems", null);
        __decorate([
            public_1.log2(function () { return ({ name: SubscriberInfo_1.TAG }); })
        ], SubscriberInfo, "setPrivacyValues", null);
        __decorate([
            public_1.log2(function () { return ({ name: SubscriberInfo_1.TAG }); })
        ], SubscriberInfo, "getOptInFlagMetadata", null);
        __decorate([
            public_1.log2(function () { return ({ name: SubscriberInfo_1.TAG }); })
        ], SubscriberInfo, "resetOptInFlagMetadata", null);
        __decorate([
            public_1.log2(function () { return ({ name: SubscriberInfo_1.TAG }); })
        ], SubscriberInfo, "getConfigurableUserSettingsMetadataKey", null);
        __decorate([
            public_1.log2(function () { return ({ name: SubscriberInfo_1.TAG }); })
        ], SubscriberInfo, "setOptInFlagsMetadata", null);
        SubscriberInfo = SubscriberInfo_1 = __decorate([
            public_1.logTag()
        ], SubscriberInfo);
        return SubscriberInfo;
    }());
    exports.SubscriberInfo = SubscriberInfo;
});
//# sourceMappingURL=applicationclient.subscriberinfo.js.map