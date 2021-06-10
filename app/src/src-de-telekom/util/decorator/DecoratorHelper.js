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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPrototypes = exports.classExtender = void 0;
    function classExtender(superClass, instanceModifier) {
        return (function (_super) {
            __extends(DecoratorFunc, _super);
            function DecoratorFunc() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, args) || this;
                instanceModifier(_this, args);
                return _this;
            }
            return DecoratorFunc;
        }(superClass));
    }
    exports.classExtender = classExtender;
    function getPrototypes(obj) {
        return getPrototypesData(obj, []);
    }
    exports.getPrototypes = getPrototypes;
    function getPrototypesData(obj, prototypes) {
        if (obj) {
            var constructorKey = "constructor";
            if (obj.hasOwnProperty(constructorKey)) {
                var prototype = { keys: [] };
                prototype.name = (obj[constructorKey].toString().match(/\w+/g) || {})[1];
                for (var key in obj) {
                    if (key != constructorKey && obj.hasOwnProperty(key)) {
                        prototype.keys.push(key);
                    }
                }
                prototypes.push(prototype);
            }
            getPrototypesData(Object.getPrototypeOf(obj), prototypes);
        }
        return prototypes;
    }
});
//# sourceMappingURL=DecoratorHelper.js.map