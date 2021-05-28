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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public"], function (require, exports, React, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvPagingIndicatorComponent = void 0;
    var MtvPagingIndicatorComponent = (function (_super) {
        __extends(MtvPagingIndicatorComponent, _super);
        function MtvPagingIndicatorComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            var newValues = [];
            if (_this.props.total) {
                for (var i = 0; i < _this.props.total; i++) {
                    newValues.push(i);
                }
            }
            _this.state = { values: newValues };
            return _this;
        }
        MtvPagingIndicatorComponent.prototype.render = function () {
            var _this = this;
            return React.createElement("div", { className: this.ID }, (this.state.values && this.state.values.length > 0) &&
                React.createElement("ul", { className: "hn-ul" }, this.state.values.map(function (v) {
                    return React.createElement("li", { className: "hn-li " + (v == _this.props.index && "current") });
                })));
        };
        MtvPagingIndicatorComponent = __decorate([
            public_1.reactComponent({
                ID: "m-na-2-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        position: "absolute",
                        textAlign: "center",
                        width: "inherit",
                        justifyContent: "center",
                        top: 912
                    })
                        .sub(public_2.selector(".hn-ul")
                        .props({
                        display: "inline-block",
                        margin: 0,
                        padding: 0,
                        listStyle: "none"
                    }))
                        .sub(public_2.selector(".hn-ul .hn-li")
                        .props({
                        float: "left",
                        height: 12,
                        width: 12,
                        backgroundColor: public_2.Css.colors.A_CO_1_30,
                        borderRadius: "50%"
                    }))
                        .sub(public_2.selector(".hn-ul .hn-li.current")
                        .props({
                        backgroundColor: public_2.Css.colors.A_CO_1
                    }))
                        .sub(public_2.selector(".hn-ul .hn-li + .hn-li")
                        .props({
                        marginLeft: 12
                    }))
                ]
            })
        ], MtvPagingIndicatorComponent);
        return MtvPagingIndicatorComponent;
    }(public_1.ReactBaseComponent));
    exports.MtvPagingIndicatorComponent = MtvPagingIndicatorComponent;
});
//# sourceMappingURL=m_na_2.component.js.map