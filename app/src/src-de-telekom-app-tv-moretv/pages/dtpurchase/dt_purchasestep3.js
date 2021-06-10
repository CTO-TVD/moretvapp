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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "../../translation/public", "../../component/purchase/public", "../../component/public"], function (require, exports, React, public_1, public_2, public_3, public_4, public_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvDtPurchaseStep3Component = void 0;
    var MtvDtPurchaseStep3Component = (function (_super) {
        __extends(MtvDtPurchaseStep3Component, _super);
        function MtvDtPurchaseStep3Component() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MtvDtPurchaseStep3Component.prototype.render = function () {
            var _this = this;
            return React.createElement(React.Fragment, null,
                React.createElement(public_1.NavigationContainer, { id: "mtvPurchase#DT#Step3", strictHorizontal: true, autofocus: true, className: this.ID },
                    React.createElement("div", { id: "title", className: "headline" },
                        React.createElement("img", { id: "img_bookingstep3_ok", className: public_2.Css.sprites.A_IC_009_1_36x36 + " img_Booking_OK", src: public_2.Css.images.inlineTransparentPixel }),
                        React.createElement("span", { className: public_2.Css.fonts2.a_fo_h6_2 }, public_1.Filter.message(this, public_3.messagesMtv.STEP3_HEADLINE_1)),
                        React.createElement("span", { style: { color: public_2.Css.colors.A_CO_6 }, className: public_2.Css.fonts2.a_fo_h2_3 },
                            " (",
                            this.props.context.step,
                            "/",
                            this.props.context.total,
                            ")")),
                    React.createElement(public_4.MtvPurchaseComponent.DtPurchaseStepHeaderComponent, { package: this.props.package, lexusprice: this.props.lexusprice }),
                    React.createElement("div", { id: "BookingStep3_ConfirmHead", className: public_2.Css.fonts2.a_fo_h2_3 + " Booking_InfoHeader_1" }, public_1.Filter.message(this, public_3.messagesMtv.STEP3_CONFIRMHEAD)),
                    React.createElement("div", { id: "BookingStep3_ConfirmText", style: { color: public_2.Css.colors.A_CO_6 }, className: public_2.Css.fonts2.a_fo_b2__ + " Booking_InfoText_1" }, public_1.Filter.message(this, public_3.messagesMtv.STEP3_CONFIRMTXT_1)),
                    React.createElement("div", { id: "BookingStep3_Email", className: public_2.Css.fonts2.a_fo_h2_3 + " Booking_InfoHeader_2" }, this.props.emailaddress),
                    React.createElement("div", { id: "BookingStep3_ConfirmText2", style: { color: public_2.Css.colors.A_CO_6 }, className: public_2.Css.fonts2.a_fo_b2__ + " Booking_InfoText_2" }, public_1.Filter.message(this, public_3.messagesMtv.STEP3_CONFIRMTXT_2)),
                    React.createElement("hr", null),
                    React.createElement("div", { className: public_1.Button.Bars.horizontal.right + " Booking_ButtonHelper" },
                        React.createElement(public_5.ButtonMtv.Standard, { id: "finish", text: public_1.Filter.message(this, public_3.messagesMtv.STEP3_BTN_NEXT), type: "primary", autofocus: true, onClick: function (e) {
                                if (_this.props.context.next) {
                                    _this.props.context.next();
                                }
                            } }))));
        };
        MtvDtPurchaseStep3Component = __decorate([
            public_1.reactComponent({
                ID: "purchase-step3-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        overflow: "hidden",
                        position: "absolute",
                        top: public_2.Css.dimensions.safeareaTop + 151,
                        left: public_2.Css.dimensions.safeareaLeft + 142,
                        width: 1416,
                        height: 888
                    })
                        .sub(public_2.selector(" .Booking_InfoHeader_1")
                        .props({
                        marginTop: 31
                    }))
                        .sub(public_2.selector(" .Booking_InfoText_1")
                        .props({
                        marginTop: 14
                    }))
                        .sub(public_2.selector(" .Booking_InfoHeader_2")
                        .props({
                        marginTop: 12
                    }))
                        .sub(public_2.selector(" .Booking_InfoText_2")
                        .props({
                        marginTop: 15,
                        marginBottom: 50
                    }))
                        .sub(public_2.selector(" .img_Booking_OK")
                        .props({
                        height: 36,
                        width: 36,
                        marginRight: 12
                    }))
                        .sub(public_2.selector(".Booking_ButtonHelper")
                        .props({
                        marginTop: 39
                    }))
                ]
            })
        ], MtvDtPurchaseStep3Component);
        return MtvDtPurchaseStep3Component;
    }(public_1.ReactBaseComponent));
    exports.MtvDtPurchaseStep3Component = MtvDtPurchaseStep3Component;
});
//# sourceMappingURL=dt_purchasestep3.js.map