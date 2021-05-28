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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "src/src-de-telekom/public", "../metadata/iconlineup.arrows.component", "./continuoustext.item.component", "../../../filter/public"], function (require, exports, React, public_1, public_2, public_3, iconlineup_arrows_component_1, continuoustext_item_component_1, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContinuousTextComponent = void 0;
    var ContinuousTextComponent = (function (_super) {
        __extends(ContinuousTextComponent, _super);
        function ContinuousTextComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.element = null;
            _this.scroller = new public_3.Scroller();
            _this.scroller.ScrollMinY = 0;
            _this.scroller.ScrollMaxY = -Number.MAX_VALUE;
            _this.state = {
                itemSizes: {},
                itemCount: 0,
                containerSize: 0,
                start: 0,
                end: 0,
                scroll: 0,
                offset: 0,
                keyPrefix: 0
            };
            if (_this.props.onScroll)
                _this.props.onScroll(0, false);
            return _this;
        }
        ContinuousTextComponent.prototype.componentDidMount = function () {
            var _this = this;
            if (this.element)
                this.setState({ containerSize: this.element.offsetHeight });
            if (this.props.items)
                this.setState({ end: 1 });
            if (this.props.scrollPosition)
                this.scroller.scrollToY(this.props.scrollPosition, 0);
            var func = function (timestamp) {
                if (!_this.destroyed) {
                    _this.updateUI(timestamp);
                    requestAnimationFrame(func);
                }
            };
            func();
        };
        ContinuousTextComponent.prototype.componentDidUpdate = function (prevProps) {
            var _this = this;
            if (this.props.items !== prevProps.items) {
                this.setState(function (prevState) { return ({
                    itemSizes: {},
                    itemCount: 0,
                    start: 0,
                    end: _this.props.items ? 1 : 0,
                    scroll: 0,
                    offset: 0,
                    keyPrefix: prevState.keyPrefix + 1
                }); });
                this.scroller.ScrollMinY = 0;
                this.scroller.ScrollMaxY = -Number.MAX_VALUE;
                this.scroller.scrollToY(public_1.Css.scale(this.props.scrollPosition), 0);
                if (this.props.onScroll)
                    this.props.onScroll(0, false);
            }
            else if (this.props.scrollPosition !== prevProps.scrollPosition) {
                this.scroller.scrollToY(public_1.Css.scale(this.props.scrollPosition));
            }
        };
        ContinuousTextComponent.prototype.updateUI = function (timestamp) {
            this.scroller.computePosition(timestamp);
            var currentPos = this.scroller.getCurrentPosition().posY;
            if (currentPos !== this.state.scroll) {
                this.setState({ scroll: currentPos });
                this.calculateViewItems();
                var scrollMax = false;
                (currentPos === this.scroller.ScrollMaxY ? scrollMax = true : false);
                if (this.props.onScroll)
                    this.props.onScroll(public_1.Css.scaleBack(-this.state.scroll), scrollMax);
            }
        };
        ContinuousTextComponent.prototype.calculateViewItems = function () {
            var _this = this;
            this.setState(function (prevState) {
                var sizeSum = 0;
                var start;
                var end;
                var offset = 0;
                for (var i = 0; i < _this.props.items.length; i++) {
                    var itemSize = prevState.itemSizes[_this.props.items[i].id];
                    if (itemSize === undefined) {
                        if (start === undefined)
                            start = i;
                        end = i + 1;
                        break;
                    }
                    if (start === undefined && (sizeSum + itemSize + prevState.scroll) >= 0) {
                        start = i;
                        offset = sizeSum;
                    }
                    if (end === undefined && (sizeSum + itemSize + prevState.scroll) >= prevState.containerSize) {
                        end = i + 1;
                        break;
                    }
                    sizeSum += itemSize;
                }
                if (start === undefined) {
                    start = 0;
                }
                if (end === undefined) {
                    end = _this.props.items.length;
                }
                return {
                    start: start,
                    end: end,
                    offset: offset
                };
            });
        };
        ContinuousTextComponent.prototype.setHeight = function (id, height) {
            var _this = this;
            this.setState(function (prevState) {
                var itemSizes = __assign({}, prevState.itemSizes);
                var itemCount = prevState.itemCount + (itemSizes[id] === undefined ? 1 : 0);
                itemSizes[id] = height;
                if (itemCount == _this.props.items.length && _this.scroller.ScrollMaxY == -Number.MAX_VALUE) {
                    var sizeSum = 0;
                    for (var key in itemSizes) {
                        sizeSum += itemSizes[key];
                    }
                    _this.scroller.ScrollMaxY = Math.min(0, -sizeSum + prevState.containerSize);
                }
                return {
                    itemSizes: itemSizes,
                    itemCount: itemCount
                };
            });
            this.calculateViewItems();
        };
        ContinuousTextComponent.prototype.render = function () {
            var _this = this;
            var _a;
            var contentPostionTopDefault = 40;
            var containerStyle = public_1.declaration()
                .props({
                top: this.props.title ? public_1.Css.scale(110) : (public_3.Guard.isDefined(this.props.contentPostionTop) ? this.props.contentPostionTop : contentPostionTopDefault)
            })
                .toStyle();
            var contentStyle = public_1.declaration()
                .props({
                transform: "translateY(" + (this.state.scroll + this.state.offset) + "px)",
                minHeight: { value: 3 * this.state.containerSize, autoscale: false }
            })
                .toStyle();
            return React.createElement("div", { className: this.ID },
                React.createElement("div", { className: this.props.showFocusBorder && this.props.active ? "content-outlined" : "content" },
                    this.props.title && React.createElement("div", { className: "content-title singleline-ellipsis " + public_1.Css.fonts2.a_fo_h2__ + " " + (this.props.showFocusBorder ? "outline-padding" : "") }, public_4.Filter.message(this, this.props.title)),
                    React.createElement("div", { className: "container " + (this.props.fontClass ? this.props.fontClass : public_1.Css.fonts2.a_fo_b2__), ref: function (e) { return _this.element = e; }, style: containerStyle },
                        React.createElement("div", { className: "content " + (this.props.showFocusBorder ? "outline-padding" : ""), style: contentStyle }, (_a = this.props.items) === null || _a === void 0 ? void 0 : _a.slice(this.state.start, this.state.end).map(function (item) { return React.createElement(continuoustext_item_component_1.ContinuousTextItemComponent, { key: _this.state.keyPrefix + "_" + item.id, item: item, onHeight: function (height) { return _this.setHeight(item.id, height); } }); })))),
                !this.props.hideArrows && React.createElement("div", { className: "icon-arrows", style: { bottom: this.props.showFocusBorder ? public_1.Css.scale(-24) : 0 } },
                    React.createElement(iconlineup_arrows_component_1.IconLineupArrowsComponent, { iconState: { showDown: this.state.scroll !== this.scroller.ScrollMaxY, showUp: this.state.scroll !== 0 }, active: this.props.active })));
        };
        ContinuousTextComponent = __decorate([
            public_2.reactComponent({
                ID: "continuous-text-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        width: "inherit",
                        height: "inherit"
                    })
                        .sub(public_1.selector(".container")
                        .props({
                        position: "absolute",
                        bottom: 60,
                        overflow: "hidden",
                        width: "inherit"
                    }))
                        .sub(public_1.selector(".content")
                        .props({
                        width: "inherit",
                        willChange: "transform"
                    }))
                        .sub(public_1.selector(".icon-arrows")
                        .props({
                        position: "absolute",
                        width: "inherit"
                    }))
                        .sub(public_1.selector(".outline-padding")
                        .props({
                        paddingLeft: 36,
                        paddingRight: 36
                    }))
                        .sub(public_1.selector(".content")
                        .props({
                        width: "inherit",
                        height: "inherit"
                    }))
                        .sub(public_1.selector(".content-title")
                        .props({
                        paddingTop: 24
                    }))
                        .sub(public_1.selector(".content-outlined")
                        .props({
                        width: "inherit",
                        height: "94%",
                        outlineColor: public_1.Css.colors.A_CO_1,
                        outlineStyle: "solid",
                        outlineWidth: 3
                    }))
                ]
            })
        ], ContinuousTextComponent);
        return ContinuousTextComponent;
    }(public_2.ReactBaseComponent));
    exports.ContinuousTextComponent = ContinuousTextComponent;
});
//# sourceMappingURL=continuoustext.component.js.map