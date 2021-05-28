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
define(["require", "exports", "bluebird", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "../../pages/applauncher/public"], function (require, exports, bluebird, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FlexActionMapper = exports.FlexActionKeywords = void 0;
    var FlexActionKeywords;
    (function (FlexActionKeywords) {
        FlexActionKeywords["app"] = "app";
        FlexActionKeywords["navigateArticle"] = "navigate.article";
        FlexActionKeywords["navigateEpg"] = "navigate.epg";
        FlexActionKeywords["navigateTv"] = "navigate.tv";
        FlexActionKeywords["navigateHelp"] = "navigate.help";
        FlexActionKeywords["navigateVoicecontrol"] = "navigate.voicecontrol";
        FlexActionKeywords["navigateContacts"] = "navigate.contacts";
        FlexActionKeywords["navigatePrivacy"] = "navigate.privacy";
        FlexActionKeywords["navigateMyVideos"] = "navigate.myVideos";
        FlexActionKeywords["navigateVoiceHistory"] = "navigate.voiceHistory";
        FlexActionKeywords["navigateSettingsVoiceKey"] = "navigate.settings.voiceKey";
        FlexActionKeywords["navigateSettingsVoiceHistoryList"] = "navigate.settings.voiceHistoryList";
        FlexActionKeywords["navigateSettingsRestartFtu"] = "navigate.settings.restartftu";
        FlexActionKeywords["navigateSettingsPackageManagement"] = "navigate.settings.packageManagement";
        FlexActionKeywords["navigateTvDetail"] = "navigate.tvDetail";
        FlexActionKeywords["navigateDeeplink"] = "navigate.deeplink";
    })(FlexActionKeywords = exports.FlexActionKeywords || (exports.FlexActionKeywords = {}));
    var FlexActionMapperError = (function (_super) {
        __extends(FlexActionMapperError, _super);
        function FlexActionMapperError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x63F;
            return _this;
        }
        return FlexActionMapperError;
    }(public_2.BaseError));
    var FlexActionMapper = (function () {
        function FlexActionMapper() {
        }
        FlexActionMapper_1 = FlexActionMapper;
        FlexActionMapper.executeAction = function (injectedComponent, _a) {
            var action = _a.action, breadcrumb = _a.breadcrumb, contentId = _a.contentId, deepLink = _a.deepLink, searchContext = _a.searchContext, scenario = _a.scenario, tvpackage = _a.tvpackage, backgroundImageUrl = _a.backgroundImageUrl;
            var resultPromise = bluebird.resolve(undefined);
            if ((action.indexOf("http://") === 0) || (action.indexOf("https://") === 0)) {
                if (action.toLowerCase().indexOf("/unstructuredgrid/") >= 0) {
                    public_3.UIActionTracker.getInstance().track(public_3.UIAction.UnstructuredGrid, { component: injectedComponent, breadcrumb: breadcrumb });
                }
                if (action.toLowerCase().indexOf("/structuredgrid/") >= 0) {
                    public_3.UIActionTracker.getInstance().track(public_3.UIAction.StructuredGrid, { component: injectedComponent, breadcrumb: breadcrumb });
                }
                resultPromise = resultPromise.return(action);
            }
            else {
                switch (action) {
                    case FlexActionKeywords.app:
                        public_3.UIActionTracker.getInstance().track(public_3.UIAction.Tile, { component: injectedComponent, breadcrumb: breadcrumb });
                        if (contentId) {
                            resultPromise = resultPromise.then(function () { return public_3.AppLauncherService.getInstance().startApplicationByCmsId(contentId, deepLink); });
                        }
                        break;
                    case FlexActionKeywords.navigateArticle:
                        break;
                    case FlexActionKeywords.navigateEpg:
                        resultPromise = resultPromise
                            .then(function () { return injectedComponent.startIntent(new public_1.IntentCore.Epg()); });
                        break;
                    case FlexActionKeywords.navigateMyVideos:
                        break;
                    case FlexActionKeywords.navigateSettingsPackageManagement:
                        if (scenario) {
                            var params_1 = new Map();
                            params_1.set("scenario", scenario);
                            if (tvpackage) {
                                params_1.set("package", tvpackage);
                            }
                            resultPromise = resultPromise.then(function () { return injectedComponent.startIntent(public_1.IntentMoreTV.Factory.create(params_1)); });
                        }
                        else {
                            resultPromise = resultPromise.then(function () { return injectedComponent.startIntent(new public_1.IntentCore.SettingBookingoptions()); });
                        }
                        break;
                    case FlexActionKeywords.navigateTvDetail:
                        resultPromise = resultPromise.then(function () { return injectedComponent.startIntent(new public_1.IntentCore.ProgramDetail({ contentId: contentId, idType: "CMS", breadcrumb: breadcrumb, searchContext: searchContext, backgroundImageUrl: backgroundImageUrl })); });
                        break;
                    case FlexActionKeywords.navigateVoiceHistory:
                        resultPromise = resultPromise.then(function () { return injectedComponent.startIntent(new public_1.IntentCore.SettingVoiceHistory()); });
                        break;
                    case FlexActionKeywords.navigateSettingsVoiceHistoryList:
                        resultPromise = resultPromise.then(function () { return injectedComponent.startIntent(new public_1.IntentCore.VoiceHistoryList()); });
                        break;
                    case FlexActionKeywords.navigateSettingsVoiceKey:
                        resultPromise = resultPromise.then(function () { return injectedComponent.startIntent(new public_1.IntentCore.SettingVoiceKey()); });
                        break;
                    case FlexActionKeywords.navigateSettingsRestartFtu:
                        resultPromise = resultPromise.then(function () { return injectedComponent.startIntent(new public_1.IntentCore.SettingRestartFtu()); });
                        break;
                    default:
                        resultPromise = resultPromise.throw(new FlexActionMapperError("Unknown flex action: '" + action + "'"));
                        break;
                }
            }
            return resultPromise;
        };
        FlexActionMapper.isKnownAction = function (action) {
            if ((action.indexOf("http://") === 0) || (action.indexOf("https://") === 0)) {
                return true;
            }
            return Object.keys(FlexActionKeywords).map(function (item) { return FlexActionKeywords[item]; }).some(function (item) { return item === action; });
        };
        FlexActionMapper.remoteSupportedIntents = function () {
            return [
                FlexActionKeywords.navigateEpg,
                FlexActionKeywords.navigateSettingsPackageManagement,
                FlexActionKeywords.navigateSettingsVoiceKey,
                FlexActionKeywords.navigateVoiceHistory,
                FlexActionKeywords.navigateVoicecontrol,
                FlexActionKeywords.navigateContacts,
                FlexActionKeywords.navigatePrivacy,
                FlexActionKeywords.navigateHelp,
            ];
        };
        var FlexActionMapper_1;
        FlexActionMapper.classID = 0x779;
        __decorate([
            public_2.log2(function () { return ({ name: FlexActionMapper_1.TAG, parameters: [1] }); })
        ], FlexActionMapper, "executeAction", null);
        FlexActionMapper = FlexActionMapper_1 = __decorate([
            public_2.logTag()
        ], FlexActionMapper);
        return FlexActionMapper;
    }());
    exports.FlexActionMapper = FlexActionMapper;
});
//# sourceMappingURL=flexaction.mapper.js.map