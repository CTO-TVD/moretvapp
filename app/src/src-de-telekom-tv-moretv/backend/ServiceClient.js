var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "URIjs/URI", "bluebird", "src/src-de-telekom/public", "src/src-de-telekom-tv-core/public", "./model", "../public"], function (require, exports, urijs, bluebird, public_1, public_2, model_1, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClient = void 0;
    var ServiceClient = (function () {
        function ServiceClient(endpoints) {
            this.endpoints = endpoints;
        }
        ServiceClient_1 = ServiceClient;
        ServiceClient.prototype.getCatalogs = function () {
            return this.get({ dataUrl: this.endpoints.allCatalogsUrl, token: undefined });
        };
        ServiceClient.prototype.getPackages = function () {
            return this.get({ dataUrl: this.endpoints.allPackagesUrl, token: undefined });
        };
        ServiceClient.prototype.getPackageMappingTable = function () {
            return this.get({ dataUrl: this.endpoints.upsellingsUrl, token: undefined });
        };
        ServiceClient.prototype.getPackagebyId = function (id) {
            return this.get({ dataUrl: this.endpoints.upsellingsUrl, token: undefined, segment: id });
        };
        ServiceClient.prototype.getChannels = function () {
            return this.get({ dataUrl: this.endpoints.allChannelsUrl, token: undefined });
        };
        ServiceClient.prototype.getTermsOfUses = function () {
            return this.get({ dataUrl: this.endpoints.allTermsOfUseUrl, token: undefined });
        };
        ServiceClient.prototype.getGrants = function (auth) {
            return this.get({ dataUrl: this.endpoints.grantsUrl, token: auth.token });
        };
        ServiceClient.prototype.getContracts = function (auth) {
            return this.get({ dataUrl: this.endpoints.contractsUrl, token: auth.token });
        };
        ServiceClient.prototype.prepareBooking = function (auth, productId) {
            return this.post({ dataUrl: this.endpoints.dtBooking, token: auth.token }, new model_1.DtBookingRequest(productId, ""));
        };
        ServiceClient.prototype.confirmBooking = function (auth, productId, transactionID) {
            var commitUrl = this.endpoints.dtBooking + "/" + transactionID;
            return this.post({ dataUrl: commitUrl, token: auth.token }, new model_1.DtBookingRequest(productId, transactionID));
        };
        ServiceClient.prototype.getCustomerData = function (auth) {
            return this.get({ dataUrl: this.endpoints.customerData, token: auth.token });
        };
        ServiceClient.prototype.skyBooking = function (auth, request) {
            return this.post({ dataUrl: this.endpoints.skyBooking, token: auth.token }, request);
        };
        ServiceClient.prototype.buildRequest = function (parameters) {
            var u = new urijs(parameters.dataUrl);
            if (parameters.segment !== undefined) {
                u.segment(parameters.segment);
            }
            if (!this.ClientId) {
                var info = public_2.ServiceClientZac.getSystemInformation();
                this.ClientId = info.GUID;
                this.SessionId = new Date().getTime();
            }
            return {
                url: u.toString(),
                headers: [
                    { key: "Accept", value: "application/json" },
                    { key: "X-SessionId", value: this.SessionId },
                    { key: "X-STBSerialNumber", value: this.ClientId },
                    { key: "X-Token", value: parameters.token },
                    { key: "X-Token2", value: parameters.token }
                ]
            };
        };
        ServiceClient.prototype.get = function (parameters) {
            var _this = this;
            var req = this.buildRequest(parameters);
            return public_1.RestClient.instance.get(req.url, req.headers)
                .then(function (data) {
                return _this.parseResponse(data);
            });
        };
        ServiceClient.prototype.post = function (parameters, payload) {
            var _this = this;
            var req = this.buildRequest(parameters);
            var data = payload.getHttpEntity();
            return public_1.RestClient.instance.post(req.url, req.headers, undefined, data)
                .then(function (data) {
                return _this.parseResponse(data);
            });
        };
        ServiceClient.prototype.parseResponse = function (data) {
            var serviceData = new public_1.MetaInfoServiceData();
            var responseData = (data.responseData && data.responseData.length > 0 ? JSON.parse(data.responseData) : undefined);
            serviceData.statusCode = data.statusCode;
            if (serviceData.statusCode == 202) {
                serviceData.disableCache = true;
            }
            if (data.statusCode >= 300) {
                throw new public_3.MtvBackendError(data.statusCode, responseData && responseData.errorcode, responseData && responseData.state, responseData && responseData.errorcodedetail);
            }
            serviceData.responseTime = new Date(Date.now());
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(responseData), serviceData));
        };
        var ServiceClient_1;
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClient_1.TAG }); })
        ], ServiceClient.prototype, "get", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClient_1.TAG }); })
        ], ServiceClient.prototype, "post", null);
        ServiceClient = ServiceClient_1 = __decorate([
            public_1.logTag()
        ], ServiceClient);
        return ServiceClient;
    }());
    exports.ServiceClient = ServiceClient;
});
//# sourceMappingURL=ServiceClient.js.map