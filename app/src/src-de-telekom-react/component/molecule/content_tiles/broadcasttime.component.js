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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContentTileBroadcastTimeComponent = void 0;
    var ContentTileBroadcastTimeComponent = (function (_super) {
        __extends(ContentTileBroadcastTimeComponent, _super);
        function ContentTileBroadcastTimeComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContentTileBroadcastTimeComponent_1 = ContentTileBroadcastTimeComponent;
        ContentTileBroadcastTimeComponent.prototype.render = function () {
            var image = this.props.image
                ? public_3.ImageScale.scale(this.props.image, { x: ContentTileBroadcastTimeComponent_1.HEIGHT, y: ContentTileBroadcastTimeComponent_1.COVER_HEIGHT, ar: "ignore" })
                : undefined;
            return React.createElement("div", { className: this.ID, style: this.props.styles ? this.props.styles.toStyle() : undefined },
                React.createElement("div", { className: [this.props.disableFocusFrame == true ? "" : "dttv-focus-frame", "dttv-cover-image"].join(" ") },
                    React.createElement("img", { src: image, className: ["logo", public_1.Css.fonts2.a_fo_b2__].join(" ") }),
                    React.createElement("div", { className: "timelane" },
                        React.createElement("span", { className: public_1.Css.fonts2.a_fo_h4 }, this.props.dateString),
                        " | ",
                        React.createElement("span", null, this.props.timeString))));
        };
        var ContentTileBroadcastTimeComponent_1;
        ContentTileBroadcastTimeComponent.HEIGHT = 198;
        ContentTileBroadcastTimeComponent.WIDTH = 330;
        ContentTileBroadcastTimeComponent.COVER_HEIGHT = 186;
        ContentTileBroadcastTimeComponent = ContentTileBroadcastTimeComponent_1 = __decorate([
            public_2.reactComponent({
                ID: "m-03-08-broadcasting-time-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "absolute",
                        backgroundColor: public_1.Css.colors.A_CO_1_15,
                        height: ContentTileBroadcastTimeComponent_1.HEIGHT,
                        display: "block",
                        width: ContentTileBroadcastTimeComponent_1.WIDTH + 2 * public_1.Css.dimensions.borderWidth,
                        padding: public_1.Css.dimensions.borderWidth,
                        overflow: "hidden"
                    }),
                    public_1.selector("& .dttv-cover", "& .dttv-cover-image")
                        .props({
                        width: ContentTileBroadcastTimeComponent_1.WIDTH,
                        height: ContentTileBroadcastTimeComponent_1.COVER_HEIGHT
                    }),
                    public_1.selector("& .logo")
                        .props({
                        position: "absolute",
                        top: 36,
                        left: 36,
                        height: 48
                    }),
                    public_1.selector("& .timelane")
                        .props({
                        position: "absolute",
                        top: 108,
                        left: 36
                    }),
                    public_1.selector("& .dttv-cover-image")
                        .props({
                        position: "absolute"
                    })
                ]
            })
        ], ContentTileBroadcastTimeComponent);
        return ContentTileBroadcastTimeComponent;
    }(public_2.ReactBaseComponent));
    exports.ContentTileBroadcastTimeComponent = ContentTileBroadcastTimeComponent;
});
//# sourceMappingURL=broadcasttime.component.js.map