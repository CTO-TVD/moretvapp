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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../../../filter/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParagraphHeaderAndTextComponent = void 0;
    var ParagraphHeaderAndTextComponent = (function (_super) {
        __extends(ParagraphHeaderAndTextComponent, _super);
        function ParagraphHeaderAndTextComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.defaultWidth = 1200;
            _this.defaultTitleMarginBottom = 12;
            return _this;
        }
        ParagraphHeaderAndTextComponent.prototype.render = function () {
            return React.createElement("div", { className: [this.ID, this.props.className].join(" "), style: { width: public_1.Css.scale(this.props.width || this.defaultWidth) } },
                React.createElement("div", { style: { marginBottom: public_1.Css.scale(this.props.titleMarginBottom || this.defaultTitleMarginBottom) }, className: ["singleline-ellipsis", this.props.titleClassName || public_1.Css.fonts2.a_fo_h2__].join(" ") }, this.props.title),
                this.renderText());
        };
        ParagraphHeaderAndTextComponent.prototype.renderText = function () {
            return !this.props.text ? React.createElement("div", null) :
                (this.props.textIsHtml ?
                    React.createElement("div", { style: { width: public_1.Css.scale(this.props.width || this.defaultWidth) }, className: "" + public_1.Css.fonts2.a_fo_b1_1, dangerouslySetInnerHTML: { __html: public_3.Filter.join(this, this.props.text) } }) :
                    React.createElement("div", { style: { width: public_1.Css.scale(this.props.width || this.defaultWidth) }, className: "" + public_1.Css.fonts2.a_fo_b1_1 }, this.props.text));
        };
        ParagraphHeaderAndTextComponent = __decorate([
            public_2.reactComponent({
                ID: "m-10-01-component"
            })
        ], ParagraphHeaderAndTextComponent);
        return ParagraphHeaderAndTextComponent;
    }(public_2.ReactBaseComponent));
    exports.ParagraphHeaderAndTextComponent = ParagraphHeaderAndTextComponent;
});
//# sourceMappingURL=headerandtext.component.js.map