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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom-react/public"], function (require, exports, React, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVCheckbox_deprecated_ = void 0;
    var TVCheckboxElement = (function (_super) {
        __extends(TVCheckboxElement, _super);
        function TVCheckboxElement() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVCheckboxElement.prototype.render = function () {
            var classNames = [this.ID, "checkbox"];
            var squareClassName = this.props.isChecked ? public_1.Css.sprites.A_IC_009_1_30x30 : "";
            var classNamesText = [public_1.Css.fonts2.a_fo_b1_1, "text"];
            if (this.props.icon) {
                classNamesText.push("withIcon");
            }
            if (this.props.linesOfText !== undefined) {
                switch (this.props.linesOfText) {
                    case 1:
                        classNamesText.push("singleline-ellipsis");
                        break;
                    case 2:
                        classNamesText.push("twolines-ellipsis");
                        classNames.push("twolines");
                        break;
                }
            }
            return React.createElement("div", { className: classNames.join(" ") },
                React.createElement("div", { className: "square" },
                    React.createElement("div", { className: squareClassName })),
                this.props.icon && React.createElement("div", { className: this.props.icon }),
                React.createElement("div", { className: classNamesText.join(" ") }, public_2.Filter.join(this, this.props.text)));
        };
        TVCheckboxElement.defaultProps = {
            text: "",
            isChecked: false
        };
        TVCheckboxElement = __decorate([
            public_2.reactComponent({
                ID: "tv-checkbox-component",
                styles: [
                    public_1.selector("&.checkbox")
                        .props({
                        display: "-webkit-flex",
                        height: 72,
                        paddingLeft: 28,
                        paddingRight: 24,
                        paddingTop: 15,
                        paddingBottom: 15
                    })
                        .sub(public_1.selector("&.twolines")
                        .props({
                        height: 129
                    })),
                    public_1.selector("&.checkbox .square")
                        .props({
                        border: "2px solid rgba(252, 252, 252, 0.3)",
                        height: 42,
                        width: 42,
                        minWidth: 42,
                        minHeight: 42,
                        lineHeight: "1",
                        marginRight: 20,
                        padding: 3,
                        borderRadius: 6
                    }),
                    public_1.selector("&.checkbox .text.withIcon")
                        .props({
                        paddingLeft: 18
                    }),
                    public_1.selector(".dttv-focused &.checkbox")
                        .props({
                        backgroundColor: "rgba(252, 252, 252, 0.3)"
                    })
                ]
            })
        ], TVCheckboxElement);
        return TVCheckboxElement;
    }(public_2.ReactBaseComponent));
    exports.TVCheckbox_deprecated_ = public_2.makeNavigationElement(TVCheckboxElement);
});
//# sourceMappingURL=checkbox.component.js.map