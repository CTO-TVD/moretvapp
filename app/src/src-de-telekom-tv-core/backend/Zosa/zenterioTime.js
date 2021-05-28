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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZenterioTimeFrame = exports.TimeFrame = exports.ZenterioTime = void 0;
    var ZenterioTimeError = (function (_super) {
        __extends(ZenterioTimeError, _super);
        function ZenterioTimeError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x778;
            return _this;
        }
        return ZenterioTimeError;
    }(public_1.BaseError));
    var ZenterioTime = (function () {
        function ZenterioTime(rawTimeStringHHMMSS) {
            var regex = /^(([0-1][0-9])|(2[0-3]))([0-5][0-9])([0-5][0-9])$/g;
            if (!regex.test(rawTimeStringHHMMSS)) {
                throw new ZenterioTimeError("Unable to parse time expected in format HHMMSS " + rawTimeStringHHMMSS);
            }
            this.hours = parseInt(rawTimeStringHHMMSS.substr(0, 2), 10);
            this.minutes = parseInt(rawTimeStringHHMMSS.substr(2, 2), 10);
            this.seconds = parseInt(rawTimeStringHHMMSS.substr(4, 2), 10);
        }
        ZenterioTime.prototype.getHours = function () {
            return this.hours;
        };
        ZenterioTime.prototype.getMinutes = function () {
            return this.minutes;
        };
        ZenterioTime.prototype.getSeconds = function () {
            return this.seconds;
        };
        ZenterioTime.prototype.getFormatedTimeString = function () {
            var minutes = this.minutes.toString().length == 1 ? "0" + this.minutes.toString() : this.minutes.toString();
            return this.hours + ":" + minutes;
        };
        ZenterioTime.prototype.getDate = function () {
            var date = new Date();
            date.setHours(this.hours);
            date.setMinutes(this.minutes);
            date.setSeconds(this.seconds);
            date.setMilliseconds(0);
            return date;
        };
        return ZenterioTime;
    }());
    exports.ZenterioTime = ZenterioTime;
    var TimeFrame = (function () {
        function TimeFrame(startTimeString, endTimeString) {
            this.startTime = new ZenterioTime(startTimeString);
            this.endTime = new ZenterioTime(endTimeString);
            this.startTimeDate = this.startTime.getDate();
            this.endTimeDate = this.endTime.getDate();
            if (this.endTimeDate < this.startTimeDate) {
                this.endTimeDate.setDate(this.endTimeDate.getDate() + 1);
            }
        }
        TimeFrame_1 = TimeFrame;
        TimeFrame.prototype.matchesCurrentTime = function () {
            var _this = this;
            var dateNow = new Date();
            var dateMatches = dateNow >= this.startTimeDate && dateNow < this.endTimeDate;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Current date " + dateNow.toLocaleTimeString() + " is between " + _this.startTime.getFormatedTimeString() + " and " + _this.endTime.getFormatedTimeString() + ": " + dateMatches, TimeFrame_1.TAG)); });
            return dateMatches;
        };
        var TimeFrame_1;
        TimeFrame = TimeFrame_1 = __decorate([
            public_1.logTag()
        ], TimeFrame);
        return TimeFrame;
    }());
    exports.TimeFrame = TimeFrame;
    var ZenterioTimeFrame = (function () {
        function ZenterioTimeFrame() {
        }
        ZenterioTimeFrame.isValid = function (timeFrameString) {
            if (timeFrameString && timeFrameString.length > 0) {
                var timeValues = timeFrameString.split("-");
                return timeValues.length == 2;
            }
            return false;
        };
        ZenterioTimeFrame.parse = function (timeFrameString) {
            if (!ZenterioTimeFrame.isValid(timeFrameString)) {
                throw new Error("Could not parse timeFrame because of invalid value '" + timeFrameString + "'");
            }
            var timeValues = timeFrameString.split("-");
            return new TimeFrame(timeValues[0], timeValues[1]);
        };
        return ZenterioTimeFrame;
    }());
    exports.ZenterioTimeFrame = ZenterioTimeFrame;
});
//# sourceMappingURL=zenterioTime.js.map