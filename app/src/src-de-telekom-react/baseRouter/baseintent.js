define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseIntent = void 0;
    var BaseIntent = (function () {
        function BaseIntent(pathname, data) {
            this.pathname = pathname;
            this.data = data;
        }
        BaseIntent.prototype.toString = function () {
            return JSON.stringify({ path: this.pathname, data: this.data });
        };
        return BaseIntent;
    }());
    exports.BaseIntent = BaseIntent;
});
//# sourceMappingURL=baseintent.js.map