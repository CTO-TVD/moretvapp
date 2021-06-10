var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "../backend/public", "src/src-de-telekom/public", "./applicationclient", "./applicationclient.bandwidthmanagement"], function (require, exports, bluebird, public_1, public_2, applicationclient_1, applicationclient_bandwidthmanagement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Report = void 0;
    var ReportError = (function (_super) {
        __extends(ReportError, _super);
        function ReportError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x615;
            return _this;
        }
        return ReportError;
    }(public_2.BaseError));
    var PlatformApiError = (function (_super) {
        __extends(PlatformApiError, _super);
        function PlatformApiError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x781;
            return _this;
        }
        return PlatformApiError;
    }(public_2.BaseError));
    var CdrDataset = (function () {
        function CdrDataset(sqmReport) {
            this.reportData = sqmReport.data;
            this.containsData = this.reportData.Tuner != null && this.reportData.LiveTV != null;
            this.isCurrentCdr = this.reportData.StartTime == 0;
            this.validate();
        }
        CdrDataset.prototype.validate = function () {
            if (this.reportData.LiveTV == null) {
                this.reportData.LiveTV = {
                    Receiver: {
                        SecondsWithoutErrors: 0,
                        MediaStartError: 0,
                        MediaInterruptError: 0,
                        MediaChangeDelayHistogram: "0,0,0,0,0,0",
                        SecondsWithNoDataHistogram: "0,0,0,0,0,0",
                        SecondsWithErrorsHistogram: "0,0,0,0,0,0",
                        SD: {
                            SecondsWithoutErrors: 0,
                            MediaStartError: "",
                            MediaInterruptError: 0,
                            MediaChangeDelayHistogram: "",
                            SecondsWithNoDataHistogram: "0,0,0,0,0,0",
                            SecondsWithErrorsHistogram: "0,0,0,0,0,0"
                        },
                        HD: {
                            SecondsWithoutErrors: 0,
                            MediaStartError: "",
                            MediaInterruptError: 0,
                            MediaChangeDelayHistogram: "",
                            SecondsWithNoDataHistogram: "0,0,0,0,0,0",
                            SecondsWithErrorsHistogram: "0,0,0,0,0,0"
                        },
                        UHD: {
                            SecondsWithoutErrors: 0,
                            MediaStartError: "",
                            MediaInterruptError: 0,
                            MediaChangeDelayHistogram: "",
                            SecondsWithNoDataHistogram: "0,0,0,0,0,0",
                            SecondsWithErrorsHistogram: "0,0,0,0,0,0"
                        },
                        Decoder: {
                            DecodedAudioFrames: 0,
                            DecodingAudioErrors: 0,
                            DecodedVideoFrames: 0,
                            LostVideoFrames: 0
                        }
                    }
                };
            }
            if (this.reportData.Tuner == null) {
                this.reportData.Tuner = {
                    Ethernet: {
                        LinkSpeed: "",
                        RtpUnicast: {
                            PacketsReceived: 0,
                            PacketsExpected: 0,
                            PacketsLost: 0,
                            PacketsErrored: 0,
                            PacketsOutage: 0,
                            HoleSizeInPacketsHistogram: "0,0,0,0,0,0",
                            SecondsReceived: 0,
                            SecondsExpected: 0,
                            SecondsLoss: 0,
                            SecondsErrored: 0,
                            SecondsOutage: 0,
                            HoleSizeInSecondsHistogram: "0,0,0,0,0,0",
                            HolesLoss: 0,
                            HolesErrored: 0,
                            HolesOutage: 0,
                            LastUsedFccServer: "0.0.0.0",
                            LastUsedRetryServer: "0.0.0.0"
                        },
                        RtpMulticast: {
                            PacketsReceived: 0,
                            PacketsExpected: 0,
                            PacketsLost: 0,
                            PacketsErrored: 0,
                            PacketsOutage: 0,
                            HoleSizeInPacketsHistogram: "0,0,0,0,0,1",
                            SecondsReceived: 0,
                            SecondsExpected: 0,
                            SecondsLoss: 0,
                            SecondsErrored: 0,
                            SecondsOutage: 0,
                            HoleSizeInSecondsHistogram: "0,0,1,0,0,0",
                            HolesLoss: 0,
                            HolesErrored: 0,
                            HolesOutage: 0,
                            MulticastJoinDelayHistogram: "0,0,0,0,0,0",
                            LastUsedFccServer: "0.0.0.0",
                            LastUsedRetryServer: "0.0.0.0"
                        },
                        HAS: {
                            ChunksReceivedHistogram: "",
                            ChunksExpectedHistogram: "",
                            ChunksAbortedHistogram: "",
                            ChunksUnavailableHistogram: "",
                            ProfileDownShifts: 0,
                            ProfileUpShifts: 0,
                            LastUsedChunkSource: ""
                        }
                    }
                };
            }
            return this;
        };
        return CdrDataset;
    }());
    var CdrSnapshot = (function () {
        function CdrSnapshot(getSqmReportsResult) {
            var _this = this;
            this.data = [];
            this.historicCdrs = [];
            if (getSqmReportsResult == null || getSqmReportsResult.length == 0) {
                throw new ReportError("Invalid or empty CDR-Data.");
            }
            getSqmReportsResult.forEach(function (report) { _this.data.push(new CdrDataset(report)); });
            this.currentCdr = this.data.filter(function (cdr) { return cdr.isCurrentCdr; })[0];
            if (this.data.length > 1) {
                this.historicCdrs = this.data
                    .filter(function (cdr) { return !cdr.isCurrentCdr; })
                    .sort(function (cdr1, cdr2) { return (cdr1.reportData.StartTime == cdr2.reportData.StartTime) ? 0 : (cdr1.reportData.StartTime < cdr2.reportData.StartTime) ? 1 : -1; });
            }
            public_2.Logger.debug(function (log) {
                log(public_2.LogMsg("CDR Snapshot [" + getSqmReportsResult.length + " dataset(s)]", Histogram.TAG));
                log(public_2.LogMsg("--------------------------", Histogram.TAG));
                log(public_2.LogMsg("Current CDR: " + _this.currentCdr.reportData.StartTime + ", SecondsErrored: " + (_this.currentCdr.reportData.Tuner ? _this.currentCdr.reportData.Tuner.Ethernet.RtpMulticast.SecondsErrored : "undefined"), Histogram.TAG));
                if (_this.historicCdrs) {
                    _this.historicCdrs.forEach(function (historicCdr) { return log(public_2.LogMsg("Historic CDR: " + historicCdr.reportData.StartTime + ", SecondsErrored: " + (historicCdr.reportData.Tuner ? historicCdr.reportData.Tuner.Ethernet.RtpMulticast.SecondsErrored : "undefined"), Histogram.TAG)); });
                }
            });
        }
        CdrSnapshot = __decorate([
            public_2.logTag()
        ], CdrSnapshot);
        return CdrSnapshot;
    }());
    var Histogram = (function () {
        function Histogram(cdrValues) {
            var _this = this;
            this.values = [0, 0, 0, 0, 0, 0];
            cdrValues.forEach(function (cdrValue) {
                if (cdrValue && cdrValue.length > 0) {
                    try {
                        var cdrValuesNumeric_1 = cdrValue.split(",").map(function (histValue) { return Number(histValue); });
                        _this.values.forEach(function (value, index) {
                            _this.values[index] = value + cdrValuesNumeric_1[index];
                        });
                    }
                    catch (error) {
                        public_2.Logger.error(function (log) { return log(public_2.LogMsg("Error parsing Histogram value " + cdrValue + ": " + error, Histogram_1.TAG)); });
                    }
                }
                else {
                    public_2.Logger.warn(function (log) { return log(public_2.LogMsg("Histogram initialized with empty value", Histogram_1.TAG)); });
                }
            });
        }
        Histogram_1 = Histogram;
        Histogram.prototype.getSum = function (indexFrom, indexTo) {
            var sum = 0;
            for (var index = indexFrom; index <= indexTo; index++) {
                sum += this.values[index];
            }
            return sum;
        };
        Histogram.prototype.getPercentageShare = function (indexFrom, indexTo) {
            var totalSum = this.getSum(0, this.values.length - 1);
            var sum = 0;
            for (var index = indexFrom; index <= indexTo; index++) {
                sum += this.values[index];
            }
            return totalSum > 0 ? sum / totalSum * 100 : 0;
        };
        var Histogram_1;
        __decorate([
            public_2.log2(function () { return ({ name: Histogram_1.TAG }); })
        ], Histogram.prototype, "getSum", null);
        __decorate([
            public_2.log2(function () { return ({ name: Histogram_1.TAG }); })
        ], Histogram.prototype, "getPercentageShare", null);
        Histogram = Histogram_1 = __decorate([
            public_2.logTag()
        ], Histogram);
        return Histogram;
    }());
    var Report = (function () {
        function Report() {
        }
        Report_1 = Report;
        Report.getSqmReports = function () {
            return bluebird.try(function () {
                var sqmReports = [];
                var getReportsResult = public_1.ServiceClientZac.getCustomApiSqmReport(public_1.ServiceClientContextZac.instance).object.Call("GetReports");
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("getSqmReports RAW result: " + JSON.stringify(getReportsResult), Report_1.TAG)); });
                var _loop_1 = function (key) {
                    try {
                        var report_1 = {
                            data: JSON.parse(getReportsResult[key]),
                            index: Number(key)
                        };
                        public_2.Logger.debug(function (log) { return log(public_2.LogMsg("Report index [" + report_1.index + "]: " + getReportsResult[key], Report_1.TAG)); });
                        sqmReports.push(report_1);
                    }
                    catch (error) {
                        public_2.Logger.debug(function (log) { return log(public_2.LogMsg("Unable to parse a SQM report! Error: " + error, Report_1.TAG)); });
                    }
                };
                for (var key in getReportsResult) {
                    _loop_1(key);
                }
                return sqmReports;
            });
        };
        Report.isPlatformReachable = function () {
            return public_1.ServiceClientContextZosa.instance.serviceClientZosa.isPlatformReachable(public_1.ServiceClientContextZosa.instance)
                .then(function (data) { return data.data; })
                .catch(function (error) {
                public_2.Logger.error(function (log) { return log(public_2.LogMsg("Exception isPlatformReachable: " + JSON.stringify(error), Report_1.TAG)); });
                public_2.ErrorManager.catch(new PlatformApiError("Systemtest reported that platform is not reacheable - call isPlatformReacheable()"), Report_1, 0x01);
                return public_1.ServiceClientAuthenticationZosa.getConfigurableUserSettings(undefined, false)
                    .then(function (settings) { return true; })
                    .catch(function (error) {
                    public_2.ErrorManager.catch(error, Report_1, 0x02);
                    return false;
                });
            });
        };
        Report.getReferenceChannels = function (testchannelCmsIds) {
            var testchannelsMinLength = 2;
            return applicationclient_1.ApplicationClient.channelManagement.getChannels({ favoriteList: applicationclient_1.ApplicationClient.channelManagement.COMPLETE_LIST_ID, includeHidden: true })
                .then(function (channelResult) {
                if (channelResult == null || channelResult.length < testchannelsMinLength) {
                    throw new ReportError("getReferenceChannels error: empty or unsufficient channel list.");
                }
                var _loop_2 = function (index) {
                    var channelCmsId = channelResult[index].cmsId;
                    if (public_2.Guard.isDefined(channelCmsId)) {
                        public_2.Logger.debug(function (log) { return log(public_2.LogMsg("testchannelCmsId index " + index + " is empty, add channel CmdId " + index + " from channels result.", Report_1.TAG)); });
                        testchannelCmsIds.push(channelCmsId);
                    }
                };
                for (var index = testchannelCmsIds.length; index < testchannelsMinLength; index++) {
                    _loop_2(index);
                }
                var referenceIptvChannels = testchannelCmsIds.map(function (testchannelCmsId, index) {
                    if (channelResult.some(function (channel) { return channel.cmsId == testchannelCmsId; })) {
                        return channelResult.filter(function (channel) { return channel.cmsId == testchannelCmsId; })[0];
                    }
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("Unable to find testchannelCmsId '" + testchannelCmsId + "' in channel map - take channel " + channelResult[index].title + " instead.", Report_1.TAG)); });
                    return channelResult[index];
                });
                referenceIptvChannels.forEach(function (channel, index) { return Report_1.logChannelStreams("REFERENCE-CHANNEL " + index + ":", channel); });
                return referenceIptvChannels;
            });
        };
        Report.logChannelStreams = function (logPrefix, channel) {
            if (Report_1.logChannel(channel, logPrefix)) {
                if (public_2.Guard.isDefined(channel.streams)) {
                    channel.streams.forEach(function (stream) { return Report_1.logStream(stream, true); });
                }
            }
        };
        Report.logChannelStream = function (logPrefix, channel, stream) {
            if (Report_1.logChannel(channel, logPrefix)) {
                if (stream) {
                    Report_1.logStream(stream, true);
                    if (channel) {
                        var channelStreamIds = channel.streams ? channel.streams.map(function (stream) { return stream.zosaId; }) : [];
                        if (channelStreamIds.indexOf(stream.zosaId) < 0) {
                            public_2.Logger.warn(function (log) { return log(public_2.LogMsg("Stream does not belong to channel.", Report_1.TAG)); });
                        }
                    }
                }
                else {
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("logChannelStream error: Stream is NULL", Report_1.TAG)); });
                }
            }
        };
        Report.logChannel = function (channel, logPrefix) {
            if (!channel) {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("Cannot logChannel - channel is undefined", Report_1.TAG)); });
                return false;
            }
            public_2.Logger.debug(function (log) { return log(public_2.LogMsg(logPrefix + " " + channel.title + " [CmdId: " + channel.cmsId + "]", Report_1.TAG)); });
            return true;
        };
        Report.logStream = function (stream, indent) {
            if (indent === void 0) { indent = false; }
            public_2.Logger.debug(function (log) { return log(public_2.LogMsg("" + (indent ? "    " : "") + stream.title + " [VideoDefinition: " + applicationclient_bandwidthmanagement_1.BandwidthManagement.getQualityInfo(stream.videoDefinition) + "] [TransmissionType: " + (stream.transmissionType ? applicationclient_bandwidthmanagement_1.BandwidthManagement.getTransmissionTypeInfo(stream.transmissionType) : "undefined") + "]", Report_1.TAG)); });
        };
        Report.getCdrCounterData = function (startSnapshot, endSnapshot, channelTuneCount) {
            var _this = this;
            return bluebird.try(function () {
                var cdrSnapshotStart = new CdrSnapshot(startSnapshot);
                var cdrSnapshotEnd = new CdrSnapshot(endSnapshot);
                var numHistoricCdrsForSum = Report_1.HistoricCdrCount;
                var intervalHasChanged = cdrSnapshotEnd.historicCdrs.length != cdrSnapshotStart.historicCdrs.length ||
                    cdrSnapshotEnd.historicCdrs.length > 0 && cdrSnapshotEnd.historicCdrs[0].reportData.StartTime != cdrSnapshotStart.historicCdrs[0].reportData.StartTime;
                var cdrSet = {
                    start: cdrSnapshotStart.currentCdr,
                    intermediate: intervalHasChanged ? cdrSnapshotEnd.historicCdrs[0] : null,
                    end: cdrSnapshotEnd.currentCdr,
                    historic: cdrSnapshotEnd.historicCdrs ? cdrSnapshotEnd.historicCdrs.slice(0, cdrSnapshotEnd.historicCdrs.length >= numHistoricCdrsForSum ? numHistoricCdrsForSum : cdrSnapshotEnd.historicCdrs.length) : null
                };
                var mediaChangeDelayHistogram = _this.getCounterHistogram(cdrSet, function (data) { return data.LiveTV ? data.LiveTV.Receiver.MediaChangeDelayHistogram : undefined; });
                var mediaChangeDelayHistogramHistoric = cdrSet.historic != null && cdrSet.historic.length > 0 ?
                    new Histogram(cdrSet.historic.map(function (historicCdr) { return historicCdr.reportData.LiveTV ? historicCdr.reportData.LiveTV.Receiver.MediaChangeDelayHistogram : undefined; })) : undefined;
                var retData = {
                    ChannelTuneCount: channelTuneCount,
                    Current: {
                        Tuner: {
                            Ethernet: {
                                RtpMulticast: {
                                    SecondsOutage: _this.getCounterIncrementValue(cdrSet, function (data) { return data.Tuner ? data.Tuner.Ethernet.RtpMulticast.SecondsOutage : undefined; }),
                                    SecondsLoss: _this.getCounterIncrementValue(cdrSet, function (data) { return data.Tuner ? data.Tuner.Ethernet.RtpMulticast.SecondsLoss : undefined; }),
                                    SecondsErrored: _this.getCounterIncrementValue(cdrSet, function (data) { return data.Tuner ? data.Tuner.Ethernet.RtpMulticast.SecondsErrored : undefined; }),
                                    FccServer: cdrSet.end.reportData.Tuner ? cdrSet.end.reportData.Tuner.Ethernet.RtpMulticast.LastUsedFccServer : undefined,
                                    RetryServer: cdrSet.end.reportData.Tuner ? cdrSet.end.reportData.Tuner.Ethernet.RtpMulticast.LastUsedRetryServer : undefined
                                },
                                RtpUnicast: {
                                    SecondsOutage: _this.getCounterIncrementValue(cdrSet, function (data) { return data.Tuner ? data.Tuner.Ethernet.RtpUnicast.SecondsOutage : undefined; }),
                                    SecondsLoss: _this.getCounterIncrementValue(cdrSet, function (data) { return data.Tuner ? data.Tuner.Ethernet.RtpUnicast.SecondsLoss : undefined; }),
                                    SecondsErrored: _this.getCounterIncrementValue(cdrSet, function (data) { return data.Tuner ? data.Tuner.Ethernet.RtpUnicast.SecondsErrored : undefined; }),
                                    FccServer: cdrSet.end.reportData.Tuner ? cdrSet.end.reportData.Tuner.Ethernet.RtpUnicast.LastUsedFccServer : undefined,
                                    RetryServer: cdrSet.end.reportData.Tuner ? cdrSet.end.reportData.Tuner.Ethernet.RtpUnicast.LastUsedRetryServer : undefined
                                }
                            }
                        },
                        LiveTv: {
                            Receiver: {
                                SlowMediaChangeDelayPercentage: mediaChangeDelayHistogram.getPercentageShare(2, 5)
                            }
                        }
                    },
                    Historic: cdrSet.historic == null || cdrSet.historic.length == 0 ? null : {
                        Tuner: {
                            Ethernet: {
                                RtpMulticast: {
                                    SecondsOutage: _this.getCounterSumValue(cdrSet, function (data) { return data.Tuner ? data.Tuner.Ethernet.RtpMulticast.SecondsOutage : undefined; }),
                                    SecondsLoss: _this.getCounterSumValue(cdrSet, function (data) { return data.Tuner ? data.Tuner.Ethernet.RtpMulticast.SecondsLoss : undefined; }),
                                    SecondsErrored: _this.getCounterSumValue(cdrSet, function (data) { return data.Tuner ? data.Tuner.Ethernet.RtpMulticast.SecondsErrored : undefined; }),
                                    FccServer: cdrSet.historic[0].reportData.Tuner ? cdrSet.historic[0].reportData.Tuner.Ethernet.RtpMulticast.LastUsedFccServer : undefined,
                                    RetryServer: cdrSet.historic[0].reportData.Tuner ? cdrSet.historic[0].reportData.Tuner.Ethernet.RtpMulticast.LastUsedRetryServer : undefined
                                },
                                RtpUnicast: {
                                    SecondsOutage: _this.getCounterSumValue(cdrSet, function (data) { return data.Tuner ? data.Tuner.Ethernet.RtpUnicast.SecondsOutage : undefined; }),
                                    SecondsLoss: _this.getCounterSumValue(cdrSet, function (data) { return data.Tuner ? data.Tuner.Ethernet.RtpUnicast.SecondsLoss : undefined; }),
                                    SecondsErrored: _this.getCounterSumValue(cdrSet, function (data) { return data.Tuner ? data.Tuner.Ethernet.RtpUnicast.SecondsErrored : undefined; }),
                                    FccServer: cdrSet.historic[0].reportData.Tuner ? cdrSet.historic[0].reportData.Tuner.Ethernet.RtpUnicast.LastUsedFccServer : undefined,
                                    RetryServer: cdrSet.historic[0].reportData.Tuner ? cdrSet.historic[0].reportData.Tuner.Ethernet.RtpUnicast.LastUsedRetryServer : undefined
                                }
                            }
                        },
                        LiveTv: {
                            Receiver: {
                                SlowMediaChangeDelayPercentage: mediaChangeDelayHistogramHistoric ? mediaChangeDelayHistogramHistoric.getPercentageShare(2, 5) : 0
                            }
                        }
                    }
                };
                public_2.Logger.debug(function (log) {
                    log(public_2.LogMsg("CDR Set:", Report_1.TAG));
                    log(public_2.LogMsg("-----------------", Report_1.TAG));
                    log(public_2.LogMsg("SecondsErrored Start: " + (cdrSet.start.reportData.Tuner ? cdrSet.start.reportData.Tuner.Ethernet.RtpMulticast.SecondsErrored : "undefined"), Report_1.TAG));
                    log(public_2.LogMsg("" + (cdrSet.intermediate ? "SecondsErrored Intermediate: " + (cdrSet.intermediate.reportData.Tuner ? cdrSet.intermediate.reportData.Tuner.Ethernet.RtpMulticast.SecondsErrored : "undefined") : ""), Report_1.TAG));
                    log(public_2.LogMsg("SecondsErrored End: " + (cdrSet.end.reportData.Tuner ? cdrSet.end.reportData.Tuner.Ethernet.RtpMulticast.SecondsErrored : undefined), Report_1.TAG));
                    log(public_2.LogMsg("Historic Cdr's count: " + (!cdrSet.historic ? "0" : cdrSet.historic.length), Report_1.TAG));
                    log(public_2.LogMsg("Return data: " + JSON.stringify(retData), Report_1.TAG));
                });
                return retData;
            });
        };
        Report.getCounterIncrementValue = function (cdrSet, getValueFunc) {
            var endValue = getValueFunc(cdrSet.end.reportData);
            var startValue = getValueFunc(cdrSet.start.reportData);
            if (cdrSet.intermediate != null) {
                var intermediateValue = getValueFunc(cdrSet.intermediate.reportData);
                return public_2.Guard.isDefined(endValue) && public_2.Guard.isDefined(intermediateValue) && public_2.Guard.isDefined(startValue) ? endValue + intermediateValue - startValue : 0;
            }
            return public_2.Guard.isDefined(endValue) && public_2.Guard.isDefined(startValue) ? endValue - startValue : 0;
        };
        Report.getCounterSumValue = function (cdrSet, getValueFunc) {
            if (!cdrSet.historic)
                return 0;
            var result = 0;
            cdrSet.historic.forEach(function (historicCdr) {
                var value = getValueFunc(historicCdr.reportData);
                result += public_2.Guard.isNumber(value) ? value : 0;
            });
            if (cdrSet.intermediate != null) {
                result = result - this.getCounterIncrementValue(cdrSet, getValueFunc);
            }
            return result;
        };
        Report.getCounterHistogram = function (cdrSet, getValueFunc) {
            var endValue = getValueFunc(cdrSet.end.reportData);
            if (cdrSet.intermediate != null) {
                var intermediateValue = getValueFunc(cdrSet.intermediate.reportData);
                return public_2.Guard.isDefined(endValue) && public_2.Guard.isDefined(intermediateValue) ? new Histogram([endValue, intermediateValue]) : new Histogram([]);
            }
            return public_2.Guard.isDefined(endValue) ? new Histogram([endValue]) : new Histogram([]);
        };
        var Report_1;
        Report.classID = 0x782;
        Report.HistoricCdrCount = 2;
        Report.CdrTimespanMinutes = 15;
        Report = Report_1 = __decorate([
            public_2.logTag()
        ], Report);
        return Report;
    }());
    exports.Report = Report;
});
//# sourceMappingURL=applicationclient.report.js.map