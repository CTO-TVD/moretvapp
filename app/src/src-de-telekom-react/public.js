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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define(["require", "exports", "./base/public", "./baseRouter/public", "./component/public", "./filter/public", "./framework/public", "./service/public", "./translation/public", "./intent/public", "./translation/public", "./base/public", "./framework/public", "./service/public", "./react.configuration"], function (require, exports, public_1, public_2, public_3, public_4, public_5, public_6, public_7, public_8, public_9, public_10, public_11, public_12) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReactCoreModule = void 0;
    __exportStar(public_1, exports);
    __exportStar(public_2, exports);
    __exportStar(public_3, exports);
    __exportStar(public_4, exports);
    __exportStar(public_5, exports);
    __exportStar(public_6, exports);
    __exportStar(public_7, exports);
    __exportStar(public_8, exports);
    var ReactCoreModule = (function (_super) {
        __extends(ReactCoreModule, _super);
        function ReactCoreModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ReactCoreModule = __decorate([
            public_10.reactSubModule(public_9.TranslationModule),
            public_10.reactSubModule(public_11.ReactCoreFrameworkModule),
            public_10.reactSubModule(public_12.ReactCoreServiceModule)
        ], ReactCoreModule);
        return ReactCoreModule;
    }(public_10.ReactBaseModule));
    exports.ReactCoreModule = ReactCoreModule;
});
//# sourceMappingURL=public.js.map