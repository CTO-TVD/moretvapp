var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "./ServiceClientContextZac", "../Zosa/ServiceClientAuthenticationZosa", "./zac.errors", "./synchronisation", "./zacVideoFormats", "./zacVideoFormat"], function (require, exports, bluebird, public_1, ServiceClientContextZac_1, ServiceClientAuthenticationZosa_1, zac_errors_1, synchronisation_1, zacVideoFormats_1, zacVideoFormat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientZac = exports.AuthenticationManagerAccessTokenError = exports.OutputsError = void 0;
    var ZacError = (function (_super) {
        __extends(ZacError, _super);
        function ZacError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x607;
            return _this;
        }
        return ZacError;
    }(public_1.BaseError));
    var ZacSystemError = (function (_super) {
        __extends(ZacSystemError, _super);
        function ZacSystemError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x613;
            return _this;
        }
        return ZacSystemError;
    }(public_1.BaseError));
    var OutputsError = (function (_super) {
        __extends(OutputsError, _super);
        function OutputsError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x617;
            return _this;
        }
        return OutputsError;
    }(public_1.BaseError));
    exports.OutputsError = OutputsError;
    var AdditionalInformationKey;
    (function (AdditionalInformationKey) {
        AdditionalInformationKey["amazonFontVersion"] = "Amazon Font Version";
        AdditionalInformationKey["amazonVersion"] = "Amazon Version";
        AdditionalInformationKey["netflixEsn"] = "Netflix ESN";
        AdditionalInformationKey["netflixVersion"] = "Netflix Version";
        AdditionalInformationKey["socFamilyId"] = "SOC_FAMILY_ID";
        AdditionalInformationKey["socProductId"] = "SOC_PRODUCT_ID";
        AdditionalInformationKey["uiVersion"] = "UI Version";
        AdditionalInformationKey["versionHardwareCustomer"] = "VERSION_HARDWARE_CUSTOMER";
    })(AdditionalInformationKey || (AdditionalInformationKey = {}));
    var AuthenticationManagerAccessTokenError = (function (_super) {
        __extends(AuthenticationManagerAccessTokenError, _super);
        function AuthenticationManagerAccessTokenError(message, scope, response) {
            var _this = _super.call(this, message) || this;
            _this.errorID = 0x200;
            _this.scope = scope;
            _this.response = response;
            return _this;
        }
        return AuthenticationManagerAccessTokenError;
    }(public_1.BaseError));
    exports.AuthenticationManagerAccessTokenError = AuthenticationManagerAccessTokenError;
    var ServiceClientZac = (function () {
        function ServiceClientZac() {
        }
        ServiceClientZac_1 = ServiceClientZac;
        ServiceClientZac.getAppManager = function (context) {
            if (!ServiceClientZac_1.internalAppManagerObject) {
                var appManager_1 = context.zacAPI.AppManager;
                ServiceClientZac_1.internalAppManagerObject = {
                    object: appManager_1,
                    events: {
                        onAppExitEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(appManager_1, "AppExitEvent", evtHandlerFunction); },
                        onAppRegistrationEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(appManager_1, "AppRegistrationEvent", evtHandlerFunction); },
                        onAppStartedStatusEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(appManager_1, "AppStartedStatusEvent", evtHandlerFunction); },
                        onAppStatusChangedEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(appManager_1, "AppStatusChangedEvent", evtHandlerFunction); }
                    },
                    methods: {}
                };
            }
            return ServiceClientZac_1.internalAppManagerObject;
        };
        ServiceClientZac.getApp = function (context) {
            if (!ServiceClientZac_1.internalAppObject) {
                var app_1 = context.zacAPI.CreateApp(ServiceClientZac_1.MANIFEST_NAME, ServiceClientZac_1.INSTANCE_NAME);
                var funcDialogInputfieldTypeInfo_1 = function (request) { return ServiceClientZac_1.getTypeInfo(request, [
                    "DIALOG_INPUTFIELD_NONE",
                    "DIALOG_INPUTFIELD_NUMERIC",
                    "DIALOG_INPUTFIELD_PASSWORD",
                    "DIALOG_INPUTFIELD_PIN",
                    "DIALOG_INPUTFIELD_TEXT",
                    "DIALOG_INPUTFIELD_LOGIN"
                ], request.inputFieldType); };
                var funcDialogSelectPolicyInfo_1 = function (request) { return ServiceClientZac_1.getTypeInfo(request, [
                    "DIALOG_SELECT_MULTIPLE",
                    "DIALOG_SELECT_NONE",
                    "DIALOG_SELECT_ONE"
                ], request.selectPolicy); };
                var funcDialogTypeInfo_1 = function (request) { return ServiceClientZac_1.getTypeInfo(request, [
                    "DIALOG_TYPE_ATTENTION",
                    "DIALOG_TYPE_CONDITIONAL_ACCESS",
                    "DIALOG_TYPE_INFORMATION",
                    "DIALOG_TYPE_LOCK",
                    "DIALOG_TYPE_QUESTION",
                    "DIALOG_TYPE_UNDEFINED"
                ], request.type); };
                var funcRegisterEvent_1 = function (obj, evtName, evtHandlerFunction) {
                    var eventId = obj.registerEventListener(evtName, function (innerEvent) {
                        public_1.Logger.debug(function (log) {
                            var request = innerEvent.request || {};
                            log(public_1.LogMsg("DialogRequest event: " + evtName, ServiceClientZac_1.TAG));
                            log(public_1.LogMsg("DialogRequest id: " + request.id, ServiceClientZac_1.TAG));
                            log(public_1.LogMsg("DialogRequest type: " + funcDialogTypeInfo_1(request), ServiceClientZac_1.TAG));
                            log(public_1.LogMsg("DialogRequest inputFieldType: " + funcDialogInputfieldTypeInfo_1(request), ServiceClientZac_1.TAG));
                            log(public_1.LogMsg("DialogRequest selectPolicy: " + funcDialogSelectPolicyInfo_1(request), ServiceClientZac_1.TAG));
                            log(public_1.LogMsg("DialogRequest header: " + request.header, ServiceClientZac_1.TAG));
                            log(public_1.LogMsg("DialogRequest message: " + request.message, ServiceClientZac_1.TAG));
                            log(public_1.LogMsg("DialogRequest json: " + request.json, ServiceClientZac_1.TAG));
                        });
                        evtHandlerFunction(innerEvent);
                    });
                    return function () { return obj.unregisterEventListener(evtName, eventId); };
                };
                ServiceClientZac_1.internalAppObject = {
                    object: app_1,
                    events: {
                        onCustomCmd: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(app_1, "CustomCmd", evtHandlerFunction); },
                        onDialogCancel: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(app_1, "DialogCancel", evtHandlerFunction); },
                        onDialogRequest: function (evtHandlerFunction) { return funcRegisterEvent_1(app_1, "DialogRequest", evtHandlerFunction); }
                    },
                    methods: {
                        getDialogInputfieldTypeInfo: funcDialogInputfieldTypeInfo_1,
                        getDialogSelectPolicyInfo: funcDialogSelectPolicyInfo_1,
                        getDialogTypeInfo: funcDialogTypeInfo_1
                    }
                };
            }
            return ServiceClientZac_1.internalAppObject;
        };
        ServiceClientZac.getCustomApiAuthenticationManager = function (context) {
            if (!ServiceClientZac_1.internalCustomApiAuthenticationManagerObject) {
                var customApiAuthenticationManager_1 = ServiceClientZac_1.getCustomApi(context, ServiceClientZac_1.CUSTOM_API_DT_AUTHMAN);
                ServiceClientZac_1.internalCustomApiAuthenticationManagerObject = {
                    object: customApiAuthenticationManager_1,
                    events: {
                        onCustomAPIEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(customApiAuthenticationManager_1, "CustomAPIEvent", evtHandlerFunction); }
                    },
                    methods: {
                        GetAccessToken: function (input) { return customApiAuthenticationManager_1.Call("GetAccessToken", input); },
                        DeleteToken: function (input) { return customApiAuthenticationManager_1.Call("DeleteToken", { tokenName: input.tokenName }); },
                        GetIdToken: function () { return customApiAuthenticationManager_1.Call("GetIdToken"); },
                        GetGcpAccessToken: function (input) { return customApiAuthenticationManager_1.Call("GetGcpAccessToken", input); }
                    }
                };
            }
            return ServiceClientZac_1.internalCustomApiAuthenticationManagerObject;
        };
        ServiceClientZac.getCustomApiAmazon = function (context) {
            if (!ServiceClientZac_1.internalCustomApiAmazonObject) {
                var customApiAmazon_1 = ServiceClientZac_1.getCustomApi(context, ServiceClientZac_1.CUSTOM_API_AMAZON);
                ServiceClientZac_1.internalCustomApiAmazonObject = {
                    object: customApiAmazon_1,
                    events: {
                        onCustomAPIEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(customApiAmazon_1, "CustomAPIEvent", evtHandlerFunction); }
                    },
                    methods: {}
                };
            }
            return ServiceClientZac_1.internalCustomApiAmazonObject;
        };
        ServiceClientZac.getCustomApiDisney = function (context) {
            if (!ServiceClientZac_1.internalCustomApiDisneyObject) {
                var customApiDisney_1 = ServiceClientZac_1.getCustomApi(context, ServiceClientZac_1.CUSTOM_API_DISNEY);
                ServiceClientZac_1.internalCustomApiDisneyObject = {
                    object: customApiDisney_1,
                    events: {
                        onCustomAPIEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(customApiDisney_1, "CustomAPIEvent", evtHandlerFunction); }
                    },
                    methods: {}
                };
            }
            return ServiceClientZac_1.internalCustomApiDisneyObject;
        };
        ServiceClientZac.getCustomApiNetflix = function (context) {
            if (!ServiceClientZac_1.internalCustomApiNetflixObject) {
                var customApiNetflix_1 = ServiceClientZac_1.getCustomApi(context, ServiceClientZac_1.CUSTOM_API_NETFLIX);
                ServiceClientZac_1.internalCustomApiNetflixObject = {
                    object: customApiNetflix_1,
                    events: {
                        onCustomAPIEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(customApiNetflix_1, "CustomAPIEvent", evtHandlerFunction); }
                    },
                    methods: {
                        getCookie: function () { return customApiNetflix_1.Call("GetCookie"); },
                        getProperty: function (propertyName) { return customApiNetflix_1.Call("GetProperty", { name: propertyName }); },
                        setProperty: function (propertyName, value) {
                            var _a;
                            return customApiNetflix_1.Call("SetProperty", (_a = {}, _a[propertyName] = value, _a));
                        }
                    }
                };
            }
            return ServiceClientZac_1.internalCustomApiNetflixObject;
        };
        ServiceClientZac.getCustomApiSqmEvent = function (context) {
            if (!ServiceClientZac_1.internalCustomApiSqmEventObject) {
                var customApiSqmEvent_1 = ServiceClientZac_1.getCustomApi(context, ServiceClientZac_1.CUSTOM_API_SQM_EVENT);
                ServiceClientZac_1.internalCustomApiSqmEventObject = {
                    object: customApiSqmEvent_1,
                    events: {
                        onCustomAPIEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(customApiSqmEvent_1, "CustomAPIEvent", evtHandlerFunction); }
                    },
                    methods: {}
                };
            }
            return ServiceClientZac_1.internalCustomApiSqmEventObject;
        };
        ServiceClientZac.getCustomApiSqmReport = function (context) {
            if (!ServiceClientZac_1.internalCustomApiSqmReportObject) {
                var customApiSqmReport_1 = ServiceClientZac_1.getCustomApi(context, ServiceClientZac_1.CUSTOM_API_SQM_REPORT);
                ServiceClientZac_1.internalCustomApiSqmReportObject = {
                    object: customApiSqmReport_1,
                    events: {
                        onCustomAPIEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(customApiSqmReport_1, "CustomAPIEvent", evtHandlerFunction); }
                    },
                    methods: {}
                };
            }
            return ServiceClientZac_1.internalCustomApiSqmReportObject;
        };
        ServiceClientZac.getCustomApiSqmTracelog = function (context) {
            if (!ServiceClientZac_1.internalCustomApiSqmTracelog) {
                var customApiSqmTracelog_1 = ServiceClientZac_1.getCustomApi(context, ServiceClientZac_1.CUSTOM_API_SQM_TRACELOG);
                ServiceClientZac_1.internalCustomApiSqmTracelog = {
                    object: customApiSqmTracelog_1,
                    events: {
                        onCustomAPIEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(customApiSqmTracelog_1, "CustomAPIEvent", evtHandlerFunction); }
                    },
                    methods: {}
                };
            }
            return ServiceClientZac_1.internalCustomApiSqmTracelog;
        };
        ServiceClientZac.getCustomApiSystemInfo = function (context) {
            if (!ServiceClientZac_1.internalCustomApiSystemInfoObject) {
                var customApiSystemInfo_1 = ServiceClientZac_1.getCustomApi(context, ServiceClientZac_1.CUSTOM_API_DT_SYSTEM_INFORMATION);
                ServiceClientZac_1.internalCustomApiSystemInfoObject = {
                    object: customApiSystemInfo_1,
                    events: {
                        onCustomAPIEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(customApiSystemInfo_1, "CustomAPIEvent", evtHandlerFunction); }
                    },
                    methods: {}
                };
            }
            return ServiceClientZac_1.internalCustomApiSystemInfoObject;
        };
        ServiceClientZac.getCustomApiAlienRecordings = function (context) {
            if (!ServiceClientZac_1.internalCustomApiAlienRecordingsObject) {
                var customApiAlienRecordings_1 = ServiceClientZac_1.getCustomApi(context, ServiceClientZac_1.CUSTOM_API_ALIEN_RECORDINGS);
                ServiceClientZac_1.internalCustomApiAlienRecordingsObject = {
                    object: customApiAlienRecordings_1,
                    events: {
                        onCustomAPIEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(customApiAlienRecordings_1, "CustomAPIEvent", evtHandlerFunction); }
                    },
                    methods: {
                        getAlienRecordingStatus: function (uuid) { return customApiAlienRecordings_1.Call("GetAlienRecordingStatus", { uuid: uuid }); },
                        deleteAlienRecordings: function (uuid) { return customApiAlienRecordings_1.Call("DeleteAlienRecordings", { uuid: uuid }); }
                    }
                };
            }
            return ServiceClientZac_1.internalCustomApiAlienRecordingsObject;
        };
        ServiceClientZac.getCustomApiVoiceKeyHandler = function (context) {
            if (!ServiceClientZac_1.internalVoiceKeyHandlerObject) {
                var customApiVoiceKeyHandler_1 = ServiceClientZac_1.getCustomApi(context, ServiceClientZac_1.CUSTOM_API_VOICE_KEY_HANDLER);
                ServiceClientZac_1.internalVoiceKeyHandlerObject = {
                    object: customApiVoiceKeyHandler_1,
                    events: {
                        onCustomAPIEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(customApiVoiceKeyHandler_1, "CustomAPIEvent", evtHandlerFunction); }
                    },
                    methods: {
                        SendKey: function (keycode) { return customApiVoiceKeyHandler_1.Call("SendKey", { keycode: keycode }); }
                    }
                };
            }
            return ServiceClientZac_1.internalVoiceKeyHandlerObject;
        };
        ServiceClientZac.getDialManager = function (context) {
            if (!ServiceClientZac_1.internalDialManagerObject) {
                var dialManager_1 = context.zacAPI.AppManager.DialManager;
                if (dialManager_1) {
                    ServiceClientZac_1.internalDialManagerObject = {
                        object: dialManager_1,
                        events: {
                            onDialAppHideRequestEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(dialManager_1, "DialAppHideRequestEvent", evtHandlerFunction); },
                            onDialAppStartRequestEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(dialManager_1, "DialAppStartRequestEvent", evtHandlerFunction); },
                            onDialAppStatusRequestEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(dialManager_1, "DialAppStatusRequestEvent", evtHandlerFunction); },
                            onDialAppStopRequestEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(dialManager_1, "DialAppStopRequestEvent", evtHandlerFunction); }
                        },
                        methods: {}
                    };
                }
            }
            return ServiceClientZac_1.internalDialManagerObject;
        };
        ServiceClientZac.getFrontDisplay = function (context) {
            if (!ServiceClientZac_1.internalFrontDisplayObject) {
                var frontDisplay_1 = context.zacAPI.System.FrontDisplay;
                ServiceClientZac_1.internalFrontDisplayObject = {
                    object: frontDisplay_1,
                    events: {
                        onFrontDisplayStringChanged: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(frontDisplay_1, "FrontDisplayStringChanged", evtHandlerFunction); }
                    },
                    methods: {}
                };
            }
            return ServiceClientZac_1.internalFrontDisplayObject;
        };
        ServiceClientZac.getNetworks = function (context) {
            if (!ServiceClientZac_1.internalNetworksObject) {
                var networks_1 = context.zacAPI.Networks;
                ServiceClientZac_1.internalNetworksObject = {
                    object: networks_1,
                    events: {
                        onNetworkLinkStatusChanged: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(networks_1, "linkStatusChanged", evtHandlerFunction); },
                        onNetworkNetworkStatusChanged: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(networks_1, "networkStatusChanged", evtHandlerFunction); }
                    },
                    methods: {}
                };
            }
            return ServiceClientZac_1.internalNetworksObject;
        };
        ServiceClientZac.getOutputs = function (context) {
            if (!ServiceClientZac_1.internalOutputsObject) {
                var outputs_1 = context.zacAPI.Outputs;
                ServiceClientZac_1.internalOutputsObject = {
                    object: outputs_1,
                    events: {
                        onOutputChanged: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(outputs_1, "OutputChanged", evtHandlerFunction); }
                    },
                    methods: {
                        getOutputChangedReasonInfo: function (reasonValue) { return ServiceClientZac_1.getTypeInfo(outputs_1, [
                            "REASON_CONNECTED",
                            "REASON_DISCONNECTED",
                            "REASON_VIDEO_FORMAT_CHANGED",
                            "REASON_HDCP_DISENGAGED",
                            "REASON_HDCP_ENGAGED",
                            "REASON_HDCP_ERROR"
                        ], reasonValue); }
                    }
                };
            }
            return ServiceClientZac_1.internalOutputsObject;
        };
        ServiceClientZac.getPower = function (context) {
            if (!ServiceClientZac_1.internalPowerObject) {
                var power_1 = context.zacAPI.System.Power;
                ServiceClientZac_1.internalPowerObject = {
                    object: power_1,
                    events: {
                        onPowerStateChanged: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(power_1, "PowerStateChanged", evtHandlerFunction); }
                    },
                    methods: {
                        getPowerStateInfo: function (powerState) { return ServiceClientZac_1.getTypeInfo(power_1, [
                            "POWER_ACTIVE",
                            "POWER_FAKE_STANDBY",
                            "POWER_STANDBY",
                            "POWER_STANDBY_PENDING",
                            "POWER_STANDBY_PENDING_ABORTED"
                        ], powerState); }
                    }
                };
            }
            return ServiceClientZac_1.internalPowerObject;
        };
        ServiceClientZac.getBluetooth = function (context) {
            if (!ServiceClientZac_1.internalBluetoothObject) {
                var bluetooth_1 = context.zacAPI.System.Bluetooth;
                ServiceClientZac_1.internalBluetoothObject = {
                    object: bluetooth_1,
                    events: {
                        onBluetoothDeviceFound: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_DEVICE_FOUND", evtHandlerFunction); },
                        onBluetoothDeviceRemoved: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_DEVICE_REMOVED", evtHandlerFunction); },
                        onBluetoothDevicePaired: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_DEVICE_PAIRED", evtHandlerFunction); },
                        onBluetoothDeviceConnected: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_DEVICE_CONNECTED", evtHandlerFunction); },
                        onBluetoothDeviceDisconnected: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_DEVICE_DISCONNECTED", evtHandlerFunction); },
                        onBluetoothError: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_ERROR", evtHandlerFunction); },
                        onBluetoothScanFinished: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_SCAN_FINISHED", evtHandlerFunction); },
                        onBluetoothScanStarted: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_SCAN_STARTED", evtHandlerFunction); },
                        onBluetoothStateChanged: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_STATE_CHANGED", evtHandlerFunction); },
                        onBluetoothOTAStarted: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_OTA_STARTED", evtHandlerFunction); },
                        onBluetoothOTAProgress: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_OTA_PROGRESS", evtHandlerFunction); },
                        onBluetoothOTAFinished: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_OTA_FINISHED", evtHandlerFunction); },
                        onBluetoothManagerTerminated: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_MANAGER_TERMINATED", evtHandlerFunction); },
                        onBluetoothRecoveryPairingStarted: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_RECOVERY_PAIRING_STARTED", evtHandlerFunction); },
                        onBluetoothRecoveryPairingFinished: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_RECOVERY_PAIRING_FINISHED", evtHandlerFunction); },
                        onBluetoothVoiceSearchStart: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_VOICE_SEARCH_START", evtHandlerFunction); },
                        onBluetoothVoiceSearchActive: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_VOICE_SEARCH_ACTIVE", evtHandlerFunction); },
                        onBluetoothVoiceSearchStop: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_VOICE_SEARCH_STOP", evtHandlerFunction); },
                        onBluetoothVoiceSearchError: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(bluetooth_1, "BT_VOICE_SEARCH_ERROR", evtHandlerFunction); }
                    },
                    methods: {
                        GetState: function () { return bluetooth_1.GetState(); },
                        StartScan: function () { return bluetooth_1.StartScan(); },
                        StopScan: function () { return bluetooth_1.StopScan(); },
                        Pair: function (macAddress) { return bluetooth_1.Pair(macAddress); },
                        Remove: function (macAddress) { return bluetooth_1.Remove(macAddress); },
                        GetDevices: function () { return bluetooth_1.GetDevices(); },
                        UpdateFirmware: function (macAddress) { return bluetooth_1.UpdateFirmware(macAddress); },
                        GetRcsFlag: function () { return bluetooth_1.GetRcsFlag(); },
                        SetRcsFlag: function (value) { return bluetooth_1.SetRcsFlag(value); },
                        getBluetoothStateInfo: function (bluetooth, state) {
                            return ServiceClientZac_1.getTypeInfo(bluetooth, [
                                "BT_STATE_INIT",
                                "BT_STATE_PAIRED",
                                "BT_STATE_PAIRED_NOT_CONNECTED",
                                "BT_STATE_PAIRING",
                                "BT_STATE_SCANNING",
                                "BT_STATE_OTA",
                                "BT_STATE_TERMINATING"
                            ], state);
                        }
                    }
                };
            }
            return ServiceClientZac_1.internalBluetoothObject;
        };
        ServiceClientZac.getSettings = function (context) {
            if (!ServiceClientZac_1.internalSettingsObject) {
                var settings_1 = context.zacAPI.System.Settings;
                ServiceClientZac_1.internalSettingsObject = {
                    object: settings_1,
                    events: {
                        onSettingChanged: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(settings_1, "SettingChanged", evtHandlerFunction); }
                    },
                    methods: {}
                };
            }
            return ServiceClientZac_1.internalSettingsObject;
        };
        ServiceClientZac.getStandbyHandler = function (context) {
            if (!ServiceClientZac_1.internalStandbyHandlerObject) {
                var standbyHandler_1 = context.zacAPI.System.Power.CreateStandbyHandler();
                ServiceClientZac_1.internalStandbyHandlerObject = {
                    object: standbyHandler_1,
                    events: {
                        onPowerStandbyPending: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(standbyHandler_1, "PowerStandbyPending", evtHandlerFunction); }
                    },
                    methods: {
                        keepAlive: function (keepAlive) { return standbyHandler_1.KeepAlive(keepAlive); },
                        resetStandbyHandlerCountdown: function () { return standbyHandler_1.ResetStandbyHandlerCountdown(); },
                        standbyOk: function () { return standbyHandler_1.StandbyOk(); }
                    }
                };
            }
            return ServiceClientZac_1.internalStandbyHandlerObject;
        };
        ServiceClientZac.getStorageManager = function (context) {
            if (!ServiceClientZac_1.internalStorageManagerObject) {
                var storageManager_1 = context.zacAPI.StorageManager;
                var funcConnectionTypeInfo_1 = function (connectionType) { return ServiceClientZac_1.getTypeInfo(storageManager_1, [
                    "CONNECTION_TYPE_SATA",
                    "CONNECTION_TYPE_UNKNOWN",
                    "CONNECTION_TYPE_USB",
                    "CONNECTION_TYPE_USB_REMOVABLE"
                ], connectionType); };
                var funcStorageEventTypeInfo_1 = function (storageEventType) { return ServiceClientZac_1.getTypeInfo(storageManager_1, [
                    "FORMATTING_PROGRESS",
                    "FORMATTING_DONE",
                    "FORMATTING_FAILED",
                    "MOUNTING_PROGRESS",
                    "MOUNTING_FAILED",
                    "MOUNTING_DONE",
                    "FREE_SPACE_LOW_WARNING"
                ], storageEventType); };
                var funcStorageListEventTypeInfo_1 = function (storageListEventType) { return ServiceClientZac_1.getTypeInfo(storageManager_1, [
                    "DEVICE_ADDED",
                    "DEVICE_REMOVED",
                    "FILE_STORAGE_ADDED",
                    "FILE_STORAGE_REMOVED"
                ], storageListEventType); };
                var funcStorageStateInfo_1 = function (storageState) { return ServiceClientZac_1.getTypeInfo(storageManager_1, [
                    "STATE_DISCONNECTED",
                    "STATE_FORMATTING",
                    "STATE_MOUNTING",
                    "STATE_OPERATIONAL",
                    "STATE_UNMOUNTED"
                ], storageState); };
                var funcStorageTypeInfo_1 = function (storageType) { return ServiceClientZac_1.getTypeInfo(storageManager_1, [
                    "PHYSICAL_DEVICE",
                    "FILE_STORAGE"
                ], storageType); };
                var funcStorageInfo_1 = function (storage) {
                    var type = funcStorageTypeInfo_1(storage.type);
                    var id = storage.information != null ? storage.information.uuid : "n.a.";
                    var connectionType = funcConnectionTypeInfo_1(storage.connectionType);
                    return "TYPE: " + type + ", CONNECTTION TYPE: " + connectionType + ", NAME: " + storage.name + ", UUID: " + id;
                };
                ServiceClientZac_1.internalStorageManagerObject = {
                    object: storageManager_1,
                    events: {
                        onStorageListUpdated: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(storageManager_1, "StorageListUpdated", evtHandlerFunction); }
                    },
                    methods: {
                        getConnectionTypeInfo: funcConnectionTypeInfo_1,
                        getFileSystemInfo: function (fileSystem) { return ServiceClientZac_1.getTypeInfo(storageManager_1, [
                            "FILESYSTEM_UNKNOWN",
                            "FILESYSTEM_EXT2",
                            "FILESYSTEM_EXT3",
                            "FILESYSTEM_EXT4",
                            "FILESYSTEM_NTFS",
                            "FILESYSTEM_FAT32"
                        ], fileSystem); },
                        getStorageEventInfo: function (event) {
                            var storageInfo = funcStorageInfo_1(event.storage);
                            var eventTypeInfo = funcStorageEventTypeInfo_1(event.eventType);
                            return "STORAGE: " + storageInfo + ", EVENT TYPE: " + eventTypeInfo + " , VALUE: " + event.value;
                        },
                        getStorageListEventInfo: function (event) {
                            var storageInfo = funcStorageInfo_1(event.storage);
                            var eventTypeInfo = funcStorageListEventTypeInfo_1(event.eventType);
                            return "STORAGE: " + storageInfo + ", EVENT TYPE: " + eventTypeInfo + ", NAME: " + event.name;
                        },
                        getStoragePurposeInfo: function (storagePurpose) { return ServiceClientZac_1.getTypeInfo(storageManager_1, [
                            "PURPOSE_LIVE_DELAY",
                            "PURPOSE_PVR",
                            "PURPOSE_NOT_USED"
                        ], storagePurpose); },
                        getStorageStateChangedEventInfo: function (event) {
                            var storageInfo = funcStorageInfo_1(event.storage);
                            var stateInfo = funcStorageStateInfo_1(event.state);
                            return "STORAGE: " + storageInfo + ", STATE: " + stateInfo;
                        },
                        getStorageStateInfo: funcStorageStateInfo_1,
                        getStorageTypeInfo: funcStorageTypeInfo_1,
                        onStorageEvent: function (storage, evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(storage, "StorageEvent", evtHandlerFunction); },
                        onStorageStateChangedEvent: function (storage, evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(storage, "StorageStateChangedEvent", evtHandlerFunction); }
                    }
                };
            }
            return ServiceClientZac_1.internalStorageManagerObject;
        };
        ServiceClientZac.getPlayerStateInfo = function (player, state) {
            return ServiceClientZac_1.getTypeInfo(player, [
                "PLAYERSTATE_DISCONNECTED",
                "PLAYERSTATE_CONNECTING",
                "PLAYERSTATE_BUFFERING",
                "PLAYERSTATE_PLAYING",
                "PLAYERSTATE_ERROR"
            ], state);
        };
        ServiceClientZac.getSwUpgradeComponentInfo = function (swUpgradeConstants, componentType) {
            return ServiceClientZac_1.getTypeInfo(swUpgradeConstants, [
                "SW_UPGRADE_COMPONENT_UNKNOWN",
                "SW_UPGRADE_COMPONENT_BOOT_IMAGE",
                "SW_UPGRADE_COMPONENT_BOOT_LOADER",
                "SW_UPGRADE_COMPONENT_FRONT_PANEL",
                "SW_UPGRADE_COMPONENT_FRONT_PANEL_FONT",
                "SW_UPGRADE_COMPONENT_SPLASH_SCREEN",
                "SW_UPGRADE_COMPONENT_SECURITY_FIRMWARE",
                "SW_UPGRADE_COMPONENT_POWER_FIRMWARE",
                "SW_UPGRADE_COMPONENT_CHANNEL_LOGOS"
            ], componentType);
        };
        ServiceClientZac.getPlayerErrorInfo = function (context, error) {
            return ServiceClientZac_1.getTypeInfo(context.zacAPI, [
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
                "NOT_LOGGED_IN",
                "INSUFFICIENT_STORAGE",
                "ACCOUNT_IS_LOCKED",
                "DECRYPT_ERROR",
                "DEVICE_NOT_AVAILABLE",
                "INSUFFICIENT_WAN_BANDWIDTH",
                "OUTPUT_CAPABILITIES_MISSING",
                "ALREADY_EXISTS"
            ], error);
        };
        ServiceClientZac.getContentTypeInfo = function (contentType) {
            switch (contentType) {
                case 6: return "APP";
                case 1: return "INSTANT_RESTART";
                case 2: return "LIVETV";
                case 5: return "RADIO";
                case 3: return "RECORDING";
                case 4: return "VOD";
                case 0: return "UNKNOWN";
            }
            return "INVALID_VALUE";
        };
        ServiceClientZac.getSwUpgrade = function (context) {
            if (!ServiceClientZac_1.internalSwUpgradeObject) {
                var swUpgrade_1 = context.zacAPI.System.SwUpgrade;
                ServiceClientZac_1.internalSwUpgradeObject = {
                    object: swUpgrade_1,
                    events: {
                        onSearchResult: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(swUpgrade_1, "SearchResult", evtHandlerFunction); },
                    },
                    methods: {}
                };
            }
            return ServiceClientZac_1.internalSwUpgradeObject;
        };
        ServiceClientZac.getSystem = function (context) {
            if (!ServiceClientZac_1.internalSystemObject) {
                var system_1 = context.zacAPI.System;
                ServiceClientZac_1.internalSystemObject = {
                    object: system_1,
                    events: {
                        onRcuBatteryLowEvent: function (evtHandlerFunction) { return ServiceClientZac_1.createClosableEvent(system_1, "RcuBatteryLowEvent", evtHandlerFunction); }
                    },
                    methods: {
                        SetAdditionalInformation: function (property, value) { return system_1.SetAdditionalInformation(property, value); }
                    }
                };
            }
            return ServiceClientZac_1.internalSystemObject;
        };
        ServiceClientZac.getOutdoorUnitDb = function (context) {
            if (!ServiceClientZac_1.internalOutdoorObject) {
                var outdoor = context.zacAPI.System.OutDoorUnitDb;
                ServiceClientZac_1.internalOutdoorObject = {
                    object: outdoor,
                    events: {},
                    methods: {}
                };
            }
            return ServiceClientZac_1.internalOutdoorObject;
        };
        ServiceClientZac.getFrontendManager = function (context) {
            if (!ServiceClientZac_1.internalFrontendsObject) {
                var frontend = context.zacAPI.Frontends;
                ServiceClientZac_1.internalFrontendsObject = {
                    object: frontend,
                    events: {},
                    methods: {}
                };
            }
            return ServiceClientZac_1.internalFrontendsObject;
        };
        ServiceClientZac.getAccessTokenForScope = function (scope) {
            var _a;
            var clients = (_a = public_1.Configuration.instance.sam3) === null || _a === void 0 ? void 0 : _a.clients;
            var clientData = clients && (clients[scope] || clients.default) || { clientID: "", clientSecret: "" };
            var params = {
                clientID: clientData.clientID,
                clientSecret: clientData.clientSecret,
                scope: scope
            };
            return ServiceClientZac_1.getAccessToken(ServiceClientContextZac_1.ServiceClientContextZac.instance, params)
                .then(function (tokenResponse) {
                if (!tokenResponse.accessToken) {
                    throw new AuthenticationManagerAccessTokenError("Empty token", scope, tokenResponse);
                }
                return tokenResponse.accessToken;
            });
        };
        ServiceClientZac.getAccessToken = function (context, input) {
            return ServiceClientZac_1
                .prepareAuthenticationManager(context)
                .then(function (authMan) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getAccessToken - call", ServiceClientZac_1.TAG)); });
                var result = authMan.authMan.methods.GetAccessToken(input);
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getAccessToken - call result: " + result.requestId, ServiceClientZac_1.TAG)); });
                var defer = authMan.promises[result.requestId] = public_1.Defer.defer();
                var timeout = (input === null || input === void 0 ? void 0 : input.acr) ? 20 * 60 * 1000 : 30000;
                return defer.promise.timeout(timeout);
            });
        };
        ServiceClientZac.getGcpAccessToken = function (context, input) {
            return ServiceClientZac_1
                .prepareAuthenticationManager(context)
                .then(function (authMan) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getGcpAccessToken - call", ServiceClientZac_1.TAG)); });
                var result = authMan.authMan.methods.GetGcpAccessToken(input);
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getGcpAccessToken - call result: " + result.requestId, ServiceClientZac_1.TAG)); });
                var defer = authMan.promises[result.requestId] = public_1.Defer.defer();
                return defer.promise.timeout(30000);
            });
        };
        ServiceClientZac.getIdToken = function (context) {
            return ServiceClientZac_1
                .prepareAuthenticationManager(context)
                .then(function (authMan) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getIdToken - call", ServiceClientZac_1.TAG)); });
                var result = authMan.authMan.methods.GetIdToken();
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getIdToken - call result: " + result.requestId, ServiceClientZac_1.TAG)); });
                var defer = authMan.promises[result.requestId] = public_1.Defer.defer();
                return defer.promise.timeout(30000);
            });
        };
        ServiceClientZac.deleteRefreshToken = function (context) {
            return ServiceClientZac_1
                .prepareAuthenticationManager(context)
                .then(function (authMan) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("DeleteToken - call", ServiceClientZac_1.TAG)); });
                var result = authMan.authMan.methods.DeleteToken({ tokenName: "refresh_token" });
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("DeleteToken - call result: " + result.requestId, ServiceClientZac_1.TAG)); });
            });
        };
        ServiceClientZac.handleCustomApiEvent = function (authMan, event) {
            var _a;
            if (!event.requestId) {
                public_1.Logger.error(function (log) { return log(public_1.LogMsg("handleCustomApiEvent receives an empty requestId. The result is a timeout exception for the pending promise.", ServiceClientZac_1.TAG)); });
            }
            var deferCall = (_a = authMan.promises) === null || _a === void 0 ? void 0 : _a[event.requestId];
            if (!deferCall) {
                public_1.Logger.error(function (log) { return log(public_1.LogMsg("handleCustomApiEvent receives a requestId '" + event.requestId + "' but cannot find a pending promise with these ID.", ServiceClientZac_1.TAG)); });
            }
            if (deferCall && authMan.promises)
                delete authMan.promises[event.requestId];
            var funcIsIdToken = function (arg) { return arg.anid !== undefined; };
            if (Number(event.retcode) != 0) {
                if (funcIsIdToken(event)) {
                    public_1.Logger.debug(function (log) {
                        log(public_1.LogMsg("DT_GetIdTokenResponseEvent - retcode: " + event.retcode, ServiceClientZac_1.TAG));
                    });
                }
                else {
                    public_1.Logger.debug(function (log) {
                        log(public_1.LogMsg("DT_GetAccessTokenResponseEvent - requestId: " + event.requestId, ServiceClientZac_1.TAG));
                        log(public_1.LogMsg("DT_GetAccessTokenResponseEvent - retcode: " + event.retcode, ServiceClientZac_1.TAG));
                        log(public_1.LogMsg("DT_GetAccessTokenResponseEvent - error: " + event.error, ServiceClientZac_1.TAG));
                        log(public_1.LogMsg("DT_GetAccessTokenResponseEvent - errorDescription: " + event.errorDescription, ServiceClientZac_1.TAG));
                        log(public_1.LogMsg("DT_GetAccessTokenResponseEvent - httpStatus: " + event.httpStatus, ServiceClientZac_1.TAG));
                        log(public_1.LogMsg("DT_GetAccessTokenResponseEvent - accessToken: " + event.accessToken, ServiceClientZac_1.TAG));
                        log(public_1.LogMsg("DT_GetAccessTokenResponseEvent - isRefreshTokenStored: " + event.isRefreshTokenStored, ServiceClientZac_1.TAG));
                    });
                }
                if (deferCall) {
                    var error = new zac_errors_1.ZacAuthenticationProcessError("The token request failed!");
                    error.ReturnCode = event.retcode;
                    deferCall.reject(error);
                }
            }
            else {
                if (funcIsIdToken(event)) {
                    public_1.Logger.debug(function (log) {
                        log(public_1.LogMsg("DT_GetIdTokenResponseEvent - anid: " + event.anid, ServiceClientZac_1.TAG));
                        log(public_1.LogMsg("DT_GetIdTokenResponseEvent - displayname: " + event.displayname, ServiceClientZac_1.TAG));
                    });
                }
                else {
                    if (event.accessToken) {
                        public_1.Logger.debug(function (log) {
                            log(public_1.LogMsg("DT_GetAccessTokenResponseEvent - scope: " + event.scope, ServiceClientZac_1.TAG));
                            log(public_1.LogMsg("DT_GetAccessTokenResponseEvent - accessToken: " + event.accessToken, ServiceClientZac_1.TAG));
                            log(public_1.LogMsg("DT_GetAccessTokenResponseEvent - expiresIn: " + event.expiresIn, ServiceClientZac_1.TAG));
                            log(public_1.LogMsg("DT_GetAccessTokenResponseEvent - isRefreshTokenStored: " + event.isRefreshTokenStored, ServiceClientZac_1.TAG));
                        });
                    }
                    else {
                        public_1.Logger.error(function (log) {
                            log(public_1.LogMsg("DT_GetAccessTokenResponseEvent (missing accessToken) - scope: " + event.scope, ServiceClientZac_1.TAG));
                            log(public_1.LogMsg("DT_GetAccessTokenResponseEvent (missing accessToken) - accessToken: " + event.accessToken, ServiceClientZac_1.TAG));
                            log(public_1.LogMsg("DT_GetAccessTokenResponseEvent (missing accessToken) - expiresIn: " + event.expiresIn, ServiceClientZac_1.TAG));
                        });
                    }
                }
                if (deferCall)
                    deferCall.resolve(event);
            }
        };
        ServiceClientZac.pushSqmEvent = function (context, sqmEvent) {
            try {
                var sqmEventComplete_1 = __assign(__assign({}, sqmEvent), { Timestamp: Date.now().toString(), ErrorMessage: (sqmEvent.ErrorMessage || "").replace(/\n/g, " ").replace(/\|/g, "#"), SessionID: ServiceClientZac_1.sqmSessionId + "_" + ServiceClientZac_1.sqmSessionCount++ });
                ServiceClientZac_1.getCustomApiSqmEvent(context).object.Call("PushError", sqmEventComplete_1);
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("pushSqmEvent: " + JSON.stringify(sqmEventComplete_1), ServiceClientZac_1.TAG)); });
            }
            catch (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("pushSqmEvent - error: " + JSON.stringify(error), ServiceClientZac_1.TAG)); });
            }
        };
        ServiceClientZac.createClosableEvent = function (obj, evtName, evtHandlerFunction) {
            public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("createClosableEvent add, evtName: '" + evtName + "' counter '" + ++ServiceClientZac_1.eventHandlerCount + "'", ServiceClientZac_1.TAG)); });
            var eventId = obj.registerEventListener(evtName, function (innerEvent) {
                evtHandlerFunction(innerEvent);
            });
            return function () {
                public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("createClosableEvent remove, evtName: '" + evtName + "' counter '" + --ServiceClientZac_1.eventHandlerCount + "'", ServiceClientZac_1.TAG)); });
                obj.unregisterEventListener(evtName, eventId);
            };
        };
        ServiceClientZac.getCustomApi = function (context, apiName) {
            try {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getCustomApi - create '" + apiName + "'", ServiceClientZac_1.TAG)); });
                return context.zacAPI.GetCustomAPI(apiName);
            }
            catch (err) {
                public_1.Logger.error(function (log) { return log(public_1.LogMsg("getCustomApi throws an exception for apiName '" + apiName + "'. Exception: " + err, ServiceClientZac_1.TAG)); });
                throw err;
            }
        };
        ServiceClientZac.getTypeInfo = function (obj, fields, value) {
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                if (obj[field] === value) {
                    return value + " [" + field + "]";
                }
            }
            return value + " [unknown]";
        };
        ServiceClientZac.prepareAuthenticationManager = function (context) {
            if (!ServiceClientZac_1.promiseAuthenticationManager) {
                var setupTimeoutFinalize = context.startupTime + context.authManApiSetupFinalize - Date.now();
                ServiceClientZac_1.promiseAuthenticationManager = ServiceClientAuthenticationZosa_1.ServiceClientAuthenticationZosa.getAuthenticationProcess()
                    .delay(200)
                    .then(function () {
                    var authMan = ServiceClientZac_1.getCustomApiAuthenticationManager(context);
                    authMan.events.onCustomAPIEvent(function (event) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getToken - requestId: '" + event.requestId + "'", ServiceClientZac_1.TAG)); });
                        ServiceClientZac_1.handleCustomApiEvent(result, event);
                    });
                    var result = {
                        authMan: authMan,
                        promises: {}
                    };
                    return result;
                })
                    .delay(setupTimeoutFinalize <= 0 ? 50 : setupTimeoutFinalize);
            }
            return ServiceClientZac_1.promiseAuthenticationManager;
        };
        ServiceClientZac.setRcsFlag = function (value) {
            return bluebird.try(function () { return ServiceClientZac_1.getBluetooth(ServiceClientContextZac_1.ServiceClientContextZac.instance).methods.SetRcsFlag(value); });
        };
        ServiceClientZac.getRcsFlag = function () {
            return bluebird.try(function () { return ServiceClientZac_1.getBluetooth(ServiceClientContextZac_1.ServiceClientContextZac.instance).methods.GetRcsFlag() == 1; });
        };
        ServiceClientZac.getUserStorageValue = function (key, defaultValue, validValues) {
            return ServiceClientZac_1.readItem(key)
                .then(function (item) {
                if (item == null) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Adding key " + key + " with default value " + defaultValue, ServiceClientZac_1.TAG)); });
                    return ServiceClientZac_1
                        .writeItem(key, defaultValue)
                        .then(function () { return defaultValue; });
                }
                else if (validValues && validValues.length > 0) {
                    if (validValues.indexOf(item) < 0) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Found invalid value for key " + key + ": " + item + ". Set default value: " + defaultValue, ServiceClientZac_1.TAG)); });
                        return ServiceClientZac_1
                            .writeItem(key, defaultValue)
                            .then(function () { return defaultValue; });
                    }
                    else {
                        return item;
                    }
                }
                else {
                    return item;
                }
            });
        };
        ServiceClientZac.writeItem = function (key, value, persist) {
            if (persist === void 0) { persist = true; }
            var currentApp = ServiceClientZac_1.getApp(ServiceClientContextZac_1.ServiceClientContextZac.instance);
            if (currentApp == null || currentApp.object == null) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("could not write Item - current app is null", ServiceClientZac_1.TAG)); });
                return bluebird.resolve();
            }
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Write Item " + key + ": " + value, ServiceClientZac_1.TAG)); });
            return ServiceClientZac_1.evaluateZacResponse(function () { return currentApp.object.SettingSet(key, value, persist); })
                .then(function () { return synchronisation_1.Synchronization.synchronizeKey("userStorage", key); });
        };
        ServiceClientZac.readItem = function (key) {
            return bluebird.try(function () {
                var currentApp = ServiceClientZac_1.getApp(ServiceClientContextZac_1.ServiceClientContextZac.instance);
                if (currentApp == null || currentApp.object == null) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("could not read Item - current app is null", ServiceClientZac_1.TAG)); });
                    return null;
                }
                try {
                    var value_1 = currentApp.object.SettingGet(key);
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("currentApp - read Item " + key + ": " + value_1, ServiceClientZac_1.TAG)); });
                    return value_1;
                }
                catch (error) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("currentApp - could not read Item " + key + ": " + error, ServiceClientZac_1.TAG)); });
                    return null;
                }
            });
        };
        ServiceClientZac.removeItem = function (key) {
            var currentApp = ServiceClientZac_1.getApp(ServiceClientContextZac_1.ServiceClientContextZac.instance);
            if (currentApp == null || currentApp.object == null) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("could not remove Item - current app is null", ServiceClientZac_1.TAG)); });
                return bluebird.resolve(undefined);
            }
            return ServiceClientZac_1.evaluateZacResponse(function () { return currentApp.object.SettingsDelete(key); });
        };
        ServiceClientZac.evaluateZacResponse = function (callback, errorDescFunc) {
            return new bluebird(function (resolve, reject) {
                var retVal = callback();
                if (retVal == 0) {
                    resolve();
                }
                else if (errorDescFunc) {
                    reject(new ZacError(errorDescFunc(retVal)));
                }
                else {
                    reject(new ZacError(ServiceClientContextZac_1.ServiceClientContextZac.instance.zacAPI.GetErrorDescription(retVal)));
                }
            });
        };
        ServiceClientZac.evaluateZacResponseSync = function (callback, errorDescFunc) {
            var retVal = callback();
            if (retVal == 0) {
                return;
            }
            else if (errorDescFunc) {
                throw new ZacError(errorDescFunc(retVal));
            }
            else {
                throw new ZacError(ServiceClientContextZac_1.ServiceClientContextZac.instance.zacAPI.GetErrorDescription(retVal));
            }
        };
        ServiceClientZac.getKeyValue = function (key) {
            return bluebird.try(function () {
                var value = ServiceClientZac_1.getSettings(ServiceClientContextZac_1.ServiceClientContextZac.instance).object.Get(key);
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("GET VALUE FOR KEY '" + key + "': '" + value + "'", ServiceClientZac_1.TAG)); });
                return value;
            });
        };
        ServiceClientZac.setKeyValue = function (key, value) {
            return bluebird.try(function () {
                public_1.Logger.info(function (log) { return log(public_1.LogMsg("SET KEY '" + key + "' to VALUE '" + value + "'", ServiceClientZac_1.TAG)); });
                var retValue = ServiceClientZac_1.getSettings(ServiceClientContextZac_1.ServiceClientContextZac.instance).object.Set(key, value);
                synchronisation_1.Synchronization.synchronizeKey("zacSetting", key);
                return retValue;
            });
        };
        ServiceClientZac.getKeyValues = function (key, defaultValue) {
            return bluebird.try(function () {
                var values = ServiceClientZac_1.getSettings(ServiceClientContextZac_1.ServiceClientContextZac.instance).object.GetList(key);
                if ((!values || values.length == 0) && defaultValue) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("GET VALUES FOR KEY '" + key + "' null or empty - setting default value.'", ServiceClientZac_1.TAG)); });
                    return ServiceClientZac_1.setKeyValue(key, defaultValue)
                        .then(function () { return ServiceClientZac_1.getKeyValues(key); });
                }
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("GET VALUES FOR KEY '" + key + "': '" + (values ? values.join("|") : "") + "'", ServiceClientZac_1.TAG)); });
                return values;
            });
        };
        ServiceClientZac.getUpTimeSeconds = function () {
            return ServiceClientZac_1.getSystem(ServiceClientContextZac_1.ServiceClientContextZac.instance).object.GetSystemInformation().UpTime;
        };
        ServiceClientZac.getSystemInformation = function (refreshCache) {
            if (refreshCache === void 0) { refreshCache = false; }
            if (ServiceClientZac_1.systemInfo == null || refreshCache) {
                var system = ServiceClientZac_1.getSystem(ServiceClientContextZac_1.ServiceClientContextZac.instance);
                var zacSystemInformation_1 = system.object.GetSystemInformation();
                if (!zacSystemInformation_1) {
                    throw new ZacSystemError("ServiceClientZac.getSystemInformation result is NULL.");
                }
                ServiceClientZac_1.systemInfo = {
                    BootloaderVersion: zacSystemInformation_1.BootloaderVersion,
                    BuildDate: zacSystemInformation_1.BuildDate,
                    ChipID: zacSystemInformation_1.ChipID,
                    HwModel: zacSystemInformation_1.HwModel,
                    HwModelType: zacSystemInformation_1.HwModelType,
                    HwVersion: zacSystemInformation_1.HwVersion,
                    OUI: zacSystemInformation_1.OUI,
                    ProductID: zacSystemInformation_1.ProductID,
                    ProductName: zacSystemInformation_1.ProductName,
                    SerialNumber: zacSystemInformation_1.SerialNumber,
                    SwBaseVariant: zacSystemInformation_1.SwBaseVariant,
                    SwProductVariant: zacSystemInformation_1.SwProductVariant,
                    SwVersion: zacSystemInformation_1.SwVersion,
                    GUID: zacSystemInformation_1.GUID,
                    UpTime: zacSystemInformation_1.UpTime
                };
                try {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Try parse AdditionalInformation " + zacSystemInformation_1.AdditionalInformation, ServiceClientZac_1.TAG)); });
                    var additionalInformationArray = JSON.parse(zacSystemInformation_1.AdditionalInformation);
                    additionalInformationArray.forEach(function (additionalInfoStringArray) { return ServiceClientZac_1.addSystemInfoValue(additionalInfoStringArray[0], additionalInfoStringArray[1]); });
                }
                catch (error) {
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("Error parsing AdditionalInformation: " + error, ServiceClientZac_1.TAG)); });
                }
                try {
                    var zacPluginInformation = ServiceClientContextZac_1.ServiceClientContextZac.instance.zacAPI.PluginVersion;
                    if (!zacPluginInformation) {
                        throw new ZacSystemError("ServiceClientZac.getPluginInformation result is NULL.");
                    }
                    else {
                        ServiceClientZac_1.systemInfo.zacVersion = zacPluginInformation.major + "." + zacPluginInformation.minor;
                        ServiceClientZac_1.systemInfo.zacBuildTimeStamp = zacPluginInformation.buildTimeStamp;
                        ServiceClientZac_1.systemInfo.zacDescription = zacPluginInformation.description;
                        ServiceClientZac_1.systemInfo.zacRevision = zacPluginInformation.revision;
                    }
                }
                catch (error) {
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("Exception getting PluginInformation: " + error, ServiceClientZac_1.TAG)); });
                }
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("" + JSON.stringify(ServiceClientZac_1.systemInfo), ServiceClientZac_1.TAG)); });
            }
            return ServiceClientZac_1.systemInfo;
        };
        ServiceClientZac.addSystemInfoValue = function (additionalInfoKey, additionalInfoValue) {
            if (!ServiceClientZac_1.systemInfo || !additionalInfoKey)
                return;
            switch (additionalInfoKey) {
                case AdditionalInformationKey.netflixEsn:
                    ServiceClientZac_1.systemInfo.NetflixEsn = additionalInfoValue;
                    break;
                case AdditionalInformationKey.netflixVersion:
                    ServiceClientZac_1.systemInfo.NetflixVersion = additionalInfoValue;
                    break;
                case AdditionalInformationKey.socFamilyId:
                    ServiceClientZac_1.systemInfo.SocFamilyId = additionalInfoValue;
                    break;
                case AdditionalInformationKey.socProductId:
                    ServiceClientZac_1.systemInfo.SocProductId = additionalInfoValue;
                    break;
                case AdditionalInformationKey.versionHardwareCustomer:
                    ServiceClientZac_1.systemInfo.VersionHardwareCustomer = additionalInfoValue;
                    break;
                case AdditionalInformationKey.uiVersion:
                    ServiceClientZac_1.systemInfo.UiVersion = additionalInfoValue;
                    break;
                case AdditionalInformationKey.amazonVersion:
                    ServiceClientZac_1.systemInfo.amazonVersion = additionalInfoValue;
                    break;
                case AdditionalInformationKey.amazonFontVersion:
                    ServiceClientZac_1.systemInfo.amazonFontVersion = additionalInfoValue;
                    break;
                default:
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Unused AdditionalInformation " + additionalInfoKey + ": " + additionalInfoValue, ServiceClientZac_1.TAG)); });
            }
        };
        ServiceClientZac.isDisplayConnected = function () {
            return ServiceClientZac_1.getNativeVideoFormat()
                .then(function (nativeVideoFormatString) { return nativeVideoFormatString != ServiceClientZac_1.disconnectedZacVideoFormat; });
        };
        ServiceClientZac.getNativeVideoFormat = function () {
            return ServiceClientZac_1.getPropertyValue(ServiceClientContextZac_1.ServiceClientContextZac.instance.zacAPI.Outputs.KEY_OUTPUT_NATIVE_VIDEO_FORMAT);
        };
        ServiceClientZac.getPropertyValue = function (propertyKey, outputType) {
            if (outputType === void 0) { outputType = ServiceClientContextZac_1.ServiceClientContextZac.instance.zacAPI.Outputs.OUTPUT_TYPE_HDMI; }
            return bluebird.try(function () {
                var propertyValue = ServiceClientContextZac_1.ServiceClientContextZac.instance.zacAPI.Outputs.GetProperty(propertyKey, outputType);
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg(propertyKey + " value:  " + propertyValue, ServiceClientZac_1.TAG)); });
                return propertyValue;
            });
        };
        ServiceClientZac.setPropertyValue = function (propertyKey, propertyValue, outputType) {
            if (outputType === void 0) { outputType = ServiceClientContextZac_1.ServiceClientContextZac.instance.zacAPI.Outputs.OUTPUT_TYPE_HDMI; }
            return ServiceClientZac_1.evaluateZacResponse(function () { return ServiceClientContextZac_1.ServiceClientContextZac.instance.zacAPI.Outputs.SetProperty(propertyKey, propertyValue, outputType); });
        };
        ServiceClientZac.getCustomScreenFormat = function () {
            var defaultValue = {};
            return ServiceClientZac_1.getUserStorageValue(public_1.Configuration.instance.settings.userStoreKeyIsCustomScreenformat, JSON.stringify(defaultValue))
                .then(function (value) { return JSON.parse(value); });
        };
        ServiceClientZac.setCustomScreenFormat = function (customScreenformat) {
            return ServiceClientZac_1.getCustomScreenFormat()
                .then(function (screenformatInfo) {
                if (screenformatInfo.currentCustomFormat) {
                    screenformatInfo.previousCustomFormat = screenformatInfo.currentCustomFormat;
                }
                screenformatInfo.currentCustomFormat = customScreenformat;
                return ServiceClientZac_1.writeItem(public_1.Configuration.instance.settings.userStoreKeyIsCustomScreenformat, JSON.stringify(screenformatInfo));
            });
        };
        ServiceClientZac.getDefaultZacVideoFormat = function () {
            return ServiceClientZac_1.getPropertyValue(ServiceClientContextZac_1.ServiceClientContextZac.instance.zacAPI.Outputs.KEY_OUTPUT_DEFAULT_VIDEO_FORMAT);
        };
        ServiceClientZac.setDefaultVideoFormat = function (newDefaultVideoFormat, triggeredByUser) {
            var newZacVideoFormat;
            return ServiceClientZac_1.getZacVideoFormatFromUiVideoFormat(newDefaultVideoFormat)
                .then(function (zacVideoFormat) {
                newZacVideoFormat = zacVideoFormat;
                return ServiceClientZac_1.getPropertyValue(ServiceClientContextZac_1.ServiceClientContextZac.instance.zacAPI.Outputs.KEY_OUTPUT_DEFAULT_VIDEO_FORMAT);
            })
                .then(function (currentZacDefaultVideoFormat) {
                return ServiceClientZac_1.setPropertyValue(ServiceClientContextZac_1.ServiceClientContextZac.instance.zacAPI.Outputs.KEY_OUTPUT_DEFAULT_VIDEO_FORMAT, (newZacVideoFormat || "").toString())
                    .then(function () {
                    if (triggeredByUser) {
                        ServiceClientZac_1.previousZacVideoFormat = currentZacDefaultVideoFormat;
                    }
                });
            })
                .then(function () { return triggeredByUser ? ServiceClientZac_1.setCustomScreenFormat((newZacVideoFormat || "").toString()) : undefined; });
        };
        ServiceClientZac.getZacVideoFormatFromString = function (zacVideoFormatString) {
            return ServiceClientZac_1.getSupportedZacVideoFormats()
                .then(function (supportedZacVideoFormatsDictionary) {
                var zacVideoFormat = supportedZacVideoFormatsDictionary[zacVideoFormatString];
                if (public_1.Guard.isDefined(zacVideoFormat)) {
                    return supportedZacVideoFormatsDictionary[zacVideoFormatString];
                }
                var supportedVideoFormats = [];
                for (var key in supportedZacVideoFormatsDictionary) {
                    supportedVideoFormats.push(key);
                }
                if (zacVideoFormatString == ServiceClientZac_1.disconnectedZacVideoFormat) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Display is disconnected.", ServiceClientZac_1.TAG)); });
                    return undefined;
                }
                throw new OutputsError("ZAC video format '" + zacVideoFormatString + "' is not in the list of supported formats. Supported formats:[" + supportedVideoFormats.join("|") + "].");
            });
        };
        ServiceClientZac.getZacVideoFormatFromUiVideoFormat = function (videoFormat) {
            return ServiceClientZac_1.getSupportedZacVideoFormats()
                .then(function (dictionary) {
                var zacVideoFormats = new zacVideoFormats_1.ZacVideoFormats(dictionary);
                switch (videoFormat) {
                    case zacVideoFormat_1.VideoFormat.VideoFormat_720p:
                        return zacVideoFormats.SelectFromParameters(720, true);
                    case zacVideoFormat_1.VideoFormat.VideoFormat_1080i:
                        return zacVideoFormats.SelectFromParameters(1080, false);
                    case zacVideoFormat_1.VideoFormat.VideoFormat_1080p:
                        return zacVideoFormats.SelectFromParameters(1080, true);
                    case zacVideoFormat_1.VideoFormat.VideoFormat_2160p:
                        return zacVideoFormats.SelectFromParameters(2160, true);
                }
                return null;
            });
        };
        ServiceClientZac.getSupportedZacVideoFormats = function () {
            return bluebird.try(function () {
                return ServiceClientContextZac_1.ServiceClientContextZac.instance.zacAPI.Outputs.GetSupportedVideoFormats(ServiceClientContextZac_1.ServiceClientContextZac.instance.zacAPI.Outputs.OUTPUT_TYPE_HDMI, ServiceClientContextZac_1.ServiceClientContextZac.instance.zacAPI.Outputs.VIDEO_FORMAT_SUPPORTED_BY_TV_AND_STB)
                    .reduce(function (dictionary, jsZacVideoFormat) {
                    var zacVideoFormat = new zacVideoFormat_1.ZacVideoFormat(jsZacVideoFormat);
                    dictionary[zacVideoFormat.toString()] = zacVideoFormat;
                    return dictionary;
                }, {});
            });
        };
        ServiceClientZac.setDefaultVideoFormatToPrevious = function () {
            return ServiceClientZac_1.setPropertyValue(ServiceClientContextZac_1.ServiceClientContextZac.instance.zacAPI.Outputs.KEY_OUTPUT_DEFAULT_VIDEO_FORMAT, ServiceClientZac_1.previousZacVideoFormat)
                .then(function () { return ServiceClientZac_1.getCustomScreenFormat(); })
                .then(function (screenformatInfo) { return ServiceClientZac_1.setCustomScreenFormat(screenformatInfo.previousCustomFormat); });
        };
        var ServiceClientZac_1;
        ServiceClientZac.disconnectedZacVideoFormat = "0x0p0";
        ServiceClientZac.sqmSessionId = Date.now().toString().substring(7, 12);
        ServiceClientZac.sqmSessionCount = 0;
        ServiceClientZac.eventHandlerCount = 0;
        ServiceClientZac.INSTANCE_NAME = "moreTvApp";
        ServiceClientZac.MANIFEST_NAME = "jszac";
        ServiceClientZac.CUSTOM_API_DT_SYSTEM_INFORMATION = "DT-SystemInformationAPI";
        ServiceClientZac.CUSTOM_API_DT_AUTHMAN = "DT-AuthenticationManager";
        ServiceClientZac.CUSTOM_API_SQM_REPORT = "sqmReportApi";
        ServiceClientZac.CUSTOM_API_SQM_EVENT = "sqmEventApi";
        ServiceClientZac.CUSTOM_API_SQM_TRACELOG = "sqmTraceLogApi";
        ServiceClientZac.CUSTOM_API_NETFLIX = "NetflixCustomAPI";
        ServiceClientZac.CUSTOM_API_AMAZON = "AmazonVideoCustomAPI";
        ServiceClientZac.CUSTOM_API_DISNEY = "DisneyCustomAPI";
        ServiceClientZac.CUSTOM_API_ALIEN_RECORDINGS = "AlienRecordingsApi";
        ServiceClientZac.CUSTOM_API_VOICE_KEY_HANDLER = "DT-VoiceKeyHandlerCustomAPI";
        ServiceClientZac.stbFirstBootTimeKey = "appCore.temp.stbFirstBootTime";
        ServiceClientZac.ACTIVE_CHANNEL_LIST = "ChannelManagement.activeChannelListId";
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG, parameters: [1] }); })
        ], ServiceClientZac, "getAccessToken", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG, parameters: [1] }); })
        ], ServiceClientZac, "getGcpAccessToken", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG }); })
        ], ServiceClientZac, "setRcsFlag", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG }); })
        ], ServiceClientZac, "getRcsFlag", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG }); })
        ], ServiceClientZac, "removeItem", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG }); })
        ], ServiceClientZac, "getSystemInformation", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG }); })
        ], ServiceClientZac, "isDisplayConnected", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG }); })
        ], ServiceClientZac, "getPropertyValue", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG }); })
        ], ServiceClientZac, "setPropertyValue", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG }); })
        ], ServiceClientZac, "getCustomScreenFormat", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG }); })
        ], ServiceClientZac, "getDefaultZacVideoFormat", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG }); })
        ], ServiceClientZac, "setDefaultVideoFormat", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG }); })
        ], ServiceClientZac, "getZacVideoFormatFromString", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG }); })
        ], ServiceClientZac, "getZacVideoFormatFromUiVideoFormat", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG }); })
        ], ServiceClientZac, "getSupportedZacVideoFormats", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZac_1.TAG }); })
        ], ServiceClientZac, "setDefaultVideoFormatToPrevious", null);
        ServiceClientZac = ServiceClientZac_1 = __decorate([
            public_1.logTag()
        ], ServiceClientZac);
        return ServiceClientZac;
    }());
    exports.ServiceClientZac = ServiceClientZac;
});
//# sourceMappingURL=ServiceClientZac.js.map