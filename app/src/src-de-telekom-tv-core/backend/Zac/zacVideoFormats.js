define(["require", "exports", "src/src-de-telekom/public", "./zacVideoFormat"], function (require, exports, public_1, zacVideoFormat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacVideoFormats = void 0;
    var ZacVideoFormats = (function () {
        function ZacVideoFormats(zacVideoFormatsDictionary) {
            this.zacVideoFormats = [];
            this.PreferedWidths = { 2160: [3840, 4096] };
            this.PreferedFramerates = [50000, 60000];
            for (var formatString in zacVideoFormatsDictionary) {
                this.zacVideoFormats.push(zacVideoFormatsDictionary[formatString]);
            }
        }
        ZacVideoFormats.prototype.getPreferedValue = function (valueDesc, preFiltered, getPreferedValuesListFunc, sortFunc, getValueFunc) {
            var preferedValues = getPreferedValuesListFunc();
            if (preferedValues != null) {
                var _loop_1 = function (preferedValue) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Looking for ZacVideoFormats with prefered " + valueDesc + " " + preferedValue + ".", ZacVideoFormats.TAG)); });
                    if (preFiltered.some(function (format) { return getValueFunc(format) == preferedValue; })) {
                        return { value: getValueFunc(preFiltered.filter(function (format) { return getValueFunc(format) == preferedValue; })[0]) };
                    }
                };
                for (var _i = 0, preferedValues_1 = preferedValues; _i < preferedValues_1.length; _i++) {
                    var preferedValue = preferedValues_1[_i];
                    var state_1 = _loop_1(preferedValue);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
            }
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Return max prefered " + valueDesc + " for ZacVideoFormats", ZacVideoFormats.TAG)); });
            return getValueFunc(preFiltered.sort(sortFunc)[0]);
        };
        ZacVideoFormats.prototype.getPreferedWidth = function (preFiltered, height) {
            var _this = this;
            return this.getPreferedValue("width", preFiltered, function () { return _this.PreferedWidths[height]; }, function (videoFormat1, videoFormat2) { return videoFormat1.width == videoFormat2.width ? 0 : (videoFormat1.width < videoFormat2.width ? 1 : -1); }, function (videoFormat) { return videoFormat.width; });
        };
        ZacVideoFormats.prototype.getPreferedFramerate = function (preFiltered) {
            var _this = this;
            return this.getPreferedValue("framerate", preFiltered, function () { return _this.PreferedFramerates; }, function (videoFormat1, videoFormat2) { return videoFormat1.framerate == videoFormat2.framerate ? 0 : (videoFormat1.framerate < videoFormat2.framerate ? 1 : -1); }, function (videoFormat) { return videoFormat.framerate; });
        };
        ZacVideoFormats.prototype.SelectFromParameters = function (height, progressive) {
            var preFiltered = this.zacVideoFormats.filter(function (format) {
                return format.uiVideoFormat != zacVideoFormat_1.VideoFormat.NotSupportedByUi &&
                    format.height == height &&
                    format.progressive == progressive;
            });
            if (preFiltered.length == 0) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("ZacVideoFormats with height:" + height + ", progressive:" + progressive + " not found.", ZacVideoFormats.TAG)); });
                return null;
            }
            var preferedWidth = this.getPreferedWidth(preFiltered, height);
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Prefered width set to " + preferedWidth + ".", ZacVideoFormats.TAG)); });
            var widthFiltered = preFiltered.filter(function (format) { return format.width == preferedWidth; });
            var preferedFramerate = this.getPreferedFramerate(widthFiltered);
            return widthFiltered.filter(function (format) { return format.framerate == preferedFramerate; })[0];
        };
        return ZacVideoFormats;
    }());
    exports.ZacVideoFormats = ZacVideoFormats;
});
//# sourceMappingURL=zacVideoFormats.js.map