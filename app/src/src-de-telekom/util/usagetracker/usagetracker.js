var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "URIjs/URI", "../log/public", "../../collections/KeyValuePair", "../../errorhandling/public", "../../configuration/configuration", "../../promise/concurrentqueue", "../../typing/guard", "../../graphics/public", "../StringTools"], function (require, exports, urijs, public_1, KeyValuePair_1, public_2, configuration_1, concurrentqueue_1, guard_1, public_3, StringTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVUsageTracker = exports.IClickType = exports.HubPageVariables = exports.ContentType = exports.HubPrimaryChapter = exports.DtObjTypes = exports.SearchPageVariable = exports.DtGlobalVariables = exports.DtSiteVariables = exports.Level2Ids = void 0;
    var Level2Ids;
    (function (Level2Ids) {
        Level2Ids[Level2Ids["UNASSIGNED"] = 0] = "UNASSIGNED";
        Level2Ids[Level2Ids["NAVIGATION"] = 1] = "NAVIGATION";
        Level2Ids[Level2Ids["TV_PROGRAM"] = 2] = "TV_PROGRAM";
        Level2Ids[Level2Ids["VIDEO"] = 3] = "VIDEO";
        Level2Ids[Level2Ids["MY_CONTENT"] = 4] = "MY_CONTENT";
        Level2Ids[Level2Ids["KIDS"] = 5] = "KIDS";
        Level2Ids[Level2Ids["ENTERTAIN"] = 6] = "ENTERTAIN";
        Level2Ids[Level2Ids["APPS"] = 7] = "APPS";
        Level2Ids[Level2Ids["SETTINGS"] = 8] = "SETTINGS";
        Level2Ids[Level2Ids["HUBS"] = 9] = "HUBS";
        Level2Ids[Level2Ids["SEARCH"] = 10] = "SEARCH";
        Level2Ids[Level2Ids["PIN_ENTRY"] = 11] = "PIN_ENTRY";
        Level2Ids[Level2Ids["EPG"] = 12] = "EPG";
        Level2Ids[Level2Ids["DETAIL_PAGE"] = 13] = "DETAIL_PAGE";
        Level2Ids[Level2Ids["RECORDINGS"] = 14] = "RECORDINGS";
        Level2Ids[Level2Ids["CONFLICTMANAGEMENT"] = 15] = "CONFLICTMANAGEMENT";
        Level2Ids[Level2Ids["2ND_DEVICE"] = 16] = "2ND_DEVICE";
        Level2Ids[Level2Ids["BOOT_UPDATE"] = 17] = "BOOT_UPDATE";
        Level2Ids[Level2Ids["PLAYER"] = 18] = "PLAYER";
        Level2Ids[Level2Ids["MESSAGE"] = 20] = "MESSAGE";
        Level2Ids[Level2Ids["WEBRADIO"] = 21] = "WEBRADIO";
        Level2Ids[Level2Ids["HOME"] = 22] = "HOME";
        Level2Ids[Level2Ids["EMAIL"] = 23] = "EMAIL";
        Level2Ids[Level2Ids["BuLI"] = 24] = "BuLI";
        Level2Ids[Level2Ids["MehrTV"] = 25] = "MehrTV";
        Level2Ids[Level2Ids["VOICE"] = 35] = "VOICE";
        Level2Ids[Level2Ids["SCREENSAVER"] = 36] = "SCREENSAVER";
    })(Level2Ids = exports.Level2Ids || (exports.Level2Ids = {}));
    var AtiBaseKeys;
    (function (AtiBaseKeys) {
        AtiBaseKeys["Site"] = "s";
        AtiBaseKeys["Level2"] = "s2";
        AtiBaseKeys["Page"] = "p";
        AtiBaseKeys["ClickType"] = "click";
        AtiBaseKeys["CapturedTimestamp"] = "olt";
        AtiBaseKeys["Timestamp"] = "ts";
        AtiBaseKeys["CurrentLocalTime"] = "hl";
        AtiBaseKeys["Connection"] = "cn";
        AtiBaseKeys["ClientID"] = "idclient";
        AtiBaseKeys["BrowserResolution"] = "r";
        AtiBaseKeys["VideoResolution"] = "re";
    })(AtiBaseKeys || (AtiBaseKeys = {}));
    var DtSiteVariables;
    (function (DtSiteVariables) {
        DtSiteVariables["PhysicalId"] = "x1";
        DtSiteVariables["HardwareModel"] = "x2";
        DtSiteVariables["ClientVersion"] = "x3";
        DtSiteVariables["SubscriberType"] = "x4";
        DtSiteVariables["ConnectionType"] = "x6";
        DtSiteVariables["BandwidthForTv"] = "x21";
        DtSiteVariables["SubscriberId"] = "x9";
        DtSiteVariables["UserProfilId"] = "x10";
        DtSiteVariables["DeviceType"] = "x11";
        DtSiteVariables["UIVersion"] = "x12";
        DtSiteVariables["SupportedHDR"] = "x13";
        DtSiteVariables["SupportedHdcp"] = "x14";
        DtSiteVariables["SupportedVideoFormat"] = "x15";
        DtSiteVariables["TvModel"] = "x16";
        DtSiteVariables["ContentType"] = "x17";
        DtSiteVariables["LaneIndex"] = "x18";
        DtSiteVariables["HardwareVersion"] = "x19";
        DtSiteVariables["Filter"] = "x22";
        DtSiteVariables["Sort"] = "x23";
    })(DtSiteVariables = exports.DtSiteVariables || (exports.DtSiteVariables = {}));
    var DtGlobalVariables;
    (function (DtGlobalVariables) {
        DtGlobalVariables["STC"] = "stc";
    })(DtGlobalVariables = exports.DtGlobalVariables || (exports.DtGlobalVariables = {}));
    var VoiceVariable;
    (function (VoiceVariable) {
        VoiceVariable["TriggerPhysicalDeviceID"] = "f1";
        VoiceVariable["TriggerTerminalType"] = "f2";
        VoiceVariable["TriggerActingAs"] = "f3";
        VoiceVariable["RequestID"] = "f4";
        VoiceVariable["AtomicMessageType"] = "f5";
        VoiceVariable["OriginalIntent"] = "f6";
        VoiceVariable["Parameters"] = "f7";
        VoiceVariable["SearchContext"] = "f8";
        VoiceVariable["UserType"] = "f9";
        VoiceVariable["ActionGroup"] = "f10";
        VoiceVariable["ActionSubgroup"] = "f11";
    })(VoiceVariable || (VoiceVariable = {}));
    var VoiceErrors;
    (function (VoiceErrors) {
        VoiceErrors["ErrorTechnicalContext"] = "ErrorTechnicalContext";
        VoiceErrors["ErrorDescription1"] = "ErrorDescription1";
        VoiceErrors["ErrorDescription2"] = "ErrorDescription2";
        VoiceErrors["ErrorDescription3"] = "ErrorDescription3";
        VoiceErrors["ErrorDescription4"] = "ErrorDescription4";
    })(VoiceErrors || (VoiceErrors = {}));
    var SearchPageVariable;
    (function (SearchPageVariable) {
        SearchPageVariable["Keyword"] = "f1";
        SearchPageVariable["CorrectedKeyword"] = "f2";
        SearchPageVariable["TypeOfSearch"] = "f3";
        SearchPageVariable["LastSearches"] = "f4";
        SearchPageVariable["FrequentlySearches"] = "f5";
        SearchPageVariable["Sources"] = "f6";
        SearchPageVariable["AmountOfSearchResults"] = "f7";
        SearchPageVariable["CompleteDeletionKeyword"] = "f8";
        SearchPageVariable["DeleteLastSearch"] = "f9";
        SearchPageVariable["ResultOfEntry"] = "f10";
    })(SearchPageVariable = exports.SearchPageVariable || (exports.SearchPageVariable = {}));
    var SqmPageVariables;
    (function (SqmPageVariables) {
        SqmPageVariables["SQMCode"] = "f1";
        SqmPageVariables["ErrorId"] = "f2";
        SqmPageVariables["ClassId"] = "f3";
        SqmPageVariables["CodeId"] = "f4";
        SqmPageVariables["AdditionalCode"] = "f5";
    })(SqmPageVariables || (SqmPageVariables = {}));
    var DtObjTypes;
    (function (DtObjTypes) {
        DtObjTypes["ObjTypeMenu"] = "Menu";
        DtObjTypes["ObjTypeStdLaneWTile"] = "Standard-Lane with tile";
        DtObjTypes["ObjTypeStdLaneWoTile"] = "Standard-Lane without tile";
        DtObjTypes["ObjTypeLaneWoTileTitle"] = "Lane without tile and teaser tile";
        DtObjTypes["ObjTypePromo"] = "Promo-Lane";
        DtObjTypes["ObjTypeStage"] = "Stage";
        DtObjTypes["ObjTypeSearch"] = "Search";
        DtObjTypes["ObjTypePlayer"] = "Player";
        DtObjTypes["ObjTypeDetail"] = "Detail";
        DtObjTypes["ObjTypeOrder"] = "Order";
        DtObjTypes["ObjTypeSettings"] = "Settings";
    })(DtObjTypes = exports.DtObjTypes || (exports.DtObjTypes = {}));
    var HubPrimaryChapter;
    (function (HubPrimaryChapter) {
        HubPrimaryChapter["Menu"] = "Menu";
        HubPrimaryChapter["sGrid"] = "structured Grid";
        HubPrimaryChapter["uGrid"] = "unstructured Grid";
    })(HubPrimaryChapter = exports.HubPrimaryChapter || (exports.HubPrimaryChapter = {}));
    var ContentType;
    (function (ContentType) {
        ContentType["Stage"] = "Stage";
        ContentType["Video"] = "Video";
        ContentType["Article"] = "Article";
        ContentType["Menu"] = "Menu";
        ContentType["DetailTV"] = "Detail TV";
        ContentType["DetailVOD"] = "Detail VOD";
        ContentType["sGrid"] = "Structured Grid";
        ContentType["uGrid"] = "Unstructured Grid";
        ContentType["Settings"] = "Settings";
        ContentType["Search"] = "Search";
        ContentType["App"] = "App";
    })(ContentType = exports.ContentType || (exports.ContentType = {}));
    var HubPageVariables;
    (function (HubPageVariables) {
        HubPageVariables["Hub_ItemTarget"] = "f1";
        HubPageVariables["Hub_ItemIndex"] = "f5";
        HubPageVariables["Hub_LaneSource"] = "f2";
        HubPageVariables["Hub_LaneIndex"] = "f6";
        HubPageVariables["Hub_GridSource"] = "f3";
        HubPageVariables["Hub_GridIndex"] = "f7";
        HubPageVariables["Hub_MenuSource"] = "f4";
        HubPageVariables["Hub_ButtonIndex"] = "f8";
        HubPageVariables["Hub_ButtonTarget"] = "f9";
    })(HubPageVariables = exports.HubPageVariables || (exports.HubPageVariables = {}));
    var IClickType;
    (function (IClickType) {
        IClickType["Navigation"] = "N";
        IClickType["Action"] = "A";
        IClickType["Exit"] = "S";
    })(IClickType = exports.IClickType || (exports.IClickType = {}));
    var TVUsageTracker = (function () {
        function TVUsageTracker() {
            var _a;
            this.defaults = {
                enabled: false,
                reportErrors: true,
                reportKeys: false,
                reportClicks: true,
                reportBoot: false,
                reportNavigationType: "container",
                trackingSiteId: "588883",
                trackingUrl: "https://logs1204.xiti.com",
                voicePageHitsEnabled: true,
                queueMaximumBufferSize: 15,
                transformation: { mappings: [], defaultLevel2Id: Level2Ids.UNASSIGNED }
            };
            this.clientInfoValid = false;
            this.displayInfoValid = false;
            this.bootLogged = false;
            this.transformers = [];
            this.defaultLevel2Id = Level2Ids.UNASSIGNED;
            this.allTimeQueryParams = {};
            this.queue = new concurrentqueue_1.ConcurrentQueue("UsageTracker", 1);
            this.config = __assign(__assign({}, this.defaults), configuration_1.Configuration.instance.usagetracker);
            if ((_a = configuration_1.Configuration.instance.usagetracker) === null || _a === void 0 ? void 0 : _a.transformation) {
                if (configuration_1.Configuration.instance.usagetracker.transformation.mappings) {
                    this.transformers = configuration_1.Configuration.instance.usagetracker.transformation.mappings.map(function (r) { return ({ rx: new RegExp(r.regex), replacement: r.replace, lvl2id: r.lvl2id, disabled: r.disabled }); });
                }
                this.defaultLevel2Id = configuration_1.Configuration.instance.usagetracker.transformation.defaultLevel2Id;
            }
            this.config.trackingUrl += TVUsageTracker_1.trackingPath;
            if (!navigator.userAgent) {
                this.allTimeQueryParams[AtiBaseKeys.BrowserResolution] = (configuration_1.Configuration.instance.resolution ? this.getVideoFormatAsNumber(configuration_1.Configuration.instance.resolution) : "");
            }
            this.allTimeQueryParams[DtSiteVariables.UIVersion] = this.getUiVersion();
            this.allTimeQueryParams[AtiBaseKeys.Connection] = "offline";
        }
        TVUsageTracker_1 = TVUsageTracker;
        Object.defineProperty(TVUsageTracker.prototype, "IsEnabled", {
            get: function () {
                return this.config.enabled &&
                    (configuration_1.Configuration.instance.device.isSetTopBox
                        || (!configuration_1.Configuration.instance.device.isSetTopBox && !configuration_1.Configuration.instance.device.isProductionMode));
            },
            enumerable: false,
            configurable: true
        });
        TVUsageTracker.prototype.setClientInformation = function (clientInfo) {
            if (clientInfo) {
                this.allTimeQueryParams[DtSiteVariables.ConnectionType] = TVUsageTracker_1.connectionType;
                this.allTimeQueryParams[DtSiteVariables.DeviceType] = TVUsageTracker_1.deviceType;
                this.allTimeQueryParams[DtSiteVariables.SubscriberType] = clientInfo.ProvisioningType;
                this.allTimeQueryParams[DtSiteVariables.SubscriberId] = clientInfo.ANID;
                this.allTimeQueryParams[DtSiteVariables.UserProfilId] = clientInfo.ANID;
                this.allTimeQueryParams[DtSiteVariables.HardwareModel] = clientInfo.HwModel;
                this.allTimeQueryParams[DtSiteVariables.HardwareVersion] = clientInfo.HwModel;
                this.allTimeQueryParams[DtSiteVariables.ClientVersion] = clientInfo.SwProductVariant;
                this.allTimeQueryParams[DtSiteVariables.BandwidthForTv] = (clientInfo.Bandwidth / TVUsageTracker_1.conversionFactor).toString().replace(",", ".");
                this.allTimeQueryParams[DtSiteVariables.PhysicalId] = clientInfo.GUID || "";
                this.allTimeQueryParams[AtiBaseKeys.ClientID] = clientInfo.GUID || "";
                this.clientInfoValid = true;
            }
        };
        TVUsageTracker.prototype.setDisplayInformation = function (displayInfo) {
            var _a, _b;
            if (displayInfo) {
                this.allTimeQueryParams[AtiBaseKeys.VideoResolution] = this.getVideoFormatAsNumber(displayInfo.currentVideoFormat);
                this.allTimeQueryParams[DtSiteVariables.SupportedHdcp] = ((_a = displayInfo.supportedHdcpVersions) === null || _a === void 0 ? void 0 : _a.join("; ")) || "";
                this.allTimeQueryParams[DtSiteVariables.SupportedHDR] = ((_b = displayInfo.supportedHdrFormats) === null || _b === void 0 ? void 0 : _b.join("; ")) || "";
                this.allTimeQueryParams[DtSiteVariables.SupportedVideoFormat] = this.getVideoFormatAsNumber(displayInfo.supportedVideoFormats, 1);
                this.allTimeQueryParams[DtSiteVariables.TvModel] = displayInfo.tvModel || "";
                this.displayInfoValid = true;
            }
        };
        TVUsageTracker.prototype.getVideoFormatAsNumber = function (formats, dimension) {
            if (dimension === void 0) { dimension = 2; }
            var str = Array.isArray(formats) ? formats.join("_") : formats;
            if (!str) {
                return "";
            }
            var matches = str.match(/\d+/g);
            if (!matches || matches.length == 0) {
                return "";
            }
            var best = 0;
            matches.forEach(function (element) {
                var i = parseInt(element, 10);
                best = i > best ? i : best;
            });
            if (dimension == 1) {
                return "" + best;
            }
            if (best == 720) {
                return "1280x720";
            }
            else if (best == 1080) {
                return "1920x1080";
            }
            else if (best == 2160) {
                return "3840x2160";
            }
            else {
                return "1x" + best;
            }
        };
        TVUsageTracker.prototype.checkBootEvent = function () {
            var _this = this;
            if (!this.bootLogged && this.clientInfoValid && this.displayInfoValid) {
                this.bootLogged = true;
                if (this.config.reportBoot) {
                    this.queue.addTail(function () { return _this.singleHit({ timestamp: Date.now(), page: "system::boot", lvl2id: Level2Ids.BOOT_UPDATE, additionalFields: _this.allTimeQueryParams }); });
                }
            }
        };
        TVUsageTracker.prototype.trackFocus = function (_a) {
            var path = _a.path, lvl2id = _a.lvl2id, clickType = _a.clickType, layer = _a.layer;
            var lastNavigationElement = this.lastNavigationElement;
            this.lastNavigationElement = path;
            if (this.config.reportNavigationType == "none" || !path) {
                return;
            }
            if (lastNavigationElement != path) {
                if (this.config.reportNavigationType == "container") {
                    var idx = path.lastIndexOf("::");
                    if (idx) {
                        var containerName = path.substr(0, idx);
                        if (containerName != this.lastNavigationPath) {
                            this.lastNavigationPath = containerName;
                            this.event({ path: containerName, lvl2id: lvl2id, clickType: clickType, params: {} });
                        }
                    }
                }
                else if (this.config.reportNavigationType == "element") {
                    this.event({ path: path, lvl2id: lvl2id, clickType: clickType, params: {} });
                }
                else if (this.config.reportNavigationType == "page") {
                    var page = path.split("::", 1)[0];
                    if (this.lastNavigationPath != page) {
                        this.lastNavigationPath = page;
                        this.event({ path: page, lvl2id: lvl2id, clickType: clickType, params: {} });
                    }
                }
            }
        };
        TVUsageTracker.prototype.trackClick = function () {
            if (this.config.reportClicks && this.lastNavigationElement) {
                this.event({ path: this.lastNavigationElement, clickType: IClickType.Navigation });
            }
        };
        TVUsageTracker.prototype.trackKey = function (keyName) {
            if (this.config.reportKeys) {
                this.event({ path: "key::" + keyName, lvl2id: Level2Ids.NAVIGATION, clickType: IClickType.Action });
            }
        };
        TVUsageTracker.prototype.trackError = function (_a) {
            var _b;
            var sqmCode = _a.sqmCode, classId = _a.classId, errorId = _a.errorId, codeId = _a.codeId, additionalCode = _a.additionalCode;
            if ((this.config.reportErrors)) {
                var params = (_b = {},
                    _b[SqmPageVariables.SQMCode] = sqmCode,
                    _b[SqmPageVariables.ClassId] = classId,
                    _b[SqmPageVariables.ErrorId] = errorId,
                    _b[SqmPageVariables.CodeId] = codeId,
                    _b[SqmPageVariables.AdditionalCode] = additionalCode || "",
                    _b);
                this.event({ path: "sqm_error", lvl2id: Level2Ids.MESSAGE, clickType: undefined, params: params });
            }
        };
        TVUsageTracker.prototype.trackRemoteMessage = function (message) {
            var _a, _b;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("trackRemoteMessage called", TVUsageTracker_1.TAG)); });
            if (this.config.voicePageHitsEnabled) {
                var trackingInformation = message.trackingInformation;
                if (trackingInformation) {
                    var stcValue = StringTools_1.StringTools.dataStringify((_a = {
                            ObjectType: DtObjTypes.ObjTypeDetail
                        },
                        _a[VoiceErrors.ErrorTechnicalContext] = (trackingInformation.triggerStatus && trackingInformation.triggerStatus != "OK") ? trackingInformation.triggerStatus : "",
                        _a[VoiceErrors.ErrorDescription1] = trackingInformation.errorCode ? trackingInformation.errorCode : "",
                        _a[VoiceErrors.ErrorDescription2] = trackingInformation.errorMessage ? trackingInformation.errorMessage : "",
                        _a[VoiceErrors.ErrorDescription3] = "",
                        _a[VoiceErrors.ErrorDescription4] = "",
                        _a));
                    var VVariable = (_b = {},
                        _b[VoiceVariable.TriggerPhysicalDeviceID] = trackingInformation === null || trackingInformation === void 0 ? void 0 : trackingInformation.triggerPhysicalDeviceID,
                        _b[VoiceVariable.TriggerTerminalType] = trackingInformation === null || trackingInformation === void 0 ? void 0 : trackingInformation.triggerTerminalType,
                        _b[VoiceVariable.TriggerActingAs] = trackingInformation === null || trackingInformation === void 0 ? void 0 : trackingInformation.triggerActingAs,
                        _b[VoiceVariable.RequestID] = trackingInformation === null || trackingInformation === void 0 ? void 0 : trackingInformation.requestID,
                        _b[VoiceVariable.AtomicMessageType] = message.payload.$type,
                        _b[VoiceVariable.OriginalIntent] = trackingInformation === null || trackingInformation === void 0 ? void 0 : trackingInformation.originalIntent,
                        _b[VoiceVariable.Parameters] = JSON.stringify(trackingInformation.parameters),
                        _b[VoiceVariable.SearchContext] = trackingInformation.searchContext,
                        _b[VoiceVariable.UserType] = trackingInformation.userType,
                        _b[VoiceVariable.ActionGroup] = trackingInformation.actionGroup,
                        _b[VoiceVariable.ActionSubgroup] = trackingInformation.actionSubGroup,
                        _b[DtGlobalVariables.STC] = stcValue,
                        _b);
                    var chapters = ["Voice", "Dummy", "Dummy", "Voice"];
                    try {
                        this.track({ chapters: chapters, lvl2id: Level2Ids.VOICE, params: VVariable });
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("trackRemoteMessage call lvl2id->" + Level2Ids.VOICE + " ", TVUsageTracker_1.TAG)); });
                    }
                    catch (error) {
                        public_1.Logger.error(function (log) { return log(public_1.LogMsg("Error within trackRemoteMessage. " + (error.stack || error), TVUsageTracker_1.TAG)); });
                    }
                }
            }
        };
        TVUsageTracker.prototype.track = function (_a) {
            var _b, _c;
            var _this = this;
            var chapters = _a.chapters, lvl2id = _a.lvl2id, clickType = _a.clickType, params = _a.params;
            if (!this.IsEnabled) {
                return;
            }
            if (this.queue.length < this.config.queueMaximumBufferSize) {
                this.checkBootEvent();
                var path_1 = chapters.map(function (c) { return c === null || c === void 0 ? void 0 : c.replace(/\n/g, " ").replace(/::/g, ":"); }).join("::");
                if (path_1.length >= 255) {
                    path_1 = chapters.map(function (c) { return c === null || c === void 0 ? void 0 : c.replace(/\n/g, " ").substr(0, 50).replace(/::/g, ":"); }).join("::");
                }
                var additionalFields_1 = clickType
                    ? params ? __assign(__assign({}, params), (_b = {}, _b[AtiBaseKeys.ClickType] = clickType, _b)) : (_c = {}, _c[AtiBaseKeys.ClickType] = clickType, _c)
                    : params;
                this.queue.addTail(function () { return _this.singleHit({ timestamp: Date.now(), page: path_1, lvl2id: lvl2id, additionalFields: additionalFields_1 }); });
            }
        };
        TVUsageTracker.prototype.setCustomizeConfig = function (customConfig) {
            for (var _i = 0, customConfig_1 = customConfig; _i < customConfig_1.length; _i++) {
                var key = customConfig_1[_i];
                switch (key[0]) {
                    case "ATI_TRACKING_URL": {
                        if (key[1] !== undefined && typeof key[1] === "string" && key[1] !== "") {
                            this.config.trackingUrl = key[1];
                        }
                        break;
                    }
                    case "ATI_TRACKING_SITE_ID": {
                        if (key[1] !== undefined && typeof key[1] === "string" && key[1] !== "") {
                            this.config.trackingSiteId = key[1];
                        }
                        break;
                    }
                    case "ATI_VOICE_PAGE_HITS_ENABLED": {
                        if (key[1] !== undefined && typeof key[1] === "boolean") {
                            this.config.voicePageHitsEnabled = key[1];
                        }
                        break;
                    }
                }
            }
        };
        TVUsageTracker.prototype.event = function (_a) {
            var _b;
            var _this = this;
            var path = _a.path, lvl2id = _a.lvl2id, clickType = _a.clickType, params = _a.params;
            if (!this.IsEnabled) {
                return;
            }
            this.checkBootEvent();
            var transformedPath = lvl2id ? { path: path, lvl2id: lvl2id } : this.transformPath(path);
            if (!transformedPath) {
                return;
            }
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("tracking event: path->" + path + " lvl2id->" + lvl2id + " clickType->" + clickType, TVUsageTracker_1.TAG)); });
            var additionalFields = clickType ? (_b = {}, _b[AtiBaseKeys.ClickType] = clickType, _b) : {};
            if (this.queue.length < this.config.queueMaximumBufferSize) {
                this.queue.addTail(function () { return _this.singleHit({ timestamp: Date.now(), page: transformedPath.path, lvl2id: lvl2id || transformedPath.lvl2id || _this.defaultLevel2Id, additionalFields: __assign(__assign({}, params), additionalFields) }); });
            }
        };
        TVUsageTracker.prototype.singleHit = function (event) {
            var _a;
            var atiTimestamp = event.timestamp.toString();
            var options = {
                hour12: false,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            };
            var dateTime = new Date(event.timestamp).toLocaleTimeString("en-GB", options);
            dateTime = dateTime.replace(/:/gi, "x");
            var queries = __assign(__assign(__assign({}, this.allTimeQueryParams), (_a = {}, _a[AtiBaseKeys.Site] = this.config.trackingSiteId, _a[AtiBaseKeys.Level2] = event.lvl2id.toString(), _a[AtiBaseKeys.Page] = event.page.substr(0, 255), _a[AtiBaseKeys.CapturedTimestamp] = atiTimestamp, _a[AtiBaseKeys.Timestamp] = atiTimestamp, _a[AtiBaseKeys.CurrentLocalTime] = dateTime, _a[DtSiteVariables.LaneIndex] = event.lvl2id == Level2Ids.HUBS && event.additionalFields && guard_1.Guard.isNumber(event.additionalFields[HubPageVariables.Hub_LaneIndex]) ? event.additionalFields[HubPageVariables.Hub_LaneIndex] : undefined, _a)), event.additionalFields);
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("tracking for page: " + event.page + " data: " + StringTools_1.StringTools.dataStringify(queries), TVUsageTracker_1.TAG)); });
            var keyValues = Object
                .keys(queries)
                .sort()
                .map(function (k) { return queries[k] !== undefined
                ? new KeyValuePair_1.KeyValuePair(k, guard_1.Guard.isString(queries[k]) && (k[0] == "f" || k[0] == "x") ? "[" + queries[k] + "]" : queries[k])
                : undefined; })
                .filter(guard_1.Guard.isDefined);
            var url = this.config.trackingUrl;
            var uri = new urijs(url).escapeQuerySpace(false);
            keyValues.forEach(function (kv) {
                uri.addSearch(kv.key, kv.value);
            });
            var u = uri.href();
            return public_3.ImagePreLoader.addJob(u)
                .then(function () {
                public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("tracking done for page: " + event.page, TVUsageTracker_1.TAG)); });
            })
                .catch(function (error) {
                if (error instanceof public_2.BaseError) {
                    public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("tracking failed for page: " + event.page + " : " + error.message, TVUsageTracker_1.TAG)); });
                }
                else {
                    public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("tracking failed for page: " + event.page + " : " + JSON.stringify(error), TVUsageTracker_1.TAG)); });
                }
            });
        };
        TVUsageTracker.prototype.getUiVersion = function () {
            var buildInfo = configuration_1.Configuration.instance.buildinfo;
            return buildInfo != null ? buildInfo.majorVersion + "." + buildInfo.buildVersion : "unknown";
        };
        TVUsageTracker.prototype.transformPath = function (path) {
            var _loop_1 = function (t) {
                var result = path.replace(t.rx, t.replacement || "");
                if (result != path) {
                    if (t.disabled) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("disabled: " + path, TVUsageTracker_1.TAG)); });
                        return { value: undefined };
                    }
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("transformed: '" + path + "' into path: '" + result + "' lvl2: '" + (t.lvl2id && Level2Ids[t.lvl2id]) + "/" + t.lvl2id + "'", TVUsageTracker_1.TAG)); });
                    return { value: { path: result, lvl2id: t.lvl2id } };
                }
            };
            for (var _i = 0, _a = this.transformers; _i < _a.length; _i++) {
                var t = _a[_i];
                var state_1 = _loop_1(t);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            public_1.Logger.warn(function (log) { return log(public_1.LogMsg("no transform rule for: " + path, TVUsageTracker_1.TAG)); });
            return { path: path, lvl2id: undefined };
        };
        var TVUsageTracker_1;
        TVUsageTracker.trackingPath = "/hit.xiti";
        TVUsageTracker.connectionType = "DT_FIX_ATHOME";
        TVUsageTracker.deviceType = "STB";
        TVUsageTracker.conversionFactor = 1000;
        TVUsageTracker = TVUsageTracker_1 = __decorate([
            public_1.logTag()
        ], TVUsageTracker);
        return TVUsageTracker;
    }());
    exports.TVUsageTracker = TVUsageTracker;
});
//# sourceMappingURL=usagetracker.js.map