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
define(["require", "exports", "src/src-de-telekom/public", "../../base/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVLayerManagerService = void 0;
    var TVLayerManagerService = (function (_super) {
        __extends(TVLayerManagerService, _super);
        function TVLayerManagerService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.minPriority = -100000;
            _this.layerComponents = [];
            return _this;
        }
        TVLayerManagerService_1 = TVLayerManagerService;
        TVLayerManagerService.prototype.show = function (activationKey, layerProps) {
            var component = this.layerComponents.filter(function (item) { return item.activationKey === activationKey; })[0];
            if (component)
                component.show(false, layerProps);
        };
        TVLayerManagerService.prototype.isVisible = function (activationKey, layerProps) {
            var component = this.layerComponents.filter(function (item) { return item.activationKey === activationKey; })[0];
            return component ? component.isVisible : false;
        };
        TVLayerManagerService.prototype.hide = function (activationKey) {
            var component = this.layerComponents.filter(function (item) { return item.activationKey === activationKey; })[0];
            if (component)
                component.hide();
        };
        TVLayerManagerService.prototype.registerLayer = function (layerController) {
            var _this = this;
            var existing = this.layerComponents.filter(function (controller) { return controller.activationKey == layerController.activationKey; });
            if (existing.length == 0) {
                this.layerComponents.push(layerController);
                if (layerController.activationKey == TVLayerManagerService_1.ROOTLAYER)
                    layerController.show(true);
            }
            return function () {
                var index = _this.layerComponents.indexOf(layerController);
                if (index !== -1) {
                    _this.layerComponents.splice(index, 1);
                }
            };
        };
        TVLayerManagerService.prototype.setLayerStates = function () {
            var prio = this.minPriority;
            for (var _i = 0, _a = this.layerComponents; _i < _a.length; _i++) {
                var component = _a[_i];
                if (component.isVisible && component.hasFocusableChildren) {
                    if (prio < component.priority) {
                        prio = component.priority;
                    }
                }
            }
            for (var _b = 0, _c = this.layerComponents; _b < _c.length; _b++) {
                var component = _c[_b];
                if (component.isVisible) {
                    if (prio > component.priority || prio == this.minPriority || !component.hasFocusableChildren) {
                        component.deactivate();
                    }
                    else {
                        component.activate();
                    }
                }
            }
        };
        var TVLayerManagerService_1;
        TVLayerManagerService.ROOTLAYER = "root";
        TVLayerManagerService = TVLayerManagerService_1 = __decorate([
            public_1.logTag()
        ], TVLayerManagerService);
        return TVLayerManagerService;
    }(public_2.ReactBaseService));
    exports.TVLayerManagerService = TVLayerManagerService;
});
//# sourceMappingURL=layermanager.service.js.map