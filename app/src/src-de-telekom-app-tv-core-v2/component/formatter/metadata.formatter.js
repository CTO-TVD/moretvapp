define(["require", "exports", "moment", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "./programitem.formatter"], function (require, exports, moment, React, public_1, public_2, public_3, programitem_formatter_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MetaDataFormatter = void 0;
    var MetaDataFormatter = (function () {
        function MetaDataFormatter() {
        }
        MetaDataFormatter.getProgressForRecordingItem = function (recording) {
            if ((recording === null || recording === void 0 ? void 0 : recording.duration) && recording.lastPlaybackPosition) {
                return recording.lastPlaybackPosition / recording.duration;
            }
            return undefined;
        };
        MetaDataFormatter.createMetalineObjectForMtvPackage = function (_a) {
            var _b, _c, _d;
            var packet = _a.packet, _e = _a.context, context = _e === void 0 ? public_1.Filter.context() : _e, videoQuality = _a.videoQuality, _f = _a.hideBadge, hideBadge = _f === void 0 ? false : _f;
            var businessCase = this.createMtvBadgeText(context, packet, hideBadge);
            var meta = {
                $type: "tv+",
                badge: public_3.Guard.isString(businessCase) ? (function () { return React.createElement("span", { className: public_2.Css.fonts2.a_fo_l1_1 },
                    " ",
                    businessCase,
                    " "); }) : businessCase !== undefined ? function () { return businessCase; } : undefined,
                period: (_b = packet.PriceInfo) === null || _b === void 0 ? void 0 : _b.Period,
                price: (_c = packet.PriceInfo) === null || _c === void 0 ? void 0 : _c.Price,
                channelsNumber: packet.ChannelCount && packet.ChannelCount > 0 ? [(_d = packet.ChannelCount) === null || _d === void 0 ? void 0 : _d.toString(), packet.Subtitle].join(" ") : undefined,
                contractDuration: packet.ContractDuration
            };
            return meta;
        };
        MetaDataFormatter.getDateString = function (airtime) {
            if (airtime === undefined) {
                return undefined;
            }
            return moment(airtime).format("DD.MM.YYYY");
        };
        MetaDataFormatter.getTimeString = function (airtime) {
            if (airtime === undefined) {
                return undefined;
            }
            return moment(airtime).format("HH:mm");
        };
        MetaDataFormatter.badgeMtvPackage = function (context, period, price) {
            return React.createElement(React.Fragment, null,
                React.createElement("span", { className: public_2.Css.fonts2.a_fo_l1_1 }, period),
                "\u00A0",
                React.createElement("span", { className: public_2.Css.fonts2.a_fo_l1_2 }, price));
        };
        MetaDataFormatter.createMtvBadgeText = function (context, packet, hideBadge) {
            var _a, _b;
            if (hideBadge === void 0) { hideBadge = false; }
            if (!packet) {
                return undefined;
            }
            var b = this.badgeMtvPackage(context, (_a = packet.PriceInfo) === null || _a === void 0 ? void 0 : _a.Period, (_b = packet.PriceInfo) === null || _b === void 0 ? void 0 : _b.Price);
            if (b) {
                return b;
            }
            return undefined;
        };
        MetaDataFormatter.createMetalineObjectForVasItem = function (_a) {
            var item = _a.item, _b = _a.context, context = _b === void 0 ? public_1.Filter.context() : _b;
            var meta = {
                $type: "app",
                parentalInformation: public_1.Filter.message(context, programitem_formatter_1.ProgramItemFormatter.formatAgeRatingShort(item.parentalRating))
            };
            return meta;
        };
        var _a, _b;
        MetaDataFormatter.defaultMaxThresholdHours = (((_a = public_3.Configuration.instance.vod) === null || _a === void 0 ? void 0 : _a.remainTresholdDays) || 7) * 24;
        MetaDataFormatter.defaultMaxThresholdDays = ((_b = public_3.Configuration.instance.vod) === null || _b === void 0 ? void 0 : _b.soonTresholdDays) || 60;
        return MetaDataFormatter;
    }());
    exports.MetaDataFormatter = MetaDataFormatter;
});
//# sourceMappingURL=metadata.formatter.js.map