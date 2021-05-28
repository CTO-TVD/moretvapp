/// <reference path="./backend.common.d.ts" />

declare namespace telekom.backend {

    /**
     * @ngdoc interface
     * @name RecommendationResult
     *
     * @description
     *
     */
    interface RecommendationResult {

        /**
         * @ngdoc property
         * @name RecommendationResult#results
         * @propertyOf RecommendationResult
         *
         * @description
         * List of result items.
         * Format of results is profile specific.
         *
         * @returns {RecommendationResultItem[]}
         *
         */
        results: RecommendationResultItem[];

    }

    /**
     * @ngdoc type
     * @name RecommendationResultItem
     *
     * @description
     *
     */
    type RecommendationResultItem = BroadcastRecommendationResultEntry | VoDRecommendationResultEntry;

    /**
    * @ngdoc interface
    * @name RecommendationResultEntry
    *
    * @description
    *
    */
    interface RecommendationResultEntry {

        /**
         * @ngdoc property
         * @name RecommendationResultEntry#id
         * @propertyOf RecommendationResultEntry
         *
         * @description
         * Result item ID.
         *
         * @returns {string}
         *
         */
        id: string;

        /**
         * @ngdoc property
         * @name RecommendationResultEntry#type
         * @propertyOf RecommendationResultEntry
         *
         * @description
         * Type of the entry. Currently vod and tvBroadcast are supported.
         *
         * @returns {string}
         *
         */
        type: "tvBroadcast" | "vod";
    }

    /**
    * @ngdoc interface
    * @name BroadcastRecommendationResultEntry
    *
    * @description
    *
    */
    interface BroadcastRecommendationResultEntry extends RecommendationResultEntry {

        /**
         * @ngdoc property
         * @name BroadcastRecommendationResultEntry#type
         * @propertyOf BroadcastRecommendationResultEntry
         *
         * @description
         * The content type - for broadcasts, this is always 'tvBroadcast'.
         *
         * @returns {string}
         *
         */
        type: "tvBroadcast";

        /**
         * @ngdoc property
         * @name BroadcastRecommendationResultEntry#title
         * @propertyOf BroadcastRecommendationResultEntry
         *
         * @description
         * The title of the broadcast.
         *
         * @returns {string}
         *
         */
        title: string;

        /**
         * @ngdoc property
         * @name BroadcastRecommendationResultEntry#seasonNumber
         * @propertyOf BroadcastRecommendationResultEntry
         *
         * @description
         * If the broadcast is part of a series, this is the seasonNumber of the of the season this episode belongs to.
         *
         * @returns {number}
         *
         */
        seasonNumber: number;

        /**
         * @ngdoc property
         * @name BroadcastRecommendationResultEntry#episodeNumber
         * @propertyOf BroadcastRecommendationResultEntry
         *
         * @description
         * If the broadcast is part of a series, this is the episodeNumber of the episode in the season.
         *
         * @returns {number}
         *
         */
        episodeNumber: number;

        /**
         * @ngdoc property
         * @name BroadcastRecommendationResultEntry#start
         * @propertyOf BroadcastRecommendationResultEntry
         *
         * @description
         * The broadcast start date and time in ISO 8601 format.
         *
         * @returns {Date}
         *
         */
        start: Date;

        /**
         * @ngdoc property
         * @name BroadcastRecommendationResultEntry#end
         * @propertyOf BroadcastRecommendationResultEntry
         *
         * @description
         * The broadcast end date and time in ISO 8601 format.
         *
         * @returns {Date}
         *
         */
        end: Date;

        /**
         * @ngdoc property
         * @name BroadcastRecommendationResultEntry#mainGenre
         * @propertyOf BroadcastRecommendationResultEntry
         *
         * @description
         * The unified main genre.
         *
         * @returns {string}
         *
         */
        mainGenre: string;

        /**
         * @ngdoc property
         * @name BroadcastRecommendationResultEntry#channelId
         * @propertyOf BroadcastRecommendationResultEntry
         *
         * @description
         * The logical channel id of the channel where the broadcast is aired.
         *
         * @returns {string}
         *
         */
        channelId: string;

        /**
         * @ngdoc property
         * @name BroadcastRecommendationResultEntry#poster
         * @propertyOf BroadcastRecommendationResultEntry
         *
         * @description
         * The url to the broadcast image.
         *
         * @returns {string}
         *
         */
        poster: string;

        /**
         * @ngdoc property
         * @name BroadcastRecommendationResultEntry#ageRatingId
         * @propertyOf BroadcastRecommendationResultEntry
         *
         * @description
         * The age rating id of this broadcast.
         *
         * @returns {string}
         *
         */
        ageRatingId: string;

    }

