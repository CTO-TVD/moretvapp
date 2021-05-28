// Type definitions for jsZOSA v0.133
// Project: NGTV
// Definitions by: Maik Schulze
// Definitions: https://github.com/CTO-TVD/src-thirdparty

type MapToString<T> = {
    [P in keyof T]: string
}

type ZosaItemFieldsType<T> = T extends string ? string[] : Array<keyof T | "long">

declare namespace zosa {

    interface IZosaConstant extends
        IZosaAudioChannelType,
        IZosaAudioSupplementary,
        IZosaBandwidthBookingType,
        IZosaChannelType,
        IZosaCustomApis,
        IZosaRecordingDeleteMode,
        IZosaEpisodeSelection,
        IZosaDeviceType,
        IZosaDvbConflictType,
        IZosaErrorCode,
        IZosaExternalIdType,
        IZosaParentRecordingType,
        IZosaParticipantType,
        IZosaRecordingConflictReason,
        IZosaRecordingFailReason,
        IZosaRecordingSpaceType,
        IZosaRecordingState,
        IZosaRecordingType,
        IZosaRemoteRecordingSchedulingStatus,
        IZosaRecurrenceEndStyle,
        IZosaRecurrenceType,
        IZosaSelectedStreamReason,
        IZosaSource,
        IZosaTransmissionType,
        IZosaType,
        IZosaVideoDefinition {
    }

    /**
     *
     * DESIGN NOTES
     *
     * Type aliases are exactly the same as their original types; they are simply alternative names. You can use these aliases to better document your code and aid readability.
     *
     */

    /**
     * @ngdoc type
     * @name alwaysFunction
     *
     * @description
     * Function called on completion.
     *
     * @param {ZosaRequestResponseEvent<T> | ZosaErrorEvent} event The response or error event.
     *
     */
    type alwaysFunction<T> = (event: ZosaRequestResponseEvent<T> | ZosaErrorEvent) => void;

    /**
     * @ngdoc type
     * @name dataUpdatedEventFunction
     *
     * @description
     * Function called on data updated.
     *
     * @param {ZosaDataUpdatedEvent} event The data updated event.
     *
     */
    type dataUpdatedEventFunction = (event: ZosaDataUpdatedEvent) => void;

    /**
     * @ngdoc type
     * @name failureFunction
     *
     * @description
     * Function called on failure.
     *
     * @param {ZosaErrorEvent} event The error event.
     *
     */
    type failureFunction = (event: ZosaErrorEvent) => void;

    /**
     * @ngdoc type
     * @name messageEventFunction
     *
     * @description
     * Function called on message.
     *
     */
    type messageEventFunction = (event: ZosaMessageEvent) => void;

    /**
     * @ngdoc type
     * @name onServiceProviderSessionErrorCallbackFunc
     *
     * @description
     * The error event.
     *
     */
    type onServiceProviderSessionErrorCallbackFunc = (event: any) => void;

    /**
     * @ngdoc type
     * @name parentalBlockingChangedEventFunction
     *
     * @description
     * setOnParentalBlockingChanged
     *
     * @param {ZosaParentalBlockingChangedEvent} event The blocking changed event.
     *
     */
    type parentalBlockingChangedEventFunction = (event: ZosaParentalBlockingChangedEvent) => void;

    /**
     * @ngdoc type
     * @name programsUpdatedEventFunction
     *
     * @description
     * setOnProgramsUpdated
     *
     * @param {ZosaProgramsUpdatedEvent} event The programs updated event.
     *
     */
    type programsUpdatedEventFunction = (event: ZosaProgramsUpdatedEvent) => void;

    /**
     * @ngdoc type
     * @name recordingBandwidthConflictEventFunction
     *
     * @description
     * Function called on recording bandwidth conflict.
     *
     * @param {ZosaRecordingBandwidthConflictEvent} event Recording bandwidth conflict event.
     *
     */
    type recordingBandwidthConflictEventFunction = (event: ZosaRecordingBandwidthConflictEvent) => void;

    /**
     * @ngdoc type
     * @name recordingChangeEventFunction
     *
     * @description
     * Function called on recordings.
     *
     * @param {ZosaRecordingChangedEvent} event Recording changed event.
     *
     */
    type recordingChangeEventFunction = (event: ZosaRecordingChangedEvent) => void;

    /**
     * @ngdoc type
     * @name successFunction
     *
     * @description
     * Function called on success.
     *
     * @param {ZosaRequestResponseEvent<T>} event The response event.
     *
     */
    type successFunction<T> = (event: ZosaRequestResponseEvent<T>) => void;

    /**
     * @ngdoc type
     * @name ZosaAudioChannel
     *
     * @description
     * 
     *
     */
    type ZosaAudioChannel = number;

    /**
     * @ngdoc type
     * @name ZosaAudioSupplementary
     *
     * @description
     * 
     *
     */
    type ZosaAudioSupplementary = number;

    /**
     * @ngdoc type
     * @name ZosaAudioSupplementary
     *
     * @description
     * Possible values of a {@link ZosaBandwidthBookingItem}'s bookingType
     *
     */
    type ZosaBandwidthBookingType = number;

    /**
     * @ngdoc type
     * @name ZosaChannelType
     *
     * @description
     * Possible values of a {@link ZosaChannelItem}'s channelType.
     *
     */
    type ZosaChannelType = number;

    /**
     * @ngdoc type
     * @name ZosaCustomApis
     *
     * @description
     * Available {@link ZosaCustomApi} modules.
     *
     */
    type ZosaCustomApis = string;

    /**
     * @ngdoc type
     * @name ZosaDate
     *
     * @description
     * Possible values of a date type.
     *
     */
    type ZosaDate = Date; // documentation type: number | Date;

    /**
     * @ngdoc type
     * @name ZosaDeviceType
     *
     * @description
     * Possible values of a device's type.
     *
     */
    type ZosaDeviceType = number;

    /**
     * @ngdoc type
     * @name ZosaDvbConflictType
     *
     * @description
     * DVB conflict type
     *
     */
    type ZosaDvbConflictType = number;

    /**
     * @ngdoc type
     * @name ZosaEpisodeSelection
     *
     * @description
     * Possible values for an episode selection
     *
     */
    type ZosaEpisodeSelection = number;

    /**
     * @ngdoc type
     * @name ZosaErrorCode
     *
     * @description
     * Error codes. Used for e.g. code in {@link ZosaError}.
     *
     */
    type ZosaErrorCode = number;

    /**
     * @ngdoc type
     * @name ZosaExternalIdType
     *
     * @description
     * Possible values of a External Id type used when calling {@link Zosa#getVods} with the parameter externalVodIds.
     *
     */
    type ZosaExternalIdType = number;

    /**
     * @ngdoc object
     * @name ZosaId
     *
     * @description
     * The zosa identifier (unique) for the item. The duration of the validity for the ID may vary between situations.
     *
     * Note: The value of zosaId should be treated as an opaque string. Do not make any assumptions of the format of this string.
     *
     * • Potentially only valid for a session and should not be stored.
     *
     */
    type ZosaId = string;

    /**
     * @ngdoc type
     * @name ZosaImageType
     *
     * @description
     * Possible values of a {@link ZosaImage}'s imageType.
     *
     */
    type ZosaImageType = number;

    /**
     * @ngdoc type
     * @name ZosaParentRecordingType
     *
     * @description
     * Possible values of a parent recording's type.
     *
     */
    type ZosaParentRecordingType = number;

    /**
     * @ngdoc type
     * @name ZosaParticipantType
     *
     * @description
     * Possible values of a {@link ZosaMediaPersonItem}'s participantType.
     *
     */
    type ZosaParticipantType = number;

    /**
     * @ngdoc type
     * @name ZosaRecordingConflictReason
     *
     * @description
     * Possible values of a recording's conflictReason.
     *
     */
    type ZosaRecordingConflictReason = number;

    /**
     * @ngdoc type
     * @name ZosaRecordingDeleteMode
     *
     * @description
     * Possible values for a recordings delete mode.
     *
     */
    type ZosaRecordingDeleteMode = number;

    /**
     * @ngdoc type
     * @name ZosaRecordingFailReason
     *
     * @description
     * Possible values of a {@link ZosaRecordingItem}'s fail reason.
     *
     */
    type ZosaRecordingFailReason = number;

    /**
     * @ngdoc type
     * @name ZosaRecordingSpaceType
     *
     * @description
     * Possible values for a recordings space type.
     *
     */
    type ZosaRecordingSpaceType = number;

    /**
     * @ngdoc type
     * @name ZosaRecordingState
     *
     * @description
     * Possible values of a {@link ZosaProgramItem}'s recordingState or a {@link ZosaRecordingItem}'s state.
     * The values may be used as masks to combine the different states when being used in, e.g. {@link Zosa.removeRecordings}.
     *
     */
    type ZosaRecordingState = number;

    /**
     * @ngdoc type
     * @name ZosaRecordingType
     *
     * @description
     * Possible values of a recording's type.
     *
     */
    type ZosaRecordingType = number;

    /**
     * @ngdoc type
     * @name ZosaRecurrenceEndStyle
     *
     * @description
     * Possible values of recurrence ending configuration. Used with {@link Zosa#PARENT_RECORDING_TYPE_PERIODIC}.
     *
     */
    type ZosaRecurrenceEndStyle = number;

    /**
     * @ngdoc type
     * @name ZosaRecurrenceType
     *
     * @description
     * Possible values of recurrence type. Used with {@link Zosa#PARENT_RECORDING_TYPE_PERIODIC}.
     *
     */
    type ZosaRecurrenceType = number;

    /**
     * @ngdoc type
     * @name ZosaSelectedStreamReason
     *
     * @description
     * Possible values of a ZosaPlaybackSession's selectedStreamReason.
     *
     */
    type ZosaSelectedStreamReason = number;

    /**
   * @ngdoc type
   * @name ZosaSource
   *
   * @description
   * Possible sources (e.g. for recordings).
   *
   */
    type ZosaSource = number;

    /**
     * @ngdoc type
     * @name ZosaTransmissionType
     *
     * @description
     * Transmission type of stream.
     *
     */
    type ZosaTransmissionType = number;

    /**
     * @ngdoc type
     * @name ZosaType
     *
     * @description
     * Error codes. Used for e.g. code in {@link ZosaError}.
     *
     */
    type ZosaType = string;

    /**
     * @ngdoc type
     * @name ZosaVideoDefinition
     *
     * @description
     * Possible values of a {@link ZosaStreamItem}'s videoDefinition.
     *
     */
    type ZosaVideoDefinition = number;

    /**
     * @ngdoc type
     * @name ZosaVodType
     *
     * @description
     * Possible values of a {@link ZosaVodItem}'s vodType.
     *
     */
    type ZosaVodType = number;


    /**
     * @ngdoc type
     * @name ZosaRemoteRecordingSchedulingStatus
     *
     * @description
     * Possible values for supplementary information about remote recording scheduling. Remote recording is when a device (which is not the current device) is specified in the parameters for {@link Zosa.scheduleIntervalRecording} or {@link Zosa.scheduleProgramRecording}.
     *
     */
    type ZosaRemoteRecordingSchedulingStatus = number;


    /**
     * @ngdoc interface
     * @name Zosa
     *
     * @description
     * This interface provides access to service layer functionality of Zenterio OS.
     * It provides unified access to metadata and related functionality, possibly aggregated, from multiple sources.
     *
     */
    interface Zosa extends IZosaConstant {

        /**
         * @ngdoc property
         * @name Zosa#API_VERSION_MAJOR
         * @propertyOf Zosa
         *
         * @description
         * Zosa API version major number.
         *
         * @returns {number}
         *
         */
        API_VERSION_MAJOR: number;

        /**
         * @ngdoc property
         * @name Zosa#API_VERSION_MINOR
         * @propertyOf Zosa
         *
         * @description
         * Zosa API version minor number.
         *
         * @returns {number}
         *
         */
        API_VERSION_MINOR: number;

        /**
         * @ngdoc property
         * @name Zosa#API_VERSION_NAME
         * @propertyOf Zosa
         *
         * @description
         * Zosa API version name.
         * 
         * • The version name should not be parsed but may be used to identify a particular API version.
         *
         * @returns {string}
         *
         */
        API_VERSION_NAME: string;

        /**
         * @ngdoc method
         * @name addFavorites
         *
         * @description
         * Add items to favorite list.
         *
         * @param {ZosaAddFavoritesParams} params
         *
         * @returns {ZosaRequest<void>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is undefined. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        addFavorites(params: ZosaAddFavoritesParams): ZosaRequest<void>;

        /**
         * @ngdoc method
         * @name clearCustomChannelNumbering
         *
         * @description
         * Clear the custom channel numbering. This will clear the current custom channel numbering and reset all channels numbering to default values. Previously hidden channels will reset back to visible.
         *
         * @param {ZosaClearCustomChannelNumberingParams} params
         *
         * @returns {ZosaRequest<void>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is undefined. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        clearCustomChannelNumbering(params: ZosaClearCustomChannelNumberingParams): ZosaRequest<void>;

        /**
         * @ngdoc method
         * @name createCustomApi
         *
         * @description
         * Create a custom API.
         *
         * @param {ZosaCreateCustomApiParams} params
         *
         * @returns {ZosaRequest<ZosaCustomApi>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is the created {@link ZosaCustomApi}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        createCustomApi(params: ZosaCreateCustomApiParams): ZosaRequest<ZosaCustomApi>;

        /**
         * @ngdoc method
         * @name createPlaybackSession
         *
         * @description
         * Create playback session given a playable {@link ZosaItem} or media url.
         *
         * Note: When playback is done, the session's {@link ZosaPlaybackSession.destroy} function must be called, to release potential resources and terminate certain server communication.
         *
         * @param {ZosaCreatePlaybackSessionParams} params
         *
         * @returns {ZosaRequest<ZosaPlaybackSession>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is the created {@link ZosaPlaybackSession}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent} or of type:
         * <ul>
         *   <li>{@link ZosaErrorCode.CONTENT_RESTRICTION} - Media is not possible to play due to content restrictions.</li>
         *   <li>{@link ZosaErrorCode.INSUFFICIENT_RESOURCES} - System resources required for playback is not available.</li>
         *   <li>{@link ZosaErrorCode.INSUFFICIENT_BANDWIDTH} - Sufficient bandwidth for playback is not available.</li>
         *   <li>{@link ZosaErrorCode.RESTRICTED_ACCESS} - User is not allowed to perform operation.</li>
         *   <li>{@link ZosaErrorCode.NOT_SUBSCRIBED} - Content is not subscribed.</li>
         *   <li>{@link ZosaErrorCode.NOT_FOUND} - Content not found.</li>
         * </ul>
         *
         */
        createPlaybackSession(params: ZosaCreatePlaybackSessionParams): ZosaRequest<ZosaPlaybackSession>;

        /**
         * @ngdoc method
         * @name createProgramsUpdatedObserver
         *
         * @description
         * Create a programs updated observer.
         *
         * Note: When observer is done, its {@link ZosaProgramsUpdatedObserver.destroy()} function must be called, to release potential resources and terminate certain server communication.
         *
         * @param {ZosaCreateProgramsUpdatedObserverParams} params
         *
         * @returns {ZosaRequest<ZosaProgramsUpdatedObserver>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is the created {@link ZosaProgramsUpdatedObserver}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        createProgramsUpdatedObserver(params: ZosaCreateProgramsUpdatedObserverParams): ZosaRequest<ZosaProgramsUpdatedObserver>;

        /**
         * @ngdoc method
         * @name deleteMarkedRecordingConflicts
         *
         * @description
         * Will remove the marked recordings associated with the conflict situation.
         * Will return error if the conflict situation is not yet resolved by sufficent calls to {@link Zosa.updateRecordingConflict}.
         * In case of success the provided conflictId is invalidated and can no longer be used in any API calls.
         * 
         * Part of the Advanced conflict handling (ACH) API.
         *
         * @param {ZosaRecordingConflictParams} params
         *
         * @returns {ZosaRequest<void>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is undefined. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent} or of type:
         * <ul>
         *   <li>{@link ZosaErrorCode.INVALID_OPERATION}</li>
         *   <li>{@link ZosaErrorCode.INSUFFICIENT_RESOURCES}</li>
         * </ul>
         *
         */
        deleteMarkedRecordingConflicts(oarams: ZosaRecordingConflictParams): ZosaRequest<void>;

        /**
         * @ngdoc method
         * @name getBandwidthInfo
         *
         * @description
         * Get information about bandwidth allocated by a user.
         *
         * @param {ZosaGetBandwidthInfoParams} params
         *
         * @returns {ZosaRequest<ZosaBandwidthInfo>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is {@link ZosaBandwidthInfo}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        getBandwidthInfo(params: ZosaGetBandwidthInfoParams): ZosaRequest<ZosaBandwidthInfo>;

        /**
         * @ngdoc method
         * @name getCategories
         *
         * @description
         * Get Categories.
         *
         * @param {ZosaGetCategoriesParams} params
         *
         * @returns {ZosaRequest<ZosaList<ZosaCategoryItem>>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaList} of {@link ZosaCategoryItem}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         * @example
            <example>
                <file name="script.js">
                    zosa.getCategories({ serviceProvider : sp, parentCategory : dramaCategoryItem });
                </file>
            </example>
         *
         */
        getCategories(params: ZosaGetCategoriesParams): ZosaRequest<ZosaList<ZosaCategoryItem>>;

        /**
         * @ngdoc method
         * @name getChannels
         *
         * @description
         * Get channels.
         *
         * @param {ZosaGetChannelsParams} params
         *
         * @returns {ZosaRequest<ZosaList<ZosaChannelItem>>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaList} of {@link ZosaChannelItem}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         * @example
            <example>
                <file name="script.js">
                    // Get all channels.
                    zosa.getChannels()
                        .success(function (event) {
                            var channels = event.response.elements;
                        })
                        .failure(function (event) {
                            var errorcode = event.error.code;
                        })
                </file>
                <file name="script.js">
                    // Get maximum ten channels starting from the 21th channel in the total list of channels.
                    // If less than 21 channels exist the response will contain zero channels.
                    var params = { offset   : 20, // note! zero based index
                                   limit    : 10 };
                    zosa.getChannels(params)
                        .success(function (event) {
                            var channelsPage = event.response.elements;
                        })
                        .failure(function (event) {
                            var errorcode = event.error.code;
                        })
                </file>
            </example>
         *
         */
        getChannels(params: ZosaGetChannelsParams): ZosaRequest<ZosaList<ZosaChannelItem>>;

        /**
         * @ngdoc method
         * @name getCustomChannelNumbering
         *
         * @description
         * Get custom channel numbering. The response will contain the custom numbering of all visible channels. Hidden channels are not included in the response. A {@link ZosaErrorEvent} with error code NOT_FOUND will be returned if no custom channel numbering has been set.
         *
         * @param {ZosaGetCustomChannelNumberingParams} params
         *
         * @returns {ZosaRequest<ZosaCustomChannelNumber[]>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is array of {@link ZosaCustomChannelNumber}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent} or of type:
         * <ul>
         *   <li>{@link ZosaErrorCode.NOT_FOUND}</li>
         * </ul>
         *
         */
        getCustomChannelNumbering(params: ZosaGetCustomChannelNumberingParams): ZosaRequest<ZosaCustomChannelNumber[]>;

        /**
         * @ngdoc method
         * @name getDevices
         *
         * @description
         * Get a list of devices bound to the subscribers account.
         *
         * @param {ZosaGetDevicesParams} params
         *
         * @returns {ZosaRequest<ZosaList<ZosaDeviceItem>>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaList} of {@link ZosaDeviceItem}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        getDevices(params: ZosaGetDevicesParams): ZosaRequest<ZosaList<ZosaDeviceItem>>;

        /**
         * @ngdoc method
         * @name getFavoriteLists
         *
         * @description
         * Get favorite lists for the current profile.
         *
         * @param {ZosaGetFavoriteListsParams} params Some parameters are mutually exclusive, thus you may get no devices in response if you combined the parameters incorrectly.
         *
         * @returns {ZosaRequest<ZosaList<ZosaFavoriteListItem>>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaList} of {@link ZosaFavoriteListItem}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        getFavoriteLists(params: ZosaGetFavoriteListsParams): ZosaRequest<ZosaList<ZosaFavoriteListItem>>;

        /**
         * @ngdoc method
         * @name getItems
         *
         * @description
         * Get media persons (e.g. actors, directors, etc).
         *
         * @param {ZosaGetItemsParams} params
         *
         * @returns {ZosaRequest<ZosaList<ZosaItem>>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaList} of {@link ZosaItem}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent} or of type:
         * <ul>
         *   <li>{@link ZosaErrorCode.INVALID_OPERATION}</li>
         *   <li>{@link ZosaErrorCode.NOT_FOUND}</li>
         * </ul>
         *
         */
        getItems(params: ZosaGetItemsParams): ZosaRequest<ZosaList<ZosaItem>>;

        /**
         * @ngdoc method
         * @name getMediaPersons
         *
         * @description
         * Get media persons (e.g. actors, directors, etc).
         *
         * @param {ZosaGetMediaPersonsParams} params
         *
         * @returns {ZosaRequest<ZosaList<ZosaMediaPersonItem>>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaList} of {@link ZosaMediaPersonItem}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        getMediaPersons(params: ZosaGetMediaPersonsParams): ZosaRequest<ZosaList<ZosaMediaPersonItem>>;

        /**
         * @ngdoc method
         * @name getNextRecordingConflict
         *
         * @description
         * Get the next conflict resolution option for a conflict.
         * 
         * Part of the Advanced conflict handling (ACH) API.
         *
         * @param {ZosaRecordingConflictParams} params
         *
         * @returns {ZosaRequest<ZosaGetRecordingConflictResponse>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaGetRecordingConflictResponse}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent} or of type:
         * <ul>
         *   <li>{@link ZosaErrorCode.INVALID_OPERATION}</li>
         *   <li>{@link ZosaErrorCode.INSUFFICIENT_RESOURCES}</li>
         * </ul>
         *
         */
        getNextRecordingConflict(params: ZosaRecordingConflictParams): ZosaRequest<ZosaGetRecordingConflictResponse>;

        /**
         * @ngdoc method
         * @name getOtherInstances
         *
         * @description
         * Get a list of items that are other instances of the one specified in the parameters. It could for example be a re run of a program.
         *
         * @param {ZosaGetOtherInstancesParams} params
         *
         * @returns {ZosaRequest<ZosaList<ZosaItem>>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaList} of {@link ZosaItem}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        getOtherInstances(params: ZosaGetOtherInstancesParams): ZosaRequest<ZosaList<ZosaItem>>;

        /**
         * @ngdoc method
         * @name getParentalBlockingStatus
         *
         * @description
         * Get parental control blocking status of a GUI scenario.
         *
         * @param {ZosaGetParentalBlockingStatusParams} params
         *
         * @returns {ZosaRequest<ZosaGetParentalBlockingStatusResponse>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaGetParentalBlockingStatusResponse}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        getParentalBlockingStatus(params: ZosaGetParentalBlockingStatusParams): ZosaRequest<ZosaGetParentalBlockingStatusResponse>;

        /**
         * @ngdoc method
         * @name getParentRecordings
         *
         * @description
         * Get all parent recordings (including future scheduled recordings).
         *
         * @param {ZosaGetParentRecordingsParams} params
         *
         * @returns {ZosaRequest<ZosaList<ZosaParentRecordingItem>>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaList} of {@link ZosaParentRecordingItem}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        getParentRecordings(params: ZosaGetParentRecordingsParams): ZosaRequest<ZosaList<ZosaParentRecordingItem>>;

        /**
         * @ngdoc method
         * @name getPrograms
         *
         * @description
         * Get Programs.
         *
         * @param {ZosaGetProgramsParams} params
         *
         * @returns {ZosaRequest<ZosaList<ZosaProgramItem>>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaList} of {@link ZosaProgramItem}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        getPrograms(params: ZosaGetProgramsParams): ZosaRequest<ZosaList<ZosaProgramItem | null>>;

        /**
         * @ngdoc method
         * @name getRecordings
         *
         * @description
         * Get Programs.
         *
         * @param {ZosaGetRecordingsParams} params Some parameters are mutually exclusive, thus you may get no devices in response if you combined the parameters incorrectly.
         *
         * @returns {ZosaRequest<ZosaList<ZosaRecordingItem>>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaList} of {@link ZosaRecordingItem}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        getRecordings(params: ZosaGetRecordingsParams): ZosaRequest<ZosaList<ZosaRecordingItem>>;

        /**
         * @ngdoc method
         * @name getRecordingSpaceInfo
         *
         * @description
         * Get a list of recording space information bound to the subscribers account.
         *
         * @param {ZosaGetRecordingSpaceInfoParams} params
         *
         * @returns {ZosaRequest<ZosaList<ZosaRecordingSpaceInfo>>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaList} of {@link ZosaRecordingSpaceInfo}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        getRecordingSpaceInfo(params: ZosaGetRecordingSpaceInfoParams): ZosaRequest<ZosaList<ZosaRecordingSpaceInfo>>;

        /**
         * @ngdoc method
         * @name getServiceProviders
         *
         * @description
         * Get all service providers. See service-providers tutorial.
         *
         * See: • {@link Zosa#serviceProviderLogin}
         *      • {@link Zosa#serviceProviderLogout}
         *
         * @param {ZosaGetServiceProvidersParams} params
         *
         * @returns {ZosaRequest<ZosaList<ZosaServiceProviderItem>>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaList} of {@link ZosaServiceProviderItem}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        getServiceProviders(params: ZosaGetServiceProvidersParams): ZosaRequest<ZosaList<ZosaServiceProviderItem>>;

        /**
         * @ngdoc method
         * @name getSubscriberInfo
         *
         * @description
         * Get SubscriberInfo.
         *
         * @param {ZosaGetSubscriberInfoParams} params
         *
         * @returns {ZosaRequest<ZosaSubscriberInfo>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaSubscriberInfo}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent} or of type:
         * <ul>
         *   <li>{@link ZosaErrorCode.INVALID_OPERATION}</li>
         *   <li>{@link ZosaErrorCode.NOT_FOUND}</li>
         * </ul>
         *
         */
        getSubscriberInfo(params: ZosaGetSubscriberInfoParams): ZosaRequest<ZosaSubscriberInfo>;

        /**
         * @ngdoc method
         * @name getVasItems
         *
         * @description
         * Get Value-Added Services.
         *
         * Note: Preview API with dummy implementation
         *
         * @param {ZosaGetVasItemsParams} params
         *
         * @returns {ZosaRequest<ZosaList<ZosaVasItem>>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaList} of {@link ZosaVasItem}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent} or of type:
         * <ul>
         *   <li>{@link ZosaErrorCode.INVALID_OPERATION}</li>
         *   <li>{@link ZosaErrorCode.NOT_FOUND}</li>
         * </ul>
         *
         */
        getVasItems(params: ZosaGetVasItemsParams): ZosaRequest<ZosaList<ZosaVasItem>>;

        /**
         * @ngdoc method
         * @name getVods
         *
         * @description
         * Get VODs.
         *
         * @param {ZosaGetVodsParams} params
         *
         * @returns {ZosaRequest<ZosaList<ZosaVodItem>>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaList} of {@link ZosaVodItem}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        getVods(params: ZosaGetVodsParams): ZosaRequest<ZosaList<ZosaVodItem>>;

        /**
         * @ngdoc method
         * @name login
         *
         * @description
         * Login (and connect) to Zosa.
         *
         * @param {ZosaLoginParams} params
         *
         * @returns {ZosaRequest<void>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is undefined.  For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent} or of type:
         * <ul>
         *   <li>{@link ZosaErrorCode.INVALID_OPERATION}</li>
         * </ul>
         *
         */
        login(params: ZosaLoginParams): ZosaRequest<void>;

        /**
         * @ngdoc method
         * @name parentalUnblock
         *
         * @description
         * Unblock some content or a GUI scenario that is blocked by parental control blocking.
         * 
         * Note: Live broadcast content shall not be unblocked using this function. Live broadcast content may get parental rating information from multiple sources and information may be missing or changed dynamically.
         *       Unblocking of live broadcast content is best handled by the STB parental control management module, which during playback, automatically will trigger unblocking UI dialog requests when needed.
         *
         * See: • {@link Zosa#resetParentalUnblocking}
         *
         * @param {ZosaParentalUnblockParams} params
         *
         * @returns {ZosaRequest<ZosaParentalUnblockResponse>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is {@link ZosaParentalUnblockResponse}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent} or of type:
         * <ul>
         *   <li>{@link ZosaErrorCode.INVALID_CREDENTIALS} - Incorrect password provided.</li>
         * </ul>
         *
         */
        parentalUnblock(params: ZosaParentalUnblockParams): ZosaRequest<ZosaParentalUnblockResponse>;

        /**
         * @ngdoc method
         * @name releaseBandwidthBookings
         *
         * @description
         * Release resources associated with allocated bandwidth.
         *
         * @param {ZosaReleaseBandwidthBookingsParams} params
         *
         * @returns {ZosaRequest<void>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is undefined. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        releaseBandwidthBookings(params: ZosaReleaseBandwidthBookingsParams): ZosaRequest<void>;

        /**
         * @ngdoc method
         * @name removeFavorites
         *
         * @description
         * Remove items from favorite list.
         *
         * @param {ZosaRemoveFavoritesParams} params
         *
         * @returns {ZosaRequest<void>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is undefined. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        removeFavorites(params: ZosaRemoveFavoritesParams): ZosaRequest<void>;

        /**
         * @ngdoc method
         * @name removeRecordings
         *
         * @description
         * Remove recordings.
         *
         * @param {ZosaRemoveRecordingsParamsByIds | ZosaRemoveRecordingsParamsByCriteria} params Supports either removing by recording identifiers or by certain criteria, such as recording's type or state.
         *
         * @returns {ZosaRequest<void>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is undefined. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        removeRecordings(params: ZosaRemoveRecordingsParamsByIds | ZosaRemoveRecordingsParamsByCriteria): ZosaRequest<void>;

        /**
         * @ngdoc method
         * @name resetAllParentalUnblockings
         *
         * @description
         * Reset all parental control unblockings. All previously unblocked content and scenarios will be blocked again.
         *
         * See: • {@link Zosa#parentalUnblock}
         *
         * @param {ZosaResetAllParentalUnblockingsParams} params
         *
         * @returns {ZosaRequest<ZosaResetAllParentalUnblockingsResponse>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is {@link ZosaResetAllParentalUnblockingsResponse}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        resetAllParentalUnblockings(params: ZosaResetAllParentalUnblockingsParams): ZosaRequest<ZosaResetAllParentalUnblockingsResponse>;

        /**
         * @ngdoc method
         * @name resetParentalUnblocking
         *
         * @description
         * Reset a previous parental control unblocking.
         *
         * See: • {@link Zosa#parentalUnblock}
         *
         * @param {ZosaResetParentalUnblockingParams} params
         *
         * @returns {ZosaRequest<ZosaResetParentalUnblockingResponse>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is {@link ZosaResetParentalUnblockingResponse}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        resetParentalUnblocking(params: ZosaResetParentalUnblockingParams): ZosaRequest<ZosaResetParentalUnblockingResponse>;

        /**
         * @ngdoc method
         * @name scheduleIntervalRecording
         *
         * @description
         * Schedule a time-based recording.
         * It may create a normal recording ({@link RecordingItem}) or a parent recording ({@link ZosaParentRecordingItem}) depending on the given parameter.
         *
         * @param {ZosaScheduleIntervalRecordingParams} params
         *
         * @returns {ZosaRequest<ZosaScheduleRecordingResponse>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaScheduleRecordingResponse}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent} or of type:
         * <ul>
         *   <li>{@link ZosaErrorCode.INSUFFICIENT_RESOURCES} or {@link ZosaErrorCode.INSUFFICIENT_BANDWIDTH} - For recording conflicts where the error in {@link ZosaErrorEvent} is a {@link ZosaRecordingConflictError}.</li>
         *   <li>{@link ZosaErrorCode.INSUFFICIENT_STORAGE}</li>
         * </ul>
         *
         */
        scheduleIntervalRecording(params: ZosaScheduleIntervalRecordingParams): ZosaRequest<ZosaScheduleRecordingResponse>;

        /**
         * @ngdoc method
         * @name scheduleProgramRecording
         *
         * @description
         * Schedule a recording for a specific program.
         * It may create a normal recording ({@link RecordingItem}) or a parent recording ({@link ZosaParentRecordingItem}) depending on the given parameter.
         *
         * @param {ZosaScheduleProgramRecordingParams} params
         *
         * @returns {ZosaRequest<ZosaScheduleRecordingResponse>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaScheduleRecordingResponse}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent} or of type:
         * <ul>
         *   <li>{@link ZosaErrorCode.INSUFFICIENT_RESOURCES} or {@link ZosaErrorCode.INSUFFICIENT_BANDWIDTH} - For recording conflicts where the error in {@link ZosaErrorEvent} is a {@link ZosaRecordingConflictError}.</li>
         *   <li>{@link ZosaErrorCode.INSUFFICIENT_STORAGE}</li>
         * </ul>
         *
         */
        scheduleProgramRecording(params: ZosaScheduleProgramRecordingParams): ZosaRequest<ZosaScheduleRecordingResponse>;

