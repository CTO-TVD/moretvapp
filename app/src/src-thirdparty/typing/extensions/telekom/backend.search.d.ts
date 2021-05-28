/// <reference path="./backend.common.d.ts" />

declare namespace telekom.backend {

    /**
     * @ngdoc interface
     * @name SearchResult
     *
     * @description
     * see http://cmls-sl01.verbund.intra.t-online.de/docs/latest/service-guide/searchNgtv/api.html#search-response
     *
     */
    interface SearchResult {

        /**
         * @ngdoc property
         * @name SearchResult#totalItems
         * @propertyOf SearchResult
         *
         * @description
         * Total number of result items.
         * Contains the sum of all single result entries and the number of results of each group. This can be used for display purposes.
         *
         * @returns {number}
         *
         */
        totalItems: number;

        /**
         * @ngdoc property
         * @name SearchResult#totalGroups
         * @propertyOf SearchResult
         *
         * @description
         * Total number of result lines.
         * Contains the sum of all single result entries and the number of entries of type group. This should be used for pagination, e.g. to know if more results are available (i.e. whether totalGroups > "offset" + size(results)).
         *
         * @returns {number}
         *
         */
        totalGroups: number;

        /**
         * @ngdoc property
         * @name SearchResult#offset
         * @propertyOf SearchResult
         *
         * @description
         * Effective result offset. See the same field in the request object.
         *
         * @returns {number}
         *
         */
        offset: number;

        /**
         * @ngdoc property
         * @name SearchResult#sort
         * @propertyOf SearchResult
         *
         * @description
         * Effective sort criteria. See the same field in the request object.
         * If the search request contained a groupId, the profile-specific group sorting will be applied but the sort criterion given in the request (or a default sort criterion from the profile) will be returned.
         *
         * @returns {string}
         *
         */
        sort: string;

        /**
         * @ngdoc property
         * @name SearchResult#sortCriteria
         * @propertyOf SearchResult
         *
         * @description
         * Sort criteria that may be used for the current search profile. Supported sort criteria and the availability of display names are profile specific. 
         * Note that some sort criteria may not be returned in the response even though their id may be specified in request’s sort parameters 
         * (if a supported sort criterion is returned or not is a search profile specific setting). Note: this field is only part of the search response if parameter ‘showSorts‘ is true. 
         *
         * @returns {Navigator[]}
         *
         */
        sortCriteria?: SortCriterion[];

        /**
         * @ngdoc property
         * @name SearchResult#navigators
         * @propertyOf SearchResult
         *
         * @description
         * Navigators that allow the user to drill-down the result set (mandatory, but may be empty). Available navigators are profile specific. Empty navigators will be omitted.
         * Note that some navigators may be not returned in the response though their ID may be specified in request’s filter parameters.
         *
         * @returns {Navigator[]}
         *
         */
        navigators: Navigator[];

        /**
         * @ngdoc property
         * @name SearchResult#results
         * @propertyOf SearchResult
         *
         * @description
         * List of result items (mandatory, but may be empty). May be smaller than the total amount of results.
         *
         * @returns {SearchResultItem[]}
         *
         */
        results: SearchResultItem[];
    }

    /**
     * @ngdoc interface
     * @name SearchResultItem
     *
     * @description
     *
     */
    type SearchResultItem = GroupResultEntry | PersonResultEntry | AppResultEntry | TvChannelResultEntry | TvBroadcastResultEntry | VodItemResultEntry | TvSatServiceEntry;


    /**
        * @ngdoc interface
        * @name SortCriterion
        *
        * @description
        *
        */
    interface SortCriterion {

        /**
         * @ngdoc property
         * @name SortCriterion#id
         * @propertyOf SortCriterion
         *
         * @description
         * SortCriterion ID.
         *
         * @returns {string}
         *
         */
        id: string;

        /**
         * @ngdoc property
         * @name SortCriterion#name
         * @propertyOf SortCriterion
         *
         * @description
         * Display name of the sort criterion.
         *
         * @returns {string}
         *
         */
        name: string;
    }


