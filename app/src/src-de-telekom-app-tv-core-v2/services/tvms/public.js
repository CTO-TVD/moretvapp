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
define(["require", "exports", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/public", "./tvms.service", "./tvms.service"], function (require, exports, public_1, public_2, public_3, tvms_service_1, tvms_service_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TvmsModule = void 0;
    __exportStar(tvms_service_2, exports);
    var TvmsModule = (function (_super) {
        __extends(TvmsModule, _super);
        function TvmsModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TvmsModule_1 = TvmsModule;
        TvmsModule.prototype.run = function () {
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("init TVMSModule", TvmsModule_1.TAG)); });
            var tvmsService = new tvms_service_1.TvmsService();
            public_2.ApplicationClient.events.onMessage(function (event) { return tvmsService.handleTvmsMessage(event); });
        };
        var TvmsModule_1;
        TvmsModule = TvmsModule_1 = __decorate([
            public_3.logTag()
        ], TvmsModule);
        return TvmsModule;
    }(public_1.ReactBaseModule));
    exports.TvmsModule = TvmsModule;
});
//# sourceMappingURL=public.js.map