var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
define(["require", "exports", "bluebird", "../errorhandling/BaseError"], function (require, exports, bluebird, BaseError_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.debouncerFunc = exports.debouncer = exports.Defer = void 0;
    var Defer = (function () {
        function Defer() {
        }
        Defer.defer = function () {
            var def = new Defer();
            def.promise = new bluebird(function (resolve, reject) {
                def.resolve = resolve;
                def.reject = reject;
            });
            return def;
        };
        return Defer;
    }());
    exports.Defer = Defer;
    function debouncer(callback, debounceTime, minExecutionTime) {
        var deferDebounce = Defer.defer();
        var timeout = setTimeout(function () { return deferDebounce.resolve(); }, debounceTime);
        var deferExecution;
        var timeoutExection;
        var debouncerData = {
            abort: function () {
                clearTimeout(timeout);
                if (timeoutExection)
                    clearTimeout(timeoutExection);
                deferDebounce.reject(new BaseError_1.PromiseCancelError());
                if (deferExecution)
                    deferExecution.reject(new BaseError_1.PromiseCancelError());
            },
            result: minExecutionTime
                ? deferDebounce.promise
                    .then(function () {
                    deferExecution = Defer.defer();
                    timeoutExection = setTimeout(function () { return deferExecution.resolve(); }, minExecutionTime);
                    return bluebird.all([callback(), deferExecution.promise]);
                })
                    .then(function (_a) {
                    var result = _a[0];
                    return result;
                })
                : deferDebounce.promise
                    .then(function () { return callback(); })
        };
        return debouncerData;
    }
    exports.debouncer = debouncer;
    function debouncerFunc(onEnter, onCalc, onLeave, options) {
        var timeoutDebounce;
        var timeoutExecution;
        var deferExecution;
        var r1;
        var func = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (timeoutDebounce === undefined) {
                r1 = onEnter === null || onEnter === void 0 ? void 0 : onEnter.apply(void 0, args);
            }
            if (func.clear)
                func.clear();
            timeoutDebounce = setTimeout(function () {
                var r2 = onCalc.apply(void 0, __spreadArray([r1], args));
                deferExecution = Defer.defer();
                timeoutExecution = setTimeout(function () { return deferExecution === null || deferExecution === void 0 ? void 0 : deferExecution.resolve(); }, options.minExecutionMs);
                bluebird.all([r2, deferExecution.promise])
                    .then(function (_a) {
                    var r2 = _a[0];
                    timeoutDebounce = undefined;
                    timeoutExecution = undefined;
                    deferExecution = undefined;
                    onLeave.apply(void 0, __spreadArray([r1, r2], args));
                })
                    .done();
            }, options.debounceMs);
        };
        func.clear = function () {
            clearTimeout(timeoutDebounce);
            clearTimeout(timeoutExecution);
            timeoutDebounce = undefined;
            timeoutExecution = undefined;
            if (deferExecution) {
                deferExecution.reject(new BaseError_1.PromiseCancelError());
                deferExecution = undefined;
            }
        };
        return func;
    }
    exports.debouncerFunc = debouncerFunc;
});
//# sourceMappingURL=util.js.map