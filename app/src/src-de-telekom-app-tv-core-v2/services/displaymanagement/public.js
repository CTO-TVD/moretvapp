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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define(["require", "exports", "src/src-de-telekom-react/public", "./displaymanagement.service", "./displaymanagement.service"], function (require, exports, public_1, displaymanagement_service_1, displaymanagement_service_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DisplayManagementModule = void 0;
    __exportStar(displaymanagement_service_2, exports);
    var DisplayManagementModule = (function (_super) {
        __extends(DisplayManagementModule, _super);
        function DisplayManagementModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DisplayManagementModule.prototype.run = function () {
            displaymanagement_service_1.DisplayManagementService.getInstance();
        };
        return DisplayManagementModule;
    }(public_1.ReactBaseModule));
    exports.DisplayManagementModule = DisplayManagementModule;
});
//# sourceMappingURL=public.js.map