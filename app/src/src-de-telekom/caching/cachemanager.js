define(["require", "exports", "rxjs", "../util/log/public"], function (require, exports, rxjs_1, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CacheManager = void 0;
    exports.CacheManager = new rxjs_1.Subject();
    exports.CacheManager.subscribe({ next: function (data) { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("clearCache with reason '" + data.reason + "'", "CacheManager")); }); } });
});
//# sourceMappingURL=cachemanager.js.map