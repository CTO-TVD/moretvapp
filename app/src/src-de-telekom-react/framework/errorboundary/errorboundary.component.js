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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "react", "../../base/public", "../../service/keyeventmanager/public", "src/src-de-telekom/public", "src/src-de-telekom-style/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ErrorBoundaryComponent = void 0;
    var ErrorBoundaryComponent = (function (_super) {
        __extends(ErrorBoundaryComponent, _super);
        function ErrorBoundaryComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = { hasError: false };
            return _this;
        }
        ErrorBoundaryComponent_1 = ErrorBoundaryComponent;
        ErrorBoundaryComponent.prototype.componentDidCatch = function (error, errorInfo) {
            var _this = this;
            this.setState({ hasError: true, error: error, errorInfo: errorInfo });
            public_3.ErrorManager.catch(new public_1.ReactUnhandledApplicationError(error.message, error.name, error.stack, errorInfo.componentStack), ErrorBoundaryComponent_1, 0x1);
            setTimeout(function () {
                var unregister = public_2.TVKeyEventManagerService
                    .getInstance()
                    .onAfter(function (args) {
                    unregister();
                    _this.setState({ hasError: false });
                }, ErrorBoundaryComponent_1.TAG);
            }, 1000);
        };
        ErrorBoundaryComponent.prototype.render = function () {
            var _a, _b;
            if (this.state.hasError) {
                var message = (_a = this.state.error) === null || _a === void 0 ? void 0 : _a.message;
                var stack = (_b = this.state.errorInfo) === null || _b === void 0 ? void 0 : _b.componentStack;
                return React.createElement("div", { className: this.ID },
                    React.createElement("h2", null, "A component execution error occured"),
                    React.createElement("h3", null, message),
                    stack && React.createElement("p", { dangerouslySetInnerHTML: { __html: stack.replace(/\n/g, "<br />") } }));
            }
            if (this.props.children)
                return this.props.children;
            return null;
        };
        var ErrorBoundaryComponent_1;
        ErrorBoundaryComponent.classID = 0x726;
        ErrorBoundaryComponent = ErrorBoundaryComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "error-boundary-component",
                styles: [
                    public_4.selector("&")
                        .props({
                        backgroundColor: public_4.Css.colors.global_background_low_transparent,
                        height: "inherit",
                        width: "inherit",
                        position: "absolute"
                    })
                ]
            }),
            public_3.logTag()
        ], ErrorBoundaryComponent);
        return ErrorBoundaryComponent;
    }(public_1.ReactBaseComponent));
    exports.ErrorBoundaryComponent = ErrorBoundaryComponent;
});
//# sourceMappingURL=errorboundary.component.js.map