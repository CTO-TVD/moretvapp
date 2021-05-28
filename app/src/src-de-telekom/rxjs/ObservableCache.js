define(["require", "exports", "rxjs/operators", "bluebird", "./operators", "../typing/guard", "../caching/CacheInfo"], function (require, exports, operators_1, bluebird, operators_2, guard_1, CacheInfo_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ObservableCache = void 0;
    var ObservableCache = (function () {
        function ObservableCache(name, cacheTimeMs) {
            this.dic = {};
            this.name = "ObservableCache";
            this.id = CacheInfo_1.CacheInfo.globalId++;
            this.cacheTimeMs = guard_1.Guard.isNumber(cacheTimeMs) ? cacheTimeMs : 60 * 1000;
            this.name = name;
            CacheInfo_1.CacheInfo.registerCache(this);
        }
        ObservableCache.prototype.getLastChangeDateMs = function () {
            return new Date().valueOf();
        };
        ObservableCache.prototype.getObjectsCount = function () {
            return Object.keys(this.dic).length;
        };
        ObservableCache.prototype.getSizeInBytes = function () {
            return bluebird.resolve(0);
        };
        ObservableCache.prototype.createCache = function (key, observable) {
            var _this = this;
            var createObservable = function () {
                ObservableCache.globalCount++;
                var dataVersion = 0;
                var isInCache = true;
                return observable()
                    .pipe(operators_1.finalize(function () {
                    if (isInCache) {
                        delete _this.dic[key];
                        ObservableCache.globalCount--;
                        isInCache = false;
                    }
                    dataVersion++;
                }), operators_1.map(function (item) { return ({ item: item, dataVersion: dataVersion }); }), operators_1.publishReplay(1), operators_2.refCountDelay(_this.cacheTimeMs), operators_1.filter(function (item) { return item.dataVersion == dataVersion; }), operators_1.map(function (item) { return item.item; }));
            };
            return this.dic[key] || (this.dic[key] = createObservable());
        };
        ObservableCache.globalCount = 0;
        return ObservableCache;
    }());
    exports.ObservableCache = ObservableCache;
});
//# sourceMappingURL=ObservableCache.js.map