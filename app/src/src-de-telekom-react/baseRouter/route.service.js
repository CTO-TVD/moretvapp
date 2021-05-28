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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "../base/public", "src/src-de-telekom/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RouteService = void 0;
    var RouteService = (function (_super) {
        __extends(RouteService, _super);
        function RouteService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.routes = [];
            return _this;
        }
        RouteService_1 = RouteService;
        RouteService.prototype.registerRoute = function (routes) {
            for (var _i = 0, _a = routes || []; _i < _a.length; _i++) {
                var route = _a[_i];
                this.routes.push(route);
            }
            if (this.cbSetAllRoutes)
                this.cbSetAllRoutes(this.routes);
        };
        RouteService.prototype.registerRouter = function (history, cbSetBasePath, cbSetAllRoutes) {
            var _this = this;
            this.history = history;
            this.cbSetBasePath = cbSetBasePath;
            this.cbSetAllRoutes = cbSetAllRoutes;
            if (this.basePath)
                this.cbSetBasePath(this.basePath);
            if (this.routes)
                this.cbSetAllRoutes(this.routes);
            return function () {
                _this.history = undefined;
                _this.cbSetBasePath = undefined;
                _this.cbSetAllRoutes = undefined;
            };
        };
        RouteService.prototype.setBasePath = function (path) {
            this.basePath = path;
            if (this.cbSetBasePath && this.basePath)
                this.cbSetBasePath(this.basePath);
        };
        RouteService.prototype.getBasePath = function () {
            return this.basePath;
        };
        RouteService.prototype.getHistory = function () {
            if (this.history) {
                return this.history;
            }
            else {
                if (public_1.ReactBaseModule.currentPhase < public_1.ReactBaseModulePhase.active) {
                    throw new public_1.ReactRouterError("The <history> is only available in the 'active' phase.");
                }
                else {
                    throw new public_1.ReactRouterError("The <history> is only available if the main <router> exists.");
                }
            }
        };
        RouteService.prototype.startIntent = function (intent, options) {
            return this.getHistory().startIntent(intent, options);
        };
        Object.defineProperty(RouteService.prototype, "location", {
            get: function () {
                return this.getHistory().location;
            },
            enumerable: false,
            configurable: true
        });
        var RouteService_1;
        __decorate([
            public_2.log2(function () { return ({ name: RouteService_1.TAG }); })
        ], RouteService.prototype, "setBasePath", null);
        __decorate([
            public_2.log2(function () { return ({ name: RouteService_1.TAG }); })
        ], RouteService.prototype, "getBasePath", null);
        RouteService = RouteService_1 = __decorate([
            public_2.logTag()
        ], RouteService);
        return RouteService;
    }(public_1.ReactBaseService));
    exports.RouteService = RouteService;
});
//# sourceMappingURL=route.service.js.map