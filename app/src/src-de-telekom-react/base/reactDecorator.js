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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
define(["require", "exports", "react", "./reactBaseError", "./reactContext"], function (require, exports, React, reactBaseError_1, reactContext_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reactSubModule = exports.reactPushState = exports.reactComponent = void 0;
    var uniqueIDs = Object.create(null);
    var regExId = /^[a-z]{1}[0-9a-z-]*$/;
    var regExSelector = /([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)/gm;
    function reactComponent(options) {
        if (!options.isWrapper && uniqueIDs[options.ID])
            throw new reactBaseError_1.ReactBaseError("ID is not unique: " + options.ID);
        if (!regExId.test(options.ID))
            throw new reactBaseError_1.ReactBaseError("ID contains invalid characters. ID: " + options.ID);
        uniqueIDs[options.ID] = true;
        return function (Target) {
            var _a;
            var cssInjected = false;
            return _a = (function (_super) {
                    __extends(DecoratorComponent, _super);
                    function DecoratorComponent(props, context) {
                        var _this = _super.call(this, props, context) || this;
                        if (!cssInjected && _this.ID) {
                            cssInjected = true;
                            var styles = DecoratorComponent.styles = __spreadArray(__spreadArray([], (Target.styles || [])), (options.styles || []));
                            if (styles && Array.isArray(styles)) {
                                var cssContent = "";
                                for (var _i = 0, styles_1 = styles; _i < styles_1.length; _i++) {
                                    var style = styles_1[_i];
                                    if (style) {
                                        cssContent += style.toString().replace(regExSelector, function (selector) {
                                            if (selector.indexOf("&") == -1) {
                                                throw new reactBaseError_1.ReactBaseError("Missing parent selector (\"&\") for css selector '" + selector.trim() + "' and component ID '" + _this.ID + "'.");
                                            }
                                            else {
                                                return selector.replace("&", "." + _this.ID);
                                            }
                                        });
                                    }
                                }
                                if (cssContent) {
                                    var css = document.createElement("style");
                                    css.type = "text/css";
                                    css.innerHTML = cssContent;
                                    if (document.head)
                                        document.head.appendChild(css);
                                }
                            }
                        }
                        _this.postInit();
                        return _this;
                    }
                    DecoratorComponent.prototype.componentWillUnmount = function () {
                        if (this.unregisterSubComponent)
                            this.unregisterSubComponent();
                        this.destroyInternal();
                        if (_super.prototype.componentWillUnmount)
                            _super.prototype.componentWillUnmount.call(this);
                    };
                    DecoratorComponent.prototype.render = function () {
                        var result = _super.prototype.render.call(this);
                        return result !== null && result !== undefined
                            ? React.createElement(reactContext_1.ReactBaseContext.Provider, { value: this.getContextValue() }, result)
                            : result;
                    };
                    return DecoratorComponent;
                }(Target)),
                _a.ID = options.ID,
                _a.displayName = options.ID,
                _a;
        };
    }
    exports.reactComponent = reactComponent;
    function reactPushState(removeAfterLoad) {
        return function (target, propertyKey) {
            if (!target.pushStateFields) {
                target.pushStateFields = [];
            }
            if (typeof propertyKey === "string") {
                target.pushStateFields.push({ field: propertyKey, removeAfterLoad: removeAfterLoad });
            }
        };
    }
    exports.reactPushState = reactPushState;
    function reactSubModule(ref) {
        return function (target) {
            return (function (_super) {
                __extends(DecoratorComponent, _super);
                function DecoratorComponent() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var _this = _super.apply(this, args) || this;
                    _this.submodules.push(ref);
                    return _this;
                }
                return DecoratorComponent;
            }(target));
        };
    }
    exports.reactSubModule = reactSubModule;
});
//# sourceMappingURL=reactDecorator.js.map