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
    exports.IntentSat = void 0;
    var prefix = "/appradio";
    var IntentSat;
    (function (IntentSat) {
        var Setuppage = (function (_super) {
            __extends(Setuppage, _super);
            function Setuppage(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, Setuppage.pathname, data) || this;
            }
            Setuppage.pathname = prefix + "/setup";
            return Setuppage;
        }(public_1.BaseIntent));
        IntentSat.Setuppage = Setuppage;
    })(IntentSat = exports.IntentSat || (exports.IntentSat = {}));
});
//# sourceMappingURL=app.sat.intent.js.map