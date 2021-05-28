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
define(["require", "exports", "react", "rxjs", "src/src-de-telekom/public", "./reactRoot.service", "./reactBaseError", "./reactContext"], function (require, exports, React, rxjs_1, public_1, reactRoot_service_1, reactBaseError_1, reactContext_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReactBaseComponent = void 0;
    var ReactBaseComponent = (function (_super) {
        __extends(ReactBaseComponent, _super);
        function ReactBaseComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.isDestroyed = false;
            _this.subComponents = [];
            _this.onMessages = Object.create(null);
            _this.preInit();
            if (!_this.ID)
                throw new reactBaseError_1.ReactBaseError("Component has no ID defined. Maybe the @reactComponent() is missing.");
            if (_this.parentComponent) {
                _this.unregisterSubComponent = _this.parentComponent.registerSubComponent(_this);
            }
            if (!reactRoot_service_1.ReactRootService.isComplete) {
                reactRoot_service_1.ReactRootService.getInstance().registerRootMessageComponent(_this);
            }
            _this.onMessage(ReactBaseComponent_1.BroadCastOnPushstateCollect, function (args) {
                _this.onPushstateSave(args);
            });
            return _this;
        }
        ReactBaseComponent_1 = ReactBaseComponent;
        ReactBaseComponent.prototype.preInit = function () {
            this.ID = Object.getPrototypeOf(this).constructor.ID;
        };
        ReactBaseComponent.prototype.postInit = function () {
            this.onPushstateLoad();
        };
        ReactBaseComponent.prototype.startIntent = function (intent, options) {
            if (this.context.router) {
                return this.context.router.history.startIntent(intent, options);
            }
            else {
                throw new reactBaseError_1.ReactBaseError("The method 'startIntent' is only available inside a <router>.");
            }
        };
        ReactBaseComponent.prototype.onPushstateSave = function (states) {
            var _this = this;
            if (this.pushStateFields) {
                var fieldStates_1 = {};
                for (var _i = 0, _a = this.pushStateFields; _i < _a.length; _i++) {
                    var fieldData = _a[_i];
                    fieldStates_1[fieldData.field] = this[fieldData.field];
                }
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("onPushstateSave: '" + _this.getUniqueId() + "' : " + JSON.stringify(fieldStates_1), ReactBaseComponent_1.TAG)); });
                states[this.getUniqueId()] = fieldStates_1;
            }
        };
        ReactBaseComponent.prototype.onPushstateLoad = function () {
            var _this = this;
            if (this.pushStateFields) {
                if (this.context.router) {
                    var state = this.location.state;
                    if (state) {
                        var fieldStates_2 = state[this.getUniqueId()];
                        if (fieldStates_2) {
                            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("onPushstateLoad: '" + _this.getUniqueId() + "' : " + JSON.stringify(fieldStates_2), ReactBaseComponent_1.TAG)); });
                            for (var _i = 0, _a = this.pushStateFields; _i < _a.length; _i++) {
                                var fieldData = _a[_i];
                                this[fieldData.field] = fieldStates_2[fieldData.field];
                                if (fieldData.removeAfterLoad) {
                                    delete fieldStates_2[fieldData.field];
                                }
                            }
                        }
                        else {
                            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("onPushstateLoad: '" + _this.getUniqueId() + "' : <no data available>", ReactBaseComponent_1.TAG)); });
                        }
                    }
                    else {
                        public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("onPushstateLoad: '" + _this.getUniqueId() + "' state is not available.", ReactBaseComponent_1.TAG)); });
                    }
                }
                else {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("onPushstateLoad: '" + _this.getUniqueId() + "' router is not available.", ReactBaseComponent_1.TAG)); });
                }
            }
        };
        ReactBaseComponent.prototype.getContextValue = function () {
            return this.getMemoContextValue(this.context.intl, this.context.router);
        };
        ReactBaseComponent.prototype.getMemoContextValue = function (intl, router) {
            return {
                intl: intl,
                router: router,
                parentComponent: this
            };
        };
        Object.defineProperty(ReactBaseComponent.prototype, "parentComponent", {
            get: function () {
                return this.context.parentComponent;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReactBaseComponent.prototype, "location", {
            get: function () {
                return this.context.router.route.location;
            },
            enumerable: false,
            configurable: true
        });
        ReactBaseComponent.prototype.findParentComponent = function (type) {
            var parent = this.context.parentComponent;
            var distance = 0;
            while (parent) {
                distance++;
                if (parent.ID === type.ID) {
                    return { component: parent, distance: distance };
                }
                parent = parent.parentComponent;
            }
            return { component: undefined, distance: distance };
        };
        ReactBaseComponent.prototype.registerSubComponent = function (component) {
            var _this = this;
            this.subComponents.push(component);
            return function () {
                var index = _this.subComponents.indexOf(component);
                if (index !== -1) {
                    _this.subComponents.splice(index, 1);
                }
            };
        };
        ReactBaseComponent.prototype.getUniqueId = function (component) {
            return (this.parentComponent ? this.parentComponent.getUniqueId(this) + "_" : "")
                + "("
                + this.ID
                + (component ? "[" + this.subComponents.indexOf(component) + "]" : "")
                + ")";
        };
        ReactBaseComponent.prototype.destroyInternal = function () {
            this.isDestroyed = true;
            if (this.destroySubject) {
                this.destroySubject.next();
                this.destroySubject.complete();
            }
        };
        ReactBaseComponent.prototype.onDestroy = function (evtHandlerFunction) {
            this.destroyNotifier.subscribe({ complete: function () { return evtHandlerFunction(); } });
        };
        Object.defineProperty(ReactBaseComponent.prototype, "destroyed", {
            get: function () {
                return this.isDestroyed;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ReactBaseComponent.prototype, "destroyNotifier", {
            get: function () {
                return this.destroySubject || (this.destroySubject = new rxjs_1.Subject());
            },
            enumerable: false,
            configurable: true
        });
        ReactBaseComponent.prototype.broadcastMessage = function (id, message) {
            var _a, _b;
            var messageCallback = (_b = (_a = this.onMessages)[id.ID]) === null || _b === void 0 ? void 0 : _b.call(_a, message);
            for (var _i = 0, _c = this.subComponents; _i < _c.length; _i++) {
                var component = _c[_i];
                component.broadcastMessage(id, message);
            }
            if (messageCallback) {
                messageCallback();
            }
        };
        ReactBaseComponent.prototype.onMessage = function (id, callback) {
            var _this = this;
            this.onMessages[id.ID] = callback;
            return function () {
                delete _this.onMessages[id.ID];
            };
        };
        var ReactBaseComponent_1;
        ReactBaseComponent.BroadCastOnPushstateCollect = { ID: "baseComponentOnPushstateCollect" };
        ReactBaseComponent.contextType = reactContext_1.ReactBaseContext;
        __decorate([
            public_1.Memoize.decorator()
        ], ReactBaseComponent.prototype, "getMemoContextValue", null);
        ReactBaseComponent = ReactBaseComponent_1 = __decorate([
            public_1.logTag()
        ], ReactBaseComponent);
        return ReactBaseComponent;
    }(React.Component));
    exports.ReactBaseComponent = ReactBaseComponent;
});
//# sourceMappingURL=reactBaseComponent.js.map