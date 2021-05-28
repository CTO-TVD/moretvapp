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
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../backend/Zac/ServiceClientZac", "./applicationclient"], function (require, exports, bluebird, public_1, ServiceClientZac_1, applicationclient_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PlaybackHistory = void 0;
    var PlaybackHistory = (function () {
        function PlaybackHistory() {
        }
        PlaybackHistory_1 = PlaybackHistory;
        PlaybackHistory.addItem = function (id) {
            PlaybackHistory_1.getPlaybackHistory()
                .then(function () {
                if (PlaybackHistory_1.lastRegisteredItem && (PlaybackHistory_1.lastRegisteredItem.id === id)) {
                    clearTimeout(PlaybackHistory_1.debouncerPlaybackHistory);
                    var playbackHistoryData = PlaybackHistory_1.playbackHistory[PlaybackHistory_1.lastRegisteredItem.type] || [];
                    for (var i = playbackHistoryData.length; i--;) {
                        if (playbackHistoryData[i].id === PlaybackHistory_1.lastRegisteredItem.id) {
                            playbackHistoryData.splice(i, 1);
                        }
                    }
                    playbackHistoryData.unshift(PlaybackHistory_1.lastRegisteredItem);
                    PlaybackHistory_1.playbackHistory[PlaybackHistory_1.lastRegisteredItem.type] = playbackHistoryData.slice(0, 10);
                    PlaybackHistory_1.debouncerPlaybackHistory = setTimeout(function () {
                        ServiceClientZac_1.ServiceClientZac.writeItem(PlaybackHistory_1.ACTIVE_PLAYBACK_HISTORY_V2, JSON.stringify(PlaybackHistory_1.playbackHistory));
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("writeItem: " + JSON.stringify(PlaybackHistory_1.playbackHistory), PlaybackHistory_1.TAG)); });
                    }, PlaybackHistory_1.DEBOUNCE_TIME);
                }
            });
        };
        PlaybackHistory.getLastPlayedRecording = function (clearCustomData) {
            if (clearCustomData === void 0) { clearCustomData = false; }
            return PlaybackHistory_1
                .getPlaybackHistory([3])
                .then(function (data) {
                var result = __assign({}, data[0]);
                if (clearCustomData && data[0]) {
                    data[0].customData = undefined;
                }
                return result;
            });
        };
        PlaybackHistory.getPlaybackHistory = function (types) {
            return (PlaybackHistory_1.playbackHistory ? bluebird.resolve(PlaybackHistory_1.playbackHistory) :
                bluebird.all([
                    ServiceClientZac_1.ServiceClientZac.getUserStorageValue(PlaybackHistory_1.ACTIVE_PLAYBACK_HISTORY, "[]"),
                    ServiceClientZac_1.ServiceClientZac.getUserStorageValue(PlaybackHistory_1.ACTIVE_PLAYBACK_HISTORY_V2, "{}"),
                    ServiceClientZac_1.ServiceClientZac.getUserStorageValue(PlaybackHistory_1.LAST_PLAYED_RECORDING_ID, "")
                ])
                    .then(function (_a) {
                    var oldPlaybackHistory = _a[0], playbackHistory = _a[1], lastPlayedRecording = _a[2];
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getPlaybackHistory: load data from storage='" + playbackHistory + "'", PlaybackHistory_1.TAG)); });
                    var playbackHistoryData = JSON.parse(playbackHistory);
                    var oldPlaybackHistoryData = JSON.parse(oldPlaybackHistory);
                    if (!Array.isArray(oldPlaybackHistoryData)) {
                        ServiceClientZac_1.ServiceClientZac.writeItem(PlaybackHistory_1.ACTIVE_PLAYBACK_HISTORY, "[]");
                    }
                    else if (oldPlaybackHistoryData.length > 0) {
                        var newDate_1 = Date.now();
                        var newData_1 = {};
                        oldPlaybackHistoryData.forEach(function (item, index) {
                            if (public_1.Guard.isUndefined(newData_1[item.type])) {
                                newData_1[item.type] = [];
                            }
                            if (public_1.Guard.isUndefined(item.timestamp)) {
                                item.timestamp = newDate_1 - index;
                            }
                            newData_1[item.type].push(item);
                        });
                        if (lastPlayedRecording !== "") {
                            newData_1[3] = [{ id: lastPlayedRecording, timestamp: newDate_1, type: 3 }];
                        }
                        playbackHistoryData = newData_1;
                        ServiceClientZac_1.ServiceClientZac.writeItem(PlaybackHistory_1.ACTIVE_PLAYBACK_HISTORY, "[]");
                    }
                    PlaybackHistory_1.playbackHistory = playbackHistoryData;
                    return playbackHistoryData;
                }))
                .then(function (data) {
                var playbackHistoryItems = [];
                for (var type in data) {
                    if (data.hasOwnProperty(type)) {
                        if ((!public_1.Guard.isDefined(types)) || (types.indexOf(Number(type)) !== -1)) {
                            playbackHistoryItems.push.apply(playbackHistoryItems, data[type]);
                        }
                    }
                }
                return applicationclient_1.ApplicationClient.channelManagement.getCompleteChannelList()
                    .then(function (channels) {
                    var playBackHistoryUnsorted = playbackHistoryItems.filter(function (item) {
                        var channel = channels.getItem(item.id);
                        if (channel === null || channel === void 0 ? void 0 : channel.isHidden)
                            return false;
                        return true;
                    });
                    return playBackHistoryUnsorted.sort(function (a, b) { return b.timestamp - a.timestamp; });
                });
            });
        };
        PlaybackHistory.registerItem = function (id, type, customData) {
            PlaybackHistory_1.lastRegisteredItem = { id: id, type: type, customData: customData, timestamp: Date.now() };
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("registerItem: " + JSON.stringify(PlaybackHistory_1.lastRegisteredItem), PlaybackHistory_1.TAG)); });
        };
        var PlaybackHistory_1;
        PlaybackHistory.LAST_PLAYED_RECORDING_ID = "PlaybackHistory.lastPlayedRecordingId";
        PlaybackHistory.ACTIVE_PLAYBACK_HISTORY = "PlaybackHistory.activePlaybackHistory";
        PlaybackHistory.ACTIVE_PLAYBACK_HISTORY_V2 = "PlaybackHistory.activePlaybackHistory.v2";
        PlaybackHistory.DEBOUNCE_TIME = 5000;
        __decorate([
            public_1.log2(function () { return ({ name: PlaybackHistory_1.TAG }); })
        ], PlaybackHistory, "addItem", null);
        __decorate([
            public_1.log2(function () { return ({ name: PlaybackHistory_1.TAG }); })
        ], PlaybackHistory, "getPlaybackHistory", null);
        PlaybackHistory = PlaybackHistory_1 = __decorate([
            public_1.logTag()
        ], PlaybackHistory);
        return PlaybackHistory;
    }());
    exports.PlaybackHistory = PlaybackHistory;
});
//# sourceMappingURL=applicationclient.playbackhistory.js.map