        /**
         * @ngdoc method
         * @name serviceProviderLogin
         *
         * @description
         * Login to a service provider. See service-providers tutorial.
         *
         * See: • {@link Zosa#getServiceProviders}
         *
         * @param {ZosaServiceProviderLoginParams} params
         *
         * @returns {ZosaRequest<ZosaServiceProviderLoginResponse>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaServiceProviderLoginResponse}. For failure, error in {@link ZosaErrorEvent} is a {@link ZosaServiceProviderLoginError} and error code will be either of the common error codes specified in {@link ZosaErrorEvent} or of type:
         * <ul>
         *   <li>{@link ZosaErrorCode.INVALID_CREDENTIALS} - Provided credentials are invalid.</li>
         *   <li>{@link ZosaErrorCode.NOT_PROVISIONED} - System has not yet been provisioned to perform login.</li>
         *   <li>{@link ZosaErrorCode.RESTRICTED_ACCESS} - User is currently not allowed to login.</li>
         * </ul>
         *
         */
        serviceProviderLogin(params: ZosaServiceProviderLoginParams): ZosaRequest<ZosaServiceProviderLoginResponse>;

        /**
         * @ngdoc method
         * @name setCustomChannelNumbering
         *
         * @description
         * Set custom channel numbering for all channels. If a channel is not included in the numbering list, it will be set to hidden.
         *
         * @param {ZosaSetCustomChannelNumberingParams} params
         *
         * @returns {ZosaRequest<void>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is undefined. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        setCustomChannelNumbering(params: ZosaSetCustomChannelNumberingParams): ZosaRequest<void>;

        /**
         * @ngdoc method
         * @name setOnDataUpdated
         *
         * @description
         * Register a callback function that will be called whenever data has been updated. It is the responsibility of the client to ensure that the channel list, program data, etc, is updated accordingly.
         *
         * @param {dataUpdatedEventFunction} func Function called on data updated.
         *
         */
        setOnDataUpdated(func: dataUpdatedEventFunction): void;

        /**
         * @ngdoc method
         * @name setOnMessage
         *
         * @description
         * Register a function to receive Message events.
         *
         * @param {messageEventFunction} func Function called on Message message.
         *
         */
        setOnMessage(func: messageEventFunction): void;

        /**
         * @ngdoc method
         * @name setOnParentalBlockingChanged
         *
         * @description
         * Register a callback function that will be called whenever parental control blocking status has changed. When received, client must reload parental blocking status for all items and GUI contexts where up-to-date parental control blocking status is needed.
         *
         * @param {parentalBlockingChangedEventFunction} func Function called on data updated.
         *
         */
        setOnParentalBlockingChanged(func: parentalBlockingChangedEventFunction): void;

        /**
         * @ngdoc method
         * @name setOnRecordingBandwidthConflict
         *
         * @description
         * Register a function to receive recordingChanged events.
         *
         * @param {recordingBandwidthConflictEventFunction} func Function called on recording bandwidth conflict.
         *
         */
        setOnRecordingBandwidthConflict(func: recordingBandwidthConflictEventFunction): void;

        /**
         * @ngdoc method
         * @name setOnRecordingChanged
         *
         * @description
         * Register a function to receive recordingChanged events.
         *
         * @param {recordingChangeEventFunction} func Function called on recordings.
         *
         */
        setOnRecordingChanged(func: recordingChangeEventFunction): void;

        /**
         * @ngdoc method
         * @name setOnServiceProviderSessionError
         *
         * @description
         * Register a function to receive service provider session error events.
         * If code in ZosaServiceProviderSessionError passed to callback function is NOT_LOGGED_IN you may try to login to the service provider again.
         *
         * @param {onServiceProviderSessionErrorCallbackFunc} func Function called on service provider session errors.
         *
         */
        setOnServiceProviderSessionError(func: onServiceProviderSessionErrorCallbackFunc): void;

        /**
         * @ngdoc method
         * @name setOnSessionError
         *
         * @description
         * Register a function to receive session error events.
         *
         * @param {failureFunction} func Function called on session errors.
         *
         */
        setOnSessionError(func: failureFunction): void;

        /**
         * @ngdoc method
         * @name updateDevice
         *
         * @description
         * Update information for a specific device to new values.
         * This function will set the values provided in ZosaUpdateDeviceParams to specified device.
         *
         * @param {ZosaUpdateDeviceParams} params
         *
         * @returns {ZosaRequest<void>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is undefined. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent} or of type:
         * <ul>
         *   <li>{@link ZosaErrorCode.INSUFFICIENT_RESOURCES}</li>
         * </ul>
         *
         */
        updateDevice(params: ZosaUpdateDeviceParams): ZosaRequest<void>;

        /**
         * @ngdoc method
         * @name updateParentRecording
         *
         * @description
         * Update a parent recording to update any other parameter than those provided by {@link ZosaUpdateParentRecordingParams} of the parent recording
         * you need to recreate it (delete old parent and create a new one with the updated).
         *
         * @param {ZosaUpdateParentRecordingParams} params
         *
         * @returns {ZosaRequest<void>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is undefined. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent}.
         *
         */
        updateParentRecording(params: ZosaUpdateParentRecordingParams): ZosaRequest<void>;

        /**
         * @ngdoc method
         * @name updateRecording
         *
         * @description
         * Update a specific recording.
         * This method is only for a normal recording not a parent recording.
         *
         * @param {ZosaUpdateRecordingParams} params
         *
         * @returns {ZosaRequest<void>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is undefined. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent} or of type:
         * <ul>
         *   <li>{@link ZosaErrorCode.INSUFFICIENT_RESOURCES} - For recording conflicts (when startTime and/or endTime is updated) where the error in {@link ZosaErrorEvent} is a {@link ZosaRecordingConflictError}.</li>
         * </ul>
         *
         */
        updateRecording(params: ZosaUpdateRecordingParams): ZosaRequest<void>;

        /**
         * @ngdoc method
         * @name updateRecordingConflict
         *
         * @description
         * Update a conflict situation with a conflict group.
         * 
         * Part of the Advanced conflict handling (ACH) API.
         *
         * @param {ZosaUpdateRecordingConflictParams} params
         *
         * @returns {ZosaRequest<void>} {@link ZosaRequest} where response in {@link ZosaRequestResponseEvent} for success event is a {@link ZosaUpdateRecordingConflictResponse}. For failure, error code in {@link ZosaErrorEvent} will be of the common error codes specified in {@link ZosaErrorEvent} or of type:
         * <ul>
         *   <li>{@link ZosaErrorCode.INVALID_OPERATION}</li>
         *   <li>{@link ZosaErrorCode.INSUFFICIENT_RESOURCES}</li>
         * </ul>
         *
         */
        updateRecordingConflict(params: ZosaUpdateRecordingConflictParams): ZosaRequest<ZosaUpdateRecordingConflictResponse>;

    }

    /**
     * @ngdoc interface
     * @name ZosaAbstractGetItemParams
     *
     * @description
     * Parameters used by some methods that request items.
     *
     */
    interface ZosaAbstractGetItemParams<T = string> {

        /**
         * @ngdoc property
         * @name ZosaAbstractGetItemParams#itemFields
         * @propertyOf ZosaAbstractGetItemParams
         *
         * @description
         * The itemFields parameter gives the developer the ability to choose what fields to be included in requested items in the response.
         * The value of this parameter should be an array of strings, where each string is the name of a requested item field.
         * For valid field names, see each item type {@link ZosaProgramItem}, {@link ZosaChannelItem}, {@link ZosaVodItem}, ... respectively. For all {@link ZosaItem} derived items, "title" and "icon"
         * are also valid field names. However, the fields zosaId and zosaType are always sent in the response and should not be listed here.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         * @example
            <example>
                <file name="script.js">
                    // request some items but each returned item shall only contain the title and description fields
                    var inputParams = { itemFields : ["title", "description"] };
                    var request = zosa.getSomeItemsRequest(inputParams);
                </file>
            </example>
         *
         */
        itemFields?: ZosaItemFieldsType<T> | null;

    }

    /**
     * @ngdoc interface
     * @name ZosaAbstractGetListParams
     *
     * @description
     * Parameters used to get a subset (page) as a {@link ZosaList} of a sequence of items.
     *
     * @example
        <example>
            <file name="script.js">
                // request first page of 15 items
                zosa.getSomeItemsRequest({ offset : 0, limit : 15 })
                    .success(function (event) { log.trace("got item 0 to 14"); });

                // request second page of 15 items
                zosa.getSomeItemsRequest({ offset : 15, limit : 15 })
                    .success(function (event) { log.trace("got item 15 to 29"); });
            </file>
        </example>
     *
     */
    interface ZosaAbstractGetListParams {

        /**
         * @ngdoc property
         * @name ZosaAbstractGetListParams#limit
         * @propertyOf ZosaAbstractGetListParams
         *
         * @description
         * Limit for the number of elements of the page.
         *
         * • Optional (considered as arbitrary if undefined).
         *
         * @returns {number}
         *
         */
        limit?: number;

        /**
         * @ngdoc property
         * @name ZosaAbstractGetListParams#offset
         * @propertyOf ZosaAbstractGetListParams
         *
         * @description
         * Offset in the sequence for the start element of the page.
         *
         * • Optional (considered as 0 if undefined).
         *
         * @returns {number}
         *
         */
        offset?: number;

    }

    /**
     * @ngdoc interface
     * @name ZosaAddFavoritesParams
     *
     * @description
     * Input parameters for {@link Zosa.addFavorites}.
     *
     */
    interface ZosaAddFavoritesParams {

        /**
         * @ngdoc property
         * @name ZosaAddFavoritesParams#contents
         * @propertyOf ZosaAddFavoritesParams
         *
         * @description
         * List of content to be added to favorite list. Type of content must match the contentType of the favorite list.
         *
         * @returns {ZosaId[]}
         *
         */
        contents: ZosaId[];

        /**
         * @ngdoc property
         * @name ZosaAddFavoritesParams#favoriteList
         * @propertyOf ZosaAddFavoritesParams
         *
         * @description
         * Favorite list to operate on.
         *
         * @returns {ZosaId}
         *
         */
        favoriteList: ZosaId;

    }

    /**
     * @ngdoc object
     * @name ZosaAudioChannelType
     *
     * @description
     * Possible values of a {@link ZosaAudioTrackInfo} audio channel.
     * 
     */
    interface IZosaAudioChannelType {

        /**
         * @name ZosaAudioChannelType#AUDIO_CHANNEL_DUAL_MONO
         * @memberOf ZosaAudioChannelType
         *
         * @description
         * Dual mono channel.
         *
         */
        AUDIO_CHANNEL_DUAL_MONO: ZosaAudioChannel;

        /**
         * @name ZosaAudioChannelType#AUDIO_CHANNEL_JOINT_STEREO
         * @memberOf ZosaAudioChannelType
         *
         * @description
         * Joint Stereo channel.
         *
         */
        AUDIO_CHANNEL_JOINT_STEREO: ZosaAudioChannel;

        /**
         * @name ZosaAudioChannelType#AUDIO_CHANNEL_MONO
         * @memberOf ZosaAudioChannelType
         *
         * @description
         * Single mono channel type.
         *
         */
        AUDIO_CHANNEL_MONO: ZosaAudioChannel;

        /**
         * @name ZosaAudioChannelType#AUDIO_CHANNEL_MONO_LEFT
         * @memberOf ZosaAudioChannelType
         *
         * @description
         * Single mono left channel.
         *
         */
        AUDIO_CHANNEL_MONO_LEFT: ZosaAudioChannel;

        /**
         * @name ZosaAudioChannelType#AUDIO_CHANNEL_MONO_RIGHT
         * @memberOf ZosaAudioChannelType
         *
         * @description
         * Single mono right channel.
         *
         */
        AUDIO_CHANNEL_MONO_RIGHT: ZosaAudioChannel;

        /**
         * @name ZosaAudioChannelType#AUDIO_CHANNEL_MULTICHANNEL
         * @memberOf ZosaAudioChannelType
         *
         * @description
         * Multichannel audio (> 2 channels).
         *
         */
        AUDIO_CHANNEL_MULTICHANNEL: ZosaAudioChannel;

        /**
         * @name ZosaAudioChannelType#AUDIO_CHANNEL_STEREO
         * @memberOf ZosaAudioChannelType
         *
         * @description
         * Stereo channel.
         *
         */
        AUDIO_CHANNEL_STEREO: ZosaAudioChannel;

    }

    /**
     * @ngdoc object
     * @name ZosaAudioSupplementary
     *
     * @description
     * Possible values of a {@link ZosaAudioTrackInfo} audio supplementary type An audio track may contain one or more supplementaries.
     *
     */
    interface IZosaAudioSupplementary {

        /**
         * @name ZosaAudioSupplementary#SUPPLEMENTARY_AUDIO_DESCRIPTION
         * @memberOf ZosaAudioSupplementary
         *
         * @description
         * Visual impaired commentary Audio description for the visually impaired (contains a spoken description of the visual content of the service).
         *
         */
        SUPPLEMENTARY_AUDIO_DESCRIPTION: ZosaAudioSupplementary;

        /**
         * @name ZosaAudioSupplementary#SUPPLEMENTARY_AUDIO_OTHER
         * @memberOf ZosaAudioSupplementary
         *
         * @description
         * Supplementary user defined.
         *
         */
        SUPPLEMENTARY_AUDIO_OTHER: ZosaAudioSupplementary;

        /**
         * @name ZosaAudioSupplementary#SUPPLEMENTARY_AUDIO_WITH_PARAMETRIC_DATA
         * @memberOf ZosaAudioSupplementary
         *
         * @description
         * Supplementary with parametric data.
         *
         */
        SUPPLEMENTARY_AUDIO_WITH_PARAMETRIC_DATA: ZosaAudioSupplementary;

        /**
         * @name ZosaAudioSupplementary#SUPPLEMENTARY_CLEAN_AUDIO
         * @memberOf ZosaAudioSupplementary
         *
         * @description
         * Clean audio for the hearing impaired.
         *
         */
        SUPPLEMENTARY_CLEAN_AUDIO: ZosaAudioSupplementary;

        /**
         * @name ZosaAudioSupplementary#SUPPLEMENTARY_NORMAL
         * @memberOf ZosaAudioSupplementary
         *
         * @description
         * Unspecific audio for the general audience.
         *
         */
        SUPPLEMENTARY_NORMAL: ZosaAudioSupplementary;

        /**
         * @name ZosaAudioSupplementary#SUPPLEMENTARY_SPOKEN_SUBTITLING
         * @memberOf ZosaAudioSupplementary
         *
         * @description
         * Spoken subtitles for the visually impaired.
         *
         */
        SUPPLEMENTARY_SPOKEN_SUBTITLING: ZosaAudioSupplementary;

    }

    /**
     * @ngdoc interface
     * @name ZosaAudioTrackInfo
     *
     * @description
     * AudioTrackInfo. Detailed information about audio track including codec, channel, language and supplementary.
     *
     */
    interface ZosaAudioTrackInfo {

        /**
         * @ngdoc property
         * @name ZosaAudioTrackInfo#audioChannel
         * @propertyOf ZosaAudioTrackInfo
         *
         * @description
         * Type of audio channel to show how audio signal is mixed.
         *
         * • Optional (default value is STEREO).
         *
         * @returns {ZosaAudioChannel}
         *
         */
        audioChannel?: ZosaAudioChannel;

        /**
         * @ngdoc property
         * @name ZosaAudioTrackInfo#audioSupplementary
         * @propertyOf ZosaAudioTrackInfo
         *
         * @description
         * Type of audio supplementary. it shows the audio track has visually impaired audio description or not.
         *
         * @returns {ZosaAudioSupplementary}
         *
         */
        audioSupplementary?: ZosaAudioSupplementary;

    }

    /**
     * @ngdoc interface
     * @name ZosaBandwidthBookingItem
     *
     * @description
     * Represents a bandwidth booking.
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_BANDWIDTH_BOOKING_ITEM}
     *
     */
    interface ZosaBandwidthBookingItem extends ZosaItem {

        /**
         * @ngdoc property
         * @name ZosaBandwidthBookingItem#bookingType
         * @propertyOf ZosaBandwidthBookingItem
         *
         * @description
         * Type of bandwidth booking.
         *
         * @returns {ZosaBandwidthBookingType}
         *
         */
        bookingType: ZosaBandwidthBookingType;

        /**
         * @ngdoc property
         * @name ZosaBandwidthBookingItem#content
         * @propertyOf ZosaBandwidthBookingItem
         *
         * @description
         * Content item associated with this bandwidth booking.
         * 
         * • Optional.
         *
         * @returns {ZosaItem}
         *
         */
        content?: ZosaItem;

        /**
         * @ngdoc property
         * @name ZosaBandwidthBookingItem#device
         * @propertyOf ZosaBandwidthBookingItem
         *
         * @description
         * The device of the bandwidth booking.
         * 
         * • Value may be null if unknown or not available.
         *
         * @returns {ZosaDeviceItem}
         *
         */
        device?: ZosaDeviceItem;

        /**
         * @ngdoc property
         * @name ZosaBandwidthBookingItem#isUnicast
         * @propertyOf ZosaBandwidthBookingItem
         *
         * @description
         * Designates if content is played as unicast or multicast.
         * 
         * • Optional.
         *
         * @returns {boolean}
         *
         */
        isUnicast?: boolean;

        /**
         * @ngdoc property
         * @name ZosaBandwidthBookingItem#lanBitrate
         * @propertyOf ZosaBandwidthBookingItem
         *
         * @description
         * Booked LAN (Local Area Network) bandwidth used by the device (kbit/s).
         * 
         * • Always provided.
         * • The wanBitrate and lanBitrate parameters are differentiated because for playing/recording of multicast channels, the WAN bandwidth can be shared between devices while the LAN bandwidth is exclusive per device.
         *
         * @returns {number}
         *
         */
        lanBitrate: number;

        taskId: string;

        /**
         * @ngdoc property
         * @name ZosaBandwidthBookingItem#videoDefinition
         * @propertyOf ZosaBandwidthBookingItem
         *
         * @description
         * Quality of the video stream.
         * 
         * • Optional.
         *
         * @returns {ZosaVideoDefinition}
         *
         */
        videoDefinition?: ZosaVideoDefinition;

        /**
         * @ngdoc property
         * @name ZosaBandwidthBookingItem#wanBitrate
         * @propertyOf ZosaBandwidthBookingItem
         *
         * @description
         * Booked WAN (Wide Area Network) bandwidth by the device (kbit/s).
         * 
         * • Always provided.
         *
         * @returns {number}
         *
         */
        wanBitrate: number;

    }

    /**
     * @ngdoc object
     * @name ZosaBandwidthBookingType
     *
     * @description
     * Possible values of a {@link ZosaBandwidthBookingItem}'s bookingType
     *
     */
    interface IZosaBandwidthBookingType {

        /**
         * @name ZosaBandwidthBookingType#BANDWIDTH_BOOKING_TYPE_CATCHUP_TV_IR
         * @memberOf ZosaBandwidthBookingType
         *
         * @description
         * Cathcup tv and instant restart booking type.
         *
         */
        BANDWIDTH_BOOKING_TYPE_CATCHUP_TV_IR: ZosaBandwidthBookingType;

        /**
         * @name ZosaBandwidthBookingType#BANDWIDTH_BOOKING_TYPE_DOWNLOAD
         * @memberOf ZosaBandwidthBookingType
         *
         * @description
         * Download booking type.
         *
         */
        BANDWIDTH_BOOKING_TYPE_DOWNLOAD: ZosaBandwidthBookingType;

        /**
         * @name ZosaBandwidthBookingType#BANDWIDTH_BOOKING_TYPE_LIVE_TV
         * @memberOf ZosaBandwidthBookingType
         *
         * @description
         * Live TV booking type.
         *
         */
        BANDWIDTH_BOOKING_TYPE_LIVE_TV: ZosaBandwidthBookingType;

        /**
         * @name ZosaBandwidthBookingType#BANDWIDTH_BOOKING_TYPE_META_DATA
         * @memberOf ZosaBandwidthBookingType
         *
         * @description
         * Application browsing booking type.
         *
         */
        BANDWIDTH_BOOKING_TYPE_META_DATA: ZosaBandwidthBookingType;

        /**
         * @name ZosaBandwidthBookingType#BANDWIDTH_BOOKING_TYPE_PVR
         * @memberOf ZosaBandwidthBookingType
         *
         * @description
         * Recording booking type.
         *
         */
        BANDWIDTH_BOOKING_TYPE_PVR: ZosaBandwidthBookingType;

        /**
         * @name ZosaBandwidthBookingType#BANDWIDTH_BOOKING_TYPE_VOD
         * @memberOf ZosaBandwidthBookingType
         *
         * @description
         * VoD booking type.
         *
         */
        BANDWIDTH_BOOKING_TYPE_VOD: ZosaBandwidthBookingType;

    }

    /**
     * @ngdoc interface
     * @name ZosaBandwidthInfo
     *
     * @description
     * Provides information about bandwidth bookings of all subscriber devices.
     * Returned in the response to {@link Zosa.getBandwidthInfo}, in {@link ZosaRequestResponseEvent} for success event.
     *
     */
    interface ZosaBandwidthInfo {

        /**
         * @ngdoc property
         * @name ZosaBandwidthInfo#bookings
         * @propertyOf ZosaBandwidthInfo
         *
         * @description
         * All bandwidth bookings for the subscriber.
         *
         * @returns {ZosaBandwidthBookingItem[]}
         *
         */
        bookings: ZosaBandwidthBookingItem[];

        /**
         * @ngdoc property
         * @name ZosaBandwidthInfo#deviceBookedBitrate
         * @propertyOf ZosaBandwidthInfo
         *
         * @description
         * Sum of booked bandwidth for the current device (kbit/s).
         *
         * @returns {number}
         *
         */
        deviceUsedBitrate: number;

        /**
         * @ngdoc property
         * @name ZosaBandwidthInfo#deviceMaxBitrate
         * @propertyOf ZosaBandwidthInfo
         *
         * @description
         * Maximum bandwidth for the current device (kbit/s).
         *
         * @returns {number}
         *
         */
        deviceMaxBitrate: number;

        /**
         * @ngdoc property
         * @name ZosaBandwidthInfo#subscriberBookedBitrate
         * @propertyOf ZosaBandwidthInfo
         *
         * @description
         * Sum of booked bandwidth for all subscriber devices (kbit/s).
         *
         * @returns {number}
         *
         */
        subscriberUsedBitrate: number;

        /**
         * @ngdoc property
         * @name ZosaBandwidthInfo#subscriberMaxBitrate
         * @propertyOf ZosaBandwidthInfo
         *
         * @description
         * Maximum WAN (Wide Area Network = incoming) bandwidth to the subscriber premises (kbit/s).
         *
         * @returns {number}
         *
         */
        subscriberMaxBitrate: number;

    }

    /**
     * @ngdoc interface
     * @name ZosaCategoryItem
     *
     * @description
     * Represents a category.
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_CATEGORY_ITEM}
     *
     */
    interface ZosaCategoryItem extends ZosaItem {

        /**
         * @ngdoc property
         * @name ZosaCategoryItem#numContentItems
         * @propertyOf ZosaCategoryItem
         *
         * @description
         * Number of content items that belongs to the category.
         * Note: This field is only available if hasSubCategories is false.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {number}
         *
         */
        numContentItems?: number;

        /**
         * @ngdoc property
         * @name ZosaCategoryItem#parentId
         * @propertyOf ZosaCategoryItem
         *
         * @description
         * Parent category id or null for root category.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {zosa.ZosaId}
         *
         */
        parentId?: zosa.ZosaId;

    }

    /**
     * @ngdoc interface
     * @name ZosaChannelItem
     *
     * @description
     * Represents a channel.
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_CHANNEL_ITEM}
     *
     */
    interface ZosaChannelItem extends ZosaItem {

        /**
         * @ngdoc property
         * @name ZosaChannelItem#channelNumber
         * @propertyOf ZosaChannelItem
         *
         * @description
         * Channel number.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {number}
         *
         */
        channelNumber?: number;

        /**
         * @ngdoc property
         * @name ZosaChannelItem#channelType
         * @propertyOf ZosaChannelItem
         *
         * @description
         * Channel type.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {ZosaChannelType}
         *
         */
        channelType?: ZosaChannelType;

        /**
         * @ngdoc property
         * @name ZosaChannelItem#cmsId
         * @propertyOf ZosaChannelItem
         *
         * @description
         * Content management system id.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {string}
         *
         */
        cmsId?: string;

        /**
         * @ngdoc property
         * @name ZosaChannelItem#customProps
         * @propertyOf ZosaChannelItem
         *
         * @description
         * Optional array of customized properties.
         *
         * • Not always supported.
         * • If supported, properties will be documented in separate documentation.
         *
         * @returns {ZosaKeyValuePair[]}
         *
         */
        customProps?: ZosaKeyValuePair[]; // externalCode

        /**
         * @ngdoc property
         * @name ZosaChannelItem#hasOnDemandProgramInfo
         * @propertyOf ZosaChannelItem
         *
         * @description
         * Indicates if EPG meta-data (program information) for the channel is supported by service provider, i.e. program 
         * information for the channel can be requested whenever service provider is online.
         *
         * • Note! For channels without service provider supported EPG meta-data, program information might have to be 
         *   collected from channel stream and may not be available until channel has been played for some time.
         * • Provided if requested in itemFields. (value may be null if unknown or not available).
         *
         * @returns {boolean}
         *
         */
        hasOnDemandProgramInfo?: boolean;

        /**
         * @ngdoc property
         * @name ZosaChannelItem#images
         * @propertyOf ZosaChannelItem
         *
         * @description
         * Array of images for this channel.
         *
         * • Provided if requested in itemFields (field value may be null).
         *
         * @returns {ZosaImage[]}
         *
         */
        images?: ZosaImage[];

        /**
         * @ngdoc property
         * @name ZosaChannelItem#isFavorited
         * @propertyOf ZosaChannelItem
         *
         * @description
         * Indicates that this channel has been added to at least one favorite list.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {boolean}
         *
         */
        isFavorited?: boolean;

        /**
         * @ngdoc property
         * @name ZosaChannelItem#isHidden
         * @propertyOf ZosaChannelItem
         *
         * @description
         * Whether channel is hidden or not.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {boolean}
         *
         */
        isHidden?: boolean;

        /**
         * @ngdoc property
         * @name ZosaChannelItem#minViewingAge
         * @propertyOf ZosaChannelItem
         *
         * @description
         * Parental rating minimum required viewing age (years).
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {number}
         *
         */
        minViewingAge?: number;

        /**
         * @ngdoc property
         * @name ZosaChannelItem#parentalRating
         * @propertyOf ZosaChannelItem
         *
         * @description
         * Parental rating of channel. A larger value indicates a higher rating. The value varies depending on the content rating systems in different countries.
         *
         * • Provided if requested in itemFields.
         *
         * @returns {number}
         *
         */
        parentalRating?: number;

        /**
         * @ngdoc property
         * @name ZosaChannelItem#pipStream
         * @propertyOf ZosaChannelItem
         *
         * @description
         * The pip channel stream for this channel.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {ZosaChannelStreamItem}
         *
         */
        pipStream?: ZosaChannelStreamItem;

        /**
         * @ngdoc property
         * @name ZosaChannelItem#streams
         * @propertyOf ZosaChannelItem
         *
         * @description
         * Array of channel streams for this channel.
         *
         * • Provided if requested in itemFields (field value may be null.
         *
         * @returns {ZosaChannelStreamItem[]}
         *
         */
        streams?: ZosaChannelStreamItem[];

        /**
         * @ngdoc property
         * @name ZosaChannelItem#vasItems
         * @propertyOf ZosaChannelItem
         *
         * @description
         * A list of value-added services associated with this channel.
         *
         * • Provided if requested in itemFields (field value may be null).
         *
         * Note: Only zosaId and zosaType are set, use {@link Zosa.getVasItems} by ID:s to get more fields.
         *
         * @returns {ZosaVasItem[]}
         *
         */
        vasItems?: ZosaVasItem[];

    }

    /**
     * @ngdoc interface
     * @name ZosaChannelProgramsRegion
     *
     * @description
     * A region of scheduled programs. The region defines the boundaries of a subset of the total schedule of linear broadcast TV or radio programs from the service provider.
     * The boundaries are defined as programs belonging to a specific channel and that are scheduled within (or overlaps) a specific calendar time interval.
     * It is used to provide details about which parts of the total schedule that has been updated, see {@link Zosa.ZosaProgramsUpdatedObserver}.
     * Typically, the total schedule may include programs from multiple channels which are scheduled within a calendar time interval of multiple days, possibly including both history and future.
     *
     */
    interface ZosaChannelProgramsRegion {

        /**
         * @ngdoc property
         * @name ZosaChannelProgramsRegion#channelId
         * @propertyOf ZosaChannelProgramsRegion
         *
         * @description
         * ID of the channel that programs in the region belong to.
         *
         * @returns {ZosaId}
         *
         */
        channelId: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaChannelProgramsRegion#endTime
         * @propertyOf ZosaChannelProgramsRegion
         *
         * @description
         * End time of region as number of milliseconds since 1970-01-01 00:00:00 UTC. Programs that overlap or are scheduled within the time interval between startTime and endTime are included in the region.
         *
         * @returns {ZosaDate}
         *
         */
        endTime: number; // ZosaDate;

        /**
         * @ngdoc property
         * @name ZosaChannelProgramsRegion#startTime
         * @propertyOf ZosaChannelProgramsRegion
         *
         * @description
         * Start time of region as number of milliseconds since 1970-01-01 00:00:00 UTC. Programs that overlap or are scheduled within the time interval between startTime and endTime are included in the region.
         *
         * @returns {ZosaDate}
         *
         */
        startTime: number; // ZosaDate;

    }

    /**
     * @ngdoc interface
     * @name ZosaChannelStreamItem
     *
     * @description
     * Represents a channel stream.
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_CHANNEL_STREAM}
     *
     */
    interface ZosaChannelStreamItem extends ZosaItem {

        /**
         * @ngdoc property
         * @name ZosaChannelStreamItem#bitrate
         * @propertyOf ZosaChannelStreamItem
         *
         * @description
         * The bitrate of the stream in kbit/s. Value may be null if unknown or not available.
         *
         * @returns {number}
         *
         */
        bitrate?: number;

        /**
         * @ngdoc property
         * @name ZosaChannelStreamItem#clientPvrAllowed
         * @propertyOf ZosaChannelStreamItem
         *
         * @description
         * Whether client recording (cPVR) of this stream is allowed or not.
         *
         * • Field may be missing if unknown or not available.
         *
         * @returns {boolean}
         *
         */
        clientPvrAllowed?: boolean;

        /**
         * @ngdoc property
         * @name ZosaChannelStreamItem#clientPvrSupported
         * @propertyOf ZosaChannelStreamItem
         *
         * @description
         * Whether client recording (cPVR) of this stream is supported or not.
         *
         * • Field may be missing if unknown or not available.
         *
         * @returns {boolean}
         *
         */
        clientPvrSupported?: boolean;

        /**
         * @ngdoc property
         * @name ZosaChannelStreamItem#customProps
         * @propertyOf ZosaChannelStreamItem
         *
         * @description
         * Optional array of customized properties.
         *
         * • Not always supported.
         * • If supported, properties will be documented in separate documentation.
         *
         * @returns {ZosaKeyValuePair[]}
         *
         */
        customProps?: ZosaKeyValuePair[]; // HDR

        /**
         * @ngdoc property
         * @name ZosaChannelStreamItem#hasAlternativeStream
         * @propertyOf ZosaChannelStreamItem
         *
         * @description
         * Indicates if the stream has an associated alternative stream.
         *
         * @returns {boolean}
         *
         */
        hasAlternativeStream: boolean;

        /**
         * @ngdoc property
         * @name ZosaChannelStreamItem#instantRestartAllowed
         * @propertyOf ZosaChannelStreamItem
         *
         * @description
         * Whether Instant Restart is allowed for this stream or not.
         *
         * • Field may be missing if unknown or not available.
         *
         * @returns {boolean}
         *
         */
        instantRestartAllowed?: boolean;

        /**
         * @ngdoc property
         * @name ZosaChannelStreamItem#instantRestartSupported
         * @propertyOf ZosaChannelStreamItem
         *
         * @description
         * Whether Instant Restart is supported for this stream or not.
         *
         * • Field may be missing if unknown or not available.
         *
         * @returns {boolean}
         *
         */
        instantRestartSupported?: boolean;

        /**
         * @ngdoc property
         * @name ZosaChannelStreamItem#livePlayAllowed
         * @propertyOf ZosaChannelStreamItem
         *
         * @description
         * Whether live playback of this stream is allowed or not.
         *
         * • Field may be missing if unknown or not available.
         *
         * @returns {boolean}
         *
         */
        livePlayAllowed?: boolean;

