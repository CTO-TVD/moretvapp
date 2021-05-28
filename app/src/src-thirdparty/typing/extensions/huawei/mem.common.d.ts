declare namespace huawei.mem.common {

    type contentType = "AUDIO_CHANNEL" | "AUDIO_VOD" | "CHANNEL" | "CREDIT_VOD" | "MIX" | "PROGRAM" | "SUBJECT" | "TELEPLAY_VOD" | "TVOD" | "VAS" | "VIDEO_CHANNEL" | "VIDEO_VOD" | "VOD" | "WEB_CHANNEL" | string;
    type timeString = string;
    type stringList = string;

    interface AgeRatingCfg {

        ratingId: string;
        lockType: number;
        timeFrame?: string;
        editable: string;
    }

    interface AuthenticateBasicInfo {

        terminalid?: string;
        mac?: string;
        locale?: number;
        supporthd?: "0" | "1";
        netuserid?: string;
        terminaltype?: string;
        terminalvendor?: string;
        osversion?: string;
        stbversion?: string;
        areaid?: string;
        templatename?: string;
        usergroup?: string;
        packageid?: string;
        bizdomain?: string;
        timezone?: string;
        utcEnable?: number;
        cnonce?: string;
        caDeviceInfo?: CADeviceInfo[];
        defaultChannelNS?: string;
        softwareVersion?: string;
        deviceNetType?: string;
        autoLogin?: number;
        bossID?: string;
        preSharedKeyID?: string;
        accessToken?: string;
        connectType?: number;
        stbSN?: string;
        subnetId?: string;
        fileFormats?: number[];
    }

    interface AuthenticateResult extends Result {

        upgradedomain?: string;
        upgradedomainbackup?: string;
        mgmtdomain?: string;
        mgmtdomainbackup?: string;
        ntpdomain?: string;
        ntpdomainbackup?: string;
        areaid?: string;
        templatename?: string;
        usergroup?: string;
        packageid?: string;
        epgurl: string;
        transportprotocol?: number;
        ca?: CAInfo;
        sessionid?: string;
        currenttime: timeString;
        parameters: Parameters;
        users?: UserIdentity[];
        isTriplePlay?: number;
        fccIP?: string;
        defaultProfile?: string;
        STBRCUsubscribed?: number;
        bandwidth?: number;
        isFirstLogin: number;
        dsmdomain?: string;
        dsmdomainbackup?: string;
        timezone?: string;
        dstTime?: string;
        subnetId?: string;
        userID?: string;
        loginOccasion?: string;
        deviceId?: string;
        profileId?: string;
        needSignEULA?: number;
        lockedNum?: number;
        waitUnLockTime?: number;
        remainLockedNum?: number;
        triggers?: Trigger[];
        paymentType?: number;
        provisioningType?: string;
        pictureUrl?: string[];
        bootStrapUrl4MBMS?: string;
        profiles?: MultiProfile[];
        availableHLSOTTNum?: number;
        userToken?: string;
        configurations?: Configuration[];
        rrsAddr?: string;
        loginIP?: string[];
        deviceName?: string;
        hotelId?: string;
        antiTamperURI?: NamedParameter[];
        location?: string;
        bossID?: string;
        streamMgmtEnable?: number;
        streamTypes?: StreamType[];
        validInfo4Stream?: string;
        validKey4Stream?: string;
        templateTimeStamp?: string;
        csrfToken?: string;
        pageTrackers?: PageTracker[];
        opt?: number;
        userTag?: string;
        userContentListFilter?: string;
        userContentFilter?: string;
        encryptToken?: string;
        caList?: CAInfo[];
        caDeviceInfo?: CADeviceInfo[];
        authToken?: string;
        expiredTime?: string;
        needSignPrivacyStatement?: number;
    }

    interface BusinessRight {

        is: number;
        va?: number;
        r?: Condition[];
        pt?: number;
        il?: number;
        st?: number;
    }

    interface CADeviceInfo {

        caDeviceType: string;
        caDeviceId?: string;
        caDeviceIdSignature?: string;
        VUID?: string;
        network?: string;
    }

    interface CAInfo {

        verimatrix?: Verimatrix;
        nagra?: NagraInfo;
        playready?: Playready;
        novel?: NovelCA;
        widevine?: Widevine;
    }

    interface Cast {

        actor?: string;
        director?: string;
        producer?: string;
        adaptor?: string;
    }

    interface CastDetail {

        castId: string;
        name: string;
        firstName?: string;
        middleName?: string;
        lastName?: string;
        favorite?: string;
        sex?: number;
        birthday?: string;
        hometown?: string;
        education?: string;
        height?: string;
        weight?: string;
        bloodGroup?: string;
        marriage?: number;
        webpage?: string;
        picture?: Picture;
        pictures?: PictureInfo[];
        title?: string;
        castCode?: string;
        introduce?: string;
    }

    interface CastInfo {

        castId: string;
        roleType: string;
        castName: string;
        castCode?: string;
    }

    interface Category {

        id: string;
        name?: string;
        type: contentType;
        introduce?: string;
        picture?: Picture;
        haschildren: -1 | 0 | 1;
        ratingid?: number;
        issubscribed?: "0" | "1";
        foreignsn?: string;
        parentCategoryId?: string;
        priceType?: number;
        contentNum: number;
        genres?: string;
        genreIds?: string[];
    }

    interface ChannelID {

        channelId: string;
        type: "CHANNEL" | "AUDIO_CHANNEL" | "VIDEO_CHANNEL" | "WEB_CHANNEL" | "FILECAST_CHANNEL" | "VAS";
    }

    interface ChannelLogo {

        url: string;
        display: string;
        location: string;
        size: string;
    }

    interface Condition {

        n: string;
        v: string[];
        t: number;
    }

    interface Configuration {

        cfgType: string;
        extensionInfo?: NamedParameter[];
    }

    interface ContentRight {

        e: number;
        va?: number;
        r?: Condition[];
        l?: number;
        dt?: number;
        tm?: string;
        mi?: string;
        ca?: string;
        mpd?: number;
        mpt?: number;
        du?: number;
        ffw?: number;
    }

    interface Device {

        deviceName?: string;
        deviceId: string;
        deviceType?: string;
        isonline?: "0" | "1" | "2" | "3";
        physicalDeviceId?: string;
        lastOfflineTime?: string;
        lastOnlineTime?: string;
        caDeviceInfos?: CADeviceInfo[];
        terminalType?: string;
        channelNamespace?: string;
        deviceToken?: string;
        status?: number;
        parentalCtrlCfg?: ParentalCtrlCfg[];
        ageRatingCfg?: AgeRatingCfg[];
        terminalVendor?: string;
        isSupportRPVR?: number;
        nextWakeupTime?: string;
        videoCodec?: string;
        definition?: string;
        fps?: number;
        hddWhiteList?: string[];
        ESTID?: string;
        channelNamespaceName?: string;
        isSupportDVBS?: number;
        DVBType?: number;
        includeExtendedSatChannel?: number;
        isSupportPVR?: number;
        numOfFreq?: number;
        numOfTuner?: number;
        numOfSimulTP?: number;
    }

    interface DeviceGroup {

        groupId: string;
        groupName: string;
        groupType: number;
    }

    interface DVBInfo {

        bearerType: number;
        serviceId: string;
        frequency?: number;
        symborate?: number;
        transportStreamId?: string;
        originalNetworkId?: string;
        polarity: number;
        satelliteName: string;
        satellitePosition: string;
        demodulation?: number;
        satelliteID?: string;
        transponderId?: string;
        caSystemIds?: number[];
        satelliteChannelNumber?: number;
        modulationSystem?: string;
        modulationType?: string;
        networkId?: string;
        dimension?: string;
        fecRate?: string;
        rollOffFactor?: number;
    }

    interface EmailConfig {

        smtpAddr: string;
        smtpPort?: number;
        sslEnableForSendEmail: "0" | "1";
        receiveEmailType: "0" | "1";
        receiveEmailAddr: string;
        receiveEmailPort: number;
        sslEnableForReceiveEmail: "0" | "1";
        account: string;
        password: string;
    }

    interface EmbmsInfo {

        serviceAnnouncementMethod?: string;
        mbmsPushMode?: string;
        mbmsCacheControl?: {
            "no-cache": boolean;
            "max-stale": boolean;
            expires: number;
        };
        mbmsServiceClass?: string;
        mbmsRequiredCapabilities?: string;
        mbmsBearerType?: string;
        fluteOutputStreamType?: string;
        fluteIGMPVersion?: string;
        fluteMulticastIP?: string;
        fluteMulticastPort?: string;
        mbmsDatasourceURL?: string;
    }

    interface GetLicenseTrigger {

        licenseURL: string;
        domainServerID: string;
        KID: string;
        customData: string;
    }

    interface JoinDomainTrigger {

        domainURL: string;
        domainServerID: string;
        accountId: string;
        customData: string;
        deviceCerUrl?: string;
    }

    interface LogicalChannel {

        contentId: string;
        foreignsn: string;
        externalCode?: string;
        chanNo: string;
        name: string;
        introduce?: string;
        type: "CHANNEL" | "AUDIO_CHANNEL" | "VIDEO_CHANNEL" | "WEB_CHANNEL" | "FILECAST_CHANNEL" | "VAS";
        slstype: number;
        isPPV: number;
        isfavorited: number;
        ratingId: number;
        pictures?: PictureInfo[];
        logo?: ChannelLogo;
        price?: string;
        languages?: string;
        subtitleLanguages?: string;
        statictimes: number;
        averagescore: number;
        restrictionList?: Condition[];
        genreIds?: string[];
        extensionInfo?: NamedParameter[];
        physicalChannels: PhysicalChannel[];
        pipPhysicalChannel?: PhysicalChannel;
        vasIds?: string[];
        isCUTVDependonLivetv: number;
        shortDescription?: string;
        categoryIds?: string[];
        nodeId?: string;
        locationCopyrights?: string[];
        originalChannelId?: string;
        sysChanNo?: number;
    }

    interface LogicalChannelDynamic {

        contentId: string;
        chanNo: number;
        type: string;
        isfavorited: number;
        restrictionList?: Condition[];
        genreIds?: string[];
        extensionInfo?: NamedParameter[];
        physicalChannels: PhysicalChannelDynamic[];
        pipPhysicalChannelDynamic?: PhysicalChannelDynamic;
        vasIds?: string[];
    }

    interface MultiProfile {

        id?: string;
        name?: string;
        introduce?: string;
        password?: string;
        quota?: number;
        logourl?: string;
        levels?: stringList;
        categoryids?: stringList;
        channelids?: stringList;
        vasids?: stringList;
        profiletype?: string;
        hidemessage?: "0" | "1";
        template?: string;
        lang?: number;
        mobilePhone?: string;
        reviceSMS?: "0" | "1";
        needSubscriberCnfmFlag?: "0" | "1";
        email?: string;
        birthday?: string;
        isDisplayInfoBar?: "0" | "1";
        channellistType?: string;
        emailConfig?: EmailConfig;
        sendSMSForReminder?: "0" | "1";
        reminderInterval?: number;
        leadTimeForSendReminder?: number;
        deviceid?: string;
        nationality?: string;
        familyRole?: string;
        receiveADType?: string;
        profilePINEnable?: "0" | "1";
        multiscreenEnable?: "0" | "1";
        purchaseEnable?: "0" | "1";
        loginName?: string;
        isonline?: "0" | "1";
        subscriberId?: string;
        location?: string;
        sign?: string;
        createTime?: string;
        isFilterLevel?: number;
        deviceIDs?: string[];
    }

    interface NagraInfo {

        multicastIP: string;
        multicastPort: number;
    }

    interface NamedParameter<K = string, V = string> {

        key: K;
        value?: V;
    }

    interface NovelCA {

        authorizeUrl: string;
    }

    interface PageTracker {

        type: string;
        appId: string;
        appPwd: string;
        isSupportedUserLogCollect: number;
        pageTrackerServerUrl: string;
    }

    interface Parameters {

        favouritelimit?: number;
        bookmarklimit?: number;
        locklimit?: number;
        profilelimit?: number;
        mashupaddress?: string;
        tvmsheartbiturl?: string;
        tvmsvodheartbiturl?: string;
        tvmsheartbitinterval?: number;
        tvmsdelaylength?: number;
        issupportpublicad?: number;
        adplatformurl?: string;
        adpublicstrategyurl?: string;
        adplayovernotifyurl?: string;
        bitband: number;
        giftLoyaltyByBrowseAd?: number;
        giftLoyaltyByReceiveAdWithSMS?: number;
        giftLoyaltyByReceiveAdWithEmail?: number;
        repeatTVLength?: number;
        restartTVOffset?: number;
        pltvDelay: number;
        DVBEanble: "0" | "1";
        sqmurl: string;
        favoCatalogLimit?: number;
    }

    interface ParentalCtrlCfg {

        name: string;
        lockType: number;
        contentForeignsn?: string[];
        editable: string;
        timeFrame?: string;
        isActive?: number;
        isStart?: number;
        comfortFeatureMode?: number;
        contentTypeforComfortfeature?: number;
        timeDuration?: number;
        activeEnhancedPCONPINChecking?: number;
        enableEnhancedPCONPINChecking?: number;
    }

    interface PeriodPVRTask {

        seriesType: string;
        channelno?: number;
        channelId?: string;
        mediaId?: string;
        createTime?: string;
        effectivetime?: string;
        overtime?: string;
        type: string;
        periodPVRTaskId?: number;
        deviceId?: string;
        stbPeriodId?: string;
        profileId?: string;
        starttime?: string;
        endtime?: string;
        days?: string;
        keyword?: string;
        beginOffset?: number;
        endOffset?: number;
        language?: string;
        subtitle?: string;
        contentPath?: string;
        checkExist?: number;
        seriesID?: string;
        periodPVRTaskName?: string;
        deleteMode?: number;
        latestSeriesNum?: number;
        recordNum?: number;
        latestPVRTask?: PVRTask;
        isShare?: number;
        alreadyUpdated?: number;
        unWatchedNum?: number;
        pvrList?: PVRTask[];
        seasonNum?: number;
        timeMode?: number;
        selectedSubNum?: number;
        selectedSeasonNum?: number;
        selectedBeginTime?: string;
        subPvrNum?: number;
        fromToToday?: string;
        fromTodayTo?: string;
        channelName?: string;
        channelPictures?: PictureInfo[];
        definition?: number;
        playbillID?: string;
        status: number;
    }

    interface PhysicalChannel {

        mediaId: string;
        mediaName?: string;
        externalCode?: string;
        fileFormat: number;
        isSupportPIP: number;
        videoCodec?: string;
        previewLength: number;
        previewCount: number;
        multicastsourceip?: string;
        fccEnable: number;
        fecEnable: number;
        encrypt: number;
        bitrate: number;
        playurl?: string;
        definition: string;
        dimension: number;
        formatOf3D?: number;
        hdcpEnable: number;
        macrovision: number;
        CGMSA: number;
        barkerMediaId?: string;
        extensionInfo?: NamedParameter[];
        embmsInfo?: EmbmsInfo;
        dvbInfo?: DVBInfo;
        isEncryptedRecOnHDD?: number;
        ottEITPid?: string;
        hssStreamImportFlag?: number;
        pictures?: PictureInfo[];
        btvCR?: ContentRight;
        pltvCR?: ContentRight;
        cutvCR?: ContentRight;
        cpvrCR?: ContentRight;
        npvrCR?: ContentRight;
        cpltvCR?: ContentRight;
        irCR?: ContentRight;
        cpvrRecCR?: ContentRight;
        npvrRecCR?: ContentRight;
        btvBR?: BusinessRight;
        pltvBR?: BusinessRight;
        cutvBR?: BusinessRight;
        cpvrBR?: BusinessRight;
        npvrBR?: BusinessRight;
        cpltvBR?: BusinessRight;
        irBR?: BusinessRight;
        cpvrRecBR?: BusinessRight;
        npvrRecBR?: BusinessRight;
        multiBitRate?: string;
        fps?: number;
        maxBitRate?: number;
        visibility?: number;
        externalStreamImportFlag?: number;
        castBR?: BusinessRight;
        npvrOnlinePlayCR?: ContentRight;
        npvrDownloadCR?: ContentRight;
        npvrOnlinePlayBR?: BusinessRight;
        npvrDownloadBR?: BusinessRight;
        masterCopyNPVR?: number;
    }

    interface PhysicalChannelDynamic {

        mediaId: string;
        playurl?: string;
        btvCR?: ContentRight;
        pltvCR?: ContentRight;
        cutvCR?: ContentRight;
        cpvrCR?: ContentRight;
        npvrCR?: ContentRight;
        cpltvCR?: ContentRight;
        irCR?: ContentRight;
        cpvrRecCR?: ContentRight;
        npvrRecCR?: ContentRight;
        btvBR?: BusinessRight;
        pltvBR?: BusinessRight;
        cutvBR?: BusinessRight;
        cpvrBR?: BusinessRight;
        npvrBR?: BusinessRight;
        cpltvBR?: BusinessRight;
        irBR?: BusinessRight;
        cpvrRecBR?: BusinessRight;
        npvrRecBR?: BusinessRight;
        castBR?: BusinessRight;
        npvrOnlinePlayCR?: ContentRight;
        npvrDownloadCR?: ContentRight;
        npvrOnlinePlayBR?: BusinessRight;
        npvrDownloadBR?: BusinessRight;
    }

    interface Picture {

        deflate?: stringList;
        poster?: stringList;
        still?: stringList;
        icon?: stringList;
        title?: stringList;
        ad?: stringList;
        draft?: stringList;
        background?: stringList;
        channelpic?: stringList;
        blackwhite?: stringList;
        channame?: stringList;
        other?: stringList;
    }

    interface PictureInfo {

        rel?: string;
        href: string;
        description?: string;
        imageType: string;
        copyrightNotice?: string;
        mimeType?: string;
        resolution?: number[];
    }

    interface PlayBill {

        id: string;
        foreignsn: string;
        channelid: string;
        name?: string;
        type: contentType;
        introduce?: string;
        starttime?: timeString;
        endtime?: timeString;
        ratingid?: number;
        picture?: Picture;
        istvod: "0" | "1";
        isnpvr: "0" | "1";
        issubscribed: "0" | "1";
        isppv: "0" | "1";
        ppvsubscribed: "0" | "1";
        contentId?: string;
        contentType?: 0 | 1 | 2 | 3 | 4 | 5 | 10 | 100 | 300;
        cast?: Cast;
        casts?: CastInfo[];
        subName?: string;
        subNum?: number;
        seasonNum?: number;
        contentRating?: string;
        genres?: string;
        genreIds: string[];
        country?: string;
        producedate?: string;
        keyword?: string;
        programType?: "episode" | "movie" | "program";
        visittimes?: number;
        advisory?: string[];
        extensionInfo?: NamedParameter[];
        priceType?: (NamedParameter<"BTV", "0" | "1"> | NamedParameter<"TVOD", "0" | "1">)[];
        seriesID?: string;
        isLoyalty?: "0" | "1";
        tvodStatus: "0" | "1";
        externalContentCode?: string;
        originMediaId?: string;
        explain?: string;
        isInstantRestart: number;
        lifetimeId?: string;
        contentRight?: string;
        originalTitle?: string;
        mainGenre?: number;
        audioAttribute?: string;
        videoAttribute?: string;
        tipType?: "highlight" | "tip";
        tipCategory?: "children" | "documentary" | "entertainment" | "movie" | "series" | "sports";
        externalClassifications?: string[];
        genreSynthetic?: "0" | "1";
        reviewScores?: string;
        externalIds?: string;
        gapFiller?: "0" | "1";
        rerun?: "0" | "1";
        episodeInformation?: string;
        communityRating?: string;
        fclist?: string[];
        relatedVodIds?: string[];
        isLive?: "0" | "1";
        externalDescription?: string[];
        pictures?: PictureInfo[];
        isBlackout?: "0" | "1";
        ratingForeignsn?: string;
        fileURI?: string;
        seriesDescriptions?: string[];
        seriesExternalIds?: string[];
        recordedMediaIds?: string[];
        seasonId?: string;
    }

    interface Playready {

        LA_Url: string;
        LUI_Url?: string;
    }

    interface Properties {

        properties?: Property[];
    }

    interface Property {

        exclude?: string;
        include?: string;
        name?: string;
    }

    interface PVRTask {

        pvrId: string;
        channelId: number;
        mediaId: string;
        channelNo: number;
        programId?: number;
        beginTime?: timeString;
        endTime?: timeString;
        pvrName?: string;
        deviceId?: string;
        bookmarkTime?: string;
        type: string;
        stbPvrId?: string;
        profileId?: string;
        periodPVRTaskId?: string;
        beginOffset?: number;
        endOffset?: number;
        isPltvtoPVR?: "0" | "1";
        isConflict?: "0" | "1";
        language?: string;
        subtitle?: string;
        contentPath?: string;
        subName?: string;
        subNum?: string;
        seasonNum?: number;
        checkExist?: number;
        isShare?: number;
        deleteMode?: number;
        isWatched?: number;
        casts?: CastInfo[];
        genreIds?: string[];
        ratingId?: string;
        ratingForeignsn?: string;
        playEnable?: number;
        realRecordLength?: number;
        errorCode?: string;
        introduce?: string;
        pictures?: PictureInfo[];
        subTasks?: SubPVRTask[];
        mixPvrId?: string;
        programRatingForeignsn?: string;
        definition?: number;
        dimension?: number;
        country?: string;
        seriesId?: string;
        extensionInfo?: NamedParameter[];
        eventID?: string;
        foreignsn?: string;
        lifetimeId?: string;
        TPId?: string;
        satelliteID?: string;
        tipType?: string;
        channelName?: string;
        channelPictures?: PictureInfo[];
        firstPlayTime?: string;
        playedTimes?: number;
        quadrant?: string;
        masterCopy?: number;
        status: number;
    }

    interface Result {

        retcode: number;
        retmsg?: string;
    }

    interface StreamType {

        streamTypeId: number;
        name: string;
        businessType: number;
        scope?: string;
        bitrate: number;
        minBitrate?: number;
    }

    interface SubPVRTask {

        subPvrId?: string;
        type: number;
        mediaId: string;
        status?: number;
        deviceId?: string;
        playEnable?: number;
        realRecordLength?: number;
        errorCode?: string;
        isWatched?: number;
        beginTime?: string;
        endTime?: string;
        beginOffset?: number;
        endOffset?: number;
        definition?: number;
        dimension?: number;
    }

    interface Trigger {

        triggerType: string;
        joinDomainTrigger: JoinDomainTrigger;
        getLicenseTrigger: GetLicenseTrigger;
    }

    interface UserIdentity {

        identityid: string;
        username: string;
        password: string;
        role: string;
        template?: string;
        lang?: number;
        logo?: string;
        description?: string;
    }

    interface VAS {

        id: string;
        name?: string;
        type: contentType;
        introduce?: string;
        url: string;
        ratingid?: number;
        issubscribed?: "0" | "1";
        picture?: Picture;
        starttime?: timeString;
        endtime?: timeString;
        categoryIds?: string[];
        genreIds?: string[];
        nodeId?: string;
        extensionInfo?: NamedParameter[];
        priceType?: number;
        isLoyalty?: number;
        dayTimeStart?: number;
        dayTimeEnd?: number;
        shortDescription?: string;
        deviceGroups?: DeviceGroup[];
        externalCode?: string;
        ratingForeignsn?: string;
        framedApp?: boolean;
        visibility?: number;
        foreignsn?: string;
    }

    interface Verimatrix {

        company: string;
        serveraddr: string;
        serverport: number;
        vksaddr: string;
        csmip?: string;
        csmport?: number;
        type: string;
        multiRightsPlayready?: string;
        multiRightsWidevine?: string;
    }

    interface Widevine {

        LA_Url: string;
    }
}
