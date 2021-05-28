define(["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReactBaseContext = void 0;
    exports.ReactBaseContext = React.createContext({
        parentComponent: undefined,
        router: undefined,
        intl: undefined
    });
});
//# sourceMappingURL=reactContext.js.map