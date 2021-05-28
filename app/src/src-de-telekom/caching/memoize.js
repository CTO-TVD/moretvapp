define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Memoize = void 0;
    var simpleIsEqual = function (a, b) { return a === b; };
    function memoize(resultFn, isEqual) {
        if (isEqual === void 0) { isEqual = simpleIsEqual; }
        var lastThis;
        var lastArgs = [];
        var lastResult;
        var calledOnce = false;
        var isNewArgEqualToLast = function (newArg, index) { return isEqual(newArg, lastArgs[index]); };
        function result() {
            var newArgs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                newArgs[_i] = arguments[_i];
            }
            if (calledOnce &&
                lastThis === this &&
                newArgs.length === lastArgs.length &&
                newArgs.every(isNewArgEqualToLast)) {
                return lastResult;
            }
            calledOnce = true;
            lastThis = this;
            lastArgs = newArgs;
            lastResult = resultFn.apply(this, newArgs);
            return lastResult;
        }
        return result;
    }
    function memoizeDecorator(isEqual) {
        if (isEqual === void 0) { isEqual = simpleIsEqual; }
        return function (target, key, descriptor) {
            var _a, _b;
            var propName = typeof target === "function"
                ? "_memo_func_" + target.name + "_" + key
                : "_memo_object_" + ((_b = (_a = target.constructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : "unknown") + "_" + key;
            var originalValue = descriptor.value;
            descriptor.value = function () {
                var newArgs = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    newArgs[_i] = arguments[_i];
                }
                if (!this.hasOwnProperty(propName)) {
                    this[propName] = memoize(originalValue, isEqual);
                }
                return this[propName].apply(this, newArgs);
            };
            return descriptor;
        };
    }
    var Memoize;
    (function (Memoize) {
        Memoize.func = memoize;
        Memoize.decorator = memoizeDecorator;
    })(Memoize = exports.Memoize || (exports.Memoize = {}));
});
//# sourceMappingURL=memoize.js.map