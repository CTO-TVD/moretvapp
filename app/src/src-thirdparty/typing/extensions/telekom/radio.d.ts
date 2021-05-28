
declare namespace telekom.radio {

    interface AbstractResponse {

        existingElements: number;
    }

    interface SortOption {

        ID: number;
        name: string;
        selectable: boolean;
    }

    interface SortResponse extends AbstractResponse {

        entries: SortOption[];
    }

    interface IPageable {
        pagingStart?: number;
        pagingCount?: number;

    }

    interface GetAllChannelsParams extends IPageable {
        sort?: number;
    }

    interface GetFavoritesParams extends IPageable {

    }

    interface GetFilteredChannelsParams extends IPageable {
        sort?: number;
        filter?: NumberTuple[];
    }

    interface GetFilterParams extends IPageable {

        filterId: number;
        filter?: NumberTuple[];
    }

    interface GetSearchedChannelIndexParams {

        channelId: number;
        sort?: number;
        searchTerm: string;
    }

    interface GetFilteredChannelIndexParams {

        channelId: number;
        sort?: number;
        filter?: NumberTuple[];
    }

    interface SearchParams extends IPageable {
        sort?: number;
        searchTerm?: string;
    }

    interface SetUserBoxConfigParams {

        config?: string;
    }

    interface SetLastTunedChannelParams {

        channelId: number;
    }

    interface AddToFavoritesParams {

        channelId: number;
    }

    interface RemoveFromFavoritesParams {

        channelId: number;
    }

    interface OrderFavoritesParams {

        channelIds: number[];
    }

    interface GetBackgroundImageUrlsParams {

        channelId?: number;
        genreId?: number;
        resolution?: number;
    }

    interface GetResourcesParams {

        keys?: string[];
    }

    const enum StatisticWdycf {
        CHANNELPAD = 300,
        ALLCHANNELS = 301,
        FAVORITES = 302,
        SEARCH = 303
    }

    const enum StatisticElementNumber {
        ARROW_UP = 30001,
        ARROW_DOWN = 30002,
        PAGE_UP = 30003,
        PAGE_DOWN = 30004,
        OK = 30100,
        CHANNELPAD = 30200

    }

    const enum StatisticActionType {
        LOGIN_SUCCESS = 0,
        LOGIN_FAIL = 1,
        TUNE_START = 2,
        TUNE_FAIL = 3,
        TUNE_STOP = 4,
        TUNE_IN_PROGRESS = 5,
        LOGOUT = 6,
        TUNE_SUCCESS = 7
    }

    interface WriteStatisticActionParams {

        dateTime?: Date;
        streamUrlId?: number;
        elementNumber?: StatisticElementNumber;
        pageNumber?: number; //not used for NGTV
        wdycf?: StatisticWdycf; //tune start, tune fail   events
        actionType: StatisticActionType;
        sessionId?: string;
    }

    interface NumberTuple {

        parent: number;
        id: number;
    }

    interface ChannelsResponse extends AbstractResponse {

        channels: Channel[];
    }

    interface FiltersResponse extends AbstractResponse {

        filters: Filter[];
    }

    interface FilterResponse extends AbstractResponse {

        entries: FilterElement[];
    }

    interface SearchResponse extends AbstractResponse {

        searchChannel: SearchChannel[];
        searchID: string;
    }

    interface FilteredChannelIndexResponse extends AbstractResponse {

        index: number;
    }

    interface SearchedChannelIndexResponse extends AbstractResponse {

        index: number;
    }

    interface ConfigResponse extends AbstractResponse {

        config: string;
    }

    interface ImageUrlResponse extends AbstractResponse {

        imageUrl: ImageUrl[];
    }

    interface ResourceResponse extends AbstractResponse {

        resources: Resource[];
    }

    interface Resource {

        key: string;
        textValue: string;
        dateTimeValue: string;
        numberValue: number;
    }

    interface SearchChannel extends Channel {

        city: string;
        Continent: string;
    }

    interface FilterElement {

        id: number;
        name: string;
        elementCount: number;
        imageURL: string;
    }

    interface ResolutionsResponse extends AbstractResponse {

        entries: ResolutionType[];
    }

    interface ResolutionType {

        id: number;
        name: string;
        shortName: string;
    }

    interface Filter {

        id: number;
        name: string;
    }

    interface Channel {

        channelId: number;
        favorite: boolean;
        title: string;
        isEnabled: boolean;
        channelDetails: string;
        genre: string;
        logoUrl: ImageUrl[];
        tuneUrl: StreamURL[];
    }

    interface ImageUrl {

        url: string;
        id: number;
        contentType: string;
    }

    interface StreamURL {

        url: string;
        id: number;
        encoding: string;
        stationId: number;
        bitrate: number;
        quality: number;
        gesamtStatus: number;
    }
}