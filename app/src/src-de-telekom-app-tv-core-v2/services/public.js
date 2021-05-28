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
define(["require", "exports", "src/src-de-telekom-react/public", "./displaymanagement/public", "./diagnosticevent/public", "./instrumentation/public", "./tvms/public", "./usagetracker/public", "./frontdisplay/public", "./displaymanagement/public", "./instrumentation/public", "./mediaplayer/public", "./usagetracker/public", "./frontdisplay/public", "./diagnosticevent/public"], function (require, exports, public_1, public_2, public_3, public_4, public_5, public_6, public_7, public_8, public_9, public_10, public_11, public_12, public_13) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppCoreServicesModule = exports.DiagnosticDeviceAction = exports.DiagnosticEventService = exports.FrontDisplayService = exports.TVUsageTrackerService = void 0;
    __exportStar(public_8, exports);
    __exportStar(public_9, exports);
    __exportStar(public_10, exports);
    Object.defineProperty(exports, "TVUsageTrackerService", { enumerable: true, get: function () { return public_11.TVUsageTrackerService; } });
    Object.defineProperty(exports, "FrontDisplayService", { enumerable: true, get: function () { return public_12.FrontDisplayService; } });
    Object.defineProperty(exports, "DiagnosticEventService", { enumerable: true, get: function () { return public_13.DiagnosticEventService; } });
    Object.defineProperty(exports, "DiagnosticDeviceAction", { enumerable: true, get: function () { return public_13.DiagnosticDeviceAction; } });
    var AppCoreServicesModule = (function (_super) {
        __extends(AppCoreServicesModule, _super);
        function AppCoreServicesModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AppCoreServicesModule = __decorate([
            public_1.reactSubModule(public_6.UsageTrackerModule),
            public_1.reactSubModule(public_2.DisplayManagementModule),
            public_1.reactSubModule(public_3.DiagnosticEventModule),
            public_1.reactSubModule(public_4.InstrumentationModule),
            public_1.reactSubModule(public_5.TvmsModule),
            public_1.reactSubModule(public_7.FrontDisplayModule)
        ], AppCoreServicesModule);
        return AppCoreServicesModule;
    }(public_1.ReactBaseModule));
    exports.AppCoreServicesModule = AppCoreServicesModule;
});
//# sourceMappingURL=public.js.map