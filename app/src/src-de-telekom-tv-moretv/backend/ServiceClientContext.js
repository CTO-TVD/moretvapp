define(["require", "exports", "src/src-de-telekom/public", "./ServiceClient", "./errors"], function (require, exports, public_1, ServiceClient_1, errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientContext = void 0;
    var ServiceClientContext = (function () {
        function ServiceClientContext(getAccessTokenCb) {
            this.getAccessTokenCb = getAccessTokenCb;
        }
        ServiceClientContext.prototype.createServiceClient = function () {
            if (public_1.Configuration.instance.moretv) {
                var serviceUrl = public_1.Configuration.instance.moretv.serviceUrl;
                return new ServiceClient_1.ServiceClient({
                    allPackagesUrl: serviceUrl + "/packages",
                    allCatalogsUrl: serviceUrl + "/catalogs",
                    allChannelsUrl: serviceUrl + "/channels",
                    allTermsOfUseUrl: serviceUrl + "/termsofuse",
                    upsellingsUrl: serviceUrl + "/upsellings",
                    grantsUrl: serviceUrl + "/grants",
                    contractsUrl: serviceUrl + "/contracts",
                    dtBooking: serviceUrl + "/dtBooking",
                    skyBooking: serviceUrl + "/skyBooking",
                    customerData: serviceUrl + "/customerdata"
                });
            }
            throw new errors_1.MtvConfigurationError("The configuration for MoreTV is invalid.");
        };
        Object.defineProperty(ServiceClientContext.prototype, "serviceClient", {
            get: function () {
                return this.serviceClientIntern || (this.serviceClientIntern = this.createServiceClient());
            },
            enumerable: false,
            configurable: true
        });
        return ServiceClientContext;
    }());
    exports.ServiceClientContext = ServiceClientContext;
});
//# sourceMappingURL=ServiceClientContext.js.map