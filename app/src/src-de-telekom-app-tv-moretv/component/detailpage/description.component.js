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
    exports.MtvDetailDescriptionComponent = void 0;
    var MtvDetailDescriptionComponent = (function (_super) {
        __extends(MtvDetailDescriptionComponent, _super);
        function MtvDetailDescriptionComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MtvDetailDescriptionComponent.prototype.render = function () {
            var textItems = [];
            if (this.props.data) {
                textItems.push({
                    id: "$$continuousTextItem",
                    text: this.props.data.Description || ""
                });
            }
            return React.createElement("div", { className: [this.ID].join(" ") },
                React.createElement(public_1.TextBlockComponent, { fontClass: "" + public_2.Css.fonts2.a_fo_b1_1, id: "descriptionscroll", items: textItems, step: 48, pageFactor: 15, speedFactor: 4, showFocusBorder: true }));
        };
        MtvDetailDescriptionComponent.COMPONENT_WIDTH = 712;
        MtvDetailDescriptionComponent = __decorate([
            public_1.reactComponent({
                ID: "mtv-description-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        width: "-webkit-fill-available",
                        height: "inherit"
                    })
                        .sub(public_2.selector(".borderpadding")
                        .props({
                        paddingBottom: 18,
                        paddingLeft: 18,
                        paddingRight: 18
                    }))
                ]
            })
        ], MtvDetailDescriptionComponent);
        return MtvDetailDescriptionComponent;
    }(public_1.ReactBaseComponent));
    exports.MtvDetailDescriptionComponent = MtvDetailDescriptionComponent;
});
//# sourceMappingURL=description.component.js.map