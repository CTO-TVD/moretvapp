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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../../base/public", "../../../component/molecule/public", "./catalog_meta.component"], function (require, exports, React, public_1, public_2, public_3, public_4, catalog_meta_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MiniPreviewComponent = void 0;
    var MiniPreviewComponent = (function (_super) {
        __extends(MiniPreviewComponent, _super);
        function MiniPreviewComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = { description: undefined, metaline: undefined };
            return _this;
        }
        MiniPreviewComponent.prototype.shouldComponentUpdate = function (nextProps) {
            return nextProps.item != this.props.item || nextProps.faded != this.props.faded;
        };
        MiniPreviewComponent.prototype.render = function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            var visibility = this.props.faded ? "fadedStage" : "highlightedStage";
            var className = [this.props.className, this.ID, (!this.props.item || !this.props.item.isSpecial) ? visibility : undefined];
            var logos = ((_a = this.props.item) === null || _a === void 0 ? void 0 : _a.logos) ? (_b = this.props.item) === null || _b === void 0 ? void 0 : _b.logos.map(function (logo) { return public_2.ImageScale.rescale(logo, { y: 48, ar: "keep" }); }) : undefined;
            return React.createElement("div", { className: className.join(" ") },
                React.createElement(public_4.Mask, { type: ((_c = this.props.item) === null || _c === void 0 ? void 0 : _c.isSpecial) ? "specialLane" : "miniPreview", className: "previewBgMask" },
                    React.createElement("img", { className: ["previewBgImage", ((_d = this.props.item) === null || _d === void 0 ? void 0 : _d.isSpecial) ? "special" : undefined].join(" "), src: ((_e = this.props.item) === null || _e === void 0 ? void 0 : _e.image) ? this.props.item.image.src : public_1.Css.images.inlineTransparentPixel })),
                logos && React.createElement("div", { id: "topLogo", className: "toplogo" },
                    " ",
                    logos.map(function (logo) { return React.createElement("img", { className: "logo", src: logo }); }),
                    " "),
                React.createElement(catalog_meta_component_1.ParagraphCatalogMetaComponent, { className: ["previewInfo", ((_f = this.props.item) === null || _f === void 0 ? void 0 : _f.isSpecial) ? visibility : undefined].join(" "), title: (_g = this.props.item) === null || _g === void 0 ? void 0 : _g.title, text: (_h = this.props.item) === null || _h === void 0 ? void 0 : _h.description, iconState: this.props.iconState, metaline: (_j = this.props.item) === null || _j === void 0 ? void 0 : _j.metaline }));
        };
        MiniPreviewComponent = __decorate([
            public_3.reactComponent({
                ID: "minipreview-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "absolute",
                        top: 0,
                        width: public_1.Css.dimensions.screenWidth,
                        height: public_1.Css.dimensions.SceneImageHeight,
                        transition: "opacity 300ms, transform  300ms",
                        opacity: 1,
                        willChange: "opacity"
                    })
                        .sub(public_1.selector("&.fadedStage")
                        .props({
                        transition: "opacity 300ms, transform  300ms",
                        opacity: 0.4
                    })),
                    public_1.selector("& .previewInfo")
                        .props({
                        position: "absolute",
                        top: 134,
                        left: public_1.Css.dimensions.safeareaLeft_UI20,
                        transition: "opacity 300ms, transform  300ms",
                        opacity: 1,
                        willChange: "opacity"
                    })
                        .sub(public_1.selector("&.fadedStage")
                        .props({
                        transition: "opacity 300ms, transform  300ms",
                        opacity: 0.4
                    })),
                    public_1.selector("& .previewBgImage", "& .previewBgMask")
                        .props({
                        top: 0,
                        right: 0,
                        position: "absolute",
                        width: public_1.Css.dimensions.SceneImageWidth,
                        height: public_1.Css.dimensions.SceneImageHeight
                    })
                        .sub(public_1.selector("&.special")
                        .props({
                        width: public_1.Css.dimensions.screenWidth
                    })),
                    public_1.selector("& .toplogo")
                        .props({
                        position: "absolute",
                        top: public_1.Css.dimensions.safeareaTop_UI20,
                        left: public_1.Css.dimensions.safeareaLeft_UI20
                    }),
                    public_1.selector("& .logo")
                        .props({
                        marginRight: 24,
                    })
                ]
            })
        ], MiniPreviewComponent);
        return MiniPreviewComponent;
    }(public_3.ReactBaseComponent));
    exports.MiniPreviewComponent = MiniPreviewComponent;
});
//# sourceMappingURL=minipreview.component.js.map