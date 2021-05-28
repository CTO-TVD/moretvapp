define(["require", "exports", "../backend/public", "./applicationclient"], function (require, exports, public_1, applicationclient_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VolumeControl = void 0;
    var VolumeControl = (function () {
        function VolumeControl() {
        }
        VolumeControl.convertVolumeToUI = function (volume) {
            return Math.floor(volume / 10) * 3 + Math.floor((volume % 10) / 3);
        };
        VolumeControl.convertVolumeToZac = function (volumeUI) {
            return Math.floor(volumeUI / 3) * 10 + (volumeUI % 3) * 3;
        };
        VolumeControl.getMute = function () {
            var settings = public_1.ServiceClientZac.getSettings(public_1.ServiceClientContextZac.instance);
            return settings.object.Get(settings.object.KEY_MASTER_MUTE);
        };
        VolumeControl.getVolume = function () {
            var settings = public_1.ServiceClientZac.getSettings(public_1.ServiceClientContextZac.instance);
            return settings.object.Get(settings.object.KEY_MASTER_VOLUME);
        };
        VolumeControl.setVolumeMute = function (mute) {
            var settings = public_1.ServiceClientZac.getSettings(public_1.ServiceClientContextZac.instance);
            settings.object.Set(settings.object.KEY_MASTER_MUTE, mute);
        };
        VolumeControl.setNewVolume = function (volume) {
            if (volume > 100) {
                volume = 100;
            }
            if (volume < 0) {
                volume = 0;
            }
            var settings = public_1.ServiceClientZac.getSettings(public_1.ServiceClientContextZac.instance);
            settings.object.Set(settings.object.KEY_MASTER_VOLUME, volume);
        };
        VolumeControl.decreaseVolume = function () {
            var currentVolume = this.convertVolumeToUI(this.getVolume());
            if (currentVolume <= 0) {
                return this.getVolumeInfo();
            }
            this.setVolumeMute(false);
            var volume = currentVolume - 1;
            this.setNewVolume(this.convertVolumeToZac(volume));
            if (volume <= 0) {
                this.setVolumeMute(true);
            }
            return this.getVolumeInfo();
        };
        VolumeControl.getVolumeInfo = function () {
            return {
                volume: this.convertVolumeToUI(this.getVolume()),
                isMuted: this.getMute()
            };
        };
        VolumeControl.setVolume = function (volume) {
            this.setVolumeMute(false);
            this.setNewVolume(this.convertVolumeToZac(volume));
            return this.getVolumeInfo();
        };
        VolumeControl.setMute = function () {
            this.setVolumeMute(true);
            return this.getVolumeInfo();
        };
        VolumeControl.increaseVolume = function () {
            this.setVolumeMute(false);
            var currentVolume = this.convertVolumeToUI(this.getVolume());
            if (currentVolume < 30) {
                var volume = currentVolume + 1;
                this.setNewVolume(this.convertVolumeToZac(volume));
            }
            return this.getVolumeInfo();
        };
        VolumeControl.toogleMute = function () {
            this.setVolumeMute(!this.getMute());
            return this.getVolumeInfo();
        };
        VolumeControl.setLastVolume = function () {
            var volumeData = this.getVolumeInfo();
            if (volumeData === null || volumeData === void 0 ? void 0 : volumeData.isMuted) {
                this.toogleMute();
            }
            return this.getVolumeInfo();
        };
        VolumeControl.useAudioMultichannel = function () {
            return applicationclient_1.ApplicationClient.settings.useAudioMultichannel().catch(function () { return false; });
        };
        return VolumeControl;
    }());
    exports.VolumeControl = VolumeControl;
});
//# sourceMappingURL=applicationclient.volumecontrol.js.map