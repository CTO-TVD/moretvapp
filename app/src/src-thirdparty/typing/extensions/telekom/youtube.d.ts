declare namespace telekom.youtube {

    interface SearchListParameters {

        searchString: string;
        maxResults: number;

        order?: string
        pageToken?: string;
        safeSearch?: string;
    }

    interface SearchParameters {
        query: string;
        maxResults: number;
        pageToken?: string;
        order?: string
    }

    interface SearchResponse {
        kind?: string;
        etag?: string;
        nextPageToken?: string;
        regionCode?: string;
        items?: ResultItem[];
        pageInfo: PageInfo;
    }

    interface PageInfo {
        totalResults?: number;
        resultsPerPage?: number;
    }

    interface ResultItem {
        kind?: string;
        etag?: string;
        id?: ResourceId;
        snippet?: MetadataSnippet;
    }

    interface ResourceId {
        kind?: string;
        channelId?: string;
        videoId?: string;
        playlistId?: string;
    }

    interface MetadataSnippet {
        publishedAt?: Date;
        channelId?: string;
        title?: string;
        description?: string;
        thumbnails?: Thumbnails;
        channelTitle?: string;
        liveBroadcastContent?: string;
    }

    interface Thumbnails {
        default?: Thumbnail;
        medium?: Thumbnail;
        high?: Thumbnail;
    }

    interface Thumbnail {
        url: string;
        width: number;
        height: number;
    }

    interface ErrorResult {
        error: Error
    }

    interface Error {
        code: number;
        message: string;
        errors: ErrorDetail[];
    }

    interface ErrorDetail {
        domain: string;
        reason: string;
        message: string;
        locationType: string;
        location: string;
    }
}
