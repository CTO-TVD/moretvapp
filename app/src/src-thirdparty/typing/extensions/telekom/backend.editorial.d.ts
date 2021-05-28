/// <reference path="./backend.common.d.ts" />

declare namespace telekom.backend {

    /**
     * @ngdoc interface
     * @name EditorialInfo
     *
     * @description
     *
     */
    interface EditorialInfo {

        /**
         * @ngdoc property
         * @name EditorialInfo#id
         * @propertyOf EditorialInfo
         *
         * @description
         * Editorial ID.
         *
         * @returns {string}
         *
         */
        id: string;

        /**
         * @ngdoc property
         * @name EditorialInfo#backgroundImage
         * @propertyOf EditorialInfo
         *
         * @description
         * Background image.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        backgroundImage?: string;

        /**
         * @ngdoc property
         * @name EditorialInfo#title
         * @propertyOf EditorialInfo
         *
         * @description
         * Title of the article.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        title?: string;

        /**
         * @ngdoc property
         * @name EditorialInfo#previewURL
         * @propertyOf EditorialInfo
         *
         * @description
         * Preview page URL.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        previewURL?: string;

        /**
         * @ngdoc property
         * @name EditorialInfo#pages
         * @propertyOf EditorialInfo
         *
         * @description
         * Article pages.
         *
         * @returns {Page[]}
         *
         */
        pages: Page[];

    }

    /**
     * @ngdoc interface
     * @name Page
     *
     * @description
     *
     */
    interface Page {

        /**
         * @ngdoc property
         * @name Page#url
         * @propertyOf Page
         *
         * @description
         * Page URL.
         *
         * @returns {string}
         *
         */
        url: string;

        /**
         * @ngdoc property
         * @name Page#menu
         * @propertyOf Page
         *
         * @description
         * Operation button.
         *
         * • Optional.
         *
         * @returns {PageMenu[]}
         *
         */
        menu?: PageMenu[];

        /**
         * @ngdoc property
         * @name Page#trailers
         * @propertyOf Page
         *
         * @description
         * Trailer.
         *
         * • Optional.
         *
         * @returns {Trailers}
         *
         */
        trailers?: Trailers;

    }

    /**
     * @ngdoc interface
     * @name PageMenu
     *
     * @description
     *
     */
    interface PageMenu {

        /**
         * @ngdoc property
         * @name PageMenu#id
         * @propertyOf PageMenu
         *
         * @description
         * ID.
         *
         * @returns {string}
         *
         */
        id: string;

        /**
         * @ngdoc property
         * @name PageMenu#title
         * @propertyOf PageMenu
         *
         * @description
         * Title.
         *
         * @returns {string}
         *
         */
        title: string;

        /**
         * @ngdoc property
         * @name PageMenu#action
         * @propertyOf PageMenu
         *
         * @description
         * Operation.
         *
         * @returns {Action}
         *
         */
        action: Action;

    }

    /**
     * @ngdoc interface
     * @name Trailers
     *
     * @description
     *
     */
    interface Trailers {

        /**
         * @ngdoc property
         * @name Trailers#title
         * @propertyOf Trailers
         *
         * @description
         * Title.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        title?: string;

        /**
         * @ngdoc property
         * @name Trailers#tiles
         * @propertyOf Trailers
         *
         * @description
         * Tiles.
         *
         * • Optional.
         *
         * @returns {Tile[]}
         *
         */
        tiles?: Tile[];

    }

    /**
     * @ngdoc interface
     * @name DTGetEditorialParams
     *
     * @description
     * Input parameter for the ZOSA custom api to retrieve a specified editorial.
     *
     */
    interface DTGetEditorialParams {

        /**
         * @ngdoc property
         * @name DTGetEditorialParams#id
         * @propertyOf DTGetEditorialParams
         *
         * @description
         * ID of a editorial info object to get.
         *
         * @returns {string}
         *
         */
        id: string;

    }

}
