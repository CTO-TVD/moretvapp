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
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public", "src/src-de-telekom-tv-core/backend/Zac/zacVideoFormat", "src/src-de-telekom/util/public"], function (require, exports, bluebird, public_1, public_2, public_3, zacVideoFormat_1, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVUsageTrackerService = void 0;
    var TVUsageTrackerService = (function (_super) {
        __extends(TVUsageTrackerService, _super);
        function TVUsageTrackerService() {
            var _a;
            var _this = _super.call(this) || this;
            _this.initialized = false;
            _this.numberHash = (_a = {},
                _a[public_2.TVKeyCodeConfig.ZERO_KEY] = true,
                _a[public_2.TVKeyCodeConfig.ONE_KEY] = true,
                _a[public_2.TVKeyCodeConfig.TWO_KEY] = true,
                _a[public_2.TVKeyCodeConfig.THREE_KEY] = true,
                _a[public_2.TVKeyCodeConfig.FOUR_KEY] = true,
                _a[public_2.TVKeyCodeConfig.FIVE_KEY] = true,
                _a[public_2.TVKeyCodeConfig.SIX_KEY] = true,
                _a[public_2.TVKeyCodeConfig.SEVEN_KEY] = true,
                _a[public_2.TVKeyCodeConfig.EIGHT_KEY] = true,
                _a[public_2.TVKeyCodeConfig.NINE_KEY] = true,
                _a);
            _this.tracker = new public_1.TVUsageTracker();
            if (_this.tracker.IsEnabled) {
                public_3.ApplicationClient.subscriberInfo.getAtiTrackingInfo()
                    .then(function (atiTrackingInfo) { return _this.initialize(atiTrackingInfo); })
                    .catch(public_1.ErrorManager.catchFunc(TVUsageTrackerService_1, 0x02));
            }
            return _this;
        }
        TVUsageTrackerService_1 = TVUsageTrackerService;
        Object.defineProperty(TVUsageTrackerService.prototype, "Tracker", {
            get: function () {
                return this.atiTrackingInfo ? this.tracker : undefined;
            },
            enumerable: false,
            configurable: true
        });
        TVUsageTrackerService.prototype.getAtiTrackingInfo = function () {
            return this.atiTrackingInfo;
        };
        TVUsageTrackerService.prototype.refreshAtiTrackingInfo = function () {
            var _this = this;
            if (!this.tracker.IsEnabled)
                return;
            public_3.ApplicationClient.subscriberInfo.getAtiTrackingInfo()
                .then(function (atiTrackingInfo) {
                var _a;
                var trackingHasChanged = ((_a = _this.atiTrackingInfo) === null || _a === void 0 ? void 0 : _a.atiTrackingEnabled) != atiTrackingInfo.atiTrackingEnabled;
                if (trackingHasChanged) {
                    if (atiTrackingInfo.atiTrackingEnabled && _this.tracker.IsEnabled) {
                        if (_this.initialized) {
                            _this.activate(atiTrackingInfo);
                        }
                        else {
                            _this.initialize(atiTrackingInfo);
                        }
                    }
                    else {
                        _this.deactivate();
                    }
                }
            });
        };
        TVUsageTrackerService.prototype.initialize = function (atiTrackingInfo) {
            var _this = this;
            public_4.Logger.debug(function (log) { return log(public_4.LogMsg("initialize-> tracking enabled: " + atiTrackingInfo.atiTrackingEnabled, TVUsageTrackerService_1.TAG)); });
            if (!atiTrackingInfo.atiTrackingEnabled)
                return;
            this.activate(atiTrackingInfo);
            bluebird.all([
                public_3.ApplicationClient.network.getLinkProperties(),
                public_3.ApplicationClient.bandwidthManagement.getBandwidthInfo(),
                public_3.ServiceClientZac.getSystemInformation(true),
                public_3.ApplicationClient.contentManagement.getSubscriberInfo(),
                public_3.ApplicationClient.authMan.getIdToken(),
                public_3.ApplicationClient.usageTracking.getCustomizeConfigParameters([{ key: "queryType", value: "0" }])
            ])
                .catch(function (error) {
                public_1.ErrorManager.catch(error, TVUsageTrackerService_1, 0x03);
                throw new public_1.PromiseCancelError();
            })
                .then(function (_a) {
                var link = _a[0], bandwithMgr = _a[1], sysInfos = _a[2], subscriber = _a[3], idToken = _a[4], getCustomizeConfig = _a[5];
                var MAC = link.MacAddress;
                var bandwidth = (bandwithMgr === null || bandwithMgr === void 0 ? void 0 : bandwithMgr.data) ? bandwithMgr.data.subscriberMaxBitrate : -1;
                var list = [];
                for (var _i = 0, getCustomizeConfig_1 = getCustomizeConfig; _i < getCustomizeConfig_1.length; _i++) {
                    var key = getCustomizeConfig_1[_i];
                    if (key.key === "ATI_TRACKING_URL" ||
                        key.key === "ATI_TRACKING_SITE_ID" ||
                        key.key === "ATI_VOICE_PAGE_HITS_ENABLED") {
                        list.push([key.key, key.value]);
                    }
                }
                _this.tracker.setCustomizeConfig(list);
                _this.tracker.setClientInformation({
                    HwModel: sysInfos.HwModel,
                    HwVersion: sysInfos.HwVersion,
                    SwProductVariant: sysInfos.SwProductVariant,
                    SerialNumber: sysInfos.SerialNumber,
                    ANID: idToken.anid,
                    GUID: sysInfos.GUID,
                    MAC: MAC === null || MAC === void 0 ? void 0 : MAC.replace(/[-:]/g, ""),
                    Bandwidth: bandwidth,
                    ProvisioningType: subscriber.provisioningType ? subscriber.provisioningType : ""
                });
            })
                .catch(function (error) {
                public_1.ErrorManager.catch(error, TVUsageTrackerService_1, 0x04);
            })
                .then(function () {
                return bluebird
                    .all([
                    public_3.ApplicationClient.outputs.getTvModel().reflect(),
                    public_3.ApplicationClient.outputs.getSupportedHdcpVersions().reflect(),
                    public_3.ApplicationClient.outputs.getSupportedHdrFormats().reflect(),
                    public_3.ApplicationClient.outputs.getSupportedVideoFormats().reflect(),
                    public_3.ApplicationClient.outputs.getCurrentVideoFormat().reflect()
                ]);
            })
                .catch(function (error) {
                public_1.ErrorManager.catch(error, TVUsageTrackerService_1, 0x05);
                throw new public_1.PromiseCancelError();
            })
                .then(function (_a) {
                var tvmodel = _a[0], supportedHdcp = _a[1], supportedHdr = _a[2], supportedVideo = _a[3], currentVideo = _a[4];
                var currentVideoFormat = currentVideo.isFulfilled() && currentVideo.value();
                _this.tracker.setDisplayInformation({
                    supportedVideoFormats: supportedVideo.isFulfilled() ? supportedVideo.value().map(function (it) { return zacVideoFormat_1.VideoFormat[it]; }) : ["n.a."],
                    supportedHdrFormats: (supportedHdr.isFulfilled() ? supportedHdr.value().split(",") : ["n.a."]),
                    supportedHdcpVersions: supportedHdcp.isFulfilled() ? (supportedHdcp.value() || ["n.a."]) : ["n.a."],
                    currentVideoFormat: "" + (currentVideoFormat ? zacVideoFormat_1.VideoFormat[currentVideoFormat] : "n.a."),
                    tvModel: tvmodel.isFulfilled() ? tvmodel.value() : "n.a."
                });
                _this.initialized = true;
            })
                .catch(function (error) {
                public_1.ErrorManager.catch(error, TVUsageTrackerService_1, 0x06);
            });
        };
        TVUsageTrackerService.prototype.ErrorHandlingFunc = function (error, classID, codeID) {
            var _a;
            if (!this.atiTrackingInfo) {
                return;
            }
            var errorID = (error === null || error === void 0 ? void 0 : error.errorID) || 0;
            var sqmErrorCode = errorID * 0x100000 + ((classID === null || classID === void 0 ? void 0 : classID.classID) || 0) * 0x100 + (codeID || 0);
            var sqmHexErrorCode = public_1.StringTools.convertToHexString(sqmErrorCode);
            var additionalErrorCode = (_a = error === null || error === void 0 ? void 0 : error.getAdditionalErrorCode) === null || _a === void 0 ? void 0 : _a.call(error);
            this.tracker.trackError({
                sqmCode: sqmHexErrorCode,
                errorId: public_1.StringTools.convertToHexString(errorID, 3),
                classId: public_1.StringTools.convertToHexString((classID === null || classID === void 0 ? void 0 : classID.classID) || 0, 3),
                codeId: public_1.StringTools.convertToHexString(codeID || 0, 2),
                additionalCode: additionalErrorCode
            });
        };
        TVUsageTrackerService.prototype.activate = function (atiTrackingInfo) {
            var _this = this;
            this.broadcastClosable = public_2.ReactRootService.getInstance().onMessage(public_2.NavigationBroadcastTypes.Change, function (args) {
                if (!args || !args.focusIDs || args.focusIDs.length == 0 || args.phase !== public_2.NavigationBroadcastPhase.focus) {
                    return;
                }
                var idpath = args.focusIDs[args.focusIDs.length - 1];
                if (idpath) {
                    var idx = idpath.indexOf("::");
                    var dirtyLayer = idpath.substr(0, idx);
                    var path = idpath.substr(idx + 2);
                    var layer = dirtyLayer.replace(TVUsageTrackerService_1.layerIndexRemover, "$1");
                    _this.tracker.trackFocus({ path: path, layer: layer });
                }
            });
            this.keypressCloseable = public_2.TVKeyEventManagerService.getInstance().onBefore(function (args) {
                var keyName = args.virtualKey;
                if (keyName == public_2.TVKeyCodeConfig.OK_KEY) {
                    _this.tracker.trackClick();
                }
                if (_this.numberHash[keyName]) {
                    keyName = "NUMBER_KEY";
                }
                _this.tracker.trackKey(keyName);
                return false;
            }, TVUsageTrackerService_1.TAG);
            this.errorClosable = public_1.ErrorManager.onError(function (errorData) {
                if (errorData) {
                    _this.ErrorHandlingFunc(errorData.error, errorData.classID, errorData.codeID);
                }
            });
            this.atiTrackingInfo = atiTrackingInfo;
        };
        TVUsageTrackerService.prototype.deactivate = function () {
            this.atiTrackingInfo = undefined;
            if (this.keypressCloseable) {
                this.keypressCloseable();
                this.keypressCloseable = undefined;
            }
            if (this.broadcastClosable) {
                this.broadcastClosable();
                this.broadcastClosable = undefined;
            }
            if (this.errorClosable) {
                this.errorClosable();
                this.errorClosable = undefined;
            }
        };
        var TVUsageTrackerService_1;
        TVUsageTrackerService.classID = 0x76A;
        TVUsageTrackerService.layerIndexRemover = new RegExp(/^(\w*)_\d*/);
        __decorate([
            public_1.log2(function () { return ({ name: TVUsageTrackerService_1.TAG }); })
        ], TVUsageTrackerService.prototype, "refreshAtiTrackingInfo", null);
        TVUsageTrackerService = TVUsageTrackerService_1 = __decorate([
            public_1.logTag()
        ], TVUsageTrackerService);
        return TVUsageTrackerService;
    }(public_2.ReactBaseService));
    exports.TVUsageTrackerService = TVUsageTrackerService;
});
//# sourceMappingURL=usagetracker.service.js.map