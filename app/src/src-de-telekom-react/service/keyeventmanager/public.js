var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define(["require", "exports", "rxjs", "rxjs/operators", "./keyeventmanager.service", "../../base/public", "./keycode.config", "./keycode.config", "./keyeventmanager.service", "./keyevent.source.PC", "./keyevent.source.STB", "./keyevent.source.PC.standby", "./keyevent.source.STB.standby"], function (require, exports, rxjs_1, operators_1, keyeventmanager_service_1, public_1, keycode_config_1, keycode_config_2, keyeventmanager_service_2, keyevent_source_PC_1, keyevent_source_STB_1, keyevent_source_PC_standby_1, keyevent_source_STB_standby_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KeyEventManagerModule = exports.longPressOperatorInterval = exports.longPressOperator = void 0;
    __exportStar(keycode_config_2, exports);
    __exportStar(keyeventmanager_service_2, exports);
    __exportStar(keyevent_source_PC_1, exports);
    __exportStar(keyevent_source_STB_1, exports);
    __exportStar(keyevent_source_PC_standby_1, exports);
    __exportStar(keyevent_source_STB_standby_1, exports);
    function longPressOperator() {
        return function (source) {
            var clickEventsDistinct = source.pipe(operators_1.distinctUntilChanged(function (x, y) { return x.virtualKey == y.virtualKey; }));
            var upEvents = clickEventsDistinct.pipe(operators_1.filter(function (item) { return item.virtualKey == keycode_config_1.TVKeyCodeConfig.KEYEVENT_UP_KEY; }));
            var downEvents = clickEventsDistinct.pipe(operators_1.filter(function (item) { return item.virtualKey !== keycode_config_1.TVKeyCodeConfig.KEYEVENT_UP_KEY; }));
            var longpressEvents = downEvents.pipe(operators_1.switchMap(function (item) { return rxjs_1.timer(1000).pipe(operators_1.takeUntil(upEvents), operators_1.mergeMap(function () { return rxjs_1.of(__assign(__assign({}, item), { longpress: true })); })); }));
            var shortEvents = downEvents.pipe(operators_1.switchMap(function (item) { return upEvents.pipe(operators_1.takeUntil(longpressEvents), operators_1.mergeMap(function () { return rxjs_1.of(__assign(__assign({}, item), { longpress: false })); })); }));
            return rxjs_1.merge(longpressEvents, shortEvents);
        };
    }
    exports.longPressOperator = longPressOperator;
    function longPressOperatorInterval() {
        return function (source) {
            var clickEventsDistinct = source.pipe(operators_1.distinctUntilChanged(function (x, y) { return x.virtualKey == y.virtualKey; }));
            var upEvents = clickEventsDistinct.pipe(operators_1.filter(function (item) { return item.virtualKey == keycode_config_1.TVKeyCodeConfig.KEYEVENT_UP_KEY; }));
            var downEvents = clickEventsDistinct.pipe(operators_1.filter(function (item) { return item.virtualKey !== keycode_config_1.TVKeyCodeConfig.KEYEVENT_UP_KEY; }));
            var longpressEvents = downEvents.pipe(operators_1.switchMap(function (item) { return rxjs_1.interval(1000).pipe(operators_1.takeUntil(upEvents), operators_1.mergeMap(function () { return rxjs_1.of(__assign(__assign({}, item), { longpress: true })); })); }));
            var shortEvents = downEvents.pipe(operators_1.switchMap(function (item) { return upEvents.pipe(operators_1.takeUntil(longpressEvents), operators_1.mergeMap(function () { return rxjs_1.of(__assign(__assign({}, item), { longpress: false })); })); }));
            return rxjs_1.merge(longpressEvents, shortEvents);
        };
    }
    exports.longPressOperatorInterval = longPressOperatorInterval;
    var KeyEventManagerModule = (function (_super) {
        __extends(KeyEventManagerModule, _super);
        function KeyEventManagerModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        KeyEventManagerModule.prototype.run = function () {
            keyeventmanager_service_1.TVKeyEventManagerService.getInstance().setSource();
        };
        return KeyEventManagerModule;
    }(public_1.ReactBaseModule));
    exports.KeyEventManagerModule = KeyEventManagerModule;
});
//# sourceMappingURL=public.js.map