var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "./ServiceClientCache"], function (require, exports, bluebird, public_1, ServiceClientCache_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientAuthentication = void 0;
    var ServiceClientAuthentication = (function () {
        function ServiceClientAuthentication() {
        }
        ServiceClientAuthentication_1 = ServiceClientAuthentication;
        ServiceClientAuthentication.terminateSession = function () {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("clearCache token data", ServiceClientAuthentication_1.TAG)); });
            this.tokenCache.clear();
        };
        ServiceClientAuthentication.getToken = function (type, scope, cacheCallback) {
            if (type === void 0) { type = "line"; }
            var key = type + ":" + scope;
            return this.tokenCache.getValue(key) || this.tokenCache.setValue(key, cacheCallback());
        };
        ServiceClientAuthentication.authenticate = function (context, auth, callback, mtv_token) {
            var _this = this;
            var _a;
            var clients = (_a = public_1.Configuration.instance.sam3) === null || _a === void 0 ? void 0 : _a.clients;
            var client = clients && (auth.scope && clients[auth.scope] || clients.default) || { clientID: "", clientSecret: "" };
            var input = {
                acr: auth.acr,
                scope: auth.scope || this.defaultScope,
                clientID: client.clientID,
                clientSecret: client.clientSecret
            };
            if (auth.acr === "avs" || auth.acr === "userpin") {
                if (auth.dialogDataCallback) {
                    var dlg = auth.dialogDataCallback(auth.acr);
                    input.userData = JSON.stringify(dlg);
                }
                input.forceRefresh = auth.force ? "true" : "false";
            }
            return mtv_token ? callback(mtv_token) : this.getToken(input.acr, input.scope, function () { return _this.invokeTokenCallback(context, input); })
                .then(function (tokenResponse) { return callback(tokenResponse.data); });
        };
        ServiceClientAuthentication.prepareBooking = function (context, auth, id, mtv_token) {
            return this.authenticate(context, auth, function (token) { return ServiceClientCache_1.ServiceClientCache.prepareBooking(context, id, token); }, mtv_token);
        };
        ServiceClientAuthentication.confirmBooking = function (context, auth, transactionId, id, mtv_token) {
            return this.authenticate(context, auth, function (token) { return ServiceClientCache_1.ServiceClientCache.confirmBooking(context, transactionId, id, token); }, mtv_token);
        };
        ServiceClientAuthentication.getCustomerData = function (context, auth, mtv_token) {
            return this.authenticate(context, auth, function (token) { return ServiceClientCache_1.ServiceClientCache.getCustomerData(context, token); }, mtv_token);
        };
        ServiceClientAuthentication.skyBooking = function (context, auth, agbPermission, customerData, marketingPermission, transactionId, id) {
            return this.authenticate(context, auth, function (token) { return ServiceClientCache_1.ServiceClientCache.skyBooking(context, agbPermission, customerData, marketingPermission, transactionId, id, token); });
        };
        ServiceClientAuthentication.getGrants = function (context, auth, mtv_token) {
            return this.authenticate(context, auth, function (token) { return ServiceClientCache_1.ServiceClientCache.getGrants(context, token); }, mtv_token);
        };
        ServiceClientAuthentication.getContracts = function (context, auth, mtv_token) {
            return this.authenticate(context, auth, function (token) { return ServiceClientCache_1.ServiceClientCache.getContracts(context, token); }, mtv_token);
        };
        var ServiceClientAuthentication_1;
        ServiceClientAuthentication.classID = 0x506;
        ServiceClientAuthentication.tokenCache = new public_1.CacheHashMap(300, undefined, "AuthenticationTokens");
        ServiceClientAuthentication.defaultScope = "moretv";
        ServiceClientAuthentication.defaultAuthentication = { acr: undefined, scope: ServiceClientAuthentication_1.defaultScope };
        ServiceClientAuthentication.invokeTokenCallback = function (context, input) {
            return context
                .getAccessTokenCb(input)
                .then(function (input) {
                if (!input.accessToken) {
                    throw new public_1.ClientAuthorizationRequiredError("client did not return a token");
                }
                return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(input.accessToken)));
            });
        };
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthentication_1.TAG }); })
        ], ServiceClientAuthentication, "prepareBooking", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthentication_1.TAG }); })
        ], ServiceClientAuthentication, "confirmBooking", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthentication_1.TAG }); })
        ], ServiceClientAuthentication, "getCustomerData", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthentication_1.TAG }); })
        ], ServiceClientAuthentication, "skyBooking", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthentication_1.TAG }); })
        ], ServiceClientAuthentication, "getGrants", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientAuthentication_1.TAG }); })
        ], ServiceClientAuthentication, "getContracts", null);
        ServiceClientAuthentication = ServiceClientAuthentication_1 = __decorate([
            public_1.logTag()
        ], ServiceClientAuthentication);
        return ServiceClientAuthentication;
    }());
    exports.ServiceClientAuthentication = ServiceClientAuthentication;
});
//# sourceMappingURL=ServiceClientAuthentication.js.map