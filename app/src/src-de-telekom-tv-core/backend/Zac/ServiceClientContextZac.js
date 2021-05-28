var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "../../configuration", "../../mock/zac"], function (require, exports, public_1, configuration_1, zac_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientContextZac = void 0;
    var ServiceClientContextZac = (function () {
        function ServiceClientContextZac() {
            var _a, _b;
            this.authManApiSetupFinalize = 5000;
            this.startupTime = Date.now();
            var zacConfig = ((_a = public_1.Configuration.instance.zenterio) === null || _a === void 0 ? void 0 : _a.zac) ? public_1.Configuration.instance.zenterio.zac : { mode: "auto" };
            var isSetTopBox = (_b = public_1.Configuration.instance.device) === null || _b === void 0 ? void 0 : _b.isSetTopBox;
            var zacMode = configuration_1.ZacMode[zacConfig.mode] || configuration_1.ZacMode.auto;
            if (isSetTopBox && zacMode == configuration_1.ZacMode.auto || zacMode == configuration_1.ZacMode.prod) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("searching object for zac api .... mode: " + configuration_1.ZacMode[zacMode], ServiceClientContextZac_1.TAG)); });
                this.zacAPI = document.getElementById("zacPluginObject");
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("object for zac api found.", ServiceClientContextZac_1.TAG)); });
            }
            else {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("using mock for zac api. mode: " + configuration_1.ZacMode[zacMode], ServiceClientContextZac_1.TAG)); });
                this.zacAPI = new zac_1.Zac();
                this.authManApiSetupFinalize = 2000;
            }
        }
        ServiceClientContextZac_1 = ServiceClientContextZac;
        ServiceClientContextZac.getReturnCodeInfo = function (returnCode) {
            return ServiceClientContextZac_1.getTypeInfo(ServiceClientContextZac_1.instance.zacAPI, [
                "OK",
                "INVALID_PARAMETER",
                "FEATURE_NOT_SUPPORTED",
                "OUT_OF_MEMORY",
                "INVALID_OPERATION",
                "OPERATION_FAILED",
                "RESTRICTED_ACCESS",
                "MEDIA_NOT_SUPPORTED",
                "SERVICE_UNAVAILABLE",
                "CONTENT_CORRUPT",
                "COMMUNICATION_ERROR",
                "INSUFFICIENT_RESOURCES",
                "UNKNOWN_ERROR",
                "RESOURCE_BUSY",
                "TIMEOUT",
                "NOT_FOUND",
                "OPERATION_INTERRUPTED",
                "OPERATION_PENDING",
                "CONTENT_EXPIRED",
                "NO_SMARTCARD",
                "CONTENT_RESTRICTION",
                "PARENTAL_CONTROL_BLOCKED",
                "NOT_SUBSCRIBED",
                "INSUFFICIENT_BANDWIDTH",
                "NOT_PROVISIONED",
                "INVALID_CREDENTIALS",
                "NOT_LOGGED_IN"
            ], returnCode);
        };
        ServiceClientContextZac.getReasonInfo = function (reason) {
            return ServiceClientContextZac_1.getTypeInfo(ServiceClientContextZac_1.instance.zacAPI, [
                "REASON_HDCP_REQUIRED_AUTH_FAIL"
            ], reason);
        };
        ServiceClientContextZac.getTypeInfo = function (obj, fields, value) {
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                if (obj[field] === value) {
                    return value + " [" + field + "]";
                }
            }
            return value + " [unknown]";
        };
        var ServiceClientContextZac_1;
        ServiceClientContextZac = ServiceClientContextZac_1 = __decorate([
            public_1.logTag()
        ], ServiceClientContextZac);
        return ServiceClientContextZac;
    }());
    exports.ServiceClientContextZac = ServiceClientContextZac;
});
//# sourceMappingURL=ServiceClientContextZac.js.map