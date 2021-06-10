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
define(["require", "exports", "./StringEntity"], function (require, exports, StringEntity_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JsonEntity = void 0;
    var JsonEntity = (function (_super) {
        __extends(JsonEntity, _super);
        function JsonEntity(data) {
            return _super.call(this, JSON.stringify(data), "application/json") || this;
        }
        return JsonEntity;
    }(StringEntity_1.StringEntity));
    exports.JsonEntity = JsonEntity;
});
//# sourceMappingURL=JsonEntity.js.map