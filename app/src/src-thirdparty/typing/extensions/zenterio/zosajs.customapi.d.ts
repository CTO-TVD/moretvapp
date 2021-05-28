// Type definitions for jsZOSA v0.113
// Project: NGTV
// Definitions by: Maik Schulze
// Definitions: https://github.com/CTO-TVD/src-thirdparty

declare namespace zosa {

    /**
      * @ngdoc interface
      * @name DT_MasterStbMasterUpdatedEvent
      *
      * @description
      * Event sent when the master STB has been remotely updated.
      *
      */
    interface DT_MasterStbMasterUpdatedEvent {

        /**
         * @ngdoc property
         * @name DT_MasterStbMasterUpdatedEvent#MasterSTB
         * @propertyOf DT_MasterStbMasterUpdatedEvent
         *
         * @description
         * ID of new Master STB.
         *
         * @returns {string}
         *
         */
        MasterSTB: ZosaId;
    }

    /**
      * @ngdoc interface
      * @name DT_CreateVodLicenseErrorEvent
      *
      * @description
      * Event sent on a license aquisition error.
      *
      */
    interface DT_CreateVodLicenseErrorEvent {

        /**
         * @ngdoc property
         * @name DT_CreateVodLicenseErrorEvent#DrmErrorCode
         * @propertyOf DT_CreateVodLicenseErrorEvent
         *
         * @description
         * Error code from the license handler.
         *
         * @returns {string}
         *
         */
        DrmErrorCode: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodLicenseErrorEvent#DrmErrorDescription
         * @propertyOf DT_CreateVodLicenseErrorEvent
         *
         * @description
         * Description of the error from license handler.
         *
         * @returns {string}
         *
         */
        DrmErrorDescription: string;

    }

    /**
      * @ngdoc interface
      * @name DT_CreateVodParams
      *
      * @description
      * Input parameters for DT-CreateVod.CreateVod.
      *
      */
    interface DT_CreateVodParams {

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#bandwidthType
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * Bandwidth type used for stream management.
         *
         * @returns {string}
         *
         */
        bandwidthType: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#episodeNumber
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * Episode number used for usage events.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        episodeNumber?: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#movieId
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * Missing documentation!!!
         *
         * @returns {string}
         *
         */
        movieId?: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#playContentId
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * The external VoD content id used as reference, used as id for usage events records and put within custom attributes as [playContentId] in the WRM header.
         *
         * @returns {string}
         *
         */
        playContentId: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#playDrmKeyId
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * Playready key id (KID) used in the WRM header.
         *
         * @returns {string}
         *
         */
        playDrmKeyId: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#playDrmLAPB
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * Licence acquisition parameters sent as custom data to license server.
         *
         * @returns {string}
         *
         */
        playDrmLAPB: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#playDrmLAUrl
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * Playready license acquisition URL.
         *
         * @returns {string}
         *
         */
        playDrmLAUrl: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#playUrl
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * URL to the manifest of the content to play.
         *
         * @returns {string}
         *
         */
        playUrl: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#productId
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * Product id used in usage events.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        productId?: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#serieId
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * Series Id used in usage events.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        serieId?: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#trickContentId
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * The external trick play VoD content id used within custom attributes as [trickContentId] in the WRM header for trick play stream.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        trickContentId?: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#trickDrmKeyId
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * Playready key id (KID) used in the WRM header for trick play content.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        trickDrmKeyId?: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#trickDrmLAPB
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * The trickplay license acquisition parameters sent as custom data to license server.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        trickDrmLAPB?: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#trickDrmLAUrl
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * Playready license acquisition URL for trickplay.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        trickDrmLAUrl?: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#trickUrl
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * URL to the manifest of the trick play content.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        trickUrl?: string;

        /**
         * @ngdoc property
         * @name DT_CreateVodParams#dmmMovieId
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * Missing documentation!!!
         *
         * @returns {string}
         *
         */
        dmmMovieId?: string;
        
        /**
         * @ngdoc property
         * @name DT_CreateVodParams#playDrmWidevineLAUrl
         * @propertyOf DT_CreateVodParams
         *
         * @description
         * Missing documentation!!!  Widevine license acquisition URL.
         *
         * @returns {string}
         *
         */
        playDrmWidevineLAUrl?: string;

    }

