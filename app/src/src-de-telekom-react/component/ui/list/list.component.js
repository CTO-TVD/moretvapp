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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../../base/public", "../../../framework/public", "./list.interfaces", "./listcontent.component"], function (require, exports, React, public_1, public_2, public_3, public_4, list_interfaces_1, listcontent_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ListComponent = void 0;
    var ListCondition;
    (function (ListCondition) {
        ListCondition[ListCondition["New"] = 0] = "New";
        ListCondition[ListCondition["FocusIn"] = 1] = "FocusIn";
        ListCondition[ListCondition["Normal"] = 2] = "Normal";
    })(ListCondition || (ListCondition = {}));
    var ListComponent = (function (_super) {
        __extends(ListComponent, _super);
        function ListComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.onFocusInTree = function () {
                _this.setState(function (prevState, props) {
                    var _a;
                    var selectedItem = (_a = prevState.viewItems) === null || _a === void 0 ? void 0 : _a.filter(function (item) { return item.index === prevState.selectedIndex; })[0];
                    if (selectedItem && _this.container)
                        _this.container.focus((props.navigationIdPrefix ? props.navigationIdPrefix : "") + selectedItem.id);
                    return {
                        hasFocus: true,
                        viewItems: ListComponent_1.calculatePositions(props, __assign(__assign({}, prevState), { hasFocus: true })),
                        condition: selectedItem && _this.container ? ListCondition.FocusIn : prevState.condition
                    };
                });
            };
            _this.onFocusOutTree = function () {
                _this.setState(function (prevState, props) { return ({ hasFocus: false, viewItems: ListComponent_1.calculatePositions(props, __assign(__assign({}, prevState), { hasFocus: false })) }); });
            };
            _this.onItemFocused = function (viewItem) {
                _this.setState(function (prevState, props) {
                    var newState = {
                        condition: ListCondition.Normal,
                        position: prevState.position,
                        scrollPosition: prevState.scrollPosition
                    };
                    if (prevState.condition !== ListCondition.FocusIn) {
                        if (prevState.selectedIndex !== viewItem.index) {
                            var position = ListComponent_1.scrollToItem(props, prevState, viewItem.index);
                            var selection = ListComponent_1.calculateSelection(props, viewItem.index);
                            var viewItems = ListComponent_1.calculatePositions(props, __assign(__assign({}, prevState), selection));
                            return __assign(__assign(__assign(__assign({}, newState), selection), { viewItems: viewItems }), position);
                        }
                        return __assign(__assign({}, newState), { viewItems: ListComponent_1.calculatePositions(props, prevState) });
                    }
                    else {
                        return newState;
                    }
                });
            };
            _this.container = _this.findParentComponent(public_4.NavigationContainerId).component;
            _this.state = {
                hasFocus: false,
                selectedIndex: ListComponent_1.getSelectedIndex(props, props.selection),
                scrollPosition: {
                    direction: "down",
                    lastEvent: 0
                },
                condition: ListCondition.New,
                position: 0,
                topIndex: 0,
                props: {
                    selection: _this.props.selection,
                    items: _this.props.items
                }
            };
            _this.scroller = new public_2.Scroller();
            ListComponent_1.setScrollerSize(_this.scroller);
            return _this;
        }
        ListComponent_1 = ListComponent;
        ListComponent.calculateListItemCount = function (props) {
            return props.itemCount
                + (2 * (props.boundaryCount || ListComponent_1.defaultProps.boundaryCount))
                + ((props.rotationType || ListComponent_1.defaultProps.rotationType) === "combined" ? 1 : 0);
        };
        ListComponent.enrichTempData = function (missingItems, data, dataCallback) {
            var newMissing = [];
            if (missingItems && data) {
                missingItems.forEach(function (index) {
                    if (!data[index])
                        newMissing.push({ index: index, isTemporary: true });
                });
                if (newMissing.length > 0) {
                    var newData_1 = __spreadArray([], data);
                    newMissing.forEach(function (item) {
                        newData_1[item.index] = item;
                    });
                    return dataCallback(newData_1);
                }
            }
            return null;
        };
        ListComponent.clone = function (cbNew) {
            var cloneData = function (itemToClone) { return (__assign(__assign({}, itemToClone), { data: itemToClone.data ? __assign({}, itemToClone.data) : undefined })); };
            return function (value, index, array) {
                if (public_2.Guard.isUndefined(value)) {
                    return value;
                }
                else if (!cbNew) {
                    return cloneData(value);
                }
                else {
                    var result = cbNew(value, index, array);
                    if (public_2.Guard.isBoolean(result)) {
                        if (result) {
                            return cloneData(value);
                        }
                        else {
                            return value;
                        }
                    }
                    else {
                        var newItem = cloneData(value);
                        result(newItem);
                        return newItem;
                    }
                }
            };
        };
        ListComponent.prototype.onPushstateSave = function (states) {
            this.mappingIDs = {};
            for (var _i = 0, _a = (this.state.viewItems || []); _i < _a.length; _i++) {
                var item = _a[_i];
                this.mappingIDs[item.index] = item.id;
            }
            _super.prototype.onPushstateSave.call(this, states);
        };
        ListComponent.prototype.onPushstateLoad = function () {
            _super.prototype.onPushstateLoad.call(this);
            var state = __assign(__assign({}, this.state), { mappingIDs: this.mappingIDs });
            var position = ListComponent_1.scrollToItem(this.props, state, state.selectedIndex, true);
            var topIndex = ListComponent_1.calculateTopIndex(this.props, __assign(__assign({}, state), position), true);
            this.state = __assign(__assign(__assign({}, state), topIndex), position);
        };
        ListComponent.prototype.componentDidMount = function () {
            if (public_2.Guard.isDefined(this.props.selection)) {
                this.setState(function (prevState, props) {
                    var selection = ListComponent_1.calculateSelection(props, prevState.selectedIndex);
                    return __assign({}, selection);
                });
            }
        };
        ListComponent.prototype.componentDidUpdate = function (prevProps) {
            for (var _i = 0, _a = ListComponent_1.readonlyFields; _i < _a.length; _i++) {
                var key = _a[_i];
                if (this.props[key] !== prevProps[key]) {
                    throw new public_3.ReactBaseError("The '" + key + "' property has been changed from '" + prevProps[key] + "' to '" + this.props[key] + "'. This is not supported. ID: " + this.ID);
                }
            }
            this.updateUI(this.state.scrollPosition);
        };
        ListComponent.getDerivedStateFromProps = function (nextProps, prevState) {
            var prevProps = prevState.props;
            if ((prevProps.selection !== nextProps.selection) && (public_2.Guard.isDefined(nextProps.selection)) && (public_2.Guard.isNumber(nextProps.selection.index)) && (prevState.selectedIndex !== nextProps.selection.index)) {
                var selectedIndex = ListComponent_1.getSelectedIndex(nextProps, nextProps.selection);
                var position = ListComponent_1.scrollToItem(nextProps, prevState, selectedIndex, true);
                var selection = ListComponent_1.calculateSelection(nextProps, selectedIndex);
                var topIndex = ListComponent_1.calculateTopIndex(nextProps, __assign(__assign(__assign({}, prevState), selection), position), true);
                if (topIndex === null || topIndex === void 0 ? void 0 : topIndex.viewItems) {
                    ListComponent_1.preserveFocusId(nextProps, prevState, topIndex.viewItems, selection.selectedIndex);
                }
                return __assign(__assign(__assign(__assign({}, topIndex), selection), position), { condition: ListCondition.Normal, props: {
                        selection: nextProps.selection,
                        items: nextProps.items
                    } });
            }
            else if (prevProps.items !== nextProps.items) {
                if (prevProps.items.length !== nextProps.items.length) {
                    if (public_2.Guard.isDefined(prevState.selectedIndex) && (nextProps.items.length > 0)) {
                        var selectedIndex = ListComponent_1.getSelectedIndex(nextProps, { index: prevState.selectedIndex });
                        var position = ListComponent_1.scrollToItem(nextProps, prevState, selectedIndex, true);
                        var selection = ListComponent_1.calculateSelection(nextProps, selectedIndex);
                        var topIndex = ListComponent_1.calculateTopIndex(nextProps, __assign(__assign(__assign({}, prevState), selection), position), true);
                        if (topIndex === null || topIndex === void 0 ? void 0 : topIndex.viewItems) {
                            ListComponent_1.preserveFocusId(nextProps, prevState, topIndex.viewItems, selection.selectedIndex);
                        }
                        return __assign(__assign(__assign(__assign({}, topIndex), selection), position), { condition: ListCondition.Normal, props: {
                                selection: nextProps.selection,
                                items: nextProps.items
                            } });
                    }
                    else {
                        var selectedIndex = ListComponent_1.getSelectedIndex(nextProps, undefined);
                        var position = ListComponent_1.scrollToItem(nextProps, prevState, selectedIndex, true);
                        var selection = ListComponent_1.calculateSelection(nextProps, selectedIndex);
                        var topIndex = ListComponent_1.calculateTopIndex(nextProps, __assign(__assign(__assign({}, prevState), selection), position), true);
                        return __assign(__assign(__assign(__assign({}, topIndex), selection), position), { condition: ListCondition.New, props: {
                                selection: nextProps.selection,
                                items: nextProps.items
                            } });
                    }
                }
                else {
                    var topIndex = ListComponent_1.calculateTopIndex(nextProps, prevState, true);
                    return __assign(__assign({}, topIndex), { props: {
                            selection: nextProps.selection,
                            items: nextProps.items
                        } });
                }
            }
            if (prevProps.items != nextProps.items || prevProps.selection != nextProps.selection) {
                return {
                    props: {
                        selection: nextProps.selection,
                        items: nextProps.items
                    }
                };
            }
            return null;
        };
        ListComponent.getSelectedIndex = function (props, selection) {
            return public_2.Guard.isDefined(selection) && public_2.Guard.isNumber(selection.index)
                ? selection.index >= props.items.length
                    ? props.items.length === 0
                        ? undefined
                        : props.items.length - 1
                    : Math.max(0, selection.index)
                : undefined;
        };
        ListComponent.calculatePositions = function (props, _a) {
            var viewItems = _a.viewItems, selectedIndex = _a.selectedIndex, hasFocus = _a.hasFocus;
            var focusedItemSize = public_1.Css.scale(props.focusedItemSize || props.itemSize);
            var itemSize = public_1.Css.scale(props.itemSize);
            var positionOffset = hasFocus ? focusedItemSize - itemSize : 0;
            var selectedItemPosition = public_2.Guard.isNumber(selectedIndex) ? itemSize * selectedIndex : undefined;
            var newViewItems = viewItems === null || viewItems === void 0 ? void 0 : viewItems.map(function (item) {
                var newPosition = public_2.Guard.isNumber(selectedItemPosition) && ((item.index * itemSize) > selectedItemPosition) ? (item.index * itemSize) + positionOffset : (item.index * itemSize);
                return ((item.position === newPosition) && (item.focused === ((item.index === selectedIndex) && hasFocus))) ? item : __assign(__assign({}, item), { position: newPosition, focused: (item.index === selectedIndex) && hasFocus });
            });
            return newViewItems;
        };
        ListComponent.calculateSelection = function (props, selectedIndex) {
            if (props.onSelectionChanged) {
                props.onSelectionChanged(selectedIndex);
            }
            return { selectedIndex: selectedIndex };
        };
        ListComponent.calculateTopIndex = function (props, _a, force) {
            var viewItems = _a.viewItems, selectedIndex = _a.selectedIndex, hasFocus = _a.hasFocus, position = _a.position, topIndex = _a.topIndex, scrollPosition = _a.scrollPosition, mappingIDs = _a.mappingIDs;
            var itemSize = public_1.Css.scale(props.itemSize);
            var down = scrollPosition.direction === undefined || scrollPosition.direction === "down";
            var topIndexResult = props.rotationType === "combined"
                ? (down ? Math.floor(-position / itemSize) : Math.ceil(-position / itemSize) - 1)
                : props.rotationType === "end"
                    ? (down ? Math.floor(-position / itemSize) : Math.ceil(-position / itemSize))
                    : (down ? Math.ceil(-position / itemSize) : Math.floor(-position / itemSize));
            var newTopIndex = Math.min(topIndexResult, Math.max(props.items.length - 1, 0));
            if (force || (topIndex !== newTopIndex)) {
                var newViewItems = ListComponent_1.calculateViewItems(props, { viewItems: viewItems, topIndex: newTopIndex, mappingIDs: mappingIDs });
                return {
                    topIndex: newTopIndex,
                    viewItems: ListComponent_1.calculatePositions(props, { viewItems: newViewItems || viewItems, selectedIndex: selectedIndex, hasFocus: hasFocus })
                };
            }
            return null;
        };
        ListComponent.calculateViewItems = function (props, _a) {
            var viewItems = _a.viewItems, topIndex = _a.topIndex, mappingIDs = _a.mappingIDs;
            var itemSize = public_1.Css.scale(props.itemSize);
            var listItemCount = ListComponent_1.calculateListItemCount(props);
            var startIndex = Math.max(Math.min(topIndex - props.boundaryCount, props.items.length - listItemCount), 0);
            var endIndex = Math.min(startIndex + listItemCount, props.items.length);
            var newItems = [];
            var addedItems = [];
            var addedItems2 = [];
            var missingItems = [];
            var viewItemsMap = (viewItems === null || viewItems === void 0 ? void 0 : viewItems.reduce(function (prev, current) { prev[current.index] = current; return prev; }, {})) || {};
            var hasChanges = false;
            for (var i = startIndex; i < endIndex; i++) {
                var pItem = props.items[i];
                if (public_2.Guard.isDefined(pItem)) {
                    var propsItem = props.items[pItem.index];
                    if (propsItem && pItem.index !== propsItem.index) {
                        throw new public_2.IllegalArgumentError("Data indexes are out of sync!");
                    }
                    var sItem = viewItemsMap[pItem.index];
                    if (public_2.Guard.isDefined(sItem)) {
                        if (sItem.data === pItem.data) {
                            newItems.push(sItem);
                        }
                        else {
                            newItems.push(__assign(__assign({}, sItem), { data: pItem.data }));
                            hasChanges = true;
                        }
                    }
                    else {
                        addedItems.push(pItem);
                    }
                }
                else {
                    missingItems.push(i);
                }
            }
            if ((startIndex - 1) >= 0 && public_2.Guard.isUndefined(props.items[startIndex - 1])) {
                missingItems.push(startIndex - 1);
            }
            if (endIndex < props.items.length && public_2.Guard.isUndefined(props.items[endIndex])) {
                missingItems.push(endIndex);
            }
            if (addedItems.length !== 0) {
                var freeIds = [];
                var _loop_1 = function (i) {
                    if (newItems.filter(function (item) { return item.id === i; })[0] === undefined) {
                        freeIds.push(i);
                    }
                };
                for (var i = 0; i < listItemCount; i++) {
                    _loop_1(i);
                }
                for (var _i = 0, addedItems_1 = addedItems; _i < addedItems_1.length; _i++) {
                    var pItem = addedItems_1[_i];
                    if ((mappingIDs === null || mappingIDs === void 0 ? void 0 : mappingIDs[pItem.index]) !== undefined) {
                        var id = mappingIDs[pItem.index];
                        if (public_2.Guard.isNumber(id)) {
                            mappingIDs[pItem.index] = undefined;
                            var index = freeIds.indexOf(id);
                            if (index !== -1) {
                                freeIds.splice(index, 1);
                                newItems.push({
                                    data: pItem.data,
                                    focused: false,
                                    id: id,
                                    index: pItem.index,
                                    position: pItem.index * itemSize,
                                    isTemporary: pItem.isTemporary
                                });
                                if (pItem.isTemporary) {
                                    missingItems.push(pItem.index);
                                }
                                hasChanges = true;
                                addedItems2.push(pItem);
                            }
                        }
                    }
                }
                if (addedItems2.length > 0) {
                    for (var _b = 0, addedItems2_1 = addedItems2; _b < addedItems2_1.length; _b++) {
                        var item = addedItems2_1[_b];
                        var index = addedItems.indexOf(item);
                        addedItems.splice(index, 1);
                    }
                }
                for (var _c = 0, addedItems_2 = addedItems; _c < addedItems_2.length; _c++) {
                    var pItem = addedItems_2[_c];
                    var id = freeIds.shift();
                    newItems.push({
                        data: pItem.data,
                        focused: false,
                        id: id,
                        index: pItem.index,
                        position: pItem.index * itemSize,
                        isTemporary: pItem.isTemporary
                    });
                    if (pItem.isTemporary) {
                        missingItems.push(pItem.index);
                    }
                    hasChanges = true;
                }
            }
            if (missingItems.length > 0) {
                if (props.onRetrieveData)
                    props.onRetrieveData(missingItems);
            }
            if (!viewItems || viewItems.length !== newItems.length) {
                hasChanges = true;
            }
            if (viewItems && viewItems.length > newItems.length) {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("calculateViewItems - count of view items was reduced from '" + viewItems.length + "' to '" + newItems.length + "'. This has performance impact.", ListComponent_1.TAG)); });
            }
            return hasChanges ? newItems : undefined;
        };
        ListComponent.preserveFocusId = function (props, _a, newViewItem, newSelectedIndex) {
            var viewItems = _a.viewItems, selectedIndex = _a.selectedIndex;
            var lastSelectedItem = (viewItems || []).filter(function (item) { return item.index === selectedIndex; })[0];
            if (lastSelectedItem) {
                var nextSelectedItemTarget = newViewItem.filter(function (item) { return item.index === newSelectedIndex; })[0];
                if (nextSelectedItemTarget && (lastSelectedItem.id !== nextSelectedItemTarget.id)) {
                    var listItemCount_1 = ListComponent_1.calculateListItemCount(props);
                    var offset_1 = listItemCount_1 - (nextSelectedItemTarget.id - lastSelectedItem.id);
                    newViewItem.forEach(function (item) { return item.id = (item.id + offset_1) % listItemCount_1; });
                }
            }
        };
        ListComponent.setScrollerSize = function (scroller) {
            scroller.ScrollMinX = 10000000000;
            scroller.ScrollMinY = 10000000000;
            scroller.ScrollMaxX = -10000000000;
            scroller.ScrollMaxY = -10000000000;
        };
        ListComponent.scrollToItem = function (props, _a, index, noAnimation) {
            var selectedIndex = _a.selectedIndex, scrollPosition = _a.scrollPosition, position = _a.position;
            if (noAnimation === void 0) { noAnimation = false; }
            index = index === undefined ? 0 : index;
            selectedIndex = selectedIndex === undefined ? 0 : selectedIndex;
            var newPosition = 0;
            var itemSize = public_1.Css.scale(props.itemSize);
            if (props.fixedFocus) {
                newPosition = (index - props.centralIndex) * itemSize;
            }
            else {
                if (index <= props.centralIndex) {
                    newPosition = 0;
                }
                else if ((props.items.length - index - 1) >= (props.itemCount - props.centralIndex - 1)) {
                    newPosition = (index - props.centralIndex) * itemSize;
                }
                else {
                    var listSize = props.itemCount * itemSize;
                    newPosition = Math.max(0, props.items.length * itemSize - listSize);
                }
            }
            var now = public_2.Scroller.funcNow();
            var animationTime;
            if (noAnimation) {
                animationTime = 0;
            }
            else if ((now - scrollPosition.lastEvent) >= 150) {
                animationTime = 0.3;
            }
            else {
                animationTime = (now - scrollPosition.lastEvent) / 1000 * 2;
            }
            return {
                position: noAnimation ? -newPosition : position,
                scrollPosition: {
                    lastEvent: now,
                    position: newPosition,
                    direction: index >= selectedIndex ? "down" : "up",
                    duration: animationTime
                }
            };
        };
        ListComponent.prototype.updateUI = function (scrollPosition) {
            var _this = this;
            var func = function (timestamp) {
                if (_this.destroyed)
                    return;
                _this.scroller.computePosition(timestamp);
                if (_this.scroller.isScrolling) {
                    requestAnimationFrame(func);
                }
                var position = _this.scroller.getCurrentPosition().posX;
                _this.setState(function (prevState, props) {
                    if (position !== prevState.position) {
                        var topIndex = ListComponent_1.calculateTopIndex(props, __assign(__assign({}, prevState), { position: position }), false);
                        return __assign(__assign({ topIndex: prevState.topIndex }, topIndex), { position: position });
                    }
                    return null;
                });
            };
            if (public_2.Guard.isNumber(scrollPosition.position)) {
                this.scroller.scrollToX(scrollPosition.position, scrollPosition.duration);
            }
            if (!this.scroller.isScrolling) {
                func();
            }
        };
        ListComponent.prototype.getListStyle = function (listSize, disableDefaultClipping, orientation) {
            var style = public_1.declaration();
            var listHeight = disableDefaultClipping ? "inherit" : listSize;
            if (!disableDefaultClipping) {
                style.props({
                    overflow: "hidden"
                });
            }
            if (orientation === list_interfaces_1.ListOrientation.Vertical) {
                style.props({
                    height: listHeight,
                    width: "inherit"
                });
            }
            else {
                style.props({
                    height: "inherit",
                    width: listHeight
                });
            }
            return style.toStyle();
        };
        ListComponent.prototype.render = function () {
            if (this.state.scrollPosition && public_2.Guard.isNumber(this.state.scrollPosition.position) && this.state.scrollPosition.duration === 0) {
                this.scroller.scrollToX(this.state.scrollPosition.position, this.state.scrollPosition.duration);
            }
            var itemSize = this.props.itemSize;
            var listSize = this.props.itemCount * itemSize;
            var focusPosition = (this.state.selectedIndex !== undefined && this.state.scrollPosition.position !== undefined)
                ? ((this.state.selectedIndex * public_1.Css.scale(itemSize)) - this.state.scrollPosition.position)
                : undefined;
            var focusStyle = public_2.Guard.isNumber(focusPosition)
                ? public_1.declaration().props({
                    transform: "translate" + ((this.props.orientation === list_interfaces_1.ListOrientation.Vertical) ? "Y" : "X") + "(" + focusPosition + "px)",
                    willChange: "transform"
                }).toStyle()
                : undefined;
            var positionStyle = public_1.declaration().props({ transform: "translate" + ((this.props.orientation === list_interfaces_1.ListOrientation.Vertical) ? "Y" : "X") + "(" + this.state.position + "px)" }).toStyle();
            var classNames = [this.ID];
            if (this.props.className)
                classNames.push(this.props.className);
            if (this.state.hasFocus)
                classNames.push("hasFocus");
            return React.createElement(public_4.NavigationWatcher, { onFocusInTree: this.onFocusInTree, onFocusOutTree: this.onFocusOutTree },
                React.createElement("div", { className: classNames.join(" "), style: this.getListStyle(listSize, this.props.disableDefaultClipping, this.props.orientation) },
                    this.props.focusRenderer && focusStyle && (!public_2.Guard.isDefined(this.props.focusLayer) || this.props.focusLayer == list_interfaces_1.FocusLayer.Background) && this.props.focusRenderer(focusStyle, this.props.focusItem),
                    React.createElement("div", { className: "ListContent", style: positionStyle },
                        React.createElement(listcontent_component_1.ListContentComponent, { itemRenderer: this.props.itemRenderer, onItemFocused: this.onItemFocused, orientation: this.props.orientation, navigationIdPrefix: this.props.navigationIdPrefix, viewItems: this.state.viewItems })),
                    this.props.focusRenderer && focusStyle && public_2.Guard.isDefined(this.props.focusLayer) && this.props.focusLayer == list_interfaces_1.FocusLayer.Foreground && this.props.focusRenderer(focusStyle, this.props.focusItem)));
        };
        var ListComponent_1;
        ListComponent.readonlyFields = ["boundaryCount", "centralIndex", "fixedFocus", "focusedItemSize", "itemCount", "itemSize", "orientation", "navigationIdPrefix"];
        ListComponent.defaultProps = {
            boundaryCount: 1,
            centralIndex: 2,
            disableDefaultClipping: false,
            fixedFocus: false,
            orientation: list_interfaces_1.ListOrientation.Vertical,
            rotationType: "combined"
        };
        __decorate([
            public_3.reactPushState()
        ], ListComponent.prototype, "mappingIDs", void 0);
        __decorate([
            public_2.Memoize.decorator()
        ], ListComponent.prototype, "updateUI", null);
        __decorate([
            public_2.Memoize.decorator()
        ], ListComponent.prototype, "getListStyle", null);
        ListComponent = ListComponent_1 = __decorate([
            public_3.reactComponent({
                ID: "list-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "absolute"
                    }),
                    public_1.selector("& .ListContent")
                        .props({
                        width: "inherit",
                        willChange: "transform"
                    })
                ]
            }),
            public_2.logTag()
        ], ListComponent);
        return ListComponent;
    }(public_3.ReactBaseComponent));
    exports.ListComponent = ListComponent;
});
//# sourceMappingURL=list.component.js.map