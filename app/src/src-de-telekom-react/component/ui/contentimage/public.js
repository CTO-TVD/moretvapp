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
define(["require", "exports", "./contentimage.component", "./contentimage.component", "./contentimage_dynwidth.component"], function (require, exports, contentimage_component_1, contentimage_component_2, contentimage_dynwidth_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContentImage = void 0;
    __exportStar(contentimage_component_1, exports);
    var ContentImage;
    (function (ContentImage) {
        ContentImage.FitSize = contentimage_component_2.ContentImageComponent;
        ContentImage.DynamicWidth = contentimage_dynwidth_component_1.ContentImageDynamicWidthComponent;
    })(ContentImage = exports.ContentImage || (exports.ContentImage = {}));
});
//# sourceMappingURL=public.js.map