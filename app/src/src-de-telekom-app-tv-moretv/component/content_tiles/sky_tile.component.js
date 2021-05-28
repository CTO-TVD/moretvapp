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
define(["require", "exports", "react", "underscore", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "src/src-de-telekom-react/public"], function (require, exports, React, _, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DttvComponent16x9MtvSkyComponent = void 0;
    var DttvComponent16x9MtvSkyComponent = (function (_super) {
        __extends(DttvComponent16x9MtvSkyComponent, _super);
        function DttvComponent16x9MtvSkyComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.onClick = function () {
                if (!_this.props.asset || _.isEmpty(_this.props.asset.detailRef)) {
                    return;
                }
                _this.startIntent(new public_3.IntentMoreTV.Detailpage({ id: _this.props.asset.detailRef, options: { sustainBackground: true } }));
            };
            _this.state = { focussed: false };
            return _this;
        }
        DttvComponent16x9MtvSkyComponent_1 = DttvComponent16x9MtvSkyComponent;
        DttvComponent16x9MtvSkyComponent.prototype.render = function () {
            var _this = this;
            var _a, _b, _c;
            var imageUrl = ((_a = this.props.asset) === null || _a === void 0 ? void 0 : _a.image)
                ? public_2.ImageScale.scale(this.props.asset.image, { ar: "ignore", x: DttvComponent16x9MtvSkyComponent_1.WIDTH, y: DttvComponent16x9MtvSkyComponent_1.COVER_HEIGHT })
                : public_1.Css.images.inlineTransparentPixel;
            return React.createElement(public_3.NavigationElement, { className: this.ID, style: this.props.style, id: this.props.focusId, onClick: this.onClick, onFocusIn: function () { return _this.setState({ focussed: true }); }, onFocusOut: function () { return _this.setState({ focussed: false }); } },
                React.createElement("div", { className: "image-frame dttv-focus-frame" },
                    React.createElement("img", { className: "image-frame", src: imageUrl }),
                    React.createElement("p", { className: ["title", public_1.Css.fonts2.a_fo_b2__, "twolines-ellipsis"].join(" ") }, (_b = this.props.asset) === null || _b === void 0 ? void 0 : _b.title),
                    React.createElement("p", { className: ["subtitle", public_1.Css.fonts2.a_fo_h4, "singleline-ellipsis", this.state.focussed ? "wlTextOthersColor" : undefined].join(" ") }, (_c = this.props.asset) === null || _c === void 0 ? void 0 : _c.subtitle)));
        };
        var DttvComponent16x9MtvSkyComponent_1;
        DttvComponent16x9MtvSkyComponent.HEIGHT = 436;
        DttvComponent16x9MtvSkyComponent.WIDTH = 408;
        DttvComponent16x9MtvSkyComponent.COVER_HEIGHT = 230;
        DttvComponent16x9MtvSkyComponent = DttvComponent16x9MtvSkyComponent_1 = __decorate([
            public_3.reactComponent({
                ID: "mtv-skypackage-tile-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        height: DttvComponent16x9MtvSkyComponent_1.HEIGHT,
                        width: DttvComponent16x9MtvSkyComponent_1.WIDTH + 2 * public_1.Css.dimensions.borderWidth,
                        padding: public_1.Css.dimensions.borderWidth,
                        display: "block",
                        overflow: "hidden",
                        position: "absolute"
                    }),
                    public_1.selector("& .title")
                        .props({
                        position: "absolute",
                        overflow: "hidden",
                        top: 244,
                        left: 0
                    }),
                    public_1.selector("& .subtitle")
                        .props({
                        position: "absolute",
                        overflow: "hidden",
                        top: 330,
                        left: 0
                    }),
                    public_1.selector("& .image-frame")
                        .props({
                        position: "absolute",
                        height: DttvComponent16x9MtvSkyComponent_1.COVER_HEIGHT,
                        width: DttvComponent16x9MtvSkyComponent_1.WIDTH
                    })
                ]
            })
        ], DttvComponent16x9MtvSkyComponent);
        return DttvComponent16x9MtvSkyComponent;
    }(public_3.ReactBaseComponent));
    exports.DttvComponent16x9MtvSkyComponent = DttvComponent16x9MtvSkyComponent;
});
//# sourceMappingURL=sky_tile.component.js.map