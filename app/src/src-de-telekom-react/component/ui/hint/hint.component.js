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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../button/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HintComponent = void 0;
    var HintComponent = (function (_super) {
        __extends(HintComponent, _super);
        function HintComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HintComponent.prototype.render = function () {
            return React.createElement("div", { className: [this.ID, this.props.className].join(" ") },
                React.createElement("span", { className: ["label", public_1.Css.fonts2.a_fo_b1_2].join(" ") }, this.props.text),
                React.createElement(public_3.Button.IconOnlyButton, __assign({}, this.props, { className: undefined, small: true, autofocus: false })));
        };
        HintComponent.defaultProps = {
            disabled: false,
            id: "hintButton"
        };
        HintComponent = __decorate([
            public_2.reactComponent({
                ID: "o-10-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        display: "flex",
                        flexDirection: "row"
                    }),
                    public_1.selector("& .label")
                        .props({
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 12
                    })
                ]
            })
        ], HintComponent);
        return HintComponent;
    }(public_2.ReactBaseComponent));
    exports.HintComponent = HintComponent;
});
//# sourceMappingURL=hint.component.js.map