        /**
         * @ngdoc property
         * @name ZosaChannelStreamItem#livePlaySupported
         * @propertyOf ZosaChannelStreamItem
         *
         * @description
         * Whether live playback of this stream is supported or not.
         *
         * • Field may be missing if unknown or not available.
         *
         * @returns {boolean}
         *
         */
        livePlaySupported?: boolean;

        /**
         * @ngdoc property
         * @name ZosaChannelStreamItem#transmissionType
         * @propertyOf ZosaChannelStreamItem
         *
         * @description
         * The transmission type of the stream.
         *
         * • Field may be missing if unknown or not available.
         *
         * @returns {ZosaTransmissionType}
         *
         */
        transmissionType?: ZosaTransmissionType;

        /**
         * @ngdoc property
         * @name ZosaChannelStreamItem#videoDefinition
         * @propertyOf ZosaChannelStreamItem
         *
         * @description
         * Video definition of the stream.
         *
         * @returns {ZosaVideoDefinition}
         *
         */
        videoDefinition: ZosaVideoDefinition;

    }

    /**
     * @ngdoc object
     * @name ZosaChannelType
     *
     * @description
     * Possible values of a {@link ZosaChannelItem}'s channelType.
     *
     */
    interface IZosaChannelType {

        /**
         * @name ZosaChannelType#CHANNEL_TYPE_APPLICATION
         * @memberOf ZosaChannelType
         *
         * @description
         * APPLICATION.
         * 
         * An application channel normally owns an application url. The channel may be playable also.
         *
         */
        CHANNEL_TYPE_APPLICATION: ZosaChannelType;

        /**
         * @name ZosaChannelType#CHANNEL_TYPE_TV
         * @memberOf ZosaChannelType
         *
         * @description
         * TV.
         *
         */
        CHANNEL_TYPE_TV: ZosaChannelType;

    }

    /**
     * @ngdoc interface
     * @name ZosaClearCustomChannelNumberingParams
     *
     * @description
     * Input parameters for {@link Zosa.clearCustomChannelNumbering}.
     *
     */
    interface ZosaClearCustomChannelNumberingParams {

        /**
         * @ngdoc property
         * @name ZosaClearCustomChannelNumberingParams#device
         * @propertyOf ZosaClearCustomChannelNumberingParams
         *
         * @description
         * Device from which the custom channel numbering will be cleared.
         *
         * • Optional.
         * • The current device is used if this is not specified.
         *
         * @returns {ZosaId}
         *
         */
        device?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaClearCustomChannelNumberingParams#serviceProvider
         * @propertyOf ZosaClearCustomChannelNumberingParams
         *
         * @description
         * The serviceProvider that custom channel numbering should be cleared for.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

    }

    /**
     * @ngdoc interface
     * @name ZosaCreateCustomApiParams
     *
     * @description
     * Input parameters for {@link Zosa.createCustomApi}.
     *
     */
    interface ZosaCreateCustomApiParams {

        /**
         * @ngdoc property
         * @name ZosaCreateCustomApiParams#apiName
         * @propertyOf ZosaCreateCustomApiParams
         *
         * @description
         * Name of custom API.
         *
         * @returns {string}
         *
         * See: {@link ZosaCustomApis}
         *
         */
        apiName: string;

    }

    /**
     * @ngdoc interface
     * @name ZosaCreatePlaybackSessionParams
     *
     * @description
     * Input parameters for {@link Zosa.createPlaybackSession}.
     *
     */
    interface ZosaCreatePlaybackSessionParams {

        /**
         * @ngdoc property
         * @name ZosaCreatePlaybackSessionParams#media
         * @propertyOf ZosaCreatePlaybackSessionParams
         *
         * @description
         * Media item to be played.
         *
         * @returns {ZosaId}
         *
         */
        media: ZosaId;

    }

    /**
     * @ngdoc interface
     * @name ZosaCreateProgramsUpdatedObserverParams
     *
     * @description
     * Used to create a programs updated observer.
     *
     */
    interface ZosaCreateProgramsUpdatedObserverParams {

        /**
         * @ngdoc property
         * @name ZosaCreateProgramsUpdatedObserverParams#observedRegions
         * @propertyOf ZosaCreateProgramsUpdatedObserverParams
         *
         * @description
         * Only program updates in regions defined by this parameter will be observed.
         * 
         * • This array must not be empty.
         *
         * @returns {ZosaChannelProgramsRegion[]}
         *
         */
        observedRegions: ZosaChannelProgramsRegion[];

        /**
         * @ngdoc property
         * @name ZosaCreateProgramsUpdatedObserverParams#pollingPeriod
         * @propertyOf ZosaCreateProgramsUpdatedObserverParams
         *
         * @description
         * Defines how often service provider server should be asked for updates, if applicable. Value is specified in seconds.
         * 
         * • Optional, arbitrary if undefined.
         *
         * @returns {number}
         *
         */
        pollingPeriod?: number;

    }

    /**
     * @ngdoc interface
     * @name ZosaCustomApi
     *
     * @description
     * Represents a custom API.
     *
     */
    interface ZosaCustomApi {

        /**
         * @ngdoc method
         * @name call
         *
         * @description
         * Call a custom API function.
         *
         * @param {ZosaCustomApiCallParams} params
         *
         * @returns {ZosaRequest<DT_GetReponse> | ZosaRequest<DT_MasterStbGetReponse> | ZosaRequest<DT_GetConfigurableUserSettingsResponseEvent> | ZosaRequest<DT_GetConfigurableUserSettingsValuesResponseEvent> | ZosaRequest<DT_SubscriberInfoGetResponseEvent> | ZosaRequest<{ ageRatingCfg: string, parentalCtrlCfg: string }> | ZosaRequest<{ isActive: string }> | ZosaRequest<void>| zosa.ZosaRequest<{ BandwidthManagerType: string }> | ZosaRequest<DT_GetSatelliteConfigResponseEvent> | ZosaRequest<DT_GetSatellitesResponseEvent> | ZosaRequest<DT_GetReferenceTranspondersResponseEvent> | ZosaRequest<DT_DfccGetResponse>}
         *
         */
        call<T extends ZosaRequest<ITdsGetResponse> | ZosaRequest<ITdsSetResponse> | ZosaRequest<DT_GetReponse> | ZosaRequest<DT_MasterStbGetReponse> | ZosaRequest<DT_GetConfigurableUserSettingsResponseEvent> | ZosaRequest<DT_GetConfigurableUserSettingsValuesResponseEvent> | ZosaRequest<DT_SubscriberInfoGetResponseEvent> | ZosaRequest<{ ageRatingCfg: string, parentalCtrlCfg: string }> | ZosaRequest<{ isActive: string }> | ZosaRequest<void> | ZosaRequest<{ BandwidthManagerType: string }> | ZosaRequest<DT_GetSatelliteConfigResponseEvent> | ZosaRequest<DT_GetSatellitesResponseEvent> | ZosaRequest<DT_GetReferenceTranspondersResponseEvent> | ZosaRequest<DT_DfccGetResponse> | ZosaRequest<DT_GetComfortFeatureStatusResponse> | ZosaRequest<zosa.DT_BandwidthManagerServerUrlResponse> | ZosaRequest<zosa.DT_GetCurrentLoginInformationResponse>>(params: ZosaCustomApiCallParams): T;

        /**
         * @ngdoc method
         * @name destroy
         *
         * @description
         * This function must be called when custom API is not longer needed.
         *
         * @returns {ZosaRequest<void>}
         *
         */
        destroy(): ZosaRequest<void>;

        /**
         * @ngdoc method
         * @name setOnCustomApiEvent
         *
         * @description
         * Register a callback function that will be called whenever a custom API event is received.
         *
         * @param {event => void} func
         *
         */
        setOnCustomApiEvent(func: (event: any) => void): void;

    }

    /**
     * @ngdoc interface
     * @name ZosaCustomApis
     *
     * @description
     * Available ZosaCustomApi modules.
     *
     */
    interface IZosaCustomApis {

        /**
         * @name ZosaCustomApis#DT_BackendDataAccess
         * @memberOf ZosaCustomApis
         *
         * @description
         * This API allows the client to retreive data from the back-end.
         *
         */
        DT_BackendDataAccess: ZosaCustomApis;

        /**
         * @name ZosaCustomApis#DT_BackendDataAccess
         * @memberOf ZosaCustomApis
         *
         * @description
         * This API allows the client to convert external Vods into ZosaVodItems.
         *
         */
        DT_CreateVod: ZosaCustomApis;

        /**
         * @name ZosaCustomApis#MasterSTB
         * @memberOf ZosaCustomApis
         *
         * @description
         * This API allows the client to set the master STB.
         *
         */
        MasterSTB: ZosaCustomApis;


        /**
         * @name ZosaCustomApis#DT_SatelliteInformationManager
         * @memberOf ZosaCustomApis
         *
         * @description
         * This ZosaCustomApi is used to manage satellite information and satellite settings. 
         * Methods below allow fetching a list of satellites and their reference transponders, fetching a list of satellite settings and setting satellite settings.
         *
         */
        DT_SatelliteInformationManager: ZosaCustomApis
    }

    /**
     * @ngdoc interface
     * @name ZosaCustomApiCallParams
     *
     * @description
     * Input parameters for {@link ZosaCustomApi.call}.
     *
     */
    interface ZosaCustomApiCallParams {

        /**
         * @ngdoc property
         * @name ZosaCustomApiCallParams#functionName
         * @propertyOf ZosaCustomApiCallParams
         *
         * @description
         * Name of function to be called.
         *
         * @returns {string}
         *
         */
        functionName:
        "GetVasCategoryId" |
        "CreateVod" |
        "getAccessToken" |
        "getGcpAccessToken" |
        "getIdToken" |
        "GET" |
        "RESET" |
        "SET" |
        "GetConfiguration" |
        "SetConfiguration" |
        "ActivateComfortFeature" |
        "DeactivateComfortFeature" |
        "IsComfortFeatureActive" |
        "isPlatformReachable" |
        "GetSettings" |
        "GetValues" |
        "SetValues" |
        "BandwidthManagerType" |
        "RemoveOtherStbDevices" |
        "GetSatelliteConfig" |
        "GetSatellites" |
        "GetReferenceTransponders" |
        "SetSatelliteConfig" |
        "SetRecordingImageDownloadConfigParams" |
        "getConfig" |
        "GetDFCC" |
        "GetComfortFeatureStatus" |
        "BandwidthManagerServerUrl" |
        "GetCurrentLoginInformation" |
        "CallBackendApi";

        /**
         * @ngdoc property
         * @name ZosaCustomApiCallParams#input
         * @propertyOf ZosaCustomApiCallParams
         *
         * @description
         * Input parameters to the function. Externally defined.
         *
         * Note: The object must contain properties of type string only.
         *
         * • Optional.
         *
         * @returns {DT_CreateVodParams | DT_GetParams | DT_MasterStbSetParams | DTParentalControlConfiguration | DT_SubscriberInfoSetParams | DT_GetConfigurableUserSettingsParams | DT_GetConfigurableUserSettingsValuesParams | DT_SetConfigurableUserSettingsValuesParams | DT_SetSatelliteConfigParams | DT_CallBackendApi | {}}
         *
         */
        input?: DT_CreateVodParams | DT_GetParams | DT_MasterStbSetParams | MapToString<DTParentalControlConfiguration> | DT_SubscriberInfoSetParams | DT_GetConfigurableUserSettingsParams | DT_GetConfigurableUserSettingsValuesParams | DT_SetConfigurableUserSettingsValuesParams | DT_SetSatelliteConfigParams | DT_CallBackendApi | {};

    }

    /**
     * @ngdoc interface
     * @name ZosaCustomChannelNumber
     *
     * @description
     * Used to represent the user defined number of a single channel.
     *
     */
    interface ZosaCustomChannelNumber {

        /**
         * @ngdoc property
         * @name ZosaCustomChannelNumber#channelId
         * @propertyOf ZosaCustomChannelNumber
         *
         * @description
         * The ZosaId of the channel to set custom number for.
         *
         * @returns {ZosaId}
         *
         */
        channelId: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaCustomChannelNumber#number
         * @propertyOf ZosaCustomChannelNumber
         *
         * @description
         * The number of the channel. This value corresponds to ZosaChannelItem.channelNumber of the associated channel.
         * It should be an integer value (> 0). The number has to be unique, meaning that no two channels can have the same number.
         *
         * @returns {number}
         *
         */
        number: number;

    }

    /**
     * @ngdoc interface
     * @name ZosaDataUpdatedEvent
     *
     * @description
     * Zosa data updated event.
     * Event sent when data is updated.
     * This event only indicates what type of data was updated. It does not contain the updated data. Application must make applicable function call to retrieve the updated data.
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_DEVICE_ITEM}
     *
     */
    interface ZosaDataUpdatedEvent {

        /**
         * @ngdoc property
         * @name ZosaDataUpdatedEvent#channelNo
         * @propertyOf ZosaDataUpdatedEvent
         *
         * @description
         * User customized channel number has been updated.
         *
         * @returns {boolean}
         *
         */
        channelNo: boolean;

        /**
         * @ngdoc property
         * @name ZosaDataUpdatedEvent#channels
         * @propertyOf ZosaDataUpdatedEvent
         *
         * @description
         * Channels has been updated.
         *
         * @returns {boolean}
         *
         */
        channels: boolean;

        /**
         * @ngdoc property
         * @name ZosaDataUpdatedEvent#devices
         * @propertyOf ZosaDataUpdatedEvent
         *
         * @description
         * Device information has been updated. To retreive the the new information {@link Zosa.getDevices} should be called.
         *
         * @returns {boolean}
         *
         */
        devices: boolean;

        /**
         * @ngdoc property
         * @name ZosaDataUpdatedEvent#favorites
         * @propertyOf ZosaDataUpdatedEvent
         *
         * @description
         * Favorites has been updated.
         *
         * @returns {boolean}
         *
         */
        favorites: boolean;

        /**
         * @ngdoc property
         * @name ZosaDataUpdatedEvent#locks
         * @propertyOf ZosaDataUpdatedEvent
         *
         * @description
         * Lock list has been updated.
         *
         * @returns {boolean}
         *
         */
        locks: boolean;

        /**
         * @ngdoc property
         * @name ZosaDataUpdatedEvent#serviceProviderId
         * @propertyOf ZosaDataUpdatedEvent
         *
         * @description
         * Service provider that this event is for.
         *
         * @returns {ZosaId}
         *
         */
        serviceProviderId: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaDataUpdatedEvent#vas
         * @propertyOf ZosaDataUpdatedEvent
         *
         * @description
         * Vas list has been updated. To retreive the the new information {@link Zosa.getVasItems} should be called.
         *
         * @returns {boolean}
         *
         */
        vas: boolean;

    }

    /**
     * @ngdoc interface
     * @name ZosaDeviceItem
     *
     * @description
     * Represents a device.
     * Normally used as an element of a {@link ZosaList} in the response to, e.g. {@link Zosa.getDevices}, in {@link ZosaRequestResponseEvent} for success event. 
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_DEVICE_ITEM}
     *
     */
    interface ZosaDeviceItem extends ZosaItem {

        /**
         * @ngdoc property
         * @name ZosaDeviceItem#customProps
         * @propertyOf ZosaDeviceItem
         *
         * @description
         * Optional array of customized properties.
         *
         * • Not always supported.
         * • If supported, properties will be documented in separate documentation.
         *
         * @returns {ZosaKeyValuePair[]}
         *
         */
        customProps?: ZosaKeyValuePair[]; // channelNamespaceName

        /**
         * @ngdoc property
         * @name ZosaDeviceItem#deviceModel
         * @propertyOf ZosaDeviceItem
         *
         * @description
         * Vendor device model, i.e. "iPhone 4S".
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {string}
         *
         */
        deviceModel?: string;

        /**
         * @ngdoc property
         * @name ZosaDeviceItem#deviceType
         * @propertyOf ZosaDeviceItem
         *
         * @description
         * Type of this device.
         *
         * • Always provided.
         *
         * @returns {ZosaDeviceType}
         *
         */
        deviceType: ZosaDeviceType;

        /**
         * @ngdoc property
         * @name ZosaDeviceItem#isCurrentDevice
         * @propertyOf ZosaDeviceItem
         *
         * @description
         * Indicates if the device is the current device.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {boolean}
         *
         */
        isCurrentDevice?: boolean;

        /**
         * @ngdoc property
         * @name ZosaDeviceItem#supportsWoL
         * @propertyOf ZosaDeviceItem
         *
         * @description
         * Indicates if the device supports supports Wake-on-LAN (WoL). Wake-on-LAN is an Ethernet or token ring computer networking standard 
         * that allows a device to be turned on or awakened by a network message.
         *    - Provided if requested in itemFields (value may be null if unknown or not available).
         *    - Only available when device is offline (isOnline is false).
         *
         * @returns {boolean}
         *
         */
        supportsWoL?: boolean;

        /**
         * @ngdoc property
         * @name ZosaDeviceItem#isOnline
         * @propertyOf ZosaDeviceItem
         *
         * @description
         * Indicates if the device is online. Is true when online, false when offline.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {boolean}
         *
         */
        isOnline?: boolean;

        /**
         * @ngdoc property
         * @name ZosaDeviceItem#name
         * @propertyOf ZosaDeviceItem
         *
         * @description
         * Name of the device.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {string}
         *
         */
        name?: string | null;

        /**
         * @ngdoc property
         * @name ZosaDeviceItem#physicalId
         * @propertyOf ZosaDeviceItem
         *
         * @description
         * Physical id of the device. For example, the mac address of the STB.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {string}
         *
         */
        physicalId?: string;

    }

    /**
     * @ngdoc object
     * @name ZosaDeviceType
     *
     * @description
     * Possible values of a device's type.
     *
     */
    interface IZosaDeviceType {

        /**
         * @name ZosaDeviceType#DEVICE_TYPE_OTT
         * @memberOf ZosaDeviceType
         *
         * @description
         * Over-the-top (OTT) device. This type is used for devices that access content over internet, such as iOS or Android devices.
         *
         */
        DEVICE_TYPE_OTT: ZosaDeviceType;

        /**
         * @name ZosaDeviceType#DEVICE_TYPE_PC
         * @memberOf ZosaDeviceType
         *
         * @description
         * Personal Computer (PC) device.
         *
         */
        DEVICE_TYPE_PC: ZosaDeviceType;

        /**
         * @name ZosaDeviceType#DEVICE_TYPE_STB
         * @memberOf ZosaDeviceType
         *
         * @description
         * Set-top-box (STB) device.
         *
         */
        DEVICE_TYPE_STB: ZosaDeviceType;

        /**
         * @name ZosaDeviceType#DEVICE_TYPE_UNKNOWN
         * @memberOf ZosaDeviceType
         *
         * @description
         * Unknown Device type.
         *
         */
        DEVICE_TYPE_UNKNOWN: ZosaDeviceType;

    }

    /**
    * @ngdoc object
    * @name ZosaDvbConflictType
    *
    * @description
    * Possible values of a {@link ZosaGetRecordingConflictResponse}'s dvbConflictType.
    *
    */
    interface IZosaDvbConflictType {

        /**
         * @name ZosaDvbConflictType#DVB_CONFLICT_TYPE_CI
         * @memberOf ZosaDvbConflictType
         *
         * @description
         * Common Interface conflict
         *
         */
        DVB_CONFLICT_TYPE_CI: ZosaDvbConflictType;

        /**
         * @name ZosaDvbConflictType#DVB_CONFLICT_TYPE_IO
         * @memberOf ZosaDvbConflictType
         *
         * @description
         * IO conflict
         *
         */
        DVB_CONFLICT_TYPE_IO: ZosaDvbConflictType;

        /**
         * @name ZosaDvbConflictType#DVB_CONFLICT_TYPE_TP
         * @memberOf ZosaDvbConflictType
         *
         * @description
         * Transponder conflict
         *
         */
        DVB_CONFLICT_TYPE_TP: ZosaDvbConflictType;

        /**
         * @name ZosaDvbConflictType#DVB_CONFLICT_TYPE_TUNER
         * @memberOf ZosaDvbConflictType
         *
         * @description
         * Tuner conflict
         *
         */
        DVB_CONFLICT_TYPE_TUNER: ZosaDvbConflictType;

        /**
         * @name ZosaDvbConflictType#DVB_CONFLICT_TYPE_UNKNOWN
         * @memberOf ZosaDvbConflictType
         *
         * @description
         * Unknown conflict type.
         *
         */
        DVB_CONFLICT_TYPE_UNKNOWN: ZosaDvbConflictType;

    }

    /**
     * @ngdoc interface
     * @name ZosaError
     *
     * @description
     * Private, only returned.
     *
     */
    interface ZosaError {

        /**
         * @ngdoc property
         * @name ZosaError#code
         * @propertyOf ZosaError
         *
         * @description
         * {@link ZosaErrorCode} describing the error.
         *
         * @returns {ZosaErrorCode}
         *
         */
        code: ZosaErrorCode;

        /**
         * @ngdoc property
         * @name ZosaError#message
         * @propertyOf ZosaError
         *
         * @description
         * Message describing the error.
         *
         * @returns {string}
         *
         */
        message: string;

    }

    /**
     * @ngdoc object
     * @name ZosaErrorCode
     *
     * @description
     * Error codes. Used for e.g. code in {@link ZosaError}.
     *
     */
    interface IZosaErrorCode {

        /**
         * @name ZosaErrorCode#ACOUNT_IS_LOCKED
         * @memberOf ZosaErrorCode
         *
         * @description
         * The account is locked.
         *
         */
        ACOUNT_IS_LOCKED: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#ALREADY_EXISTS
         * @memberOf ZosaErrorCode
         *
         * @description
         * Trying to create or add something that already exists.
         *
         */
        ALREADY_EXISTS: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#CANCELED
         * @memberOf ZosaErrorCode
         *
         * @description
         * The operation was canceled.
         *
         */
        CANCELED: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#COMMUNICATION_ERROR
         * @memberOf ZosaErrorCode
         *
         * @description
         * Communication failure, such as connection with server failed.
         *
         */
        COMMUNICATION_ERROR: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#CONTENT_RESTRICTION
         * @memberOf ZosaErrorCode
         *
         * @description
         * Operation is not allowed due to content restrictions.
         *
         */
        CONTENT_RESTRICTION: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#DEVICE_NOT_AVAILABLE
         * @memberOf ZosaErrorCode
         *
         * @description
         * A device is not available.
         *
         */
        DEVICE_NOT_AVAILABLE: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#FEATURE_NOT_SUPPORTED
         * @memberOf ZosaErrorCode
         *
         * @description
         * Feature not supported.
         *
         */
        FEATURE_NOT_SUPPORTED: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#INSUFFICIENT_BANDWIDTH
         * @memberOf ZosaErrorCode
         *
         * @description
         * It is not possible to allocate the required bandwidth for the operation.
         *
         */
        INSUFFICIENT_BANDWIDTH: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#INSUFFICIENT_RESOURCES
         * @memberOf ZosaErrorCode
         *
         * @description
         * Not enough platform resources available.
         *
         */
        INSUFFICIENT_RESOURCES: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#INSUFFICIENT_STORAGE
         * @memberOf ZosaErrorCode
         *
         * @description
         * Storage limitation prevent the operation from being performed.
         *
         */
        INSUFFICIENT_STORAGE: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#INSUFFICIENT_WAN_BANDWIDTH
         * @memberOf ZosaErrorCode
         *
         * @description
         * It is not possible to allocate the required bandwidth for the operation because of insufficient WAN bandwidth.
         *
         */
        INSUFFICIENT_WAN_BANDWIDTH: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#INVALID_CREDENTIALS
         * @memberOf ZosaErrorCode
         *
         * @description
         * Provided credentials are not correct.
         *
         */
        INVALID_CREDENTIALS: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#INVALID_OPERATION
         * @memberOf ZosaErrorCode
         *
         * @description
         * Invalid operation. Operation is not possible to perform.
         *
         */
        INVALID_OPERATION: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#INVALID_PARAMETER
         * @memberOf ZosaErrorCode
         *
         * @description
         * Invalid parameter. One or more parameters for an operation is invalid, missing or not allowed.
         *
         */
        INVALID_PARAMETER: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#NOT_FOUND
         * @memberOf ZosaErrorCode
         *
         * @description
         * Resource or content is not found.
         *
         */
        NOT_FOUND: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#NOT_LOGGED_IN
         * @memberOf ZosaErrorCode
         *
         * @description
         * Operation is not possible since client is currently not logged in.
         *
         */
        NOT_LOGGED_IN: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#NOT_PROVISIONED
         * @memberOf ZosaErrorCode
         *
         * @description
         * Provisioning required to perform operation is currently not completed.
         *
         */
        NOT_PROVISIONED: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#NOT_SUBSCRIBED
         * @memberOf ZosaErrorCode
         *
         * @description
         * Content, or other resorce neccesary for operation, is not subscribed.
         *
         */
        NOT_SUBSCRIBED: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#OK
         * @memberOf ZosaErrorCode
         *
         * @description
         * No error, status is ok.
         *
         */
        OK: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#OPERATION_PENDING
         * @memberOf ZosaErrorCode
         *
         * @description
         * Operation is pending.
         *
         */
        OPERATION_PENDING: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#PARENTAL_CONTROL_BLOCKED
         * @memberOf ZosaErrorCode
         *
         * @description
         * Parental level of user is too low for parental rating of content, or content has a parental lock.
         *
         */
        PARENTAL_CONTROL_BLOCKED: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#RESTRICTED_ACCESS
         * @memberOf ZosaErrorCode
         *
         * @description
         * Restricted access. Operation was not allowed with user or profile.
         *
         */
        RESTRICTED_ACCESS: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#TIMEOUT
         * @memberOf ZosaErrorCode
         *
         * @description
         * Operation, such as network access, took too long.
         *
         */
        TIMEOUT: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#SESSION_EXPIRED
         * @memberOf ZosaErrorCode
         *
         * @description
         * The service provider session has expired.
         *
         */
        SESSION_EXPIRED: ZosaErrorCode;

        /**
         * @name ZosaErrorCode#UNKNOWN_ERROR
         * @memberOf ZosaErrorCode
         *
         * @description
         * Unknown / generic error.
         *
         */
        UNKNOWN_ERROR: ZosaErrorCode;

    }

    /**
     * @ngdoc interface
     * @name ZosaErrorEvent
     *
     * @description
     * Private, only returned. Event sent on a failed request.
     *
     */
    interface ZosaErrorEvent {

        /**
         * @ngdoc property
         * @name ZosaErrorEvent#error
         * @propertyOf ZosaErrorEvent
         *
         * @description
         * {@link ZosaError} for the request.
         * 
         * Common error codes:
         * <ul>
         *   <li>{@link ZosaErrorCode.COMMUNICATION_ERROR}</li>
         *   <li>{@link ZosaErrorCode.INVALID_PARAMETER}</li>
         *   <li>{@link ZosaErrorCode.FEATURE_NOT_SUPPORTED}</li>
         *   <li>{@link ZosaErrorCode.UNKNOWN_ERROR}</li>
         *   <li>{@link ZosaErrorCode.NOT_LOGGED_IN}</li>
         *   <li>{@link ZosaErrorCode.TIMEOUT}</li>
         * </ul>
         * Most of the requests have these error codes in commmon.
         *
         * @returns {ZosaError}
         *
         */
        error: ZosaError;

    }

    /**
     * @ngdoc type
     * @name ZosaExternalIdType
     *
     * @description
     * Possible values of a External Id type used when calling {@link Zosa#getVods} with the parameter externalVodIds.
     *
     */
    interface IZosaExternalIdType {

        /**
         * @name ZosaExternalIdType#EXTERNAL_ID_TYPE_CMS
         * @memberOf ZosaExternalIdType
         *
         * @description
         * External id type used to reference CMS ids.
         *
         */
        EXTERNAL_ID_TYPE_CMS: ZosaExternalIdType;

        /**
         * @name ZosaExternalIdType#EXTERNAL_ID_TYPE_SERVICE_PROVIDER
         * @memberOf ZosaExternalIdType
         *
         * @description
         * External id type used to reference service provider ids.
         *
         */
        EXTERNAL_ID_TYPE_SERVICE_PROVIDER: ZosaExternalIdType;

        /**
         * @name ZosaExternalIdType#EXTERNAL_ID_TYPE_VOD_SYSTEM
         * @memberOf ZosaExternalIdType
         *
         * @description
         * External id type used to reference VOD system ids.
         *
         */
        EXTERNAL_ID_TYPE_VOD_SYSTEM: ZosaExternalIdType;

    }

    /**
     * @ngdoc interface
     * @name ZosaFavoriteListItem
     *
     * @description
     * Represents a favorite list.
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_FAVORITE_LIST_ITEM}
     *
     */
    interface ZosaFavoriteListItem extends ZosaItem {

        /**
         * @ngdoc property
         * @name ZosaFavoriteListItem#contentType
         * @propertyOf ZosaFavoriteListItem
         *
         * @description
         * Type of elements in favorite list. Must be {@link ZosaType.ZOSA_TYPE_CHANNEL_ITEM} or {@link ZosaType.ZOSA_TYPE_VOD_ITEM}. A favorite list may only contain items of one type.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {ZosaType}
         *
         */
        contentType?: ZosaType;

    }
    /**
     * @ngdoc interface
     * @name ZosaGenreItem
     *
     * @description
     * Represents a genre.
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_GENRE_ITEM}
     *
     */
    interface ZosaGenreItem extends ZosaItem {

    }
    /**
     * @ngdoc interface
     * @name ZosaGetBandwidthInfoParams
     *
     * @description
     * Input parameters for {@link Zosa.getCategories}.
     *
     */
    interface ZosaGetBandwidthInfoParams {

        /**
         * @ngdoc property
         * @name ZosaGetBandwidthInfoParams#serviceProvider
         * @propertyOf ZosaGetBandwidthInfoParams
         *
         * @description
         * Zosa service provider.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

    }

    /**
     * @ngdoc interface
     * @name ZosaGetCategoriesParams
     *
     * @description
     * Input parameters for {@link Zosa.getCategories}.
     *
     */
    interface ZosaGetCategoriesParams extends ZosaAbstractGetItemParams<ZosaCategoryItem>, ZosaAbstractGetListParams {

        /**
         * @ngdoc property
         * @name ZosaGetCategoriesParams#categories
         * @propertyOf ZosaGetCategoriesParams
         *
         * @description
         * List of categories to get. Can be used to get categories by id, or to get other itemFields. Only one of the parameters categories or serviceProviderCategoryIds may be specified in the same call to {@link Zosa#getVods}.
         *
         * Note: May return success even if request contains invalid categories ids, in which case values in list for invalid ids will be set to null. If all provided ids are invalid, request will return failure.
         *
         * • Optional.
         *
         * @returns {ZosaId[]}
         *
         */
        categories?: ZosaId[];

        /**
         * @ngdoc property
         * @name ZosaGetCategoriesParams#contentType
         * @propertyOf ZosaGetCategoriesParams
         *
         * @description
         * Type of content to get categories for.
         *
         * • Optional.
         *
         * @returns {ZosaType}
         *
         */
        contentType?: ZosaType;

        /**
         * @ngdoc property
         * @name ZosaGetCategoriesParams#parentCategory
         * @propertyOf ZosaGetCategoriesParams
         *
         * @description
         * Category to get subcategories for. If category is set to null or is undefined, the top categories will be returned.
         *
         * • Optional.
         *
         * @returns {ZosaId}
         *
         */
        parentCategory?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaGetCategoriesParams#serviceProvider
         * @propertyOf ZosaGetCategoriesParams
         *
         * @description
         * ServiceProvider to get categories from.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

        /**
         * @ngdoc property
         * @name ZosaGetCategoriesParams#serviceProviderCategoryIds
         * @propertyOf ZosaGetCategoriesParams
         *
         * @description
         * List of service provider specific identifiers for the requested categories.
         *
         * This parameter can be used to get categories from ZOSA when the underlying service provider category identifiers are known by client.
         * If specified, offset and count parameters will be ignored. Only one of the parameters serviceProviderCategoryIds or parentCategory may be specified in the same call to {@link Zosa#getCategories}.
         *
         * Note: May return success even if request contains invalid categories ids, in which case values in list for invalid ids will be set to null. If all provided ids are invalid, request will return failure.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        serviceProviderCategoryIds?: string[];

    }

    /**
     * @ngdoc interface
     * @name ZosaGetChannelsParams
     *
     * @description
     * Input parameters for {@link Zosa.getChannels}.
     *
     */
    interface ZosaGetChannelsParams extends ZosaAbstractGetItemParams<ZosaChannelItem>, ZosaAbstractGetListParams {

