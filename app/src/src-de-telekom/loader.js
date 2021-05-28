define(["require", "exports", "bluebird", "./configuration/public", "./diagnostic/public", "./net/http/public", "./util/log/public"], function (require, exports, bluebird, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.load = void 0;
    function load(configRoot) {
        public_4.Logger.setLoggerFromConfig({ loggertype: "console", loglevel: "info" });
        public_3.RestClient.instance = new public_3.RestClientXHR();
        return new public_1.ConfigurationJSON().load(public_1.Configuration.instance, configRoot)
            .then(function (configObject) {
            public_4.Logger.setLoggerFromConfig(configObject.logging);
            public_1.Feature.getInstance().loadStructure(public_1.Configuration.instance.features.featureStructure, public_1.Configuration.instance.features.assignment);
            public_2.DiagnosticManager.startResourceTiming();
            public_2.DiagnosticManager.monitorMemory();
            public_2.DiagnosticManager.monitorExecution();
            if (public_1.Configuration.instance.env !== "prod") {
                public_2.DiagnosticManager.startHooks();
            }
        })
            .catch(function (error) {
            public_4.Logger.error(function (log) { return log(public_4.LogMsg("Error loading configuration: " + error.message + " " + error.stack, "loader")); });
            return bluebird.reject(error);
        });
    }
    exports.load = load;
});
//# sourceMappingURL=loader.js.map