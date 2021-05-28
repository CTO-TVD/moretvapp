var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "./ServiceClientRest.errors"], function (require, exports, public_1, ServiceClientRest_errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientRest = exports.ServiceMethod = void 0;
    var ServiceMethod;
    (function (ServiceMethod) {
        ServiceMethod["get"] = "get";
        ServiceMethod["put"] = "put";
        ServiceMethod["delete"] = "delete";
        ServiceMethod["post"] = "post";
    })(ServiceMethod = exports.ServiceMethod || (exports.ServiceMethod = {}));
    var ServiceClientRest = (function () {
        function ServiceClientRest() {
        }
        ServiceClientRest_1 = ServiceClientRest;
        ServiceClientRest.prototype.getRestResponse = function (method, action, requestHeaders, requestParams, requestBody, logRequest) {
            if (logRequest === void 0) { logRequest = false; }
            if (logRequest)
                this.logRequest(method, action, requestHeaders, requestParams, requestBody);
            switch (method) {
                case ServiceMethod.delete:
                    return public_1.RestClient.instance.delete(action.valueOf(), requestHeaders, requestParams);
                case ServiceMethod.get:
                    return public_1.RestClient.instance.get(action.valueOf(), requestHeaders, requestParams);
                case ServiceMethod.post:
                    return public_1.RestClient.instance.post(action.valueOf(), requestHeaders, requestParams, requestBody);
                case ServiceMethod.put:
                    return public_1.RestClient.instance.put(action.valueOf(), requestHeaders, requestParams);
            }
        };
        ServiceClientRest.prototype.logRequest = function (method, action, requestHeaders, requestParams, requestBody) {
            public_1.Logger.debug(function (log) {
                log(public_1.LogMsg(method.toUpperCase() + " " + action.valueOf(), ServiceClientRest_1.TAG));
                if (requestHeaders && requestHeaders.length > 0) {
                    log(public_1.LogMsg("Headers:", ServiceClientRest_1.TAG));
                    requestHeaders.forEach(function (requestHeader) {
                        log(public_1.LogMsg(requestHeader.key + ": " + requestHeader.value, ServiceClientRest_1.TAG));
                    });
                }
                if (requestParams && requestParams.length > 0) {
                    log(public_1.LogMsg("Params:", ServiceClientRest_1.TAG));
                    requestParams.forEach(function (requestParameter) {
                        log(public_1.LogMsg(requestParameter.key + ": " + requestParameter.value, ServiceClientRest_1.TAG));
                    });
                }
                if (requestBody) {
                    log(public_1.LogMsg("" + requestBody.getContent(), ServiceClientRest_1.TAG));
                }
            });
        };
        ServiceClientRest.prototype.callBackend = function (method, action, requestHeaders, requestParams, requestBody, logRequest, logResponseHeaders) {
            if (logRequest === void 0) { logRequest = false; }
            if (logResponseHeaders === void 0) { logResponseHeaders = false; }
            return this.getRestResponse(method, action, requestHeaders, requestParams, requestBody, logRequest)
                .then(function (response) {
                if (logResponseHeaders) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("RESPONSE HEADERS:", ServiceClientRest_1.TAG)); });
                    response.responseHeader.forEach(function (header) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg(header.key + ": " + header.value + "'", ServiceClientRest_1.TAG)); });
                    });
                }
                if (response && response.statusCode >= 300) {
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("callBackend - response: '" + public_1.StringTools.dataStringify(response) + "'", ServiceClientRest_1.TAG)); });
                    if (response.statusCode === 401) {
                        throw new ServiceClientRest_errors_1.ServiceClientRestAuthenticationError("Unauthorized", response.statusCode, response.responseData);
                    }
                    if (response.statusCode === 500) {
                        throw new ServiceClientRest_errors_1.ServiceClientRestInternalServerError("Internal Server Error", response.statusCode, response.responseData);
                    }
                    throw new ServiceClientRest_errors_1.ServiceClientRestUnknownError("Unspecified backend error", response.statusCode, response.responseData);
                }
                return response;
            });
        };
        var ServiceClientRest_1;
        ServiceClientRest.classID = 0xD03;
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientRest_1.TAG }); })
        ], ServiceClientRest.prototype, "callBackend", null);
        ServiceClientRest = ServiceClientRest_1 = __decorate([
            public_1.logTag()
        ], ServiceClientRest);
        return ServiceClientRest;
    }());
    exports.ServiceClientRest = ServiceClientRest;
});
//# sourceMappingURL=ServiceClientRest.js.map