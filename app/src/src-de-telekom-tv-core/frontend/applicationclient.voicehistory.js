var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "./applicationclient", "src/src-de-telekom/public", "../backend/public"], function (require, exports, applicationclient_1, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VoiceHistory = void 0;
    var VoiceHistory = (function () {
        function VoiceHistory() {
        }
        VoiceHistory_1 = VoiceHistory;
        VoiceHistory.getDeviceId = function () {
            return public_2.ServiceClientZac.getSystemInformation().GUID || "";
        };
        VoiceHistory.getMacAddress = function () {
            return applicationclient_1.ApplicationClient.systemInformation.getNetworkProperties()
                .then(function (networkProperties) { return networkProperties.macAddress.split(":").join(""); })
                .catch(function (error) {
                public_1.ErrorManager.catch(error, VoiceHistory_1, 0x01);
                return undefined;
            });
        };
        VoiceHistory.getPrivacySettings = function () {
            return public_2.ServiceClientAuthenticationVoiceHistory.getPrivacySettings(public_2.ServiceClientContextVoiceHistory.instance)
                .then(function (response) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg(JSON.stringify(response.data), VoiceHistory_1.TAG)); });
                return response.data;
            });
        };
        VoiceHistory.setListenVoicePrivacyState = function (agree) {
            var agreements = [
                {
                    tncId: "listenVoice",
                    agreed: agree
                }
            ];
            return public_2.ServiceClientAuthenticationVoiceHistory.setPrivacySettings(public_2.ServiceClientContextVoiceHistory.instance, agreements);
        };
        VoiceHistory.getListenVoicePrivacyState = function () {
            return public_2.ServiceClientAuthenticationVoiceHistory.getPrivacySetting(public_2.ServiceClientContextVoiceHistory.instance, "listenVoice")
                .then(function (listeVoiceSetting) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg(JSON.stringify(listeVoiceSetting.data), VoiceHistory_1.TAG)); });
                return listeVoiceSetting.data.agreement && listeVoiceSetting.data.agreement != null ?
                    listeVoiceSetting.data.agreement.agreed :
                    listeVoiceSetting.data.tnc.defaultValue;
            });
        };
        VoiceHistory.addConversationForTesting = function (text) {
            return VoiceHistory_1.getMacAddress()
                .then(function (macAddress) { return public_2.ServiceClientAuthenticationVoiceHistory.addConversationForTesting(public_2.ServiceClientContextVoiceHistory.instance, VoiceHistory_1.getDeviceId(), macAddress || "", text); });
        };
        VoiceHistory.getConversations = function () {
            return VoiceHistory_1.getMacAddress()
                .then(function (macAddress) { return public_2.ServiceClientAuthenticationVoiceHistory.getConversations(public_2.ServiceClientContextVoiceHistory.instance, macAddress); })
                .then(function (conversations) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg(JSON.stringify(conversations), VoiceHistory_1.TAG)); });
                return conversations;
            })
                .then(function (conversations) { return conversations.data.entries
                .filter(function (conversation) { return !conversation.metaData || !conversation.metaData.deleted; })
                .map(function (conversation) {
                var requestText = conversation.request.text;
                var responseText = conversation.response.text;
                return {
                    id: conversation.id,
                    date: Date.parse(conversation.timestamp),
                    requestText: requestText,
                    responseText: responseText
                };
            })
                .sort(function (conversation1, conversation2) {
                if (conversation1.date < conversation2.date)
                    return 1;
                if (conversation1.date > conversation2.date)
                    return -1;
                return 0;
            }); });
        };
        VoiceHistory.deleteConversations = function (conversationIds) {
            return VoiceHistory_1.getMacAddress()
                .then(function (macAddress) { return public_2.ServiceClientAuthenticationVoiceHistory.deleteConversations(public_2.ServiceClientContextVoiceHistory.instance, conversationIds, macAddress); })
                .then(function (result) { return result.data; });
        };
        var VoiceHistory_1;
        VoiceHistory.classID = 0x778;
        __decorate([
            public_1.log2(function () { return ({ name: VoiceHistory_1.TAG }); })
        ], VoiceHistory, "getPrivacySettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: VoiceHistory_1.TAG }); })
        ], VoiceHistory, "setListenVoicePrivacyState", null);
        __decorate([
            public_1.log2(function () { return ({ name: VoiceHistory_1.TAG }); })
        ], VoiceHistory, "getListenVoicePrivacyState", null);
        __decorate([
            public_1.log2(function () { return ({ name: VoiceHistory_1.TAG }); })
        ], VoiceHistory, "addConversationForTesting", null);
        __decorate([
            public_1.log2(function () { return ({ name: VoiceHistory_1.TAG }); })
        ], VoiceHistory, "getConversations", null);
        __decorate([
            public_1.log2(function () { return ({ name: VoiceHistory_1.TAG, parameters: [1, 2] }); })
        ], VoiceHistory, "deleteConversations", null);
        VoiceHistory = VoiceHistory_1 = __decorate([
            public_1.logTag()
        ], VoiceHistory);
        return VoiceHistory;
    }());
    exports.VoiceHistory = VoiceHistory;
});
//# sourceMappingURL=applicationclient.voicehistory.js.map