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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "../../translation/public", "../../component/purchase/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvPurchaseStepOpt2Component = void 0;
    var MtvPurchaseStepOpt2Component = (function (_super) {
        __extends(MtvPurchaseStepOpt2Component, _super);
        function MtvPurchaseStepOpt2Component(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = { opt1Focused: false, opt2Focused: false };
            return _this;
        }
        MtvPurchaseStepOpt2Component.prototype.handleInfoKey = function () {
            if (this.props.handleInfoKey) {
                this.props.handleInfoKey();
                return true;
            }
            return false;
        };
        MtvPurchaseStepOpt2Component.prototype.changeOptionAccepted = function (option, isChecked, context) {
            if (this.props.changeOptionAccepted) {
                this.props.changeOptionAccepted({ option: option, isChecked: !isChecked, context: context });
            }
        };
        MtvPurchaseStepOpt2Component.prototype.render = function () {
            var _this = this;
            var _a, _b, _c;
            return React.createElement(React.Fragment, null,
                React.createElement(public_1.NavigationContainer, { id: "mtvPurchase#DT#StepOpt2_Main", strictHorizontal: true, autofocus: true, className: this.ID },
                    React.createElement(public_1.NavigationKey, { keyFilter: "INFO_KEY", onKey: function (key) { return _this.handleInfoKey(); } }),
                    React.createElement(public_1.HintComponent, { id: "hint", className: "hint", text: public_1.Filter.message(this, public_3.messagesMtv.STEP1_INFO_1), iconClass: public_2.Css.sprites.A_IC_034_3_36x36, onClick: function () { return _this.handleInfoKey(); }, overrides: { left: "hint" } }),
                    React.createElement(public_1.NavigationContainer, { id: "mtvPurchase#DT#StepOpt2_Content", strictHorizontal: true, autofocus: true, className: "Content_Container" },
                        React.createElement("div", { id: "title", className: "headline" },
                            React.createElement("span", { className: public_2.Css.fonts2.a_fo_h6_2 }, public_1.Filter.message(this, public_3.messagesMtv.STEP1_HEADLINE_1)),
                            React.createElement("span", { style: { color: public_2.Css.colors.A_CO_6 }, className: public_2.Css.fonts2.a_fo_h2_3 },
                                " (",
                                this.props.context.step,
                                "/",
                                this.props.context.total,
                                ")")),
                        React.createElement(public_4.MtvPurchaseComponent.DtPurchaseStepHeaderComponent, { package: this.props.package, lexusprice: this.props.lexusprice }),
                        ((_a = this.props.package.CustomValues) === null || _a === void 0 ? void 0 : _a.Partner) && React.createElement("div", { className: "BookingStep_TextBody" },
                            this.props.package.CustomValues.Partner.Title &&
                                React.createElement("div", { id: "Title", className: public_2.Css.fonts2.a_fo_h2_3 }, this.props.package.CustomValues.Partner.Title),
                            this.props.package.CustomValues.Partner.Text &&
                                React.createElement("div", { id: "Text", style: { color: public_2.Css.colors.A_CO_6 }, className: public_2.Css.fonts2.a_fo_b2__, dangerouslySetInnerHTML: { __html: this.props.package.CustomValues.Partner.Text } }),
                            ((_b = this.props.package.CustomValues.Partner.Opt1) === null || _b === void 0 ? void 0 : _b.Title) &&
                                React.createElement(public_1.Button.CheckboxV20Option, { id: "opt1", text: this.props.package.CustomValues.Partner.Opt1.Title, type: this.state.opt1Focused ? "standard" : "small", subText: this.state.opt1Focused ? this.props.package.CustomValues.Partner.Opt1.Text : undefined, autofocus: true, className: "dttv-m-in51", isChecked: this.props.context.optionsAccepted[0], onFocusIn: function () {
                                        _this.setState({ opt1Focused: true, opt2Focused: false });
                                    }, onFocusOut: function () {
                                        _this.setState({ opt1Focused: false });
                                    }, onClick: function () { _this.changeOptionAccepted(0, _this.props.context.optionsAccepted[0], 1); } }),
                            ((_c = this.props.package.CustomValues.Partner.Opt2) === null || _c === void 0 ? void 0 : _c.Title) &&
                                React.createElement(public_1.Button.CheckboxV20Option, { id: "opt2", text: this.props.package.CustomValues.Partner.Opt2.Title, type: this.state.opt2Focused ? "standard" : "small", className: "dttv-m-in51 lastCheckbox", isChecked: this.props.context.optionsAccepted[1], subText: this.state.opt2Focused ? this.props.package.CustomValues.Partner.Opt2.Text : undefined, onFocusIn: function () {
                                        _this.setState({ opt1Focused: false, opt2Focused: true });
                                    }, onFocusOut: function () {
                                        _this.setState({ opt2Focused: false });
                                    }, onClick: function () { _this.changeOptionAccepted(1, _this.props.context.optionsAccepted[1], 1); } })),
                        React.createElement("hr", null),
                        React.createElement(public_4.MtvPurchaseComponent.PurchaseButtonNavbar, { context: this.props.context }))));
        };
        MtvPurchaseStepOpt2Component = __decorate([
            public_1.reactComponent({
                ID: "purchase-stepopt2-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        overflow: "hidden",
                        position: "absolute",
                        width: public_2.Css.dimensions.screenWidth,
                        height: public_2.Css.dimensions.screenHeight
                    })
                        .sub(public_2.selector(".Content_Container")
                        .props({
                        overflow: "hidden",
                        position: "absolute",
                        top: 93,
                        left: public_2.Css.dimensions.safeareaLeft + 142,
                        width: 1416
                    }))
                        .sub(public_2.selector(" .BookingStep_TextBody #Text")
                        .props({
                        marginBottom: 30
                    }))
                        .sub(public_2.selector(" .BookingStep_TextBody #Title")
                        .props({
                        marginBottom: 12
                    }))
                        .sub(public_2.selector(" .BookingStep_TextBody")
                        .props({
                        marginTop: 36
                    }))
                        .sub(public_2.selector(" .lastCheckbox")
                        .props({
                        marginBottom: 20
                    })),
                    public_2.selector("& .hint")
                        .props({
                        position: "absolute",
                        right: 72,
                        top: 64
                    })
                ]
            })
        ], MtvPurchaseStepOpt2Component);
        return MtvPurchaseStepOpt2Component;
    }(public_1.ReactBaseComponent));
    exports.MtvPurchaseStepOpt2Component = MtvPurchaseStepOpt2Component;
});
//# sourceMappingURL=dt_purchasestep_opt2.js.map