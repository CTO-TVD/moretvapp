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
define(["require", "exports", "react", "../../../base/public", "./listcontentitem.component", "src/src-de-telekom/public"], function (require, exports, React, public_1, listcontentitem_component_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ListContentComponent = void 0;
    var ListContentComponent = (function (_super) {
        __extends(ListContentComponent, _super);
        function ListContentComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ListContentComponent.prototype.shouldComponentUpdate = function (nextProps) {
            if (nextProps.viewItems !== this.props.viewItems) {
                return true;
            }
            return false;
        };
        ListContentComponent.prototype.render = function () {
            var _this = this;
            var _a;
            return React.createElement(React.Fragment, null, (_a = this.props.viewItems) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) { return a.id - b.id; }).map(function (item) { return React.createElement(listcontentitem_component_1.ListContentItemComponent, { itemRenderer: _this.props.itemRenderer, key: item.id, onItemFocused: _this.props.onItemFocused, orientation: _this.props.orientation, navigationIdPrefix: _this.props.navigationIdPrefix, viewItem: item }); }));
        };
        ListContentComponent = __decorate([
            public_1.reactComponent({
                ID: "list-content-component"
            }),
            public_2.logTag()
        ], ListContentComponent);
        return ListContentComponent;
    }(public_1.ReactBaseComponent));
    exports.ListContentComponent = ListContentComponent;
});
//# sourceMappingURL=listcontent.component.js.map