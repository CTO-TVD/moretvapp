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
define(["require", "exports", "bluebird", "react", "./matchpath", "../base/public", "./router", "src/src-de-telekom/public"], function (require, exports, bluebird, React, matchpath_1, public_1, router_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Route = void 0;
    var isEmptyChildren = function (children) { return React.Children.count(children) === 0; };
    var RouteInternal = (function (_super) {
        __extends(RouteInternal, _super);
        function RouteInternal(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.onEnter = function (callback) {
                if (_this.cbOnEnter)
                    throw new public_1.ReactRouterError("Event onEnter can only be used by exact one component.");
                _this.cbOnEnter = callback;
                return function () {
                    _this.cbOnEnter = undefined;
                };
            };
            _this.onLeave = function (callback) {
                if (_this.cbOnLeave)
                    throw new public_1.ReactRouterError("Event onLeave can only be used by exact one component.");
                _this.cbOnLeave = callback;
                return function () {
                    _this.cbOnLeave = undefined;
                };
            };
            if (!_this.props.router)
                throw new public_1.ReactRouterError("You should not use <Route> or withRouter() outside a <Router>");
            if (_this.props.component && _this.props.render)
                throw new public_1.ReactRouterError("You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");
            if (_this.props.component && _this.props.children && !isEmptyChildren(_this.props.children))
                throw new public_1.ReactRouterError("You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");
            if (_this.props.render && _this.props.children && !isEmptyChildren(_this.props.children))
                throw new public_1.ReactRouterError("You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
            _this.state = {
                match: RouteInternal_1.computeMatch(props),
                id: 0,
                location: props.router.history.location
            };
            var parentRouter = _this.findParentComponent(router_1.RouterId).component;
            var unregisterComponent = parentRouter ? parentRouter.registerComponent(_this) : undefined;
            _this.onDestroy(function () {
                if (unregisterComponent)
                    unregisterComponent();
            });
            return _this;
        }
        RouteInternal_1 = RouteInternal;
        RouteInternal.prototype.getContextValue = function () {
            return __assign(__assign({}, _super.prototype.getContextValue.call(this)), { router: __assign(__assign({}, this.props.router), { route: {
                        location: this.props.router.route.location,
                        match: this.state.match
                    } }) });
        };
        RouteInternal.computeMatch = function (props, pathname) {
            var path = pathname || props.router.route.location.pathname;
            if (path === "/" && props.router.basePath) {
                path = props.router.basePath.pathname;
            }
            return matchpath_1.matchPath(path, props);
        };
        RouteInternal.getDerivedStateFromProps = function (nextProps, prevState) {
            var match = RouteInternal_1.computeMatch(nextProps);
            if (nextProps.reloadOnChange
                && prevState.match
                && match
                && nextProps.router.route.location !== prevState.location) {
                return { match: match, id: prevState.id + 1, location: nextProps.router.route.location };
            }
            return { match: match, location: nextProps.router.route.location };
        };
        RouteInternal.prototype.checkIntent = function (location, phase, checkOptions, checkData) {
            var _this = this;
            if (phase === "leave") {
                if (this.state.match) {
                    var newMatch = RouteInternal_1.computeMatch(this.props, location.pathname);
                    if (!newMatch) {
                        return bluebird.resolve()
                            .then(function () { return _this.cbOnLeave ? _this.cbOnLeave(location, checkOptions) : null; })
                            .then(function () { return _this.props.onLeave ? _this.props.onLeave(location, checkOptions) : null; });
                    }
                }
            }
            else if (phase === "enter") {
                var newMatch = RouteInternal_1.computeMatch(this.props, location.pathname);
                if (newMatch) {
                    checkData.count++;
                    if (!this.state.match) {
                        return bluebird.resolve()
                            .then(function () { return _this.cbOnEnter ? _this.cbOnEnter(location, checkOptions) : null; })
                            .then(function () { return _this.props.onEnter ? _this.props.onEnter(location, checkOptions) : null; });
                    }
                }
            }
            return undefined;
        };
        RouteInternal.prototype.getUniqueId = function () {
            return "(route:"
                + (this.props.path && (public_2.Guard.isString(this.props.path) ? this.props.path : this.props.path.pathname) || "/")
                + ")";
        };
        RouteInternal.prototype.render = function () {
            var match = this.state.match;
            var _a = this.props, children = _a.children, component = _a.component, render = _a.render, router = _a.router;
            var history = router.history, route = router.route;
            var location = route.location;
            var props = {
                match: match, location: location, history: history,
                events: {
                    onEnter: this.onEnter,
                    onLeave: this.onLeave
                },
                key: this.state.id
            };
            if (component) {
                return match ? React.createElement(component, props) : null;
            }
            if (render) {
                return match ? render(props) : null;
            }
            if (typeof children === "function") {
                return children(props);
            }
            if (children && !isEmptyChildren(children)) {
                return React.Children.only(children);
            }
            return null;
        };
        var RouteInternal_1;
        RouteInternal = RouteInternal_1 = __decorate([
            public_1.reactComponent({
                ID: "route-component"
            })
        ], RouteInternal);
        return RouteInternal;
    }(public_1.ReactBaseComponent));
    var Route = function (props) {
        return React.createElement(public_1.ReactBaseContext.Consumer, null, function (value) { return React.createElement(RouteInternal, __assign({}, props, { router: value.router })); });
    };
    exports.Route = Route;
});
//# sourceMappingURL=route.js.map