        /**
         * @ngdoc property
         * @name ZosaGetChannelsParams#category
         * @propertyOf ZosaGetChannelsParams
         *
         * @description
         * Category that will be considered when getting channels. Only one of the parameters category, genre or favoriteList may be specified in the same call to {@link Zosa.getChannels}.
         *
         * • Optional.
         *
         * @returns {ZosaId}
         *
         */
        category?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaGetChannelsParams#channels
         * @propertyOf ZosaGetChannelsParams
         *
         * @description
         * List of channels to get. Can be used to get channels by id, or to get other itemFields.
         *
         * Note: May return success even if request contains invalid channel ids, in which case values in list for invalid content ids will be set to null. If all channel ids are invalid, request will return failure.
         *
         * • Optional.
         *
         * @returns {ZosaId[]}
         *
         */
        channels?: ZosaId[];

        /**
         * @ngdoc property
         * @name ZosaGetChannelsParams#dvbChannelStreamIds
         * @propertyOf ZosaGetChannelsParams
         *
         * @description
         * List of DVB IDs for the requested channels. All channels that contain at least one DVB channel stream that matches any of the requested DVB IDs will be returned. 
         * Only one of the parameters channels, serviceProviderChannelIds or dvbChannelStreamIds may be specified in the same call to {@link Zosa.getChannels}
         *
         * • Optional.
         *
         * @returns {ZosaDvbChannelStreamIds[]}
         *
         */
        dvbChannelStreamIds?: ZosaDvbChannelStreamIds[];

        /**
         * @ngdoc property
         * @name ZosaGetChannelsParams#externalChannelIds
         * @propertyOf ZosaGetChannelsParams
         *
         * @description
         * List of identifiers specific to a third party for the requested channels.
         * This parameter can be used to get channels from ZOSA when the underlying third party channel identifiers are known by client.
         * Only one of the parameters channel, favoriteList, category, serviceProviderChannelIds, externalChannelIds or genre may be specified in the same call to {@link Zosa.getChannels}.
         * Only valid if parameters serviceProvider and externalChannelIdType are specified in the same call to {@link Zosa.getChannels}.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        externalChannelIds?: string[];

        /**
         * @ngdoc property
         * @name ZosaGetChannelsParams#externalChannelIdType
         * @propertyOf ZosaGetChannelsParams
         *
         * @description
         * Type of identifier given in externalChannelIds. Supported type is EXTERNAL_ID_TYPE_SERVICE_PROVIDER (which make externalChannelIds work just like serviceProviderChannelIds) and EXTERNAL_ID_TYPE_CMS which means that externalChannelIds contains CMS IDS for channels.
         *
         * • Optional.
         *
         * @returns {ZosaExternalIdType}
         *
         */
        externalChannelIdType?: ZosaExternalIdType;

        /**
         * @ngdoc property
         * @name ZosaGetChannelsParams#favoriteList
         * @propertyOf ZosaGetChannelsParams
         *
         * @description
         * A favorite list to get channels from. Only one of the parameters category, genre or favoriteList may be specified in the same call to {@link Zosa.getChannels}.
         *
         * • Optional.
         *
         * @returns {ZosaId}
         *
         */
        favoriteList?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaGetChannelsParams#genre
         * @propertyOf ZosaGetChannelsParams
         *
         * @description
         * Genre that will be considered when getting channels. Only one of the parameters category, genre or favoriteList may be specified in the same call to {@link Zosa.getChannels}.
         *
         * • Optional.
         *
         * @returns {ZosaId}
         *
         */
        genre?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaGetChannelsParams#includeHidden
         * @propertyOf ZosaGetChannelsParams
         *
         * @description
         * Include hidden channels in the response. This parameter currently don't work with channels, serviceProviderChannelIds, genre, or favoriteList parameter.
         * Including isHidden in itemFields will set isHidden in the response to indicate if the channel is hidden or not.
         *
         * • Optional.
         * • If not specified, the default value is false.
         *
         * @returns {boolean}
         *
         */
        includeHidden?: boolean;

        /**
         * @ngdoc property
         * @name ZosaGetChannelsParams#onlySubscribed
         * @propertyOf ZosaGetChannelsParams
         *
         * @description
         * Inform about subscription mode.
         *
         * • Optional.
         * • If not specified, the default value is false.
         *
         * @returns {boolean}
         *
         */
        onlySubscribed?: boolean;

        /**
         * @ngdoc property
         * @name ZosaGetChannelsParams#serviceProvider
         * @propertyOf ZosaGetChannelsParams
         *
         * @description
         * ServiceProvider that will be considered when getting channels.
         *
         * • Optional (all service providers will be considered if value is undefined).
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider?: ZosaId | null;

        /**
         * @ngdoc property
         * @name ZosaGetChannelsParams#serviceProviderChannelIds
         * @propertyOf ZosaGetChannelsParams
         *
         * @description
         * List of service provider specific identifiers for the requested channels.
         *
         * This parameter can be used to get channels from ZOSA when the underlying service provider channel identifiers are known by client.
         * Only one of the parameters {@link channels} or {@link serviceProviderChannelIds} may be specified in the same call to {@link Zosa.getChannels}.
         * Only valid if parameter {@link serviceProvider} is specified in the same call to {@link Zosa.getChannels}.
         *
         * • Note: May return success even if request contains invalid channel ids, in which case values in list for invalid content ids will be set to null. If all channel ids are invalid, request will return failure.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        serviceProviderChannelIds?: string[];

    }

    /**
     * @ngdoc interface
     * @name ZosaDvbChannelStreamIds
     *
     * @description
     * DVB IDs for a channel stream (DVB service).
     *
     */
    interface ZosaDvbChannelStreamIds {

        /**
         * @ngdoc property
         * @name ZosaDvbChannelStreamIds#onid
         * @propertyOf ZosaDvbChannelStreamIds
         *
         * @description
         * Original network ID
         * • Mandatory
         */
        onid: number;

        /**
         * @ngdoc property
         * @name ZosaDvbChannelStreamIds#sid
         * @propertyOf ZosaDvbChannelStreamIds
         *
         * @description
         * Service ID
         * • Mandatory
         */
        sid: number;

        /**
         * @ngdoc property
         * @name ZosaDvbChannelStreamIds#tsid
         * @propertyOf ZosaDvbChannelStreamIds
         *
         * @description
         * Transport stream ID
         * • Optional
         */
        tsid: number;

    }

    /**
     * @ngdoc interface
     * @name ZosaGetCustomChannelNumberingParams
     *
     * @description
     * Input parameters for {@link Zosa.getCustomChannelNumbering}.
     *
     */
    interface ZosaGetCustomChannelNumberingParams {

        /**
         * @ngdoc property
         * @name ZosaGetCustomChannelNumberingParams#device
         * @propertyOf ZosaGetCustomChannelNumberingParams
         *
         * @description
         * Device where the custom channel numbering will be fetched from.
         *
         * • Optional.
         * • The current device is used if this is not specified.
         *
         * @returns {ZosaId}
         *
         */
        device?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaGetCustomChannelNumberingParams#serviceProvider
         * @propertyOf ZosaGetCustomChannelNumberingParams
         *
         * @description
         * The serviceProvider that custom channel numbering should be fetched from.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

    }

    /**
     * @ngdoc interface
     * @name ZosaGetCurrentProfileParams
     *
     * @description
     * Input parameters for {@link Zosa.getDevices}.
     *
     */
    interface ZosaGetDevicesParams extends ZosaAbstractGetItemParams<ZosaDeviceItem>, ZosaAbstractGetListParams {

        /**
         * @ngdoc property
         * @name ZosaGetDevicesParams#devices
         * @propertyOf ZosaGetDevicesParams
         *
         * @description
         * List of devices to get. Can be used to get devices by id, or to get other itemFields Leave it unspecified to get devices without identifier restriction.
         *
         * • Optional.
         * • Only one of the parameters devices, deviceTypes, onlyCurrentDevice may be specified in the same call to Zosa.getDevices.
         * • May return success even if array contains invalid IDs, in which case values in list for invalid IDs will be set to null.
         *
         * @returns {ZosaId[]}
         *
         */
        devices?: ZosaId[];

        /**
         * @ngdoc property
         * @name ZosaGetDevicesParams#deviceTypes
         * @propertyOf ZosaGetDevicesParams
         *
         * @description
         * Optional property that allows client to limit which types of devices should be returned.
         * Only devices of the types in the array will be returned.
         * If this parameter is missing or an empty array is given as input, all types of devices (including DEVICE_TYPE_UNKNOWN) will be returned.
         *
         * • Optional.
         * • Note: DEVICE_TYPE_UNKNOWN is not supported in this filter and will be ignored if provided in array.
         * • Only one of the parameters devices, deviceTypes, onlyCurrentDevice may be specified in the same call to Zosa.getDevices.
         *
         * @returns {ZosaDeviceType[]}
         *
         */
        deviceTypes?: ZosaDeviceType[];

        /**
         * @ngdoc property
         * @name ZosaGetDevicesParams#onlyCurrentDevice
         * @propertyOf ZosaGetDevicesParams
         *
         * @description
         * Restricts the request to return the current device only.
         *
         * • Optional.
         * • If not specified, the default value is false.
         * • Only one of the parameters devices, deviceTypes, onlyCurrentDevice may be specified in the same call to Zosa.getDevices.
         * • May not be supported by all service providers.
         *
         * @returns {boolean}
         *
         */
        onlyCurrentDevice?: boolean;

        /**
         * @ngdoc property
         * @name ZosaGetDevicesParams#serviceProvider
         * @propertyOf ZosaGetDevicesParams
         *
         * @description
         * ServiceProvider to perform operation on.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

    }

    /**
     * @ngdoc interface
     * @name ZosaGetFavoriteListsParams
     *
     * @description
     * Input parameters for {@link Zosa.getFavoriteLists}. Use {@link Zosa.getChannels} and {@link Zosa.getVods} using the favorite list to get items for the relevant favorite type.
     *
     */
    interface ZosaGetFavoriteListsParams extends ZosaAbstractGetItemParams<ZosaFavoriteListItem>, ZosaAbstractGetListParams {

        /**
         * @ngdoc property
         * @name ZosaGetFavoriteListsParams#contentType
         * @propertyOf ZosaGetFavoriteListsParams
         *
         * @description
         * For which content type the favorite list should be. Must be {@link ZosaType.ZOSA_TYPE_CHANNEL_ITEM}, {@link ZosaType.ZOSA_TYPE_VOD_ITEM}, or undefined to request all types of favorite lists.
         *
         * • Optional.
         *
         * @returns {ZosaType}
         *
         */
        contentType?: ZosaType;

        /**
         * @ngdoc property
         * @name ZosaGetFavoriteListsParams#serviceProvider
         * @propertyOf ZosaGetFavoriteListsParams
         *
         * @description
         * ServiceProvider to perform operation on.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

    }


    /**
     * @ngdoc interface
     * @name ZosaGetItemsParams
     *
     * @description
     * Input parameters for {@link Zosa.getItems}.
     *
     */
    interface ZosaGetItemsParams {

        /**
         * @ngdoc property
         * @name ZosaGetItemsParams#items
         * @propertyOf ZosaGetItemsParams
         *
         * @description
         * List of items to get.
         *
         * • May return success even if request contains invalid IDs, in which case values in list for invalid IDs will be set to null.
         * • If all provided IDs are invalid, request will return failure.
         *
         * @returns {ZosaId[]}
         *
         */
        items: ZosaId[];

    }

    /**
     * @ngdoc interface
     * @name ZosaSubscriberInfo
     *
     * @description
     * Used to represent subscriber info.
     *
     */
    interface ZosaSubscriberInfo {

        /**
         * @ngdoc property
         * @name ZosaSubscriberInfo#customProps
         * @propertyOf ZosaSubscriberInfo
         *
         * @description
         * Optional array of customized properties.
         *
         * • Not always supported.
         * • If supported, properties will be documented in separate documentation.
         *
         * @returns {ZosaKeyValuePair[]}
         *
         */
        customProps?: ZosaKeyValuePair[];

    }

    /**
     * @ngdoc interface
     * @name ZosaGetMediaPersonsParams
     *
     * @description
     * Input parameters for {@link Zosa.getMediaPersons}.
     *
     */
    interface ZosaGetMediaPersonsParams extends ZosaAbstractGetItemParams<ZosaMediaPersonItem>, ZosaAbstractGetListParams {

        /**
         * @ngdoc property
         * @name ZosaGetMediaPersonsParams#mediaPersons
         * @propertyOf ZosaGetMediaPersonsParams
         *
         * @description
         * MediaPersons to get items for.
         *
         * @returns {ZosaId[]}
         *
         */
        mediaPersons: ZosaId[];

    }

    /**
     * @ngdoc interface
     * @name ZosaGetOtherInstancesParams
     *
     * @description
     * Input parameters for {@link Zosa.getOtherInstances}.
     *
     */
    interface ZosaGetOtherInstancesParams {

        /**
         * @ngdoc property
         * @name ZosaGetOtherInstancesParams#content
         * @propertyOf ZosaGetOtherInstancesParams
         *
         * @description
         * Identifier of the content for which equivalent content is going to be found.
         *
         * @returns {ZosaId}
         *
         */
        content: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaGetOtherInstancesParams#contentTypes
         * @propertyOf ZosaGetOtherInstancesParams
         *
         * @description
         * Optional property that allows client to limit which types of content that should be requested.
         *
         * • Optional.
         *
         * @returns {ZosaType[]}
         *
         */
        contentTypes?: ZosaType[];

        /**
         * @ngdoc property
         * @name ZosaGetOtherInstancesParams#endTime
         * @propertyOf ZosaGetOtherInstancesParams
         *
         * @description
         * End of the time period for which content should be included, as number of milliseconds since 1970-01-01 00:00:00 UTC.
         * Only content running on or ending before this time will be included in the results. If undefined or null, no end time limit will be imposed.
         *
         * • Optional.
         *
         * @returns {ZosaDate}
         *
         */
        endTime?: ZosaDate;

        /**
         * @ngdoc property
         * @name ZosaGetOtherInstancesParams#itemFields
         * @propertyOf ZosaGetOtherInstancesParams
         *
         * @description
         * The fields which will be returned for the equivalent contents.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        itemFields?: string[];

        /**
         * @ngdoc property
         * @name ZosaGetOtherInstancesParams#serviceProvider
         * @propertyOf ZosaGetOtherInstancesParams
         *
         * @description
         * ServiceProvider to get equivalent content from.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

        /**
         * @ngdoc property
         * @name ZosaGetOtherInstancesParams#startTime
         * @propertyOf ZosaGetOtherInstancesParams
         *
         * @description
         * Start of the time period for which content should be included, as number of milliseconds since 1970-01-01 00:00:00 UTC.
         * Only content running on or starting after this time time will be included in the results. If undefined or null, no start time limit will be imposed.
         *
         * • Optional.
         *
         * @returns {ZosaDate}
         *
         */
        startTime?: ZosaDate;

    }

    /**
     * @ngdoc interface
     * @name ZosaGetParentalBlockingStatusParams
     *
     * @description
     * Input parameters for {@link Zosa.getParentalBlockingStatus}.
     *
     */
    interface ZosaGetParentalBlockingStatusParams {

        /**
         * @ngdoc property
         * @name ZosaGetParentalBlockingStatusParams#content
         * @propertyOf ZosaGetParentalBlockingStatusParams
         *
         * @description
         * Content to get parental blocking status for.
         *
         * • Optional.         *
         * • Either content or scenario must be specified. Behavior when supplying both is undefined.
         *
         * @returns {ZosaId}
         *
         */
        content?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaGetParentalBlockingStatusParams#scenario
         * @propertyOf ZosaGetParentalBlockingStatusParams
         *
         * @description
         * Identifier of a GUI scenario to get parental blocking status for.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        scenario?: string;

        /**
         * @ngdoc property
         * @name ZosaGetParentalBlockingStatusParams#scenarioIsAdult
         * @propertyOf ZosaGetParentalBlockingStatusParams
         *
         * @description
         * Indicates if scenario should be treated as adult.
         *
         * • Optional (default false).
         *
         * @returns {boolean}
         *
         */
        scenarioIsAdult?: boolean;

    }

    /**
     * @ngdoc interface
     * @name ZosaGetParentalBlockingStatusResponse
     *
     * @description
     * Used in the response to {@link Zosa.getParentalBlockingStatus} for success event.
     *
     */
    interface ZosaGetParentalBlockingStatusResponse {

        /**
         * @ngdoc property
         * @name ZosaGetParentalBlockingStatusResponse#isBlocked
         * @propertyOf ZosaGetParentalBlockingStatusResponse
         *
         * @description
         * Blocking status of the content or GUI scenario.
         *
         * @returns {boolean}
         *
         */
        isBlocked: boolean;

        /**
         * @ngdoc property
         * @name ZosaGetParentalBlockingStatusResponse#avsSessionTime
         * @propertyOf ZosaGetParentalBlockingStatusResponse
         *
         * @description
         * returns max-length of the AVS session [sec] (default:30min)
         *
         * @returns {number}
         *
         */
        avsSessionTime?: number;

        /**
         * @ngdoc property
         * @name ZosaGetParentalBlockingStatusResponse#avsSessionRemainingTime
         * @propertyOf ZosaGetParentalBlockingStatusResponse
         *
         * @description
         *  returns remaining time of the AVS session [sec] ()
         *
         * @returns {number}
         *
         */
        avsSessionRemainingTime?: number;
    }

    /**
     * @ngdoc interface
     * @name ZosaGetParentRecordingsParams
     *
     * @description
     * Input parameters for {@link Zosa.getParentRecordings}.
     *
     */
    interface ZosaGetParentRecordingsParams extends ZosaAbstractGetItemParams<ZosaParentRecordingItem> {

        /**
         * @ngdoc property
         * @name ZosaGetParentRecordingsParams#serviceProvider
         * @propertyOf ZosaGetParentRecordingsParams
         *
         * @description
         * ServiceProvider to get the parent recordings from.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

    }

    /**
     * @ngdoc interface
     * @name ZosaGetProgramsParams
     *
     * @description
     * Input parameters for {@link Zosa.getPrograms}.
     *
     * Note: Only one of the parameters {@link channel}, {@link programs}, {@link serviceProviderProgramIds} or {@link genre} may be specified in the same call to {@link Zosa.getPrograms}.
     *
     */
    interface ZosaGetProgramsParams extends ZosaAbstractGetItemParams<ZosaProgramItem>, ZosaAbstractGetListParams {

        /**
         * @ngdoc property
         * @name ZosaGetProgramsParams#channel
         * @propertyOf ZosaGetProgramsParams
         *
         * @description
         * The channel to get programs from. May either be a ChannelId or a ZosaItem channel.
         * If no channel is supplied, programs for all channels will be retrieved. In which case, care should be taken to limit the amount of retrieved programs by giving a reasonably short time interval.
         * Only one of the parameters channel, programs, serviceProviderProgramIds, externalProgramIds, genres or genre may be specified in the same call to {@link Zosa.getPrograms}.
         *
         * • Optional.
         *
         * @returns {ZosaId}
         *
         */
        channel?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaGetProgramsParams#dvbEventId 
         * @propertyOf ZosaGetProgramsParams
         *
         * @description
         * DVB EIT event ID of a program This parameter together with channel parameter can be used to get a program from ZOSA when the DVB event ID of the program is known by the client.
         * • Optional
         * • May not be supported by all service providers
         * • May not be supported for all channels.
         * 
         * When this parameter is specified:
         * • channel parameter must also be specified.
         * • programs, serviceProviderProgramIds, externalProgramIds, genres or genre must not be specified.
         * • startTime, endTime, genre, sortOrder, offset and limit parameters will be ignored.
         *
         * @returns {number}
         *
         */
        dvbEventId?: number;

        /**
         * @ngdoc property
         * @name ZosaGetProgramsParams#endTime
         * @propertyOf ZosaGetProgramsParams
         *
         * @description
         * End of the time period for which programs should be included, as number of milliseconds since 1970-01-01 00:00:00 UTC.
         * Only programs running on or ending before this time will be included in the results. If undefined or null, no end time limit will be imposed.
         * Ignored if any of the parameters {@link programs} or {@link serviceProviderProgramIds} are specified in the same call to {@link Zosa.getPrograms}.
         *
         * • Optional.
         *
         * @returns {ZosaDate}
         *
         */
        endTime?: ZosaDate;

        /**
         * @ngdoc property
         * @name ZosaGetProgramsParams#externalProgramIds
         * @propertyOf ZosaGetProgramsParams
         *
         * @description
         * List of identifiers specific to a third party for the requested programs.
         * This parameter can be used to get programs from ZOSA when the underlying third party program identifiers are known by client.
         * Only one of the parameters channel, programs, serviceProviderProgramIds, externalProgramIds, genres or genre may be specified in the same call to {@link Zosa.getPrograms}.
         * Only valid if parameters serviceProvider and externalProgramIdType are specified in the same call to {@link Zosa.getPrograms} If specified, startTime, endTime, channel, genre, and sortOrder parameters will be ignored.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        externalProgramIds?: string[];

        /**
         * @ngdoc property
         * @name ZosaGetProgramsParams#externalProgramIdType
         * @propertyOf ZosaGetProgramsParams
         *
         * @description
         * Type of identifier given in externalProgramIds.
         * Supported type is EXTERNAL_ID_TYPE_SERVICE_PROVIDER (which make externalProgramIds work just like serviceProviderProgramIds) and EXTERNAL_ID_TYPE_CMS which means that externalProgramIds contains CMS IDS for programs.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        externalProgramIdType?: ZosaExternalIdType,

        /**
         * @ngdoc property
         * @name ZosaGetProgramsParams#programs
         * @propertyOf ZosaGetProgramsParams
         *
         * @description
         * List of programs to get. Can be used to get programs by id, or to get other itemFields If specified, startTime, endTime, channel, genre, and sortOrder parameters will be ignored.
         * Only one of the parameters channel, programs, externalProgramIds, serviceProviderProgramIds, genres or genre may be specified in the same call to {@link Zosa#getPrograms}.
         *
         * Note: May return success even if request contains invalid program ids, in which case values in list for invalid content ids will be set to null. If all provided ids are invalid, request will return failure.
         *
         * • Optional.
         *
         * @returns {ZosaId[]}
         *
         */
        programs?: ZosaId[];

        /**
         * @ngdoc property
         * @name ZosaGetProgramsParams#serviceProvider
         * @propertyOf ZosaGetProfilesParamsZosaGetProgramsParams
         *
         * @description
         * ServiceProvider that will be considered when getting programs.
         *
         * • Optional (all service providers will be considered if value is undefined).
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaGetProgramsParams#serviceProviderProgramIds
         * @propertyOf ZosaGetProgramsParams
         *
         * @description
         * List of service provider specific identifiers for the requested programs.
         *
         * This parameter can be used to get programs from ZOSA when the underlying service provider program identifiers are known by client.
         * Only one of the parameters channel, programs, externalProgramIds, serviceProviderProgramIds, genres or genre may be specified in the same call to Zosa.getPrograms.
         * Only valid if parameter serviceProvider is specified in the same call to Zosa.getPrograms If specified, startTime, endTime, channel, genre, and sortOrder parameters will be ignored.
         *
         * Note: May return success even if request contains invalid program ids, in which case values in list for invalid content ids will be set to null. If all provided ids are invalid, request will return failure.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        serviceProviderProgramIds?: string[];

        /**
         * @ngdoc property
         * @name ZosaGetProgramsParams#startTime
         * @propertyOf ZosaGetProgramsParams
         *
         * @description
         * Start of the time period for which programs should be included, as number of milliseconds since 1970-01-01 00:00:00 UTC.
         * Only programs running on or starting after this time time will be included in the results. If undefined or null, no start time limit will be imposed.
         * Ignored if any of the parameters {@link programs} or {@link serviceProviderProgramIds} are specified in the same call to {@link Zosa.getPrograms}.
         *
         * • Optional.
         *
         * @returns {ZosaDate}
         *
         */
        startTime?: ZosaDate;

    }

    /**
     * @ngdoc interface
     * @name ZosaProgramsUpdatedEvent
     *
     * @description
     * Programs updated event. This event is fired by a {@link Zosa.ZosaProgramsUpdatedObserver} whenever programs in one or more of the observed regions has been updated.
     * When received, any programs in client data structures belonging to any of the updated regions shall be considered outdated. if needed, it is the responsibility of the client to refresh outdated programs by calling {@link Zosa.getPrograms()}.
     *
     */
    // interface ZosaProgramsUpdatedEvent {

    //     /**
    //      * @ngdoc property
    //      * @name ZosaProgramsUpdatedEvent#recordingId
    //      * @propertyOf ZosaProgramsUpdatedEvent
    //      *
    //      * @description
    //      * Regions where programs have been updated.
    //      *
    //      * @returns {ZosaChannelProgramsRegion[]}
    //      *
    //      */
    //     updatedRegions: ZosaChannelProgramsRegion[];

    // }

    type ZosaProgramsUpdatedEvent = ZosaChannelProgramsRegion[];

    /**
     * @ngdoc interface
     * @name ZosaProgramsUpdatedObserver
     *
     * @description
     * Represents a programs updated observer.
     *
     */
    interface ZosaProgramsUpdatedObserver {

        /**
         * @ngdoc method
         * @name destroy
         *
         * @description
         * This function must be called when the observer has finished its purpose to release potential resources and terminate certain server communication.
         *
         * @param {ZosaDestroyProgramsUpdatedObserverParams} params
         *
         * @returns {ZosaRequest<void>} {@link ZosaRequest}
         *
         */
        destroy(params?: ZosaDestroyProgramsUpdatedObserverParams): ZosaRequest<void>;

        /**
         * @ngdoc method
         * @name setOnProgramsUpdated
         *
         * @description
         * Register a callback function that will be called whenever programs have been updated. When received, any programs in client data structures belonging to any of the affected regions shall be considered as outdated.
         * It is the responsibility of the client to refresh outdated programs by calling Zosa.getPrograms() if needed.
         *
         */
        setOnProgramsUpdated(func: programsUpdatedEventFunction): void;

    }

    /**
     * @ngdoc interface
     * @name ZosaGetRecordingConflictResponse
     *
     * @description
     * One group of recordings in conflict with each other for a conflict situation.
     * Output from {@link Zosa.getNextRecordingConflict}
     *
     */
    interface ZosaGetRecordingConflictResponse {

        /**
         * @ngdoc property
         * @name ZosaGetRecordingConflictResponse#conflictGroup
         * @propertyOf ZosaGetRecordingConflictResponse
         *
         * @description
         * A conflict resolution group.
         *
         * @returns {ZosaRecordingConflictResolutionGroup}
         *
         */
        conflictGroup: ZosaRecordingConflictResolutionGroup;

        /**
         * @ngdoc property
         * @name ZosaGetRecordingConflictResponse#conflidvbConflictTypectType
         * @propertyOf ZosaGetRecordingConflictResponse
         *
         * @description
         * The DVB conflict type.
         * 
         * • Only provided if DVB conflict has occured.
         *
         * @returns {ZosaRecordingConflictResolutionGroup}
         *
         */
        dvbConflictType: ZosaDvbConflictType;

        /**
         * @ngdoc property
         * @name ZosaGetRecordingConflictResponse#groupCount
         * @propertyOf ZosaGetRecordingConflictResponse
         *
         * @description
         * The number of conflict groups that exist in the current conflict situation. At least 1.
         *
         * @returns {number}
         *
         */
        groupCount: number;

        /**
         * @ngdoc property
         * @name ZosaGetRecordingConflictResponse#groupIndex
         * @propertyOf ZosaGetRecordingConflictResponse
         *
         * @description
         * A zero based index for which group in the set of conflict groups this is.
         *
         * @returns {number}
         *
         */
        groupIndex: number;

    }

    /**
     * @ngdoc interface
     * @name ZosaGetRecordingSpaceInfoParams
     *
     * @description
     * Input parameters for {@link Zosa#getRecordingSpaceInfo}.
     *
     */
    interface ZosaGetRecordingSpaceInfoParams {

        /**
         * @ngdoc property
         * @name ZosaGetRecordingSpaceInfoParams#devices
         * @propertyOf ZosaGetRecordingSpaceInfoParams
         *
         * @description
         * This parameter can be used to get recording space information for a list of recording capable devices. Only devices having the pvrSupported field are supported.
         * Leave it unspecified to get recording spaces without identifier restriction.
         *
         * • Optional.
         *
         * @returns {ZosaId[]}
         *
         */
        devices?: ZosaId[];

        /**
         * @ngdoc property
         * @name ZosaGetRecordingSpaceInfoParams#recordingSpaceType
         * @propertyOf ZosaGetRecordingSpaceInfoParams
         *
         * @description
         * Type of recordingSpace to get recordingSpaceInfo from.
         *
         * @returns {ZosaRecordingSpaceType[]}
         *
         */
        recordingSpaceType: ZosaRecordingSpaceType[];

        /**
         * @ngdoc property
         * @name ZosaGetRecordingSpaceInfoParams#serviceProvider
         * @propertyOf ZosaGetRecordingSpaceInfoParams
         *
         * @description
         * ServiceProvider to perform operation on.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

    }

    /**
     * @ngdoc interface
     * @name ZosaGetRecordingsParams
     *
     * @description
     * Input parameters for {@link Zosa.getRecordings}.
     *
     */
    interface ZosaGetRecordingsParams extends ZosaAbstractGetItemParams<ZosaRecordingItem>, ZosaAbstractGetListParams {

        /**
         * @ngdoc property
         * @name ZosaGetRecordingsParams#devices
         * @propertyOf ZosaGetRecordingsParams
         *
         * @description
         * List of devices to get recordings for. Can be used to get recordings for other devices than the current one. Leave it unspecified to get recordings for only the current device.
         *
         * • Optional.
         *
         * @returns {ZosaId[]}
         *
         */
        devices?: ZosaId[];

        /**
         * @ngdoc property
         * @name ZosaGetRecordingsParams#externalRecordingIds
         * @propertyOf ZosaGetRecordingsParams
         *
         * @description
         * List of external identifiers for the requested recordings.
         * This parameter can be used to get recordings from ZOSA when the underlying external recording identifiers are known by client.
         * Only one of the parameters recordings or externalRecordingIds may be specified in the same call to {@link Zosa.getRecordings}.
         * Only valid if parameters serviceProvider and externalRecordingIdType is specified in the same call to {@link Zosa.getRecordings}.
         * 
         * Note: May return success even if request contains invalid IDs, in which case values in list for invalid content ids will be set to null. If all recording IDs are invalid, request will return failure.
         *
         * • Optional.
         *
         * @returns {string[]}
         *
         */
        externalRecordingIds?: string[];

        /**
         * @ngdoc property
         * @name ZosaGetRecordingsParams#externalRecordingIdType
         * @propertyOf ZosaGetRecordingsParams
         *
         * @description
         * Type of identifier given in externalRecordingIds. Supported type is EXTERNAL_ID_TYPE_SERVICE_PROVIDER.
         *
         * • Optional but required when externalRecordingIds is provided.
         *
         * @returns {ZosaExternalIdType}
         *
         */
        externalRecordingIdType?: ZosaExternalIdType;

        /**
         * @ngdoc property
         * @name ZosaGetRecordingsParams#parentRecording
         * @propertyOf ZosaGetRecordingsParams
         *
         * @description
         * The parent recording. Used to get recordings that have specified parent.
         * Leave it unspecified to get recordings without parent restriction.
         *
         * • Optional.
         *
         * @returns {ZosaId}
         *
         */
        parentRecording?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaGetRecordingsParams#recordings
         * @propertyOf ZosaGetRecordingsParams
         *
         * @description
         * List of recordings to get. Can be used to get recordings by id, or to get other itemFields Leave it unspecified to get recordings without identifier restriction.
         *
         * • Optional.
         *
         * @returns {ZosaId[]}
         *
         */
        recordings?: ZosaId[];

        /**
         * @ngdoc property
         * @name ZosaGetRecordingsParams#serviceProvider
         * @propertyOf ZosaGetRecordingsParams
         *
         * @description
         * ServiceProvider to perform operation on.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

        /**
         * @ngdoc property
         * @name ZosaGetRecordingsParams#state
         * @propertyOf ZosaGetRecordingsParams
         *
         * @description
         * States of recordings. Used to get recordings that have specified state.
         * It is state mask (bitwise OR of {@link ZosaRecordingState} values). Leave it unspecified or specify a value of 0 ({@link Zosa.RECORDING_STATE_NONE}) to get recordings without state restriction.
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        state?: number;

    }

    /**
     * @ngdoc interface
     * @name ZosaGetServiceProvidersParams
     *
     * @description
     * Input parameters for {@link Zosa.getServiceProviders}.
     *
     */
    interface ZosaGetServiceProvidersParams extends ZosaAbstractGetItemParams<ZosaServiceProviderItem>, ZosaAbstractGetListParams {
    }

    /**
     * @ngdoc interface
     * @name ZosaGetSubscriberInfoParams
     *
     * @description
     * Input parameters for {@link Zosa.getSubscriberInfo}.
     *
     */
    interface ZosaGetSubscriberInfoParams extends ZosaAbstractGetItemParams {

