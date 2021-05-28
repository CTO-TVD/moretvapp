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
define(["require", "exports", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-moretv/public", "src/src-de-telekom-tv-core/public", "./component/content_tiles/public", "./component/detailpage/public", "./component/purchase/public"], function (require, exports, public_1, public_2, public_3, public_4, public_5, public_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppTvMtvModule = void 0;
    __exportStar(public_4, exports);
    __exportStar(public_5, exports);
    __exportStar(public_6, exports);
    var AppTvMtvModule = (function (_super) {
        __extends(AppTvMtvModule, _super);
        function AppTvMtvModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AppTvMtvModule.prototype.config = function () {
            if (!public_2.ServiceClientContext.instance) {
                public_2.ServiceClientContext.instance = new public_2.ServiceClientContext(function (input) { return public_3.ApplicationClient.authMan.getAccessToken(input); });
            }
        };
        return AppTvMtvModule;
    }(public_1.ReactBaseModule));
    exports.AppTvMtvModule = AppTvMtvModule;
});
//# sourceMappingURL=public.js.map