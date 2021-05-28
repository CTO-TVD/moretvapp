/// <reference path="./backend.common.d.ts" />

declare namespace telekom.backend {

    /**
     * @ngdoc interface
     * @name HubInfo
     *
     * @description
     *
     */
    interface HubInfo {

        /**
         * @ngdoc property
         * @name HubInfo#id
         * @propertyOf HubInfo
         *
         * @description
         * Hub ID.
         *
         * @returns {string}
         *
         */
        id: string;

        /**
         * @ngdoc property
         * @name HubInfo#menuid
         * @propertyOf HubInfo
         *
         * @description
         * Link to menu configuration.
         *
         * • Optional.
         * 
         * @returns {string}
         *
         */
        menuid?: string;

        /**
         * @ngdoc property
         * @name HubInfo#hubType
         * @propertyOf HubInfo
         *
         * @description
         * Hub type.
         *
         * • Optional.
         * 
         * @returns {string}
         *
         */
        hubType?: string;

        /**
         * @ngdoc property
         * @name HubInfo#groups
         * @propertyOf HubInfo
         *
         * @description
         * Hub type.
         * 
         * @returns {Group[]}
         *
         */
        groups: Group[];

    }

    /**
     * @ngdoc interface
     * @name DTGetHubParams
     *
     * @description
     * Input parameter for the ZOSA custom api to retrieve a specified hub.
     *
     */
    interface DTGetHubParams {

        /**
         * @ngdoc property
         * @name DTGetHubParams#id
         * @propertyOf DTGetHubParams
         *
         * @description
         * ID of a hub info object to get.
         *
         * @returns {string}
         *
         */
        id: string;

    }
    
}
