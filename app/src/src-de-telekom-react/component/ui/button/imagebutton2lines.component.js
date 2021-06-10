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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../../../framework/navigation/public", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVImageButton2LinesAndText = exports.TVImageButton2LinesAndTextComponent = void 0;
    var TVImageButton2LinesAndTextComponent = (function (_super) {
        __extends(TVImageButton2LinesAndTextComponent, _super);
        function TVImageButton2LinesAndTextComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVImageButton2LinesAndTextComponent.prototype.render = function () {
            var componentClassNames = [this.ID];
            var upcomingImage = !this.props.icon && this.props.image ? public_4.ImageScale.rescale(this.props.image || public_1.Css.images.inlineTransparentPixel, { y: 72, x: 72, ar: "ignore" }) : undefined;
            var progress = this.props.progress && public_4.Guard.isNumber(this.props.progress) && this.props.progress > 0 && this.props.progress <= 1 ? this.props.progress : undefined;
            return React.createElement("div", { className: componentClassNames.join(" ") },
                progress &&
                    React.createElement("div", { className: "progressbarcontainer" },
                        React.createElement("div", { className: "progressbar", style: { width: Math.floor(progress * 100) + "%" } })),
                this.props.icon &&
                    React.createElement("div", { className: "dttv-icon " + this.props.icon }),
                upcomingImage &&
                    React.createElement("img", { className: "dttv-icon", src: upcomingImage }),
                React.createElement("div", { className: "border" }),
                React.createElement("div", { className: "text " + public_1.Css.fonts2.a_fo_b1_2 }, public_4.Guard.isString(this.props.text) ? this.props.text : this.props.text ? this.props.text() : ""),
                React.createElement("div", { className: public_1.Css.globalStyleClasses.flash }),
                React.createElement("div", { className: ["subtext", public_1.Css.fonts2.a_fo_b2__, "singleline-ellipsis"].join(" ") }, this.props.subtext));
        };
        TVImageButton2LinesAndTextComponent = __decorate([
            public_2.reactComponent({
                ID: "m-06-06-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        display: "flex",
                        position: "relative",
                        lineHeight: "1",
                        textAlign: "left",
                        height: 120,
                        paddingLeft: 36,
                        paddingRight: 36,
                        whiteSpace: "nowrap",
                        minWidth: 64
                    })
                        .sub(public_1.selector(".border")
                        .props({
                        backgroundColor: public_1.Css.colors.A_CO_1_15,
                        borderRadius: 6,
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0
                    }))
                        .sub(public_1.selector(".text")
                        .props({
                        whiteSpace: "nowrap",
                        marginBottom: "auto",
                        marginTop: "auto"
                    })),
                    public_1.selector("& .subtext")
                        .props({
                        position: "absolute",
                        top: 120 + 17,
                        left: 0,
                        width: "100%",
                        color: public_1.Css.colors.A_CO_5,
                        whiteSpace: "nowrap",
                        display: "none",
                        paddingLeft: 3
                    }),
                    public_1.selector("& .dttv-icon")
                        .props({
                        alignSelf: "center",
                        float: "left",
                        height: 72,
                        width: 72,
                        marginRight: 18
                    }),
                    public_1.selector(".dttv-focused &")
                        .props({
                        borderRadius: 6,
                        backgroundColor: public_1.Css.colors.A_CO_2
                    })
                        .sub(public_1.selector(".border")
                        .props({
                        display: "none"
                    }))
                        .sub(public_1.selector(".subtext")
                        .props({
                        display: "initial"
                    })),
                    public_1.selector("& .progressbarcontainer")
                        .props({
                        position: "absolute",
                        backgroundColor: public_1.Css.colors.A_CO_1,
                        width: "100%",
                        height: 9,
                        marginLeft: -36,
                        borderTop: public_1.Css.scale(3) + "px solid black",
                        borderRadius: "0px 0px " + public_1.Css.scale(6) + "px " + public_1.Css.scale(6) + "px",
                        top: 111,
                        overflow: "hidden"
                    }),
                    public_1.selector("& .progressbar")
                        .props({
                        height: "inherit",
                        backgroundColor: public_1.Css.colors.A_CO_2
                    })
                ]
            })
        ], TVImageButton2LinesAndTextComponent);
        return TVImageButton2LinesAndTextComponent;
    }(public_2.ReactBaseComponent));
    exports.TVImageButton2LinesAndTextComponent = TVImageButton2LinesAndTextComponent;
    exports.TVImageButton2LinesAndText = public_3.makeFlashingElement(public_3.makeNavigationElement(TVImageButton2LinesAndTextComponent));
});
//# sourceMappingURL=imagebutton2lines.component.js.map