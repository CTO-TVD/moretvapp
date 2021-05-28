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
define(["require", "exports", "src/src-de-telekom/public", "./eventgenerator"], function (require, exports, public_1, eventgenerator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacOutputs = void 0;
    var ZacOutputs = (function (_super) {
        __extends(ZacOutputs, _super);
        function ZacOutputs() {
            var _this = _super.call(this) || this;
            _this.KEY_OUTPUT_DEFAULT_VIDEO_FORMAT = 0;
            _this.KEY_OUTPUT_CURRENT_VIDEO_FORMAT = 1;
            _this.KEY_OUTPUT_SUPPORTED_VIDEO_FORMATS = 2;
            _this.KEY_OUTPUT_SUPPORTED_HDCP_VERSIONS = 3;
            _this.KEY_OUTPUT_TV_MODEL = 4;
            _this.KEY_OUTPUT_TV_MANUFACTURING_DATE = 5;
            _this.KEY_OUTPUT_HDCP_STATUS = 6;
            _this.KEY_OUTPUT_SUPPORTED_HDR_FORMATS = 7;
            _this.KEY_OUTPUT_NATIVE_VIDEO_FORMAT = 8;
            _this.KEY_OUTPUT_VIDEO_FORMAT_AUTO_MODE = 9;
            _this.REASON_CONNECTED = 0;
            _this.REASON_DISCONNECTED = 1;
            _this.REASON_VIDEO_FORMAT_CHANGED = 2;
            _this.REASON_HDCP_ENGAGED = 34;
            _this.REASON_HDCP_DISENGAGED = 12;
            _this.REASON_HDCP_ERROR = 13;
            _this.HDCP_NOT_ENGAGED = "HDCP_NOT_ENGAGED";
            _this.HDCP_ENGAGED = "HDCP_ENGAGED";
            _this.OUTPUT_TYPE_HDMI = "OUTPUT_TYPE_HDMI";
            _this.OUTPUT_TYPE_ANALOG = "OUTPUT_TYPE_ANALOG";
            _this.OUTPUT_TYPE_SPDIF = "OUTPUT_TYPE_SPDIF";
            _this.OUTPUT_TYPE_RF = "OUTPUT_TYPE_RF";
            _this.VIDEO_FORMAT_SUPPORTED_BY_TV = 1;
            _this.VIDEO_FORMAT_SUPPORTED_BY_TV_AND_STB = 2;
            _this.VIDEO_FORMAT_AUTO_MODE_OFF = "VIDEO_FORMAT_AUTO_MODE_OFF";
            _this.VIDEO_FORMAT_AUTO_MODE_NATIVE = "VIDEO_FORMAT_AUTO_MODE_NATIVE";
            _this.VIDEO_FORMAT_AUTO_MODE_FOLLOW_VIDEO_FRAMERATE = "VIDEO_FORMAT_AUTO_MODE_FOLLOW_VIDEO_FRAMERATE";
            _this.availableOutputTypes = [
                _this.OUTPUT_TYPE_ANALOG,
                _this.OUTPUT_TYPE_HDMI
            ];
            _this.outputProperties = {};
            _this.outputPropertiesList = {};
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("constructor", ZacOutputs_1.TAG)); });
            _this.outputProperties[_this.OUTPUT_TYPE_HDMI + "_" + _this.KEY_OUTPUT_DEFAULT_VIDEO_FORMAT] = "1920x1080p50000";
            _this.outputProperties[_this.OUTPUT_TYPE_HDMI + "_" + _this.KEY_OUTPUT_CURRENT_VIDEO_FORMAT] = "1920x1080p50000";
            return _this;
        }
        ZacOutputs_1 = ZacOutputs;
        ZacOutputs.prototype.getEventManagerId = function () { return "ZacOutputs"; };
        ZacOutputs.prototype.getLogSource = function () { return ZacOutputs_1.TAG; };
        ZacOutputs.prototype.GetSupportedVideoFormats = function (outputType, listVariant) {
            return [
                { height: 720, width: 1280, progressive: true, framerate: 50000 },
                { height: 720, width: 1280, progressive: true, framerate: 60000 },
                { height: 1080, width: 1920, progressive: false, framerate: 50000 },
                { height: 1080, width: 1920, progressive: false, framerate: 60000 },
                { height: 1080, width: 1920, progressive: true, framerate: 50000 },
                { height: 1080, width: 1920, progressive: true, framerate: 60000 }
            ];
        };
        ZacOutputs.prototype.GetProperty = function (propertyKey, outputType) {
            var key = outputType + "_" + propertyKey;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("GetProperty for key " + key, ZacOutputs_1.TAG)); });
            if (this.outputProperties[key]) {
                var propertyValue_1 = this.outputProperties[key];
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Value: " + propertyValue_1, ZacOutputs_1.TAG)); });
                return propertyValue_1;
            }
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("No value found", ZacOutputs_1.TAG)); });
            return "";
        };
        ZacOutputs.prototype.GetPropertyList = function (propertyKey, outputType) {
            var key = outputType + "_" + propertyKey;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("GetPropertyList for key " + key, ZacOutputs_1.TAG)); });
            if (this.outputPropertiesList[key]) {
                var propertyValues_1 = this.outputPropertiesList[key];
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Value: " + propertyValues_1, ZacOutputs_1.TAG)); });
                return propertyValues_1;
            }
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("No value found", ZacOutputs_1.TAG)); });
            return [];
        };
        ZacOutputs.prototype.GetProperties = function (propertyKeys, outputType) {
            return {};
        };
        ZacOutputs.prototype.SetProperty = function (propertyKey, propertyValue, outputType) {
            var key = outputType + "_" + propertyKey;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("SetProperty for key " + key + " to value " + propertyValue, ZacOutputs_1.TAG)); });
            this.outputProperties[key] = propertyValue;
            if (propertyKey == this.KEY_OUTPUT_DEFAULT_VIDEO_FORMAT) {
                this.SetProperty(this.KEY_OUTPUT_CURRENT_VIDEO_FORMAT, propertyValue, outputType);
            }
            return 0;
        };
        ZacOutputs.prototype.SetProperties = function (properties, outputType) {
            return 0;
        };
        var ZacOutputs_1;
        ZacOutputs = ZacOutputs_1 = __decorate([
            public_1.logTag()
        ], ZacOutputs);
        return ZacOutputs;
    }(eventgenerator_1.EventGenerator));
    exports.ZacOutputs = ZacOutputs;
});
//# sourceMappingURL=zacoutputs.js.map