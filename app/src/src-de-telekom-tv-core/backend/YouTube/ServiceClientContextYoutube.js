var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "./ServiceClientYoutube", "./youtube.errors"], function (require, exports, public_1, ServiceClientYoutube_1, youtube_errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientContextYoutube = void 0;
    var ServiceClientContextYoutube = (function () {
        function ServiceClientContextYoutube() {
            this.internalApiBaseUrl = "https://www.googleapis.com/youtube/v3/";
            this.internalApiKey = "";
            this.internalServiceIsAvailable = false;
            this.internalYoutubeSearchAppId = "YouTube";
            this.internalYoutubeTvUrl = "https://www.youtube.com/tv";
            try {
                this.setup();
                this.internalServiceIsAvailable = true;
            }
            catch (error) {
                public_1.ErrorManager.catch(error, ServiceClientContextYoutube_1, 0x01);
            }
        }
        ServiceClientContextYoutube_1 = ServiceClientContextYoutube;
        Object.defineProperty(ServiceClientContextYoutube.prototype, "apiBaseUrl", {
            get: function () {
                return this.internalApiBaseUrl;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextYoutube.prototype, "apiKey", {
            get: function () {
                return this.internalApiKey;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextYoutube.prototype, "isServiceIsAvailable", {
            get: function () {
                return this.internalServiceIsAvailable;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextYoutube.prototype, "serviceClient", {
            get: function () {
                if (public_1.Guard.isUndefined(this.internalServiceClient)) {
                    throw new youtube_errors_1.YoutubeConfigurationError("Youtube service client is not initialized!");
                }
                return this.internalServiceClient;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextYoutube.prototype, "youtubeSearchAppId", {
            get: function () {
                return this.internalYoutubeSearchAppId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ServiceClientContextYoutube.prototype, "youtubeTvUrl", {
            get: function () {
                return this.internalYoutubeTvUrl;
            },
            enumerable: false,
            configurable: true
        });
        ServiceClientContextYoutube.prototype.setup = function () {
            var youtubeConfiguration = public_1.Configuration.instance.youtube ? public_1.Configuration.instance.youtube : {};
            if (public_1.Guard.isUndefined(youtubeConfiguration)) {
                throw new youtube_errors_1.YoutubeConfigurationError("Missing YouTube configuration.", 0x01);
            }
            if (public_1.Guard.isUndefined(youtubeConfiguration.apiBaseUrl)) {
                throw new youtube_errors_1.YoutubeConfigurationError("The YouTube API base url is missing.", 0x02);
            }
            this.internalApiBaseUrl = youtubeConfiguration.apiBaseUrl;
            if (public_1.Guard.isUndefined(youtubeConfiguration.apiKey)) {
                throw new youtube_errors_1.YoutubeConfigurationError("The YouTube API key is missing.", 0x03);
            }
            this.internalApiKey = youtubeConfiguration.apiKey;
            if (public_1.Guard.isUndefined(youtubeConfiguration.youtubeSearchAppId)) {
                throw new youtube_errors_1.YoutubeConfigurationError("The YouTube search app ID is missing.", 0x04);
            }
            this.internalYoutubeSearchAppId = youtubeConfiguration.youtubeSearchAppId;
            if (public_1.Guard.isUndefined(youtubeConfiguration.youtubeTvUrl)) {
                throw new youtube_errors_1.YoutubeConfigurationError("The YouTube start url is missing.", 0x05);
            }
            this.internalYoutubeTvUrl = youtubeConfiguration.youtubeTvUrl;
            this.internalServiceClient = new ServiceClientYoutube_1.ServiceClientYoutube();
        };
        var ServiceClientContextYoutube_1;
        ServiceClientContextYoutube.classID = 0xB81;
        ServiceClientContextYoutube = ServiceClientContextYoutube_1 = __decorate([
            public_1.logTag()
        ], ServiceClientContextYoutube);
        return ServiceClientContextYoutube;
    }());
    exports.ServiceClientContextYoutube = ServiceClientContextYoutube;
});
//# sourceMappingURL=ServiceClientContextYoutube.js.map