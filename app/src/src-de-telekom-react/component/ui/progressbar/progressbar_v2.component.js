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
    exports.TVProgressbarV2Component = void 0;
    var TVProgressbarV2Component = (function (_super) {
        __extends(TVProgressbarV2Component, _super);
        function TVProgressbarV2Component() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVProgressbarV2Component_1 = TVProgressbarV2Component;
        TVProgressbarV2Component.prototype.render = function () {
            var percent = this.props.percentage;
            if (public_2.Guard.isNumber(percent)) {
                if (percent > 1) {
                    percent = 1;
                }
                var indicatorWidth = percent * 100;
                return React.createElement("div", { className: [this.ID, this.props.className, this.props.type, percent === undefined ? "hidden" : undefined].join(" ") },
                    React.createElement("div", { className: "progress-indicator " + (this.props.foregroundColor ? this.props.foregroundColor : "magenta"), style: { width: indicatorWidth + "%" } }));
            }
            else if (public_2.Guard.isDefined(percent)) {
                throw new public_2.IllegalArgumentError("TVProgressbarV2Component: The argument must be of type number.", "percentage", percent);
            }
            return null;
        };
        var TVProgressbarV2Component_1;
        TVProgressbarV2Component.HEIGHT = 6;
        TVProgressbarV2Component = TVProgressbarV2Component_1 = __decorate([
            public_1.reactComponent({
                ID: "m-24-progressbar-component",
                styles: [
                    public_3.selector("&")
                        .props({
                        display: "block",
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: TVProgressbarV2Component_1.HEIGHT,
                        backgroundColor: public_3.Css.colors.A_CO_4_55
                    })
                        .sub(public_3.selector("&.white")
                        .props({
                        backgroundColor: public_3.Css.colors.A_CO_1
                    }))
                        .sub(public_3.selector("&.hidden")
                        .props({
                        visibility: "hidden"
                    }))
                        .sub(public_3.selector(".progress-indicator")
                        .props({
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        display: "block"
                    })
                        .sub(public_3.selector("&.magenta")
                        .props({
                        background: public_3.Css.colors.A_CO_2
                    }))
                        .sub(public_3.selector("&.blue")
                        .props({
                        background: public_3.Css.colors.A_CO_9
                    }))
                        .sub(public_3.selector("&.green")
                        .props({
                        background: public_3.Css.colors.A_CO_11
                    })))
                ]
            })
        ], TVProgressbarV2Component);
        return TVProgressbarV2Component;
    }(public_1.ReactBaseComponent));
    exports.TVProgressbarV2Component = TVProgressbarV2Component;
});
//# sourceMappingURL=progressbar_v2.component.js.map