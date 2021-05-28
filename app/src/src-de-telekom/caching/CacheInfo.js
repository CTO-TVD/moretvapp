var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "../util/log/public", "rxjs", "bluebird"], function (require, exports, public_1, rxjs_1, bluebird) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CacheInfo = void 0;
    var CacheInfo = (function () {
        function CacheInfo() {
        }
        CacheInfo_1 = CacheInfo;
        CacheInfo.registerCache = function (cacheInfo) {
            CacheInfo_1.cacheInfos[cacheInfo.id] = { cacheInfo: cacheInfo, countChanges: [] };
        };
        CacheInfo.getExternalCacheInfo = function () {
            var caches = Object.keys(CacheInfo_1.cacheInfos)
                .map(function (cacheId) { return CacheInfo_1.cacheInfos[cacheId]; });
            return bluebird.all(caches.map(function (cache) { return cache.cacheInfo.getSizeInBytes(); }))
                .then(function (getSizeResponses) { return getSizeResponses
                .map(function (cacheSize, index) {
                var cache = caches[index];
                var cacheInformation = {
                    name: cache.cacheInfo.name,
                    objectsCount: cache.cacheInfo.getObjectsCount(),
                    totalSizeBytes: cacheSize,
                    changes: cache.countChanges,
                    lastChange: cache.cacheInfo.getLastChangeDateMs()
                };
                return cacheInformation;
            })
                .filter(function (cacheInfo) { return cacheInfo.objectsCount > 0; })
                .sort(function (a, b) { return a.totalSizeBytes < b.totalSizeBytes ? 1 : -1; }); });
        };
        var CacheInfo_1;
        CacheInfo.globalId = 0;
        CacheInfo.cacheInfos = {};
        CacheInfo.objectsCountSubject = new rxjs_1.Subject();
        CacheInfo.objectsCountObservable = CacheInfo_1.objectsCountSubject.subscribe(function (data) {
            var _a;
            var cacheDynamics = CacheInfo_1.cacheInfos[data.cacheId];
            (_a = cacheDynamics.countChanges) === null || _a === void 0 ? void 0 : _a.push({ date: new Date().valueOf(), oldValue: data.oldValue, newValue: data.newValue });
        });
        CacheInfo = CacheInfo_1 = __decorate([
            public_1.logTag()
        ], CacheInfo);
        return CacheInfo;
    }());
    exports.CacheInfo = CacheInfo;
});
//# sourceMappingURL=CacheInfo.js.map