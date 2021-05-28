define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setPrototypeOf = exports.deepFreeze = void 0;
    function deepFreeze(obj, exceptions) {
        exceptions = exceptions || [];
        var propNames = Object.getOwnPropertyNames(obj);
        propNames.forEach(function (name) {
            var prop = obj[name];
            if (typeof prop == "object" && prop !== null && (!exceptions || exceptions.indexOf(prop) == -1))
                deepFreeze(prop, exceptions);
        });
        return Object.freeze(obj);
    }
    exports.deepFreeze = deepFreeze;
    exports.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
        obj.__proto__ = proto;
        return obj;
    };
});
//# sourceMappingURL=objectTools.js.map