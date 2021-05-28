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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "src/src-de-telekom-style/public", "../../translation/public", "./header.component", "../util/util", "../../component/public"], function (require, exports, React, public_1, public_2, public_3, public_4, header_component_1, util, public_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvSkyPurchaseStep6Page = void 0;
    var MtvSkyPurchaseStep6Page = (function (_super) {
        __extends(MtvSkyPurchaseStep6Page, _super);
        function MtvSkyPurchaseStep6Page() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MtvSkyPurchaseStep6Page.prototype.render = function () {
            var _this = this;
            var _a, _b;
            if (!this.props.package || !this.props.customerdata || !this.props.catalog) {
                return null;
            }
            var email = this.props.customerdata.Email;
            return React.createElement(public_1.NavigationContainer, { id: "mtvPurchase#SKY_6_end", className: this.ID },
                React.createElement("div", { id: "title", className: "headline" },
                    React.createElement("img", { id: "img_bookingstep3_ok", className: [public_3.Css.sprites.A_IC_009_1_36x36, "img_Booking_OK"].join(" "), src: public_3.Css.images.inlineTransparentPixel }),
                    React.createElement("span", { className: public_3.Css.fonts2.a_fo_h6_2 }, public_1.Filter.message(this, public_4.messagesMtv.sky_STEP6_HEADLINE_1)),
                    React.createElement("span", { style: { color: public_3.Css.colors.A_CO_6 }, className: public_3.Css.fonts2.a_fo_h2_3 }, " (6/6)")),
                React.createElement(header_component_1.MtvSkyPurchaseStepHeader, { package: this.props.package, catalog: this.props.catalog }),
                React.createElement("div", { id: "BookingStep6_ConfirmHead", className: [public_3.Css.fonts2.a_fo_h2_3, "Booking_InfoHeader_1"].join(" ") }, public_1.Filter.message(this, public_4.messagesMtv.sky_STEP6_CONFIRMHEAD)),
                React.createElement("div", { id: "BookingStep6_ConfirmText", style: { color: public_3.Css.colors.A_CO_6 }, className: [public_3.Css.fonts2.a_fo_b1_1, "Booking_InfoText_1"].join(" ") }, public_1.Filter.message(this, public_4.messagesMtv.sky_STEP6_CONFIRMTXT_1)),
                React.createElement("div", { id: "BookingStep6_Email", className: [public_3.Css.fonts2.a_fo_b1_1, "Booking_Email"].join(" ") },
                    (email === null || email === undefined || email === "") &&
                        React.createElement("div", { style: { color: public_3.Css.colors.A_CO_6 }, className: public_3.Css.fonts2.a_fo_b1_1 }, public_1.Filter.message(this, public_4.messagesMtv.sky_STEP2_PLHO_EMAIL)),
                    email),
                React.createElement("div", { id: "BookingStep6_ConfirmText2", style: { color: public_3.Css.colors.A_CO_6 }, className: [public_3.Css.fonts2.a_fo_b1_1, "Booking_InfoText_2"].join(" ") }, public_1.Filter.message(this, public_4.messagesMtv.sky_STEP6_CONFIRMTXT_2)),
                React.createElement("div", { className: "lineseparator" }),
                React.createElement("div", { id: "BookingStep1_ButtonHelper", className: ["Booking_ButtonHelper", public_1.Button.Bars.horizontal].join(" ") },
                    React.createElement(public_5.ButtonMtv.Standard, { id: "next", autofocus: true, text: public_1.Filter.message(this, public_4.messagesMtv.sky_STEP6_BTN_NEXT), type: "primary", onClick: function () { return _this.startIntent(undefined, { type: "exit" }); } })),
                React.createElement("div", { id: "SmallPrint", style: { color: public_3.Css.colors.A_CO_6 }, className: [public_3.Css.fonts2.a_fo_b2_2, "Booking_SmallPrint", "singleline-ellipsis"].join(" ") }, (_b = (_a = this.props.package) === null || _a === void 0 ? void 0 : _a.CustomValues) === null || _b === void 0 ? void 0 : _b.SmallPrint));
        };
        MtvSkyPurchaseStep6Page = __decorate([
            public_1.reactComponent({
                ID: "mtv-skypurchase-step6-component",
                styles: [
                    public_3.selector("&")
                        .props({
                        overflow: "hidden",
                        position: "absolute",
                        top: public_3.Css.dimensions.safeareaTop + 53,
                        left: public_3.Css.dimensions.safeareaLeft + 142,
                        width: 1416,
                        height: 933
                    })
                        .sub(public_3.selector(".Booking_InfoHeader_1")
                        .props({
                        marginTop: 38
                    }))
                        .sub(public_3.selector(".Booking_Email")
                        .props({
                        marginTop: 24
                    }))
                        .sub(public_3.selector(".Booking_InfoText_1")
                        .props({
                        marginTop: 12
                    }))
                        .sub(public_3.selector(".Booking_InfoHeader_2")
                        .props({
                        marginTop: 24
                    }))
                        .sub(public_3.selector(".Booking_InfoText_2")
                        .props({
                        marginTop: 8,
                        marginBottom: 37
                    }))
                        .sub(public_3.selector(".img_Booking_OK")
                        .props({
                        height: 36,
                        width: 36,
                        marginRight: 12
                    }))
                        .sub(public_3.selector(".Booking_ButtonHelper")
                        .props({
                        marginTop: 31,
                        marginBottom: 48,
                        float: "right"
                    }))
                        .sub(public_3.selector(".Booking_SmallPrint")
                        .props({
                        marginTop: 133,
                        float: "left",
                        width: "inherit"
                    })),
                    public_3.selector("& .lineseparator")
                        .extend(util.Styles.Separator)
                ]
            }),
            public_2.logTag()
        ], MtvSkyPurchaseStep6Page);
        return MtvSkyPurchaseStep6Page;
    }(public_1.ReactBaseComponent));
    exports.MtvSkyPurchaseStep6Page = MtvSkyPurchaseStep6Page;
});
//# sourceMappingURL=step6.component.js.map