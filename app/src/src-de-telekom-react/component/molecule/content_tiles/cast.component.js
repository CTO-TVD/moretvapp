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
    exports.ContentTileCastComponent = void 0;
    var ContentTileCastComponent = (function (_super) {
        __extends(ContentTileCastComponent, _super);
        function ContentTileCastComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContentTileCastComponent_1 = ContentTileCastComponent;
        ContentTileCastComponent.prototype.render = function () {
            var image = this.props.image
                ? public_4.ImageScale.rescale(this.props.image, { x: ContentTileCastComponent_1.WIDTH, y: ContentTileCastComponent_1.COVER_HEIGHT, ar: "keep", out: "jpeg" })
                : undefined;
            return React.createElement("div", { className: this.ID, style: this.props.styles ? this.props.styles.toStyle() : undefined },
                React.createElement("div", { className: [this.props.disableFocusFrame == true ? "" : "dttv-focus-frame", "dttv-cover-image"].join(" ") },
                    React.createElement(public_3.ContentImageComponent, { className: "dttv-cover-image", data: {
                            defaultImageClass: public_1.Css.sprites.A_IC_005_120x120,
                            imageUrl: image
                        } })));
        };
        var ContentTileCastComponent_1;
        ContentTileCastComponent.HEIGHT = 336;
        ContentTileCastComponent.WIDTH = 243;
        ContentTileCastComponent.COVER_HEIGHT = 324;
        ContentTileCastComponent = ContentTileCastComponent_1 = __decorate([
            public_2.reactComponent({
                ID: "m-02-13-cast-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "absolute",
                        height: ContentTileCastComponent_1.HEIGHT,
                        display: "block",
                        width: ContentTileCastComponent_1.WIDTH + 2 * public_1.Css.dimensions.borderWidth,
                        padding: public_1.Css.dimensions.borderWidth,
                        overflow: "hidden"
                    }),
                    public_1.selector("& .dttv-cover", "& .dttv-cover-image")
                        .props({
                        width: ContentTileCastComponent_1.WIDTH,
                        height: ContentTileCastComponent_1.COVER_HEIGHT
                    }),
                    public_1.selector("& .dttv-cover-image")
                        .props({
                        position: "absolute"
                    })
                ]
            })
        ], ContentTileCastComponent);
        return ContentTileCastComponent;
    }(public_2.ReactBaseComponent));
    exports.ContentTileCastComponent = ContentTileCastComponent;
});
//# sourceMappingURL=cast.component.js.map