define(["require", "exports", "./zacsqmreport", "./zacsqmreportsdata"], function (require, exports, zacsqmreport_1, zacsqmreportsdata_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacSqmReports = void 0;
    var DataMode;
    (function (DataMode) {
        DataMode[DataMode["Dynamic"] = 0] = "Dynamic";
        DataMode[DataMode["Static"] = 1] = "Static";
    })(DataMode || (DataMode = {}));
    var ZacSqmReports = (function () {
        function ZacSqmReports() {
            this.dataMode = DataMode.Static;
            this.requestIndex = 0;
            this.numHistoricCdrs = 9;
            this.currentReportParams = {
                liveTvMulticast: {
                    fccServer: "87.141.217.165",
                    retryServer: "87.141.217.165",
                    secondsLossMaxValue: 0,
                    secondsErroredMaxValue: 0,
                    outageSecondsMaxValue: 0,
                    multicastJoinDelayHistogram: "4,0,0,0,0,0"
                },
                liveTvUnicast: {
                    fccServer: "87.141.217.165",
                    retryServer: "87.141.217.165",
                    secondsLossMaxValue: 0,
                    secondsErroredMaxValue: 0,
                    outageSecondsMaxValue: 0
                },
                receiver: {
                    mediaChangeDelayHistogram: "5,4,0,0,0,1"
                }
            };
            this.historicReportParams = {
                liveTvMulticast: {
                    fccServer: "87.141.217.165",
                    retryServer: "87.141.217.165",
                    secondsLossMaxValue: 0,
                    secondsErroredMaxValue: 0,
                    outageSecondsMaxValue: 0,
                    multicastJoinDelayHistogram: "4,0,0,0,0,0"
                },
                liveTvUnicast: {
                    fccServer: "87.141.217.165",
                    retryServer: "87.141.217.165",
                    secondsLossMaxValue: 0,
                    secondsErroredMaxValue: 0,
                    outageSecondsMaxValue: 0
                },
                receiver: {
                    mediaChangeDelayHistogram: "3,0,0,0,0,0"
                }
            };
        }
        ZacSqmReports.prototype.Call = function (name) {
            var reports = {};
            if (name === "GetReports") {
                if (this.dataMode == DataMode.Dynamic) {
                    this.refreshReportsData();
                    if (this.reports) {
                        for (var index = 0; index <= this.numHistoricCdrs; index++) {
                            reports[index] = this.reports[index].toString();
                        }
                    }
                    return reports;
                }
                if (this.dataMode == DataMode.Static) {
                    var rawData = this.requestIndex == 0 ? zacsqmreportsdata_1.ZacSqmReportsData.StartCdr : zacsqmreportsdata_1.ZacSqmReportsData.EndCdr;
                    rawData.forEach(function (report, index) { reports[index] = report; });
                    this.requestIndex++;
                }
            }
            return reports;
        };
        ZacSqmReports.prototype.registerEventListener = function (evtName, evtHandlerFunction) {
            return 0;
        };
        ZacSqmReports.prototype.unregisterEventListener = function (evtName, id) {
        };
        ZacSqmReports.prototype.getHighestSequenceNo = function () {
            var highestNo = 0;
            if (this.reports) {
                this.reports.forEach(function (report) {
                    if (report.sequenceNumber > highestNo) {
                        highestNo = report.sequenceNumber;
                    }
                });
            }
            return highestNo;
        };
        ZacSqmReports.prototype.refreshReportsData = function () {
            if (this.reports == null) {
                this.reports = [];
                this.reports.push(new zacsqmreport_1.Report(0, this.currentReportParams));
                for (var historicCdrIndex = 1; historicCdrIndex <= this.numHistoricCdrs; historicCdrIndex++) {
                    this.reports.push(new zacsqmreport_1.Report(historicCdrIndex, this.historicReportParams));
                }
            }
            else {
                var currentReport = this.reports[0];
                currentReport.refreshValues();
                if (currentReport.isFinished()) {
                    this.reports.splice(0, 0, new zacsqmreport_1.Report(0, this.currentReportParams));
                    this.reports.splice(this.reports.length - 1, 1);
                    this.reports[1].sequenceNumber = this.getHighestSequenceNo() + 1;
                }
            }
        };
        return ZacSqmReports;
    }());
    exports.ZacSqmReports = ZacSqmReports;
});
//# sourceMappingURL=zacsqmreports.js.map