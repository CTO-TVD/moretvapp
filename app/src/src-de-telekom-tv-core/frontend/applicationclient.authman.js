var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "../backend/public", "src/src-de-telekom/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacAuthenticationManager = void 0;
    var ZacAuthenticationManager = (function () {
        function ZacAuthenticationManager() {
        }
        ZacAuthenticationManager_1 = ZacAuthenticationManager;
        ZacAuthenticationManager.getAccessToken = function (input) {
            return public_1.ServiceClientZac.getAccessToken(public_1.ServiceClientContextZac.instance, input);
        };
        ZacAuthenticationManager.getGcpAccessToken = function (input) {
            return public_1.ServiceClientZac.getGcpAccessToken(public_1.ServiceClientContextZac.instance, input);
        };
        ZacAuthenticationManager.getIdToken = function () {
            return public_1.ServiceClientZac.getIdToken(public_1.ServiceClientContextZac.instance);
        };
        ZacAuthenticationManager.deleteRefreshToken = function () {
            return public_1.ServiceClientZac.deleteRefreshToken(public_1.ServiceClientContextZac.instance);
        };
        ZacAuthenticationManager.getAccessTokenForScope = function (scope) {
            return public_1.ServiceClientZac.getAccessTokenForScope(scope);
        };
        var ZacAuthenticationManager_1;
        __decorate([
            public_2.log2(function () { return ({ name: ZacAuthenticationManager_1.TAG }); })
        ], ZacAuthenticationManager, "getAccessToken", null);
        __decorate([
            public_2.log2(function () { return ({ name: ZacAuthenticationManager_1.TAG }); })
        ], ZacAuthenticationManager, "getGcpAccessToken", null);
        __decorate([
            public_2.log2(function () { return ({ name: ZacAuthenticationManager_1.TAG }); })
        ], ZacAuthenticationManager, "getIdToken", null);
        __decorate([
            public_2.log2(function () { return ({ name: ZacAuthenticationManager_1.TAG }); })
        ], ZacAuthenticationManager, "deleteRefreshToken", null);
        ZacAuthenticationManager = ZacAuthenticationManager_1 = __decorate([
            public_2.logTag()
        ], ZacAuthenticationManager);
        return ZacAuthenticationManager;
    }());
    exports.ZacAuthenticationManager = ZacAuthenticationManager;
});
//# sourceMappingURL=applicationclient.authman.js.map