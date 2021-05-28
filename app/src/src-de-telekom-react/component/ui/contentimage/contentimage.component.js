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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public"], function (require, exports, React, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContentImageComponent = void 0;
    var ContentImageComponent = (function (_super) {
        __extends(ContentImageComponent, _super);
        function ContentImageComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = { imageLoaded: false };
            return _this;
        }
        ContentImageComponent.getDerivedStateFromProps = function (nextProps, prevState) {
            var _a;
            var nextImageUrl = (_a = nextProps.data) === null || _a === void 0 ? void 0 : _a.imageUrl;
            if (!nextImageUrl || nextImageUrl !== prevState.currentImageUrl) {
                return { currentImageUrl: nextImageUrl, imageLoaded: false };
            }
            return null;
        };
        ContentImageComponent.prototype.loadImage = function (state, target) {
            if (state == "error" && target.src != public_1.Css.images.inlineTransparentPixel) {
                target.src = public_1.Css.images.inlineTransparentPixel;
            }
            this.setState({ imageLoaded: true });
            if (this.props.onImageLoaded) {
                this.props.onImageLoaded(state, target.src == public_1.Css.images.inlineTransparentPixel);
            }
        };
        ContentImageComponent.prototype.render = function () {
            var _this = this;
            return React.createElement("div", { className: this.ID + " " + this.props.className + " background" },
                React.createElement("div", { className: "defaultImage " + (this.props.data.defaultImageClass || "") }),
                this.state.currentImageUrl && React.createElement("img", { src: this.state.currentImageUrl, style: { opacity: this.state.imageLoaded ? 1 : 0 }, onAbort: function (e) { return _this.loadImage("abort", e.currentTarget); }, onError: function (e) { return _this.loadImage("error", e.currentTarget); }, onLoad: function (e) { return _this.loadImage("load", e.currentTarget); } }));
        };
        ContentImageComponent = __decorate([
            public_2.reactComponent({
                ID: "content-image-component",
                styles: [
                    public_1.selector("&.background")
                        .props({
                        position: "absolute",
                        backgroundColor: public_1.Css.colors.A_CO_1_10
                    }),
                    public_1.selector("&.background > div.defaultImage")
                        .props({
                        left: "50%",
                        position: "absolute",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        opacity: 0.09
                    }),
                    public_1.selector("&.background > img")
                        .props({
                        height: "inherit",
                        position: "absolute",
                        width: "inherit"
                    })
                ]
            })
        ], ContentImageComponent);
        return ContentImageComponent;
    }(public_2.ReactBaseComponent));
    exports.ContentImageComponent = ContentImageComponent;
});
//# sourceMappingURL=contentimage.component.js.map