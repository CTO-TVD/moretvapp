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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../../public", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContentTileVodComponent = void 0;
    var ContentTileVodComponent = (function (_super) {
        __extends(ContentTileVodComponent, _super);
        function ContentTileVodComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContentTileVodComponent_1 = ContentTileVodComponent;
        ContentTileVodComponent.prototype.render = function () {
            var _a, _b, _c;
            var logo = ((_a = this.props.data) === null || _a === void 0 ? void 0 : _a.logo) || public_1.Css.images.inlineTransparentPixel;
            var image = this.props.data
                ? public_4.ImageScale.rescale(this.props.data.image, { y: ContentTileVodComponent_1.COVER_HEIGHT, ar: "keep" })
                : undefined;
            return React.createElement("div", { className: this.ID, style: this.props.styles ? this.props.styles.toStyle() : undefined },
                React.createElement("div", { className: [this.props.disableFocusFrame == true ? "" : "dttv-focus-frame", "dttv-cover-image"].join(" ") },
                    React.createElement(public_3.ContentImageComponent, { className: "dttv-cover-image", data: {
                            defaultImageClass: this.props.defaultImage ? this.props.defaultImage : public_1.Css.sprites.A_IC_003_1_168x168,
                            imageUrl: image
                        } })),
                ((_b = this.props.data) === null || _b === void 0 ? void 0 : _b.logo) &&
                    React.createElement("div", { className: public_1.Css.gradients.A_SH_4_1 + " dttv-cover-image" },
                        React.createElement("img", { src: logo, className: "logo" })),
                React.createElement("div", { className: "dttv-coverinfo" },
                    React.createElement("div", { className: "dttv-coverinfo-text" },
                        React.createElement("div", { id: "title", className: public_1.Css.fonts2.a_fo_b2__ + " singleline-ellipsis" }, (_c = this.props.data) === null || _c === void 0 ? void 0 : _c.title))));
        };
        var ContentTileVodComponent_1;
        ContentTileVodComponent.HEIGHT = 381;
        ContentTileVodComponent.WIDTH = 330;
        ContentTileVodComponent.COVER_HEIGHT = 186;
        ContentTileVodComponent = ContentTileVodComponent_1 = __decorate([
            public_2.reactComponent({
                ID: "m-02-02-vod-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        height: ContentTileVodComponent_1.HEIGHT,
                        display: "block",
                        width: ContentTileVodComponent_1.WIDTH + 2 * public_1.Css.dimensions.borderWidth,
                        padding: public_1.Css.dimensions.borderWidth,
                        overflow: "hidden"
                    }),
                    public_1.selector("& .dttv-cover", "& .dttv-cover-image")
                        .props({
                        width: ContentTileVodComponent_1.WIDTH,
                        height: ContentTileVodComponent_1.COVER_HEIGHT
                    }),
                    public_1.selector("& .dttv-cover-image")
                        .props({
                        position: "absolute"
                    }),
                    public_1.selector("& .dttv-coverinfo")
                        .props({
                        width: ContentTileVodComponent_1.WIDTH,
                        height: 108,
                        position: "absolute",
                        top: ContentTileVodComponent_1.COVER_HEIGHT + 12
                    }),
                    public_1.selector("& .logo")
                        .props({
                        position: "absolute",
                        top: 12,
                        left: 12,
                        height: 42
                    })
                ]
            })
        ], ContentTileVodComponent);
        return ContentTileVodComponent;
    }(public_2.ReactBaseComponent));
    exports.ContentTileVodComponent = ContentTileVodComponent;
});
//# sourceMappingURL=vod.component.js.map