    /**
     * @ngdoc interface
     * @name Navigator
     *
     * @description
     *
     */
    interface Navigator {

        /**
         * @ngdoc property
         * @name Navigator#id
         * @propertyOf Navigator
         *
         * @description
         * Navigator ID.
         *
         * @returns {string}
         *
         */
        id: string;

        /**
         * @ngdoc property
         * @name Navigator#name
         * @propertyOf Navigator
         *
         * @description
         * Display name of the navigator.
         *
         * @returns {string}
         *
         */
        name: string;

        /**
         * @ngdoc property
         * @name Navigator#entries
         * @propertyOf Navigator
         *
         * @description
         * Navigator entries.
         *
         * @returns {NavigatorEntry[]}
         *
         */
        entries: NavigatorEntry[];
    }

    /**
     * @ngdoc interface
     * @name NavigatorEntry
     *
     * @description
     *
     */
    interface NavigatorEntry {

        /**
         * @ngdoc property
         * @name NavigatorEntry#id
         * @propertyOf NavigatorEntry
         *
         * @description
         * Navigator entry ID. Navigator entry ID is only unique within the same navigator.
         *
         * @returns {string}
         *
         */
        id: string;

        /**
         * @ngdoc property
         * @name NavigatorEntry#name
         * @propertyOf NavigatorEntry
         *
         * @description
         * Display name of the entry.
         *
         * @returns {string}
         *
         */
        name: string;

        /**
         * @ngdoc property
         * @name NavigatorEntry#size
         * @propertyOf NavigatorEntry
         *
         * @description
         * Number of available items for this entry within the current search context.
         * Note that entries with a count of zero result items will be omitted.
         *
         * @returns {number}
         *
         */
        size: number;
    }

    /**
     * @ngdoc interface
     * @name ResultEntry
     *
     * @description
     *
     */
    interface ResultEntry {

        /**
         * @ngdoc property
         * @name ResultEntry#id
         * @propertyOf ResultEntry
         *
         * @description
         * Result ID, which is either a group ID (if group exists and is not empty) or single item ID. Group IDs can be resolved via subsequent requests (see request parameter groupId).
         * Item IDs can be used to retrieve detailed content from the lookup.
         *
         * @returns {string}
         *
         */
        id: string;

        /**
         * @ngdoc property
         * @name ResultEntry#type
         * @propertyOf ResultEntry
         *
         * @description
         * Type of the entry, e.g. 'vod', 'tvBroadcast', 'tvChannel', 'person', 'group'. Special type group specifies that this is a group of results rather than a single item (see Group).
         *
         * @returns {string}
         *
         */
        type: "group" | "person" | "app" | "tvChannel" | "tvBroadcast" | "vod" | "satService";

        /**
         * @ngdoc property
         * @name ResultEntry#title
         * @propertyOf ResultEntry
         *
         * @description
         * Title of the result, such as person name, vod title, broadcast title, channel name, group title.
         *
         * @returns {string}
         *
         */
        title: string;
    }

    /**
     * @ngdoc interface
     * @name GroupResultEntry
     *
     * @description
     *
     */
    interface GroupResultEntry extends ResultEntry {

        /**
         * @ngdoc property
         * @name GroupResultEntry#type
         * @propertyOf GroupResultEntry
         *
         * @description
         * This will be always 'group'.
         *
         * @returns {string}
         *
         */
        type: "group";

        /**
         * @ngdoc property
         * @name GroupResultEntry#size
         * @propertyOf GroupResultEntry
         *
         * @description
         * Number of items within the group.
         *
         * @returns {number}
         *
         */
        size: number;

