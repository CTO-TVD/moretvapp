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
define(["require", "exports", "bluebird", "URIjs/URI", "src/src-de-telekom/public"], function (require, exports, bluebird, urijs, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientGCP = void 0;
    var ServiceClientGCP = (function () {
        function ServiceClientGCP() {
            this.tokenStorage = new public_1.CacheHashMap(600, undefined, "GcpTokenStorage");
            this.gcpendpoint = "";
            this.basisauth = "";
            this.enabled = false;
            var cfg = public_1.Configuration.instance.gcp;
            if (cfg === null || cfg === void 0 ? void 0 : cfg.mock) {
                this.enabled = public_1.Guard.isNonEmptyString(cfg.mock.endpoint);
                this.gcpendpoint = cfg.mock.endpoint;
                this.basisauth = cfg.mock.basisAuth;
            }
        }
        Object.defineProperty(ServiceClientGCP, "instance", {
            get: function () {
                return ServiceClientGCP.INSTANCE || (ServiceClientGCP.INSTANCE = new ServiceClientGCP());
            },
            enumerable: false,
            configurable: true
        });
        ServiceClientGCP.prototype.check = function () {
            if (!this.enabled) {
                throw Error("builtin ServiceClientGCP (mock) parameters are insufficient.");
            }
        };
        ServiceClientGCP.prototype.getAccessToken = function (params) {
            var _this = this;
            this.check();
            var token = this.tokenStorage.getValue(params.scope);
            if (token != null) {
                return token.then(function (d) { return d.data; });
            }
            else {
                return this.getGcpToken(params)
                    .then(function (response) {
                    var data = JSON.parse(response.responseData);
                    if (response.statusCode !== 200) {
                        var e = JSON.parse(response.responseData);
                        throw new Error(e.error_description);
                    }
                    var res = bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(data.access_token)));
                    _this.tokenStorage.setValue(params.scope, res);
                    return data.access_token;
                });
            }
        };
        ServiceClientGCP.prototype.getGcpToken = function (params) {
            var req = this.buildMpsRequest(this.gcpendpoint, params.scope);
            return public_1.RestClient.instance.post(req.url, req.headers, undefined, req.body);
        };
        ServiceClientGCP.prototype.buildMpsRequest = function (url, scope) {
            var uri = new urijs(url);
            var request = {
                url: uri.toString(),
                headers: [],
                body: null,
            };
            var auth = "Basis " + this.basisauth;
            request.headers.push({ key: "Authorization", value: auth });
            request.body = new HttpFormUrlEncoded("client_credentials", scope);
            return request;
        };
        return ServiceClientGCP;
    }());
    exports.ServiceClientGCP = ServiceClientGCP;
    var HttpFormUrlEncoded = (function (_super) {
        __extends(HttpFormUrlEncoded, _super);
        function HttpFormUrlEncoded(grantType, scope) {
            var _this = _super.call(this) || this;
            _this.contentType = "application/x-www-form-urlencoded";
            var args = [
                { key: "grant_type", value: grantType },
                { key: "scope", value: scope }
            ];
            _this.body = args
                .map(function (it) { return encodeURIComponent(it.key) + "=" + encodeURIComponent(it.value); })
                .join("&");
            return _this;
        }
        HttpFormUrlEncoded.prototype.getContent = function () {
            return this.body;
        };
        return HttpFormUrlEncoded;
    }(public_1.HttpEntity));
});
//# sourceMappingURL=gcpclient.js.map