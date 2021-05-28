define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CssDimensions = void 0;
    var CssDimensions = (function () {
        function CssDimensions() {
        }
        CssDimensions.borderRadius = 6;
        CssDimensions.borderWidth = 6;
        CssDimensions.cursorWidth = 2;
        CssDimensions.screenWidth = 1920;
        CssDimensions.screenHeight = 1080;
        CssDimensions.safeareaLeft = 108;
        CssDimensions.safeareaRight = 108;
        CssDimensions.safeareaTop = 60;
        CssDimensions.safeareaBottom = 60;
        CssDimensions.safeareaWidth = CssDimensions.screenWidth - CssDimensions.safeareaLeft - CssDimensions.safeareaRight;
        CssDimensions.safeareaHeight = CssDimensions.screenHeight - CssDimensions.safeareaTop - CssDimensions.safeareaBottom;
        CssDimensions.dialog_content_width = 1176;
        CssDimensions.safeareaLeft_UI20 = 72;
        CssDimensions.safeareaRight_UI20 = 72;
        CssDimensions.safeareaWidth_UI20 = CssDimensions.screenWidth - CssDimensions.safeareaLeft_UI20 - CssDimensions.safeareaRight_UI20;
        CssDimensions.safeareaTop_UI20 = 72;
        CssDimensions.safeareaBottom_UI20 = 72;
        CssDimensions.remoteInteractionLayerHeight = 470;
        CssDimensions.SceneImageHeight = 830;
        CssDimensions.SceneImageWidth = 1475;
        return CssDimensions;
    }());
    exports.CssDimensions = CssDimensions;
});
//# sourceMappingURL=css.dimensions.js.map