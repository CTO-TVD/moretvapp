var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "URIjs/URI", "src/src-de-telekom/public", "./youtube.errors"], function (require, exports, uriJS, public_1, youtube_errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientYoutube = void 0;
    var ServiceMethod;
    (function (ServiceMethod) {
        ServiceMethod[ServiceMethod["get"] = 0] = "get";
        ServiceMethod[ServiceMethod["put"] = 1] = "put";
        ServiceMethod[ServiceMethod["delete"] = 2] = "delete";
        ServiceMethod[ServiceMethod["post"] = 3] = "post";
    })(ServiceMethod || (ServiceMethod = {}));
    var ServiceClientYoutube = (function () {
        function ServiceClientYoutube() {
        }
        ServiceClientYoutube_1 = ServiceClientYoutube;
        ServiceClientYoutube.prototype.searchList = function (context, parameters, apiKey) {
            var serviceData = new public_1.MetaInfoServiceData();
            var currentTime = new Date();
            var action = uriJS(context.apiBaseUrl).path(uriJS.joinPaths(context.apiBaseUrl, "/search").valueOf());
            var headers = this.createDefaultHeaders();
            var params = new Array();
            params.push(new public_1.KeyValuePair("key", apiKey));
            params.push(new public_1.KeyValuePair("part", "snippet"));
            params.push(new public_1.KeyValuePair("channelType", "any"));
            params.push(new public_1.KeyValuePair("publishedBefore", new Date(currentTime.setHours(currentTime.getHours() - 48)).toISOString()));
            params.push(new public_1.KeyValuePair("maxResults", parameters.maxResults.toString()));
            params.push(new public_1.KeyValuePair("q", parameters.searchString));
            params.push(new public_1.KeyValuePair("relevanceLanguage", "de"));
            params.push(new public_1.KeyValuePair("regionCode", "DE"));
            params.push(new public_1.KeyValuePair("type", "video,playlist,channel"));
            if (public_1.Guard.isDefined(parameters.order)) {
                params.push(new public_1.KeyValuePair("order", parameters.order));
            }
            if (public_1.Guard.isDefined(parameters.pageToken)) {
                params.push(new public_1.KeyValuePair("pageToken", parameters.pageToken));
            }
            if (public_1.Guard.isDefined(parameters.safeSearch)) {
                params.push(new public_1.KeyValuePair("safeSearch", parameters.safeSearch));
            }
            return this.callBackend(ServiceMethod.get, action, headers, params)
                .then(function (data) {
                serviceData.responseTime = new Date();
                var responseData = JSON.parse(data.responseData);
                return new public_1.MetaInfoService(new public_1.MetaInfoData(responseData), serviceData);
            });
        };
        ServiceClientYoutube.prototype.callBackend = function (method, action, requestHeaders, requestParams, requestBody) {
            var httpCall;
            switch (method) {
                case ServiceMethod.delete:
                    httpCall = public_1.RestClient.instance.delete(action.valueOf(), requestHeaders, requestParams);
                    break;
                case ServiceMethod.get:
                    httpCall = public_1.RestClient.instance.get(action.valueOf(), requestHeaders, requestParams);
                    break;
                case ServiceMethod.post:
                    httpCall = public_1.RestClient.instance.post(action.valueOf(), requestHeaders, requestParams, requestBody);
                    break;
                case ServiceMethod.put:
                    httpCall = public_1.RestClient.instance.put(action.valueOf(), requestHeaders, requestParams);
                    break;
            }
            if (!httpCall) {
                throw new youtube_errors_1.YoutubeServiceClientError("The service client was called with an unsupported 'ServiceMethod'!");
            }
            return httpCall
                .then(function (response) {
                if (response && response.statusCode >= 300) {
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("callBackend - response: '" + public_1.StringTools.dataStringify(response) + "'", ServiceClientYoutube_1.TAG)); });
                    if (response.statusCode === 401) {
                        throw new youtube_errors_1.YoutubeAuthenticationError("Unauthorized", response.statusCode, response.responseData);
                    }
                    if (response.statusCode === 500) {
                        throw new youtube_errors_1.YoutubeInternalServerError("Internal Server Error", response.statusCode, response.responseData);
                    }
                    throw new youtube_errors_1.YoutubeUnknownError("Unspecified Youtube backend error", response.statusCode, response.responseData);
                }
                return response;
            });
        };
        ServiceClientYoutube.prototype.createDefaultHeaders = function () {
            var headers = new Array();
            headers.push(new public_1.KeyValuePair("Accept", ServiceClientYoutube_1.CONTENTTYPE_JSON));
            return headers;
        };
        var ServiceClientYoutube_1;
        ServiceClientYoutube.classID = 0xB80;
        ServiceClientYoutube.CONTENTTYPE_JSON = "application/json";
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientYoutube_1.TAG, parameters: [1] }); })
        ], ServiceClientYoutube.prototype, "searchList", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientYoutube_1.TAG }); })
        ], ServiceClientYoutube.prototype, "callBackend", null);
        ServiceClientYoutube = ServiceClientYoutube_1 = __decorate([
            public_1.logTag()
        ], ServiceClientYoutube);
        return ServiceClientYoutube;
    }());
    exports.ServiceClientYoutube = ServiceClientYoutube;
});
//# sourceMappingURL=ServiceClientYoutube.js.map