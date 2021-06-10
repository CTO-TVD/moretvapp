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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "./sky_customer.forms"], function (require, exports, React, public_1, public_2, sky_customer_forms_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvFormElement = void 0;
    var MtvFormElement = (function (_super) {
        __extends(MtvFormElement, _super);
        function MtvFormElement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MtvFormElement.prototype.render = function () {
            var _this = this;
            if (!this.props.scenario || !this.props.customer) {
                return null;
            }
            var value = this.props.customer[this.props.scenario.key];
            var isValid = sky_customer_forms_1.SkyForms.validateScenario(this.props.scenario, value);
            return React.createElement(public_1.NavigationElement, { id: this.props.scenario.key, className: [
                    this.ID, this.props.className, "singleline-ellipsis", public_2.Css.contentStates.a_cs_2_1_focused,
                    isValid || this.props.hideValidationresult ? public_2.Css.contentStates.a_cs_3_2_blurred : public_2.Css.contentStates.a_cs_3_2_invalid
                ]
                    .join(" "), onClick: function () { var _a, _b; return (_b = (_a = _this.props).onClick) === null || _b === void 0 ? void 0 : _b.call(_a, { scenario: _this.props.scenario }); } },
                !value &&
                    React.createElement("div", { style: { color: public_2.Css.colors.A_CO_6 }, className: public_2.Css.fonts2.a_fo_b2__ }, public_1.Filter.message(this, this.props.scenario.label)),
                value);
        };
        MtvFormElement = __decorate([
            public_1.reactComponent({
                ID: "mtv-form-element-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        display: "inline-block",
                        height: 72,
                        width: "inherit",
                        paddingLeft: 24,
                        paddingTop: 12,
                        borderRadius: 5,
                        textAlign: "left"
                    }),
                    public_2.selector("& + .mtv-form-element-component")
                        .props({
                        marginLeft: 24
                    })
                ]
            })
        ], MtvFormElement);
        return MtvFormElement;
    }(public_1.ReactBaseComponent));
    exports.MtvFormElement = MtvFormElement;
});
//# sourceMappingURL=form.component.js.map