var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../public"], function (require, exports, bluebird, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientAuthenticationNetflix = exports.InvalidTokenError = void 0;
    var InvalidTokenError = (function (_super) {
        __extends(InvalidTokenError, _super);
        function InvalidTokenError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0xB07;
            return _this;
        }
        return InvalidTokenError;
    }(public_1.BaseError));
    exports.InvalidTokenError = InvalidTokenError;
    var ServiceClientAuthenticationNetflix = (function () {
        function ServiceClientAuthenticationNetflix() {
        }
        ServiceClientAuthenticationNetflix.executeGraphQLQuery = function (context, operationName, requestData) {
            var token = context.serviceClient.getNetflixDetToken() || "";
            if (token.length == 0) {
                return bluebird.reject(new InvalidTokenError("DET Token is empty."));
            }
            var vdid = context.serviceClient.getNetflixVdid();
            return public_2.ServiceClientCacheNetflix.executeGraphQLQuery(operationName, context, requestData, token, vdid)
                .then(function (response) {
                if (public_1.Guard.isDefined(response.data.vdid) && response.data.vdid.length > 0) {
                    context.serviceClient.setNetflixVdid(response.data.vdid);
                }
                return response;
            });
        };
        ServiceClientAuthenticationNetflix.storeEsn = function (context, esn, deviceId) {
            return public_2.ServiceClientZac.getAccessTokenForScope("sdpnf")
                .then(function (accessToken) { return context.serviceClient.storeEsn(context, {
                idmToken: accessToken,
                esn: esn,
                deviceId: deviceId
            }); });
        };
        ServiceClientAuthenticationNetflix.getEsn = function (context, esn) {
            return context.serviceClient.getEsn(context, esn);
        };
        ServiceClientAuthenticationNetflix.deleteEsn = function (context, esn) {
            return context.serviceClient.deleteEsn(context, esn);
        };
        ServiceClientAuthenticationNetflix.classID = 0xB04;
        ServiceClientAuthenticationNetflix = __decorate([
            public_1.logTag()
        ], ServiceClientAuthenticationNetflix);
        return ServiceClientAuthenticationNetflix;
    }());
    exports.ServiceClientAuthenticationNetflix = ServiceClientAuthenticationNetflix;
});
//# sourceMappingURL=ServiceClientAuthenticationNetflix.js.map