define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Stopwatch = void 0;
    var Stopwatch = (function () {
        function Stopwatch() {
            this.reset();
        }
        Stopwatch.getNow = function () {
            if (!Stopwatch.funcNow) {
                Stopwatch.funcNow = (performance === null || performance === void 0 ? void 0 : performance.now) ? function () { return performance.now(); } : function () { return Date.now(); };
            }
            return Stopwatch.funcNow();
        };
        Stopwatch.prototype.start = function () {
            this.startTime = Stopwatch.getNow();
            return this;
        };
        Stopwatch.prototype.stop = function () {
            this.endTime = Stopwatch.getNow();
            return this;
        };
        Stopwatch.prototype.reset = function () {
            this.startTime = 0;
            this.endTime = 0;
            return this;
        };
        Object.defineProperty(Stopwatch.prototype, "time", {
            get: function () {
                return this.endTime - this.startTime;
            },
            enumerable: false,
            configurable: true
        });
        return Stopwatch;
    }());
    exports.Stopwatch = Stopwatch;
});
//# sourceMappingURL=Stopwatch.js.map