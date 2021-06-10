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
define(["require", "exports", "react", "src/src-de-telekom/public", "src/src-de-telekom-style/public", "src/src-de-telekom-react/public", "../../translation/public", "./header.component", "../../component/radiobutton/radiobutton.component", "../util/util", "../../component/public"], function (require, exports, React, public_1, public_2, public_3, public_4, header_component_1, radiobutton_component_1, util, public_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvSkyPurchaseStep1Page = void 0;
    var MtvSkyPurchaseStep1Page = (function (_super) {
        __extends(MtvSkyPurchaseStep1Page, _super);
        function MtvSkyPurchaseStep1Page() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.gotoStep2 = function () {
                if (_this.props.next) {
                    _this.props.next({ manualFill: _this.state.manualFill });
                }
            };
            return _this;
        }
        MtvSkyPurchaseStep1Page.prototype.onPushstateLoad = function () {
            _super.prototype.onPushstateLoad.call(this);
            this.state = {
                manualFill: this.props.customerdata !== undefined
            };
        };
        MtvSkyPurchaseStep1Page.prototype.render = function () {
            var _this = this;
            var _a;
            if (!this.props.package || !this.props.catalog) {
                return null;
            }
            return React.createElement(public_3.NavigationContainer, { id: "mtvPurchase#SKY_1_selection", className: this.ID },
                React.createElement("div", { id: "title", className: "headline" },
                    React.createElement("span", { className: [public_2.Css.fonts2.a_fo_h6_2].join(" ") }, public_3.Filter.message(this, public_4.messagesMtv.sky_STEP1_HEADLINE_1)),
                    React.createElement("span", { style: { color: public_2.Css.colors.A_CO_6 }, className: public_2.Css.fonts2.a_fo_h2_3 }, " (1/6)")),
                React.createElement(header_component_1.MtvSkyPurchaseStepHeader, { package: this.props.package, catalog: this.props.catalog }),
                React.createElement("div", { id: "BookingStep1_ConditionsHead", className: [public_2.Css.fonts2.a_fo_b1_1, "Booking_ConditionsHead"].join(" ") }, public_3.Filter.message(this, public_4.messagesMtv.sky_STEP1_CONDITIONS)),
                React.createElement(public_3.NavigationContainer, { id: "sky_purchase_conditions", autofocus: false, className: ["BookingStep1_ConditionsItems", public_3.Button.Bars.horizontal, "dttv-left"].join(" "), overrides: { down: "gotoNext" } },
                    React.createElement("div", { id: "radiogroup", className: [public_3.ControlBars.vertical, "align-left"].join(" ") },
                        React.createElement(radiobutton_component_1.TVRadioButtonDeprecated, { className: public_2.Css.fonts2.a_fo_b1_1, id: "1", isChecked: !this.state.manualFill, onClick: function () { return _this.setState({ manualFill: false }); }, text: public_3.Filter.message(this, public_4.messagesMtv.sky_STEP1_CONDITION_1), subText: public_3.Filter.message(this, public_4.messagesMtv.sky_STEP1_CONDITION_1_RECOMMENDED), subTextPosition: "right" }),
                        React.createElement(radiobutton_component_1.TVRadioButtonDeprecated, { className: "height-auto", id: "2", isChecked: this.state.manualFill, onClick: function () { return _this.setState({ manualFill: true }); }, text: public_3.Filter.message(this, public_4.messagesMtv.sky_STEP1_CONDITION_2), subTextPosition: "right", disabled: false }))),
                React.createElement("div", { className: "lineseparator" }),
                React.createElement("div", { id: "BookingStep1_ButtonHelper", className: ["Booking_ButtonHelper", public_3.Button.Bars.horizontal].join(" ") },
                    React.createElement(public_5.ButtonMtv.Standard, { id: "cancel", overrides: { up: "sky_purchase_conditions" }, icon: public_2.Css.sprites.A_IC_029_2_30x30, text: public_3.Filter.message(this, public_4.messagesMtv.sky_COMMON_BTN_CANCEL), type: "primary", onClick: function () { return _this.startIntent(undefined, { type: "exit" }); } }),
                    React.createElement(public_5.ButtonMtv.Standard, { id: "gotoNext", autofocus: true, overrides: { up: "sky_purchase_conditions" }, text: public_3.Filter.message(this, public_4.messagesMtv.sky_STEP1_BTN_NEXT), type: "primary", onClick: this.gotoStep2 })),
                React.createElement("div", { id: "SmallPrint", style: { color: public_2.Css.colors.A_CO_6 }, className: [public_2.Css.fonts2.a_fo_b2_2, "Booking_SmallPrint", "singleline-ellipsis"].join(" ") }, ((_a = this.props.package) === null || _a === void 0 ? void 0 : _a.CustomValues) &&
                    this.props.package.CustomValues.SmallPrint));
        };
        MtvSkyPurchaseStep1Page = __decorate([
            public_3.reactComponent({
                ID: "mtv-skypurchase-step1-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        overflow: "hidden",
                        position: "absolute",
                        top: public_2.Css.dimensions.safeareaTop + 84,
                        left: public_2.Css.dimensions.safeareaLeft + 143,
                        width: 1416,
                        height: 888
                    })
                        .sub(public_2.selector(".dttv-radiobutton")
                        .props({
                        paddingRight: 48
                    }))
                        .sub(public_2.selector(".dttv-radiobutton")
                        .props({
                        maxWidth: 1416
                    }))
                        .sub(public_2.selector(".Booking_ConditionsHead")
                        .props({
                        marginTop: 39
                    }))
                        .sub(public_2.selector(".BookingStep1_ConditionsItems")
                        .props({
                        marginBottom: 54,
                        marginTop: 38,
                        marginLeft: 24
                    }))
                        .sub(public_2.selector(".Booking_ButtonHelper")
                        .props({
                        marginTop: 33,
                        marginBottom: 48,
                        float: "right"
                    }))
                        .sub(public_2.selector(".Booking_SmallPrint")
                        .props({
                        marginTop: 83,
                        float: "left",
                        width: "inherit"
                    }))
                        .sub(public_2.selector(".radiocomment")
                        .props({
                        marginTop: 4
                    })),
                    public_2.selector("& .lineseparator")
                        .extend(util.Styles.Separator)
                ]
            }),
            public_1.logTag()
        ], MtvSkyPurchaseStep1Page);
        return MtvSkyPurchaseStep1Page;
    }(public_3.ReactBaseComponent));
    exports.MtvSkyPurchaseStep1Page = MtvSkyPurchaseStep1Page;
});
//# sourceMappingURL=step1.component.js.map