define(["require", "exports", "rxjs"], function (require, exports, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.doOnSubscribe = void 0;
    function doOnSubscribe(onSubscribe) {
        return function inner(source) {
            return rxjs_1.defer(function () {
                onSubscribe();
                return source;
            });
        };
    }
    exports.doOnSubscribe = doOnSubscribe;
});
//# sourceMappingURL=doOnSubscribe.js.map