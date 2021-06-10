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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "react", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/public", "src/src-de-telekom-react/public", "../mediaplayer/public", "./zenterio/mediaplayer.dtextensions", "./zenterio/mediaplayer.html.wrapper"], function (require, exports, React, public_1, public_2, public_3, public_4, mediaplayer_dtextensions_1, mediaplayer_html_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PiPMediaPlayer = exports.MainMediaPlayer = void 0;
    var MediaPlayerType;
    (function (MediaPlayerType) {
        MediaPlayerType["MainPlayer"] = "MainPlayer";
        MediaPlayerType["PipPlayer"] = "PiP";
    })(MediaPlayerType || (MediaPlayerType = {}));
    var MainMediaPlayer = (function (_super) {
        __extends(MainMediaPlayer, _super);
        function MainMediaPlayer() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.registerPlayerElement = function (domElementPlayer) {
                if (domElementPlayer) {
                    var mediaPlayer = _this.runningOnSTB() ? domElementPlayer : mediaplayer_html_wrapper_1.MediaPlayerHTMLWrapper.initialize(domElementPlayer);
                    mediaPlayer.DTExtensions = new mediaplayer_dtextensions_1.MediaPlayerDTExtensions(mediaPlayer);
                    mediaPlayer.DTExtensions.defaultShowCssClass = "dttv-show-mediaplayer-zac-main";
                    var registerCloseable_1 = public_4.TVMediaPlayerHostService.getInstance().registerMainPlayerComponent(mediaPlayer);
                    _this.onDestroy(function () {
                        registerCloseable_1();
                    });
                }
            };
            return _this;
        }
        MainMediaPlayer.prototype.runningOnSTB = function () {
            var _a, _b;
            var zacConfig = { mode: "auto" };
            zacConfig = ((_a = public_2.Configuration.instance.zenterio) === null || _a === void 0 ? void 0 : _a.zac) ? public_2.Configuration.instance.zenterio.zac : zacConfig;
            var isSetTopBox = (_b = public_2.Configuration.instance.device) === null || _b === void 0 ? void 0 : _b.isSetTopBox;
            var zacMode = public_1.ZacMode[zacConfig.mode] || public_1.ZacMode.auto;
            return (isSetTopBox && (zacMode === public_1.ZacMode.auto || zacMode === public_1.ZacMode.prod));
        };
        MainMediaPlayer.prototype.render = function () {
            var runningOnSTB = this.runningOnSTB();
            return React.createElement("div", { className: "dttv-mainplayer-container", id: "mainPlayerContainer" }, runningOnSTB
                ? React.createElement("object", __assign({ type: "application/x-zacmediaplayer", ref: this.registerPlayerElement }, { playerType: MediaPlayerType.MainPlayer }, { "dom-mode": "enabled", className: "dttv-hide-mediaplayer-zac", id: "zacMediaPlayerMain" }))
                : React.createElement("video", __assign({ ref: this.registerPlayerElement }, { fullscreen: "true" }, { style: { backgroundColor: "black", objectFit: "fill" }, className: "dttv-hide-mediaplayer-zac", muted: true })));
        };
        __decorate([
            public_2.Memoize.decorator()
        ], MainMediaPlayer.prototype, "runningOnSTB", null);
        MainMediaPlayer = __decorate([
            public_3.reactComponent({
                ID: "main-mediaplayer-component"
            }),
            public_2.logTag()
        ], MainMediaPlayer);
        return MainMediaPlayer;
    }(public_3.ReactBaseComponent));
    exports.MainMediaPlayer = MainMediaPlayer;
    var PiPMediaPlayer = (function (_super) {
        __extends(PiPMediaPlayer, _super);
        function PiPMediaPlayer(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.registerPlayerElement = function (domElementPlayer) {
                if (domElementPlayer) {
                    var mediaPlayer_1 = _this.runningOnSTB() ? domElementPlayer : mediaplayer_html_wrapper_1.MediaPlayerHTMLWrapper.initialize(domElementPlayer);
                    mediaPlayer_1.DTExtensions = new mediaplayer_dtextensions_1.MediaPlayerDTExtensions(mediaPlayer_1);
                    mediaPlayer_1.DTExtensions.defaultShowCssClass = "dttv-show-mediaplayer-zac-main";
                    mediaPlayer_1.DTExtensions.component = _this;
                    mediaPlayer_1.style.removeProperty("height");
                    mediaPlayer_1.style.removeProperty("width");
                    var registeredEvent_1 = public_4.TVMediaPlayerHostService.createClosableEvent(mediaPlayer_1, "MediaPlayerStateChanged", function (event) {
                        public_2.Logger.debug(function (log) {
                            public_3.DiagnosticNotificationComponent.notify("PiP - MediaPlayerStateChanged", JSON.stringify(event) + (" -> returnCodeInfo: " + public_1.ServiceClientContextZac.getReturnCodeInfo(event.error)));
                            log(public_2.LogMsg("PiP - MediaPlayerStateChanged: '" + JSON.stringify(event) + "'", PiPMediaPlayer_1.TAG));
                        });
                        if (event.state === mediaPlayer_1.PLAYERSTATE_PLAYING) {
                            _this.setState({ uiState: "play" });
                        }
                        else if (event.state === mediaPlayer_1.PLAYERSTATE_DISCONNECTED) {
                            _this.setState({ uiState: "stop" });
                        }
                        else if (event.state === mediaPlayer_1.PLAYERSTATE_ERROR) {
                            public_2.Logger.error(function (log) { return log(public_2.LogMsg("Unable to play PiP stream: '" + JSON.stringify(event) + "' -> returnCodeInfo: " + public_1.ServiceClientContextZac.getReturnCodeInfo(event.error), PiPMediaPlayer_1.TAG)); });
                            mediaPlayer_1.DTExtensions.stop();
                        }
                    });
                    var registerCloseable_2 = public_4.TVMediaPlayerHostService.getInstance().registerPipPlayerComponent(mediaPlayer_1);
                    _this.onDestroy(function () {
                        mediaPlayer_1.DTExtensions.component = undefined;
                        registeredEvent_1();
                        registerCloseable_2();
                    });
                }
            };
            _this.state = { className: "", uiState: "stop" };
            return _this;
        }
        PiPMediaPlayer_1 = PiPMediaPlayer;
        PiPMediaPlayer.prototype.setUIState = function (state) {
            if (state.className) {
                this.setState({ uiState: state.uiState, className: state.className });
            }
            else {
                this.setState({ uiState: state.uiState });
            }
        };
        PiPMediaPlayer.prototype.runningOnSTB = function () {
            var _a, _b;
            var zacConfig = { mode: "auto" };
            zacConfig = ((_a = public_2.Configuration.instance.zenterio) === null || _a === void 0 ? void 0 : _a.zac) ? public_2.Configuration.instance.zenterio.zac : zacConfig;
            var isSetTopBox = (_b = public_2.Configuration.instance.device) === null || _b === void 0 ? void 0 : _b.isSetTopBox;
            var zacMode = public_1.ZacMode[zacConfig.mode] || public_1.ZacMode.auto;
            return (isSetTopBox && (zacMode === public_1.ZacMode.auto || zacMode === public_1.ZacMode.prod));
        };
        PiPMediaPlayer.prototype.render = function () {
            var runningOnSTB = this.runningOnSTB();
            return React.createElement("div", { id: "pipPlayerContainer" },
                runningOnSTB
                    ? React.createElement("object", __assign({ type: "application/x-zacmediaplayer", ref: this.registerPlayerElement }, { playertype: MediaPlayerType.PipPlayer }, { "dom-mode": "enabled", className: "dttv-hide-mediaplayer-zac", style: { height: 1, width: 1 }, id: "zacMediaPlayerPiP" }))
                    : React.createElement("video", __assign({ ref: this.registerPlayerElement }, { fullscreen: "false" }, { style: { backgroundColor: "black", objectFit: "fill" }, className: "dttv-hide-mediaplayer-zac" })),
                React.createElement("div", { style: { visibility: this.state.uiState === "tune" ? "visible" : "hidden", backgroundColor: "#000" }, className: this.state.className + " " + this.state.uiState + " cover" }),
                React.createElement("div", { style: { visibility: this.state.uiState === "stop" ? "hidden" : "visible" }, className: this.state.className + " " + this.state.uiState + " border" }));
        };
        var PiPMediaPlayer_1;
        __decorate([
            public_2.Memoize.decorator()
        ], PiPMediaPlayer.prototype, "runningOnSTB", null);
        PiPMediaPlayer = PiPMediaPlayer_1 = __decorate([
            public_3.reactComponent({
                ID: "pip-mediaplayer-component"
            }),
            public_2.logTag()
        ], PiPMediaPlayer);
        return PiPMediaPlayer;
    }(public_3.ReactBaseComponent));
    exports.PiPMediaPlayer = PiPMediaPlayer;
});
//# sourceMappingURL=mediaplayer.component.js.map