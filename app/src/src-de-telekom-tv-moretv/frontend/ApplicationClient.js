var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "underscore", "src/src-de-telekom/public", "../backend/public", "../mapper/mapper", "src/src-de-telekom-tv-core/public"], function (require, exports, bluebird, _, public_1, public_2, mapper_1, Core) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ApplicationClient = void 0;
    var ApplicationClient = (function () {
        function ApplicationClient() {
        }
        ApplicationClient_1 = ApplicationClient;
        Object.defineProperty(ApplicationClient, "DefaultScope", {
            get: function () { return public_2.ServiceClientAuthentication.defaultScope; },
            enumerable: false,
            configurable: true
        });
        ApplicationClient.getCatalogs = function () {
            return public_2.ServiceClientCache.getCatalogs(public_2.ServiceClientContext.instance)
                .then(function (data) {
                return mapper_1.Mapper.parseCatalogs(data.data).filter(public_1.Guard.isDefined);
            });
        };
        ApplicationClient.getCatalog = function (id) {
            return public_2.ServiceClientCache.getCatalogs(public_2.ServiceClientContext.instance)
                .then(function (data) {
                var c = _.findWhere(data.data, { contentProvider: id });
                return c ? mapper_1.Mapper.parseCatalog(c) : undefined;
            });
        };
        ApplicationClient.getPackages = function (provider) {
            return public_2.ServiceClientCache.getPackages(public_2.ServiceClientContext.instance)
                .then(function (data) {
                if (provider !== undefined && data.data !== undefined) {
                    var filterd = _.filter(data.data, function (p) {
                        return p.contentProvider === provider;
                    });
                    return mapper_1.Mapper.parsePackages(filterd).filter(public_1.Guard.isDefined);
                }
                else {
                    return mapper_1.Mapper.parsePackages(data.data).filter(public_1.Guard.isDefined);
                }
            });
        };
        ApplicationClient.getGroupAndPacketsByCatalog = function (catalog) {
            return public_2.ServiceClientCache.getPackages(public_2.ServiceClientContext.instance)
                .then(function (data) {
                if (data.data === undefined) {
                    return undefined;
                }
                var res = [];
                for (var _i = 0, _a = catalog.DisplayGroups; _i < _a.length; _i++) {
                    var g = _a[_i];
                    var og = {
                        Title: g.Title,
                        Packages: []
                    };
                    res.push(og);
                    for (var _b = 0, _c = g.Packages; _b < _c.length; _b++) {
                        var p = _c[_b];
                        var pi = _.findWhere(data.data, { id: p });
                        if (pi) {
                            var p_1 = mapper_1.Mapper.parsePackage(pi);
                            if (p_1) {
                                og.Packages.push(p_1);
                            }
                        }
                    }
                }
                return res;
            });
        };
        ApplicationClient.getPackage = function (id) {
            return public_2.ServiceClientCache.getPackages(public_2.ServiceClientContext.instance)
                .then(function (data) {
                var p = _.findWhere(data.data, { id: id });
                if (p) {
                    return mapper_1.Mapper.parsePackage(p);
                }
                else {
                    return undefined;
                }
            });
        };
        ApplicationClient.getChannels = function () {
            return public_2.ServiceClientCache.getChannels(public_2.ServiceClientContext.instance)
                .then(function (data) {
                return mapper_1.Mapper.parseChannels(data.data).filter(public_1.Guard.isDefined);
            });
        };
        ApplicationClient.getChannel = function (id) {
            return public_2.ServiceClientCache.getChannels(public_2.ServiceClientContext.instance)
                .then(function (data) {
                var c = _.findWhere(data.data, { id: id });
                return c ? mapper_1.Mapper.parseChannel(c) : undefined;
            });
        };
        ApplicationClient.getTermsOfUses = function () {
            return public_2.ServiceClientCache.getTermsOfUses(public_2.ServiceClientContext.instance)
                .then(function (data) {
                return mapper_1.Mapper.parseTermsOfUses(data.data);
            });
        };
        ApplicationClient.getTermsOfUse = function (id) {
            return public_2.ServiceClientCache.getTermsOfUses(public_2.ServiceClientContext.instance)
                .then(function (data) {
                var t = _.findWhere(data.data, { id: id });
                return t ? mapper_1.Mapper.parseTermsOfUse(t) : undefined;
            });
        };
        ApplicationClient.prepareBooking = function (id, auth) {
            return public_2.ServiceClientAuthentication.prepareBooking(public_2.ServiceClientContext.instance, auth, id)
                .then(function (data) {
                var _a;
                return mapper_1.Mapper.parsePrepareBooking(data.data, ((_a = data.serviceData) === null || _a === void 0 ? void 0 : _a.statusCode) !== undefined ? data.serviceData.statusCode : 500);
            });
        };
        ApplicationClient.confirmBooking = function (transactionId, id, auth) {
            return public_2.ServiceClientAuthentication.confirmBooking(public_2.ServiceClientContext.instance, auth, transactionId, id)
                .then(function (data) {
                var _a;
                return mapper_1.Mapper.parsePrepareBooking(data.data, ((_a = data.serviceData) === null || _a === void 0 ? void 0 : _a.statusCode) !== undefined ? data.serviceData.statusCode : 500);
            });
        };
        ApplicationClient.getGrants = function (auth) {
            if (auth === void 0) { auth = public_2.ServiceClientAuthentication.defaultAuthentication; }
            return public_2.ServiceClientAuthentication.getGrants(public_2.ServiceClientContext.instance, auth)
                .then(function (data) {
                return mapper_1.Mapper.parseGrants(data.data);
            });
        };
        ApplicationClient.getCustomerData = function (auth) {
            return public_2.ServiceClientAuthentication.getCustomerData(public_2.ServiceClientContext.instance, auth)
                .then(function (data) {
                var _a;
                return mapper_1.Mapper.parseCustomerData(data.data, ((_a = data.serviceData) === null || _a === void 0 ? void 0 : _a.statusCode) !== undefined ? data.serviceData.statusCode : 500);
            });
        };
        ApplicationClient.skyBooking = function (agbPermission, customerData, marketingPermission, transactionId, id, auth) {
            return public_2.ServiceClientAuthentication.skyBooking(public_2.ServiceClientContext.instance, auth, agbPermission, customerData, marketingPermission, transactionId, id)
                .then(function (data) {
                return mapper_1.Mapper.parseSkyBooking(data.data);
            });
        };
        ApplicationClient.getContracts = function (auth) {
            return public_2.ServiceClientAuthentication.getContracts(public_2.ServiceClientContext.instance, auth)
                .then(function (data) {
                var _a;
                return mapper_1.Mapper.parseContracts(data.data, ((_a = data.serviceData) === null || _a === void 0 ? void 0 : _a.statusCode) !== undefined ? data.serviceData.statusCode : 500);
            });
        };
        ApplicationClient.getPackageMappingTable = function () {
            return public_2.ServiceClientCache.getPackageMappingTable(public_2.ServiceClientContext.instance)
                .then(function (data) {
                return mapper_1.Mapper.parsePackageMappingTable(data.data).filter(public_1.Guard.isDefined);
            });
        };
        ApplicationClient.isMagentaHausCustomer = function () {
            if (!public_1.Feature.has(public_1.FeatureItems.moreTvMagentaHaus, public_1.FeatureRights.viewItems)) {
                return bluebird.resolve(false);
            }
            return Core.ApplicationClient.tds.isFlagSet(Core.TdsParameterName.GcpBooking)
                .then(function (isSet) {
                isSet ? public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Flag " + Core.TdsParameterName.GcpBooking + " is SET -> MagentaHaus Customer  detected", ApplicationClient_1.TAG)); }) :
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Flag " + Core.TdsParameterName.GcpBooking + " is NOT SET -> NO MagentaHaus Customer detected", ApplicationClient_1.TAG)); });
                return isSet;
            })
                .catch(function (error) {
                public_1.Logger.warn(function (log) { return log(public_1.LogMsg("MagentaHaus detection failed. TDS isFlagSet respond: " + error, ApplicationClient_1.TAG)); });
                return bluebird.resolve(false);
            });
        };
        ApplicationClient.clearTokenCache = function () {
            return public_2.ServiceClientAuthentication.terminateSession();
        };
        var ApplicationClient_1;
        ApplicationClient.PROVIDER_SKY = "Sky";
        ApplicationClient.PROVIDER_DT = "DT";
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "getCatalogs", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "getCatalog", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "getPackages", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "getGroupAndPacketsByCatalog", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "getPackage", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "getChannels", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "getChannel", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "getTermsOfUses", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "getTermsOfUse", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "prepareBooking", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "confirmBooking", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "getGrants", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "getCustomerData", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "skyBooking", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "getContracts", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "getPackageMappingTable", null);
        __decorate([
            public_1.log2(function () { return ({ name: ApplicationClient_1.TAG }); })
        ], ApplicationClient, "isMagentaHausCustomer", null);
        ApplicationClient = ApplicationClient_1 = __decorate([
            public_1.logTag()
        ], ApplicationClient);
        return ApplicationClient;
    }());
    exports.ApplicationClient = ApplicationClient;
});
//# sourceMappingURL=ApplicationClient.js.map