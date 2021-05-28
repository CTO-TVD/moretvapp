var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "underscore", "./configuration", "../util/log/LogDecorator", "../net/http/RestClient", "../util/StringTools"], function (require, exports, bluebird, _, configuration_1, LogDecorator_1, RestClient_1, StringTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfigurationJSON = void 0;
    var regExpAction = /(import|fileblob)\((.*)\)/;
    var ConfigurationJSON = (function () {
        function ConfigurationJSON() {
        }
        ConfigurationJSON_1 = ConfigurationJSON;
        ConfigurationJSON.prototype.load = function (config, path) {
            config.initializeValues();
            config.startUrl = typeof window !== "undefined" ? window.location.toString() : "";
            return this.loadAppConfig(config, path)
                .then(function () {
                config.updateValues();
                config.loadValuesFromUrl();
                return config;
            });
        };
        ConfigurationJSON.prototype.loadAppConfig = function (config, path, environment) {
            var _this = this;
            return this.get(path).then(function (text) {
                var configJson = StringTools_1.StringTools.stripJsonComments(text);
                var configObject = JSON.parse(configJson);
                _.extend(config, configObject);
                if (!environment) {
                    config.loadValuesFromUrl();
                    environment = config.env;
                }
                return bluebird.all(_this.getConfigActions(configObject)
                    .map(function (action) {
                    if (action.type == "import") {
                        config[action.prop] = {};
                        return _this.loadAppConfig(config[action.prop], action.value, environment);
                    }
                    else if (action.type == "fileblob") {
                        return _this.getBlob(action.value)
                            .then(function (responseBlob) {
                            var url = URL.createObjectURL(responseBlob);
                            config[action.prop] = url;
                        });
                    }
                    return undefined;
                }));
            });
        };
        ConfigurationJSON.prototype.getConfigActions = function (obj) {
            var result = [];
            for (var prop in obj) {
                var propValue = obj[prop];
                if (typeof propValue == "string" && obj.hasOwnProperty(prop)) {
                    if (regExpAction.test(propValue)) {
                        var type = regExpAction.exec(propValue)[1];
                        var value = regExpAction.exec(propValue)[2];
                        if (value && value.indexOf("{") > -1) {
                            var funcGetValue = new Function("config", value);
                            value = funcGetValue(configuration_1.Configuration.instance);
                        }
                        if (value) {
                            result.push({ type: type, prop: prop, value: value.trim() });
                        }
                    }
                }
            }
            return result;
        };
        ConfigurationJSON.prototype.get = function (url) {
            return RestClient_1.RestClient.instance.get(url, [{ key: "Content-Type", value: "application/json;charset=UTF-8" }])
                .then(function (result) {
                if (result.statusCode == 200) {
                    return result.responseData;
                }
                else {
                    throw Error("Error loading data from url '" + url + "'");
                }
            });
        };
        ConfigurationJSON.prototype.getBlob = function (url) {
            return RestClient_1.RestClient.instance.get(url, undefined, undefined, "blob")
                .then(function (result) {
                if (result.statusCode == 200) {
                    return result.responseBlob;
                }
                else {
                    throw Error("Error loading data from url '" + url + "'");
                }
            });
        };
        var ConfigurationJSON_1;
        __decorate([
            LogDecorator_1.log2(function () { return ({ name: ConfigurationJSON_1.TAG }); })
        ], ConfigurationJSON.prototype, "get", null);
        __decorate([
            LogDecorator_1.log2(function () { return ({ name: ConfigurationJSON_1.TAG }); })
        ], ConfigurationJSON.prototype, "getBlob", null);
        ConfigurationJSON = ConfigurationJSON_1 = __decorate([
            LogDecorator_1.logTag()
        ], ConfigurationJSON);
        return ConfigurationJSON;
    }());
    exports.ConfigurationJSON = ConfigurationJSON;
});
//# sourceMappingURL=configurationJSON.js.map