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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../../base/public", "../public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParagraphStageMultiLineComponent = void 0;
    var ParagraphStageMultiLineComponent = (function (_super) {
        __extends(ParagraphStageMultiLineComponent, _super);
        function ParagraphStageMultiLineComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ParagraphStageMultiLineComponent.prototype.render = function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            if (this.props.lineNumber == 2) {
                return React.createElement("div", { className: [this.ID, this.props.className].join(" "), style: this.props.style },
                    React.createElement("div", { className: ["titleFor2Lines", "singleline-ellipsis", public_1.Css.fonts2.a_fo_h1_1].join(" ") },
                        React.createElement("span", { className: "singleline-ellipsis" }, this.props.title),
                        this.props.iconState && React.createElement(public_4.IconLineupContentTitleComponent, { size: "big", className: "icons", iconState: this.props.iconState })),
                    React.createElement("div", { className: ["metadata", public_1.Css.fonts2.a_fo_b2__].join(" ") }, public_2.Guard.isString(this.props.metaline) ? this.props.metaline : (_b = (_a = this.props).metaline) === null || _b === void 0 ? void 0 : _b.call(_a)),
                    React.createElement("div", { className: ["textFor2Lines", "twolines-ellipsis", public_1.Css.fonts2.a_fo_b1_1].join(" ") }, public_2.Guard.isString(this.props.text) ? this.props.text : (_d = (_c = this.props).text) === null || _d === void 0 ? void 0 : _d.call(_c)));
            }
            else if (this.props.lineNumber == 3) {
                return React.createElement("div", { className: [this.ID, this.props.className].join(" "), style: this.props.style },
                    React.createElement("div", { className: ["titleFor3Lines", "singleline-ellipsis", public_1.Css.fonts2.a_fo_h1_1].join(" ") }, this.props.title),
                    React.createElement("div", { className: ["metadata", public_1.Css.fonts2.a_fo_b2__].join(" ") }, public_2.Guard.isString(this.props.metaline) ? this.props.metaline : (_f = (_e = this.props).metaline) === null || _f === void 0 ? void 0 : _f.call(_e)),
                    React.createElement("div", { className: ["textFor3Lines", "threelines-ellipsis", public_1.Css.fonts2.a_fo_b1_1].join(" ") }, public_2.Guard.isString(this.props.text) ? this.props.text : (_h = (_g = this.props).text) === null || _h === void 0 ? void 0 : _h.call(_g)),
                    React.createElement("div", { className: ["subtext", "singleline-ellipsis", public_1.Css.fonts2.a_fo_b2__].join(" ") }, public_2.Guard.isString(this.props.subtext) ? this.props.subtext : (_k = (_j = this.props).subtext) === null || _k === void 0 ? void 0 : _k.call(_j)));
            }
            else if (this.props.lineNumber == 5) {
                return React.createElement("div", { className: [this.ID, this.props.className].join(" "), style: this.props.style },
                    React.createElement("div", { className: ["titleFor5Lines", "singleline-ellipsis", public_1.Css.fonts2.a_fo_h0].join(" ") }, this.props.title),
                    React.createElement("div", { className: ["textFor5Lines", public_1.Css.fonts2.a_fo_b1_1].join(" ") }, public_2.Guard.isString(this.props.text) ? this.props.text : (_m = (_l = this.props).text) === null || _m === void 0 ? void 0 : _m.call(_l)));
            }
            else {
                return null;
            }
        };
        ParagraphStageMultiLineComponent = __decorate([
            public_3.reactComponent({
                ID: "m-10-mutliline-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        width: 1368
                    })
                        .sub(public_1.selector(".titleFor2Lines")
                        .props({
                        width: 1368,
                        marginBottom: 33,
                        display: "flex"
                    }))
                        .sub(public_1.selector(".titleFor3Lines")
                        .props({
                        width: 1368,
                        marginBottom: 33,
                    }))
                        .sub(public_1.selector(".titleFor5Lines")
                        .props({
                        position: "relative",
                        width: 1368,
                        top: 9,
                        marginBottom: 51
                    }))
                        .sub(public_1.selector(".metadata")
                        .props({
                        marginBottom: 36,
                    }))
                        .sub(public_1.selector(".textFor2Lines")
                        .props({
                        width: 960
                    }))
                        .sub(public_1.selector(".textFor3Lines")
                        .props({
                        width: 960,
                        marginBottom: 15
                    }))
                        .sub(public_1.selector(".textFor5Lines")
                        .props({
                        width: 975,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                        wordWrap: "break-word"
                    }))
                        .sub(public_1.selector(".subtext")
                        .props({
                        width: 960,
                        color: public_1.Css.colors.A_CO_5
                    }))
                        .sub(public_1.selector(".fadable")
                        .props({
                        transition: "opacity " + 400 + "ms ease-in-out"
                    })),
                    public_1.selector("& .icons")
                        .props({
                        flexShrink: 0,
                        marginLeft: 12,
                        marginTop: -18
                    }),
                ]
            })
        ], ParagraphStageMultiLineComponent);
        return ParagraphStageMultiLineComponent;
    }(public_3.ReactBaseComponent));
    exports.ParagraphStageMultiLineComponent = ParagraphStageMultiLineComponent;
});
//# sourceMappingURL=stage_multiline.component.js.map