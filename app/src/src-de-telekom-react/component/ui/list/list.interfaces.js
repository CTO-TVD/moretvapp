define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FocusLayer = exports.ListOrientation = void 0;
    var ListOrientation;
    (function (ListOrientation) {
        ListOrientation[ListOrientation["Horizontal"] = 0] = "Horizontal";
        ListOrientation[ListOrientation["Vertical"] = 1] = "Vertical";
    })(ListOrientation = exports.ListOrientation || (exports.ListOrientation = {}));
    var FocusLayer;
    (function (FocusLayer) {
        FocusLayer[FocusLayer["Background"] = 0] = "Background";
        FocusLayer[FocusLayer["Foreground"] = 1] = "Foreground";
    })(FocusLayer = exports.FocusLayer || (exports.FocusLayer = {}));
});
//# sourceMappingURL=list.interfaces.js.map