var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
define(["require", "exports", "react", "../../../base/public", "src/src-de-telekom/public", "src/src-de-telekom-style/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVProgressbarComponent = void 0;
    var TVProgressbarComponent = (function (_super) {
        __extends(TVProgressbarComponent, _super);
        function TVProgressbarComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.validateValues(_this.props);
            return _this;
        }
        TVProgressbarComponent.prototype.componentDidUpdate = function () {
            this.validateValues(this.props);
        };
        TVProgressbarComponent.prototype.validateValues = function (props) {
            if ((props.percentage) && (typeof props.percentage != "number")) {
                throw new public_2.IllegalArgumentError("TVProgressbarComponent: The argument must be of type number.", "percentage", props.percentage);
            }
            if ((props.percentagestart) && (typeof props.percentagestart != "number")) {
                throw new public_2.IllegalArgumentError("TVProgressbarComponent: The argument must be of type number.", "percentagestart", props.percentage);
            }
        };
        TVProgressbarComponent.prototype.render = function () {
            var percent = this.props.percentage || 0;
            var percentStart = this.props.percentagestart || 0;
            var percentRegion = this.props.percentageRegion || 0;
            if (percent > 1) {
                percent = 1;
            }
            if (percentRegion > 1) {
                percentRegion = 1;
            }
            if (percentStart > 1) {
                percentStart = 1;
            }
            if (percentStart > percent) {
                percentStart = percent;
            }
            var backgroundColor = public_3.Css.colors.A_CO_1;
            var fillColor = public_3.Css.colors.A_CO_2;
            var fillcolorRegion = public_3.Css.colors.A_CO_9;
            var gradient = backgroundColor + " 0%, " + backgroundColor + " " + percentStart * 100 + "%, " + fillColor + " " + percentStart * 100 + "%, " + fillColor + " " + (percent - percentRegion) * 100 + "%, " + fillcolorRegion + " " + (percent - percentRegion) * 100 + "%, " + fillcolorRegion + " " + percent * 100 + "%, " + backgroundColor + " " + percent * 100 + "%, " + backgroundColor + " 100%";
            var styles = { background: "-webkit-linear-gradient(left, " + gradient + ")", visibility: "visible" };
            return React.createElement("div", { className: this.ID + (this.props.inactive ? " inactive" : "") + (this.props.className ? " " + this.props.className : "") },
                React.createElement("div", { className: "progress-indicator", style: styles }));
        };
        TVProgressbarComponent = __decorate([
            public_1.reactComponent({
                ID: "tv-progressbar-component",
                styles: [
                    public_3.selector("&")
                        .props({
                        display: "block",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 6
                    })
                        .sub(public_3.selector("&.background-black")
                        .props({
                        backgroundColor: public_3.Css.colors.global_background_high_transparent
                    }))
                        .sub(public_3.selector(".progress-indicator")
                        .props({
                        width: "100%",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        display: "block"
                    }))
                        .sub(public_3.selector("&.inactive")
                        .props({
                        backgroundColor: public_3.Css.colors.A_CO_7
                    })
                        .sub(public_3.selector(".progress-indicator")
                        .props({
                        display: "none"
                    })))
                ]
            })
        ], TVProgressbarComponent);
        return TVProgressbarComponent;
    }(public_1.ReactBaseComponent));
    exports.TVProgressbarComponent = TVProgressbarComponent;
});
//# sourceMappingURL=progressbar.component.js.map