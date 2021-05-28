declare namespace zenterio {

    namespace zac {

        /**
         * Telekom specific extensions of the zenterio media player api.
         */
        interface DTExtensions {

            component?: { setUIState(state: { uiState: "play" | "stop" | "tune", className?: string }): void }
            defaultShowCssClass?: string;
            isStopped: boolean;

            getPlaybackSpeeds(): number[];
            supportTrickplay(): boolean;
            allowTrickplayPause(): boolean;
            allowTrickplaySetPosition(): boolean;
            allowTrickplayRewind(): boolean;
            allowTrickplayFastForward(): boolean;
            pause(): boolean;
            isPaused(): boolean;
            playNormalSpeed(): boolean;
            exitTimeshift(): boolean;
            increaseFastForward(): boolean;
            increaseRewind(): boolean;
            decreaseFastForward(): boolean;
            decreaseRewind(): boolean;
            rewindWithSpeedIndex(index: number): boolean;
            fastForwardWithSpeedIndex(index: number): boolean;
            jumpPositionForward(timeMs: number, withBoundCheck?: boolean): boolean;
            jumpPositionBackward(timeMs: number): boolean;
            getPlayedContentType(): DTPlayedContentType;
            setPlayedContentType(contentType: DTPlayedContentType): void;

            playUrl(url: string, offset?: number, trickPlay?: boolean, props?: IDTPlayOptions, cssClass?: string): number;
            stop(): number;

            getPlayerZoomLevel(): MediaPlayerZoomLevel;
            setPlayerZoomLevel(level: MediaPlayerZoomLevel, videoFormat: any): void;
        }

        interface IDTPlayOptions {

            preferredStreamDefinition?: string;
            playAlternativeStream?: number;
        }

        /**
         * Telekom specific extensions of the zenterio media player api.
         * 
         * Gives possibility for application to change the zoom level.
         */
        const enum MediaPlayerZoomLevel {

            Normal,
            Zoom1,
            Zoom2,
            Zoom3

        }

        /**
         * Telekom specific extensions of the zenterio media player api.
         * 
         * Gives possibility for application to check the type of the current played content.
         */
        const enum DTPlayedContentType {

            UNKNOWN,
            INSTANT_RESTART,
            LIVETV,
            RECORDING,
            VOD,
            RADIO,
            APP
        }

        type SqmErrorEventType = "Error Message Popup" | "Device Internal Error" | "Device Internal Warning";
        type SqmServiceType = "LiveTV" | "VOD" | "Recording" | "InstantRestart" | "Systemtest" | "DeviceManagementService" | "Voice";
        type SqmSubServiceType = "LiveTV.SD" | "LiveTV.HD" | "LiveTV.4K";

        interface SqmBaseData {

            ServiceType?: SqmServiceType;
            SubService?: SqmSubServiceType;
            URL?: string;
        }

        interface SqmEvent extends SqmBaseData {

            ErrorEventType: SqmErrorEventType;
            ErrorCode: string;
            ErrorMessage?: string;
            SessionID?: string;
            SourceIP?: string;
            Timestamp?: string;
            Info1?: string;
            Info2?: string;
            Info3?: string;
        }

        interface SqmReport {

            data: SqmReportData;
            index: number;
        }

        interface SqmReportData {

            StartTime: number;
            ReportDuration: number;
            StatCycle: number;
            SequenceNumber: number;
            ReportDataModelVersion: string;

            StatusInformation: {

                DeviceID: string;
                SubscriberID: number;
                IpAddress: string;
                DeviceModel: string;
                DeviceSupplier: string;
                DeviceSoC: string;
                SubnetMask: string;
                DefaultGateway: string;
                DhcpRemainingLeaseTime: string;
                DeviceOS: string;
                RecordingMaster?: boolean;
                ClientVersion: string;
                NtpServer: string;
                ScheduledUploadTime?: string;
                AccessType: string;
                HdmiConnected: boolean;
                HdmiYearOfManufacture?: string;
                HdmiManufacturerID: string;
                HdmiProductID?: string;
                InternalHddConnected?: boolean;
                ExternalHddConnected?: boolean;
                InternalHddModel?: string;
                InternalHddSerialNumber?: string;
                InternalHddFirmwareRevision?: string;
                InternalHddSmartHealthStatus?: string;
                CurrentTime: number;
            };

            Initialization?: {

                RecordingSuccess: any;
                RecordingFail: any;
            };

            Function?: {

                ChannelListSuccess: number;
                ChannelListFail: number;
                RecommendationSuccess: number;
                RecommendationFail: number;
                RecordingSuccess: number;
                RecordingFail: number;
                VODRentSuccess: number;
                VODRentFail: number;
                SearchSuccess: number;
                SearchFail: number;
            };

            Tuner?: {

                Ethernet: {

                    LinkSpeed: string;
                    RtpUnicast: UnicastInformation;
                    RtpMulticast: MulticastInformation;
                    HAS: {

                        ChunksReceivedHistogram: string;
                        ChunksExpectedHistogram: string;
                        ChunksAbortedHistogram: string;
                        ChunksUnavailableHistogram: string;
                        ProfileDownShifts: number;
                        ProfileUpShifts: number;
                        LastUsedChunkSource: string;
                    };
                };
            };

            LiveTV?: {

                Receiver: ReceiverInformation;
            };
        }

        interface SqmTraceLogSessionState {

            SessionState: "Disabled" | "Impending" | "Ongoing" | "Finished";
        }

        interface SqmTraceLogSettings {

            Duration: string;
            // "0" - OFF; "1" - ERROR; "2" - INFO; "3" - DEBUG
            Level: "0" | "1" | "2" | "3";
            Server: string;
            StartTime: string;
        }

        interface SqmTraceLogEntry {

            TimeStamp?: string;
            Message: string;
            // "0" - OFF; "1" - ERROR; "2" - INFO; "3" - DEBUG
            Level: "0" | "1" | "2" | "3";
        }

        interface SqmTraceLogPushResult {

            Status: "Success" | "Failed";
            Message: "Trace log pushed successfully" | "Trace log session is not ongoing" | "Trace log queue is full" | "Trace log level is OFF" | "Trace log level too low"
        }

        interface GetAlienRecordingStatusResult {

            // String values are returned :(
            // getAlienRecordingsState(a45bfd8b-c043-4d14-b246-1e0b731e2523) => {"alienRecordingsCount":"1","alienRecordingsTotalSizeKiB":"3573490"}
            alienRecordingsCount?: string;//number;
            alienRecordingsTotalSizeKiB?: string;//number
        }

        interface VoiceKeyHandlerResult {

        }

        interface DeleteAlienRecordingResult {

            /**
             * If asynchronous delete request was successfully started, this property contains a unique request ID for the request.
             */
            requestId: string;
        }

        type SqmTraceLogChangeEvent = SqmTraceLogChangeSettingsEvent | SqmTraceLogChangeSessionStateEvent;

        interface SqmTraceLogChangeSettingsEvent {

            EventType: "SettingsChanged";
            Duration: string;
            // "0" - OFF; "1" - ERROR; "2" - INFO; "3" - DEBUG
            Level: "0" | "1" | "2" | "3";
            Server: string;
            StartTime: string;
        }

        interface AlienRecordingsResponseEvent {

            eventType: string;
            requestId: string;

            /**
             * "0" (ZIDS_OK) on success or "5" (ZIDS_OPERATION_FAILED) on failure
             */
            status: "0" | "5";
        }

        interface SqmTraceLogChangeSessionStateEvent {

            EventType: "SessionStateChanged";
            SessionState: "Disabled" | "Impending" | "Ongoing" | "Finished";
        }

        interface ReceiverInformation extends QualityInformation {

            SD: QualityInformation;
            HD: QualityInformation;
            UHD: QualityInformation;
            Decoder: {

                DecodedAudioFrames: number,
                DecodingAudioErrors: number,
                DecodedVideoFrames: number,
                LostVideoFrames: number
            }
        }

        interface QualityInformation {

            SecondsWithoutErrors: number;
            MediaStartError: number | string;
            MediaInterruptError: number;
            MediaChangeDelayHistogram: string;
            SecondsWithNoDataHistogram: string;
            SecondsWithErrorsHistogram: string;
        }

        interface UnicastInformation {

            PacketsReceived: number;
            PacketsExpected: number;
            PacketsLost: number;
            PacketsErrored: number;
            PacketsOutage: number;
            HoleSizeInPacketsHistogram: string;
            SecondsReceived: number;
            SecondsExpected: number;
            SecondsLoss: number;
            SecondsErrored: number;
            SecondsOutage: number;
            HoleSizeInSecondsHistogram: string;
            HolesLoss: number;
            HolesErrored: number;
            HolesOutage: number;
            LastUsedFccServer: string;
            LastUsedRetryServer: string;
        }

        interface MulticastInformation extends UnicastInformation {

            MulticastJoinDelayHistogram: string;
        }

        interface IReportGenerationSwitches {

            diagDataDeviceSwitch: boolean,
            diagDataSubscriberSwitch: boolean
        }
        interface jszacAppEvents {

            onCustomCmd: (evtHandlerFunction: (event: zenterio.zac.jszacCustomCommand) => void) => ICloseable;
            onDialogCancel: (evtHandlerFunction: (event: zenterio.zac.jszacDialogCancelEvent) => void) => ICloseable;
            onDialogRequest: (evtHandlerFunction: (event: zenterio.zac.jszacDialogRequestEvent) => void) => ICloseable;
        }

        interface jszacAppMethods {

            getDialogInputfieldTypeInfo(request: zenterio.zac.jszacDialogRequest): string;
            getDialogSelectPolicyInfo(request: zenterio.zac.jszacDialogRequest): string;
            getDialogTypeInfo(request: zenterio.zac.jszacDialogRequest): string;

        }

        interface jszacAppManagerEvents {

            onAppExitEvent: (evtHandlerFunction: (event: zenterio.zac.AppExitEvent) => void) => ICloseable;
            onAppRegistrationEvent: (evtHandlerFunction: (event: zenterio.zac.AppRegistrationEvent) => void) => ICloseable;
            onAppStartedStatusEvent: (evtHandlerFunction: (event: zenterio.zac.AppStartedStatusEvent) => void) => ICloseable;
            onAppStatusChangedEvent: (evtHandlerFunction: (event: zenterio.zac.AppStatusChangedEvent) => void) => ICloseable;
        }

        interface jszacCustomApiEvents {

            onCustomAPIEvent: (evtHandlerFunction: (event: zenterio.zac.CustomAPIEvent) => void) => ICloseable;
        }

        interface jszacDialManagerEvents {

            onDialAppHideRequestEvent: (evtHandlerFunction: (event: zenterio.zac.jszacDialAppHideRequestEvent) => void) => ICloseable;
            onDialAppStartRequestEvent: (evtHandlerFunction: (event: zenterio.zac.jszacDialAppStartRequestEvent) => void) => ICloseable;
            onDialAppStatusRequestEvent: (evtHandlerFunction: (event: zenterio.zac.jszacDialAppStatusRequestEvent) => void) => ICloseable;
            onDialAppStopRequestEvent: (evtHandlerFunction: (event: zenterio.zac.jszacDialAppStopRequestEvent) => void) => ICloseable;
        }

        interface jszacFrontDisplayEvents {

            onFrontDisplayStringChanged: (evtHandlerFunction: (event: zenterio.zac.FrontDisplayStringChanged) => void) => ICloseable;
        }

        interface jszacNetflixDpiCookie {

            COOKIE: string;
        }

        type NetflixPropertyNameType = "det_token" | "vdid_hdr";

        type jszacNetflixProperty = { [key in NetflixPropertyNameType]: string }

        interface jszacNetflixMethods {

            getCookie(): jszacNetflixDpiCookie;
            getProperty(propertyName: NetflixPropertyNameType): jszacNetflixProperty;
            setProperty(propertyName: NetflixPropertyNameType, value: string): void;
        }

        interface jszacAuthenticationManagerMethods {

            GetAccessToken: (input: zenterio.zac.DT_GetAccessTokenParams) => any;
            GetIdToken: () => any;
            DeleteToken: (input: zenterio.zac.DT_DeleteTokenParams) => any
            
            GetGcpAccessToken: (input: zenterio.zac.DT_GetGcpAccessTokenParams) => any;
        }

        interface jszacNetworksEvents {

            onNetworkLinkStatusChanged: (evtHandlerFunction: (event: zenterio.zac.NetworkLinkStatusChangedEvent) => void) => ICloseable;
            onNetworkNetworkStatusChanged: (evtHandlerFunction: (event: zenterio.zac.NetworkNetworkStatusChangedEvent) => void) => ICloseable;
        }

        interface jszacOutputsEvents {

            onOutputChanged: (evtHandlerFunction: (event: zenterio.zac.OutputChangedEvent) => void) => ICloseable;
        }

        interface jszacOutputsMethods {

            getOutputChangedReasonInfo(reasonValue: number): string;
        }

        interface jszacAlienRecordingsMethods {

            getAlienRecordingStatus: (uuid: string) => zenterio.zac.GetAlienRecordingStatusResult;
            deleteAlienRecordings: (uuid: string) => zenterio.zac.DeleteAlienRecordingResult;
        }

        interface jszacVoiceKeyHandlerMethods {

            SendKey: (keycode: string) => zenterio.zac.VoiceKeyHandlerResult;
        }

        interface jszacPowerEvents {

            onPowerStateChanged: (evtHandlerFunction: (event: zenterio.zac.PowerStateChangedEvent) => void) => ICloseable;
        }

        interface jszacBluetoothEvents {

            onBluetoothDeviceFound: (evtHandlerFunction: (event: zenterio.zac.BluetoothDeviceFoundEvent) => void) => ICloseable;
            onBluetoothDeviceRemoved: (evtHandlerFunction: (event: zenterio.zac.BluetoothDeviceActionEvent) => void) => ICloseable;
            onBluetoothDevicePaired: (evtHandlerFunction: (event: zenterio.zac.BluetoothDeviceActionEvent) => void) => ICloseable;
            onBluetoothDeviceConnected: (evtHandlerFunction: (event: zenterio.zac.BluetoothDeviceActionEvent) => void) => ICloseable;
            onBluetoothDeviceDisconnected: (evtHandlerFunction: (event: zenterio.zac.BluetoothDeviceActionEvent) => void) => ICloseable;
            onBluetoothError: (evtHandlerFunction: (event: zenterio.zac.BluetoothErrorEvent) => void) => ICloseable;
            onBluetoothScanFinished: (evtHandlerFunction: (event: any) => void) => ICloseable;
            onBluetoothScanStarted: (evtHandlerFunction: (event: any) => void) => ICloseable;
            onBluetoothStateChanged: (evtHandlerFunction: (event: zenterio.zac.BluetoothStateChangedEvent) => void) => ICloseable;
            onBluetoothManagerTerminated: (evtHandlerFunction: (event: any) => void) => ICloseable;
            onBluetoothOTAStarted: (evtHandlerFunction: (event: zenterio.zac.BluetoothOTAStartedEvent) => void) => ICloseable;
            onBluetoothOTAProgress: (evtHandlerFunction: (event: zenterio.zac.BluetoothOTAProgressEvent) => void) => ICloseable;
            onBluetoothOTAFinished: (evtHandlerFunction: (event: zenterio.zac.BluetoothOTAFinishedEvent) => void) => ICloseable;
            onBluetoothRecoveryPairingStarted: (evtHandlerFunction: (event: any) => void) => ICloseable;
            onBluetoothRecoveryPairingFinished: (evtHandlerFunction: (event: zenterio.zac.BluetoothRecoveryPairingFinishedEvent) => void) => ICloseable;
            onBluetoothVoiceSearchStart: (evtHandlerFunction: (event: any) => void) => ICloseable;
            onBluetoothVoiceSearchActive: (evtHandlerFunction: (event: any) => void) => ICloseable;
            onBluetoothVoiceSearchStop: (evtHandlerFunction: (event: any) => void) => ICloseable;
            onBluetoothVoiceSearchError: (evtHandlerFunction: (event: any) => void) => ICloseable;
        }

        interface jszacPowerMethods {

            getPowerStateInfo(powerState: zenterio.zac.PowerState): string;
        }

        interface jszacSettingsEvents {

            onSettingChanged: (evtHandlerFunction: (event: zenterio.zac.SettingChanged) => void) => ICloseable;
        }

        interface jszacStandbyHandlerEvents {

            onPowerStandbyPending: (evtHandlerFunction: (event: zenterio.zac.PowerStandbyPendingEvent) => void) => ICloseable;
        }

        interface jszacStandbyHandlerMethods {

            keepAlive(keepAlive: boolean): number;
            resetStandbyHandlerCountdown(): number;
            standbyOk(): number;
        }

        interface jszacStorageManagerEvents {

            onStorageListUpdated: (evtHandlerFunction: (event: zenterio.zac.StorageListEvent) => void) => ICloseable;
        }

        interface jszacStorageManagerMethods {

            getConnectionTypeInfo(connectionType: number): string;
            getFileSystemInfo(fileSystem: zenterio.zac.FileSystemType): string;
            getStorageEventInfo(event: zenterio.zac.StorageEvent): string;
            getStorageListEventInfo(event: zenterio.zac.StorageListEvent): string;
            getStoragePurposeInfo(storagePurpose: zenterio.zac.StoragePurpose): string;
            getStorageStateChangedEventInfo(event: zenterio.zac.StorageStateChangedEvent): string;
            getStorageStateInfo(storageState: zenterio.zac.StorageState): string;
            getStorageTypeInfo(storageType: zenterio.zac.StorageType): string;

            onStorageEvent(zacStorage: zenterio.zac.jszacStorage, callback: (event: zenterio.zac.StorageEvent) => void): ICloseable;
            onStorageStateChangedEvent(zacStorage: zenterio.zac.jszacStorage, callback: (event: zenterio.zac.StorageStateChangedEvent) => void): ICloseable;
        }

        interface jszacSwUpgradeEvents {

            onSearchResult: (evtHandlerFunction: (event: zenterio.zac.jszacSwUpgradeSearchResultEvent) => void) => ICloseable;
            //onUpgradeStatus: (evtHandlerFunction: (event: zenterio.zac.jszacSwUpgradeStatusEvent) => void) => ICloseable;
        }

        interface jszacSystemEvents {

            onRcuBatteryLowEvent: (evtHandlerFunction: (event: zenterio.zac.RcuBatteryLowEvent) => void) => ICloseable;
        }

        interface jszacSystemMethods {

            SetAdditionalInformation(proprty: string, value: string): number;
        }

        interface jszacBluetoothMethods {

            GetState(): BluetoothState;
            StartScan(): void;
            StopScan(): void;
            Pair(MAC_ADDRESS: string): void;
            Remove(MAC_ADDRESS: string): void;
            GetDevices(): Array<BluetoothDevice>;
            UpdateFirmware(MAC_ADDRESS: string): void;
            getBluetoothStateInfo(bluetooth: zenterio.zac.jszacBluetooth, state: number): string;
            SetRcsFlag(value: boolean): void;
            GetRcsFlag(): number;
        }
    }
}
