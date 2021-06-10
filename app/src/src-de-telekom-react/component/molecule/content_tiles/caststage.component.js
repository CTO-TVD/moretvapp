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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../../base/public", "../../public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContentTileCastStageComponent = void 0;
    var ContentTileCastStageComponent = (function (_super) {
        __extends(ContentTileCastStageComponent, _super);
        function ContentTileCastStageComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContentTileCastStageComponent_1 = ContentTileCastStageComponent;
        ContentTileCastStageComponent.prototype.render = function () {
            var image = this.props.image
                ? public_2.ImageScale.rescale(this.props.image, { x: ContentTileCastStageComponent_1.WIDTH, y: ContentTileCastStageComponent_1.COVER_HEIGHT, ar: "keep", out: "jpeg" })
                : undefined;
            return React.createElement("div", { className: this.ID, style: this.props.styles ? this.props.styles.toStyle() : undefined },
                React.createElement("div", { className: [this.props.disableFocusFrame == true ? "" : "dttv-focus-frame", "dttv-cover-image"].join(" ") },
                    React.createElement(public_4.ContentImageComponent, { className: "dttv-cover-image", data: {
                            defaultImageClass: public_1.Css.sprites.A_IC_005_120x120,
                            imageUrl: image
                        } })));
        };
        var ContentTileCastStageComponent_1;
        ContentTileCastStageComponent.HEIGHT = 260;
        ContentTileCastStageComponent.WIDTH = 186;
        ContentTileCastStageComponent.COVER_HEIGHT = 248;
        ContentTileCastStageComponent = ContentTileCastStageComponent_1 = __decorate([
            public_3.reactComponent({
                ID: "m-02-20-cast-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "absolute",
                        height: ContentTileCastStageComponent_1.HEIGHT,
                        display: "block",
                        width: ContentTileCastStageComponent_1.WIDTH + 2 * public_1.Css.dimensions.borderWidth,
                        padding: public_1.Css.dimensions.borderWidth,
                        overflow: "hidden"
                    }),
                    public_1.selector("& .dttv-cover", "& .dttv-cover-image")
                        .props({
                        width: ContentTileCastStageComponent_1.WIDTH,
                        height: ContentTileCastStageComponent_1.COVER_HEIGHT
                    }),
                    public_1.selector("& .dttv-cover-image")
                        .props({
                        position: "absolute"
                    })
                ]
            })
        ], ContentTileCastStageComponent);
        return ContentTileCastStageComponent;
    }(public_3.ReactBaseComponent));
    exports.ContentTileCastStageComponent = ContentTileCastStageComponent;
});
//# sourceMappingURL=caststage.component.js.map