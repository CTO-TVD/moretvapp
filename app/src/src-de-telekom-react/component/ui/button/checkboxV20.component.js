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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../../../framework/navigation/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVCheckboxV20 = void 0;
    var TVCheckboxV20Element = (function (_super) {
        __extends(TVCheckboxV20Element, _super);
        function TVCheckboxV20Element() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVCheckboxV20Element.prototype.render = function () {
            var classNames = [this.ID, "checkbox"];
            var squareClassName = this.props.isChecked ? "icon-checked" : "";
            return React.createElement("div", { className: classNames.join(" ") },
                React.createElement("div", { className: "square" },
                    React.createElement("div", { className: squareClassName })));
        };
        TVCheckboxV20Element.defaultProps = {
            isChecked: false
        };
        TVCheckboxV20Element = __decorate([
            public_2.reactComponent({
                ID: "m-06-17-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }),
                    public_1.selector("& .square")
                        .props({
                        border: "2px solid rgba(252, 252, 252, 0.3)",
                        height: 42,
                        width: 42,
                        minWidth: 42,
                        minHeight: 42,
                        lineHeight: "1",
                        padding: 3,
                        borderRadius: 6
                    }),
                    public_1.selector("& .icon-checked")
                        .extend(public_1.Css.sprites.A_IC_009_1_30x30_mixin),
                    public_1.selector(".dttv-focused & .icon-checked")
                        .extend(public_1.Css.sprites.A_IC_009_2_30x30_mixin),
                    public_1.selector(".dttv-focused & .square")
                        .props({
                        border: "2px solid rgba(252, 252, 252)"
                    }),
                ]
            })
        ], TVCheckboxV20Element);
        return TVCheckboxV20Element;
    }(public_2.ReactBaseComponent));
    exports.TVCheckboxV20 = public_3.makeNavigationElement(TVCheckboxV20Element);
});
//# sourceMappingURL=checkboxV20.component.js.map