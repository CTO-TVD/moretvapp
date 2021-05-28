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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public"], function (require, exports, React, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVContentTitleComponent = void 0;
    var TVContentTitleComponent = (function (_super) {
        __extends(TVContentTitleComponent, _super);
        function TVContentTitleComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVContentTitleComponent.prototype.render = function () {
            return React.createElement("div", { className: "" + this.ID },
                React.createElement("span", { className: public_2.Css.fonts2.a_fo_h6 + " singleline-ellipsis" }, public_1.Filter.join(this, this.props.title)),
                React.createElement(public_1.IconLineupContentTitleComponent, { size: "small", iconState: this.props.iconState }));
        };
        TVContentTitleComponent = __decorate([
            public_1.reactComponent({
                ID: "content-title-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        display: "flex"
                    }),
                    public_2.selector("& ." + public_1.IconLineupContentTitleComponent.ID)
                        .props({
                        marginLeft: 24,
                        marginTop: 9,
                        flexShrink: 0
                    })
                ]
            })
        ], TVContentTitleComponent);
        return TVContentTitleComponent;
    }(public_1.ReactBaseComponent));
    exports.TVContentTitleComponent = TVContentTitleComponent;
});
//# sourceMappingURL=contenttitle.component.js.map