    /**
    * @ngdoc interface
    * @name VoDRecommendationResultEntry
    *
    * @description
    *
    */
    interface VoDRecommendationResultEntry extends RecommendationResultEntry {

        /**
         * @ngdoc property
         * @name VoDRecommendationResultEntry#type
         * @propertyOf VoDRecommendationResultEntry
         *
         * @description
         * The content type - for broadcasts, this is always 'vod'.
         *
         * @returns {string}
         *
         */
        type: "vod";

        /**
         * @ngdoc property
         * @name VoDRecommendationResultEntry#title
         * @propertyOf VoDRecommendationResultEntry
         *
         * @description
         * The vod´s title.
         *
         * @returns {string}
         *
         */
        title: string;

        /**
         * @ngdoc property
         * @name VoDRecommendationResultEntry#seasonNumber
         * @propertyOf VoDRecommendationResultEntry
         *
         * @description
         * If the vod is part of a series, this is the seasonNumber of the of the season this episode belongs to.
         *
         * @returns {number}
         *
         */
        seasonNumber: number;

        /**
         * @ngdoc property
         * @name VoDRecommendationResultEntry#episodeNumber
         * @propertyOf VoDRecommendationResultEntry
         *
         * @description
         * If the vod is part of a series, this is the episodeNumber of the episode in the season.
         *
         * @returns {number}
         *
         */
        episodeNumber: number;

        /**
         * @ngdoc property
         * @name VoDRecommendationResultEntry#vodType
         * @propertyOf VoDRecommendationResultEntry
         *
         * @description
         * One of 'movie', 'episode', 'season' or 'series'.
         *
         * @returns {string}
         *
         */
        vodType: string;

        /**
         * @ngdoc property
         * @name VoDRecommendationResultEntry#sourceType
         * @propertyOf VoDRecommendationResultEntry
         *
         * @description
         * One of 'vodPremium', 'tvArchive' or 'sports'.
         *
         * @returns {string}
         *
         */
        sourceType: string;

        /**
         * @ngdoc property
         * @name VoDRecommendationResultEntry#mainGenre
         * @propertyOf VoDRecommendationResultEntry
         *
         * @description
         * The unified main genre of the vod.
         *
         * @returns {string}
         *
         */
        mainGenre: string;

        /**
         * @ngdoc property
         * @name VoDRecommendationResultEntry#poster
         * @propertyOf VoDRecommendationResultEntry
         *
         * @description
         * URL of the vod poster.
         *
         * @returns {string}
         *
         */
        poster: string;

        /**
         * @ngdoc property
         * @name VoDRecommendationResultEntry#posterWide
         * @propertyOf VoDRecommendationResultEntry
         *
         * @description
         * URL of the vod poster in wide aspect ratio.
         *
         * @returns {string}
         *
         */
        posterWide: string;

        /**
         * @ngdoc property
         * @name VoDRecommendationResultEntry#scene
         * @propertyOf VoDRecommendationResultEntry
         *
         * @description
         * URLs of up to five scenes of this vod.
         *
         * @returns {string[]}
         *
         */
        scene: string[];

        /**
         * @ngdoc property
         * @name VoDRecommendationResultEntry#airtime
         * @propertyOf VoDRecommendationResultEntry
         *
         * @description
         * Date of first broadcast of this vod.
         * Only relevant for tv archive content.
         *
         * @returns {Date}
         *
         */
        airtime: Date;

        /**
         * @ngdoc property
         * @name VoDRecommendationResultEntry#communityRating
         * @propertyOf VoDRecommendationResultEntry
         *
         * @description
         * The community rating in a range from 0..5, usually displayed as stars.
         *
         * @returns {number}
         *
         */
        communityRating: number;

        /**
         * @ngdoc property
         * @name VoDRecommendationResultEntry#partners
         * @propertyOf VoDRecommendationResultEntry
         *
         * @description
         * Array of all vod partners with partnerId and logoUrlColorless where this vod is available.
         *
         * @returns {VoDPartner[]}
         *
         */
        partners: VoDPartner[];

        /**
         * @ngdoc property
         * @name VoDRecommendationResultEntry#ageRatingId
         * @propertyOf VoDRecommendationResultEntry
         *
         * @description
         * The age rating id of this vod.
         *
         * @returns {string}
         *
         */
        ageRatingId: string;

        /**
         * @ngdoc property
         * @name VoDRecommendationResultEntry#qualities
         * @propertyOf VoDRecommendationResultEntry
         *
         * @description
         * Contains the available video qualities for this vod.
         *
         * @returns {string}
         *
         */
        qualities: string[];

    }

    /**
    * @ngdoc interface
    * @name VoDPartner
    *
    * @description
    *
    */
    interface VoDPartner {

        /**
         * @ngdoc property
         * @name VoDPartner#partnerId
         * @propertyOf VoDPartner
         *
         * @description
         * Partner item ID.
         *
         * @returns {string}
         *
         */
        partnerId: string;

