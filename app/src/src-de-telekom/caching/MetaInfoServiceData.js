define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MetaInfoServiceData = void 0;
    var MetaInfoServiceData = (function () {
        function MetaInfoServiceData(requestTime, responseTime, statusCode, disableCache) {
            this.requestTime = requestTime != undefined ? requestTime : new Date();
            this.responseTime = responseTime != undefined ? responseTime : new Date();
            this.statusCode = statusCode;
            this.disableCache = disableCache;
        }
        return MetaInfoServiceData;
    }());
    exports.MetaInfoServiceData = MetaInfoServiceData;
});
//# sourceMappingURL=MetaInfoServiceData.js.map