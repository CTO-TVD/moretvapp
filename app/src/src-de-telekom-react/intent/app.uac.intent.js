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
    exports.IntentUac = void 0;
    var prefix = "/appuac";
    var IntentUac;
    (function (IntentUac) {
        var UserPin = (function (_super) {
            __extends(UserPin, _super);
            function UserPin(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, UserPin.pathname, data) || this;
            }
            UserPin.pathname = prefix + "/userpin";
            return UserPin;
        }(public_1.BaseIntent));
        IntentUac.UserPin = UserPin;
        var AvsPin = (function (_super) {
            __extends(AvsPin, _super);
            function AvsPin(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, AvsPin.pathname, data) || this;
            }
            AvsPin.pathname = prefix + "/avspin";
            return AvsPin;
        }(public_1.BaseIntent));
        IntentUac.AvsPin = AvsPin;
        var Confirm = (function (_super) {
            __extends(Confirm, _super);
            function Confirm(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, Confirm.pathname, data) || this;
            }
            Confirm.pathname = prefix + "/confirm";
            return Confirm;
        }(public_1.BaseIntent));
        IntentUac.Confirm = Confirm;
        var AvsManagement = (function (_super) {
            __extends(AvsManagement, _super);
            function AvsManagement() {
                return _super.call(this, AvsManagement.pathname, undefined) || this;
            }
            AvsManagement.pathname = prefix + "/avs";
            return AvsManagement;
        }(public_1.BaseIntent));
        IntentUac.AvsManagement = AvsManagement;
    })(IntentUac = exports.IntentUac || (exports.IntentUac = {}));
});
//# sourceMappingURL=app.uac.intent.js.map