var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "../baseRouter/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IntentRemote = void 0;
    var prefix = "/remote";
    var IntentRemote;
    (function (IntentRemote) {
        var RemoteSearch = (function (_super) {
            __extends(RemoteSearch, _super);
            function RemoteSearch(data) {
                return _super.call(this, RemoteSearch.pathname, data) || this;
            }
            RemoteSearch.pathname = prefix + "/searchmain";
            return RemoteSearch;
        }(public_1.BaseIntent));
        IntentRemote.RemoteSearch = RemoteSearch;
    })(IntentRemote = exports.IntentRemote || (exports.IntentRemote = {}));
});
//# sourceMappingURL=app.remote.intent.js.map