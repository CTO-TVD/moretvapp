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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define(["require", "exports", "./volumecontrol.component", "./volumecontrol.service", "./volumecontrol.interface", "../../base/public", "./volumecontrol.service"], function (require, exports, volumecontrol_component_1, volumecontrol_service_1, volumecontrol_interface_1, public_1, volumecontrol_service_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VolumeControlModule = void 0;
    __exportStar(volumecontrol_component_1, exports);
    __exportStar(volumecontrol_service_1, exports);
    __exportStar(volumecontrol_interface_1, exports);
    var VolumeControlModule = (function (_super) {
        __extends(VolumeControlModule, _super);
        function VolumeControlModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VolumeControlModule.prototype.run = function () {
            volumecontrol_service_2.TVVolumeControlService.getInstance();
        };
        return VolumeControlModule;
    }(public_1.ReactBaseModule));
    exports.VolumeControlModule = VolumeControlModule;
});
//# sourceMappingURL=public.js.map