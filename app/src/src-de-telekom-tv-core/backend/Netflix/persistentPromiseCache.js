var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../Zac/ServiceClientZac", "src/src-de-telekom/caching/public"], function (require, exports, bluebird, public_1, ServiceClientZac_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PersistentPromiseCache = void 0;
    var PersistentPromiseCache = (function () {
        function PersistentPromiseCache(userStorageKey, name, getTimestampFunc, singleValueCache) {
            if (singleValueCache === void 0) { singleValueCache = true; }
            this.id = public_2.CacheInfo.globalId++;
            this.lastChange = new Date().valueOf();
            this.name = "PersistentPromiseCache";
            this.userStorageKey = userStorageKey;
            this.singleValueCache = singleValueCache;
            this.getTimestampFunc = getTimestampFunc;
            this.name = name;
            this.cache = {};
        }
        PersistentPromiseCache.prototype.getLastChangeDateMs = function () {
            return this.lastChange;
        };
        PersistentPromiseCache.prototype.getObjectsCount = function () {
            return Object.keys(this.cache).length;
        };
        PersistentPromiseCache.prototype.getSizeInBytes = function () {
            return this.getCacheInformation().then(function (cacheInfo) { return cacheInfo.totalSize; });
        };
        PersistentPromiseCache.getInstance = function (userStorageKey, name, getTimestampFunc, singleValueCache) {
            if (singleValueCache === void 0) { singleValueCache = true; }
            var cache = new PersistentPromiseCache(userStorageKey, name, getTimestampFunc, singleValueCache);
            return ServiceClientZac_1.ServiceClientZac.getUserStorageValue(userStorageKey, "")
                .then(function (value) {
                try {
                    if (value.length > 0) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Deserializing cache '" + userStorageKey + "' from user storage ...", PersistentPromiseCache.TAG)); });
                        var persistedDictionary = JSON.parse(value);
                        for (var key in persistedDictionary) {
                            var persistedValue = persistedDictionary[key];
                            cache.restoreValue(key, bluebird.resolve(persistedValue.value), persistedValue.expiryDate);
                        }
                    }
                }
                catch (error) {
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("Unable to deserialize netflix cache '" + userStorageKey + "'' from user storage: " + error, PersistentPromiseCache.TAG)); });
                }
            })
                .then(function () {
                public_2.CacheInfo.registerCache(cache);
                return cache;
            });
        };
        PersistentPromiseCache.prototype.getKey = function () {
            return this.userStorageKey;
        };
        PersistentPromiseCache.prototype.clear = function () {
            this.cache = {};
            return this.persistCache();
        };
        PersistentPromiseCache.prototype.getValue = function (key) {
            var _this = this;
            var cacheValue = this.cache[key];
            if (public_1.Guard.isUndefined(cacheValue)) {
                var cacheKeys_1 = Object.keys(this.cache);
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Cache '" + _this.userStorageKey + "' contains no value for key " + key + ". Available keys: " + cacheKeys_1.join("|"), PersistentPromiseCache.TAG)); });
                return bluebird.resolve(undefined);
            }
            if (public_1.Guard.isDefined(cacheValue.expiryDate) && new Date().valueOf() > cacheValue.expiryDate.timestamp) {
                var expiryDateString_1 = new Date(cacheValue.expiryDate.timestamp).toLocaleString();
                public_1.Logger.debug(function (log) { var _a; return log(public_1.LogMsg("Cache '" + _this.userStorageKey + "' deletes cache key '" + key + "' value because " + ((_a = cacheValue.expiryDate) === null || _a === void 0 ? void 0 : _a.description) + " date " + expiryDateString_1 + " has been reached.", PersistentPromiseCache.TAG)); });
                delete this.cache[key];
                return bluebird.resolve(undefined);
            }
            return this.cache[key].promise;
        };
        PersistentPromiseCache.prototype.restoreValue = function (key, value, expiryDate) {
            this.cache[key] = { promise: value, expiryDate: expiryDate };
        };
        PersistentPromiseCache.prototype.setValue = function (key, value, expiryDate) {
            var _this = this;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg((public_1.Guard.isDefined(_this.cache[key]) ? "Set" : "Add") + " cache entry value.", PersistentPromiseCache.TAG)); });
            if (this.singleValueCache) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Clear cache because it is defined as singleValueCache.", PersistentPromiseCache.TAG)); });
                this.cache = {};
            }
            this.cache[key] = { promise: value, expiryDate: expiryDate };
            return this.persistCache();
        };
        PersistentPromiseCache.prototype.persistCache = function () {
            var _this = this;
            return this.getAllCacheValues()
                .then(function (cacheValues) { return ServiceClientZac_1.ServiceClientZac.writeItem(_this.userStorageKey, JSON.stringify(cacheValues)); });
        };
        PersistentPromiseCache.prototype.getAllCacheValues = function () {
            var _this = this;
            var keys = Object.keys(this.cache);
            var promises = keys.map(function (key) { return _this.cache[key].promise; });
            return bluebird.all(promises)
                .then(function (values) {
                var cacheValues = {};
                values.forEach(function (value, index) {
                    var key = keys[index];
                    cacheValues[key] = { value: value, expiryDate: _this.cache[key].expiryDate };
                });
                return cacheValues;
            });
        };
        PersistentPromiseCache.prototype.getCacheInformation = function () {
            var _this = this;
            return this.getAllCacheValues()
                .then(function (allValues) {
                var cacheItemInfos = [];
                for (var key in allValues) {
                    var cacheValue = allValues[key].value;
                    var expiryDate = allValues[key].expiryDate;
                    cacheItemInfos.push({
                        sizeKey: key.length,
                        sizeValue: JSON.stringify(cacheValue).length,
                        timestamp: _this.getTimestampFunc(cacheValue),
                        expiryDate: expiryDate ? (expiryDate.description || "date") + ": " + new Date(expiryDate.timestamp).toLocaleString() : undefined
                    });
                }
                var cacheInfo = { items: cacheItemInfos, totalSize: 0 };
                cacheInfo.items.forEach(function (item) { return cacheInfo.totalSize += (item.sizeKey + item.sizeValue); });
                return cacheInfo;
            });
        };
        PersistentPromiseCache.TAG = "PersistentPromiseCache";
        __decorate([
            public_1.log2(function () { return ({ name: PersistentPromiseCache.TAG }); })
        ], PersistentPromiseCache.prototype, "clear", null);
        __decorate([
            public_1.log2(function () { return ({ name: PersistentPromiseCache.TAG }); })
        ], PersistentPromiseCache.prototype, "getValue", null);
        __decorate([
            public_1.log2(function () { return ({ name: PersistentPromiseCache.TAG }); })
        ], PersistentPromiseCache.prototype, "restoreValue", null);
        __decorate([
            public_1.log2(function () { return ({ name: PersistentPromiseCache.TAG }); })
        ], PersistentPromiseCache.prototype, "setValue", null);
        __decorate([
            public_1.log2(function () { return ({ name: PersistentPromiseCache.TAG }); })
        ], PersistentPromiseCache.prototype, "persistCache", null);
        __decorate([
            public_1.log2(function () { return ({ name: PersistentPromiseCache.TAG }); })
        ], PersistentPromiseCache.prototype, "getAllCacheValues", null);
        __decorate([
            public_1.log2(function () { return ({ name: PersistentPromiseCache.TAG }); })
        ], PersistentPromiseCache.prototype, "getCacheInformation", null);
        __decorate([
            public_1.log2(function () { return ({ name: PersistentPromiseCache.TAG }); })
        ], PersistentPromiseCache, "getInstance", null);
        return PersistentPromiseCache;
    }());
    exports.PersistentPromiseCache = PersistentPromiseCache;
});
//# sourceMappingURL=persistentPromiseCache.js.map