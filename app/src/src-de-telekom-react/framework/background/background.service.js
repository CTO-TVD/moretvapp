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
define(["require", "exports", "src/src-de-telekom/public", "../../base/public", "../navigation/public"], function (require, exports, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BackgroundService = void 0;
    var BackgroundService = (function (_super) {
        __extends(BackgroundService, _super);
        function BackgroundService() {
            var _this = _super.call(this) || this;
            _this.layerKey = "backgroundLayer";
            _this.data = {};
            _this.components = {};
            _this.layerService = public_3.TVLayerManagerService.getInstance();
            return _this;
        }
        BackgroundService.prototype.clear = function (id) {
            var _a;
            this.data[id] = undefined;
            if (this.components[id]) {
                (_a = this.components[id]) === null || _a === void 0 ? void 0 : _a.onDataChanged();
            }
            var hideLayer = true;
            for (var key in this.data) {
                if (this.data.hasOwnProperty(key)) {
                    if (this.data[key]) {
                        hideLayer = false;
                        break;
                    }
                }
            }
            if (hideLayer) {
                this.layerService.hide(this.layerKey);
            }
        };
        BackgroundService.prototype.clearAll = function () {
            for (var key in this.data) {
                if (this.data.hasOwnProperty(key)) {
                    this.clear(key);
                }
            }
        };
        BackgroundService.prototype.get = function (id) {
            return this.data[id];
        };
        BackgroundService.prototype.registerComponent = function (id, component) {
            var _this = this;
            this.components[id] = component;
            return function () {
                _this.components[id] = undefined;
            };
        };
        BackgroundService.prototype.setCssClass = function (id, iconClass, backgroundClass) {
            this.data[id] = { backgroundClass: backgroundClass, iconClass: iconClass };
            this.openLayer(id);
        };
        BackgroundService.prototype.setHtmlContent = function (id, htmlContent, backgroundClass) {
            this.data[id] = { backgroundClass: backgroundClass, htmlContent: htmlContent };
            this.openLayer(id);
        };
        BackgroundService.prototype.setUrl = function (id, imageUrl, backgroundClass, disableScaling) {
            if (disableScaling === void 0) { disableScaling = false; }
            this.data[id] = { backgroundClass: backgroundClass, imageUrl: imageUrl, disableScaling: disableScaling };
            this.openLayer(id);
        };
        BackgroundService.prototype.openLayer = function (id) {
            var _a;
            this.layerService.show(this.layerKey);
            if (this.components[id]) {
                (_a = this.components[id]) === null || _a === void 0 ? void 0 : _a.onDataChanged();
            }
        };
        BackgroundService.COMPONENT_PAGE_BACKGROUND = "pageBackgroundComponent";
        BackgroundService.COMPONENT_PLAYER_MASKING = "playerMaskingComponent";
        BackgroundService = __decorate([
            public_1.logTag()
        ], BackgroundService);
        return BackgroundService;
    }(public_2.ReactBaseService));
    exports.BackgroundService = BackgroundService;
});
//# sourceMappingURL=background.service.js.map