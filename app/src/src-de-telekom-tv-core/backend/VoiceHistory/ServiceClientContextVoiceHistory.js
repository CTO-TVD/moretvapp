var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "./ServiceClientVoiceHistory", "../Rest/ServiceClientRest.errors"], function (require, exports, public_1, ServiceClientVoiceHistory_1, ServiceClientRest_errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientContextVoiceHistory = void 0;
    var ServiceClientContextVoiceHistory = (function () {
        function ServiceClientContextVoiceHistory() {
            this.internalLoginUrl = "https://staging.smartvoicehub.de/history/user/api/v1/login/";
            this.internalPrivacyUrl = "";
            this.internalApiBaseUrl = "https://environment/history/app/api/v2/conversations/";
            this.internalApiKey = "";
            this.internalMaxConversationAgeDays = 90;
            try {
                this.setup();
            }
            catch (error) {
                public_1.ErrorManager.catch(error, ServiceClientContextVoiceHistory_1, 0x01);
            }
        }
        ServiceClientContextVoiceHistory_1 = ServiceClientContextVoiceHistory;
        Object.defineProperty(ServiceClientContextVoiceHistory.prototype, "apiBaseUrl", {
            get: function () {
                return this.internalApiBaseUrl;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextVoiceHistory.prototype, "loginUrl", {
            get: function () {
                return this.internalLoginUrl;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextVoiceHistory.prototype, "privacyUrl", {
            get: function () {
                return this.internalPrivacyUrl;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextVoiceHistory.prototype, "apiKey", {
            get: function () {
                return this.internalApiKey;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextVoiceHistory.prototype, "maxConversationAgeDays", {
            get: function () {
                return this.internalMaxConversationAgeDays;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextVoiceHistory.prototype, "serviceClient", {
            get: function () {
                if (public_1.Guard.isUndefined(this.internalServiceClient)) {
                    throw new ServiceClientRest_errors_1.ServiceClientRestConfigurationError("Service client for VoiceHistory is not initialized!");
                }
                return this.internalServiceClient;
            },
            enumerable: false,
            configurable: true
        });
        ServiceClientContextVoiceHistory.prototype.setup = function () {
            var voiceHistoryConfiguration = public_1.Configuration.instance.voicehistory ? public_1.Configuration.instance.voicehistory : {};
            if (public_1.Guard.isUndefined(voiceHistoryConfiguration)) {
                throw new ServiceClientRest_errors_1.ServiceClientRestConfigurationError("Missing VoiceHistory configuration.", 0x02);
            }
            if (public_1.Guard.isUndefined(voiceHistoryConfiguration.apiBaseUrl)) {
                throw new ServiceClientRest_errors_1.ServiceClientRestConfigurationError("The VoiceHistory API base url is missing.", 0x03);
            }
            this.internalApiBaseUrl = voiceHistoryConfiguration.apiBaseUrl;
            if (public_1.Guard.isUndefined(voiceHistoryConfiguration.loginUrl)) {
                throw new ServiceClientRest_errors_1.ServiceClientRestConfigurationError("The VoiceHistory login url is missing.", 0x04);
            }
            this.internalLoginUrl = voiceHistoryConfiguration.loginUrl;
            if (public_1.Guard.isUndefined(voiceHistoryConfiguration.privacyUrl)) {
                throw new ServiceClientRest_errors_1.ServiceClientRestConfigurationError("The VoiceHistory privacy url is missing.", 0x05);
            }
            this.internalPrivacyUrl = voiceHistoryConfiguration.privacyUrl;
            if (public_1.Guard.isUndefined(voiceHistoryConfiguration.apiKey)) {
                throw new ServiceClientRest_errors_1.ServiceClientRestConfigurationError("The VoiceHistory API key is missing.", 0x06);
            }
            this.internalApiKey = voiceHistoryConfiguration.apiKey;
            if (public_1.Guard.isNumber(voiceHistoryConfiguration.maxConversationAgeDays)) {
                this.internalMaxConversationAgeDays = voiceHistoryConfiguration.maxConversationAgeDays;
            }
            this.internalServiceClient = new ServiceClientVoiceHistory_1.ServiceClientVoiceHistory();
        };
        var ServiceClientContextVoiceHistory_1;
        ServiceClientContextVoiceHistory.classID = 0xD01;
        ServiceClientContextVoiceHistory.addConversationUrl = "https://staging.smartvoicehub.de/cvi/dm/api/v1/invoke/text/json";
        ServiceClientContextVoiceHistory = ServiceClientContextVoiceHistory_1 = __decorate([
            public_1.logTag()
        ], ServiceClientContextVoiceHistory);
        return ServiceClientContextVoiceHistory;
    }());
    exports.ServiceClientContextVoiceHistory = ServiceClientContextVoiceHistory;
});
//# sourceMappingURL=ServiceClientContextVoiceHistory.js.map