        /**
         * @ngdoc property
         * @name GroupResultEntry#items
         * @propertyOf GroupResultEntry
         *
         * @description
         * Preview of the items that belong to this group. Currently, each group will contain only the first entry from the result list, but this may change in the future for selected profiles.
         * Note that groups must not be nested. There are two special kinds of groups, marked by adult=true or pcon=true, which will not contain preview items.
         *
         * • Optional.
         *
         * @returns {ResultEntry[]}
         *
         */
        items?: ResultEntry[];

        /**
         * @ngdoc property
         * @name GroupResultEntry#adult
         * @propertyOf GroupResultEntry
         *
         * @description
         * If true this group contains items that may be only viewed inside of a running AVS pin session. The title of the group will be something like "Erwachsenenangebote" and may be directly shown to the user.
         * See request parameter hideAdult. May be omitted if equal to false. Note that adult=true and pcon=true are mutualy exclusive.
         *
         * • Optional.
         *
         * @returns {boolean}
         *
         */
        adult?: boolean;

        /**
         * @ngdoc property
         * @name GroupResultEntry#pcon
         * @propertyOf GroupResultEntry
         *
         * @description
         * If true this group contains items that may be viewed only after entering the PCON pin. The title of the group will be something like "Gesperrte Angebote" and may be directly shown to the user.
         * See request parameters hideAgeRating and hideUnrated. May be omitted if equal to false. Note that adult=true and pcon=true are mutualy exclusive.
         *
         * • Optional.
         *
         * @returns {boolean}
         *
         */
        pcon?: boolean;

        /**
         * @ngdoc property
         * @name GroupResultEntry#mqttReply
         * @propertyOf GroupResultEntry
         *
         * @description
         * Contains the reply information for MQTT to get group results
         * 
         * • Optional.
         *
         * @returns {boolean}
         *
         */
        mqttReply?: {
            replyTopic: string; // topic to be used to get message with group results
            replyPayload: any; // JSON data send to DCP to get group results        
        }    
    }

    /**
     * @ngdoc interface
     * @name PersonResultEntry
     *
     * @description
     *
     */
    interface PersonResultEntry extends ResultEntry {

        /**
         * @ngdoc property
         * @name PersonResultEntry#type
         * @propertyOf PersonResultEntry
         *
         * @description
         * This will be always 'person'.
         *
         * @returns {string}
         *
         */
        type: "person";

        /**
         * @ngdoc property
         * @name PersonResultEntry#roles
         * @propertyOf PersonResultEntry
         *
         * @description
         * Roles of the person, which may contain actor, director, host, producer etc.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        roles?: string[];

        /**
         * @ngdoc property
         * @name PersonResultEntry#poster
         * @propertyOf PersonResultEntry
         *
         * @description
         * URL of the person image (best available quality).
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        poster?: string;

        /**
         * @ngdoc property
         * @name PersonResultEntry#filmography
         * @propertyOf PersonResultEntry
         *
         * @description
         * Subset of filmography entries (0 to 3).
         *
         * • Optional.
         *
         * @returns {Filmography[]}
         *
         */
        filmography?: Filmography[];
    }

    /**
     * @ngdoc interface
     * @name Filmography
     *
     * @description
     *
     */
    interface Filmography {

        /**
         * @ngdoc property
         * @name Filmography#title
         * @propertyOf Filmography
         *
         * @description
         * Movie title.
         *
         * @returns {string}
         *
         */
        title: string;

        /**
         * @ngdoc property
         * @name Filmography#year
         * @propertyOf Filmography
         *
         * @description
         * Production year of the movie.
         *
         * @returns {number}
         *
         */
        year: number;
    }

    /**
     * @ngdoc interface
     * @name AppResultEntry
     *
     * @description
     *
     */
    interface AppResultEntry extends ResultEntry {

        /**
         * @ngdoc property
         * @name AppResultEntry#type
         * @propertyOf AppResultEntry
         *
         * @description
         * This will be always 'app'.
         *
         * @returns {string}
         *
         */
        type: "app";

