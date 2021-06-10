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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom-react/public", "../../translation/public", "../public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvPurchaseButtonNavbarComponent = void 0;
    var MtvPurchaseButtonNavbarComponent = (function (_super) {
        __extends(MtvPurchaseButtonNavbarComponent, _super);
        function MtvPurchaseButtonNavbarComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.nextButton = { id: "goNext", disabled: false };
            return _this;
        }
        MtvPurchaseButtonNavbarComponent.prototype.render = function () {
            var _this = this;
            this.nextcaption = this.props.context.step + 1 == this.props.context.total ?
                public_2.Filter.message(this, public_3.messagesMtv.PURCHASE_BTN_BEFORELAST) :
                public_2.Filter.message(this, public_3.messagesMtv.PURCHASE_BTN_NEXT_X, { step: this.props.context.step + 1 });
            this.backcaption = public_2.Filter.message(this, public_3.messagesMtv.PURCHASE_BTN_BACK_X, { step: this.props.context.step - 1 });
            var optionsAccepted = this.props.context.optionsAccepted;
            if (optionsAccepted.length > 0) {
                this.nextButton.disabled = !optionsAccepted.every(function (it) { return it == true; });
            }
            return React.createElement("div", { className: this.ID }, this.props.context && React.createElement(public_2.NavigationContainer, { id: "buttons_container", autofocus: this.props.autofocus !== undefined ? this.props.autofocus : true, strictHorizontal: true, className: " " + public_2.Button.Bars.horizontal + " " + public_2.Button.Bars.horizontal.right + " Booking_ButtonHelper", overrides: { down: "buttons_container" } },
                React.createElement(public_4.ButtonMtv.Standard, { id: "cancel", text: public_2.Filter.message(this, public_3.messagesMtv.COMMON_BTN_CANCEL), type: "primary", icon: public_1.Css.sprites.A_IC_029_2_36x36, onClick: function (e) {
                        if (_this.props.context.cancel)
                            _this.props.context.cancel();
                    } }),
                this.props.context.back !== undefined && React.createElement(public_4.ButtonMtv.Standard, { id: "goBack", text: public_2.Filter.message(this, this.backcaption), type: "primary", onClick: function (e) {
                        if (_this.props.context.back)
                            _this.props.context.back();
                    } }),
                React.createElement(public_4.ButtonMtv.Standard, { id: "goNext", text: public_2.Filter.message(this, this.nextcaption), type: "primary", disabled: this.nextButton.disabled, autofocus: (!this.props.context.optionsAccepted
                        || this.props.context.optionsAccepted.length == 0
                        || this.props.context.optionsAccepted.every(function (it) { return it; })) && true, onClick: function (e) {
                        if (_this.props.context.next)
                            _this.props.context.next();
                    } })));
        };
        MtvPurchaseButtonNavbarComponent = __decorate([
            public_2.reactComponent({
                ID: "purchase-buttonnavbar-component",
                styles: [
                    public_1.selector("&")
                        .sub(public_1.selector("& .Booking_ButtonHelper")
                        .props({
                        marginTop: 40,
                        marginBottom: 144,
                        width: "inherit"
                    }))
                ]
            })
        ], MtvPurchaseButtonNavbarComponent);
        return MtvPurchaseButtonNavbarComponent;
    }(public_2.ReactBaseComponent));
    exports.MtvPurchaseButtonNavbarComponent = MtvPurchaseButtonNavbarComponent;
});
//# sourceMappingURL=purchase_button_navbar.component.js.map