    type DT_TransponderItem_FecRateType = "1/2" | "2/3" | "3/4" | "5/6" | "7/8" | "8/9" | "3/5" | "4/5" | "9/10" | "NoCoding";
    type DT_TransponderItem_ModulationSystemType = "DVB-S" | "DVB-S2";
    type DT_TransponderItem_ModulationType = "AUTO" | "QPSK" | "8PSK" | "16-QAM" | "8APSK" | "16APSK";
    type DT_TransponderItem_PolarizationType = "Vertical" | "Horizontal" | "Left_Circular" | "Right_Circular";

    /**
     * @ngdoc interface
     * @name DT_TransponderItem
     *
     * @description
     * Used for DT-SatelliteInformationManager ZosaCustomApi.
     *
     */
    interface DT_TransponderItem {
        /**
         * @ngdoc property
         * @name DT_TransponderItem#caSystemIds
         * @propertyOf DT_TransponderItem
         *
         * @description
         *  ID array of the CAS that encrypts the DVB-S channel. This parameter can be left empty.
         *
         * • Optional.
         *
         * @returns {number[]} integer[]
         *
         */
        caSystemIds: number[]

        /**
         * @ngdoc property
         * @name DT_TransponderItem#deliverySystemDescriptor
         * @propertyOf DT_TransponderItem
         *
         * @description
         * Delivery system descriptor for transponder. The property value is a string with tuning parameters as defined by DVB-SI [EN 300 468] section 6.2.13.
         * Each byte of the delivery system descriptor is encoded by two hexadecimal characters [0-9,a-f,A-F].
         * Example: "430b0113620001928602200003"
         * 
         * mandatory
         * 
         * @returns {string}
         */
        deliverySystemDescriptor: string

        /**
         * @ngdoc property
         * @name DT_TransponderItem#fecRate
         * @propertyOf DT_TransponderItem
         *
         * @description
         *  Forward error correction rate of the transponder. No value may be available. The options are as follows {@link DT_TransponderItem_FecRateType}:
         * "1/2"
         * "2/3"	
         * "3/4"	
         * "5/6"	
         * "7/8"	
         * "8/9"	
         * "3/5"	
         * "4/5"	
         * "9/10"	
         * "NoCoding"	
         * 
         * • Optional.
         *
         * @returns {string} optional
         *
         */
        fecRate?: DT_TransponderItem_FecRateType

        /**
         * @ngdoc property
         * @name DT_TransponderItem#frequency
         * @propertyOf DT_TransponderItem
         *
         * @description
         *  Frequency. Unit: MHz
         * 
         * • Optional.
         *
         * @returns {number[]} integer[] optional
         *
         */
        frequency?: number

        /**
         * @ngdoc property
         * @name DT_TransponderItem#modulationSystem
         * @propertyOf DT_TransponderItem
         *
         * @description
         *  Transponder modulation system. The options are as follows {@link DT_TransponderItem_ModulationSystemType}:
         *  "DVB-S"	   "DVB-S2"	
         * • Optional.
         *
         * @returns {DT_TransponderItem_ModulationSystemType} optional
         *
         */
        modulationSystem?: DT_TransponderItem_ModulationSystemType

        /**
         * @ngdoc property
         * @name DT_TransponderItem#modulationType
         * @propertyOf DT_TransponderItem
         *
         * @description
         *  Transponder modulation type. The options are as follows {@link DT_TransponderItem_ModulationType}:
         * "AUTO"	 
         * "QPSK"	
         * "8PSK"	
         * "16-QAM"	
         * "8APSK"	
         * "16APSK"	
         * 
         * • Optional.
         *
         * @returns {DT_TransponderItem_ModulationType} optional
         *
         */
        modulationType?: DT_TransponderItem_ModulationType

        /**
         * @ngdoc property
         * @name DT_TransponderItem#networkId   
         * @propertyOf DT_TransponderItem
         *
         * @description
         * DVB network ID.
         * 
         * • Optional.
         *
         * @returns {string} optional
         *
         */
        networkId?: string

        /**
         * @ngdoc property
         * @name DT_TransponderItem#originalNetworkId   
         * @propertyOf DT_TransponderItem
         *
         * @description
         * DVB original newtork ID.
         * 
         * • Optional.
         *
         * @returns {number} optional
         *
         */
        originalNetworkId: number

