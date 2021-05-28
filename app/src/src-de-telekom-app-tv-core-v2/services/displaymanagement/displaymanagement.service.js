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
define(["require", "exports", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/public", "src/src-de-telekom-react/public"], function (require, exports, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DisplayManagementService = void 0;
    var DisplayManagementService = (function (_super) {
        __extends(DisplayManagementService, _super);
        function DisplayManagementService() {
            var _this = _super.call(this) || this;
            _this.displayProperties = { SupportsUhd: false };
            _this.outputEventsMapper = new public_1.ZacOutputsEventMapper();
            _this.outputEventsMapper.onHdmiOutputEvent(function (event) { return _this.onHdmiOutputEvent(event); });
            _this.recoverVideoFormatAutoMode();
            _this.validateScreenFormat();
            return _this;
        }
        DisplayManagementService_1 = DisplayManagementService;
        DisplayManagementService.prototype.getDisplayInformation = function () {
            return this.displayProperties;
        };
        DisplayManagementService.prototype.onHdmiOutputEvent = function (event) {
            switch (event.type) {
                case "ConnectedAndHdcpEngaged":
                    public_1.ApplicationClient.performance.DeviceActionEventObservable.next({
                        componentName: DisplayManagementService_1.TAG,
                        processName: "onHdmiOutputEvent",
                        data: public_1.DeviceActionEventType.HdcpEngaged
                    });
                    this.validateScreenFormat();
                    break;
                case "VideoFormatChangedAndHdcpEngaged":
                    public_1.ApplicationClient.performance.DeviceActionEventObservable.next({
                        componentName: DisplayManagementService_1.TAG,
                        processName: "onHdmiOutputEvent",
                        data: public_1.DeviceActionEventType.HdcpEngaged
                    });
                    this.refreshDisplayInformations();
                    break;
                case "Disconnected":
                    this.displayProperties = { SupportsUhd: false };
                    break;
                case "HdcpDisengaged":
                    this.displayProperties.HdcpEngaged = false;
                    break;
                case "HdcpEngaged":
                    public_1.ApplicationClient.performance.DeviceActionEventObservable.next({
                        componentName: DisplayManagementService_1.TAG,
                        processName: "onHdmiOutputEvent",
                        data: public_1.DeviceActionEventType.HdcpEngaged
                    });
                    this.displayProperties.HdcpEngaged = true;
                    break;
            }
        };
        DisplayManagementService.prototype.validateScreenFormat = function () {
            var _this = this;
            return public_1.ApplicationClient.outputs.getTargetZacVideoFormat()
                .then(function (targetVideoFormat) { return targetVideoFormat ? public_1.ServiceClientZac.setDefaultVideoFormat(targetVideoFormat, false) : _this.refreshDisplayInformations(); })
                .catch(public_2.ErrorManager.catchFunc(DisplayManagementService_1, 0x01));
        };
        DisplayManagementService.prototype.refreshDisplayInformations = function () {
            var _this = this;
            return public_1.ApplicationClient.outputs.getDisplayInformation()
                .then(function (displayInformation) { _this.displayProperties = displayInformation; })
                .catch(public_2.ErrorManager.catchFunc(DisplayManagementService_1, 0x02));
        };
        DisplayManagementService.prototype.recoverVideoFormatAutoMode = function () {
            return public_1.ApplicationClient.outputs.setVideoFormatAutoMode(public_1.ServiceClientContextZac.instance.zacAPI.Outputs.VIDEO_FORMAT_AUTO_MODE_OFF)
                .catch(function (error) {
                public_2.ErrorManager.catch(error, DisplayManagementService_1, 0x07);
                throw new public_2.PromiseCancelError();
            });
        };
        var DisplayManagementService_1;
        DisplayManagementService.classID = 0x75A;
        __decorate([
            public_2.log2(function () { return ({ name: DisplayManagementService_1.TAG }); })
        ], DisplayManagementService.prototype, "onHdmiOutputEvent", null);
        __decorate([
            public_2.log2(function () { return ({ name: DisplayManagementService_1.TAG }); })
        ], DisplayManagementService.prototype, "validateScreenFormat", null);
        __decorate([
            public_2.log2(function () { return ({ name: DisplayManagementService_1.TAG }); })
        ], DisplayManagementService.prototype, "refreshDisplayInformations", null);
        DisplayManagementService = DisplayManagementService_1 = __decorate([
            public_2.logTag()
        ], DisplayManagementService);
        return DisplayManagementService;
    }(public_3.ReactBaseService));
    exports.DisplayManagementService = DisplayManagementService;
});
//# sourceMappingURL=displaymanagement.service.js.map