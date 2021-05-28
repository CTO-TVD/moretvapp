var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "../util/log/public", "./MetaInfoCache", "./MetaInfoCacheData", "../errorhandling/BaseError", "../typing/public", "./CacheInfo"], function (require, exports, bluebird, public_1, MetaInfoCache_1, MetaInfoCacheData_1, BaseError_1, public_2, CacheInfo_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CacheHashMap = void 0;
    var CacheHashMap = (function () {
        function CacheHashMap(cacheTime, cacheSize, cacheName) {
            this.innerMap = Object.create(null);
            this.nextCleanupTime = 0;
            this.position = 0;
            this.lastChange = new Date().valueOf();
            this.count = 0;
            this.name = "";
            this.cacheTime = public_2.Guard.isNumber(cacheTime) ? cacheTime : 60;
            this.cacheSize = public_2.Guard.isNumber(cacheSize) ? cacheSize : 60;
            this.id = CacheInfo_1.CacheInfo.globalId++;
            this.name = cacheName ? cacheName : "cache_" + this.id;
            CacheInfo_1.CacheInfo.registerCache(this);
        }
        CacheHashMap_1 = CacheHashMap;
        CacheHashMap.prototype.getLastChangeDateMs = function () {
            return this.lastChange;
        };
        CacheHashMap.prototype.getObjectsCount = function () {
            return this.count;
        };
        CacheHashMap.prototype.getSizeInBytes = function () {
            var _this = this;
            var size = Object.keys(this.innerMap)
                .map(function (key) { return _this.innerMap[key]; })
                .map(function (value) { return JSON.stringify(value); })
                .map(function (json) { return json.length; })
                .reduce(function (a, b) { return a + b; }, 0);
            return bluebird.resolve(size);
        };
        CacheHashMap.prototype.getValue = function (key) {
            this.cleanupTime();
            var value = this.innerMap[key];
            if (value != undefined) {
                value.position = this.position++;
                return value.value;
            }
            return null;
        };
        CacheHashMap.prototype.onObjectsCountChanged = function (oldValue, newValue) {
            this.count = newValue;
            this.lastChange = new Date().valueOf();
            CacheInfo_1.CacheInfo.objectsCountSubject.next({ cacheId: this.id, oldValue: oldValue, newValue: this.count });
        };
        CacheHashMap.prototype.setValue = function (key, value) {
            var _this = this;
            if (!key || !value)
                return bluebird.reject(new BaseError_1.IllegalArgumentError("key or value is not valid for this method."));
            this.registerGlobalCleanup();
            this.cleanupTime();
            var cacheData = new MetaInfoCacheData_1.MetaInfoCacheData(new Date(Date.now() + this.cacheTime * 1000));
            if (this.innerMap[key] === undefined) {
                this.onObjectsCountChanged(this.count, this.count + 1);
            }
            this.innerMap[key] = {
                value: value
                    .then(function (data) {
                    if (data === null || data === void 0 ? void 0 : data.serviceData) {
                        if (data.serviceData.disableCache) {
                            _this.deleteValue(key, "disabled");
                        }
                        else if (data.serviceData.expires) {
                            if (cacheData.time > data.serviceData.expires) {
                                cacheData.time = data.serviceData.expires;
                                if (_this.nextCleanupTime > cacheData.time.valueOf()) {
                                    _this.nextCleanupTime = cacheData.time.valueOf();
                                }
                            }
                        }
                    }
                    return new MetaInfoCache_1.MetaInfoCache(data, cacheData);
                })
                    .catch(function (error) {
                    _this.deleteValue(key, "error");
                    return bluebird.reject(error);
                }),
                position: this.position++,
                cacheData: cacheData
            };
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("cache insert. Id: " + _this.id + " Count: " + _this.count, CacheHashMap_1.TAG)); });
            this.cleanupSize();
            return this.innerMap[key].value;
        };
        CacheHashMap.prototype.clear = function (key) {
            if (key) {
                this.deleteValue(key, "clear");
            }
            else {
                for (var key_1 in this.innerMap) {
                    this.deleteValue(key_1, "clear");
                }
            }
        };
        CacheHashMap.prototype.getKeys = function () {
            var keys = [];
            for (var key in this.innerMap) {
                keys.push(key);
            }
            return keys;
        };
        CacheHashMap.prototype.deleteValue = function (key, reason) {
            var _this = this;
            if (this.innerMap[key] !== undefined) {
                this.onObjectsCountChanged(this.count, this.count - 1);
                this.innerMap[key].value = undefined;
                this.innerMap[key] = undefined;
                delete this.innerMap[key];
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("cache remove (" + reason + "). Id: " + _this.id + " Count: " + _this.count, CacheHashMap_1.TAG)); });
            }
        };
        CacheHashMap.prototype.registerGlobalCleanup = function () {
            if (!CacheHashMap_1.globalCleanup[this.id]) {
                CacheHashMap_1.globalCleanup[this.id] = this;
            }
            if (!CacheHashMap_1.globalTimer) {
                CacheHashMap_1.globalTimer = setInterval(function () {
                    var emptyCaches = [];
                    var globalCaches = 0;
                    for (var key in CacheHashMap_1.globalCleanup) {
                        globalCaches++;
                        var currentCache = CacheHashMap_1.globalCleanup[key];
                        currentCache.cleanupTime();
                        if (currentCache.count == 0) {
                            emptyCaches.push(key);
                        }
                    }
                    for (var _i = 0, emptyCaches_1 = emptyCaches; _i < emptyCaches_1.length; _i++) {
                        var key = emptyCaches_1[_i];
                        delete CacheHashMap_1.globalCleanup[key];
                    }
                    if (globalCaches == 0) {
                        clearInterval(CacheHashMap_1.globalTimer);
                        CacheHashMap_1.globalTimer = 0;
                    }
                    public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("global cleanup processed " + globalCaches + " caches.", CacheHashMap_1.TAG)); });
                }, 10000);
            }
        };
        CacheHashMap.prototype.cleanupSize = function () {
            while (this.count > this.cacheSize) {
                var currentPosition = Number.MAX_VALUE;
                var currentKey = void 0;
                for (var key in this.innerMap) {
                    if (currentPosition > this.innerMap[key].position) {
                        currentPosition = this.innerMap[key].position;
                        currentKey = key;
                    }
                }
                if (currentKey)
                    this.deleteValue(currentKey, "sizelimit");
            }
        };
        CacheHashMap.prototype.cleanupTime = function () {
            var _this = this;
            var cacheDate = Date.now();
            if (this.nextCleanupTime <= cacheDate) {
                this.nextCleanupTime = Number.MAX_VALUE;
                for (var key in this.innerMap) {
                    var item = this.innerMap[key];
                    if (item != null) {
                        var itemTime = item.cacheData.time.valueOf();
                        if (itemTime < cacheDate) {
                            this.deleteValue(key, "timeout");
                        }
                        else if (itemTime < this.nextCleanupTime) {
                            this.nextCleanupTime = itemTime;
                        }
                    }
                }
                if (this.nextCleanupTime == Number.MAX_VALUE) {
                    this.nextCleanupTime = cacheDate + 1000;
                }
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("cleanup. Id: " + _this.id + " Count: " + _this.count + " next time: " + new Date(_this.nextCleanupTime), CacheHashMap_1.TAG)); });
            }
        };
        var CacheHashMap_1;
        CacheHashMap.globalCleanup = Object.create(null);
        CacheHashMap = CacheHashMap_1 = __decorate([
            public_1.logTag()
        ], CacheHashMap);
        return CacheHashMap;
    }());
    exports.CacheHashMap = CacheHashMap;
});
//# sourceMappingURL=CacheHashMap.js.map