define(["require", "exports", "bluebird", "src/src-de-telekom-style/public", "src/src-de-telekom/public"], function (require, exports, bluebird, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadImage = exports.noData = exports.pendingRequest = void 0;
    exports.pendingRequest = undefined;
    exports.noData = null;
    function loadImage(url) {
        if (!url || url == public_1.Css.images.inlineTransparentPixel) {
            var image = new Image();
            image.src = public_1.Css.images.inlineTransparentPixel;
            return bluebird.resolve(image);
        }
        return public_2.ImagePreLoader
            .addJob(url, 0)
            .catch(function (error) {
            var image = new Image();
            image.src = public_1.Css.images.inlineTransparentPixel;
            return image;
        });
    }
    exports.loadImage = loadImage;
});
//# sourceMappingURL=util.js.map