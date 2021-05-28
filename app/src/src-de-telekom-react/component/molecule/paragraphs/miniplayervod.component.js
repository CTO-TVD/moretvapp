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
    exports.ParagraphMiniPlayerVODComponent = void 0;
    var ParagraphMiniPlayerVODComponent = (function (_super) {
        __extends(ParagraphMiniPlayerVODComponent, _super);
        function ParagraphMiniPlayerVODComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ParagraphMiniPlayerVODComponent.prototype.render = function () {
            return React.createElement("div", { className: [this.ID, this.props.className].join(" "), style: this.props.style }, this.props.isVisible && React.createElement(React.Fragment, null,
                React.createElement("div", { className: [this.props.isShortTitle ? "titleShort" : "title", "singleline-ellipsis", public_1.Css.fonts2.a_fo_h2__].join(" ") }, this.props.title),
                React.createElement("div", { className: ["metadata", public_1.Css.fonts2.a_fo_b2__].join(" ") },
                    this.props.metaline && public_3.Guard.isString(this.props.metaline) &&
                        this.props.metaline,
                    this.props.metaline && !public_3.Guard.isString(this.props.metaline) &&
                        this.props.metaline())));
        };
        ParagraphMiniPlayerVODComponent = __decorate([
            public_2.reactComponent({
                ID: "m-23-02-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        width: 1368
                    })
                        .sub(public_1.selector(".topLine")
                        .props({
                        display: "flex",
                        height: 48,
                        marginBottom: 43,
                    }))
                        .sub(public_1.selector(".title")
                        .props({
                        width: 1776,
                        marginBottom: 16,
                    }))
                        .sub(public_1.selector(".titleShort")
                        .props({
                        width: 1242,
                        marginBottom: 16,
                    }))
                ]
            })
        ], ParagraphMiniPlayerVODComponent);
        return ParagraphMiniPlayerVODComponent;
    }(public_2.ReactBaseComponent));
    exports.ParagraphMiniPlayerVODComponent = ParagraphMiniPlayerVODComponent;
});
//# sourceMappingURL=miniplayervod.component.js.map