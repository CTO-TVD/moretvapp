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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../util/util"], function (require, exports, React, public_1, public_2, public_3, util) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvSkyPurchaseStepHeader = void 0;
    var MtvSkyPurchaseStepHeader = (function (_super) {
        __extends(MtvSkyPurchaseStepHeader, _super);
        function MtvSkyPurchaseStepHeader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MtvSkyPurchaseStepHeader.prototype.render = function () {
            var _a, _b, _c, _d;
            var logo = (_a = this.props.catalog) === null || _a === void 0 ? void 0 : _a.Logo;
            var title = "";
            var price = "";
            var priceInfoShort = "";
            var infoText = "";
            if (this.props.package) {
                infoText = this.props.package.ChannelGroups
                    .map(function (chGr) {
                    return chGr.Title;
                })
                    .join(", ");
                title = this.props.package.Title || "";
                price = ((_b = this.props.package.PriceInfo) === null || _b === void 0 ? void 0 : _b.Price) || "";
                priceInfoShort = ((_c = this.props.package.PriceInfo) === null || _c === void 0 ? void 0 : _c.PriceInfoShort) || "";
            }
            return React.createElement("div", { className: this.ID },
                React.createElement("div", { className: "lineseparator" }),
                React.createElement("div", { id: "ProductName", className: "BookingProductName" },
                    logo &&
                        React.createElement("div", { className: "logo dontshrink" },
                            React.createElement("img", { id: "Logo", className: "BookingStep_Logo", src: public_3.ImageScale.scale(logo, { ar: "keep", x: 120, y: 48 }), alt: "Bild" })),
                    React.createElement("span", { id: "Title", className: [public_2.Css.fonts2.a_fo_h6_2, "singleline-ellipsis", "shrink"].join(" ") }, title),
                    ((_d = this.props.package.PriceInfo) === null || _d === void 0 ? void 0 : _d.Period) !== undefined &&
                        React.createElement("span", { id: "ProductPricePeriod", className: [public_2.Css.fonts2.a_fo_b2_2, "dontshrink"].join(" ") }, this.props.package.PriceInfo.Period),
                    React.createElement("span", { id: "ProductPriceAmount", className: [public_2.Css.fonts2.a_fo_h6_2, "dontshrink"].join(" ") }, price)),
                React.createElement("div", { id: "ProductTeaser", style: { color: public_2.Css.colors.A_CO_6 }, className: [public_2.Css.fonts2.a_fo_b2_2, "Booking_ProductTeaser", logo ? "indent" : undefined].join(" ") },
                    React.createElement("span", { className: "singleline-ellipsis shrink" }, infoText),
                    React.createElement("span", { id: "ProductPriceInfo", className: [public_2.Css.fonts2.a_fo_b2_2, "Booking_ProductPriceInfo", "dontshrink"].join(" ") }, priceInfoShort)),
                React.createElement("div", { className: "lineseparator" }));
        };
        MtvSkyPurchaseStepHeader = __decorate([
            public_1.reactComponent({
                ID: "mtv-skypurchasestep-header-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        display: "block",
                        width: 1416,
                        overflow: "hidden"
                    })
                        .sub(public_2.selector(".BookingProductName")
                        .props({
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        marginTop: 36,
                        float: "left",
                        width: "inherit"
                    }))
                        .sub(public_2.selector(".Booking_ProductTeaser")
                        .props({
                        display: "flex",
                        justifyContent: "space-between",
                        float: "left",
                        width: "inherit",
                        marginTop: 3,
                        marginBottom: 45
                    })
                        .sub(public_2.selector("&.indent")
                        .props({
                        paddingLeft: 120 + 24
                    })))
                        .sub(public_2.selector(".Booking_ProductPriceInfo")
                        .props({
                        float: "right",
                        paddingLeft: 12
                    }))
                        .sub(public_2.selector(".logo")
                        .props({
                        float: "left",
                        alignSelf: "center",
                        marginRight: 24,
                        width: 120
                    }))
                        .sub(public_2.selector(".BookingStep_Logo")
                        .props({
                        maxWidth: 120,
                        maxHeight: 48
                    }))
                        .sub(public_2.selector("#ProductPricePeriod")
                        .props({
                        marginRight: 12,
                        float: "right"
                    }))
                        .sub(public_2.selector("#ProductPriceAmount")
                        .props({
                        float: "right"
                    }))
                        .sub(public_2.selector(".shrink")
                        .props({
                        flexGrow: 1,
                        flexShrink: 1
                    }))
                        .sub(public_2.selector(".dontshrink")
                        .props({
                        flexShrink: 0,
                        flexGrow: 0
                    })),
                    public_2.selector("& .lineseparator")
                        .extend(util.Styles.Separator)
                ]
            })
        ], MtvSkyPurchaseStepHeader);
        return MtvSkyPurchaseStepHeader;
    }(public_1.ReactBaseComponent));
    exports.MtvSkyPurchaseStepHeader = MtvSkyPurchaseStepHeader;
});
//# sourceMappingURL=header.component.js.map