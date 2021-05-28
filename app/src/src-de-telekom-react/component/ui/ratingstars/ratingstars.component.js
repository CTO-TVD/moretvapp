var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "react", "../../../base/public", "src/src-de-telekom-style/public"], function (require, exports, React, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TvRatingstarsComponent = void 0;
    var TvRatingstarsComponent = (function (_super) {
        __extends(TvRatingstarsComponent, _super);
        function TvRatingstarsComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TvRatingstarsComponent.prototype.render = function () {
            var containerSize = "dttv-ratingstars-20x20";
            var nostar = public_2.Css.sprites.A_IC_048_2_20x20;
            var halfstar = public_2.Css.sprites.A_IC_048_3_20x20;
            var fullstar = public_2.Css.sprites.A_IC_048_1_20x20;
            switch (this.props.size) {
                case "24x24":
                    containerSize = "dttv-ratingstars-24x24";
                    nostar = public_2.Css.sprites.A_IC_048_2_24x24;
                    halfstar = public_2.Css.sprites.A_IC_048_3_24x24;
                    fullstar = public_2.Css.sprites.A_IC_048_1_24x24;
                    break;
                case "24x24_blurred":
                    containerSize = "dttv-ratingstars-24x24";
                    nostar = public_2.Css.sprites.A_IC_047_2_24x24;
                    halfstar = public_2.Css.sprites.A_IC_047_3_24x24;
                    fullstar = public_2.Css.sprites.A_IC_047_1_24x24;
                    break;
            }
            var starclass = [];
            if (this.props.steps < 1) {
                starclass[0] = nostar;
            }
            if (this.props.steps >= 1 && this.props.steps < 2) {
                starclass[0] = halfstar;
            }
            if (this.props.steps >= 2) {
                starclass[0] = fullstar;
            }
            if (this.props.steps < 3) {
                starclass[1] = nostar;
            }
            if (this.props.steps >= 3 && this.props.steps < 4) {
                starclass[1] = halfstar;
            }
            if (this.props.steps >= 4) {
                starclass[1] = fullstar;
            }
            if (this.props.steps < 5) {
                starclass[2] = nostar;
            }
            if (this.props.steps >= 5 && this.props.steps < 6) {
                starclass[2] = halfstar;
            }
            if (this.props.steps >= 6) {
                starclass[2] = fullstar;
            }
            if (this.props.steps < 7) {
                starclass[3] = nostar;
            }
            if (this.props.steps >= 7 && this.props.steps < 8) {
                starclass[3] = halfstar;
            }
            if (this.props.steps >= 8) {
                starclass[3] = fullstar;
            }
            if (this.props.steps < 9) {
                starclass[4] = nostar;
            }
            if (this.props.steps >= 9 && this.props.steps < 10) {
                starclass[4] = halfstar;
            }
            if (this.props.steps >= 10) {
                starclass[4] = fullstar;
            }
            return React.createElement("div", { className: [this.ID, this.props.className].join(" ") }, this.props.steps > 0 && React.createElement("div", { id: "rating-container", className: "dttv-ratingstars " + containerSize },
                React.createElement("span", { id: "star1", className: "dttv-icon dttv-icon-star " + starclass[0] }),
                React.createElement("span", { id: "star2", className: "dttv-icon dttv-icon-star " + starclass[1] }),
                React.createElement("span", { id: "star3", className: "dttv-icon dttv-icon-star " + starclass[2] }),
                React.createElement("span", { id: "star4", className: "dttv-icon dttv-icon-star " + starclass[3] }),
                React.createElement("span", { id: "star5", className: "dttv-icon dttv-icon-star " + starclass[4] })));
        };
        TvRatingstarsComponent = __decorate([
            public_1.reactComponent({
                ID: "tv-ratingstars-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        backgroundColor: "transparent",
                        position: "relative",
                        fontSize: 0,
                        lineHeight: 0,
                        display: "inline-block"
                    }),
                    public_2.selector("& .dttv-icon-star")
                        .props({
                        display: "inline-block"
                    }),
                    public_2.selector("& .dttv-ratingstars-20x20 *:not(:last-child)")
                        .props({
                        marginRight: 4
                    })
                ]
            })
        ], TvRatingstarsComponent);
        return TvRatingstarsComponent;
    }(public_1.ReactBaseComponent));
    exports.TvRatingstarsComponent = TvRatingstarsComponent;
});
//# sourceMappingURL=ratingstars.component.js.map