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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom-react/public", "../../translation/public", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvDetailPreviewComponent = void 0;
    var MtvDetailPreviewComponent = (function (_super) {
        __extends(MtvDetailPreviewComponent, _super);
        function MtvDetailPreviewComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MtvDetailPreviewComponent_1 = MtvDetailPreviewComponent;
        MtvDetailPreviewComponent.prototype.render = function () {
            return React.createElement("div", { id: "mtv-detail-preview", className: [this.ID, this.props.className].join(" ") },
                React.createElement("div", { className: public_1.Css.fonts2.a_fo_h4 }, public_2.Filter.message(this, public_3.messagesMtv.PACKETVIEW_CONTENT)),
                this.props.data.image && React.createElement("img", { className: "mtv-preview-image", src: public_4.ImageScale.rescale(this.props.data.image, { ar: "ignore", y: MtvDetailPreviewComponent_1.IMAGE_HEIGHT, x: MtvDetailPreviewComponent_1.IMAGE_WIDTH }) }),
                this.props.data && React.createElement("div", { className: "mtv-preview-text" },
                    this.props.data.title && React.createElement("p", { style: { color: public_1.Css.colors.A_CO_6 }, className: public_1.Css.fonts2.a_fo_b2_2 + " mtv-preview-label singleline-ellipsis" }, this.props.data.title),
                    this.props.data.subtitle && React.createElement("p", { dangerouslySetInnerHTML: { __html: this.props.data.subtitle }, style: { color: public_1.Css.colors.A_CO_6 }, className: public_1.Css.fonts2.a_fo_b2__ })));
        };
        var MtvDetailPreviewComponent_1;
        MtvDetailPreviewComponent.COMPONENT_WIDTH = 470;
        MtvDetailPreviewComponent.IMAGE_WIDTH = 426;
        MtvDetailPreviewComponent.IMAGE_HEIGHT = 240;
        MtvDetailPreviewComponent = MtvDetailPreviewComponent_1 = __decorate([
            public_2.reactComponent({
                ID: "mtv-preview-component",
                styles: [
                    public_1.selector("&")
                        .sub(public_1.selector(".mtv-preview-image")
                        .props({
                        position: "absolute",
                        top: 50,
                        width: MtvDetailPreviewComponent_1.IMAGE_WIDTH,
                        height: MtvDetailPreviewComponent_1.IMAGE_HEIGHT
                    }))
                        .sub(public_1.selector(".mtv-preview-text")
                        .props({
                        position: "absolute",
                        top: 309,
                        width: 426
                    }))
                        .sub(public_1.selector(".mtv-preview-label")
                        .props({
                        marginBottom: 6
                    }))
                ]
            })
        ], MtvDetailPreviewComponent);
        return MtvDetailPreviewComponent;
    }(public_2.ReactBaseComponent));
    exports.MtvDetailPreviewComponent = MtvDetailPreviewComponent;
});
//# sourceMappingURL=preview.component.js.map