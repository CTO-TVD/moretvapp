declare namespace huawei.mem.contentManagement {

    type NamedParameter<K = string, V = string> = huawei.mem.common.NamedParameter<K, V>;

    interface AllChannelDynamicReq {

        filterlist?: (NamedParameter<"DeviceId"> | NamedParameter<"IsHide", "-1" | "0" | "1">)[];
        channelNamespace?: string;
        channelURLType?: ("CHANNEL" | "AUDIO_CHANNEL" | "VIDEO_CHANNEL" | "WEB_CHANNEL" | "FILECAST_CHANNEL" | "VAS")[];
        channelIdList?: huawei.mem.common.ChannelID[];
        returnSatChannel?: 0 | 1;
    }

    interface AllChannelDynamicResp {

        counttotal: number;
        channelDynamicList?: huawei.mem.common.LogicalChannelDynamic[];
    }

    interface AllChannelInputParameter {

        userContentListFilter?: string;
        channelversion?: string;
    }

    interface AllChannelReq {

        metaDataVer?: "Channel/1.1";
        domain?: 0 | 1 | 2;
        channelNamespace?: string;
        filterlist?: (NamedParameter<"DeviceId"> | NamedParameter<"IsHide", "-1" | "0" | "1">)[];
        channelURLType?: ("CHANNEL" | "AUDIO_CHANNEL" | "VIDEO_CHANNEL" | "WEB_CHANNEL" | "FILECAST_CHANNEL" | "VAS")[];
        returnSatChannel?: 0 | 1;
        count?: number;
        offset?: number;
    }

    interface AllChannelResp {

        counttotal: number;
        channellist?: huawei.mem.common.LogicalChannel[];
    }

    interface CategoryListInputParameter {

        userContentFilter?: string;
    }

    interface CategoryListReq {

        categoryid: string;
        type: huawei.mem.common.contentType;
        count: number;
        offset: number;
        channelNamespace?: string[];
    }

    interface CategoryListResp {

        counttotal: number;
        categorylist?: huawei.mem.common.Category[];
    }

    interface GetCastDetailReq {

        castIds: string[];
    }

    interface GetCastDetailResp {

        casts: huawei.mem.common.CastDetail[];
    }

    interface PlayBillListInputParameter {

        userContentFilter?: string;
    }

    interface PlayBillListReq {

        channelid?: string;
        mediaId?: string;
        begintime?: huawei.mem.common.timeString;
        endtime?: huawei.mem.common.timeString;
        type?: 0 | 1 | 2 | 3;
        count: number;
        offset: number;
        isFillProgram?: 0 | 1 | 2;
        filterlist?: (NamedParameter<"Genre"> | NamedParameter<"Country"> | NamedParameter<"SubscriptionType", "-1" | "0" | "1" | "2" | "3" | "4" | "5"> | NamedParameter<"Initial"> | NamedParameter<"lifetimeId"> | NamedParameter<"SeriesId"> | NamedParameter<"SeriesId">)[];
        excluderlist?: (NamedParameter<"Country"> | NamedParameter<"PlaybillId"> | NamedParameter<"RatingId">)[];
        orderType?: 0 | 1 | 2 | 3 | 4;
        channelNamespace?: string;
        isFiltrate?: 0 | 1;
    }

    interface PlayBillListResp {

        playbilllist?: huawei.mem.common.PlayBill[];
        playbillVersion: string;
        counttotal: number;
    }

    interface VasListReq {

        categoryid: string;
        count: number;
        offset: number;
        orderType?: number;
    }

    interface VasListResp {

        counttotal: number;
        vaslist?: huawei.mem.common.VAS[];
    }
}
