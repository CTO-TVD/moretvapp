define(["require", "exports", "bluebird"], function (require, exports, bluebird) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVVolumeControlMock = void 0;
    var TVVolumeControlMock = (function () {
        function TVVolumeControlMock() {
            this.data = { isMuted: false, volume: 10 };
        }
        TVVolumeControlMock.prototype.getVolumeInfo = function () {
            return this.data;
        };
        TVVolumeControlMock.prototype.toogleMute = function () {
            return this.data;
        };
        TVVolumeControlMock.prototype.setVolume = function (volume) {
            return this.data;
        };
        TVVolumeControlMock.prototype.increaseVolume = function () {
            if (this.data.volume < 30)
                this.data.volume++;
            return this.data;
        };
        TVVolumeControlMock.prototype.decreaseVolume = function () {
            if (this.data.volume > 0)
                this.data.volume--;
            return this.data;
        };
        TVVolumeControlMock.prototype.setMute = function () {
            return this.data;
        };
        TVVolumeControlMock.prototype.setLastVolume = function () {
            return this.data;
        };
        TVVolumeControlMock.prototype.useAudioMultichannel = function () {
            return bluebird.resolve(false);
        };
        return TVVolumeControlMock;
    }());
    exports.TVVolumeControlMock = TVVolumeControlMock;
});
//# sourceMappingURL=volumecontrol.mock.js.map