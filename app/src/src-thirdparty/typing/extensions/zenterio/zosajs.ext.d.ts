declare namespace zosa {

    interface IZosaChannelStreamItemExtensions {

        cPVRPossible: boolean;
        instantRestartAvailable: boolean;
        isIPTVStream: boolean;
        livePlayPossible: boolean;
    }

    type ExtendedZosaChannelStreamItem = Omit<ZosaChannelStreamItem, "clientPvrAllowed" | "clientPvrSupported" | "instantRestartAllowed" | "instantRestartSupported" | "livePlayAllowed" | "livePlaySupported" | "networkPvrAllowed" | "networkPvrSupported"> & { dtExtensions: IZosaChannelStreamItemExtensions }

    interface ZosaChannelStreamItem {

        dtExtensions: IZosaChannelStreamItemExtensions;
    }

    interface IZosaChannelItemCustomProperties {

        externalCode: string;
    }

    interface IZosaChannelItemExtensions {

        barkerPoster: ZosaImage;

        channelLogoNew: ZosaImage;

        titleImage: ZosaImage;
        backgroundImage: ZosaImage;

        isHdr: boolean;
        showUhd: boolean;
        showHd: boolean;
        showSd: boolean;

        ageRating?: number;
        customProperties: IZosaChannelItemCustomProperties;

        isFunctionalChannel: boolean;
        functionalChannelType: DTFunctionalChannelType;

        isLocalTvChannel: boolean;

        streamBestAvailableQuality?: ZosaChannelStreamItem;

        channelTransmissionType: DTChannelTransmissionType;
    }

    interface ZosaChannelItem {

        $type?: "channelItem";
    }

    type ExtendedZosaChannelItem = Omit<ZosaChannelItem, "images" | "networkPvrAllowed" | "networkPvrSupported" | "parentalRating"> & { dtExtensions: IZosaChannelItemExtensions, streams?: ExtendedZosaChannelStreamItem[] }

    interface IZosaProgramItemExtensions {

        canCatchUp: boolean;
        catchUpItemId?: string;
        channel: zosa.ExtendedZosaChannelItem;
        hasAudioDescription: boolean;
        isDolby: boolean;
        isLocked: boolean;
        isStereo: boolean;
        isTvTip: boolean;
        isTwoChannelSound: boolean;
        isAiring: boolean;

        /**
         *  computed title which includes series and episode title if a series 
         */
        compoundTitle: string;

        ageRating?: number;
        cover: ZosaImage;
    }

    interface ZosaProgramItem {

        $type?: "programItem";
    }

    type ExtendedZosaProgramItem = Omit<ZosaProgramItem, "catchUpSupported" | "catchUpAllowed" | "isLive" | "images" | "isBlocked" | "isLocked" | "parentalRating"> & { dtExtensions: IZosaProgramItemExtensions }

    interface IZosaParentRecordingItemExtensions {

        channel?: zosa.ExtendedZosaChannelItem;
        isManualParentRecording: boolean;
    }

    interface ZosaParentRecordingItem {

        $type?: "parentRecordingItem";
    }

    type ExtendedZosaParentRecordingItem = ZosaParentRecordingItem & { dtExtensions: IZosaParentRecordingItemExtensions }

    interface IZosaRecordingItemExtensions {

        channel?: zosa.ExtendedZosaChannelItem;
        isActiveRecording: boolean;
        isActiveSeriesRecording: boolean;
        isPlayable: boolean;
        program?: zosa.ExtendedZosaProgramItem;
        ageRating?: number;
        unLockAgeRating?: number; // age rating to shown at parental unlock dialogs
        isLocked: boolean;
        imageFullHd: zosa.ZosaImage;
        imageBackground: zosa.ZosaImage;
        imageMiddle: zosa.ZosaImage;
        imageSmall: zosa.ZosaImage;
        recordingChannelSortingValue?: number;
        isManualRecording: boolean;
        recordingState: ZosaRecordingState;
        extendedEpisodeTitle?: string;

        showUhd: boolean;
        showHd: boolean;
        showSd: boolean;

        /**
         *  computed title which includes series and episode title if a series 
         */
        compoundTitle: string;
    }

    interface ZosaRecordingItem {

        $type?: "recordingItem";
    }

    type ExtendedZosaRecordingItem = Omit<ZosaRecordingItem, "recordingState" | "isBlocked" | "isLocked" | "images" | "parentalRating"> & { dtExtensions: IZosaRecordingItemExtensions }

    interface IZosaVasItemCustomProperties {

        dialAllowStop: boolean;
        dialAppName: string;
        dialEnabled: boolean;
        keyMappingId: string;
        manifestName: string;
        resolution: string;
        turnVideoOff: boolean;
        showAppDataprivacyWarning: boolean;
        token?: string;
    }

    interface IZosaVasItemExtensions {

        ageRating?: number;
        cover: zosa.ZosaImage;
        customProperties: IZosaVasItemCustomProperties;
        instanceId: string;
        isLocked: boolean;
        poster: zosa.ZosaImage;
    }

    interface ZosaVasItem {

        $type?: "vasItem";
    }

    type ExtendedZosaVasItem = Omit<ZosaVasItem, "images" | "isBlocked" | "isLocked" | "parentalRating"> & { dtExtensions: IZosaVasItemExtensions }

    export type ExtendedZosaRecommendedSchedulingOption = zosa.ZosaRecommendedSchedulingOption & { program?: zosa.ExtendedZosaProgramItem };

    export type ExtendedZosaRecordingConflictResolutionOption = zosa.ZosaRecordingConflictResolutionOption & { recordings: zosa.ExtendedZosaRecordingItem[] };

    export type ExtendedZosaRecordingConflictResolutionGroup = zosa.ZosaRecordingConflictResolutionGroup & { resolutionOptions: ExtendedZosaRecordingConflictResolutionOption[] };

    export type ExtendedZosaGetRecordingConflictResponse = zosa.ZosaGetRecordingConflictResponse & { conflictGroup: ExtendedZosaRecordingConflictResolutionGroup };

    interface IRemoveOtherStbDevicesParams {

        models: string[];
    }

    interface IImageDownloadConfig {

        images: zosa.ZosaRecordingImage[];
        downloadUrlTemplate: string;
    }

    interface DTParentalControlConfiguration {

        ageRatingCfg: DTAgeRatingsCfg;
        parentalCtrlCfg: DTParentalCtrlFeaturesCfg;
    }

    interface DTBandwidthManagerType {
        BandwidthManagerType: string;
    }

    interface DT_GetComfortFeatureStatusResponse {

        comfortFeatureRemainingTime: number;
    }

    interface DTComfortFeatureState {

        isActive: boolean;
    }

    const enum DTChannelTransmissionType {

        IPTV = 0,
        HYBRID = 1,
        SAT = 2
    }

    const enum DTFunctionalChannelType {

        NONE = 0,
        APPLICATION = 1,
        LOCALTV = 2
    }

    interface DTSubscriberInfo {

        RecCfgDefinition?: RecCfgDefinitionType;
        RecCfgKeepMode?: RecCfgKeepModeType;
        RecCfgOneClickEnable?: RecCfgOneClickEnableType;
        RecCfgPVRType?: RecCfgPVRTypeType;
        RecCfgPostPadding?: number;
        RecCfgPrePadding?: number;
        RecCfgSeriesTimeMode?: RecCfgSeriesTimeModeType;
        RecCfgSingleOrSeries?: RecCfgSingleOrSeriesType;
        DefaultPlayDefinition?: DefaultPlayDefinitionType;
    }

    const enum RecCfgDefinitionType {

        ALWAYS_SD,
        ALWAYS_BEST_QUALITY
    }

    const enum RecCfgKeepModeType {

        DELETE_UNTIL_HARD_DISK_FULL = 0,
        MANUALLY_DELETE = 1,
        DELETE_LATEST_FIVE_EPISODES = 5,
        DELETE_LATEST_TEN_EPISODES = 10
    }

    const enum DefaultPlayDefinitionType {

        DEFAULT_PLAY_DEFINITION_SD = 0,
        DEFAULT_PLAY_DEFINITION_HD = 1,
        DEFAULT_PLAY_DEFINITION_UHD = 2
    }

    const enum RecCfgOneClickEnableType {

        DISABLED,
        ENABLED
    }

    const enum RecCfgPVRTypeType {

        UNKNOWN,
        CPVR,
        NPVR,
        CPVR_NPVR
    }

    const enum RecCfgSeriesTimeModeType {

        ALL_EPISODES_OF_THE_DAY,
        ALL_EPISODES_OF_THIS_OR_NEWER_SEASON,
        ONLY_EPISODE_AT_THIS_TIME
    }

    type RecCfgSingleOrSeriesType = "Single" | "Series";
}
