var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
define(["require", "exports", "./css.base", "src/src-de-telekom/public"], function (require, exports, css_base_1, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CssGradients = exports.GradientStopPoint = void 0;
    var GradientStopPoint = (function () {
        function GradientStopPoint(color, position) {
            this.color = color;
            this.position = position;
            if (position < 0 || position > 100)
                throw new public_1.IllegalArgumentError("The 'position' parameter is outside the valid range of 0 to 100. Value: '" + position + "'");
        }
        GradientStopPoint.prototype.toString = function () {
            return "" + this.color.toString() + (this.position ? " " + this.position + "%" : "");
        };
        return GradientStopPoint;
    }());
    exports.GradientStopPoint = GradientStopPoint;
    var CssGradients = (function () {
        function CssGradients() {
        }
        CssGradients.LinearGradientMixin = function (stopPoints, angle) {
            if (angle === void 0) { angle = 0; }
            if (!stopPoints || (stopPoints.length === 0))
                throw new public_1.IllegalArgumentError("The array 'stopPoints' must contain at least one element.");
            if (angle < 0 || angle > 360)
                throw new public_1.IllegalArgumentError("The 'angle' parameter is outside the valid range of 0 to 360. Value: '" + angle + "'");
            var points = __spreadArray([], stopPoints).sort(function (a, b) { return a.position - b.position; }).map(function (item) { return item.toString(); });
            return css_base_1.declaration()
                .props({
                background: "linear-gradient(" + angle + "deg, " + points.join(", ") + ")"
            });
        };
        CssGradients.InverseLinearGradientMixin = function (target, steps, stopPoints, angle) {
            if (angle === void 0) { angle = 0; }
            if (!stopPoints || (stopPoints.length === 0))
                throw new public_1.IllegalArgumentError("The array 'stopPoints' must contain at least one element.");
            if (angle < 0 || angle > 360)
                throw new public_1.IllegalArgumentError("The 'angle' parameter is outside the valid range of 0 to 360. Value: '" + angle + "'");
            if (target < 0 || target > 1)
                throw new public_1.IllegalArgumentError("The 'target' parameter is outside the valid range of 0 to 1. Value: '" + target + "'");
            if (steps <= 0)
                throw new public_1.IllegalArgumentError("The 'steps' parameter must be greater than 0. Value: '" + steps + "'");
            var slopeSteps = [];
            var points = __spreadArray([], stopPoints).sort(function (a, b) { return a.position - b.position; });
            for (var index = 0; index < points.length - 1; index++) {
                var value = (points[index + 1].color.alpha - points[index].color.alpha) / (points[index + 1].position - points[index].position);
                var slope = { start: points[index].position, end: points[index + 1].position, color: points[index].color, slope: value };
                slopeSteps.push(slope);
            }
            var newStopPoints = [];
            var _loop_1 = function (i) {
                var slope = slopeSteps.filter(function (item) { return (item.start <= i) && (i <= item.end); })[0];
                var opacity1 = (slope.color.alpha + (i - slope.start) * slope.slope);
                var opacity2 = 1 - ((1 - target) / (1 - opacity1));
                var color = new css_base_1.CssRgbaColor(slope.color.red, slope.color.green, slope.color.red, opacity2);
                newStopPoints.push(new GradientStopPoint(color, i));
            };
            for (var i = 0; i <= 100; i += (1 / steps)) {
                _loop_1(i);
            }
            return CssGradients.LinearGradientMixin(newStopPoints, angle);
        };
        Object.defineProperty(CssGradients, "A_SH_1_1", {
            get: function () {
                return css_base_1.CssFunctions.add("a-sh-1-1", function (style) { return css_base_1.selector("." + style)
                    .extend(CssGradients.A_SH_1_1_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGradients, "A_SH_1_2", {
            get: function () {
                return css_base_1.CssFunctions.add("a-sh-1-2", function (style) { return css_base_1.selector("." + style)
                    .extend(CssGradients.A_SH_1_2_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGradients, "A_SH_1_3", {
            get: function () {
                return css_base_1.CssFunctions.add("a-sh-1-3", function (style) { return css_base_1.selector("." + style)
                    .extend(CssGradients.A_SH_1_3_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGradients, "A_SH_2", {
            get: function () {
                return css_base_1.CssFunctions.add("a-sh-2", function (style) { return css_base_1.selector("." + style)
                    .extend(CssGradients.A_SH_2_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGradients, "A_SH_3", {
            get: function () {
                return css_base_1.CssFunctions.add("a-sh-3", function (style) { return css_base_1.selector("." + style)
                    .extend(CssGradients.A_SH_3_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGradients, "A_SH_4", {
            get: function () {
                return css_base_1.CssFunctions.add("a-sh-4", function (style) { return css_base_1.selector("." + style)
                    .extend(CssGradients.A_SH_4_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGradients, "A_SH_7", {
            get: function () {
                return css_base_1.CssFunctions.add("a-sh-7", function (style) { return css_base_1.selector("." + style)
                    .extend(CssGradients.A_SH_7_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGradients, "CatalogMenubarGradient", {
            get: function () {
                return css_base_1.CssFunctions.add("a-sh-4-TD", function (style) { return css_base_1.selector("." + style)
                    .extend(CssGradients.CatalogMenubarGradient_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGradients, "A_SH_4_1", {
            get: function () {
                return css_base_1.CssFunctions.add("a-sh-4-1", function (style) { return css_base_1.selector("." + style)
                    .extend(CssGradients.A_SH_4_1_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGradients, "A_SH_4_2", {
            get: function () {
                return css_base_1.CssFunctions.add("a-sh-4-2", function (style) { return css_base_1.selector("." + style)
                    .extend(CssGradients.A_SH_4_2_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGradients, "A_SH_4_3", {
            get: function () {
                return css_base_1.CssFunctions.add("a-sh-4-3", function (style) { return css_base_1.selector("." + style)
                    .extend(CssGradients.A_SH_4_3_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGradients, "A_SH_4_4", {
            get: function () {
                return css_base_1.CssFunctions.add("a-sh-4-4", function (style) { return css_base_1.selector("." + style)
                    .extend(CssGradients.A_SH_4_4_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        CssGradients.A_SH_1_1_mixin = css_base_1.declaration()
            .props({
            background: "linear-gradient(5deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 60%)"
        });
        CssGradients.A_SH_1_2_mixin = css_base_1.declaration()
            .props({
            background: "linear-gradient(13deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 60%)"
        });
        CssGradients.A_SH_1_3_mixin = css_base_1.declaration()
            .props({
            background: "linear-gradient(5deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 60%)"
        });
        CssGradients.A_SH_2_mixin = css_base_1.declaration()
            .props({
            background: "linear-gradient(15deg, rgba(0, 0, 0, 0.65) , rgba(0, 0, 0, 0) 80%)"
        });
        CssGradients.A_SH_3_mixin = css_base_1.declaration()
            .props({
            background: "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 1%, rgba(0, 0, 0, 0.50) 20%, rgba(0, 0, 0, 0.87) 100%)"
        });
        CssGradients.A_SH_4_mixin = css_base_1.declaration()
            .props({
            background: "linear-gradient(5deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 50%)"
        });
        CssGradients.A_SH_7_mixin = css_base_1.declaration()
            .props({
            background: "linear-gradient(90deg, rgba(0, 0, 0, 0.87) 6%, rgba(0, 0, 0, 0) 100%), linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)"
        });
        CssGradients.CatalogMenubarGradient_mixin = css_base_1.declaration()
            .props({
            background: "linear-gradient(180deg, rgba(0,0,0,0.77), rgba(0,0,0,0))"
        });
        CssGradients.A_SH_4_1_mixin = css_base_1.declaration()
            .props({
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 50%)"
        });
        CssGradients.A_SH_4_2_mixin = css_base_1.declaration()
            .props({
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 50%)"
        });
        CssGradients.A_SH_4_3_mixin = css_base_1.declaration()
            .props({
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 60%)"
        });
        CssGradients.A_SH_4_4_mixin = css_base_1.declaration()
            .props({
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 60%)"
        });
        return CssGradients;
    }());
    exports.CssGradients = CssGradients;
});
//# sourceMappingURL=css.gradients.js.map