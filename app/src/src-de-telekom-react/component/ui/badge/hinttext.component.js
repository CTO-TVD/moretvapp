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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../../../filter/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVHintTextComponent = void 0;
    var TVHintTextComponent = (function (_super) {
        __extends(TVHintTextComponent, _super);
        function TVHintTextComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVHintTextComponent.prototype.render = function () {
            return React.createElement("div", { className: [this.ID, this.props.className].join(" ") },
                React.createElement("div", { className: [public_1.Css.fonts2.a_fo_l1, public_1.Css.contentStates.a_cs_10, "badge", "singleline-ellipsis", this.props.className].join(" ") }, "info"),
                React.createElement("span", { className: "option-title " + public_1.Css.fonts2.a_fo_l1 }, public_3.Filter.message(this, this.props.text)));
        };
        TVHintTextComponent.defaultProps = {
            text: ""
        };
        TVHintTextComponent = __decorate([
            public_2.reactComponent({
                ID: "hinttext-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        top: 84,
                        position: "absolute",
                        display: "flex"
                    }),
                    public_1.selector("& .option-title")
                        .props({
                        marginLeft: 24,
                        color: public_1.Css.colors.A_CO_9
                    }),
                    public_1.selector("&.align-right")
                        .props({
                        right: public_1.Css.dimensions.safeareaRight
                    }),
                    public_1.selector("&.pos-top-2")
                        .props({
                        top: 60
                    }),
                    public_1.selector("& .badge")
                        .props({
                        textTransform: "uppercase",
                        padding: public_1.Css.scale(0) + "px " + public_1.Css.scale(15) + "px"
                    })
                ]
            })
        ], TVHintTextComponent);
        return TVHintTextComponent;
    }(public_2.ReactBaseComponent));
    exports.TVHintTextComponent = TVHintTextComponent;
});
//# sourceMappingURL=hinttext.component.js.map