        /**
         * @ngdoc property
         * @name DT_TransponderItem#polarity   
         * @propertyOf DT_TransponderItem
         *
         * @description
         * Polarization of a DVB-S channel. The options are as follows {@link DT_TransponderItem_PolarizationType}:
         * "Vertical"	 
         * "Horizontal"	
         * "Left_Circular"	
         * "Right_Circular"
         * 
         * @returns {string}
         *
         */
        polarity: number //DT_TransponderItem_PolarizationType DOCU ISSUE IN file:///C:/Users/Darmstadt/Downloads/doc/jszosa/DT_TransponderItem.html

        /**
         * @ngdoc property
         * @name DT_TransponderItem#rollOffFactor   
         * @propertyOf DT_TransponderItem
         *
         * @description
         * Roll off factor as a floating point number. No value may be available.
         * 
         * • Optional.
         *
         * @returns {number} float optional
         *
         */
        rollOffFactor?: number

        /**
         * @ngdoc property
         * @name DT_TransponderItem#symbolRate   
         * @propertyOf DT_TransponderItem
         *
         * @description
         * Symbol rate. Unit: KS/s
         * 
         * • Optional.
         *
         * @returns {number} integer optional
         *
         */
        symbolRate?: number;

        /**
         * @ngdoc property
         * @name DT_TransponderItem#transponderId   
         * @propertyOf DT_TransponderItem
         *
         * @description
         * DVB-S transponder id.
         * 
         * • Optional.
         *
         * @returns {string} optional
         *
         */
        transponderId?: string

        /**
         * @ngdoc property
         * @name DT_TransponderItem#transportStreamId   
         * @propertyOf DT_TransponderItem
         *
         * @description
         * DVB-S transponder id.
         * 
         * • Optional.
         *
         * @returns {number} integer optional
         *
         */
        transportStreamId?: number
    }


    /**
      * @ngdoc interface
      * @name DT_CallBackendApi
      *
      * @description
      * Input parameters for DT-BackendDataAccess.CallBackendApi.
      *
      */
    interface DT_CallBackendApi {

        /**
         * @ngdoc property
         * @name DT_CallBackendApi#apiName
         * @propertyOf DT_CallBackendApi
         *
         * @description
         * JSON/<api name> of Huawei backend.
         *
         * @returns {string}
         *
         */
        apiName: "TDSGet" | "TDSSet" | "GetCustomizeConfig";

        /**
         * @ngdoc property
         * @name DT_CallBackendApi#requestBody
         * @propertyOf DT_CallBackendApi
         *
         * @description
         * parameter for Huawei backend call as JSON stringified.
         *
         * @returns {string}
         *
        */
        requestBody: string;

        /**
         * @ngdoc property
         * @name DT_CallBackendApi#requestHeaders
         * @propertyOf DT_CallBackendApi
         *
         * @description
         * optional custom headers as JSON stringified.
         *
         * @returns {string}
         *
        */
        requestHeaders?: string;

    }


    /**
      * @ngdoc interface
      * @name DT_GetParams
      *
      * @description
      * Input parameters for DT-BackendDataAccess.GET.
      *
      */
    interface DT_GetParams {

        /**
         * @ngdoc property
         * @name DT_GetParams#url
         * @propertyOf DT_GetParams
         *
         * @description
         * Path of the call.
         *
         * @returns {string}
         *
         */
        url: string;

    }

    /**
     * @ngdoc interface
     * @name DT_GetReponse
     *
     * @description
     *
     */
    interface DT_GetReponse {

        /**
         * @ngdoc property
         * @name DT_GetReponse#data
         * @propertyOf DT_GetReponse
         *
         * @description
         * Raw response from the MEM server.
         *
         * @returns {string}
         *
         */
        data?: string;

        /**
         * @ngdoc property
         * @name DT_GetReponse#menuId
         * @propertyOf DT_GetReponse
         *
         * @description
         * Retreive the top menu ID used by calls to EPG/rest/menu.
         *
         * @returns {string}
         *
         */
        menuId?: number;

        /**
         * @ngdoc property
         * @name DT_GetReponse#vasCategoryId
         * @propertyOf DT_GetReponse
         *
         * @description
         * Retreive the "VASCategoryID" from MEM customized config.
         *
         * @returns {string}
         *
         */
        vasCategoryId?: string;

    }

    // enum TdsParameterName {

