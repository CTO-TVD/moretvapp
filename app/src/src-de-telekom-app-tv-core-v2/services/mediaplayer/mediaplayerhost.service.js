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
define(["require", "exports", "src/src-de-telekom/public", "src/src-de-telekom-react/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVMediaPlayerHostService = void 0;
    var TVMediaPlayerHostService = (function (_super) {
        __extends(TVMediaPlayerHostService, _super);
        function TVMediaPlayerHostService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.subtitleMuteSwitch = "subtitleMuteSwitch";
            _this.deferMainPlayer = public_1.Defer.defer();
            _this.deferPipPlayer = public_1.Defer.defer();
            _this.eventManager = new public_1.EventManager();
            return _this;
        }
        TVMediaPlayerHostService_1 = TVMediaPlayerHostService;
        TVMediaPlayerHostService.prototype.getMediaPlayerController = function () {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getMediaPlayerController", TVMediaPlayerHostService_1.TAG)); });
            return this.deferMainPlayer.promise;
        };
        TVMediaPlayerHostService.prototype.getPiPMediaPlayerController = function () {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getPiPMediaPlayerController", TVMediaPlayerHostService_1.TAG)); });
            return this.deferPipPlayer.promise;
        };
        TVMediaPlayerHostService.prototype.getSubtitleMuteSwitch = function () {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getSubtitleMuteSwitch", TVMediaPlayerHostService_1.TAG)); });
            return this.subtitleMuteSwitch;
        };
        TVMediaPlayerHostService.prototype.on = function (evtName, evtHandlerFunction) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("on: " + evtName, TVMediaPlayerHostService_1.TAG)); });
            var closeable = this.eventManager.on(evtName, evtHandlerFunction, TVMediaPlayerHostService_1.TAG);
            return function () {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("ICloseable 'on' called: " + evtName, TVMediaPlayerHostService_1.TAG)); });
                closeable();
            };
        };
        TVMediaPlayerHostService.prototype.registerMainPlayerComponent = function (mediaPlayer) {
            var _this = this;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("registerMainPlayerComponent", TVMediaPlayerHostService_1.TAG)); });
            var registeredEvents = {
                MediaPlayerComponentsChanged: {},
                MediaPlayerEndOfStream: {},
                MediaPlayerGotOwnership: {},
                MediaPlayerLostOwnership: {},
                MediaPlayerOutputBlockingStatusChanged: {},
                MediaPlayerOwnershipToSystem: {},
                MediaPlayerProgramChanged: {},
                MediaPlayerStateChanged: {},
                MediaPlayerStatusChanged: {}
            };
            this.registerEventOnController(mediaPlayer, registeredEvents);
            this.deferMainPlayer.resolve(mediaPlayer);
            return function () {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("ICloseable 'registerMainPlayerComponent' called", TVMediaPlayerHostService_1.TAG)); });
                _this.deferMainPlayer = public_1.Defer.defer();
                for (var evtName in registeredEvents) {
                    if (registeredEvents[evtName].closeable) {
                        registeredEvents[evtName].closeable();
                    }
                }
            };
        };
        TVMediaPlayerHostService.prototype.registerPipPlayerComponent = function (mediaPlayer) {
            var _this = this;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("registerPipPlayerComponent", TVMediaPlayerHostService_1.TAG)); });
            this.deferPipPlayer.resolve(mediaPlayer);
            return function () {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("ICloseable 'registerPipPlayerComponent' called", TVMediaPlayerHostService_1.TAG)); });
                _this.deferPipPlayer = public_1.Defer.defer();
            };
        };
        TVMediaPlayerHostService.prototype.broadcastEvent = function (evtName, event) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("broadcast event: " + evtName + " with data: " + JSON.stringify(event), TVMediaPlayerHostService_1.TAG)); });
            this.eventManager.broadcast(evtName, event);
        };
        TVMediaPlayerHostService.createClosableEvent = function (obj, evtName, evtHandlerFunction) {
            var eventId = obj.registerEventListener(evtName, function (innerEvent) { return evtHandlerFunction(innerEvent); });
            return function () { return obj.unregisterEventListener(evtName, eventId); };
        };
        TVMediaPlayerHostService.prototype.registerEventOnController = function (controller, registeredEvents) {
            var _this = this;
            var _loop_1 = function (evtName) {
                if (!registeredEvents[evtName].closeable) {
                    var funcClosable_1 = TVMediaPlayerHostService_1.createClosableEvent(controller, evtName, function (event) { _this.broadcastEvent(evtName, event); });
                    registeredEvents[evtName].closeable = function () {
                        funcClosable_1();
                        registeredEvents[evtName].closeable = null;
                    };
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("register event: " + evtName, TVMediaPlayerHostService_1.TAG)); });
                }
            };
            for (var evtName in registeredEvents) {
                _loop_1(evtName);
            }
        };
        var TVMediaPlayerHostService_1;
        TVMediaPlayerHostService = TVMediaPlayerHostService_1 = __decorate([
            public_1.logTag()
        ], TVMediaPlayerHostService);
        return TVMediaPlayerHostService;
    }(public_2.ReactBaseService));
    exports.TVMediaPlayerHostService = TVMediaPlayerHostService;
});
//# sourceMappingURL=mediaplayerhost.service.js.map