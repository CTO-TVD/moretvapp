define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TvmsLoader = void 0;
    var TvmsLoader = (function () {
        function TvmsLoader() {
        }
        TvmsLoader.getTvmsMessage = function (templateURl) {
            var messageUrl = this.getMessageUrl(templateURl);
            return this.downloadTvmsMessage(messageUrl)
                .then(function (message) {
                return JSON.parse(message);
            });
        };
        TvmsLoader.getMessageUrl = function (templateURl) {
            var parts = templateURl.split("/");
            parts.pop();
            var messageURL = parts.join("/");
            messageURL += "/../" + this.messsageFilename;
            return messageURL;
        };
        TvmsLoader.downloadTvmsMessage = function (url) {
            return public_1.RestClient.instance.get(url, [{ key: "Content-Type", value: "application/json;charset=UTF-8" }])
                .then(function (result) {
                if (result.statusCode == 200) {
                    return result.responseData;
                }
                else {
                    throw Error("Error loading data from url '" + url + "'. Http status code: " + result.statusCode);
                }
            });
        };
        TvmsLoader.messsageFilename = "message.html";
        return TvmsLoader;
    }());
    exports.TvmsLoader = TvmsLoader;
});
//# sourceMappingURL=tvms.loader.js.map