        /**
         * @ngdoc property
         * @name AppResultEntry#logo
         * @propertyOf AppResultEntry
         *
         * @description
         * URL of the app logo.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        logo?: string;

        /**
         * @ngdoc property
         * @name AppResultEntry#pipLogo
         * @propertyOf AppResultEntry
         *
         * @description
         * URL of the app pip-logo.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        pipLogo?: string;

        /**
         * @ngdoc property
         * @name AppResultEntry#shortDescription
         * @propertyOf AppResultEntry
         *
         * @description
         * Short description of the app.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        shortDescription?: string;

        /**
         * @ngdoc property
         * @name AppResultEntry#longDescription
         * @propertyOf AppResultEntry
         *
         * @description
         * Long description of the app.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        longDescription?: string;

        /**
         * @ngdoc property
         * @name AppResultEntry#ageRatingName
         * @propertyOf AppResultEntry
         *
         * @description
         * User displayable name of the age rating of this app.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        ageRatingName?: string;

        /**
         * @ngdoc property
         * @name AppResultEntry#ageRatingId
         * @propertyOf AppResultEntry
         *
         * @description
         * ID of the age rating that can be used to retrieve further age rating information from CMLS masterdata lookup.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        ageRatingId?: string;
    }

    /**
     * @ngdoc interface
     * @name TvChannelResultEntry
     *
     * @description
     *
     */
    interface TvChannelResultEntry extends ResultEntry {

        /**
         * @ngdoc property
         * @name TvChannelResultEntry#type
         * @propertyOf TvChannelResultEntry
         *
         * @description
         * This will be always 'tvChannel'.
         *
         * @returns {string}
         *
         */
        type: "tvChannel";

        /**
         * @ngdoc property
         * @name TvChannelResultEntry#languages
         * @propertyOf TvChannelResultEntry
         *
         * @description
         * Display names of this channel languages.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        languages?: string[];

        /**
         * @ngdoc property
         * @name TvChannelResultEntry#genres
         * @propertyOf TvChannelResultEntry
         *
         * @description
         * Display names of this channel genres.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        genres?: string[];

        /**
         * @ngdoc property
         * @name TvChannelResultEntry#poster
         * @propertyOf TvChannelResultEntry
         *
         * @description
         * URL of the channel logo.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        poster?: string;

        /**
         * @ngdoc property
         * @name TvChannelResultEntry#logoWide
         * @propertyOf TvChannelResultEntry
         *
         * @description
         * URL of the channel logo 16:9.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        logoWide?: string;
    }

    /**
     * @ngdoc interface
     * @name TvSatServiceEntry
     *
     * @description
     *
     */
    interface TvSatServiceEntry extends ResultEntry {

        /**
         * @ngdoc property
         * @name TvSatServiceEntry#type
         * @propertyOf TvSatServiceEntry
         *
         * @description
         * This will be always 'satService'.
         *
         * @returns {string}
         *
         */
        type: "satService";

        /**
         * @ngdoc property
         * @name TvSatServiceEntry#quality
         * @propertyOf TvSatServiceEntry
         *
         * @description
         * Name of quality of the sat service channel.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        quality?: string;

        /**
         * @ngdoc property
         * @name TvSatServiceEntry#satelliteId
         * @propertyOf TvSatServiceEntry
         *
         * @description
         * satellite id of the sat service channel. Same in ZOSA and CMLS
         *
         * @returns {string}
         *
         */
        satelliteId?: string;

        /**
         * @ngdoc property
         * @name TvSatServiceEntry#satelliteName
         * @propertyOf TvSatServiceEntry
         *
         * @description
         * satellite name of sat service
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        satelliteName?: string;

        /**
         * @ngdoc property
         * @name TvSatServiceEntry#transponderId
         * @propertyOf TvSatServiceEntry
         *
         * @description
         * Id of the transponder this service belongs to.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        transponderId?: string;

        /**
         * @ngdoc property
         * @name TvSatServiceEntry#serviceId
         * @propertyOf TvSatServiceEntry
         *
         * @description
         * Service ID, which is not unique among all satellites/transponders but should be unique among the services of a transponder.
         *
         * @returns {number}
         *
         */
        serviceId?: number;