    //     AuthorizeValidationgroupLivetv = "f728", // Authorization to use the Live TV stream in the validation group
    //     AbTestingGroupB = "f723",// A/B-Testing Group B
    //     SatTarif = "f042", // Identifies a SAT tarif
    //     IndicateNetflixBooked = "f065",  // Indicator if netflix is booked,
    //     UniversalTarifIdentifier = "f262" // Identifier for new products which could be used of IPTV as well as SAT STBs
    // }

    interface ITdsGetParameters {

        parameterName: string[];
    }

    interface ITdsSetParameters {

        parameters: ITdsParameter[];
    }

    interface IHttpHeader {

        headerKey: string;
        headerValue: string;
    }

    interface ITdsParameter {

        key: string,
        value?: string;
    }

    interface IGetCustomizeConfigParameters {
        parameters: IGetCustomizeConfigParameter[];
    }

    interface IGetCustomizeConfigParameter {

        key: string,
        value?: string|boolean;
    }

    interface ITdsGetResponse {

        //data: ITdsResponse;
        data?: string;
    }

    interface ITdsResponse {

        retcode: string;
        retmsg: string;
        parameters?: ITdsParameter[];
    }

    interface IGetCustomizeConfigGetResponse {

        //data: ITdsResponse;
        data?: string;
    }

    interface IGetCustomizeConfigResponse {

        retcode: string;
        extensionInfo?: IGetCustomizeConfigParameter[];
    }

    interface ITdsSetResponse {

    }

    /**
     * @ngdoc interface
     * @name DT_GetReponseEvent
     *
     * @description
     *
     */
    interface DT_GetReponseEvent {

        /**
         * @ngdoc property
         * @name DT_GetReponseEvent#response
         * @propertyOf DT_GetReponseEvent
         *
         * @description
         * Response data for the request, if there is any. The type is request/response specific.
         *
         * @returns {DT_GetReponse}
         *
         */
        response: DT_GetReponse;

    }

    /**
     * @ngdoc interface
     * @name DT_GetSatelliteConfigResponseEvent
     * 
     * @description
     */
    interface DT_GetSatelliteConfigResponseEvent {
        /**
         * @ngdoc property
         * @name DT_GetSatelliteConfigResponseEvent#satelliteSettings
         * 
         * @description
         * JSON-encoded array of {@link DT_SatellitesConfiguredItem} elements.
         * 
         * - Optional
         * 
         * @returns {string} optional
         *          
         */
        satelliteConfig?: string;
    }
    /**
     * @ngdoc interface
     * @name DT_GetSatellitesResponseEvent
     * 
     * @description
     */
    interface DT_GetSatellitesResponseEvent {
        /**
         * @ngdoc property
         * @name DT_GetSatellitesResponseEvent#satellites
         * 
         * @description
         * JSON-encoded array of {@link DT_SatelliteItem} elements.
         * 
         * @returns {string}
         *          
         */
        satellites: string;
    }

    interface DT_GetReferenceTranspondersResponseEvent {
        /**
         * @ngdoc property
         * @name DT_GetReferenceTranspondersResponseEvent#referenceTransponders
         * 
         * @description
         * JSON-encoded array of {@link DT_TransponderItem} elements.
         * 
         * @returns {string}
         *          
         */
        referenceTransponders: string;
    }

    /**
     * @ngdoc interface
     * @name DT_MasterStbGetReponse
     *
     * @description
     *
     */
    interface DT_MasterStbGetReponse {

        /**
         * @ngdoc property
         * @name DT_MasterStbGetReponse#MasterSTB
         * @propertyOf DT_MasterStbGetReponse
         *
         * @description
         * ZosaId of a {@link ZosaDeviceItem}.
         *
         * @returns {ZosaId}
         *
         */
        MasterSTB: ZosaId;
    }

    interface DT_BandwidthManagerServerUrlResponse {

        BandwidthManagerServerUrl: string;
    }


    /**
     * @ngdoc interface
     * @name DT_MasterStbSetParams
     *
     * @description
     * Input parameters for MasterSTB.SET.
     *
     */
    interface DT_MasterStbSetParams {

        /**
         * @ngdoc property
         * @name DT_MasterStbSetParams#MasterSTB
         * @propertyOf DT_MasterStbSetParams
         *
         * @description
         * Valid ZosaId of a {@link ZosaDeviceItem}.
         *
         * @returns {ZosaId}
         *
         */
        MasterSTB: ZosaId;

    }

    /**
     * @ngdoc interface
     * @name DT_GetConfigResponse
     *
     * @description
     * N/A - Private, only returned. Version and url can be empty.
     *
     */
    interface DT_GetConfigResponse {

