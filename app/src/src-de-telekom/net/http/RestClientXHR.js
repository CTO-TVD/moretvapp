var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "URIjs/URI", "../../collections/KeyValuePair", "./RestClient", "../../util/Stopwatch", "../../errorhandling/BaseError", "../../util/log/LogDecorator"], function (require, exports, bluebird, urijs, KeyValuePair_1, RestClient_1, Stopwatch_1, BaseError_1, LogDecorator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RestClientXHR = void 0;
    var RestClientXHR = (function () {
        function RestClientXHR() {
        }
        RestClientXHR.prototype.get = function (action, requestHeaders, requestParams, responseType, withCredentials) {
            return this.execute("GET", responseType || "text", action, requestHeaders, requestParams, undefined, withCredentials);
        };
        RestClientXHR.prototype.put = function (action, requestHeaders, requestParams, withCredentials) {
            return this.execute("PUT", "text", action, requestHeaders, requestParams, undefined, withCredentials);
        };
        RestClientXHR.prototype.delete = function (action, requestHeaders, requestParams, withCredentials) {
            return this.execute("DELETE", "text", action, requestHeaders, requestParams, undefined, withCredentials);
        };
        RestClientXHR.prototype.post = function (action, requestHeaders, requestParams, requestBody, withCredentials) {
            return this.execute("POST", "text", action, requestHeaders, requestParams, requestBody, withCredentials);
        };
        RestClientXHR.prototype.execute = function (requestMethod, responseType, action, requestHeaders, requestParams, requestBody, withCredentials) {
            var _this = this;
            if (withCredentials === void 0) { withCredentials = false; }
            return new bluebird(function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.withCredentials = withCredentials;
                var requestData;
                var stopWatch = new Stopwatch_1.Stopwatch().start();
                var completeAction = new urijs(action);
                for (var _i = 0, _a = requestParams || []; _i < _a.length; _i++) {
                    var param = _a[_i];
                    completeAction.addQuery(param.key, param.value);
                }
                request.addEventListener("load", function () {
                    resolve({
                        statusCode: request.status,
                        responseHeader: _this.parseHeaderString(request.getAllResponseHeaders()),
                        responseData: responseType === "text" ? request.responseText : "",
                        responseBlob: responseType === "blob" ? request.response : undefined
                    });
                });
                request.addEventListener("error", function () {
                    reject(new RestClient_1.RestClientError("The request was aborted due to an error. url: " + completeAction + ", status: " + request.status + ", statustext: " + request.statusText + ", readyState: " + request.readyState + ", processing: " + stopWatch.stop().time.toFixed(2) + "ms"));
                });
                request.addEventListener("timeout", function () {
                    reject(new BaseError_1.TimeoutError("The request was aborted due to a timeout. url: " + completeAction + ", processing: " + stopWatch.stop().time.toFixed(2) + "ms"));
                });
                request.responseType = responseType;
                request.open(requestMethod, completeAction.toString(), true);
                for (var _b = 0, _c = requestHeaders || []; _b < _c.length; _b++) {
                    var header = _c[_b];
                    request.setRequestHeader(header.key, header.value);
                }
                switch (requestMethod) {
                    case "PUT":
                    case "POST":
                        {
                            if (requestBody) {
                                if (requestBody.contentType && (requestHeaders || []).every(function (header) { return header.key.toLowerCase() !== "content-type"; })) {
                                    request.setRequestHeader("Content-Type", requestBody.contentType);
                                }
                                requestData = requestBody.getContent();
                            }
                        }
                }
                request.timeout = 60000;
                request.send(requestData);
            });
        };
        RestClientXHR.prototype.parseHeaderString = function (headerString) {
            var responseHeaders = [];
            try {
                var headers = headerString.split("\u000d\u000a");
                headers.forEach(function (header) {
                    var index = header.indexOf("\u003a\u0020");
                    if (index > 0) {
                        var key = header.substring(0, index);
                        var val = header.substring(index + 2);
                        responseHeaders.push(new KeyValuePair_1.KeyValuePair(key, val));
                    }
                });
            }
            catch (error) {
            }
            return responseHeaders;
        };
        RestClientXHR.TAG = "RestClientXHR";
        __decorate([
            LogDecorator_1.log2(function () { return ({ name: RestClientXHR.TAG, logType: "verbose" }); })
        ], RestClientXHR.prototype, "get", null);
        return RestClientXHR;
    }());
    exports.RestClientXHR = RestClientXHR;
});
//# sourceMappingURL=RestClientXHR.js.map