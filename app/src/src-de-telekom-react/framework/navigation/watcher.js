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
define(["require", "exports", "react", "./interfaces", "../../base/public", "./container"], function (require, exports, React, interfaces_1, public_1, container_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NavigationWatcher = exports.NavigationWatcherId = void 0;
    exports.NavigationWatcherId = { ID: "watcher-component" };
    var NavigationWatcher = (function (_super) {
        __extends(NavigationWatcher, _super);
        function NavigationWatcher(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.navigableComponents = [];
            _this.onMessage(interfaces_1.NavigationBroadcastTypes.Change, function (args) {
                var itemFocus;
                var itemFocusTree;
                var itemBlur;
                var itemBlurTree;
                for (var _i = 0, _a = _this.navigableComponents; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (args.focusIDs) {
                        if (args.itemIsInPath(args.focusIDs, item.itemId)) {
                            itemFocus = item;
                        }
                        if (args.focusIDs.indexOf(item.itemId) > 0) {
                            itemFocusTree = item;
                        }
                    }
                    if (args.blurIDs) {
                        if (args.itemIsInPath(args.blurIDs, item.itemId)) {
                            itemBlur = item;
                        }
                        if (args.blurIDs.indexOf(item.itemId) > 0) {
                            itemBlurTree = item;
                        }
                    }
                }
                if (args.phase == interfaces_1.NavigationBroadcastPhase.focus) {
                    if (itemFocusTree && !itemBlurTree && _this.props.onFocusInTree) {
                        args.registerActionCallback(function () { return itemFocusTree && _this.props.onFocusInTree && _this.props.onFocusInTree(itemFocusTree, "inTree"); });
                    }
                    if (itemFocus && _this.props.onFocusIn) {
                        args.registerActionCallback(function () { return itemFocus && _this.props.onFocusIn && _this.props.onFocusIn(itemFocus, "in"); });
                    }
                }
                return function () {
                    if (args.phase == interfaces_1.NavigationBroadcastPhase.blur) {
                        if (itemBlurTree && !itemFocusTree && _this.props.onFocusOutTree) {
                            args.registerActionCallback(function () { return itemBlurTree && _this.props.onFocusOutTree && _this.props.onFocusOutTree(itemBlurTree, "outTree"); });
                        }
                        if (itemBlur && _this.props.onFocusOut) {
                            args.registerActionCallback(function () { return itemBlur && _this.props.onFocusOut && _this.props.onFocusOut(itemBlur, "out"); });
                        }
                    }
                };
            });
            return _this;
        }
        NavigationWatcher.prototype.preInit = function () {
            _super.prototype.preInit.call(this);
            var parentContainerData = this.findParentComponent(container_1.NavigationContainerId);
            var parentWatcherData = this.findParentComponent(exports.NavigationWatcherId);
            if (parentWatcherData.component && parentWatcherData.distance < parentContainerData.distance) {
                this.injectedWatcher = parentWatcherData.component;
            }
        };
        NavigationWatcher.prototype.registerComponent = function (component) {
            var _this = this;
            this.navigableComponents.push(component);
            var watchClosable;
            if (this.injectedWatcher) {
                watchClosable = this.injectedWatcher.registerComponent(component);
            }
            return function () {
                var index = _this.navigableComponents.indexOf(component);
                if (index !== -1) {
                    _this.navigableComponents.splice(index, 1);
                }
                if (watchClosable) {
                    watchClosable();
                }
            };
        };
        NavigationWatcher.prototype.render = function () {
            return React.createElement(React.Fragment, null, this.props.children);
        };
        NavigationWatcher = __decorate([
            public_1.reactComponent({
                ID: exports.NavigationWatcherId.ID
            })
        ], NavigationWatcher);
        return NavigationWatcher;
    }(public_1.ReactBaseComponent));
    exports.NavigationWatcher = NavigationWatcher;
});
//# sourceMappingURL=watcher.js.map