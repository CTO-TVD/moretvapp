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
define(["require", "exports", "react", "src/src-de-telekom/public", "../../base/public", "../../service/keyeventmanager/public", "./interfaces", "./layermanager.service"], function (require, exports, React, public_1, public_2, public_3, interfaces_1, layermanager_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Layer = exports.LayerId = void 0;
    exports.LayerId = { ID: "layer-component" };
    var Layer = (function (_super) {
        __extends(Layer, _super);
        function Layer(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.keyComponents = [];
            _this.mountData = {
                registerCounter: 0,
                actionCallbacks: []
            };
            _this.isVisible = false;
            _this.hasFocusableChildren = false;
            _this.itemId = "";
            _this.navigationComponentCount = 0;
            _this.state = {
                isVisible: false,
                className: ""
            };
            _this.layerManagerService = layermanager_service_1.TVLayerManagerService.getInstance();
            var keyEventManagerService = public_3.TVKeyEventManagerService.getInstance();
            _this.onMessage(interfaces_1.NavigationBroadcastTypes.Change, function (args) {
                if (args.phase == interfaces_1.NavigationBroadcastPhase.focus) {
                    if (args.focusIDs) {
                        var indexFocus = args.focusIDs.indexOf(_this.itemId);
                        if (indexFocus > -1) {
                            _this.onFocus(args.focusIDs[indexFocus + 1]);
                        }
                    }
                }
                if (args.phase == interfaces_1.NavigationBroadcastPhase.blur) {
                    if (args.blurIDs) {
                        var indexBlur = args.blurIDs.indexOf(_this.itemId);
                        if (indexBlur > -1) {
                            _this.onBlur(args.blurIDs[indexBlur + 1]);
                        }
                    }
                }
            });
            var unregisterLayer = _this.layerManagerService.registerLayer(_this);
            _this.keyChannel = new public_1.EventChannel({ priority: _this.props.priority, id: _this.activationKey });
            _this.keyChannel.shouldProcess(function () { return _this.isVisible && _this.isActive; });
            var closableChannel = _this.keyChannel.onAfter(function (args) { return _this.onKeyEvent(args); });
            var unregisterKeyHandler = keyEventManagerService.registerChannel(_this.keyChannel);
            _this.onDestroy(function () {
                closableChannel();
                unregisterLayer();
                unregisterKeyHandler();
            });
            return _this;
        }
        Layer_1 = Layer;
        Layer.prototype.mountComponentStart = function () {
            var mountData = this.mountData;
            mountData.registerCounter++;
        };
        Layer.prototype.mountComponentEnd = function (action) {
            if (this.navigationComponentCount > 1) {
                throw new public_2.ReactBaseError("There are maybe too many containers registered for this layer. layer: '" + this.itemId + "'");
            }
            var mountData = this.mountData;
            mountData.registerCounter--;
            if (action)
                mountData.actionCallbacks.push(action);
            if (mountData.registerCounter === 0) {
                if (this.navigationComponent)
                    this.navigationComponent.focus();
                while (mountData.actionCallbacks.length > 0) {
                    mountData.actionCallbacks.shift()();
                }
            }
        };
        Object.defineProperty(Layer.prototype, "isActive", {
            get: function () {
                return public_1.Guard.isNumber(this.timeOfActivation);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "activationKey", {
            get: function () {
                return this.props.activationKey || layermanager_service_1.TVLayerManagerService.ROOTLAYER;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Layer.prototype, "priority", {
            get: function () {
                return this.props.priority;
            },
            enumerable: false,
            configurable: true
        });
        Layer.prototype.onFocus = function (id) {
            var _this = this;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("focus called -> " + _this.itemId + ". id: " + id, Layer_1.TAG)); });
            this.hasFocusableChildren = true;
            this.layerManagerService.setLayerStates();
        };
        Layer.prototype.onBlur = function (id) {
            var _this = this;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("blur called -> " + _this.itemId + ". id: " + id, Layer_1.TAG)); });
            this.layerManagerService.setLayerStates();
        };
        Layer.prototype.show = function (initial, layerProps) {
            var _this = this;
            if (!this.isVisible) {
                this.itemId = this.activationKey == layermanager_service_1.TVLayerManagerService.ROOTLAYER ? this.activationKey : this.activationKey + "_" + Layer_1.itemIdCounter++;
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("show called -> " + _this.itemId + ".", Layer_1.TAG)); });
                this.isVisible = true;
                this.timeOfActivation = undefined;
                this.hasFocusableChildren = false;
                if (initial) {
                    this.state = __assign(__assign({}, this.state), { isVisible: this.isVisible, layerProps: layerProps });
                }
                else {
                    this.setState({ isVisible: this.isVisible, layerProps: layerProps });
                }
                if (this.props.onChange)
                    this.props.onChange(this);
                this.layerManagerService.setLayerStates();
            }
            else {
                this.setState(function (prevState) { return prevState.layerProps != layerProps ? { layerProps: layerProps } : null; });
            }
        };
        Layer.prototype.hide = function () {
            var _this = this;
            if (this.isVisible) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("hide called -> " + _this.itemId + ".", Layer_1.TAG)); });
                this.isVisible = false;
                this.timeOfActivation = undefined;
                this.setState({
                    isVisible: this.isVisible,
                    className: ""
                });
                if (this.props.onChange)
                    this.props.onChange(this);
                this.layerManagerService.setLayerStates();
            }
        };
        Layer.prototype.activate = function () {
            var _this = this;
            if (this.isVisible && !this.isActive) {
                this.timeOfActivation = Date.now();
                this.setState({
                    className: "dttv-layer-active"
                });
                if (this.props.onChange)
                    this.props.onChange(this);
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("activate called -- layer: '" + _this.itemId + "', hasFocusableChildren: " + _this.hasFocusableChildren + ", isActive: " + _this.isActive + ", isVisible: " + _this.isVisible + ", priority: " + _this.props.priority, Layer_1.TAG)); });
            }
        };
        Layer.prototype.deactivate = function () {
            var _this = this;
            if (this.isVisible && this.isActive) {
                this.timeOfActivation = undefined;
                this.setState({
                    className: ""
                });
                if (this.props.onChange)
                    this.props.onChange(this);
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("deactivate called -- layer: '" + _this.itemId + "', hasFocusableChildren: " + _this.hasFocusableChildren + ", isActive: " + _this.isActive + ", isVisible: " + _this.isVisible + ", priority: " + _this.props.priority, Layer_1.TAG)); });
            }
        };
        Layer.prototype.registerComponent = function (component, keyChannel) {
            var _this = this;
            this.navigationComponentCount++;
            if (this.navigationComponentCount > 2) {
                throw new public_2.ReactBaseError("There are maybe too many containers registered for this layer. layer: '" + this.itemId + "' current container: '" + this.navigationComponent.itemId + "' new container: '" + component.itemId + "'");
            }
            this.navigationComponent = component;
            var closable = this.keyChannel.registerChannel(keyChannel);
            return function () {
                _this.navigationComponentCount--;
                closable();
            };
        };
        Layer.prototype.registerKeyComponent = function (component) {
            var _this = this;
            this.keyComponents.push(component);
            return function () {
                var index = _this.keyComponents.indexOf(component);
                if (index !== -1) {
                    _this.keyComponents.splice(index, 1);
                }
            };
        };
        Layer.prototype.moveFocus = function (direction) {
            var _this = this;
            setTimeout(function () {
                var key = direction === "up" ? public_3.TVKeyCodeConfig.UP_KEY
                    : direction === "down" ? public_3.TVKeyCodeConfig.DOWN_KEY
                        : direction === "left" ? public_3.TVKeyCodeConfig.LEFT_KEY
                            : direction === "right" ? public_3.TVKeyCodeConfig.RIGHT_KEY
                                : undefined;
                if (key)
                    _this.keyChannel.sendMessage({ virtualKey: key });
            }, 0);
        };
        Layer.prototype.onKeyEvent = function (keyEvent) {
            if (!this.hasFocusableChildren)
                return false;
            var handled = false;
            for (var _i = 0, _a = this.keyComponents; _i < _a.length; _i++) {
                var keyElement = _a[_i];
                handled = keyElement.onKey(keyEvent);
                if (handled) {
                    break;
                }
            }
            if (handled)
                return true;
            switch (keyEvent === null || keyEvent === void 0 ? void 0 : keyEvent.virtualKey) {
                case public_3.TVKeyCodeConfig.DOWN_KEY:
                case public_3.TVKeyCodeConfig.LEFT_KEY:
                case public_3.TVKeyCodeConfig.OK_KEY:
                case public_3.TVKeyCodeConfig.RIGHT_KEY:
                case public_3.TVKeyCodeConfig.UP_KEY:
                    return true;
                case public_3.TVKeyCodeConfig.BACK_KEY:
                    if (this.activationKey !== layermanager_service_1.TVLayerManagerService.ROOTLAYER) {
                        this.layerManagerService.hide(this.activationKey);
                        return true;
                    }
                case public_3.TVKeyCodeConfig.EXIT_KEY:
                case public_3.TVKeyCodeConfig.MENU_KEY:
                case public_3.TVKeyCodeConfig.SEARCH_KEY:
                case public_3.TVKeyCodeConfig.GUIDE_KEY:
                case public_3.TVKeyCodeConfig.AUDIO_KEY:
                case public_3.TVKeyCodeConfig.AUTOCLOSE_1_KEY:
                    if (this.activationKey !== layermanager_service_1.TVLayerManagerService.ROOTLAYER) {
                        this.layerManagerService.hide(this.activationKey);
                    }
            }
            return false;
        };
        Layer.prototype.render = function () {
            var _a, _b;
            if (this.state.isVisible) {
                var classes = ["dttv-layer", this.props.className, this.state.className].filter(public_1.Guard.isNonEmptyString);
                return React.createElement("div", { className: classes.join(" ") }, (_b = (_a = this.props).children) === null || _b === void 0 ? void 0 : _b.call(_a, this.state.layerProps));
            }
            return null;
        };
        var Layer_1;
        Layer.defaultProps = {
            activationKey: layermanager_service_1.TVLayerManagerService.ROOTLAYER,
            className: ""
        };
        Layer.itemIdCounter = 0;
        Layer = Layer_1 = __decorate([
            public_2.reactComponent({
                ID: exports.LayerId.ID
            }),
            public_1.logTag()
        ], Layer);
        return Layer;
    }(public_2.ReactBaseComponent));
    exports.Layer = Layer;
});
//# sourceMappingURL=layer.js.map