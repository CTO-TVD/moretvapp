define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LiveTVPlayerStates = exports.PlayerAction = exports.ProgressBarIndicatorState = exports.PlayerVisibiltyMode = exports.PlayerTrigger = void 0;
    var PlayerTrigger;
    (function (PlayerTrigger) {
        PlayerTrigger[PlayerTrigger["TRIGGER_CHANNEL_TUNE"] = 0] = "TRIGGER_CHANNEL_TUNE";
        PlayerTrigger[PlayerTrigger["TRIGGER_RECORDING_TUNE"] = 1] = "TRIGGER_RECORDING_TUNE";
        PlayerTrigger[PlayerTrigger["TRIGGER_USER_REQUEST_MAXI"] = 2] = "TRIGGER_USER_REQUEST_MAXI";
        PlayerTrigger[PlayerTrigger["TRIGGER_USER_REQUEST_MINI"] = 3] = "TRIGGER_USER_REQUEST_MINI";
        PlayerTrigger[PlayerTrigger["TRIGGER_STREAM_CONFLICT"] = 4] = "TRIGGER_STREAM_CONFLICT";
        PlayerTrigger[PlayerTrigger["TRIGGER_BLOCKING_STATUS_CHANGED"] = 5] = "TRIGGER_BLOCKING_STATUS_CHANGED";
        PlayerTrigger[PlayerTrigger["TRIGGER_REFRESH_PLAYER_STATUS"] = 6] = "TRIGGER_REFRESH_PLAYER_STATUS";
        PlayerTrigger[PlayerTrigger["TRIGGER_PAUSEPLAY_KEY"] = 7] = "TRIGGER_PAUSEPLAY_KEY";
        PlayerTrigger[PlayerTrigger["TRIGGER_PLAY_KEY"] = 8] = "TRIGGER_PLAY_KEY";
        PlayerTrigger[PlayerTrigger["TRIGGER_PAUSE_KEY"] = 9] = "TRIGGER_PAUSE_KEY";
        PlayerTrigger[PlayerTrigger["TRIGGER_SKIP_FBWD_KEY"] = 10] = "TRIGGER_SKIP_FBWD_KEY";
        PlayerTrigger[PlayerTrigger["TRIGGER_SKIP_FFWD_KEY"] = 11] = "TRIGGER_SKIP_FFWD_KEY";
        PlayerTrigger[PlayerTrigger["TRIGGER_FBWD_KEY"] = 12] = "TRIGGER_FBWD_KEY";
        PlayerTrigger[PlayerTrigger["TRIGGER_FFWD_KEY"] = 13] = "TRIGGER_FFWD_KEY";
        PlayerTrigger[PlayerTrigger["TRIGGER_FFWD_NORMALSPEED_KEY"] = 14] = "TRIGGER_FFWD_NORMALSPEED_KEY";
        PlayerTrigger[PlayerTrigger["TRIGGER_FFWD_FASTSPEED_KEY"] = 15] = "TRIGGER_FFWD_FASTSPEED_KEY";
        PlayerTrigger[PlayerTrigger["TRIGGER_FBWD_NORMALSPEED_KEY"] = 16] = "TRIGGER_FBWD_NORMALSPEED_KEY";
        PlayerTrigger[PlayerTrigger["TRIGGER_FBWD_FASTSPEED_KEY"] = 17] = "TRIGGER_FBWD_FASTSPEED_KEY";
        PlayerTrigger[PlayerTrigger["TRIGGER_UP_KEY"] = 18] = "TRIGGER_UP_KEY";
        PlayerTrigger[PlayerTrigger["TRIGGER_DOWN_KEY"] = 19] = "TRIGGER_DOWN_KEY";
        PlayerTrigger[PlayerTrigger["TRIGGER_HIDE"] = 20] = "TRIGGER_HIDE";
    })(PlayerTrigger = exports.PlayerTrigger || (exports.PlayerTrigger = {}));
    var PlayerVisibiltyMode;
    (function (PlayerVisibiltyMode) {
        PlayerVisibiltyMode[PlayerVisibiltyMode["PLAYER_HIDDEN"] = 0] = "PLAYER_HIDDEN";
        PlayerVisibiltyMode[PlayerVisibiltyMode["PLAYER_MINIMAL"] = 1] = "PLAYER_MINIMAL";
        PlayerVisibiltyMode[PlayerVisibiltyMode["PLAYER_MINIMAL_EXTENDED"] = 2] = "PLAYER_MINIMAL_EXTENDED";
        PlayerVisibiltyMode[PlayerVisibiltyMode["PLAYER_MAXIMAL_WITH_ACTIONS"] = 3] = "PLAYER_MAXIMAL_WITH_ACTIONS";
        PlayerVisibiltyMode[PlayerVisibiltyMode["PLAYER_MAXIMAL_WITHOUT_ACTIONS"] = 4] = "PLAYER_MAXIMAL_WITHOUT_ACTIONS";
    })(PlayerVisibiltyMode = exports.PlayerVisibiltyMode || (exports.PlayerVisibiltyMode = {}));
    var ProgressBarIndicatorState;
    (function (ProgressBarIndicatorState) {
        ProgressBarIndicatorState[ProgressBarIndicatorState["PROGRESSBAR_INDICATOR_STATE_FASTBACKWARD"] = -2] = "PROGRESSBAR_INDICATOR_STATE_FASTBACKWARD";
        ProgressBarIndicatorState[ProgressBarIndicatorState["PROGRESSBAR_INDICATOR_STATE_SKIPBACKWARD"] = -1] = "PROGRESSBAR_INDICATOR_STATE_SKIPBACKWARD";
        ProgressBarIndicatorState[ProgressBarIndicatorState["PROGRESSBAR_INDICATOR_STATE_FASTFORWARD"] = 2] = "PROGRESSBAR_INDICATOR_STATE_FASTFORWARD";
        ProgressBarIndicatorState[ProgressBarIndicatorState["PROGRESSBAR_INDICATOR_STATE_STANDARD"] = 0] = "PROGRESSBAR_INDICATOR_STATE_STANDARD";
        ProgressBarIndicatorState[ProgressBarIndicatorState["PROGRESSBAR_INDICATOR_STATE_SKIPFORWARD"] = 1] = "PROGRESSBAR_INDICATOR_STATE_SKIPFORWARD";
        ProgressBarIndicatorState[ProgressBarIndicatorState["PROGRESSBAR_INDICATOR_STATE_TOLIVETV"] = 3] = "PROGRESSBAR_INDICATOR_STATE_TOLIVETV";
    })(ProgressBarIndicatorState = exports.ProgressBarIndicatorState || (exports.ProgressBarIndicatorState = {}));
    var PlayerAction;
    (function (PlayerAction) {
        PlayerAction[PlayerAction["PLAYER_ACTION_TUNE"] = 0] = "PLAYER_ACTION_TUNE";
        PlayerAction[PlayerAction["PLAYER_ACTION_ENTER_NUMBER"] = 1] = "PLAYER_ACTION_ENTER_NUMBER";
        PlayerAction[PlayerAction["PLAYER_ACTION_PAUSEPLAY"] = 2] = "PLAYER_ACTION_PAUSEPLAY";
        PlayerAction[PlayerAction["PLAYER_ACTION_PLAY"] = 3] = "PLAYER_ACTION_PLAY";
        PlayerAction[PlayerAction["PLAYER_ACTION_PAUSE"] = 4] = "PLAYER_ACTION_PAUSE";
        PlayerAction[PlayerAction["PLAYER_ACTION_TRICKPLAYKEYS"] = 5] = "PLAYER_ACTION_TRICKPLAYKEYS";
        PlayerAction[PlayerAction["PLAYER_ACTION_POSTROLL"] = 6] = "PLAYER_ACTION_POSTROLL";
        PlayerAction[PlayerAction["PLAYER_ACTION_USERREQUEST_MINI"] = 7] = "PLAYER_ACTION_USERREQUEST_MINI";
        PlayerAction[PlayerAction["PLAYER_ACTION_USERREQUEST_MAXI"] = 8] = "PLAYER_ACTION_USERREQUEST_MAXI";
        PlayerAction[PlayerAction["PLAYER_ACTION_ERROR"] = 9] = "PLAYER_ACTION_ERROR";
    })(PlayerAction = exports.PlayerAction || (exports.PlayerAction = {}));
    var LiveTVPlayerStates;
    (function (LiveTVPlayerStates) {
        LiveTVPlayerStates[LiveTVPlayerStates["UNKNOWN"] = 0] = "UNKNOWN";
        LiveTVPlayerStates[LiveTVPlayerStates["DISCONNECTED"] = 1] = "DISCONNECTED";
        LiveTVPlayerStates[LiveTVPlayerStates["CONNECTING"] = 2] = "CONNECTING";
        LiveTVPlayerStates[LiveTVPlayerStates["BUFFERING"] = 3] = "BUFFERING";
        LiveTVPlayerStates[LiveTVPlayerStates["PLAYING"] = 4] = "PLAYING";
        LiveTVPlayerStates[LiveTVPlayerStates["ERROR"] = 5] = "ERROR";
    })(LiveTVPlayerStates = exports.LiveTVPlayerStates || (exports.LiveTVPlayerStates = {}));
});
//# sourceMappingURL=livetvplayer.service.interface.js.map