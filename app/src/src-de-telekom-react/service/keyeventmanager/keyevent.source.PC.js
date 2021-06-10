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
    exports.TVKeyEventSourcePC = void 0;
    var TVKeyEventSourcePC = (function (_super) {
        __extends(TVKeyEventSourcePC, _super);
        function TVKeyEventSourcePC() {
            var _this = _super.call(this) || this;
            _this.keyTable = TVKeyEventSourcePC.keyTable;
            return _this;
        }
        TVKeyEventSourcePC.keyTable = {
            0: keycode_config_1.TVKeyCodeConfig.NULL_KEY,
            38: keycode_config_1.TVKeyCodeConfig.UP_KEY,
            37: keycode_config_1.TVKeyCodeConfig.LEFT_KEY,
            39: keycode_config_1.TVKeyCodeConfig.RIGHT_KEY,
            40: keycode_config_1.TVKeyCodeConfig.DOWN_KEY,
            13: keycode_config_1.TVKeyCodeConfig.OK_KEY,
            84: keycode_config_1.TVKeyCodeConfig.GUIDE_KEY,
            24: keycode_config_1.TVKeyCodeConfig.TT_KEY,
            76: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            72: keycode_config_1.TVKeyCodeConfig.MENU_KEY,
            73: keycode_config_1.TVKeyCodeConfig.INFO_KEY,
            27: keycode_config_1.TVKeyCodeConfig.EXIT_KEY,
            79: keycode_config_1.TVKeyCodeConfig.AUDIO_KEY,
            75: keycode_config_1.TVKeyCodeConfig.MUTE_KEY,
            187: keycode_config_1.TVKeyCodeConfig.VOLUME_UP_KEY,
            189: keycode_config_1.TVKeyCodeConfig.VOLUME_DOWN_KEY,
            80: keycode_config_1.TVKeyCodeConfig.PAUSEPLAY_KEY,
            65: keycode_config_1.TVKeyCodeConfig.RED_KEY,
            83: keycode_config_1.TVKeyCodeConfig.GREEN_KEY,
            68: keycode_config_1.TVKeyCodeConfig.YELLOW_KEY,
            70: keycode_config_1.TVKeyCodeConfig.BLUE_KEY,
            74: keycode_config_1.TVKeyCodeConfig.OPTION_KEY,
            66: keycode_config_1.TVKeyCodeConfig.BACK_KEY,
            78: keycode_config_1.TVKeyCodeConfig.FBWD_KEY,
            77: keycode_config_1.TVKeyCodeConfig.FFWD_KEY,
            67: keycode_config_1.TVKeyCodeConfig.SKIP_FBWD_KEY,
            86: keycode_config_1.TVKeyCodeConfig.SKIP_FFWD_KEY,
            32: keycode_config_1.TVKeyCodeConfig.SEARCH_KEY,
            90: keycode_config_1.TVKeyCodeConfig.RECORD_KEY,
            107: keycode_config_1.TVKeyCodeConfig.CHANNEL_UP_KEY,
            109: keycode_config_1.TVKeyCodeConfig.CHANNEL_DOWN_KEY,
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
            81: keycode_config_1.TVKeyCodeConfig.MAGENTA_KEY,
            82: keycode_config_1.TVKeyCodeConfig.VOICE_KEY,
            88: keycode_config_1.TVKeyCodeConfig.CUSTOM1_KEY,
            89: keycode_config_1.TVKeyCodeConfig.CUSTOM2_KEY,
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
        return TVKeyEventSourcePC;
    }(keyevent_source_base_1.TVKeyEventSourceBase));
    exports.TVKeyEventSourcePC = TVKeyEventSourcePC;
});
//# sourceMappingURL=keyevent.source.PC.js.map