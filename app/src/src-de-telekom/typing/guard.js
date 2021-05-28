define(["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Guard = void 0;
    var Guard = (function () {
        function Guard() {
        }
        Guard.isDefined = function (value) {
            return typeof value !== "undefined";
        };
        Guard.isUndefined = function (value) {
            return typeof value === "undefined";
        };
        Guard.isPureObject = function (value) {
            return !!value && (value.constructor === undefined || value.constructor === Object);
        };
        Guard.isObject = function (value) {
            return !!value && typeof value === "object";
        };
        Guard.isEmptyObject = function (value) {
            return !value || Object.keys(value).length === 0 && value.constructor === Object;
        };
        Guard.isNumber = function (value) {
            return typeof value === "number" && !isNaN(value);
        };
        Guard.isString = function (value) {
            return typeof value === "string";
        };
        Guard.isNonEmptyString = function (value) {
            return typeof value === "string" && value !== "";
        };
        Guard.isBoolean = function (value) {
            return typeof value === "boolean";
        };
        Guard.isPromise = function (value) {
            return !!value && typeof value.then === "function" && typeof value.catch === "function";
        };
        Guard.isDate = function (value) {
            return value instanceof Date && !isNaN(value.valueOf());
        };
        Guard.isFunction = function (value) {
            return typeof value === "function";
        };
        Guard.isObservable = function (obj) {
            return rxjs_1.isObservable(obj);
        };
        Guard.isObserver = function (obj) {
            return !!obj && typeof obj.next === "function" && typeof obj.error === "function" && typeof obj.complete === "function";
        };
        return Guard;
    }());
    exports.Guard = Guard;
});
//# sourceMappingURL=guard.js.map