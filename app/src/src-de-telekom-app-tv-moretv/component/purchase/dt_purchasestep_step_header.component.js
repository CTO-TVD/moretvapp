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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvDtPurchaseStepHeaderComponent = void 0;
    var MtvDtPurchaseStepHeaderComponent = (function (_super) {
        __extends(MtvDtPurchaseStepHeaderComponent, _super);
        function MtvDtPurchaseStepHeaderComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MtvDtPurchaseStepHeaderComponent.prototype.render = function () {
            var _a, _b, _c;
            var title = (_a = this.props.package) === null || _a === void 0 ? void 0 : _a.Title;
            var price = this.props.package && this.props.lexusprice ? this.props.lexusprice : (_b = this.props.package.PriceInfo) === null || _b === void 0 ? void 0 : _b.Price;
            var logo = (_c = this.props.package) === null || _c === void 0 ? void 0 : _c.Logo;
            var priceInfo = this.props.package.PriceInfo;
            return React.createElement("div", { className: this.ID },
                React.createElement("hr", null),
                React.createElement("div", { id: "ProductName", className: "BookingProductName" },
                    logo && React.createElement("div", { className: "logo dontshrink" },
                        React.createElement("img", { id: "Logo", className: "BookingStep_Logo", src: public_3.ImageScale.rescale(logo, { ar: "keep", x: 120, y: 48 }), alt: "Bild" })),
                    React.createElement("span", { id: "Title", className: public_2.Css.fonts2.a_fo_h6_2 + " singleline-ellipsis shrink" }, title),
                    (priceInfo === null || priceInfo === void 0 ? void 0 : priceInfo.Period) && React.createElement("span", { id: "ProductPricePeriod", className: public_2.Css.fonts2.a_fo_b2_2 + " dontshrink" }, priceInfo === null || priceInfo === void 0 ? void 0 : priceInfo.Period),
                    React.createElement("span", { id: "ProductPriceAmount", className: public_2.Css.fonts2.a_fo_h6_2 + " dontshrink" }, price)),
                React.createElement("div", { id: "BookingStep1_ProductTeaser", style: { color: public_2.Css.colors.A_CO_6 }, className: public_2.Css.fonts2.a_fo_b2_2 + " Booking_ProductTeaser singleline-ellipsis" }, this.props.package.ShortDescription),
                React.createElement("hr", null));
        };
        MtvDtPurchaseStepHeaderComponent = __decorate([
            public_1.reactComponent({
                ID: "purchase-stepheader-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        display: "block",
                        width: 1416,
                        overflow: "hidden"
                    }),
                    public_2.selector("& hr")
                        .props({
                        margin: 0
                    }),
                    public_2.selector("& .BookingProductName")
                        .props({
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        marginTop: 36,
                        float: "left",
                        width: "inherit"
                    }),
                    public_2.selector("& .Booking_ProductTeaser")
                        .props({
                        display: "flex",
                        justifyContent: "space-between",
                        float: "left",
                        width: "inherit",
                        marginTop: 10,
                        marginBottom: 45
                    })
                        .sub(public_2.selector("&.indent")
                        .props({
                        paddingLeft: 120 + 24
                    })),
                    public_2.selector("& .Booking_ProductPriceInfo")
                        .props({
                        float: "right",
                        paddingLeft: 12
                    }),
                    public_2.selector("& .logo")
                        .props({
                        float: "left",
                        alignSelf: "center",
                        marginRight: 24,
                        width: 120
                    }),
                    public_2.selector("& .BookingStep_Logo")
                        .props({
                        maxWidth: 120,
                        maxHeight: 48
                    }),
                    public_2.selector("& #ProductPricePeriod")
                        .props({
                        marginRight: 12,
                        float: "right"
                    }),
                    public_2.selector("& #ProductPriceAmount")
                        .props({
                        float: "right"
                    }),
                    public_2.selector("& .shrink")
                        .props({
                        flexGrow: 1,
                        flexShrink: 1
                    }),
                    public_2.selector("& .dontshrink")
                        .props({
                        flexShrink: 0,
                        flexGrow: 0
                    })
                ]
            })
        ], MtvDtPurchaseStepHeaderComponent);
        return MtvDtPurchaseStepHeaderComponent;
    }(public_1.ReactBaseComponent));
    exports.MtvDtPurchaseStepHeaderComponent = MtvDtPurchaseStepHeaderComponent;
});
//# sourceMappingURL=dt_purchasestep_step_header.component.js.map