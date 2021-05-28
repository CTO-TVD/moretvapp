declare namespace netflix {

    interface IBaseParameter<T> {

        /**
         * The Netflix-generated device type for the device that is making the request.
         */
        deviceType: string;

        /**
         * The Netflix ESN of the device.
         * 
         * For more information, see ESN specification (https://nrd.netflix.com/docs/certification/partner-device-manager/esn-specification).
         */
        esn: string;

        /**
         * The BCP-47 locale code representing the user's preferred language.
         * 
         * If the language is not supported by Netflix, Netflix will fall back to a supported language.
         */
        language: string;

        /**
         * Configuration options for the API.
         * 
         * These should be formatted as a JSON object. The JSON object must then be URL-encoded.
         */
        options: T;

        /**
         * The Netflix-generated ID for the partner.
         */
        partnerId: string;
    }

    interface IImagesTypes {

        /**
         * The main image for the tile.
         * 
         * This is meant to be displayed alongside other tiles in a UI row.
         */
        tileImage: {

            preferredHeight: number;
            preferredWidth: number;
            url?: string;
        };

        /**
         * The large hero image for the tile.
         */
        heroImage?: {

            preferredHeight: number;
            preferredWidth: number;
            url?: string;
        };
    }

    interface ISupportedFields {

        /**
         * Array of actors for the title.
         */
        actors?: true;

        /**
         * Device-relevant deep link.
         * 
         * Do not inspect or modify this parameter.
         */
        deepLink?: true;

        /**
         * Long form description of the tile.
         */
        description?: true;

        /**
         * Array of directors for the title.
         */
        directors?: true;

        /**
         * Runtime of the video.
         */
        duration?: true;

        /**
         * Array of genres for the video.
         */
        genres?: true;

        /**
         * Map of the image types to image URLs and dimensions.
         */
        images?: true;

        /**
         * Title release year.
         */
        latestReleaseYear?: true;

        /**
         * Locale-specific rating for the title.
         */
        maturityRating?: true;

        /**
         * Number of episodes, if part of series.
         */
        numEpisodes?: true;

        /**
         * Number of seasons, if part of series.
         */
        numSeasons?: true;

        /**
         * Rating board associated with the maturityRating
         */
        ratingBoard?: true;

        /**
         * Subtitle or short description of the tile.
         */
        shortDescription?: true;

        /**
         * Index of the tile within its group. This is the index the tile should appear at within your UI.
         */
        tileIndex?: true;

        /**
         * The title of the tile.
         */
        title?: true;
    }
    interface ITileGroup {

        /**
         * The index that the group should appear.
         */
        groupIndex: number;

        /**
         * A description of the group.
         */
        groupName: string;

        /**
         * List of tiles, a generic construct that can describe a title, billboard, call to action, or future UI requirements.
         */
        tiles: ITile[];
    }

    interface ITile {

        /**
         * Array of actors for the title.
         */
        actors?: string[];

        /**
         * Device-relevant deep link.
         * 
         * Do not inspect or modify this parameter.
         */
        deepLink: string;

        /**
         * Long form description of the tile.
         */
        description?: string;

        /**
         * Array of directors for the title.
         */
        directors?: string[];

        /**
         * Runtime of the video.
         */
        duration?: number;

        /**
         * Array of genres for the video.
         */
        genres?: string[];

        /**
         * Map of the image types to image URLs and dimensions.
         */
        images?: IImagesTypes;

        /**
         * Title release year.
         */
        latestReleaseYear?: number;

        /**
         * Locale-specific rating for the title.
         */
        maturityRating?: string;

        /**
         * Number of episodes, if part of series.
         */
        numEpisodes?: number;

        /**
         * Number of seasons, if part of series.
         */
        numSeasons?: number;

        /**
         * Rating board associated with the maturityRating
         */
        ratingBoard?: string;

        /**
         * Subtitle or short description of the tile.
         */
        shortDescription?: string;

        /**
         * Index of the tile within its group. This is the index the tile should appear at within your UI.
         */
        tileIndex: number;

        /**
         * The title of the tile.
         */
        title: string;

        /**
         * interactionID origin used in DET Version 1.0
         */
        interactionId: string;
    }
}

declare namespace netflix.categories {

    type CategoryIds = "KIDS_TV" | "MOVIES" | "ORIGINALS" | "POPULAR" | "TV_SHOWS";

    interface ICategoriesParameter extends IBaseParameter<ICategoriesOptions> {

    }

    interface ICategoriesOptions {

        categories: ICategoriesOptionsData;
    }

    interface ICategoriesOptionsData {

        /**
         * The list of category IDs to request groups.
         * 
         * This must be one of the supported category IDs.
         */
        categoryIds: CategoryIds[];

        /**
         * The maximum number of tiles that can be displayed per group.
         */
        maxTilesPerGroup: number;

        /**
         * The maximum number of groups the UI can display.
         */
        maxNumGroups: number;

        /**
         * Map of image types with preferred width and height of each type.
         */
        imageTypes: IImagesTypes;

        /**
         * A map of supported metadata fields to include with each tile.
         * 
         * The following fields must be included by default:
         * tileIndex, deepLink, images
         */
        supportedFields?: ISupportedFields;
    }

    interface ICategoriesResponse {

        categories: ICategoriesResponseRow;
    }

    interface ICategoriesResponseRow {

        /**
         * Expiration timestamp of this set of tiles in seconds.
         * 
         * Before expiration the device should call again to get a new set of tiles.
         */
        expiration: number;

        /**
         * Map of category IDs to Tile Groups.
         */
        groups: { [key in CategoryIds]: ITileGroup };

