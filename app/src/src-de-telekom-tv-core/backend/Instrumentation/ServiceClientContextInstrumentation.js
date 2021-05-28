var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "rxjs", "../../frontend/applicationclient", "./instrumentation.errors", "./ServiceClientInstrumentation", "rxjs/operators"], function (require, exports, public_1, rxjs_1, applicationclient_1, instrumentation_errors_1, ServiceClientInstrumentation_1, operators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientContextInstrumentation = void 0;
    var ServiceClientContextInstrumentation = (function () {
        function ServiceClientContextInstrumentation() {
            this.clientID = "";
            this.clientSecret = "";
            this.scope = "dcp";
            this.activeEndpointConfiguration = { transformationRule: "none", url: "" };
            this.internalServiceIsAvailable = false;
            this.retryDelayStandard = 60 * 60 * 1000;
            this.retryMaxAttemptsStandard = 16;
            this.getBrokerUrl = "";
            try {
                this.setup();
                this.internalServiceIsAvailable = true;
            }
            catch (error) {
                public_1.ErrorManager.catch(error, ServiceClientContextInstrumentation_1, 0x01);
            }
        }
        ServiceClientContextInstrumentation_1 = ServiceClientContextInstrumentation;
        ServiceClientContextInstrumentation.prototype.getTopicInformation = function () {
            var _this = this;
            return rxjs_1.zip(rxjs_1.from(applicationclient_1.ApplicationClient.authMan.getIdToken()), rxjs_1.of(applicationclient_1.ApplicationClient.network.getLinkProperties()))
                .pipe(operators_1.map(function (_a) {
                var idToken = _a[0], linkProperties = _a[1];
                var macAddress = (_this.mockDeviceId || linkProperties.MacAddress).replace(/:/g, "").toUpperCase();
                return {
                    device: {
                        customerTopic: "tv/devices/" + idToken.anid,
                        deviceClassTopic: "tv/devices/" + idToken.anid + "/STB",
                        deviceTopic: "tv/devices/" + idToken.anid + "/STB/" + macAddress
                    },
                    testing: {
                        testingDeviceTopic: "testing/devices",
                        testingServiceTopic: "testing/services",
                        customerTopic: "testing/devices/" + idToken.anid,
                        deviceClassTopic: "testing/devices/" + idToken.anid + "/STB",
                        deviceTopic: "testing/devices/" + idToken.anid + "/STB/" + macAddress
                    }
                };
            }));
        };
        Object.defineProperty(ServiceClientContextInstrumentation.prototype, "isServiceIsAvailable", {
            get: function () {
                return this.internalServiceIsAvailable;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextInstrumentation.prototype, "isEndpointDefined", {
            get: function () {
                return public_1.Guard.isDefined(this.activeEndpointConfiguration) && this.activeEndpointConfiguration.url.length > 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextInstrumentation.prototype, "serviceClient", {
            get: function () {
                if (public_1.Guard.isUndefined(this.internalServiceClient)) {
                    throw new instrumentation_errors_1.InstrumentationConfigurationError("Instrumentation service client is not initialized!");
                }
                return this.internalServiceClient;
            },
            enumerable: false,
            configurable: true
        });
        ServiceClientContextInstrumentation.prototype.setBrokerUrlCallback = function (callback) {
            this.getBrokerUrl = callback(this.activeEndpointConfiguration.url, this.activeEndpointConfiguration.transformationRule);
        };
        ServiceClientContextInstrumentation.prototype.setup = function () {
            var _a;
            var mqttConfiguration = public_1.Configuration.instance.instrumentation;
            if (public_1.Guard.isUndefined(mqttConfiguration)) {
                throw new instrumentation_errors_1.InstrumentationConfigurationError("Missing instrumentation configuration.", 0x01);
            }
            if (public_1.Guard.isUndefined(mqttConfiguration.activeEndpoint)) {
                throw new instrumentation_errors_1.InstrumentationConfigurationError("The definition of the active endpoint is missing.", 0x02);
            }
            if (public_1.Guard.isUndefined(mqttConfiguration.endpoints)) {
                throw new instrumentation_errors_1.InstrumentationConfigurationError("The configuration of the endpoints is missing.", 0x03);
            }
            this.mockDeviceId = (_a = mqttConfiguration.mock) === null || _a === void 0 ? void 0 : _a.deviceId;
            this.activeEndpointConfiguration = mqttConfiguration.endpoints[mqttConfiguration.activeEndpoint];
            if (public_1.Guard.isUndefined(this.activeEndpointConfiguration)) {
                throw new instrumentation_errors_1.InstrumentationConfigurationError("The active endpoint configuration is missing.", 0x04);
            }
            if (public_1.Guard.isUndefined(this.activeEndpointConfiguration.transformationRule)) {
                throw new instrumentation_errors_1.InstrumentationConfigurationError("The transformation rule of the active endpoint configuration is missing.", 0x05);
            }
            if (public_1.Guard.isUndefined(this.activeEndpointConfiguration.url)) {
                throw new instrumentation_errors_1.InstrumentationConfigurationError("The url of the active endpoint configuration is missing.", 0x06);
            }
            var sam3Configuration = public_1.Configuration.instance.sam3;
            if (public_1.Guard.isUndefined(sam3Configuration)) {
                throw new instrumentation_errors_1.InstrumentationConfigurationError("Missing SAM3 configuration.", 0x07);
            }
            if (public_1.Guard.isUndefined(sam3Configuration.clients)) {
                throw new instrumentation_errors_1.InstrumentationConfigurationError("The configuration of the SAM3 clients is missing.", 0x08);
            }
            if (public_1.Guard.isUndefined(sam3Configuration.clients[this.scope])) {
                throw new instrumentation_errors_1.InstrumentationConfigurationError("The configuration of the SAM3 client for scope '" + this.scope + "' is missing.", 0x09);
            }
            this.clientID = sam3Configuration.clients[this.scope].clientID;
            if (!public_1.Guard.isNonEmptyString(this.clientID)) {
                throw new instrumentation_errors_1.InstrumentationConfigurationError("The SAM3 client ID for scope '" + this.scope + "' is missing.", 0x0A);
            }
            this.clientSecret = sam3Configuration.clients[this.scope].clientSecret || "";
            this.internalServiceClient = ServiceClientInstrumentation_1.ServiceClientInstrumentation.create();
        };
        var ServiceClientContextInstrumentation_1;
        ServiceClientContextInstrumentation.classID = 0xA00;
        __decorate([
            public_1.Memoize.decorator()
        ], ServiceClientContextInstrumentation.prototype, "getTopicInformation", null);
        ServiceClientContextInstrumentation = ServiceClientContextInstrumentation_1 = __decorate([
            public_1.logTag()
        ], ServiceClientContextInstrumentation);
        return ServiceClientContextInstrumentation;
    }());
    exports.ServiceClientContextInstrumentation = ServiceClientContextInstrumentation;
});
//# sourceMappingURL=ServiceClientContextInstrumentation.js.map