define(["require", "exports", "rxjs", "rxjs/operators"], function (require, exports, rxjs_1, operators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.refCountDelay = void 0;
    function refCountDelay(duration, scheduler) {
        if (scheduler === void 0) { scheduler = rxjs_1.asapScheduler; }
        return function (source) {
            var connectable = source;
            var connectableSubscription = null;
            var connectorSubscription = null;
            var notifier = new rxjs_1.Subject();
            var connector = notifier.pipe(operators_1.scan(function (count, step) { return count + step; }, 0), operators_1.switchMap(function (count) {
                if (count === 0) {
                    return rxjs_1.timer(duration, scheduler).pipe(operators_1.tap(function () {
                        if (connectableSubscription) {
                            connectableSubscription.unsubscribe();
                            connectableSubscription = null;
                        }
                        if (connectorSubscription) {
                            connectorSubscription.unsubscribe();
                            connectorSubscription = null;
                        }
                    }));
                }
                if (!connectableSubscription && count > 0) {
                    return rxjs_1.timer(0, scheduler).pipe(operators_1.tap(function () {
                        if (!connectableSubscription) {
                            connectableSubscription = connectable.connect();
                        }
                    }));
                }
                return rxjs_1.NEVER;
            }));
            return rxjs_1.using(function () {
                if (!connectorSubscription) {
                    connectorSubscription = connector.subscribe();
                }
                notifier.next(1);
                return { unsubscribe: function () { return notifier.next(-1); } };
            }, function () { return source; });
        };
    }
    exports.refCountDelay = refCountDelay;
});
//# sourceMappingURL=refCountDelay.js.map