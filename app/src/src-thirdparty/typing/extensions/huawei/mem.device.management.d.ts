declare namespace huawei.mem.deviceManagement {

    interface GetDeviceReq {

        userid: string;
        deviceType?: string;
        isEST?: number;
        filterUnbound?: number;
    }

    interface GetDeviceResp extends huawei.mem.common.Result {

        deviceList?: huawei.mem.common.Device[];
    }
}
