declare namespace huawei.mem.personalizationData {

    type NamedParameter<K = string, V = string> = huawei.mem.common.NamedParameter<K, V>;

    interface GetCustomChanNoReq {

        channelNamespace?: string;
        queryType?: number;
        deviceId?: string;
    }

    interface GetCustomChanNoResp extends huawei.mem.common.Result {

        customChanNo?: NamedParameter[];
    }
}