        /**
         * @ngdoc property
         * @name ZosaGetSubscriberInfoParams#serviceProvider
         * @propertyOf ZosaGetSubscriberInfoParams
         *
         * @description
         * ServiceProvider to get value-added services from.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

    }

    /**
     * @ngdoc interface
     * @name ZosaGetVasItemsParams
     *
     * @description
     * Input parameters for {@link Zosa.getVasItems}.
     *
     */
    interface ZosaGetVasItemsParams extends ZosaAbstractGetItemParams<ZosaVasItem>, ZosaAbstractGetListParams {

        /**
         * @ngdoc property
         * @name ZosaGetVasItemsParams#category
         * @propertyOf ZosaGetVasItemsParams
         *
         * @description
         * The category that the value-added services belong to.
         *
         * • Optional.
         * Note: The parameters {@link this.vasItems}, {@link this.category}, and {@link this.externalVasIds} are mutually exclusive and only one of them may be specified in the same call to {@link Zosa.getVasItems}.
         *
         * @returns {ZosaId}
         *
         */
        category?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaGetVasItemsParams#externalVasIds
         * @propertyOf ZosaGetVasItemsParams
         *
         * @description
         * List of identifiers specific to a third party for the requested value-added services. This parameter can be used to get value-added services from ZOSA when the underlying third party VAS identifiers are known by client.
         *
         * • Optional.
         * Note: The parameters {@link this.vasItems}, {@link this.category}, and {@link this.externalVasIds} are mutually exclusive and only one of them may be specified in the same call to {@link Zosa.getVasItems}.
         *
         * @returns {string[]}
         *
         */
        externalVasIds?: string[];

        /**
         * @ngdoc property
         * @name ZosaGetVasItemsParams#externalVasIdType
         * @propertyOf ZosaGetVasItemsParams
         *
         * @description
         * Type of identifier given in externalVasIds.
         * Supported type is EXTERNAL_ID_TYPE_SERVICE_PROVIDER (which make externalVasIds work just like serviceProviderVasIds) and EXTERNAL_ID_TYPE_CMS which means that externalVasIds contains CMS IDS for Vas items.
         * Supported types are EXTERNAL_ID_TYPE_SERVICE_PROVIDER and EXTERNAL_ID_TYPE_CMS;
         *
         * • Optional.
         *
         * @returns {ZosaExternalIdType}
         *
         */
        externalVasIdType?: ZosaExternalIdType;

        /**
         * @ngdoc property
         * @name ZosaGetVasItemsParams#serviceProvider
         * @propertyOf ZosaGetVasItemsParams
         *
         * @description
         * ServiceProvider to get value-added services from.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

        /**
         * @ngdoc property
         * @name ZosaGetVasItemsParams#vasItems
         * @propertyOf ZosaGetVasItemsParams
         *
         * @description
         * List of value-added services to get.
         *
         * • Optional.
         * Note: The parameters {@link this.vasItems}, {@link this.category}, and {@link this.externalVasIds} are mutually exclusive and only one of them may be specified in the same call to {@link Zosa.getVasItems}.
         *
         * @returns {ZosaId[]}
         *
         */
        vasItems?: ZosaId[];

    }

    /**
     * @ngdoc interface
     * @name ZosaGetVodsParams
     *
     * @description
     * Input parameters for {@link Zosa.getVods}.
     * Only one of the parameters category, genre, vods, serviceProviderVodIds, externalVodIds, parentVod or favoriteList may be specified in the same call to {@link Zosa.getVods}.
     *
     */
    interface ZosaGetVodsParams extends ZosaAbstractGetItemParams<ZosaVodItem>, ZosaAbstractGetListParams {

    }

    /**
     * @ngdoc interface
     * @name ZosaImage
     *
     * @description
     * Zosa image.
     *
     */
    interface ZosaImage {

        /**
         * @ngdoc property
         * @name ZosaImage#height
         * @propertyOf ZosaImage
         *
         * @description
         * Height of image in pixels.
         *
         * • Sometimes provided (considered as unknown if undefined).
         *
         * @returns {number}
         *
         */
        height?: number;

        /**
         * @ngdoc property
         * @name ZosaImage#imageType
         * @propertyOf ZosaImage
         *
         * @description
         * Image type, which gives a hint of the purpose of the image.
         *
         * • Sometimes provided (considered as unknown if undefined).
         *
         * @returns {ZosaImageType}
         *
         */
        imageType?: ZosaImageType;

        /**
         * @ngdoc property
         * @name ZosaImage#serviceProviderImageType
         * @propertyOf ZosaImage
         *
         * @description
         * Pass-through value of image type identifier from the service provider.
         * Note: Using this field is not service provider (and data ingestion) independent, and may require updates of user code if the definition of the type changes.
         *
         * • Sometimes provided (considered unknown if undefined or null).
         *
         * @returns {string}
         *
         */
        serviceProviderImageType: string;

        /**
         * @ngdoc property
         * @name ZosaImage#url
         * @propertyOf ZosaImage
         *
         * @description
         * Url to image.
         *
         * • Always provided.
         *
         * @returns {string}
         *
         */
        url: string;

        /**
         * @ngdoc property
         * @name ZosaImage#width
         * @propertyOf ZosaImage
         *
         * @description
         * Width of image in pixels.
         *
         * • Sometimes provided (considered as unknown if undefined).
         *
         * @returns {number}
         *
         */
        width?: number;

    }

    interface ZosaRecordingImage {

        /**
         * @ngdoc property
         * @name ZosaImage#height
         * @propertyOf ZosaRecordingImage
         *
         * @description
         * Height of image in pixels.
         *
         * @returns {number}
         *
         */
        height: number;

        /**
         * @ngdoc property
         * @name ZosaImage#imageType
         * @propertyOf ZosaRecordingImage
         *
         * @description
         * The type is made available in ZosaImage (the serviceProviderImageType field).
         *
         * @returns {number}
         *
         */
        imageType: number;

        /**
         * @ngdoc property
         * @name ZosaImage#width
         * @propertyOf ZosaRecordingImage
         *
         * @description
         * Width of image in pixels.
         *
         * @returns {number}
         *
         */
        width: number;

    }


    /**
     * @ngdoc interface
     * @name ZosaItem
     *
     * @description
     * Represents a viewable and potentially playable zosa object.
     *
     */
    interface ZosaItem {

        /**
         * @ngdoc property
         * @name ZosaItem#icon
         * @propertyOf ZosaItem
         *
         * @description
         * Icon for item, default graphical representation of item.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {ZosaImage}
         *
         */
        icon?: ZosaImage;

        /**
         * @ngdoc property
         * @name ZosaItem#title
         * @propertyOf ZosaItem
         *
         * @description
         * Title of item, default textual representation of item. e.g. title of program, channel, vod, value-added service (VAS), etc.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {string}
         *
         */
        title?: string | null;

        /**
         * @ngdoc property
         * @name ZosaItem#zosaId
         * @propertyOf ZosaItem
         *
         * @description
         * The zosa identifier (unique) for the item. The duration of the validity for the ID may vary between situations.
         *
         * Note: The value of zosaId should be treated as an opaque string. Do not make any assumptions of the format of this string.
         *
         * • Potentially only valid for a session and should not be stored.
         * • Always provided.
         *
         * @returns {ZosaId}
         *
         */
        zosaId: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaItem#zosaType
         * @propertyOf ZosaItem
         *
         * @description
         * The zosa type for the item.
         *
         * • Always provided.
         *
         * @returns {ZosaType}
         *
         */
        zosaType: ZosaType;

    }

    /**
     * @ngdoc interface
     * @name ZosaKeyValuePair
     *
     * @description
     * Used to represent a generic tuple.
     *
     */
    interface ZosaKeyValuePair {

        /**
         * @ngdoc property
         * @name ZosaKeyValuePair#key
         * @propertyOf ZosaKeyValuePair
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
         * @name ZosaKeyValuePair#value
         * @propertyOf ZosaKeyValuePair
         *
         * @description
         * Value.
         *
         * @returns {string}
         *
         */
        value: string;

    }

    /**
     * @ngdoc interface
     * @name ZosaList
     *
     * @description
     * Represents a subset (page) of a total set of items.
     *
     */
    interface ZosaList<T> {

        /**
         * @ngdoc property
         * @name ZosaList#icon
         * @propertyOf ZosaList
         *
         * @description
         * Elements of the list.
         *
         * @returns {T[]}
         *
         */
        elements: T[];

        /**
         * @ngdoc property
         * @name ZosaList#offset
         * @propertyOf ZosaList
         *
         * @description
         * The offset into the total data set. Starting from index 0.
         *
         * • The value will be null if the offset into the total data set is unknown.
         *
         * @returns {number}
         *
         * See: {@link ZosaAbstractGetListParams}
         *
         */
        offset?: number;

        /**
         * @ngdoc property
         * @name ZosaList#total
         * @propertyOf ZosaList
         *
         * @description
         * Total number of elements in the data set, i.e NOT the number of elements on this page.
         *
         * • The value will be null if the number of items in the total data set is unknown.
         *
         * @returns {number}
         *
         * See: {@link ZosaAbstractGetListParams}
         *
         */
        total?: number;

    }

    /**
     * @ngdoc interface
     * @name ZosaLoginParams
     *
     * @description
     * Input parameters for {@link Zosa.login}.
     *
     */
    interface ZosaLoginParams {

        /**
         * @ngdoc property
         * @name ZosaLoginParams#password
         * @propertyOf ZosaLoginParams
         *
         * @description
         * Password to use with zosa server.
         *
         * • Optional (default value is used if undefined).
         *
         * @returns {string}
         *
         */
        password?: string;

        /**
         * @ngdoc property
         * @name ZosaLoginParams#url
         * @propertyOf ZosaLoginParams
         *
         * @description
         * Url to zosa server.
         * Will default to "ws://zosa:8001" if not provided. If you are running a debug build and connect from your PC the url param should be "ws://<IP of STB>:8001".
         *
         * • Optional (default value is used if undefined).
         *
         * @returns {string}
         *
         */
        url?: string;

        /**
         * @ngdoc property
         * @name ZosaLoginParams#username
         * @propertyOf ZosaLoginParams
         *
         * @description
         * Username to use with zosa server.
         *
         * • Optional (default value is used if undefined).
         *
         * @returns {string}
         *
         */
        username?: string;

    }

    /**
     * @ngdoc interface
     * @name ZosaMediaPersonItem
     *
     * @description
     * Represents a media person.
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_MEDIA_PERSON_ITEM}
     *
     */
    interface ZosaMediaPersonItem extends ZosaItem {

        /**
         * @ngdoc property
         * @name ZosaMediaPersonItem#cmsId
         * @propertyOf ZosaMediaPersonItem
         *
         * @description
         * Content management system id.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {string}
         *
         */
        cmsId?: string;

        /**
         * @ngdoc property
         * @name ZosaMediaPersonItem#images
         * @propertyOf ZosaMediaPersonItem
         *
         * @description
         * Images related to the person.
         *
         * • Provided if requested in itemFields (field value may be null).
         *
         * @returns {ZosaImage[]}
         *
         */
        images?: ZosaImage[];

    }

    /**
     * @ngdoc interface
     * @name ZosaMessageEvent
     *
     * @description
     * Zosa message event.
     *
     */
    interface ZosaMessageEvent {

        /**
         * @ngdoc property
         * @name ZosaMessageEvent#language
         * @propertyOf ZosaMessageEvent
         *
         * @description
         * Reminder that it is time for.
         *
         * @returns {ZosaMessageItem}
         *
         */
        message: ZosaMessageItem;

    }

    /**
     * @ngdoc interface
     * @name ZosaMessageItem
     *
     * @description
     * Message to user.
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_MESSAGE_ITEM}
     *
     */
    interface ZosaMessageItem extends ZosaItem {

        /**
         * @ngdoc property
         * @name ZosaMessageItem#body
         * @propertyOf ZosaMessageItem
         *
         * @description
         * Body of the message.
         *
         * @returns {string}
         *
         */
        body: string;

    }

    /**
     * @ngdoc interface
     * @name ZosaParentalBlockingChangedEvent
     *
     * @description
     * Zosa blocking status changed event. This event is fired when parental control blocking status has changed.
     * When received, client must reload parental blocking status for all items and GUI contexts where up-to-date parental control blocking status is needed.
     * 
     * The event can be triggered in many situations such as:
     * • Some content has been unblocked by a call to the {@link Zosa.parentalUnblock} function.
     * • Something that has been unblocked time outs and becomes blocked again.
     * • During playback, the STB parental control management detects that a live TV program has too high rating and triggers a UI dialog and program gets unblocked.
     *
     */
    interface ZosaParentalBlockingChangedEvent {

    }

    /**
     * @ngdoc interface
     * @name ZosaParentalUnblockParams
     *
     * @description
     * Input parameters for {@link Zosa#parentalUnblock}.
     *
     */
    interface ZosaParentalUnblockParams {

        /**
         * @ngdoc property
         * @name ZosaParentalUnblockParams#content
         * @propertyOf ZosaParentalUnblockParams
         *
         * @description
         * Content to be unblocked.
         *
         * • Optional.
         * • Note: Live broadcast content shall not be unblocked using this function. Live broadcast content may get parental rating information from multiple sources and information may be missing or changed dynamically.
         *         Unblocking of live broadcast content is best handled by the STB parental control management module, which during playback, automatically will trigger unblocking UI dialog requests when needed.
         * • Either content or scenario must be specified. Behavior when supplying both is undefined.
         *
         * @returns {ZosaId}
         *
         */
        content?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaParentalUnblockParams#password
         * @propertyOf ZosaParentalUnblockParams
         *
         * @description
         * A password (PIN code) to be used to verify that the end user is authorized to unblock the specified content or scenario. To be used when GUI already got a password from the end user.
         *
         * • Optional.
         * • If this parameter is specified, system will not trigger any user input dialogs itself and an error response will indicate if the password was invalid.
         * • If this parameter is omitted, the system may trigger user input dialogs itself.
         *
         * @returns {string}
         *
         */
        password?: string;

        /**
         * @ngdoc property
         * @name ZosaParentalUnblockParams#scenario
         * @propertyOf ZosaParentalUnblockParams
         *
         * @description
         * Identifier of a GUI scenario to be unblocked.
         *
         * • Optional.
         * • Either content or scenario must be specified. Behavior when supplying both is undefined.
         *
         * @returns {string}
         *
         */
        scenario?: string;

        /**
         * @ngdoc property
         * @name ZosaParentalUnblockParams#scenarioIsAdult
         * @propertyOf ZosaParentalUnblockParams
         *
         * @description
         * Indicates if scenario should be treated as adult when authorizing unblocking.
         *
         * • Optional (default false).
         *
         * @returns {boolean}
         *
         */
        scenarioIsAdult?: boolean;

        /**
         * @ngdoc property
         * @name ZosaParentalUnblockParams#timeout
         * @propertyOf ZosaParentalUnblockParams
         *
         * @description
         * If specified, unblocking will be automatically reset after this number of seconds.
         *
         * • Optional, default no timeout.
         *
         * @returns {number}
         *
         */
        timeout?: number;

    }

    /**
     * @ngdoc interface
     * @name ZosaParentalUnblockResponse
     *
     * @description
     * Used in the response to {@link Zosa.parentalUnblock} for success event.
     *
     */
    interface ZosaParentalUnblockResponse {

        /**
         * @ngdoc property
         * @name ZosaParentalUnblockResponse#isBlocked
         * @propertyOf ZosaParentalUnblockResponse
         *
         * @description
         * Blocking status of the content or GUI scenario.
         *
         * • Only provided when unblockingPending is false.
         *
         * @returns {boolean}
         *
         */
        isBlocked?: boolean;

        /**
         * @ngdoc property
         * @name ZosaParentalUnblockResponse#unblockingPending
         * @propertyOf ZosaParentalUnblockResponse
         *
         * @description
         * Indicates if an unblocking user dialog sequence was started by the request.
         * When true, client can use {@link Zosa.setOnBlockingChanged} to be notified when blocking status has been changed after dialog sequence has finished.
         * However, note that parental blocking status may not change at all if user enters wrong PIN code.
         *
         * @returns {boolean}
         *
         */
        unblockingPending: boolean;

    }

    /**
     * @ngdoc interface
     * @name ZosaParentRecordingItem
     *
     * @description
     * Represents a recording that is a parent of multiple {@link ZosaRecordingItem}'s. Normally used as an element of a {@link ZosaList} in the response to, e.g. {@link Zosa.getParentRecordings}, in {@link ZosaRequestResponseEvent} for success event.
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_PARENT_RECORDING_ITEM}
     *
     */
    interface ZosaParentRecordingItem extends ZosaItem {

        /**
         * @ngdoc property
         * @name ZosaParentRecordingItem#channelId
         * @propertyOf ZosaParentRecordingItem
         *
         * @description
         * Identifier of the recorded channel ({@link ZosaChannelItem}).
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {ZosaId}
         *
         */
        channelId?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaParentRecordingItem#deleteMode
         * @propertyOf ZosaParentRecordingItem
         *
         * @description
         * The delete mode of the parent recording.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {ZosaRecordingDeleteMode}
         *
         */
        deleteMode?: ZosaRecordingDeleteMode;

        /**
         * @ngdoc property
         * @name ZosaParentRecordingItem#deviceId
         * @propertyOf ZosaParentRecordingItem
         *
         * @description
         * Identifier of the device.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         * • Valid only if the recording's type is {@link Zosa.RECORDING_TYPE_CPVR}.
         * • If this parameter is not specified, the CPVR recording is created on the current device.
         *
         * @returns {string}
         *
         */
        deviceId?: string;

        /**
         * @ngdoc property
         * @name ZosaParentRecordingItem#endMargin
         * @propertyOf ZosaParentRecordingItem
         *
         * @description
         * The time margin in milliseconds after the scheduled end time.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {number}
         *
         */
        endMargin?: number;

        /**
         * @ngdoc property
         * @name ZosaParentRecordingItem#endTime
         * @propertyOf ZosaParentRecordingItem
         *
         * @description
         * End time of each periodic recording. Expressed in number of milliseconds since 1970-01-01 00:00:00 UTC.
         * Not all parts are always effective. Use needed parts of the time according to the recurrence type {@link ZosaParentRecording#recurType}.
         * For example, if the recurrence type is weekly {@link Zosa.RECUR_TYPE_WEEKLY}, you need to get the weekday and hour and minutes of a day.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         * • Valid only if the parent recording is of type {@link Zosa.PARENT_RECORDING_TYPE_PERIODIC}.
         * • Differentiate with {@link ZosaParentRecordingItem#recurEndTime}.
         *
         * @returns {number}
         *
         */
        endTime?: number;


        episodeSelection?: ZosaEpisodeSelection;

        /**
         * @ngdoc property
         * @name ZosaParentRecordingItem#parentType
         * @propertyOf ZosaParentRecordingItem
         *
         * @description
         * Type of this parent recording.
         *
         * • Always provided.
         *
         * @returns {ZosaParentRecordingType}
         *
         */
        parentType: ZosaParentRecordingType;

        /**
         * @ngdoc property
         * @name ZosaParentRecordingItem#recordingType
         * @propertyOf ZosaParentRecordingItem
         *
         * @description
         * Type of the recordings that belong to this parent recording.
         *
         * • Always provided.
         *
         * @returns {ZosaRecordingType}
         *
         */
        recordingType: ZosaRecordingType;

        /**
         * @ngdoc property
         * @name ZosaParentRecordingItem#recurEndTime
         * @propertyOf ZosaParentRecordingItem
         *
         * @description
         * The time when the recurrence ends, expressed in milliseconds.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         * • Valid only if the parent recording is of type {@link Zosa.PARENT_RECORDING_TYPE_PERIODIC} and {@link recurEndStyle} of the parent recording is {@link Zosa.RECUR_END_STYLE_TIME}.
         *
         * @returns {number}
         *
         */
        recurEndTime?: number;

        /**
         * @ngdoc property
         * @name ZosaParentRecordingItem#seriesId
         * @propertyOf ZosaParentRecordingItem
         *
         * @description
         * Number of episodes to retain in case of automatic deletion.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         * • Ignored if the deleteMode is not set to {@link Zosa.RECORDING_DELETE_MODE_RETAIN_EPISODES}.
         *
         * @returns {number}
         *
         */
        retainEpisodesCount?: number;

        /**
         * @ngdoc property
         * @name ZosaParentRecordingItem#source
         * @propertyOf ZosaParentRecordingItem
         *
         * @description
         * Source for the parent recording (DVB, IP, ...).
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {ZosaSource}
         *
         */
        source?: ZosaSource;

        /**
         * @ngdoc property
         * @name ZosaParentRecordingItem#startMargin
         * @propertyOf ZosaParentRecordingItem
         *
         * @description
         * The time margin in milliseconds before the scheduled start time (i.e. {@link startTime}).
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {number}
         *
         */
        startMargin?: number;

        /**
         * @ngdoc property
         * @name ZosaParentRecordingItem#startTime
         * @propertyOf ZosaParentRecordingItem
         *
         * @description
         * Start time of each periodic recording. Expressed in number of milliseconds since 1970-01-01 00:00:00 UTC.
         * Not all parts are always effective. Use needed parts of the time according to the recurrence type recurType.
         * For example, if the recurrence type is weekly {@link Zosa.RECUR_TYPE_WEEKLY}, you need to get the weekday and hour and minutes of a day.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         * • Valid only if the parent recording is of type {@link Zosa.PARENT_RECORDING_TYPE_PERIODIC}.
         *
         * @returns {number}
         *
         */
        startTime?: number;

        /**
         * @ngdoc property
         * @name ZosaParentRecordingItem#videoDefinition
         * @propertyOf ZosaParentRecordingItem
         *
         * @description
         * Video definition of the recording.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {ZosaVideoDefinition}
         *
         */
        videoDefinition?: ZosaVideoDefinition;

    }

    /**
     * @ngdoc interface
     * @name ZosaParticipant
     *
     * @description
     * Represents a participant.
     *
     */
    interface ZosaParticipant {

        /**
         * @ngdoc property
         * @name ZosaParticipant#mediaPersonId
         * @propertyOf ZosaParticipant
         *
         * @description
         * Media person id, which can be used with {@link Zosa.getMediaPersons} to get more information about the participating person.
         *
         * @returns {ZosaId}
         *
         */
        mediaPersonId: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaParticipant#name
         * @propertyOf ZosaParticipant
         *
         * @description
         * Name of participant.
         *
         * @returns {string}
         *
         */
        name: string;

        /**
         * @ngdoc property
         * @name ZosaParticipant#participantType
         * @propertyOf ZosaParticipant
         *
         * @description
         * Type of participant.
         *
         * @returns {ZosaParticipantType}
         *
         */
        participantType: ZosaParticipantType;

    }

    /**
     * @ngdoc object
     * @name ZosaParticipantType
     *
     * @description
     * Possible values of a {@link ZosaMediaPersonItem}'s participantType.
     *
     */
    interface IZosaParticipantType {

        /**
         * @name ZosaParticipantType#PARTICIPANT_TYPE_ACTOR
         * @memberOf ZosaParticipantType
         *
         * @description
         * Participant is an actor.
         *
         */
        PARTICIPANT_TYPE_ACTOR: ZosaParticipantType;

        /**
         * @name ZosaParticipantType#PARTICIPANT_TYPE_DIRECTOR
         * @memberOf ZosaParticipantType
         *
         * @description
         * Participant is a director.
         *
         */
        PARTICIPANT_TYPE_DIRECTOR: ZosaParticipantType;

        /**
         * @name ZosaParticipantType#PARTICIPANT_TYPE_OTHER
         * @memberOf ZosaParticipantType
         *
         * @description
         * Participant type is other than the available ones.
         *
         */
        PARTICIPANT_TYPE_OTHER: ZosaParticipantType;

        /**
         * @name ZosaParticipantType#PARTICIPANT_TYPE_SINGER
         * @memberOf ZosaParticipantType
         *
         * @description
         * Participant is a singer.
         *
         */
        PARTICIPANT_TYPE_SINGER: ZosaParticipantType;

        /**
         * @name ZosaParticipantType#PARTICIPANT_TYPE_WRITER
         * @memberOf ZosaParticipantType
         *
         * @description
         * Participant is a writer.
         *
         */
        PARTICIPANT_TYPE_WRITER: ZosaParticipantType;

    }

    /**
     * @ngdoc object
     * @name ZosaParentRecordingType
     *
     * @description
     * Possible values of a parent recording's type.
     *
     */
    interface IZosaParentRecordingType {

        /**
         * @name ZosaParentRecordingType#PARENT_RECORDING_TYPE_KEYWORD
         * @memberOf ZosaParentRecordingType
         *
         * @description
         * Keyword string match.
         *
         */
        PARENT_RECORDING_TYPE_KEYWORD: ZosaParentRecordingType;

        /**
         * @name ZosaParentRecordingType#PARENT_RECORDING_TYPE_PERIODIC
         * @memberOf ZosaParentRecordingType
         *
         * @description
         * Periodic recording.
         *
         */
        PARENT_RECORDING_TYPE_PERIODIC: ZosaParentRecordingType;

        /**
         * @name ZosaParentRecordingType#PARENT_RECORDING_TYPE_SERIES
         * @memberOf ZosaParentRecordingType
         *
         * @description
         * Series recording.
         *
         */
        PARENT_RECORDING_TYPE_SERIES: ZosaParentRecordingType;

    }

    /**
     * @ngdoc interface
     * @name ZosaPlaybackSession
     *
     * @description
     * Represents a playback session.
     *
     */
    interface ZosaPlaybackSession {

        /**
         * @ngdoc property
         * @name ZosaPlaybackSession#alternativeStreamSelected
         * @propertyOf ZosaPlaybackSession
         *
         * @description
         * Indicates if an alternative stream has been selected.
         *
         * @returns {boolean}
         *
         */
        alternativeStreamSelected?: boolean;

        /**
         * @ngdoc property
         * @name ZosaPlaybackSession#customProps
         * @propertyOf ZosaPlaybackSession
         *
         * @description
         * Custom properties. The set of properties may depend on type of media being played and underlying back-end server technology.
         *
         * @returns {any}
         *
         */
        customProps?: any;

        /**
         * @ngdoc property
         * @name ZosaPlaybackSession#lastPlaybackPosition
         * @propertyOf ZosaPlaybackSession
         *
         * @description
         * Last known playback position (millisecond from start of media). Provided for non-live media, if supported by service provider.
         * Read only (value may be null if not available).
         *
         * @returns {number}
         *
         */
        lastPlaybackPosition?: number;

        /**
         * @ngdoc property
         * @name ZosaPlaybackSession#mediaUrl
         * @propertyOf ZosaPlaybackSession
         *
         * @description
         * Playable URL of media.
         *
         * @returns {string}
         *
         */
        mediaUrl?: string;

        /**
         * @ngdoc property
         * @name ZosaPlaybackSession#selectedStream
         * @propertyOf ZosaPlaybackSession
         *
         * @description
         * The stream that has been selected to be played.
         * 
         * • Only provided when automatic selection of stream has been done, e.g. when creating playback session for a {@link ZosaChannelItem} or a {@link ZosaVodItem}.
         *
         * @returns {ZosaChannelStreamItem}
         *
         */
        selectedStream?: ZosaChannelStreamItem;

        /**
         * @ngdoc property
         * @name ZosaPlaybackSession#selectedStreamReason
         * @propertyOf ZosaPlaybackSession
         *
         * @description
         * Reason for selection of media.
         * 
         * • Only provided when automatic selection of stream has been done, e.g. when creating playback session for a {@link ZosaChannelItem} or a {@link ZosaVodItem}.
         * • Read only (value may be null if not available).
         *
         * @returns {ZosaSelectedStreamReason}
         *
         */
        selectedStreamReason?: ZosaSelectedStreamReason;

        /**
         * @ngdoc method
         * @name destroy
         *
         * @description
         * This function must be called when playback session should be stopped to release potential resources and terminate certain server communication.
         *
         * @param {ZosaPlaybackSessionDestroyParams} params
         *
         * @returns {ZosaRequest<void>} {@link ZosaRequest}
         *
         */
        destroy(params: ZosaPlaybackSessionDestroyParams): ZosaRequest<void>;

        /**
         * @ngdoc method
         * @name setOnStopPlayback
         *
         * @description
         * Callback function that will be called whenever the client must stop the playback.
         * For instance, a server can request that the playback should be stopped when the server limit of number of simultaneous playback sessions of the current user/profile/subscriber has been exceeded.
         *
         * Note: When this callback is received, it is the responsibility of the client to immediately stop the playback.
         *
         */
        setOnStopPlayback(): () => void;

        /**
         * @ngdoc method
         * @name setOnUpdateCur
         *
         * @description
         * Callback function that will be called whenever content usage restrictions information has been updated.
         * It is the responsibility of the client to ensure that the playback of the content follows the updated restrictions.
         *
         */
        setOnUpdateCur(): () => void;

        /**
         * @ngdoc method
         * @name storePlaybackPosition
         *
         * @description
         * Report current playback position (seconds from start of media) to be stored by service provider.
         *
         * @param {ZosaPlaybackSessionStorePlaybackPositionParams} params
         *
         * @returns {ZosaRequest<void>} {@link ZosaRequest}
         *
         */
        storePlaybackPosition(params: ZosaPlaybackSessionStorePlaybackPositionParams): ZosaRequest<void>;

    }

    /**
     * @ngdoc interface
     * @name ZosaPlaybackSessionDestroyParams
     *
     * @description
     * Input parameters for {@link ZosaPlaybackSession.destroy}.
     *
     */
    interface ZosaPlaybackSessionDestroyParams {

    }

    /**
     * @ngdoc interface
     * @name ZosaDestroyProgramsUpdatedObserverParams
     *
     * @description
     * Input parameters for {@link ZosaProgramsUpdatedObserver.destroy}.
     *
     */
    interface ZosaDestroyProgramsUpdatedObserverParams {

    }

    /**
     * @ngdoc interface
     * @name ZosaPlaybackSessionStorePlaybackPositionParams
     *
     * @description
     * Input parameters for {@link ZosaPlaybackSession.storePlaybackPosition}.
     *
     */
    interface ZosaPlaybackSessionStorePlaybackPositionParams {

        /**
         * @ngdoc property
         * @name ZosaPlaybackSessionStorePlaybackPositionParams#position
         * @propertyOf ZosaPlaybackSessionStorePlaybackPositionParams
         *
         * @description
         * Position (milliseconds from start of media) to be stored by service provider.
         *
         * @returns {number}
         *
         */
        position: number;

    }

    /**
     * @ngdoc interface
     * @name ZosaProgramItem
     *
     * @description
     * Profile represents a program.
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_PROGRAM_ITEM}
     *
     */
    interface ZosaProgramItem extends ZosaItem {

        /**
         * @ngdoc property
         * @name ZosaProgramItem#audioTrackInfo
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Contains audio track information including codec, channel, language and supplementary.
         *
         * • Provided if requested in itemFields. (value may be null if unknown or not available).
         *
         * @returns {ZosaAudioTrackInfo[]}
         *
         */
        audioTrackInfo?: ZosaAudioTrackInfo[];

        /**
         * @ngdoc property
         * @name ZosaProgramItem#channelId
         * @propertyOf ZosaProgramItem
         *
         * @description
         * The ZosaId of the channel which the program belongs to.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {ZosaId}
         *
         */
        channelId?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#clientPvrAllowed
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Whether client recording (cPVR) of this program is allowed or not.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {boolean}
         *
         */
        clientPvrAllowed?: boolean;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#clientPvrSupported
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Whether client recording (cPVR) of this program is supported or not.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {boolean}
         *
         */
        clientPvrSupported?: boolean;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#cmsId
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Content management system id.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {string}
         *
         */
        cmsId?: string;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#customProps
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Optional array of customized properties.
         *
         * • Not always supported.
         * • If supported, properties will be documented in separate documentation.
         *
         * @returns {ZosaKeyValuePair[]}
         *
         */
        customProps?: ZosaKeyValuePair[]; // relatedVodIds and tipType

        /**
         * @ngdoc property
         * @name ZosaProgramItem#description
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Description of the program.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {string}
         *
         */
        description?: string;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#duration
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Duration of the program in milliseconds.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {number}
         *
         */
        duration?: number;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#endTime
         * @propertyOf ZosaProgramItem
         *
         * @description
         * End time of program as as number of milliseconds since 1970-01-01 00:00:00 UTC.
         *
         * Note: It is possible that this time is in the past.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         * 
         * Note: In our UI we assume that this value is always set. Without this value you cannot use the ZosaProgramItem properly. A corresponding warning is written and the item is removed from the response.
         *
         * @returns {ZosaDate}
         *
         */
        endTime: ZosaDate;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#episodeName
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Name of episode.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         * • Only available if program is an episode of a series.
         *
         * @returns {string}
         *
         */
        episodeName?: string;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#episodeNumber
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Episode number.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         * • Only available if program is an episode of a series.
         *
         * @returns {number}
         *
         */
        episodeNumber?: number;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#genres
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Genres assigned to the program, e.g. sci-fi, drama.
         *
         * Note: Only zosaId, zosaType, and title are set, use {@lin Zosa.getGenres} by id to get more fields.
         *
         * • Provided if requested in itemFields (field value may be null).
         *
         * @returns {ZosaGenreItem[]}
         *
         */
        genres?: ZosaGenreItem[];

