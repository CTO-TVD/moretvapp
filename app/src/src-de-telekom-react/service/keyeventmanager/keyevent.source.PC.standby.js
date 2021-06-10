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
define(["require", "exports", "./keyevent.source.base", "./keycode.config"], function (require, exports, keyevent_source_base_1, keycode_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVKeyEventSourcePCStandby = void 0;
    var TVKeyEventSourcePCStandby = (function (_super) {
        __extends(TVKeyEventSourcePCStandby, _super);
        function TVKeyEventSourcePCStandby() {
            var _this = _super.call(this) || this;
            _this.keyTable = TVKeyEventSourcePCStandby.keyTable;
            return _this;
        }
        TVKeyEventSourcePCStandby.keyTable = {
            0: keycode_config_1.TVKeyCodeConfig.NULL_KEY,
            13: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            76: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            48: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            49: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            50: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            51: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            52: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            53: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            54: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            55: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            56: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            57: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            107: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            109: keycode_config_1.TVKeyCodeConfig.POWER_KEY
        };
        return TVKeyEventSourcePCStandby;
    }(keyevent_source_base_1.TVKeyEventSourceBase));
    exports.TVKeyEventSourcePCStandby = TVKeyEventSourcePCStandby;
});
//# sourceMappingURL=keyevent.source.PC.standby.js.map