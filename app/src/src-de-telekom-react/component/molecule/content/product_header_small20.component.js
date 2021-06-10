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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../../atoms/images/channellogo.component", "./firstmetaline.component"], function (require, exports, React, public_1, public_2, channellogo_component_1, firstmetaline_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TvProductHeaderSmallV20 = void 0;
    var TvProductHeaderSmallV20 = (function (_super) {
        __extends(TvProductHeaderSmallV20, _super);
        function TvProductHeaderSmallV20() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TvProductHeaderSmallV20.prototype.render = function () {
            return React.createElement("div", { className: this.ID },
                this.props.isParent && React.createElement("span", { className: public_1.Css.sprites.A_IC_055_36x36 + " icon-folder" }),
                !this.props.isParent && React.createElement(channellogo_component_1.ChannelLogoComponent, { position: "center", channelTitle: this.props.channelTitle, channelLogo: this.props.channelLogoUrl }),
                React.createElement("div", { className: "programmetainfo " + (this.props.canReplay ? "canReplay" : "") },
                    React.createElement(firstmetaline_component_1.TVFirstMetaLineComponent, { className: "firstLine", text: this.props.title, size: this.props.amount, fontAmountClass: public_1.Css.fonts2.a_fo_h6, fontClass: public_1.Css.fonts2.a_fo_h6 }),
                    React.createElement("div", { className: ["info", public_1.Css.fonts2.a_fo_b2__].join(" ") },
                        this.props.canReplay && React.createElement("div", { className: "icon-replay " + public_1.Css.sprites.A_IC_027_2_30x30 }),
                        React.createElement("div", { className: "text" }, this.props.metaline + (this.props.qualityIcon ? " | " : "")),
                        this.props.qualityIcon && React.createElement("div", { className: "infoicon " + this.props.qualityIcon }))));
        };
        TvProductHeaderSmallV20 = __decorate([
            public_2.reactComponent({
                ID: "m-33-02",
                styles: [
                    public_1.selector("&")
                        .props({
                        height: 155,
                        marginTop: 21,
                        display: "flex"
                    })
                        .extend(public_1.Css.mixins.borderBottomGrey)
                        .extend(public_1.Css.mixins.borderTopGrey),
                    public_1.selector("& ." + channellogo_component_1.ChannelLogoComponent.ID)
                        .props({
                        marginTop: 32
                    }),
                    public_1.selector("& .programmetainfo")
                        .props({
                        paddingTop: 21,
                        height: "100%",
                        width: 1035
                    }),
                    public_1.selector("& .programmetainfo .infoicon")
                        .props({
                        marginTop: 3,
                        marginLeft: 8
                    }),
                    public_1.selector("& .programmetainfo .firstline"),
                    public_1.selector("& .programmetainfo .info")
                        .props({
                        display: "flex"
                    }),
                    public_1.selector("& .programmetainfo .info .text")
                        .extend(public_1.Css.mixins.singlelineEllipsis),
                    public_1.selector("& .icon-folder")
                        .props({
                        marginLeft: 0,
                        marginRight: 6,
                        marginTop: 35
                    }),
                    public_1.selector("& .programmetainfo .info .icon-replay")
                        .props({
                        display: "none",
                        marginLeft: 0,
                        marginTop: 4,
                        marginRight: 12
                    }),
                    public_1.selector("& .programmetainfo.canReplay .info .icon-replay")
                        .props({
                        display: "initial"
                    })
                ]
            })
        ], TvProductHeaderSmallV20);
        return TvProductHeaderSmallV20;
    }(public_2.ReactBaseComponent));
    exports.TvProductHeaderSmallV20 = TvProductHeaderSmallV20;
});
//# sourceMappingURL=product_header_small20.component.js.map