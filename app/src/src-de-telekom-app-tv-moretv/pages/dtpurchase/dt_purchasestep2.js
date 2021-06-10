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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "../../translation/public", "../../component/purchase/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvDtPurchaseStep2Component = void 0;
    var MtvDtPurchaseStep2Component = (function (_super) {
        __extends(MtvDtPurchaseStep2Component, _super);
        function MtvDtPurchaseStep2Component() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MtvDtPurchaseStep2Component.prototype.render = function () {
            return React.createElement(public_1.NavigationContainer, { id: "mtvPurchase#DT#Step2", strictHorizontal: true, autofocus: true, className: this.ID },
                React.createElement("div", { id: "title", className: "headline" },
                    React.createElement("span", { className: public_2.Css.fonts2.a_fo_h6_2 }, public_1.Filter.message(this, public_3.messagesMtv.STEP2_HEADLINE_1)),
                    React.createElement("span", { style: { color: public_2.Css.colors.A_CO_6 }, className: public_2.Css.fonts2.a_fo_h2_3 },
                        " (",
                        this.props.context.step,
                        "/",
                        this.props.context.total,
                        ")")),
                this.props.package && this.props.lexusprice && React.createElement(public_4.MtvPurchaseComponent.DtPurchaseStepHeaderComponent, { package: this.props.package, lexusprice: this.props.lexusprice }),
                React.createElement("div", { id: "BookingStep2_ProductInfoClipper", className: "Booking_ProductInfoClipper" },
                    React.createElement("div", { id: "BookingStep2_ProductFeaturesHead", className: public_2.Css.fonts2.a_fo_h2_3 + " Booking_InfoHeader_1" }, public_1.Filter.message(this, public_3.messagesMtv.STEP2_FEATURESHEAD)),
                    React.createElement("div", { id: "BookingStep2_ProductFeatureInfo", style: { color: public_2.Css.colors.A_CO_6 }, className: public_2.Css.fonts2.a_fo_b2__ + " Booking_InfoText_1", dangerouslySetInnerHTML: this.props.package.Features ? { __html: this.props.package.Features } : undefined }),
                    React.createElement("div", { id: "BookingStep2_ContractDurationHead", className: public_2.Css.fonts2.a_fo_h2_3 + " Booking_InfoHeader_2" }, public_1.Filter.message(this, public_3.messagesMtv.STEP2_DURATIONHEAD)),
                    React.createElement("div", { id: "BookingStep2_RevocationText", style: { color: public_2.Css.colors.A_CO_6 }, className: public_2.Css.fonts2.a_fo_b2__ + " Booking_InfoText_2" }, this.props.package.ContractDuration)),
                React.createElement("hr", null),
                React.createElement(public_4.MtvPurchaseComponent.PurchaseButtonNavbar, { context: this.props.context }));
        };
        MtvDtPurchaseStep2Component = __decorate([
            public_1.reactComponent({
                ID: "purchase-step2-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        overflow: "hidden",
                        position: "absolute",
                        top: public_2.Css.dimensions.safeareaTop + 32,
                        left: public_2.Css.dimensions.safeareaLeft + 144,
                        width: 1416,
                        height: 950
                    })
                        .sub(public_2.selector(" .Booking_InfoHeader_1")
                        .props({
                        marginTop: 40
                    }))
                        .sub(public_2.selector(" .Booking_InfoText_1")
                        .props({
                        marginTop: 16,
                        maxHeight: 300
                    })
                        .sub(public_2.selector("ul")
                        .props({
                        marginTop: 1
                    })))
                        .sub(public_2.selector(" .Booking_InfoHeader_2")
                        .props({
                        marginTop: 23
                    }))
                        .sub(public_2.selector(" .Booking_InfoText_2")
                        .props({
                        marginTop: 14,
                        marginBottom: 39
                    }))
                ]
            })
        ], MtvDtPurchaseStep2Component);
        return MtvDtPurchaseStep2Component;
    }(public_1.ReactBaseComponent));
    exports.MtvDtPurchaseStep2Component = MtvDtPurchaseStep2Component;
});
//# sourceMappingURL=dt_purchasestep2.js.map