define(["require", "exports", "bluebird"], function (require, exports, bluebird) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsyncEventManager = void 0;
    var AsyncEventManager = (function () {
        function AsyncEventManager() {
            this.listeners = Object.create(null);
        }
        AsyncEventManager.prototype.on = function (name, listener, id) {
            var namedListeners = this.listeners[name] || (this.listeners[name] = []);
            var listenerObject = { listener: listener, id: id };
            namedListeners.push(listenerObject);
            AsyncEventManager.globalCount++;
            return function () {
                var indexOfListener = namedListeners.indexOf(listenerObject);
                if (indexOfListener !== -1) {
                    namedListeners.splice(indexOfListener, 1);
                    AsyncEventManager.globalCount--;
                }
            };
        };
        AsyncEventManager.prototype.broadcast = function (name, arg) {
            var namedListeners = this.listeners[name] || [];
            var process = bluebird.resolve();
            var _loop_1 = function (namedListener) {
                process = process.then(function () { return namedListener.listener(arg); });
            };
            for (var _i = 0, namedListeners_1 = namedListeners; _i < namedListeners_1.length; _i++) {
                var namedListener = namedListeners_1[_i];
                _loop_1(namedListener);
            }
            return process;
        };
        AsyncEventManager.prototype.subscriberCount = function (name) {
            var _a;
            return ((_a = this.listeners) === null || _a === void 0 ? void 0 : _a[name]) ? this.listeners[name].length : 0;
        };
        AsyncEventManager.globalCount = 0;
        return AsyncEventManager;
    }());
    exports.AsyncEventManager = AsyncEventManager;
});
//# sourceMappingURL=asynceventmanager.js.map