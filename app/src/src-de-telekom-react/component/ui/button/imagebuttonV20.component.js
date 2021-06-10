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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../filter/public", "../../../base/public", "../../../framework/navigation/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVImageButtonV20 = void 0;
    var TVImageButtonV20Component = (function (_super) {
        __extends(TVImageButtonV20Component, _super);
        function TVImageButtonV20Component() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVImageButtonV20Component.prototype.render = function () {
            var _a;
            var isIconBar = this.props.type === "iconbar";
            var componentClassNames = [this.ID];
            var textClassNames = ["text"];
            if (this.props.linesOfText !== undefined) {
                switch (this.props.linesOfText) {
                    case 1:
                        textClassNames.push("singleline-ellipsis");
                        break;
                    case 2:
                        textClassNames.push("twolines-ellipsis");
                        break;
                }
            }
            return React.createElement("div", { className: componentClassNames.join(" ") }, (_a = this.props.assetList) === null || _a === void 0 ? void 0 :
                _a.filter(function (item) { return item; }).map(function (asset, index) { return isIconBar ? React.createElement("div", { key: index, className: "dttv-iconBar " + asset }) : React.createElement("img", { key: index, className: "dttv-imageList", src: asset }); }),
                React.createElement("div", { className: textClassNames.join(" ") }, public_2.Filter.join(this, this.props.text)),
                React.createElement("div", { className: "border" }),
                React.createElement("div", { className: public_1.Css.globalStyleClasses.flash }));
        };
        TVImageButtonV20Component.defaultProps = {
            text: ""
        };
        TVImageButtonV20Component = __decorate([
            public_3.reactComponent({
                ID: "tv-image-button20-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        display: "flex",
                        position: "relative",
                        lineHeight: "1",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        minWidth: 264,
                        height: 84
                    })
                        .sub(public_1.selector(".border")
                        .props({
                        borderRadius: 6,
                        backgroundColor: public_1.Css.colors.A_CO_1_15,
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0
                    })),
                    public_1.selector("& .text")
                        .props({
                        position: "relative",
                        top: 21,
                        marginLeft: 42,
                        marginRight: 36,
                        whiteSpace: "nowrap"
                    }),
                    public_1.selector("& .dttv-imageList")
                        .props({
                        alignSelf: "center",
                        float: "left",
                        height: 48,
                        paddingLeft: 24
                    })
                        .sub(public_1.selector("&:first-child")
                        .props({
                        marginLeft: 32
                    })),
                    public_1.selector("& .dttv-iconBar")
                        .props({
                        alignSelf: "center",
                        float: "left",
                        height: 48,
                        marginRight: 24
                    })
                        .sub(public_1.selector("&:first-child")
                        .props({
                        marginLeft: 32
                    })),
                    public_1.selector("& .dttv-iconBar")
                        .props({
                        width: 48
                    }),
                    public_1.selector(".dttv-focused &")
                        .props({
                        backgroundColor: public_1.Css.colors.A_CO_2,
                        borderRadius: 6
                    })
                        .sub(public_1.selector(".border")
                        .props({
                        display: "none"
                    }))
                ]
            })
        ], TVImageButtonV20Component);
        return TVImageButtonV20Component;
    }(public_3.ReactBaseComponent));
    exports.TVImageButtonV20 = public_4.makeFlashingElement(public_4.makeNavigationElement(TVImageButtonV20Component));
});
//# sourceMappingURL=imagebuttonV20.component.js.map