var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "../backend/public"], function (require, exports, public_1, backend) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BandwidthManagement = void 0;
    var BandwidthManagement = (function () {
        function BandwidthManagement() {
        }
        BandwidthManagement_1 = BandwidthManagement;
        BandwidthManagement.getBandwidthInfo = function () {
            return backend.ServiceClientAuthenticationZosa.getBandwidthInfo(backend.ServiceClientContextZosa.instance, { serviceProvider: null });
        };
        BandwidthManagement.getBandwidthManagerType = function () {
            return backend.ServiceClientAuthenticationZosa.getBandwidthManagerType(backend.ServiceClientContextZosa.instance);
        };
        BandwidthManagement.getBandwithManagerServerUrl = function () {
            return backend.ServiceClientAuthenticationZosa.getBandwithManagerServerUrl(backend.ServiceClientContextZosa.instance);
        };
        BandwidthManagement.releaseBandwidthBookings = function (parameters) {
            return backend.ServiceClientAuthenticationZosa.releaseBandwidthBookings(backend.ServiceClientContextZosa.instance, parameters);
        };
        BandwidthManagement.isBandwidthSufficientForUhd = function () {
            return BandwidthManagement_1.getBandwidthInfo()
                .then(function (info) { return info.data.deviceMaxBitrate >= BandwidthManagement_1.MinimumBandwidthUhdKbits; });
        };
        BandwidthManagement.getQualityInfo = function (qualityValue) {
            return BandwidthManagement_1.getTypeInfo(backend.zosaStatic, [
                "VIDEO_DEFINITION_UHD",
                "VIDEO_DEFINITION_HD",
                "VIDEO_DEFINITION_SD",
                "VIDEO_DEFINITION_UNKNOWN"
            ], qualityValue);
        };
        BandwidthManagement.getTransmissionTypeInfo = function (transmissionType) {
            return BandwidthManagement_1.getTypeInfo(backend.zosaStatic, [
                "TRANSMISSION_TYPE_ATSC_C",
                "TRANSMISSION_TYPE_ATSC_T",
                "TRANSMISSION_TYPE_DVB_C",
                "TRANSMISSION_TYPE_DVB_C2",
                "TRANSMISSION_TYPE_DVB_S",
                "TRANSMISSION_TYPE_DVB_S2",
                "TRANSMISSION_TYPE_DVB_T",
                "TRANSMISSION_TYPE_DVB_T2",
                "TRANSMISSION_TYPE_IPTV",
                "TRANSMISSION_TYPE_ISDB_C",
                "TRANSMISSION_TYPE_ISDB_S",
                "TRANSMISSION_TYPE_ISDB_T",
                "TRANSMISSION_TYPE_UNKNOWN"
            ], transmissionType);
        };
        BandwidthManagement.getBookingTypeInfo = function (bookingTypeValue) {
            return BandwidthManagement_1.getTypeInfo(backend.zosaStatic, [
                "BANDWIDTH_BOOKING_TYPE_CATCHUP_TV_IR",
                "BANDWIDTH_BOOKING_TYPE_DOWNLOAD",
                "BANDWIDTH_BOOKING_TYPE_LIVE_TV",
                "BANDWIDTH_BOOKING_TYPE_META_DATA",
                "BANDWIDTH_BOOKING_TYPE_PVR",
                "BANDWIDTH_BOOKING_TYPE_VOD"
            ], bookingTypeValue);
        };
        BandwidthManagement.getTypeInfo = function (obj, fields, value) {
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                if (obj[field] === value) {
                    return value + " [" + field + "]";
                }
            }
            return value + " [unknown]";
        };
        var BandwidthManagement_1;
        BandwidthManagement.MinimumBandwidthUhdKbits = 32000;
        BandwidthManagement = BandwidthManagement_1 = __decorate([
            public_1.logTag()
        ], BandwidthManagement);
        return BandwidthManagement;
    }());
    exports.BandwidthManagement = BandwidthManagement;
});
//# sourceMappingURL=applicationclient.bandwidthmanagement.js.map