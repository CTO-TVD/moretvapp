var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientCacheYoutube = void 0;
    var ServiceClientCacheYoutube = (function () {
        function ServiceClientCacheYoutube() {
        }
        ServiceClientCacheYoutube_1 = ServiceClientCacheYoutube;
        ServiceClientCacheYoutube.searchList = function (context, parameters, apiKey) {
            var key = apiKey + "::" + parameters.getKeyString();
            return ServiceClientCacheYoutube_1.getCacheData(ServiceClientCacheYoutube_1.cacheSearchList, key, function () { return context.serviceClient.searchList(context, parameters, apiKey); });
        };
        ServiceClientCacheYoutube.getCacheData = function (cache, key, cacheCallback, useCache) {
            if (useCache === void 0) { useCache = true; }
            return (useCache && cache.getValue(key)) || cache.setValue(key, cacheCallback());
        };
        var ServiceClientCacheYoutube_1;
        ServiceClientCacheYoutube.classID = 0xB82;
        ServiceClientCacheYoutube.timeLevel2 = 120;
        ServiceClientCacheYoutube.cacheSearchList = new public_1.CacheHashMap(ServiceClientCacheYoutube_1.timeLevel2, undefined, "YouTubeSearchResponse");
        ServiceClientCacheYoutube.subscription = public_1.CacheManager.subscribe({
            next: function (data) {
                switch (data.reason) {
                    case "YoutubeAll":
                        ServiceClientCacheYoutube_1.cacheSearchList.clear();
                        break;
                }
            }
        });
        ServiceClientCacheYoutube = ServiceClientCacheYoutube_1 = __decorate([
            public_1.logTag()
        ], ServiceClientCacheYoutube);
        return ServiceClientCacheYoutube;
    }());
    exports.ServiceClientCacheYoutube = ServiceClientCacheYoutube;
});
//# sourceMappingURL=ServiceClientCacheYoutube.js.map