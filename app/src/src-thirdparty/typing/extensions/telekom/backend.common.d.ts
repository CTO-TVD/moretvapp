declare namespace telekom.backend {

    /**
     * @ngdoc interface
     * @name Action
     *
     * @description
     *
     */
    interface Action {

        /**
         * @ngdoc property
         * @name Action#name
         * @propertyOf Action
         *
         * @description
         * Parameter mapping actionName in the .xsd file.
         *
         * @returns {string}
         *
         */
        name: string;

        /**
         * @ngdoc property
         * @name Action#actionName
         * @propertyOf Action
         *
         * @description
         * Parameter mapping actionName in the .xsd file.
         *
         * @returns {string}
         *
         */
        actionName?: string;

        /**
         * @ngdoc property
         * @name Action#params
         * @propertyOf Action
         *
         * @description
         * Parameter mapping Action.
         *
         * @returns {Param}
         *
         */
        params: Param;

    }

    /**
     * @ngdoc interface
     * @name Param
     *
     * @description
     *
     */
    interface Param {

        /**
         * @ngdoc property
         * @name Param#target
         * @propertyOf Param
         *
         * @description
         * The target type of navigation.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        target?: string;

        /**
         * @ngdoc property
         * @name Param#context
         * @propertyOf Param
         *
         * @description
         * Context for external navigation.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        context?: string;

        /**
         * @ngdoc property
         * @name Param#targetId
         * @propertyOf Param
         *
         * @description
         * Referenced target document for navigation.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        targetId?: string;

        /**
         * @ngdoc property
         * @name Param#externalUrl
         * @propertyOf Param
         *
         * @description
         * URL for external navigation.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        externalUrl?: string;

    }

    /**
     * @ngdoc interface
     * @name Focus
     *
     * @description
     *
     */
    interface Focus {

        /**
         * @ngdoc property
         * @name Focus#targetId
         * @propertyOf Focus
         *
         * @description
         * Hub which will be shown on focusing menu item.
         *
         * @returns {string}
         *
         */
        targetId: string;

        /**
         * @ngdoc property
         * @name Focus#hubType
         * @propertyOf Focus
         *
         * @description
         * Hub which will be shown on focusing menu item.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        hubType?: string;

        /**
         * @ngdoc property
         * @name Focus#externalUrl
         * @propertyOf Focus
         *
         * @description
         * URL for external navigation.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        externalUrl?: string;

    }

    /**
     * @ngdoc interface
     * @name Group
     *
     * @description
     *
     */
    interface Group {

        /**
         * @ngdoc property
         * @name Group#title
         * @propertyOf Group
         *
         * @description
         * Group name.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        title?: string;

        /**
         * @ngdoc property
         * @name Group#paneType
         * @propertyOf Group
         *
         * @description
         * Pane type.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        paneType?: string;

        /**
         * @ngdoc property
         * @name Group#tiles
         * @propertyOf Group
         *
         * @description
         * Tiles in a group.
         *
         * @returns {Tile[]}
         *
         */
        tiles: Tile[];

    }

    /**
     * @ngdoc interface
     * @name Tile
     *
     * @description
     *
     */
    interface Tile {

        /**
         * @ngdoc property
         * @name Tile#contentId
         * @propertyOf Tile
         *
         * @description
         * Content ID obtained by the recommendation interface from the content list based on indexInResultDataset.
         * The returned value is a third-party code.
         *
         * @returns {string}
         *
         */
        contentId?: string;

        /**
         * @ngdoc property
         * @name Tile#channelId
         * @propertyOf Tile
         *
         * @description
         * Mapping channel ID returned when contentId is set to a program ID. This parameter value is obtained from the MEM based on contentId.
         * The returned value is a third-party code.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        channelId?: string;

        /**
         * @ngdoc property
         * @name Tile#audienceRatio
         * @propertyOf Tile
         *
         * @description
         * Viewership rate.
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        audienceRatio?: number;

        /**
         * @ngdoc property
         * @name Tile#showPartnerLogo
         * @propertyOf Tile
         *
         * @description
         * Indicates whether a VOD program displays the CP logo.
         *
         * • Optional.
         *
         * @returns {boolean}
         *
         */
        showPartnerLogo?: boolean;

        /**
         * @ngdoc property
         * @name Tile#formattedContent
         * @propertyOf Tile
         *
         * @description
         * Data binding of tile. Formatted JSON object. Multiple attributes may be included in the value.
         *
         * • Optional.
         *
         * @returns {FormattedContent}
         *
         */
        formattedContent?: FormattedContent;

        /**
         * @ngdoc property
         * @name Tile#style
         * @propertyOf Tile
         *
         * @description
         * Tile display style.
         *
         * @returns {string}
         *
         */
        style: string;

        /**
         * @ngdoc property
         * @name Tile#startTime
         * @propertyOf Tile
         *
         * @description
         * Program start time. When the content is a program, the program start time is obtained from the MEM based on contentId.
         * The time is in the ISO 8601 format, such as 2011-12-19T15:28:46.493Z.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        startTime?: string;

        /**
         * @ngdoc property
         * @name Tile#endTime
         * @propertyOf Tile
         *
         * @description
         * Program end time. When the content is a program, the program end time is obtained from the MEM based on contentId.
         * The time is in the ISO 8601 format, such as 2011-12-19T15:28:46.493Z.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        endTime?: string;

        /**
         * @ngdoc property
         * @name Tile#action
         * @propertyOf Tile
         *
         * @description
         * Operation mapping a tile.
         *
         * @returns {string}
         *
         */
        action: Action;

        /**
         * @ngdoc property
         * @name Tile#moreStyle
         * @propertyOf Tile
         *
         * @description
         * More-Tile style.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        moreStyle?: string;

    }

    /**
     * @ngdoc interface
     * @name FormattedContent
     *
     * @description
     *
     */
    interface FormattedContent {

        backgroundUrl?: string;
        claim?: string;
        subtitle?: string;
        drama?: string;
        genre?: string;
        label?: string;
        partners?: Partner[];
        runtime?: number;
        season?: number;
        title?: string;
        type?: string;
        sourceType?: string;
        vodType?: string;
        episodeNumber?: string;
        seasonNumber?: string;
        mainGenre?: string;

    }

    interface StartPageContent extends FormattedContent {

        campaignName: string;
        contentId: string;
        daytimeEnd: string;
        daytimeStart: string;
        disableChannel: string;
        displayCount: string;
        displayDuration: string;
        startTime: string;
        endTime: string;
        serialNumber: string;
        textline1: string;
        textline2: string;
    }

    /**
 * @ngdoc interface
 * @name Partner
 *
 * @description
 *
 */
    interface Partner {

        /**
         * @ngdoc property
         * @name Partner#name
         * @propertyOf Partner
         *
         * @description
         * Partner name.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        name?: string;

        /**
         * @ngdoc property
         * @name Partner#logo
         * @propertyOf Partner
         *
         * @description
         * URL of partner’s (colorless) logo.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        logo?: string;

    }

}
