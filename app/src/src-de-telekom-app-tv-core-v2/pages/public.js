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
define(["require", "exports", "src/src-de-telekom-react/public", "./applauncher/public", "./core/public", "./globalerror/public", "./uar/public", "./applauncher/public", "./navigation/public", "./uar/public"], function (require, exports, public_1, public_2, public_3, public_4, public_5, public_6, public_7, public_8) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppTvCorePagesModule = void 0;
    __exportStar(public_6, exports);
    __exportStar(public_7, exports);
    __exportStar(public_8, exports);
    var AppTvCorePagesModule = (function (_super) {
        __extends(AppTvCorePagesModule, _super);
        function AppTvCorePagesModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AppTvCorePagesModule = __decorate([
            public_1.reactSubModule(public_2.AppLauncherModule),
            public_1.reactSubModule(public_3.CoreModule),
            public_1.reactSubModule(public_5.UarModule),
            public_1.reactSubModule(public_4.GlobalErrorModule)
        ], AppTvCorePagesModule);
        return AppTvCorePagesModule;
    }(public_1.ReactBaseModule));
    exports.AppTvCorePagesModule = AppTvCorePagesModule;
});
//# sourceMappingURL=public.js.map