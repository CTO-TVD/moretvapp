var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom-tv-core/backend/Zac/zacVideoFormat", "src/src-de-telekom/public", "./mediaplayer.utils", "src/src-de-telekom-tv-core/public"], function (require, exports, zacVideoFormat_1, public_1, mediaplayer_utils_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MediaPlayerDTExtensions = void 0;
    var MediaPlayerDTExtensions = (function () {
        function MediaPlayerDTExtensions(mediaPlayer) {
            this.mediaPlayer = mediaPlayer;
            this.isStopped = true;
            this.defaultTrickspeeds = [-1600, -800, -400, -200, 0, 100, 200, 400, 800, 1600];
            this.trickspeedsForward = [400, 1600, 6400, 25600];
            this.trickspeedsBackward = [-25600, -6400, -1600, -400];
            this.currentMediaPlayerZoomLevel = 0;
            this.zoomLevelMargin = {};
            this.lastPlayedContentType = 0;
            this.zoomLevelMargin[zacVideoFormat_1.VideoFormat.NotSupportedByUi] = ["", "", "", ""];
            this.zoomLevelMargin[zacVideoFormat_1.VideoFormat.VideoFormat_1080i] = ["", "-72px -128px", "-144px -256px", "-139px -247px"];
            this.zoomLevelMargin[zacVideoFormat_1.VideoFormat.VideoFormat_1080p] = ["", "-72px -128px", "-144px -256px", "-139px -247px"];
            this.zoomLevelMargin[zacVideoFormat_1.VideoFormat.VideoFormat_2160p] = ["", "-72px -128px", "-144px -256px", "-139px -247px"];
            this.zoomLevelMargin[zacVideoFormat_1.VideoFormat.VideoFormat_720p] = ["", "-48px -85px", "-96px -170px", "-91px -162px"];
        }
        MediaPlayerDTExtensions_1 = MediaPlayerDTExtensions;
        MediaPlayerDTExtensions.prototype.supportTrickplay = function () {
            return (this.mediaPlayer.CAPABILITY_TRICKPLAY & mediaplayer_utils_1.MediaPlayerUtils.getCapabilities(this.mediaPlayer)) != 0;
        };
        MediaPlayerDTExtensions.prototype.allowTrickplayPause = function () {
            return (this.mediaPlayer.CAPABILITY_TRICKPLAY_PAUSE & mediaplayer_utils_1.MediaPlayerUtils.getCapabilities(this.mediaPlayer)) != 0;
        };
        MediaPlayerDTExtensions.prototype.allowTrickplaySetPosition = function () {
            return (this.mediaPlayer.CAPABILITY_TRICKPLAY_SET_POSITION & mediaplayer_utils_1.MediaPlayerUtils.getCapabilities(this.mediaPlayer)) != 0;
        };
        MediaPlayerDTExtensions.prototype.allowTrickplayRewind = function () {
            return (this.mediaPlayer.CAPABILITY_TRICKPLAY_REWIND & mediaplayer_utils_1.MediaPlayerUtils.getCapabilities(this.mediaPlayer)) != 0;
        };
        MediaPlayerDTExtensions.prototype.allowTrickplayFastForward = function () {
            return (this.mediaPlayer.CAPABILITY_TRICKPLAY_FAST_FORWARD & mediaplayer_utils_1.MediaPlayerUtils.getCapabilities(this.mediaPlayer)) != 0;
        };
        MediaPlayerDTExtensions.prototype.pause = function () {
            if (!this.allowTrickplayPause())
                return false;
            return this.changeSpeed(0);
        };
        MediaPlayerDTExtensions.prototype.isPaused = function () {
            try {
                return mediaplayer_utils_1.MediaPlayerUtils.getSpeed(this.mediaPlayer) === 0;
            }
            catch (e) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("isPaused exception: " + e, MediaPlayerDTExtensions_1.TAG)); });
                return false;
            }
        };
        MediaPlayerDTExtensions.prototype.playNormalSpeed = function () {
            return this.changeSpeed(100);
        };
        MediaPlayerDTExtensions.prototype.exitTimeshift = function () {
            if (!this.allowTrickplaySetPosition()) {
                return false;
            }
            if ((this.mediaPlayer.CAPABILITY_TRICKPLAY & mediaplayer_utils_1.MediaPlayerUtils.getCapabilities(this.mediaPlayer)) && mediaplayer_utils_1.MediaPlayerUtils.isTimeshifted(this.mediaPlayer)) {
                var duration = mediaplayer_utils_1.MediaPlayerUtils.getDuration(this.mediaPlayer);
                if (duration != undefined) {
                    return this.mediaPlayer.SetPosition(duration) == 0;
                }
                else {
                    return false;
                }
            }
            return false;
        };
        MediaPlayerDTExtensions.prototype.increaseFastForward = function () {
            if (!this.allowTrickplayFastForward())
                return false;
            var speeds = this.trickspeedsForward;
            if (!speeds) {
                return false;
            }
            var currentSpeedIndex = speeds.indexOf(mediaplayer_utils_1.MediaPlayerUtils.getSpeed(this.mediaPlayer) || 0);
            if (currentSpeedIndex + 1 < speeds.length) {
                return this.changeSpeed(speeds[currentSpeedIndex + 1]);
            }
            return false;
        };
        MediaPlayerDTExtensions.prototype.decreaseFastForward = function () {
            if (!this.allowTrickplayFastForward())
                return false;
            var speeds = this.trickspeedsForward;
            if (!speeds) {
                return false;
            }
            var currentSpeedIndex = speeds.indexOf(mediaplayer_utils_1.MediaPlayerUtils.getSpeed(this.mediaPlayer) || 0);
            if (currentSpeedIndex - 1 >= 0) {
                return this.changeSpeed(speeds[currentSpeedIndex - 1]);
            }
            return false;
        };
        MediaPlayerDTExtensions.prototype.fastForwardWithSpeedIndex = function (index) {
            if (!this.allowTrickplayFastForward())
                return false;
            var speeds = this.trickspeedsForward;
            if (!speeds || index < 0 || index >= speeds.length) {
                return false;
            }
            return this.changeSpeed(speeds[index]);
        };
        MediaPlayerDTExtensions.prototype.increaseRewind = function () {
            if (!this.allowTrickplayRewind())
                return false;
            var speeds = this.trickspeedsBackward;
            if (!speeds)
                return false;
            var currentSpeedIndex = speeds.indexOf(mediaplayer_utils_1.MediaPlayerUtils.getSpeed(this.mediaPlayer) || 0);
            if (currentSpeedIndex === -1) {
                currentSpeedIndex = speeds.length;
            }
            if (currentSpeedIndex - 1 >= 0) {
                return this.changeSpeed(speeds[currentSpeedIndex - 1]);
            }
            return false;
        };
        MediaPlayerDTExtensions.prototype.decreaseRewind = function () {
            if (!this.allowTrickplayRewind())
                return false;
            var speeds = this.trickspeedsBackward;
            if (!speeds)
                return false;
            var currentSpeedIndex = speeds.indexOf(mediaplayer_utils_1.MediaPlayerUtils.getSpeed(this.mediaPlayer) || 0);
            if (currentSpeedIndex === -1) {
                currentSpeedIndex = speeds.length;
            }
            if (currentSpeedIndex + 1 < speeds.length) {
                return this.changeSpeed(speeds[currentSpeedIndex + 1]);
            }
            return false;
        };
        MediaPlayerDTExtensions.prototype.rewindWithSpeedIndex = function (index) {
            if (!this.allowTrickplayRewind())
                return false;
            var speeds = this.trickspeedsBackward;
            if (!speeds || index < 0 || index >= speeds.length)
                return false;
            return this.changeSpeed(speeds[speeds.length - index - 1]);
        };
        MediaPlayerDTExtensions.prototype.jumpPositionForward = function (timeMs, withBoundCheck) {
            if (withBoundCheck === void 0) { withBoundCheck = true; }
            var duration = mediaplayer_utils_1.MediaPlayerUtils.getDuration(this.mediaPlayer);
            var position = mediaplayer_utils_1.MediaPlayerUtils.getPosition(this.mediaPlayer);
            if (!this.allowTrickplaySetPosition() || duration == undefined || position == undefined) {
                return false;
            }
            var jumpMs = timeMs;
            if (withBoundCheck) {
                if (duration - position < jumpMs) {
                    jumpMs = duration - position;
                }
            }
            var currentPosition = mediaplayer_utils_1.MediaPlayerUtils.getPosition(this.mediaPlayer);
            if (public_1.Guard.isNumber(currentPosition) && (this.mediaPlayer.CAPABILITY_TRICKPLAY & mediaplayer_utils_1.MediaPlayerUtils.getCapabilities(this.mediaPlayer)) && this.mediaPlayer.SetPosition(currentPosition + jumpMs) == 0) {
                return true;
            }
            return false;
        };
        MediaPlayerDTExtensions.prototype.jumpPositionBackward = function (timeMs) {
            if (!this.allowTrickplaySetPosition())
                return false;
            var currentPosition = mediaplayer_utils_1.MediaPlayerUtils.getPosition(this.mediaPlayer);
            if (public_1.Guard.isNumber(currentPosition) && (this.mediaPlayer.CAPABILITY_TRICKPLAY & mediaplayer_utils_1.MediaPlayerUtils.getCapabilities(this.mediaPlayer)) && this.mediaPlayer.SetPosition(currentPosition - timeMs > 0 ? currentPosition - timeMs : 0) == 0) {
                return true;
            }
            return false;
        };
        MediaPlayerDTExtensions.prototype.getPlaybackSpeeds = function () {
            if (!this.mediaPlayer) {
                return [];
            }
            if (!(this.mediaPlayer.CAPABILITY_TRICKPLAY & mediaplayer_utils_1.MediaPlayerUtils.getCapabilities(this.mediaPlayer))) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getPlaybackSpeeds: trickplay not supported", MediaPlayerDTExtensions_1.TAG)); });
                return [];
            }
            var speeds = this.mediaPlayer.GetSupportedSpeeds();
            return speeds.length ? speeds : this.defaultTrickspeeds;
        };
        MediaPlayerDTExtensions.prototype.getPlayedContentType = function () {
            return this.lastPlayedContentType;
        };
        MediaPlayerDTExtensions.prototype.setPlayedContentType = function (contentType) {
            this.lastPlayedContentType = contentType;
        };
        MediaPlayerDTExtensions.prototype.playUrl = function (url, offset, trickPlay, props, cssClass) {
            if (props === void 0) { props = {}; }
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("playUrl - url: '" + url + "', offset: '" + offset + "', trickPlay: '" + trickPlay + "', props: '" + public_1.StringTools.dataStringify(props) + "'", MediaPlayerDTExtensions_1.TAG)); });
            setTimeout(function () { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("playUrl (post processing) - url: '" + url + "', offset: '" + offset + "', trickPlay: '" + trickPlay + "', props: '" + public_1.StringTools.dataStringify(props) + "'", MediaPlayerDTExtensions_1.TAG)); }); }, 0);
            if (this.mediaPlayer.DTExtensions.component && this.isStopped) {
                this.mediaPlayer.DTExtensions.component.setUIState({ uiState: "tune", className: cssClass || this.defaultShowCssClass || "" });
            }
            this.mediaPlayer.className = cssClass || this.defaultShowCssClass || "";
            var playUrlResult = this.mediaPlayer.PlayUrl(url, offset, trickPlay, props);
            this.setPlayerZoomLevel(0);
            public_2.ApplicationClient.performance.DeviceActionEventObservable.next({
                componentName: MediaPlayerDTExtensions_1.TAG,
                processName: "playUrl",
                data: public_2.DeviceActionEventType.PlayUrl
            });
            this.isStopped = false;
            return playUrlResult;
        };
        MediaPlayerDTExtensions.prototype.stop = function () {
            if (this.mediaPlayer.DTExtensions.component) {
                this.mediaPlayer.DTExtensions.component.setUIState({ uiState: "stop" });
            }
            var stopResult = this.mediaPlayer.Stop();
            this.mediaPlayer.className = "dttv-hide-mediaplayer-zac";
            this.isStopped = true;
            return stopResult;
        };
        MediaPlayerDTExtensions.prototype.setPlayerZoomLevel = function (level, videoFormat) {
            var container = this.mediaPlayer.parentElement;
            if (container && (container.id == "mainPlayerContainer")) {
                this.currentMediaPlayerZoomLevel = level;
                container.style.margin = (videoFormat === null || videoFormat === undefined) ? "" : (this.zoomLevelMargin[videoFormat][level] || "");
            }
        };
        MediaPlayerDTExtensions.prototype.getPlayerZoomLevel = function () {
            return this.currentMediaPlayerZoomLevel;
        };
        MediaPlayerDTExtensions.prototype.changeSpeed = function (newSpeed) {
            if (this.mediaPlayer.SetSpeed(newSpeed)) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("changeSpeed: cannot change speed", MediaPlayerDTExtensions_1.TAG)); });
                return false;
            }
            return true;
        };
        var MediaPlayerDTExtensions_1;
        MediaPlayerDTExtensions = MediaPlayerDTExtensions_1 = __decorate([
            public_1.logTag()
        ], MediaPlayerDTExtensions);
        return MediaPlayerDTExtensions;
    }());
    exports.MediaPlayerDTExtensions = MediaPlayerDTExtensions;
});
//# sourceMappingURL=mediaplayer.dtextensions.js.map