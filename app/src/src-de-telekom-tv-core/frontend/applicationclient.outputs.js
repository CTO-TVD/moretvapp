var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../backend/public", "../backend/Zac/zacVideoFormat", "./applicationclient"], function (require, exports, bluebird, public_1, public_2, zacVideoFormat_1, applicationclient_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Outputs = exports.ZacOutputsEventMapper = void 0;
    var ZacOutputsEventMapper = (function () {
        function ZacOutputsEventMapper() {
            var _this = this;
            this.hdmiEventManager = new public_1.EventManager();
            this.previousEvents = [];
            this.eventLifetimeMs = 3000;
            this.outputs = public_2.ServiceClientZac.getOutputs(public_2.ServiceClientContextZac.instance);
            this.outputs.events.onOutputChanged(function (event) {
                public_1.Logger.info(function (log) { return log(public_1.LogMsg("OutputChangedEvent: outputType: " + event.outputType + ", reason: " + _this.outputs.methods.getOutputChangedReasonInfo(event.reason), ZacOutputsEventMapper.TAG)); });
                if (event.outputType == public_2.ServiceClientContextZac.instance.zacAPI.Outputs.OUTPUT_TYPE_HDMI) {
                    _this.previousEvents.push({
                        reason: event.reason,
                        timestamp: new Date().valueOf()
                    });
                    _this.cleanupEventsQueue(_this.eventLifetimeMs);
                    switch (event.reason) {
                        case public_2.ServiceClientContextZac.instance.zacAPI.Outputs.REASON_HDCP_ENGAGED:
                            if (_this.previousEvents.some(function (event) { return event.reason == public_2.ServiceClientContextZac.instance.zacAPI.Outputs.REASON_CONNECTED; })) {
                                _this.hdmiEventManager.broadcast(ZacOutputsEventMapper.HdmiOutputEventName, { type: "ConnectedAndHdcpEngaged" });
                            }
                            else if (_this.previousEvents.some(function (event) { return event.reason == public_2.ServiceClientContextZac.instance.zacAPI.Outputs.REASON_VIDEO_FORMAT_CHANGED; })) {
                                _this.hdmiEventManager.broadcast(ZacOutputsEventMapper.HdmiOutputEventName, { type: "VideoFormatChangedAndHdcpEngaged" });
                            }
                            else {
                                _this.hdmiEventManager.broadcast(ZacOutputsEventMapper.HdmiOutputEventName, { type: "HdcpEngaged" });
                            }
                            break;
                        case public_2.ServiceClientContextZac.instance.zacAPI.Outputs.REASON_DISCONNECTED:
                            _this.hdmiEventManager.broadcast(ZacOutputsEventMapper.HdmiOutputEventName, { type: "Disconnected" });
                            break;
                        case public_2.ServiceClientContextZac.instance.zacAPI.Outputs.REASON_HDCP_DISENGAGED:
                            _this.hdmiEventManager.broadcast(ZacOutputsEventMapper.HdmiOutputEventName, { type: "HdcpDisengaged" });
                            break;
                    }
                }
            });
        }
        ZacOutputsEventMapper.prototype.cleanupEventsQueue = function (maxTimeMs) {
            this.previousEvents = this.previousEvents.filter(function (event) { return new Date().valueOf() - event.timestamp < maxTimeMs; });
        };
        ZacOutputsEventMapper.prototype.onHdmiOutputEvent = function (callback) {
            return this.hdmiEventManager.on(ZacOutputsEventMapper.HdmiOutputEventName, callback, ZacOutputsEventMapper.TAG);
        };
        ZacOutputsEventMapper.TAG = "ZacOutputsEventMapper";
        ZacOutputsEventMapper.HdmiOutputEventName = "HdmiOutputEvent";
        return ZacOutputsEventMapper;
    }());
    exports.ZacOutputsEventMapper = ZacOutputsEventMapper;
    var Outputs = (function () {
        function Outputs() {
        }
        Outputs_1 = Outputs;
        Outputs.getTargetZacVideoFormat = function () {
            return public_2.ServiceClientZac.isDisplayConnected()
                .then(function (isDisplayConnected) {
                if (!isDisplayConnected)
                    return undefined;
                return public_2.ServiceClientZac.getCustomScreenFormat()
                    .then(function (screenFormatInfo) {
                    if (screenFormatInfo.currentCustomFormat && screenFormatInfo.currentCustomFormat.length > 0) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Screenformat has been set -> default/current value must remain.", Outputs_1.TAG)); });
                        return bluebird.resolve(undefined);
                    }
                    return Outputs_1.getMaxSupportedVideoFormat()
                        .then(function (maxSupportedFormat) { return Outputs_1.getCurrentVideoFormat()
                        .then(function (currentVideoFormat) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("DefaultScreenformat: " + (currentVideoFormat ? zacVideoFormat_1.VideoFormat[currentVideoFormat] : "disconnected") + ", TargetScreenFormat: " + zacVideoFormat_1.VideoFormat[maxSupportedFormat], Outputs_1.TAG)); });
                        return currentVideoFormat === maxSupportedFormat ? undefined : maxSupportedFormat;
                    }); });
                });
            });
        };
        Outputs.setVideoFormatAutoMode = function (mode) {
            if (mode === void 0) { mode = public_2.ServiceClientContextZac.instance.zacAPI.Outputs.VIDEO_FORMAT_AUTO_MODE_OFF; }
            var outputs = public_2.ServiceClientContextZac.instance.zacAPI.Outputs;
            return public_2.ServiceClientZac.setPropertyValue(outputs.KEY_OUTPUT_VIDEO_FORMAT_AUTO_MODE, mode, outputs.OUTPUT_TYPE_HDMI);
        };
        Outputs.getMaxSupportedVideoFormat = function () {
            return Outputs_1.getSupportedVideoFormats()
                .then(function (supportedVideoFormats) {
                if (supportedVideoFormats.indexOf(zacVideoFormat_1.VideoFormat.VideoFormat_2160p) >= 0)
                    return zacVideoFormat_1.VideoFormat.VideoFormat_2160p;
                if (supportedVideoFormats.indexOf(zacVideoFormat_1.VideoFormat.VideoFormat_1080p) >= 0)
                    return zacVideoFormat_1.VideoFormat.VideoFormat_1080p;
                if (supportedVideoFormats.indexOf(zacVideoFormat_1.VideoFormat.VideoFormat_1080i) >= 0)
                    return zacVideoFormat_1.VideoFormat.VideoFormat_1080i;
                if (supportedVideoFormats.indexOf(zacVideoFormat_1.VideoFormat.VideoFormat_720p) >= 0)
                    return zacVideoFormat_1.VideoFormat.VideoFormat_720p;
                throw new public_2.OutputsError("Could not find any supported Video format.");
            });
        };
        Outputs.setBackupVideoFormat = function () {
            var defaultVideoFormat = zacVideoFormat_1.VideoFormat.VideoFormat_720p;
            return public_2.ServiceClientZac.setDefaultVideoFormat(defaultVideoFormat, false).then(function () { return defaultVideoFormat; });
        };
        Outputs.getSupportedVideoFormats = function () {
            return public_2.ServiceClientZac.getSupportedZacVideoFormats()
                .then(function (zacVideoFormatDictionary) {
                var uiSupportedVideoFormats = [];
                public_1.Logger.debug(function (log) {
                    log(public_1.LogMsg("Supported video formats:", Outputs_1.TAG));
                    log(public_1.LogMsg("------------------------------------------", Outputs_1.TAG));
                });
                var _loop_1 = function (zacVideoFormatString) {
                    var zacVideoFormat = zacVideoFormatDictionary[zacVideoFormatString];
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("" + zacVideoFormat.getLogMessage(), Outputs_1.TAG)); });
                    if (zacVideoFormat.uiVideoFormat != zacVideoFormat_1.VideoFormat.NotSupportedByUi && uiSupportedVideoFormats.indexOf(zacVideoFormat.uiVideoFormat) < 0) {
                        uiSupportedVideoFormats.push(zacVideoFormat.uiVideoFormat);
                    }
                };
                for (var zacVideoFormatString in zacVideoFormatDictionary) {
                    _loop_1(zacVideoFormatString);
                }
                return uiSupportedVideoFormats;
            });
        };
        Outputs.getCurrentVideoFormat = function () {
            return Outputs_1.getCurrentZacVideoFormat()
                .then(function (currentZacVideoFormatString) { return public_2.ServiceClientZac.getZacVideoFormatFromString(currentZacVideoFormatString); })
                .then(function (zacVideoFormat) { return zacVideoFormat ? zacVideoFormat.uiVideoFormat : undefined; });
        };
        Outputs.getCurrentZacVideoFormat = function () {
            return public_2.ServiceClientZac.getPropertyValue(public_2.ServiceClientContextZac.instance.zacAPI.Outputs.KEY_OUTPUT_CURRENT_VIDEO_FORMAT);
        };
        Outputs.getNativeZacVideoFormat = function () {
            return public_2.ServiceClientZac.getPropertyValue(public_2.ServiceClientContextZac.instance.zacAPI.Outputs.KEY_OUTPUT_NATIVE_VIDEO_FORMAT);
        };
        Outputs.getDefaultVideoFormat = function () {
            return public_2.ServiceClientZac.getDefaultZacVideoFormat()
                .then(function (currentZacVideoFormatString) { return public_2.ServiceClientZac.getZacVideoFormatFromString(currentZacVideoFormatString); })
                .then(function (zacVideoFormat) { return zacVideoFormat ? zacVideoFormat.uiVideoFormat : undefined; });
        };
        Outputs.getSupportedHdcpVersions = function () {
            return public_2.ServiceClientZac.getPropertyValue(public_2.ServiceClientContextZac.instance.zacAPI.Outputs.KEY_OUTPUT_SUPPORTED_HDCP_VERSIONS)
                .then(function (versionListValue) { return versionListValue && versionListValue != "NA" ? versionListValue.split(",") : null; });
        };
        Outputs.getTvModel = function () {
            return public_2.ServiceClientZac.getPropertyValue(public_2.ServiceClientContextZac.instance.zacAPI.Outputs.KEY_OUTPUT_TV_MODEL);
        };
        Outputs.getTvManufacturerDate = function () {
            return public_2.ServiceClientZac.getPropertyValue(public_2.ServiceClientContextZac.instance.zacAPI.Outputs.KEY_OUTPUT_TV_MANUFACTURING_DATE);
        };
        Outputs.getHdcpStatus = function () {
            return public_2.ServiceClientZac.getPropertyValue(public_2.ServiceClientContextZac.instance.zacAPI.Outputs.KEY_OUTPUT_HDCP_STATUS);
        };
        Outputs.getSupportedHdrFormats = function () {
            return public_2.ServiceClientZac.getPropertyValue(public_2.ServiceClientContextZac.instance.zacAPI.Outputs.KEY_OUTPUT_SUPPORTED_HDR_FORMATS);
        };
        Outputs.getDisplayInformation = function () {
            var displayProperties = { SupportsUhd: false };
            return Outputs_1.getSupportedHdcpVersions()
                .then(function (supportedHdcpVersions) {
                if (supportedHdcpVersions) {
                    var supportedHdcpVersionsNumeric = supportedHdcpVersions.map(function (hdcpString) { return Number(hdcpString); }).sort(function (a, b) { return a > b ? -1 : (a < b ? 1 : 0); });
                    displayProperties.HdcpVersion = supportedHdcpVersionsNumeric[0];
                }
                else {
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("SupportedHdcpVersions not provided.", Outputs_1.TAG)); });
                }
                return Outputs_1.getTvModel();
            })
                .catch(function (error) { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("SupportedHdcpVersions not provided: " + JSON.stringify(error), Outputs_1.TAG)); }); })
                .then(function (tvModel) {
                if (tvModel) {
                    displayProperties.TvModel = tvModel;
                }
                else {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("TvModel not provided.", Outputs_1.TAG)); });
                }
                return applicationclient_1.ApplicationClient.outputs.getTvManufacturerDate();
            })
                .catch(function (error) { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("TvModel not provided: " + JSON.stringify(error), Outputs_1.TAG)); }); })
                .then(function (tvManufacturerDate) {
                if (tvManufacturerDate) {
                    displayProperties.TvManufacturerDate = tvManufacturerDate;
                }
                else {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("TvManufacturerDate not provided.", Outputs_1.TAG)); });
                }
                return applicationclient_1.ApplicationClient.outputs.getHdcpStatus();
            })
                .catch(function (error) { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("TvManufacturerDate not provided: " + JSON.stringify(error), Outputs_1.TAG)); }); })
                .then(function (hdcpStatus) {
                if (hdcpStatus) {
                    displayProperties.HdcpEngaged = hdcpStatus == public_2.ServiceClientContextZac.instance.zacAPI.Outputs.HDCP_ENGAGED;
                }
                else {
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("HdcpStatus not provided.", Outputs_1.TAG)); });
                }
                return applicationclient_1.ApplicationClient.outputs.getSupportedVideoFormats();
            })
                .catch(function (error) { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("HdcpStatus not provided: " + JSON.stringify(error), Outputs_1.TAG)); }); })
                .then(function (supportedVideoFormats) {
                displayProperties.SupportsUhd = supportedVideoFormats ? supportedVideoFormats.indexOf(zacVideoFormat_1.VideoFormat.VideoFormat_2160p) >= 0 : false;
                return Outputs_1.getSupportedHdrFormats();
            })
                .catch(function (error) { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("supportedVideoFormats not provided: " + JSON.stringify(error), Outputs_1.TAG)); }); })
                .then(function (supportedHdrFormats) {
                if (supportedHdrFormats) {
                    displayProperties.SupportedHdrFormats = supportedHdrFormats;
                }
                else {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("SupportedHdrFormats not provided.", Outputs_1.TAG)); });
                }
                return public_2.ServiceClientZac.getNativeVideoFormat();
            })
                .catch(function (error) { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("supportedHdrFormats not provided: " + JSON.stringify(error), Outputs_1.TAG)); }); })
                .then(function (nativeVideoFromat) {
                if (nativeVideoFromat) {
                    displayProperties.NativeVideoFormat = nativeVideoFromat;
                }
                else {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("NativeVideoFormat not provided.", Outputs_1.TAG)); });
                }
                return public_2.ServiceClientZac.getDefaultZacVideoFormat();
            })
                .catch(function (error) { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("nativeVideoFromat not provided: " + JSON.stringify(error), Outputs_1.TAG)); }); })
                .then(function (defaultVideoFormat) {
                if (defaultVideoFormat) {
                    displayProperties.DefaultVideoFormat = defaultVideoFormat;
                }
                else {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("DefaultVideoFormat not provided.", Outputs_1.TAG)); });
                }
                return Outputs_1.getCurrentZacVideoFormat();
            })
                .catch(function (error) { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("defaultVideoFormat not provided: " + JSON.stringify(error), Outputs_1.TAG)); }); })
                .then(function (currentVideoFormat) {
                if (currentVideoFormat) {
                    displayProperties.CurrentVideoFormat = currentVideoFormat;
                }
                else {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("CurrentVideoFormat not provided.", Outputs_1.TAG)); });
                }
            })
                .catch(function (error) { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("currentVideoFormat not provided: " + JSON.stringify(error), Outputs_1.TAG)); }); })
                .then(function () {
                public_1.Logger.debug(function (log) {
                    log(public_1.LogMsg("TvModel: " + displayProperties.TvModel, Outputs_1.TAG));
                    log(public_1.LogMsg("TvManufacturerDate: " + displayProperties.TvManufacturerDate, Outputs_1.TAG));
                    log(public_1.LogMsg("SupportsUhd: " + displayProperties.SupportsUhd, Outputs_1.TAG));
                    log(public_1.LogMsg("SupportedHdrFormats: " + displayProperties.SupportedHdrFormats, Outputs_1.TAG));
                    log(public_1.LogMsg("NativeVideoFormat: " + displayProperties.NativeVideoFormat, Outputs_1.TAG));
                    log(public_1.LogMsg("CurrentVideoFormat: " + displayProperties.CurrentVideoFormat, Outputs_1.TAG));
                    log(public_1.LogMsg("DefaultVideoFormat: " + displayProperties.DefaultVideoFormat, Outputs_1.TAG));
                    log(public_1.LogMsg("HdcpVersion: " + displayProperties.HdcpVersion, Outputs_1.TAG));
                    log(public_1.LogMsg("HdcpEngaged: " + displayProperties.HdcpEngaged, Outputs_1.TAG));
                });
                return displayProperties;
            });
        };
        var Outputs_1;
        Outputs.classID = 0x791;
        __decorate([
            public_1.log2(function () { return ({ name: Outputs_1.TAG }); })
        ], Outputs, "getTargetZacVideoFormat", null);
        __decorate([
            public_1.log2(function () { return ({ name: Outputs_1.TAG }); })
        ], Outputs, "setVideoFormatAutoMode", null);
        __decorate([
            public_1.log2(function () { return ({ name: Outputs_1.TAG }); })
        ], Outputs, "getMaxSupportedVideoFormat", null);
        __decorate([
            public_1.log2(function () { return ({ name: Outputs_1.TAG }); })
        ], Outputs, "setBackupVideoFormat", null);
        __decorate([
            public_1.log2(function () { return ({ name: Outputs_1.TAG }); })
        ], Outputs, "getSupportedVideoFormats", null);
        __decorate([
            public_1.log2(function () { return ({ name: Outputs_1.TAG }); })
        ], Outputs, "getCurrentVideoFormat", null);
        __decorate([
            public_1.log2(function () { return ({ name: Outputs_1.TAG }); })
        ], Outputs, "getCurrentZacVideoFormat", null);
        __decorate([
            public_1.log2(function () { return ({ name: Outputs_1.TAG }); })
        ], Outputs, "getNativeZacVideoFormat", null);
        __decorate([
            public_1.log2(function () { return ({ name: Outputs_1.TAG }); })
        ], Outputs, "getDefaultVideoFormat", null);
        __decorate([
            public_1.log2(function () { return ({ name: Outputs_1.TAG }); })
        ], Outputs, "getDisplayInformation", null);
        Outputs = Outputs_1 = __decorate([
            public_1.logTag()
        ], Outputs);
        return Outputs;
    }());
    exports.Outputs = Outputs;
});
//# sourceMappingURL=applicationclient.outputs.js.map