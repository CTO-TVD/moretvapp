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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../base/public", "../../filter/public", "./background.service"], function (require, exports, React, public_1, public_2, public_3, background_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BackgroundComponent = void 0;
    var BackgroundComponent = (function (_super) {
        __extends(BackgroundComponent, _super);
        function BackgroundComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = {};
            _this.backgroundService = background_service_1.BackgroundService.getInstance();
            if (_this.backgroundService) {
                _this.registerClosable = _this.backgroundService.registerComponent(_this.props.backgroundId, _this);
            }
            return _this;
        }
        BackgroundComponent.prototype.componentWillUnmount = function () {
            if (this.registerClosable) {
                this.registerClosable();
            }
        };
        BackgroundComponent.prototype.onDataChanged = function () {
            this.processData();
        };
        BackgroundComponent.prototype.processData = function () {
            if (this.backgroundService) {
                this.setState({ data: this.backgroundService.get(this.props.backgroundId) });
            }
        };
        BackgroundComponent.prototype.render = function () {
            if (this.state.data) {
                var data = this.state.data;
                var imgSource = data.imageUrl ? data.imageUrl : public_1.Css.images.inlineTransparentPixel;
                return (React.createElement("div", { className: [this.ID, "background", data.backgroundClass].join(" ") },
                    React.createElement("img", { src: public_3.Filter.scale(imgSource, { ar: "ignore", x: 1920, y: 1080, disable: data.disableScaling, out: "jpeg" }) }),
                    React.createElement("div", { className: ["icon", data.iconClass].join(" "), dangerouslySetInnerHTML: { __html: data.htmlContent || "" } })));
            }
            return null;
        };
        BackgroundComponent = __decorate([
            public_2.reactComponent({
                ID: "background-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        height: public_1.Css.dimensions.screenHeight,
                        position: "absolute",
                        width: public_1.Css.dimensions.screenWidth
                    }),
                    public_1.selector("& > div.background")
                        .props({
                        height: "inherit",
                        position: "absolute",
                        width: "inherit"
                    }),
                    public_1.selector("& img")
                        .props({
                        height: "inherit",
                        position: "absolute",
                        width: "inherit"
                    }),
                    public_1.selector("& div.icon")
                        .props({
                        left: "50%",
                        position: "absolute",
                        top: "50%",
                        transform: "translate(-50%, -50%)"
                    })
                ]
            })
        ], BackgroundComponent);
        return BackgroundComponent;
    }(public_2.ReactBaseComponent));
    exports.BackgroundComponent = BackgroundComponent;
});
//# sourceMappingURL=background.component.js.map