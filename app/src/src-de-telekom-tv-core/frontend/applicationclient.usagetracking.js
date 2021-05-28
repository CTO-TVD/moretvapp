var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "../backend/public", "bluebird", "src/src-de-telekom/public"], function (require, exports, backend, bluebird, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UsageTracking = void 0;
    var UsageTracking = (function () {
        function UsageTracking() {
        }
        UsageTracking_1 = UsageTracking;
        UsageTracking.getCustomizeConfigParameters = function (parameters) {
            if (!parameters || parameters.length == 0)
                return bluebird.resolve([]);
            return backend.ServiceClientAuthenticationZosa.getCustomizeConfigParameters(backend.ServiceClientContextZosa.instance, parameters)
                .then(function (response) {
                return response.data.extensionInfo || [];
            });
        };
        var UsageTracking_1;
        UsageTracking.classID = 0xD06;
        __decorate([
            public_1.log2(function () { return ({ name: UsageTracking_1.TAG }); })
        ], UsageTracking, "getCustomizeConfigParameters", null);
        UsageTracking = UsageTracking_1 = __decorate([
            public_1.logTag()
        ], UsageTracking);
        return UsageTracking;
    }());
    exports.UsageTracking = UsageTracking;
});
//# sourceMappingURL=applicationclient.usagetracking.js.map