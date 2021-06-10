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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "../../translation/public", "src/src-de-telekom/public", "../public"], function (require, exports, React, public_1, public_2, public_3, public_4, public_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvDetailOfferComponent = void 0;
    var MtvDetailOfferComponent = (function (_super) {
        __extends(MtvDetailOfferComponent, _super);
        function MtvDetailOfferComponent(props, context) {
            return _super.call(this, props, context) || this;
        }
        MtvDetailOfferComponent_1 = MtvDetailOfferComponent;
        MtvDetailOfferComponent.prototype.gotoPurchase = function () {
            if (this.props.gotoPurchase)
                this.props.gotoPurchase();
        };
        MtvDetailOfferComponent.prototype.showInfo = function () {
            if (this.props.showinfo) {
                this.props.showinfo();
            }
        };
        MtvDetailOfferComponent.prototype.render = function () {
            var _this = this;
            var price = this.props.data.PriceInfo;
            return React.createElement("div", { id: "mtv-detail-offer", className: [this.ID,].join(" ") },
                this.props.data && React.createElement("div", { className: "price" },
                    React.createElement("span", { id: "period", className: public_2.Css.fonts2.a_fo_b2_2 }, price === null || price === void 0 ? void 0 :
                        price.Period,
                        " "),
                    React.createElement("span", { id: "amount", className: public_2.Css.fonts2.a_fo_h3_1 }, price === null || price === void 0 ? void 0 : price.Price),
                    this.props.data.TermsOfUse && React.createElement("div", { id: "info", className: "a_fo_l1_2" }, public_1.Filter.message(this, public_3.messagesMtv.PACKETVIEW_INFOLINK))),
                React.createElement("p", { className: public_2.Css.fonts2.a_fo_b2_2 + " wlTextOthersColor" }, price === null || price === void 0 ? void 0 : price.PriceInfoShort),
                React.createElement("p", { className: public_2.Css.fonts2.a_fo_b2_2 + " wlTextOthersColor" }, price === null || price === void 0 ? void 0 : price.PriceInfoLong),
                React.createElement("p", { className: public_2.Css.fonts2.a_fo_b2_2 + " wlTextOthersColor descr" },
                    this.props.data.ContractDuration,
                    " "),
                React.createElement(public_5.ButtonMtv.Standard, { id: "buy", text: public_1.Filter.message(this, public_3.messagesMtv.PACKETVIEW_BTN_ORDER), type: "primary", icon: public_2.Css.sprites.A_IC_036_30x30, autofocus: true, onClick: function (e) {
                        _this.gotoPurchase();
                    } }),
                this.props.selectedToUType && React.createElement(public_5.ButtonMtv.Standard, { id: "info", text: public_1.Filter.message(this, public_3.messagesMtv.PACKETVIEW_BTN_ORDER_INFO), type: "primary", autofocus: true, className: "info_button", onClick: function (e) {
                        _this.showInfo();
                    } }));
        };
        var MtvDetailOfferComponent_1;
        MtvDetailOfferComponent.COMPONENT_WIDTH = 415;
        MtvDetailOfferComponent.a_fo_l1_2_mixin = public_2.declaration()
            .extend(public_2.Css.fonts2.font_l1_labels_hints_deprecated_)
            .props({
            color: public_2.Css.colors.A_CO_9
        });
        MtvDetailOfferComponent = MtvDetailOfferComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-offer-component",
                styles: [
                    public_2.selector("&")
                        .sub(public_2.selector("p")
                        .props({
                        marginBottom: 12
                    }))
                        .sub(public_2.selector(".price")
                        .props({
                        marginBottom: 13
                    }))
                        .sub(public_2.selector(".descr")
                        .props({
                        marginBottom: 25
                    }))
                        .sub(public_2.selector(".info_button")
                        .props({
                        marginTop: 24,
                        marginBottom: 24
                    }))
                        .sub(public_2.selector(".a_fo_l1_2")
                        .extend(MtvDetailOfferComponent_1.a_fo_l1_2_mixin))
                ]
            }),
            public_4.logTag()
        ], MtvDetailOfferComponent);
        return MtvDetailOfferComponent;
    }(public_1.ReactBaseComponent));
    exports.MtvDetailOfferComponent = MtvDetailOfferComponent;
});
//# sourceMappingURL=offer.component.js.map