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
define(["require", "exports", "../baseRouter/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IntentLocalmedia = void 0;
    var prefix = "/applocalmedia";
    var IntentLocalmedia;
    (function (IntentLocalmedia) {
        var Overview = (function (_super) {
            __extends(Overview, _super);
            function Overview(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, Overview.pathname, data) || this;
            }
            Overview.pathname = prefix + "/overview";
            return Overview;
        }(public_1.BaseIntent));
        IntentLocalmedia.Overview = Overview;
    })(IntentLocalmedia = exports.IntentLocalmedia || (exports.IntentLocalmedia = {}));
});
//# sourceMappingURL=app.localmedia.intent.js.map