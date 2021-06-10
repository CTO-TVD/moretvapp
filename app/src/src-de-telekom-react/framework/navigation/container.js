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
define(["require", "exports", "react", "src/src-de-telekom/public", "../../service/keyeventmanager/public", "../../base/public", "./layer", "./interfaces", "./navigation.service", "./watcher"], function (require, exports, React, public_1, public_2, public_3, layer_1, interfaces_1, navigation_service_1, watcher_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NavigationContainer = exports.NavigationContainerId = void 0;
    exports.NavigationContainerId = { ID: "container-component" };
    var NavigationContainer = (function (_super) {
        __extends(NavigationContainer, _super);
        function NavigationContainer(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.keyComponents = [];
            _this.navigableComponents = [];
            _this.hasFocus = false;
            _this.setElement = function (element) { return _this.element = element; };
            public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("constructor. ID: " + _this.itemId, NavigationContainer_1.TAG)); });
            _this.state = {
                prevProps: props,
                refPoints: __assign({ left: 0, right: 0, up: 0, down: 0 }, props.refPoints)
            };
            _this.onMessage(interfaces_1.NavigationBroadcastTypes.Change, function (args) {
                if (args.phase == interfaces_1.NavigationBroadcastPhase.focus) {
                    if (args.focusIDs) {
                        var indexFocus = args.focusIDs.indexOf(_this.itemId);
                        if (indexFocus > -1) {
                            _this.hasFocus = true;
                            _this.lastFocusedElementId = args.focusIDs[indexFocus + 1];
                            if (indexFocus > 0 && _this.props.onFocusInTree) {
                                args.registerActionCallback(function () { var _a, _b; return (_b = (_a = _this.props).onFocusInTree) === null || _b === void 0 ? void 0 : _b.call(_a, _this, "inTree"); });
                            }
                        }
                        else if (!_this.hasFocus && args.itemIsInPath(args.focusIDs, _this.itemId)) {
                            public_1.Logger.warn(function (log) { return log(public_1.LogMsg("focus changed to an element whose container is not focused. Please check for unique container IDs. Current ID: " + _this.itemId, NavigationContainer_1.TAG)); });
                        }
                        if (_this.props.onFocusIn && args.itemIsInPath(args.focusIDs, _this.itemId)) {
                            args.registerActionCallback(function () { var _a, _b; return (_b = (_a = _this.props).onFocusIn) === null || _b === void 0 ? void 0 : _b.call(_a, _this, "in"); });
                        }
                        if (_this.props.onFocusFollow && args.itemIsInPath(args.focusIDs, _this.itemId)) {
                            args.registerActionCallback(function () {
                                var element = navigation_service_1.NavigationService.getInstance().getFocusElement(_this.itemId);
                                if (element) {
                                    var clientRect = element.getBoundingClientRect();
                                    var position = {
                                        top: clientRect.top,
                                        left: clientRect.left,
                                        width: clientRect.width,
                                        height: clientRect.height
                                    };
                                    if (_this.props.onFocusFollow)
                                        _this.props.onFocusFollow(element.itemId, "active", position);
                                }
                            });
                        }
                    }
                }
                return function () {
                    if (args.phase == interfaces_1.NavigationBroadcastPhase.blur) {
                        if (args.blurIDs) {
                            var indexBlur = args.blurIDs.indexOf(_this.itemId);
                            if (indexBlur > -1) {
                                _this.hasFocus = false;
                                if (indexBlur > 0 && _this.props.onFocusOutTree) {
                                    args.registerActionCallback(function () { var _a, _b; return (_b = (_a = _this.props).onFocusOutTree) === null || _b === void 0 ? void 0 : _b.call(_a, _this, "outTree"); });
                                }
                                if (!args.focusIDs && _this.props.onFocusLost) {
                                    args.registerActionCallback(function () { var _a, _b; return (_b = (_a = _this.props).onFocusLost) === null || _b === void 0 ? void 0 : _b.call(_a, _this); });
                                }
                                if (indexBlur > 0 && _this.props.onFocusFollow) {
                                    args.registerActionCallback(function () {
                                        var element = navigation_service_1.NavigationService.getInstance().getFocusElement(_this.itemId);
                                        if (element) {
                                            if (_this.props.onFocusFollow)
                                                _this.props.onFocusFollow(element.itemId, "inactive");
                                        }
                                    });
                                }
                            }
                            if (_this.props.onFocusOut && args.itemIsInPath(args.blurIDs, _this.itemId)) {
                                args.registerActionCallback(function () { var _a, _b; return (_b = (_a = _this.props).onFocusOut) === null || _b === void 0 ? void 0 : _b.call(_a, _this, "out"); });
                            }
                        }
                    }
                };
            });
            _this.onMessage(interfaces_1.NavigationBroadcastTypes.Focus, function (args) {
                if (args.data == _this.itemId) {
                    _this.focus();
                }
            });
            _this.onMessage(interfaces_1.NavigationBroadcastTypes.Clear, function (args) {
                if (!_this.hasFocus) {
                    _this.lastFocusedElementId = undefined;
                }
            });
            _this.setDirections();
            return _this;
        }
        NavigationContainer_1 = NavigationContainer;
        NavigationContainer.prototype.preInit = function () {
            var _this = this;
            _super.prototype.preInit.call(this);
            var parentContainerData = this.findParentComponent(exports.NavigationContainerId);
            var parentLayerData = this.findParentComponent(layer_1.LayerId);
            this.parentContainer = (parentContainerData.component || parentLayerData.component);
            if (this.parentContainer) {
                if (this.props.id) {
                    this.itemId = this.parentContainer.itemId + "::" + this.props.id;
                }
                else {
                    throw new public_3.ReactBaseError("The container has no ID. This can cause problems with navigation. Parent container: " + this.parentContainer.itemId);
                }
                this.keyChannel = new public_1.EventChannel({ id: this.itemId });
                this.keyChannel.shouldProcess(function () { return _this.hasFocus; });
                var closableChannel = this.keyChannel.onAfter(function (args) { return _this.onKeyEvent(args); });
                var unregister_1 = [this.parentContainer.registerComponent(this, this.keyChannel), closableChannel];
                this.parentContainer.mountComponentStart();
                var parentWatcherData = this.findParentComponent(watcher_1.NavigationWatcherId);
                if (parentWatcherData.component && parentWatcherData.distance < parentContainerData.distance) {
                    unregister_1.push(parentWatcherData.component.registerComponent(this));
                }
                this.unregisterComponent = function () {
                    for (var _i = 0, unregister_2 = unregister_1; _i < unregister_2.length; _i++) {
                        var func = unregister_2[_i];
                        func();
                    }
                };
            }
            else {
                throw new public_3.ReactBaseError("The container has no parent layer or container. ID: " + this.ID);
            }
            this.parentLayer = parentLayerData.component;
        };
        NavigationContainer.prototype.getUniqueId = function (component) {
            return "(container:"
                + this.itemId
                + (component ? "[" + this.subComponents.indexOf(component) + "]" : "")
                + ")";
        };
        NavigationContainer.prototype.setDirections = function () {
            this.directions = {
                left: {
                    name: "left",
                    keys: [public_2.TVKeyCodeConfig.LEFT_KEY],
                    axis: "Horizontal",
                    filter: {
                        strict: function (currentElement, otherElement) { return currentElement.left > otherElement.left && currentElement.top == otherElement.top; },
                        sector: function (currentElement, otherElement) { return currentElement.left > otherElement.left; }
                    },
                    distance: function (currentElement, otherElement, refPoint) {
                        var currentPoint = {
                            top: currentElement.top + currentElement.height * refPoint,
                            left: currentElement.left
                        };
                        var otherPointMid = {
                            top: otherElement.top + otherElement.height / 2,
                            left: otherElement.left + otherElement.width / 2
                        };
                        var otherPointEdge = {
                            top: NavigationContainer_1.getRangePoint(currentPoint.top, otherElement.top, otherElement.height),
                            left: otherElement.left + otherElement.width
                        };
                        return NavigationContainer_1.getDistances(currentPoint, otherPointEdge, otherPointMid);
                    }
                },
                right: {
                    name: "right",
                    keys: [public_2.TVKeyCodeConfig.RIGHT_KEY],
                    axis: "Horizontal",
                    filter: {
                        strict: function (currentElement, otherElement) { return (currentElement.left + currentElement.width) < (otherElement.left + otherElement.width) && currentElement.top == otherElement.top; },
                        sector: function (currentElement, otherElement) { return (currentElement.left + currentElement.width) < (otherElement.left + otherElement.width); }
                    },
                    distance: function (currentElement, otherElement, refPoint) {
                        var currentPoint = {
                            top: currentElement.top + currentElement.height * refPoint,
                            left: currentElement.left + currentElement.width
                        };
                        var otherPointMid = {
                            top: otherElement.top + otherElement.height / 2,
                            left: otherElement.left + otherElement.width / 2
                        };
                        var otherPointEdge = {
                            top: NavigationContainer_1.getRangePoint(currentPoint.top, otherElement.top, otherElement.height),
                            left: otherElement.left
                        };
                        return NavigationContainer_1.getDistances(currentPoint, otherPointEdge, otherPointMid);
                    }
                },
                up: {
                    name: "up",
                    keys: [public_2.TVKeyCodeConfig.UP_KEY],
                    axis: "Vertical",
                    filter: {
                        strict: function (currentElement, otherElement) { return currentElement.top > otherElement.top && currentElement.left == otherElement.left; },
                        sector: function (currentElement, otherElement) { return currentElement.top > otherElement.top; }
                    },
                    distance: function (currentElement, otherElement, refPoint) {
                        var currentPoint = {
                            top: currentElement.top,
                            left: currentElement.left + currentElement.width * refPoint
                        };
                        var otherPointMid = {
                            top: otherElement.top + otherElement.height / 2,
                            left: otherElement.left + otherElement.width / 2
                        };
                        var otherPointEdge = {
                            top: otherElement.top + otherElement.height,
                            left: NavigationContainer_1.getRangePoint(currentPoint.left, otherElement.left, otherElement.width)
                        };
                        return NavigationContainer_1.getDistances(currentPoint, otherPointEdge, otherPointMid);
                    }
                },
                down: {
                    name: "down",
                    keys: [public_2.TVKeyCodeConfig.DOWN_KEY],
                    axis: "Vertical",
                    filter: {
                        strict: function (currentElement, otherElement) { return (currentElement.top + currentElement.height) < (otherElement.top + otherElement.height) && currentElement.left == otherElement.left; },
                        sector: function (currentElement, otherElement) { return (currentElement.top + currentElement.height) < (otherElement.top + otherElement.height); }
                    },
                    distance: function (currentElement, otherElement, refPoint) {
                        var currentPoint = {
                            top: currentElement.top + currentElement.height,
                            left: currentElement.left + currentElement.width * refPoint
                        };
                        var otherPointMid = {
                            top: otherElement.top + otherElement.height / 2,
                            left: otherElement.left + otherElement.width / 2
                        };
                        var otherPointEdge = {
                            top: otherElement.top,
                            left: NavigationContainer_1.getRangePoint(currentPoint.left, otherElement.left, otherElement.width)
                        };
                        return NavigationContainer_1.getDistances(currentPoint, otherPointEdge, otherPointMid);
                    }
                }
            };
            this.directions.left.opposite = this.directions.right;
            this.directions.right.opposite = this.directions.left;
            this.directions.up.opposite = this.directions.down;
            this.directions.down.opposite = this.directions.up;
        };
        Object.defineProperty(NavigationContainer.prototype, "disabled", {
            get: function () {
                return !!this.props.disabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NavigationContainer.prototype, "autofocus", {
            get: function () {
                return !!this.props.autofocus;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NavigationContainer.prototype, "overrides", {
            get: function () {
                return this.props.overrides;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NavigationContainer.prototype, "refPoints", {
            get: function () {
                return this.state.refPoints;
            },
            enumerable: false,
            configurable: true
        });
        NavigationContainer.getRangePoint = function (point, min, width) {
            if (point > (min + width)) {
                return min + width;
            }
            else if (point < min) {
                return min;
            }
            else {
                return point;
            }
        };
        NavigationContainer.getDistances = function (currentPoint, otherPoint1, otherPoint2) {
            var distance1 = Math.sqrt(Math.pow(currentPoint.left - otherPoint1.left, 2) + Math.pow(currentPoint.top - otherPoint1.top, 2));
            var distance2 = Math.sqrt(Math.pow(currentPoint.left - otherPoint2.left, 2) + Math.pow(currentPoint.top - otherPoint2.top, 2));
            return { distance1: distance1, distance2: distance2 };
        };
        NavigationContainer.prototype.moveFocus = function (direction) {
            var parentComponent = this.findParentComponent(layer_1.LayerId).component;
            if (parentComponent) {
                parentComponent.moveFocus(direction);
            }
        };
        NavigationContainer.prototype.onKeyEvent = function (keyEvent) {
            var handled = false;
            for (var _i = 0, _a = this.keyComponents; _i < _a.length; _i++) {
                var keyElement = _a[_i];
                handled = keyElement.onKey(keyEvent);
                if (handled) {
                    break;
                }
            }
            if (!handled) {
                for (var key in this.directions) {
                    var direction = this.directions[key];
                    if (direction.keys.indexOf(keyEvent.virtualKey) > -1) {
                        handled = !!this.navigate(direction);
                        if (handled)
                            break;
                    }
                }
            }
            return handled;
        };
        NavigationContainer.prototype.registerKeyComponent = function (component) {
            var _this = this;
            this.keyComponents.push(component);
            return function () {
                var index = _this.keyComponents.indexOf(component);
                if (index !== -1) {
                    _this.keyComponents.splice(index, 1);
                }
            };
        };
        NavigationContainer.prototype.navigate = function (direction) {
            var _a;
            var currentElement = this.getCurrentElement();
            if (currentElement) {
                var nextElement = void 0;
                var overrideId = (_a = currentElement.overrides) === null || _a === void 0 ? void 0 : _a[direction.name];
                if (overrideId) {
                    nextElement = this.getElementById(this.itemId + "::" + (public_1.Guard.isFunction(overrideId) ? overrideId() : overrideId));
                }
                else {
                    nextElement = this.getNextElement(currentElement, direction, Math.min);
                    if (!nextElement && this.props.useCycle) {
                        nextElement = this.getNextElement(currentElement, direction.opposite, Math.max);
                    }
                }
                if (nextElement) {
                    nextElement.focus();
                }
                return nextElement;
            }
            return undefined;
        };
        NavigationContainer.prototype.getElementById = function (id) {
            for (var _i = 0, _a = this.navigableComponents; _i < _a.length; _i++) {
                var element = _a[_i];
                if (element.itemId === id) {
                    return element;
                }
            }
            return undefined;
        };
        NavigationContainer.prototype.getBoundingClientRect = function () {
            return this.element.getBoundingClientRect();
        };
        NavigationContainer.prototype.getCurrentElement = function () {
            return this.getElementById(this.lastFocusedElementId);
        };
        NavigationContainer.prototype.getNextElement = function (currentElement, direction, funcMinMax) {
            var nextElement;
            var strict = direction.axis == "Horizontal" ? this.props.strictHorizontal : this.props.strictVertical;
            var filterMethod = strict ? direction.filter.strict : direction.filter.sector;
            var currentElementClientRect = currentElement.getBoundingClientRect();
            for (var _i = 0, _a = this.navigableComponents; _i < _a.length; _i++) {
                var otherElement = _a[_i];
                if (otherElement.disabled)
                    continue;
                if (otherElement !== currentElement) {
                    var otherElementClientRect = otherElement.getBoundingClientRect();
                    if (filterMethod(currentElementClientRect, otherElementClientRect)) {
                        var vectorDistance = direction.distance(currentElementClientRect, otherElementClientRect, currentElement.refPoints[direction.name]);
                        if (nextElement === undefined) {
                            nextElement = { element: otherElement, distance: vectorDistance };
                        }
                        else if (funcMinMax(vectorDistance.distance1, nextElement.distance.distance1) === vectorDistance.distance1) {
                            if (vectorDistance.distance1 !== nextElement.distance.distance1) {
                                nextElement = { element: otherElement, distance: vectorDistance };
                            }
                            else if (funcMinMax(vectorDistance.distance2, nextElement.distance.distance2) === vectorDistance.distance2) {
                                if (vectorDistance.distance2 !== nextElement.distance.distance2) {
                                    nextElement = { element: otherElement, distance: vectorDistance };
                                }
                            }
                        }
                    }
                }
            }
            return nextElement ? nextElement.element : undefined;
        };
        NavigationContainer.prototype.registerComponent = function (component, keyChannel) {
            var _this = this;
            for (var _i = 0, _a = this.navigableComponents; _i < _a.length; _i++) {
                var navigableElement = _a[_i];
                if (navigableElement.itemId === component.itemId) {
                    throw new public_3.ReactBaseError("There can only be one INavigationComponent with the id: " + component.itemId);
                }
            }
            this.navigableComponents.push(component);
            var closable = this.keyChannel.registerChannel(keyChannel);
            return function () {
                var index = _this.navigableComponents.indexOf(component);
                if (index !== -1) {
                    _this.navigableComponents.splice(index, 1);
                }
                closable();
            };
        };
        NavigationContainer.getDerivedStateFromProps = function (nextProps, prevState) {
            var prevProps = prevState.prevProps;
            if (prevProps.id !== nextProps.id) {
                throw new public_3.ReactBaseError("The container id was changed from '" + prevProps.id + "' to '" + nextProps.id + "'. This is not supported. ID: " + exports.NavigationContainerId.ID);
            }
            if (prevProps.refPoints !== nextProps.refPoints) {
                return {
                    prevProps: nextProps,
                    refPoints: __assign({ left: 0, right: 0, up: 0, down: 0 }, nextProps.refPoints)
                };
            }
            if (prevProps !== nextProps) {
                return { prevProps: nextProps };
            }
            return null;
        };
        NavigationContainer.prototype.componentDidUpdate = function (prevProps, prevState) {
            if (prevProps.reset !== this.props.reset) {
                this.broadcastMessage(interfaces_1.NavigationBroadcastTypes.Clear, undefined);
            }
        };
        NavigationContainer.prototype.componentDidMount = function () {
            var _this = this;
            public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("componentDidMount. ID: " + _this.itemId, NavigationContainer_1.TAG)); });
            if (this.parentContainer)
                this.parentContainer.mountComponentEnd(this.props.onReady ? function () { return _this.props.onReady(_this); } : undefined);
        };
        NavigationContainer.prototype.componentWillUnmount = function () {
            var _this = this;
            public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("componentWillUnmount. ID: " + _this.itemId, NavigationContainer_1.TAG)); });
            if (this.unregisterComponent) {
                this.unregisterComponent();
                this.unregisterComponent = undefined;
            }
        };
        NavigationContainer.prototype.mountComponentStart = function () {
            var mountData = this.parentLayer.mountData;
            mountData.registerCounter++;
        };
        NavigationContainer.prototype.mountComponentEnd = function (action) {
            var mountData = this.parentLayer.mountData;
            mountData.registerCounter--;
            if (action)
                mountData.actionCallbacks.push(action);
            if (mountData.registerCounter === 0) {
                while (mountData.actionCallbacks.length > 0) {
                    mountData.actionCallbacks.shift()();
                }
            }
        };
        NavigationContainer.prototype.focus = function (id, absolutePath) {
            var _this = this;
            var _a, _b;
            if (absolutePath === void 0) { absolutePath = false; }
            if (id) {
                var path = absolutePath ? id : this.itemId + "::" + id;
                navigation_service_1.NavigationService.getInstance().focus(path);
            }
            else {
                var handled = (_b = (_a = this.props).onFocusSet) === null || _b === void 0 ? void 0 : _b.call(_a, this);
                if (handled === true)
                    return;
                var lastFocusedElement = this.getCurrentElement();
                if (lastFocusedElement) {
                    if (!lastFocusedElement.disabled) {
                        lastFocusedElement.focus();
                        return;
                    }
                }
                for (var _i = 0, _c = this.navigableComponents; _i < _c.length; _i++) {
                    var element = _c[_i];
                    if (element.disabled || !element.autofocus)
                        continue;
                    element.focus();
                    return;
                }
                for (var _d = 0, _e = this.navigableComponents; _d < _e.length; _d++) {
                    var element = _e[_d];
                    if (element.disabled)
                        continue;
                    element.focus();
                    return;
                }
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("focus() cannot find elements in the current container. ID: " + _this.itemId, NavigationContainer_1.TAG)); });
            }
        };
        NavigationContainer.prototype.render = function () {
            var classes = [this.ID, this.props.className];
            return React.createElement("div", { className: classes.join(" "), "data-item-id": this.itemId, ref: this.setElement, style: this.props.style }, this.props.children);
        };
        var NavigationContainer_1;
        NavigationContainer.defaultProps = {
            autofocus: true
        };
        __decorate([
            public_3.reactPushState(true)
        ], NavigationContainer.prototype, "lastFocusedElementId", void 0);
        NavigationContainer = NavigationContainer_1 = __decorate([
            public_3.reactComponent({
                ID: exports.NavigationContainerId.ID
            }),
            public_1.logTag()
        ], NavigationContainer);
        return NavigationContainer;
    }(public_3.ReactBaseComponent));
    exports.NavigationContainer = NavigationContainer;
});
//# sourceMappingURL=container.js.map