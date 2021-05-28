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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "src/src-de-telekom-style/public", "../../translation/public", "../util/util", "../../component/public"], function (require, exports, React, public_1, public_2, public_3, public_4, util, public_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvSkyPurchaseAlreadyBooked = void 0;
    var MtvSkyPurchaseAlreadyBooked = (function (_super) {
        __extends(MtvSkyPurchaseAlreadyBooked, _super);
        function MtvSkyPurchaseAlreadyBooked() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MtvSkyPurchaseAlreadyBooked.prototype.render = function () {
            var _this = this;
            var logo = this.props.logo && public_2.ImageScale.scale(this.props.logo, { ar: "keep", x: 120, y: 48 });
            return React.createElement(public_1.NavigationContainer, { id: "mtvPurchase#SKY_alreadybooked", className: this.ID },
                React.createElement("div", { id: "title", className: "headline" },
                    React.createElement("img", { id: "img_BookingAboOverlay_logo", className: "img_Booking_logo", src: logo }),
                    React.createElement("span", { className: public_3.Css.fonts2.a_fo_h6_2 }, public_1.Filter.message(this, public_4.messagesMtv.sky_ABO_INFO_HEAD))),
                React.createElement("div", { className: "lineseparator" }),
                React.createElement("div", { id: "BookingAboOverlay_InfoText", className: [public_3.Css.fonts2.a_fo_b1_1, "Booking_InfoText"].join(" ") }, public_1.Filter.message(this, public_4.messagesMtv.sky_ABO_INFO_TEXT)),
                React.createElement("div", { id: "BookingAboOverlay_Hotline", className: [public_3.Css.fonts2.a_fo_h2_3, "Booking_Hotline"].join(" ") },
                    React.createElement("img", { id: "img_BookingAboOverlay_HotlineIcon", className: [public_3.Css.sprites.A_IC_076_36x36, "img_Booking_HotlineIcon"].join(" "), src: public_3.Css.images.inlineTransparentPixel }),
                    React.createElement("span", { id: "BookingAboOverlay_Hotline", style: { color: public_3.Css.colors.A_CO_9 }, className: public_3.Css.fonts2.a_fo_b1_1 }, public_1.Filter.message(this, public_4.messagesMtv.sky_ABO_INFO_PHONE))),
                React.createElement("div", { id: "BookingAboOverlay_SmallPrint", style: { color: public_3.Css.colors.A_CO_6 }, className: [public_3.Css.fonts2.a_fo_b1_1, "Booking_SmallPrint", "twolines-ellipsis"].join(" ") }, public_1.Filter.message(this, public_4.messagesMtv.sky_ABO_INFO_SMALLPRINT)),
                React.createElement("div", { className: "lineseparator" }),
                React.createElement("div", { className: ["Booking_ButtonHelper", public_1.Button.Bars.horizontal].join(" ") },
                    React.createElement(public_5.ButtonMtv.Standard, { id: "close", autofocus: true, text: public_1.Filter.message(this, public_4.messagesMtv.sky_COMMON_BTN_CLOSE), type: "secondary", onClick: function () { return _this.startIntent(undefined, { type: "exit" }); } })));
        };
        MtvSkyPurchaseAlreadyBooked = __decorate([
            public_1.reactComponent({
                ID: "mtv-skypurchase-alreadybooked-component",
                styles: [
                    public_3.selector("&")
                        .props({
                        overflow: "hidden",
                        position: "absolute",
                        top: public_3.Css.dimensions.safeareaTop + 131,
                        left: public_3.Css.dimensions.safeareaLeft + 265,
                        width: 1175,
                        height: 670
                    }),
                    public_3.selector("& .headline")
                        .props({
                        textAlign: "center",
                        marginBottom: 15
                    }),
                    public_3.selector("& hr")
                        .props({
                        marginTop: -1
                    }),
                    public_3.selector("& .img_Booking_logo")
                        .props({
                        verticalAlign: "text-bottom",
                        height: 48,
                        marginRight: 57
                    }),
                    public_3.selector("& .Booking_InfoText")
                        .props({
                        marginTop: 34
                    }),
                    public_3.selector("& .Booking_Hotline")
                        .props({
                        marginTop: 51
                    }),
                    public_3.selector("& .img_Booking_HotlineIcon")
                        .props({
                        height: 36,
                        marginRight: 12
                    }),
                    public_3.selector("& .Booking_SmallPrint")
                        .props({
                        marginTop: 8,
                        marginBottom: 38
                    }),
                    public_3.selector("& .Booking_ButtonHelper")
                        .props({
                        marginTop: 32,
                        marginBottom: 48,
                        float: "right"
                    }),
                    public_3.selector("& .lineseparator")
                        .extend(util.Styles.Separator)
                ]
            }),
            public_2.logTag()
        ], MtvSkyPurchaseAlreadyBooked);
        return MtvSkyPurchaseAlreadyBooked;
    }(public_1.ReactBaseComponent));
    exports.MtvSkyPurchaseAlreadyBooked = MtvSkyPurchaseAlreadyBooked;
});
//# sourceMappingURL=alreadybooked.component.js.map