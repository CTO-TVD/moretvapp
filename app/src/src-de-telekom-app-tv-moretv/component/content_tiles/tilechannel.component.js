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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "src/src-de-telekom-react/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContentTileChannelComponent = void 0;
    var ContentTileChannelComponent = (function (_super) {
        __extends(ContentTileChannelComponent, _super);
        function ContentTileChannelComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContentTileChannelComponent_1 = ContentTileChannelComponent;
        ContentTileChannelComponent.prototype.render = function () {
            var _a, _b;
            var hasImage = (_a = this.props.data) === null || _a === void 0 ? void 0 : _a.image;
            var imageRef = hasImage
                ? public_2.ImageScale.rescale(this.props.data.image, { x: ContentTileChannelComponent_1.CHANNEL_COVER_IMAGE_WIDTH, y: ContentTileChannelComponent_1.CHANNEL_COVER_IMAGE_HEIGHT, ar: "ignore" })
                : public_1.Css.images.inlineTransparentPixel;
            return React.createElement("div", { className: this.ID },
                React.createElement("div", { className: ["content-image-wrapper", "dttv-focus-frame"].join(" ") },
                    React.createElement(public_3.ContentImage.DynamicWidth, { className: ["content-image",].join(" "), data: {
                            defaultImageClass: undefined,
                            imageUrl: imageRef
                        } })),
                React.createElement("div", { className: ["content-title", public_1.Css.fonts2.a_fo_b2__].join(" ") },
                    React.createElement("span", { className: "content-title-masked singleline-ellipsis" }, ((_b = this.props.data) === null || _b === void 0 ? void 0 : _b.title) || "\u00A0")));
        };
        var ContentTileChannelComponent_1;
        ContentTileChannelComponent.HEIGHT = 216;
        ContentTileChannelComponent.WIDTH = 264;
        ContentTileChannelComponent.COVER_HEIGHT = 142;
        ContentTileChannelComponent.COVER_WIDTH = 252;
        ContentTileChannelComponent.CHANNEL_COVER_IMAGE_WIDTH = 136 * 1.5;
        ContentTileChannelComponent.CHANNEL_COVER_IMAGE_HEIGHT = 64 * 1.5;
        ContentTileChannelComponent = ContentTileChannelComponent_1 = __decorate([
            public_3.reactComponent({
                ID: "tilechannel-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        height: ContentTileChannelComponent_1.HEIGHT,
                        position: "relative",
                        width: ContentTileChannelComponent_1.WIDTH,
                        paddingBottom: public_1.Css.dimensions.borderWidth,
                        paddingTop: public_1.Css.dimensions.borderWidth,
                        paddingLeft: public_1.Css.dimensions.borderWidth,
                        overflow: "hidden"
                    })
                        .sub(public_1.selector(".content-image-wrapper")
                        .props({
                        position: "absolute",
                        width: ContentTileChannelComponent_1.COVER_WIDTH,
                        height: ContentTileChannelComponent_1.COVER_HEIGHT,
                        backgroundColor: public_1.Css.colors.global_tile_background
                    })),
                    public_1.selector("& .content-image")
                        .props({
                        position: "absolute",
                        top: 23 + public_1.Css.dimensions.borderWidth,
                        left: 24 + public_1.Css.dimensions.borderWidth,
                        width: ContentTileChannelComponent_1.CHANNEL_COVER_IMAGE_WIDTH,
                        height: ContentTileChannelComponent_1.CHANNEL_COVER_IMAGE_HEIGHT
                    })
                        .sub(public_1.selector("&.background")
                        .props({
                        backgroundColor: "transparent"
                    })),
                    public_1.selector("& .content-title")
                        .props({
                        height: 36,
                        position: "absolute",
                        top: ContentTileChannelComponent_1.COVER_HEIGHT + 20,
                        visibility: "hidden"
                    })
                        .sub(public_1.selector(public_1.Css.contentStates.FOCUSED + " &")
                        .props({
                        visibility: "visible"
                    })),
                    public_1.selector("& .content-title-masked")
                        .props({
                        float: "left",
                        maxWidth: ContentTileChannelComponent_1.WIDTH
                    })
                ]
            })
        ], ContentTileChannelComponent);
        return ContentTileChannelComponent;
    }(public_3.ReactBaseComponent));
    exports.ContentTileChannelComponent = ContentTileChannelComponent;
});
//# sourceMappingURL=tilechannel.component.js.map