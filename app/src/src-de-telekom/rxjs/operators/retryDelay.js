define(["require", "exports", "rxjs", "rxjs/operators"], function (require, exports, rxjs_1, operators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.retryDelay = void 0;
    exports.retryDelay = function (_a) {
        var _b = _a.delay, delay = _b === void 0 ? 1000 : _b, _c = _a.maxRetryAttempts, maxRetryAttempts = _c === void 0 ? 3 : _c, _d = _a.scalingFactor, scalingFactor = _d === void 0 ? 1 : _d, _e = _a.resetRetryCountOnEmission, resetRetryCountOnEmission = _e === void 0 ? true : _e;
        return function (source) {
            var retryAttempts = 0;
            return source.pipe(operators_1.retryWhen(function (attempts) { return attempts.pipe(operators_1.mergeMap(function (error) {
                if (++retryAttempts > maxRetryAttempts) {
                    retryAttempts = 0;
                    return rxjs_1.throwError(error);
                }
                var tryAfter = delay * Math.pow(scalingFactor, (retryAttempts - 1));
                return rxjs_1.timer(tryAfter);
            })); }), operators_1.tap(function () {
                if (resetRetryCountOnEmission) {
                    retryAttempts = 0;
                }
            }));
        };
    };
});
//# sourceMappingURL=retryDelay.js.map