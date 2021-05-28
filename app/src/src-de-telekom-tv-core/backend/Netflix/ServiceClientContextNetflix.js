var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "URIjs/URI", "src/src-de-telekom/public", "../public"], function (require, exports, urijs, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientContextNetflix = void 0;
    var ServiceClientContextNetflix = (function () {
        function ServiceClientContextNetflix() {
            try {
                var netflixConfiguration = public_1.Configuration.instance.netflix;
                if (public_1.Guard.isUndefined(netflixConfiguration)) {
                    throw new public_2.NetflixConfigurationError("Missing Netflix configuration.", 0x01);
                }
                if (public_1.Guard.isUndefined(netflixConfiguration.storeEsnEndpoint)) {
                    throw new public_2.NetflixConfigurationError("The storeEsn endpoint is missing.", 0x0A);
                }
                this.internalStoreEsnEndpoint = netflixConfiguration.storeEsnEndpoint;
                if (public_1.Guard.isUndefined(netflixConfiguration.getEsnInfoEndpoint)) {
                    throw new public_2.NetflixConfigurationError("The getEsn endpoint is missing.", 0xFF);
                }
                this.internalGetEsnInfoEndpoint = netflixConfiguration.getEsnInfoEndpoint;
                if (public_1.Guard.isUndefined(netflixConfiguration.esnBundleRequestRepeatIntervalDays)) {
                    throw new public_2.NetflixConfigurationError("EsnBundleRequestRepeatIntervalDays config value is missing.", 0xFE);
                }
                this.internalEsnBundleRequestRepeatIntervalDays = netflixConfiguration.esnBundleRequestRepeatIntervalDays;
                if (public_1.Guard.isUndefined(netflixConfiguration.language)) {
                    throw new public_2.NetflixConfigurationError("The language definition is missing.", 0x04);
                }
                this.internalLanguage = netflixConfiguration.language;
                if (public_1.Guard.isUndefined(netflixConfiguration.detEndpoint)) {
                    throw new public_2.NetflixConfigurationError("The detEndpoint definition is missing.", 0x09);
                }
                this.internalDetEndpoint = new urijs(netflixConfiguration.detEndpoint);
                this.internalServiceClient = new public_2.ServiceClientNetflix();
            }
            catch (error) {
                public_1.ErrorManager.catch(error, ServiceClientContextNetflix_1, 0x01);
            }
        }
        ServiceClientContextNetflix_1 = ServiceClientContextNetflix;
        Object.defineProperty(ServiceClientContextNetflix.prototype, "detEndpoint", {
            get: function () {
                if (public_1.Guard.isUndefined(this.internalDetEndpoint)) {
                    throw new public_2.NetflixConfigurationError("Netflix DET endpoint is missing!");
                }
                return this.internalDetEndpoint;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextNetflix.prototype, "storeEsnEndpoint", {
            get: function () {
                if (public_1.Guard.isUndefined(this.internalStoreEsnEndpoint)) {
                    throw new public_2.NetflixConfigurationError("Netflix StoreESN endpoint is missing!");
                }
                return this.internalStoreEsnEndpoint;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextNetflix.prototype, "getEsnInfoEndpoint", {
            get: function () {
                if (public_1.Guard.isUndefined(this.internalGetEsnInfoEndpoint)) {
                    throw new public_2.NetflixConfigurationError("Netflix getESN endpoint is missing!");
                }
                return this.internalGetEsnInfoEndpoint;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextNetflix.prototype, "getEsnBundleRequestRepeatIntervalDays", {
            get: function () {
                if (public_1.Guard.isUndefined(this.internalEsnBundleRequestRepeatIntervalDays)) {
                    throw new public_2.NetflixConfigurationError("Netflix EsnBundleRequestRepeatIntervalDays is missing!");
                }
                return this.internalEsnBundleRequestRepeatIntervalDays;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextNetflix.prototype, "language", {
            get: function () {
                return this.internalLanguage || "de-DE";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextNetflix.prototype, "serviceClient", {
            get: function () {
                if (public_1.Guard.isUndefined(this.internalServiceClient)) {
                    throw new public_2.NetflixConfigurationError("Netflix service client is not initialized!");
                }
                return this.internalServiceClient;
            },
            enumerable: false,
            configurable: true
        });
        ServiceClientContextNetflix.prototype.setProperty = function (propertyName, value) {
            try {
                public_2.ServiceClientZac.getCustomApiNetflix(public_2.ServiceClientContextZac.instance).methods.setProperty(propertyName, value);
            }
            catch (error) {
                public_1.ErrorManager.catch(error, ServiceClientContextNetflix_1, 0x05);
            }
        };
        var ServiceClientContextNetflix_1;
        ServiceClientContextNetflix.classID = 0xB01;
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientContextNetflix_1.TAG }); })
        ], ServiceClientContextNetflix.prototype, "setProperty", null);
        ServiceClientContextNetflix = ServiceClientContextNetflix_1 = __decorate([
            public_1.logTag()
        ], ServiceClientContextNetflix);
        return ServiceClientContextNetflix;
    }());
    exports.ServiceClientContextNetflix = ServiceClientContextNetflix;
});
//# sourceMappingURL=ServiceClientContextNetflix.js.map