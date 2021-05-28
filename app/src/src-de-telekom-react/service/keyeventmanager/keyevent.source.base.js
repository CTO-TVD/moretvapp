var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "./keycode.config"], function (require, exports, public_1, keycode_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVKeyEventSourceBase = void 0;
    var TVKeyEventSourceBase = (function () {
        function TVKeyEventSourceBase() {
            this.bind();
        }
        TVKeyEventSourceBase_1 = TVKeyEventSourceBase;
        TVKeyEventSourceBase.prototype.resolveVirtualKey = function (virtualKey) {
            var _this = this;
            var resolvedKey = Object.keys(this.keyTable).find(function (key) { return _this.keyTable[key] === virtualKey; });
            if (resolvedKey) {
                var keyCode = parseInt(resolvedKey, 10);
                return { keyCode: keyCode, virtualKey: virtualKey };
            }
            return undefined;
        };
        TVKeyEventSourceBase.prototype.mapKeyCode = function (keyCode) {
            var keyMapping = this.keyTable[keyCode];
            if (keyMapping) {
                return { keyCode: keyCode, virtualKey: keyMapping };
            }
            return { keyCode: keyCode, virtualKey: "NULL_KEY" };
        };
        TVKeyEventSourceBase.prototype.bind = function () {
            var _this = this;
            if (TVKeyEventSourceBase_1.closable) {
                TVKeyEventSourceBase_1.closable();
            }
            var keyDownListener = function (e) {
                var keyEvent = _this.mapKeyCode(e.which || e.keyCode);
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("virtual key down: " + keyEvent.virtualKey + " " + keyEvent.keyCode + " code: " + e.code + " repeat: " + e.repeat, TVKeyEventSourceBase_1.TAG)); });
                var watch = new public_1.Stopwatch().start();
                if (_this.onKeyEvent)
                    _this.onKeyEvent(keyEvent);
                watch.stop();
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("key processing: " + keyEvent.virtualKey + " " + keyEvent.keyCode + " code: " + e.code + " repeat: " + e.repeat + " time: " + watch.time, TVKeyEventSourceBase_1.TAG)); });
                e.stopPropagation();
            };
            var keyUpListener = function (e) {
                var keyEvent = _this.mapKeyCode(e.which || e.keyCode);
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("virtual key up: " + keyEvent.virtualKey + " " + keyEvent.keyCode + " " + e.code, TVKeyEventSourceBase_1.TAG)); });
                if (_this.onKeyEvent)
                    _this.onKeyEvent({ virtualKey: keycode_config_1.TVKeyCodeConfig.KEYEVENT_UP_KEY });
            };
            window.addEventListener("keydown", keyDownListener, true);
            window.addEventListener("keyup", keyUpListener, true);
            TVKeyEventSourceBase_1.closable = function () {
                window.removeEventListener("keydown", keyDownListener, true);
                window.removeEventListener("keyup", keyUpListener, true);
            };
        };
        var TVKeyEventSourceBase_1;
        TVKeyEventSourceBase = TVKeyEventSourceBase_1 = __decorate([
            public_1.logTag()
        ], TVKeyEventSourceBase);
        return TVKeyEventSourceBase;
    }());
    exports.TVKeyEventSourceBase = TVKeyEventSourceBase;
});
//# sourceMappingURL=keyevent.source.base.js.map