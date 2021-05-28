var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define(["require", "exports", "./messageoverlay.component", "./termsofuse.wrapper", "./button/button.component", "./button/button3.component"], function (require, exports, messageoverlay_component_1, termsofuse_wrapper_1, button_component_1, button3_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ButtonMtv = void 0;
    __exportStar(messageoverlay_component_1, exports);
    __exportStar(termsofuse_wrapper_1, exports);
    var ButtonMtv;
    (function (ButtonMtv) {
        ButtonMtv.Standard = button_component_1.TVButton_Deprecated;
        ButtonMtv.IconTextRectangleButton = button3_component_1.TVButtonIconTextRectangle;
    })(ButtonMtv = exports.ButtonMtv || (exports.ButtonMtv = {}));
});
//# sourceMappingURL=public.js.map