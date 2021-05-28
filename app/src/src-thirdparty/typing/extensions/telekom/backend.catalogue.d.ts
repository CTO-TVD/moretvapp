/// <reference path="./backend.common.d.ts" />

declare namespace telekom.backend {

    /**
     * @ngdoc interface
     * @name CatalogueInfo
     *
     * @description
     *
     */
    interface CatalogueInfo {

        /**
         * @ngdoc property
         * @name CatalogueInfo#id
         * @propertyOf CatalogueInfo
         *
         * @description
         * Catalogue ID.
         *
         * @returns {string}
         *
         */
        id: string;

        /**
         * @ngdoc property
         * @name CatalogueInfo#menuId
         * @propertyOf CatalogueInfo
         *
         * @description
         * Menu ID mapping a catalogue.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        menuId?: string;

        /**
         * @ngdoc property
         * @name CatalogueInfo#title
         * @propertyOf CatalogueInfo
         *
         * @description
         * Title of a page.
         *
         * @returns {string}
         *
         */
        title: string;

        /**
         * @ngdoc property
         * @name CatalogueInfo#icon
         * @propertyOf CatalogueInfo
         *
         * @description
         * Icon of a page.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        icon?: string;

        /**
         * @ngdoc property
         * @name CatalogueInfo#pageSubtitle
         * @propertyOf CatalogueInfo
         *
         * @description
         * Page subtitle.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        pageSubtitle?: string;

        /**
         * @ngdoc property
         * @name CatalogueInfo#pageBackgroundPic
         * @propertyOf CatalogueInfo
         *
         * @description
         * Page background picture.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        pageBackgroundPic?: string;

        /**
         * @ngdoc property
         * @name CatalogueInfo#catalogueType
         * @propertyOf CatalogueInfo
         *
         * @description
         * Catalogue Type.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        catalogueType?: string;

        /**
         * @ngdoc property
         * @name CatalogueInfo#textFiled
         * @propertyOf CatalogueInfo
         *
         * @description
         * Page text field.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        textFiled?: string;

        /**
         * @ngdoc property
         * @name CatalogueInfo#groups
         * @propertyOf CatalogueInfo
         *
         * @description
         * Group associated with the catalogue.
         *
         * @returns {Group[]}
         *
         */
        groups: Group[];

    }

    /**
     * @ngdoc interface
     * @name DTGetCatalogueParams
     *
     * @description
     * Input parameter for the ZOSA custom api to retrieve a specified catalogue.
     *
     */
    interface DTGetCatalogueParams {

        /**
         * @ngdoc property
         * @name DTGetCatalogueParams#id
         * @propertyOf DTGetCatalogueParams
         *
         * @description
         * ID of a catalogue info object to get.
         *
         * @returns {string}
         *
         */
        id: string;

        /**
         * @ngdoc property
         * @name DTGetCatalogueParams#type
         * @propertyOf DTGetCatalogueParams
         *
         * @description
         * Type of a catalogue info object to get.
         *
         * @returns {CatalogueType}
         *
         */
        type: CatalogueType;

    }

    /**
     * @ngdoc type
     * @name CatalogueType
     *
     * @description
     * Possible values of a {@link DTGetCatalogueParams}'s type
     *
     */
    const enum CatalogueType {

        HOME_CATALOGUE = 0,
        TV_CATALOGUE = 1

    }

}
