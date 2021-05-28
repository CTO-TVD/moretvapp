define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EventGenerator = void 0;
    var EventGenerator = (function () {
        function EventGenerator() {
            this.registeredEvents = new Object();
            this.eventManager = new public_1.EventManager();
        }
        EventGenerator.prototype.registerEventListener = function (evtName, evtHandlerFunction) {
            var _this = this;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("registerEventListener " + _this.getEventManagerId() + " " + evtName, _this.getLogSource())); });
            var closeable = this.eventManager.on(evtName, evtHandlerFunction, this.getEventManagerId());
            var id = new Date().valueOf() + this.getRandomArbitrary(100, 1000);
            this.registeredEvents[id] = closeable;
            return id;
        };
        EventGenerator.prototype.unregisterEventListener = function (evtName, id) {
            var _this = this;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("unregisterEventListener " + evtName, _this.getLogSource())); });
            var closeable = this.registeredEvents[id];
            delete (this.registeredEvents[id]);
            closeable();
        };
        EventGenerator.prototype.getRandomArbitrary = function (min, max) {
            return Math.random() * (max - min) + min;
        };
        return EventGenerator;
    }());
    exports.EventGenerator = EventGenerator;
});
//# sourceMappingURL=eventgenerator.js.map