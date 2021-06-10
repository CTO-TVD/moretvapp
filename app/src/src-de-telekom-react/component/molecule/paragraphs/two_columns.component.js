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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../../public", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParagraphTwoColumnComponent = void 0;
    var ParagraphTwoColumnComponent = (function (_super) {
        __extends(ParagraphTwoColumnComponent, _super);
        function ParagraphTwoColumnComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.height = -1;
            return _this;
        }
        ParagraphTwoColumnComponent.prototype.componentDidMount = function () {
            this.reportSize();
        };
        ParagraphTwoColumnComponent.prototype.componentDidUpdate = function () {
            this.reportSize();
        };
        ParagraphTwoColumnComponent.prototype.reportSize = function () {
            if (this.props.onSizeChange) {
                if (this.domElement) {
                    var rect = this.domElement.getBoundingClientRect();
                    var newHeight = rect ? rect.height : 0;
                    if (newHeight != this.height) {
                        this.height = newHeight;
                        this.props.onSizeChange(newHeight);
                    }
                }
            }
        };
        ParagraphTwoColumnComponent.prototype.render = function () {
            var _this = this;
            var _a;
            var focusId = this.props.focusId ? this.props.focusId : "details";
            return React.createElement("div", { ref: function (e) { _this.domElement = e; }, className: [this.ID, this.props.className].join(" "), style: this.props.style },
                React.createElement(public_3.Button.UnderlineLabel, { id: focusId, overrides: { left: focusId, right: focusId }, text: this.props.title, className: "title", fontClassName: ["singleline-ellipsis", public_1.Css.fonts2.a_fo_h2__].join(" ") }), (_a = this.props.items) === null || _a === void 0 ? void 0 :
                _a.slice(0, 9).map(function (it, x) {
                    return React.createElement("div", { className: "row", key: x },
                        React.createElement("div", { className: ["key", "singleline-ellipsis", public_1.Css.fonts2.a_fo_b2__].join(" ") }, it.key),
                        React.createElement("div", { className: ["value", "singleline-ellipsis", public_1.Css.fonts2.a_fo_b2__].join(" ") },
                            it.value && public_4.Guard.isString(it.value) &&
                                it.value,
                            it.value && !public_4.Guard.isString(it.value) &&
                                it.value()));
                }));
        };
        ParagraphTwoColumnComponent = __decorate([
            public_2.reactComponent({
                ID: "m-10-03-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        width: public_1.Css.dimensions.safeareaWidth_UI20
                    })
                        .sub(public_1.selector(".title")
                        .props({
                        maxWidth: 1368,
                        top: 0,
                        left: 0,
                        marginBottom: 14
                    }))
                        .sub(public_1.selector(".row")
                        .props({
                        height: 40,
                        width: 360 + 66 + 822 + 3
                    })
                        .sub(public_1.selector(".key")
                        .props({
                        display: "inline-block",
                        width: 360,
                        marginRight: 66
                    }))
                        .sub(public_1.selector(".value")
                        .props({
                        display: "inline-block",
                        width: 822
                    })))
                ]
            })
        ], ParagraphTwoColumnComponent);
        return ParagraphTwoColumnComponent;
    }(public_2.ReactBaseComponent));
    exports.ParagraphTwoColumnComponent = ParagraphTwoColumnComponent;
});
//# sourceMappingURL=two_columns.component.js.map