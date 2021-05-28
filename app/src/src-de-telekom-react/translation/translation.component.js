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
define(["require", "exports", "react", "../base/public", "./translation.service"], function (require, exports, React, public_1, translation_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TranslationComponent = void 0;
    var TranslationComponent = (function (_super) {
        __extends(TranslationComponent, _super);
        function TranslationComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TranslationComponent.prototype.getContextValue = function () {
            return __assign(__assign({}, _super.prototype.getContextValue.call(this)), { intl: translation_service_1.TranslationService.getInstance().getTranslation() });
        };
        TranslationComponent.prototype.render = function () {
            return React.createElement(React.Fragment, null, this.props.children);
        };
        TranslationComponent = __decorate([
            public_1.reactComponent({
                ID: "translation-component"
            })
        ], TranslationComponent);
        return TranslationComponent;
    }(public_1.ReactBaseComponent));
    exports.TranslationComponent = TranslationComponent;
});
//# sourceMappingURL=translation.component.js.map