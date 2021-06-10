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
define(["require", "exports", "URIjs/URI", "src/src-de-telekom/public", "../public", "../Rest/ServiceClientRest"], function (require, exports, urijs, public_1, public_2, ServiceClientRest_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientNetflix = void 0;
    var ServiceClientNetflix = (function (_super) {
        __extends(ServiceClientNetflix, _super);
        function ServiceClientNetflix() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ServiceClientNetflix_1 = ServiceClientNetflix;
        ServiceClientNetflix.prototype.getEsn = function (context, esn) {
            return this.processEsnOperation(context, ServiceClientRest_1.ServiceMethod.get, esn);
        };
        ServiceClientNetflix.prototype.deleteEsn = function (context, esn) {
            return this.processEsnOperation(context, ServiceClientRest_1.ServiceMethod.delete, esn);
        };
        ServiceClientNetflix.prototype.processEsnOperation = function (context, method, esn) {
            var action = urijs(context.storeEsnEndpoint).path(urijs.joinPaths(context.storeEsnEndpoint, esn).valueOf());
            var headers = this.createDefaultHeaders(ServiceClientNetflix_1.CONTENTTYPE_JSON);
            return this.getEsnResponse(method, action, headers, undefined, undefined);
        };
        ServiceClientNetflix.prototype.storeEsn = function (context, authInfo) {
            var action = urijs(context.storeEsnEndpoint);
            var entity = new public_1.JsonEntity(authInfo);
            var headers = this.createDefaultHeaders();
            return this.getEsnResponse(ServiceClientRest_1.ServiceMethod.post, action, headers, undefined, entity);
        };
        ServiceClientNetflix.prototype.getEsnResponse = function (method, action, requestHeaders, requestParams, requestBody) {
            var serviceData = new public_1.MetaInfoServiceData();
            return this.callBackend(method, action, requestHeaders, requestParams, requestBody, true)
                .then(function (data) {
                serviceData.responseTime = new Date();
                var responseData = data.responseData && data.responseData.length > 0 ? JSON.parse(data.responseData) : {};
                return new public_1.MetaInfoService(new public_1.MetaInfoData(responseData), serviceData);
            });
        };
        ServiceClientNetflix.prototype.executeGraphQL = function (context, requestData, detToken, vdid) {
            var _this = this;
            var serviceData = new public_1.MetaInfoServiceData();
            var entity = new public_1.JsonEntity(requestData);
            var headers = this.createDefaultHeaders(ServiceClientNetflix_1.CONTENTTYPE_JSON);
            headers.push(new public_1.KeyValuePair(ServiceClientNetflix_1.HEADER_DET_TOKEN, detToken));
            if (vdid) {
                headers.push(new public_1.KeyValuePair(ServiceClientNetflix_1.HEADER_VDID, vdid));
            }
            return this.callBackend(ServiceClientRest_1.ServiceMethod.post, context.detEndpoint, headers, undefined, entity, true, true)
                .then(function (data) {
                serviceData.responseTime = new Date();
                var responseData = JSON.parse(data.responseData);
                responseData.vdid = _this.getVdidHeaderValue(data.responseHeader);
                responseData.cachingGuidelines = _this.getCachingGuidelines(data.responseHeader);
                responseData.timestamp = new Date().valueOf();
                responseData.responseOverridden = _this.getResponseOverridenValue(data.responseHeader);
                return new public_1.MetaInfoService(new public_1.MetaInfoData(responseData), serviceData);
            });
        };
        ServiceClientNetflix.prototype.getVdidHeaderValue = function (responseHeader) {
            var responseVdidHeader = responseHeader.filter(function (header) { return header.key.toLowerCase() == ServiceClientNetflix_1.HEADER_VDID.toLowerCase(); })[0];
            return responseVdidHeader ? responseVdidHeader.value : undefined;
        };
        ServiceClientNetflix.prototype.getResponseOverridenValue = function (responseHeader) {
            var responseOverriddenHeader = responseHeader.filter(function (header) { return header.key.toLowerCase() == ServiceClientNetflix_1.HEADER_RESPONSE_OVERRIDDEN.toLowerCase(); })[0];
            return responseOverriddenHeader && responseOverriddenHeader.value.toLowerCase() == "true";
        };
        ServiceClientNetflix.prototype.getCachingGuidelines = function (responseHeader) {
            var expiresAtHeader = responseHeader.filter(function (header) { return header.key.toLowerCase() == ServiceClientNetflix_1.HEADER_EXPIRES_AT.toLowerCase(); })[0];
            var minRefreshWaitHeader = responseHeader.filter(function (header) { return header.key.toLowerCase() == ServiceClientNetflix_1.HEADER_MIN_REFRESH_WAIT.toLowerCase(); })[0];
            var maxRefreshWaitHeader = responseHeader.filter(function (header) { return header.key.toLowerCase() == ServiceClientNetflix_1.HEADER_MAX_REFRESH_WAIT.toLowerCase(); })[0];
            return {
                expiresAt: expiresAtHeader ? Number(expiresAtHeader.value) : undefined,
                minRefreshInterval: minRefreshWaitHeader ? Number(minRefreshWaitHeader.value) : undefined,
                maxRefreshInterval: maxRefreshWaitHeader ? Number(maxRefreshWaitHeader.value) : undefined
            };
        };
        ServiceClientNetflix.prototype.createDefaultHeaders = function (contentType) {
            var headers = new Array();
            headers.push(new public_1.KeyValuePair("Accept", ServiceClientNetflix_1.CONTENTTYPE_JSON));
            if (contentType) {
                headers.push(new public_1.KeyValuePair("Content-type", contentType));
            }
            return headers;
        };
        ServiceClientNetflix.prototype.getNetflixDetToken = function () {
            return this.getProperty("det_token");
        };
        ServiceClientNetflix.prototype.getNetflixVdid = function () {
            return this.getProperty("vdid_hdr");
        };
        ServiceClientNetflix.prototype.setNetflixVdid = function (vdid) {
            return this.setProperty("vdid_hdr", vdid);
        };
        ServiceClientNetflix.prototype.getProperty = function (propertyName) {
            try {
                var value = public_2.ServiceClientZac.getCustomApiNetflix(public_2.ServiceClientContextZac.instance).methods.getProperty(propertyName);
                return value[propertyName];
            }
            catch (error) {
                public_1.ErrorManager.catch(error, public_2.ServiceClientContextNetflix, 0x04);
                return undefined;
            }
        };
        ServiceClientNetflix.prototype.setProperty = function (propertyName, value) {
            try {
                public_2.ServiceClientZac.getCustomApiNetflix(public_2.ServiceClientContextZac.instance).methods.setProperty(propertyName, value);
            }
            catch (error) {
                public_1.ErrorManager.catch(error, public_2.ServiceClientContextNetflix, 0x05);
            }
        };
        var ServiceClientNetflix_1;
        ServiceClientNetflix.classID = 0xB02;
        ServiceClientNetflix.CONTENTTYPE_JSON = "application/json";
        ServiceClientNetflix.HEADER_DET_TOKEN = "X-NETFLIX-DET-TOKEN";
        ServiceClientNetflix.HEADER_VDID = "X-Netflix-Vdid";
        ServiceClientNetflix.HEADER_EXPIRES_AT = "X-Netflix-Expires-At";
        ServiceClientNetflix.HEADER_MIN_REFRESH_WAIT = "X-Netflix-Min-Refresh-Wait";
        ServiceClientNetflix.HEADER_MAX_REFRESH_WAIT = "X-Netflix-Max-Refresh-Wait";
        ServiceClientNetflix.HEADER_RESPONSE_OVERRIDDEN = "X-NETFLIX-RESPONSE-OVERRIDDEN";
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientNetflix_1.TAG, parameters: [1] }); })
        ], ServiceClientNetflix.prototype, "getEsn", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientNetflix_1.TAG, parameters: [1] }); })
        ], ServiceClientNetflix.prototype, "deleteEsn", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientNetflix_1.TAG, parameters: [1] }); })
        ], ServiceClientNetflix.prototype, "processEsnOperation", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientNetflix_1.TAG, parameters: [1] }); })
        ], ServiceClientNetflix.prototype, "storeEsn", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientNetflix_1.TAG, parameters: [1] }); })
        ], ServiceClientNetflix.prototype, "getEsnResponse", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientNetflix_1.TAG, parameters: [1] }); })
        ], ServiceClientNetflix.prototype, "executeGraphQL", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientNetflix_1.TAG, parameters: [1] }); })
        ], ServiceClientNetflix.prototype, "getVdidHeaderValue", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientNetflix_1.TAG, parameters: [1] }); })
        ], ServiceClientNetflix.prototype, "getResponseOverridenValue", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientNetflix_1.TAG, parameters: [1] }); })
        ], ServiceClientNetflix.prototype, "getCachingGuidelines", null);
        __decorate([
            public_1.log2(function () { return ({ name: public_2.ServiceClientContextNetflix.TAG }); })
        ], ServiceClientNetflix.prototype, "getNetflixDetToken", null);
        __decorate([
            public_1.log2(function () { return ({ name: public_2.ServiceClientContextNetflix.TAG }); })
        ], ServiceClientNetflix.prototype, "getNetflixVdid", null);
        __decorate([
            public_1.log2(function () { return ({ name: public_2.ServiceClientContextNetflix.TAG }); })
        ], ServiceClientNetflix.prototype, "setNetflixVdid", null);
        __decorate([
            public_1.log2(function () { return ({ name: public_2.ServiceClientContextNetflix.TAG }); })
        ], ServiceClientNetflix.prototype, "getProperty", null);
        __decorate([
            public_1.log2(function () { return ({ name: public_2.ServiceClientContextNetflix.TAG }); })
        ], ServiceClientNetflix.prototype, "setProperty", null);
        ServiceClientNetflix = ServiceClientNetflix_1 = __decorate([
            public_1.logTag()
        ], ServiceClientNetflix);
        return ServiceClientNetflix;
    }(ServiceClientRest_1.ServiceClientRest));
    exports.ServiceClientNetflix = ServiceClientNetflix;
});
//# sourceMappingURL=ServiceClientNetflix.js.map