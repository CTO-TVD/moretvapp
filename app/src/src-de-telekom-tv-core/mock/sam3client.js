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
define(["require", "exports", "bluebird", "URIjs/URI", "src/src-de-telekom/public"], function (require, exports, bluebird, urijs, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientSAM3 = void 0;
    var ServiceClientSAM3 = (function () {
        function ServiceClientSAM3() {
            this.NONCE = "JLTDcEQ4a654c52VnXb7";
            this.CODE_CHALLENGE = "Xs5ZDwf3XgUsS9QKNkAg";
            this.tokenStorage = new public_1.CacheHashMap(600, undefined, "Sam3TokenStorage");
            this.clientID = "";
            this.sam3endpoint = "";
            this.username = "";
            this.password = "";
            this.pin = "";
            this.avspin = "";
            this.code = "";
            this.redirectUri = "";
            this.enabled = false;
            this.loginResponse = bluebird.resolve({ access_token: "", refresh_token: "" });
            var cfg = public_1.Configuration.instance.sam3;
            if (cfg === null || cfg === void 0 ? void 0 : cfg.mock) {
                this.enabled = public_1.Guard.isNonEmptyString(cfg.mock.endpoint);
                this.clientID = cfg.mock.clientID;
                this.sam3endpoint = cfg.mock.endpoint;
                this.username = cfg.mock.username;
                this.password = cfg.mock.password;
                this.pin = cfg.mock.pin;
                this.avspin = cfg.mock.avspin;
                this.code = cfg.mock.code;
                this.redirectUri = cfg.mock.redirectUri;
            }
        }
        ServiceClientSAM3_1 = ServiceClientSAM3;
        Object.defineProperty(ServiceClientSAM3, "instance", {
            get: function () {
                return ServiceClientSAM3_1.INSTANCE || (ServiceClientSAM3_1.INSTANCE = new ServiceClientSAM3_1());
            },
            enumerable: false,
            configurable: true
        });
        ServiceClientSAM3.prototype.check = function () {
            if (!this.enabled) {
                throw Error("builtin ServiceClientSAM3 (mock) parameters are insufficient.");
            }
        };
        ServiceClientSAM3.prototype.getLineToken = function (params) {
            var _this = this;
            this.check();
            var token = this.tokenStorage.getValue(params.scope);
            if (token != null && params.forceRefresh !== "true") {
                return token.then(function (d) { return d.data; });
            }
            else {
                return this.Sam3PasswordLogin(params)
                    .then(function (data) {
                    var res = bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(data.access_token)));
                    _this.tokenStorage.setValue(params.scope, res);
                    return data.access_token;
                });
            }
        };
        ServiceClientSAM3.prototype.getPinToken = function (params, pin) {
            this.check();
            return this.Sam3PasswordLogin(params, { pin: pin })
                .then(function (data) { return data.access_token; });
        };
        ServiceClientSAM3.prototype.getAvsToken = function (params, avs) {
            this.check();
            return this.Sam3PasswordLogin(params, { avs: avs })
                .then(function (data) { return data.access_token; });
        };
        ServiceClientSAM3.prototype.getPasswordToken = function (params, password) {
            this.check();
            return this.Sam3PasswordLogin(params, { password: password })
                .then(function (data) { return data.refresh_token; });
        };
        ServiceClientSAM3.prototype.Sam3PinLogin = function (params, refreshToken, pin) {
            var args = [
                { key: "client_id", value: this.clientID },
                { key: "scope", value: params.scope },
                { key: "refresh_token", value: refreshToken },
                { key: "grant_type", value: "urn:telekom:com:grant-type:pin" },
                { key: "pin", value: pin }
            ];
            var data = new HttpFormUrlEncoded(args);
            return public_1.RestClient.instance.post(this.sam3endpoint, undefined, undefined, data)
                .then(function (response) {
                var data = JSON.parse(response.responseData);
                if (response.statusCode !== 200) {
                    data.error = JSON.parse(response.responseData);
                    data.refresh_token = refreshToken;
                }
                return data;
            });
        };
        ServiceClientSAM3.prototype.Sam3AvsLogin = function (params, refreshToken, pin) {
            var args = [
                { key: "client_id", value: this.clientID },
                { key: "scope", value: params.scope },
                { key: "refresh_token", value: refreshToken },
                { key: "grant_type", value: "urn:telekom:com:grant-type:avs-pin" },
                { key: "avs-pin", value: pin || "" }
            ];
            var data = new HttpFormUrlEncoded(args);
            return public_1.RestClient.instance.post(this.sam3endpoint, undefined, undefined, data)
                .then(function (response) {
                var data = JSON.parse(response.responseData);
                if (response.statusCode !== 200) {
                    data.error = JSON.parse(response.responseData);
                    data.refresh_token = refreshToken;
                }
                return data;
            });
        };
        ServiceClientSAM3.prototype.Sam3PasswordLogin = function (params, credentials) {
            var _this = this;
            if (credentials === void 0) { credentials = {}; }
            this.loginResponse = this.loginResponse
                .then(function (response) {
                var args = [
                    { key: "client_id", value: _this.clientID }
                ];
                if (!response.access_token && !response.refresh_token) {
                    var code_1 = _this.code;
                    if (public_1.Guard.isNonEmptyString(code_1)) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Sam3PasswordLogin - use code - " + code_1, ServiceClientSAM3_1.TAG)); });
                        args.push({ key: "grant_type", value: "authorization_code" });
                        args.push({ key: "redirect_uri", value: _this.redirectUri });
                        args.push({ key: "code_verifier", value: _this.CODE_CHALLENGE });
                        args.push({ key: "code", value: code_1 });
                        var targetUri = new urijs(window.location.href);
                        targetUri.removeQuery("sam3.mock.code");
                        window.history.replaceState({}, document.title, targetUri.toString());
                        _this.code = "";
                    }
                    else if (public_1.Guard.isNonEmptyString(_this.username)) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Sam3PasswordLogin - use username", ServiceClientSAM3_1.TAG)); });
                        args.push({ key: "scope", value: params.scope });
                        args.push({ key: "username", value: _this.username });
                        args.push({ key: "grant_type", value: "password" });
                        args.push({ key: "password", value: public_1.Guard.isString(credentials.password) ? credentials.password : _this.password });
                    }
                    else {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Sam3PasswordLogin - redirect to SAM", ServiceClientSAM3_1.TAG)); });
                        args.push({ key: "response_type", value: "code" });
                        args.push({ key: "state", value: window.location.href });
                        args.push({ key: "nonce", value: _this.NONCE });
                        args.push({ key: "code_challenge", value: _this.CODE_CHALLENGE });
                        args.push({ key: "scope", value: "openid" });
                        args.push({ key: "redirect_uri", value: _this.redirectUri });
                        args.push({ key: "logout_uri", value: _this.redirectUri });
                        var targetUri_1 = new urijs(_this.sam3endpoint);
                        targetUri_1.path("oauth2/auth");
                        args.forEach(function (item) { return targetUri_1.addQuery(item.key, item.value); });
                        window.location.replace(targetUri_1.toString());
                    }
                }
                else {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Sam3PasswordLogin - use refresh_token - " + response.refresh_token, ServiceClientSAM3_1.TAG)); });
                    if (public_1.Guard.isNonEmptyString(params.scope)) {
                        args.push({ key: "scope", value: params.scope });
                    }
                    args.push({ key: "grant_type", value: "refresh_token" });
                    args.push({ key: "refresh_token", value: response.refresh_token });
                }
                var data = new HttpFormUrlEncoded(args);
                return public_1.RestClient.instance.post(_this.sam3endpoint, [], [], data);
            })
                .then(function (response) {
                var data = JSON.parse(response.responseData);
                if (response.statusCode !== 200) {
                    data.error = JSON.parse(response.responseData);
                }
                return data;
            })
                .then(function (data) {
                if (public_1.Guard.isNonEmptyString(credentials.avs)) {
                    return _this.Sam3AvsLogin(params, data.refresh_token, credentials.avs);
                }
                else if (public_1.Guard.isNonEmptyString(credentials.pin)) {
                    return _this.Sam3PinLogin(params, data.refresh_token, credentials.pin);
                }
                return data;
            });
            return this.loginResponse
                .then(function (data) {
                if (data.error != null) {
                    throw new Error(data.error.error_description);
                }
                return data;
            });
        };
        var ServiceClientSAM3_1;
        ServiceClientSAM3 = ServiceClientSAM3_1 = __decorate([
            public_1.logTag()
        ], ServiceClientSAM3);
        return ServiceClientSAM3;
    }());
    exports.ServiceClientSAM3 = ServiceClientSAM3;
    var HttpFormUrlEncoded = (function (_super) {
        __extends(HttpFormUrlEncoded, _super);
        function HttpFormUrlEncoded(args) {
            var _this = _super.call(this) || this;
            _this.contentType = "application/x-www-form-urlencoded; charset=UTF-8";
            _this.content = args
                .map(function (it) { return encodeURIComponent(it.key) + "=" + encodeURIComponent(it.value); })
                .join("&");
            return _this;
        }
        HttpFormUrlEncoded.prototype.getContent = function () {
            return this.content;
        };
        return HttpFormUrlEncoded;
    }(public_1.HttpEntity));
});
//# sourceMappingURL=sam3client.js.map