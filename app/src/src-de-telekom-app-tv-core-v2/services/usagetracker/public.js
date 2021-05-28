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
define(["require", "exports", "src/src-de-telekom-react/public", "./usagetracker.service", "./usagetracker.service"], function (require, exports, public_1, usagetracker_service_1, usagetracker_service_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UsageTrackerModule = exports.TVUsageTrackerService = void 0;
    Object.defineProperty(exports, "TVUsageTrackerService", { enumerable: true, get: function () { return usagetracker_service_2.TVUsageTrackerService; } });
    var UsageTrackerModule = (function (_super) {
        __extends(UsageTrackerModule, _super);
        function UsageTrackerModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UsageTrackerModule.prototype.run = function () {
            usagetracker_service_1.TVUsageTrackerService.getInstance();
        };
        return UsageTrackerModule;
    }(public_1.ReactBaseModule));
    exports.UsageTrackerModule = UsageTrackerModule;
});
//# sourceMappingURL=public.js.map