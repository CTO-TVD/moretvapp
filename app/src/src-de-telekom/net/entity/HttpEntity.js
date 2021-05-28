define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpEntity = void 0;
    var HttpEntity = (function () {
        function HttpEntity() {
        }
        HttpEntity.prototype.getContent = function () {
            throw new Error("This method is abstract.");
        };
        return HttpEntity;
    }());
    exports.HttpEntity = HttpEntity;
});
//# sourceMappingURL=HttpEntity.js.map