        /**
         * @ngdoc property
         * @name DT_GetConfigResponse#url
         * @propertyOf DT_GetConfigResponse
         *
         * @description
         * Portal url.
         */
        url: string;

        /**
         * @ngdoc property
         * @name DT_GetConfigResponse#version 
         * @propertyOf DT_GetConfigResponse
         *
         * @description
         * Portal version.
         */
        version: string;
    }

    /**
     * @ngdoc interface
     * @name DT_SetSatelliteConfigParams
     *
     * @description
     * Input parameters for DT-SatelliteInformationManager.SetSatelliteConfig.
     *
     */
    interface DT_SetSatelliteConfigParams {
        /**
         * @ngdoc property
         * @name DT_SetSatelliteConfigParams#satelliteConfig
         * @propertyOf DT_SetSatelliteConfigParams
         *
         * @description
         * JSON-encoded array of {@link DT_SatellitesConfiguredItem} elements. .
         * Mandatory
         * Pass an empty array to delete current satellite configuration
         *
         * @returns {string} optional
         *
         */
        satelliteConfig: string
    }

    interface DT_GetReferenceTranspondersParams {

        /**
         * @ngdoc property
         * @name DT_GetReferenceTranspondersParams#satelliteId
         * @propertyOf DT_GetReferenceTranspondersParams
         *
         * @description
         * Mandatory
         *
         * @returns {string} optional
         *
         */
        satelliteId: string;
    }


    /**
     * @ngdoc interface
     * @name DT_SubscriberInfoGetResponseEvent
     *
     * @description
     *
     */
    interface DT_SubscriberInfoGetResponseEvent {

        /**
         * @ngdoc property
         * @name DT_SubscriberInfoGetResponseEvent#response 
         * @propertyOf DT_SubscriberInfoGetResponseEvent
         *
         * @description
         * Response data for the request, if there is any. The type is request/response specific.
         * 
         * • JSON format: {[{key : "RecCfgSingleOrSeries", value : "1"}, {key : "RecCfgSeriesTimeMode", value : "1"}]}
         *
         * @returns {string}
         *
         */
        response: string;
    }

    /**
     * @ngdoc interface
     * @name DT_SubscriberInfoSetParams
     *
     * @description
     * Input parameters for DT-SubscriberInfo.SET.
     *
     */
    interface DT_SubscriberInfoSetParams {

        /**
         * @ngdoc property
         * @name DT_SubscriberInfoSetParams#subscriberInfo
         * @propertyOf DT_SubscriberInfoSetParams
         *
         * @description
         * Subscriber info key value pairs in JSON format.
         * 
         * • JSON format: {[{key : "RecCfgSingleOrSeries", value : "1"}, {key : "RecCfgSeriesTimeMode", value : "1"}]}
         *
         * @returns {string}
         *
         */
        subscriberInfo: string;
    }

    /**
     * @ngdoc interface
     * @name DT_GetConfigurableUserSettingsParams
     *
     * @description
     * Input parameters for DT-ConfigurableUserSettings.GetSettings.
     *
     */
    interface DT_GetConfigurableUserSettingsParams {

        /**
         * @ngdoc property
         * @name DT_GetConfigurableUserSettingsParams#domainType
         * @propertyOf DT_GetConfigurableUserSettingsParams
         *
         * @description
         * Domain for which to fetch settings. If not given all settings are fetched. One of: "subscriber", "device" or "profile".
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        domainType?: string;

    }

    /**
     * @ngdoc interface
     * @name DT_GetConfigurableUserSettingsResponseEvent
     *
     * @description
     * Output event for DT-ConfigurableUserSettings.GetSettings.
     *
     */
    interface DT_GetConfigurableUserSettingsResponseEvent {

        /**
         * @ngdoc property
         * @name DT_GetConfigurableUserSettingsResponseEvent#settings
         * @propertyOf DT_GetConfigurableUserSettingsResponseEvent
         *
         * @description
         * JSON-encoded array of DT_ConfigurableUserSettingItem elements.
         *
         * @returns {string}
         *
         */
        settings: string;

    }

    /**
     * @ngdoc interface
     * @name DT_GetConfigurableUserSettingsValuesParams
     *
     * @description
     * Input parameters for DT-ConfigurableUserSettings.GetValues.
     *
     */
    interface DT_GetConfigurableUserSettingsValuesParams {

