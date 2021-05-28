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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../../../framework/navigation/public", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVUnderlineLabel = void 0;
    var TVUnderlineLabelComponent = (function (_super) {
        __extends(TVUnderlineLabelComponent, _super);
        function TVUnderlineLabelComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVUnderlineLabelComponent.prototype.render = function () {
            return React.createElement("div", { className: [this.ID, this.props.className].join(" ") },
                this.props.type === "iconbar" && React.createElement("div", { className: "dttv-iconBar " + this.props.icon }),
                React.createElement("div", { className: public_4.Guard.isDefined(this.props.fontClassName) ? this.props.fontClassName : public_1.Css.fonts2.a_fo_h2__ }, this.props.text),
                React.createElement("div", { className: "underline", style: { top: public_1.Css.scale(this.props.linePadding !== undefined ? this.props.linePadding : 6) } }));
        };
        TVUnderlineLabelComponent = __decorate([
            public_2.reactComponent({
                ID: "underline-label-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "relative",
                        display: "inline-block"
                    })
                        .sub(public_1.selector(".underline")
                        .props({
                        position: "relative",
                        boxShadow: "0 2px 0 rgba(0, 0, 0, 0.5)",
                        width: "100%",
                        left: 0,
                        height: 3,
                        backgroundColor: public_1.Css.colors.A_CO_1,
                        transform: "scaleX(0)",
                        transition: "transform 0s"
                    })
                        .sub(public_1.selector(".dttv-focused &")
                        .props({
                        transform: "scaleX(1)",
                        transition: "transform " + public_1.Css.transitions.short + " ease"
                    }))),
                    public_1.selector("& .dttv-iconBar")
                        .props({
                        alignSelf: "center",
                        float: "left",
                        height: 48,
                        width: 48,
                        top: 10,
                        marginRight: 16
                    })
                        .sub(public_1.selector("&:first-child")
                        .props({
                        marginLeft: 16
                    }))
                ]
            })
        ], TVUnderlineLabelComponent);
        return TVUnderlineLabelComponent;
    }(public_2.ReactBaseComponent));
    exports.TVUnderlineLabel = public_3.makeNavigationElement(TVUnderlineLabelComponent);
});
//# sourceMappingURL=underlinelabel.component.js.map