        /**
         * @ngdoc property
         * @name ZosaProgramItem#images
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Array of images for this program.
         *
         * • Provided if requested in itemFields (field value may be null).
         *
         * @returns {ZosaImage[]}
         *
         */
        images?: ZosaImage[];

        /**
         * @ngdoc property
         * @name ZosaProgramItem#instantRestartSupported
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Whether Instant Restart is supported for this program or not.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {boolean}
         *
         */
        instantRestartSupported?: boolean;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#isBlocked
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Parental control blocking status of program. The field indicates if this program is currently blocked by parental control.
         * A program can be blocked either because parental rating of content is not allowed for current user or because it is locked.
         *
         * • Provided if requested in itemFields.
         *
         * @returns {boolean}
         *
         * See: {@link parentalRating}
         * See: {@link isLocked}
         * See: {@link Zosa#parentalUnblock}
         *
         */
        isBlocked?: boolean;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#minViewingAge
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Parental rating minimum required viewing age (years).
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {number}
         *
         */
        minViewingAge?: number;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#parentalRating
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Contains parental rating of program. A larger value indicates a higher rating. The value varies depending on the content rating systems in different countries.
         *
         * • Provided if requested in itemFields.
         *
         * @returns {number}
         *
         */
        parentalRating?: number;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#participants
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Participants of production (cast & crew).
         *
         * • Provided if requested in itemFields (field value may be null).
         *
         * @returns {ZosaParticipant[]}
         *
         */
        participants?: ZosaParticipant[];

        /**
         * @ngdoc property
         * @name ZosaProgramItem#productionRegions
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Contains countries/regions. The values are codes in the ISO 3166-1 alpha-3 standard.
         *
         * • Provided if requested in itemFields (field value may be null).
         *
         * @returns {ZosaRegion[]}
         *
         */
        productionRegions?: ZosaRegion[];

        /**
         * @ngdoc property
         * @name ZosaProgramItem#productionYear
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Year of production.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {number}
         *
         */
        productionYear?: number;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#seasonName
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Name of season.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         * • Only available if program is an episode of a series.
         *
         * @returns {string}
         *
         */
        seasonName?: string;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#seasonNumber
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Season number.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         * • Only available if program is an episode of a series.
         *
         * @returns {number}
         *
         */
        seasonNumber?: number;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#seriesId
         * @propertyOf ZosaProgramItem
         *
         * @description
         * ID of series.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         * • Only available if program is an episode of a series.
         *
         * @returns {ZosaId}
         *
         */
        seriesId?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#seriesName
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Name of series.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         * • Only available if program is an episode of a series.
         *
         * @returns {string}
         *
         */
        seriesName?: string;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#startTime
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Start time of program as as number of milliseconds since 1970-01-01 00:00:00 UTC.
         *
         * Note: It is possible that this time is in the past.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         * 
         * Note: In our UI we assume that this value is always set. Without this value you cannot use the ZosaProgramItem properly. A corresponding warning is written and the item is removed from the response.
         *
         * @returns {ZosaDate}
         *
         */
        startTime: ZosaDate;

        /**
         * @ngdoc property
         * @name ZosaProgramItem#subtitleLanguages
         * @propertyOf ZosaProgramItem
         *
         * @description
         * Language of subtitles. The values are codes in the ISO 639-3 standard.
         *
         * • Provided if requested in itemFields (field value may be null).
         *
         * @returns {string[]}
         *
         */
        subtitleLanguages?: string[];

    }

    /**
     * @ngdoc type
     * @name ZosaRecordingConflictReason
     *
     * @description
     * Possible values of a recording's conflictReason.
     *
     */
    interface IZosaRecordingConflictReason {

        /**
         * @name ZosaRecordingConflictReason#RECORDING_CONFLICT_REASON_BANDWIDTH
         * @memberOf ZosaRecordingConflictReason
         *
         * @description
         * Recording in conflict because of bandwidth limitations. This reason is used to report problems at the time recording is about to start.
         *
         */
        RECORDING_CONFLICT_REASON_BANDWIDTH: ZosaRecordingConflictReason;

        /**
         * @name ZosaRecordingConflictReason#RECORDING_CONFLICT_REASON_PLAYER
         * @memberOf ZosaRecordingConflictReason
         *
         * @description
         * Recording in conflict with playback. This reason is used to report problems at the time recording is about to start.
         * The cause is typically tuner related, e.g., the currently playing broadcast channel is using a tuner resource that the recording needs.
         *
         */
        RECORDING_CONFLICT_REASON_PLAYER: ZosaRecordingConflictReason;

        /**
         * @name ZosaRecordingConflictReason#RECORDING_CONFLICT_REASON_RECORDING
         * @memberOf ZosaRecordingConflictReason
         *
         * @description
         * Recording in conflict with other recordings.
         *
         */
        RECORDING_CONFLICT_REASON_RECORDING: ZosaRecordingConflictReason;

    }

    /**
     * @ngdoc type
     * @name ZosaRecordingFailReason
     *
     * @description
     * Possible values of a {@link ZosaRecordingItem}'s fail reason.
     *
     */
    interface IZosaRecordingFailReason {

        /**
         * @name ZosaRecordingFailReason#RECORDING_FAIL_REASON_ACCESS_DENIED
         * @memberOf ZosaRecordingFailReason
         *
         * @description
         * Recording has failed due to access denied.
         *
         */
        RECORDING_FAIL_REASON_ACCESS_DENIED: ZosaRecordingFailReason;

        /**
         * @name ZosaRecordingFailReason#RECORDING_FAIL_REASON_CONTENT_RESTRICTION
         * @memberOf ZosaRecordingFailReason
         *
         * @description
         * Recording has failed due to content not being recordable.
         *
         */
        RECORDING_FAIL_REASON_CONTENT_RESTRICTION: ZosaRecordingFailReason;

        /**
         * @name ZosaRecordingFailReason#RECORDING_FAIL_REASON_OUT_OF_DISK_SPACE
         * @memberOf ZosaRecordingFailReason
         *
         * @description
         * Recording has failed due to not enough disk space.
         *
         */
        RECORDING_FAIL_REASON_OUT_OF_DISK_SPACE: ZosaRecordingFailReason;

        /**
         * @name ZosaRecordingFailReason#RECORDING_FAIL_REASON_POWER_INTERRUPTION
         * @memberOf ZosaRecordingFailReason
         *
         * @description
         * Recording has failed due to stb power failure during recording.
         *
         */
        RECORDING_FAIL_REASON_POWER_INTERRUPTION: ZosaRecordingFailReason;

        /**
         * @name ZosaRecordingFailReason#RECORDING_FAIL_REASON_SOURCE_UNAVAILABLE
         * @memberOf ZosaRecordingFailReason
         *
         * @description
         * Recording has failed due to signal lost during recording.
         *
         */
        RECORDING_FAIL_REASON_SOURCE_UNAVAILABLE: ZosaRecordingFailReason;

        /**
         * @name ZosaRecordingFailReason#RECORDING_FAIL_REASON_TOO_MANY_RECORDERS
         * @memberOf ZosaRecordingFailReason
         *
         * @description
         * Recording has failed due to conflict (too many parallel recordings).
         *
         */
        RECORDING_FAIL_REASON_TOO_MANY_RECORDERS: ZosaRecordingFailReason;

        /**
         * @name ZosaRecordingFailReason#RECORDING_FAIL_REASON_UNKNOWN
         * @memberOf ZosaRecordingFailReason
         *
         * @description
         * Recording has failed for unknown reason.
         *
         */
        RECORDING_FAIL_REASON_UNKNOWN: ZosaRecordingFailReason;

    }

    /**
     * @ngdoc type
     * @name ZosaRecordingSpaceType
     *
     * @description
     * Possible values for a recordings space type.
     *
     */
    interface IZosaRecordingSpaceType {

        /**
         * @name ZosaRecordingSpaceType#RECORDING_SPACE_TYPE_CLIENT
         * @memberOf ZosaRecordingSpaceType
         *
         * @description
         * Client Recording Space.
         *
         */
        RECORDING_SPACE_TYPE_CLIENT: ZosaRecordingSpaceType;

        /**
         * @name ZosaRecordingSpaceType#RECORDING_SPACE_TYPE_NETWORK
         * @memberOf ZosaRecordingSpaceType
         *
         * @description
         * Network Recording Space.
         *
         */
        RECORDING_SPACE_TYPE_NETWORK: ZosaRecordingSpaceType;

        /**
         * @name ZosaRecordingSpaceType#RECORDING_SPACE_TYPE_UNDEFINED
         * @memberOf ZosaRecordingSpaceType
         *
         * @description
         * Undefined Recording Space Type.
         *
         */
        RECORDING_SPACE_TYPE_UNDEFINED: ZosaRecordingSpaceType;

    }

    /**
     * @ngdoc object
     * @name ZosaRecordingState
     *
     * @description
     * Possible values of a {@link ZosaProgramItem}'s recordingState or a {@link ZosaRecordingItem}'s state.
     * The values may be used as bit flags to combine the different states as a bit mask when being used in, e.g. {@link Zosa.removeRecordings}.
     *
     */
    interface IZosaRecordingState {

        /**
         * @name ZosaRecordingState#RECORDING_STATE_COMPLETE
         * @memberOf ZosaRecordingState
         *
         * @description
         * Recording state complete. Recording has finished and all requested program content has been successfully recorded.
         *
         */
        RECORDING_STATE_COMPLETE: ZosaRecordingState;

        /**
         * @name ZosaRecordingState#RECORDING_STATE_CONFLICT
         * @memberOf ZosaRecordingState
         *
         * @description
         * Recording state conflict. The recording is in conflict because of hardware or software resource limitations.
         *
         */
        RECORDING_STATE_CONFLICT: ZosaRecordingState;

        /**
         * @name ZosaRecordingState#RECORDING_STATE_FAILED
         * @memberOf ZosaRecordingState
         *
         * @description
         * Recording state failed. The recording of the program has failed.
         *
         */
        RECORDING_STATE_FAILED: ZosaRecordingState;

        /**
         * @name ZosaRecordingState#RECORDING_STATE_NONE
         * @memberOf ZosaRecordingState
         *
         * @description
         * Recording state none. A program item having this state does not have any associated recording information.
         *
         */
        RECORDING_STATE_NONE: ZosaRecordingState;

        /**
         * @name ZosaRecordingState#RECORDING_STATE_OFFLINE
         * @memberOf ZosaRecordingState
         *
         * @description
         * Recording state off-line. The cPVR recording is not available on currently active local disk(s).
         *
         */
        RECORDING_STATE_OFFLINE: ZosaRecordingState;

        /**
         * @name ZosaRecordingState#RECORDING_STATE_ONGOING
         * @memberOf ZosaRecordingState
         *
         * @description
         * Recording state ongoing. Recording of program content is currently in progress.
         *
         */
        RECORDING_STATE_ONGOING: ZosaRecordingState;

        /**
         * @name ZosaRecordingState#RECORDING_STATE_PARTIALLY_COMPLETE
         * @memberOf ZosaRecordingState
         *
         * @description
         * Recording state partially complete. Recording has finished but only a part of the requested program content has been recorded.
         *
         */
        RECORDING_STATE_PARTIALLY_COMPLETE: ZosaRecordingState;

        /**
         * @name ZosaRecordingState#RECORDING_STATE_SCHEDULED
         * @memberOf ZosaRecordingState
         *
         * @description
         * Recording state scheduled. The program item having this state has been scheduled to be recorded.
         *
         */
        RECORDING_STATE_SCHEDULED: ZosaRecordingState;

    }

    /**
     * @ngdoc object
     * @name ZosaRecordingType
     *
     * @description
     * Possible values of a recording's type.
     *
     */
    interface IZosaRecordingType {

        /**
         * @name ZosaRecordingType#RECORDING_TYPE_CPVR
         * @memberOf ZosaRecordingType
         *
         * @description
         * Client PVR.
         *
         */
        RECORDING_TYPE_CPVR: ZosaRecordingType;

        /**
         * @name ZosaRecordingType#RECORDING_TYPE_NONE
         * @memberOf ZosaRecordingType
         *
         * @description
         * Recording type is not specified. This is normally used in a request, e.g. {@link Zosa#getRecordings}, indicating that the type is not restricted.
         *
         */
        RECORDING_TYPE_NONE: ZosaRecordingType;

        /**
         * @name ZosaRecordingType#RECORDING_TYPE_NPVR
         * @memberOf ZosaRecordingType
         *
         * @description
         * Network PVR.
         *
         */
        RECORDING_TYPE_NPVR: ZosaRecordingType;

        /**
         * @name ZosaRecordingType#RECORDING_TYPE_NPVR_CPVR
         * @memberOf ZosaRecordingType
         *
         * @description
         * Mixed network and client PVR. Scheduling a recording with this type will schedule both a client (CPVR) and a network (NPVR) recording. When used in a request, e.g. {@link Zosa.getRecordings}, RECORDING_TYPE_NPVR_CPVR does not indicate getting both NPVR and CPVR recordings.
         *
         */
        RECORDING_TYPE_NPVR_CPVR: ZosaRecordingType;

    }

    /**
     * @ngdoc object
     * @name ZosaRecurrenceEndStyle
     *
     * @description
     * Possible values of recurrence ending configuration. Used with {@link Zosa#PARENT_RECORDING_TYPE_PERIODIC}.
     *
     */
    interface IZosaRecurrenceEndStyle {

        /**
         * @name ZosaRecurrenceEndStyle#RECUR_END_STYLE_NONE
         * @memberOf ZosaRecurrenceEndStyle
         *
         * @description
         * Not ending, recording will recur indefinitely.
         *
         */
        RECUR_END_STYLE_NONE: ZosaRecurrenceEndStyle;

        /**
         * @name ZosaRecurrenceEndStyle#RECUR_END_STYLE_REPETITIONS
         * @memberOf ZosaRecurrenceEndStyle
         *
         * @description
         * Recurrence ends after a certain number of repetitions.
         *
         * See: {@link ZosaParentRecording#recurNumRepetitions}
         *
         */
        RECUR_END_STYLE_REPETITIONS: ZosaRecurrenceEndStyle;

        /**
         * @name ZosaRecurrenceEndStyle#RECUR_END_STYLE_TIME
         * @memberOf ZosaRecurrenceEndStyle
         *
         * @description
         * Recurrence ends on a certain date and time.
         *
         * See: {@link ZosaParentRecording#recurEndTime}
         *
         */
        RECUR_END_STYLE_TIME: ZosaRecurrenceEndStyle;

    }

    /**
     * @ngdoc object
     * @name ZosaRecurrenceType
     *
     * @description
     * Possible values of recurrence type. Used with {@link Zosa#PARENT_RECORDING_TYPE_PERIODIC}.
     *
     */
    interface IZosaRecurrenceType {

        /**
         * @name ZosaRecurrenceType#RECUR_TYPE_MONTHLY
         * @memberOf ZosaRecurrenceType
         *
         * @description
         * Monthly recurrence.
         *
         */
        RECUR_TYPE_MONTHLY: ZosaRecurrenceType;

        /**
         * @name ZosaRecurrenceType#RECUR_TYPE_WEEKLY
         * @memberOf ZosaRecurrenceType
         *
         * @description
         * Weekly recurrence.
         *
         */
        RECUR_TYPE_WEEKLY: ZosaRecurrenceType;

    }

    /**
     * @ngdoc object
     * @name ZosaEpisodeSelection
     *
     * @description
     * Possible values for an episode selection
     *
     */
    interface IZosaEpisodeSelection {

        /**
         * @name ZosaEpisodeSelection#EPISODE_SELECTION_ALL
         * @memberOf ZosaEpisodeSelection
         *
         * @description
         * All episodes belonging to this series are recorded.
         *
         */
        EPISODE_SELECTION_ALL: ZosaEpisodeSelection;

        /**
         * @name ZosaEpisodeSelection#EPISODE_SELECTION_CURRENT_OR_NEWER_SEASON
         * @memberOf ZosaEpisodeSelection
         *
         * @description
         * All episodes belonging to current selected or newer seasons are recorded. This option item is only applicable and visible, if season information is available for this series.
         *
         */
        EPISODE_SELECTION_CURRENT_OR_NEWER_SEASON: ZosaEpisodeSelection;

        /**
         * @name ZosaEpisodeSelection#EPISODE_SELECTION_TIME
         * @memberOf ZosaEpisodeSelection
         *
         * @description
         * Only episodes belonging to this series and that are broadcasted during a time window (e.g. +30 min / - 30min) around the selected episode are recorded as a series.
         *
         */
        EPISODE_SELECTION_TIME: ZosaEpisodeSelection;

    }

    /**
     * @ngdoc object
     * @name ZosaRecordingDeleteMode
     *
     * @description
     * Possible values for a recordings delete mode.
     *
     */
    interface IZosaRecordingDeleteMode {

        /**
         * @name ZosaRecordingDeleteMode#RECORDING_DELETE_MODE_AUTO
         * @memberOf ZosaRecordingDeleteMode
         *
         * @description
         * Recording is automatically deleted if there is no space to create a new requested recording.
         *
         */
        RECORDING_DELETE_MODE_AUTO: ZosaRecordingDeleteMode;

        /**
         * @name ZosaRecordingDeleteMode#RECORDING_DELETE_MODE_MANUAL
         * @memberOf ZosaRecordingDeleteMode
         *
         * @description
         * Recording has to be manually deleted in order to free up space to create a new recording if space has run out.
         *
         */
        RECORDING_DELETE_MODE_MANUAL: ZosaRecordingDeleteMode;

        /**
         * @name ZosaRecordingDeleteMode#RECORDING_DELETE_MODE_MANUAL
         * @memberOf ZosaRecordingDeleteMode
         *
         * @description
         * A parent recording is allowed to automatically delete the associated recordingItems down to a specified number in order to free up space to create a new recording.
         *
         */
        RECORDING_DELETE_MODE_RETAIN_EPISODES: ZosaRecordingDeleteMode;

    }

    /**
     * @ngdoc type
     * @name ZosaRemoteRecordingSchedulingStatus
     *
     * @description
     * Possible values of a ZosaPlaybackSession's selectedStreamReason.
     *
     */
    interface IZosaRemoteRecordingSchedulingStatus {

        /**
         * @name ZosaRemoteRecordingSchedulingStatus#REMOTE_RECORDING_SCHEDULING_DEVICE_NOT_AVAILABLE
         * @memberOf ZosaRemoteRecordingSchedulingStatus
         *
         * @description
         * Remote recording scheduling is done but the remote device is not available and is also not expected to be awake in time to perform the recording. Depending on the implementation this can be considered an error in which case the recording scheduling will fail with the error code DEVICE_NOT_AVAILABLE rather than succeed with this remoteSchedulingStatus.
         *
         */
        REMOTE_RECORDING_SCHEDULING_DEVICE_NOT_AVAILABLE: ZosaSelectedStreamReason;

        /**
         * @name ZosaRemoteRecordingSchedulingStatus#REMOTE_RECORDING_SCHEDULING_OK
         * @memberOf ZosaRemoteRecordingSchedulingStatus
         *
         * @description
         * Remote recording scheduling is done and the available disk space has been verified to be enough for the new recording.
         *
         */
        REMOTE_RECORDING_SCHEDULING_OK: ZosaSelectedStreamReason;

        /**
         * @name ZosaRemoteRecordingSchedulingStatus#SELECTED_STREAM_REASON_UNKNOWN
         * @memberOf ZosaRemoteRecordingSchedulingStatus
         *
         * @description
         * Remote recording scheduling is done but the available disk space has not been verified to be enough for the new recording.
         *
         */
        REMOTE_RECORDING_SCHEDULING_UNKNOWN_DISK_SPACE: ZosaSelectedStreamReason;

    }

    /**
     * @ngdoc interface
     * @name ZosaRecordingBandwidthConflictEvent
     *
     * @description
     * Zosa recording bandwidth conflict event.
     *
     */
    interface ZosaRecordingBandwidthConflictEvent {

        /**
         * @ngdoc property
         * @name ZosaRecordingBandwidthConflictEvent#recordingId
         * @propertyOf ZosaRecordingBandwidthConflictEvent
         *
         * @description
         * Identifier of the recording that triggered the conflict.
         *
         * @returns {ZosaId}
         *
         */
        recordingId: ZosaId;

    }

    /**
     * @ngdoc interface
     * @name ZosaRecordingChangedEvent
     *
     * @description
     * Zosa recording changed event.
     *
     */
    interface ZosaRecordingChangedEvent {

        /**
         * @ngdoc property
         * @name ZosaRecordingChangedEvent#recordingId
         * @propertyOf ZosaRecordingChangedEvent
         *
         * @description
         * Identifier of the recording that changed.
         *
         * • Not provided if the change is not concerning a specific recording.
         *
         * @returns {ZosaId}
         *
         */
        recordingId?: ZosaId;

    }

    /**
     * @ngdoc interface
     * @name ZosaRecordingConflictError
     *
     * @description
     * Used in the response to Zosa.scheduleProgramRecording, Zosa.scheduleIntervalRecording and Zosa.updateRecording in ZosaRequestResponseEvent for failure event when conflicts are detected (the error codes are ERROR_INSUFFICIENT_RESOURCES, ERROR_INSUFFICIENT_BANDWIDTH).
     *
     */
    interface ZosaRecordingConflictError extends ZosaError {

        /**
         * @ngdoc property
         * @name ZosaRecordingConflictError#conflictId
         * @propertyOf ZosaRecordingConflictError
         *
         * @description
         * Array of conflicting recordings.
         *
         * • Provided in case of scheduling or update of a recording fails due to conflict when Advanced conflict handling (ACH) is supported in the back-end. Never provided if conflicts is provided.
         *
         * @returns {ZosaId}
         *
         */
        conflictId?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaRecordingConflictError#conflicts
         * @propertyOf ZosaRecordingConflictError
         *
         * @description
         * Array of conflicting recordings.
         *
         * • Provided in case of scheduling or update of a recording fails due to conflict when Advanced conflict handling (ACH) is not supported in the back-end. Never provided if conflictId is provided.
         *
         * @returns {ZosaRecordingItem[]}
         *
         */
        conflicts?: ZosaRecordingItem[];

        /**
        * @ngdoc property
        * @name ZosaRecordingConflictError#recommendedSchedulingOption
        * @propertyOf ZosaRecordingConflictError
        *
        * @description
        * Alternative scheduling option.
        *
        * • Provided in case of a conflict when a recording can be scheduled in a different quality or from a different source, or a program can be recorded at a different time.
        *
        * @returns {ZosaRecordingItem[]}
        *
        */
        recommendedSchedulingOption?: ZosaRecommendedSchedulingOption[];


    }

    /**
     * @ngdoc interface
     * @name ZosaRecordingConflictParams
     *
     * @description
     * Input parameters for {@link Zosa.getNextRecordingConflict}, {@link Zosa.updateRecordingConflict} and {@link Zosa.deleteMarkedRecordingRecordingConflicts}.
     *
     */
    interface ZosaRecordingConflictParams {

        /**
         * @ngdoc property
         * @name ZosaRecordingConflictParams#conflictId
         * @propertyOf ZosaRecordingConflictParams
         *
         * @description
         * The id of a conflict situation.
         *
         * @returns ZosaId
         *
         */
        conflictId: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaRemoveProfileParams#serviceProvider
         * @propertyOf ZosaRemoveProfileParams
         *
         * @description
         * ServiceProvider to remove profile from.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;
    }

    /**
     * @ngdoc interface
     * @name ZosaRecordingConflictResolutionGroup
     *
     * @description
     * A set of options for how to resolve a recording conflict for a conflict situation.
     *
     */
    interface ZosaRecordingConflictResolutionGroup {

        /**
         * @ngdoc property
         * @name ZosaRecordingConflictResolutionGroup#resolutionOptions
         * @propertyOf ZosaRecordingConflictResolutionGroup
         *
         * @description
         * A number of resolution options (sets of recordings) that if deleted may resolve or improve a conflict situation.
         *
         * @returns ZosaRecordingConflictResolutionOption[]
         *
         */
        resolutionOptions: ZosaRecordingConflictResolutionOption[];

    }

    /**
     * @ngdoc interface
     * @name ZosaRecordingConflictResolutionOption
     *
     * @description
     * One set of recordings that is eligible for remove to improve a conflict situation. The set is either marked for deletion or not.
     *
     */
    interface ZosaRecordingConflictResolutionOption {

        /**
         * @ngdoc property
         * @name ZosaRecordingConflictResolutionOption#markedForDelete
         * @propertyOf ZosaRecordingConflictResolutionOption
         *
         * @description
         * Whether or not this set of recordings are marked for deletion.
         *
         * @returns boolean
         *
         */
        markedForDelete: boolean;

        /**
         * @ngdoc property
         * @name ZosaRecordingConflictResolutionOption#recordings
         * @propertyOf ZosaRecordingConflictResolutionOption
         *
         * @description
         * One or more recording that cause a conflict.
         *
         * @returns ZosaRecordingItem[]
         *
         */
        recordings: ZosaRecordingItem[];

    }

