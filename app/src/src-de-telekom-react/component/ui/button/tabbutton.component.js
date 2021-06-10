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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../../../framework/navigation/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVTabButton = exports.TVTabButtonComponent = void 0;
    var TVTabButtonComponent = (function (_super) {
        __extends(TVTabButtonComponent, _super);
        function TVTabButtonComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVTabButtonComponent.prototype.render = function () {
            return React.createElement("div", { className: [this.ID, this.props.className].join(" ") },
                React.createElement("div", { className: ["text", public_1.Css.fonts2.a_fo_b1_2].join(" ") }, this.props.text || "\u00A0"));
        };
        TVTabButtonComponent = __decorate([
            public_2.reactComponent({
                ID: "m-20-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "relative",
                        lineHeight: "1",
                        whiteSpace: "nowrap",
                        minWidth: 64,
                        height: 84,
                        textAlign: "center",
                        backgroundColor: public_1.Css.colors.A_CO_1_15
                    })
                        .sub(public_1.selector(".text")
                        .props({
                        position: "relative",
                        top: 21,
                        marginLeft: 36,
                        marginRight: 36
                    })),
                    public_1.selector(".dttv-focused &")
                        .props({
                        backgroundColor: public_1.Css.colors.A_CO_2
                    })
                ]
            })
        ], TVTabButtonComponent);
        return TVTabButtonComponent;
    }(public_2.ReactBaseComponent));
    exports.TVTabButtonComponent = TVTabButtonComponent;
    exports.TVTabButton = public_3.makeFlashingElement(public_3.makeNavigationElement(TVTabButtonComponent));
});
//# sourceMappingURL=tabbutton.component.js.map