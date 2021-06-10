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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public"], function (require, exports, React, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParagraphCastHeaderComponent = void 0;
    var ParagraphCastHeaderComponent = (function (_super) {
        __extends(ParagraphCastHeaderComponent, _super);
        function ParagraphCastHeaderComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ParagraphCastHeaderComponent.prototype.render = function () {
            return React.createElement("div", { className: [this.ID, this.props.className].join(" ") },
                React.createElement("div", { className: ["title", "singleline-ellipsis", public_1.Css.fonts2.a_fo_h1_1].join(" ") }, this.props.title),
                React.createElement("div", { className: ["text", "singleline-ellipsis", public_1.Css.fonts2.a_fo_b1_1].join(" ") }, this.props.text));
        };
        ParagraphCastHeaderComponent = __decorate([
            public_2.reactComponent({
                ID: "m-10-08-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        width: 1368
                    })
                        .sub(public_1.selector(".title")
                        .props({
                        width: 1368,
                        marginBottom: 25
                    }))
                        .sub(public_1.selector(".text")
                        .props({
                        width: 960
                    }))
                ]
            })
        ], ParagraphCastHeaderComponent);
        return ParagraphCastHeaderComponent;
    }(public_2.ReactBaseComponent));
    exports.ParagraphCastHeaderComponent = ParagraphCastHeaderComponent;
});
//# sourceMappingURL=cast_header.component.js.map