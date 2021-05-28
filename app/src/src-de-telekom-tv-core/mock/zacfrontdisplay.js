define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacFrontDisplay = void 0;
    var ZacFrontDisplay = (function () {
        function ZacFrontDisplay() {
            this.SYMBOL_TV = 1;
            this.SYMBOL_RADIO = 2;
            this.SYMBOL_SCRAMBLE = 4;
            this.CAP_DISPLAY4x7SEG = 1;
            this.CAP_DISPLAYTEXT = 2;
            this.CAP_DISPLAYLED = 4;
        }
        ZacFrontDisplay.prototype.registerEventListener = function (evtName, evtHandlerFunction) {
            return 0;
        };
        ZacFrontDisplay.prototype.unregisterEventListener = function (evtName, id) {
        };
        ZacFrontDisplay.prototype.GetCapabilities = function () {
            return 0;
        };
        ZacFrontDisplay.prototype.GetString = function () {
            return "";
        };
        ZacFrontDisplay.prototype.SetString = function (displayString, scroll) {
            return 0;
        };
        ZacFrontDisplay.prototype.SetSymbol = function (symbol, onOff) {
            return 0;
        };
        ZacFrontDisplay.prototype.ShowTime = function (active) {
            return 0;
        };
        return ZacFrontDisplay;
    }());
    exports.ZacFrontDisplay = ZacFrontDisplay;
});
//# sourceMappingURL=zacfrontdisplay.js.map