var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "./reactBaseError", "./reactBaseModule"], function (require, exports, public_1, reactBaseError_1, reactBaseModule_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReactBaseService = void 0;
    var ReactBaseService = (function () {
        function ReactBaseService() {
            var name = public_1.getPrototypes(this)[0].name;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("constructor for '" + name + "'", ReactBaseService_1.TAG)); });
        }
        ReactBaseService_1 = ReactBaseService;
        ReactBaseService.getInstance = function () {
            if (reactBaseModule_1.ReactBaseModule.currentPhase < reactBaseModule_1.ReactBaseModulePhase.config)
                throw new reactBaseError_1.ReactBaseError("ReactBaseService cannot be used outside the ReactBaseModule.");
            if (reactBaseModule_1.ReactBaseModule.currentPhase < this.minPhase)
                throw new reactBaseError_1.ReactBaseError("ReactBaseService cannot be used in the current phase '" + reactBaseModule_1.ReactBaseModulePhase[reactBaseModule_1.ReactBaseModule.currentPhase] + "'.");
            if (this === ReactBaseService_1)
                throw new reactBaseError_1.ReactBaseError("ReactBaseService cannot be used to get the specific instance. Please use the child class.");
            if (!this.instance) {
                this.instance = new this();
            }
            return this.instance;
        };
        var ReactBaseService_1;
        ReactBaseService.minPhase = reactBaseModule_1.ReactBaseModulePhase.run;
        ReactBaseService = ReactBaseService_1 = __decorate([
            public_1.logTag()
        ], ReactBaseService);
        return ReactBaseService;
    }());
    exports.ReactBaseService = ReactBaseService;
});
//# sourceMappingURL=reactBaseService.js.map