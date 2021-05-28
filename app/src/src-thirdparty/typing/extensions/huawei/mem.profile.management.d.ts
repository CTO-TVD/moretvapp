declare namespace huawei.mem.profileManagement {

    type EncryptionType = "0002" | "0003" | "0004";
    type NamedParameter<K = string, V = string> = huawei.mem.common.NamedParameter<K, V>;

    interface LoginResp {

        enctytoken: string;
        encryptiontype: EncryptionType;
        platformcode?: string;
        epgurl?: string;
        version?: string;
        epghttpsurl?: string;
        rootCerAddr?: string;
        upgAddr4IPTV?: string;
        upgAddr4OTT?: string;
        sam3Para?: (NamedParameter<"SAM3ServiceURL"> | NamedParameter<"OAuthScope"> | NamedParameter<"OAuthClientId"> | NamedParameter<"OAuthClientSecret">)[];
        upgHttpsAddr4OTT?: string;
        upgHttpsAddr4IPTV?: string;
        EPGDomainNameList?: NamedParameter[];
    }

    interface QuerySubscriberExReq {

        userType?: number;
        profileId?: string;
    }

    interface QuerySubscriberExResp extends huawei.mem.common.Result {

        extensionInfo?: (NamedParameter |
            NamedParameter<"L_ET_AccountID"> |
            NamedParameter<"securityQuestion"> |
            NamedParameter<"securityAnswer"> |
            NamedParameter<"RecCfgSingleOrSeries", "Single" | "Series"> |
            NamedParameter<"RecCfgSeriesTimeMode", "0" | "1" | "2"> |
            NamedParameter<"RecCfgDefinition", "0" | "1"> |
            NamedParameter<"RecCfgPVRType", "1" | "2" | "3"> |
            NamedParameter<"RecCfgPrePadding"> |
            NamedParameter<"RecCfgPostPadding"> |
            NamedParameter<"RecCfgKeepMode", "0" | "1" | "5" | "10"> |
            NamedParameter<"RecCfgOneClickEnable", "0" | "1"> |
            NamedParameter<"DefaultPlayDefinition", "0" | "1" | "2"> |
            NamedParameter<"MasterSTB"> |
            NamedParameter<"HDDID"> |
            NamedParameter<"TURKCELL_AUTHTYPE", "0" | "1"> |
            NamedParameter<"DEFAULT_BITRATE_SCOPE", "H" | "M" | "L"> |
            NamedParameter<"USED_SHARETIMES"> |
            NamedParameter<"DROPBOX_ACCESSTOKEN"> |
            NamedParameter<"DROPBOX_CONTENTTYPE"> |
            NamedParameter<"L_HOSTING_IPTV">)[];
    }
}