        /**
         * @ngdoc property
         * @name TvSatServiceEntry#transportStreamId
         * @propertyOf TvSatServiceEntry
         *
         * @description
         * transport stream id of sat service
         *
         * @returns {number}
         *
         */
        transportStreamId?: number;

        /**
         * @ngdoc property
         * @name TvSatServiceEntry#originalNetworkId
         * @propertyOf TvSatServiceEntry
         *
         * @description
         * original network id of sat service
         *
         * @returns {number}
         *
         */
        originalNetworkId?: number;

        /**
         * @ngdoc property
         * @name TvSatServiceEntry#orbitalDegree
         * @propertyOf TvSatServiceEntry
         *
         * @description
         * orbital degree of sat service
         *
         * @returns {number}
         *
         */
        orbitalDegree?: number;

        /**
         * @ngdoc property
         * @name TvSatServiceEntry#orbitalOrientation
         * @propertyOf TvSatServiceEntry
         *
         * @description
         * orbital orientation of sat service
         *
         * @returns {string}
         *
         */
        orbitalOrientation?: string;

        /**
         * @ngdoc property
         * @name TvSatServiceEntry#frequency
         * @propertyOf TvSatServiceEntry
         *
         * @description
         * frequency of sat service
         *
         * @returns {number}
         *
         */
        frequency?: number;


        /**
         * @ngdoc property
         * @name TvSatServiceEntry#polarization
         * @propertyOf TvSatServiceEntry
         *
         * @description
         * polarization of sat service.
         *
         * @returns {string}
         *
         */
        polarization?: string;
    }

    /**
     * @ngdoc interface
     * @name TvBroadcastResultEntry
     *
     * @description
     *
     */
    interface TvBroadcastResultEntry extends ResultEntry {

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#type
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * This will be always 'tvBroadcast'.
         *
         * @returns {string}
         *
         */
        type: "tvBroadcast";

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#logicalChannelId
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * ID of the logical channel this broadcast is aired on. This can be used to resolve the logical channel in CMLS lookup.
         *
         * @returns {string}
         *
         */
        logicalChannelId?: string;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#logicalChannelName
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * User-displayable name of the logical channel this broadcast is aired on.
         *
         * @returns {string}
         *
         */
        logicalChannelName?: string;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#subtitle
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * Subtitle of the broadcast.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        subtitle?: string;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#start
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * Start time of the broadcast (e.g. 2014-05-07T20:15:00+0200).
         *
         * @returns {string}
         *
         */
        start?: string;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#end
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * End time of the broadcast (e.g. 2014-05-07T20:15:00+0200).
         *
         * @returns {string}
         *
         */
        end?: string;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#channelLogo
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * URL of the associated channel logo (with dark background).
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        channelLogo?: string;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#mainGenre
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * Display name of the main genre.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        mainGenre?: string;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#category
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * Category of this broadcast, such as Spielfilm, Series etc.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        category?: string;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#countries
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * Display names of the production countries.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        countries?: string[];

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#year
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * Production year of this broadcast.
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        year?: number;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#poster
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * URL of the broadcast image (best available quality in 16:9 resolution).
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        poster?: string;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#seriesTitle
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * Optional series title.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        seriesTitle?: string;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#seasonNumber
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * Optional season number.
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        seasonNumber?: number;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#episodeNumber
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * Optional episode number.
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        episodeNumber?: number;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#ageRatingName
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * Display name of the age rating (e.g. Ab 12 Jahren).
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        ageRatingName?: string;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#ageRatingId
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * ID of the age rating that can be used to retrieve additional information about the age rating from CMLS child protection rating masterdata lookup.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        ageRatingId?: string;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#instantRestart
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * true if instant restart is allowed for this broadcast.
         *
         * • Optional.
         *
         * @returns {boolean}
         *
         */
        instantRestart?: boolean;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#tvTip
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * true if this broadcast was recommended by an editor.
         *
         * • Optional.
         *
         * @returns {boolean}
         *
         */
        tvTip?: boolean;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#communityRating
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * Optional community rating as (integer) stars in range [1:5].
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        communityRating?: number;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#communityRatingStars
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * Optional community rating half stars as (float) half stars in range [1:5].
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        communityRatingStars?: number;

