var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "../backend/public", "bluebird", "src/src-de-telekom/public"], function (require, exports, backend, bluebird, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tds = exports.TdsParameterName = void 0;
    var TdsParameterName;
    (function (TdsParameterName) {
        TdsParameterName["SatTarif"] = "f042";
        TdsParameterName["IndicateNetflixBooked"] = "f065";
        TdsParameterName["GcpBooking"] = "f081";
        TdsParameterName["UniversalTarifIdentifier"] = "f262";
        TdsParameterName["HybridLiveTvAllowed"] = "f287";
        TdsParameterName["AbTestingGroupB"] = "f723";
        TdsParameterName["AuthorizeValidationgroupLivetv"] = "f728";
        TdsParameterName["Recommendation"] = "p100";
        TdsParameterName["ReportingForBroadcasters"] = "p172";
        TdsParameterName["InfoService"] = "p169";
        TdsParameterName["ProductImprovements"] = "p170";
        TdsParameterName["PersonalAdvertising"] = "p171";
        TdsParameterName["HandoverDataToThirdParty"] = "p173";
    })(TdsParameterName = exports.TdsParameterName || (exports.TdsParameterName = {}));
    var Tds = (function () {
        function Tds() {
        }
        Tds_1 = Tds;
        Tds.isFlagSet = function (parameterName) {
            return Tds_1.getFlagValue(parameterName)
                .then(function (response) { return (response === null || response === void 0 ? void 0 : response.value) == "1"; });
        };
        Tds.getFlagValue = function (parameterName) {
            return Tds_1.getFlagValues([parameterName])
                .then(function (response) { return response[0]; });
        };
        Tds.setFlagValue = function (parameter) {
            return Tds_1.setFlagValues([parameter]);
        };
        Tds.getFlagValues = function (parameterNames) {
            if (!parameterNames || parameterNames.length == 0)
                return bluebird.resolve([]);
            return backend.ServiceClientAuthenticationZosa.getTdsParameters(backend.ServiceClientContextZosa.instance, parameterNames)
                .then(function (response) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("RESPONSE: " + JSON.stringify(response), Tds_1.TAG)); });
                return response.data.parameters || [];
            });
        };
        Tds.setFlagValues = function (parameters) {
            if (!parameters || parameters.length == 0)
                return bluebird.resolve();
            return backend.ServiceClientAuthenticationZosa.setTdsParameters(backend.ServiceClientContextZosa.instance, parameters)
                .then(function (response) { return response.data; });
        };
        var Tds_1;
        Tds.classID = 0xD05;
        __decorate([
            public_1.log2(function () { return ({ name: Tds_1.TAG }); })
        ], Tds, "isFlagSet", null);
        __decorate([
            public_1.log2(function () { return ({ name: Tds_1.TAG }); })
        ], Tds, "getFlagValue", null);
        __decorate([
            public_1.log2(function () { return ({ name: Tds_1.TAG }); })
        ], Tds, "setFlagValue", null);
        __decorate([
            public_1.log2(function () { return ({ name: Tds_1.TAG }); })
        ], Tds, "getFlagValues", null);
        __decorate([
            public_1.log2(function () { return ({ name: Tds_1.TAG }); })
        ], Tds, "setFlagValues", null);
        Tds = Tds_1 = __decorate([
            public_1.logTag()
        ], Tds);
        return Tds;
    }());
    exports.Tds = Tds;
});
//# sourceMappingURL=applicationclient.tds.js.map