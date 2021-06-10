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
define(["require", "exports", "src/src-de-telekom/public", "src/src-de-telekom-style/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ClientUpdateInfo = void 0;
    var ClientUpdateInfoError = (function (_super) {
        __extends(ClientUpdateInfoError, _super);
        function ClientUpdateInfoError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x632;
            return _this;
        }
        return ClientUpdateInfoError;
    }(public_1.BaseError));
    var ClientUpdateInfo = (function () {
        function ClientUpdateInfo(infoFileUrl, swUpdateInfo, subscriberType, updateVersion) {
            var defaultVersion = "Default";
            if (!swUpdateInfo.ClientUpdateNotification) {
                throw new ClientUpdateInfoError("Missing ClientUpdateNotification element in file " + infoFileUrl + ".");
            }
            if (!swUpdateInfo.ClientUpdateNotification.STB_Model || swUpdateInfo.ClientUpdateNotification.STB_Model.length == 0) {
                throw new ClientUpdateInfoError("Missing ClientUpdateNotification.STB_Model element in file " + infoFileUrl + ".");
            }
            if (!swUpdateInfo.ClientUpdateNotification.STB_Model[0].Type) {
                throw new ClientUpdateInfoError("Missing ClientUpdateNotification.STB_Model.Type element in file " + infoFileUrl + ".");
            }
            var subscriberTypeVersions = swUpdateInfo.ClientUpdateNotification.STB_Model[0].Type;
            var mediaReceiverVersionInfo;
            if (!subscriberTypeVersions.some(function (subscriberTypeVersion) { return subscriberTypeVersion.SubscriberType == subscriberType; })) {
                throw new ClientUpdateInfoError("No content found for subscriber Type " + subscriberType + " in file " + infoFileUrl + ".");
            }
            var subscriberTypeVersion = subscriberTypeVersions.filter(function (subscriberTypeVersion) { return subscriberTypeVersion.SubscriberType == subscriberType; })[0];
            if (!subscriberTypeVersion.Version || subscriberTypeVersion.Version.length == 0) {
                throw new ClientUpdateInfoError("Missing or empty ClientUpdateNotification.STB_Model.Type.Version element in file " + infoFileUrl + ".");
            }
            if (updateVersion && subscriberTypeVersion.Version.some(function (version) { return version.mediaReceiverVersion == updateVersion; })) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Found info for version " + updateVersion, ClientUpdateInfo_1.TAG)); });
                mediaReceiverVersionInfo = subscriberTypeVersion.Version.filter(function (version) { return version.mediaReceiverVersion == updateVersion; })[0];
            }
            else if (subscriberTypeVersion.Version.some(function (version) { return version.mediaReceiverVersion == defaultVersion; })) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Update version " + (updateVersion ? "not found" : "is undefined") + ": Take default '" + defaultVersion + "'", ClientUpdateInfo_1.TAG)); });
                mediaReceiverVersionInfo = subscriberTypeVersion.Version.filter(function (version) { return version.mediaReceiverVersion == defaultVersion; })[0];
            }
            else {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Info for version " + updateVersion + " and Default version not found - take first.", ClientUpdateInfo_1.TAG)); });
                mediaReceiverVersionInfo = subscriberTypeVersion.Version[0];
            }
            this.html = "<div class=\"" + public_2.Css.fonts2.a_fo_h2_3 + "\">" + mediaReceiverVersionInfo.sectionTitle + "</div>" + mediaReceiverVersionInfo.sectionDescription;
        }
        ClientUpdateInfo_1 = ClientUpdateInfo;
        var ClientUpdateInfo_1;
        ClientUpdateInfo = ClientUpdateInfo_1 = __decorate([
            public_1.logTag()
        ], ClientUpdateInfo);
        return ClientUpdateInfo;
    }());
    exports.ClientUpdateInfo = ClientUpdateInfo;
});
//# sourceMappingURL=clientUpdateInfo.js.map