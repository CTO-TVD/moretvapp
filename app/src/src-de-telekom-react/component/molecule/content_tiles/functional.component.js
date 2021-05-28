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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FunctionalTileComponent = void 0;
    var FunctionalTileComponent = (function (_super) {
        __extends(FunctionalTileComponent, _super);
        function FunctionalTileComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FunctionalTileComponent_1 = FunctionalTileComponent;
        FunctionalTileComponent.prototype.render = function () {
            var image = this.props.image
                ? public_3.ImageScale.rescale(this.props.image, { x: this.props.disableImageScaling ? FunctionalTileComponent_1.HEIGHT : 72, y: this.props.disableImageScaling ? FunctionalTileComponent_1.WIDTH : 72, ar: "keep" })
                : undefined;
            var hasImage = this.props.image;
            return React.createElement("div", { className: [this.ID].join(" "), style: this.props.styles ? this.props.styles.toStyle() : undefined },
                React.createElement("div", { className: ["content", "dttv-focus-frame", "dttv-cover-image"].join(" ") },
                    React.createElement("div", null,
                        React.createElement("div", { className: ["content-image-wrappr", image || this.props.icon ? undefined : "empty"].join(" ") }, this.props.icon
                            ? React.createElement("div", { className: ["content-image", "dttv-icon", this.props.icon, this.props.text !== undefined && this.props.text !== "" ? "spacer" : undefined].join(" "), style: { display: "inline-block" } })
                            : React.createElement("img", { className: [this.props.disableImageScaling ? undefined : "content-image", hasImage && this.props.text !== undefined && this.props.text !== "" ? "spacer" : undefined].join(" "), src: image })),
                        React.createElement("div", { className: [
                                "content-text",
                                public_1.Css.fonts2.a_fo_l1,
                                this.props.textOneline ? "spacersmall" : undefined,
                                hasImage && this.props.text !== undefined && this.props.text !== "" ? "spacer" : undefined,
                                "twolines-ellipsis"
                            ].join(" ") }, this.props.text || ""))));
        };
        var FunctionalTileComponent_1;
        FunctionalTileComponent.HEIGHT = 186;
        FunctionalTileComponent.WIDTH = 186;
        FunctionalTileComponent = FunctionalTileComponent_1 = __decorate([
            public_2.reactComponent({
                ID: "m-03-01u02-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "relative",
                        height: FunctionalTileComponent_1.HEIGHT + 2 * public_1.Css.dimensions.borderWidth,
                        display: "inline-block",
                        width: FunctionalTileComponent_1.WIDTH + 2 * public_1.Css.dimensions.borderWidth,
                        padding: public_1.Css.dimensions.borderWidth,
                        overflow: "hidden"
                    }),
                    public_1.selector("& .dttv-cover-image")
                        .props({
                        width: FunctionalTileComponent_1.WIDTH,
                        height: FunctionalTileComponent_1.HEIGHT,
                        position: "absolute"
                    }),
                    public_1.selector("& .content")
                        .props({
                        position: "absolute",
                        width: FunctionalTileComponent_1.WIDTH,
                        height: FunctionalTileComponent_1.HEIGHT,
                        backgroundColor: public_1.Css.colors.A_CO_1_15,
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    })
                        .sub(public_1.selector("& .content-image-wrappr")
                        .props({
                        lineHeight: 0,
                    })
                        .sub(public_1.selector("&.empty")
                        .props({
                        height: 0
                    })))
                        .sub(public_1.selector("& .content-image")
                        .props({
                        maxWidth: FunctionalTileComponent_1.WIDTH,
                        maxHeight: 105
                    })
                        .sub(public_1.selector("&.spacer")
                        .props({
                        marginTop: 9
                    })))
                        .sub(public_1.selector("& .content-text")
                        .props({
                        width: FunctionalTileComponent_1.WIDTH,
                        paddingLeft: 18,
                        paddingRight: 18,
                        whiteSpace: "normal"
                    })
                        .sub(public_1.selector("&.spacer")
                        .props({
                        marginTop: 9
                    }))
                        .sub(public_1.selector("&.spacersmall")
                        .props({
                        marginTop: 18
                    })))
                ]
            })
        ], FunctionalTileComponent);
        return FunctionalTileComponent;
    }(public_2.ReactBaseComponent));
    exports.FunctionalTileComponent = FunctionalTileComponent;
});
//# sourceMappingURL=functional.component.js.map