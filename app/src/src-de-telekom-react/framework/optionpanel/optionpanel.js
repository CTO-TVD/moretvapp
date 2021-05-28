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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
define(["require", "exports", "react", "../../baseRouter/public", "src/src-de-telekom-style/public", "./public", "../../base/public", "react-transition-group", "./optionpanel.page"], function (require, exports, React, public_1, public_2, public_3, public_4, react_transition_group_1, optionpanel_page_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVOptionPanelComponent = void 0;
    var TVOptionPanelComponent = (function (_super) {
        __extends(TVOptionPanelComponent, _super);
        function TVOptionPanelComponent(props, context) {
            var _a;
            var _this = _super.call(this, props, context) || this;
            _this.addRoute = function (path) {
                _this.setState(function (prevState) {
                    if (prevState.routes.indexOf(path) === -1) {
                        return { routes: __spreadArray(__spreadArray([], prevState.routes), [path]) };
                    }
                    return null;
                });
            };
            var optionPanelService = public_3.TVOptionPanelService.getInstance();
            var optionPanelData = optionPanelService.getNextOptionPanel();
            if (optionPanelData) {
                _this.state = {
                    optionPanelData: optionPanelData,
                    routes: ((_a = optionPanelData === null || optionPanelData === void 0 ? void 0 : optionPanelData.model) === null || _a === void 0 ? void 0 : _a.items) ? ["/"] : []
                };
            }
            if (optionPanelData && (!optionPanelData.model || !optionPanelData.model.items)) {
                if (optionPanelData.abortOptionPanel)
                    optionPanelData.abortOptionPanel({ resultItem: undefined });
                return _this;
            }
            return _this;
        }
        TVOptionPanelComponent_1 = TVOptionPanelComponent;
        TVOptionPanelComponent.prototype.componentWillUnmount = function () {
            this.state.optionPanelData.abortOptionPanel({ resultItem: undefined });
        };
        TVOptionPanelComponent.prototype.render = function () {
            var _this = this;
            var backgroundClass = "background";
            return React.createElement(React.Fragment, null,
                React.createElement(react_transition_group_1.CSSTransition, { timeout: TVOptionPanelComponent_1.backgroundAnimationDuration, classNames: "fade", in: true, appear: true },
                    React.createElement("div", { className: this.ID + " " + backgroundClass })),
                React.createElement(public_1.BrowserRouter, null,
                    React.createElement(React.Fragment, null, this.state.routes.map(function (route, index) { return React.createElement(public_1.Route, { key: index, path: route, exact: true, render: function () { return React.createElement(optionpanel_page_1.TVOptionPanelPage, { onAddRoute: _this.addRoute }); } }); }))));
        };
        var TVOptionPanelComponent_1;
        TVOptionPanelComponent.backgroundAnimationDuration = 250;
        TVOptionPanelComponent = TVOptionPanelComponent_1 = __decorate([
            public_4.reactComponent({
                ID: "option-panel-component",
                styles: [
                    public_2.selector("&.background")
                        .props({
                        backgroundColor: public_2.Css.colors.A_CO_4_35,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: public_2.Css.dimensions.screenHeight,
                        width: public_2.Css.dimensions.screenWidth
                    }),
                    public_2.selector("&.fade-appear")
                        .props({
                        opacity: 0
                    }),
                    public_2.selector("&.fade-appear.fade-appear-active")
                        .props({
                        opacity: 1,
                        transition: "opacity " + TVOptionPanelComponent_1.backgroundAnimationDuration + "ms ease"
                    }),
                    public_2.selector("&.fade-exit")
                        .props({
                        opacity: 1
                    }),
                    public_2.selector("&.fade-exit.fade-exit-active")
                        .props({
                        opacity: 0,
                        transition: "opacity " + TVOptionPanelComponent_1.backgroundAnimationDuration + "ms ease"
                    })
                ]
            })
        ], TVOptionPanelComponent);
        return TVOptionPanelComponent;
    }(public_4.ReactBaseComponent));
    exports.TVOptionPanelComponent = TVOptionPanelComponent;
});
//# sourceMappingURL=optionpanel.js.map