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
define(["require", "exports", "react", "src/src-de-telekom/public", "../../base/public", "../../service/keyeventmanager/public", "./container", "./interfaces", "./layer", "./navigation.service", "./watcher"], function (require, exports, React, public_1, public_2, public_3, container_1, interfaces_1, layer_1, navigation_service_1, watcher_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeNavigationElement = exports.NavigationElement = exports.NavigationElementId = void 0;
    exports.NavigationElementId = { ID: "element-component" };
    var NavigationElement = (function (_super) {
        __extends(NavigationElement, _super);
        function NavigationElement(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.keyComponents = [];
            _this.hasFocus = false;
            _this.setElement = function (element) { return _this.element = element; };
            _this.state = {
                prevProps: props,
                refPoints: __assign({ left: 0.5, right: 0.5, up: 0.5, down: 0.5 }, props.refPoints),
                isFocused: false
            };
            var parentContainerData = _this.findParentComponent(container_1.NavigationContainerId);
            if (parentContainerData.component) {
                _this.parentContainer = parentContainerData.component;
                _this.itemId = _this.parentContainer.itemId + "::" + _this.props.id;
                var parentElement = _this.findParentComponent(exports.NavigationElementId).component;
                if (parentElement) {
                    throw new public_2.ReactBaseError("NavigationElement with id '" + _this.itemId + "' cannot be nested with another NavigationElement with id '" + parentElement.itemId + "'");
                }
                var keyChannel = new public_1.EventChannel();
                keyChannel.shouldProcess(function () { return _this.hasFocus; });
                var closableChannel = keyChannel.onAfter(function (args) { return _this.onKeyEvent(args); });
                var unregister_1 = [_this.parentContainer.registerComponent(_this, keyChannel), closableChannel];
                _this.parentContainer.mountComponentStart();
                var parentWatcherData = _this.findParentComponent(watcher_1.NavigationWatcherId);
                if (parentWatcherData.component && parentWatcherData.distance < parentContainerData.distance) {
                    unregister_1.push(parentWatcherData.component.registerComponent(_this));
                }
                _this.unregisterComponent = function () {
                    for (var _i = 0, unregister_2 = unregister_1; _i < unregister_2.length; _i++) {
                        var func = unregister_2[_i];
                        func();
                    }
                };
            }
            else {
                throw new public_2.ReactBaseError("The element has no parent container. ID: " + _this.ID);
            }
            _this.onMessage(interfaces_1.NavigationBroadcastTypes.Change, function (args) {
                if (args.phase == interfaces_1.NavigationBroadcastPhase.focus) {
                    if (args.focusIDs) {
                        var indexFocus = args.focusIDs.indexOf(_this.itemId);
                        if (indexFocus > -1) {
                            _this.hasFocus = true;
                            if (_this.props.onFocusIn) {
                                args.registerActionCallback(function () { var _a, _b; return (_b = (_a = _this.props).onFocusIn) === null || _b === void 0 ? void 0 : _b.call(_a, _this, "in"); });
                            }
                        }
                    }
                }
                if (args.phase == interfaces_1.NavigationBroadcastPhase.blur) {
                    if (args.blurIDs) {
                        var indexBlur = args.blurIDs.indexOf(_this.itemId);
                        if (indexBlur > -1) {
                            _this.hasFocus = false;
                            if (_this.props.onFocusOut) {
                                args.registerActionCallback(function () { var _a, _b; return (_b = (_a = _this.props).onFocusOut) === null || _b === void 0 ? void 0 : _b.call(_a, _this, "out"); });
                            }
                        }
                    }
                }
            });
            _this.onMessage(interfaces_1.NavigationBroadcastTypes.Focus, function (args) {
                if (args.data == _this.itemId) {
                    _this.focus();
                }
            });
            return _this;
        }
        Object.defineProperty(NavigationElement.prototype, "disabled", {
            get: function () {
                return !!this.props.disabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NavigationElement.prototype, "autofocus", {
            get: function () {
                return !!this.props.autofocus;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NavigationElement.prototype, "overrides", {
            get: function () {
                return this.props.overrides;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(NavigationElement.prototype, "refPoints", {
            get: function () {
                return this.state.refPoints;
            },
            enumerable: false,
            configurable: true
        });
        NavigationElement.getDerivedStateFromProps = function (nextProps, prevState) {
            var prevProps = prevState.prevProps;
            if (prevProps.id !== nextProps.id) {
                throw new public_2.ReactBaseError("The element id was changed from '" + prevProps.id + "' to '" + nextProps.id + "'. This is not supported. ID: " + exports.NavigationElementId.ID);
            }
            if (prevProps.refPoints !== nextProps.refPoints) {
                return {
                    prevProps: nextProps,
                    refPoints: __assign({ left: 0.5, right: 0.5, up: 0.5, down: 0.5 }, nextProps.refPoints)
                };
            }
            if (prevProps !== nextProps) {
                return { prevProps: nextProps };
            }
            return null;
        };
        NavigationElement.prototype.componentDidMount = function () {
            var _this = this;
            if (this.parentContainer)
                this.parentContainer.mountComponentEnd(this.props.onReady ? function () { var _a, _b; return (_b = (_a = _this.props).onReady) === null || _b === void 0 ? void 0 : _b.call(_a, _this); } : undefined);
            if (this.props.onClientRectChanged)
                this.props.onClientRectChanged(this, this.getBoundingClientRect());
        };
        NavigationElement.prototype.componentDidUpdate = function () {
            if (this.props.onClientRectChanged)
                this.props.onClientRectChanged(this, this.getBoundingClientRect());
        };
        NavigationElement.prototype.componentWillUnmount = function () {
            if (this.unregisterComponent)
                this.unregisterComponent();
            this.unregisterComponent = undefined;
            navigation_service_1.NavigationService.getInstance().blurElement(this);
        };
        NavigationElement.prototype.click = function () {
            if (this.props.onClick)
                this.props.onClick(this);
        };
        NavigationElement.prototype.focus = function () {
            if (!this.disabled) {
                navigation_service_1.NavigationService.getInstance().focusElement(this);
            }
        };
        NavigationElement.prototype.moveFocus = function (direction) {
            var parentComponent = this.findParentComponent(layer_1.LayerId).component;
            if (parentComponent) {
                parentComponent.moveFocus(direction);
            }
        };
        NavigationElement.prototype.onKeyEvent = function (keyEvent) {
            var handled = false;
            for (var _i = 0, _a = this.keyComponents; _i < _a.length; _i++) {
                var keyElement = _a[_i];
                handled = keyElement.onKey(keyEvent);
                if (handled) {
                    break;
                }
            }
            if (!handled && keyEvent.virtualKey === public_3.TVKeyCodeConfig.OK_KEY) {
                handled = true;
                this.click();
            }
            return handled;
        };
        NavigationElement.prototype.registerKeyComponent = function (component) {
            var _this = this;
            this.keyComponents.push(component);
            return function () {
                var index = _this.keyComponents.indexOf(component);
                if (index !== -1) {
                    _this.keyComponents.splice(index, 1);
                }
            };
        };
        NavigationElement.prototype.setElementState = function (state) {
            if (this.unregisterComponent) {
                if (state == interfaces_1.NavigationFocusStates.blur) {
                    this.setState({ isFocused: false });
                }
                else {
                    this.setState({ isFocused: true });
                }
            }
        };
        NavigationElement.prototype.getBoundingClientRect = function () {
            return this.element.getBoundingClientRect();
        };
        NavigationElement.prototype.getInnerText = function (className) {
            var _a;
            if (className) {
                var element = this.element && this.element.getElementsByClassName(className)[0];
                return element === null || element === void 0 ? void 0 : element.innerText;
            }
            else {
                return (_a = this.element) === null || _a === void 0 ? void 0 : _a.innerText;
            }
        };
        NavigationElement.prototype.render = function () {
            var classes = [this.ID, this.props.className, this.state.isFocused ? "dttv-focused" : ""].filter(public_1.Guard.isNonEmptyString);
            return React.createElement("div", { className: classes.join(" "), "data-item-id": this.itemId, ref: this.setElement, style: this.props.style }, this.props.children);
        };
        NavigationElement.defaultProps = {
            className: "",
            id: ""
        };
        NavigationElement = __decorate([
            public_2.reactComponent({
                ID: exports.NavigationElementId.ID
            })
        ], NavigationElement);
        return NavigationElement;
    }(public_2.ReactBaseComponent));
    exports.NavigationElement = NavigationElement;
    function makeNavigationElement(InnerComponent) {
        return function (props) {
            return React.createElement(NavigationElement, __assign({}, props),
                React.createElement(InnerComponent, __assign({}, props)));
        };
    }
    exports.makeNavigationElement = makeNavigationElement;
});
//# sourceMappingURL=element.js.map