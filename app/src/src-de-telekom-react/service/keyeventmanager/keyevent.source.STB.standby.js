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
define(["require", "exports", "./keyevent.source.base", "./keycode.config"], function (require, exports, keyevent_source_base_1, keycode_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVKeyEventSourceSTBStandby = void 0;
    var TVKeyEventSourceSTBStandby = (function (_super) {
        __extends(TVKeyEventSourceSTBStandby, _super);
        function TVKeyEventSourceSTBStandby() {
            var _this = _super.call(this) || this;
            _this.keyTable = TVKeyEventSourceSTBStandby.keyTable;
            return _this;
        }
        TVKeyEventSourceSTBStandby.keyTable = {
            0: keycode_config_1.TVKeyCodeConfig.NULL_KEY,
            409: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            13: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            49: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            50: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            51: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            52: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            53: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            54: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            55: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            56: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            57: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            192: keycode_config_1.TVKeyCodeConfig.POWER_ON,
            427: keycode_config_1.TVKeyCodeConfig.POWER_KEY,
            428: keycode_config_1.TVKeyCodeConfig.POWER_KEY
        };
        return TVKeyEventSourceSTBStandby;
    }(keyevent_source_base_1.TVKeyEventSourceBase));
    exports.TVKeyEventSourceSTBStandby = TVKeyEventSourceSTBStandby;
});
//# sourceMappingURL=keyevent.source.STB.standby.js.map