        /**
         * Minimum interval after which the device can request new tile data, in seconds.
         * 
         * For example if this was set to 600 seconds (10 minutes), the device can choose to request new data every hour, but it can not request new data every 300 seconds (5 minutes).
         */
        minRefreshInterval: number;
    }
}

declare namespace netflix.discovery {

    interface IDiscoveryParameter extends IBaseParameter<IDiscoveryOptions> {

    }

    interface IDiscoveryOptions {

        row: IDiscoveryOptionsData;
    }

    interface IDiscoveryOptionsData {

        /**
         * The maximum number of tiles that can be displayed per group.
         */
        maxTilesPerGroup: number;

        /**
         * The maximum number of groups the UI can display.
         */
        maxNumGroups: number;

        /**
         * Map of image types with preferred width and height of each type.
         */
        imageTypes: IImagesTypes;

        /**
         * A map of supported metadata fields to include with each tile.
         * 
         * The following fields must be included by default:
         * tileIndex, deepLink, images
         */
        supportedFields?: ISupportedFields;
    }

    interface IDiscoveryResponse {

        row: IDiscoveryResponseRow;
    }

    interface IDiscoveryResponseRow {

        /**
         * Expiration timestamp of this set of tiles in seconds.
         * 
         * Before expiration the device should call again to get a new set of tiles.
         */
        expiration: number;

        /**
         * List of Tile Groups.
         */
        groups: ITileGroup[];

        /**
         * Minimum interval after which the device can request new tile data, in seconds.
         * 
         * For example if this was set to 600 seconds (10 minutes), the device can choose to request new data every hour, but it can not request new data every 300 seconds (5 minutes).
         */
        minRefreshInterval: number;
    }
}

declare namespace netflix.esn {

    interface IEsnResponse {

        Error?: IEsnError;
    }

    interface IEsnError {

        code: number,
        category: string;
        msg: string;
    }
}

declare namespace netflix.search {

    interface ISearchParameter extends IBaseParameter<ISearchOptions> {

    }

    interface ISearchOptions {

        search: ISearchOptionsData;
    }

    interface ISearchOptionsData {

        /**
         * The search query string.
         */
        query: string;

        /**
        * The maximum number of tiles that can be displayed per group.
        */
        maxTilesPerGroup: number;

        /**
         * The maximum number of groups the UI can display.
         */
        maxNumGroups: number;

        /**
         * Map of image types with preferred width and height of each type.
         */
        imageTypes: IImagesTypes;

        /**
         * A map of supported metadata fields to include with each tile.
         * 
         * The following fields must be included by default:
         * tileIndex, deepLink, images
         */
        supportedFields?: ISupportedFields;
    }

    interface ISearchResponse {

        search: ISearchResponseRow;
    }

    interface ISearchResponseRow {

        /**
         * List of Tile Groups.
         */
        groups: ITileGroup[];
    }
}

declare namespace netflix.graphQL {

    type OperationName = "Search" | "Categories" | "Discovery" | "SendImpressionEvent";
    type VariableName = "query" | "limit" | "heroPreferredHeight" | "heroPreferredWidth" | "tilePreferredHeight" | "tilePreferredWidth" | "ids" | "groupLimit" | "tileLimit" | "deepLinks" | "heroAspectRatioMode" | "tileAspectRatioMode";
    type CommonResponseTypes = "Query" | "TileImage" | "TileImages" | "VideoTile";
    type CategoryResponseTypes = "Categories" | "CategoryGroup";
    type DiscoveryResponseTypes = "Discovery" | "DiscoveryGroup" | "ProfileTile" | "SignUpTile";
    type SearchResponseTypes = "Search";
    type NetflixResponseTypes = CommonResponseTypes | CategoryResponseTypes | DiscoveryResponseTypes | SearchResponseTypes;

    type NetflixQueryResponse = netflix.graphQL.search.ISearchResponse | netflix.graphQL.categories.ICategoriesResponse | netflix.graphQL.discovery.IDiscoveryResponse;

    interface ITile {

        title: string;
        shortDescription?: string;
        description: string;
        deepLink: string;

        actors?: string[];
        directors?: string[];
        genres?: string[];

        duration: number; //seconds
        episodesCount?: number;
        latestReleaseYear?: number;
        maturityRating?: string;
        ratingBoard?: string;
        seasonsCount?: number;

        images?: {

            tile?: ITileImage
        };
    }

    interface ITileImage {

        url: string;
        width: number;
        height: number;
    }

    interface INetflixResponse {

        vdid?: string;
        cachingGuidelines: ICachingGuidelines;
        timestamp: number;
        responseOverridden: boolean;
    }

    interface ICachingGuidelines {

        // The point at which data is considered to be expired. [Unix timestamp (seconds)]
        expiresAt?: number;

        // The earliest point at which partners should fetch new data [seconds]
        minRefreshInterval?: number;

        // The latest point at which partners should fetch new data [seconds]
        maxRefreshInterval?: number
    }
}

declare namespace netflix.graphQL.search {

    interface ISearchResponse extends INetflixResponse {

        data: {

            search: {

                tiles: ITile[]
            }
        }
    }
}

declare namespace netflix.graphQL.categories {

    interface ICategoriesResponse extends INetflixResponse {

        data: {

            categories: {

                groups: IGroup[]
            }
        }
    }

    interface IGroup {

        id: string;

        tiles: ITile[];
    }
}

declare namespace netflix.graphQL.discovery {

    interface IDiscoveryResponse extends INetflixResponse {

        data: {

            discovery: {

                groups: IGroup[]
            }
        }
    }

    interface IGroup {

        title: string;

        tiles: ITile[];
    }
}

declare namespace netflix.graphQL.impression {

    interface ISendImpressionEventResponse extends INetflixResponse {

        data: {

            sendImpressionEvent: {

                status: string
            }
        }
    }
}
