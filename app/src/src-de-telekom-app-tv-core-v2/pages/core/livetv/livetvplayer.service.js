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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "moment", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/public", "../../../services/public", "../../../translation/public", "./livetvplayer.service.interface"], function (require, exports, bluebird, moment, public_1, public_2, public_3, public_4, public_5, livetvplayer_service_interface_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LiveTVPlayerService = exports.LiveTVBufferUnderrunError = void 0;
    var LiveTVBufferUnderrunError = (function (_super) {
        __extends(LiveTVBufferUnderrunError, _super);
        function LiveTVBufferUnderrunError(message) {
            var _this = _super.call(this, message || "") || this;
            _this.errorID = 0x627;
            return _this;
        }
        LiveTVBufferUnderrunError.prototype.getAdditionalErrorCode = function () {
            return "" + this.Time + (this.IGMP ? "." + this.IGMP : "");
        };
        return LiveTVBufferUnderrunError;
    }(public_3.BaseError));
    exports.LiveTVBufferUnderrunError = LiveTVBufferUnderrunError;
    var LiveTVPlayerService = (function (_super) {
        __extends(LiveTVPlayerService, _super);
        function LiveTVPlayerService() {
            var _this = _super.call(this) || this;
            _this.eventManager = new public_3.EventManager();
            _this.barkerContentTuned = false;
            _this.lastBarkerContentIsImage = false;
            _this.lastTuneFailedWithInsufficentBandwidth = false;
            _this.lastTunedInstantRestartAtSameChannel = false;
            _this.userlastChoosenQuality = null;
            _this.serviceIsStopped = false;
            _this.lastVolume = 10;
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("init", LiveTVPlayerService_1.TAG)); });
            _this.mediaPlayerHostService = public_4.TVMediaPlayerHostService.getInstance();
            var registeredEvents = {
                MediaPlayerComponentsChanged: { closeable: undefined },
                MediaPlayerEndOfStream: { closeable: undefined },
                MediaPlayerGotOwnership: { closeable: undefined },
                MediaPlayerLostOwnership: { closeable: undefined },
                MediaPlayerOutputBlockingStatusChanged: { closeable: undefined },
                MediaPlayerOwnershipToSystem: { closeable: undefined },
                MediaPlayerProgramChanged: { closeable: undefined },
                MediaPlayerStateChanged: { closeable: undefined },
                MediaPlayerStatusChanged: { closeable: undefined }
            };
            public_2.ApplicationClient.recordingManagement.getOnRecordingChangedObservable().subscribe(function (event) { return public_3.Logger.debug(function (log) { return log(public_3.LogMsg("RecordingChanged " + JSON.stringify(event), LiveTVPlayerService_1.TAG)); }); });
            _this.mediaPlayerHostService
                .getMediaPlayerController()
                .then(function (response) {
                _this.registerEventOnMediaPlayerService(response, registeredEvents);
            });
            public_2.ApplicationClient.powerManagement.onUIPowerStateChangedEvent(function (event) {
                if (event.reason == public_2.PowerStateChangedReason.Active) {
                    public_1.TVVolumeControlService.getInstance().setLastVolume();
                }
            });
            public_2.ApplicationClient.programManagement.registerNonSatelliteChannelsObserver();
            return _this;
        }
        LiveTVPlayerService_1 = LiveTVPlayerService;
        LiveTVPlayerService.prototype.registerLiveTVPage = function (page) {
            var _this = this;
            this.liveTVPage = page;
            this.unmuteSubTitle();
            return function () {
                _this.muteSubTitle();
                _this.liveTVPage = undefined;
            };
        };
        LiveTVPlayerService.prototype.setFirstLiveTVStartIndicator = function (startPageStarted, tuneFirstChannel) {
            if (tuneFirstChannel === void 0) { tuneFirstChannel = false; }
            this.firstLiveTVStartIndicator = { startPageStarted: startPageStarted, tuneFirstChannel: tuneFirstChannel };
        };
        LiveTVPlayerService.prototype.getFirstLiveTVStartIndicator = function () {
            return this.firstLiveTVStartIndicator;
        };
        LiveTVPlayerService.prototype.resetFirstLiveTVStartIndicator = function () {
            this.firstLiveTVStartIndicator = undefined;
        };
        Object.defineProperty(LiveTVPlayerService.prototype, "isLiveTVPageRegistered", {
            get: function () {
                return !!this.liveTVPage;
            },
            enumerable: false,
            configurable: true
        });
        LiveTVPlayerService.prototype.setAutoMuted = function () {
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("setAutoMuted -> true'", LiveTVPlayerService_1.TAG)); });
            public_1.TVVolumeControlService.getInstance().setAutomuted();
            this.lastVolume = public_1.TVVolumeControlService.getInstance().setMute();
        };
        LiveTVPlayerService.prototype.getAutoMuted = function () {
            return public_1.TVVolumeControlService.getInstance().getAutomuted();
        };
        LiveTVPlayerService.prototype.unsetAutoMuted = function () {
            var _this = this;
            var wasAutomuted = public_1.TVVolumeControlService.getInstance().getAutomuted();
            public_1.TVVolumeControlService.getInstance().getVolumeStatus()
                .then(function (data) {
                if (wasAutomuted) {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("unsetAutoMuted'", LiveTVPlayerService_1.TAG)); });
                    if (data.isMuted) {
                        public_1.TVVolumeControlService.getInstance().setVolume(_this.lastVolume);
                    }
                    public_1.TVVolumeControlService.getInstance().resetAutoMuted();
                }
            });
        };
        LiveTVPlayerService.prototype.isBarkerContentTuned = function () {
            return this.barkerContentTuned;
        };
        LiveTVPlayerService.prototype.getCurrentRecordingIdEx = function (mediaPlayer) {
            if (mediaPlayer.DTExtensions.getPlayedContentType() === 3) {
                var url = public_4.MediaPlayerUtils.getUrl(mediaPlayer);
                return url;
            }
            return undefined;
        };
        LiveTVPlayerService.prototype.getCurrentRecordingId = function () {
            var _this = this;
            return this.mediaPlayerHostService
                .getMediaPlayerController()
                .then(function (mediaPlayer) {
                return _this.getCurrentRecordingIdEx(mediaPlayer);
            });
        };
        LiveTVPlayerService.prototype.getLastPlayedStream = function () {
            var _this = this;
            return this.mediaPlayerHostService
                .getMediaPlayerController()
                .then(function (mediaPlayer) {
                return _this.getLastPlayedStreamEx(mediaPlayer);
            });
        };
        LiveTVPlayerService.prototype.getLastPlayedStreamEx = function (mediaPlayer) {
            var _this = this;
            var channelId = public_2.ApplicationClient.channelManagement.getLastTunedChannelId();
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("getLastPlayedStream - channelId: '" + channelId + "'", LiveTVPlayerService_1.TAG)); });
            return public_2.ApplicationClient.channelManagement.getChannelByZosaId(channelId)
                .then(function (channel) {
                var selectedStreamId = public_4.MediaPlayerUtils.getProperty(mediaPlayer, "selectedStreamId", null);
                var url = public_4.MediaPlayerUtils.getUrl(mediaPlayer);
                var channelStream;
                if (channel === null || channel === void 0 ? void 0 : channel.streams) {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("getLastPlayedStream - channel: '" + channel.channelNumber + "' - '" + channel.title + "'", LiveTVPlayerService_1.TAG)); });
                    if ((_this.lastTuneFailedWithInsufficentBandwidth || _this.lastBarkerContentIsImage || (public_4.MediaPlayerUtils.getState(mediaPlayer) === mediaPlayer.PLAYERSTATE_ERROR)) && _this.getUserlastChoosenQuality()) {
                        var selectedStream = _this.getUserlastChoosenQuality();
                        var source = (selectedStream === null || selectedStream === void 0 ? void 0 : selectedStream.source) || undefined;
                        channelStream = public_2.ApplicationClient.channelManagement.getSpecificStream(channel, (selectedStream === null || selectedStream === void 0 ? void 0 : selectedStream.videoDefinition) ? selectedStream.videoDefinition : public_2.zosaStatic.VIDEO_DEFINITION_UNKNOWN, source);
                    }
                    if (!channelStream) {
                        channelStream = channel.streams.filter(function (stream) { return stream.zosaId == selectedStreamId; })[0];
                    }
                    if (!channelStream) {
                        channelStream = channel.streams.filter(function (stream) { return stream.zosaId == url; })[0];
                    }
                    if (!channelStream) {
                        var selectedStreamDefinition_1 = public_4.MediaPlayerUtils.getProperty(mediaPlayer, "selectedStreamDefinition", undefined);
                        var zosaVideoDefinition_1;
                        var playerState_1 = public_4.MediaPlayerUtils.getState(mediaPlayer);
                        var showWarning = (channel === null || channel === void 0 ? void 0 : channel.dtExtensions) && !channel.dtExtensions.isFunctionalChannel
                            && playerState_1 != mediaPlayer.PLAYERSTATE_CONNECTING
                            && mediaPlayer.error != public_2.ServiceClientContextZac.instance.zacAPI.INSUFFICIENT_RESOURCES
                            && mediaPlayer.error != public_2.ServiceClientContextZac.instance.zacAPI.PARENTAL_CONTROL_BLOCKED
                            && mediaPlayer.error != public_2.ServiceClientContextZac.instance.zacAPI.NOT_SUBSCRIBED
                            && mediaPlayer.error != public_2.ServiceClientContextZac.instance.zacAPI.INSUFFICIENT_BANDWIDTH;
                        if (public_3.Guard.isDefined(selectedStreamDefinition_1)) {
                            if (showWarning) {
                                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("getLastPlayedStream - using fallback case with videoDefinition '" + selectedStreamDefinition_1 + "' for channel-> " + channel.title + " type-> " + channel.dtExtensions.channelTransmissionType + " selectedStreamId-> " + selectedStreamId + " player error-> " + mediaPlayer.error + " player state-> " + playerState_1, LiveTVPlayerService_1.TAG)); });
                            }
                            zosaVideoDefinition_1 = _this.convertVideoDefinitonToZosa(selectedStreamDefinition_1);
                        }
                        else {
                            var bestAvailableVideoDefinition_1 = channel.dtExtensions.streamBestAvailableQuality ? channel.dtExtensions.streamBestAvailableQuality.videoDefinition : undefined;
                            if (showWarning) {
                                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("getLastPlayedStream - using fallback case with best available videoDefinition '" + (bestAvailableVideoDefinition_1 && _this.convertVideoDefinitonToString(bestAvailableVideoDefinition_1)) + "' for channel " + channel.title + " type " + channel.dtExtensions.channelTransmissionType + " selectedStreamId-> " + selectedStreamId + " player error-> " + mediaPlayer.error + " player state-> " + playerState_1, LiveTVPlayerService_1.TAG)); });
                            }
                            zosaVideoDefinition_1 = bestAvailableVideoDefinition_1 || public_2.zosaStatic.VIDEO_DEFINITION_UNKNOWN;
                        }
                        channelStream = channel.streams.filter(function (stream) { return (stream.videoDefinition == zosaVideoDefinition_1); })[0];
                    }
                }
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("getLastPlayedStream - stream: videoDefinition->'" + (channelStream ? channelStream.videoDefinition : "") + "' transmissionType->'" + (channelStream ? channelStream.transmissionType : "") + "'", LiveTVPlayerService_1.TAG)); });
                return { channelStream: channelStream, channel: channel };
            });
        };
        LiveTVPlayerService.prototype.getLiveTVPlayerState = function (mediaPlayer) {
            var playerState = {
                error: mediaPlayer.error,
                state: livetvplayer_service_interface_1.LiveTVPlayerStates.UNKNOWN,
                subReason: mediaPlayer.subReason
            };
            switch (public_4.MediaPlayerUtils.getState(mediaPlayer)) {
                case mediaPlayer.PLAYERSTATE_BUFFERING:
                    playerState.state = livetvplayer_service_interface_1.LiveTVPlayerStates.BUFFERING;
                    break;
                case mediaPlayer.PLAYERSTATE_CONNECTING:
                    playerState.state = livetvplayer_service_interface_1.LiveTVPlayerStates.CONNECTING;
                    break;
                case mediaPlayer.PLAYERSTATE_DISCONNECTED:
                    playerState.state = livetvplayer_service_interface_1.LiveTVPlayerStates.DISCONNECTED;
                    break;
                case mediaPlayer.PLAYERSTATE_ERROR:
                    playerState.state = livetvplayer_service_interface_1.LiveTVPlayerStates.ERROR;
                    break;
                case mediaPlayer.PLAYERSTATE_PLAYING:
                    playerState.state = livetvplayer_service_interface_1.LiveTVPlayerStates.PLAYING;
                    break;
            }
            return playerState;
        };
        LiveTVPlayerService.prototype.showChannelHistory = function () {
            if (this.liveTVPage) {
                this.liveTVPage.toggleChannelHistory();
            }
            return bluebird.resolve();
        };
        LiveTVPlayerService.prototype.isTeletextActive = function (player) {
            var teletextComponents = public_4.MediaPlayerUtils.getTeletextComponents(player);
            if (teletextComponents && teletextComponents.length > 0) {
                var teletextMode = public_2.ApplicationClient.appManagement.getTeletextMode();
                return teletextMode != "off";
            }
            return false;
        };
        LiveTVPlayerService.prototype.toggleTeletext = function () {
            var _this = this;
            return this.mediaPlayerHostService.getMediaPlayerController()
                .then(function (player) {
                if (_this.isContentBlocked(player))
                    return;
                var teletextComponents = public_4.MediaPlayerUtils.getTeletextComponents(player);
                if (teletextComponents && teletextComponents.length > 0) {
                    _this.hidePlayer();
                    _this.hideChannelHistory();
                    public_2.ApplicationClient.appManagement.toggleTeletext();
                }
            });
        };
        LiveTVPlayerService.prototype.isPlayedProgram = function (zosaId) {
            return this.getPlayedProgramId().then(function (playedProgramId) { return playedProgramId == zosaId; });
        };
        LiveTVPlayerService.prototype.getPlayedProgramIdEx = function (player) {
            var _this = this;
            public_3.Logger.verbose(function (log) { return log(public_3.LogMsg("getPlayedProgramId", LiveTVPlayerService_1.TAG)); });
            var programId = public_4.MediaPlayerUtils.getProperty(player, "currentProgramId", "");
            var errorStateUseFallbackEpg = this.barkerContentTuned || ((public_4.MediaPlayerUtils.getState(player) == player.PLAYERSTATE_ERROR) && !(player.error == public_2.ServiceClientContextZac.instance.zacAPI.PARENTAL_CONTROL_BLOCKED ||
                player.error == public_2.ServiceClientContextZac.instance.zacAPI.RESTRICTED_ACCESS));
            public_3.Logger.verbose(function (log) {
                log(public_3.LogMsg("programId -> '" + programId + "'", LiveTVPlayerService_1.TAG));
                log(public_3.LogMsg("barkerContentTuned -> '" + _this.barkerContentTuned + "'. If true, using fallback data.", LiveTVPlayerService_1.TAG));
                log(public_3.LogMsg("errorStateUseFallbackEpg -> '" + errorStateUseFallbackEpg + "'. If true, using fallback data.", LiveTVPlayerService_1.TAG));
            });
            if (!errorStateUseFallbackEpg) {
                if (programId && (programId.substr(0, 5) == "zosa:")) {
                    return bluebird.resolve(programId);
                }
                else if (programId && programId.indexOf(".") !== -1) {
                    var eventId_1 = this.extractEventId(programId);
                    return public_2.ApplicationClient.channelManagement.getLastTunedChannel()
                        .then(function (channel) {
                        if (eventId_1 == null || eventId_1 == 0) {
                            return public_2.ApplicationClient.programManagement
                                .getCurrentProgramAtEpg(channel).then(function (programItem) { return programItem ? programItem.zosaId : undefined; });
                        }
                        else {
                            var requestByEventid = {
                                channel: channel.zosaId,
                                dvbEventId: eventId_1 || undefined
                            };
                            return public_2.ApplicationClient.programManagement
                                .getPrograms(requestByEventid)
                                .then(function (programList) { return programList && programList.length > 0 ? programList[0].zosaId :
                                public_2.ApplicationClient.programManagement
                                    .getCurrentProgramAtEpg(channel).then(function (programItem) { return programItem ? programItem.zosaId : undefined; }); });
                        }
                    });
                }
            }
            if (player.DTExtensions.getPlayedContentType() == 1) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("getPlayedProgram fallback for instant restart delivers -> '" + _this.lastTunedInstantRestartProgramId + "'. Using fallback data.", LiveTVPlayerService_1.TAG)); });
                return bluebird.resolve(this.lastTunedInstantRestartProgramId);
            }
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("getPlayedProgram delivers -> '" + programId + "'. Using fallback data.", LiveTVPlayerService_1.TAG)); });
            return public_2.ApplicationClient.channelManagement
                .getLastTunedChannel()
                .then(function (lastTunedChannel) { return (!lastTunedChannel.dtExtensions.isFunctionalChannel) ?
                (public_2.ApplicationClient.programManagement
                    .getCurrentProgramAtEpg(lastTunedChannel)
                    .then(function (currentProgram) { return (currentProgram === null || currentProgram === void 0 ? void 0 : currentProgram.zosaId) || undefined; })) : undefined; });
        };
        LiveTVPlayerService.prototype.getPlayedProgramId = function () {
            var _this = this;
            return this.mediaPlayerHostService
                .getMediaPlayerController()
                .then(function (player) {
                return _this.getPlayedProgramIdEx(player);
            });
        };
        LiveTVPlayerService.prototype.getLastTunedInstantRestart = function () {
            return {
                lastTunedInstantRestartProgramId: this.lastTunedInstantRestartProgramId,
                lastTunedInstantRestartAtSameChannel: this.lastTunedInstantRestartAtSameChannel
            };
        };
        LiveTVPlayerService.prototype.setLastTunedInstantRestartAtSameChannel = function (lastTunedInstantRestartAtSameChannel) {
            this.lastTunedInstantRestartAtSameChannel = lastTunedInstantRestartAtSameChannel;
        };
        LiveTVPlayerService.prototype.isContentBlocked = function (player) {
            var playerState = public_4.MediaPlayerUtils.getState(player);
            public_3.Logger.debug(function (log) {
                log(public_3.LogMsg("isCurrentContentBlocked -> player.GetState(): '" + playerState + "'.", LiveTVPlayerService_1.TAG));
                log(public_3.LogMsg("isCurrentContentBlocked -> player.error: '" + player.error + "'.", LiveTVPlayerService_1.TAG));
                log(public_3.LogMsg("isCurrentContentBlocked -> player.subReason: '" + player.subReason + "'.", LiveTVPlayerService_1.TAG));
            });
            if (playerState == player.PLAYERSTATE_PLAYING) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("isCurrentContentBlocked -> is playing.", LiveTVPlayerService_1.TAG)); });
                return false;
            }
            if ((playerState == player.PLAYERSTATE_ERROR)) {
                if (player.error == public_2.ServiceClientContextZac.instance.zacAPI.PARENTAL_CONTROL_BLOCKED) {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("isCurrentContentBlocked -> PARENTAL_CONTROL_BLOCKED.", LiveTVPlayerService_1.TAG)); });
                    return true;
                }
                if ((player.error == public_2.ServiceClientContextZac.instance.zacAPI.RESTRICTED_ACCESS)
                    && (player.subReason == player.BLOCKREASON_SERVICELOCK_WHOLE_DAY)) {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("isCurrentContentBlocked -> RESTRICTED_ACCESS - BLOCKREASON_SERVICELOCK_WHOLE_DAY.", LiveTVPlayerService_1.TAG)); });
                    return true;
                }
                return false;
            }
            return undefined;
        };
        LiveTVPlayerService.prototype.getContentRight = function (programItem, stream, isCurrentPlayedProgram) {
            var _a, _b, _c, _d, _e, _f, _g;
            if (!programItem) {
                return {
                    instantRestartAvailable: false,
                    instantRestartPossible: false,
                    cPVRPossible: false,
                    isSubscribed: !!(stream === null || stream === void 0 ? void 0 : stream.dtExtensions.livePlayPossible),
                    isStreamSubscribed: !!(stream === null || stream === void 0 ? void 0 : stream.dtExtensions.livePlayPossible)
                };
            }
            var currentOrFuture = moment().isBefore(programItem.endTime);
            if (stream && isCurrentPlayedProgram) {
                var instantRestartOnAnyStream = (_a = programItem.dtExtensions.channel.streams) === null || _a === void 0 ? void 0 : _a.some(function (stream) { var _a; return (_a = stream === null || stream === void 0 ? void 0 : stream.dtExtensions) === null || _a === void 0 ? void 0 : _a.instantRestartAvailable; });
                var canReplay = stream.dtExtensions.isIPTVStream ? programItem.instantRestartSupported && stream.dtExtensions.instantRestartAvailable :
                    programItem.instantRestartSupported && instantRestartOnAnyStream;
                return {
                    instantRestartAvailable: !!(currentOrFuture && canReplay),
                    instantRestartPossible: !!(currentOrFuture && canReplay && moment().isAfter(programItem.startTime)),
                    cPVRPossible: currentOrFuture && stream.dtExtensions.cPVRPossible,
                    isSubscribed: !!((_b = programItem.dtExtensions.channel.streams) === null || _b === void 0 ? void 0 : _b.some(function (stream) { return !!(stream === null || stream === void 0 ? void 0 : stream.livePlayAllowed); })),
                    isStreamSubscribed: !!stream.dtExtensions.livePlayPossible
                };
            }
            else {
                if ((_c = programItem.dtExtensions.channel) === null || _c === void 0 ? void 0 : _c.dtExtensions.streamBestAvailableQuality) {
                    var maxStream = programItem.dtExtensions.channel.dtExtensions.streamBestAvailableQuality;
                    var instantRestartOnAnyStream = (_d = programItem.dtExtensions.channel.streams) === null || _d === void 0 ? void 0 : _d.some(function (stream) { var _a; return (_a = stream === null || stream === void 0 ? void 0 : stream.dtExtensions) === null || _a === void 0 ? void 0 : _a.instantRestartAvailable; });
                    var canReplay = programItem.instantRestartSupported && instantRestartOnAnyStream;
                    var cPVRPossible = (_e = programItem.dtExtensions.channel.streams) === null || _e === void 0 ? void 0 : _e.some(function (stream) { var _a; return (_a = stream === null || stream === void 0 ? void 0 : stream.dtExtensions) === null || _a === void 0 ? void 0 : _a.cPVRPossible; });
                    return {
                        instantRestartAvailable: currentOrFuture && canReplay ? true : false,
                        instantRestartPossible: currentOrFuture && canReplay && moment().isAfter(programItem.startTime) ? true : false,
                        cPVRPossible: cPVRPossible && currentOrFuture ? true : false,
                        isSubscribed: ((_g = (_f = programItem.dtExtensions.channel) === null || _f === void 0 ? void 0 : _f.streams) === null || _g === void 0 ? void 0 : _g.some(function (stream) { return stream.livePlayAllowed ? true : false; })) ? true : false,
                        isStreamSubscribed: (maxStream === null || maxStream === void 0 ? void 0 : maxStream.livePlayAllowed) ? true : false
                    };
                }
                else {
                    return {
                        instantRestartAvailable: false,
                        instantRestartPossible: false,
                        cPVRPossible: false,
                        isSubscribed: false,
                        isStreamSubscribed: false
                    };
                }
            }
        };
        LiveTVPlayerService.prototype.cleanUpPlayerUI = function () {
            if (this.liveTVPage) {
                this.liveTVPage.cleanUpPlayerUI();
            }
        };
        LiveTVPlayerService.prototype.hidePlayer = function () {
            if (this.liveTVPage) {
                this.liveTVPage.hidePlayer();
            }
        };
        LiveTVPlayerService.prototype.hideChannelHistory = function () {
            if (this.liveTVPage) {
                this.liveTVPage.hideChannelHistory();
            }
        };
        LiveTVPlayerService.prototype.instantRestart = function (programId) {
            var _this = this;
            var promisePlayer = this.mediaPlayerHostService.getMediaPlayerController();
            var promiseProgram = public_2.ApplicationClient.programManagement.getPrograms({ programs: [programId] });
            var promiseLastStream = this.getLastPlayedStream();
            return bluebird.allSettled([promisePlayer, promiseProgram, promiseLastStream])
                .then(function (data) {
                var mediaPlayer = data[0].isFulfilled() ? data[0].value() : null;
                var program = data[1].isFulfilled() ? data[1].value() : null;
                var lastStream = data[2].isFulfilled() ? data[2].value() : null;
                if (mediaPlayer && program) {
                    var programItem = program.getItem(programId);
                    if (programItem) {
                        public_2.ApplicationClient.channelManagement.setLastTunedChannelId(programItem.dtExtensions.channel.zosaId);
                    }
                    var props = {};
                    if ((lastStream === null || lastStream === void 0 ? void 0 : lastStream.channelStream) && lastStream.channel && programItem && lastStream.channel.zosaId == programItem.channelId) {
                        switch (lastStream.channelStream.videoDefinition) {
                            case public_2.zosaStatic.VIDEO_DEFINITION_UHD:
                                props.preferredStreamDefinition = public_2.ApplicationClient.settings.PREFERRED_STREAM_QUALITY_UHD;
                                break;
                            case public_2.zosaStatic.VIDEO_DEFINITION_HD:
                                props.preferredStreamDefinition = public_2.ApplicationClient.settings.PREFERRED_STREAM_QUALITY_HD;
                                break;
                            case public_2.zosaStatic.VIDEO_DEFINITION_SD:
                                props.preferredStreamDefinition = public_2.ApplicationClient.settings.PREFERRED_STREAM_QUALITY_SD;
                                break;
                        }
                        _this.setLastTunedInstantRestartAtSameChannel(true);
                    }
                    else {
                        _this.setLastTunedInstantRestartAtSameChannel(false);
                    }
                    props[mediaPlayer.PLAY_PROP_PACO_UAR_RULE] = mediaPlayer.PACO_UAR_SUPPRESS;
                    _this.lastTunedInstantRestartProgramId = programId;
                    _this.serviceIsStopped = false;
                    _this.barkerContentTuned = false;
                    _this.cleanUpPlayerUI();
                    mediaPlayer.DTExtensions.setPlayedContentType(1);
                    mediaPlayer.DTExtensions.playUrl(programId, 0, true, props);
                }
                return;
            });
        };
        LiveTVPlayerService.prototype.onMediaPlayerComponentsChanged = function (evtHandlerFunction) {
            return this.eventManager.on("MediaPlayerComponentsChanged", evtHandlerFunction, LiveTVPlayerService_1.TAG);
        };
        LiveTVPlayerService.prototype.onMediaPlayerEndOfStream = function (evtHandlerFunction) {
            return this.eventManager.on("MediaPlayerEndOfStream", evtHandlerFunction, LiveTVPlayerService_1.TAG);
        };
        LiveTVPlayerService.prototype.onMediaPlayerGotOwnership = function (evtHandlerFunction) {
            return this.eventManager.on("MediaPlayerGotOwnership", evtHandlerFunction, LiveTVPlayerService_1.TAG);
        };
        LiveTVPlayerService.prototype.onMediaPlayerLostOwnership = function (evtHandlerFunction) {
            return this.eventManager.on("MediaPlayerLostOwnership", evtHandlerFunction, LiveTVPlayerService_1.TAG);
        };
        LiveTVPlayerService.prototype.onMediaPlayerOutputBlockingStatusChanged = function (evtHandlerFunction) {
            return this.eventManager.on("MediaPlayerOutputBlockingStatusChanged", evtHandlerFunction, LiveTVPlayerService_1.TAG);
        };
        LiveTVPlayerService.prototype.onMediaPlayerOwnershipToSystem = function (evtHandlerFunction) {
            return this.eventManager.on("MediaPlayerOwnershipToSystem", evtHandlerFunction, LiveTVPlayerService_1.TAG);
        };
        LiveTVPlayerService.prototype.onMediaPlayerProgramChanged = function (evtHandlerFunction) {
            return this.eventManager.on("MediaPlayerProgramChanged", evtHandlerFunction, LiveTVPlayerService_1.TAG);
        };
        LiveTVPlayerService.prototype.onMediaPlayerStateChanged = function (evtHandlerFunction) {
            return this.eventManager.on("MediaPlayerStateChanged", evtHandlerFunction, LiveTVPlayerService_1.TAG);
        };
        LiveTVPlayerService.prototype.onMediaPlayerStatusChanged = function (evtHandlerFunction) {
            return this.eventManager.on("MediaPlayerStatusChanged", evtHandlerFunction, LiveTVPlayerService_1.TAG);
        };
        LiveTVPlayerService.prototype.checkTuneNewChannelRestriction = function () {
            var _this = this;
            var timeShiftThreshold = 10 * 1000;
            return this.mediaPlayerHostService
                .getMediaPlayerController()
                .then(function (player) {
                var contentType = player.DTExtensions.getPlayedContentType();
                var isInstantRestartAndNoFastForwardRights = contentType == 1 && !player.DTExtensions.allowTrickplayFastForward();
                if (public_4.MediaPlayerUtils.isTimeshifted(player) > timeShiftThreshold || isInstantRestartAndNoFastForwardRights) {
                    return public_1.TVDialogHostService.getInstance().showConfirmationDialog(isInstantRestartAndNoFastForwardRights ? public_5.messagesCore.STB_PL_TI012b : public_5.messagesCore.STB_PL_TI012, isInstantRestartAndNoFastForwardRights ? public_5.messagesCore.STB_PL_TI012c : public_5.messagesCore.STB_PL_TI012a, public_5.messagesCore.STB_PL_TI010, public_5.messagesCore.STB_PL_TI011);
                }
                else if (player.DTExtensions.getPlayedContentType() == 1) {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("checkTuneNewChannelRestriction for instant restart", LiveTVPlayerService_1.TAG)); });
                    var programId_1 = _this.lastTunedInstantRestartProgramId;
                    return public_2.ApplicationClient.programManagement
                        .getPrograms({ programs: programId_1 ? [programId_1] : [] })
                        .then(function (response) {
                        var program = response.getItem(programId_1);
                        if (program && ((program.endTime.valueOf() - Date.now()) < 0)) {
                            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("checkTuneNewChannelRestriction for instant restart: program is over", LiveTVPlayerService_1.TAG)); });
                            return public_1.TVDialogHostService.getInstance().showConfirmationDialog(public_5.messagesCore.STB_PL_TI008, public_5.messagesCore.STB_PL_TI009, public_5.messagesCore.STB_PL_TI010, public_5.messagesCore.STB_PL_TI011);
                        }
                        return true;
                    });
                }
                return true;
            });
        };
        LiveTVPlayerService.prototype.broadcastEvent = function (evtName, event, mediaPlayer) {
            var liveTVEvent = {
                event: event,
                target: mediaPlayer
            };
            this.eventManager.broadcast(evtName, liveTVEvent);
        };
        LiveTVPlayerService.prototype.registerEventOnMediaPlayerService = function (mediaPlayer, registeredEvents) {
            var _this = this;
            var _loop_1 = function (evtName) {
                if (!registeredEvents[evtName].closeable) {
                    var closeable_1 = this_1.mediaPlayerHostService.on(evtName, function (event) { _this.broadcastEvent(evtName, event, mediaPlayer); });
                    registeredEvents[evtName].closeable = function () {
                        try {
                            closeable_1();
                        }
                        catch (e) {
                            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("error - unregister event: " + evtName + " - " + e.message, LiveTVPlayerService_1.TAG)); });
                        }
                        finally {
                            registeredEvents[evtName].closeable = null;
                        }
                    };
                }
            };
            var this_1 = this;
            for (var evtName in registeredEvents) {
                _loop_1(evtName);
            }
        };
        LiveTVPlayerService.prototype.extractEventId = function (programId) {
            var splitted = programId.split(".");
            if (splitted.length > 1) {
                return parseInt(splitted[1], 16);
            }
            return null;
        };
        LiveTVPlayerService.prototype.muteSubTitle = function () {
            var _this = this;
            this.mediaPlayerHostService
                .getMediaPlayerController()
                .then(function (mediaPlayer) {
                mediaPlayer.AddSwitch(mediaPlayer.COMPONENT_SUBTITLING, false, _this.mediaPlayerHostService.getSubtitleMuteSwitch(), true);
            });
        };
        LiveTVPlayerService.prototype.unmuteSubTitle = function () {
            var _this = this;
            this.mediaPlayerHostService
                .getMediaPlayerController()
                .then(function (mediaPlayer) {
                mediaPlayer.RemoveSwitch(_this.mediaPlayerHostService.getSubtitleMuteSwitch());
            });
        };
        LiveTVPlayerService.prototype.convertVideoDefinitonToString = function (videoDefinition) {
            switch (videoDefinition) {
                case public_2.zosaStatic.VIDEO_DEFINITION_HD:
                    return "HD";
                case public_2.zosaStatic.VIDEO_DEFINITION_SD:
                    return "SD";
                case public_2.zosaStatic.VIDEO_DEFINITION_UHD:
                    return "UHD";
                default:
                    return "Unknown";
            }
        };
        LiveTVPlayerService.prototype.convertVideoDefinitonToZosa = function (videoDefinition) {
            if (!videoDefinition)
                return public_2.zosaStatic.VIDEO_DEFINITION_UNKNOWN;
            if (videoDefinition.toLowerCase() == "sd")
                return public_2.zosaStatic.VIDEO_DEFINITION_SD;
            if (videoDefinition.toLowerCase() == "hd")
                return public_2.zosaStatic.VIDEO_DEFINITION_HD;
            if (videoDefinition.toLowerCase() == "uhd")
                return public_2.zosaStatic.VIDEO_DEFINITION_UHD;
            return public_2.zosaStatic.VIDEO_DEFINITION_UNKNOWN;
        };
        LiveTVPlayerService.prototype.getUserlastChoosenQuality = function () {
            return this.userlastChoosenQuality;
        };
        var LiveTVPlayerService_1;
        LiveTVPlayerService.classID = 0x764;
        LiveTVPlayerService.endOfRecordingThresholdMs = 5000;
        LiveTVPlayerService = LiveTVPlayerService_1 = __decorate([
            public_3.logTag()
        ], LiveTVPlayerService);
        return LiveTVPlayerService;
    }(public_1.ReactBaseService));
    exports.LiveTVPlayerService = LiveTVPlayerService;
});
//# sourceMappingURL=livetvplayer.service.js.map