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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../../base/public", "../list/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SpinningWheelComponent = void 0;
    var SpinningWheelComponent = (function (_super) {
        __extends(SpinningWheelComponent, _super);
        function SpinningWheelComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.listConfiguration = {
                fixedFocus: true,
                itemCount: SpinningWheelComponent_1.defaultProps.followingSibling + SpinningWheelComponent_1.defaultProps.precedingSibling + 1,
                itemSize: SpinningWheelComponent_1.defaultProps.itemSize
            };
            _this.focusRenderer = function (style) {
                return React.createElement("div", { className: "focus_container", style: style },
                    React.createElement("div", { className: "focus" }));
            };
            _this.itemRenderer = function (viewItem, navigationId) {
                var _a, _b;
                var classNames = ["spinningWheelItem"];
                if ((_a = viewItem.data) === null || _a === void 0 ? void 0 : _a.isSelected) {
                    classNames.push("selected");
                }
                if (viewItem.focused) {
                    classNames.push("focused");
                }
                return React.createElement("div", { className: classNames.join(" ") }, _this.props.itemRenderer((_b = viewItem.data) === null || _b === void 0 ? void 0 : _b.originalData, navigationId));
            };
            _this.onRetrieveData = function (missingItems) {
                var listItemCount = 2 * public_4.ListComponent.calculateListItemCount(_this.listConfiguration);
                var newData = [];
                newData.length = _this.state.listItems.length;
                var min = Math.min.apply(Math, missingItems) - listItemCount;
                var max = Math.max.apply(Math, missingItems) + listItemCount;
                for (var index = min; index <= max; index++) {
                    newData[index] = _this.state.listItems[index] || { index: index, data: { isSelected: false, originalData: _this.props.data[index % _this.props.data.length] } };
                }
                _this.setState({ listItems: newData, max: max, min: min });
            };
            _this.onSelectionChanged = function (selectedIndex) {
                clearTimeout(_this.debounceTimer);
                if (public_2.Guard.isNumber(selectedIndex)) {
                    var selectedItem_1 = _this.props.data[selectedIndex % _this.props.data.length];
                    _this.debounceTimer = setTimeout(function () {
                        _this.setState(function (prevState) {
                            var _a;
                            var newState = __assign(__assign({}, prevState), { listItems: __spreadArrays(prevState.listItems) });
                            for (var index = newState.min; index < newState.max; index++) {
                                var listItem = newState.listItems[index];
                                if (listItem === null || listItem === void 0 ? void 0 : listItem.data) {
                                    if (listItem.data.isSelected) {
                                        newState.listItems[index] = __assign(__assign({}, listItem), { data: { isSelected: false, originalData: listItem.data.originalData } });
                                    }
                                    if (((_a = listItem.data) === null || _a === void 0 ? void 0 : _a.originalData) === selectedItem_1) {
                                        newState.listItems[index] = __assign(__assign({}, listItem), { data: { isSelected: true, originalData: listItem.data.originalData } });
                                    }
                                }
                            }
                            return newState;
                        });
                    }, 400);
                    if (_this.props.onSelectionChanged) {
                        _this.props.onSelectionChanged(selectedItem_1);
                    }
                }
            };
            _this.maxDataIndex = 300000 + (300000 % _this.props.data.length) + 1;
            _this.listConfiguration.centralIndex = props.precedingSibling;
            _this.listConfiguration.itemCount = props.followingSibling + props.precedingSibling + 1;
            if (props.itemSize) {
                _this.listConfiguration.itemSize = props.itemSize;
            }
            var listItems = _this.calculateListItems(_this.props);
            _this.state = __assign({}, listItems);
            return _this;
        }
        SpinningWheelComponent_1 = SpinningWheelComponent;
        SpinningWheelComponent.prototype.componentDidUpdate = function (prevProps) {
            for (var key in this.props) {
                if (this.props.hasOwnProperty(key)) {
                    if ((key !== "selectedItem") && (this.props[key] !== prevProps[key])) {
                        throw new public_3.ReactBaseError("The '" + key + "' property has been changed from '" + prevProps[key] + "' to '" + this.props[key] + "'. This is not supported. ID: " + this.ID);
                    }
                }
            }
        };
        SpinningWheelComponent.prototype.render = function () {
            var classNames = [this.ID];
            var style = public_1.declaration()
                .props({
                height: this.listConfiguration.itemCount * this.listConfiguration.itemSize
            });
            return React.createElement("div", { className: classNames.join(" "), style: style.toStyle() },
                React.createElement(public_4.ListComponent, __assign({ items: this.state.listItems, focusRenderer: this.focusRenderer, itemRenderer: this.itemRenderer, onRetrieveData: this.onRetrieveData, onSelectionChanged: this.onSelectionChanged, selection: this.calculateSelection(this.props.selectedItem) }, this.listConfiguration)));
        };
        SpinningWheelComponent.prototype.calculateListItems = function (props) {
            var _a;
            var _b;
            var result = {
                listItems: [],
                selection: { index: 0 },
                min: 0,
                max: this.props.data.length
            };
            if (this.props.bouncing) {
                (_a = result.listItems).push.apply(_a, props.data.map(function (value, index) { return ({ index: index, data: { isSelected: false, originalData: value } }); }));
                result.selection.index = Math.min(this.props.offset, this.props.data.length);
            }
            else {
                result.min = this.maxDataIndex - this.props.data.length;
                result.max = this.maxDataIndex + this.props.data.length;
                for (var index = result.min; index < result.max; index++) {
                    result.listItems[index] = { index: index, data: { isSelected: false, originalData: this.props.data[index % this.props.data.length] } };
                }
                result.listItems.length = 2 * this.maxDataIndex;
                result.selection.index = this.maxDataIndex;
            }
            if (public_2.Guard.isDefined(props.selectedItem)) {
                var selectedIndex = -1;
                for (var index = result.min; index < result.max; index++) {
                    var listItem = result.listItems[index];
                    if (((_b = listItem === null || listItem === void 0 ? void 0 : listItem.data) === null || _b === void 0 ? void 0 : _b.originalData) === props.selectedItem) {
                        selectedIndex = index;
                        break;
                    }
                }
                if (selectedIndex === -1) {
                    throw new public_3.ReactBaseError("calculateListItems -> Could not find the selected item in the list of all items. ID: " + this.ID + " - '" + public_2.StringTools.dataStringify(props.selectedItem) + "'");
                }
                result.selection.index = selectedIndex;
            }
            var selectedItem = result.listItems[result.selection.index];
            if (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.data) {
                selectedItem.data.isSelected = true;
            }
            return result;
        };
        SpinningWheelComponent.prototype.calculateSelection = function (selectedItem) {
            var _a;
            if (public_2.Guard.isDefined(selectedItem)) {
                var newSelectedIndex = -1;
                for (var index = this.state.min; index < this.state.max; index++) {
                    var listItem = this.state.listItems[index];
                    if (((_a = listItem === null || listItem === void 0 ? void 0 : listItem.data) === null || _a === void 0 ? void 0 : _a.originalData) === selectedItem) {
                        newSelectedIndex = index;
                        break;
                    }
                }
                if (newSelectedIndex === -1) {
                    throw new public_3.ReactBaseError("calculateSelection -> Could not find the selected item in the list of all items. ID: " + this.ID + " - '" + public_2.StringTools.dataStringify(selectedItem) + "'");
                }
                return { index: newSelectedIndex };
            }
            return this.state.selection;
        };
        var SpinningWheelComponent_1;
        SpinningWheelComponent.SpinningWheelItemStyleID = "spinningWheelItem";
        SpinningWheelComponent.FocusHeight = 96;
        SpinningWheelComponent.ItemHeight = 96;
        SpinningWheelComponent.defaultProps = {
            bouncing: false,
            followingSibling: 5,
            offset: 0,
            opacityEdge: 0.2,
            precedingSibling: 4,
            itemSize: 96
        };
        __decorate([
            public_2.Memoize.decorator()
        ], SpinningWheelComponent.prototype, "calculateSelection", null);
        SpinningWheelComponent = SpinningWheelComponent_1 = __decorate([
            public_3.reactComponent({
                ID: "spinning-wheel-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        height: "inherit",
                        width: "inherit"
                    })
                        .sub(public_1.selector("& .focus")
                        .props({
                        backgroundColor: public_1.Css.colors.A_CO_2,
                        position: "absolute",
                        marginTop: (SpinningWheelComponent_1.ItemHeight - SpinningWheelComponent_1.FocusHeight) / 2,
                        height: SpinningWheelComponent_1.FocusHeight,
                        width: "inherit",
                        visibility: "hidden"
                    }))
                        .sub(public_1.selector("& ." + SpinningWheelComponent_1.SpinningWheelItemStyleID)
                        .props({
                        opacity: 0
                    })
                        .sub(public_1.selector("&.selected")
                        .props({
                        opacity: 1
                    })))
                        .sub(public_1.selector("& .hasFocus")
                        .sub(public_1.selector("& .focus")
                        .props({
                        visibility: "visible"
                    }))
                        .sub(public_1.selector("& ." + SpinningWheelComponent_1.SpinningWheelItemStyleID)
                        .props({
                        opacity: 1
                    })))
                        .sub(public_1.selector("& .focus_container")
                        .props({
                        transition: "transform " + public_1.Css.transitions.easeOutQuad + " " + public_1.Css.transitions.middle,
                        width: "inherit"
                    }))
                ]
            }),
            public_2.logTag()
        ], SpinningWheelComponent);
        return SpinningWheelComponent;
    }(public_3.ReactBaseComponent));
    exports.SpinningWheelComponent = SpinningWheelComponent;
});
//# sourceMappingURL=spinningwheel.component.js.map