        /**
         * @ngdoc property
         * @name DT_GetConfigurableUserSettingsValuesParams#domainId
         * @propertyOf DT_GetConfigurableUserSettingsValuesParams
         *
         * @description
         * ID of the object to which a setting belongs. This parameter is used when domainType is set "device" or "subscriber". If no ID is specified, the logical device ID or profile ID in the current session is used.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        domainId?: string;

        /**
         * @ngdoc property
         * @name DT_GetConfigurableUserSettingsValuesParams#domainType
         * @propertyOf DT_GetConfigurableUserSettingsValuesParams
         *
         * @description
         * Domain for which to fetch settings and their values. One of: "subscriber", "device" or "profile".
         *
         * @returns {string}
         *
         */
        domainType: string;

        /**
         * @ngdoc property
         * @name DT_GetConfigurableUserSettingsValuesParams#keys
         * @propertyOf DT_GetConfigurableUserSettingsValuesParams
         *
         * @description
         * JSON-encoded array of keys for settings being fetched. If no key is specified, the values of all settings will be obtained.
         * 
         * • Optional.
         * • Format: ['key1','key2']
         *
         * @returns {string}
         *
         */
        keys?: string;

    }

    /**
     * @ngdoc interface
     * @name DT_GetConfigurableUserSettingsValuesResponseEvent
     *
     * @description
     * Output event for DT-ConfigurableUserSettings.GetSettings.
     *
     */
    interface DT_GetConfigurableUserSettingsValuesResponseEvent {

        /**
         * @ngdoc property
         * @name DT_GetConfigurableUserSettingsValuesResponseEvent#values
         * @propertyOf DT_GetConfigurableUserSettingsValuesResponseEvent
         *
         * @description
         * JSON-encoded array of ZosaKeyValuePair elements.
         * 
         * • Format: [{"key":"key1","value":"val1"},{"key":"key2","value":"val2"}]
         *
         * @returns {string}
         *
         */
        values: string;

    }

    /**
     * @ngdoc interface
     * @name DT_SetConfigurableUserSettingsValuesParams
     *
     * @description
     * Input parameters for DT-ConfigurableUserSettings.SetValues.
     *
     */
    interface DT_SetConfigurableUserSettingsValuesParams {

        /**
         * @ngdoc property
         * @name DT_SetConfigurableUserSettingsValuesParams#domainId
         * @propertyOf DT_SetConfigurableUserSettingsValuesParams
         *
         * @description
         * ID of the object to which a settings belongs. This parameter is used when domainType is set "device" or "subscriber". If no ID is specified, the logical device ID or profile ID in the current session is used.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        domainId?: string;

        /**
         * @ngdoc property
         * @name DT_SetConfigurableUserSettingsValuesParams#domainType
         * @propertyOf DT_SetConfigurableUserSettingsValuesParams
         *
         * @description
         * Domain for which to fetch settings and their values. One of: "subscriber", "device" or "profile".
         *
         * @returns {string}
         *
         */
        domainType: string;

        /**
         * @ngdoc property
         * @name DT_SetConfigurableUserSettingsValuesParams#values
         * @propertyOf DT_SetConfigurableUserSettingsValuesParams
         *
         * @description
         * JSON-encoded array of ZosaKeyValuePair elements. Contains pairs of setting's keys and their corresponding values.
         * 
         * • Optional.
         * • Format: [{"key":"key1","value":"val1"},{"key":"key2","value":"val2"}]
         *
         * @returns {string}
         *
         */
        values?: string;

    }

    type DT_ConfigurableUserSettingItemDataType = "char" | "string" | "int" | "long" | "float" | "double" | "array" | "enum" | "date" | "time" | "timestamp" | "longstring";

    /**
     * @ngdoc interface
     * @name DT_ConfigurableUserSettingItem
     *
     * @description
     * Used for DT-ConfigurableUserSettings ZosaCustomApi.
     *
     */
    interface DT_ConfigurableUserSettingItem {

