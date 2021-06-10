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
define(["require", "exports", "./HttpEntity"], function (require, exports, HttpEntity_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StringEntity = void 0;
    var StringEntity = (function (_super) {
        __extends(StringEntity, _super);
        function StringEntity(content, mimeType, charSet) {
            if (mimeType === void 0) { mimeType = "text/plain"; }
            if (charSet === void 0) { charSet = "ISO-8859-1"; }
            var _this = _super.call(this) || this;
            _this.content = content;
            _this.contentType = mimeType + "; charset=" + charSet;
            return _this;
        }
        StringEntity.prototype.getContent = function () {
            return this.content;
        };
        return StringEntity;
    }(HttpEntity_1.HttpEntity));
    exports.StringEntity = StringEntity;
});
//# sourceMappingURL=StringEntity.js.map