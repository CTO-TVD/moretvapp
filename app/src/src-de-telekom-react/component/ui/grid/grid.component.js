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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../../base/public", "../../../framework/navigation/public", "../list/public"], function (require, exports, React, public_1, public_2, public_3, public_4, public_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GridComponent = void 0;
    var GridComponent = (function (_super) {
        __extends(GridComponent, _super);
        function GridComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.focusRenderer = function (style) {
                var focusStyle = public_1.declaration();
                if (public_2.Guard.isDefined(_this.state.focusIndex)) {
                    focusStyle.props({ left: _this.state.focusIndex * _this.props.itemSizeInRow });
                }
                var mergedStyle = __assign(__assign({}, style), focusStyle.toStyle());
                return _this.props.focusRenderer ? _this.props.focusRenderer(mergedStyle) : function () { return ""; };
            };
            _this.itemRenderer = function (viewItem, navigationId) {
                var _a;
                return React.createElement("div", { className: "gridRow" }, (_a = viewItem.data) === null || _a === void 0 ? void 0 : _a.map(function (data, index) {
                    return React.createElement("div", { key: index, className: "gridItem", style: public_1.declaration().props({ transform: "translateX(" + public_1.Css.scale(index * _this.props.itemSizeInRow) + "px)" }).toStyle() },
                        React.createElement(public_4.NavigationWatcher, { onFocusIn: function (e) { return _this.onFocusIn(data); } }, _this.props.itemRenderer(__assign({ focused: viewItem.focused, id: viewItem.id, position: viewItem.position }, data), navigationId + "_" + index)));
                }));
            };
            _this.onFocusIn = function (item) {
                _this.setState({ focusIndex: item.index % _this.props.itemCountInRow });
                if (_this.props.onSelectionChanged) {
                    _this.props.onSelectionChanged(item.index);
                }
            };
            _this.onRetrieveData = function (missingItems) {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("onRetrieveData - missingItems: '" + JSON.stringify(missingItems) + "'", GridComponent_1.TAG)); });
                if (_this.props.onRetrieveData) {
                    var transformedMissingItems_1 = [];
                    missingItems.forEach(function (item) {
                        var start = item * _this.props.itemCountInRow;
                        for (var i = start; i < start + _this.props.itemCountInRow; i++) {
                            transformedMissingItems_1.push(i);
                        }
                    });
                    _this.props.onRetrieveData(transformedMissingItems_1);
                }
            };
            _this.state = {};
            return _this;
        }
        GridComponent_1 = GridComponent;
        GridComponent.prototype.transformData = function (originatingData) {
            var data = [];
            var index = 0;
            for (var i = 0; i < originatingData.length; i += this.props.itemCountInRow) {
                var rowData = originatingData.slice(i, i + this.props.itemCountInRow).filter(public_2.Guard.isDefined);
                if (rowData.length > 0) {
                    data[index] = { index: index, data: rowData, isTemporary: rowData.some(function (item) { return !!item.isTemporary; }) };
                }
                index++;
            }
            data.length = Math.ceil(originatingData.length / this.props.itemCountInRow);
            return data;
        };
        GridComponent.prototype.transformSelection = function (selection) {
            return selection ? { index: Math.floor(selection.index / this.props.itemCountInRow) } : undefined;
        };
        GridComponent.prototype.render = function () {
            var data = this.transformData(this.props.items);
            var selection = this.transformSelection(this.props.selection);
            return React.createElement(public_5.ListComponent, __assign({}, this.props, { className: [this.ID, this.props.className].join(" "), focusRenderer: this.focusRenderer, itemRenderer: this.itemRenderer, items: data, onRetrieveData: this.onRetrieveData, onSelectionChanged: undefined, orientation: public_5.ListOrientation.Vertical, selection: selection }));
        };
        var GridComponent_1;
        __decorate([
            public_2.Memoize.decorator()
        ], GridComponent.prototype, "transformData", null);
        __decorate([
            public_2.Memoize.decorator()
        ], GridComponent.prototype, "transformSelection", null);
        GridComponent = GridComponent_1 = __decorate([
            public_3.reactComponent({
                ID: "grid-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "absolute",
                        willChange: "transform"
                    })
                        .sub(public_1.selector(".gridRow")
                        .sub(public_1.selector(".gridItem")
                        .props({
                        position: "absolute"
                    })))
                ]
            }),
            public_2.logTag()
        ], GridComponent);
        return GridComponent;
    }(public_3.ReactBaseComponent));
    exports.GridComponent = GridComponent;
});
//# sourceMappingURL=grid.component.js.map