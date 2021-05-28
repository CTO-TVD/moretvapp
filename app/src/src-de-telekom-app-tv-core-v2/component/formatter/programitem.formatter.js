define(["require", "exports", "moment", "src/src-de-telekom-react/public", "../../translation/public", "src/src-de-telekom/public"], function (require, exports, moment, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProgramItemFormatter = void 0;
    var ProgramItemFormatter = (function () {
        function ProgramItemFormatter() {
        }
        ProgramItemFormatter.formatAgeRating = function (agerating) {
            var result;
            switch (agerating) {
                case 0:
                    result = public_2.messagesCore.STB_AC_TI014;
                    break;
                case 6:
                    result = public_2.messagesCore.STB_AC_TI013;
                    break;
                case 12:
                    result = public_2.messagesCore.STB_AC_TI012;
                    break;
                case 16:
                    result = public_2.messagesCore.STB_AC_TI011;
                    break;
                case 18:
                    result = public_2.messagesCore.STB_AC_TI010;
                    break;
                default:
                    result = (public_3.Guard.isNumber(agerating) && agerating >= 0 && agerating <= 21) ? public_1.Filter.message(public_1.Filter.context(), public_2.messagesCore.STB_AC_TI_AGE, { agerating: agerating }) : public_2.messagesCore.STB_AC_TI009;
                    break;
            }
            return result;
        };
        ProgramItemFormatter.formatAgeRatingShort = function (agerating) {
            var result;
            switch (agerating) {
                case 0:
                    result = public_2.messagesCore.STB_AC_TI014_S;
                    break;
                case 6:
                    result = public_2.messagesCore.STB_AC_TI013_S;
                    break;
                case 12:
                    result = public_2.messagesCore.STB_AC_TI012_S;
                    break;
                case 16:
                    result = public_2.messagesCore.STB_AC_TI011_S;
                    break;
                case 18:
                    result = public_2.messagesCore.STB_AC_TI010_S;
                    break;
                default:
                    result = (public_3.Guard.isNumber(agerating) && agerating >= 0 && agerating <= 21) ? public_1.Filter.message(public_1.Filter.context(), public_2.messagesCore.STB_AC_TI_AGE_SHORT, { agerating: agerating }) : "";
                    break;
            }
            return result;
        };
        ProgramItemFormatter.formatMetadata = function (component, programItem, showSeasonEpisode, showChannelName, showGenre) {
            var _a, _b;
            if (showSeasonEpisode === void 0) { showSeasonEpisode = false; }
            if (showChannelName === void 0) { showChannelName = false; }
            if (showGenre === void 0) { showGenre = true; }
            var genre = showGenre ? ((_b = (_a = programItem === null || programItem === void 0 ? void 0 : programItem.genres) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.title) || undefined : undefined;
            var seasonNo = (programItem === null || programItem === void 0 ? void 0 : programItem.seasonNumber) ? programItem.seasonNumber.toString() : undefined;
            var episodeNo = (programItem === null || programItem === void 0 ? void 0 : programItem.episodeNumber) ? programItem.episodeNumber.toString() : undefined;
            var channelName = (programItem === null || programItem === void 0 ? void 0 : programItem.dtExtensions.channel) && showChannelName && public_3.Guard.isString(programItem.dtExtensions.channel.title) ? programItem.dtExtensions.channel.title : undefined;
            return this.formatMetadata2(component, programItem.startTime, programItem.endTime, programItem.duration, genre, seasonNo, episodeNo, showSeasonEpisode, channelName);
        };
        ProgramItemFormatter.formatMetadata2 = function (component, start, end, programDuration, genre, season, episode, showSeasonEpisode, channelName) {
            if (showSeasonEpisode === void 0) { showSeasonEpisode = false; }
            var duration;
            var endTimeString;
            var restRuntime;
            var date;
            var startTimeString;
            var translationId;
            if (!(start && end)) {
                return "";
            }
            var currentTime = moment().startOf("minute");
            var startTime = moment(start);
            var endTime = moment(end);
            if (currentTime.isBefore(start)) {
                translationId = public_2.messagesCore.STB_BR_TI007_D;
                if (showSeasonEpisode) {
                    translationId = season && episode ? public_2.messagesCore.STB_BR_TI007_A : (episode ? public_2.messagesCore.STB_BR_TI007_B : translationId);
                }
                endTimeString = endTime.format("HH:mm");
                date = ProgramItemFormatter.translateToDate(component, currentTime, startTime, endTime);
                startTimeString = startTime.format("HH:mm");
            }
            else if (currentTime.isAfter(end)) {
                translationId = public_2.messagesCore.STB_BR_TI020;
                if (showSeasonEpisode) {
                    translationId = season && episode ? public_2.messagesCore.STB_BR_TI020_A : (episode ? public_2.messagesCore.STB_BR_TI020_B : translationId);
                }
                duration = Math.ceil((programDuration || 0) / 1000 / 60);
            }
            else {
                translationId = public_2.messagesCore.STB_BR_TI006_D;
                if (showSeasonEpisode) {
                    translationId = season && episode ? public_2.messagesCore.STB_BR_TI006_A : (episode ? public_2.messagesCore.STB_BR_TI006_B : translationId);
                }
                restRuntime = endTime.diff(currentTime, "minute");
            }
            return public_1.Filter.message(component, translationId, {
                date_short: date,
                duration: duration,
                endtime: endTimeString,
                episode_no: episode,
                genre: genre,
                rest_runtime: restRuntime,
                season_no: season,
                channel: channelName,
                starttime: startTimeString
            });
        };
        ProgramItemFormatter.translateToDate = function (component, currentTime, startTime, endTime) {
            var TODAY = currentTime.clone().startOf("day");
            var TOMORROW = currentTime.clone().add(1, "days").startOf("day");
            var YESTERDAY = currentTime.clone().subtract(1, "days").startOf("day");
            if (startTime === null || startTime === void 0 ? void 0 : startTime.isSame(TODAY, "day")) {
                if (startTime.isBefore(currentTime) && currentTime.isBefore(endTime)) {
                    return public_1.Filter.message(component, public_1.messagesBase.NOW);
                }
                return public_1.Filter.message(component, public_1.messagesBase.TODAY);
            }
            if (startTime === null || startTime === void 0 ? void 0 : startTime.isSame(YESTERDAY, "day")) {
                return public_1.Filter.message(component, public_1.messagesBase.YESTERDAY);
            }
            if (startTime === null || startTime === void 0 ? void 0 : startTime.isSame(TOMORROW, "day")) {
                return public_1.Filter.message(component, public_1.messagesBase.TOMORROW);
            }
            return startTime ? public_1.Filter.message(component, public_1.Filter.getWeekDay(startTime.weekday())) + " " + startTime.format("DD.MM.") : "";
        };
        return ProgramItemFormatter;
    }());
    exports.ProgramItemFormatter = ProgramItemFormatter;
});
//# sourceMappingURL=programitem.formatter.js.map