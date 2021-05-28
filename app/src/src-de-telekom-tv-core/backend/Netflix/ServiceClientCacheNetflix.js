var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "./persistentPromiseCache"], function (require, exports, bluebird, public_1, persistentPromiseCache_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientCacheNetflix = void 0;
    var ServiceClientCacheNetflix = (function () {
        function ServiceClientCacheNetflix() {
        }
        ServiceClientCacheNetflix_1 = ServiceClientCacheNetflix;
        ServiceClientCacheNetflix.getRequestExpiryDate = function (requestTimestamp, cachingGuidelines) {
            var requestDate = new Date(requestTimestamp);
            var expiryDates = [];
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("_NetflixCache: Request date: " + requestDate.toLocaleString(), ServiceClientCacheNetflix_1.TAG)); });
            if (public_1.Guard.isDefined(cachingGuidelines.expiresAt)) {
                expiryDates.push({ timestamp: cachingGuidelines.expiresAt * 1000, description: "x-netflix-expires-at" });
            }
            if (public_1.Guard.isDefined(cachingGuidelines.minRefreshInterval)) {
                expiryDates.push({ timestamp: requestTimestamp + (cachingGuidelines.minRefreshInterval * 1000), description: "x-netflix-min-refresh-wait" });
            }
            if (public_1.Guard.isDefined(cachingGuidelines.maxRefreshInterval)) {
                expiryDates.push({ timestamp: requestTimestamp + (cachingGuidelines.maxRefreshInterval * 1000), description: "x-netflix-max-refresh-wait" });
            }
            expiryDates.sort(function (a, b) {
                if (a.timestamp == b.timestamp)
                    return 0;
                return a.timestamp > b.timestamp ? 1 : -1;
            });
            return expiryDates[0];
        };
        ServiceClientCacheNetflix.getCache = function (operationName, variableValues) {
            var _a;
            var variablesKey = (_a = variableValues.ids) === null || _a === void 0 ? void 0 : _a.join("|");
            var cachesKey = "" + operationName + (public_1.Guard.isDefined(variablesKey) ? "::" + variablesKey : "");
            if (public_1.Guard.isUndefined(ServiceClientCacheNetflix_1.detCaches[cachesKey])) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Adding cache " + cachesKey, ServiceClientCacheNetflix_1.TAG)); });
                ServiceClientCacheNetflix_1.lastChange = new Date().valueOf();
                ServiceClientCacheNetflix_1.detCaches[cachesKey] = persistentPromiseCache_1.PersistentPromiseCache.getInstance(cachesKey, "Netflix_DET_" + operationName, function (item) { return new Date(item.data.timestamp).toLocaleString(); });
            }
            return ServiceClientCacheNetflix_1.detCaches[cachesKey];
        };
        ServiceClientCacheNetflix.executeGraphQLQuery = function (operationName, context, requestData, token, vdid) {
            var dataPromise = context.serviceClient.executeGraphQL(context, requestData, token, vdid);
            if (operationName == "SendImpressionEvent") {
                return dataPromise;
            }
            return ServiceClientCacheNetflix_1.getCache(operationName, requestData.variables)
                .then(function (cache) {
                return cache.getValue(token)
                    .then(function (cacheValue) {
                    if (!cacheValue) {
                        return dataPromise
                            .then(function (response) {
                            var netflixResponse = response.data;
                            var expiryDate = ServiceClientCacheNetflix_1.getRequestExpiryDate(netflixResponse.timestamp, netflixResponse.cachingGuidelines);
                            return cache.setValue(token, dataPromise, expiryDate)
                                .then(function () { return response; });
                        });
                    }
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Return value from cache " + cache.getKey(), ServiceClientCacheNetflix_1.TAG)); });
                    return cacheValue;
                });
            });
        };
        ServiceClientCacheNetflix.getCachesInformation = function () {
            var returnValue = {};
            var cacheKeys = Object.keys(ServiceClientCacheNetflix_1.detCaches);
            var cacheInformationPromises = cacheKeys.map(function (cacheKey) { return ServiceClientCacheNetflix_1.detCaches[cacheKey]
                .then(function (cache) { return cache.getCacheInformation(); }); });
            return bluebird.all(cacheInformationPromises).then(function (values) {
                values.forEach(function (value, index) { return returnValue[cacheKeys[index]] = value; });
                return returnValue;
            });
        };
        ServiceClientCacheNetflix.clearCacheDet = function () {
            ServiceClientCacheNetflix_1.lastChange = new Date().valueOf();
            var promises = [];
            var _loop_1 = function (cachesKey) {
                promises.push(ServiceClientCacheNetflix_1.detCaches[cachesKey]
                    .then(function (cache) { return cache.clear(); })
                    .then(function () { delete ServiceClientCacheNetflix_1.detCaches[cachesKey]; }));
            };
            for (var cachesKey in ServiceClientCacheNetflix_1.detCaches) {
                _loop_1(cachesKey);
            }
            return bluebird.all(promises);
        };
        var ServiceClientCacheNetflix_1;
        ServiceClientCacheNetflix.TAG = "ServiceClientCacheNetflix";
        ServiceClientCacheNetflix.classID = 0xB03;
        ServiceClientCacheNetflix.detCaches = {};
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCacheNetflix_1.TAG }); })
        ], ServiceClientCacheNetflix, "getRequestExpiryDate", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCacheNetflix_1.TAG }); })
        ], ServiceClientCacheNetflix, "getCache", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCacheNetflix_1.TAG }); })
        ], ServiceClientCacheNetflix, "executeGraphQLQuery", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCacheNetflix_1.TAG }); })
        ], ServiceClientCacheNetflix, "getCachesInformation", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCacheNetflix_1.TAG }); })
        ], ServiceClientCacheNetflix, "clearCacheDet", null);
        ServiceClientCacheNetflix = ServiceClientCacheNetflix_1 = __decorate([
            public_1.logTag()
        ], ServiceClientCacheNetflix);
        return ServiceClientCacheNetflix;
    }());
    exports.ServiceClientCacheNetflix = ServiceClientCacheNetflix;
});
//# sourceMappingURL=ServiceClientCacheNetflix.js.map