var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "react", "./history", "./router", "../base/public"], function (require, exports, React, history_1, router_1, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BrowserRouter = void 0;
    var BrowserRouter = (function (_super) {
        __extends(BrowserRouter, _super);
        function BrowserRouter() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.history = history_1.History.createHistory();
            return _this;
        }
        BrowserRouter.prototype.render = function () {
            return React.createElement(router_1.Router, __assign({ history: this.history }, this.props));
        };
        BrowserRouter = __decorate([
            public_1.reactComponent({
                ID: "browser-router-component"
            })
        ], BrowserRouter);
        return BrowserRouter;
    }(public_1.ReactBaseComponent));
    exports.BrowserRouter = BrowserRouter;
});
//# sourceMappingURL=browserrouter.js.map