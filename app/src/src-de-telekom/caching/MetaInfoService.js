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
define(["require", "exports", "./MetaInfoData", "./MetaInfoServiceData"], function (require, exports, MetaInfoData_1, MetaInfoServiceData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MetaInfoService = void 0;
    var MetaInfoService = (function (_super) {
        __extends(MetaInfoService, _super);
        function MetaInfoService(data, serviceData) {
            var _this = _super.call(this, data === null || data === void 0 ? void 0 : data.data) || this;
            _this.serviceData = serviceData != undefined ? serviceData : new MetaInfoServiceData_1.MetaInfoServiceData();
            return _this;
        }
        return MetaInfoService;
    }(MetaInfoData_1.MetaInfoData));
    exports.MetaInfoService = MetaInfoService;
});
//# sourceMappingURL=MetaInfoService.js.map