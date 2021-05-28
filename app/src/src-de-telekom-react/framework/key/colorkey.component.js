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
define(["require", "exports", "react", "../../base/public", "../navigation/public"], function (require, exports, React, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColorkeyComponent = void 0;
    var ColorkeyComponent = (function (_super) {
        __extends(ColorkeyComponent, _super);
        function ColorkeyComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ColorkeyComponent_1 = ColorkeyComponent;
        ColorkeyComponent.prototype.callColorKey = function (color) {
            if (ColorkeyComponent_1.cbColorKeyData) {
                if (this.props.onColorKey) {
                    this.props.onColorKey();
                }
                return ColorkeyComponent_1.cbColorKeyData(this, color);
            }
            return false;
        };
        ColorkeyComponent.prototype.render = function () {
            var _this = this;
            return React.createElement(React.Fragment, null,
                React.createElement(public_2.NavigationKey, { keyFilter: "GREEN_KEY", onKey: function () { return _this.callColorKey("green"); } }),
                React.createElement(public_2.NavigationKey, { keyFilter: "BLUE_KEY", onKey: function () { return _this.callColorKey("blue"); } }),
                React.createElement(public_2.NavigationKey, { keyFilter: "YELLOW_KEY", onKey: function () { return _this.callColorKey("yellow"); } }));
        };
        var ColorkeyComponent_1;
        ColorkeyComponent = ColorkeyComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "colorkey-component"
            })
        ], ColorkeyComponent);
        return ColorkeyComponent;
    }(public_1.ReactBaseComponent));
    exports.ColorkeyComponent = ColorkeyComponent;
});
//# sourceMappingURL=colorkey.component.js.map