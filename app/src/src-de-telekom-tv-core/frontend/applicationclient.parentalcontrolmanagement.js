var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "../backend/public", "bluebird", "src/src-de-telekom/public"], function (require, exports, public_1, bluebird, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParentalControlManagement = void 0;
    var ParentalControlManagement = (function () {
        function ParentalControlManagement() {
        }
        ParentalControlManagement_1 = ParentalControlManagement;
        ParentalControlManagement.activateComfortFeature = function () {
            return public_1.ServiceClientAuthenticationZosa.activateComfortFeature(public_1.ServiceClientContextZosa.instance);
        };
        ParentalControlManagement.deactivateComfortFeature = function () {
            return public_1.ServiceClientAuthenticationZosa.deactivateComfortFeature(public_1.ServiceClientContextZosa.instance);
        };
        ParentalControlManagement.getParentalControlConfiguration = function () {
            return public_1.ServiceClientAuthenticationZosa.getParentalControlConfiguration(public_1.ServiceClientContextZosa.instance);
        };
        ParentalControlManagement.getComfortFeatureProperties = function () {
            return ParentalControlManagement_1.getParentalControlConfiguration()
                .then(function (result) {
                if (result == null || result.data == null) {
                    throw new Error("Parental control result is NULL.");
                }
                var hours = Math.floor(result.data.parentalCtrlCfg.ComfortFeature.timeDuration / 3600);
                var hoursStr = hours > 1 ? hours + " Stunden" : hours + " Stunde";
                var minutes = Math.floor(result.data.parentalCtrlCfg.ComfortFeature.timeDuration % 3600 / 60);
                var minutesStr = minutes > 0 ? " " + (hours + " Minuten") : "";
                var comfortFunctionForTimeString = hoursStr + minutesStr;
                return {
                    isSupported: result.data.parentalCtrlCfg.ComfortFeature.isSupported,
                    timeDuration: result.data.parentalCtrlCfg.ComfortFeature.timeDuration,
                    comfortFunctionForTimeString: comfortFunctionForTimeString
                };
            });
        };
        ParentalControlManagement.isComfortFeatureActive = function () {
            return public_1.ServiceClientAuthenticationZosa.isComfortFeatureActive(public_1.ServiceClientContextZosa.instance);
        };
        ParentalControlManagement.getComfortFeatureStatus = function () {
            return public_1.ServiceClientAuthenticationZosa.getComfortFeatureStatus(public_1.ServiceClientContextZosa.instance);
        };
        ParentalControlManagement.setParentalControlConfiguration = function (parameters) {
            return public_1.ServiceClientAuthenticationZosa.setParentalControlConfiguration(public_1.ServiceClientContextZosa.instance, parameters);
        };
        ParentalControlManagement.getParentalBlockingStatus = function (parameters) {
            return public_1.ServiceClientAuthenticationZosa.getParentalBlockingStatus(public_1.ServiceClientContextZosa.instance, parameters);
        };
        ParentalControlManagement.parentalUnblock = function (parameters) {
            return public_1.ServiceClientAuthenticationZosa.parentalUnblock(public_1.ServiceClientContextZosa.instance, parameters);
        };
        ParentalControlManagement.resetAllParentalUnblockings = function (parameters) {
            return public_1.ServiceClientAuthenticationZosa.resetAllParentalUnblockings(public_1.ServiceClientContextZosa.instance, parameters);
        };
        ParentalControlManagement.resetParentalUnblocking = function (parameters) {
            return public_1.ServiceClientAuthenticationZosa.resetParentalUnblocking(public_1.ServiceClientContextZosa.instance, parameters);
        };
        ParentalControlManagement.resetParentalUnblockingIfBlocked = function (parameters) {
            return ParentalControlManagement_1.getParentalBlockingStatus(parameters)
                .then(function (result) {
                if (!result.data.isBlocked) {
                    return ParentalControlManagement_1.resetParentalUnblocking(parameters);
                }
                return bluebird.resolve(null);
            });
        };
        var ParentalControlManagement_1;
        __decorate([
            public_2.log2(function () { return ({ name: ParentalControlManagement_1.TAG }); })
        ], ParentalControlManagement, "getComfortFeatureProperties", null);
        __decorate([
            public_2.log2(function () { return ({ name: ParentalControlManagement_1.TAG }); })
        ], ParentalControlManagement, "isComfortFeatureActive", null);
        __decorate([
            public_2.log2(function () { return ({ name: ParentalControlManagement_1.TAG }); })
        ], ParentalControlManagement, "getComfortFeatureStatus", null);
        __decorate([
            public_2.log2(function () { return ({ name: ParentalControlManagement_1.TAG }); })
        ], ParentalControlManagement, "getParentalBlockingStatus", null);
        __decorate([
            public_2.log2(function () { return ({ name: ParentalControlManagement_1.TAG }); })
        ], ParentalControlManagement, "resetParentalUnblocking", null);
        __decorate([
            public_2.log2(function () { return ({ name: ParentalControlManagement_1.TAG }); })
        ], ParentalControlManagement, "resetParentalUnblockingIfBlocked", null);
        ParentalControlManagement = ParentalControlManagement_1 = __decorate([
            public_2.logTag()
        ], ParentalControlManagement);
        return ParentalControlManagement;
    }());
    exports.ParentalControlManagement = ParentalControlManagement;
});
//# sourceMappingURL=applicationclient.parentalcontrolmanagement.js.map