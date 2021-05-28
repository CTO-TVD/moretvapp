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
define(["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.initialize = void 0;
    var InitializeOperator = (function () {
        function InitializeOperator(callback) {
            this.callback = callback;
        }
        InitializeOperator.prototype.call = function (subscriber, source) {
            return source.subscribe(new InitializeSubscriber(subscriber, this.callback));
        };
        return InitializeOperator;
    }());
    var InitializeSubscriber = (function (_super) {
        __extends(InitializeSubscriber, _super);
        function InitializeSubscriber(destination, callback) {
            var _this = _super.call(this, destination) || this;
            callback();
            return _this;
        }
        return InitializeSubscriber;
    }(rxjs_1.Subscriber));
    function initialize(callback) {
        return function (source) { return source.lift(new InitializeOperator(callback)); };
    }
    exports.initialize = initialize;
});
//# sourceMappingURL=initialize.js.map