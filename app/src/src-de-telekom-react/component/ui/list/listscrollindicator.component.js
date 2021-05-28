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
define(["require", "exports", "react", "../../../base/public", "../../molecule/metadata/iconlineup.arrows.component", "src/src-de-telekom-style/public"], function (require, exports, React, public_1, iconlineup_arrows_component_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ListScrollIndicatorComponent = void 0;
    var ListScrollIndicatorComponent = (function (_super) {
        __extends(ListScrollIndicatorComponent, _super);
        function ListScrollIndicatorComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ListScrollIndicatorComponent.prototype.render = function () {
            var maxWindowIndex = this.props.listConfiguration.itemCount;
            var showUp = this.props.listConfiguration.centralIndex ? (this.props.selectionIndex > this.props.listConfiguration.centralIndex) && maxWindowIndex < this.props.totalCount : this.props.selectionIndex > 0;
            var showDown = this.props.listConfiguration.centralIndex ? (this.props.selectionIndex - this.props.listConfiguration.centralIndex + maxWindowIndex < this.props.totalCount) && maxWindowIndex < this.props.totalCount : this.props.selectionIndex < this.props.totalCount;
            var active = true;
            return React.createElement("div", { className: this.ID },
                React.createElement(iconlineup_arrows_component_1.IconLineupArrowsComponent, { iconState: { showDown: showDown, showUp: showUp }, active: active }));
        };
        ListScrollIndicatorComponent = __decorate([
            public_1.reactComponent({
                ID: "list-scroll-indicator-component",
                styles: [
                    public_2.selector("& ")
                        .props({
                        width: "100%",
                        height: "100%"
                    })
                ]
            })
        ], ListScrollIndicatorComponent);
        return ListScrollIndicatorComponent;
    }(public_1.ReactBaseComponent));
    exports.ListScrollIndicatorComponent = ListScrollIndicatorComponent;
});
//# sourceMappingURL=listscrollindicator.component.js.map