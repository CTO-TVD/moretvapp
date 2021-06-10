var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
define(["require", "exports", "URIjs/URI", "src/src-de-telekom/public", "./ServiceClientContextVoiceHistory", "../Rest/ServiceClientRest"], function (require, exports, uriJS, public_1, ServiceClientContextVoiceHistory_1, ServiceClientRest_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientVoiceHistory = void 0;
    var ServiceClientVoiceHistory = (function (_super) {
        __extends(ServiceClientVoiceHistory, _super);
        function ServiceClientVoiceHistory() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ServiceClientVoiceHistory_1 = ServiceClientVoiceHistory;
        ServiceClientVoiceHistory.prototype.addConversationForTesting = function (token, apiKey, testClientMetadata, text) {
            var requestHeaders = [
                new public_1.KeyValuePair("X-Consumer-Username", "smarthub_nuance"),
                new public_1.KeyValuePair("X-Client-Metadata", JSON.stringify(testClientMetadata))
            ];
            var postData = { text: text };
            return this.callBackendAuthorized(ServiceClientRest_1.ServiceMethod.post, new uriJS(ServiceClientContextVoiceHistory_1.ServiceClientContextVoiceHistory.addConversationUrl), { apiKey: apiKey, token: token }, requestHeaders, new public_1.JsonEntity(postData), false);
        };
        ServiceClientVoiceHistory.prototype.login = function (context, token, apiKey) {
            var postData = { externalToken: token };
            return this.callBackendAuthorized(ServiceClientRest_1.ServiceMethod.post, uriJS(context.loginUrl), { apiKey: apiKey }, undefined, new public_1.JsonEntity(postData));
        };
        ServiceClientVoiceHistory.prototype.setPrivacySettings = function (context, token, apiKey, agreements) {
            var requestData = { saveAgreements: agreements };
            return this.callBackendAuthorized(ServiceClientRest_1.ServiceMethod.post, uriJS(context.privacyUrl), { apiKey: apiKey, token: token }, undefined, new public_1.JsonEntity(requestData), false);
        };
        ServiceClientVoiceHistory.prototype.getPrivacySettings = function (context, token, apiKey) {
            return this.callBackendAuthorized(ServiceClientRest_1.ServiceMethod.get, uriJS(context.privacyUrl), { apiKey: apiKey, token: token });
        };
        ServiceClientVoiceHistory.prototype.getPrivacySetting = function (context, token, apiKey, tncId) {
            var action = uriJS(context.privacyUrl).path(uriJS.joinPaths(context.privacyUrl, tncId).valueOf());
            return this.callBackendAuthorized(ServiceClientRest_1.ServiceMethod.get, action, { apiKey: apiKey, token: token });
        };
        ServiceClientVoiceHistory.prototype.getConversations = function (context, token, apiKey, targetDeviceId) {
            var now = new Date().valueOf();
            var invervalTimeSpanMs = context.maxConversationAgeDays * 24 * 60 * 60 * 1000;
            var thresholdDateInThePast = now - invervalTimeSpanMs;
            var filterParameters = {
                targetDeviceId: targetDeviceId,
                suppressErrorConversations: false,
                direction: "AFTER",
                fromDate: new Date(thresholdDateInThePast).toISOString(),
                limit: 1000
            };
            var action = uriJS(context.apiBaseUrl);
            if (filterParameters) {
                if (filterParameters.direction) {
                    action.addQuery("direction", filterParameters.direction);
                }
                if (filterParameters.fromDate) {
                    action.addQuery("fromDate", filterParameters.fromDate);
                }
                if (filterParameters.limit) {
                    action.addQuery("limit", filterParameters.limit);
                }
                if (filterParameters.suppressErrorConversations) {
                    action.addQuery("suppressErrorConversations", filterParameters.suppressErrorConversations);
                }
                if (filterParameters.targetDeviceId) {
                    action.addQuery("targetDeviceId", filterParameters.targetDeviceId);
                }
            }
            return this.callBackendAuthorized(ServiceClientRest_1.ServiceMethod.get, action, { apiKey: apiKey, token: token });
        };
        ServiceClientVoiceHistory.prototype.getBulkDeleteUrl = function (context) {
            var urlV1 = context.apiBaseUrl.replace("/v2/", "/v1/");
            return uriJS(urlV1).path(uriJS.joinPaths(urlV1, "/bulkDelete").valueOf());
        };
        ServiceClientVoiceHistory.prototype.deleteConversations = function (context, token, apiKey, conversationIds, targetDeviceId) {
            var useBulkDelete = conversationIds && conversationIds.length > 0;
            var action = useBulkDelete ? this.getBulkDeleteUrl(context) : uriJS(context.apiBaseUrl);
            var serviceMethod = useBulkDelete ? ServiceClientRest_1.ServiceMethod.post : ServiceClientRest_1.ServiceMethod.delete;
            var body = useBulkDelete ? new public_1.JsonEntity({ entries: conversationIds === null || conversationIds === void 0 ? void 0 : conversationIds.map(function (conversationId) { return ({ id: conversationId }); }) }) : undefined;
            if (!useBulkDelete && targetDeviceId) {
                action.addQuery("targetDeviceId", targetDeviceId);
            }
            return this.callBackendAuthorized(serviceMethod, action, { apiKey: apiKey, token: token }, undefined, body, false);
        };
        ServiceClientVoiceHistory.prototype.callBackendAuthorized = function (method, action, authorizationParams, requestHeaders, requestBody, parseResponse) {
            if (parseResponse === void 0) { parseResponse = true; }
            var serviceData = new public_1.MetaInfoServiceData();
            var headers = new Array();
            if (authorizationParams.token) {
                headers.push(new public_1.KeyValuePair("Authorization", "Bearer " + authorizationParams.token));
            }
            headers.push(new public_1.KeyValuePair("apikey", authorizationParams.apiKey));
            if (requestHeaders) {
                requestHeaders.forEach(function (requestHeader) { return headers.push(requestHeader); });
            }
            return this.callBackend(method, action, headers, undefined, requestBody, true, true)
                .then(function (data) {
                serviceData.responseTime = new Date();
                if (parseResponse) {
                    var responseData = JSON.parse(data.responseData);
                    return new public_1.MetaInfoService(new public_1.MetaInfoData(responseData), serviceData);
                }
                return new public_1.MetaInfoService(new public_1.MetaInfoData(), serviceData);
            });
        };
        var ServiceClientVoiceHistory_1;
        ServiceClientVoiceHistory.classID = 0xD02;
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientVoiceHistory_1.TAG, parameters: [2, 3] }); })
        ], ServiceClientVoiceHistory.prototype, "addConversationForTesting", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientVoiceHistory_1.TAG, parameters: [] }); })
        ], ServiceClientVoiceHistory.prototype, "login", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientVoiceHistory_1.TAG, parameters: [3] }); })
        ], ServiceClientVoiceHistory.prototype, "setPrivacySettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientVoiceHistory_1.TAG, parameters: [] }); })
        ], ServiceClientVoiceHistory.prototype, "getPrivacySettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientVoiceHistory_1.TAG, parameters: [3] }); })
        ], ServiceClientVoiceHistory.prototype, "getPrivacySetting", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientVoiceHistory_1.TAG, parameters: [3] }); })
        ], ServiceClientVoiceHistory.prototype, "getConversations", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientVoiceHistory_1.TAG, parameters: [] }); })
        ], ServiceClientVoiceHistory.prototype, "getBulkDeleteUrl", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientVoiceHistory_1.TAG, parameters: [3, 4] }); })
        ], ServiceClientVoiceHistory.prototype, "deleteConversations", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientVoiceHistory_1.TAG, parameters: [0, 1] }); })
        ], ServiceClientVoiceHistory.prototype, "callBackendAuthorized", null);
        ServiceClientVoiceHistory = ServiceClientVoiceHistory_1 = __decorate([
            public_1.logTag()
        ], ServiceClientVoiceHistory);
        return ServiceClientVoiceHistory;
    }(ServiceClientRest_1.ServiceClientRest));
    exports.ServiceClientVoiceHistory = ServiceClientVoiceHistory;
});
//# sourceMappingURL=ServiceClientVoiceHistory.js.map