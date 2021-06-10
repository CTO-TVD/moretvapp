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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../base/public", "../../public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVTabBarComponent = void 0;
    var TVTabBarComponent = (function (_super) {
        __extends(TVTabBarComponent, _super);
        function TVTabBarComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = { index: 0, list: [{ width: public_1.Css.scale(public_1.Css.dimensions.safeareaLeft_UI20), element: undefined }] };
            return _this;
        }
        TVTabBarComponent.getDerivedStateFromProps = function (nextProps, prevState) {
            var newList = [];
            for (var _i = 0, _a = prevState.list; _i < _a.length; _i++) {
                var it_1 = _a[_i];
                if (!it_1.element || nextProps.tabs.indexOf(it_1.element) != -1) {
                    newList.push(it_1);
                }
            }
            return { list: newList };
        };
        TVTabBarComponent.prototype.render = function () {
            var _this = this;
            if (!this.props.tabs) {
                return null;
            }
            var width = 0;
            if (this.props.centralIndex !== undefined) {
                var central = Math.max(1, this.state.index - this.props.centralIndex);
                for (var i = 1; i < central && this.state.list && i < this.state.list.length; i++) {
                    width += this.state.list[i].width + public_1.Css.scale(public_3.Button.Bars.tinyMargin);
                }
            }
            var listTranslate = public_1.declaration().props({ transform: "translate(" + -1 * width + "px,0)" });
            var focusId = this.props.focusId || "tabbar";
            return React.createElement(public_3.NavigationContainer, { id: focusId, className: [this.ID, this.props.className].join(" "), overrides: { right: focusId, left: focusId }, onFocusLost: function (e) { return e.focus(); }, autofocus: this.props.autofocus },
                React.createElement("div", { className: [public_3.Button.Bars.horizontal.marginTiny, "tablist"].join(" "), style: listTranslate.toStyle() },
                    React.createElement(public_3.Button.TabButton, { id: "prefix", disabled: true, className: "prefix", onReady: function (e) {
                            _this.setState({ list: [{ width: e.getBoundingClientRect().width, element: undefined }] });
                        } }),
                    this.props.tabs.map(function (it, idx) {
                        var x = idx + 1;
                        return React.createElement(public_3.Button.TabButton, { id: x.toString(), key: idx, text: it.title, onClientRectChanged: function (e, rect) { return _this.setState(function (prevState) {
                                var list = __spreadArrays(prevState.list);
                                var element = list.filter(function (item) { return item.element == it; }).pop();
                                if (!element) {
                                    list[x] = { element: it, width: rect.width };
                                    return { list: list };
                                }
                                else if (element.width != rect.width) {
                                    element.width = rect.width;
                                    return { list: list };
                                }
                                return null;
                            }); }, onClick: function (e) { var _a; return (_a = it.onClick) === null || _a === void 0 ? void 0 : _a.call(it, e); }, onFocusIn: function () { return _this.setState({ index: x }); } });
                    }),
                    React.createElement(public_3.Button.TabButton, { id: "suffix", disabled: true, className: "suffix" })));
        };
        TVTabBarComponent = __decorate([
            public_2.reactComponent({
                ID: "o-17-tabbar-component",
                styles: [
                    public_1.selector("&")
                        .sub(public_1.selector(".tablist")
                        .props({
                        transition: "transform 400ms",
                        whiteSpace: "nowrap",
                        willChange: "transform"
                    }))
                        .sub(public_1.selector(".prefix")
                        .props({
                        width: public_1.Css.dimensions.safeareaLeft_UI20
                    }))
                        .sub(public_1.selector(".suffix")
                        .props({
                        width: public_1.Css.dimensions.screenWidth
                    }))
                ]
            })
        ], TVTabBarComponent);
        return TVTabBarComponent;
    }(public_2.ReactBaseComponent));
    exports.TVTabBarComponent = TVTabBarComponent;
});
//# sourceMappingURL=tabbar.component.js.map