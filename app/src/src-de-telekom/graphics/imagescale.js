var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "URIjs/URI", "../configuration/configuration", "../util/log/public"], function (require, exports, urijs, configuration_1, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImageScale = void 0;
    var ImageScale = (function () {
        function ImageScale() {
        }
        ImageScale_1 = ImageScale;
        ImageScale.loadConfig = function () {
            if (ImageScale_1.enabled === undefined) {
                var config = configuration_1.Configuration.instance.imagescale || {};
                ImageScale_1.enabled = config.enabled === undefined ? false : config.enabled;
                ImageScale_1.iss = config.iss === undefined ? "" : config.iss;
                ImageScale_1.client = config.client === undefined ? "" : config.client;
                ImageScale_1.sf = config.resolution === undefined ? 1 : (config.resolution[configuration_1.Configuration.instance.resolution || "720p"] || 1);
                ImageScale_1.autoProtocol = config.autoProtocol === undefined ? true : config.autoProtocol;
                if (ImageScale_1.autoProtocol && ImageScale_1.iss) {
                    ImageScale_1.iss = urijs(ImageScale_1.iss).protocol(urijs(configuration_1.Configuration.instance.startUrl).protocol()).valueOf();
                }
            }
        };
        ImageScale.scale = function (url, options) {
            if (ImageScale_1.isLocalUrl(url)) {
                return url;
            }
            ImageScale_1.loadConfig();
            options = options || {};
            if (ImageScale_1.enabled && !options.disable) {
                var iss = options.iss || ImageScale_1.iss;
                var client = options.client || ImageScale_1.client;
                if (url.indexOf(iss) == 0) {
                    return url;
                }
                var uriComplete_1 = urijs(iss)
                    .addQuery("client", client)
                    .addQuery("ar", options.ar || "keep");
                if (options.x) {
                    uriComplete_1.addQuery("x", Math.round((options.x * ImageScale_1.sf)).toString());
                }
                if (options.y) {
                    uriComplete_1.addQuery("y", Math.round((options.y * ImageScale_1.sf)).toString());
                }
                if (options.color) {
                    uriComplete_1.addQuery("color", options.color);
                }
                if (options.out) {
                    uriComplete_1.addQuery("out", options.out);
                }
                uriComplete_1.addQuery("src", url);
                public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("scale image, url: '" + uriComplete_1.valueOf() + "'", "ImageScale")); });
                return uriComplete_1.valueOf();
            }
            return url;
        };
        ImageScale.parseUrl = function (url) {
            ImageScale_1.loadConfig();
            var iss = ImageScale_1.iss;
            var uriComplete = urijs(iss);
            var sourceUri = urijs(url);
            if (sourceUri.host() == uriComplete.host()) {
                var parsed = urijs.parseQuery(url);
                return parsed.src ? parsed : undefined;
            }
            return undefined;
        };
        ImageScale.rescale = function (url, options) {
            if (ImageScale_1.isLocalUrl(url)) {
                return url;
            }
            var originalOptions = ImageScale_1.parseUrl(url);
            if (originalOptions) {
                return ImageScale_1.scale(originalOptions.src, options);
            }
            return ImageScale_1.scale(url, options);
        };
        ImageScale.isLocalUrl = function (posterUrl) {
            return (typeof posterUrl !== "string"
                || posterUrl.length == 0
                || posterUrl.indexOf("http") == -1
                || posterUrl.indexOf("http://10.") != -1
                || posterUrl.indexOf("http://169.") != -1
                || posterUrl.indexOf("http://172.") != -1
                || posterUrl.indexOf("http://192.") != -1) ? true : false;
        };
        var ImageScale_1;
        ImageScale = ImageScale_1 = __decorate([
            public_1.logTag()
        ], ImageScale);
        return ImageScale;
    }());
    exports.ImageScale = ImageScale;
});
//# sourceMappingURL=imagescale.js.map