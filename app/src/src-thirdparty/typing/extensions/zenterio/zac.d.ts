declare namespace zenterio {

    interface ZacStatic {

        readonly PluginVersion: zac.jszacVersion;
        readonly System: zac.jszacSystem;
        readonly Networks: zac.jszacNetworks;
        readonly StorageManager: zac.jszacStorageManager;
        readonly Outputs: zac.jszacOutputs;
        readonly AppManager: zac.jszacAppManager;
        readonly Frontends: zac.Frontend.jszacFrontendManager;

        CreateApp(manifestName: string, instanceName: string): zac.jszacApp;

        GetCustomAPI(name: string): zac.jszacCustomApi;

        /**
         * 
         * @ngdoc method
         * @name GetErrorDescription
         *
         * @description
         * Get a human readable string of an error previously returned by a function call.
         *
         * @param {number} errorCode An error previously returned by a function of a jsZAC object.
         *
         * @returns {string} A String describing the error code.
         *
         */
        GetErrorDescription(errorCode: number): string;

        /**
         * Operation couldn't be done due to access rights limitations 
         */
        readonly RESTRICTED_ACCESS: zac.ReturnCode;

        /**
         * Failed to tune, service not found in PAT or content unavailable (vod) etc 
         */
        readonly SERVICE_UNAVAILABLE: zac.ReturnCode;

        /**
         * content or data corrupt or invalid 
         */
        readonly CONTENT_CORRUPT: zac.ReturnCode;

        /**
         * Not enough platform resources available (including tuner etc) 
         */
        readonly INSUFFICIENT_RESOURCES: zac.ReturnCode;

        /**
         * Generic error, no details available 
         */
        readonly UNKNOWN_ERROR: zac.ReturnCode;

        /**
         * Operation, such as network access, took too long 
         */
        readonly TIMEOUT: zac.ReturnCode;

        /**
         * Resource is not found 
         */
        readonly NOT_FOUND: zac.ReturnCode;

        /**
         * Operation is not allowed due to content restrictions 
         */
        readonly CONTENT_RESTRICTION: zac.ReturnCode;

        /**
         * Blocked by parental control 
         */
        readonly PARENTAL_CONTROL_BLOCKED: zac.ReturnCode;

        /**
         * Content, or other resorce neccesary for operation, is not subscribed 
         */
        readonly NOT_SUBSCRIBED: zac.ReturnCode;

        /**
         * It is not possible to allocate the required bandwidth for the operation 
         */
        readonly INSUFFICIENT_BANDWIDTH: zac.ReturnCode;

        /**
         * Operation is not possible since a device is not available.
         */
        readonly DEVICE_NOT_AVAILABLE: zac.ReturnCode;

        // TODO missing documentation
        /**
         * 
         */
        readonly OUTPUT_CAPABILITIES_MISSING: zac.ReturnCode;
    }

    namespace zac {

        type AddressMode = number;
        type AppStartedStatusType = number;
        type AppStatusChangedReasonType = number;
        type AspectRatio = number;
        type AudioChannel = number;

        /**
         * @ngdoc type
         * @name AudioChannelConfig
         *
         * @description
         * 
         *
         */
        type AudioChannelConfig = string;

        type AudioType = number;
        type BlockReason = number;
        type ComponentType = number;
        type ConnectionState = number;
        type ContainerFormat = number;
        type CustomAPIEvent = any;
        type DialAppStatus = number;
        type DialogType = number;
        type FactoryResetMode = number;
        type FileSystemType = number;
        type InputFieldType = number;
        type InterfaceType = number;
        type LinkStatus = number;
        type LowFrequencyEffectsMode = number;
        type NetworkPropertyType = number;
        type OutputBlockingStatusChangeReason = number;
        type OutputChangedReason = number;
        type OutputPropertyKey = number | string;
        type PhysicalStorageConnectionType = number;
        type PlayerAspectRatioConversion = number;
        type PlayerCapabilities = number;
        type PlayerState = number;
        type PowerState = number;
        type PropertyKey = string;
        type ReturnCode = number;
        type SelectPolicy = number;
        type StatusChangeReason = number;
        type StorageEventType = number;
        type StorageListEventType = number;
        type StoragePurpose = number;
        type StorageState = number;
        type StorageType = number;
        type SubtitlingType = number;
        type SwUpgradeStatus = number;
        type SwUpgradeComponent = number;
        type SymbolType = number;
        type TeletextType = number;
        type VideoCodec = number;
        type WakeupReason = number;
        type BooleanString = "true" | "false";
        type OutputSupportedVideoFormatSource = number;
        type BluetoothState = number;

        interface ProgramInfo {
            present: jszacProgram, follow: jszacProgram
        }

        interface jszacProgram {
            startTimeUTC: number;
            endTimeUTC: number;
            name: string;
            description: string;
            longDescription: string;
            runningStatus: number;
            minViewingAge: number;
            classificationLevel1: number;
            classificationLevel2: number;
            hasHD: boolean;
            hasWideScreen: boolean;
            hasMultichannelAudio: boolean;
            hasHearingImpairedAudio: boolean;
            hasVisuallyImpairedAudio: boolean;
            isEpisode: boolean;
            /**
             * Is this program blocked by parental control. Undefined if unknown. 
             */
            isBlocked: boolean;
            caStatus: number;
            streamUpdatedMask: number;
        }


        /**
         *  An object for playing media (video and audio).
         *
         * The player has different states (PlayerState) and will fire a MediaPlayerStateChanged event whenever the state has changed. This event should be monitored by the application.
         */
        interface jszacMediaPlayer extends EventGenerator, HTMLElement {

            /**
             * Stereo
             */
            readonly AUDIO_CHANNEL_STEREO: AudioChannel;
            /**
             * Multichannel
             */
            readonly AUDIO_CHANNEL_MULTICHANNEL: AudioChannel;

            /**
             * MPEG2 audio
             */
            readonly MPEG2: AudioType;
            /**
             * Dolby Digital
             */
            readonly AC3: AudioType;
            /**
             * Enhanced Dolby Digital
             */
            readonly EAC3: AudioType;
            /**
             * Dolby Atmos®
             */
            readonly ATMOS: AudioType;
            /**
             * Digital Theater Systems (DTS)
             */
            readonly DTS: AudioType;
            /**
             * High-Efficiency Advanced Audio Coding (Stereo)
             */
            readonly HEAAC_L2: AudioType;
            /**
             * High-Efficiency Advanced Audio Coding (Multichannel)
             */
            readonly HEAAC_L4: AudioType;
            /**
             * Advanced Audio Coding
             */
            readonly AAC: AudioType;
            /**
             * MPEG-2 Audio Layer III
             */
            readonly MP3: AudioType;

            /**
             * Audio
             */
            readonly COMPONENT_AUDIO: ComponentType;
            /**
             * Video
             */
            readonly COMPONENT_VIDEO: ComponentType;
            /**
             * DVB subtitling
             */
            readonly COMPONENT_SUBTITLING: ComponentType;
            /**
             * Teletext
             */
            readonly COMPONENT_TELETEXT: ComponentType;

            /**
             *  Player is not playing.
             */
            readonly PLAYERSTATE_DISCONNECTED: PlayerState;
            /**
             *  Player has started to connect to the URL (tuning to a frequency, connecting to a video on demand server or similar).
             */
            readonly PLAYERSTATE_CONNECTING: PlayerState;
            /**
             *  Player is connected to media source but has not yet started any rendering of audio or video.
             */
            readonly PLAYERSTATE_BUFFERING: PlayerState;
            /**
             *  Playback is in progress.
             */
            readonly PLAYERSTATE_PLAYING: PlayerState;
            /**
             * An Error has occurred.
             *
             * Errors can be temporary or permanent. A temporary error might be when playing a stream from an IP server (PLAYERSTATE_PLAYING) and there is a network problem.
             * Player will switch to PLAYERSTATE_ERROR for a few seconds and then automatically resume playing (PLAYERSTATE_PLAYING) when connection is up again.
             * A permanent error might be that the URL is invalid or that the server could not be found.
             */
            readonly PLAYERSTATE_ERROR: PlayerState;

            /**
            *  Media player has only basic capabilities.
            */
            readonly CAPABILITY_NONE: PlayerCapabilities;
            /**
            *  Media player has trick play capability (speed and position can be modified).
            */
            readonly CAPABILITY_TRICKPLAY: PlayerCapabilities;
            /**
            *  Media player has video freezing capability Media player has playback position capability allowed.
            */
            readonly CAPABILITY_TRICKPLAY_SET_POSITION: PlayerCapabilities;
            /**
            *  Media player has rewind capability allowed.
            */
            readonly CAPABILITY_TRICKPLAY_REWIND: PlayerCapabilities;
            /**
            *  Media player has fast forward capability allowed.
            */
            readonly CAPABILITY_TRICKPLAY_FAST_FORWARD: PlayerCapabilities;
            /**
            *  Media player has pause capability allowed.
            */
            readonly CAPABILITY_TRICKPLAY_PAUSE: PlayerCapabilities;

            /**
             * SetSpeed() caused the event.
             */
            readonly REASON_SPEED_CHANGE: StatusChangeReason;
            /**
             * The storage for timeshift is full. The player will stop recording (for timeshift), and go to live mode. Trickplay capability is lost, speed is normal speed ahead, position and duration changed to 0.
             */
            readonly REASON_STORAGE_FULL: StatusChangeReason;
            /**
             * Event that is sent when timeshift recording can't start or continue because too many recorders would be active. If recording has started it will be stopped.
             */
            readonly REASON_TIMESHIFT_TOO_MANY_RECORDERS: StatusChangeReason;
            /**
             * Event that is sent when continuity count errors has been detected by the player The parameter PreviousValue is used to convey number of errors detected since last poll. See Continuity Counter errors for more information.
             */
            readonly REASON_CC_ERRORS: StatusChangeReason;

            /**
             * No access from the CA system.
             */
            readonly BLOCKREASON_CA_ACCESS_DENIED: BlockReason;
            /**
             * There is CA system registerred that can decrypt the stream.
             */
            readonly BLOCKREASON_CA_ACCESS_DENIED_NO_CAS_FOUND: BlockReason;
            /**
             * There are no CA system registerred hence no CA system that can decrypt the stream.
             */
            readonly BLOCKREASON_CA_ACCESS_DENIED_NO_CAS_REGISTERED: BlockReason;
            /**
             * The CA system required pin dialog.
             */
            readonly BLOCKREASON_CA_ACCESS_DENIED_PIN_REQUIRED: BlockReason;
            /**
             * The content is blocked in this geographical region.
             */
            readonly BLOCKREASON_CA_ACCESS_DENIED_GEOGRAPHICAL_BLACKOUT: BlockReason;
            /**
             * Access to the DVB network denied.
             */
            readonly BLOCKREASON_CA_ACCESS_DENIED_NETWORK_BLOCK: BlockReason;
            /**
             * No keys available to decrypt the content.
             */
            readonly BLOCKREASON_CA_ACCESS_DENIED_KEY_NOT_AVAILABLE: BlockReason;
            /**
             * Not sufficient credits to show the content.
             */
            readonly BLOCKREASON_CA_ACCESS_DENIED_INSUFFICIENT_CREDIT: BlockReason;
            /**
             * The service is locked.
             */
            readonly BLOCKREASON_SERVICELOCK_WHOLE_DAY: BlockReason;

            readonly INITIAL_PAGE: TeletextType;

            /**
             * Property that specify when automatic parental control
             * user action requests (UAR) dialogs shall be requested.
             *
             * This property should be set in the call to PlayUrl().
             * If changed during playing it might not take effect until the
             * next program starts.
             *
             * If omitted the default rule will be applied i.e. a dialog is requested
             * when blocked by parental control. This is only valid for main player.
             * The picture-in-picture player will not generate a dialog request.
             *
             * If this property is set to PACO_UAR_SUPPRESS there will not be any new
             * dialog requested. If there is a dialog request already pending it will
             * not be affected.
             *
             * If this property is set to PACO_UAR_CREATE it will make a
             * picture-in-picture player behave as main player i.e. a dialog will be
             * requested when blocked.
             *
             * This is only valid for parental blocking handled by the system
             * It does not apply if handled by mechanisms unknown to the system
             * e.g. CI+ parental blocking. Those dialogs cannot be suppressed.
             */

            readonly PLAY_PROP_PACO_UAR_RULE: string;

            /**
             * Property to indicate that URL provided is WebRadio URL.
             * If this property is set in a call to PlayUrl(), it indicates that provided URL is a WebRadio URL. 
             * This property is intended for the companion device support and error handling.
             */
            readonly PLAY_PROP_WEBRADIO_URL: string;

            /**
             * If set as value of #PLAY_PROP_PACO_UAR_RULE generation of
             * dialog requests will be suppressed for that player.
             * PLAY_PROP_PACO_UAR_RULE and \ref ParentalControl_
             */
            readonly PACO_UAR_SUPPRESS: string;

            /**
             * Name of switch used by a player instance to set subtitling on or off.
             *
             * When starting to play an url the player will get the default value from jszacSettings and set this switch to that state. Use this switch to temporary override the default setting.
             * Setting the switch on (set state to true) does not guarantee that the subtitling will be rendered. Setting state off (false) guarantees that the subtitling is not rendered.
             */
            readonly SUBTITLING_SWITCH_NAME: string;


            /**
             * Property that specify the mode of automatic output.
             * If omitted or set to value VIDEO_FORMAT_AUTO_MODE_OFF the player will use the video format setting directly, or if not possible, use the highest video format supported by both tv and box.
             * If this property is set to VIDEO_FORMAT_AUTO_MODE_NATIVE the player will use the TV's native mode, or if not possible, use the highest video format supported by both tv and box.
             * If this property is set to VIDEO_FORMAT_AUTO_MODE_FOLLOW_VIDEO_FRAMERATE the player try to change output framerate to the same framerate as content without affecting resolution
             */
            readonly PLAY_PROP_OUTPUT_AUTO_MODE: string;

            /**
             * If this property is set to VIDEO_FORMAT_AUTO_MODE_FOLLOW_VIDEO_FRAMERATE the player try to change output framerate to the same framerate as content without affecting resolution
             */
            readonly VIDEO_FORMAT_AUTO_MODE_FOLLOW_VIDEO_FRAMERATE: string;

            DTExtensions: DTExtensions;

            /** 
             * The error that caused the player to enter STATE_ERROR.   
             */
            error: number;

            /** 
             * Extended information to the error that caused the player to enter error state.   
             */
            subReason: number;

            /**
             * Activates or de-activates a media component.
             * The list of available media components can be retrieved using the GetComponents() function.
             *
             * @param {number} componentId  Unique component identifier (not pid) of the component to be activated or deactivated.
             *
             * @returns {number}            Integer where 0 is OK, other is error.
             *
             * @throws                      A string containing error message if arguments are missing, of wrong type or have illegal value.
             */
            ActivateComponent(componentId: number): number;

            /**
             * Creates and adds a user controlled switch with specified name to the player.
             * The switch will only affect rendering of components of specified type. If state is false any rendering of that component type will not be possible.
             * There can be multiple switches where all must be true for rendering to occur.
             *
             * @param {ComponentType} type     The type of components that this switch should affect.
             * @param {boolean} initialState   The state the switch should have at creation.
             * @param {string} name            The name of the switch. Must be unique per player..
             * @param {boolean} private        [optional, default is true] When the switch is private it will only have effect when this player has ownership.
             *
             * @returns {number}            Integer where 0 is OK, other is error.
             *
             * @throws                      A string containing error message if arguments are missing, of wrong type or have illegal value.
             */
            AddSwitch(type: ComponentType, initialState: boolean, name: string, private: boolean): number;

            /**
             * Creates and adds a user controlled switch with specified name to the player.
             * The switch will only affect rendering of components of specified type. If state is false any rendering of that component type will not be possible.
             * There can be multiple switches where all must be true for rendering to occur.
             *
             * @param {Array<ComponentType>} types     The types of components that this switch should affect.
             * @param {boolean} initialState           The state the switch should have at creation.
             * @param {string} name                    The name of the switch. Must be unique per player..
             * @param {boolean} private                [optional, default is true] When the switch is private it will only have effect when this player has ownership.
             *
             * @returns {number}                       Integer where 0 is OK, other is error.
             *
             * @throws                                 A string containing error message if arguments are missing, of wrong type or have illegal value.
             */
            AddSwitch(types: Array<ComponentType>, initialState: boolean, name: string, private: boolean): number;

            /**
             * Get the capabilities of the player.
             * Please note that the capabilities of a player depends on the type and source of the media that is being played.
             *
             * @returns {number}   A bitmask with all capabilities of the player.
             *
             * @throws             A string containing error message if capabilities could not be fetched.
             */
            GetCapabilities(): PlayerCapabilities;

            /**
             * Gets a list of media components.
             *
             * @param {boolean} onlyActive         True if only active components should be fetched.
             *
             * @returns {Array<MediaComponent>}    Array of MediaComponent.
             *
             * @throws                             A string containing error message if argument is missing, of wrong type or has illegal value.
             *                                     A string containing error message if components could not be fetched.
             */
            GetComponents(onlyActive: boolean): Array<MediaComponent>;

            /**
             * Gets a default media component of specified type.
             *
             * @param {ComponentType} componentType    A type of component.
             *
             * @returns {MediaComponent}               A MediaComponent of type componentType or undefined if no default component.
             *
             * @throws                                 A string containing error message if argument is missing, of wrong type or has illegal value.
             *                                         A string containing error message if component could not be fetched.
             */
            GetDefaultComponent(componentType: ComponentType): MediaComponent | undefined;

            /**
             * Get the duration of a playing stream.
             *
             * @returns {number}   Duration of the media in milliseconds.
             *
             * @throws             A string containing error message if duration could not be fetched.
             */
            GetDuration(): number;

            /**
             * Get the current playback position of a player.
             *
             * @returns {number}   Current position in milliseconds.
             *
             * @throws             A string containing error message if position could not be fetched.
             */
            GetPosition(): number;

            /**
             * Get a snapshot of presently played program and the program to follow it.
             * The information reflects the actually played program and if in time shift it may differ from the ccurrently broadcasted.
             * Program information is only returned for broadcast or broadcast related content i.e. when playing scheduled TV and radio programs or recording (possibly also for catch up etc).
             *
             * The programs returned has reduced information. For full information use the jszacPrograms interface. On the other hand it contains information only available when playing such as parental blocking state which is not available when using the jszacPrograms interface.
             * @returns {Programinfo}   The program informatiom containg present and following programs. If there is no info available it will return undefined.
             *
             * @throws     A string containing error message if failed to get the program info. Note that it will not throw an error if there is no program information, only if there were an error when trying to get it.        
             * 
             * Note:  When the ProgramInfo is updated a MediaPlayerProgramChanged event is fired.
             */
            GetProgramInfo(): ProgramInfo | undefined;

            /**
             * Get player property.
             * Will return the value of a property either set by PlayURL(), UpdateProperties() or by the system.
             *
             * @param {string} key    The property to get.
             *
             * @returns {any}         The value of the or undefined if the property wasn't found.
             *
             * @throws                A	string containing error message upon error. It can be due to lack of access rights, arguments are missing, of wrong type etc.
             *                        If the property is only missing no exception will be thrown.
             */
            GetProperty(key: string): any;

            /**
             * Get the current speed of a player.
             * The speed is in percent of normal speed (100). Negative values indicate backwards movement.
             *
             * @returns {number}   Current speed.
             *
             * @throws             A string containing error message if speed could not be fetched.
             */
            GetSpeed(): number;

            /**
             * Get current state of the player.
             *
             * @returns {PlayerState}      The current state of the player.
             *
             * @throws                     A string containing error message if state could not be fetched.
             */
            GetState(): PlayerState;

            /**
             * Get a list of supported speeds for the player.
             * If any speed value is OK, the returned list will be empty.
             *
             * @returns {Array<number>}    Array of supported speeds.
             *
             * @throws                     A string containing error message if supported speeds could not be fetched.
             */
            GetSupportedSpeeds(): Array<number>;

            /**
             * Gets the state of a switch.
             *
             * @param {string} name    The name of the switch.
             *
             * @returns {boolean}      The state of the switch.
             *
             * @throws                 A string containing error message if arguments are missing, of wrong type or have illegal value.
             */
            GetSwitchState(name: string): boolean;


            /**
             * Get the current timeshift buffer maximum size allowed in seconds.
             * 
             * The current max size the player that limits how much it is allowed to buffer. The value can be zero in the cases of the player is either not allowed to timeshift, 
             * it's not possible to timeshift or simply that the value is not known. The size is the minimum of the setting KEY_TIMESHIFT_BUFFER_MINUTES and restriction set by 
             * Content Usage Rights. The size can change during playback, in that case TimeshiftRetentionLengthChangedEvent is posted with updated max timeshift buffer size.
             *
             * @returns {number}   buffer maximum size allowed in seconds.
             *
             * @throws             String containing an error message if the size could not be fetched
             */
            GetTimeshiftBufferMaxSize(): number;

            /**
             * Get current media URL.
             *
             * @returns {string}   URL defining the media being played.
             *
             * @throws             A string containing error message if URL could not be fetched.
             */
            GetUrl(): string;

            /**
             * Get the time difference in ms between the current playback position and the actual live position. A value of zero means that the playback is live.
             *
             * @returns {number}   A positive integer that represents the time difference between the current playback position and the actual live position in milliseconds.
             *
             * @throws             A string containing error message if video state could not be checked.
             */
            IsTimeshifted(): number;

            /**
             * Unblock a player that is blocked by parental control.
             *
             * If the player is blocked by parental control, e.g. age rating,
             * a dialog request will be triggered so that the end user can
             * authorize the unblocking of the player. If the player is not
             * currently blocked by parental control, nothing will happen.
             * The function can be used both for main and PiP players.
             *
             * It does not guarantee that a dialog is requested. If another
             * dialog request with higher priority is active this request will be
             * queued until all requests with higher priority has been handled.
             *
             * @returns {number}            Integer where 0 is OK, other is error.
             *
             */
            ParentalUnblock(): number;

            /**
             * Start playing media content.
             *
             * Start playback of media content defined by an URL. This operation is always asynchronous. The player will fire MediaPlayerStateChanged events when player state changes.
             * If operation is successful, it will reach PLAYERSTATE_PLAYING state.
             *
             * This operation causes player to take Player Ownership.
             *
             * @param {string} url          URL defining the media to play.
             * @param {number} offset       [optional, default is 0] The offset to start playing from, in milliseconds from the start of the stream. If the offset cannot be set, playback is started from beginning of stream (offset = 0). Must be positive (UINT32) value.
             * @param {boolean} trickPlay   [optional, default is true] Use trickplay capabilities if available and optional. If not available playing will start without trickplay ,i.e. timeshift, capabilities.
             *                              This is only valid for live streams when timeshift capability is optional (such as DVB-C or igmp). It is ignored for other types of streams.
             *                              For e.g. VOD there will be trickPlay capability even when this parameter is set to false.
             *                              See Timeshift (live delay) for more information
             * @param {any} props           [optional] A list of properties. Valid as long as playing this url. Names and value are strings.
             *                              Possible properties depend on implementation is not specified here (normally not needed).
             *
             * @returns {number}            Integer where 0 is OK, other is error.
             *
             * @throws                      A string containing error message if arguments are missing, of wrong type or have illegal value.
             */
            PlayUrl(url: string, offset?: number, trickPlay?: boolean, props?: any): number;

            /**
             * Removes the switch with specified name from the player.
             *
             * The switch will also be deleted. Only switches added with AddSwitch on this instance can be removed. If there is no switch by that name the function will return 0.
             *
             * A switch can be removed even when the player does not have ownership.
             *
             * @param {string} name     The name of the switch.
             *
             * @returns {number}        Integer where 0 is OK, other is error.
             *
             * @throws                  A string containing error message if arguments are missing, of wrong type or have illegal value.
             */
            RemoveSwitch(name: string): number;

            /**
             * Set the playback position.
             *
             * SetPosition(0) means JumpToBeginning() and SetPosition(any value >= GetDuration()) means JumpToEnd(). For a timeshift player, SetPosition(any value >= GetDuration()) means switching to "live" playing.
             *
             * If the duration is not known, SetPosition with a very high position value should still work like JumpToEnd() or switch to "live" playing.
             *
             * @param {number} position     The new playback position (milliseconds from start of stream).
             *
             * @returns {number}            Integer where 0 is OK, other is error.
             *
             * @throws                      A string containing error message if argument is missing, of wrong type or has illegal value.
             */
            SetPosition(position: number): number;

            /**
             * Set the playback speed.
             *
             * The speed is expressed in percent of normal speed (100). Negative values indicate backwards movement.
             * Any speed value can be specified, but for speed values that are not in the list of supported speeds, the closest supported non-zero speed will be selected. SetSpeed(0) means Pause().
             *
             * @param {number} speed    The requested speed value expressed in percent of normal speed. 100 means normal forward speed, 200 means double speed forward, 0 means pause and -50 is half speed backwards.
             *
             * @returns {number}        Integer where 0 is OK, other is error.
             *
             * @throws                  A string containing error message if argument is missing, of wrong type or has illegal value.
             */
            SetSpeed(speed: number): number;

            /**
             * Sets new state of the switch.
             *
             * @param {string} name     The name of the switch.
             * @param {boolean} state   If false it will prevent rendering of specified component type(s). Setting to true does not guarantee that rendering will be done. If any other switch is false there will be no rendering.
             *
             * @returns {number}        Integer where 0 is OK, other is error.
             *
             * @throws                  A string containing error message if arguments are missing, of wrong type or have illegal value.
             */
            SetSwitchState(name: string, state: boolean): number;

            /**
             * Stops playback of media stream and disconnects from the source.
             *
             * All allocated resources (like video decoder etc) are released. Player disconnects from VOD servers, igmp leave for igmp and similar.
             * This operation causes player to take Player Ownership.
             *
             * @returns {number}   Integer where 0 is OK, other is error
             */
            Stop(): number;

            /**
             * Register an event listener.
             *
             * Event indicating that the MediaPlayer has changed state.
             *
             * The event is identified with the name "MediaPlayerStateChanged".
             *
             * @returns {number}    An ID that shall be used when unregistering the event handler see unregisterEventListener()
             */
            registerEventListener(evtName: "MediaPlayerStateChanged", evtHandlerFunction: (event: MediaPlayerStateChanged) => void): number;

            /**
             * Register an event listener.
             *
             * Event indicating that speed or position was changed due to an interface call.
             *
             * This event is fired when a call to SetSpeed() or SetPosition() was called. Check reason to see what caused the event.
             * The event is identified with the name "MediaPlayerStatusChanged".
             *
             * @returns {number}    An ID that shall be used when unregistering the event handler see unregisterEventListener()
             */
            registerEventListener(evtName: "MediaPlayerStatusChanged", evtHandlerFunction: (event: MediaPlayerStatusChanged) => void): number;


            /**
             * Register an event listener.
             *
             * Event indicating that media playing reach end or beginning of content.
             *
             * @returns {number}    An ID that shall be used when unregistering the event handler see unregisterEventListener()
             */
            registerEventListener(evtName: "MediaPlayerEndOfStream", evtHandlerFunction: (event: MediaPlayerEndOfStream) => void): number;

            /**
             * Register an event listener.
             *
             * Event indicating that the ownership is transferred to the system.
             * This is posted when ownership is transferred to the system which means that no application have control of the shared player resources. At this point an 
             * application may take the ownership. It will typically be posted when an application that has ownership is terminated or releases ownership.
             *
             * @returns {number}    An ID that shall be used when unregistering the event handler see unregisterEventListener()
             */
            registerEventListener(evtName: "MediaPlayerOwnershipToSystem", evtHandlerFunction: (event: void) => void): number;

            /**
            * Register an event listener.
            *
            * Event indicating that the ownership is transferred to the system.
            * This is posted when ownership is transferred to the system which means that no application have control of the shared player resources. At this point an 
            * application may take the ownership. It will typically be posted when an application that has ownership is terminated or releases ownership.
            *
            * @returns {number}    An ID that shall be used when unregistering the event handler see unregisterEventListener()
            */
            registerEventListener(evtName: "MediaPlayerGotOwnership", evtHandlerFunction: (event: void) => void): number;

            /**
            * Register an event listener.
            *
            * Event indicating that the ownership is transferred to the system.
            * This is posted when ownership is transferred to the system which means that no application have control of the shared player resources. At this point an 
            * application may take the ownership. It will typically be posted when an application that has ownership is terminated or releases ownership.
            *
            * @returns {number}    An ID that shall be used when unregistering the event handler see unregisterEventListener()
            */
            registerEventListener(evtName: "MediaPlayerLostOwnership", evtHandlerFunction: (event: MediaPlayerLostOwnership) => void): number;

            /**
             * Register an event listener.
             *
             * Event that is sent from a zac media player to signal that audio/video has been blocked (or unblocked) on a specified output, which is connected to the player. 
             * Event will be sent only when output blocking status changes. The event also contains a list of all the current reasons why outputs are blocked for this player
             *
             * @returns {number}    An ID that shall be used when unregistering the event handler see unregisterEventListener()
             */
            registerEventListener(evtName: "MediaPlayerOutputBlockingStatusChanged ", evtHandlerFunction: (event: MediaPlayerOutputBlockingStatusChanged) => void): number;

            /**
             * Register an event listener.
             * Register (add) a listener to events of a specific event name. Events should be handled in the given function.
             *
             * @returns {number}    An ID that shall be used when unregistering the event handler see unregisterEventListener()
             */
            registerEventListener(evtName: string, evtHandlerFunction: (event: any) => void): number;

            /**
             * Unregister (remove) a listener identified by the id from getting events with the event name.
             * If the id was not found there will be no errors
             */
            unregisterEventListener(evtName: "MediaPlayerStateChanged", id: number): void;

            /**
             * Unregister (remove) a listener identified by the id from getting events with the event name.
             * If the id was not found there will be no errors
             */
            unregisterEventListener(evtName: "MediaPlayerEndOfStream", id: number): void;

            /**
             * Unregister (remove) a listener identified by the id from getting events with the event name.
             * If the id was not found there will be no errors
             */
            unregisterEventListener(evtName: "MediaPlayerStatusChanged", id: number): void;

            /**
             * Unregister (remove) a listener identified by the id from getting events with the event name.
             * If the id was not found there will be no errors
             */
            unregisterEventListener(evtName: "MediaPlayerOwnershipToSystem", id: number): void;

            /**
             * Unregister (remove) a listener identified by the id from getting events with the event name.
             * If the id was not found there will be no errors
             */
            unregisterEventListener(evtName: "MediaPlayerGotOwnership", id: number): void;

            /**
             * Unregister (remove) a listener identified by the id from getting events with the event name.
             * If the id was not found there will be no errors
             */
            unregisterEventListener(evtName: "MediaPlayerLostOwnership", id: number): void;

            /**
             * Unregister (remove) a listener identified by the id from getting events with the event name.
             * If the id was not found there will be no errors
             */
            unregisterEventListener(evtName: "MediaPlayerOutputBlockingStatusChanged", id: number): void;

            /**
             * Unregister (remove) a listener identified by the id from getting events with the event name.
             * If the id was not found there will be no errors
             */
            unregisterEventListener(evtName: string, id: number): void;
        }

        /**
         * An object describing a media component.
         *
         * The object is a snapshot of a component at a given time. When MediaPlayerComponentsChanged event has been fired the components may not valid and all should be re-fetched.
         * There can be multiple components on the same pid (e.g. one component for each language in dual mono or in teletext subtitling) which means that a pid cannot be use for identifying a component. The property id is used to identify a component.
         *
         * When starting to play all information may not be available (e.g. not specified in the PMT) and the values may not be correct. When the streams have been playing for a while some values may be updated and a MediaPlayerComponentsChanged will be fired.
         */
        interface MediaComponent {

            /**
             * Type of component.
             */
            type: ComponentType;

            /**
             * Unique component identifier. Generated by platform to identify a component.
             * The id is valid until playback is stopped or until MediaPlayerComponentsChanged is fired.
             * The id may be reused by the platform after the event or it may get a new id. There can however never be two different valid components with the same id.
             */
            id: number;


            /**
             * Stream type according to ISO/IEC standard 13818-1.
             */
            MPEGStreamType: number;

            /**
             * true indicates that the component is active.
             */
            isActive: boolean;
        }

        /**
         * An object describing an audio component.
         */
        interface AudioComponent extends MediaComponent {

            /**
             * Only used for MPEG2 audio
             */
            audioType: AudioType;

            /**
             * Configuration of the audio channel
             */
            channel: AudioChannel;

            /**
             * Language code
             */
            language: string;

            /**
             * 1 if it's for hearing impaired
             */
            isForHearingImpaired: number;

            /**
             * 1 if it's for visually impaired
             */
            isForVisuallyImpaired: number;
        }

        /**
         * An object describing a subtitling component.
         */
        interface SubtitlingComponent extends MediaComponent {

            /**
             * Language code
             */
            language: string;
        }

        /**
         * An object describing a teletext component.
         */
        interface TeletextComponent extends MediaComponent {

            teletextType: TeletextType;
        }

        /**
         * An object describing a video component.
         */
        interface VideoComponent extends MediaComponent {

            /**
             * Bitrate in kbps
             */
            bitrate: number;

            /**
             * Video codec used
             */
            codec: VideoCodec;

            /**
             * Height of the video stream
             */
            streamHeight: number;

            /**
             * Width of the video stream
             */
            streamWidth: number;
        }

        /**
         * Event indicating that one or more components has changed.
         * 
         * The previous component information held by the client is thus invalidated and should be updated by a call to GetComponents.
         * The event is identified with the name "MediaPlayerComponentsChanged".
         */
        interface MediaPlayerComponentsChanged {

        }

        /**
         * Event indicating that media playing reach end or beginning of content.
         *
         * This is posted when player reached end or beginning of a stream.
         * It can be reached after setting position or playing in normal or trick speed.
         * Also when reaching the end of a timeshift buffer this event will be fired indicating
         * live mode is reached. The player can change speed upon this event, e.g. when playing double
         * speed and reaching end of timeshift buffer the speed would normally be set to SPEED_NORMAL.
         * when reaching beginning of a VOD asset speed normally would be SPEED_NONE (pause). The speed
         * may differ depending on which chipset that is used.
         * The event is identified with the name "MediaPlayerEndOfStream".
         */
        interface MediaPlayerEndOfStream {
            /**
             * True if end was reached and false if beginning was reached.
             */
            endReached: boolean;
            /**
             * If playing from live stream or not, true if live, false otherwise.
             * Valid for broadcast streams (timeshift) only. For non broadcast it always return false.
             */
            isLive: boolean;
            /**
             * The new speed that was set after end of stream was reached.
             */
            speed: number;
        }

        /**
         * Event indicating that the MediaPlayer has received ownership.
         * 
         * The event is identified with the name "MediaPlayerGotOwnership".
         */
        interface MediaPlayerGotOwnership {

        }

        /**
         * Event indicating that the MediaPlayer has lost ownership.
         * 
         * This event is fired when another player (often in other application) takes control of the shared player resources. The event carries information about the status of the player at the moment when it lost the ownership.
         * 
         * The event is identified with the name "MediaPlayerLostOwnership".
         */
        interface MediaPlayerLostOwnership {

        }

        /**
          * Event that is sent from a zac media player to signal that audio/video has been blocked (or unblocked) on a specified output, which is connected to the player. 
          * Event will be sent only when output blocking status changes. The event also contains a list of all the current reasons why * outputs are blocked for this player.
          *
          * The event is identified with the name "MediaPlayerOutputBlockingStatusChanged ".
          */
        interface MediaPlayerOutputBlockingStatusChanged {

        }

        /**
         * Event indicating that the ownership is transferred to the system.
         * 
         * This is posted when ownership is transferred to the system which means that no application have control of the shared player resources. At this point an application may take the ownership. It will typically be posted when an application that has ownership is terminated or releases ownership.
         * 
         * The event is identified with the name "MediaPlayerOwnershipToSystem".
         */
        interface MediaPlayerOwnershipToSystem {

        }

        /**
         * Event that is sent from to signal that the program currently played has been changed and/or when the parental blocking status of the program has changed.
         * 
         * Application can call GetProgramInfo() to get the program information.
         * The event is identified with "MediaPlayerProgramChanged"
         */
        interface MediaPlayerProgramChanged {
            /**
             * The parental blocking status after the change.
             */
            currentBlockStatus: boolean;
            /**
             * The parental blocking status before the change
             */
            oldBlockStatus: boolean;
        }

        /**
         * Event indicating that the MediaPlayer has changed state.
         *
         * The event is identified with the name "MediaPlayerStateChanged".
         */
        interface MediaPlayerStateChanged {
            /**
             * The new state for the player.
             */
            state: PlayerState;
            /**
             * The URL that was used when the state was set. Note that it can be empty.
             */
            url: string;
            /**
             * The error that cause the player to enter state PLAYERSTATE_ERROR. Only valid if the state is PLAYERSTATE_ERROR.
             */
            error: number;
            /**
             * Additional information to the error.
             */
            subReason: number;
        }

        /**
         * Event indicating that speed or position was changed due to an interface call.
         *
         * This event is fired when a call to SetSpeed() or SetPosition() was called. Check reason to see what caused the event.
         * The event is identified with the name "MediaPlayerStatusChanged".
         */
        interface MediaPlayerStatusChanged {

            /**
             * Playback position when the event was fired (milliseconds relative start of stream).
             */
            position: number;
            /**
             * The reason why the event was fired.
             */
            reason: StatusChangeReason;
            /**
             * Playback speed when the event was fired (percent of normal speed).
             */
            speed: number;

            /**
             * Playback speed/position before the last trickplay action. Is valid if reason is REASON_SPEED_CHANGE or REASON_POSITION_CHANGE. If not valid this will be undefine
             */
            previousValue: number;
        }

        /**
         * Event generator class.
         *
         * Gives possibility for application to register and unregister event listeners for specified events that the object fires.
         */
        interface EventGenerator {

            /**
             * Register an event listener.
             * Register (add) a listener to events of a specific event name. Events should be handled in the given function.
             * 
             * return An ID that shall be used when unregistering the event handler see unregisterEventListener()
             */
            registerEventListener(evtName: string, evtHandlerFunction: (event: any) => void): number;

            /**
             * Unregister (remove) a listener identified by the ID from getting events with the event name.
             * 
             * If the ID was not found there will be no errors
             */
            unregisterEventListener(evtName: string, id: number): void;

        }

        interface jszacVideoFormat {

            /**
             * Horizontal resolution in pixels. 
             */
            height: number;

            /**
             * Vertical resolution in pixels. 
             */
            width: number;

            /**
             * Scan mode. True means progressive, false means interlaced. 
             */
            progressive: boolean;

            /**
             * Framerate in milli-frames per second. Example 29970 is 29.97 frames per second. 
             */
            framerate: number;
        }

        /**
        * This class handles setting and getting properties on the different audio/video/rf outputs available in the system.
        * This class fires OutputChangedEvent when there are changes to any of the outputs.
        */
        interface jszacOutputs {

            /**
            * This key is used for setting or getting the default video format on the output.
            * The default output video format will be set peristently and also the current video format on the output will be updated
            * accordingly if there are other settings preventing it such as auto modes. In that case only the default value is updated
            * and not the current video format. The video formats are defined in OutputsConstants.
            */
            readonly KEY_OUTPUT_DEFAULT_VIDEO_FORMAT: OutputPropertyKey;

            /**
            * This key is used for getting the current video format on the output.
            * Using this key will give the actual current video format. This can differ from the default video format in case of for example auto modes.
            * The video formats are defined in OutputsConstants.
            */
            readonly KEY_OUTPUT_CURRENT_VIDEO_FORMAT: OutputPropertyKey;

            /**
            * This key is used for getting the native video format of connected sink.
            * Using this key will give the native video format used by connected sink. This can differ from the default video format as it applies to sink. 
            * The video formats are defined in OutputsConstants.
             */
            readonly KEY_OUTPUT_NATIVE_VIDEO_FORMAT: OutputPropertyKey;

            /**
            * This key is used for getting the supported video formats on the output.
            * The supported video formats are represented as a list of video formats that is supported by both the output and product.
            * The video formats are defined in OutputsConstants.
            */
            readonly KEY_OUTPUT_SUPPORTED_VIDEO_FORMATS: OutputPropertyKey;

            /**
            * This key is used for getting the known HDCP versions that can be used to communicate with the connected TV.
            * Both the STB and the TV supports the version if present. 
            * It is a comma separated list of known supported versions. Some versions may not be known but may still be supported which normally is the case for version 1.4. 
            * Version 2.2 is however only supported if it is in the list.
            * Note: This key is only available for outputs that support HDCP as i.e. outputs of type OUTPUT_TYPE_HDMI.
            */
            readonly KEY_OUTPUT_SUPPORTED_HDCP_VERSIONS: OutputPropertyKey;

            /**
            * This key is used for getting the model name of the device connected to the output.
            * Normally the device is a TV.
            * Note: This key is only available for outputs that support HDCP as i.e. outputs of type OUTPUT_TYPE_HDMI.
            */
            readonly KEY_OUTPUT_TV_MODEL: OutputPropertyKey;

            /**
            * This key is used for getting the manufacturing date of the device connected to the output.
            * Normally the device is a TV. 
            * The format is YYYY:WW where YYYY is the maufacturing year e.g. 2015 and WW is the manufacturing week e.g. 05. 
            * If information is not available it will be replaced with XXXX or XX. If week is not available it can e.g. be "2008:XX".
            * Note: This key is only available for outputs that support HDCP as i.e. outputs of type OUTPUT_TYPE_HDMI.
            */
            readonly KEY_OUTPUT_TV_MANUFACTURING_DATE: OutputPropertyKey;

            /**
            * This key is used for getting the supported HDR formats that can be displayed on the TV.
            * The TV can support HDR10, HLG or HDR. 
            * It is a comma separated list of known supported formats. 
            * Note: This key is only available for outputs that support HDR as i.e. outputs of type OUTPUT_TYPE_HDMI.
            */
            readonly KEY_OUTPUT_SUPPORTED_HDR_FORMATS: OutputPropertyKey;

            /**
            * This key is used for getting the current HDCP status of the output.
            * Using this key will return if HDCP is currently engaged or not on the queried output.
            * The property return values are defined in OutputsConstants.
            */
            readonly KEY_OUTPUT_HDCP_STATUS: OutputPropertyKey;


            /**
            * This key is used for setting or getting the output auto mode.
            * The property values are defined in OutputsConstants.
            */
            readonly KEY_OUTPUT_VIDEO_FORMAT_AUTO_MODE: OutputPropertyKey;

            /**
            * The output was connected.
            */
            readonly REASON_CONNECTED: OutputChangedReason;

            /**
            * The output was disconnected.
            */
            readonly REASON_DISCONNECTED: OutputChangedReason;

            /**
            * The video format on the output has changed.
            */
            readonly REASON_VIDEO_FORMAT_CHANGED: OutputChangedReason;

            /**
             * HDCP cipher is inactive.
             */
            readonly REASON_HDCP_DISENGAGED: OutputChangedReason;

            /**
             * HDCP cipher is active.
             */
            readonly REASON_HDCP_ENGAGED: OutputChangedReason;

            /**
             * HDCP error.
             */
            readonly REASON_HDCP_ERROR: OutputChangedReason;

            /**
             * 	
             * list contains all video modes supported by Tv set
             */
            readonly VIDEO_FORMAT_SUPPORTED_BY_TV: OutputSupportedVideoFormatSource;

            /**
             * list contains all video modes supported by Tv set and STB
             */
            readonly VIDEO_FORMAT_SUPPORTED_BY_TV_AND_STB: OutputSupportedVideoFormatSource;

            /**
            * Get a property from a given output type.
            *
            * Parameters
            *   [in]	propertyKey	The key of the property to request.
            *   [in]	outputType	The string that identifies the output type to get the property from.
            * Returns
            *   A string with the property.
            * Exceptions
            *   A	string containing error message upon error.
            */
            GetProperty(propertyKey: OutputPropertyKey, outputType: string): string;

            /**
            * Get a list of properties for a given key and output type.
            *
            * When a property can hold more than one value, such as in KEY_OUTPUT_SUPPORTED_VIDEO_FORMATS, this function can be used to
            * get those values in a vector of values instead of in a comma-separated value string.
            *
            * Parameters
            *   [in]	propertyKey	The key of the property to request.
            *   [in]	outputType	The string that identifies the output type to get the property list from.
            * Returns
            *   An array of strings containing the values from the requested property.
            * Exceptions
            *   A	string containing error message upon error.
            */
            GetPropertyList(propertyKey: OutputPropertyKey, outputType: string): string[];

            /**
            * Get a list of properties from a given output type.
            *
            * Parameters
            * [in]	propertyKeys	An array of keys of the properties to request.
            * [in]	outputType	The string that identifies the output type to get the property from.
            * Returns
            * An OutputPropertyItems with the requested properties.
            * Exceptions
            * A	string containing error message upon error.
            */
            GetProperties(propertyKeys: OutputPropertyKey[], outputType: string): { [key: string]: string };

            /**
             * Get a list of supported video formats.
             * jszacVideoFormat object can be used to construct string of following format: [width]x[height][i|p][framerate in millihertz], for example "1920x1080p60000". 
             * Such a string can be eg. used to set video format using SetProperty().
             */
            GetSupportedVideoFormats(outputType: string, listVariant: OutputSupportedVideoFormatSource): jszacVideoFormat[];

            /**
            * Set a property for a given output type.
            *
            * Parameters
            *   [in]	propertyKey	The key of the property set.
            *   [in]	propertyValue	The property value to set.
            *   [in]	outputType	The string that identifies the output type to set the property on.
            * Returns
            *   A result code. OK, FEATURE_NOT_SUPPORTED or INVALID_PARAMETER.
            * Exceptions
            *   A	string containing error message upon error.
            */
            SetProperty(propertyKey: OutputPropertyKey, propertyValue: string, outputType: string): number;

            /**
            * Set a list of properties on a specified output type.
            *
            * Parameters
            *   [in]	properties	An OutputPropertyItems with the properties to request. Each property has a OutputPropertyKey and a value.
            *   [in]	outputType	The string that identifies the output type to set the property on.
            * Returns
            *   A result code. OK, FEATURE_NOT_SUPPORTED or INVALID_PARAMETER.
            * Exceptions
            *   A	string containing error message upon error.
            */
            SetProperties(properties: { [key: string]: string }, outputType: string): number;

            /**
            * A list of available output types.
            * A (read-only) array of strings containing the available output types in the system. See OutputsConstants.
            */
            availableOutputTypes: string[];

            /**
            * OutputsConstants, Pre-defined constants for use in functions specified in Outputs.
            */

            // Output types to be used as the outputType parameter in the Outputs functions. This is also the type that is
            // used when getting a list of available output types.
            readonly OUTPUT_TYPE_HDMI: string;
            readonly OUTPUT_TYPE_ANALOG: string;
            readonly OUTPUT_TYPE_SPDIF: string;
            readonly OUTPUT_TYPE_RF: string;

            // Video formats to use (and expect) in video format related calls.
            // VIDEO_FORMAT_PAL: string;
            // VIDEO_FORMAT_NTSC: string;
            // VIDEO_FORMAT_576p50: string;
            // VIDEO_FORMAT_576p60: string;
            // VIDEO_FORMAT_720p50: string;
            // VIDEO_FORMAT_720p60: string;
            // VIDEO_FORMAT_1080i50: string;
            // VIDEO_FORMAT_1080i60: string;
            // VIDEO_FORMAT_1080p50: string;
            // VIDEO_FORMAT_1080p60: string;
            // VIDEO_FORMAT_UHD3840x2160p25: string;
            // VIDEO_FORMAT_UHD3840x2160p30: string;
            // VIDEO_FORMAT_UHD3840x2160p50: string;
            // VIDEO_FORMAT_UHD3840x2160p60: string;

            // https://gard.telekom.de/gard/browse/NGTVNEW-4746

            // VIDEO_FORMAT_640x480p60: string;
            // VIDEO_FORMAT_720x480p60: string;
            // VIDEO_FORMAT_800x600p60: string;
            // VIDEO_FORMAT_1024x768p60: string;
            // VIDEO_FORMAT_1366x768p60: string;
            // VIDEO_FORMAT_1920x1080p24: string;
            // VIDEO_FORMAT_1920x1080p25: string;
            // VIDEO_FORMAT_1920x1080p30: string;
            // VIDEO_FORMAT_3840x2160p24: string;
            // VIDEO_FORMAT_4096x2160p24: string;
            // VIDEO_FORMAT_UHD4096x2160p25: string;
            // VIDEO_FORMAT_UHD4096x2160p30: string;
            // VIDEO_FORMAT_UHD4096x2160p50: string;
            // VIDEO_FORMAT_UHD4096x2160p60: string;

            // HDCP status
            readonly HDCP_NOT_ENGAGED: string;
            readonly HDCP_ENGAGED: string;

            /**
             * Use the video format setting directly, or if not possible, use the highest video format supported by both tv and box.
             */
            readonly VIDEO_FORMAT_AUTO_MODE_OFF: string;

            /**
             * Use the TV's native mode, or if not possible, use the highest video format supported by both tv and box.
             */
            readonly VIDEO_FORMAT_AUTO_MODE_NATIVE: string;

            /**
             * Try to change output framerate to the same framerate as content without affecting resolution.
             */
            readonly VIDEO_FORMAT_AUTO_MODE_FOLLOW_VIDEO_FRAMERATE: string;
        }

        /**
         * The System object. Used for system management.
         *
         * The System object will fire following events:
         *
         * SystemAudioStateChanged when volume or mute is changed
         * Example of Handling events from System:
         *
         * function OnAudioStateChanged(evt) {
         *   Trace("Audio state changed: Vol=" +evt.volume + " Mute=" + evt.isMuted);
         * }
         * var AudioEventId = g_Zac.System.registerEventListener("SystemAudioStateChanged", OnAudioStateChanged);
         */
        interface jszacSystem {

            /**
            * Reset settings made by the user. E.g. language preferences, channels and favorite lists.
            * This is the lowest possible level of factory reset.
            */
            readonly FACTORYRESET_MODE_USER: FactoryResetMode;

            /**
            * Reset changes introduced by the system. E.g. TR-069 state.
            * Note: This mode also resets data as defined by FACTORYRESET_MODE_USER
            */
            readonly FACTORYRESET_MODE_SYSTEM: FactoryResetMode;

            /**
            * Resets all persistent data except one time programmable (OTP) memory and firmware image.
            * Data that will be erased includes, for instance, Conditional Access (CA) pairing information.
            * Note: This mode also resets data as defined by FACTORYRESET_MODE_SYSTEM and FACTORYRESET_MODE_USER.
            */
            readonly FACTORYRESET_MODE_ALL: FactoryResetMode;

            /**
             * UI version property type.
             * 
             * A string that describes the version of the user interface. For example of a web portal.
             */
            readonly UI_VERSION: string;

            /**
            * Factory Reset the system.
            *
            * Performs a factory reset of the system. After a successful reset, the system will be automatically rebooted.
            *
            * Note: When a reboot is performed, it is not guaranteed that the call will return before the process is killed.
            * Parameters [in] level	The desired level of reset. If the requested level is not supported, but a lower level is,
            * the lower level will be performed instead. To avoid resetting system to a higher level than intended, error code 2 will be
            * returned if only higher levels than requested are supported. Which levels are supported, if any, depends on implementation.
            * Returns Integer return code where 0 is OK, other values are errors
            * Return values
            *   0	OK
            *   2	The requested factory reset level is not supported
            * Exceptions
            *   A	string containing error message if argument is missing, of wrong type or has illegal value
            */
            DoFactoryReset(level: FactoryResetMode): number;

            /**
             * Get system information.
             * Get information of version etc of the system
             */
            GetSystemInformation(): jszacSystemInfo;

            /**
             * Add an additional system information property.
             * 
             * The additional information field contains a list of key-value pairs that can hold arbitrary system information.
             * There may only be one item per key. Assigning a value to an existing key will overide it.
             * 
             * @param {string} proprty Information property to set
             * @param {string} value Value to set, if empty the property is removed
             * 
             * @returns {number} Integer where 0 is OK, other is error
             * 
             * Exceptions
             * 
             * A string containing error message if argument is missing, of wrong type or has illegal value
             * 
             * @memberof jszacSystem
             */
            SetAdditionalInformation(proprty: string, value: string): number;

            /**
             * Power manager.
             */
            Power: jszacPower;
            /**
             * Object for get/set system settings
             */
            Settings: jszacSettings;

            SwUpgrade: jszacSwUpgrade;

            OutDoorUnitDb: OutDoorUnit.jszacOutDoorUnitDb;

            FrontDisplay: jszacFrontDisplay;

            Bluetooth: jszacBluetooth;
        }

        interface BluetoothDevice {

            ID?: number;
            Name: string;
            Address: string;
            FW_Version?: string;
            HW_Version?: string;
            SW_Version?: string;
            ModelNumber?: string;
            SystemID?: string;
            CertificationData?: string;
            PnP_ID?: string;
            BatteryLevel?: number;
            isConnected?: boolean;
            FW_UpdateAvailable?: boolean;
        }

        interface BluetoothErrorEvent {

            code: number;
            func: string;
            desc: string;
        }

        interface BluetoothStateChangedEvent {

            state: BluetoothState;
        }

        interface BluetoothOTAStartedEvent {

            mac: string;
        }

        interface BluetoothOTAProgressEvent {

            mac: string;
            progress: number;
        }

        interface BluetoothRecoveryPairingFinishedEvent {

            result: boolean;
        }

        interface BluetoothOTAFinishedEvent {

            mac: string;
            result: boolean;
        }

        interface BluetoothDeviceActionEvent {

            mac: string;
        }

        interface BluetoothDeviceFoundEvent {

            mac: string;
            rssi: string;
            name: string;
        }

        interface jszacBluetooth {

            /**
             * Initial state after boot. In this state we are either in first boot or there are no paired RCUs yet for some reason.
             */
            readonly BT_STATE_INIT: BluetoothState;

            /**
             * Normal operating state when there is a paired RCU and it is connected.
             */
            readonly BT_STATE_PAIRED: BluetoothState;

            /**
             * There is a Paired RCU information in flash storage but connection failed. Possible reasons could be :
             * RCU is broken or battery empty
             * RCU is out of coverage area or signal strength too low.
            * In this state it is expected that UI will show an informative message on the screen.
             */
            readonly BT_STATE_PAIRED_NOT_CONNECTED: BluetoothState;

            /**
             * Intermediate state when a pairing is initiated by user via UI.
             */
            readonly BT_STATE_PAIRING: BluetoothState;

            /**
             * Intermediate state when scanning is initiated by user via UI.
             */
            readonly BT_STATE_SCANNING: BluetoothState;

            /**
             * Intermediate state during OTA update of an RCU.
             */
            readonly BT_STATE_OTA: BluetoothState;

            /**
             * Temporary state before BT Manager is terminated.
             */
            readonly BT_STATE_TERMINATING: BluetoothState;

            /**
             * Can be called anytime to get state information
             *
             * @returns {BluetoothState}    
             *
             * @throws A string containing error message
             */
            GetState(): BluetoothState;

            /**
             * Initiate Scan operation
             *
             * @throws A string containing error message
             */
            StartScan(): void;

            /**
             * Stop Scan operation
             *
             * @throws A string containing error message
             */
            StopScan(): void;

            /**
             * Pair a device using MAC as an identifier
             * @param MAC_ADDRESS 
             */
            Pair(MAC_ADDRESS: string): void;

            /**
             * Unpair and delete a device using MAC as an identifier
             * @param MAC_ADDRESS 
             */
            Remove(MAC_ADDRESS: string): void;

            /**
             * List BluetoothDevice	Get list of paired devices.
             */
            GetDevices(): Array<BluetoothDevice>;

            /**
             * Update firmware of a device using MAC as an identifier
             */
            UpdateFirmware(MAC_ADDRESS: string): void;

            /**
             * Set Rcs flag
             */
            SetRcsFlag(value: boolean): void;

            /**
             * Get Rcs flag
             */
            GetRcsFlag(): number;

            /**
             * Register an event listener.
             * Register (add) a listener to events of a specific event name. Events should be handled in the given function.
             *
             * @returns {number}    An ID that shall be used when unregistering the event handler see unregisterEventListener()
             */
            registerEventListener(evtName: string, evtHandlerFunction: (event: any) => void): number;

            /**
             * Discovered a new device. Will be triggered multiple time per found device.
             * Possible Originating States: BT_STATE_SCANNING
             */
            registerEventListener(evtName: "BT_DEVICE_FOUND", evtHandlerFunction: (event: BluetoothDeviceFoundEvent) => void): number;

            /**
             * Paired device removed. Main RCU can not be removed.
             * Possible Origin State BT_STATE_PAIRED
             */
            registerEventListener(evtName: "BT_DEVICE_REMOVED", evtHandlerFunction: (event: BluetoothDeviceActionEvent) => void): number;

            /**
             * Fired when a new device is paired. BluetoothDevice is included.
             * Possible Origin State BT_STATE_PAIRING
             */
            registerEventListener(evtName: "BT_DEVICE_PAIRED", evtHandlerFunction: (event: BluetoothDeviceActionEvent) => void): number;

            /**
             * Informative event that is triggered when any BLE RCU is connected. Connect and Disconnect can happen in normal operation depending on the RCU sleep states. 
             * Normally no action should be taken from the UI side as automatic connection should happen as the RCU moves or a key press happens.
             * Possible Origin State BT_STATE_PAIRED, BT_STATE_PAIRED_NOT_CONNECTED
             */
            registerEventListener(evtName: "BT_DEVICE_CONNECTED", evtHandlerFunction: (event: BluetoothDeviceActionEvent) => void): number;

            /**
             * Informative event that is triggered when any BLE RCU is disconnected. Connect and Disconnect can happen in normal operation depending on the RCU sleep states. 
             * Normally no action should be taken from the UI side as automatic connection should happen as the RCU moves or a key press happens.
             * Possible Originating States: BT_STATE_PAIRED
             */
            registerEventListener(evtName: "BT_DEVICE_DISCONNECTED", evtHandlerFunction: (event: BluetoothDeviceActionEvent) => void): number;

            /**
             * An error has occurred. Detailed string and causing method are included with the event along with the error code.
             * Possible Originating States: ANY
             */
            registerEventListener(evtName: "BT_ERROR", evtHandlerFunction: (event: BluetoothErrorEvent) => void): number;

            /**
             * Adapter has stopped scanning.
             * Possible Originating States: BT_STATE_SCANNING
             */
            registerEventListener(evtName: "BT_SCAN_FINISHED", evtHandlerFunction: (event: any) => void): number;

            /**
             * Adapter has started scanning.
             * Possible Originating States: BT_STATE_INIT, BT_STATE_PAIRED
             */
            registerEventListener(evtName: "BT_SCAN_STARTED", evtHandlerFunction: (event: any) => void): number;

            /**
             * Fired when BT adapter state changes.
             * Possible Originating States: ANY
             */
            registerEventListener(evtName: "BT_STATE_CHANGED", evtHandlerFunction: (event: BluetoothStateChangedEvent) => void): number;


            /**
             * FW update is requested and started after checking prerequisites.
             * Possible Originating States: ANY
             */
            registerEventListener(evtName: "BT_OTA_STARTED", evtHandlerFunction: (event: BluetoothOTAStartedEvent) => void): number;

            /**
             * FW image is being sent to device, "progress" field declares percentage, this event is generated in each 1% progress.
             * Possible Originating States: ANY
             */
            registerEventListener(evtName: "BT_OTA_PROGRESS", evtHandlerFunction: (event: BluetoothOTAProgressEvent) => void): number;

            /**
             * FW update is finished, "result" will be TRUE if it is successful.
             * Possible Originating States: ANY
             */
            registerEventListener(evtName: "BT_OTA_FINISHED", evtHandlerFunction: (event: BluetoothOTAFinishedEvent) => void): number;

            /**
             * ???
             */
            registerEventListener(evtName: "BT_MANAGER_TERMINATED", evtHandlerFunction: (event: any) => void): number;

            /**
             * Recovery pairing cycle started
             */
            registerEventListener(evtName: "BT_RECOVERY_PAIRING_STARTED", evtHandlerFunction: (event: any) => void): number;

            /**
             * Recovery pairing cycle finished. The payload will be true if new RCU is paired. 
             * The payload will be false if no device is paired until the timeout (60 seconds) is reached.
             */
            registerEventListener(evtName: "BT_RECOVERY_PAIRING_FINISHED", evtHandlerFunction: (event: BluetoothRecoveryPairingFinishedEvent) => void): number;

            // /**
            //  * BT_VOICE_SEARCH related events
            //  */
            registerEventListener(evtName: "BT_VOICE_SEARCH_START", evtHandlerFunction: (event: any) => void): number;

            registerEventListener(evtName: "BT_VOICE_SEARCH_ACTIVE", evtHandlerFunction: (event: any) => void): number;

            registerEventListener(evtName: "BT_VOICE_SEARCH_STOP", evtHandlerFunction: (event: any) => void): number;

            registerEventListener(evtName: "BT_VOICE_SEARCH_ERROR", evtHandlerFunction: (event: any) => void): number;

        }

        /**
        * A class that provides version information about the jsZAC plugin.
        */
        interface jszacVersion {

            /**
            * Major version number
            */
            major: number;

            /**
            * Minor version number
            */
            minor: number;

            /**
            * Revision string
            */
            revision: string;

            /**
            * Description string
            */
            description: string;

            /**
            * Date and time the plugin was built
            */
            buildTimeStamp: string;
        }

        /**
         * Object containing some information of the system.
         *
         * If the information is not available it will be empty string (or 0). The object can be fetched with jszacSystem::GetSystemInformation().
         */
        interface jszacSystemInfo {

            AdditionalInformation: any;
            /**
             * Version of the bootloader.
             */
            BootloaderVersion: string;
            /**
             * Date when system software image was built (YYYY-MM-DD).
             */
            BuildDate: string;
            /**
             * Chip ID.
             */
            ChipID: string;
            /**
             * Hardware model name.
             */
            HwModel: string;
            /**
             * Hardware model type name.
             */
            HwModelType: string;
            /**
             * Hardware version string.
             */
            HwVersion: string;
            /**
             * Organizationally Unique Identifier (according to ISO/IEC 8802).
             */
            readonly OUI: number;
            /**
             * Unique ID for each combination of software and hardware.
             */
            ProductID: number;
            /**
             * Name of internal product configuration.
             */
            ProductName: string;
            /**
             * Hardware serial number.
             */
            SerialNumber: string;
            /**
             * Base software variant.
             *
             * The product software is built on a base software release. This string represents the human readable identifier which can be used to pinpoint a certain base release.
             */
            SwBaseVariant: string;
            /**
             * Product software variant.
             *
             * A string representing the human readable identifier of the product variant. The product is built on a base release for which the identifier can be fetched in SwBaseVariant.
             * A product is defined as a configuration of a base release with optional additions.
             */
            SwProductVariant: string;
            /**
             * The current software version.
             *
             * An integer identifier for the current system software. Used by for example jszacSwUpgrade::Search() when searching for new system software.
             */
            SwVersion: number;

            /**
             * System uptime in seconds
             */
            UpTime: number;

            /**
             * The Global Unique Identifier (GUID) of the device.
     
             * The GUID is represented by a string of 32 hexadecimal digits with groups separated by hyphens, 
             * such as: 21ec2020-3aea-4069-a2dd-08002b30309d. If the device does not have a GUID, this property is an empty string.
             */
            readonly GUID: string;
        }

        interface PowerStateChangedEvent {

            standbyCapabilities: { [key: string]: boolean };
            state: PowerState;
        }

        /**
         * Event indicating that the system is about to shut down or that a shutdown process was aborted
         */
        interface PowerStandbyPendingEvent {

            /**
             * True indicates that the Standby pending was aborted.
             */
            isAborted: boolean;
        }

        interface jszacStandbyHandler {

            /**
             * Prevent/allow STB to go to deep standby.
             * The STB is allowed to enter deep standby by default. Calling this function with true makes it possible to prevent this (note that the STB may still go to standby but the application will be running). Default behavior (allow deep standby) can be restored again by calling with false.
             * Use this function when performing a task that must be finished before the STB goes to deep sleep. An example would be a reminder that wakes up during the night to check for software upgrades.
             * 
             * Note: KeepAlive(false) must be called after KeepAlive(true) or STB will never go to deep standby again. 
             * 
             * Returns 0 is OK, other is error           
             */
            KeepAlive(keepAlive: boolean): number;

            /**
             * Tell the power manager to wait at least one second before continuing the shut down process.
             * This function should be called as a response when the application has received a PowerStandbyPendingEvent event, fired by the jszacStandbyHandler object. If the application wants to postpone the shutdown of the system, 
             * it must keep calling this function at least every second until it is OK to * proceed the shutdown process. Finally, when it is OK to shutdown the system, it should call StandbyOk().
             * 
             * Timeout: If neither StandbyOk() nor ResetStandbyHandlerCountdown() has been called, the power manager will, after a small timeout, give up waiting and continue with the shut down process.
             * 
             * Returns 0 is OK, other is error
             */
            ResetStandbyHandlerCountdown(): number;

            /**
             * Tell the power manager that it is OK to proceed with the shutdown process.
             * This function should only be called as a response when a PowerStandbyPendingEvent event, fired by the jszacStandbyHandler object, has been received.
             * 
             * Returns 0 is OK, other is error
             */
            StandbyOk(): number;
        }

        /**
         * The Power object, used for system power management.
         */
        interface jszacPower {
            /**
             * System is active and is fully operational.
             */
            readonly POWER_ACTIVE: PowerState;
            /**
             * In this state, the system is fully operational but will appear to the user as if it was in POWER_STANDBY state.
             */
            readonly POWER_FAKE_STANDBY: PowerState;
            /**
             * Lowest power consumption mode
             */
            readonly POWER_STANDBY: PowerState;
            /**
             * System is preparing to enter POWER_STANDBY state.
             */
            readonly POWER_STANDBY_PENDING: PowerState;
            /**
             * POWER_STANDBY_PENDING state transition has been aborted
             */
            readonly POWER_STANDBY_PENDING_ABORTED: PowerState;

            /**
             * The reason why the system woke up is unknown.
             */
            readonly WAKEUPREASON_UNKNOWN: WakeupReason;
            /**
             * System was woken up by system power switch being turned on or that the power cable was plugged in.
             */
            readonly WAKEUPREASON_PLUGIN: WakeupReason;
            /**
             * System was woken up because activity was detected on a human interaction device like front panel buttons or remote control unit.
             */
            readonly WAKEUPREASON_BUTTON: WakeupReason;
            /**
             * System was woken up by a scheduled timer
             */
            readonly WAKEUPREASON_TIMER: WakeupReason;
            /**
             * System was woken up by network activity
             */
            readonly WAKEUPREASON_NETWORK: WakeupReason;

            /**
             * Get the current power state of the system.
             *
             * @returns {PowerState}    Current power state, see PowerState.
             *
             * @throws                  A string containing error message if power state could not be fetched.
             */
            GetState(): PowerState;

            /**
             * Get the system wakeup reason.
             *
             * @returns {WakeupReason}  Wakeup reason type WakeupReason.
             *
             * @throws                  A string containing error message if wakeup reason could not be fetched.
             */
            GetWakeupReason(): WakeupReason;

            /**
             * Reboot the system.
             *
             * When called with the force flag set to false, the function will forward the call to the operating system which will terminate all the processes in a controlled manner and restart the processor.
             *
             * Warning: If the force flag is true, the kernel will set the reset flag in the hardware, which will restart the system immediately. All data not yet stored will be lost.
             *
             * @param {boolean} force   Hard reboot flag.
             *
             * @returns {number}        Integer where 0 is OK, other is error.
             *
             * @throws                  A	string containing error message if argument is missing, of wrong type or has illegal value.
             */
            Reboot(force: boolean): number;

            /**
             * Set the system power state.
             *
             * @param {PowerState} state    Requested power state, see PowerState.
             *
             * @returns {number}            Integer where 0 is OK, other is error.
             *
             * @throws                      A string containing error message if argument is missing, of wrong type or has illegal value.
             */
            SetState(state: PowerState): number;

            /**
             * Creates a Standby Handler.
            * The application that creates the standby handler object must also listen to and act upon events fired by the standby handler. object. The object will fire events whenever the system is about to be shut down.
            * 
             * @returns {number}            jszacStandbyHandler object reference.
             *
             * @throws                      A	string containing error message if handler could not be created
             */
            CreateStandbyHandler(): jszacStandbyHandler;
        }


        /**
         * Type that is used to specify <key, value> pair as input option to jszacSwUpgrade::Search() and jszacSwUpgrade::Start() functions.
         */
        interface SwUpgradeOption {

            key: string;
            value: string;
        }

        /**
         * System software upgrade related constants.
         *
         * This object can be fetched as a property of the jszacSwUpgrade object
         *
         * The option key constants, having the type String, should be used when searching for new system software using the jszacSwUpgrade::Search() function.
         */
        interface jszacSwUpgradeConstants {

            /**
             * Values for upgradeable software components
             */
            readonly SW_UPGRADE_COMPONENT_UNKNOWN: SwUpgradeComponent;
            readonly SW_UPGRADE_COMPONENT_BOOT_IMAGE: SwUpgradeComponent;
            readonly SW_UPGRADE_COMPONENT_BOOT_LOADER: SwUpgradeComponent;
            readonly SW_UPGRADE_COMPONENT_FRONT_PANEL: SwUpgradeComponent;
            readonly SW_UPGRADE_COMPONENT_FRONT_PANEL_FONT: SwUpgradeComponent;
            readonly SW_UPGRADE_COMPONENT_SPLASH_SCREEN: SwUpgradeComponent;
            readonly SW_UPGRADE_COMPONENT_SECURITY_FIRMWARE: SwUpgradeComponent;
            readonly SW_UPGRADE_COMPONENT_POWER_FIRMWARE: SwUpgradeComponent;
            readonly SW_UPGRADE_COMPONENT_CHANNEL_LOGOS: SwUpgradeComponent;
        }

        /**
         * An object describing a SW update
         */
        interface SwUpgradeVersionInfo {

            type: SwUpgradeComponent;

            version: number;
        }


        /**
         * System software detection result event.
        * This event will be fired when a system software detection process, started by a call to jszacSwUpgrade::Search(), has finished. It contains information about if a software upgrade is:
        * 
        *       - available now, see available
        *       - available later, see availableLater, availableAt
        *       - which version it is, see version
        *
        * The event is registered as "SearchResult". 
         */
        interface jszacSwUpgradeSearchResultEvent {

            /**
             * Version number of the system software. Only applicable if either available or availableAt are true.
             */
            version: number;

            /**
             * Version number of available software update components.
             */
            versions?: SwUpgradeVersionInfo[];

            /**
             * Is there a system software available for upgrade now?
             * If the system software upgrade detection process has detected that a system software is available for upgrade now, this property will be true, otherwise false.
             */
            available: boolean;

            /**
             * This upgrade is marked as forced. If this flag is set, the application shall install the upgrade without asking the user.
             */
            forced: boolean;
        }

        /**
         * Functionality to detect and start upgrading of system software.
         */
        interface jszacSwUpgrade {

            Constants: jszacSwUpgradeConstants;

            /**
             * Start searching for available system softwares.
             * 
             * The searching can take time and will be performed asynchronously in the background. The result of this operation will be fired as a jszacSwUpgradeSearchResultEvent.
             * 
             * To get the version of the current system software, please see jszacSystem::GetSystemInformation()
             * 
             * @param: options Array of options to use when searching for an upgrade. See jszacSwUpgradeConstants for available option names. Argument is optional.
             * 
             * @returns {number} 0: Search was started, 4: Called in invalid state. Not allowed because of ongoing search or upgrading process.
             */
            Search(options?: SwUpgradeOption[]): number
        }

        /**
         * The Settings object. Used for getting and setting settings.
         *
         * See Settings for more information of different settings. When a setting has changed the SettingChanged event will be fired. See EventGenerator for information on event
         * Depending on which setting it is the type of the value differs. The framework will cast it to proper type if possible. E.g. to set a Boolean the number 1 or the string "1" can also be used as true.
         */
        interface jszacSettings {

            /**
             * Setting for if audio will be played even if not in the list set by KEY_AUDIO_LANGUAGES.
             * Possible values
             *
             *      - "0" (false)   No audio will be played if no audio component from the KEY_AUDIO_LANGUAGES list is found.
             *      - "1" (true)    Play first found audio component if no audio component from the KEY_AUDIO_LANGUAGES list is found.
             */
            readonly KEY_AUDIO_ACCEPT_OTHER: string;
            /**
             * Set/get the audio output delay in milliseconds.
             *
             * This will be applied to all audio outputs. Normally all outputs have the same value but may in the future have different values.
             * Reading the delay will fetch the value from the outputs in the following priority order:
             *
             *      1. The spdif output if any
             *      2. A hdmi output if any
             *      3. first audio output found
             */
            readonly KEY_AUDIO_DELAY_MS: string;

            /**
             * Setting for which language shall shall be used for audio.
             *
             * The value is a vector of three-letter string for each language. The language abbreviation follows the ISO 639-2 standard.
             * The first value have highest priority. If there is no match audio output depends on KEY_AUDIO_ACCEPT_OTHER
             * Number of possible languages to set is compile time configurable. Typically is eight. Passing a bigger array will generate error. An event will be fired for each language that has been changed.
             */
            readonly KEY_AUDIO_LANGUAGES: string;
            /**
             * If multi-channel should be preferred before stereo when both types are available.
             *
             * By setting this true ("1") an audio component with multiple channels will be selected (if available) and it will be routed directly to the digital outputs, such HDMI and SPDIF.
             * The audio stream must match the requirements for the digital outputs and the outputs must support this feature. If none of these criteria are fulfilled, the action will take no effect.
             *
             *      - "0" (false)   A component without multi-channel will be used if available. If however a multi-channel component is selected it will be down-mixed before sent to digital outputs.
             *      - "1" (true)    A component with multi-channel will be used if available
             */
            readonly KEY_AUDIO_MULTICHANNEL: string;
            /**
             * Set preferred priority of audio component types (list).
             *
             * If types of available components is not in this list, a component of type = AUDIO_TYPE_NORMAL will be selected if available, otherwise first available component will be used.
             * Possible values:
             *
             *      - AUDIO_TYPE_NORMAL
             *      - AUDIO_TYPE_CLEAR
             *      - AUDIO_TYPE_HEARING_IMPAIRED
             *      - AUDIO_TYPE_VISUAL_IMPAIRED_SPOKEN_SUBT
             *      - AUDIO_TYPE_VISUAL_COMMENTARY
             */
            readonly KEY_AUDIO_TYPE: string;

            /**
             * The name that is visible for other DLNA devices on the network.
             */
            readonly KEY_DMS_FRIENDLY_NAME: string;
            /**
             * Do Not Track (DNT) setting.
             *
             * Enable/Disable the DNT setting.
             * If the setting is enabled, the system will involve the DNT field with value "1" in the HTTP request to the web server. The web server will process the DNT according to standard.
             * If the setting is disabled, the system will not involve the DNT field ( different from setting the DNT field to "0") in the HTTP request to the web server, meaning that the user has not expressed a preference.
             * According to the standard, the server should recognize the DNT field and not record the source URL. The system itself will not take care of the server activities.
             * This setting is disabled by default ("0"), i.e. the system does not involve the DNT field. There is no support for setting the field to "0" in the case that the user consents to being tracked.
             *
             *      - "0" (false)   DNT disabled
             *      - "1" (true)    DNT enabled
             */
            readonly KEY_HTTP_DO_NOT_TRACK: string;

            /**
             * Parental control content blocking mode.
             *
             * This setting controls the parental control content blocking functionality of the system. When enabled, content having parental rating corresponding to an age limit higher than 
             * the age of the current user (as defined by KEY_PACO_USERAGE) or content that has been parentally locked, will be * * automatically blocked by the system.
             */

            readonly KEY_PACO_CONTENT_BLOCKING_MODE: string;

            /**
             * Parental control content blocking is disabled permanently. No parental control blocking of content will be performed.
             */
            readonly PACO_BLOCKING_DISABLED_PERMANENTLY: string;

            /**
             * Parental control content blocking is enabled permanently (default).
             */
            readonly PACO_BLOCKING_ENABLED: string;

            /**
             * Set preferred stream quality of played content 
             * Possible values:
             * PREFERRED_STREAM_QUALITY_SD
             * PREFERRED_STREAM_QUALITY_HD
             * PREFERRED_STREAM_QUALITY_UHD
             */
            readonly KEY_PREFERRED_STREAM_QUALITY: string;

            /**
             * Setting for functionality that should be available during standby. 
             * The following functionality can currently be requested. Actual availability depends on platform support.
             * Possible values: STANDBY_FUNCTIONALITY_WOL, STANDBY_FUNCTIONALITY_QUICK_START
             */
            readonly KEY_STANDBY_FUNCTIONALITY: string;

            /**
             * Setting for automatic standby.
             *
             * A time limit, in seconds, after which the system will initiate the automatic standby sequence when no user input has been received within the limit. The parameter is an integer where 0 turns off automatic standby.
             */
            readonly KEY_STANDBY_IDLE_TIME: string;
            /**
             * Setting for if subtitling will be shown even if not in the list set by KEY_SUBTITLE_LANGUAGES.
             *
             * Possible values:
             *
             *      - "0" (false)   No subtitling will be played if no subtitling component from the KEY_SUBTITLE_LANGUAGES list is found.
             *      - "1" (true)    Play first found subtitling component if no subtitling component from the KEY_SUBTITLE_LANGUAGES list is found.
             */
            readonly KEY_SUBTITLE_ACCEPT_OTHER: string;
            /**
             * Setting for wether subtitles shall be turned on by default.
             *
             * This is a boolean to indicate the user option if subtitles should be on by default.
             */
            readonly KEY_SUBTITLE_DEFAULT_ENABLED: string;

            /**
             * Preferred subtitle language.
             *
             * The value is a vector of three-letter string for each language. The language abbreviation follows the ISO 639-2 standard. The first value have highest priority.
             * Number of possible languages to set is compile time configurable. Typically is eight. Passing a bigger array will generate error. An event will be fired for each language that has been changed.
             */
            readonly KEY_SUBTITLE_LANGUAGES: string;

            /**
             * https://gard.telekom.de/gardwiki/pages/viewpage.action?pageId=244053680
             */
            readonly KEY_REBOOT_REASON: string;
            readonly KEY_REBOOT_REASON_EXECSTATUS: string;

            /**
             * Quick start from standby, which most probably means higher power consumption since the standby mode normally will be POWER_FAKE_STANDBY.
             */
            readonly STANDBY_FUNCTIONALITY_QUICK_START: string;

            /**
             * Wake on LAN
             */
            readonly STANDBY_FUNCTIONALITY_WOL: string;

            /**
             * Preferred subtitle type.
             *
             * If KEY_SUBTITLE_DEFAULT_ENABLED is set, this value specifies what type of subtitling that will be shown (if present in the stream).
             * 
             * Possible values are:
             * • SUBTITLINGTYPE_NORMAL
             * • SUBTITLINGTYPE_HEARINGIMPAIRED
             * 
             */
            readonly KEY_SUBTITLE_TYPE: string;

            /**
             * Subtitling for hearing impaired.
             * 
             * If no hearing impaired subtitling are present in the stream, SUBTITLINGTYPE_NORMAL will be applied instead.
             * 
             */
            readonly SUBTITLINGTYPE_HEARINGIMPAIRED: string;

            /**
             * Setting for preferred size of timeshift buffer in minutes.
             *
             * Setting this will not effect any ongoing "recording". Other limitations may also affect the actual size of the timeshift buffer.
             */
            readonly KEY_TIMESHIFT_BUFFER_MINUTES: string;
            /**
             * Setting for an optional delay for timeshift.
             *
             * Defines the timeshift start delay. Could help to limit disc usage during zapping, improve zapping time.
             */
            readonly KEY_TIMESHIFT_DELAY_SECONDS: string;

            /**
            * HDCP copy protection state when optional.
            *
            * The HDCP copy protection will always be active when the conditional access system enables it and during this condition it can not be disabled.
            *
            * This setting is only valid when the copy protection level is optional.
            *
            * "0" (false) HDCP off
            * "1"(true) HDCP on
            * This setting is stored persistently when changed.
            */
            readonly KEY_HDCP_WHEN_OPTIONAL: string;

            /**
             * HDMI/CEC main mode.
             * This setting controls the HDMI/CEC main mode
             * Possible values: HDMI_CEC_MODE_ENABLED HDMI/CEC is enabled, HDMI_CEC_MODE_DISABLED HDMI/CEC is disabled
             */
            readonly KEY_HDMI_CEC_MODE: string;
            readonly HDMI_CEC_MODE_ENABLED: string;
            readonly HDMI_CEC_MODE_DISABLED: string;

            readonly KEY_HDMI_CEC_AUDIO_CONTROL_MODE: string;
            readonly HDMI_CEC_AUDIO_CONTROL_OFF: string;
            readonly HDMI_CEC_AUDIO_CONTROL_TV: string;

            /**
             * Clear audio. May be used as normal audio.
             */
            readonly AUDIO_TYPE_CLEAR: string;

            /**
             * Improved intelligibility.
             */
            readonly AUDIO_TYPE_HEARING_IMPAIRED: string;

            /**
             * Normal audio.
             */
            readonly AUDIO_TYPE_NORMAL: string;

            /**
             * Scene commentary (visual impairing).
             */
            readonly AUDIO_TYPE_VISUAL_COMMENTARY: string;

            /**
             * Spoken subtitling (visual impairing).
             */
            readonly AUDIO_TYPE_VISUAL_IMPAIRED_SPOKEN_SUBT: string;

            /*
             * Preferred stream quality is SD.
             */
            readonly PREFERRED_STREAM_QUALITY_SD: string;

            /*
             * Preferred stream quality is HD.
             */
            readonly PREFERRED_STREAM_QUALITY_HD: string;

            /*
             * Preferred stream quality is UHD.
             */
            readonly PREFERRED_STREAM_QUALITY_UHD: string;

            /**
             * Set or get the master volume.
             *
             * The value is in percent and possible values are 0-100. Trying to set an illegal value, e.g. more than 100, will fail and the volume will remain unchanged.
             *
             * The value will be store persistent when going to standby. At system start it will read from persistent storage and set by the system.
             */
            readonly KEY_MASTER_VOLUME: string;
            /**
             * Set or get the master mute state.
             *
             * Note that other mechanism (e.g. parental rating etc) can disable output even if this is set sound to on
             *
             * "0" (false) Sound on
             * "1" (true) Sound off It will be store persistent when going to standby. At system start it will be read from persistent storage and the mute state will be set by the system.
             * When setting mute the system will also set the mute symbol of the front display if the front display supports it. The symbol will be removed at standby.
             */
            readonly KEY_MASTER_MUTE: string;
            /**
             * Get the setting associated with the key.
             *
             * The settings must be of non-list type or there will be an exception.
             * If the setting is of list type use GetList() instead See Settings for information which settings that are of list type and which are not.
             *
             * @param {string} key                      The "name" of the setting.
             *
             * @returns {number | boolean | string}     The value of the setting. Depending on setting the type of the return value differs (Number, Boolean or string).
             *
             * @throws                                  A string containing error message if key is missing or of wrong type.
             *                                          A string containing error message if the key could not be retrieved.
             */
            Get<T extends (number | boolean | string)>(key: string): T;

            /**
             * Get a list of values for the setting associated with the key.
             *
             * The settings must be of list type or there will be an exception.
             * If the setting is not of list type use Get() instead. See Settings for information which settings that are of list type and which are not.
             *
             * @param {string} key                          The "name" of the setting.
             *
             * @returns {Array<number | boolean | string>}  An array of value for the setting. Depending on setting the type of the return value in the list differs (Number, Boolean or string).
             *
             * @throws                                      A string containing error message if key is missing or of wrong type.
             *                                              A string containing error message if the key could not be retrieved.
             */
            GetList<T extends (number | boolean | string)>(key: string): T[];

            /**
             * Set value (or values) for the setting associated with the key.
             *
             * If the setting is of a list type value must be an array of values settings (and it is of a non-list type it must be a single value) or there will be an exception.
             * See Settings for information which settings that are of list type and which are not.
             * If the setting had different value before this call will cause a SettingChanged event to be fired.
             *
             * @param {string} key                          The "name" of the setting.
             * @param {number | boolean | string} value     The new value Boolean, double, integer and string are allowed as types (or an array of values of those types if the setting is of list type).
             *
             * @throws                                      A string containing error message if key is missing or of wrong type.
             *                                              A string containing error message if the key could not be retrieved.
             */
            Set<T extends (number | boolean | string)>(key: string, value: T | T[]): void;
        }

        /**
        * Event indicating a setting changed value.
        *
        * It will be fired when a setting defined by Settings is changed in the system. The event is identified as "SettingChanged"
        */
        interface SettingChanged {

            /**
            * The value of setting
            */
            key: string;
        }


        /**
         * Event indicating that the rcu is low on battery.
         *
         * Depending on the implementation this event could for example be sent every 50th key press when the rcu batteries are low.
         * The event is identified as "RcuBatteryLowEvent"
         */
        interface RcuBatteryLowEvent {

        }

        interface DT_GetGcpAccessTokenParams {

            scope: string;
        }


        interface DT_DeleteTokenParams {

            tokenName: "refresh_token";
        }

        /**
         * This event signals that something changed on an output.
         * The event contains two things. The output type which the event affects, and the reason for the event being sent.
         * The event is identified with "OutputChanged" when registering/unregistering event listener.
         */
        interface OutputChangedEvent {

            // The output type that changed.See Output type constants.
            outputType: string;

            // Describes why the event is sent.See jszacOutputs::OutputChangedReason.
            reason: OutputChangedReason;
        }


        interface DT_GetGcpAccessTokenResponseEvent {

            accessToken?: string;
            error?: string;
            errorDescription?: string;
            expiresIn?: string;
            httpStatus?: string;
            requestId: string;
            retcode: string;
            scope?: string;
            isRefreshTokenStored?: number;
        }

        interface DT_GetIdTokenReturnValues {

            requestId: string;
        }


        /**
        * Event indicating that the link status of the network has changed.
        *
        * This event will be fired by the jszacNetworks object when the link status has changed e.g. ethernet cable pluged in.
        *
        * The event is identifed with "linkStatusChanged" when registering/unregistering event listener.
        */
        interface NetworkLinkStatusChangedEvent {
            /**
             * The network interface that changed link status
             */
            network: jszacNetwork;
            /**
             * The link status
             */
            isUp: boolean;
        }

        /**
         * Event indicating that the string on the front display has changed
         * 
         * This event will be fired when the string on the front display is changed. This even is identified as "FrontDisplayStringChanged".
         */
        interface FrontDisplayStringChanged {

            DisplayText: string;
        }

        /**
        * Event that will be fired by jszacStorageManager when storage objects has been added or removed.
        * Whenever a device or partition has been removed that storage object is no longer valid and should not be used.
        * The event is registered as "StorageListUpdated". 
        */
        interface StorageListEvent {
            /**
             * The associated storage object.
             */
            storage: jszacStorage;
            /**
             * Type of event.
             */
            eventType: StorageListEventType;

            /**
             * Name of the storage object that was added or removed.
             */
            name: string;
        }

        /**
        * Event that will be fired by a jszacStorage object when the state of the object has changed.
        * The event is identifed with "StorageStateChangedEvent" when registering/unregistering event listener.
        */
        interface StorageStateChangedEvent {
            /**
             * The associated storage object.
             */
            storage: jszacStorage;
            /**
             * The new state of the storage.
             */
            state: StorageState;
        }

        /**
        * Event that will be fired by a jszacStorage object, providing information when something has happened to that object.
        * The event is registered as "StorageEvent".
        */
        interface StorageEvent {
            /**
             * The associated storage object.
             */
            storage: jszacStorage;
            /**
             * Type of event.
             */
            eventType: StorageEventType;
            /**
             * The value associated with the event.
             */
            value?: number;
        }

        /**
        * Event indicating that the connection status of network has changed.
        *
        * This event will be posted by jszacNetworks instance when the network interface is configured and up or when the network connection is lost. This is related to the Network properties
        *
        * The event is identifed with "networkStatusChanged" when registering/unregistering event listener.
        */
        interface NetworkNetworkStatusChangedEvent {
            /**
             * The network interface that changed link status
             */
            network: jszacNetwork;
            /**
             * The network status
             */
            isUp: boolean;
        }


        /**
        * Information about the reason why a property is incorrect.
        *
        * An array of these items may be returned when trying to set properties of a jszacNetwork instance.
        * It can e.g. be used to highlight incorrect properties in the user interface.
        */
        interface NetworkPropertyErrorInfo {

            /**
             * A key that caused the error
             */
            key: any; // TODO: implement Key-enum
            /**
             * Reason of error
             */
            status: any; // TODO: implement ProperyStatus-enum;
        }

        /**
        * A class representing a network interface.
        * Use the jszacNetworks class to get instances of this class. See jsZACNetwork.html as example of usage.
        */
        interface jszacNetwork {

            /**
             * The name of the network interface (read only).
             */
            name: string;
            /**
             * The type of the network interface (read only)
             */
            type: string;
            /**
             * The link status (read only). This corresponds to the data link layer e.g. if the network cable is attached or not. True if link is up, false if it is down.
             */
            linkStatus: boolean;
            /**
             * The network status (read only). This corresponds to the network layer i.e. the interface has an ip address etc and the link is up. True if network is up, false if it is down.
             */
            networkStatus: boolean;

            /**
            * Get current properties.
            *
            * Get a subset of properties. Depending on what kind of network interface it is there may be different properties to get, see Network property types.
            *
            * Each property is a pair of Key and a value. Depending on which key it is different values are possible, See Key for possible values for each keys.
            *
            * @param {number} name This is to indicate what kind of properties that should be retrieved. //TODO: CLarify implementing enumeration here
            */
            GetProperties(type: NetworkPropertyType): { [key: string]: any };
        }


        /**
        * A class managing network interfaces.
        * Get the available networks via this instance. There is only one instance and it is availabe direct from the zac instance, e.g:
        *
        * var numberOfNetworks = zac.Networks.networks.length;
        */
        interface jszacNetworks {

            /**
            * Link layer properties.
            * Properties that relates to the link layer including KEY_MAC_ADDRESS etc of a network interface. Compare to the Data Link Layer in the OSI model.
            */
            readonly PROPERTY_TYPE_LINK: NetworkPropertyType;

            /**
            * Type of network interface. (Read only, Link property)
            * Supported types are:
            *   INTERFACE_TYPE_ETHERNET
            */
            readonly KEY_INTERFACE_TYPE: PropertyKey;

            /**
            * Network interface with access via ethernet cable.
            */
            readonly INTERFACE_TYPE_ETHERNET: InterfaceType;

            /**
            * The MAC address of the network interface.
            * Read only. Belongs to the group of PROPERTY_TYPE_LINK properties.
            * Only available for network interfaces that has a MAC address.
            */
            readonly KEY_MAC_ADDRESS: PropertyKey;

            /**
            * Indictates if the link layer is up or down. (Read only, Link property)
            * Corresponds e.g. if the ethernet cable is connected Possible values are:
            *   STATUS_UP
            *   STATUS_DOWN
            */
            readonly KEY_LINK_STATUS: PropertyKey;

            /**
            * The status is up. For link status e.g. ethernet cable is connected.
            */
            readonly STATUS_UP: LinkStatus;

            /**
            * The status is down. For link status e.g. ethernet cable is disconnected.
            */
            readonly STATUS_DOWN: LinkStatus;

            /**
            * Network connection properties.
            * This includes e.g. KEY_IPV4_ADDRESS_MODE etc. Compare to the Network Layer in the OSI model.
            */
            readonly PROPERTY_TYPE_NETWORK: NetworkPropertyType;

            /**
            * The ipv4 address mode of the network interface. (Network property)
            *
            * Possible modes are:
            *   MODE_DHCP
            *   MODE_STATIC
            */
            readonly KEY_IPV4_ADDRESS_MODE: PropertyKey;

            /**
            * Indicated that the IP address shall be assigned automatically from the network.
            */
            readonly MODE_DHCP: AddressMode;

            /**
            * The IP address shall be set by the application to a fixed value.
            */
            readonly MODE_STATIC: AddressMode;

            /**
            * The ipv4 address. (Network property)
            * A string specified in dotted quad decimal notation, E.g. "192.168.0.2"
            */
            readonly KEY_IPV4_ADDRESS: PropertyKey;

            /**
            * The ipv4 netmask. (Network property)
            * A string specified in dotted quad decimal notation, E.g. "255.255.255.0"
            */
            readonly KEY_IPV4_NETMASK: PropertyKey;

            /**
            * The ipv4 gateway. (Network property)
            * A string specified in dotted quad decimal notation, E.g. "192.168.0.1"
            */
            readonly KEY_IPV4_GATEWAY: PropertyKey;

            /**
            * The Domain Name Servers that was returned by the network. (Network property)
            * Read only if KEY_IPV4_ADDRESS_MODE = MODE_DHCP and read/write when KEY_IPV4_ADDRESS_MODE = MODE_STATIC.
            * A semi-colon separated list of Domain Name Servers specified in dotted quad decimal notation, E.g. "192.168.0.1"
            */
            readonly KEY_IPV4_DNS: PropertyKey;

            /**
            * A semi-colon separated list of Domain Name Servers to be used. (Network property)
            * If not specifically set the value of KEY_IPV4_DNS will be used. This can be used to override KEY_IPV4_DNS, E.g. "192.168.0.1;10.0.0.1"
            * Note: Setting this on one network interface will also set it for all other network interfaces since it is a global setting.
            */
            readonly KEY_IPV4_USR_DNS: PropertyKey;

            /**
            * Indictates if the box has a working connection to the network or not.
            * Read only. Belongs to the group of PROPERTY_TYPE_NETWORK properties. 
            * Corresponds e.g. if the ethernet cable is connected.
            */
            readonly KEY_CONNECTION_STATUS: PropertyKey;

            /**
             * The status is connected. For connection status e.g. the box has a working connection to the network
             */
            readonly STATUS_CONNECTED: ConnectionState;

            /**
             * The status is not connected. For connection status e.g. the box doesn't have a working connection to the network
             */
            readonly STATUS_DISCONNECTED: ConnectionState;

            /**
            * JSON serialized map of DHCP options.
            * Read only. Belongs to the group of PROPERTY_TYPE_NETWORK properties. 
            */
            readonly KEY_DHCP_OPTIONS: PropertyKey;

            /**
            * Primary interface network link speed. Read only. 
            * Format: {Number}{Letter} Number is a current network link speed in Mb/s (e.g. 10/100/1000). Letter can be 'H' or 'F'. 
            * 'H' - means half duplex 'F' - means full duplex Examples: "100F" - means 100Mb/s full duplex "10H" - means 10Mb/s half duplex Belongs to the group of PROPERTY_TYPE_LINK properties. 
            */
            readonly KEY_LINK_SPEED: PropertyKey;

            /**
            * An array of available networks (read only)
            * If there are no networks the array will be empty.
            * The networks object will be cached so there is no need to store the objects in the application to prevent the object to be deleted.
            *
            * @returns {Array<jszacNetwork>} An array of jszacNetwork objects.
            */
            networks: Array<jszacNetwork>;

            /**
            * Get the network instance that has the specified name.
            *
            * If there is no network by that name this function will return undefined.
            *
            * The networks object will be cached so there is no need to store the objects in the application to prevent
            * the object to be deleted.
            *
            * @param {string} name The name of the network instance that should be retreived.
            *
            * @returns {jszacNetwork} The network instance. If there is no network by that name undefined will returned.
            *
            * @throws A	string containing error message if arguments are missing or of wrong type.
            */
            GetNetworkByName(name: string): jszacNetwork;

            /**
             * Send Wake On LAN (WOL) message on all network interfaces.
             * 
            * @param {string} mac	a string with the MAC address to the target. It should be in the format xx:xx:xx:xx:xx:xx
            *
            * @returns {number} Number where 0 is OK, other is error.
            *
            * @throws A	string containing error message if arguments are missing
             */
            WakeOnLan(mac: string): number;
        }

        /**
         * @ngdoc interface
         * @name jszacCustomApi
         *
         * @description
         * An interface that enables access to custom extensions (not part of jsZAC API) functionality.
         *
         */
        interface jszacCustomApi {

            /**
             * @ngdoc method
             * @name Call
             *
             * @description
             * Generic synchronous call to custom API.
             * The definition of all parameters depends on custom API implementation.
             *
             * @param {string} name A name that defines what this call is about.
             * @param {any} input Input to function. The object can have properties defined by the custom api. The parameter can be omitted, null or undefined.
             *
             * @returns {any} A Object with returned data as properties. If there is no output parameters the object will be undefined.
             *
             */
            Call(name: string, input?: any): any;
        }

        interface DT_GetAccessTokenParams {

            acr?: "userpin" | "password" | "avs" | "login";
            clientID: string;
            clientSecret?: string;
            scope: string;
            userData?: string;
            forceRefresh?: "false" | "true";
        }

        interface DT_DeleteTokenParams {

            tokenName: "refresh_token";
        }

        interface DT_GetAccessTokenReturnValues {

            requestId: string;
        }

        interface DT_GetAccessTokenResponseEvent {

            accessToken?: string;
            error?: string;
            errorDescription?: string;
            expiresIn?: string;
            httpStatus?: string;
            requestId: string;
            retcode: string;
            scope?: string;
            isRefreshTokenStored?: number;
        }

        interface DT_GetIdTokenReturnValues {

            requestId: string;
        }

        interface DT_GetIdTokenResponseEvent {

            anid?: string;
            displayname?: string;
            requestId: string;
            retcode: string;
        }


        /**
        * File system information
        */
        interface jszacFileSystemInfo {

            /**
            * Type of the file system
            */
            fileSystem: FileSystemType;

            /**
            * uuid of file system
            */
            uuid: string;

            /**
            * Label of file system (can be empty)
            */
            label: string;

            /**
            * Path of mounted file system. Will be empty if not yet mounted
            */
            path: string;

            /**
            * Does this file system support recording of media content, like PVR and live delay.
            */
            recordingSupported: boolean;

            /**
            * A bit mask that defines which purposes this file system has been configured to be used for.
            *
            * No bits will be set unless this storage has previously been configured to be used for a particular purpose,
            * see jszacStorageManager::SetStoragesForPurpose().
            * The enumeration jszacStorageManager::Purpose defines the individual bits of the bit mask.
            */
            usageMask: number;
        }

        /**
        * Interface for storages.
        *
        * This interface provides functionality for physical storage devices as well as logical file storages.
        * When the state of a storage has been changed, a jszacStorageStateChangedEvent will be fired.
        * Whenever something else has happened to the storage object, a jszacStorageEvent will be fired.
        */
        interface jszacStorage extends EventGenerator {

            /**
            * Format a physical device or partition.
            *
            * Generally, formatting is the process of preparing a storage device for initial use. In this context it specifically means
            * preparing the device for media recording. This function will automatically perform all steps of the formatting process including:
            *   - Unmounting the device from the operating system
            *   - Basic preparation of medium
            *   - Partitioning, making the data storage device visible to the operating system.
            *   - Generating new file system
            *   - Mounting the newly formatted device
            *
            * Warning: The formatting process will permanently erase any existing information from the device or partition.
            * Beware that the operation cannot be undone.
            *
            * Formatting a physical storage device
            * Any currently mounted file systems on all partitions of the device will be automatically unmounted. All existing partitions
            * will be removed. One or more new partitions will be created and a new file system will be generated for each new partition.
            * Finally, the file systems of all new partitions will be automatically mounted.
            *
            * Formatting an existing partition
            * Any currently mounted file systems on the partitions will be automatically unmounted. A new file system will be generated,
            * overwriting any previous file system. Finally, the file system of the partition will be automatically mounted.
            *
            * Asynchronous
            * The formatting process takes some time, and will be performed asynchronously in the background. During this process,
            * one or more jszacStorageEvent will be fired.
            *
            * Precondition
            * Formatting is only possible when the storage is in the jszacStorageManager::STATE_OPERATIONAL or jszacStorageManager::STATE_UNMOUNTED state, see state
            * Note: This operation is not supported for remote network file storages
            * Even if the formatting is successful, there might be physical limitations of the device itself that prevents it for being used for media recording.
            *
            * Parameters label	The label of the new file system. The maximum length of the label is limited to 15 characters because of file system limitations.
            * Return values
            *   0: Formatting process was successfully started.
            *   4: Called in invalid state.
            */
            Format(label: string): number;

            /**
            * Cancel an ongoing formatting operation.
            */
            Cancel(): number;

            /**
            * Type of the storage, physical device or file storage.
            */
            type: StorageType;

            /**
            * State of the storage.
            */
            state: StorageState;

            /**
            * Name of the storage.
            */
            name: string;

            /**
            * The maximum capacity of the storage in kibi (1024) bytes or undefined if not available.
            */
            totalSpaceKiB: number;

            /**
            * A hard limit which could be interpreted as an error condition. The writing to disk must stop. Unit in kB.
            */
            hardLimitKiB?: number;

            /**
            * Available capacity of a file storage in kibi (1024) bytes or undefined if not available.
            */
            freeSpaceKiB?: number;

            /**
             * A soft limit which could be interpreted as a warning to the user that the space left has become small. Unit in kB.
             */
            softLimitKiB?: number;

            /**
            * The physical storage device that a partition file storage is part of or undefined if not available.
            */
            information?: jszacFileSystemInfo;

            /**
             * Object contains Device data.
             * List of all items that might be available in the map of DeviceItems can be found in jszacStorageManager::storage::Key
             */
            deviceData: any;

            /**
             * Object contains SMART data.  
             * List of all items that might be available in the map of SmartItems can be found in jszacStorageManager::Key
             * Note: Not all devices might support SMART monitoring system.
             */
            smartData: any;

            /**
            * The physical storage device that a partition file storage is part of or undefined if not available.
            */
            parent?: jszacStorage;

            /**
            * Physical Storage Device Properties
            * These properties are only supported for jszacStorage objects representing physical storage devices like hard disk drives,
            * devices with removable storage, USB drives and similar
            */

            /**
            * Connection type of a physical storage device or undefined if not available.
            */
            connectionType: PhysicalStorageConnectionType;

            /**
            * Array of jszacStorage objects representing the partitions of a physical storage device or undefined if not available.
            */
            partitions: jszacStorage[];

            /**
             * Register an event listener.
             * Register (add) a listener to events of a specific event name. Events should be handled in the given function.
             *
             * @returns {number}    An ID that shall be used when unregistering the event handler see unregisterEventListener()
             */
            registerEventListener(evtName: string, evtHandlerFunction: (event: any) => void): number;

            /**
             * Register an event listener.
             *
             * Event that will be fired by a jszacStorage object when the state of the object has changed.
             *
             * @returns {number} An ID that shall be used when unregistering the event handler see unregisterEventListener()
             */
            registerEventListener(evtName: "StorageStateChangedEvent", evtHandlerFunction: (event: StorageStateChangedEvent) => void): number;

            /**
             * Register an event listener.
             *
             * Event that will be fired by a jszacStorage object, providing information when something has happened to that object.
             *
             * @returns {number} An ID that shall be used when unregistering the event handler see unregisterEventListener()
             */
            registerEventListener(evtName: "StorageEvent", evtHandlerFunction: (event: StorageEvent) => void): number;
        }

        /**
        * An interface for handling discovery of and operations on storages.
        *
        * This interface handles logical file storage devices, as well as physical storage devices. Most functionality relates to
        * logical file storages.
        *
        * Whenever physical storage device or file storages has been added or removed, a jszacStorageListEvent will be fired.
        *
        * Physical storage devices
        * This category include physical storage devices like hard drives, devices with removable media, USB flash drives and similar,
        * directly connected, internally or externally, to the system. A physical storage device is always divided into one or
        * more separate logical parts, called partitions. Physical storage objects does not provide any file system by themselves.
        * To get a list of physical devices, see physicalDevices. For all other purposes, please use logical file storage devices,
        * see fileStorages
        *
        * File storages
        * This category includes partitions of physical storage devices and mounted network file shares. Partition objects always
        * have a physical storage device as parent. All file storage objects can have a file system or not. To get a list of logical
        * file storage devices, see fileStorages.
        */
        interface jszacStorageManager {

            /**
            * CONNECTION TYPES, Physical storage device connection type
            */

            /**
            * Unknown type of connection
            */
            readonly CONNECTION_TYPE_UNKNOWN: PhysicalStorageConnectionType;

            /**
            * USB mass storage device
            */
            readonly CONNECTION_TYPE_USB: PhysicalStorageConnectionType;

            /**
            * Removable USB mass storage, device e.g. USB stick
            */
            readonly CONNECTION_TYPE_USB_REMOVABLE: PhysicalStorageConnectionType;

            /**
            * SATA storage device
            */
            readonly CONNECTION_TYPE_SATA: PhysicalStorageConnectionType;

            /**
            * FILE SYSTEM TYPES, The set of actually supported file systems depend on the configuration of the operating system.
            */

            /**
            * Unknown or unsupported file system
            */
            readonly FILESYSTEM_UNKNOWN: FileSystemType;

            /**
            * EXT2 file system
            */
            readonly FILESYSTEM_EXT2: FileSystemType;

            /**
            * EXT3 file system
            */
            readonly FILESYSTEM_EXT3: FileSystemType;

            /**
            * EXT4 file system
            */
            readonly FILESYSTEM_EXT4: FileSystemType;

            /**
            * NTFS file system (not always supported)
            */
            readonly FILESYSTEM_NTFS: FileSystemType;

            /**
            * FAT32 file system
            */
            readonly FILESYSTEM_FAT32: FileSystemType;

            /**
            * Physical storage device
            */
            readonly PHYSICAL_DEVICE: StorageType;

            /**
            * Logical file storage (partition or remote network file system)
            */
            readonly FILE_STORAGE: StorageType;

            /**
            * Possible storage states.
            * File storages can be in any of the states but A physical device can only be in STATE_DISCONNECTED or STATE_OPERATIONAL.
            */

            /**
            * Storage object has been disconnected.
            *
            * This is the state of storage objects that has been removed, see DEVICE_REMOVED and FILE_STORAGE_REMOVED.
            * This is a terminal state. Once a storage object enter this state, it will remain there forever.
            * Note: In this state, the only supported jszacStorage properties are: jszacStorage::type, jszacStorage::name, and jszacStorage::state
            */
            readonly STATE_DISCONNECTED: StorageState;

            /**
            * Storage object is operational.
            *
            * If the storage object is a device, operational means that the device is connected and has been detected by the
            * operating system. A file storage in operational state has been successfully mounted into the local operating system and is ready to use.
            */
            readonly STATE_OPERATIONAL: StorageState;

            /**
            * A file storage object is being mounted.
            *
            * When mounting is in progress, the storage can not be used. While in this state, jszacStorageEvent events will be
            * fired by the storage object, providing progress information.
            * Note: Physical devices will never enter this state.
            */
            readonly STATE_MOUNTING: StorageState;

            /**
            * A file storage is being formatted.
            *
            * The file storage is being formatted and can not be used. While in this state, jszacStorageEvent events will be
            * fired by the storage object, providing progress information.
            * Note: Physical devices will never enter this state.
            */
            readonly STATE_FORMATTING: StorageState;

            /**
            * A file storage is not mounted.
            *
            * The file storage can not be used because it has either failed to mount or has been unmounted from the operating system.
            * Note: Physical devices will never enter this state.
            */
            readonly STATE_UNMOUNTED: StorageState;

            /**
            * Different types of jszacStorageEvent events.
            */

            /**
            * Formatting in progress.
            * The file storage is being formatted and can not be used. For progress information, see jszacStorageEvent::value
            */
            readonly FORMATTING_PROGRESS: StorageEventType;

            /**
            * Formatting succeeded.
            * The file system has been successfully formatted
            */
            readonly FORMATTING_DONE: StorageEventType;

            /**
            * Formatting failed.
            * The formatting failed or was canceled. The storage can not be used until successfully formatted.
            * See Also: jszacStorage::Format()
            */
            readonly FORMATTING_FAILED: StorageEventType;

            /**
            * Mounting in progress.
            * The file system is being mounted and can not be used. For progress information, see jszacStorageEvent::value
            */
            readonly MOUNTING_PROGRESS: StorageEventType;

            /**
            * Mounting failed.
            * The storage device could not be mounted into the local operating system.
            */
            readonly MOUNTING_FAILED: StorageEventType;

            /**
            * Mounting succeeded.
            * A file system has been successfully mounted into the local operating system and is ready to use.
            */
            readonly MOUNTING_DONE: StorageEventType;

            /**
            * Amount of free space on the storage has dropped below a warning limit.
            * For the value of the reached limit (KiB), see jszacStorageEvent::value
            */
            readonly FREE_SPACE_LOW_WARNING: StorageEventType;

            /**
            * Different types of jszacStorageListEvent event.
            */

            /**
            * A physical storage device has been added
            */
            readonly DEVICE_ADDED: StorageListEventType;

            /**
            * A physical storage device has been removed
            */
            readonly DEVICE_REMOVED: StorageListEventType;

            /**
            * A file storage has been added
            */
            readonly FILE_STORAGE_ADDED: StorageListEventType;

            /**
            * A file storage has been removed
            */
            readonly FILE_STORAGE_REMOVED: StorageListEventType;


            /**
            * File storage purposes.
            * A file storage can be configured for many purposes. Each enumeration defines a unique bit that can be combined in a bitmask.
            */

            /**
            * This file system may not be written to by the system
            */
            readonly PURPOSE_NOT_USED: StoragePurpose;

            /**
            * This file system may be used for recording of video and audio
            */
            readonly PURPOSE_PVR: StoragePurpose;

            /**
            * This file system may be used for buffering of live delay
            */
            readonly PURPOSE_LIVE_DELAY: StoragePurpose;

            /**
             * Communicates the reliability status of the device.
             * Read only. Possible values are:
             * "1" if "treshold not exceeded"
             * "0" if "treshold exceeded" what means the drive is "about to fail"
             */
            readonly KEY_SMART_STATUS: string;

            /**
             * Temperature of the device.
             */
            readonly KEY_SMART_TEMPERATURE: string;

            /**
             * The model of a device.
             */
            readonly KEY_MODEL_NAME: string;

            /**
             * The serial number of a device.
             */
            readonly KEY_SERIAL_NUMBER: string;

            /**
             * Firmware revision number of a device.
             */
            readonly KEY_FIRMWARE_REVISION: string;

            /**
            * Get an array of file system UUID for the file systems that are configured to be used for a specific purpose.
            *
            * @param {StoragePurpose} purpose A purpose that file systems can be used for.
            *
            * @returns Array of UUID strings for the file systems that should be used for this purpose. The order of the file systems
            * is important. If the first file system is full or unavailable, the next available file system in the list should be used.
            * An empty array means that no file systems may be used for this purpose
            */
            GetStoragesForPurpose(purpose: StoragePurpose): string[]

            /**
            * Find a file storage by UUID.
            * All file systems have a universally unique identifier (UUID).
            * This function will try to find a file storage having a file system with a specific UUID.
            *
            * @param {string} uuid UUID of requested file system
            *
            * @returns Requested file storage object or undefined if not found.
            */
            FindStorage(uuid: string): jszacStorage

            /**
            * Configure which file systems should be used for a specific purpose.
            *
            * @param {StoragePurpose} purpose A purpose that file systems can be used for.
            * @param {string[]} fileSystemUUIDs Array of UUID strings for the file systems that should be used for this purpose.
            * The order of the file systems is important. If the first file system is full or unavailable, when the system is trying
            * to perform that type of usage, the next available file system in the list will be used. An empty array will disable all file systems for this purpose.
            *
            * @returns 0 if successful.
            */
            SetStoragesForPurpose(purpose: StoragePurpose, fileSystemUUIDs: string[]): number

            /**
            * Available logical file storages.
            * Array of jszacStorage objects representing logical file storages or an empty array if no file storages are available.
            */
            fileStorages: jszacStorage[];

            /**
            * All connected physical storage devices like hard drives, devices with removable media, USB flash drives and similar.
            * Array of jszacStorage objects representing physical storage devices or an empty array if no devices are connected.
            */
            physicalDevices: jszacStorage[];
        }

        /**
         * Event posted when an application is registered or unregistered in ZiDS.
         *
         * Use "AppRegistrationEvent" as name of the event when registering a listener.
         */
        interface AppRegistrationEvent {
            /**
             * The name of the instance that caused the event.
             */
            instanceId: string;
            /**
             * true => application is registered, false => unregistered.
             */
            isRegistered: boolean;
        }

        /**
         * Event posted when the process associated with an application is terminated.
         * 
         * Use "AppExitEvent" as name of the event when registering a listener.
         */
        interface AppExitEvent {
            /**
             * 
             */
            exitStatus: number;
            /**
             * The name of the instance that caused the event.
             */
            instanceId: string;
        }

        /**
         * The properties of an application instance.
         * 
         * It indicates the name of the instance, whether the applications is running as an internal or external application and if it is active at this moment.
         */
        interface AppInstanceProperties {

            /**
             * Whether the instance is active (true) or not (false). An active application receives key input, whereas an inactive application does not.
             */
            isActive: boolean;

            /**
             * Whether the application is running internal (true) or external (false). An application is internal when it runs inside the main process, and it is external when it runs as a separate program in a separate process.
             * Internal applications may have limitations (for example, not possible to stop).
             */
            isInternal: boolean;

            /**
             * The application instance name.
             */
            name: string;
        }

        /**
         * Event posted when an application is supposed to start after some other applications are stopped, indicating some error preventing it from being starded.
         * 
         * The event indicates the application instance and the error code.
         * This event is only fired when we use the Start application function providing a list of disposable apps, and only in the case of failure (that is, when the application could not be started). Have a look at AppRegistrationEvent for the case of success.
         */
        interface AppStartedStatusEvent {
            /**
             * The name of the instance that caused the event.
             */
            instanceId: string;
            /**
             * 
             */
            status: AppStartedStatusType;
        }

        /**
         * An event sent to an application when the status of an application changes.
         * 
         * The status change means that the active/inactive state has changed. See Application Management for further information.
         */
        interface AppStatusChangedEvent {
            /**
             * The name of the instance that caused the event.
             */
            instanceId: string;
            /**
             * The current state of the application, whether it is active or not.
             */
            isActive: boolean;
            /**
             * The reason which states what has changed.
             */
            reason: AppStatusChangedReasonType;
        }

        /**
        * The application manager.
        *
        * This is used to manage applications like start, stop, activate, de-activate and send commands to.
        */
        interface jszacAppManager {

            /**
             * The instance could not be started because the apps of a list of disposable apps could not be stopped.
             */
            readonly APP_STARTED_STATUS_STOP_DISPOSABLE_APPS_TIMEOUT: AppStartedStatusType;

            /**
             * There was not enough free memory to start the app.
             */
            readonly APP_STARTED_STATUS_LACK_OF_MEMORY_TO_START: AppStartedStatusType;

            /**
             * The activation state has changed, as returned by IZacAppManager::GetActivated().
             */
            readonly STATUS_CHANGED_REASON_ACTIVATION_STATE_CHANGED: AppStatusChangedReasonType;

            /**
             * @name jszacAppManager#DialManager 
             * @memberOf jszacAppManager
             *
             * @description
             * Object that provides access to dial Mananger related functionality.
             * 
             * • Note: Not all systems support dial manager. For such systems this property might be undefined.
             *
             */
            DialManager: jszacDialManager;

            /**
            * Activate a started instance, i.e. enable the instance to receive key inputs if the instance has highest priority. 
            *
            * @param {instance} the name of the instance to activate.
            *
            * @returns 0 is OK, other is error
            */
            Activate(instance: string): number;

            /**
            * Deactivate a started instance, i.e. the instance will not receive key inputs anymore. 
            *
            * @param {instance} the name of the instance to de-activate.
            *
            * @returns 0 is OK, other is error
            */
            Deactivate(instance: string): number;

            /**
            * Checks if the instance is activated or not. 
            *
            * @param {instance} the name of the instance to check.
            *
            * @returns true if activated, false otherwise other => error
            */
            GetActivated(instance: string): boolean;

            /**
             * Get an array with information regarding running application instances.
             * This function can be used to know some information about the running application instances.
             * 
             * @returns {AppInstanceProperties[]} The array of AppInstanceProperties.
             */
            GetAppInstancesProperties(): AppInstanceProperties[];

            /**
            * Get the size and position of the graphics area associated with an application instance. 
            *
            * @param {instanceName} the name of the application.
            *
            * @returns the graphics area.
            */
            // GetGraphicsArea  ( instanceName: string ): GraphicsArea; 

            /**
            * Get the visibility status of an application instance. 
            *
            * @param {instanceName} the name of the application instance.
            *
            * @returns true if the instance is visible
            */
            GetVisibility(instanceName: string): boolean;

            /**
            * Get the Z order for a specific application instance. 
            *
            * @param {instanceName} the name of the application instance.
            *
            * @returns the z-order of the instance
            */
            GetZOrder(instanceName: string): number;

            /**
            * Send user defined command to a started instance. 
            *
            * Possible command is defined by each application. If the command is unknown to the application it is ignored (no error is returned)
            *
            * @param {instance} the name of the instance send the command to.
            * @param {command} the command to send to the instance.
            *
            * @returns 0 => command is passed to the application. other => error
            */
            SendCommand(instance: string, command: string): number;

            /**
            * Sets the input priority of an application. 
            *
            * The input priority is used together with the registered key-set to determine which application that gets a key input event. 
            * The application with the highest priority that also wants a specific key will get it.
            *
            * @param {instanceName} the name of the application which input priority should be changed.
            * @param {priority} the input priority of the application. The higher value the higher priority.
            *
            * @returns 0 => command is passed to the application. other => error
            */
            SetInputPriority(instanceName: string, priority: number): number;

            /**
            * Sets the visibility of an application instance. 
            *
            * Only valid for applications that has a graphical context managed by ZMP. Normally such application is visible when started by jszacAppManager.
            *
            * @param {instanceName} the name of the application which visibility status should be changed. 
            * @param {visible} the new visibility status of the application. true => visible, false => not visible
            *
            * @returns 0 => command is passed to the application. other => error
            */
            SetVisibility(instanceName: string, visible: boolean): number;

            /**
            * Sets the Z order of an application. 
            *
            * Changes the Z order of an application. Applications having a higher z-order value is displayed on top of applications with a lower z-order.
            *
            * @param {instanceName} the name of the application which z-order should be changed.
            * @param {visible} the new z-order.
            *
            * @returns Integer where 0 is OK, other is error
            */
            SetZOrder(instanceName: string, zOrder: number): number;

            /**
            * Start an instance of an application. 
            *
            * When the application is started and available for access a AppRegistrationEvent will be issued.
            *
            * @param {manifest} string The name of a manifest describing the application. The manifest must previously have been installed in the box. 
            * @param {instance} string The name that identifies the new instance. The applications can be accessed with this as key. 
            * @param {disposableApps} string The command line arguments to the applications when it is started.
            * @param {commands} string[] A list of application instances that may be stopped if needed before starting this one. If this parameter is provided, the result is sent as an AppRegistrationEvent when successful or as an AppStartedStatusEvent when the app is not started.
            *
            * @returns 0 => The application is being started, other => application couldn't be started
            */
            Start(manifest: string, instance: string, commands?: string, disposableApps?: string[]): number;

            /**
            * Stop a started instance. 
            *
            * When the application is stopped a AppRegistrationEvent will be issued.
            *
            * @param {instance} the name of the instance to stop.
            *
            * @returns name of the instance to stop.
            */
            Stop(instance: string): number;
        }


        /**
         * Event requesting the application to show a dialog.
         *
         * The event is identified with "DialogRequest". 
         * The receive shall call request.PostAcknowledge(true) to indicate that the request is received and the dialog is shown. If the dialog cannot be shown application shall call request.PostAcknowledge(false) instead. 
         */
        interface jszacDialogRequestEvent {
            /**
             * The name of the instance that caused the event.
             */
            request: jszacDialogRequest;
        }

        /**
         * Class representing a user action request.
         *
         * When ZMP needs an action from a user it send this request. The request contains information that should be displayed to the user. The order of evaluation from the UI would be:
         *   1. inputFieldType indicate whether the dialog contains a character input field or not.
         *   2. If no input field, alternatives indicates if the dialog is a multiple-choice or a simple Ok/Cancel-dialog.
         *   3. selectPolicy indicates the dimension of the expected answer, and indirectly what should be selectable/clickable on screen.
         *   4. Call PostAcknowledge() to indicate to the underlying framework whether the dialog will be handled.
         *   5. Evaluate header/message/bottomText etc. and display the dialog on screen.
         *   6. Store the request until all processing concerning this dialog is complete.
         *   7. Wait for user input. Optionally count down timeout timer.
         *   8. If a jszacDialogCancelEvent is a received. Remove UI components and close dialog. Do not respond.
         *   9. When answered/canceled by the user, report response using PostResponse() or PostCancel().
         *   10.Dispose of the object. 
         */
        interface jszacDialogRequest {

            readonly DIALOG_TYPE_UNDEFINED: DialogType;
            readonly DIALOG_TYPE_INFORMATION: DialogType;
            readonly DIALOG_TYPE_QUESTION: DialogType;
            readonly DIALOG_TYPE_ATTENTION: DialogType;
            readonly DIALOG_TYPE_LOCK: DialogType;
            readonly DIALOG_TYPE_CONDITIONAL_ACCESS: DialogType;

            readonly DIALOG_INPUTFIELD_NONE: InputFieldType;
            readonly DIALOG_INPUTFIELD_TEXT: InputFieldType;
            readonly DIALOG_INPUTFIELD_NUMERIC: InputFieldType;
            readonly DIALOG_INPUTFIELD_PASSWORD: InputFieldType;
            readonly DIALOG_INPUTFIELD_LOGIN: InputFieldType;
            readonly DIALOG_INPUTFIELD_PIN: InputFieldType;

            readonly DIALOG_SELECT_NONE: SelectPolicy;
            readonly DIALOG_SELECT_ONE: SelectPolicy;
            readonly DIALOG_SELECT_MULTIPLE: SelectPolicy;

            /**
             * @ngdoc method
             * @name PostAcknowledge
             *
             * @description
             * Let the Dialog framework know that the request is handled. 
             * If the UI, for any reason, chooses not to handle the request, the request should still be acknowledged, but with a "false" parameter value.
             * Acknowledging the dialog is mandatory if it will be handled and highly encouraged if it will not, as this will speed up the internal fall-back process.
             *
             * @param {boolean}  accept true => dialog will be handled false => dialog will not be handled 
             *
             * @returns {number} Integer where 0 is OK, other is error.
             *
             */
            PostAcknowledge(accept: boolean): number;

            /**
             * @ngdoc method
             * @name PostCancel
             *
             * @description
             * Post back a Cancel/Back user action. 
             * Valid for all dialog types. 
             * The UI may close the dialog after calling this method.
             *
             * @returns {number} Integer where 0 is OK, other is error.
             *
             */
            PostCancel(): number;

            /**
             * @ngdoc method
             * @name PostResponse   
             *
             * @description
             * Post back a string user action response. 
             * Valid for all dialog types. 
             * Value of the input field dialog or the single-choice where one out of multiple alternatives is selected. For OK/Cancel types of dialogs it is equivalent with OK
             * The UI may close the dialog after calling this method.
             *
             * @param {string}  response [optional] The response string that should be posted to the requester. This may be omitted.
             *
             * @returns {number} Integer where 0 is OK, other is error.
             *
             */
            PostResponse(response?: string): number;

            /**
             * @ngdoc method
             * @name PostResponse   
             *
             * @description
             * Post back an array of string user action responses. 
             * Valid for multiple-choice alternative selection. Even if only one, or no option is selected. The expected strings are the id strings from the jszacDialogAlternative of selected items.
             * Undefined behavior for all other dialog types. The UI may close the dialog after calling this method.
             *
             * @param {string}  response [optional] Array of response strings that should be posted to the requester. This may be omitted 
             *
             * @returns {number} Integer where 0 is OK, other is error.
             *
             */
            PostResponse(response?: string[]): number;

            /**
             * The bottom text of the dialog 
             */
            bottomText: string;

            /**
             * The header text of the dialog 
             */
            header: string;

            /**
             * A unique identifier of this request. Each dialog request will ha a unique identifier. 
             */
            id: string;

            /**
             * Restriction of input field size (number of characters). 0 means no restriction. 
             */
            inputFieldLength: number;

            /**
             * Input field message. 
             * This text is intended to be displayed close to the input field. It may be used to provide a hint to user what to enter, e.g. which type of pincode to enter (like the normal or the adult pincode etc) 
             */
            inputFieldText: string;

            /**
             * What kind of input field is requested 
             */
            inputFieldType: InputFieldType;

            /**
             * The underlying definition of this dialog request as JSON (read only). 
             * If you want to provide your own translations of text phrases in the dialog, text phrase identifiers and variables for each text, can be extracted from this definition (if available).
             * For example and description of the JSON format, please see Dialog Request JSON 
             */
            json: string;

            /**
             * The message text of the dialog 
             */
            message: string;

            /**
             * Optional array of jszacDialogAlternative objects for multiple select.
             * If there are no alternatives, (alternatives.length == 0) the dialog is considered an "Ok/Cancel" dialog. 
             */
            selectPolicy?: SelectPolicy;

            /**
             * The timeout time of the dialog (in seconds) 
             * Note
             * This timeout starts count down when the request was dispatched to the framework, not from when the request reached the application. 
             */
            timeoutSecs: number;

            /**
             * Type of dialog request. Indicates what kind of visual appearance that should be used for this dialog. 
             */
            type: DialogType;
        }


        /**
         * Event requesting the application to hide a dialog. 
         *
         * The event is identified with "DialogCancel" The dialog associated with the request with the value of the id property shall be removed.
         */
        interface jszacDialogCancelEvent {
            /**
             * The name of the instance that caused the event.
             */
            id: string;
        }

        /**
         * @ngdoc interface
         * @name jszacApp
         *
         * @description
         * An object that can receive messages from other applications and/or user action events.
         *
         */
        interface jszacApp {

            /**
             * @ngdoc method
             * @name AcceptsUserActionRequests
             *
             * @description
             * Indicates that the application will handle user action requests.
             * If set to true jszacDialogRequestEvent and jszacDialogCancelEvent will be posted to this app. By default this is set to false so this needs only to be called for those applications that can handle requests.
             *
             * @param {boolean} accepts true => Application will accept requests, false => Application will not accept request.
             *
             * @returns {number} Integer where 0 is OK, other is error.
             *
             */
            AcceptsUserActionRequests(accepts: boolean): number;

            /**
             * Function for getting an application setting.
            * Parameters  [in]	key	The name of the setting to get
            *  Returns a string with the value of the requested setting.
            *  Exceptions A string containing error message if key was not found, of wrong type or have illegal value.
             */
            SettingGet(key: string): string;

            /**
             * Function for setting an application setting.
             * If a_Key is an empty string and a_Persist is false there will be error thrown. For the value, it is possible to pass it as an empty string.
             * Parameters
             * [in]	key	The name of the setting to set. The name shall not include special character *. Any setting name containing this will be rejected.
             * [in]	value	The value of the setting to set.
             * [in]	persist	[optional] If set to true store persistently all settings. Default value is false.
             * Returns 0 is OK, other is error
             */
            SettingSet(key: string, value: string, persist: boolean): number;

            /**
             * Function to delete application setting(s).
             * Using this function it is possible to delete one or many application settings at the same time.
             * Parameters
             * [in]	settingPattern	A pattern for settings. This pattern could be the name of a setting or a prefixed version of it followed by speciacl character * or just special
             * which would mean to erase all settings.
             * Returnsv 0 is OK, other is error
             */
            SettingsDelete(settingPatten: string): number;
        }

        /**
         * A custom command.
         * 
         * The event is identifies by "CustomCmd".
         */
        interface jszacCustomCommand {

            /**
             * The command that was sent.
             */
            command: string
        }

        /**
         * @ngdoc interface
         * @name jszacFrontDisplay
         *
         * @description
         * The FrontDisplay object. Used for manipulating the front display.
         *
         */
        interface jszacFrontDisplay {

            readonly SYMBOL_TV: SymbolType;
            readonly SYMBOL_RADIO: SymbolType;
            readonly SYMBOL_SCRAMBLE: SymbolType;

            readonly CAP_DISPLAY4x7SEG: number;
            readonly CAP_DISPLAYTEXT: number;
            readonly CAP_DISPLAYLED: number;

            /**
            * @ngdoc method
            * @name GetCapabilities
            *
            * @description
            * Get the Capabilities of the front display. 
            *
            * @returns {number} Capabilities mask.
            *
            */
            GetCapabilities(): number;

            /**
            * @ngdoc method
            * @name GetString
            *
            * @description
            * Get the last string set on the front display. 
            *
            * @returns {string} Text written on the front display.
            *
            */
            GetString(): string;

            /**
             * @ngdoc method
             * @name SetString
             *
             * @description
             * Set the text on the front display. 
             * Dots and colons can be set direct on the string and it will be converted by the platform to the respective segments. Parsing the text (for example truncating text longer than the display length, separating dots and colons from the display) depends on on the front display capability.
             *
             * @param {string} displayString Text to write.
             * @param {boolean} To Enable or Disable scrolling of text. This parameter is currently ignored and always regarded as false
             *
             * @returns {number} Integer where 0 is OK, other is error.
             *
             */
            SetString(displayString: string, scroll: boolean): number;

            /**
             * @ngdoc method
             * @name SetString
             *
             * @description
             * Set the specified symbol on the front display. 
             * Limitations in the front display may affect the result of this function.
             *
             * @param {SymbolType} symbol Symbol to set on the front display, refer to SymbolType.
             * @param {boolean} onOff This parameter indicates whether to turn the symbol on or off. True indicates turning it on and false turns it off.
             *
             * @returns {number} Integer where 0 is OK, other is error.
             *
             */
            SetSymbol(symbol: SymbolType, onOff: boolean): number;

            /**
             * @ngdoc method
             * @name ShowTime
             *
             * @description
             * Enable or disable time showing on the front display. 
             * The method creates a thread running in background responsible for showing and keeping updated the actual time on the front display.
             *
             * @param {boolean} active True to show the time and false to hide it. When false the string displayed before will be set.
             *
             * @returns {number} Integer where 0 is OK, other is error.
             *
             */
            ShowTime(active: boolean): number;
        }

        /**
         * @ngdoc interface
         * @name jszacDialManager
         *
         * @description
         * An interface for handling discovery of and operations on DIAL.
         * 
         * DIAL (DIscovery And Launch) is a simple protocol that second-screen devices can use to discover and launch applications on first-screen devices.
         *
         */
        interface jszacDialManager {

            /**
             * @name jszacDialManager#DIAL_PROP_ALLOW_STOP 
             * @memberOf jszacDialManager
             *
             * @description
             * Property to indicate if it is allow to stop the application.
             * This property is set in a call to RegisterDial().
             * 
             * • Note: Only applicable at RegisterDial() It cannot be read (write only).
             *
             */
            readonly DIAL_PROP_ALLOW_STOP: string;

            /**
             * @name jszacDialManager#HIDDEN 
             * @memberOf jszacDialManager
             *
             * @description
             * DIAL Application hidden.
             *
             */
            readonly HIDDEN: DialAppStatus;

            /**
             * @name jszacDialManager#RUNNING 
             * @memberOf jszacDialManager
             *
             * @description
             * DIAL Application running.
             *
             */
            readonly RUNNING: DialAppStatus;

            /**
             * @name jszacDialManager#STOPPED 
             * @memberOf jszacDialManager
             *
             * @description
             * DIAL Application stopped.
             *
             */
            readonly STOPPED: DialAppStatus;

            /**
             * @ngdoc method
             * @name AcknowledgeHideDial
             *
             * @description
             * Acknowledge a hide request.
             * 
             * This must be called after a DialAppHideRequestEvent has been received, in order for the app to signal that it supports hidden state.
             *
             * @param {string} appName The DIAL application name.
             * @param {boolean} supportsHiddenState Flag telling if the app supports hidden state.
             *
             * @returns {number} Integer where 0 is OK, other is error.
             *
             */
            AcknowledgeHideDial(appName: string, supportsHiddenState: boolean): number;

            /**
             * @ngdoc method
             * @name AcknowledgeStartDial
             *
             * @description
             * Acknowledge a start request.
             * 
             * This must be called after a DialAppStartRequestEvent has been received, and the requested application either has been completely started, or was denied to start.
             *
             * @param {string} appName The DIAL application name.
             * @param {boolean} appStarted Flag telling if the app was started or not.
             *
             * @returns {number} Integer where 0 is OK, other is error.
             *
             */
            AcknowledgeStartDial(appName: string, appStarted: boolean): number;

            /**
             * @ngdoc method
             * @name AcknowledgeStatusDial
             *
             * @description
             * Acknowledge a status request.
             * 
             * This must be called after a DialAppStatusRequestEvent has been received.
             *
             * @param {string} appName The DIAL application name.
             * @param {DialAppStatus} appStatus The DIAL application status.
             *
             * @returns {number} Integer where 0 is OK, other is error.
             *
             */
            AcknowledgeStatusDial(appName: string, appStatus: DialAppStatus): number;

            /**
             * @ngdoc method
             * @name AcknowledgeStopDial
             *
             * @description
             * Acknowledge a stop request.
             * 
             * This must be called after a DialAppStopRequestEvent has been received from IDialManager, and the requested application has completely stopped.
             *
             * @param {string} appName The DIAL application name.
             *
             * @returns {number} Integer where 0 is OK, other is error.
             *
             */
            AcknowledgeStopDial(appName: string): number;

            /**
             * @ngdoc method
             * @name DisableDial
             *
             * @description
             * Disable DIAL service for an application.
             * 
             * The application must previously be registered with the RegisterDial method, otherwise this will fail.
             *
             * @param {string} appName The DIAL application name.
             *
             * @returns {number} Integer where 0 is OK, other is error.
             *
             */
            DisableDial(appName: string): number;

            /**
             * @ngdoc method
             * @name EnableDial
             *
             * @description
             * Enable DIAL service for an application.
             * 
             * The application must previously be registered with the RegisterDial method, otherwise this will fail.
             *
             * @param {string} appName The DIAL application name.
             *
             * @returns {number} Integer where 0 is OK, other is error.
             *
             */
            EnableDial(appName: string): number;

            /**
             * @ngdoc method
             * @name RegisterDial
             *
             * @description
             * Register an application with DIAL.
             * 
             * This will enable DIAL services for a specified application name. The service is automatically enabled and will be visible on the network after calling this method.
             * The application name must be an officially DIAL registered name, please see the link: http://www.dial-multiscreen.org/dial-registry/namespace-database.
             * 
             * • Note: Use the property DIAL_PROP_ALLOW_STOP to indicate if it allow to stop the application.
             *
             * @param {string} appName The DIAL application name.
             * @param {any} props DIAL service properties.
             *
             * @returns {string} The additional data URL that must be used when starting the application.
             *
             */
            RegisterDial(appName: string, props: any): string;
        }

        /**
         * Event fired by jszacDialManager when DIAL is requesting application status.
         * 
         * This event must be acknowledged by calling jszacDialManager.AcknowledgeStatusDial().
         * 
         * The event is registered as "DialAppStatusRequestEvent".
         */
        interface jszacDialAppStatusRequestEvent {

            /**
             * The application name identifies the application registered in DIAL.
             */
            appName: string;
        }

        /**
         * Event fired by jszacDialManager when a DIAL application has been requested to stop.
         * 
         * After this event has been received and the requested application has completely stopped, the request must be acknowledged by calling jszacDialManager.AcknowledgeStopDial()
         * 
         * The event is registered as "DialAppStopRequestEvent".
         */
        interface jszacDialAppStopRequestEvent {

            /**
             * The application name identifies the application registered in DIAL.
             */
            appName: string;
        }

        /**
         * Event that will be fired by jszacDialManager when DIAL application has been requested to start by a second screen device.
         * 
         * After this event has been received and the requested application either has been completely started, or was denied to start, the request must be acknowledged by calling jszacDialManager.AcknowledgeStartDial()
         * 
         * The event is registered as "DialAppStartRequestEvent".
         */
        interface jszacDialAppStartRequestEvent {

            /**
             * The DIAL additional data URL.
             */
            additionalDataUrl: string;

            /**
             * The application name identifies the application registered in DIAL.
             */
            appName: string;

            /**
             * The DIAL payload.
             */
            payload: string;
        }

        /**
         * Event that will be fired by jszacDialManager when a DIAL application has been requested to hide.
         * 
         * The event is registered as "DialAppHideRequestEvent".
         */
        interface jszacDialAppHideRequestEvent {

            /**
             * The application name identifies the application registered in DIAL.
             */
            appName: string;
        }

        /**
         * handles configuration of equipment for satellite outside the STB.
         * 
         * To receive a service over satellite some addition equipment are required that are not included in the STB. 
         * This module defines how the equipment is connected to the STB so it can receive the requested services
         */
        namespace OutDoorUnit {

            type BandType = number; /** Supported band types: Ku band (9 GHz - 13 GHz) |  C cband (3 GHz - 7 GHz) */


            /**
             * The outdoor unit db.
             * This is used to manage configuration of equipment for satellite outside the STB.
            */
            interface jszacOutDoorUnitDb {

                /** Ku band (9 GHz - 13 GHz) */
                readonly BAND_KU: OutDoorUnit.BandType;

                /** C cband (3 GHz - 7 GHz) */
                readonly BAND_C: OutDoorUnit.BandType

                /** 
                 * Get a configuration object.
                 * @param {boolean} current current	If true the returned object is populated with data from the current used configuration. If false the returned object will be empty.
                 * @returns{jszacOutDoorConfiguration} jszacOutDoorConfiguration
                 * @throws string containing error message if arguments are missing, of wrong type or have illegal value
                 */
                GetConfiguration(current: boolean): jszacOutDoorConfiguration;

                /**
                 * Set the configuration that shall be used by the system.
                 * 
                 * @param {jszacOutDoorConfiguration} configuration	A jszacOutDoorConfiguration object containing the new configuration
                 * @returns {number} 0 if successful
                 * @throws A	string containing error message if arguments are missing, of wrong type or have illegal value
                 */
                Commit(configuration: jszacOutDoorConfiguration): number;

                /**
                 * Replace the configuration currently used by the system with the configuration stored in storage.
                 * Note that the new configuration may be empty (which will not cause any error) if nothing was stored in the storage. Call GetConfiguration() to get the new configuration.
                 * 
                 * @returns {number} 0 if successful
                 * @throws A string containing error message if arguments are missing, of wrong type or have illegal value
                 */
                ReadFromStorage(): number;

                /**
                 * Save the configuration currently used by the system to storage.
                 * @returns {number} 0 if successful
                 * @throws A string containing error message if arguments are missing, of wrong type or have illegal value
                 */
                WriteToStorage(): number;

                /**
                 * Get lnb info by its name.
                 * 
                 * @param {string} name	A string with the name of the custom type.
                 * @returns {jszacLnbTypeInfo} A {@link jszacLnbTypeInfo} object
                 * @throws A string containing error message if arguments are missing, of wrong type or have illegal value        
                 */
                GetLNBTypeInfo(name: string): jszacLnbTypeInfo;

                /**
                 * Delete custom lnb type by its name.
                 * 
                 * @param {string} name	A string with the name of the custom type.
                 * @returns {string} 0 if successful
                 * @throws A string containing error message if arguments are missing, of wrong type or have illegal value
                 */
                DeleteLNBType(name: string): number;

                /**
                 *  Add new custom lnb or modify existing custom lnb with the same a_Name.
                 * 
                 * @param  {string} name	A string with the name of the new type.
                 * @param {jszacLnbTypeInfo} lnbInfo	A {@link jszacLnbTypeInfo} object
                 * @returns {number} 0 if successful
                 * @throws A string containing error message if arguments are missing, of wrong type or have illegal value
                 */
                AddLNBType(name: string, lnbInfo: jszacLnbTypeInfo): number;

                /**
                 * Get a list of supported LNB types.
                 * @returns {string[]} An array of supported LNB type names
                 * @throws A string containing error message if arguments are missing, of wrong type or have illegal value
                 */
                GetLNBTypes(): string[];

                /**
                 * Get a list of supported satellites.
                 * 
                 * @returns {jszacSatelliteInfo[]} An array of jszacSatelliteInfo objects
                 * @throws A string containing error message if arguments are missing, of wrong type or have illegal value
                 */
                GetSatellites(): jszacSatelliteInfo[];
            }

            /**
             * A configuration of equipment for satellite (outside the box).
             * The user must configure how the box is connected to satellite(s) and the type of equipment that is used (LNBs, motor, DiSEqC switches etc)
             */
            interface jszacOutDoorConfiguration {
                //TODO : jszacOutDoorConfiguration consts

                /** Special type of satellite positions Unknown satellite */
                readonly UNKNOWN_SAT_POS: number;

                /** No satellite */
                readonly NO_SATELLITE: number;

                //    Possible port types

                /** Disabled: there is no unit plugged in*/
                readonly ODU_DISABLED: string;

                /** DiSEqC (Digital Satellite Equipment Control) switch with two ports */
                readonly ODU_DISEQC_2: string;

                /** DiSEqC(Digital Satellite Equipment Control) switch with four ports */
                readonly ODU_DISEQC_4: string;

                /** Motor controlled via DiSEqC protocol */
                readonly ODU_DISEQC_MOTOR: string;

                /** LNB(low - noise block downconverter) */
                readonly ODU_LNB: string;

                /** LNB(low - noise block downconverter) Type C */
                readonly ODU_LNB_BAND_TYPE_C: string;

                /** LNB(low - noise block downconverter) Type KU */
                readonly ODU_LNB_BAND_TYPE_KU: string;

                /**Motor controlled via SatScan protocol */
                readonly ODU_SATSCAN_MOTOR: string;

                /** Loop - through port, ie.port which is electrically connected to other port */
                readonly ODU_SLAVEPORT: string;

                /** Unicable */
                readonly ODU_UNICABLE: string;

                /**
                 * Set the equipment type connected at a port.
                 * 
                 * @param {string} port	A id of a port. "<index>/<index>/...<index>"
                 * @param {string} type	The type of equipment connected at that port
                 * @returns {number} 0 if successful
                 * @throws A string containing error message if arguments are missing, of wrong type or have illegal valu
                 */
                SetType(port: string, type: string): number;

                /**
                 *  Get the equipment type connected at a port.
                 * 
                 * @param {string} port	A id of a port. "<index>/<index>/...<index>"
                 * @return {string} The type of equipment connected at that port
                 * @throws A string containing error message if arguments are missing, of wrong type or have illegal value
                 */
                GetType(port: string): string;

                /**
                 *  Sets information (attributes) of a port.
                 * 
                 * @param {string}	port	A id of a port. "<index>/<index>/...<index>"
                 * @param {jszacOutDoorPortInfo}	portInfo	The new configuration of the specified port
                 * @returns {number} 0 if successful
                 * @throws A string containing error message if arguments are missing, of wrong type or have illegal value
                 */
                SetPortInfo(port: string, portInfo: jszacOutDoorPortInfo): number;


                /**
                 * Get information of a port(e.g.type etc)
                 * Note that the information is not valid for all port type. Note that the function shall not be called on a port which is disabled.
                 * 
                 * @param {string} port	A id of a port. "<index>/<index>/...<index>"
                 * @returns {jszacOutDoorPortInfo} The portinfo object
                 * @throws A string containing error message if arguments are missing, of wrong type or have illegal value
                 */
                GetPortInfo(port: string): jszacOutDoorPortInfo;

                /**
                 * Get a list of nodes (ports) in the "configuration tree".
                 * 
                 * The list could look like: {"0","1","0/0","0/1","1/0","1/1"} when using 2 tuners with a DiSeqC-2 on each tuner.
                 * For one tuner, one LNB the list would be {"0"}. Note that the list can change when SetPortInfo() are called.
                 * 
                 * @returns {string[]} A array of ports
                 * @throws A string containing error message if arguments are missing, of wrong type or have illegal value
                 */
                GetPorts(): string[];
            }


            /**
             * Information about a Unicable UserBand.
             * Only used for Unicable configurations.
             */
            interface jszacUserBand {

                /** The allocated user-band frequency, in kHz for this receiver. Only applicable when the type of the port is ODU_UNICABLE */
                frequency: number;

                /** The allocated user-band slot for this receiver. Only applicable when the type of the port is ODU_UNICABLE */
                slot: number
            }

            /**
             * Information of a port.
             * Different parameters are used depending on port type E.g DiSEqC switches does not have any info at all
             */
            interface jszacOutDoorPortInfo {

                /** If DC Offset 0.5V should be added @SR seems only mandatory for ODU_LNB */
                DCOffset?: boolean;

                /** Type of LNB*/
                lnbType?: string;

                /** Indicates an actual port number through which this port operates. Port numbers are indexes in array of ports. @SR seems useless for broadband models like MR601 */
                loopThrough?: number;

                /** The orbitalPosition of the satellite in degrees time 10. Only applicable when the type of the port is ODU_LNB */
                orbitalPos?: number;

                /** Array of {@link jszacSatellite} objects, specifies which satellites that are connected to the Unicable system. 
                 * The order in the array is important, since it determines which bank the satellite is connected to.
                 *  Only applicable when the type of the port is ODU_UNICABLE 
                 */
                satellites?: jszacSatellite[];

                /** Array of {@link jszacUserBand} objects objects, which specifies the Unicable userbands that are available to receiver. Only applicable when the type of the port is ODU_UNICABLE*/
                userbands?: jszacUserBand[];
            }

            /**
             * Information about a connected satellite.
             * Only used for Unicable configurations.
             */
            interface jszacSatellite {
                /** Type of LNB */
                lnbType: string;

                /** The orbitalPosition of the satellite in degrees time 10. */
                orbitalPos: number;
            }

            /**
             * Defines info for a LNB
             */
            interface jszacLnbTypeInfo {

                /** Band type */
                bandType: OutDoorUnit.BandType;

                /** Cross frequency in kHz for switching between LO1 and LO2 ; integer */
                fX_kHz: number;

                /** Low LO (Local Oscillator) frequency in kHz; integer */
                lo1_kHz: number;

                /** High LO (Local Oscillator) frequency in kHz; integer */
                lo2_kHz: number;
            }

            /**
             * Defines info of a satellite
             */
            interface jszacSatelliteInfo {
                /** Name of satellite */
                name: string;

                /** The orbitalPosition of the satellite in degrees time 10 (192 means 19.2 East, -375 means 37.5 West) ; integer*/
                orbitalPosition: number;
            }
        }


        namespace Frontend {

            /** The frontend manager */
            interface jszacFrontendManager {

                /** providing constants used by frontend related functions */
                Constants: jszacFrontendConstants;

                /** Number of available frontends (Read only property)             */
                numberOfFrontends: number;

                /** Get a frontend instance.        */
                GetFrontend(index: number): jszacFrontend;

                /**
                 * Get list of antenna connectors.
                 * Currently only satellite connectors will be returned as it is only valid for satellite frontends.
                 * When acquiring a satellite frontend the name may be passed to decide which connector that shall be used when tuning.
                 * When getting FrontendInfo the name of the connector is also returned as one of the tuningParams properties
                 */
                GetConnectors(): jszacFrontendConnectorInfo[];
            }

            type TunerLockStatus = number;
            type FronendUsage = number;

            /**
             * Information of a frontend antenna connector.
             */
            interface jszacFrontendConnectorInfo {

                /**
                 * The name/label of the antenna connector
                 */
                name: "LNB1" | "LNB2";

                /**
                 * The id of the port used in jszacOutDoorConfiguration Only valid for satellite connectors
                 */
                odudbId: string;
            }

            /** Placeholder for constants regarding frontends and tuning. */
            interface jszacFrontendConstants {
                /** The status a jszacFrontend can have. */
                //enum TunerLockStatus {
                /** Frontend is locked */
                readonly TUNER_STATUS_LOCKED: TunerLockStatus;
                /** Tuning in progress */
                readonly TUNER_STATUS_TUNING: TunerLockStatus;
                /** Frontend is neither locked nor is tuning in progress */
                readonly TUNER_STATUS_NOT_LOCKED: TunerLockStatus;
                /** Frontend is used by recording */
                readonly FRONTEND_USAGE_RECORDING: FronendUsage;
                /** Frontend is used by the main player */
                readonly FRONTEND_USAGE_MAIN_PLAYER: FronendUsage;
                /** Frontend is used by the "other" player (PIP) */
                readonly FRONTEND_USAGE_OTHER_PLAYER: FronendUsage;
                /** Frontend is used by an undefined user */
                readonly FRONTEND_USAGE_UNDEFINED: FronendUsage;

                /**
                 * Tuning type key (Mandatory)
                 * Possible values:
                 * TUNING_TYPE_DSD
                 * TUNING_TYPE_CABLE
                 * TUNING_TYPE_SATELLITE
                 * TUNING_TYPE_TERRESTRIAL
                 */
                readonly KEY_TUNING_TYPE: string;

                /** Tune to specified delivery system descriptor.
                 * Following parameters are required:
                 * KEY_DELIVERY_SYSTEM_DESCRIPTOR
                 */
                readonly TUNING_TYPE_DSD: string;

                /**
                 * Tuning a DVB-C cable tuner.
                 * 
                 * Following parameters are required:
                 * KEY_FREQ_KHZ
                 * KEY_MODULATION
                 * KEY_SYMBOL_RATE_KBAUD;
                 */
                readonly TUNING_TYPE_CABLE: string;

                /**
                 * Tuning a DVB-T terrestrial tuner.
                 * 
                 * Following parameters are required:
                 * KEY_FREQ_KHZ
                 * KEY_BANDWIDTH_KHZ
                 * 
                 * Optional parameters:
                 * KEY_MODULATION
                 */
                readonly TUNING_TYPE_TERRESTRIAL: string;

                /**
                 * Tune DVB-S satellite tuner.
                 * 
                 * Following parameters are required:
                 * KEY_FREQ_KHZ
                 * KEY_SYMBOL_RATE_KBAUD
                 * KEY_ORBITAL_POSITION
                 * KEY_POLARIZATION
                 * 
                 * Optional parameters:
                 * KEY_MODULATION (default MOD_AUTO)
                 * KEY_FEC_INNER (default FEC_INNER_NOT_DEFINED)
                 * KEY_ROLLOFF (default ROLLOFF_035)
                 * KEY_SAT_SYSTEM (default SAT_DVB_S)
                 */
                readonly TUNING_TYPE_SATELLITE: string;

                /** Key for specifying a DVB delivery system descriptor.
                 * A delivery system descriptor describes tuning parameters for a transport stream and is defined by DVB-SI [EN 300 468] section 6.2.13.
                 * The value is a string, where each byte of the delivery system descriptor is encoded by two hexadecimal characters [0-9,a-f,A-F]. 
                 * Example: "440b0370000000000300687500" */
                readonly KEY_DELIVERY_SYSTEM_DESCRIPTOR: string;

                /**Frequency key - set value in KHz. */
                readonly KEY_FREQ_KHZ: string;

                /**
                * The following values are used for DVB-C tuners:
                * MOD_QAM16
                * MOD_QAM32
                * MOD_QAM64
                * MOD_QAM128
                * MOD_QAM256
                *
                * The following values are used for DVB-S tuners:
                * MOD_AUTO
                * MOD_QPSK
                * MOD_8PSK
                * MOD_QAM16
                *
                * The following values are used for DVB-T/T2 tuners:
                * MOD_AUTO
                * MOD_QPSK
                * MOD_QAM16
                * MOD_QAM64
                * MOD_QAM256 (only T2)
                */
                readonly KEY_MODULATION: string;

                /** Symbol rate - key Set value to the actual symbol rate in kBaud (kSymbols/s). Representation is decimal number. */
                readonly KEY_SYMBOL_RATE_KBAUD: string;

                /** 
                * Orbital position - key. Value should be set in 0.1 degrees, positive is east.
                * Example: setting - props[KEY_ORBITAL_POSITION] = "-40"; // 4.0 degrees west 
                */
                readonly KEY_ORBITAL_POSITION: string;

                /**
                * Satellite polarization key (as in ETSI EN 300 468).
                * Possible values are:
                * POL_HORIZONTAL
                * POL_VERTICAL
                * POL_CIRC_LEFT
                * POL_CIRC_RIGHT
                */
                readonly KEY_POLARIZATION: string;

                /**
                * Satellite forward error correction (FEC) - key.
                * Possible values are:
                * FEC_INNER_NOT_DEFINED
                * FEC_1_2
                * FEC_2_3
                * FEC_3_4
                * FEC_5_6
                * FEC_7_8
                * FEC_8_9
                * FEC_3_5
                * FEC_4_5
                * FEC_9_10
                * FEC_NO_CONV_CODING
                 */
                readonly KEY_FEC_INNER: string;

                /**
                * Satellite name - key. Result of GetInfo() , value set if found.
                * Example: setting -
                * props[KEY_SAT_NAME] = "Astra"; 
                */
                readonly KEY_SAT_NAME: string;

                /**
                * Satellite roll-off factor (as in ETSI EN 300 468).
                * Possible values are:
                * ROLLOFF_035
                * ROLLOFF_025
                * ROLLOFF_020
                * ROLLOFF_NA
                */
                readonly KEY_ROLLOFF: string;

                /**
                * Satellite modulation system (as in ETSI EN 300 468).
                * Possible values are:
                * SAT_DVB_S
                * SAT_DVB_S2
                */
                readonly KEY_SAT_SYSTEM: string;

                /**
                 * The name of an antenna connector.
                 * This property is only set if it is a satellite frontend
                 * It contains the name of the antenna connector that the frontend is connect to returned. It is set in the call GetInfo() but only if the frontend is for satellite.
                 */
                readonly KEY_FRONTEND_CONNECTOR: string;

                /**
                * The userband slot number (only for unicable)
                * This property is only set if it is a satellite frontend and it is configured as unicable
                * It contains the userband slot number that the frontend is using. It is set in the call GetInfo() but only if the frontend is for satellite and only if the configuration is unicable
                */
                readonly KEY_USERBAND_SLOT: string;

                readonly MOD_QAM16: number;
                readonly MOD_QAM32: number;
                readonly MOD_QAM64: number;
                readonly MOD_QAM128: number;
                readonly MOD_QAM256: number;

                /**
                 * Satellite and terrestrial modulation value. Tuner should determine modulation automatically.
                 */
                readonly MOD_AUTO: number;
                readonly MOD_QPSK: number;
                readonly MOD_8PSK: number;

                readonly FEC_INNER_NOT_DEFINED: string;
                readonly FEC_1_2: string;
                readonly FEC_2_3: string;
                readonly FEC_3_4: string;
                readonly FEC_5_6: string;
                readonly FEC_7_8: string;
                readonly FEC_8_9: string;
                readonly FEC_3_5: string;
                readonly FEC_4_5: string;
                readonly FEC_9_10: string;
                readonly FEC_NO_CONV_CODING: string;

                readonly POL_HORIZONTAL: string;
                readonly POL_VERTICAL: string;
                readonly POL_CIRC_LEFT: string;
                readonly POL_CIRC_RIGHT: string;

                readonly ROLLOFF_035: string;
                readonly ROLLOFF_025: string;
                readonly ROLLOFF_020: string;
                readonly ROLLOFF_NA: string;

                readonly SAT_DVB_S: string;
                readonly SAT_DVB_S2: string;
            }


            /**
             * Class representing a frontend i.e. a tuner.
             * A frontend is used for tuning and getting tuning information. Tuning is normally done by player but for setting up antenna etc this object can be used to tune. 
             * Create the parameters specifying the tuning. The possible parameters are defined in jszacFrontendConstants.
             * Acquire() the frontend to be used exclusively by this object so that no other can use it.
             * Tune() - An event named "TuningEvent" containing current status of the frontend object will be fired when tuned.
             * Call Release() to release the frontend when done so that others can use it
             * 
             * A jszacFrontend instance posts following events:
             * - jszacFrontendUsageChangedEvent when usage state has changed i.e. becomes busy or free.
             * - jszacTuningEvent when tuner locking status has changed
             * - jszacSignalQualityEvent when the signal quality changes to good or bad.
             */
            interface jszacFrontend extends EventGenerator {
                /**
                 * Tune using given tuning parameters.
                 * When tuning is done an event named "TuningEvent" containing a jszacFrontendInfo object will be fired when tuned.
                 * 
                 * @param params An object with tuning parameter as properties. Object MUST contain property KEY_TUNING_TYPE and parameters valid for that type see KEY_TUNING_TYPE
                 * @returns status code where 0 is no error
                 */
                Tune(params: any): number;

                /**
                 * Acquire the tuner.
                 * The tuner will be acquired exclusively, preventing others from using it until released.
                 * Note
                 * It is important not to forget to release the frontend when done, by calling the Release() function. Failing to do so will prevent all usage of this frontend by other parts of the system until the next time the system is restarted.
                 * 
                 * @param connector  [optional] The name of the connector to use. If a value is set, Acquire will fail if the value is not within the list returned by GetConnectors(). If omitted or an empty string any valid connector will be used. Only pass a value when for satellite frontend if the connector is important. For non-satellite frontends this should be omitted.
                 * @returns 0 if OK, != 0 upon error            
                 */
                Acquire(connector?: string): number;

                /**
                 * Returns a list of names of antenna connectors that the frontend can be connected to.
                 * The name shall be used in call to Acquire for satellite if a specific antenna connector shall be used.
                 * 
                 *  @returns A list of connectors.    
                 *  @throws  A string containing error message if failed to get the information
                 */
                GetConnectors(): string[];

                /**
                 * Release the frontend.
                 * This will enable other parts of the system to use the frontend. Releasing an already released frontend is not an error.
                 * @returns 0 if OK, != 0 upon error
                 */
                Release(): number;

                /**
                 * Get current status of a frontend.            
                 * @returns jszacFrontendInfo
                 */
                GetInfo(): jszacFrontendInfo;

                /**
                 * Set the threshold to monitor signal quality. A change in the quality levels would trigger a SignalQualityEvent.
                 * @param min min
                 * @param max max
                 * @returns Returns true when successful.
                 * @throws A string containing error message if failed to set the values.
                 */
                SetSignalQualityThreshold(min: number, max: number): boolean;
            }

            /**
             * A class containing information about a frontend device
             */
            interface jszacFrontendInfo {
                /** Signal quality 0..100 */
                signalQualityPercent: number;

                /** Signal strength in dBm */
                signalStrengthDBm: number;

                /** Signal strength 0..100 */
                signalStrengthPercent: number;

                /** Locking status of the frontend, see jszacFrontendConstants.TunerLockStatus 
                 * TUNER_STATUS_LOCKED 	      Frontend is locked
                 * TUNER_STATUS_TUNING 	      Tuning in progress
                 * TUNER_STATUS_NOT_LOCKED 	  Frontend is neither locked nor is tuning in progress
                 */
                lockStatus: number;

                /** Usage of frontend (bitmask of FrontendUsage) */
                usage: number;

                /** signal to noise ratio (SNR) in dB */
                signalNoiseRatioDB: number;

                /** Bit error rate (BER) in parts per billion (PPB) */
                bitErrorRatePPB: number;

                /** An object containing current tuning parameters as properties. See TuningParamsProperties */
                tuningParams: { [parameterName: string]: string }//TuningParamsProperties;
            }

            /**
             * tuningParams properties returned by GetInfo() , for Tune() see required parameters in KEY_TUNING_TYPE
             * Common properties for all types
             * 
             * KEY_TUNING_TYPE
             * 
             * Number and type of properties depends on KEY_TUNING_TYPE
             * 
             * These are available for TUNING_TYPE_SATELLITE
             * KEY_FREQ_KHZ
             * KEY_MODULATION
             * KEY_SYMBOL_RATE_KBAUD
             * KEY_ORBITAL_POSITION
             * KEY_POLARIZATION
             * KEY_FEC_INNER
             * KEY_SAT_NAME
             * KEY_DELIVERY_SYSTEM_DESCRIPTOR
             * KEY_ROLLOFF
             * KEY_SAT_SYSTEM
             * 
             * These are available for TUNING_TYPE_CABLE
             * KEY_FREQ_KHZ
             * KEY_MODULATION
             * KEY_SYMBOL_RATE_KBAUD
             * KEY_DELIVERY_SYSTEM_DESCRIPTOR
             * 
             * These are available for TUNING_TYPE_DSD
             * KEY_DELIVERY_SYSTEM_DESCRIPTOR
             * 
             * These are available for TUNING_TYPE_TERRESTRIAL
             * KEY_FREQ_KHZ
             * KEY_BANDWIDTH_KHZ
             * KEY_MODULATION (optional)
             */
            // interface TuningParamsProperties {
            //     SatName: string;
            // }

            /**
             * Event indicating that locking status of the frontend has changed.
             * This event is fired when the instance changes TunerLockStatus The event is identified with the name "TuningEvent".
             */
            interface jszacTuningEvent {
                /** Signal quality 0..100 */
                signalQualityPercent: number;

                /** Signal strength in dBm */
                signalStrengthDBm: number;

                /** Signal strength 0..100 */
                signalStrengthPercent: number;

                /**Locking status of the frontend, see TunerLockStatus */
                lockStatus: TunerLockStatus;

                /** Usage of frontend (bitmask of FrontendUsage) */
                usage: number;

                /** signal to noise ratio (SNR) in dB */
                signalNoiseRatioDB: number;

                /** Bit error rate (BER) in parts per billion (PPB) */
                bitErrorRatePPB: number;

                /** Uncorrected errors (cumulative)  */
                uncorrectedErrors: number;

                /** An object containing current tuning parameters as properties. See TuningParamsProperties */
                //tuningParams: TuningParamsProperties;
                tuningParams: { [parameterName: string]: string }//TuningParamsProperties;
            }
        }
    }
}