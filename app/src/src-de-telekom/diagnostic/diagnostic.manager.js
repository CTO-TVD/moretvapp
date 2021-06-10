var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define(["require", "exports", "../util/log/public", "rxjs"], function (require, exports, public_1, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticManager = void 0;
    var DiagnosticManager = (function () {
        function DiagnosticManager() {
        }
        DiagnosticManager_1 = DiagnosticManager;
        Object.defineProperty(DiagnosticManager, "intervalTasks", {
            get: function () {
                return this.tasksInterval.length;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DiagnosticManager, "timeoutTasks", {
            get: function () {
                return this.tasksTimeout.length;
            },
            enumerable: false,
            configurable: true
        });
        DiagnosticManager.startHooks = function () {
            this.hookSetTimeout();
            this.hookSetInterval();
        };
        DiagnosticManager.hookSetInterval = function () {
            var _this = this;
            var funcSetInterval = window.setInterval;
            var funcClearInterval = window.clearInterval;
            var removeTask = function (id) {
                for (var i = 0; i < _this.tasksInterval.length; i++) {
                    if (_this.tasksInterval[i].id === id) {
                        _this.tasksInterval.splice(i, 1);
                        break;
                    }
                }
            };
            window.setInterval = function (handler, timeout) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                if (typeof handler === "function") {
                    var func = function () {
                        handler();
                    };
                    var handle = funcSetInterval.apply(void 0, __spreadArrays([func, timeout], args));
                    _this.tasksInterval.push({ id: handle, delay: timeout, start: new Date() });
                    return handle;
                }
                return funcSetInterval.apply(void 0, __spreadArrays([handler, timeout], args));
            };
            window.clearInterval = function (handle) {
                removeTask(handle);
                return funcClearInterval(handle);
            };
        };
        DiagnosticManager.hookSetTimeout = function () {
            var _this = this;
            var funcSetTimeout = window.setTimeout;
            var funcClearTimeout = window.clearTimeout;
            var removeTask = function (id) {
                for (var i = 0; i < _this.tasksTimeout.length; i++) {
                    if (_this.tasksTimeout[i].id === id) {
                        _this.tasksTimeout.splice(i, 1);
                        break;
                    }
                }
            };
            window.setTimeout = function (handler, timeout) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                if (typeof handler === "function") {
                    var func = function () {
                        removeTask(handle_1);
                        handler();
                    };
                    var handle_1 = funcSetTimeout.apply(void 0, __spreadArrays([func, timeout], args));
                    _this.tasksTimeout.push({ id: handle_1, delay: timeout, start: new Date() });
                    return handle_1;
                }
                return funcSetTimeout.apply(void 0, __spreadArrays([handler, timeout], args));
            };
            window.clearTimeout = function (handle) {
                removeTask(handle);
                return funcClearTimeout(handle);
            };
        };
        DiagnosticManager.monitorExecution = function () {
            var lastTime = Date.now();
            var funcViolation = function () {
                var currentTime = Date.now();
                if (currentTime - lastTime > 200) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("execution time violation. time measured: " + (currentTime - lastTime), DiagnosticManager_1.TAG)); });
                }
                lastTime = currentTime;
                window.requestAnimationFrame(funcViolation);
            };
            public_1.Logger.debug(function () { return funcViolation(); });
        };
        DiagnosticManager.monitorMemory = function () {
            var levels = [
                { id: 0, low: 50000, high: 50000000 },
                { id: 1, low: 20000, high: 50000 },
                { id: 2, low: 10000, high: 20000 },
                { id: 3, low: 5000, high: 10000 },
                { id: 4, low: 0, high: 5000 }
            ];
            var currentLevel;
            var memoryThreshholdFreeKbPerformanceCounter = 80000;
            var funcFreeMemory = window.getFreeMemoryInBytes;
            if (funcFreeMemory) {
                setInterval(function () {
                    var currentMemoryKb = funcFreeMemory() / 1024;
                    if (currentMemoryKb < memoryThreshholdFreeKbPerformanceCounter) {
                        DiagnosticManager_1.PerformanceCounterEventObservable.next({
                            data: {
                                counterType: "Memory",
                                value: currentMemoryKb
                            }
                        });
                    }
                    var newLevel;
                    for (var _i = 0, levels_1 = levels; _i < levels_1.length; _i++) {
                        var level = levels_1[_i];
                        if (level.low <= currentMemoryKb && currentMemoryKb < level.high) {
                            newLevel = level;
                            break;
                        }
                    }
                    if (newLevel && currentLevel && newLevel.id !== currentLevel.id) {
                        currentLevel = newLevel;
                        if (currentLevel.id == 4) {
                            public_1.Logger.warn(function (log) { return log(public_1.LogMsg("The free memory reaches warn level (" + currentLevel.low + " - " + currentLevel.high + " KB), free memory: '" + currentMemoryKb.toFixed(2) + " KB'", DiagnosticManager_1.TAG)); });
                        }
                    }
                    else if (newLevel && !currentLevel) {
                        currentLevel = newLevel;
                    }
                }, 5000);
            }
        };
        DiagnosticManager.startResourceTiming = function () {
            var _a;
            if ((_a = performance === null || performance === void 0 ? void 0 : performance.getEntriesByType) === null || _a === void 0 ? void 0 : _a.call(performance, "resource")) {
                var funcWarning_1 = function (level, time, resource) {
                    var data = JSON.stringify(resource, function (key, value) { return value === 0 ? undefined : value; });
                    var message = "The resource loading time reaches warn level (" + level + "), time: '" + time.toFixed(2) + "', data: '" + data + "'";
                    public_1.Logger.warn(function (log) { return log(public_1.LogMsg(message, DiagnosticManager_1.TAG)); });
                };
                var funcCheckResouces_1 = function (bufferFull) {
                    var resources = performance.getEntriesByType("resource");
                    for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
                        var resource = resources_1[_i];
                        var time = resource.duration / 1000;
                        var timeLevel = resource.initiatorType === "img" ? 5 : 1;
                        if (time >= timeLevel && resource.initiatorType !== "script") {
                            if (time >= 1 && time < 2) {
                                funcWarning_1("1-2 s", time, resource);
                            }
                            else if (time >= 2 && time < 5) {
                                funcWarning_1("2-5 s", time, resource);
                            }
                            else if (time >= 5 && time < 10) {
                                funcWarning_1("5-10 s", time, resource);
                            }
                            else if (time >= 10 && time < 20) {
                                funcWarning_1("10-20 s", time, resource);
                            }
                            else if (time >= 20 && time < 50) {
                                funcWarning_1("20-50 s", time, resource);
                            }
                            else if (time >= 50) {
                                funcWarning_1(">50 s", time, resource);
                            }
                        }
                    }
                    performance.clearResourceTimings();
                };
                performance.onresourcetimingbufferfull = function () { return funcCheckResouces_1(true); };
                setInterval(function () { return funcCheckResouces_1(false); }, 5000);
            }
        };
        var DiagnosticManager_1;
        DiagnosticManager.tasksInterval = [];
        DiagnosticManager.tasksTimeout = [];
        DiagnosticManager.PerformanceCounterEventObservable = new rxjs_1.Subject();
        DiagnosticManager = DiagnosticManager_1 = __decorate([
            public_1.logTag()
        ], DiagnosticManager);
        return DiagnosticManager;
    }());
    exports.DiagnosticManager = DiagnosticManager;
});
//# sourceMappingURL=diagnostic.manager.js.map