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
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../backend/public"], function (require, exports, bluebird, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SoftwareUpgrade = void 0;
    var SoftwareUpgradeError = (function (_super) {
        __extends(SoftwareUpgradeError, _super);
        function SoftwareUpgradeError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x614;
            return _this;
        }
        return SoftwareUpgradeError;
    }(public_1.BaseError));
    var SoftwareUpdateInfoError = (function (_super) {
        __extends(SoftwareUpdateInfoError, _super);
        function SoftwareUpdateInfoError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x631;
            return _this;
        }
        return SoftwareUpdateInfoError;
    }(public_1.BaseError));
    var SoftwareUpgrade = (function () {
        function SoftwareUpgrade() {
        }
        SoftwareUpgrade_1 = SoftwareUpgrade;
        SoftwareUpgrade.getSoftwareUpdateInfo = function (timeoutMs, infoFileUrl) {
            return SoftwareUpgrade_1.getObjectFromJson(timeoutMs, infoFileUrl, function (message) { return new SoftwareUpdateInfoError(message); });
        };
        SoftwareUpgrade.getRemoteBuildVersion = function (timeoutMs, remoteBuildConfigUrl) {
            return SoftwareUpgrade_1.getObjectFromJson(timeoutMs, remoteBuildConfigUrl, function (message) { return new SoftwareUpgradeError(message); });
        };
        SoftwareUpgrade.getRemoteManifestVersion = function (timeoutMs, remoteBuildConfigUrl) {
            return SoftwareUpgrade_1.getObjectFromJson(timeoutMs, remoteBuildConfigUrl, function (message) { return new SoftwareUpgradeError(message); });
        };
        SoftwareUpgrade.getObjectFromJson = function (timeoutMs, fileUrl, getExceptionFunc) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Getting content of file " + fileUrl + " ...", SoftwareUpgrade_1.TAG)); });
            return public_1.RestClient.instance.get(fileUrl, [
                { key: "Content-Type", value: "application/json;charset=UTF-8" },
                { key: "Pragma", value: "no-cache" }
            ])
                .timeout(timeoutMs)
                .then(function (result) {
                if (result.statusCode != 200) {
                    throw getExceptionFunc("Status " + result.statusCode + " loading file " + fileUrl);
                }
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Parsing file " + fileUrl, SoftwareUpgrade_1.TAG)); });
                var jsonObject = JSON.parse(result.responseData);
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("File loaded and parsed successfully.", SoftwareUpgrade_1.TAG)); });
                return jsonObject;
            });
        };
        SoftwareUpgrade.searchForClientUpdates = function (timeoutMs) {
            return new bluebird(function (resolve, reject) {
                var swUpgrade = public_2.ServiceClientZac.getSwUpgrade(public_2.ServiceClientContextZac.instance);
                var searchResultListenerCloseable = swUpgrade.events.onSearchResult(function (event) {
                    SoftwareUpgrade_1.logClientSearchResult(event);
                    searchResultListenerCloseable();
                    resolve(event);
                });
                var searchResultCode = swUpgrade.object.Search();
                if (searchResultCode != 0) {
                    var errorMessage = searchResultCode == 4 ? "Search for update called in invalid state. Not allowed because of ongoing search or upgrading process." : "Unknown error state " + searchResultCode + " during search.";
                    reject(new SoftwareUpgradeError(errorMessage));
                }
                else {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Search started successfully.", SoftwareUpgrade_1.TAG)); });
                }
            })
                .timeout(timeoutMs);
        };
        SoftwareUpgrade.searchForUiUpdate = function (timeoutMs) {
            return public_2.ServiceClientAuthenticationZosa.getConfig(public_2.ServiceClientContextZosa.instance)
                .timeout(timeoutMs)
                .then(function (result) {
                var _a;
                var buildInfo = public_1.Configuration.instance.buildinfo || { majorVersion: "not defined", buildVersion: "not defined", buildIsNightly: false };
                var currentVersion = buildInfo.majorVersion + "." + buildInfo.buildVersion;
                var resultVersion = (_a = result.data) === null || _a === void 0 ? void 0 : _a.version;
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("searchForUiUpdate - currentVersion: " + currentVersion, SoftwareUpgrade_1.TAG)); });
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("searchForUiUpdate - resultVersion: " + resultVersion, SoftwareUpgrade_1.TAG)); });
                if (buildInfo.buildVersion !== "0" && resultVersion) {
                    if (public_1.Configuration.instance.env === "prod" && !buildInfo.buildIsNightly) {
                        if (currentVersion !== resultVersion) {
                            return { available: true, packageDate: resultVersion };
                        }
                    }
                    else {
                        try {
                            var currentVersionNumbers = currentVersion.split(".").map(function (item) { return parseInt(item, 10); });
                            var resultVersionNumbers = resultVersion.split(".").map(function (item) { return parseInt(item, 10); });
                            if (currentVersionNumbers.length === resultVersionNumbers.length) {
                                for (var i = 0; i < currentVersionNumbers.length; i++) {
                                    if (currentVersionNumbers[i] < resultVersionNumbers[i]) {
                                        return { available: true, packageDate: resultVersion };
                                    }
                                }
                            }
                        }
                        catch (error) {
                            public_1.Logger.error(function (log) { return log(public_1.LogMsg("searchForUiUpdate - error parsing version information. error: " + error, SoftwareUpgrade_1.TAG)); });
                        }
                    }
                }
                return { available: false, packageDate: "" };
            });
        };
        SoftwareUpgrade.getSwUpgradeConstants = function () {
            var swUpgrade = public_2.ServiceClientZac.getSwUpgrade(public_2.ServiceClientContextZac.instance);
            return swUpgrade.object.Constants;
        };
        SoftwareUpgrade.logClientSearchResult = function (clientSearchResult) {
            public_1.Logger.debug(function (log) {
                log(public_1.LogMsg("Client Update notification", SoftwareUpgrade_1.TAG));
                log(public_1.LogMsg("------------------------------------", SoftwareUpgrade_1.TAG));
                log(public_1.LogMsg("version: " + clientSearchResult.version, SoftwareUpgrade_1.TAG));
                log(public_1.LogMsg("forced: " + clientSearchResult.forced, SoftwareUpgrade_1.TAG));
                if (clientSearchResult.versions && clientSearchResult.versions.length > 0) {
                    log(public_1.LogMsg("components:", SoftwareUpgrade_1.TAG));
                    clientSearchResult.versions.forEach(function (component) {
                        log(public_1.LogMsg("    type: " + public_2.ServiceClientZac.getSwUpgradeComponentInfo(SoftwareUpgrade_1.getSwUpgradeConstants(), component.type), SoftwareUpgrade_1.TAG));
                        log(public_1.LogMsg("    version: " + component.version, SoftwareUpgrade_1.TAG));
                    });
                }
            });
        };
        var SoftwareUpgrade_1;
        __decorate([
            public_1.log2(function () { return ({ name: SoftwareUpgrade_1.TAG }); })
        ], SoftwareUpgrade, "getSoftwareUpdateInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: SoftwareUpgrade_1.TAG }); })
        ], SoftwareUpgrade, "getRemoteBuildVersion", null);
        __decorate([
            public_1.log2(function () { return ({ name: SoftwareUpgrade_1.TAG }); })
        ], SoftwareUpgrade, "getRemoteManifestVersion", null);
        __decorate([
            public_1.log2(function () { return ({ name: SoftwareUpgrade_1.TAG }); })
        ], SoftwareUpgrade, "getObjectFromJson", null);
        __decorate([
            public_1.log2(function () { return ({ name: SoftwareUpgrade_1.TAG }); })
        ], SoftwareUpgrade, "searchForClientUpdates", null);
        __decorate([
            public_1.log2(function () { return ({ name: SoftwareUpgrade_1.TAG }); })
        ], SoftwareUpgrade, "searchForUiUpdate", null);
        SoftwareUpgrade = SoftwareUpgrade_1 = __decorate([
            public_1.logTag()
        ], SoftwareUpgrade);
        return SoftwareUpgrade;
    }());
    exports.SoftwareUpgrade = SoftwareUpgrade;
});
//# sourceMappingURL=applicationclient.softwareupgrade.js.map