var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "./ServiceClientCacheYoutube"], function (require, exports, bluebird, public_1, ServiceClientCacheYoutube_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientAuthenticationYoutube = void 0;
    var ServiceClientAuthenticationYoutube = (function () {
        function ServiceClientAuthenticationYoutube() {
        }
        ServiceClientAuthenticationYoutube_1 = ServiceClientAuthenticationYoutube;
        ServiceClientAuthenticationYoutube.searchList = function (context, parameters) {
            return bluebird.resolve()
                .then(function () {
                return ServiceClientAuthenticationYoutube_1.authenticate(context, function (apiKey) { return ServiceClientCacheYoutube_1.ServiceClientCacheYoutube.searchList(context, parameters, apiKey); });
            });
        };
        ServiceClientAuthenticationYoutube.authenticate = function (context, callback) {
            return bluebird.resolve(context.apiKey)
                .then(function (apiKey) { return callback(apiKey); });
        };
        var ServiceClientAuthenticationYoutube_1;
        ServiceClientAuthenticationYoutube.classID = 0xB83;
        ServiceClientAuthenticationYoutube = ServiceClientAuthenticationYoutube_1 = __decorate([
            public_1.logTag()
        ], ServiceClientAuthenticationYoutube);
        return ServiceClientAuthenticationYoutube;
    }());
    exports.ServiceClientAuthenticationYoutube = ServiceClientAuthenticationYoutube;
});
//# sourceMappingURL=ServiceClientAuthenticationYoutube.js.map