var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacSettings = void 0;
    var ZacSettings = (function () {
        function ZacSettings() {
            this.keyValueStore = {};
            this.KEY_AUDIO_ACCEPT_OTHER = "KEY_AUDIO_ACCEPT_OTHER";
            this.KEY_AUDIO_DELAY_MS = "KEY_AUDIO_DELAY_MS";
            this.KEY_AUDIO_LANGUAGES = "KEY_AUDIO_LANGUAGES";
            this.KEY_AUDIO_MULTICHANNEL = "KEY_AUDIO_MULTICHANNEL";
            this.KEY_AUDIO_TYPE = "KEY_AUDIO_TYPE";
            this.KEY_DMS_FRIENDLY_NAME = "KEY_DMS_FRIENDLY_NAME";
            this.KEY_HDCP_WHEN_OPTIONAL = "KEY_HDCP_WHEN_OPTIONAL";
            this.KEY_HTTP_DO_NOT_TRACK = "KEY_HTTP_DO_NOT_TRACK";
            this.KEY_PACO_CONTENT_BLOCKING_MODE = "KEY_PACO_CONTENT_BLOCKING_MODE";
            this.PACO_BLOCKING_DISABLED_PERMANENTLY = "PACO_BLOCKING_DISABLED_PERMANENTLY";
            this.PACO_BLOCKING_ENABLED = "PACO_BLOCKING_ENABLED";
            this.KEY_PREFERRED_STREAM_QUALITY = "KEY_PREFERRED_STREAM_QUALITY";
            this.KEY_STANDBY_IDLE_TIME = "KEY_STANDBY_IDLE_TIME";
            this.KEY_SUBTITLE_ACCEPT_OTHER = "KEY_SUBTITLE_ACCEPT_OTHER";
            this.KEY_SUBTITLE_DEFAULT_ENABLED = "KEY_SUBTITLE_DEFAULT_ENABLED";
            this.KEY_SUBTITLE_LANGUAGES = "KEY_SUBTITLE_LANGUAGES";
            this.KEY_SUBTITLE_TYPE = "KEY_SUBTITLE_TYPE";
            this.KEY_TIMESHIFT_BUFFER_MINUTES = "KEY_TIMESHIFT_BUFFER_MINUTES";
            this.KEY_TIMESHIFT_DELAY_SECONDS = "KEY_TIMESHIFT_DELAY_SECONDS";
            this.KEY_ALLOW_COMPANION_DEVICE_PAIRING = "KEY_ALLOW_COMPANION_DEVICE_PAIRING";
            this.KEY_STANDBY_FUNCTIONALITY = "KEY_STANDBY_FUNCTIONALITY";
            this.KEY_HDMI_CEC_MODE = "KEY_HDMI_CEC_MODE";
            this.KEY_REBOOT_REASON = "KEY_REBOOT_REASON";
            this.KEY_REBOOT_REASON_EXECSTATUS = "KEY_REBOOT_REASON_EXECSTATUS";
            this.HDMI_CEC_AUDIO_CONTROL_OFF = "HDMI_CEC_AUDIO_CONTROL_OFF";
            this.HDMI_CEC_AUDIO_CONTROL_TV = "HDMI_CEC_AUDIO_CONTROL_TV";
            this.HDMI_CEC_MODE_DISABLED = "HDMI_CEC_MODE_DISABLED";
            this.HDMI_CEC_MODE_ENABLED = "HDMI_CEC_MODE_ENABLED";
            this.KEY_HDMI_CEC_AUDIO_CONTROL_MODE = "KEY_HDMI_CEC_AUDIO_CONTROL_MODE";
            this.STANDBY_FUNCTIONALITY_QUICK_START = "STANDBY_FUNCTIONALITY_QUICK_START";
            this.STANDBY_FUNCTIONALITY_WOL = "STANDBY_FUNCTIONALITY_WOL";
            this.AUDIO_TYPE_CLEAR = "AUDIO_TYPE_CLEAR";
            this.AUDIO_TYPE_HEARING_IMPAIRED = "AUDIO_TYPE_HEARING_IMPAIRED";
            this.AUDIO_TYPE_NORMAL = "AUDIO_TYPE_NORMAL";
            this.AUDIO_TYPE_VISUAL_COMMENTARY = "AUDIO_TYPE_VISUAL_COMMENTARY";
            this.AUDIO_TYPE_VISUAL_IMPAIRED_SPOKEN_SUBT = "AUDIO_TYPE_VISUAL_IMPAIRED_SPOKEN_SUBT";
            this.KEY_MASTER_VOLUME = "KEY_MASTER_VOLUME";
            this.KEY_MASTER_MUTE = "KEY_MASTER_MUTE";
            this.PREFERRED_STREAM_QUALITY_SD = "PREFERRED_STREAM_QUALITY_SD";
            this.PREFERRED_STREAM_QUALITY_HD = "PREFERRED_STREAM_QUALITY_HD";
            this.PREFERRED_STREAM_QUALITY_UHD = "PREFERRED_STREAM_QUALITY_UHD";
            this.SUBTITLINGTYPE_HEARINGIMPAIRED = "SUBTITLINGTYPE_HEARINGIMPAIRED";
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("constructor", ZacSettings_1.TAG)); });
            this.Set(this.KEY_AUDIO_TYPE, [this.AUDIO_TYPE_NORMAL]);
            this.Set(this.KEY_AUDIO_LANGUAGES, ["ger"]);
            this.Set(this.KEY_AUDIO_MULTICHANNEL, 1);
            this.Set(this.KEY_AUDIO_ACCEPT_OTHER, 1);
            this.Set(this.KEY_SUBTITLE_ACCEPT_OTHER, 1);
            this.Set(this.KEY_SUBTITLE_DEFAULT_ENABLED, 1);
            this.Set(this.KEY_SUBTITLE_LANGUAGES, ["ger"]);
            this.Set(this.KEY_HDCP_WHEN_OPTIONAL, 0);
            this.Set(this.KEY_MASTER_MUTE, 0);
            this.Set(this.KEY_MASTER_VOLUME, 33);
            this.Set(this.KEY_STANDBY_FUNCTIONALITY, [this.STANDBY_FUNCTIONALITY_QUICK_START]);
            this.Set(this.KEY_HDMI_CEC_MODE, "HDMI_CEC_MODE_DISABLED");
            this.Set(this.KEY_HDMI_CEC_AUDIO_CONTROL_MODE, "HDMI_CEC_AUDIO_CONTROL_OFF");
        }
        ZacSettings_1 = ZacSettings;
        ZacSettings.prototype.Get = function (key) {
            return this.keyValueStore[key];
        };
        ZacSettings.prototype.GetList = function (key) {
            return this.keyValueStore[key];
        };
        ZacSettings.prototype.Set = function (key, value) {
            this.keyValueStore[key] = value;
        };
        ZacSettings.prototype.registerEventListener = function (evtName, evtHandlerFunction) {
            return 0;
        };
        ZacSettings.prototype.unregisterEventListener = function (evtName, id) {
        };
        var ZacSettings_1;
        __decorate([
            public_1.log2(function () { return ({ name: ZacSettings_1.TAG }); })
        ], ZacSettings.prototype, "Get", null);
        __decorate([
            public_1.log2(function () { return ({ name: ZacSettings_1.TAG }); })
        ], ZacSettings.prototype, "GetList", null);
        __decorate([
            public_1.log2(function () { return ({ name: ZacSettings_1.TAG }); })
        ], ZacSettings.prototype, "Set", null);
        ZacSettings = ZacSettings_1 = __decorate([
            public_1.logTag()
        ], ZacSettings);
        return ZacSettings;
    }());
    exports.ZacSettings = ZacSettings;
});
//# sourceMappingURL=zacsettings.js.map