        /**
         * @ngdoc property
         * @name DT_ConfigurableUserSettingItem#dataType
         * @propertyOf DT_ConfigurableUserSettingItem
         *
         * @description
         * Data type of the value.
         * 
         * One of:
         * 
         * - "char"
         * - "string"       An attribute value of the String type can contain a maximum of 1024 bytes.
         * - "int"
         * - "long"
         * - "float"
         * - "double"
         * - "array"        Use vertical bars (|) to separate attribute values of the Array type.
         * - "enum"         Enum options are listed by the enumOptions property
         * - "date"         Attribute values of the Date type must be in yyyyMMdd format.
         * - "time"         Attribute values of the Time type must be in HHmmss format.
         * - "timestamp"    Attribute values of the Timestamp type must be in yyyyMMddHHmmss format.
         * - "longstring"   An attribute value of the Long String type can contain a maximum of 10240 bytes.
         *
         * @returns {DT_ConfigurableUserSettingItemDataType}
         *
         */
        dataType: DT_ConfigurableUserSettingItemDataType;

        /**
         * @ngdoc property
         * @name DT_ConfigurableUserSettingItem#defaultValue
         * @propertyOf DT_ConfigurableUserSettingItem
         *
         * @description
         * Default value.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        defaultValue?: string;

        /**
         * @ngdoc property
         * @name DT_ConfigurableUserSettingItem#description
         * @propertyOf DT_ConfigurableUserSettingItem
         *
         * @description
         * Description.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        description?: string;

        /**
         * @ngdoc property
         * @name DT_ConfigurableUserSettingItem#domainType
         * @propertyOf DT_ConfigurableUserSettingItem
         *
         * @description
         * Type of the object to which this setting belongs. One of: "subscriber", "device" or "profile".
         *
         * @returns {string}
         *
         */
        domainType: string;

        /**
         * @ngdoc property
         * @name DT_ConfigurableUserSettingItem#enumOptions
         * @propertyOf DT_ConfigurableUserSettingItem
         *
         * @description
         * Options of the "enum" dataType.
         * 
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        enumOptions?: string[];

        /**
         * @ngdoc property
         * @name DT_ConfigurableUserSettingItem#isEditableByEndUser
         * @propertyOf DT_ConfigurableUserSettingItem
         *
         * @description
         * Indicates whether subscribers can edit this common configuration.
         *
         * @returns {boolean}
         *
         */
        isEditableByEndUser: boolean;

        /**
         * @ngdoc property
         * @name DT_ConfigurableUserSettingItem#isEditableByOperator
         * @propertyOf DT_ConfigurableUserSettingItem
         *
         * @description
         * Indicates whether operators can edit this general configuration.
         *
         * @returns {boolean}
         *
         */
        isEditableByOperator: boolean;

        /**
         * @ngdoc property
         * @name DT_ConfigurableUserSettingItem#key
         * @propertyOf DT_ConfigurableUserSettingItem
         *
         * @description
         * Key.
         *
         * @returns {string}
         *
         */
        key: string;

        /**
         * @ngdoc property
         * @name DT_ConfigurableUserSettingItem#name
         * @propertyOf DT_ConfigurableUserSettingItem
         *
         * @description
         * Name.
         *
         * @returns {string}
         *
         */
        name: string;

        /**
         * @ngdoc property
         * @name DT_ConfigurableUserSettingItem#validationRegEx
         * @propertyOf DT_ConfigurableUserSettingItem
         *
         * @description
         * Verification format of an attribute value. The format uses the regular expression and applies only to attributes of the "string" dataType.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        validationRegEx?: string;

    }

    /**
     * @ngdoc interface
     * @name DT_SatellitesConfiguredItem
     *
     * @description
     * Used for DT-SatelliteInformationManager ZosaCustomApi.
     * Describes information about configured satellites.
     */
    interface DT_SatellitesConfiguredItem {
        /**
         * @ngdoc property
         * @name DT_SatellitesConfiguredItem#satelliteId 
         * @propertyOf DT_SatellitesConfiguredItem
         *
         * @description
         * SatelliteId
         * mandatory
         *
         * @returns {string}
         *
         */
        satelliteId: string

        /**
         * @ngdoc property
         * @name DT_SatellitesConfiguredItem#satelliteId 
         * @propertyOf DT_SatellitesConfiguredItem
         *
         * @description
         * Satellite position as signed integer degrees * 10 relative Greenwich. If the satellite is located west of Greenwich, the value is a negative number.
         * If the satellite is located east of Greenwich, the value is a positive number. 
         * For example, -1600 indicates 160.0 degrees west longitude, and 192 is 19.2 degrees east longitude.
         * optional
         * 
         * @returns {integer} optional
         *
         */
        satellitePosition?: number;
    }