        /**
         * @ngdoc property
         * @name TvBroadcastResultEntry#cluster
         * @propertyOf TvBroadcastResultEntry
         *
         * @description
         * For broadcasts this will always contain the value tv.
         *
         * @returns {string}
         *
         */
        cluster?: string;
    }

    /**
     * @ngdoc interface
     * @name VodItemResultEntry
     *
     * @description
     *
     */
    interface VodItemResultEntry extends ResultEntry {

        /**
         * @ngdoc property
         * @name VodItemResultEntry#type
         * @propertyOf VodItemResultEntry
         *
         * @description
         * This will be always 'vod'.
         *
         * @returns {string}
         *
         */
        type: "vod";

        /**
         * @ngdoc property
         * @name VodItemResultEntry#vodType
         * @propertyOf VodItemResultEntry
         *
         * @description
         * One of movie, episode, season, or series.
         *
         * @returns {string}
         *
         */
        vodType?: string;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#duration
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Runtime in minutes.
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        duration?: number;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#partners
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Partners that provide this vod.
         *
         * • Optional.
         *
         * @returns {Partner[]}
         *
         */
        partners?: Partner[];

        /**
         * @ngdoc property
         * @name VodItemResultEntry#mainGenre
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Display name of the main genre.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        mainGenre?: string;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#countries
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Display names of the production countries.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        countries?: string[];

        /**
         * @ngdoc property
         * @name VodItemResultEntry#poster
         * @propertyOf VodItemResultEntry
         *
         * @description
         * URL of the vod poster (best available quality).
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        poster?: string;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#posterWide
         * @propertyOf VodItemResultEntry
         *
         * @description
         * URL of the vod poster in wide aspect ratio (best available quality).
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        posterWide?: string;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#posterNoTitle
         * @propertyOf VodItemResultEntry
         *
         * @description
         * URL of the vod poster without title (best available quality).
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        posterNoTitle?: string;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#posterWideNoTitle
         * @propertyOf VodItemResultEntry
         *
         * @description
         * URL of the vod poster without title in wide aspect ratio (best available quality).
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        posterWideNoTitle?: string;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#scenes
         * @propertyOf VodItemResultEntry
         *
         * @description
         * URLs of up to five scenes of this vod.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        scenes?: string[];

        /**
         * @ngdoc property
         * @name VodItemResultEntry#year
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Production year. Only available for movies, episodes, and seasons.
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        year?: number;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#yearFrom
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Start year of the production. Only available for series.
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        yearFrom?: number;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#yearTo
         * @propertyOf VodItemResultEntry
         *
         * @description
         * End year of the production. Only available for series.
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        yearTo?: number;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#communityRating
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Optional community rating as (integer) stars in range [1:5].
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        communityRating?: number;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#communityRatingStars
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Optional community rating as (integer) stars in range [1:5].
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        communityRatingStars?: number;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#seriesTitle
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Optional series title (only for series, seasons, and episodes).
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        seriesTitle?: string;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#seasonNumber
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Optional season number (only for seasons and episodes).
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        seasonNumber?: number;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#episodeNumber
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Optional episode number (only for episodes).
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        episodeNumber?: number;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#seasonCount
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Optional number of produced seasons (only for series and seasons).
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        seasonCount?: number;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#episodeCount
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Optional number of produced episodes (only for episodes, seasons and series).
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        episodeCount?: number;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#ageRatingName
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Display name of the age rating (e.g. Ab 12 Jahren). May be null (e.g. for some series and seasons).
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        ageRatingName?: string;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#ageRatingId
         * @propertyOf VodItemResultEntry
         *
         * @description
         * ID of the age rating that can be used to retrieve additional information about the age rating from CMLS child protection rating masterdata lookup.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        ageRatingId?: string;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#cluster
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Content cluster with one of the possible values: vodMain, vodSeries, vodOther, erotic.
         *
         * @returns {string}
         *
         */
        cluster?: string;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#sourceType
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Source type that can be used to adjust wording of detail pages. Possible values are tvArchive, vodPremium, sports.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        sourceType?: string;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#airtime
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Optional airtime (e.g. 2015-12-07T20:15:00+0200).
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        airtime?: string;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#cluster
         * @propertyOf VodItemResultEntry
         *
         * @description
         * An additional categorization of the vod. Possible values are main, series, other.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        category?: string;

