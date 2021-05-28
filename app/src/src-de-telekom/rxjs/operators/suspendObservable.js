define(["require", "exports", "rxjs/operators"], function (require, exports, operators_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.suspend = void 0;
    function suspend(subjectToSuspend) {
        return function (source) {
            return source
                .pipe(operators_1.takeUntil(subjectToSuspend.pipe(operators_1.distinctUntilChanged(), operators_1.filter(function (item) { return item; }))), operators_1.repeatWhen(function () { return subjectToSuspend.pipe(operators_1.distinctUntilChanged(), operators_1.filter(function (item) { return !item; })); }));
        };
    }
    exports.suspend = suspend;
});
//# sourceMappingURL=suspendObservable.js.map