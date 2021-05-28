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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../base/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PartnerLogo = void 0;
    var PartnerLogo = (function (_super) {
        __extends(PartnerLogo, _super);
        function PartnerLogo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PartnerLogo.prototype.shouldComponentUpdate = function (nextProps) {
            return nextProps.url != this.props.url
                || nextProps.hide != this.props.hide;
        };
        PartnerLogo.prototype.render = function () {
            var logo = this.props.url ? public_2.ImageScale.rescale(this.props.url, { y: 90, ar: "keep" }) : undefined;
            var visibility = this.props.hide ? "hidden" : undefined;
            return React.createElement("div", { className: [this.ID, visibility].join(" ") }, logo &&
                React.createElement("img", { id: "logo", src: logo }));
        };
        PartnerLogo = __decorate([
            public_3.reactComponent({
                ID: "partnerlogo-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "absolute",
                        top: 74,
                        right: 0,
                        willChange: "opacity",
                        transition: "opacity 300ms, transform  300ms",
                        opacity: 1
                    })
                        .sub(public_1.selector("&.hidden")
                        .props({
                        transition: "opacity 300ms, transform  300ms",
                        opacity: 0
                    }))
                ]
            })
        ], PartnerLogo);
        return PartnerLogo;
    }(public_3.ReactBaseComponent));
    exports.PartnerLogo = PartnerLogo;
});
//# sourceMappingURL=partnerlogo.component.js.map