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
define(["require", "exports", "./keyevent.source.base", "./keycode.config"], function (require, exports, keyevent_source_base_1, keycode_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVKeyEventSourceSTB = void 0;
    var TVKeyEventSourceSTB = (function (_super) {
        __extends(TVKeyEventSourceSTB, _super);
        function TVKeyEventSourceSTB() {
            var _this = _super.call(this) || this;
            _this.keyTable = TVKeyEventSourceSTB.keyTable;
            return _this;
        }
        TVKeyEventSourceSTB.keyTable = {
            0: keycode_config_1.TVKeyCodeConfig.NULL_KEY,
            38: keycode_config_1.TVKeyCodeConfig.UP_KEY,
            37: keycode_config_1.TVKeyCodeConfig.LEFT_KEY,
            39: keycode_config_1.TVKeyCodeConfig.RIGHT_KEY,
            40: keycode_config_1.TVKeyCodeConfig.DOWN_KEY,
            13: keycode_config_1.TVKeyCodeConfig.OK_KEY,
            458: keycode_config_1.TVKeyCodeConfig.GUIDE_KEY,
            459: keycode_config_1.TVKeyCodeConfig.TT_KEY,
            409: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            462: keycode_config_1.TVKeyCodeConfig.MENU_KEY,
            457: keycode_config_1.TVKeyCodeConfig.INFO_KEY,
            27: keycode_config_1.TVKeyCodeConfig.EXIT_KEY,
            191: keycode_config_1.TVKeyCodeConfig.AUDIO_KEY,
            449: keycode_config_1.TVKeyCodeConfig.MUTE_KEY,
            447: keycode_config_1.TVKeyCodeConfig.VOLUME_UP_KEY,
            448: keycode_config_1.TVKeyCodeConfig.VOLUME_DOWN_KEY,
            463: keycode_config_1.TVKeyCodeConfig.PAUSEPLAY_KEY,
            403: keycode_config_1.TVKeyCodeConfig.RED_KEY,
            404: keycode_config_1.TVKeyCodeConfig.GREEN_KEY,
            405: keycode_config_1.TVKeyCodeConfig.YELLOW_KEY,
            406: keycode_config_1.TVKeyCodeConfig.BLUE_KEY,
            186: keycode_config_1.TVKeyCodeConfig.OPTION_KEY,
            461: keycode_config_1.TVKeyCodeConfig.BACK_KEY,
            412: keycode_config_1.TVKeyCodeConfig.FBWD_KEY,
            417: keycode_config_1.TVKeyCodeConfig.FFWD_KEY,
            422: keycode_config_1.TVKeyCodeConfig.SKIP_FBWD_KEY,
            423: keycode_config_1.TVKeyCodeConfig.SKIP_FFWD_KEY,
            177: keycode_config_1.TVKeyCodeConfig.SKIP_FBWD_KEY,
            176: keycode_config_1.TVKeyCodeConfig.SKIP_FFWD_KEY,
            170: keycode_config_1.TVKeyCodeConfig.SEARCH_KEY,
            416: keycode_config_1.TVKeyCodeConfig.RECORD_KEY,
            427: keycode_config_1.TVKeyCodeConfig.CHANNEL_UP_KEY,
            428: keycode_config_1.TVKeyCodeConfig.CHANNEL_DOWN_KEY,
            48: keycode_config_1.TVKeyCodeConfig.ZERO_KEY,
            49: keycode_config_1.TVKeyCodeConfig.ONE_KEY,
            50: keycode_config_1.TVKeyCodeConfig.TWO_KEY,
            51: keycode_config_1.TVKeyCodeConfig.THREE_KEY,
            52: keycode_config_1.TVKeyCodeConfig.FOUR_KEY,
            53: keycode_config_1.TVKeyCodeConfig.FIVE_KEY,
            54: keycode_config_1.TVKeyCodeConfig.SIX_KEY,
            55: keycode_config_1.TVKeyCodeConfig.SEVEN_KEY,
            56: keycode_config_1.TVKeyCodeConfig.EIGHT_KEY,
            57: keycode_config_1.TVKeyCodeConfig.NINE_KEY,
            46: keycode_config_1.TVKeyCodeConfig.DELETE_KEY,
            464: keycode_config_1.TVKeyCodeConfig.MAGENTA_KEY,
            57473: keycode_config_1.TVKeyCodeConfig.VOICE_KEY,
            192: keycode_config_1.TVKeyCodeConfig.POWER_ON,
            219: keycode_config_1.TVKeyCodeConfig.POWER_OFF,
            106: keycode_config_1.TVKeyCodeConfig.FAVOURITES_KEY,
            467: keycode_config_1.TVKeyCodeConfig.UNSILENT_KEY,
            466: keycode_config_1.TVKeyCodeConfig.SILENT_KEY,
            415: keycode_config_1.TVKeyCodeConfig.PLAY_KEY,
            19: keycode_config_1.TVKeyCodeConfig.PAUSE_KEY,
            471: keycode_config_1.TVKeyCodeConfig.FBWD_NORMALSPEED_KEY,
            470: keycode_config_1.TVKeyCodeConfig.FFWD_NORMALSPEED_KEY,
            469: keycode_config_1.TVKeyCodeConfig.FBWD_FASTSPEED_KEY,
            468: keycode_config_1.TVKeyCodeConfig.FFWD_FASTSPEED_KEY,
            465: keycode_config_1.TVKeyCodeConfig.MYRECORDING_KEY,
            990000: keycode_config_1.TVKeyCodeConfig.RECORD_ONLY_KEY,
            999989: keycode_config_1.TVKeyCodeConfig.SHORTCUT1_KEY,
            999990: keycode_config_1.TVKeyCodeConfig.SHORTCUT2_KEY,
            999991: keycode_config_1.TVKeyCodeConfig.SHORTCUT3_KEY,
            999992: keycode_config_1.TVKeyCodeConfig.SHORTCUT4_KEY,
            999993: keycode_config_1.TVKeyCodeConfig.SHORTCUT5_KEY,
            999994: keycode_config_1.TVKeyCodeConfig.SHORTCUT6_KEY,
            999995: keycode_config_1.TVKeyCodeConfig.SHORTCUT7_KEY,
            999996: keycode_config_1.TVKeyCodeConfig.SHORTCUT8_KEY,
            999997: keycode_config_1.TVKeyCodeConfig.SHORTCUT9_KEY,
            999999: keycode_config_1.TVKeyCodeConfig.COMPANION_KEY
        };
        return TVKeyEventSourceSTB;
    }(keyevent_source_base_1.TVKeyEventSourceBase));
    exports.TVKeyEventSourceSTB = TVKeyEventSourceSTB;
});
//# sourceMappingURL=keyevent.source.STB.js.map