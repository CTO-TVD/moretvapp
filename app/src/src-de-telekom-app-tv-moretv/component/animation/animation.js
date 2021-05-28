define(["require", "exports", "src/src-de-telekom-style/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Animations = void 0;
    var Animations = (function () {
        function Animations() {
        }
        Animations.highlighedName = "highlightedStage";
        Animations.hiddenName = "hiddenStage";
        Animations.fadedName = "fadedStage";
        Animations.fadable = public_1.declaration()
            .props({
            willChange: "opacity",
            transition: "opacity " + public_1.Css.transitions.middle
        });
        Animations.faded = public_1.declaration()
            .props({
            willChange: "opacity, transform",
            transition: "opacity " + public_1.Css.transitions.middle + ", transform " + public_1.Css.transitions.middle,
            opacity: 0.4
        });
        Animations.highlighted = public_1.declaration()
            .props({
            transition: "opacity " + public_1.Css.transitions.middle + ", transform " + public_1.Css.transitions.middle,
            opacity: 1
        });
        Animations.hideInstant = public_1.declaration()
            .props({
            transition: "opacity 0ms, transform 0ms",
            opacity: 0
        });
        Animations.visibleLaneName = "visibleLane";
        Animations.invisibleLaneName = "invisibleLane";
        Animations.movable = public_1.declaration()
            .props({
            willChange: "transform",
            transition: "transform " + public_1.Css.transitions.middle
        });
        Animations.moveAndFadable = public_1.declaration()
            .props({
            willChange: "transform, opacity",
            transition: "transform  " + public_1.Css.transitions.middle + ", opacity " + public_1.Css.transitions.middle
        });
        return Animations;
    }());
    exports.Animations = Animations;
});
//# sourceMappingURL=animation.js.map