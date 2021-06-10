var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./MetaInfoCacheData", "./MetaInfoService"], function (require, exports, MetaInfoCacheData_1, MetaInfoService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MetaInfoCache = void 0;
    var MetaInfoCache = (function (_super) {
        __extends(MetaInfoCache, _super);
        function MetaInfoCache(data, cacheData) {
            var _this = _super.call(this, data, data === null || data === void 0 ? void 0 : data.serviceData) || this;
            _this.cacheData = cacheData != undefined ? cacheData : new MetaInfoCacheData_1.MetaInfoCacheData();
            return _this;
        }
        return MetaInfoCache;
    }(MetaInfoService_1.MetaInfoService));
    exports.MetaInfoCache = MetaInfoCache;
});
//# sourceMappingURL=MetaInfoCache.js.map