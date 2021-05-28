define(["require", "exports", "../util/log/public", "../util/StringTools"], function (require, exports, public_1, StringTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EventManager = void 0;
    var EventManager = (function () {
        function EventManager() {
            this.listeners = Object.create(null);
        }
        EventManager.prototype.on = function (name, listener, id) {
            var namedListeners = this.listeners[name] || (this.listeners[name] = []);
            var listenerObject = { listener: listener, id: id };
            namedListeners.push(listenerObject);
            EventManager.globalCount++;
            return function () {
                var indexOfListener = namedListeners.indexOf(listenerObject);
                if (indexOfListener !== -1) {
                    namedListeners.splice(indexOfListener, 1);
                    EventManager.globalCount--;
                }
            };
        };
        EventManager.prototype.broadcast = function (name, arg) {
            var namedListeners = this.listeners[name] || [];
            for (var _i = 0, namedListeners_1 = namedListeners; _i < namedListeners_1.length; _i++) {
                var namedListener = namedListeners_1[_i];
                try {
                    var result = namedListener.listener(arg);
                    if (typeof result === "boolean") {
                        if (result)
                            return result;
                    }
                }
                catch (e) {
                    if (this.exceptionHandler)
                        this.exceptionHandler(e);
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg(StringTools_1.StringTools.dataStringify(e), "EventManager")); });
                }
            }
            return false;
        };
        EventManager.prototype.subscriberCount = function (name) {
            var _a;
            return ((_a = this.listeners) === null || _a === void 0 ? void 0 : _a[name]) ? this.listeners[name].length : 0;
        };
        EventManager.globalCount = 0;
        return EventManager;
    }());
    exports.EventManager = EventManager;
});
//# sourceMappingURL=eventmanager.js.map