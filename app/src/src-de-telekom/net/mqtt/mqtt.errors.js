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
define(["require", "exports", "../../errorhandling/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MqttSubscriptionError = exports.MqttPublishError = exports.MqttConnectionError = void 0;
    var MqttConnectionError = (function (_super) {
        __extends(MqttConnectionError, _super);
        function MqttConnectionError(message, args) {
            var _this = _super.call(this, message) || this;
            _this.args = args;
            _this.errorID = 0x021;
            return _this;
        }
        return MqttConnectionError;
    }(public_1.BaseError));
    exports.MqttConnectionError = MqttConnectionError;
    var MqttPublishError = (function (_super) {
        __extends(MqttPublishError, _super);
        function MqttPublishError(message) {
            var _this = _super.call(this, message) || this;
            _this.errorID = 0x022;
            return _this;
        }
        return MqttPublishError;
    }(public_1.BaseError));
    exports.MqttPublishError = MqttPublishError;
    var MqttSubscriptionError = (function (_super) {
        __extends(MqttSubscriptionError, _super);
        function MqttSubscriptionError(topic, message) {
            var _this = _super.call(this, message) || this;
            _this.topic = topic;
            _this.errorID = 0x023;
            return _this;
        }
        return MqttSubscriptionError;
    }(public_1.BaseError));
    exports.MqttSubscriptionError = MqttSubscriptionError;
});
//# sourceMappingURL=mqtt.errors.js.map