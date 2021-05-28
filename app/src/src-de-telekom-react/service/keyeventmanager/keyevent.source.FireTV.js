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
define(["require", "exports", "./keyevent.source.base", "./keycode.config"], function (require, exports, keyevent_source_base_1, keycode_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVKeyEventSourceFireTV = void 0;
    var TVKeyEventSourceFireTV = (function (_super) {
        __extends(TVKeyEventSourceFireTV, _super);
        function TVKeyEventSourceFireTV() {
            var _this = _super.call(this) || this;
            _this.keyTable = TVKeyEventSourceFireTV.keyTable;
            return _this;
        }
        TVKeyEventSourceFireTV.keyTable = {
            0: keycode_config_1.TVKeyCodeConfig.NULL_KEY,
            50: keycode_config_1.TVKeyCodeConfig.UP_KEY,
            52: keycode_config_1.TVKeyCodeConfig.LEFT_KEY,
            54: keycode_config_1.TVKeyCodeConfig.RIGHT_KEY,
            56: keycode_config_1.TVKeyCodeConfig.DOWN_KEY,
            53: keycode_config_1.TVKeyCodeConfig.OK_KEY,
            49: keycode_config_1.TVKeyCodeConfig.GUIDE_KEY,
            24: keycode_config_1.TVKeyCodeConfig.TT_KEY,
            76: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            48: keycode_config_1.TVKeyCodeConfig.MENU_KEY,
            57: keycode_config_1.TVKeyCodeConfig.INFO_KEY,
            27: keycode_config_1.TVKeyCodeConfig.EXIT_KEY,
            79: keycode_config_1.TVKeyCodeConfig.AUDIO_KEY,
            75: keycode_config_1.TVKeyCodeConfig.MUTE_KEY,
            187: keycode_config_1.TVKeyCodeConfig.VOLUME_UP_KEY,
            189: keycode_config_1.TVKeyCodeConfig.VOLUME_DOWN_KEY,
            80: keycode_config_1.TVKeyCodeConfig.PAUSEPLAY_KEY,
            68: keycode_config_1.TVKeyCodeConfig.YELLOW_KEY,
            70: keycode_config_1.TVKeyCodeConfig.BLUE_KEY,
            51: keycode_config_1.TVKeyCodeConfig.OPTION_KEY,
            55: keycode_config_1.TVKeyCodeConfig.BACK_KEY,
            78: keycode_config_1.TVKeyCodeConfig.FBWD_KEY,
            77: keycode_config_1.TVKeyCodeConfig.FFWD_KEY,
            67: keycode_config_1.TVKeyCodeConfig.SKIP_FBWD_KEY,
            86: keycode_config_1.TVKeyCodeConfig.SKIP_FFWD_KEY,
            32: keycode_config_1.TVKeyCodeConfig.SEARCH_KEY,
            89: keycode_config_1.TVKeyCodeConfig.RECORD_KEY,
            107: keycode_config_1.TVKeyCodeConfig.CHANNEL_UP_KEY,
            109: keycode_config_1.TVKeyCodeConfig.CHANNEL_DOWN_KEY,
            46: keycode_config_1.TVKeyCodeConfig.DELETE_KEY,
            88: keycode_config_1.TVKeyCodeConfig.CUSTOM1_KEY,
            192: keycode_config_1.TVKeyCodeConfig.POWER_ON,
            219: keycode_config_1.TVKeyCodeConfig.POWER_OFF,
            106: keycode_config_1.TVKeyCodeConfig.FAVOURITES_KEY,
            999999: keycode_config_1.TVKeyCodeConfig.COMPANION_KEY
        };
        return TVKeyEventSourceFireTV;
    }(keyevent_source_base_1.TVKeyEventSourceBase));
    exports.TVKeyEventSourceFireTV = TVKeyEventSourceFireTV;
});
//# sourceMappingURL=keyevent.source.FireTV.js.map