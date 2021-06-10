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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../filter/public", "../../../base/public", "../../../framework/navigation/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVCheckboxV20Option = void 0;
    var TVCheckboxV20OptionElement = (function (_super) {
        __extends(TVCheckboxV20OptionElement, _super);
        function TVCheckboxV20OptionElement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVCheckboxV20OptionElement.prototype.render = function () {
            var classNames = [this.ID, "checkbox-option", this.props.type];
            var squareClassName = this.props.isChecked ? "icon-checked" : "";
            var classNamesText = this.props.type == "small" ? [public_1.Css.fonts2.a_fo_b1_2, "text"] : [public_1.Css.fonts2.a_fo_b1_1, "text"];
            if (this.props.withoutFocus) {
                classNames.push("withoutFocus");
            }
            if (this.props.icon) {
                classNamesText.push("withIcon");
                classNames.push("withIcon");
            }
            if (this.props.subText) {
                classNames.push("subtext");
            }
            return React.createElement("div", { className: classNames.join(" ") },
                React.createElement("div", { className: "square" },
                    React.createElement("div", { className: squareClassName })),
                this.props.icon && React.createElement("div", { className: this.props.icon }),
                React.createElement("div", null,
                    React.createElement("div", { className: classNamesText.join(" ") }, public_2.Filter.join(this, this.props.text)),
                    (this.props.subText) ? React.createElement("div", { className: public_1.Css.fonts2.a_fo_b2_2 }, public_2.Filter.join(this, this.props.subText)) : null));
        };
        TVCheckboxV20OptionElement.defaultProps = {
            text: "",
            isChecked: false,
            type: "standard"
        };
        TVCheckboxV20OptionElement = __decorate([
            public_3.reactComponent({
                ID: "m-26-01-and-03-component",
                styles: [
                    public_1.selector("&.checkbox-option")
                        .props({
                        display: "-webkit-flex",
                        minHeight: 108,
                        paddingLeft: 24,
                        paddingRight: 24,
                        paddingTop: 29,
                        paddingBottom: 31
                    }),
                    public_1.selector("&.checkbox-option.subtext")
                        .props({
                        display: "-webkit-flex",
                        paddingBottom: 35
                    }),
                    public_1.selector("&.checkbox-option.small")
                        .props({
                        minHeight: 84,
                        height: 84,
                        paddingTop: 21
                    }),
                    public_1.selector("&.checkbox-option.withIcon")
                        .props({
                        minHeight: 96,
                        height: 96,
                        paddingTop: 23
                    }),
                    public_1.selector("&.checkbox-option .square")
                        .props({
                        border: "2px solid rgba(252, 252, 252, 0.3)",
                        height: 42,
                        width: 42,
                        minWidth: 42,
                        minHeight: 42,
                        lineHeight: "1",
                        marginRight: 24,
                        padding: 3,
                        borderRadius: 6
                    }),
                    public_1.selector("&.checkbox-option.standard .square")
                        .props({
                        marginTop: 4
                    }),
                    public_1.selector("&.checkbox-option .text.withIcon")
                        .props({
                        paddingLeft: 18
                    }),
                    public_1.selector("& .icon-checked")
                        .extend(public_1.Css.sprites.A_IC_009_1_30x30_mixin),
                    public_1.selector(".dttv-focused &.checkbox-option .icon-checked")
                        .extend(public_1.Css.sprites.A_IC_009_2_30x30_mixin),
                    public_1.selector(".dttv-focused &.checkbox-option .square")
                        .props({
                        border: "2px solid rgba(252, 252, 252)"
                    }),
                    public_1.selector(".dttv-focused &.checkbox-option:not(.withoutFocus)")
                        .props({
                        backgroundColor: public_1.Css.colors.A_CO_2
                    })
                ]
            })
        ], TVCheckboxV20OptionElement);
        return TVCheckboxV20OptionElement;
    }(public_3.ReactBaseComponent));
    exports.TVCheckboxV20Option = public_4.makeNavigationElement(TVCheckboxV20OptionElement);
});
//# sourceMappingURL=checkboxV20option.component.js.map