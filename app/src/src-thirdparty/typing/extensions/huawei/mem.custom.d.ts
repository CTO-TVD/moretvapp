declare namespace huawei.mem.custom {

    interface DFCC {

        DFCCID: string;
        updateTime: string;
        DFCCAttributeList: DFCCAttribute[];
    }

    interface DFCCAttribute {

        attributeID: string;
        attributeName: string;
        attributeType: string;
        value: string;
        extensionInfoList?: huawei.mem.common.NamedParameter[];
    }
    interface DTAuthenticateReq extends huawei.mem.common.AuthenticateBasicInfo {

        terminalDetail?: huawei.mem.common.NamedParameter[];
        profileId?: string;
        mobileNetworkType?: number;
    }

    interface DTAuthenticateResp extends huawei.mem.common.AuthenticateResult {

        networkType?: number;
        isAtHome?: number;
        powerStrategy?: PowerMgmtStrategy;
        channelHashCode?: string;
        isKidsModEnable?: number;
        connectionType?: string;
        RAR?: string;
        contractStatusISP?: string;
        EPGGroupName?: string;
    }

    interface PowerMgmtStrategy {

        id: number;
        interactivityTimer: number;
        intervalTimer: number;
        maxWaitingTimer: number;
        preStartTimer: number;
    }

    interface QueryAllPVRDTReq {

        status?: string;
        type?: number;
        pvrType?: number;
        expandSubTask?: number;
        orderType?: string;
        filterlist?: huawei.mem.common.NamedParameter[];
        excluderlist?: huawei.mem.common.NamedParameter[];
        isFilter?: number;
        isReturnUnsharedTask?: number;
        isReturnSeriesTask?: number;
        DTQueryType?: number;
        count: number;
        offset: number;
        cpvrIDList?: string[];
    }

    interface QueryAllPVRDTResp extends huawei.mem.common.Result {

        counttotal?: number;
        pvrList?: (huawei.mem.common.PVRTask | huawei.mem.common.PeriodPVRTask)[];
        pvrDataVersion?: string;
    }

    interface QueryDFCCReq {

        userGroup?: string;
        terminalType?: string;
    }

    interface QueryDFCCResp extends huawei.mem.common.Result {

        DFCC?: DFCC;
    }
}
