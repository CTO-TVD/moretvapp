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
define(["require", "exports", "rxjs", "rxjs/operators", "src/src-de-telekom/public", "../../base/public", "../../framework/public", "../../service/keyeventmanager/public", "./volumecontrol.mock"], function (require, exports, rxjs_1, operators_1, public_1, public_2, public_3, public_4, volumecontrol_mock_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVVolumeControlService = void 0;
    var TVVolumeControlService = (function (_super) {
        __extends(TVVolumeControlService, _super);
        function TVVolumeControlService() {
            var _this = _super.call(this) || this;
            _this.maximumValue = 30;
            _this.defaultValue = 15;
            _this.layerKey = "volumeLayer";
            _this.autoCloseWaitingMs = 2000;
            _this.wasAutomuted = false;
            var clickEvents = new rxjs_1.Subject();
            clickEvents.pipe(public_4.longPressOperator(), operators_1.tap(function (item) { return _this.onKey(item); })).subscribe();
            public_4.TVKeyEventManagerService.getInstance()
                .onAfter(function (args) { return public_1.Feature.has(public_1.FeatureItems.longpress, public_1.FeatureRights.viewItems)
                && (args.virtualKey === public_4.TVKeyCodeConfig.KEYEVENT_UP_KEY || args.virtualKey === public_4.TVKeyCodeConfig.VOLUME_DOWN_KEY)
                ? clickEvents.next(args)
                : _this.onKey(args); }, TVVolumeControlService_1.TAG);
            _this.layerService = public_3.TVLayerManagerService.getInstance();
            _this.volumeControl = new volumecontrol_mock_1.TVVolumeControlMock();
            return _this;
        }
        TVVolumeControlService_1 = TVVolumeControlService;
        TVVolumeControlService.prototype.inject = function (volumeControl, autoCloseWaitingMs) {
            this.volumeControl = volumeControl;
            if (autoCloseWaitingMs) {
                this.autoCloseWaitingMs = autoCloseWaitingMs;
            }
        };
        TVVolumeControlService.prototype.setMute = function () {
            var volumeData = this.volumeControl.getVolumeInfo();
            this.volumeControl.setMute();
            return volumeData.volume;
        };
        TVVolumeControlService.prototype.setLastVolume = function () {
            this.volumeControl.setLastVolume();
        };
        TVVolumeControlService.prototype.getVolumeStatus = function () {
            var _this = this;
            return this.volumeControl
                .useAudioMultichannel()
                .then(function (useMultiChannel) {
                return __assign(__assign({}, _this.volumeControl.getVolumeInfo()), { useMultiChannel: useMultiChannel });
            });
        };
        TVVolumeControlService.prototype.getVolumeData = function () {
            var volumeData = this.volumeControl.getVolumeInfo();
            this.layerService.show(this.layerKey, volumeData);
        };
        TVVolumeControlService.prototype.setVolume = function (volume) {
            this.volumeControl.setVolume(volume);
        };
        TVVolumeControlService.prototype.resetAutoMuted = function () {
            this.wasAutomuted = false;
        };
        TVVolumeControlService.prototype.setAutomuted = function () {
            this.wasAutomuted = true;
        };
        TVVolumeControlService.prototype.getAutomuted = function () {
            return this.wasAutomuted;
        };
        TVVolumeControlService.prototype.setValue = function (volume, volumeMode) {
            var _this = this;
            if (volumeMode === void 0) { volumeMode = "fixed"; }
            this.resetAutoMuted();
            this.autoClose();
            this.volumeControl
                .useAudioMultichannel()
                .then(function (useMultiChannel) {
                var volumeData = _this.volumeControl.getVolumeInfo();
                var newValue = (volumeMode === "fixed")
                    ? volume
                    : (useMultiChannel
                        ? ((volume <= 0)
                            ? 0
                            : _this.maximumValue)
                        : volumeData.volume + volume);
                newValue = Math.max(0, Math.min(newValue, _this.maximumValue));
                if (useMultiChannel) {
                    volumeData = (newValue === 0) ? _this.volumeControl.setMute() : _this.volumeControl.setVolume(_this.maximumValue);
                }
                else {
                    volumeData = _this.volumeControl.setVolume(newValue);
                }
                _this.layerService.show(_this.layerKey, volumeData);
            });
        };
        TVVolumeControlService.prototype.onKey = function (key) {
            switch (key.virtualKey) {
                case public_4.TVKeyCodeConfig.SILENT_KEY:
                    this.resetAutoMuted();
                    this.setMuteVolume();
                    return true;
                case public_4.TVKeyCodeConfig.UNSILENT_KEY:
                    this.resetAutoMuted();
                    this.restoreVolume();
                    return true;
                case public_4.TVKeyCodeConfig.MUTE_KEY:
                    this.resetAutoMuted();
                    this.toogleMuteVolume();
                    return true;
                case public_4.TVKeyCodeConfig.VOLUME_UP_KEY:
                    this.resetAutoMuted();
                    this.increaseVolume();
                    return true;
                case public_4.TVKeyCodeConfig.VOLUME_DOWN_KEY:
                    this.resetAutoMuted();
                    if (key.longpress) {
                        this.setMuteVolume();
                    }
                    else {
                        this.decreaseVolume();
                    }
                    return true;
            }
            return false;
        };
        TVVolumeControlService.prototype.setMuteVolume = function () {
            var volumeData = this.volumeControl.setMute();
            this.layerService.show(this.layerKey, volumeData);
            this.autoClose();
            return true;
        };
        TVVolumeControlService.prototype.toogleMuteVolume = function () {
            var volumeData = this.volumeControl.toogleMute();
            this.layerService.show(this.layerKey, volumeData);
            this.autoClose();
            return true;
        };
        TVVolumeControlService.prototype.restoreVolume = function () {
            var _this = this;
            this.autoClose();
            this.volumeControl
                .useAudioMultichannel()
                .then(function (useMultiChannel) {
                var volumeData = _this.volumeControl.getVolumeInfo();
                if (volumeData.isMuted) {
                    volumeData = useMultiChannel ? _this.volumeControl.setVolume(_this.maximumValue) : _this.volumeControl.setLastVolume();
                }
                _this.layerService.show(_this.layerKey, volumeData);
            });
            return true;
        };
        TVVolumeControlService.prototype.increaseVolume = function () {
            var _this = this;
            this.autoClose();
            this.volumeControl
                .useAudioMultichannel()
                .then(function (useMultiChannel) {
                var volumeData = useMultiChannel ? _this.volumeControl.setVolume(_this.maximumValue) : _this.volumeControl.increaseVolume();
                _this.layerService.show(_this.layerKey, volumeData);
            });
            return true;
        };
        TVVolumeControlService.prototype.decreaseVolume = function () {
            var _this = this;
            this.autoClose();
            this.volumeControl
                .useAudioMultichannel()
                .then(function (useMultiChannel) {
                var volumeData = useMultiChannel ? _this.volumeControl.setMute() : _this.volumeControl.decreaseVolume();
                _this.layerService.show(_this.layerKey, volumeData);
            });
            return true;
        };
        TVVolumeControlService.prototype.autoClose = function () {
            var _this = this;
            clearTimeout(this.autoCloseHandler);
            this.autoCloseHandler = setTimeout(function () {
                _this.layerService.hide(_this.layerKey);
            }, this.autoCloseWaitingMs);
        };
        var TVVolumeControlService_1;
        TVVolumeControlService = TVVolumeControlService_1 = __decorate([
            public_1.logTag()
        ], TVVolumeControlService);
        return TVVolumeControlService;
    }(public_2.ReactBaseService));
    exports.TVVolumeControlService = TVVolumeControlService;
});
//# sourceMappingURL=volumecontrol.service.js.map