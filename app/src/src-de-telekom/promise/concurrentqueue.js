var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "./util", "../util/log/public", "../caching/CacheInfo"], function (require, exports, bluebird, util_1, public_1, CacheInfo_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConcurrentQueue = void 0;
    var ConcurrentQueue = (function () {
        function ConcurrentQueue(name, concurrency) {
            if (concurrency === void 0) { concurrency = 2; }
            this.workers = [];
            this.queue = [];
            this.lastChange = new Date().valueOf();
            this.name = name;
            if (concurrency <= 0)
                concurrency = 2;
            for (var i = 0; i < concurrency; i++) {
                this.workers.push(bluebird.resolve());
            }
            this.id = CacheInfo_1.CacheInfo.globalId++;
            CacheInfo_1.CacheInfo.registerCache(this);
        }
        ConcurrentQueue_1 = ConcurrentQueue;
        ConcurrentQueue.prototype.getObjectsCount = function () {
            return this.length;
        };
        ConcurrentQueue.prototype.getSizeInBytes = function () {
            return bluebird.all(this.queue.map(function (item) { return item.defer.promise; }))
                .then(function (responses) { return responses.map(function (response) { return JSON.stringify(response).length; }).reduce(function (a, b) { return a + b; }, 0); });
        };
        ConcurrentQueue.prototype.getLastChangeDateMs = function () {
            return this.lastChange;
        };
        ConcurrentQueue.prototype.addTail = function (task) {
            var queueData = {
                task: task,
                defer: util_1.Defer.defer()
            };
            this.queue.push(queueData);
            this.processQueue("addTail");
            return queueData.defer.promise;
        };
        ConcurrentQueue.prototype.addHead = function (task) {
            var queueData = {
                task: task,
                defer: util_1.Defer.defer()
            };
            this.queue.unshift(queueData);
            this.processQueue("addHead");
            return queueData.defer.promise;
        };
        Object.defineProperty(ConcurrentQueue.prototype, "length", {
            get: function () {
                return this.queue.length;
            },
            enumerable: false,
            configurable: true
        });
        ConcurrentQueue.prototype.processQueue = function (state) {
            var _this = this;
            if (this.queue.length > 0) {
                var _loop_1 = function (i) {
                    if (this_1.workers[i].isFulfilled()) {
                        var queueData_1 = this_1.queue.splice(0, 1)[0];
                        this_1.workers[i] = this_1.workers[i]
                            .then(function () {
                            try {
                                queueData_1.defer.resolve(queueData_1.task());
                            }
                            catch (error) {
                                queueData_1.defer.reject(error);
                            }
                            return queueData_1.defer.promise;
                        })
                            .catch(function () { return null; });
                        this_1.workers[i].then(function () { return _this.processQueue("postProcess"); });
                        return "break";
                    }
                };
                var this_1 = this;
                for (var i = 0; i < this.workers.length; i++) {
                    var state_1 = _loop_1(i);
                    if (state_1 === "break")
                        break;
                }
            }
            public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("Id: " + _this.id + ", state: " + state + ", number of items in queue: " + _this.queue.length, ConcurrentQueue_1.TAG)); });
        };
        var ConcurrentQueue_1;
        ConcurrentQueue = ConcurrentQueue_1 = __decorate([
            public_1.logTag()
        ], ConcurrentQueue);
        return ConcurrentQueue;
    }());
    exports.ConcurrentQueue = ConcurrentQueue;
});
//# sourceMappingURL=concurrentqueue.js.map