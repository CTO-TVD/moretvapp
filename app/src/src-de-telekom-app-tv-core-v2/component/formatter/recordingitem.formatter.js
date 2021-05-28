define(["require", "exports", "moment", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public", "../../translation/public", "src/src-de-telekom/public"], function (require, exports, moment, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RecordingItemFormatter = void 0;
    var RecordingItemFormatter = (function () {
        function RecordingItemFormatter() {
        }
        RecordingItemFormatter.formatParentMetadata = function (component, channelItem, recordingItem) {
            var channelName = channelItem && public_4.Guard.isString(channelItem.title) ? channelItem.title : "";
            return public_1.Filter.message(component, channelName);
        };
        RecordingItemFormatter.formatMetadata = function (component, channelItem, recordingItem, useTime) {
            if (useTime === void 0) { useTime = false; }
            var duration;
            var endTime;
            var date;
            var startTime;
            var translationId;
            var currentTime = moment();
            var useStartTimeEndTime = useTime || recordingItem.dtExtensions.recordingState == public_2.zosaStatic.RECORDING_STATE_ONGOING || recordingItem.dtExtensions.recordingState == public_2.zosaStatic.RECORDING_STATE_SCHEDULED;
            if (!useStartTimeEndTime) {
                duration = recordingItem.duration && Math.ceil((recordingItem.duration) / 1000 / 60);
                date = RecordingItemFormatter.translateToDate(component, currentTime, moment(recordingItem.startTime));
                translationId = public_3.messagesCore.STB_HP_TI004_B;
            }
            else {
                endTime = moment(recordingItem.endTime).format("HH:mm");
                startTime = moment(recordingItem.startTime).format("HH:mm");
                date = RecordingItemFormatter.translateToDate(component, currentTime, moment(recordingItem.startTime));
                if (recordingItem.dtExtensions.recordingState == public_2.zosaStatic.RECORDING_STATE_ONGOING) {
                    date = public_1.Filter.message(component, public_3.messagesCore.STB_BR_TI007_E);
                }
                translationId = public_3.messagesCore.STB_HP_TI004_A;
            }
            return public_1.Filter.message(component, translationId, {
                channel_name: channelItem ? (public_4.Guard.isString(channelItem.title) ? channelItem.title : "") : undefined,
                date_middle: date,
                duration: duration,
                endtime: endTime,
                starttime: startTime
            });
        };
        RecordingItemFormatter.translateToDate = function (component, currentTime, startTime) {
            var TODAY = currentTime.clone().startOf("day");
            var TOMORROW = currentTime.clone().add(1, "days").startOf("day");
            var YESTERDAY = currentTime.clone().subtract(1, "days").startOf("day");
            if (startTime.isSame(TODAY, "day")) {
                return public_1.Filter.message(component, public_1.messagesBase.TODAY);
            }
            if (startTime.isSame(YESTERDAY, "day")) {
                return public_1.Filter.message(component, public_1.messagesBase.YESTERDAY);
            }
            if (startTime.isSame(TOMORROW, "day")) {
                return public_1.Filter.message(component, public_1.messagesBase.TOMORROW);
            }
            return public_1.Filter.message(component, public_1.Filter.getWeekDay(startTime.weekday())) + " " + startTime.format("DD.MM.");
        };
        return RecordingItemFormatter;
    }());
    exports.RecordingItemFormatter = RecordingItemFormatter;
});
//# sourceMappingURL=recordingitem.formatter.js.map