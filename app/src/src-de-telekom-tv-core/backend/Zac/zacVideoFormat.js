define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacVideoFormat = exports.VideoFormat = void 0;
    var VideoFormat;
    (function (VideoFormat) {
        VideoFormat[VideoFormat["VideoFormat_720p"] = 0] = "VideoFormat_720p";
        VideoFormat[VideoFormat["VideoFormat_1080i"] = 1] = "VideoFormat_1080i";
        VideoFormat[VideoFormat["VideoFormat_1080p"] = 2] = "VideoFormat_1080p";
        VideoFormat[VideoFormat["VideoFormat_2160p"] = 3] = "VideoFormat_2160p";
        VideoFormat[VideoFormat["NotSupportedByUi"] = 4] = "NotSupportedByUi";
    })(VideoFormat = exports.VideoFormat || (exports.VideoFormat = {}));
    var ZacVideoFormat = (function () {
        function ZacVideoFormat(zacVideoFormat) {
            this.height = zacVideoFormat.height;
            this.width = zacVideoFormat.width;
            this.progressive = zacVideoFormat.progressive;
            this.framerate = zacVideoFormat.framerate;
            this.uiVideoFormat = this.getExternalVideoFormat();
        }
        ZacVideoFormat.prototype.toString = function () {
            return this.width + "x" + this.height + (this.progressive ? "p" : "i") + this.framerate;
        };
        ZacVideoFormat.prototype.getLogMessage = function () {
            return this.toString() + " [height:" + this.height + ", width:" + this.width + ", progressive:" + this.progressive + ", framerate:" + this.framerate + "] " + (this.uiVideoFormat != VideoFormat.NotSupportedByUi ? VideoFormat[this.uiVideoFormat] : "") + " " + (this.height > this.width ? "WARNING: aspect ratio < 1 !" : "");
        };
        ZacVideoFormat.prototype.getExternalVideoFormat = function () {
            var isSupportedByUi = this.width > this.height;
            if (this.height == 720 && this.progressive && isSupportedByUi)
                return VideoFormat.VideoFormat_720p;
            if (this.height == 1080 && this.progressive && isSupportedByUi)
                return VideoFormat.VideoFormat_1080p;
            if (this.height == 1080 && !this.progressive && isSupportedByUi)
                return VideoFormat.VideoFormat_1080i;
            if (this.height == 2160 && this.progressive && isSupportedByUi)
                return VideoFormat.VideoFormat_2160p;
            return VideoFormat.NotSupportedByUi;
        };
        return ZacVideoFormat;
    }());
    exports.ZacVideoFormat = ZacVideoFormat;
});
//# sourceMappingURL=zacVideoFormat.js.map