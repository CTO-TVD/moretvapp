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
define(["require", "exports", "../baseRouter/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IntentCore = void 0;
    var prefix = "/appcore";
    var IntentCore;
    (function (IntentCore) {
        var AppLauncherHost = (function (_super) {
            __extends(AppLauncherHost, _super);
            function AppLauncherHost(data) {
                return _super.call(this, AppLauncherHost.pathname, data) || this;
            }
            AppLauncherHost.pathname = prefix + "/applauncher/host";
            return AppLauncherHost;
        }(public_1.BaseIntent));
        IntentCore.AppLauncherHost = AppLauncherHost;
        var AppLauncherStartup = (function (_super) {
            __extends(AppLauncherStartup, _super);
            function AppLauncherStartup(data) {
                return _super.call(this, AppLauncherStartup.pathname, __assign(__assign({}, data), { timestamp: data.timestamp || Date.now() })) || this;
            }
            AppLauncherStartup.pathname = prefix + "/applauncher/startup";
            return AppLauncherStartup;
        }(public_1.BaseIntent));
        IntentCore.AppLauncherStartup = AppLauncherStartup;
        var Settings = (function (_super) {
            __extends(Settings, _super);
            function Settings() {
                return _super.call(this, Settings.pathname, undefined) || this;
            }
            Settings.pathname = prefix + "/settings";
            return Settings;
        }(public_1.BaseIntent));
        IntentCore.Settings = Settings;
        var SettingsSearch = (function (_super) {
            __extends(SettingsSearch, _super);
            function SettingsSearch() {
                return _super.call(this, SettingsSearch.pathname, undefined) || this;
            }
            SettingsSearch.pathname = prefix + "/settingssearch";
            return SettingsSearch;
        }(public_1.BaseIntent));
        IntentCore.SettingsSearch = SettingsSearch;
        var Epg = (function (_super) {
            __extends(Epg, _super);
            function Epg(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, Epg.pathname, data) || this;
            }
            Epg.pathname = prefix + "/epg";
            return Epg;
        }(public_1.BaseIntent));
        IntentCore.Epg = Epg;
        var AddManualRecording = (function (_super) {
            __extends(AddManualRecording, _super);
            function AddManualRecording(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, AddManualRecording.pathname, data) || this;
            }
            AddManualRecording.pathname = prefix + "/manualrecord";
            return AddManualRecording;
        }(public_1.BaseIntent));
        IntentCore.AddManualRecording = AddManualRecording;
        var ProgramDetail = (function (_super) {
            __extends(ProgramDetail, _super);
            function ProgramDetail(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, ProgramDetail.pathname, data) || this;
            }
            ProgramDetail.pathname = prefix + "/programdetail";
            return ProgramDetail;
        }(public_1.BaseIntent));
        IntentCore.ProgramDetail = ProgramDetail;
        var LiveTV = (function (_super) {
            __extends(LiveTV, _super);
            function LiveTV(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, LiveTV.pathname, data) || this;
            }
            LiveTV.pathname = prefix + "/livetv";
            return LiveTV;
        }(public_1.BaseIntent));
        IntentCore.LiveTV = LiveTV;
        var ChannelManagement = (function (_super) {
            __extends(ChannelManagement, _super);
            function ChannelManagement(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, ChannelManagement.pathname, data) || this;
            }
            ChannelManagement.pathname = prefix + "/channelmanagement";
            return ChannelManagement;
        }(public_1.BaseIntent));
        IntentCore.ChannelManagement = ChannelManagement;
        var MenuHub = (function (_super) {
            __extends(MenuHub, _super);
            function MenuHub(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, MenuHub.pathname, data) || this;
            }
            MenuHub.pathname = prefix + "/hub";
            return MenuHub;
        }(public_1.BaseIntent));
        IntentCore.MenuHub = MenuHub;
        var SazWizardEntryPoint;
        (function (SazWizardEntryPoint) {
            SazWizardEntryPoint["none"] = "none";
            SazWizardEntryPoint["signalStrength"] = "signalStrength";
            SazWizardEntryPoint["currentSettings"] = "currentSettings";
        })(SazWizardEntryPoint = IntentCore.SazWizardEntryPoint || (IntentCore.SazWizardEntryPoint = {}));
        var SatWizard = (function (_super) {
            __extends(SatWizard, _super);
            function SatWizard(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, SatWizard.pathname, data) || this;
            }
            SatWizard.pathname = prefix + "/satwizard";
            return SatWizard;
        }(public_1.BaseIntent));
        IntentCore.SatWizard = SatWizard;
        var SatWizardWelcome = (function (_super) {
            __extends(SatWizardWelcome, _super);
            function SatWizardWelcome(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, SatWizardWelcome.pathname, data) || this;
            }
            SatWizardWelcome.pathname = SatWizard.pathname + "/satwelcome";
            return SatWizardWelcome;
        }(public_1.BaseIntent));
        IntentCore.SatWizardWelcome = SatWizardWelcome;
        var SatWizardConfirmManualSetup = (function (_super) {
            __extends(SatWizardConfirmManualSetup, _super);
            function SatWizardConfirmManualSetup(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, SatWizardConfirmManualSetup.pathname, data) || this;
            }
            SatWizardConfirmManualSetup.pathname = SatWizard.pathname + "/satconfirmmanualsetup";
            return SatWizardConfirmManualSetup;
        }(public_1.BaseIntent));
        IntentCore.SatWizardConfirmManualSetup = SatWizardConfirmManualSetup;
        var SatWizardNumberofcables = (function (_super) {
            __extends(SatWizardNumberofcables, _super);
            function SatWizardNumberofcables(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, SatWizardNumberofcables.pathname, data) || this;
            }
            SatWizardNumberofcables.pathname = SatWizard.pathname + "/numberofcables";
            return SatWizardNumberofcables;
        }(public_1.BaseIntent));
        IntentCore.SatWizardNumberofcables = SatWizardNumberofcables;
        var SatWizardSlotNumbering = (function (_super) {
            __extends(SatWizardSlotNumbering, _super);
            function SatWizardSlotNumbering(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, SatWizardSlotNumbering.pathname, data) || this;
            }
            SatWizardSlotNumbering.pathname = SatWizard.pathname + "/slotnumbering";
            return SatWizardSlotNumbering;
        }(public_1.BaseIntent));
        IntentCore.SatWizardSlotNumbering = SatWizardSlotNumbering;
        var SatWizardSatPositions = (function (_super) {
            __extends(SatWizardSatPositions, _super);
            function SatWizardSatPositions(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, SatWizardSatPositions.pathname, data) || this;
            }
            SatWizardSatPositions.pathname = SatWizard.pathname + "/satpositions";
            return SatWizardSatPositions;
        }(public_1.BaseIntent));
        IntentCore.SatWizardSatPositions = SatWizardSatPositions;
        var SatWizardCurrentSettings = (function (_super) {
            __extends(SatWizardCurrentSettings, _super);
            function SatWizardCurrentSettings(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, SatWizardCurrentSettings.pathname, data) || this;
            }
            SatWizardCurrentSettings.pathname = SatWizard.pathname + "/currentsettings";
            return SatWizardCurrentSettings;
        }(public_1.BaseIntent));
        IntentCore.SatWizardCurrentSettings = SatWizardCurrentSettings;
        var SatWizardDownloadChannelMap = (function (_super) {
            __extends(SatWizardDownloadChannelMap, _super);
            function SatWizardDownloadChannelMap(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, SatWizardDownloadChannelMap.pathname, data) || this;
            }
            SatWizardDownloadChannelMap.pathname = SatWizard.pathname + "/downloadchannelmap";
            return SatWizardDownloadChannelMap;
        }(public_1.BaseIntent));
        IntentCore.SatWizardDownloadChannelMap = SatWizardDownloadChannelMap;
        var SatWizardNumberOfSatellites = (function (_super) {
            __extends(SatWizardNumberOfSatellites, _super);
            function SatWizardNumberOfSatellites(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, SatWizardNumberOfSatellites.pathname, data) || this;
            }
            SatWizardNumberOfSatellites.pathname = SatWizard.pathname + "/numberofsatellites";
            return SatWizardNumberOfSatellites;
        }(public_1.BaseIntent));
        IntentCore.SatWizardNumberOfSatellites = SatWizardNumberOfSatellites;
        var SatWizardRecordingsConflict = (function (_super) {
            __extends(SatWizardRecordingsConflict, _super);
            function SatWizardRecordingsConflict(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, SatWizardRecordingsConflict.pathname, data) || this;
            }
            SatWizardRecordingsConflict.pathname = SatWizard.pathname + "/recordingsconflict";
            return SatWizardRecordingsConflict;
        }(public_1.BaseIntent));
        IntentCore.SatWizardRecordingsConflict = SatWizardRecordingsConflict;
        var SatWizardSignalStrength = (function (_super) {
            __extends(SatWizardSignalStrength, _super);
            function SatWizardSignalStrength(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, SatWizardSignalStrength.pathname, data) || this;
            }
            SatWizardSignalStrength.pathname = SatWizard.pathname + "/signalstrength";
            return SatWizardSignalStrength;
        }(public_1.BaseIntent));
        IntentCore.SatWizardSignalStrength = SatWizardSignalStrength;
        var SatWizardTunerConfiguration = (function (_super) {
            __extends(SatWizardTunerConfiguration, _super);
            function SatWizardTunerConfiguration(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, SatWizardTunerConfiguration.pathname, data) || this;
            }
            SatWizardTunerConfiguration.pathname = SatWizard.pathname + "/tunerconfiguration";
            return SatWizardTunerConfiguration;
        }(public_1.BaseIntent));
        IntentCore.SatWizardTunerConfiguration = SatWizardTunerConfiguration;
        var SatWizardReplacement = (function (_super) {
            __extends(SatWizardReplacement, _super);
            function SatWizardReplacement(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, SatWizardReplacement.pathname, data) || this;
            }
            SatWizardReplacement.pathname = SatWizard.pathname + "/replacement";
            return SatWizardReplacement;
        }(public_1.BaseIntent));
        IntentCore.SatWizardReplacement = SatWizardReplacement;
        var SearchContext;
        (function (SearchContext) {
            SearchContext["normal"] = "normal";
            SearchContext["kids"] = "kids";
            SearchContext["erotic"] = "erotic";
        })(SearchContext = IntentCore.SearchContext || (IntentCore.SearchContext = {}));
        var Search = (function (_super) {
            __extends(Search, _super);
            function Search(data) {
                if (data === void 0) { data = { disableGetContextGlobal: true }; }
                return _super.call(this, Search.pathname, data) || this;
            }
            Search.pathname = prefix + "/searchmain";
            return Search;
        }(public_1.BaseIntent));
        IntentCore.Search = Search;
        var SearchGrid = (function (_super) {
            __extends(SearchGrid, _super);
            function SearchGrid(data) {
                var _this = this;
                data.disableGetContextGlobal = true;
                _this = _super.call(this, SearchGrid.pathname, data) || this;
                return _this;
            }
            SearchGrid.pathname = prefix + "/searchgrid";
            return SearchGrid;
        }(public_1.BaseIntent));
        IntentCore.SearchGrid = SearchGrid;
        var StartupPage = (function (_super) {
            __extends(StartupPage, _super);
            function StartupPage(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, StartupPage.pathname, data) || this;
            }
            StartupPage.pathname = prefix + "/startuppage";
            return StartupPage;
        }(public_1.BaseIntent));
        IntentCore.StartupPage = StartupPage;
        var StandbyPage = (function (_super) {
            __extends(StandbyPage, _super);
            function StandbyPage() {
                return _super.call(this, StandbyPage.pathname, undefined) || this;
            }
            StandbyPage.pathname = prefix + "/standbypage";
            return StandbyPage;
        }(public_1.BaseIntent));
        IntentCore.StandbyPage = StandbyPage;
        var ArticlePage = (function (_super) {
            __extends(ArticlePage, _super);
            function ArticlePage(data) {
                return _super.call(this, ArticlePage.pathname, data) || this;
            }
            ArticlePage.pathname = prefix + "/articlepage";
            return ArticlePage;
        }(public_1.BaseIntent));
        IntentCore.ArticlePage = ArticlePage;
        var InstantRecording = (function (_super) {
            __extends(InstantRecording, _super);
            function InstantRecording(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, InstantRecording.pathname, data) || this;
            }
            InstantRecording.pathname = prefix + "/record";
            return InstantRecording;
        }(public_1.BaseIntent));
        IntentCore.InstantRecording = InstantRecording;
        var MenuRecordings = (function (_super) {
            __extends(MenuRecordings, _super);
            function MenuRecordings() {
                return _super.call(this, MenuRecordings.pathname, undefined) || this;
            }
            MenuRecordings.pathname = prefix + "/menurecordings";
            return MenuRecordings;
        }(public_1.BaseIntent));
        IntentCore.MenuRecordings = MenuRecordings;
        var MenuSeriesRecordings = (function (_super) {
            __extends(MenuSeriesRecordings, _super);
            function MenuSeriesRecordings() {
                return _super.call(this, MenuSeriesRecordings.pathname, undefined) || this;
            }
            MenuSeriesRecordings.pathname = prefix + "/menuseriesrecordings";
            return MenuSeriesRecordings;
        }(public_1.BaseIntent));
        IntentCore.MenuSeriesRecordings = MenuSeriesRecordings;
        var RecordingListMyRecordings = (function (_super) {
            __extends(RecordingListMyRecordings, _super);
            function RecordingListMyRecordings() {
                return _super.call(this, RecordingListMyRecordings.pathname, undefined) || this;
            }
            RecordingListMyRecordings.pathname = MenuRecordings.pathname + "/recordinglist";
            return RecordingListMyRecordings;
        }(public_1.BaseIntent));
        IntentCore.RecordingListMyRecordings = RecordingListMyRecordings;
        var RecordingListScheduled = (function (_super) {
            __extends(RecordingListScheduled, _super);
            function RecordingListScheduled() {
                return _super.call(this, RecordingListScheduled.pathname, undefined) || this;
            }
            RecordingListScheduled.pathname = MenuRecordings.pathname + "/recordingscheduledlist";
            return RecordingListScheduled;
        }(public_1.BaseIntent));
        IntentCore.RecordingListScheduled = RecordingListScheduled;
        var RecordingSettings = (function (_super) {
            __extends(RecordingSettings, _super);
            function RecordingSettings() {
                return _super.call(this, RecordingSettings.pathname, undefined) || this;
            }
            RecordingSettings.pathname = MenuRecordings.pathname + "/settingrecordingsettings";
            return RecordingSettings;
        }(public_1.BaseIntent));
        IntentCore.RecordingSettings = RecordingSettings;
        var SeriesRecordingList = (function (_super) {
            __extends(SeriesRecordingList, _super);
            function SeriesRecordingList(data) {
                return _super.call(this, SeriesRecordingList.pathname, data) || this;
            }
            SeriesRecordingList.pathname = MenuSeriesRecordings.pathname + "/seriesrecordinglist";
            return SeriesRecordingList;
        }(public_1.BaseIntent));
        IntentCore.SeriesRecordingList = SeriesRecordingList;
        var SettingScreenSound = (function (_super) {
            __extends(SettingScreenSound, _super);
            function SettingScreenSound() {
                return _super.call(this, SettingScreenSound.pathname, undefined) || this;
            }
            SettingScreenSound.pathname = prefix + "/settingscreensound";
            return SettingScreenSound;
        }(public_1.BaseIntent));
        IntentCore.SettingScreenSound = SettingScreenSound;
        var SettingRecordings = (function (_super) {
            __extends(SettingRecordings, _super);
            function SettingRecordings() {
                return _super.call(this, SettingRecordings.pathname, undefined) || this;
            }
            SettingRecordings.pathname = prefix + "/settingrecordings";
            return SettingRecordings;
        }(public_1.BaseIntent));
        IntentCore.SettingRecordings = SettingRecordings;
        var SettingMyAccount = (function (_super) {
            __extends(SettingMyAccount, _super);
            function SettingMyAccount() {
                return _super.call(this, SettingMyAccount.pathname, undefined) || this;
            }
            SettingMyAccount.pathname = prefix + "/settingmyaccount";
            return SettingMyAccount;
        }(public_1.BaseIntent));
        IntentCore.SettingMyAccount = SettingMyAccount;
        var SettingSystemDevices = (function (_super) {
            __extends(SettingSystemDevices, _super);
            function SettingSystemDevices() {
                return _super.call(this, SettingSystemDevices.pathname, undefined) || this;
            }
            SettingSystemDevices.pathname = prefix + "/settingsystemdevices";
            return SettingSystemDevices;
        }(public_1.BaseIntent));
        IntentCore.SettingSystemDevices = SettingSystemDevices;
        var SettingOtherDevices = (function (_super) {
            __extends(SettingOtherDevices, _super);
            function SettingOtherDevices() {
                return _super.call(this, SettingOtherDevices.pathname, undefined) || this;
            }
            SettingOtherDevices.pathname = prefix + "/settingotherdevices";
            return SettingOtherDevices;
        }(public_1.BaseIntent));
        IntentCore.SettingOtherDevices = SettingOtherDevices;
        var SettingRecordingSettings = (function (_super) {
            __extends(SettingRecordingSettings, _super);
            function SettingRecordingSettings() {
                return _super.call(this, SettingRecordingSettings.pathname, undefined) || this;
            }
            SettingRecordingSettings.pathname = SettingRecordings.pathname + "/settingrecordingsettings";
            return SettingRecordingSettings;
        }(public_1.BaseIntent));
        IntentCore.SettingRecordingSettings = SettingRecordingSettings;
        var SettingRecordingStorage = (function (_super) {
            __extends(SettingRecordingStorage, _super);
            function SettingRecordingStorage() {
                return _super.call(this, SettingRecordingStorage.pathname, undefined) || this;
            }
            SettingRecordingStorage.pathname = SettingRecordings.pathname + "/settingrecordingstorage";
            return SettingRecordingStorage;
        }(public_1.BaseIntent));
        IntentCore.SettingRecordingStorage = SettingRecordingStorage;
        var SettingRecordingFunction = (function (_super) {
            __extends(SettingRecordingFunction, _super);
            function SettingRecordingFunction() {
                return _super.call(this, SettingRecordingFunction.pathname, undefined) || this;
            }
            SettingRecordingFunction.pathname = SettingRecordings.pathname + "/settingrecordingfunction";
            return SettingRecordingFunction;
        }(public_1.BaseIntent));
        IntentCore.SettingRecordingFunction = SettingRecordingFunction;
        var SettingChannelManagement = (function (_super) {
            __extends(SettingChannelManagement, _super);
            function SettingChannelManagement() {
                return _super.call(this, SettingChannelManagement.pathname, undefined) || this;
            }
            SettingChannelManagement.pathname = SettingRecordings.pathname + "/channelmanagement";
            return SettingChannelManagement;
        }(public_1.BaseIntent));
        IntentCore.SettingChannelManagement = SettingChannelManagement;
        var SettingTvQuality = (function (_super) {
            __extends(SettingTvQuality, _super);
            function SettingTvQuality() {
                return _super.call(this, SettingTvQuality.pathname, undefined) || this;
            }
            SettingTvQuality.pathname = SettingRecordings.pathname + "/tvquality";
            return SettingTvQuality;
        }(public_1.BaseIntent));
        IntentCore.SettingTvQuality = SettingTvQuality;
        var SettingScreenFormat = (function (_super) {
            __extends(SettingScreenFormat, _super);
            function SettingScreenFormat() {
                return _super.call(this, SettingScreenFormat.pathname, undefined) || this;
            }
            SettingScreenFormat.pathname = SettingScreenSound.pathname + "/screenformat";
            return SettingScreenFormat;
        }(public_1.BaseIntent));
        IntentCore.SettingScreenFormat = SettingScreenFormat;
        var SettingPrivacy = (function (_super) {
            __extends(SettingPrivacy, _super);
            function SettingPrivacy() {
                return _super.call(this, SettingPrivacy.pathname, undefined) || this;
            }
            SettingPrivacy.pathname = SettingMyAccount.pathname + "/privacy";
            return SettingPrivacy;
        }(public_1.BaseIntent));
        IntentCore.SettingPrivacy = SettingPrivacy;
        var SettingPinManagement = (function (_super) {
            __extends(SettingPinManagement, _super);
            function SettingPinManagement() {
                return _super.call(this, SettingPinManagement.pathname, undefined) || this;
            }
            SettingPinManagement.pathname = SettingMyAccount.pathname + "/pinmanagement";
            return SettingPinManagement;
        }(public_1.BaseIntent));
        IntentCore.SettingPinManagement = SettingPinManagement;
        var SettingAudio = (function (_super) {
            __extends(SettingAudio, _super);
            function SettingAudio() {
                return _super.call(this, SettingAudio.pathname, undefined) || this;
            }
            SettingAudio.pathname = SettingScreenSound.pathname + "/audiodolbystereo";
            return SettingAudio;
        }(public_1.BaseIntent));
        IntentCore.SettingAudio = SettingAudio;
        var SettingSubtitle = (function (_super) {
            __extends(SettingSubtitle, _super);
            function SettingSubtitle() {
                return _super.call(this, SettingSubtitle.pathname, undefined) || this;
            }
            SettingSubtitle.pathname = SettingScreenSound.pathname + "/subtitle";
            return SettingSubtitle;
        }(public_1.BaseIntent));
        IntentCore.SettingSubtitle = SettingSubtitle;
        var SettingAudioDescription = (function (_super) {
            __extends(SettingAudioDescription, _super);
            function SettingAudioDescription() {
                return _super.call(this, SettingAudioDescription.pathname, undefined) || this;
            }
            SettingAudioDescription.pathname = SettingScreenSound.pathname + "/audiodescriptiom";
            return SettingAudioDescription;
        }(public_1.BaseIntent));
        IntentCore.SettingAudioDescription = SettingAudioDescription;
        var SettingHdcp = (function (_super) {
            __extends(SettingHdcp, _super);
            function SettingHdcp() {
                return _super.call(this, SettingHdcp.pathname, undefined) || this;
            }
            SettingHdcp.pathname = SettingScreenSound.pathname + "/hdcp";
            return SettingHdcp;
        }(public_1.BaseIntent));
        IntentCore.SettingHdcp = SettingHdcp;
        var SettingSystem = (function (_super) {
            __extends(SettingSystem, _super);
            function SettingSystem() {
                return _super.call(this, SettingSystem.pathname, undefined) || this;
            }
            SettingSystem.pathname = SettingSystemDevices.pathname + "/system";
            return SettingSystem;
        }(public_1.BaseIntent));
        IntentCore.SettingSystem = SettingSystem;
        var SettingMediaReceivers = (function (_super) {
            __extends(SettingMediaReceivers, _super);
            function SettingMediaReceivers() {
                return _super.call(this, SettingMediaReceivers.pathname, undefined) || this;
            }
            SettingMediaReceivers.pathname = SettingSystemDevices.pathname + "/mediareceivers";
            return SettingMediaReceivers;
        }(public_1.BaseIntent));
        IntentCore.SettingMediaReceivers = SettingMediaReceivers;
        var SettingPowermanagement = (function (_super) {
            __extends(SettingPowermanagement, _super);
            function SettingPowermanagement() {
                return _super.call(this, SettingPowermanagement.pathname, undefined) || this;
            }
            SettingPowermanagement.pathname = SettingSystemDevices.pathname + "/powersave";
            return SettingPowermanagement;
        }(public_1.BaseIntent));
        IntentCore.SettingPowermanagement = SettingPowermanagement;
        var SettingSystemReset = (function (_super) {
            __extends(SettingSystemReset, _super);
            function SettingSystemReset() {
                return _super.call(this, SettingSystemReset.pathname, undefined) || this;
            }
            SettingSystemReset.pathname = SettingSystemDevices.pathname + "/sysstemreset";
            return SettingSystemReset;
        }(public_1.BaseIntent));
        IntentCore.SettingSystemReset = SettingSystemReset;
        var SettingHdmi = (function (_super) {
            __extends(SettingHdmi, _super);
            function SettingHdmi() {
                return _super.call(this, SettingHdmi.pathname, undefined) || this;
            }
            SettingHdmi.pathname = SettingOtherDevices.pathname + "/hdmi";
            return SettingHdmi;
        }(public_1.BaseIntent));
        IntentCore.SettingHdmi = SettingHdmi;
        var SettingRemoteControl = (function (_super) {
            __extends(SettingRemoteControl, _super);
            function SettingRemoteControl() {
                return _super.call(this, SettingRemoteControl.pathname, undefined) || this;
            }
            SettingRemoteControl.pathname = SettingOtherDevices.pathname + "/remotecontrol";
            return SettingRemoteControl;
        }(public_1.BaseIntent));
        IntentCore.SettingRemoteControl = SettingRemoteControl;
        var SettingVoiceKey = (function (_super) {
            __extends(SettingVoiceKey, _super);
            function SettingVoiceKey() {
                return _super.call(this, SettingVoiceKey.pathname, undefined) || this;
            }
            SettingVoiceKey.pathname = SettingOtherDevices.pathname + "/voicekey";
            return SettingVoiceKey;
        }(public_1.BaseIntent));
        IntentCore.SettingVoiceKey = SettingVoiceKey;
        var SettingVoiceHistory = (function (_super) {
            __extends(SettingVoiceHistory, _super);
            function SettingVoiceHistory() {
                return _super.call(this, SettingVoiceHistory.pathname, undefined) || this;
            }
            SettingVoiceHistory.pathname = SettingOtherDevices.pathname + "/voicehistory";
            return SettingVoiceHistory;
        }(public_1.BaseIntent));
        IntentCore.SettingVoiceHistory = SettingVoiceHistory;
        var VoiceHistoryList = (function (_super) {
            __extends(VoiceHistoryList, _super);
            function VoiceHistoryList() {
                return _super.call(this, VoiceHistoryList.pathname, undefined) || this;
            }
            VoiceHistoryList.pathname = prefix + "/voicehistorylist";
            return VoiceHistoryList;
        }(public_1.BaseIntent));
        IntentCore.VoiceHistoryList = VoiceHistoryList;
        var SettingRestartDevice = (function (_super) {
            __extends(SettingRestartDevice, _super);
            function SettingRestartDevice() {
                return _super.call(this, SettingRestartDevice.pathname, undefined) || this;
            }
            SettingRestartDevice.pathname = SettingSystemDevices.pathname + "/restartdevice";
            return SettingRestartDevice;
        }(public_1.BaseIntent));
        IntentCore.SettingRestartDevice = SettingRestartDevice;
        var SettingMobileDevices = (function (_super) {
            __extends(SettingMobileDevices, _super);
            function SettingMobileDevices() {
                return _super.call(this, SettingMobileDevices.pathname, undefined) || this;
            }
            SettingMobileDevices.pathname = SettingOtherDevices.pathname + "/mobiledevices";
            return SettingMobileDevices;
        }(public_1.BaseIntent));
        IntentCore.SettingMobileDevices = SettingMobileDevices;
        var SettingSleepTimer = (function (_super) {
            __extends(SettingSleepTimer, _super);
            function SettingSleepTimer() {
                return _super.call(this, SettingSleepTimer.pathname, undefined) || this;
            }
            SettingSleepTimer.pathname = SettingSystemDevices.pathname + "/sleeptimer";
            return SettingSleepTimer;
        }(public_1.BaseIntent));
        IntentCore.SettingSleepTimer = SettingSleepTimer;
        var SettingSatellite = (function (_super) {
            __extends(SettingSatellite, _super);
            function SettingSatellite() {
                return _super.call(this, SettingSatellite.pathname, undefined) || this;
            }
            SettingSatellite.pathname = prefix + "/settingsatellite";
            return SettingSatellite;
        }(public_1.BaseIntent));
        IntentCore.SettingSatellite = SettingSatellite;
        var SettingSatelliteConfig = (function (_super) {
            __extends(SettingSatelliteConfig, _super);
            function SettingSatelliteConfig() {
                return _super.call(this, SettingSatelliteConfig.pathname, undefined) || this;
            }
            SettingSatelliteConfig.pathname = SettingSatellite.pathname + "/config";
            return SettingSatelliteConfig;
        }(public_1.BaseIntent));
        IntentCore.SettingSatelliteConfig = SettingSatelliteConfig;
        var SettingCableLength = (function (_super) {
            __extends(SettingCableLength, _super);
            function SettingCableLength() {
                return _super.call(this, SettingCableLength.pathname, undefined) || this;
            }
            SettingCableLength.pathname = SettingSatellite.pathname + "/cablelength";
            return SettingCableLength;
        }(public_1.BaseIntent));
        IntentCore.SettingCableLength = SettingCableLength;
        var SettingContentManagement = (function (_super) {
            __extends(SettingContentManagement, _super);
            function SettingContentManagement() {
                return _super.call(this, SettingContentManagement.pathname, undefined) || this;
            }
            SettingContentManagement.pathname = prefix + "/settingcontentmanagement";
            return SettingContentManagement;
        }(public_1.BaseIntent));
        IntentCore.SettingContentManagement = SettingContentManagement;
        var SettingMyApps = (function (_super) {
            __extends(SettingMyApps, _super);
            function SettingMyApps() {
                return _super.call(this, SettingMyApps.pathname, undefined) || this;
            }
            SettingMyApps.pathname = SettingContentManagement.pathname + "/myapps";
            return SettingMyApps;
        }(public_1.BaseIntent));
        IntentCore.SettingMyApps = SettingMyApps;
        var SettingFirstTimeUsage = (function (_super) {
            __extends(SettingFirstTimeUsage, _super);
            function SettingFirstTimeUsage() {
                return _super.call(this, SettingFirstTimeUsage.pathname, undefined) || this;
            }
            SettingFirstTimeUsage.pathname = SettingContentManagement.pathname + "/firsttimeusage";
            return SettingFirstTimeUsage;
        }(public_1.BaseIntent));
        IntentCore.SettingFirstTimeUsage = SettingFirstTimeUsage;
        var SettingCacheClearing = (function (_super) {
            __extends(SettingCacheClearing, _super);
            function SettingCacheClearing() {
                return _super.call(this, SettingCacheClearing.pathname, undefined) || this;
            }
            SettingCacheClearing.pathname = SettingContentManagement.pathname + "/cacheclearing";
            return SettingCacheClearing;
        }(public_1.BaseIntent));
        IntentCore.SettingCacheClearing = SettingCacheClearing;
        var SettingTopicChannelSelection = (function (_super) {
            __extends(SettingTopicChannelSelection, _super);
            function SettingTopicChannelSelection() {
                return _super.call(this, SettingTopicChannelSelection.pathname, undefined) || this;
            }
            SettingTopicChannelSelection.pathname = SettingContentManagement.pathname + "/topicchannelselection";
            return SettingTopicChannelSelection;
        }(public_1.BaseIntent));
        IntentCore.SettingTopicChannelSelection = SettingTopicChannelSelection;
        var SettingServiceProviderSelection = (function (_super) {
            __extends(SettingServiceProviderSelection, _super);
            function SettingServiceProviderSelection() {
                return _super.call(this, SettingServiceProviderSelection.pathname, undefined) || this;
            }
            SettingServiceProviderSelection.pathname = SettingContentManagement.pathname + "/serviceproviderselection";
            return SettingServiceProviderSelection;
        }(public_1.BaseIntent));
        IntentCore.SettingServiceProviderSelection = SettingServiceProviderSelection;
        var SettingProductStart = (function (_super) {
            __extends(SettingProductStart, _super);
            function SettingProductStart() {
                return _super.call(this, SettingProductStart.pathname, undefined) || this;
            }
            SettingProductStart.pathname = SettingContentManagement.pathname + "/settingproductstart";
            return SettingProductStart;
        }(public_1.BaseIntent));
        IntentCore.SettingProductStart = SettingProductStart;
        var SettingOnDemandAutoPlay = (function (_super) {
            __extends(SettingOnDemandAutoPlay, _super);
            function SettingOnDemandAutoPlay() {
                return _super.call(this, SettingOnDemandAutoPlay.pathname, undefined) || this;
            }
            SettingOnDemandAutoPlay.pathname = SettingContentManagement.pathname + "/settingondemandautoplay";
            return SettingOnDemandAutoPlay;
        }(public_1.BaseIntent));
        IntentCore.SettingOnDemandAutoPlay = SettingOnDemandAutoPlay;
        var SettingRestartFtu = (function (_super) {
            __extends(SettingRestartFtu, _super);
            function SettingRestartFtu() {
                return _super.call(this, SettingRestartFtu.pathname, undefined) || this;
            }
            SettingRestartFtu.pathname = SettingContentManagement.pathname + "/settingrestartftu";
            return SettingRestartFtu;
        }(public_1.BaseIntent));
        IntentCore.SettingRestartFtu = SettingRestartFtu;
        var SettingColorKeys = (function (_super) {
            __extends(SettingColorKeys, _super);
            function SettingColorKeys() {
                return _super.call(this, SettingColorKeys.pathname, undefined) || this;
            }
            SettingColorKeys.pathname = SettingContentManagement.pathname + "/colorkeys";
            return SettingColorKeys;
        }(public_1.BaseIntent));
        IntentCore.SettingColorKeys = SettingColorKeys;
        var SettingBookingoptions = (function (_super) {
            __extends(SettingBookingoptions, _super);
            function SettingBookingoptions() {
                return _super.call(this, SettingBookingoptions.pathname, undefined) || this;
            }
            SettingBookingoptions.pathname = SettingContentManagement.pathname + "/bookingoptions";
            return SettingBookingoptions;
        }(public_1.BaseIntent));
        IntentCore.SettingBookingoptions = SettingBookingoptions;
        var SettingYouthProtection = (function (_super) {
            __extends(SettingYouthProtection, _super);
            function SettingYouthProtection() {
                return _super.call(this, SettingYouthProtection.pathname, undefined) || this;
            }
            SettingYouthProtection.pathname = prefix + "/settingyouthprotection";
            return SettingYouthProtection;
        }(public_1.BaseIntent));
        IntentCore.SettingYouthProtection = SettingYouthProtection;
        var SettingAgeRestrictions = (function (_super) {
            __extends(SettingAgeRestrictions, _super);
            function SettingAgeRestrictions() {
                return _super.call(this, SettingAgeRestrictions.pathname, undefined) || this;
            }
            SettingAgeRestrictions.pathname = SettingYouthProtection.pathname + "/ageverifications";
            return SettingAgeRestrictions;
        }(public_1.BaseIntent));
        IntentCore.SettingAgeRestrictions = SettingAgeRestrictions;
        var SettingContentVisibilities = (function (_super) {
            __extends(SettingContentVisibilities, _super);
            function SettingContentVisibilities() {
                return _super.call(this, SettingContentVisibilities.pathname, undefined) || this;
            }
            SettingContentVisibilities.pathname = SettingYouthProtection.pathname + "/contentvisibilities";
            return SettingContentVisibilities;
        }(public_1.BaseIntent));
        IntentCore.SettingContentVisibilities = SettingContentVisibilities;
        var SettingYoutubeVisibilities = (function (_super) {
            __extends(SettingYoutubeVisibilities, _super);
            function SettingYoutubeVisibilities() {
                return _super.call(this, SettingYoutubeVisibilities.pathname, undefined) || this;
            }
            SettingYoutubeVisibilities.pathname = SettingYouthProtection.pathname + "/settingyoutubevisibilities";
            return SettingYoutubeVisibilities;
        }(public_1.BaseIntent));
        IntentCore.SettingYoutubeVisibilities = SettingYoutubeVisibilities;
        var SettingFunctionsLock = (function (_super) {
            __extends(SettingFunctionsLock, _super);
            function SettingFunctionsLock() {
                return _super.call(this, SettingFunctionsLock.pathname, undefined) || this;
            }
            SettingFunctionsLock.pathname = SettingYouthProtection.pathname + "/functionslock";
            return SettingFunctionsLock;
        }(public_1.BaseIntent));
        IntentCore.SettingFunctionsLock = SettingFunctionsLock;
        var SettingComfortFeature = (function (_super) {
            __extends(SettingComfortFeature, _super);
            function SettingComfortFeature() {
                return _super.call(this, SettingComfortFeature.pathname, undefined) || this;
            }
            SettingComfortFeature.pathname = SettingYouthProtection.pathname + "/comfortfeature";
            return SettingComfortFeature;
        }(public_1.BaseIntent));
        IntentCore.SettingComfortFeature = SettingComfortFeature;
        var SelfDiagnostic = (function (_super) {
            __extends(SelfDiagnostic, _super);
            function SelfDiagnostic() {
                return _super.call(this, SelfDiagnostic.pathname, undefined) || this;
            }
            SelfDiagnostic.pathname = prefix + "/selfdiagnostic";
            return SelfDiagnostic;
        }(public_1.BaseIntent));
        IntentCore.SelfDiagnostic = SelfDiagnostic;
        var Person = (function (_super) {
            __extends(Person, _super);
            function Person(data) {
                return _super.call(this, Person.pathname, data) || this;
            }
            Person.pathname = prefix + "/persondetail";
            return Person;
        }(public_1.BaseIntent));
        IntentCore.Person = Person;
        var PersonGrid = (function (_super) {
            __extends(PersonGrid, _super);
            function PersonGrid(data) {
                return _super.call(this, PersonGrid.pathname, data) || this;
            }
            PersonGrid.pathname = prefix + "/persongrid";
            return PersonGrid;
        }(public_1.BaseIntent));
        IntentCore.PersonGrid = PersonGrid;
        var LicenseView = (function (_super) {
            __extends(LicenseView, _super);
            function LicenseView() {
                return _super.call(this, LicenseView.pathname, undefined) || this;
            }
            LicenseView.pathname = prefix + "/licenseview";
            return LicenseView;
        }(public_1.BaseIntent));
        IntentCore.LicenseView = LicenseView;
        var BluetoothPairingPage = (function (_super) {
            __extends(BluetoothPairingPage, _super);
            function BluetoothPairingPage() {
                return _super.call(this, BluetoothPairingPage.pathname, undefined) || this;
            }
            BluetoothPairingPage.pathname = prefix + "/bluetoothPairingPage";
            return BluetoothPairingPage;
        }(public_1.BaseIntent));
        IntentCore.BluetoothPairingPage = BluetoothPairingPage;
        var FTUPage = (function (_super) {
            __extends(FTUPage, _super);
            function FTUPage(data) {
                return _super.call(this, FTUPage.pathname, data) || this;
            }
            FTUPage.pathname = prefix + "/ftupage";
            return FTUPage;
        }(public_1.BaseIntent));
        IntentCore.FTUPage = FTUPage;
        var FtuMasterSlavePage = (function (_super) {
            __extends(FtuMasterSlavePage, _super);
            function FtuMasterSlavePage() {
                return _super.call(this, FtuMasterSlavePage.pathname, undefined) || this;
            }
            FtuMasterSlavePage.pathname = prefix + "/ftumasterslavepage";
            return FtuMasterSlavePage;
        }(public_1.BaseIntent));
        IntentCore.FtuMasterSlavePage = FtuMasterSlavePage;
        var FtuMigrateAccountPage = (function (_super) {
            __extends(FtuMigrateAccountPage, _super);
            function FtuMigrateAccountPage() {
                return _super.call(this, FtuMigrateAccountPage.pathname, undefined) || this;
            }
            FtuMigrateAccountPage.pathname = prefix + "/ftumigrateaccountpage";
            return FtuMigrateAccountPage;
        }(public_1.BaseIntent));
        IntentCore.FtuMigrateAccountPage = FtuMigrateAccountPage;
        var FtuPrivacyPage = (function (_super) {
            __extends(FtuPrivacyPage, _super);
            function FtuPrivacyPage() {
                return _super.call(this, FtuPrivacyPage.pathname, undefined) || this;
            }
            FtuPrivacyPage.pathname = prefix + "/ftuprivacypage";
            return FtuPrivacyPage;
        }(public_1.BaseIntent));
        IntentCore.FtuPrivacyPage = FtuPrivacyPage;
        var Tutorial = (function (_super) {
            __extends(Tutorial, _super);
            function Tutorial() {
                return _super.call(this, Tutorial.pathname, undefined) || this;
            }
            Tutorial.pathname = prefix + "/tutorial";
            return Tutorial;
        }(public_1.BaseIntent));
        IntentCore.Tutorial = Tutorial;
    })(IntentCore = exports.IntentCore || (exports.IntentCore = {}));
});
//# sourceMappingURL=app.core.intent.js.map