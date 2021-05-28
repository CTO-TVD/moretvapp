define(["require", "exports", "moment", "./message.filter", "../translation/public"], function (require, exports, moment, message_filter_1, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.filterDate = exports.getWeekDayString = void 0;
    function getWeekDayString(weekday, longFormat) {
        if (longFormat === void 0) { longFormat = false; }
        switch (weekday) {
            case 0:
                return longFormat ? public_1.messagesBase.WEEKDAY_0_Long : public_1.messagesBase.WEEKDAY_0;
            case 1:
                return longFormat ? public_1.messagesBase.WEEKDAY_1_Long : public_1.messagesBase.WEEKDAY_1;
            case 2:
                return longFormat ? public_1.messagesBase.WEEKDAY_2_Long : public_1.messagesBase.WEEKDAY_2;
            case 3:
                return longFormat ? public_1.messagesBase.WEEKDAY_3_Long : public_1.messagesBase.WEEKDAY_3;
            case 4:
                return longFormat ? public_1.messagesBase.WEEKDAY_4_Long : public_1.messagesBase.WEEKDAY_4;
            case 5:
                return longFormat ? public_1.messagesBase.WEEKDAY_5_Long : public_1.messagesBase.WEEKDAY_5;
            case 6:
                return longFormat ? public_1.messagesBase.WEEKDAY_6_Long : public_1.messagesBase.WEEKDAY_6;
        }
    }
    exports.getWeekDayString = getWeekDayString;
    function filterDate(component, args, formatType) {
        if (formatType === void 0) { formatType = "day+date?"; }
        var result = [];
        if (!args)
            return result;
        var startTime;
        if (args instanceof Date || typeof args == "number") {
            startTime = moment(args);
        }
        else {
            startTime = moment(args.start);
        }
        switch (formatType) {
            case "day+date?":
                result = getProgramDate(startTime);
                break;
            case "day+date":
                result = getProgramDate(startTime);
                if (result.length == 1) {
                    result.push(startTime.format("DD.MM."));
                }
                break;
            case "time":
                result.push(startTime.format("HH:mm"));
                break;
            case "timerange":
                break;
            case "airdatetime":
                var now = moment();
                var yesterday = now.clone().subtract(1, "day");
                var tomorrow = now.clone().add(1, "day");
                var tday = void 0;
                var wday = void 0;
                if (now.format("YYYY-MM-DD") === startTime.format("YYYY-MM-DD")) {
                    tday = message_filter_1.filterMessage(component, public_1.messagesBase.TODAY);
                }
                else if (yesterday.format("YYYY-MM-DD") === startTime.format("YYYY-MM-DD")) {
                    tday = message_filter_1.filterMessage(component, public_1.messagesBase.YESTERDAY);
                }
                else if (tomorrow.format("YYYY-MM-DD") === startTime.format("YYYY-MM-DD")) {
                    tday = message_filter_1.filterMessage(component, public_1.messagesBase.TOMORROW);
                }
                else {
                    wday = message_filter_1.filterMessage(component, getWeekDayString(startTime.weekday()));
                }
                var diff = startTime.diff(now, "days");
                if (tday) {
                    var airtime = startTime.format("HH:mm");
                    var message = message_filter_1.filterMessage(component, public_1.messagesBase.STB_VD_TI051c, { time: airtime, dayofweek: tday });
                    if (message)
                        result.push(message);
                }
                else if (-90 < diff && diff < 90) {
                    var airdate = startTime.format("DD.MM.");
                    var airtime = startTime.format("HH:mm");
                    var message = message_filter_1.filterMessage(component, public_1.messagesBase.STB_VD_TI051b, { date: airdate, time: airtime, dayofweek: wday });
                    if (message)
                        result.push(message);
                }
                else {
                    var airdate = startTime.format("DD.MM.YYYY");
                    var message = message_filter_1.filterMessage(component, public_1.messagesBase.STB_VD_TI051, { date: airdate, dayofweek: wday });
                    if (message)
                        result.push(message);
                }
                break;
        }
        return result;
    }
    exports.filterDate = filterDate;
    function getProgramDate(startTime) {
        var now = moment();
        var yesterday = now.clone().subtract(1, "day");
        var tomorrow = now.clone().add(1, "day");
        if (now.format("YYYY-MM-DD") === startTime.format("YYYY-MM-DD")) {
            return [public_1.messagesBase.TODAY];
        }
        if (yesterday.format("YYYY-MM-DD") === startTime.format("YYYY-MM-DD")) {
            return [public_1.messagesBase.YESTERDAY];
        }
        if (tomorrow.format("YYYY-MM-DD") === startTime.format("YYYY-MM-DD")) {
            return [public_1.messagesBase.TOMORROW];
        }
        var day = getWeekDayString(startTime.weekday());
        return [day, startTime.format("DD.MM.")];
    }
});
//# sourceMappingURL=date.filter.js.map