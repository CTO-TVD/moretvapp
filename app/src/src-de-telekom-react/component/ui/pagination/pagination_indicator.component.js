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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public"], function (require, exports, React, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PaginationIndicator = void 0;
    var PaginationIndicator = (function (_super) {
        __extends(PaginationIndicator, _super);
        function PaginationIndicator() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.diameter = public_1.Css.scale(24);
            _this.radius = Math.round(_this.diameter / 2);
            _this.lineWidth = public_1.Css.scale(3);
            _this.radius2 = _this.radius - _this.lineWidth / 2;
            _this.svgSize = _this.diameter + 2 * _this.lineWidth;
            _this.centerXY = _this.radius + _this.lineWidth;
            _this.width = (_this.svgSize + public_1.Css.scale(12)) * _this.props.dots.length;
            _this.margin = public_1.Css.scale(12);
            return _this;
        }
        PaginationIndicator.prototype.render = function () {
            var _this = this;
            var classNames = [this.ID];
            return React.createElement("div", { className: classNames.join(" ") },
                React.createElement("div", { className: "svg-container" },
                    React.createElement("svg", { height: this.svgSize, width: this.width }, this.props.dots.map(function (it, i) { return _this.props.dots[i]
                        ? React.createElement("circle", { key: i, cx: _this.centerXY + (_this.diameter + _this.margin) * i, cy: _this.centerXY, r: _this.radius, fill: "rgba(252, 252, 252, 0.30)" })
                        : React.createElement("circle", { key: i, cx: _this.centerXY + (_this.diameter + _this.margin) * i, cy: _this.centerXY, r: _this.radius2, stroke: "rgba(252, 252, 252, 0.15)", strokeWidth: _this.lineWidth, fill: "transparent" }); }))));
        };
        PaginationIndicator = __decorate([
            public_2.reactComponent({
                ID: "pagination-indicator-component"
            })
        ], PaginationIndicator);
        return PaginationIndicator;
    }(public_2.ReactBaseComponent));
    exports.PaginationIndicator = PaginationIndicator;
});
//# sourceMappingURL=pagination_indicator.component.js.map