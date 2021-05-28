define(["require", "exports", "bluebird", "../errorhandling/BaseError", "../promise/concurrentqueue"], function (require, exports, bluebird, BaseError_1, concurrentqueue_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImagePreLoader = void 0;
    var ImagePreLoader = (function () {
        function ImagePreLoader() {
        }
        ImagePreLoader.addJob = function (imageUrl, delay) {
            if (delay === void 0) { delay = 10; }
            var job = ImagePreLoader.queue.addTail(function () { return ImagePreLoader.addJobInternal(imageUrl); });
            return delay === 0 ? job : job.delay(delay);
        };
        ImagePreLoader.addJobInternal = function (imageUrl) {
            if (imageUrl && imageUrl.length > 0) {
                return new bluebird(function (resolve, reject) {
                    var image = new Image();
                    var funcAbort = function (event) {
                        reject(new Error("Unable to download the image: '" + imageUrl + "'"));
                        closable();
                    };
                    var funcError = function (event) {
                        reject(new Error("Unable to download the image: '" + imageUrl + "'"));
                        closable();
                    };
                    var funcLoad = function (event) {
                        resolve(image);
                        closable();
                    };
                    image.addEventListener("abort", funcAbort);
                    image.addEventListener("error", funcError);
                    image.addEventListener("load", funcLoad);
                    var closable = function () {
                        image.removeEventListener("abort", funcAbort);
                        image.removeEventListener("error", funcError);
                        image.removeEventListener("load", funcLoad);
                    };
                    image.src = imageUrl;
                });
            }
            return bluebird.reject(new BaseError_1.IllegalArgumentError("'imageUrl' is missing!", "imageUrl"));
        };
        ImagePreLoader.queue = new concurrentqueue_1.ConcurrentQueue("ImagePreloader", 2);
        return ImagePreLoader;
    }());
    exports.ImagePreLoader = ImagePreLoader;
});
//# sourceMappingURL=imagepreloader.js.map