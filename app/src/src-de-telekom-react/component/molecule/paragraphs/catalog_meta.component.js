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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "src/src-de-telekom/public", "../metadata/iconlineup.contenttitle.component"], function (require, exports, React, public_1, public_2, public_3, iconlineup_contenttitle_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParagraphCatalogMetaComponent = void 0;
    var ParagraphCatalogMetaComponent = (function (_super) {
        __extends(ParagraphCatalogMetaComponent, _super);
        function ParagraphCatalogMetaComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ParagraphCatalogMetaComponent.prototype.render = function () {
            return React.createElement("div", { className: [this.ID, this.props.className].join(" "), style: this.props.style },
                React.createElement("div", { className: ["title", public_1.Css.fonts2.a_fo_h1_1].join(" ") },
                    React.createElement("span", { className: "singleline-ellipsis" }, this.props.title),
                    this.props.iconState && React.createElement(iconlineup_contenttitle_component_1.IconLineupContentTitleComponent, { size: "big", className: "icons", iconState: this.props.iconState })),
                React.createElement("div", { className: ["metadata", public_1.Css.fonts2.a_fo_b2__].join(" ") },
                    this.props.metaline && public_3.Guard.isString(this.props.metaline) &&
                        this.props.metaline,
                    this.props.metaline && !public_3.Guard.isString(this.props.metaline) &&
                        this.props.metaline()),
                React.createElement("div", { className: ["text", "twolines-ellipsis", public_1.Css.fonts2.a_fo_b1_1].join(" ") }, this.props.text));
        };
        ParagraphCatalogMetaComponent = __decorate([
            public_2.reactComponent({
                ID: "m-10-02-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        width: 1368,
                        height: 285
                    })
                        .sub(public_1.selector(".title")
                        .props({
                        width: 1368,
                        left: 0,
                        marginBottom: 33,
                        display: "flex"
                    }))
                        .sub(public_1.selector(".metadata")
                        .props({
                        marginBottom: 36
                    }))
                        .sub(public_1.selector(".text")
                        .props({
                        width: 960
                    })),
                    public_1.selector("& .icons")
                        .props({
                        flexShrink: 0,
                        marginLeft: 12,
                        marginTop: -18
                    })
                ]
            })
        ], ParagraphCatalogMetaComponent);
        return ParagraphCatalogMetaComponent;
    }(public_2.ReactBaseComponent));
    exports.ParagraphCatalogMetaComponent = ParagraphCatalogMetaComponent;
});
//# sourceMappingURL=catalog_meta.component.js.map