        /**
         * @ngdoc property
         * @name VoDPartner#logoUrlColorless
         * @propertyOf VoDPartner
         *
         * @description
         * URL of the partner logo.
         *
         * @returns {string}
         *
         */
        logoUrlColorless: string;

    }

    /**
     * @ngdoc interface
     * @name DTGetRecommendationParams
     *
     * @description
     * Input parameter for the ZOSA custom api to perform a CMLS recommendation query.
     *
     */
    interface DTGetRecommendationParams {

        /**
         * @ngdoc property
         * @name DTGetRecommendationParams#recommendationProfileId
         * @propertyOf DTGetRecommendationParams
         *
         * @description
         * ID of the recommendation profile.
         *
         * @returns {string}
         *
         */
        recommendationProfileId: string;

        /**
         * @ngdoc property
         * @name DTGetRecommendationParams#scenarioId
         * @propertyOf DTGetRecommendationParams
         *
         * @description
         * ID of the recommendation scenario.
         * The set of available scenarios is configurable and must be maintained by the operator.
         *
         * @returns {string}
         *
         */
        scenarioId: string;

        /**
         * @ngdoc property
         * @name DTGetRecommendationParams#itemId
         * @propertyOf DTGetRecommendationParams
         *
         * @description
         * ItemId in the form 'type:id'. type may be either 'vod' or 'tvBroadcast'.
         * Mandatory for item-to-item scenarios. ID of the context item for which recommendations should be fetched.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        itemId?: string;

        /**
         * @ngdoc property
         * @name DTGetRecommendationParams#sort
         * @propertyOf DTGetRecommendationParams
         *
         * @description
         * Sort criteria.
         * Default sorting and available values are profile specific.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        sort?: string;

        /**
         * @ngdoc property
         * @name DTGetRecommendationParams#channelId
         * @propertyOf DTGetRecommendationParams
         *
         * @description
         * ID of the item´s (logical) EPG channel.
         * Mandatory for EPG item-to-item scenarios.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        channelId?: string;

        /**
         * @ngdoc property
         * @name DTGetRecommendationParams#partnerId
         * @propertyOf DTGetRecommendationParams
         *
         * @description
         * ID of the item´s vod partner.
         * If set, the result will be filtered by the given partnerId for vod items.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        partnerId?: string;

        /**
         * @ngdoc property
         * @name DTGetRecommendationParams#beginFrom
         * @propertyOf DTGetRecommendationParams
         *
         * @description
         * Can be used to filter the result set by the result items´ broadcast start date.
         * When set, only broadcast items with an end date after beginFrom will be returned.
         * 
         * • Optional.
         *
         * @returns {Date}
         *
         */
        beginFrom?: Date;

        /**
         * @ngdoc property
         * @name DTGetRecommendationParams#beginTo
         * @propertyOf DTGetRecommendationParams
         *
         * @description
         * Can be used to filter the result set by the result items´ broadcast start date.
         * When set, only broadcast items with a start date before beginTo will be returned.
         * 
         * • Optional.
         *
         * @returns {Date}
         *
         */
        beginTo?: Date;

        /**
         * @ngdoc property
         * @name DTGetRecommendationParams#maxResults
         * @propertyOf DTGetRecommendationParams
         *
         * @description
         * Maximum number of results returned.
         * CMLS may return less than maxResults if there are less recommendations available or if filter attributes are set.
         * 
         * • Optional.
         *
         * @returns {number}
         *
         */
        maxResults?: number;

        /**
         * @ngdoc property
         * @name DTGetRecommendationParams#additionalChannels
         * @propertyOf DTGetRecommendationParams
         *
         * @description
         * This optional parameter enables the logical channels and broadcasts to be returned als recommendation results although they only have 'hidden' physical channels assigned.
         * 
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        additionalChannels?: string[];

        /**
         * @ngdoc property
         * @name DTGetRecommendationParams#configuredSatellites
         * @propertyOf DTGetRecommendationParams
         *
         * @description
         * Ordered list of satellite IDs as published in satellite information document.
         * Should contain all IDs of satellites that were configured by the sat or hybrid customer. Only content that can be received with this configuration will be returned.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        configuredSatellites?: string;

        /**
         * @ngdoc property
         * @name DTGetRecommendationParams#includeHybrid
         * @propertyOf DTGetRecommendationParams
         *
         * @description
         * Only applicable in combination with configuredSatellites.
         * If true, recommendation items will contain broadcasts of tv channels that are listed in the hybrid channel map, too (in addition to broadcasts of tv channels aired on the given satellites).
         * 
         * • Optional.
         *
         * @returns {boolean}
         *
         */
        includeHybrid?: boolean;

    }

}
