define(["require", "exports", "bluebird", "./sam3client", "./zacdialogrequest", "src/src-de-telekom/public", "./gcpclient"], function (require, exports, bluebird, sam3client_1, zacdialogrequest_1, public_1, gcpclient_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacAuthMan = void 0;
    var ZacAuthMan = (function () {
        function ZacAuthMan() {
            this.requestId = 0;
        }
        ZacAuthMan.prototype.registerEventListener = function (evtName, evtHandlerFunction) {
            if (evtName == "CustomAPIEvent") {
                this.evtHandlerFunc = evtHandlerFunction;
            }
            return 0;
        };
        ZacAuthMan.prototype.unregisterEventListener = function (evtName, id) {
        };
        ZacAuthMan.prototype.Call = function (name, input) {
            var _this = this;
            var returnValue = { requestId: (++this.requestId).toString() };
            if (name === "GetAccessToken") {
                if (input && (input.acr == "userpin" || input.acr == "avs" || input.acr == "password")) {
                    var request = new zacdialogrequest_1.ZacDialogRequest();
                    var event_1 = {
                        request: request
                    };
                    request.type = event_1.request.DIALOG_TYPE_CONDITIONAL_ACCESS;
                    request.inputFieldType = input.acr == "password" ? event_1.request.DIALOG_INPUTFIELD_PASSWORD : event_1.request.DIALOG_INPUTFIELD_PIN;
                    request.selectPolicy = event_1.request.DIALOG_SELECT_NONE;
                    request.header = "header";
                    request.json = JSON.stringify({
                        dialogType: "lock",
                        timeout: 0,
                        id: "1",
                        inputField: {
                            text: {},
                            type: "pin",
                            length: 4
                        },
                        header: {
                            source: {
                                id: "AuthenticationManager",
                                variables: {
                                    "USER-DATA": input ? input.userData : null
                                }
                            }
                        },
                        defaultLanguage: "deu"
                    });
                    if (input.acr == "avs") {
                        request.message = "This content is blocked (Mockup:Shared Account! username:'" + sam3client_1.ServiceClientSAM3.instance.username + "' AVS: " + sam3client_1.ServiceClientSAM3.instance.avspin + ") ";
                    }
                    else if (input.acr == "password") {
                        request.message = "This content is blocked (Mockup:Shared Account! please enter password)";
                    }
                    else {
                        request.message = "This content is blocked (Mockup:Shared Account! username:'" + sam3client_1.ServiceClientSAM3.instance.username + "' PCON:'" + sam3client_1.ServiceClientSAM3.instance.pin + "') ";
                    }
                    var postResponseFunc_1 = function (response) {
                        var pin = ((typeof response === "string") ? response : (response === null || response === void 0 ? void 0 : response[0])) || "";
                        var dialogSuccess = new zacdialogrequest_1.ZacDialogRequest();
                        dialogSuccess.type = dialogSuccess.DIALOG_TYPE_ATTENTION;
                        dialogSuccess.json = JSON.stringify({
                            header: {
                                source: {
                                    id: "AuthenticationManager.UAR.Success.Header",
                                    variables: {
                                        "USER-DATA": input ? input.userData : null
                                    }
                                }
                            }
                        });
                        var dialogFailure = new zacdialogrequest_1.ZacDialogRequest();
                        dialogFailure.type = dialogSuccess.DIALOG_TYPE_ATTENTION;
                        dialogFailure.json = JSON.stringify({
                            header: {
                                source: {
                                    id: "AuthenticationManager.UAR.Error.Header",
                                    variables: {
                                        "USER-DATA": input ? input.userData : null,
                                        "ERROR-STRING": "authentication error (mock)"
                                    }
                                }
                            }
                        });
                        var promise = input.acr == "avs" ? sam3client_1.ServiceClientSAM3.instance.getAvsToken(input, pin)
                            : input.acr == "userpin" ? sam3client_1.ServiceClientSAM3.instance.getPinToken(input, pin)
                                : sam3client_1.ServiceClientSAM3.instance.getPasswordToken(input, pin);
                        _this.handleSam3Response(input.scope, returnValue.requestId, promise)
                            .then(function (response) {
                            if (_this.dialogRequestFunc) {
                                _this.dialogRequestFunc({ request: dialogSuccess });
                            }
                            return response;
                        })
                            .catch(function (error) {
                            dialogFailure.postResponseFunc = postResponseFunc_1;
                            if (_this.dialogRequestFunc) {
                                dialogFailure.json = JSON.stringify({
                                    header: {
                                        source: {
                                            id: "AuthenticationManager.UAR.Error.Header",
                                            variables: {
                                                "USER-DATA": input ? input.userData : null,
                                                "ERROR-STRING": (error === null || error === void 0 ? void 0 : error.message) || "no code"
                                            }
                                        }
                                    }
                                });
                                _this.dialogRequestFunc({ request: dialogFailure });
                            }
                            return bluebird.reject(error);
                        });
                        return 0;
                    };
                    request.postResponseFunc = postResponseFunc_1;
                    var cancelResponseFunc = function () {
                        var cancelResponse = {
                            retcode: "12",
                            requestId: returnValue.requestId
                        };
                        if (_this.evtHandlerFunc)
                            _this.evtHandlerFunc(cancelResponse);
                    };
                    request.cancelResponseFunc = cancelResponseFunc;
                    setTimeout(function () {
                        if (_this.dialogRequestFunc)
                            _this.dialogRequestFunc(event_1);
                    }, 10);
                }
                else if (input === null || input === void 0 ? void 0 : input.scope) {
                    this.handleSam3Response(input.scope, returnValue.requestId, sam3client_1.ServiceClientSAM3.instance.getLineToken(input));
                }
            }
            else if (name === "GetIdToken") {
                bluebird
                    .resolve()
                    .then(function () {
                    var result = {
                        anid: public_1.Configuration.instance.sam3 && public_1.Configuration.instance.sam3.mock && public_1.Configuration.instance.sam3.mock.anid || "120049010000000000000000",
                        displayname: "MOCKED DISPLAYNAME",
                        retcode: "0",
                        requestId: returnValue.requestId.toString()
                    };
                    if (_this.evtHandlerFunc)
                        _this.evtHandlerFunc(result);
                });
            }
            else if (name === "GetGcpAccessToken") {
                bluebird
                    .resolve()
                    .then(function () {
                    if (input === null || input === void 0 ? void 0 : input.scope) {
                        _this.handleGcpResponse(input.scope, returnValue.requestId, gcpclient_1.ServiceClientGCP.instance.getAccessToken(input));
                    }
                });
            }
            return returnValue;
        };
        ZacAuthMan.prototype.handleSam3Response = function (scope, requestId, call) {
            var _this = this;
            return call
                .then(function (token) {
                var result = {
                    scope: scope,
                    accessToken: token,
                    expiresIn: Date.now().toString(),
                    retcode: "0",
                    requestId: requestId
                };
                if (_this.evtHandlerFunc)
                    _this.evtHandlerFunc(result);
            })
                .catch(function (error) {
                var result = {
                    scope: scope,
                    accessToken: undefined,
                    expiresIn: Date.now().toString(),
                    retcode: "500",
                    errorDescription: error,
                    requestId: _this.requestId.toString()
                };
                if (_this.evtHandlerFunc)
                    _this.evtHandlerFunc(result);
                return bluebird.reject(error);
            });
        };
        ZacAuthMan.prototype.handleGcpResponse = function (scope, requestId, call) {
            var _this = this;
            return call
                .then(function (token) {
                var result = {
                    scope: scope,
                    accessToken: token,
                    expiresIn: Date.now().toString(),
                    retcode: "0",
                    requestId: requestId
                };
                if (_this.evtHandlerFunc)
                    _this.evtHandlerFunc(result);
            })
                .catch(function (error) {
                var result = {
                    scope: scope,
                    accessToken: undefined,
                    expiresIn: Date.now().toString(),
                    retcode: "500",
                    errorDescription: error,
                    requestId: _this.requestId.toString()
                };
                if (_this.evtHandlerFunc)
                    _this.evtHandlerFunc(result);
                return bluebird.reject(error);
            });
        };
        return ZacAuthMan;
    }());
    exports.ZacAuthMan = ZacAuthMan;
});
//# sourceMappingURL=zacauthman.js.map