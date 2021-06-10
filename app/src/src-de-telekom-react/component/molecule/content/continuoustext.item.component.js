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
define(["require", "exports", "react", "../../../base/public", "src/src-de-telekom/public", "src/src-de-telekom-style/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContinuousTextItemComponent = void 0;
    var ContinuousTextItemComponent = (function (_super) {
        __extends(ContinuousTextItemComponent, _super);
        function ContinuousTextItemComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.element = null;
            return _this;
        }
        ContinuousTextItemComponent.prototype.shouldComponentUpdate = function (nextProps) {
            if (nextProps.item !== this.props.item
                || (this.props.item && !public_2.Guard.isString(this.props.item.text))) {
                return true;
            }
            return false;
        };
        ContinuousTextItemComponent.prototype.componentDidMount = function () {
            if (this.props.onHeight && this.element) {
                this.props.onHeight(this.element.offsetHeight);
            }
        };
        ContinuousTextItemComponent.prototype.render = function () {
            var _this = this;
            if (public_2.Guard.isString(this.props.item.text)) {
                return React.createElement("div", { className: this.ID, "data-id": this.props.item.id, ref: function (e) { return _this.element = e; }, dangerouslySetInnerHTML: { __html: this.props.item.text } });
            }
            else {
                return React.createElement("div", { className: this.ID, "data-id": this.props.item.id, ref: function (e) { return _this.element = e; } }, this.props.item.text());
            }
        };
        ContinuousTextItemComponent = __decorate([
            public_1.reactComponent({
                ID: "continuous-text-item-component",
                styles: [
                    public_3.selector("&")
                        .props({
                        display: "flex",
                        flexDirection: "column"
                    })
                ]
            })
        ], ContinuousTextItemComponent);
        return ContinuousTextItemComponent;
    }(public_1.ReactBaseComponent));
    exports.ContinuousTextItemComponent = ContinuousTextItemComponent;
});
//# sourceMappingURL=continuoustext.item.component.js.map