define(["require", "exports", "./css.base"], function (require, exports, css_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mediaPlayerStyles = void 0;
    function mediaPlayerStyles() {
        css_base_1.CssFunctions.appendStyle(css_base_1.selector(".dttv-show-mediaplayer-zac-main")
            .props({
            height: "100%",
            position: "absolute",
            width: "100%"
        }), css_base_1.selector(".dttv-hide-mediaplayer-zac-plugin")
            .props({
            height: 0,
            position: "absolute",
            width: 0
        }), css_base_1.selector(".dttv-mainplayer-container")
            .props({
            bottom: 0,
            left: 0,
            overflow: "hidden",
            position: "absolute",
            right: 0,
            top: 0
        }));
    }
    exports.mediaPlayerStyles = mediaPlayerStyles;
});
//# sourceMappingURL=css.mediaplayer.js.map