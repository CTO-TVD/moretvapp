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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "src/src-de-telekom-style/public", "../../translation/public", "./header.component", "../util/util", "../../component/public", "../../component/checkbox/checkbox.component"], function (require, exports, React, public_1, public_2, public_3, public_4, header_component_1, util, public_5, checkbox_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvSkyPurchaseStep4Page = void 0;
    var MtvSkyPurchaseStep4Page = (function (_super) {
        __extends(MtvSkyPurchaseStep4Page, _super);
        function MtvSkyPurchaseStep4Page(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.showMarketingPermission = function () {
                if (_this.props.catalog) {
                    _this.setState({
                        showTermsOfUse: _this.props.catalog.MarketingPermission
                            ? { id: _this.props.catalog.MarketingPermission }
                            : undefined
                    });
                }
            };
            _this.setFocus = function () {
                if (_this.navContainer) {
                    if (_this.props.agbPermission) {
                        _this.navContainer.focus("next");
                    }
                    else {
                        _this.navContainer.focus("goBack");
                    }
                }
            };
            _this.state = { showTermsOfUse: undefined };
            return _this;
        }
        MtvSkyPurchaseStep4Page.prototype.render = function () {
            var _this = this;
            var _a, _b;
            if (!this.props.package || !this.props.customerdata || !this.props.catalog) {
                return null;
            }
            return React.createElement(React.Fragment, null,
                React.createElement(public_1.NavigationContainer, { id: "mtvPurchase#SKY_4_permissions", className: this.ID },
                    React.createElement(public_1.NavigationContainer, { id: "mtvPurchase#SKY_4_permissions_data", className: "Content_Container", strictHorizontal: true, onReady: function (container) {
                            _this.navContainer = container;
                        }, overrides: { right: "mtvPurchase#SKY_4_permissions" } },
                        React.createElement(public_5.MtvTermsOfUseDialogWrapper, { idObject: this.state.showTermsOfUse, onError: this.props.onError }),
                        React.createElement("div", { id: "title", className: "headline" },
                            React.createElement("span", { className: public_3.Css.fonts2.a_fo_h6_2 }, public_1.Filter.message(this, public_4.messagesMtv.sky_STEP4_HEADLINE_1)),
                            React.createElement("span", { style: { color: public_3.Css.colors.A_CO_6 }, className: public_3.Css.fonts2.a_fo_h2_3 }, " (4/6)")),
                        React.createElement(header_component_1.MtvSkyPurchaseStepHeader, { package: this.props.package, catalog: this.props.catalog }),
                        React.createElement(public_1.NavigationContainer, { id: "permissions", className: "BookingStep4_Cond" },
                            React.createElement("table", null,
                                React.createElement("tbody", null,
                                    React.createElement("tr", null,
                                        React.createElement("td", { className: "column" },
                                            React.createElement(checkbox_component_1.TVCheckbox_deprecated_, { id: "1", isChecked: this.props.marketingPermission, autofocus: true, className: "checkbox", text: public_1.Filter.message(this, public_4.messagesMtv.sky_STEP4_AUTHORIZATIONTXT_1), linesOfText: 2, onClick: this.props.marketingPermissionClicked }),
                                            React.createElement("span", { className: [public_3.Css.fonts2.a_fo_b1_1, "twolines-ellipsis", "checkboxLabel"].join() })),
                                        React.createElement("td", { className: "buttonPosition" },
                                            React.createElement(public_5.ButtonMtv.Standard, { type: "primary", id: "info", autofocus: false, text: public_4.messagesMtv.sky_STEP4_BTN_MOREINFOS, onClick: this.showMarketingPermission }))),
                                    React.createElement("tr", null,
                                        React.createElement("td", null,
                                            React.createElement(checkbox_component_1.TVCheckbox_deprecated_, { id: "2", isChecked: this.props.agbPermission, className: "checkbox", text: public_1.Filter.message(this, public_4.messagesMtv.sky_STEP4_AUTHORIZATIONTXT_2), linesOfText: 2, onClick: this.props.agbPermissionClicked })),
                                        React.createElement("td", null))))),
                        React.createElement("div", { className: "lineseparator" }),
                        React.createElement(public_1.NavigationWatcher, { onFocusInTree: this.setFocus },
                            React.createElement("div", { id: "BookingStep1_ButtonHelper", className: ["Booking_ButtonHelper", public_1.Button.Bars.horizontal].join(" ") },
                                React.createElement(public_5.ButtonMtv.Standard, { id: "cancel", autofocus: false, icon: public_3.Css.sprites.A_IC_029_2_30x30, text: public_1.Filter.message(this, public_4.messagesMtv.sky_COMMON_BTN_CANCEL), type: "primary", onClick: function () { return _this.startIntent(undefined, { type: "exit" }); } }),
                                React.createElement(public_5.ButtonMtv.Standard, { id: "goBack", text: public_1.Filter.message(this, public_4.messagesMtv.sky_STEP4_BTN_BACK), type: "primary", onClick: function () { return _this.startIntent(undefined, { type: "backward" }); } }),
                                React.createElement(public_5.ButtonMtv.Standard, { id: "next", autofocus: true, text: public_1.Filter.message(this, public_4.messagesMtv.sky_STEP4_BTN_NEXT), type: "primary", onClick: this.props.next, disabled: !this.props.agbPermission }))),
                        React.createElement("div", { id: "SmallPrint", style: { color: public_3.Css.colors.A_CO_6 }, className: [public_3.Css.fonts2.a_fo_b2_2, "Booking_SmallPrint", "singleline-ellipsis"].join(" ") }, (_b = (_a = this.props.package) === null || _a === void 0 ? void 0 : _a.CustomValues) === null || _b === void 0 ? void 0 : _b.SmallPrint)),
                    React.createElement(public_1.NavigationKey, { keyFilter: "INFO_KEY", onKey: function () {
                            var _a;
                            _this.setState({ showTermsOfUse: { id: ((_a = _this.props.catalog) === null || _a === void 0 ? void 0 : _a.TermsOfUse) || "" } });
                            return true;
                        } }),
                    React.createElement(public_1.HintComponent, { id: "hint", className: "hint", text: public_1.Filter.message(this, public_4.messagesMtv.sky_STEP4_INFO_1), iconClass: public_3.Css.sprites.A_IC_034_3_36x36, onClick: function () { var _a; _this.setState({ showTermsOfUse: { id: ((_a = _this.props.catalog) === null || _a === void 0 ? void 0 : _a.TermsOfUse) || "" } }); return true; }, overrides: { left: "hint" } })));
        };
        MtvSkyPurchaseStep4Page = __decorate([
            public_1.reactComponent({
                ID: "mtv-skypurchase-step4-component",
                styles: [
                    public_3.selector("&")
                        .props({
                        overflow: "hidden",
                        position: "absolute",
                        width: public_3.Css.dimensions.screenWidth,
                        height: public_3.Css.dimensions.screenHeight
                    })
                        .sub(public_3.selector(".Content_Container")
                        .props({
                        overflow: "hidden",
                        position: "absolute",
                        top: public_3.Css.dimensions.safeareaTop + 89,
                        left: public_3.Css.dimensions.safeareaLeft + 142,
                        width: 1416,
                        height: 933
                    }))
                        .sub(public_3.selector(".BookingStep4_Cond")
                        .props({
                        marginBottom: 12,
                        marginTop: 42
                    }))
                        .sub(public_3.selector(".BookingStep4_Item")
                        .props({
                        width: "inherit",
                        display: "inline-block",
                        paddingLeft: 24,
                        paddingTop: 24,
                        paddingBottom: 24
                    }))
                        .sub(public_3.selector(".checkbox")
                        .props({
                        marginBottom: 28,
                        height: 115,
                        width: 1104
                    }))
                        .sub(public_3.selector(".checkboxLabel")
                        .props({
                        width: 978,
                        position: "absolute",
                        top: 301,
                        left: 92
                    }))
                        .sub(public_3.selector(".dttv-checkbox p")
                        .props({
                        marginLeft: 0
                    }))
                        .sub(public_3.selector(".buttonPosition")
                        .props({
                        verticalAlign: "top"
                    }))
                        .sub(public_3.selector(".column")
                        .props({
                        width: 1146
                    }))
                        .sub(public_3.selector(".Booking_ButtonHelper")
                        .props({
                        marginTop: 34,
                        marginBottom: 48,
                        float: "right"
                    }))
                        .sub(public_3.selector(".Booking_SmallPrint")
                        .props({
                        marginTop: 75,
                        float: "left",
                        width: "inherit"
                    })),
                    public_3.selector("& .lineseparator")
                        .extend(util.Styles.Separator),
                    public_3.selector("& .hint")
                        .props({
                        position: "absolute",
                        right: 72,
                        top: 64
                    })
                ]
            }),
            public_2.logTag()
        ], MtvSkyPurchaseStep4Page);
        return MtvSkyPurchaseStep4Page;
    }(public_1.ReactBaseComponent));
    exports.MtvSkyPurchaseStep4Page = MtvSkyPurchaseStep4Page;
});
//# sourceMappingURL=step4.component.js.map