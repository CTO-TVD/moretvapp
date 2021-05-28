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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "react", "./reactBaseComponent", "./reactDecorator"], function (require, exports, React, reactBaseComponent_1, reactDecorator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createInjector = void 0;
    var createInjector = function (injectProps) { return function (InnerComponent) {
        var CoercedWrappedComponent = InnerComponent;
        var InjectorElement = (function (_super) {
            __extends(InjectorElement, _super);
            function InjectorElement() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            InjectorElement.prototype.render = function () {
                return React.createElement(CoercedWrappedComponent, __assign({}, this.props, injectProps()));
            };
            InjectorElement = __decorate([
                reactDecorator_1.reactComponent({
                    ID: "injector-component",
                    isWrapper: true
                })
            ], InjectorElement);
            return InjectorElement;
        }(reactBaseComponent_1.ReactBaseComponent));
        return InjectorElement;
    }; };
    exports.createInjector = createInjector;
});
//# sourceMappingURL=reactHoc.js.map