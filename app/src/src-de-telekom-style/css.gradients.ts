import { CssColor, CssFunctions, declaration, selector, CssRgbaColor } from "./css.base";
import { IllegalArgumentError } from "src/src-de-telekom/public";

export class GradientStopPoint {

    public constructor(public color: CssColor, public position: number) {

        if (position < 0 || position > 100) throw new IllegalArgumentError(`The 'position' parameter is outside the valid range of 0 to 100. Value: '${position}'`);
    }

    public toString() {

        return `${this.color.toString()}${this.position ? " " + this.position + "%" : ""}`;
    }
}

export class CssGradients {

    public static LinearGradientMixin(stopPoints: GradientStopPoint[], angle = 0) {

        if (!stopPoints || (stopPoints.length === 0)) throw new IllegalArgumentError(`The array 'stopPoints' must contain at least one element.`);

        if (angle < 0 || angle > 360) throw new IllegalArgumentError(`The 'angle' parameter is outside the valid range of 0 to 360. Value: '${angle}'`);

        const points = [...stopPoints].sort((a, b) => a.position - b.position).map(item => item.toString());

        return declaration()
            .props({
                background: `linear-gradient(${angle}deg, ${points.join(", ")})`
            });
    }

    public static InverseLinearGradientMixin(target: number, steps: number, stopPoints: GradientStopPoint[], angle = 0) {

        if (!stopPoints || (stopPoints.length === 0)) throw new IllegalArgumentError(`The array 'stopPoints' must contain at least one element.`);

        if (angle < 0 || angle > 360) throw new IllegalArgumentError(`The 'angle' parameter is outside the valid range of 0 to 360. Value: '${angle}'`);

        if (target < 0 || target > 1) throw new IllegalArgumentError(`The 'target' parameter is outside the valid range of 0 to 1. Value: '${target}'`);

        if (steps <= 0) throw new IllegalArgumentError(`The 'steps' parameter must be greater than 0. Value: '${steps}'`);

        const slopeSteps = [];

        const points = [...stopPoints].sort((a, b) => a.position - b.position);

        for (let index = 0; index < points.length - 1; index++) {

            const value = (points[index + 1].color.alpha - points[index].color.alpha) / (points[index + 1].position - points[index].position);

            const slope = { start: points[index].position, end: points[index + 1].position, color: points[index].color, slope: value };

            slopeSteps.push(slope);
        }

        const newStopPoints: GradientStopPoint[] = [];

        for (let i = 0; i <= 100; i += (1 / steps)) {

            const slope = slopeSteps.filter(item => (item.start <= i) && (i <= item.end))[0];

            const opacity1 = (slope.color.alpha + (i - slope.start) * slope.slope);
            const opacity2 = 1 - ((1 - target) / (1 - opacity1));
            const color = new CssRgbaColor(slope.color.red, slope.color.green, slope.color.red, opacity2);

            newStopPoints.push(new GradientStopPoint(color, i));
        }

        return CssGradients.LinearGradientMixin(newStopPoints, angle);
    }

    public static readonly A_SH_1_1_mixin = declaration()
        .props({
            background: "linear-gradient(5deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 60%)"
        });

    public static get A_SH_1_1() {
        return CssFunctions.add("a-sh-1-1",
            style => selector("." + style)
                .extend(CssGradients.A_SH_1_1_mixin)
        );
    }

    public static readonly A_SH_1_2_mixin = declaration()
        .props({
            background: "linear-gradient(13deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 60%)"
        });

    public static get A_SH_1_2() {
        return CssFunctions.add("a-sh-1-2",
            style => selector("." + style)
                .extend(CssGradients.A_SH_1_2_mixin)
        );
    }

    public static readonly A_SH_1_3_mixin = declaration()
        .props({
            background: "linear-gradient(5deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 60%)"
        });

    public static get A_SH_1_3() {
        return CssFunctions.add("a-sh-1-3",
            style => selector("." + style)
                .extend(CssGradients.A_SH_1_3_mixin)
        );
    }

    public static readonly A_SH_2_mixin = declaration()
        .props({
            background: "linear-gradient(15deg, rgba(0, 0, 0, 0.65) , rgba(0, 0, 0, 0) 80%)"
        });

    public static get A_SH_2() {
        return CssFunctions.add("a-sh-2",
            style => selector("." + style)
                .extend(CssGradients.A_SH_2_mixin)
        );
    }

    // , linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 11%, rgba(0, 0, 0, 0.80) 34%, rgba(0, 0, 0, 0.80) 63%, rgba(0, 0, 0, 0.40) 88%, rgba(0, 0, 0, 0.00) 100%)
    public static readonly A_SH_3_mixin = declaration()
        .props({
            background: "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 1%, rgba(0, 0, 0, 0.50) 20%, rgba(0, 0, 0, 0.87) 100%)"
        });

    public static get A_SH_3() {
        return CssFunctions.add("a-sh-3",
            style => selector("." + style)
                .extend(CssGradients.A_SH_3_mixin)
        );
    }

    public static readonly A_SH_4_mixin = declaration()
        .props({
            background: "linear-gradient(5deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 50%)"
        });

    public static get A_SH_4() {
        return CssFunctions.add("a-sh-4",
            style => selector("." + style)
                .extend(CssGradients.A_SH_4_mixin)
        );
    }

    public static readonly A_SH_7_mixin = declaration()
        .props({
            background: "linear-gradient(90deg, rgba(0, 0, 0, 0.87) 6%, rgba(0, 0, 0, 0) 100%), linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)"
        });

    public static get A_SH_7() {
        return CssFunctions.add("a-sh-7",
            style => selector("." + style)
                .extend(CssGradients.A_SH_7_mixin)
        );
    }

    public static readonly CatalogMenubarGradient_mixin = declaration()
        .props({
            background: "linear-gradient(180deg, rgba(0,0,0,0.77), rgba(0,0,0,0))"
        });

    public static get CatalogMenubarGradient() {
        return CssFunctions.add("a-sh-4-TD",
            style => selector("." + style)
                .extend(CssGradients.CatalogMenubarGradient_mixin)
        );
    }

    public static readonly A_SH_4_1_mixin = declaration()
        .props({
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 50%)"
        });

    public static get A_SH_4_1() {
        return CssFunctions.add("a-sh-4-1",
            style => selector("." + style)
                .extend(CssGradients.A_SH_4_1_mixin)
        );
    }

    public static readonly A_SH_4_2_mixin = declaration()
        .props({
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 50%)"
        });

    public static get A_SH_4_2() {
        return CssFunctions.add("a-sh-4-2",
            style => selector("." + style)
                .extend(CssGradients.A_SH_4_2_mixin)
        );
    }

    public static readonly A_SH_4_3_mixin = declaration()
        .props({
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 60%)"
        });

    public static get A_SH_4_3() {
        return CssFunctions.add("a-sh-4-3",
            style => selector("." + style)
                .extend(CssGradients.A_SH_4_3_mixin)
        );
    }

    public static readonly A_SH_4_4_mixin = declaration()
        .props({
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.75) , rgba(0, 0, 0, 0) 60%)"
        });

    public static get A_SH_4_4() {
        return CssFunctions.add("a-sh-4-4",
            style => selector("." + style)
                .extend(CssGradients.A_SH_4_4_mixin)
        );
    }
}