    /**
     * @ngdoc interface
     * @name ZosaRecordingItem
     *
     * @description
     * Represents a recording. Normally used as an element of a {@link ZosaList} in the response to, e.g. {@link Zosa.getRecordings}, in {@link ZosaRequestResponseEvent} for success event.
     * For a periodic or series recording, this item represents a subtask of a parent recording that is represented by {@link ZosaParentRecordingItem}.
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_PROGRAM_ITEM}
     *
     */
    interface ZosaRecordingItem extends ZosaItem {

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#availabilityEndTime
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * End of availability time period for this recording. Unit is number of milliseconds since 1970-01-01 00:00:00 UTC. Recording is removed at this time.
         *
         * • Provided if available (value may be null if unknown or not available).
         *
         * Note: Preview API with dummy implementation
         *
         * @returns {number}
         *
         */
        availabilityEndTime?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#channelId
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Identifier of the recorded channel ({@link ZosaChannelItem}).
         *
         * • Provided if available (value may be null if unknown or not available).
         *
         * @returns {ZosaId}
         *
         */
        channelId?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#deleteMode
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Type of delete mode for the recording.
         *
         * • Optional.
         * • If not specified the default value is {@link ZosaRecordingDeleteMode#RECORDING_DELETE_MODE_MANUAL}.
         * • {@link ZosaRecordingDeleteMode#RECORDING_DELETE_MODE_RETAIN_EPISODES} will be ignored if this is not a parent recording.
         *
         * @returns {ZosaRecordingDeleteMode}
         *
         */
        deleteMode?: ZosaRecordingDeleteMode;


        /**
         * @ngdoc property
         * @name ZosaRecordingItem#description
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Description of the recording.
         *
         * • Provided if available (value may be null if unknown or not available).
         *
         * @returns {string}
         *
         */
        description?: string;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#duration
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Duration in milliseconds of a complete or ongoing recording.
         *
         * • Provided if requested in itemFields.
         *
         * @returns {number}
         *
         */
        duration?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#endMargin
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * The time margin in milliseconds after the scheduled end time.
         *
         * • Provided if available (value may be null if unknown or not available).
         *
         * @returns {number}
         *
         */
        endMargin?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#endTime
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * End time of the recording. Expressed in number of milliseconds since 1970-01-01 00:00:00 UTC.
         *
         * • Provided if requested in itemFields.
         *
         * @returns {number}
         *
         */
        endTime: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#episodeName
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Name of episode.
         *
         * • Provided if available (value may be null if unknown or not available).
         * • Only available if recording is an episode of a series and supported by the back-end.
         *
         * @returns {string}
         *
         */
        episodeName?: string;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#episodeNumber
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Episode number.
         *
         * • Provided if available (value may be null if unknown or not available).
         * • Only available if recording is an episode of a series and supported by the back-end.
         *
         * @returns {number}
         *
         */
        episodeNumber?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#failReason
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Fail reason for a recording.
         *
         * • Provided if available (value may be null if unknown or not available).
         * • Valid only if recording state is {@link ZosaRecordingState#RECORDING_STATE_FAILED} or {@link ZosaRecordingState#RECORDING_STATE_PARTIALLY_COMPLETE}.
         *
         * @returns {ZosaRecordingFailReason}
         *
         */
        failReason?: ZosaRecordingFailReason;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#genres
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Genres assigned to the recording, e.g. sci-fi, drama. Note, only zosaId, zosaType, and title are set, use getGenres by id to get more fields.
         *
         * • Provided if requested in itemFields (field value may be null).
         *
         * @returns {ZosaGenreItem[]}
         *
         */
        genres?: ZosaGenreItem[];

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#images
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Array of images for item.
         *
         * • Provided if available (field value may be null).
         *
         * @returns {ZosaImage[]}
         *
         */
        images?: ZosaImage[];

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#isBlocked
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Parental control blocking status for the recording.
         * The field indicates if this recording is currently blocked by parental control. A recording may be blocked because of the parental rating of the recording.
         * It can also be blocked when the recorded channel is not allowed for the current user or when recorded programs or one or more genres associated with the programs or the channel are parentally locked.
         *
         * • Provided if requested in itemFields.
         *
         * @returns {boolean}
         *
         * See: {@link parentalRating}
         * See: {@link Zosa#parentalUnblock}
         *
         */
        isBlocked?: boolean;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#lastPlaybackPosition
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Last playback position, or null if recording has not been played. Expressed in number of milliseconds from start of media.
         *
         * • Provided if available (value may be null if unknown or not available).
         *
         * @returns {number}
         *
         */
        lastPlaybackPosition?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#minProgramViewingAge
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Parental rating minimum required viewing age (years) for the program for which the recording was made. Only set for program recordings for whose programs the age rating information was available.
         *
         * • Provided if available (value may be null if unknown or not available).
         *
         * @returns {number}
         *
         */
        minProgramViewingAge?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#minViewingAge
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Parental rating minimum required viewing age (years).
         *
         * • Provided if available (value may be null if unknown or not available).
         *
         * @returns {number}
         *
         */
        minViewingAge?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#mixPvrId
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Id of the nPvr recording for mixed recordings.
         *
         * • Provided if nPvr task exists (mixed recording).
         *
         * @returns {string}
         *
         */
        mixPvrId?: string;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#notYetCreated
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Indicates if the recording has been scheduled but has not yet been created because of pending conflicts.
         *
         * • Only provided for recordings in ZosaGetRecordingConflictResponse.
         * • Value may be null if unknown or not available.
         *
         * @returns {number}
         *
         */
        notYetCreated?: boolean;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#parentalRating
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Parental rating of the recording. A larger value indicates a higher rating. The value varies depending on the content rating systems in different countries. The value may be null if unknown or not available.
         *
         * • Provided if requested in itemFields.
         *
         * @returns {number}
         *
         */
        parentalRating?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#parentRecordingId
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Identifier of the parent recording.
         *
         * • Provided if the recording has a parent.
         * • Value may be null if the recording has no parent.
         *
         * @returns {ZosaId}
         *
         */
        parentRecordingId?: ZosaId;

        /**
        * @ngdoc property
        * @name ZosaRecordingItem#parentRecordingIds
        * @propertyOf ZosaRecordingItem
        *
        * @description
        * Array with identifiers of parent recordings. Normally a recording that has a parent will have only a 
        * single parent but more than one parent can occur (depending on the service provider). When, e.g., 
        * two series recordings refer to the same series and both cause a specific episode to be scheduled and 
        * recorded this may be handled as two unique recordings each with a unique parent or as one recording 
        * with two parents.
        *
        * • Provided if requested in itemFields (value will be null if the recording has no parent)
        *
        * @returns {ZosaId}
        *
        */
        parentRecordingIds?: ZosaId[];

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#programId
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Identifier of the recorded program ({@link ZosaProgramItem}).
         *
         * • If the program that the recording is done for does not exist (at the backend) anymore, this value will be null. If a recording includes several programs, this field will refer to the first one.
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {ZosaId}
         *
         */
        programId?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#recordingState
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * State of this recording.
         *
         * • Always provided but is not applicable to recordings of mixed network and client type (see {@link Zosa.RECORDING_TYPE_NPVR_CPVR}).
         *
         * @returns {ZosaRecordingState}
         *
         */
        recordingState: ZosaRecordingState;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#recordingType
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Type of this recording.
         *
         * • Always provided.
         *
         * @returns {ZosaRecordingType}
         *
         */
        recordingType: ZosaRecordingType;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#seasonNumber
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Season number.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         * • Only available if recording is an episode of a series and supported by the back-end.
         *
         * @returns {number}
         *
         */
        seasonNumber?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#seriesName
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Name of series.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         * • Only available if recording is an episode of a series and supported by the back-end.
         *
         * @returns {string}
         *
         */
        seriesName?: string;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#sizeKB
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * The size in Kilobytes of the complete or ongoing recording.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {number}
         *
         */
        sizeKB?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#source
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Source for the recording (DVB, IP, ...).
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {ZosaSource}
         *
         */
        source?: ZosaSource;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#startMargin
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * The time margin in milliseconds before the scheduled start time (i.e. {@link ZosaRecordingItem#startTime}).
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {number}
         *
         */
        startMargin?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#startTime
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Start time of the recording. Expressed in number of milliseconds since 1970-01-01 00:00:00 UTC.
         *
         * • Provided if requested in itemFields.
         *
         * @returns {number}
         *
         */
        startTime: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingItem#videoDefinition
         * @propertyOf ZosaRecordingItem
         *
         * @description
         * Video definition of the recording.
         *
         * • Optional.
         *
         * @returns {ZosaVideoDefinition}
         *
         */
        videoDefinition?: ZosaVideoDefinition;

    }

    /**
     * @ngdoc interface
     * @name ZosaRecordingSpaceInfo
     *
     * @description
     * Represents the information about the space for recordings.
     * Normally used as an element of a ZosaList in the response to, e.g. Zosa.getRecordingSpaceInfo, in ZosaRequestResponseEvent for success event.
     *
     */
    interface ZosaRecordingSpaceInfo {

        /**
         * @ngdoc property
         * @name ZosaRecordingSpaceInfo#availableKiB
         * @propertyOf ZosaRecordingSpaceInfo
         *
         * @description
         * Free recording space in Kibibyte.
         *
         * • Value may be null if unknown or not available / not supported.
         *
         * @returns {number}
         *
         */
        availableKiB?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingSpaceInfo#availableSeconds
         * @propertyOf ZosaRecordingSpaceInfo
         *
         * @description
         * Free recording space in seconds of recorded content.
         *
         * • Value may be null if unknown or not available / not supported.
         *
         * @returns {number}
         *
         */
        availableSeconds?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingSpaceInfo#deviceId
         * @propertyOf ZosaRecordingSpaceInfo
         *
         * @description
         * Identifier of the device of the recordingSpace.
         *
         * • Value may be null if unknown or not available.
         *
         * @returns {string}
         *
         */
        deviceId?: string;

        /**
         * @ngdoc property
         * @name ZosaRecordingSpaceInfo#recordingSpaceType
         * @propertyOf ZosaRecordingSpaceInfo
         *
         * @description
         * Type of this recordingSpace (client or network).
         *
         * @returns {ZosaRecordingSpaceType}
         *
         */
        recordingSpaceType: ZosaRecordingSpaceType;

        /**
         * @ngdoc property
         * @name ZosaRecordingSpaceInfo#totalKiB
         * @propertyOf ZosaRecordingSpaceInfo
         *
         * @description
         * Total recording space in Kibibyte.
         *
         * • Value may be null if unknown or not available / not supported.
         *
         * @returns {number}
         *
         */
        totalKiB?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingSpaceInfo#hardLimitKiB 
         * @propertyOf ZosaRecordingSpaceInfo
         *
         * @description
         * A hard limit which could be interpreted as an error condition. The writing to disk must stop. Unit in kB.
         *
         * • Value may be null if unknown or not available / not supported.
         *
         * @returns {number}
         *
         */
        hardLimitKiB?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingSpaceInfo#softLimitKiB
         * @propertyOf ZosaRecordingSpaceInfo
         *
         * @description
         * A soft limit which could be interpreted as a warning to the user that the space left has become small. Unit in kB.
         *
         * • Value may be null if unknown or not available / not supported.
         *
         * @returns {number}
         *
         */
        softLimitKiB?: number;

        /**
         * @ngdoc property
         * @name ZosaRecordingSpaceInfo#totalSeconds
         * @propertyOf ZosaRecordingSpaceInfo
         *
         * @description
         * Total recording space in seconds of recorded content.
         *
         * • Value may be null if unknown or not available / not supported.
         *
         * @returns {number}
         *
         */
        totalSeconds?: number;

    }

    /**
     * @ngdoc interface
     * @name ZosaRegion
     *
     * @description
     * Used to represent a generic tuple.
     *
     */
    interface ZosaRegion {

        /**
         * @ngdoc property
         * @name ZosaRegion#name
         * @propertyOf ZosaRegion
         *
         * @description
         * Name of country or region.
         *
         * • Provided if available (value may be null if unknown or not available).
         *
         * @returns {string}
         *
         */
        name?: string;

    }

    /**
     * @ngdoc interface
     * @name ZosaRecommendedSchedulingOption
     * @propertyOf ZosaRecordingConflictError
     *
     * @description
     * Used in the response to Zosa.scheduleProgramRecording, Zosa.scheduleIntervalRecording and Zosa.updateRecording 
     * in ZosaRecordingConflictError when conflicts are detected and the recording can be scheduled without a conflict 
     * by choosing a a different source, videoDefinition or, when the recording is a program, a different channel / time.
     *
     */
    interface ZosaRecommendedSchedulingOption {

        /**
         * @ngdoc property
         * @name ZosaRecommendedSchedulingOption#program
         * @propertyOf ZosaRecommendedSchedulingOption
         *
         * @description
         * Alternative program for recording (at another time, on a different channel).
         *
         * @returns {ZosaProgramItem}
         *
         */
        program?: ZosaProgramItem;

        /**
         * @ngdoc property
         * @name ZosaRecommendedSchedulingOption#source
         * @propertyOf ZosaRecommendedSchedulingOption
         *
         * @description
         * Alternative source for the recording (DVB, IP, ...).
         *
         * @returns {ZosaSource}
         *
         */
        source: ZosaSource;


        /**
        * @ngdoc property
        * @name ZosaRecommendedSchedulingOption#videoDefinition
        * @propertyOf ZosaRecommendedSchedulingOption
        *
        * @description
        * Alternative video definition for the recording.
        *
        * @returns {ZosaVideoDefinition}
        *
        */
        videoDefinition: ZosaVideoDefinition;

    }

    /**
     * @ngdoc interface
     * @name ZosaReleaseBandwidthBookingsParams
     *
     * @description
     * Input parameters for {@link Zosa.releaseBandwidthBookings}.
     *
     */
    interface ZosaReleaseBandwidthBookingsParams {

        /**
         * @ngdoc property
         * @name ZosaReleaseBandwidthBookingsParams#bandwidthBookings
         * @propertyOf ZosaReleaseBandwidthBookingsParams
         *
         * @description
         * List of bandwidth booking items to release.
         *
         * @returns {ZosaId[]}
         *
         */
        bandwidthBookings: ZosaId[];

    }

    /**
     * @ngdoc interface
     * @name ZosaRemoveFavoritesParams
     *
     * @description
     * Input parameters for {@link Zosa.removeFavorites}.
     *
     */
    interface ZosaRemoveFavoritesParams {

        /**
         * @ngdoc property
         * @name ZosaRemoveFavoritesParams#contents
         * @propertyOf ZosaRemoveFavoritesParams
         *
         * @description
         * List of content to be removed from favorite list. If this value is set to null, all content of the specified favorite list will be removed.
         *
         * @returns {ZosaId[]}
         *
         */
        contents: ZosaId[];

        /**
         * @ngdoc property
         * @name ZosaRemoveFavoritesParams#favoriteList
         * @propertyOf ZosaRemoveFavoritesParams
         *
         * @description
         * Favorite list to operate on.
         *
         * @returns {ZosaId}
         *
         */
        favoriteList: ZosaId;

    }

    /**
     * @ngdoc interface
     * @name ZosaRemoveRecordingsParamsByCriteria
     *
     * @description
     * Input parameters for {@link Zosa.removeRecordings}.
     *
     * @example
        <example>
            <file name="script.js">
                var zosa = new Zosa();
    
                // Removing all (non-parent) recordings regardless of state.
                var inputParams = { serviceProvider: session.serviceProviders[0],
                                    type: zosa.RECORDING_TYPE_NONE,
                                    state: zosa.RECORDING_STATE_UNKNOWN };
                var request = zosa.removeRecordings(inputParams);
    
                // Removing all (non-parent) network PVR recordings regardless of state.
                var inputParams = { serviceProvider: session.serviceProviders[0],
                                    type: zosa.RECORDING_TYPE_NPVR,
                                    state: zosa.RECORDING_STATE_UNKNOWN };
                var request = zosa.removeRecordings(inputParams);
    
                // Remove all failed recordings
                var inputParams = { serviceProvider: session.serviceProviders[0],
                                    type: zosa.RECORDING_TYPE_NONE,
                                    state: zosa.RECORDING_STATE_FAILED };
                var request = zosa.removeRecordings(inputParams);
    
                // Remove all client PVR recordings that are complete to some extent.
                var inputParams = { serviceProvider: session.serviceProviders[0],
                                    type: zosa.RECORDING_TYPE_CPVR,
                                    state: zosa.RECORDING_STATE_COMPLETE|zosa.RECORDING_STATE_PARTIALLY_COMPLETE };
                var request = zosa.removeRecordings(inputParams);
    
                // Remove all recordings with a specific parent.
                var inputParams = { serviceProvider: session.serviceProviders[0],
                                    type: zosa.RECORDING_TYPE_NONE,
                                    state: zosa.RECORDING_STATE_UNKNOWN,
                                    parentRecordingId: parentRecordingId };
                var request = zosa.removeRecordings(inputParams);
    
                // Remove all scheduled recordings with a specific parent.
                var inputParams = { serviceProvider: session.serviceProviders[0],
                                    type: zosa.RECORDING_TYPE_NONE,
                                    state: zosa.RECORDING_STATE_SCHEDULED,
                                    parentRecordingId: parentRecordingid };
                var request = zosa.removeRecordings(inputParams);
            </file>
        </example>
     *
     */
    interface ZosaRemoveRecordingsParamsByCriteria {

        /**
         * @ngdoc property
         * @name ZosaRemoveRecordingsParamsByCriteria#parentRecording
         * @propertyOf ZosaRemoveRecordingsParamsByCriteria
         *
         * @description
         * The parent recording. Used to remove recordings that have specified parent. Leave it unspecified to remove recordings without parent restriction.
         *
         * • Optional.
         *
         * @returns {ZosaId}
         *
         */
        parentRecording?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaRemoveRecordingsParamsByCriteria#serviceProvider
         * @propertyOf ZosaRemoveRecordingsParamsByCriteria
         *
         * @description
         * ServiceProvider to perform the updating operation on.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

        /**
         * @ngdoc property
         * @name ZosaRemoveRecordingsParamsByCriteria#state
         * @propertyOf ZosaRemoveRecordingsParamsByCriteria
         *
         * @description
         * States of recordings. Used to remove recordings that have specified state.
         * It is a bit mask of recording states (bitwise OR of {@link ZosaRecordingState} values). Leave it unspecified or specify a value of 0 ({@link Zosa.RECORDING_STATE_NONE}) to remove recordings without state restriction.
         *
         * • Optional.
         *
         * @returns {ZosaRecordingState}
         *
         */
        state?: ZosaRecordingState;

        /**
         * @ngdoc property
         * @name ZosaRemoveRecordingsParamsByCriteria#type
         * @propertyOf ZosaRemoveRecordingsParamsByCriteria
         *
         * @description
         * Type of recordings.
         * Leave it unspecified or specify a value of 0 ({@link Zosa.RECORDING_TYPE_NONE}) to remove recordings without type restriction.
         *
         * • Optional.
         *
         * @returns {ZosaRecordingType}
         *
         */
        type?: ZosaRecordingType;

    }

    /**
     * @ngdoc interface
     * @name ZosaRemoveRecordingsParamsByIds
     *
     * @description
     * Input parameters for {@link Zosa.removeRecordings}.
     *
     */
    interface ZosaRemoveRecordingsParamsByIds {

        /**
         * @ngdoc property
         * @name ZosaRemoveRecordingsParamsByIds#recordings
         * @propertyOf ZosaRemoveRecordingsParamsByIds
         *
         * @description
         * Array of recordings to be removed. May contain only one element.
         *
         * @returns {ZosaId[]}
         * 
         * See: {@link ZosaRecordingItem.subRecordings} field for details about removing sub recordings.
         *
         */
        recordings: ZosaId[];

        /**
         * @ngdoc property
         * @name ZosaRemoveRecordingsParamsByIds#serviceProvider
         * @propertyOf ZosaRemoveRecordingsParamsByIds
         *
         * @description
         * ServiceProvider to perform the updating operation on.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider?: ZosaId | null;
    }

    /**
     * @ngdoc interface
     * @name ZosaRequest
     *
     * @description
     * Private, only returned. Used as handle to a zosa request.
     *
     */
    interface ZosaRequest<T> {

        /**
         * @ngdoc method
         * @name always
         *
         * @description
         * Register a function to receive an event when the request has finished. The event is guaranteed to be sent on completion, regardless of success or failure.
         * This handler is called after the success or failure handlers has completed.
         *
         * @param {alwaysFunction<T>} func Function called on completion.
         *
         * @returns {ZosaRequest<T>} The {@link ZosaRequest}.
         *
         */
        always(func: alwaysFunction<T>): ZosaRequest<T>;

        /**
         * @ngdoc method
         * @name failure
         *
         * @description
         * Register a function to receive event on failure.
         *
         * @param {failureFunction} func Function called on failure.
         *
         * @returns {ZosaRequest<T>} The {@link ZosaRequest}.
         *
         */
        failure(func: failureFunction): ZosaRequest<T>;

        /**
         * @ngdoc method
         * @name success
         *
         * @description
         * Register a function to receive event on success.
         *
         * @param {successFunction<T>} func Function called on success.
         *
         * @returns {ZosaRequest<T>} The {@link ZosaRequest}.
         *
         */
        success(func: successFunction<T>): ZosaRequest<T>;

    }

    /**
     * @ngdoc interface
     * @name ZosaRequestResponseEvent
     *
     * @description
     * Private, only returned. Event sent on a successful request.
     *
     */
    interface ZosaRequestResponseEvent<T> {

        /**
         * @ngdoc property
         * @name ZosaRequestResponseEvent#response
         * @propertyOf ZosaRequestResponseEvent
         *
         * @description
         * Response data for the request, if there is any. The type is request/response specific.
         *
         * @returns {T}
         *
         */
        response?: T;

    }

    /**
     * @ngdoc interface
     * @name ZosaResetAllParentalUnblockingsParams
     *
     * @description
     * Input parameters for {@link Zosa.resetAllParentalUnblockings}.
     *
     */
    interface ZosaResetAllParentalUnblockingsParams {

    }

    /**
     * @ngdoc interface
     * @name ZosaResetAllParentalUnblockingsResponse
     *
     * @description
     * Used in the response to {@link Zosa.resetAllParentalUnblockings} for success event.
     *
     */
    interface ZosaResetAllParentalUnblockingsResponse {

    }

    /**
     * @ngdoc interface
     * @name ZosaResetParentalUnblockingParams
     *
     * @description
     * Input parameters for {@link Zosa.resetParentalUnblocking}.
     *
     */
    interface ZosaResetParentalUnblockingParams {

        /**
         * @ngdoc property
         * @name ZosaResetParentalUnblockingParams#content
         * @propertyOf ZosaResetParentalUnblockingParams
         *
         * @description
         * A previously unblocked item for which the unblocking should be reset.
         *
         * • Optional.
         * • Either content or scenario must be specified. Behavior when supplying both is undefined.
         *
         * @returns {ZosaId}
         *
         */
        content?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaResetParentalUnblockingParams#scenario
         * @propertyOf ZosaResetParentalUnblockingParams
         *
         * @description
         * A previously unblocked GUI scenario for which the unblocking should be reset.
         *
         * • Optional.
         * • Either content or scenario must be specified. Behavior when supplying both is undefined.
         *
         * @returns {string}
         *
         */
        scenario?: string;

        /**
         * @ngdoc property
         * @name ZosaResetParentalUnblockingParams#scenario
         * @propertyOf ZosaResetParentalUnblockingParams
         *
         * @description
         * Indicates if scenario should be treated as adult when resetting unblocking.
         *
         * • Optional (default false).
         *
         * @returns {boolean}
         *
         */
        scenarioIsAdult?: boolean;

    }

    /**
     * @ngdoc interface
     * @name ZosaResetParentalUnblockingResponse
     *
     * @description
     * Used in the response to {@link Zosa.resetParentalUnblocking} for success event.
     *
     */
    interface ZosaResetParentalUnblockingResponse {

        /**
         * @ngdoc property
         * @name ZosaResetParentalUnblockingResponse#isBlocked
         * @propertyOf ZosaResetParentalUnblockingResponse
         *
         * @description
         * Blocking status of the content or GUI scenario.
         *
         * @returns {boolean}
         *
         */
        isBlocked: boolean;
    }

    /**
     * @ngdoc interface
     * @name ZosaScheduleIntervalRecordingParams
     *
     * @description
     * Input parameters for {@link Zosa.scheduleIntervalRecording}.
     *
     */
    interface ZosaScheduleIntervalRecordingParams extends ZosaScheduleRecordingCommonParams {

        /**
         * @ngdoc property
         * @name ZosaScheduleIntervalRecordingParams#endTime
         * @propertyOf ZosaScheduleIntervalRecordingParams
         *
         * @description
         * End time of the interval recording. Expressed in number of milliseconds since 1970-01-01 00:00:00 UTC.
         * If {@link isPeriodic} is true, only the needed parts of the time are effective according to the recurrence type {@link recurType}.
         * For example, if the recurrence type is weekly {@link Zosa.RECUR_TYPE_WEEKLY}, only the the weekday, hour and minutes are effective.
         *
         * • Differentiate with {@link recurEndTime}.
         *
         * @returns {ZosaDate}
         *
         */
        endTime: ZosaDate;

        /**
         * @ngdoc property
         * @name ZosaScheduleIntervalRecordingParams#isPeriodic
         * @propertyOf ZosaScheduleIntervalRecordingParams
         *
         * @description
         * Indicates a periodic recording.
         * A successful {@link Zosa.scheduleIntervalRecording} call will create a parent recording ({@link ZosaParentRecordingItem}) having the type {@link Zosa.PARENT_RECORDING_TYPE_PERIODIC} if this is true.
         *
         * • Optional.
         * • If not specified, the default value is false.
         *
         * @returns {boolean}
         *
         */
        isPeriodic?: boolean;

        /**
         * @ngdoc property
         * @name ZosaScheduleIntervalRecordingParams#recurEndStyle
         * @propertyOf ZosaScheduleIntervalRecordingParams
         *
         * @description
         * The recurrence end style.
         *
         * • Mandatory if {@link isPeriodic} is true.
         * • Ignored if provided but {@link isPeriodic} is false.
         *
         * @returns {ZosaRecurrenceEndStyle}
         *
         */
        recurEndStyle?: ZosaRecurrenceEndStyle;

        /**
         * @ngdoc property
         * @name ZosaScheduleIntervalRecordingParams#recurEndTime
         * @propertyOf ZosaScheduleIntervalRecordingParams
         *
         * @description
         * The time when the recurrence ends, expressed in milliseconds.
         *
         * • Mandatory if {@link isPeriodic} is true and {@link recurEndStyle} is {@link Zosa.RECUR_END_STYLE_TIME}.
         * • Ignored if provided but {@link isPeriodic} is false or {@link recurEndStyle} is not {@link Zosa.RECUR_END_STYLE_TIME}.
         *
         * @returns {number}
         *
         */
        recurEndTime?: number;

        /**
         * @ngdoc property
         * @name ZosaScheduleIntervalRecordingParams#recurMask
         * @propertyOf ZosaScheduleIntervalRecordingParams
         *
         * @description
         * The recurrence mask.
         * For weekly recurrence a day mask using day of the week numbering is used. This is 1 - 7 for Monday - Sunday, e.g., (1 << 1 | 1 << 5) (for recording on Monday and Friday).
         * For monthly recurrence, a mask value is built from day of month numbers, e.g., (1 << 2) | (1 << 25) for recurrence on the 2nd and 25th of each month.
         *
         * • Mandatory if {@link isPeriodic} is true.
         * • Ignored if provided but {@link isPeriodic} is false.
         *
         * @returns {number}
         *
         */
        recurMask?: number;

        /**
         * @ngdoc property
         * @name ZosaScheduleIntervalRecordingParams#recurNumRepetitions
         * @propertyOf ZosaScheduleIntervalRecordingParams
         *
         * @description
         * The number of repetitions of the recurrence.
         *
         * • Mandatory if {@link isPeriodic} is true and {@link recurEndStyle} is {@link Zosa.RECUR_END_STYLE_REPETITIONS}.
         * • Ignored if provided but {@link isPeriodic} is false or {@link recurEndStyle} is not {@link Zosa.RECUR_END_STYLE_REPETITIONS}.
         *
         * @returns {number}
         *
         */
        recurNumRepetitions?: number;

        /**
         * @ngdoc property
         * @name ZosaScheduleIntervalRecordingParams#recurType
         * @propertyOf ZosaScheduleIntervalRecordingParams
         *
         * @description
         * The recurrence type.
         *
         * • Mandatory if {@link isPeriodic} is true.
         *
         * @returns {ZosaRecurrenceType}
         *
         */
        recurType?: ZosaRecurrenceType;

        /**
         * @ngdoc property
         * @name ZosaScheduleIntervalRecordingParams#startTime
         * @propertyOf ZosaScheduleIntervalRecordingParams
         *
         * @description
         * Start time of the interval recording. Expressed in number of milliseconds since 1970-01-01 00:00:00 UTC.
         * If {@link isPeriodic} is true, only the needed parts of the time are effective according to the recurrence type {@link recurType}.
         * For example, if the recurrence type is weekly {@link Zosa.RECUR_TYPE_WEEKLY}, only the the weekday, hour and minutes are effective.
         *
         * @returns {ZosaDate}
         *
         */
        startTime: ZosaDate;

    }

    /**
     * @ngdoc interface
     * @name ZosaScheduleIntervalRecordingParams
     *
     * @description
     * Input parameters for {@link Zosa.scheduleProgramRecording}.
     *
     */
    interface ZosaScheduleProgramRecordingParams extends ZosaScheduleRecordingCommonParams {

        /**
         * @ngdoc property
         * @name ZosaScheduleProgramRecordingParams#isSeries
         * @propertyOf ZosaScheduleProgramRecordingParams
         *
         * @description
         * Indicates a series recording.
         * If this is true, a successful {@link Zosa.scheduleProgramRecording} call will create a parent recording ({@link ZosaParentRecordingItem}) whose type is {@link Zosa.PARENT_RECORDING_TYPE_SERIES}.
         *
         * • Optional.
         * • If not specified, the default value is false.
         *
         * @returns {boolean}
         *
         */
        isSeries?: boolean;

        /**
         * @ngdoc property
         * @name ZosaScheduleProgramRecordingParams#program
         * @propertyOf ZosaScheduleProgramRecordingParams
         *
         * @description
         * The recorded program.
         *
         * @returns {ZosaId}
         *
         */
        program: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaScheduleProgramRecordingParams#episodeSelection
         * @propertyOf ZosaScheduleProgramRecordingParams
         *
         * @description
         * Specification of which episodes will be recorded. This can be set if isSeries is true.
         *
         * @returns {ZosaEpisodeSelection}
         *
         */
        episodeSelection?: ZosaEpisodeSelection;

    }

    /**
     * @ngdoc interface
     * @name ZosaScheduleIntervalRecordingParams
     *
     * @description
     * Some common parameters shared by recording scheduling methods.
     *
     */
    interface ZosaScheduleRecordingCommonParams {

        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingCommonParams#channel
         * @propertyOf ZosaScheduleRecordingCommonParams
         *
         * @description
         * The recorded channel.
         *
         * @returns {ZosaId}
         *
         */
        channel: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingCommonParams#deleteMode
         * @propertyOf ZosaScheduleRecordingCommonParams
         *
         * @description
         * Set the delete mode for the recording.
         *
         * • Optional.
         * • If not specified the default value is {@link ZosaRecordingDeleteMode#RECORDING_DELETE_MODE_MANUAL}.
         * • {@link ZosaRecordingDeleteMode#RECORDING_DELETE_MODE_RETAIN_EPISODES} will be ignored if this is not a parent recording.
         *
         * @returns {ZosaRecordingDeleteMode}
         *
         */
        deleteMode?: ZosaRecordingDeleteMode;

        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingCommonParams#description
         * @propertyOf ZosaScheduleRecordingCommonParams
         *
         * @description
         * Description of the recording.
         *
         * • Optional.
         * • If not specified, the description is given by the service provider based on certain rule.
         *
         * @returns {string}
         *
         */
        description?: string;

        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingCommonParams#device
         * @propertyOf ZosaScheduleRecordingCommonParams
         *
         * @description
         * Device where the recording will be done.
         *
         * • Optional.
         * • Valid only if the recording's type is {@link Zosa.RECORDING_TYPE_CPVR}.
         * • If this parameter is not specified, the CPVR recording is created on the current device.
         *
         * @returns {ZosaId}
         *
         */
        device?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingCommonParams#endMargin
         * @propertyOf ZosaScheduleRecordingCommonParams
         *
         * @description
         * The time margin in milliseconds after the scheduled end time (i.e. endTime).
         *
         * • Optional.
         * • If not specified, the default value is 0.
         *
         * @returns {number}
         *
         */
        endMargin?: number;

        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingCommonParams#name
         * @propertyOf ZosaScheduleRecordingCommonParams
         *
         * @description
         * Name of the recording.
         *
         * • Optional.
         * • If not specified, the name is given by the service provider based on certain rule.
         *
         * @returns {string}
         *
         */
        name?: string;

        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingCommonParams#priority
         * @propertyOf ZosaScheduleRecordingCommonParams
         *
         * @description
         * The priority of the recording. A high value is a high priority.
         *
         * • Optional.
         * • Valid range is [0, 65535].
         *
         * @returns {number}
         *
         */
        priority?: number;

        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingCommonParams#retainEpisodesCount
         * @propertyOf ZosaScheduleRecordingCommonParams
         *
         * @description
         * Number of episodes to retain in case of automatic deletion.
         *
         * • Optional.
         * • Ignored if the deleteMode is not set to {@link ZosaRecordingDeleteMode#RECORDING_DELETE_MODE_RETAIN_EPISODES}.
         *
         * @returns {number}
         *
         */
        retainEpisodesCount?: number;

        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingCommonParams#serviceProvider
         * @propertyOf ZosaScheduleRecordingCommonParams
         *
         * @description
         * ServiceProvider to schedule a recording.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingCommonParams#startMargin
         * @propertyOf ZosaScheduleRecordingCommonParams
         *
         * @description
         * The time margin in milliseconds before the scheduled start time (i.e. startTime).
         *
         * • Optional.
         * • If not specified, the default value is 0.
         *
         * @returns {number}
         *
         */
        startMargin?: number;

        /**
        * @ngdoc property
        * @name ZosaScheduleRecordingCommonParams#source
        * @propertyOf ZosaScheduleRecordingCommonParams
        *
        * @description
        * Source for the recording (DVB, IP, ...). Scheduling the recording will fail if an unavailable source is specified.
        *
        * • Optional.
        * • If not specified the default depends on the service provider.
        *
        * @returns {number}
        *
        */
        source?: ZosaSource;

        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingCommonParams#type
         * @propertyOf ZosaScheduleRecordingCommonParams
         *
         * @description
         * Type of this recording.
         *
         * @returns {ZosaRecordingType}
         *
         */
        type: ZosaRecordingType;

        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingCommonParams#useTimeshiftBuffer
         * @propertyOf ZosaScheduleRecordingCommonParams
         *
         * @description
         * Control of timeshift buffer usage for a recording. When set true this allows the recording to include a part of any ongoing timeshift buffer.
         * This is for the case where the requested recording start time (or program start time for a program recording) occurs before the actual recording start.
         * This setting is not applicable for parent recordings, i.e., it has no effect when a series or recurring interval recording is scheduled.
         *
         * • Optional.
         * • If not specified, the default value is false.
         *
         * @returns {boolean}
         *
         */
        useTimeshiftBuffer?: boolean;

        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingCommonParams#videoDefinition
         * @propertyOf ZosaScheduleRecordingCommonParams
         *
         * @description
         * Video definition of the stream that should be used to record. If videoDefinition is not available, scheduling the recording will fail.
         *
         * • Optional.
         *
         * @returns {ZosaVideoDefinition}
         *
         */
        videoDefinition?: ZosaVideoDefinition;

    }

    /**
     * @ngdoc interface
     * @name ZosaScheduleRecordingResponse
     *
     * @description
     * Used in the response to {@link Zosa.scheduleProgramRecording} and {@link Zosa.scheduleIntervalRecording} in {@link ZosaRequestResponseEvent} for success event.
     *
     */
    interface ZosaScheduleRecordingResponse {

        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingResponse#recordingId
         * @propertyOf ZosaScheduleRecordingResponse
         *
         * @description
         * Identifier of the scheduled recording.
         *
         * • Always provided.
         *
         * @returns {ZosaId}
         *
         */
        recordingId: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingResponse#remoteRecordingSchedulingStatus
         * @propertyOf ZosaScheduleRecordingResponse
         *
         * @description
         * Additional information regarding remote recording scheduling.
         *
         * • Provided in case of remote scheduling (scheduling with a specified device which is not the current device).
         *
         * @returns {ZosaId}
         *
         */
        remoteRecordingSchedulingStatus: ZosaRemoteRecordingSchedulingStatus

    }

    /**
     * @ngdoc interface
     * @name ZosaServiceProviderItem
     *
     * @description
     * Represents a Zosa service provider.
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_SERVICE_PROVIDER_ITEM}
     *
     */
    interface ZosaServiceProviderItem extends ZosaItem {

        /**
         * @ngdoc property
         * @name ZosaServiceProviderItem#isMainServiceProvider
         * @propertyOf ZosaServiceProviderItem
         *
         * @description
         * Indicates whether this service provider is active or not, in other words if a successful call to Zosa#serviceProviderLogin() has been made already. It only indicates if a successful call has been made to Zosa#serviceProviderLogin() and not if some service provider specific implementation has done all its things, so Zosa#ZosaServiceProviderSessionErrorEvent has no effect on this.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {boolean}
         *
         */
        isActive?: boolean;

        /**
         * @ngdoc property
         * @name ZosaServiceProviderItem#isMainServiceProvider
         * @propertyOf ZosaServiceProviderItem
         *
         * @description
         * Indicates whether this service provider is the main service provider.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {boolean}
         *
         */
        isMainServiceProvider?: boolean;

        /**
         * @ngdoc property
         * @name ZosaServiceProviderItem#name
         * @propertyOf ZosaServiceProviderItem
         *
         * @description
         * Name of the service provider (note that title is for display, name is for logic).
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {string}
         *
         */
        name?: string;

    }

    /**
     * @ngdoc type
     * @name ZosaSelectedStreamReason
     *
     * @description
     * Possible values of a ZosaPlaybackSession's selectedStreamReason.
     *
     */
    interface IZosaSelectedStreamReason {

        /**
         * @name ZosaSelectedStreamReason#SELECTED_STREAM_REASON_INSUFFICIENT_BANDWIDTH
         * @memberOf ZosaSelectedStreamReason
         *
         * @description
         * Reason for selection of stream is insufficient bandwidth.
         *
         */
        SELECTED_STREAM_REASON_INSUFFICIENT_BANDWIDTH: ZosaSelectedStreamReason;

        /**
         * @name ZosaSelectedStreamReason#SELECTED_STREAM_REASON_NOT_SUBSCRIBED
         * @memberOf ZosaSelectedStreamReason
         *
         * @description
         * Reason for selection of stream is that user is not subscribed to other stream.
         *
         */
        SELECTED_STREAM_REASON_NOT_SUBSCRIBED: ZosaSelectedStreamReason;

        /**
         * @name ZosaSelectedStreamReason#SELECTED_STREAM_REASON_OUTPUT_HDCP_VERSION_NOT_APPROPRIATE
         * @memberOf ZosaSelectedStreamReason
         *
         * @description
         * Reason for selection of stream is that HDCP capabilities of the output or not appropriate
         *
         */
        SELECTED_STREAM_REASON_OUTPUT_HDCP_VERSION_NOT_APPROPRIATE: ZosaSelectedStreamReason;

        /**
         * @name ZosaSelectedStreamReason#SELECTED_STREAM_REASON_OUTPUT_QUALITY_DOWNGRADE
         * @memberOf ZosaSelectedStreamReason
         *
         * @description
         * Reason for selection of stream is that stream should be downgraded due to missing output capabilities
         *
         */
        SELECTED_STREAM_REASON_OUTPUT_QUALITY_DOWNGRADE: ZosaSelectedStreamReason;

        /**
         * @name ZosaSelectedStreamReason#SELECTED_STREAM_REASON_OUTPUT_UHD_NOT_SUPPORTED
         * @memberOf ZosaSelectedStreamReason
         *
         * @description
         * Reason for selection of stream is that output does not support UHD
         *
         */
        SELECTED_STREAM_REASON_OUTPUT_UHD_NOT_SUPPORTED: ZosaSelectedStreamReason;

        /**
         * @name ZosaSelectedStreamReason#SELECTED_STREAM_REASON_OUTPUT_VIDEO_DOWNSCALE
         * @memberOf ZosaSelectedStreamReason
         *
         * @description
         * Reason for selection of stream is that stream should be downscaled due to missing output capabilities
         *
         */
        SELECTED_STREAM_REASON_OUTPUT_VIDEO_DOWNSCALE: ZosaSelectedStreamReason;

        /**
         * @name ZosaSelectedStreamReason#SELECTED_STREAM_REASON_UNKNOWN
         * @memberOf ZosaSelectedStreamReason
         *
         * @description
         * Reason for selection of stream is unknown.
         *
         */
        SELECTED_STREAM_REASON_UNKNOWN: ZosaSelectedStreamReason;
    }

    /**
     * @ngdoc interface
     * @name ZosaServiceProviderLoginError
     *
     * @description
     * Used in the response to {@link Zosa.serviceProviderLogin} for failure event when login is unsuccessful.
     *
     */
    interface ZosaServiceProviderLoginError extends ZosaError {

        /**
         * @ngdoc property
         * @name ZosaServiceProviderLoginError#loginRetryTime
         * @propertyOf ZosaServiceProviderLoginError
         *
         * @description
         * Minimum time in seconds until another login should be attempted.
         *
         * • Optional.
         * 
         * @returns {number}
         *
         */
        loginRetryTime?: number;

    }

    /**
     * @ngdoc interface
     * @name ZosaServiceProviderLoginParams
     *
     * @description
     * Input parameters for {@link Zosa.serviceProviderLogin}.
     *
     */
    interface ZosaServiceProviderLoginParams {

        /**
         * @ngdoc property
         * @name ZosaServiceProviderLoginParams#customProps
         * @propertyOf ZosaServiceProviderLoginParams
         *
         * @description
         * Custom login properties. Custom properties are generally not needed for most service providers but may be required in specific cases.
         * The names and expected values of these properties are not part of this documentation but will be provided by Zenterio when necessary.
         *
         * • Optional.
         * • Note: If required, the object must contain properties of type string only.
         *
         * @returns {any}
         *
         */
        customProps?: any;

        /**
         * @ngdoc property
         * @name ZosaServiceProviderLoginParams#deviceId
         * @propertyOf ZosaServiceProviderLoginParams
         *
         * @description
         * ID of client device.
         *
         * • Optional, for overriding the system specific value.
         *
         * @returns {string}
         *
         */
        deviceId?: string;

        /**
         * @ngdoc property
         * @name ZosaServiceProviderLoginParams#deviceIp
         * @propertyOf ZosaServiceProviderLoginParams
         *
         * @description
         * IP address of client device.
         *
         * • Optional, for overriding the system specific value.
         *
         * @returns {string}
         *
         */
        deviceIp?: string;

        /**
         * @ngdoc property
         * @name ZosaServiceProviderLoginParams#deviceMac
         * @propertyOf ZosaServiceProviderLoginParams
         *
         * @description
         * MAC address of client device.
         *
         * • Optional, for overriding the system specific value.
         *
         * @returns {string}
         *
         */
        deviceMac?: string;

        /**
         * @ngdoc property
         * @name ZosaServiceProviderLoginParams#deviceModel
         * @propertyOf ZosaServiceProviderLoginParams
         *
         * @description
         * Vendor device model, i.e. "iPhone 4S".
         *
         * • Optional, for overriding the system specific value.
         *
         * @returns {string}
         *
         */
        deviceModel?: string;

        /**
         * @ngdoc property
         * @name ZosaServiceProviderLoginParams#password
         * @propertyOf ZosaServiceProviderLoginParams
         *
         * @description
         * Password for service provider.
         *
         * • Optional, unless required by service provider.
         *
         * @returns {string}
         *
         */
        password?: string;

        /**
         * @ngdoc property
         * @name ZosaServiceProviderLoginParams#serviceProvider
         * @propertyOf ZosaServiceProviderLoginParams
         *
         * @description
         * Zosa service provider.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

        /**
         * @ngdoc property
         * @name ZosaServiceProviderLoginParams#url
         * @propertyOf ZosaServiceProviderLoginParams
         *
         * @description
         * URL to service provider.
         *
         * • Optional, unless required by zosa for service provider.
         *
         * @returns {string}
         *
         */
        url?: string;

        /**
         * @ngdoc property
         * @name ZosaServiceProviderLoginParams#username
         * @propertyOf ZosaServiceProviderLoginParams
         *
         * @description
         * User name (id) for service provider.
         *
         * • Optional, unless required by service provider.
         *
         * @returns {string}
         *
         */
        username?: string;

    }

    /**
     * @ngdoc interface
     * @name ZosaServiceProviderLoginResponse
     *
     * @description
     * Used in the response to {@link Zosa.serviceProviderLogin} for success event.
     *
     */
    interface ZosaServiceProviderLoginResponse {

        /**
         * @ngdoc property
         * @name ZosaServiceProviderLoginResponse#isFirstLogin
         * @propertyOf ZosaServiceProviderLoginResponse
         *
         * @description
         * Indicates whether this is the first time that a subscriber/profile logs in to the service provider.
         *
         * • Optional, for overriding the system specific value.
         *
         * @returns {boolean}
         *
         */
        isFirstLogin?: boolean;

    }

    /**
     * @ngdoc interface
     * @name ZosaServiceProviderSessionErrorEvent
     *
     * @description
     * Event sent when a service provider session has expired.
     * A new API call to Zosa#serviceProviderLogin() has to be made if the application wants to continue to use the service provider after this event has been received.
     *
     */
    interface ZosaServiceProviderSessionErrorEvent {

        /**
         * @ngdoc property
         * @name ZosaServiceProviderSessionErrorEvent#errorCode
         * @propertyOf ZosaServiceProviderSessionErrorEvent
         *
         * @description
         * Error code.
         *
         * @returns {ZosaErrorCode}
         *
         */
        // Deprecated, replaced by error.code.
        // errorCode: ZosaErrorCode;

        /**
         * @ngdoc property
         * @name ZosaServiceProviderSessionErrorEvent#error
         * @propertyOf ZosaServiceProviderSessionErrorEvent
         *
         * @description
         * Error for the event.
         *
         * @returns {string}
         *
         */
        error: ZosaError;

        /**
         * @ngdoc property
         * @name ZosaServiceProviderSessionErrorEvent#message
         * @propertyOf ZosaServiceProviderSessionErrorEvent
         *
         * @description
         * Description of the error.
         *
         * @returns {string}
         *
         */
        // Deprecated, replaced by error.message.
        // message: string;

        /**
         * @ngdoc property
         * @name ZosaServiceProviderSessionErrorEvent#serviceProviderId
         * @propertyOf ZosaServiceProviderSessionErrorEvent
         *
         * @description
         * Service provider that this event is for.
         *
         * @returns {ZosaId}
         *
         */
        serviceProviderId: ZosaId;

    }

    /**
     * @ngdoc interface
     * @name ZosaSetCustomChannelNumberingParams
     *
     * @description
     * Input parameters for {@link Zosa.setCustomChannelNumbering}.
     *
     */
    interface ZosaSetCustomChannelNumberingParams {

        /**
         * @ngdoc property
         * @name ZosaSetCustomChannelNumberingParams#device
         * @propertyOf ZosaSetCustomChannelNumberingParams
         *
         * @description
         * Device where the custom channel numbering will be set.
         *
         * • Optional.
         * • The current device is used if this is not specified.
         *
         * @returns {ZosaId}
         *
         */
        device?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaSetCustomChannelNumberingParams#numbering
         * @propertyOf ZosaSetCustomChannelNumberingParams
         *
         * @description
         * The numbering.
         *
         * @returns {ZosaCustomChannelNumber[]}
         *
         */
        numbering: ZosaCustomChannelNumber[];

        /**
         * @ngdoc property
         * @name ZosaSetCustomChannelNumberingParams#serviceProvider
         * @propertyOf ZosaSetCustomChannelNumberingParams
         *
         * @description
         * The serviceProvider that custom channel numbering should be set in.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;

    }

    /**
    * @ngdoc object
    * @name ZosaSourceType
    *
    * @description
    * Possible sources (e.g. for recordings).
    *
    */
    interface IZosaSource {

        /**
         * @name IZosaSourceType#SOURCE_DVB
         * @memberOf ZosaSource
         *
         * @description
         * DVB source.
         *
         */
        SOURCE_DVB: ZosaSource;

        /**
         * @name IZosaSourceType#SOURCE_IP
         * @memberOf ZosaSource
         *
         * @description
         * IP source.
         *
         */
        SOURCE_IP: ZosaSource;

    }

    /**
     * @ngdoc object
     * @name ZosaTransmissionType
     *
     * @description
     * Transmission type of stream.
     *
     */
    interface IZosaTransmissionType {

        /**
         * @name ZosaTransmissionType#TRANSMISSION_TYPE_ATSC_C
         * @memberOf ZosaTransmissionType
         *
         * @description
         * A cable ATSC (SCTE) transmitted stream.
         *
         */
        TRANSMISSION_TYPE_ATSC_C: ZosaTransmissionType;

        /**
         * @name ZosaTransmissionType#TRANSMISSION_TYPE_ATSC_T
         * @memberOf ZosaTransmissionType
         *
         * @description
         * A terrestrial ATSC transmitted stream.
         *
         */
        TRANSMISSION_TYPE_ATSC_T: ZosaTransmissionType;

        /**
         * @name ZosaTransmissionType#TRANSMISSION_TYPE_DVB_C
         * @memberOf ZosaTransmissionType
         *
         * @description
         * A DVB-C transmitted stream.
         *
         */
        TRANSMISSION_TYPE_DVB_C: ZosaTransmissionType;

        /**
         * @name ZosaTransmissionType#TRANSMISSION_TYPE_DVB_C2
         * @memberOf ZosaTransmissionType
         *
         * @description
         * A DVB-C or DVB-C2 transmitted stream.
         *
         */
        TRANSMISSION_TYPE_DVB_C2: ZosaTransmissionType;

        /**
         * @name ZosaTransmissionType#TRANSMISSION_TYPE_DVB_S
         * @memberOf ZosaTransmissionType
         *
         * @description
         * A DVB-S transmitted stream.
         *
         */
        TRANSMISSION_TYPE_DVB_S: ZosaTransmissionType;

        /**
         * @name ZosaTransmissionType#TRANSMISSION_TYPE_DVB_S2
         * @memberOf ZosaTransmissionType
         *
         * @description
         * A DVB-S or DVB-S2 transmitted stream.
         *
         */
        TRANSMISSION_TYPE_DVB_S2: ZosaTransmissionType;

        /**
         * @name ZosaTransmissionType#TRANSMISSION_TYPE_DVB_T
         * @memberOf ZosaTransmissionType
         *
         * @description
         * A DVB-T transmitted stream.
         *
         */
        TRANSMISSION_TYPE_DVB_T: ZosaTransmissionType;

        /**
         * @name ZosaTransmissionType#TRANSMISSION_TYPE_DVB_T2
         * @memberOf ZosaTransmissionType
         *
         * @description
         * A DVB-T or DVB-T2 transmitted stream.
         *
         */
        TRANSMISSION_TYPE_DVB_T2: ZosaTransmissionType;

        /**
         * @name ZosaTransmissionType#TRANSMISSION_TYPE_IPTV
         * @memberOf ZosaTransmissionType
         *
         * @description
         * An IP transmitted stream.
         *
         */
        TRANSMISSION_TYPE_IPTV: ZosaTransmissionType;

        /**
         * @name ZosaTransmissionType#TRANSMISSION_TYPE_ISDB_C
         * @memberOf ZosaTransmissionType
         *
         * @description
         * A ISDB-C transmitted stream.
         *
         */
        TRANSMISSION_TYPE_ISDB_C: ZosaTransmissionType;

        /**
         * @name ZosaTransmissionType#TRANSMISSION_TYPE_ISDB_S
         * @memberOf ZosaTransmissionType
         *
         * @description
         * A ISDB-S transmitted stream.
         *
         */
        TRANSMISSION_TYPE_ISDB_S: ZosaTransmissionType;

        /**
         * @name ZosaTransmissionType#TRANSMISSION_TYPE_ISDB_T
         * @memberOf ZosaTransmissionType
         *
         * @description
         * A ISDB-T transmitted stream.
         *
         */
        TRANSMISSION_TYPE_ISDB_T: ZosaTransmissionType;

        /**
         * @name ZosaTransmissionType#TRANSMISSION_TYPE_UNKNOWN
         * @memberOf ZosaTransmissionType
         *
         * @description
         * Unknown transmission type.
         *
         */
        TRANSMISSION_TYPE_UNKNOWN: ZosaTransmissionType;
    }

    /**
     * @ngdoc object
     * @name ZosaType
     *
     * @description
     * Error codes. Used for e.g. code in {@link ZosaError}.
     *
     */
    interface IZosaType {

        /**
         * @name ZosaType#ZOSA_TYPE_BANDWIDTH_BOOKING_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a bandwidth booking item.
         *
         */
        ZOSA_TYPE_BANDWIDTH_BOOKING_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_CATEGORY_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a category item.
         *
         */
        ZOSA_TYPE_CATEGORY_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_CHANNEL_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a channel item.
         *
         */
        ZOSA_TYPE_CHANNEL_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_CHANNEL_STREAM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a channel stream.
         *
         */
        ZOSA_TYPE_CHANNEL_STREAM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_DEVICE_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a device item.
         *
         */
        ZOSA_TYPE_DEVICE_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_FAVORITE_LIST_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a favorite list item.
         *
         */
        ZOSA_TYPE_FAVORITE_LIST_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_GENRE_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a genre item.
         *
         */
        ZOSA_TYPE_GENRE_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_MEDIA_PERSON_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a media person item.
         *
         */
        ZOSA_TYPE_MEDIA_PERSON_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_MESSAGE_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a message item.
         *
         */
        ZOSA_TYPE_MESSAGE_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_OFFER_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for an offer item.
         *
         */
        ZOSA_TYPE_OFFER_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_PARENT_RECORDING_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a parent recording item.
         *
         */
        ZOSA_TYPE_PARENT_RECORDING_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_PROFILE_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a profile item.
         *
         */
        ZOSA_TYPE_PROFILE_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_PROGRAM_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a program item.
         *
         */
        ZOSA_TYPE_PROGRAM_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_RECORDING_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a recording item.
         *
         */
        ZOSA_TYPE_RECORDING_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_REMINDER_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a reminder item.
         *
         */
        ZOSA_TYPE_REMINDER_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_SERVICE_PROVIDER_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a service provider item.
         *
         */
        ZOSA_TYPE_SERVICE_PROVIDER_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_STREAM_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a stream item.
         *
         */
        ZOSA_TYPE_STREAM_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_SUB_RECORDING_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a sub recording item.
         *
         */
        ZOSA_TYPE_SUB_RECORDING_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_TICKET_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for an offer subscription item.
         *
         */
        ZOSA_TYPE_TICKET_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_VAS_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a value-added service (VAS).
         *
         */
        ZOSA_TYPE_VAS_ITEM: ZosaType;

        /**
         * @name ZosaType#ZOSA_TYPE_VOD_ITEM
         * @memberOf ZosaType
         *
         * @description
         * Zosa type for a vod item.
         *
         */
        ZOSA_TYPE_VOD_ITEM: ZosaType;

    }

    /**
     * @ngdoc interface
     * @name ZosaUpdateDeviceParams
     *
     * @description
     * Input parameters for {@link Zosa.updateDevice}. Should contain the new values to set to given device's properties.
     *
     */
    interface ZosaUpdateDeviceParams {

        /**
         * @ngdoc property
         * @name ZosaUpdateDeviceParams#device
         * @propertyOf ZosaUpdateDeviceParams
         *
         * @description
         * Device to be updated. This value is typically the zosaId from ZosaDeviceItem.
         *
         * @returns {ZosaId}
         *
         */
        device: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaUpdateDeviceParams#name
         * @propertyOf ZosaUpdateDeviceParams
         *
         * @description
         * Friendly Name of the device. If provided the name on service provider server will be updated. If server update was successful and DLNA is supported, local name for DLNA communication will be updated.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        name?: string;

    }

    /**
     * @ngdoc interface
     * @name ZosaUpdateParentRecordingParams
     *
     * @description
     * Input parameters for {@link Zosa.updateParentRecording}. Contains the new values of a parent recording's properties that will be updated.
     *
     */
    interface ZosaUpdateParentRecordingParams {

        /**
         * @ngdoc property
         * @name ZosaUpdateParentRecordingParams#deleteMode
         * @propertyOf ZosaUpdateParentRecordingParams
         *
         * @description
         * Set the delete mode for the parent recording. The delete mode propagates down to the subrecordings.
         * If set to {@link ZosaRecordingDeleteMode#RECORDING_DELETE_MODE_AUTO} or {@link ZosaRecordingDeleteMode#RECORDING_DELETE_MODE_MANUAL} all subrecordings get the same value.
         * If set to {@link ZosaRecordingDeleteMode#RECORDING_DELETE_MODE_RETAIN_EPISODES} some subrecordings will get {@link ZosaRecordingDeleteMode#RECORDING_DELETE_MODE_AUTO}
         * and some will get {@link ZosaRecordingDeleteMode#RECORDING_DELETE_MODE_MANUAL} depending on the value of {@link retainEpisodesCount}.
         *
         * • Optional.
         *
         * @returns {ZosaRecordingDeleteMode}
         *
         */
        deleteMode?: ZosaRecordingDeleteMode;

        /**
         * @ngdoc property
         * @name ZosaUpdateParentRecordingParams#device
         * @propertyOf ZosaUpdateParentRecordingParams
         *
         * @description
         * Device where the recording will be done.
         *
         * • Optional.
         * • Valid only if the recording's type is or will be updated to {@link Zosa.RECORDING_TYPE_CPVR} or {@link Zosa.RECORDING_TYPE_NPVR_CPVR}.
         * • The current device is used if this is not specified when recordingType is updated to {@link Zosa.RECORDING_TYPE_CPVR} or {@link Zosa.RECORDING_TYPE_NPVR_CPVR}.
         *
         * @returns {ZosaId}
         *
         */
        device?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaUpdateParentRecordingParams#endMargin
         * @propertyOf ZosaUpdateParentRecordingParams
         *
         * @description
         * Set the end margin for future sub recordings for this parent recording. If a sub recording is currently being recorded the end margin will be updated for that sub recording as well. The margin is specified in millisecond.
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        endMargin?: number;

        /**
         * @ngdoc property
         * @name ZosaUpdateParentRecordingParams#episodeSelection
         * @propertyOf ZosaUpdateParentRecordingParams
         *
         * @description
         * Specification of which episodes will be recorded. This can be set if isSeries is true.
         *
         * @returns {ZosaEpisodeSelection}
         *
         */
        episodeSelection?: ZosaEpisodeSelection;

        /**
         * @ngdoc property
         * @name ZosaUpdateParentRecordingParams#recording
         * @propertyOf ZosaUpdateParentRecordingParams
         *
         * @description
         * The parent recording to update. Used to update a single identified parent recording.
         *
         * @returns {ZosaId}
         *
         */
        recording: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaUpdateParentRecordingParams#recordingType
         * @propertyOf ZosaUpdateParentRecordingParams
         *
         * @description
         * Set the type of the parent recording.
         *
         * • Optional.
         *
         * @returns {ZosaRecordingType}
         *
         */
        recordingType?: ZosaRecordingType;

        /**
         * @ngdoc property
         * @name ZosaUpdateParentRecordingParams#recurEndTime
         * @propertyOf ZosaUpdateParentRecordingParams
         *
         * @description
         * The time when the recurrence ends, expressed in milliseconds since 1970-01-01 00:00:00 UTC.
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        recurEndTime?: number

        /**
         * @ngdoc property
         * @name ZosaUpdateParentRecordingParams#retainEpisodesCount
         * @propertyOf ZosaUpdateParentRecordingParams
         *
         * @description
         * Set the number of episodes to retain in case of auto deletion of this parent recording.
         *
         * • Optional.
         * • Value is not used unless {@link deleteMode} is {@link ZosaRecordingDeleteMode#RECORDING_DELETE_MODE_RETAIN_EPISODES}.
         *
         * @returns {number}
         *
         */
        retainEpisodesCount?: number;


        /**
         * @ngdoc property
         * @name ZosaScheduleRecordingCommonParams#serviceProvider
         * @propertyOf ZosaScheduleRecordingCommonParams
         *
         * @description
         * ServiceProvider to schedule a recording.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaUpdateParentRecordingParams#startMargin
         * @propertyOf ZosaUpdateParentRecordingParams
         *
         * @description
         * Set the start margin for future sub recordings for this parent recording. The margin is specified in millisecond.
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        startMargin?: number;

        /**
         * @ngdoc property
         * @name ZosaUpdateParentRecordingParams#videoDefinition
         * @propertyOf ZosaUpdateParentRecordingParams
         *
         * @description
         * Change the video definition for upcoming (scheduled but not yet recorded) recordings children of this parent recording. If the requested video definition is not available it will not be changed.
         *
         * • Optional.
         *
         * @returns {ZosaVideoDefinition}
         *
         */
        videoDefinition?: ZosaVideoDefinition;

    }

    /**
     * @ngdoc interface
     * @name ZosaUpdateRecordingConflictParams
     *
     * @description
     * Input parameters for {@link Zosa.updateRecordingConflict}.
     *
     */
    interface ZosaUpdateRecordingConflictParams {

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingConflictParams#conflictGroup
         * @propertyOf ZosaUpdateRecordingConflictParams
         *
         * @description
         * One or more resolution set with which the conflict shall be updated. Should be resolution sets returned by {@link Zosa.getNextRecordingConflict}.
         *
         * @returns {ZosaRecordingConflictResolutionGroup}
         *
         */
        conflictGroup: ZosaRecordingConflictResolutionGroup;

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingConflictParams#conflictId
         * @propertyOf ZosaUpdateRecordingConflictParams
         *
         * @description
         * The id of a conflict situation.
         *
         * @returns {ZosaId}
         *
         */
        conflictId: ZosaId;


        /**
         * @ngdoc property
         * @name ZosaValidatePasswordParams#serviceProvider
         * @propertyOf ZosaValidatePasswordParams
         *
         * @description
         * ServiceProvider to validate password for.
         *
         * @returns {ZosaId}
         *
         */
        serviceProvider: ZosaId | null;


    }

    /**
     * @ngdoc interface
     * @name ZosaUpdateRecordingConflictResponse
     *
     * @description
     * Return value from {@link Zosa.updateRecordingConflict}.
     *
     */
    interface ZosaUpdateRecordingConflictResponse {

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingConflictResponse#conflictResolved
         * @propertyOf ZosaUpdateRecordingConflictResponse
         *
         * @description
         * Indicate if a conflict has been resolved after update.
         * 
         * • Alway provided.
         * • True if conflict is resolved, false otherwise.
         *
         * @returns {boolean}
         *
         */
        conflictResolved: boolean;

    }

    /**
     * @ngdoc interface
     * @name ZosaUpdateRecordingParams
     *
     * @description
     * Input parameters for {@link Zosa.updateRecording}. Contains the new values of a parent recording's properties that will be updated.
     *
     */
    interface ZosaUpdateRecordingParams {

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingParams#deleteMode
         * @propertyOf ZosaUpdateRecordingParams
         *
         * @description
         * Set the delete mode for the recording.
         *
         * • Optional.
         * • {@link ZosaRecordingDeleteMode#RECORDING_DELETE_MODE_RETAIN_EPISODES} will be ignored since this is not a parent recording.
         *
         * @returns {ZosaRecordingDeleteMode}
         *
         */
        deleteMode?: ZosaRecordingDeleteMode;

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingParams#description
         * @propertyOf ZosaUpdateRecordingParams
         *
         * @description
         * Description of the recording.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        description?: string;

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingParams#device
         * @propertyOf ZosaUpdateRecordingParams
         *
         * @description
         * Device where the recording will be done.
         *
         * • Optional.
         * • Valid only if the recording's type is or will be updated to Zosa.RECORDING_TYPE_CPVR or Zosa.RECORDING_TYPE_NPVR_CPVR.
         * • The current device is used if this is not specified when recordingType is updated to Zosa.RECORDING_TYPE_CPVR or Zosa.RECORDING_TYPE_NPVR_CPVR.
         *
         * @returns {ZosaId}
         *
         */
        device?: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingParams#endMargin
         * @propertyOf ZosaUpdateRecordingParams
         *
         * @description
         * The time margin in milliseconds after the scheduled end time.
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        endMargin?: number;

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingParams#endTime
         * @propertyOf ZosaUpdateRecordingParams
         *
         * @description
         * End time of the recording. Expressed in number of milliseconds since 1970-01-01 00:00:00 UTC.
         *
         * • Optional.
         * • Differentiate with recurrence end time when scheduling a periodic recording {@link recurEndTime}.
         *
         * @returns {ZosaDate}
         *
         */
        endTime?: ZosaDate;

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingParams#isWatched
         * @propertyOf ZosaUpdateRecordingParams
         *
         * @description
         * Indicates whether the content of a recording has been played.
         *
         * • Optional.
         *
         * @returns {boolean}
         *
         */
        isWatched?: boolean;

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingParams#name
         * @propertyOf ZosaUpdateRecordingParams
         *
         * @description
         * Name of the recording.
         *
         * • Optional.
         *
         * @returns {string}
         *
         */
        name?: string;

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingParams#priority
         * @propertyOf ZosaUpdateRecordingParams
         *
         * @description
         * The priority of the recording. A high value is a high priority.
         *
         * • Optional.
         * • Valid range is [0, 65535].
         *
         * @returns {number}
         *
         */
        priority?: number;

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingParams#recording
         * @propertyOf ZosaUpdateRecordingParams
         *
         * @description
         * The recording to update. Used to update a single identified recording (not a parent recording).
         *
         * @returns {ZosaId}
         *
         */
        recording: ZosaId;

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingParams#recordingType
         * @propertyOf ZosaUpdateRecordingParams
         *
         * @description
         * Set the type of the recording.
         *
         * • Optional.
         *
         * @returns {ZosaRecordingType}
         *
         */
        recordingType?: ZosaRecordingType;

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingParams#startMargin
         * @propertyOf ZosaUpdateRecordingParams
         *
         * @description
         * The time margin in milliseconds before the scheduled start time (i.e. {@link startTime}).
         *
         * • Optional.
         *
         * @returns {number}
         *
         */
        startMargin?: number;

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingParams#startTime
         * @propertyOf ZosaUpdateRecordingParams
         *
         * @description
         * Start time of the recording. Expressed in number of milliseconds since 1970-01-01 00:00:00 UTC.
         *
         * • Optional.
         *
         * @returns {ZosaDate}
         *
         */
        startTime?: ZosaDate;

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingParams#stop
         * @propertyOf ZosaUpdateRecordingParams
         *
         * @description
         * Stop an ongoing CPVR type ({@link Zosa.RECORDING_TYPE_CPVR}) recording.
         * This is similar to updating the endTime but without the need to compute a new one that would cause the recording to stop immediately.
         *
         * • Optional.
         * • If not specified, the default value is false.
         * • Ignored if the type of the recording to update is not CPVR.
         *
         * @returns {boolean}
         *
         */
        stop?: boolean;

        /**
         * @ngdoc property
         * @name ZosaUpdateRecordingParams#videoDefinition
         * @propertyOf ZosaUpdateRecordingParams
         *
         * @description
         * Video definition of the stream that should be used to record. If videoDefinition is not available, updating the recording will fail.
         *
         * • Optional.
         *
         * @returns {ZosaVideoDefinition}
         *
         */
        videoDefinition?: ZosaVideoDefinition;

    }

    /**
     * @ngdoc interface
     * @name ZosaVasItem
     *
     * @description
     * Represents a value-added service (VAS).
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_VAS_ITEM}
     *
     */
    interface ZosaVasItem extends ZosaItem {

        /**
         * @ngdoc property
         * @name ZosaVasItem#cmsId
         * @propertyOf ZosaVasItem
         *
         * @description
         * Content management system id.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {string}
         *
         */
        cmsId?: string;

        /**
         * @ngdoc property
         * @name ZosaVasItem#customProps
         * @propertyOf ZosaVasItem
         *
         * @description
         * Optional array of customized properties. For example: validityEndDayTime or validityStartDayTime.
         *
         * • Optional.
         * • If supported, properties will be documented in separate documentation.
         *
         * @returns {ZosaKeyValuePair[]}
         *
         */
        customProps?: ZosaKeyValuePair[];

        // "RESOLUTION"
        // "KEY_MAPPING_ID"
        // "MANIFEST_NAME"
        // "DIAL_APP_NAME"
        // "DIAL_ENABLE"
        // "DIAL_ALLOW_STOP"
        // "TURN_VIDEO_OFF"
        // "DATAPRIVACY_WARNING"
        // "TOKEN_IDENTIFIER"

        /**
         * @ngdoc property
         * @name ZosaVasItem#description
         * @propertyOf ZosaVasItem
         *
         * @description
         * Description of the content.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {string}
         *
         */
        description?: string;

        /**
         * @ngdoc property
         * @name ZosaVasItem#images
         * @propertyOf ZosaVasItem
         *
         * @description
         * Array of images for this value-added service.
         *
         * • Provided if requested in itemFields (field value may be null).
         *
         * @returns {ZosaImage[]}
         *
         */
        images?: ZosaImage[];

        /**
         * @ngdoc property
         * @name ZosaVasItem#isBlocked
         * @propertyOf ZosaVasItem
         *
         * @description
         * Parental control blocking status of VAS.
         * The field indicates if this VAS is currently blocked by parental control.
         * A VAS can be blocked because: parental rating of the VAS is not allowed for current user, the VAS itself or one or more genres or categories associated with the VAS are parentally locked.
         *
         * • Provided if requested in itemFields.
         *
         * @returns {boolean}
         *
         */
        isBlocked?: boolean;

        /**
         * @ngdoc property
         * @name ZosaVasItem#isLocked
         * @propertyOf ZosaVasItem
         *
         * @description
         * Indicates that this VAS is locked.
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {boolean}
         *
         */
        isLocked?: boolean;

        /**
         * @ngdoc property
         * @name ZosaVasItem#minViewingAge
         * @propertyOf ZosaVasItem
         *
         * @description
         * Parental rating minimum required viewing age (years).
         *
         * • Provided if requested in itemFields (value may be null if unknown or not available).
         *
         * @returns {number}
         *
         */
        minViewingAge?: number;

        /**
         * @ngdoc property
         * @name ZosaVasItem#parentalRating
         * @propertyOf ZosaVasItem
         *
         * @description
         * Contains parental rating of VAS. A larger value indicates a higher rating. The value varies depending on the content rating systems in different countries.
         *
         * • Provided if requested in itemFields.
         *
         * @returns {number}
         *
         */
        parentalRating?: number;

        /**
         * @ngdoc property
         * @name ZosaVasItem#url
         * @propertyOf ZosaVasItem
         *
         * @description
         * URL of the value-added service. The URL can be used to jump to a third-party VAS page.
         *
         * • Alway provided.
         * • Value shall not be null.
         *
         * @returns {string}
         *
         */
        url: string;

    }

    /**
     * @ngdoc interface
     * @name ZosaVodItem
     *
     * @description
     * Represents a VOD.
     *
     * zosaType is {@link ZosaType.ZOSA_TYPE_VOD_ITEM}
     *
     */
    interface ZosaVodItem extends ZosaItem {

    }

    /**
     * @ngdoc object
     * @name ZosaVideoDefinition
     *
     * @description
     * Possible values of a {@link ZosaChannelStreamItem}'s videoDefinition.
     *
     */
    interface IZosaVideoDefinition {

        /**
         * @name ZosaVideoDefinition#VIDEO_DEFINITION_HD
         * @memberOf ZosaVideoDefinition
         *
         * @description
         * Video stream is of HD definition.
         *
         */
        VIDEO_DEFINITION_HD: ZosaVideoDefinition;

        /**
         * @name ZosaVideoDefinition#VIDEO_DEFINITION_SD
         * @memberOf ZosaVideoDefinition
         *
         * @description
         * Video stream is of SD definition.
         *
         */
        VIDEO_DEFINITION_SD: ZosaVideoDefinition;

        /**
         * @name ZosaVideoDefinition#VIDEO_DEFINITION_UHD
         * @memberOf ZosaVideoDefinition
         *
         * @description
         * Video stream is of UHD definition.
         *
         */
        VIDEO_DEFINITION_UHD: ZosaVideoDefinition;

        /**
         * @name ZosaVideoDefinition#VIDEO_DEFINITION_UNKNOWN
         * @memberOf ZosaVideoDefinition
         *
         * @description
         * Video stream is of unknown definition.
         *
         */
        VIDEO_DEFINITION_UNKNOWN: ZosaVideoDefinition;

    }

}

declare var zosaJS: {
    prototype: zosa.Zosa;
    new(): zosa.Zosa;
}

declare module "zosaJS" {
    export = zosaJS;
}