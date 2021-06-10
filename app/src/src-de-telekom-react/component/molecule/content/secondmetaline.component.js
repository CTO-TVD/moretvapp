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
    exports.TVSecondMetaLineComponent = void 0;
    var TVSecondMetaLineComponent = (function (_super) {
        __extends(TVSecondMetaLineComponent, _super);
        function TVSecondMetaLineComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVSecondMetaLineComponent.prototype.render = function () {
            return React.createElement("div", { className: "" + [this.ID, this.props.className, "secondmetaline", public_1.Css.fonts2.a_fo_b2_2].join(" ") },
                this.props.qualityicon && React.createElement("span", { className: "quality-icon " + this.props.qualityicon }),
                this.props.showInstantRestart && React.createElement("span", { className: "instantrestart " + public_1.Css.sprites.A_IC_027_2_30x30 }),
                React.createElement("span", { className: "text-line" }, this.props.text),
                this.props.qualityiconright && React.createElement("span", { className: "quality-icon-right " + this.props.qualityiconright }));
        };
        TVSecondMetaLineComponent = __decorate([
            public_2.reactComponent({
                ID: "secondmetaline-component",
                styles: [
                    public_1.selector("&.secondmetaline")
                        .props({
                        marginTop: 10,
                        display: "-webkit-flex"
                    })
                        .extend(public_1.Css.mixins.singlelineEllipsis),
                    public_1.selector("& .instantrestart")
                        .props({
                        marginRight: 8
                    }),
                    public_1.selector("& .text-line")
                        .props({
                        display: "inline-block"
                    })
                        .extend(public_1.Css.mixins.singlelineEllipsis),
                    public_1.selector("& .quality-icon")
                        .props({
                        marginRight: 18,
                        marginTop: -2,
                        minWidth: 36,
                        display: "inline-block"
                    }),
                    public_1.selector("& .quality-icon-right")
                        .props({
                        marginLeft: 18,
                        marginTop: -2,
                        minWidth: 36,
                        display: "inline-block"
                    })
                ]
            })
        ], TVSecondMetaLineComponent);
        return TVSecondMetaLineComponent;
    }(public_2.ReactBaseComponent));
    exports.TVSecondMetaLineComponent = TVSecondMetaLineComponent;
});
//# sourceMappingURL=secondmetaline.component.js.map