var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "rxjs/operators", "rxjs", "../backend/Instrumentation/ServiceClientContextInstrumentation", "./applicationclient.powermanagement", "../backend/public", "src/src-de-telekom-app-tv-core-v2/public", "src/src-de-telekom-react/public"], function (require, exports, public_1, operators_1, rxjs_1, ServiceClientContextInstrumentation_1, applicationclient_powermanagement_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InstrumentationManagement = void 0;
    var InstrumentationManagement = (function () {
        function InstrumentationManagement() {
        }
        InstrumentationManagement_1 = InstrumentationManagement;
        InstrumentationManagement.enableCommandExecution = function () {
            InstrumentationManagement_1.commandExecutionDisabled = false;
        };
        InstrumentationManagement.disableCommandExecution = function (message) {
            InstrumentationManagement_1.commandExecutionDisabled = true;
            InstrumentationManagement_1.commandExecutionDisabledMessage = message;
        };
        InstrumentationManagement.excludeMessageFromCommandBlocking = function (item) {
            var _a;
            if (item.message.$type == "message" && item.message.topic == item.topicInformation.testing.deviceTopic + "/_command") {
                return true;
            }
            if (item.message.$type == "message" && ((_a = item.message.mqttMessage.payload) === null || _a === void 0 ? void 0 : _a.$type) == "services.keyevent.sendkey") {
                return true;
            }
            return false;
        };
        InstrumentationManagement.isCommandExecutionDisabled = function (item) {
            var voiceDisablingDialogCount = public_4.TVDialogHostService.getInstance().getVoiceDisablingDialogCount();
            if (this.excludeMessageFromCommandBlocking(item)) {
                return false;
            }
            if (public_1.Guard.isNumber(voiceDisablingDialogCount)) {
                return voiceDisablingDialogCount > 0 || InstrumentationManagement_1.commandExecutionDisabled;
            }
            return InstrumentationManagement_1.commandExecutionDisabled;
        };
        InstrumentationManagement.getCommandExecutionDisabledMessage = function () {
            return public_4.TVDialogHostService.getInstance().getCommandExecutionDisabledMessage() || InstrumentationManagement_1.commandExecutionDisabledMessage || public_3.messagesCore.VOICE_GENERAL_INFO_DISABLED;
        };
        InstrumentationManagement.getDeviceRegistrationState = function () {
            return ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.serviceClient.getDeviceRegistrationState();
        };
        InstrumentationManagement.changeBehaviorOfStandardDevice = function (suspended) {
            ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.serviceClient.changeBehaviorOfStandardDevice(suspended);
        };
        InstrumentationManagement.changeBehaviorOfTestingDevice = function (suspended) {
            ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.serviceClient.changeBehaviorOfTestingDevice(suspended);
        };
        InstrumentationManagement.isRemoteControlAllowed = function () {
            return public_2.ServiceClientAuthenticationZosa.getConfigurableSettingsTypedValue(public_2.DomainType.device, public_2.ConfigurableUserSettingsKey.RemoteControlAllowed)
                .then(function (typedValue) { return typedValue.toLowerCase() == "true"; });
        };
        InstrumentationManagement.setRemoteControlAllowed = function (allowed) {
            return public_2.ServiceClientAuthenticationZosa.setConfigurableUserSettingsValue(public_2.DomainType.device, { key: public_2.ConfigurableUserSettingsKey.RemoteControlAllowed, value: allowed ? "true" : "false" })
                .then(function () { return InstrumentationManagement_1.changeBehaviorOfStandardDevice(!allowed); });
        };
        InstrumentationManagement.checkActiveState = function (item) {
            if (item.message.$type == "message" && item.message.mqttMessage.wakeup) {
                return rxjs_1.from(applicationclient_powermanagement_1.PowerManagement.wakeupDevice()
                    .then(function () { return item; }));
            }
            return rxjs_1.of(item);
        };
        InstrumentationManagement.getCommandObservable = function (deviceType) {
            var _this = this;
            return ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.serviceClient
                .getCommandObservable(deviceType)
                .pipe(operators_1.filter(function (item) { var _a; return !_this.isCommandExecutionDisabled(item) && (applicationclient_powermanagement_1.PowerManagement.isActiveState() || (item.message.$type != "message") || (item.message.$type == "message" && (((_a = item.message.mqttMessage.payload) === null || _a === void 0 ? void 0 : _a.$type) == "services.keyevent.sendkey" || !!item.message.mqttMessage.wakeup))); }), operators_1.tap(function (message) { return message.message.$type == "message" && public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getCommandObservable -> " + JSON.stringify(deviceType), InstrumentationManagement_1.TAG)); }); }), operators_1.concatMap(function (item) { return _this.checkActiveState(item); }));
        };
        InstrumentationManagement.getCommandObservableUnfiltered = function (deviceType) {
            return ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.serviceClient
                .getCommandObservable(deviceType)
                .pipe(operators_1.filter(function (item) { var _a; return (applicationclient_powermanagement_1.PowerManagement.isActiveState() || (item.message.$type != "message") || (item.message.$type == "message" && ((_a = item.message.mqttMessage.payload) === null || _a === void 0 ? void 0 : _a.$type) == "services.keyevent.sendkey")); }), operators_1.tap(function (message) { return message.message.$type == "message" && public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getCommandObservableUnfiltered -> " + JSON.stringify(deviceType), InstrumentationManagement_1.TAG)); }); }));
        };
        InstrumentationManagement.getListOfTestCases = function (instrumentationService) {
            return ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.serviceClient
                .connect()
                .pipe(operators_1.mergeMap(function (_a) {
                var client = _a[0], topicInformation = _a[1];
                return client.observeReply(instrumentationService + "/_command", { $replyToTopic: topicInformation.testing.deviceTopic + "/_reply", payload: { $type: "services.instrumentation.loadtestcases" } });
            }), public_1.filterMqttMessage("services.instrumentation.loadtestcases"));
        };
        InstrumentationManagement.getQueryObservable = function (deviceType) {
            return ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.serviceClient
                .getQueryObservable(deviceType);
        };
        InstrumentationManagement.getServices = function () {
            return ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.serviceClient
                .connect()
                .pipe(operators_1.mergeMap(function (_a) {
                var client = _a[0], topicInformation = _a[1];
                return client.observeReply(topicInformation.testing.testingServiceTopic + "/_query", { $replyToTopic: topicInformation.testing.deviceTopic + "/_reply", payload: { $type: "services.instrumentation.getstatus" } });
            }), public_1.filterMqttMessage("services.instrumentation.returnstatus"));
        };
        InstrumentationManagement.sendCommandMessageToMyDevice = function () {
            return function (source) {
                return ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.serviceClient.connect()
                    .pipe(operators_1.mergeMap(function (_a) {
                    var client = _a[0], topicInformation = _a[1];
                    return source.pipe(operators_1.mergeMap(function (message) { return client.publish(topicInformation.device.deviceTopic + "/_command", message); }));
                }));
            };
        };
        InstrumentationManagement.sendCommandMessageToDcp = function (topic, payload) {
            return ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.serviceClient
                .connect()
                .pipe(operators_1.mergeMap(function (_a) {
                var client = _a[0], topicInformation = _a[1];
                return client
                    .publish("" + topic, payload);
            }));
        };
        InstrumentationManagement.sendEchoMessage = function () {
            return function (source) {
                return ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.serviceClient.connect()
                    .pipe(operators_1.mergeMap(function (_a) {
                    var client = _a[0], topicInformation = _a[1];
                    return source.pipe(operators_1.mergeMap(function (message) { return client.observeReply(message.echoService + "/_command", { $replyToTopic: topicInformation.device.deviceTopic + "/_reply", payload: { $type: "services.test", content: message.content } }); }));
                }), public_1.filterMqttMessage("services.test"));
            };
        };
        InstrumentationManagement.startRemoteSession = function (testCase, testingServiceRootTopic) {
            return ServiceClientContextInstrumentation_1.ServiceClientContextInstrumentation.instance.serviceClient
                .connect()
                .pipe(operators_1.mergeMap(function (_a) {
                var client = _a[0], topicInformation = _a[1];
                var message = {
                    $type: "services.instrumentation.controlremotesession",
                    action: "start",
                    testCases: [testCase],
                    queryTopic: topicInformation.testing.deviceTopic + "/_query",
                    commandTopic: topicInformation.testing.deviceTopic + "/_command"
                };
                return client
                    .publish(testingServiceRootTopic + "/_command", { $replyToTopic: topicInformation.testing.deviceTopic + "/_command", payload: message });
            }));
        };
        InstrumentationManagement.sendVoiceKey = function (keyCode) {
            try {
                public_2.ServiceClientZac.getCustomApiVoiceKeyHandler(public_2.ServiceClientContextZac.instance).methods.SendKey(keyCode);
                return true;
            }
            catch (_a) {
                return false;
            }
        };
        InstrumentationManagement.pushSqmEvent = function (errorInformation) {
            var sqmEvent = {
                ErrorCode: "0xA0200000",
                ErrorEventType: "Device Internal Error",
                ErrorMessage: errorInformation.errorMessage,
                ServiceType: "Voice",
                Info1: errorInformation.info1,
                Info2: errorInformation.info2,
                Info3: errorInformation.info3
            };
            public_2.ServiceClientZac.pushSqmEvent(public_2.ServiceClientContextZac.instance, sqmEvent);
        };
        var InstrumentationManagement_1;
        InstrumentationManagement.classID = 0xA02;
        __decorate([
            public_1.log2(function () { return ({ name: InstrumentationManagement_1.TAG }); })
        ], InstrumentationManagement, "enableCommandExecution", null);
        __decorate([
            public_1.log2(function () { return ({ name: InstrumentationManagement_1.TAG }); })
        ], InstrumentationManagement, "disableCommandExecution", null);
        __decorate([
            public_1.log2(function () { return ({ name: InstrumentationManagement_1.TAG }); })
        ], InstrumentationManagement, "getDeviceRegistrationState", null);
        __decorate([
            public_1.log2(function () { return ({ name: InstrumentationManagement_1.TAG }); })
        ], InstrumentationManagement, "changeBehaviorOfStandardDevice", null);
        __decorate([
            public_1.log2(function () { return ({ name: InstrumentationManagement_1.TAG }); })
        ], InstrumentationManagement, "changeBehaviorOfTestingDevice", null);
        __decorate([
            public_1.log2(function () { return ({ name: InstrumentationManagement_1.TAG }); })
        ], InstrumentationManagement, "isRemoteControlAllowed", null);
        __decorate([
            public_1.log2(function () { return ({ name: InstrumentationManagement_1.TAG }); })
        ], InstrumentationManagement, "setRemoteControlAllowed", null);
        __decorate([
            public_1.log2(function () { return ({ name: InstrumentationManagement_1.TAG }); })
        ], InstrumentationManagement, "getListOfTestCases", null);
        __decorate([
            public_1.log2(function () { return ({ name: InstrumentationManagement_1.TAG }); })
        ], InstrumentationManagement, "getServices", null);
        __decorate([
            public_1.log2(function () { return ({ name: InstrumentationManagement_1.TAG }); })
        ], InstrumentationManagement, "sendCommandMessageToMyDevice", null);
        __decorate([
            public_1.log2(function () { return ({ name: InstrumentationManagement_1.TAG }); })
        ], InstrumentationManagement, "sendCommandMessageToDcp", null);
        __decorate([
            public_1.log2(function () { return ({ name: InstrumentationManagement_1.TAG }); })
        ], InstrumentationManagement, "sendEchoMessage", null);
        __decorate([
            public_1.log2(function () { return ({ name: InstrumentationManagement_1.TAG }); })
        ], InstrumentationManagement, "startRemoteSession", null);
        __decorate([
            public_1.log2(function () { return ({ name: InstrumentationManagement_1.TAG }); })
        ], InstrumentationManagement, "sendVoiceKey", null);
        __decorate([
            public_1.log2(function () { return ({ name: InstrumentationManagement_1.TAG }); })
        ], InstrumentationManagement, "pushSqmEvent", null);
        InstrumentationManagement = InstrumentationManagement_1 = __decorate([
            public_1.logTag()
        ], InstrumentationManagement);
        return InstrumentationManagement;
    }());
    exports.InstrumentationManagement = InstrumentationManagement;
});
//# sourceMappingURL=applicationclient.instrumentation.js.map