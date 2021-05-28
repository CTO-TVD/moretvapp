define(["require", "exports", "rxjs/operators", "./initialize"], function (require, exports, operators_1, initialize_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.trackSubscription = void 0;
    function trackSubscription() {
        return function (source) {
            return source
                .pipe(initialize_1.initialize(function () {
                trackSubscription.globalCount++;
            }), operators_1.finalize(function () {
                trackSubscription.globalCount--;
            }));
        };
    }
    exports.trackSubscription = trackSubscription;
    (function (trackSubscription) {
        trackSubscription.globalCount = 0;
    })(trackSubscription = exports.trackSubscription || (exports.trackSubscription = {}));
});
//# sourceMappingURL=trackSubscription.js.map