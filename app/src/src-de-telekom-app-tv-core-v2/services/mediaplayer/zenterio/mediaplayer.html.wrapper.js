define(["require", "exports", "bluebird", "src/src-de-telekom/public"], function (require, exports, bluebird, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MediaPlayerHTMLWrapper = void 0;
    var MediaPlayerHTMLWrapper = (function () {
        function MediaPlayerHTMLWrapper() {
        }
        MediaPlayerHTMLWrapper.initialize = function (videoElement) {
            var mediaPlayer = videoElement;
            mediaPlayer.__components = [
                {
                    type: 0,
                    id: 7168,
                    MPEGStreamType: 6,
                    isActive: true,
                    audioType: mediaPlayer.AC3,
                    channel: 0,
                    language: "ger",
                    isForHearingImpaired: 0,
                    isForVisuallyImpaired: 0
                },
                {
                    type: 0,
                    id: 7424,
                    MPEGStreamType: 3,
                    isActive: false,
                    audioType: mediaPlayer.MPEG2,
                    channel: 0,
                    language: "ger",
                    isForHearingImpaired: 0,
                    isForVisuallyImpaired: 0
                },
                {
                    type: 0,
                    id: 8192,
                    MPEGStreamType: 3,
                    isActive: false,
                    audioType: mediaPlayer.MPEG2,
                    channel: 0,
                    language: "mis",
                    isForHearingImpaired: 0,
                    isForVisuallyImpaired: 0
                },
                {
                    type: 1,
                    id: 6912,
                    MPEGStreamType: 27,
                    isActive: true,
                    codec: 3,
                    streamWidth: 704,
                    streamHeight: 576,
                    bitrate: 0
                },
                {
                    type: 2,
                    id: 7936,
                    MPEGStreamType: 6,
                    isActive: true,
                    language: "ger",
                    teletextType: 1
                },
                {
                    type: 3,
                    id: 7680,
                    MPEGStreamType: 6,
                    isActive: true,
                    language: "ger",
                    teletextType: 1
                }
            ];
            mediaPlayer.__eventManager = new public_1.EventManager();
            mediaPlayer.__registeredEvents = {};
            mediaPlayer.AUDIO_CHANNEL_STEREO = 204;
            mediaPlayer.AUDIO_CHANNEL_MULTICHANNEL = 207;
            mediaPlayer.MPEG2 = 100;
            mediaPlayer.AC3 = 101;
            mediaPlayer.EAC3 = 102;
            mediaPlayer.ATMOS = 103;
            mediaPlayer.DTS = 104;
            mediaPlayer.HEAAC_L2 = 105;
            mediaPlayer.HEAAC_L4 = 106;
            mediaPlayer.AAC = 107;
            mediaPlayer.MP3 = 108;
            mediaPlayer.COMPONENT_AUDIO = 0;
            mediaPlayer.COMPONENT_VIDEO = 1;
            mediaPlayer.COMPONENT_SUBTITLING = 2;
            mediaPlayer.COMPONENT_TELETEXT = 3;
            mediaPlayer.PLAYERSTATE_DISCONNECTED = 0;
            mediaPlayer.PLAYERSTATE_CONNECTING = 1;
            mediaPlayer.PLAYERSTATE_BUFFERING = 2;
            mediaPlayer.PLAYERSTATE_PLAYING = 3;
            mediaPlayer.PLAYERSTATE_ERROR = 4;
            mediaPlayer.CAPABILITY_NONE = 0;
            mediaPlayer.CAPABILITY_TRICKPLAY = 1;
            mediaPlayer.CAPABILITY_TRICKPLAY_SET_POSITION = 2;
            mediaPlayer.CAPABILITY_TRICKPLAY_REWIND = 3;
            mediaPlayer.CAPABILITY_TRICKPLAY_FAST_FORWARD = 4;
            mediaPlayer.CAPABILITY_TRICKPLAY_PAUSE = 5;
            mediaPlayer.REASON_SPEED_CHANGE = 0;
            mediaPlayer.REASON_STORAGE_FULL = 7;
            mediaPlayer.REASON_TIMESHIFT_TOO_MANY_RECORDERS = 7;
            mediaPlayer.REASON_CC_ERRORS = 8;
            mediaPlayer.BLOCKREASON_CA_ACCESS_DENIED = 210;
            mediaPlayer.BLOCKREASON_CA_ACCESS_DENIED_NO_CAS_FOUND = 215;
            mediaPlayer.BLOCKREASON_CA_ACCESS_DENIED_NO_CAS_REGISTERED = 220;
            mediaPlayer.BLOCKREASON_CA_ACCESS_DENIED_PIN_REQUIRED = 225;
            mediaPlayer.BLOCKREASON_CA_ACCESS_DENIED_GEOGRAPHICAL_BLACKOUT = 230;
            mediaPlayer.BLOCKREASON_CA_ACCESS_DENIED_NETWORK_BLOCK = 235;
            mediaPlayer.BLOCKREASON_CA_ACCESS_DENIED_KEY_NOT_AVAILABLE = 240;
            mediaPlayer.BLOCKREASON_CA_ACCESS_DENIED_INSUFFICIENT_CREDIT = 245;
            mediaPlayer.BLOCKREASON_SERVICELOCK_WHOLE_DAY = 410;
            mediaPlayer.INITIAL_PAGE = 1;
            mediaPlayer.SUBTITLING_SWITCH_NAME = "ZacSubtitling";
            mediaPlayer.ParentalUnblock = function () {
                return 0;
            };
            mediaPlayer.ActivateComponent = function (componentId) {
                var component = mediaPlayer.__components.filter(function (item) { return item.id == componentId; });
                if (public_1.Guard.isUndefined(component)) {
                    return 1;
                }
                for (var _i = 0, _a = mediaPlayer.__components.filter(function (item) { return item.type == component[0].type; }); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.isActive = false;
                }
                component[0].isActive = true;
                return 0;
            };
            mediaPlayer.AddSwitch = function (type, initialState, name, isPrivate) {
                return 0;
            };
            mediaPlayer.GetCapabilities = function () {
                return 1;
            };
            mediaPlayer.GetComponents = function (onlyActive) {
                return mediaPlayer.__components.filter(function (item) { return (item.isActive == onlyActive) || (onlyActive == false); });
            };
            mediaPlayer.GetDefaultComponent = function (componentType) {
                var filteredComponents = mediaPlayer.__components.filter(function (item) { return (item.type == componentType) && item.isActive; });
                return filteredComponents.length > 0 ? filteredComponents[0] : undefined;
            };
            mediaPlayer.GetDuration = function () {
                var now = new Date().getTime();
                var diff;
                switch (mediaPlayer.DTExtensions.getPlayedContentType()) {
                    case 4:
                        diff = 5220000;
                        break;
                    default:
                        diff = now - mediaPlayer.__mediaStartTime.getTime();
                        break;
                }
                return diff;
            };
            mediaPlayer.GetPosition = function () {
                if (mediaPlayer.currentTime * 1000 > mediaPlayer.GetDuration()) {
                    mediaPlayer.SetPosition(mediaPlayer.GetDuration());
                }
                return mediaPlayer.currentTime * 1000;
            };
            mediaPlayer.GetProgramInfo = function () {
                return undefined;
            };
            mediaPlayer.GetProperty = function (key) {
                switch (key) {
                    case "currentProgramId":
                        return "";
                    case "selectedStreamId":
                        return mediaPlayer.__selectedStreamId;
                    case "selectedStreamReason":
                        return null;
                    default:
                        return null;
                }
            };
            mediaPlayer.GetSpeed = function () {
                if (public_1.Configuration.instance.playMockVideo) {
                    if (mediaPlayer.paused) {
                        return 0;
                    }
                    else {
                        return mediaPlayer.playbackRate * 100;
                    }
                }
                return 0;
            };
            mediaPlayer.GetState = function () {
                return mediaPlayer.PLAYERSTATE_PLAYING;
            };
            mediaPlayer.GetSupportedSpeeds = function () {
                return [-1600, -800, -400, -200, 0, 100, 200, 400, 800, 1600];
            };
            mediaPlayer.GetSwitchState = function (name) {
                if (name === mediaPlayer.SUBTITLING_SWITCH_NAME) {
                    if (mediaPlayer.__components) {
                        var subTitleComponents = mediaPlayer.__components.filter(function (item) { return item.type == mediaPlayer.COMPONENT_SUBTITLING; });
                        for (var _i = 0, subTitleComponents_1 = subTitleComponents; _i < subTitleComponents_1.length; _i++) {
                            var component = subTitleComponents_1[_i];
                            if (component.isActive) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            };
            mediaPlayer.GetTimeshiftBufferMaxSize = function () {
                return 70 * 60;
            };
            mediaPlayer.GetUrl = function () {
                return mediaPlayer.src;
            };
            mediaPlayer.IsTimeshifted = function () {
                var pos = mediaPlayer.GetPosition() + 20000;
                if (mediaPlayer.GetDuration() > pos) {
                    return (mediaPlayer.GetDuration() - mediaPlayer.GetPosition());
                }
                return 0;
            };
            mediaPlayer.PlayUrl = function (url, offset, trickPlay, props) {
                if (public_1.Configuration.instance.playMockVideo) {
                    var resolveStreamMapping = window.resolveStreamMapping;
                    if ((url.indexOf("http://") == 0) || (url.indexOf("https://") == 0) || (url.indexOf("mms://") == 0)) {
                        resolveStreamMapping = function (url) { return bluebird.try(function () { return ({ channel: undefined, url: url, streamId: "" }); }); };
                    }
                    if (resolveStreamMapping) {
                        resolveStreamMapping(url)
                            .then(function (value) {
                            mediaPlayer.__eventManager.broadcast("MediaPlayerStateChanged", {
                                state: mediaPlayer.PLAYERSTATE_CONNECTING,
                                url: url,
                                error: 0
                            });
                            return value;
                        })
                            .then(function (value) {
                            var _a, _b;
                            mediaPlayer.__selectedStreamId = value.streamId;
                            if (value.url) {
                                mediaPlayer.src = value.url;
                            }
                            var stream = (_b = (_a = value.channel) === null || _a === void 0 ? void 0 : _a.streams) === null || _b === void 0 ? void 0 : _b.filter(function (item) { return item.zosaId == value.streamId; })[0];
                            if (!value.channel || (stream === null || stream === void 0 ? void 0 : stream.livePlayAllowed)) {
                                mediaPlayer.__eventManager.broadcast("MediaPlayerStateChanged", {
                                    state: mediaPlayer.PLAYERSTATE_BUFFERING,
                                    url: url,
                                    error: 0
                                });
                                mediaPlayer.play();
                                mediaPlayer.__mediaStartTime = new Date();
                                mediaPlayer.__eventManager.broadcast("MediaPlayerStateChanged", {
                                    state: mediaPlayer.PLAYERSTATE_PLAYING,
                                    url: url,
                                    error: 0
                                });
                            }
                            else {
                                mediaPlayer.__eventManager.broadcast("MediaPlayerStateChanged", {
                                    state: mediaPlayer.PLAYERSTATE_ERROR,
                                    url: url,
                                    error: 22
                                });
                            }
                        });
                    }
                }
                return 0;
            };
            mediaPlayer.RemoveSwitch = function (name) {
                return 0;
            };
            mediaPlayer.SetPosition = function (position) {
                if (position > mediaPlayer.GetDuration()) {
                    position = mediaPlayer.GetDuration();
                }
                mediaPlayer.currentTime = position / 1000;
                return 0;
            };
            mediaPlayer.SetSpeed = function (speed) {
                if (public_1.Configuration.instance.playMockVideo) {
                    mediaPlayer.__eventManager.broadcast("MediaPlayerStatusChanged", {
                        reason: mediaPlayer.REASON_SPEED_CHANGE,
                        speed: speed,
                        error: 0
                    });
                    if (speed === 0) {
                        mediaPlayer.pause();
                    }
                    else if (speed === 100) {
                        mediaPlayer.play();
                        mediaPlayer.playbackRate = 1;
                    }
                    else {
                        mediaPlayer.playbackRate = speed / 100;
                    }
                }
                return 0;
            };
            mediaPlayer.SetSwitchState = function (name, state) {
                if (name === mediaPlayer.SUBTITLING_SWITCH_NAME && !state) {
                    if (mediaPlayer.__components) {
                        var subTitleComponents = mediaPlayer.__components.filter(function (item) { return item.type == mediaPlayer.COMPONENT_SUBTITLING; });
                        for (var _i = 0, subTitleComponents_2 = subTitleComponents; _i < subTitleComponents_2.length; _i++) {
                            var component = subTitleComponents_2[_i];
                            component.isActive = false;
                        }
                    }
                }
                return 0;
            };
            mediaPlayer.Stop = function () {
                mediaPlayer.pause();
                mediaPlayer.src = "";
                mediaPlayer.__eventManager.broadcast("MediaPlayerStateChanged", {
                    state: mediaPlayer.PLAYERSTATE_DISCONNECTED,
                    url: null,
                    error: 0
                });
                return 0;
            };
            mediaPlayer.registerEventListener = function (evtName, evtHandlerFunction) {
                var closeable = mediaPlayer.__eventManager.on(evtName, evtHandlerFunction, "MediaPlayerHTMLWrapper");
                var id = new Date().valueOf();
                mediaPlayer.__registeredEvents[id] = closeable;
                return id;
            };
            mediaPlayer.unregisterEventListener = function (evtName, id) {
                var closeable = mediaPlayer.__registeredEvents[id];
                delete (mediaPlayer.__registeredEvents[id]);
                closeable();
            };
            return mediaPlayer;
        };
        return MediaPlayerHTMLWrapper;
    }());
    exports.MediaPlayerHTMLWrapper = MediaPlayerHTMLWrapper;
});
//# sourceMappingURL=mediaplayer.html.wrapper.js.map