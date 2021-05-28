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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "../../public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ParagraphInfoComponent = void 0;
    var ParagraphInfoComponent = (function (_super) {
        __extends(ParagraphInfoComponent, _super);
        function ParagraphInfoComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.height = -1;
            return _this;
        }
        ParagraphInfoComponent.prototype.componentDidMount = function () {
            this.reportSize();
        };
        ParagraphInfoComponent.prototype.componentDidUpdate = function () {
            this.reportSize();
        };
        ParagraphInfoComponent.prototype.reportSize = function () {
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
        ParagraphInfoComponent.prototype.render = function () {
            var _this = this;
            var focusId = this.props.focusId ? this.props.focusId : "info";
            return React.createElement("div", { ref: function (e) { _this.domElement = e; }, className: [this.ID, this.props.className].join(" "), style: this.props.style },
                React.createElement(public_3.Button.UnderlineLabel, { id: focusId, overrides: { left: focusId, right: focusId }, refPoints: { up: 0, down: 0 }, text: this.props.title, className: "title", fontClassName: ["singleline-ellipsis", public_1.Css.fonts2.a_fo_h2__].join(" ") }),
                React.createElement("div", { className: ["text", public_1.Css.fonts2.a_fo_b1_1].join(" ") }, this.props.text));
        };
        ParagraphInfoComponent = __decorate([
            public_2.reactComponent({
                ID: "m-10-10-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        width: 1368
                    })
                        .sub(public_1.selector(".title")
                        .props({
                        maxWidth: 1368,
                        marginBottom: 9
                    }))
                        .sub(public_1.selector(".text")
                        .props({
                        whiteSpace: "pre-wrap",
                        width: 1248,
                        overflow: "hidden",
                        maxHeight: 630
                    }))
                ]
            })
        ], ParagraphInfoComponent);
        return ParagraphInfoComponent;
    }(public_2.ReactBaseComponent));
    exports.ParagraphInfoComponent = ParagraphInfoComponent;
});
//# sourceMappingURL=info.component.js.map