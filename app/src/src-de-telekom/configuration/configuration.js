define(["require", "exports", "URIjs/URI", "../util/log/public"], function (require, exports, urijs, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Configuration = void 0;
    var Configuration = (function () {
        function Configuration() {
            this.features = {
                assignment: [],
                featureStructure: null
            };
            this.device = {
                isSetTopBox: false,
                isProductionMode: false
            };
        }
        Configuration.prototype.loadValuesFromUrl = function () {
            if (this.startUrl) {
                var queries = urijs(this.startUrl).query(true);
                for (var key in queries) {
                    if (queries.hasOwnProperty(key)) {
                        var parts = key.split(".");
                        var valueKey = parts.splice(parts.length - 1)[0];
                        var configPart = this;
                        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                            var part = parts_1[_i];
                            configPart = configPart[part];
                            if (typeof configPart !== "object") {
                                configPart = undefined;
                                break;
                            }
                        }
                        if (configPart) {
                            if (typeof configPart[valueKey] === "number") {
                                configPart[valueKey] = Number(queries[key]);
                            }
                            else if (typeof configPart[valueKey] === "string") {
                                configPart[valueKey] = String(queries[key]);
                            }
                            else if (typeof configPart[valueKey] === "boolean") {
                                configPart[valueKey] = queries[key] === "true";
                            }
                            else if (Array.isArray(configPart[valueKey])) {
                                var refValue = configPart[valueKey][0];
                                var queryValue = (queries[key] || "");
                                if (typeof refValue === "number") {
                                    configPart[valueKey] = queryValue.split("~").map(function (item) { return Number(item); });
                                }
                                else if (typeof refValue === "string") {
                                    configPart[valueKey] = queryValue.split("~").map(function (item) { return String(item); });
                                }
                                else if (typeof refValue === "boolean") {
                                    configPart[valueKey] = queryValue.split("~").map(function (item) { return item === "true"; });
                                }
                            }
                        }
                    }
                }
            }
        };
        Configuration.prototype.initializeValues = function () {
            if (typeof window !== "undefined") {
                var zacPluginObject_1 = document.getElementById("zacPluginObject");
                if (zacPluginObject_1) {
                    if (zacPluginObject_1.System) {
                        public_1.Logger.info(function (log) { return log(public_1.LogMsg("portal has detected the STB mode. System: " + zacPluginObject_1.System + " INSUFFICIENT_BANDWIDTH: " + zacPluginObject_1.INSUFFICIENT_BANDWIDTH, Configuration.TAG)); });
                        this.device.isSetTopBox = true;
                        this.device.isProductionMode = true;
                    }
                    else {
                        public_1.Logger.info(function (log) { return log(public_1.LogMsg("portal has NOT detected the STB mode. System: " + zacPluginObject_1.System + " INSUFFICIENT_BANDWIDTH: " + zacPluginObject_1.INSUFFICIENT_BANDWIDTH, Configuration.TAG)); });
                    }
                }
            }
            this.env = Configuration.KEY_PRODUCTION;
        };
        Configuration.prototype.updateValues = function () {
            this.device.isProductionMode = this.env === Configuration.KEY_PRODUCTION || this.device.isSetTopBox;
        };
        Configuration.TAG = "Configuration";
        Configuration.instance = new Configuration();
        Configuration.KEY_PRODUCTION = "prod";
        return Configuration;
    }());
    exports.Configuration = Configuration;
});
//# sourceMappingURL=configuration.js.map