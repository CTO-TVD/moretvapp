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
define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReactRouterNoRouteError = exports.ReactRouterError = exports.ReactUnhandledApplicationError = exports.ReactBaseError = void 0;
    var ReactBaseError = (function (_super) {
        __extends(ReactBaseError, _super);
        function ReactBaseError(message) {
            var _this = _super.call(this, message) || this;
            _this.errorID = 0x010;
            return _this;
        }
        return ReactBaseError;
    }(public_1.BaseError));
    exports.ReactBaseError = ReactBaseError;
    var ReactUnhandledApplicationError = (function (_super) {
        __extends(ReactUnhandledApplicationError, _super);
        function ReactUnhandledApplicationError(message, name, stackTrace, componentStack) {
            var _this = _super.call(this, message) || this;
            _this.name = name;
            _this.stackTrace = stackTrace;
            _this.componentStack = componentStack;
            _this.errorID = 0x011;
            return _this;
        }
        return ReactUnhandledApplicationError;
    }(public_1.BaseError));
    exports.ReactUnhandledApplicationError = ReactUnhandledApplicationError;
    var ReactRouterError = (function (_super) {
        __extends(ReactRouterError, _super);
        function ReactRouterError(message) {
            var _this = _super.call(this, message) || this;
            _this.errorID = 0x012;
            return _this;
        }
        return ReactRouterError;
    }(public_1.BaseError));
    exports.ReactRouterError = ReactRouterError;
    var ReactRouterNoRouteError = (function (_super) {
        __extends(ReactRouterNoRouteError, _super);
        function ReactRouterNoRouteError(message) {
            var _this = _super.call(this, message) || this;
            _this.errorID = 0x013;
            return _this;
        }
        return ReactRouterNoRouteError;
    }(public_1.BaseError));
    exports.ReactRouterNoRouteError = ReactRouterNoRouteError;
});
//# sourceMappingURL=reactBaseError.js.map