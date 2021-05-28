var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "src/src-de-telekom-tv-core/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MediaPlayerUtils = void 0;
    var MediaPlayerUtils = (function () {
        function MediaPlayerUtils() {
        }
        MediaPlayerUtils_1 = MediaPlayerUtils;
        MediaPlayerUtils.getCapabilities = function (mediaPlayer) {
            try {
                return mediaPlayer.GetCapabilities();
            }
            catch (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Can't get capabilities: " + error, MediaPlayerUtils_1.TAG)); });
            }
            return mediaPlayer.CAPABILITY_NONE;
        };
        MediaPlayerUtils.getDuration = function (mediaPlayer) {
            try {
                return mediaPlayer.GetDuration();
            }
            catch (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Can't get duration: " + error, MediaPlayerUtils_1.TAG)); });
            }
            return undefined;
        };
        MediaPlayerUtils.getPosition = function (mediaPlayer) {
            try {
                return mediaPlayer.GetPosition();
            }
            catch (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Can't get position: " + error, MediaPlayerUtils_1.TAG)); });
            }
            return undefined;
        };
        MediaPlayerUtils.getProperty = function (mediaPlayer, property, defaultValue) {
            try {
                var playerState = MediaPlayerUtils_1.getState(mediaPlayer);
                if ((property === "currentProgramId") && ((playerState === mediaPlayer.PLAYERSTATE_DISCONNECTED) || (playerState === mediaPlayer.PLAYERSTATE_CONNECTING))) {
                    return defaultValue;
                }
                var value = mediaPlayer.GetProperty(property);
                return (value == null || value == undefined) ? defaultValue : value;
            }
            catch (error) { }
            return defaultValue;
        };
        MediaPlayerUtils.getSpeed = function (mediaPlayer) {
            try {
                return mediaPlayer.GetSpeed();
            }
            catch (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Can't get speed: " + error, MediaPlayerUtils_1.TAG)); });
            }
            return undefined;
        };
        MediaPlayerUtils.getState = function (mediaPlayer) {
            try {
                return mediaPlayer.GetState();
            }
            catch (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Can't get state: " + error, MediaPlayerUtils_1.TAG)); });
            }
            return mediaPlayer.PLAYERSTATE_ERROR;
        };
        MediaPlayerUtils.getStreamReasonInfo = function (streamReasonValue) {
            return MediaPlayerUtils_1.getTypeInfo(public_2.zosaStatic, [
                "SELECTED_STREAM_REASON_INSUFFICIENT_BANDWIDTH",
                "SELECTED_STREAM_REASON_NOT_SUBSCRIBED",
                "SELECTED_STREAM_REASON_OUTPUT_HDCP_VERSION_NOT_APPROPRIATE",
                "SELECTED_STREAM_REASON_OUTPUT_QUALITY_DOWNGRADE",
                "SELECTED_STREAM_REASON_OUTPUT_UHD_NOT_SUPPORTED",
                "SELECTED_STREAM_REASON_OUTPUT_VIDEO_DOWNSCALE",
                "SELECTED_STREAM_REASON_UNKNOWN"
            ], streamReasonValue);
        };
        MediaPlayerUtils.getSupportedSpeeds = function (mediaPlayer) {
            try {
                return mediaPlayer.GetSupportedSpeeds();
            }
            catch (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Can't get speed: " + error, MediaPlayerUtils_1.TAG)); });
            }
            return undefined;
        };
        MediaPlayerUtils.getTimeshiftBufferMaxSize = function (mediaPlayer) {
            try {
                return mediaPlayer.GetTimeshiftBufferMaxSize();
            }
            catch (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Can't get the max size of the timeshift buffer: " + error, MediaPlayerUtils_1.TAG)); });
            }
            return undefined;
        };
        MediaPlayerUtils.getUrl = function (mediaPlayer, defaultValue) {
            if (defaultValue === void 0) { defaultValue = null; }
            try {
                var value = mediaPlayer.GetUrl();
                return (value == null || value == undefined) ? defaultValue : value;
            }
            catch (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Can't get url: " + error, MediaPlayerUtils_1.TAG)); });
            }
            return defaultValue;
        };
        MediaPlayerUtils.isTimeshifted = function (mediaPlayer) {
            try {
                return mediaPlayer.IsTimeshifted();
            }
            catch (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Can't get timeshift state: " + error, MediaPlayerUtils_1.TAG)); });
            }
            return 0;
        };
        MediaPlayerUtils.getComponents = function (mediaPlayer, onlyActive) {
            try {
                return mediaPlayer.GetComponents(onlyActive) || [];
            }
            catch (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Can't get components: " + error, MediaPlayerUtils_1.TAG)); });
            }
            return [];
        };
        MediaPlayerUtils.getProgramInfo = function (mediaPlayer) {
            try {
                return mediaPlayer.GetProgramInfo();
            }
            catch (error) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Can't get programInfo: " + error, MediaPlayerUtils_1.TAG)); });
            }
            return undefined;
        };
        MediaPlayerUtils.getVideoComponents = function (mediaPlayer, onlyActive) {
            if (onlyActive === void 0) { onlyActive = false; }
            return MediaPlayerUtils_1.getComponents(mediaPlayer, onlyActive).filter(function (item) { return item.type == mediaPlayer.COMPONENT_VIDEO; });
        };
        MediaPlayerUtils.getAudioComponents = function (mediaPlayer, onlyActive) {
            if (onlyActive === void 0) { onlyActive = false; }
            return MediaPlayerUtils_1.getComponents(mediaPlayer, onlyActive).filter(function (item) { return item.type == mediaPlayer.COMPONENT_AUDIO; });
        };
        MediaPlayerUtils.getSubtitlingComponents = function (mediaPlayer, onlyActive) {
            if (onlyActive === void 0) { onlyActive = false; }
            return MediaPlayerUtils_1.getComponents(mediaPlayer, onlyActive).filter(function (item) { return item.type == mediaPlayer.COMPONENT_SUBTITLING; });
        };
        MediaPlayerUtils.getTeletextComponents = function (mediaPlayer, onlyActive) {
            if (onlyActive === void 0) { onlyActive = false; }
            return MediaPlayerUtils_1.getComponents(mediaPlayer, onlyActive).filter(function (item) { return item.type == mediaPlayer.COMPONENT_TELETEXT && item.teletextType == mediaPlayer.INITIAL_PAGE; });
        };
        MediaPlayerUtils.getTypeInfo = function (obj, fields, value) {
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                if (obj[field] === value) {
                    return value + " [" + field + "]";
                }
            }
            return value + " [unknown]";
        };
        var MediaPlayerUtils_1;
        MediaPlayerUtils = MediaPlayerUtils_1 = __decorate([
            public_1.logTag()
        ], MediaPlayerUtils);
        return MediaPlayerUtils;
    }());
    exports.MediaPlayerUtils = MediaPlayerUtils;
});
//# sourceMappingURL=mediaplayer.utils.js.map