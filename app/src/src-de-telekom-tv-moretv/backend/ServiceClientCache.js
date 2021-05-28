var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "./public"], function (require, exports, public_1, backend) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientCache = void 0;
    var ServiceClientCache = (function () {
        function ServiceClientCache() {
        }
        ServiceClientCache_1 = ServiceClientCache;
        ServiceClientCache.getCacheData = function (cache, key, cacheCallback) {
            return cache.getValue(key) || cache.setValue(key, cacheCallback());
        };
        ServiceClientCache.getCatalogs = function (context) {
            return ServiceClientCache_1.getCacheData(ServiceClientCache_1.cacheEntries, "catalogs", function () { return context.serviceClient.getCatalogs(); });
        };
        ServiceClientCache.getPackages = function (context) {
            return ServiceClientCache_1.getCacheData(ServiceClientCache_1.cacheEntries, "packages", function () { return context.serviceClient.getPackages(); });
        };
        ServiceClientCache.getPackageMappingTable = function (context) {
            return ServiceClientCache_1.getCacheData(ServiceClientCache_1.cacheEntries, "mappings", function () { return context.serviceClient.getPackageMappingTable(); });
        };
        ServiceClientCache.getPackagebyId = function (context, id) {
            return ServiceClientCache_1.getCacheData(ServiceClientCache_1.cacheEntries, "package_" + id, function () { return context.serviceClient.getPackagebyId(id); });
        };
        ServiceClientCache.getChannels = function (context) {
            return ServiceClientCache_1.getCacheData(ServiceClientCache_1.cacheEntries, "channels", function () { return context.serviceClient.getChannels(); });
        };
        ServiceClientCache.getTermsOfUses = function (context) {
            return ServiceClientCache_1.getCacheData(ServiceClientCache_1.cacheEntries, "alltermsofuse", function () { return context.serviceClient.getTermsOfUses(); });
        };
        ServiceClientCache.prepareBooking = function (context, id, token) {
            return context.serviceClient.prepareBooking({ token: token }, id);
        };
        ServiceClientCache.confirmBooking = function (context, transactionId, id, token) {
            return context.serviceClient.confirmBooking({ token: token }, id, transactionId);
        };
        ServiceClientCache.getCustomerData = function (context, token) {
            return ServiceClientCache_1.getCacheData(ServiceClientCache_1.cacheEntries, "customerdata", function () { return context.serviceClient.getCustomerData({ token: token }); });
        };
        ServiceClientCache.skyBooking = function (context, agbPermission, customerData, marketingPermission, transactionId, id, token) {
            var request = new backend.SkyBookingRequest(id, transactionId, marketingPermission, agbPermission, customerData);
            return context.serviceClient
                .skyBooking({ token: token }, request);
        };
        ServiceClientCache.getGrants = function (context, token) {
            return ServiceClientCache_1.getCacheData(ServiceClientCache_1.cacheEntries, "grants", function () { return context.serviceClient.getGrants({ token: token }); });
        };
        ServiceClientCache.getContracts = function (context, token) {
            return ServiceClientCache_1.getCacheData(ServiceClientCache_1.cacheEntries, "contratcs", function () { return context.serviceClient.getContracts({ token: token }); });
        };
        var ServiceClientCache_1;
        ServiceClientCache.cacheEntries = new public_1.CacheHashMap(60 * 10, undefined, "CommonVod");
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCache_1.TAG }); })
        ], ServiceClientCache, "getCatalogs", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCache_1.TAG }); })
        ], ServiceClientCache, "getPackages", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCache_1.TAG }); })
        ], ServiceClientCache, "getPackageMappingTable", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCache_1.TAG }); })
        ], ServiceClientCache, "getPackagebyId", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCache_1.TAG }); })
        ], ServiceClientCache, "getChannels", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCache_1.TAG }); })
        ], ServiceClientCache, "getTermsOfUses", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCache_1.TAG }); })
        ], ServiceClientCache, "prepareBooking", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCache_1.TAG }); })
        ], ServiceClientCache, "confirmBooking", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCache_1.TAG }); })
        ], ServiceClientCache, "getCustomerData", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCache_1.TAG }); })
        ], ServiceClientCache, "skyBooking", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCache_1.TAG }); })
        ], ServiceClientCache, "getGrants", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientCache_1.TAG }); })
        ], ServiceClientCache, "getContracts", null);
        ServiceClientCache = ServiceClientCache_1 = __decorate([
            public_1.logTag()
        ], ServiceClientCache);
        return ServiceClientCache;
    }());
    exports.ServiceClientCache = ServiceClientCache;
});
//# sourceMappingURL=ServiceClientCache.js.map