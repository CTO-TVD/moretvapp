var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "react-dom", "bluebird", "src/src-de-telekom/public"], function (require, exports, ReactDOM, bluebird, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReactBaseModule = exports.ReactBaseModulePhase = void 0;
    var ReactBaseModulePhase;
    (function (ReactBaseModulePhase) {
        ReactBaseModulePhase[ReactBaseModulePhase["unspecified"] = 0] = "unspecified";
        ReactBaseModulePhase[ReactBaseModulePhase["config"] = 1] = "config";
        ReactBaseModulePhase[ReactBaseModulePhase["run"] = 2] = "run";
        ReactBaseModulePhase[ReactBaseModulePhase["build"] = 3] = "build";
        ReactBaseModulePhase[ReactBaseModulePhase["active"] = 4] = "active";
    })(ReactBaseModulePhase = exports.ReactBaseModulePhase || (exports.ReactBaseModulePhase = {}));
    var ReactBaseModule = (function () {
        function ReactBaseModule() {
            this.submodules = [];
            this.submodulInstances = [];
            var name = public_1.getPrototypes(this).filter(function (item) { return item.name !== "DecoratorComponent"; })[0].name;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("constructor for '" + name + "'", ReactBaseModule_1.TAG)); });
        }
        ReactBaseModule_1 = ReactBaseModule;
        Object.defineProperty(ReactBaseModule, "currentPhase", {
            get: function () {
                return ReactBaseModule_1.internalPhase;
            },
            enumerable: false,
            configurable: true
        });
        ReactBaseModule.prototype.config = function () {
        };
        ReactBaseModule.prototype.run = function () {
        };
        ReactBaseModule.prototype.active = function () {
        };
        ReactBaseModule.prototype.start = function (action, rootElementId) {
            var _this = this;
            var timeout = public_1.Configuration.instance.device.isSetTopBox ? 5000 : 0;
            public_1.Logger.info(function (log) { return log(public_1.LogMsg("starting React portal with timeout of '" + timeout + " ms' (browser garbage collector).", ReactBaseModule_1.TAG)); });
            bluebird.resolve()
                .then(function () {
                ReactBaseModule_1.internalPhase = ReactBaseModulePhase.config;
                public_1.Logger.info(function (log) { return log(public_1.LogMsg("starting phase '" + ReactBaseModulePhase[ReactBaseModule_1.internalPhase] + "'", ReactBaseModule_1.TAG)); });
                return _this.initConfig();
            })
                .delay(timeout)
                .then(function () {
                ReactBaseModule_1.internalPhase = ReactBaseModulePhase.run;
                public_1.Logger.info(function (log) { return log(public_1.LogMsg("starting phase '" + ReactBaseModulePhase[ReactBaseModule_1.internalPhase] + "'", ReactBaseModule_1.TAG)); });
                return _this.initRun();
            })
                .then(function () {
                ReactBaseModule_1.internalPhase = ReactBaseModulePhase.build;
                public_1.Logger.info(function (log) { return log(public_1.LogMsg("starting phase '" + ReactBaseModulePhase[ReactBaseModule_1.internalPhase] + "'", ReactBaseModule_1.TAG)); });
                ReactDOM.render(action(), document.getElementById(rootElementId));
            })
                .then(function () {
                ReactBaseModule_1.internalPhase = ReactBaseModulePhase.active;
                public_1.Logger.info(function (log) { return log(public_1.LogMsg("starting phase '" + ReactBaseModulePhase[ReactBaseModule_1.internalPhase] + "'", ReactBaseModule_1.TAG)); });
                return _this.initActive();
            })
                .then(function () {
                public_1.Logger.info(function (log) { return log(public_1.LogMsg("processed all phases successfully.", ReactBaseModule_1.TAG)); });
            })
                .catch(function (error) {
                public_1.Logger.error(function (log) { return log(public_1.LogMsg("Error while performing React setup. Error: " + public_1.StringTools.dataStringify(error), ReactBaseModule_1.TAG)); });
            });
        };
        ReactBaseModule.prototype.initConfig = function () {
            var _this = this;
            var process = bluebird.resolve();
            if (this.submodules.length > 0) {
                var _loop_1 = function (module) {
                    process = process.then(function () {
                        var instance = new module();
                        _this.submodulInstances.push(instance);
                        return instance.initConfig();
                    });
                };
                for (var _i = 0, _a = this.submodules; _i < _a.length; _i++) {
                    var module = _a[_i];
                    _loop_1(module);
                }
            }
            return process.then(function () { return _this.config(); });
        };
        ReactBaseModule.prototype.initRun = function () {
            var _this = this;
            var process = bluebird.resolve();
            var _loop_2 = function (instance) {
                process = process.then(function () { return instance.initRun(); });
            };
            for (var _i = 0, _a = this.submodulInstances; _i < _a.length; _i++) {
                var instance = _a[_i];
                _loop_2(instance);
            }
            return process.then(function () { return _this.run(); });
        };
        ReactBaseModule.prototype.initActive = function () {
            var _this = this;
            var process = bluebird.resolve();
            var _loop_3 = function (instance) {
                process = process.then(function () { return instance.initActive(); });
            };
            for (var _i = 0, _a = this.submodulInstances; _i < _a.length; _i++) {
                var instance = _a[_i];
                _loop_3(instance);
            }
            return process.then(function () { return _this.active(); });
        };
        var ReactBaseModule_1;
        ReactBaseModule.internalPhase = ReactBaseModulePhase.unspecified;
        ReactBaseModule = ReactBaseModule_1 = __decorate([
            public_1.logTag()
        ], ReactBaseModule);
        return ReactBaseModule;
    }());
    exports.ReactBaseModule = ReactBaseModule;
});
//# sourceMappingURL=reactBaseModule.js.map