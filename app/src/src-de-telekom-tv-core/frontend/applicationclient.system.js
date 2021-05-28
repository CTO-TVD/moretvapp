var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../backend/public"], function (require, exports, bluebird, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.System = void 0;
    var System = (function () {
        function System() {
        }
        System_1 = System;
        System.getCPUModel = function () {
            return public_2.ServiceClientZac.getCustomApiSystemInfo(public_2.ServiceClientContextZac.instance).object.Call("getCPUModel").cpuModel;
        };
        System.getRAMPercentUsage = function () {
            return public_2.ServiceClientZac.getCustomApiSystemInfo(public_2.ServiceClientContextZac.instance).object.Call("getRAMPercentUsage").ramUsage;
        };
        System.getRAMFreeSpace = function () {
            return public_2.ServiceClientZac.getCustomApiSystemInfo(public_2.ServiceClientContextZac.instance).object.Call("getRAMFreeSpace").ramFreeSpace;
        };
        System.getHDDPercentUsage = function () {
            return public_2.ServiceClientZac.getCustomApiSystemInfo(public_2.ServiceClientContextZac.instance).object.Call("getHDDPercentUsage").hddUsage;
        };
        System.getModelID = function () {
            return public_2.ServiceClientZac.getCustomApiSystemInfo(public_2.ServiceClientContextZac.instance).object.Call("getModelID").stbModelId;
        };
        System.getIgmpVersion = function () {
            return public_2.ServiceClientZac.getCustomApiSystemInfo(public_2.ServiceClientContextZac.instance).object.Call("getIgmpVersion").Version;
        };
        System.getModelName = function () {
            return public_2.ServiceClientZac.getCustomApiSystemInfo(public_2.ServiceClientContextZac.instance).object.Call("getModelName").stbModelName;
        };
        System.getUiVersion = function () {
            var buildInfo = public_1.Configuration.instance.buildinfo;
            return buildInfo != null ? buildInfo.majorVersion + "." + buildInfo.buildVersion + " (" + buildInfo.buildDate + ")" : "unknown";
        };
        System.getUiBuildVersion = function () {
            var buildInfo = public_1.Configuration.instance.buildinfo;
            return buildInfo != null ? buildInfo.majorVersion + "." + buildInfo.buildVersion : "unknown";
        };
        System.getReportGenerationSwitches = function () {
            var output = public_2.ServiceClientZac.getCustomApiSystemInfo(public_2.ServiceClientContextZac.instance).object.Call("getReportGenerationSwitches", null);
            return {
                diagDataDeviceSwitch: output.diagDataDeviceSwitch == "on",
                diagDataSubscriberSwitch: output.diagDataSubscriberSwitch == "on"
            };
        };
        System.setReportGenerationSwitches = function (switches) {
            var input = {
                diagDataDeviceSwitch: switches.diagDataDeviceSwitch ? "on" : "off",
                diagDataSubscriberSwitch: switches.diagDataSubscriberSwitch ? "on" : "off"
            };
            public_2.ServiceClientZac.getCustomApiSystemInfo(public_2.ServiceClientContextZac.instance).object.Call("setReportGenerationSwitches", input);
        };
        System.getLastBootTimeMilliseconds = function () {
            var upTimeSeconds = public_2.ServiceClientZac.getUpTimeSeconds();
            var currentTimeValue = new Date().getTime();
            return currentTimeValue - (upTimeSeconds * 1000);
        };
        System.doFactoryReset = function () {
            var system = public_2.ServiceClientZac.getSystem(public_2.ServiceClientContextZac.instance);
            return public_2.ServiceClientZac.evaluateZacResponse(function () { return system.object.DoFactoryReset(system.object.FACTORYRESET_MODE_ALL); }, function (retVal) { return retVal == 2 ? "Requested factory reset level not supported" : "Unknown error"; });
        };
        System.onSystemInfoEvent = function (callback) {
            return public_2.ServiceClientZac.getCustomApiSystemInfo(public_2.ServiceClientContextZac.instance).events.onCustomAPIEvent(callback);
        };
        System.ping = function (address, numOfPackets, timeoutMs) {
            return new bluebird(function (resolve, reject) {
                var closeEvent = System_1.onSystemInfoEvent(function (event) {
                    if (event.eventType == "PingEventResponse") {
                        public_1.Logger.debug(function (log) {
                            log(public_1.LogMsg("numberOfSuccessfulPings: " + event.numberOfSuccessfulPings, System_1.TAG));
                            log(public_1.LogMsg("numberOfFailedPings: " + event.numberOfFailedPings, System_1.TAG));
                            log(public_1.LogMsg("maxPingDuration: " + event.maxPingDuration, System_1.TAG));
                            log(public_1.LogMsg("avgPingDuration: " + event.avgPingDuration, System_1.TAG));
                        });
                        closeEvent();
                        resolve(event);
                    }
                });
                var parameters = {
                    address: address,
                    numOfPackets: numOfPackets.toString(),
                    timeoutMs: timeoutMs.toString()
                };
                public_2.ServiceClientZac.getCustomApiSystemInfo(public_2.ServiceClientContextZac.instance).object.Call("ping", parameters);
            });
        };
        System.setUIVersion = function (version) {
            return bluebird.try(function () {
                var system = public_2.ServiceClientZac.getSystem(public_2.ServiceClientContextZac.instance);
                system.methods.SetAdditionalInformation(system.object.UI_VERSION, version);
            });
        };
        var System_1;
        __decorate([
            public_1.log2(function () { return ({ name: System_1.TAG }); })
        ], System, "getIgmpVersion", null);
        __decorate([
            public_1.log2(function () { return ({ name: System_1.TAG }); })
        ], System, "ping", null);
        System = System_1 = __decorate([
            public_1.logTag()
        ], System);
        return System;
    }());
    exports.System = System;
});
//# sourceMappingURL=applicationclient.system.js.map