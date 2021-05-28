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
    exports.ContentTile16x9Component = void 0;
    var ContentTile16x9Component = (function (_super) {
        __extends(ContentTile16x9Component, _super);
        function ContentTile16x9Component() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContentTile16x9Component_1 = ContentTile16x9Component;
        ContentTile16x9Component.prototype.render = function () {
            var _a, _b, _c, _d;
            var functionalTile = ((_a = this.props.data) === null || _a === void 0 ? void 0 : _a.text) !== undefined;
            var hasImage = (_b = this.props.data) === null || _b === void 0 ? void 0 : _b.image;
            var imageRef = hasImage
                ? (this.props.data && this.props.data.disableImageScaling !== true
                    ? public_2.ImageScale.rescale(this.props.data.image, { y: functionalTile ? 72 : ContentTile16x9Component_1.COVER_HEIGHT, ar: "keep" })
                    : this.props.data.image)
                : public_1.Css.images.inlineTransparentPixel;
            return React.createElement("div", { className: [this.ID].join(" "), style: this.props.styles ? this.props.styles.toStyle() : undefined },
                React.createElement("div", { className: [
                        "content-wrapper",
                        functionalTile ? "content-functional " + (this.props.disableFocusFrame == true ? "" : "dttv-focus-frame") : undefined
                    ].join(" ") },
                    React.createElement("div", { className: ["content-image-wrapper"].join(" ") }, !functionalTile &&
                        React.createElement(React.Fragment, null,
                            React.createElement(public_3.ContentImage.DynamicWidth, { className: [
                                    "content-image",
                                    this.props.disableFocusFrame == true ? "" : "dttv-focus-frame",
                                ].join(" "), data: {
                                    defaultImageClass: this.props.data ? this.props.data.defaultImageClass : undefined,
                                    imageUrl: imageRef
                                } })))),
                this.props.data &&
                    React.createElement(React.Fragment, null,
                        React.createElement("div", { className: ["content-title", public_1.Css.fonts2.a_fo_b2__].join(" ") },
                            React.createElement("span", { className: "content-title-masked singleline-ellipsis" }, ((_c = this.props.data) === null || _c === void 0 ? void 0 : _c.title) || "\u00A0"),
                            "\u00A0",
                            React.createElement("span", { style: { color: public_1.Css.colors.A_CO_6 }, className: public_1.Css.fonts2.a_fo_b2__ }, this.props.data.meta)),
                        React.createElement("div", { className: ["content-subtitle", public_1.Css.fonts2.a_fo_b2__, "singleline-ellipsis"].join(" ") },
                            React.createElement("span", null, ((_d = this.props.data) === null || _d === void 0 ? void 0 : _d.subtitle) || "\u00A0"))));
        };
        var ContentTile16x9Component_1;
        ContentTile16x9Component.HEIGHT = 366;
        ContentTile16x9Component.WIDTH = 408 + 2 * public_1.Css.dimensions.borderWidth;
        ContentTile16x9Component.COVER_HEIGHT = 230;
        ContentTile16x9Component.COVER_WIDTH = 408;
        ContentTile16x9Component = ContentTile16x9Component_1 = __decorate([
            public_3.reactComponent({
                ID: "tile16x9-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        height: ContentTile16x9Component_1.HEIGHT,
                        position: "relative",
                        width: ContentTile16x9Component_1.WIDTH,
                        padding: public_1.Css.dimensions.borderWidth,
                        overflow: "hidden"
                    }),
                    public_1.selector("& .content-image")
                        .props({
                        width: ContentTile16x9Component_1.COVER_WIDTH,
                        height: ContentTile16x9Component_1.COVER_HEIGHT
                    }),
                    public_1.selector("& .content-functional")
                        .props({
                        position: "absolute",
                        width: ContentTile16x9Component_1.COVER_WIDTH,
                        height: ContentTile16x9Component_1.COVER_HEIGHT,
                        backgroundColor: public_1.Css.colors.A_CO_1_10,
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }),
                    public_1.selector("& .content-title")
                        .props({
                        height: 36,
                        position: "absolute",
                        top: ContentTile16x9Component_1.COVER_HEIGHT + 20
                    }),
                    public_1.selector("& .content-title-masked")
                        .props({
                        float: "left",
                        maxWidth: 341,
                        letterSpacing: "0.1em"
                    }),
                    public_1.selector("& .content-subtitle")
                        .props({
                        width: ContentTile16x9Component_1.WIDTH - 2 * public_1.Css.dimensions.borderWidth,
                        position: "absolute",
                        top: ContentTile16x9Component_1.COVER_HEIGHT + 57,
                        color: public_1.Css.colors.A_CO_1,
                        letterSpacing: "0.1em"
                    })
                ]
            })
        ], ContentTile16x9Component);
        return ContentTile16x9Component;
    }(public_3.ReactBaseComponent));
    exports.ContentTile16x9Component = ContentTile16x9Component;
});
//# sourceMappingURL=tile16x9.component.js.map