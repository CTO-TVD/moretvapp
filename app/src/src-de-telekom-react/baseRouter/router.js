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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define(["require", "exports", "bluebird", "react", "../base/public", "./route.service", "src/src-de-telekom/public"], function (require, exports, bluebird, React, public_1, route_service_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Router = exports.RouterId = void 0;
    exports.RouterId = { ID: "router-component" };
    var Router = (function (_super) {
        __extends(Router, _super);
        function Router(props, context) {
            var _a;
            var _this = _super.call(this, props, context) || this;
            _this.subRoutes = [];
            var _b = _this.props, children = _b.children, history = _b.history;
            _this.state = {
                match: _this.computeMatch(history.location.pathname),
                history: history
            };
            if ((_a = _this.context) === null || _a === void 0 ? void 0 : _a.router)
                throw new public_1.ReactRouterError("A <Router> cannot be used nested.");
            if (children !== null && React.Children.count(children) > 1)
                throw new public_1.ReactRouterError("A <Router> may have only one child element");
            return _this;
        }
        Router_1 = Router;
        Router.prototype.componentDidMount = function () {
            var _this = this;
            var history = this.props.history;
            var unlisten1 = history.onChange(function () {
                _this.setState({
                    match: _this.computeMatch(history.location.pathname)
                });
            });
            var unlisten2 = history.onSaveState(function () {
                var data = {};
                _this.broadcastMessage(Router_1.BroadCastOnPushstateCollect, data);
                history.location.state = data;
            });
            var unlisten3 = history.onCheck(function (location, checkOptions, checkData) {
                var check = bluebird.resolve(null);
                var _loop_1 = function (route) {
                    check = check.then(function () { return route.checkIntent(location, "leave", checkOptions, checkData); });
                };
                for (var _i = 0, _a = _this.subRoutes; _i < _a.length; _i++) {
                    var route = _a[_i];
                    _loop_1(route);
                }
                var _loop_2 = function (route) {
                    check = check.then(function () { return route.checkIntent(location, "enter", checkOptions, checkData); });
                };
                for (var _b = 0, _c = _this.subRoutes; _b < _c.length; _b++) {
                    var route = _c[_b];
                    _loop_2(route);
                }
                return check;
            });
            var unlisten4 = this.props.mainRouter
                ? route_service_1.RouteService.getInstance().registerRouter(history, function (basePath) { return _this.setState(function (prevState) {
                    if (prevState.basePath !== basePath) {
                        public_2.Logger.debug(function (log) { return log(public_2.LogMsg("setBasePath from '" + (prevState.basePath ? prevState.basePath.pathname : "<empty>") + "' --> '" + (basePath ? basePath.pathname : "<empty>") + "'", Router_1.TAG)); });
                        return { basePath: basePath };
                    }
                    return null;
                }); }, function (allRoutes) { return _this.setState({ allRoutes: __spreadArrays(allRoutes) }); })
                : function () { };
            this.onDestroy(function () {
                unlisten1();
                unlisten2();
                unlisten3();
                unlisten4();
            });
        };
        Router.getDerivedStateFromProps = function (nextProps, prevState) {
            if (prevState.history !== nextProps.history)
                throw new public_1.ReactRouterError("You cannot change <Router history>");
            return null;
        };
        Router.prototype.getContextValue = function () {
            return __assign(__assign({}, _super.prototype.getContextValue.call(this)), { router: {
                    history: this.props.history,
                    route: {
                        location: this.props.history.location,
                        match: this.state.match
                    },
                    basePath: this.state.basePath
                } });
        };
        Router.prototype.computeMatch = function (pathname) {
            return {
                path: "/",
                url: "/",
                isExact: pathname === "/"
            };
        };
        Router.prototype.registerComponent = function (component) {
            var _this = this;
            this.subRoutes.push(component);
            return function () {
                var index = _this.subRoutes.indexOf(component);
                if (index !== -1) {
                    _this.subRoutes.splice(index, 1);
                }
            };
        };
        Router.prototype.getRoutes = function (allRoutes) {
            return allRoutes === null || allRoutes === void 0 ? void 0 : allRoutes.map(function (route, index) { return route("r" + index); });
        };
        Router.prototype.render = function () {
            var children = this.props.children;
            return React.createElement(React.Fragment, null,
                children && React.Children.only(children),
                this.getRoutes(this.state.allRoutes));
        };
        var Router_1;
        __decorate([
            public_2.Memoize.decorator()
        ], Router.prototype, "getRoutes", null);
        Router = Router_1 = __decorate([
            public_1.reactComponent({
                ID: exports.RouterId.ID
            }),
            public_2.logTag()
        ], Router);
        return Router;
    }(public_1.ReactBaseComponent));
    exports.Router = Router;
});
//# sourceMappingURL=router.js.map