        /**
         * @ngdoc property
         * @name VodItemResultEntry#qualities
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Contains the available video qualities for this vod. Possible values are SD, HD, UHD, 3D, UHDHDR.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        qualities?: string[];

        /**
         * @ngdoc property
         * @name VodItemResultEntry#tags
         * @propertyOf VodItemResultEntry
         *
         * @description
         * Contains the internal named attributes which are additional attributes assigned to this content.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        tags?: string[];

        /**
         * @ngdoc property
         * @name VodItemResultEntry#availableSince
         * @propertyOf VodItemResultEntry
         *
         * @description
         * The first time that this content became available (e.g. 2015-12-07T20:15:00+0200).
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        availableSince?: string;
    }

    /**
     * @ngdoc interface
     * @name DTSearchParams
     *
     * @description
     * Input parameter for the ZOSA custom api to perform a CMLS search.
     *
     */
    interface DTSearchParams {

        /**
         * @ngdoc property
         * @name DTSearchParams#searchProfileId
         * @propertyOf DTSearchParams
         *
         * @description
         * ID of the search profile.
         * Note that search profile ID is case-insensitive (internally converted to the lower case that must match the search configuration).
         *
         * @returns {string}
         *
         */
        searchProfileId: string;

        /**
         * @ngdoc property
         * @name DTSearchParams#query
         * @propertyOf DTSearchParams
         *
         * @description
         * User query (all special characters will be escaped, except single *).
         * 
         * • Optional.
         * • If not specified, the default value is *.
         *
         * @returns {string}
         *
         */
        query?: string;

        /**
         * @ngdoc property
         * @name DTSearchParams#size
         * @propertyOf DTSearchParams
         *
         * @description
         * Desired number of results. Default size is profile specific.
         * Note that groups / grouped content counts as one entry.
         * 
         * • Optional.
         *
         * @returns {number}
         *
         */
        size?: number;

        /**
         * @ngdoc property
         * @name DTSearchParams#offset
         * @propertyOf DTSearchParams
         *
         * @description
         * Offset for pagination. May be overwritten by the server if larger than the result size.
         * Note that groups count as single entries.
         * 
         * • Optional.
         * • If not specified, the default value is 0.
         *
         * @returns {number}
         *
         */
        offset?: number;

