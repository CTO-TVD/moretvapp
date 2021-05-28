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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../../base/public", "../contentimage/contentimage.component"], function (require, exports, React, public_1, public_2, public_3, contentimage_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TvBackgroundSustainer = void 0;
    var TvBackgroundSustainer = (function (_super) {
        __extends(TvBackgroundSustainer, _super);
        function TvBackgroundSustainer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TvBackgroundSustainer.prototype.shouldComponentUpdate = function (nextProps) {
            return nextProps.image != this.props.image;
        };
        TvBackgroundSustainer.prototype.render = function () {
            var upcomingImage = this.props.image && this.props.image ? public_2.ImageScale.rescale(this.props.image, { x: public_1.Css.dimensions.screenWidth, y: public_1.Css.dimensions.screenHeight, ar: "ignore", out: "jpeg" }) : undefined;
            return React.createElement("div", { className: this.ID },
                upcomingImage &&
                    React.createElement(contentimage_component_1.ContentImageComponent, { className: "bgimage", data: {
                            defaultImageClass: undefined,
                            imageUrl: upcomingImage || public_1.Css.images.inlineTransparentPixel
                        } }),
                this.props.logo &&
                    React.createElement("img", { className: "logo right", src: this.props.logo }));
        };
        TvBackgroundSustainer = __decorate([
            public_3.reactComponent({
                ID: "background-sustainer",
                styles: [
                    public_1.selector("& ")
                        .props({
                        position: "fixed",
                        width: public_1.Css.dimensions.screenWidth,
                        height: public_1.Css.dimensions.screenHeight,
                        top: 0,
                        left: 0
                    }),
                    public_1.selector("& .bgimage")
                        .props({
                        position: "absolute",
                        width: public_1.Css.dimensions.screenWidth,
                        height: public_1.Css.dimensions.screenHeight,
                        top: 0,
                        left: 0
                    }),
                    public_1.selector("& .logo")
                        .props({
                        position: "absolute",
                        top: public_1.Css.dimensions.safeareaTop + 48
                    })
                        .sub(public_1.selector("&.right")
                        .props({
                        right: public_1.Css.dimensions.safeareaRight
                    }))
                ]
            })
        ], TvBackgroundSustainer);
        return TvBackgroundSustainer;
    }(public_3.ReactBaseComponent));
    exports.TvBackgroundSustainer = TvBackgroundSustainer;
});
//# sourceMappingURL=background_sustainer.component.js.map