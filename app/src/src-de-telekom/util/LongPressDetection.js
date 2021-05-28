define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LongPressDetection = void 0;
    var LongPressDetection = (function () {
        function LongPressDetection(eventCounter, threshold) {
            if (eventCounter === void 0) { eventCounter = 10; }
            if (threshold === void 0) { threshold = 150; }
            this.eventArray = [];
            this.eventCounter = 10;
            this.lastEvent = new Date().valueOf();
            this.threshold = 150;
            this.eventCounter = eventCounter;
            this.threshold = threshold;
        }
        LongPressDetection.prototype.isLongPress = function () {
            return (this.eventArray.length == 0) ? false : ((this.eventArray.reduce(function (a, b) { return a + b; }) / this.eventArray.length) < this.threshold);
        };
        LongPressDetection.prototype.addEvent = function () {
            if (this.eventArray.length == this.eventCounter) {
                this.eventArray.shift();
            }
            var currentEvent = new Date().valueOf();
            var difference = currentEvent - this.lastEvent;
            if (difference > this.threshold) {
                this.eventArray = [];
            }
            this.eventArray.push(difference);
            this.lastEvent = currentEvent;
        };
        return LongPressDetection;
    }());
    exports.LongPressDetection = LongPressDetection;
});
//# sourceMappingURL=LongPressDetection.js.map