        /**
         * @ngdoc property
         * @name DTSearchParams#sort
         * @propertyOf DTSearchParams
         *
         * @description
         * Sort criteria. Default sorting and available values are profile specific.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        sort?: string;

        /**
         * @ngdoc property
         * @name DTSearchParams#filter
         * @propertyOf DTSearchParams
         *
         * @description
         * Optional dictionary of filter IDs mapped to filter value IDs. Can be used if a navigator entry was selected.
         * 
         * May be specified multiple times, each entry having the format: <navigatorId>:<navigatorEntryId>
         * If the same navigator filter ID is specified multiple times (with different navigator entry IDs) they will be combined via logical OR.
         * 
         * In addition to navigatorIDs some profiles also allow special filters that are not part of response navigators.
         * The filter values format is: <filterId>:<solrexpression>
         * Some examples of valid expressions are:
         * - Range queries: [start TO end] (where start and end may be arbitrary numeric values, strings or ISO 8601 dates).
         * - Boolean expressions, such as A AND B AND -C (example for a multivalued filter, where values A and B are mandatory but value C forbidden).
         * - Wildcard expressions, such as prefix* or prefix?suffix.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        filter?: string[];

        /**
         * @ngdoc property
         * @name DTSearchParams#groupId
         * @propertyOf DTSearchParams
         *
         * @description
         * Allows listing of group results obtained by the previous search request. Only IDs of a result entry of type group can be used.
         * Note that filters, size and offset must be the same to receive the correct number of results.
         * Since sorting inside of the group may differ from the overall sorting (profile-specific setting), the sort parameter may be ignored for grouped content.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        groupId?: string;

        /**
         * @ngdoc property
         * @name DTSearchParams#hideAdult
         * @propertyOf DTSearchParams
         *
         * @description
         * Defines if adult items will be hidden in a separate group with a generic title. If the user has a running AVS pin session, the value shall be set to false, otherwise to true. If missing the server will assume true.
         * 
         * • Optional.
         *
         * @returns {boolean}
         *
         */
        hideAdult?: boolean;

        /**
         * @ngdoc property
         * @name DTSearchParams#hideAgeRating
         * @propertyOf DTSearchParams
         *
         * @description
         * Items of this rating and higher ratings will be hidden in a separate group with a generic title.
         * Note that the group is the same as for the hidden unrated content (see hideUnrated). Allowed values are: 0, 6, 12, 16, 18.
         * May be omitted if not grouping based on age rating other than unknown or oaf is desired.
         * 
         * • Optional.
         *
         * @returns {string}
         *
         */
        hideAgeRating?: string;

        /**
         * @ngdoc property
         * @name DTSearchParams#hideUnrated
         * @propertyOf DTSearchParams
         *
         * @description
         * Defines if unrated items will be hidden in a separate group with a generic title.
         * true: The unrated items will be hidden in a separate group (the same group with locking content by parental control setting, see hideAgeRating)
         * false: The unrated items won’t be hidden (default value).
         * 
         * • Optional.
         *
         * @returns {boolean}
         *
         */
        hideUnrated?: boolean;

        /**
         * @ngdoc property
         * @name DTSearchParams#hideErotic
         * @propertyOf DTSearchParams
         *
         * @description
         * Defines if erotic items will be hidden in a separate group with a generic title.
         * true: The erotic items will be hidden in a separate group (the same group with locking content by parental control setting, see hideAgeRating)
         * false: The erotic items won’t be hidden (default value).
         * 
         * • Optional.
         *
         * @returns {boolean}
         *
         */
        hideErotic?: boolean;


        /**
         * @ngdoc property
         * @name DTSearchParams#additionalChannels
         * @propertyOf DTSearchParams
         *
         * @description
         * List of logical channel IDs. This optional parameter enables search for the logical channels, broadcasts and persons although they only have "hidden" physical channels assigned.
         * 
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        additionalChannels?: string[];

        /**
         * @ngdoc property
         * @name DTSearchParams#additionalApps
         * @propertyOf DTSearchParams
         *
         * @description
         * List of app IDs. This optional parameter enables search for apps that are hidden for usual customer.
         * 
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        additionalApps?: string[];

        /**
         * @ngdoc property
         * @name DTSearchParams#configuredSatellites
         * @propertyOf DTSearchParams
         *
         * @description
         * Ordered list of satellite IDs as published in satellite information document.
         * Should contain all IDs of satellites that were configured by the sat or hybrid customer. Only content that can be received with this configuration will be returned.
         * 
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        configuredSatellites?: string[];

        /**
         * @ngdoc property
         * @name DTSearchParams#showSorts
         * @propertyOf DTSearchParams
         *
         * @description
         * 
         * Add sort criteria to result output
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        showSorts?: boolean;
    }
}
