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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../metadata/iconlineup.contenttitle.component"], function (require, exports, React, public_1, public_2, iconlineup_contenttitle_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVFirstMetaLineComponent = void 0;
    var TVFirstMetaLineComponent = (function (_super) {
        __extends(TVFirstMetaLineComponent, _super);
        function TVFirstMetaLineComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVFirstMetaLineComponent.prototype.render = function () {
            return React.createElement("h3", { className: [this.ID, this.props.className, "header3"].join(" ") + " singleline-ellipsis" },
                React.createElement("span", { className: "title " + this.props.fontClass + " singleline-ellipsis" }, this.props.text),
                React.createElement("span", { className: " " + this.props.fontClass + " whitepre" }, this.props.textaddition),
                React.createElement("span", { className: "amount " + (this.props.fontAmountClass ? this.props.fontAmountClass : "fontGrey") }, (this.props.size ? "(" + this.props.size + ")" : undefined)),
                React.createElement("span", { className: "amount " + (this.props.fontAmountPlusClass ? this.props.fontAmountPlusClass : "fontMagenta") }, (this.props.newSize ? "(+" + this.props.newSize + ")" : undefined)),
                this.props.iconState && React.createElement(iconlineup_contenttitle_component_1.IconLineupContentTitleComponent, { className: "icons", size: "small", iconState: this.props.iconState }));
        };
        TVFirstMetaLineComponent = __decorate([
            public_2.reactComponent({
                ID: "firstmetaline-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        display: "flex"
                    }),
                    public_1.selector("&.header3")
                        .props({
                        padding: 0,
                        textTransform: "none",
                        flexWrap: "nowrap"
                    }),
                    public_1.selector("& .title")
                        .props({
                        flexGrow: 0,
                        flexShrink: 1
                    }),
                    public_1.selector("& .whitepre")
                        .props({
                        whiteSpace: "pre"
                    }),
                    public_1.selector("& .icons")
                        .props({
                        flexShrink: 0,
                        marginTop: 3,
                        marginLeft: 12
                    }),
                    public_1.selector("& .fontMagenta")
                        .props({
                        color: public_1.Css.colors.A_CO_2
                    })
                        .extend(public_1.Css.fonts2.a_fo_b1_1_mixin),
                    public_1.selector("& .fontGrey")
                        .props({
                        color: public_1.Css.colors.A_CO_6
                    })
                        .extend(public_1.Css.fonts2.a_fo_b1_1_mixin),
                    public_1.selector("& .state")
                        .props({
                        WebkitBoxFlex: 0,
                        flexShrink: 0,
                        flexGrow: 1,
                        alignSelf: "center",
                        fontSize: 0,
                        lineHeight: 0,
                        whiteSpace: "nowrap"
                    }),
                    public_1.selector("& .amount:not(:empty)")
                        .props({
                        marginLeft: 12
                    })
                ]
            })
        ], TVFirstMetaLineComponent);
        return TVFirstMetaLineComponent;
    }(public_2.ReactBaseComponent));
    exports.TVFirstMetaLineComponent = TVFirstMetaLineComponent;
});
//# sourceMappingURL=firstmetaline.component.js.map