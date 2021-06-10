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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public"], function (require, exports, React, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mask = void 0;
    var Mask = (function (_super) {
        __extends(Mask, _super);
        function Mask() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Mask.prototype.render = function () {
            var result = React.createElement(React.Fragment, null);
            switch (this.props.type) {
                case "stage":
                    result = React.createElement("div", { className: [this.ID, this.props.className].join(" "), style: this.props.style },
                        React.createElement("div", { className: "verticalmask_stage_A" },
                            React.createElement("div", { className: "verticalmask_stage_B" },
                                React.createElement("div", { className: "horizontalmask_stage" }, this.props.children))));
                    break;
                case "specialLane":
                    result = React.createElement("div", { className: [this.ID, this.props.className].join(" "), style: this.props.style }, this.props.children);
                    break;
                case "miniPreview":
                    result = React.createElement("div", { className: [this.ID, this.props.className].join(" "), style: this.props.style },
                        React.createElement("div", { className: "verticalmask" },
                            React.createElement("div", { className: "horizontalmask" }, this.props.children)));
            }
            return result;
        };
        Mask = __decorate([
            public_2.reactComponent({
                ID: "image-area-mask",
                styles: [
                    public_1.selector("& .verticalmask, & .horizontalmask, & .horizontalmask_stage, & .verticalmask_stage_A, & .verticalmask_stage_B")
                        .props({
                        width: "100%",
                        height: "100%"
                    }),
                    public_1.selector("& .verticalmask")
                        .props({
                        WebkitMaskBoxImage: "linear-gradient(to bottom,  #000 0px, #000 16%, rgba(0, 0, 0, 0) 85%)"
                    }),
                    public_1.selector("& .horizontalmask")
                        .props({
                        WebkitMaskBoxImage: "linear-gradient(to left, #000 0px, rgba(0, 0, 0, 0) 88%, rgba(0, 0, 0, 0))"
                    }),
                    public_1.selector("& .horizontalmask_stage")
                        .props({
                        WebkitMaskBoxImage: "linear-gradient(-69deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 55%)"
                    }),
                    public_1.selector("& .verticalmask_stage_A")
                        .props({
                        WebkitMaskBoxImage: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,1) 35%)"
                    }),
                    public_1.selector("& .verticalmask_stage_B")
                        .props({
                        WebkitMaskBoxImage: "linear-gradient(to top, rgba(0,0,0,0.25) 0%, rgba(0,0,0,1) 35%)"
                    })
                ]
            })
        ], Mask);
        return Mask;
    }(public_2.ReactBaseComponent));
    exports.Mask = Mask;
});
//# sourceMappingURL=mask.component.js.map