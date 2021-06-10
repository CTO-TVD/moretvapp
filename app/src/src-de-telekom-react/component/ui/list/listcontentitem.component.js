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
define(["require", "exports", "react", "./list.interfaces", "../../../framework/public", "../../../base/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public"], function (require, exports, React, list_interfaces_1, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ListContentItemComponent = void 0;
    var ListContentItemComponent = (function (_super) {
        __extends(ListContentItemComponent, _super);
        function ListContentItemComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.onFocusInTree = function (e, type) {
                if (_this.props.onItemFocused && _this.props && _this.props.viewItem) {
                    _this.props.onItemFocused(_this.props.viewItem);
                }
            };
            return _this;
        }
        ListContentItemComponent.prototype.shouldComponentUpdate = function (nextProps) {
            if (nextProps.viewItem !== this.props.viewItem) {
                return true;
            }
            return false;
        };
        ListContentItemComponent.prototype.render = function () {
            if (this.props.viewItem) {
                var classNames = [this.ID, "listItem"];
                var style = public_3.declaration()
                    .props({
                    transform: "translate" + ((this.props.orientation === list_interfaces_1.ListOrientation.Vertical) ? "Y" : "X") + "(" + this.props.viewItem.position + "px)"
                });
                return React.createElement("div", { "data-key": this.props.viewItem.id, className: classNames.join(" "), style: style.toStyle() },
                    React.createElement(public_1.NavigationWatcher, { onFocusInTree: this.onFocusInTree }, this.props.itemRenderer(this.props.viewItem, (this.props.navigationIdPrefix ? this.props.navigationIdPrefix : "") + this.props.viewItem.id)));
            }
            return null;
        };
        ListContentItemComponent = __decorate([
            public_2.reactComponent({
                ID: "list-content-item-component",
                styles: [
                    public_3.selector("&.listItem")
                        .props({
                        position: "absolute",
                        whiteSpace: "nowrap",
                        willChange: "transform"
                    })
                ]
            }),
            public_4.logTag()
        ], ListContentItemComponent);
        return ListContentItemComponent;
    }(public_2.ReactBaseComponent));
    exports.ListContentItemComponent = ListContentItemComponent;
});
//# sourceMappingURL=listcontentitem.component.js.map