    /**
     * N/A - Class only for documentation Represents the 'response' field in the event returned by the GetDFCC function. Contains the requested DFCC information.
     */
    interface DT_DfccGetResponse {

        /**
         * DFCC information from backend. Corresponds to the 'DFCC' object in "Huawei Hybrid Video Solution-SW Third-Party Client and MEM Interface Reference" manual. 
         * Contains the DFCC object in JSON form. This object is available in the 'response' field in the DT_DfccGetResponseEvent received from the API.
         */
        DFCC: string;
    }

    /**
     * N/A - Private, only returned. Event sent on a successful request.
     */
    interface DT_DfccGetResponseEvent {

        /**
         * Response data for the event
         */
        response: DT_DfccGetResponse;
    }

    type DfccUpdateEventType = "UserGroupChanged" | "DFCCVersionChanged";

    /**
     * N/A - Private, only returned. Event sent when DFCC version or user group has changed.
     */
    interface DT_DfccUpdateEvent {

        /**
         * The type of event, either 'UserGroupChanged' or 'DFCCVersionChanged'
         */
        type: DfccUpdateEventType;
    }

    interface DT_GetCurrentLoginInformationResponse {

        /**
         * @ngdoc property
         * @name DT_GetCurrentLoginInformationResponse#loginUrl
         * @propertyOf DT_GetCurrentLoginInformationResponse
         *
         * @description
         * login url.
         */
        loginUrl: string;

        /**
         * @ngdoc property
         * @name DT_GetCurrentLoginInformationResponse#loginNumberOfTries
         * @propertyOf DT_GetCurrentLoginInformationResponse
         *
         * @description
         * number of login tries.
         */
        loginNumberOfTries: string;

        /**
         * @ngdoc property
         * @name DT_GetCurrentLoginInformationResponse#epgUrl
         * @propertyOf DT_GetCurrentLoginInformationResponse
         *
         * @description
         * url of epg server.
         */
        epgUrl?: string;

        /**
         * @ngdoc property
         * @name DT_GetCurrentLoginInformationResponse#sessionCookies
         * @propertyOf DT_GetCurrentLoginInformationResponse
         *
         * @description
         * session cookies 
         */
        sessionCookies?: string;

        /**
         * @ngdoc property
         * @name DT_GetCurrentLoginInformationResponse#userAgent
         * @propertyOf DT_GetCurrentLoginInformationResponse
         *
         * @description
         * user agent.
        */
        userAgent?: string;
    }

    /**
     * @ngdoc interface
     * @name DT_SatelliteItem
     *
     * @description
     * Used for DT-SatelliteInformationManager ZosaCustomApi.
     *
     */
    interface DT_SatelliteItem {
        /**
         * @ngdoc property
         * @name DT_SatelliteItem#isMainSatellite 
         * @propertyOf DT_SatelliteItem
         *
         * @description
         * Indicates whether the satellite is the main satellite.
         * 
         * - Optional
         *
         * @returns {boolean} optional
         *
         */
        isMainSatellite?: boolean;

        /**
         * @ngdoc property
         * @name DT_SatelliteInfoItem#name
         * @propertyOf DT_SatelliteInfoItem
         *
         * @description
         * Name
         * 
         * @returns {string}
         *
         */
        name: string;

        /**
         * @ngdoc property
         * @name DT_SatelliteItem#referenceTransponders 
         * @propertyOf DT_SatelliteItem
         *
         * @description
         * A list of reference transponders for the satellite.
         * 
         * - Optional
         *
         * @returns {DT_TransponderItem[]} optional
         *
         */
        referenceTransponders?: DT_TransponderItem[];

        /**
         * @ngdoc property
         * @name DT_SatelliteItem#satelliteId 
         * @propertyOf DT_SatelliteItem
         *
         * @description
         *
         * @returns {string}
         *
         */
        satelliteId: string

        /**
         * @ngdoc property
         * @name DT_SatelliteItem#satellitePosition 
         * @propertyOf DT_SatelliteItem
         *
         * @description
         * Satellite position as signed integer degrees * 10 relative Greenwich. If the satellite is located west of Greenwich, the value is a negative number.
         * If the satellite is located east of Greenwich, the value is a positive number. 
         * For example, -1600 indicates 160.0 degrees west longitude, and 192 is 19.2 degrees east longitude.
         * @returns {number} integer
         *
         */
        satellitePosition: number;
    }
}
