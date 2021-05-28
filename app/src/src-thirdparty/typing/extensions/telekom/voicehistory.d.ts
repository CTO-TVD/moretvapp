declare namespace telekom.voicehistory {

    type TncId = "impressum" | "dataPrivacy" | "listenVoice" | "tracking" | "push";

    interface IConversationsResponse {

        entries: IConversation[];
    }

    interface IPrivacySettingsItemRequest {

        tncId: TncId;
        agreed: boolean;
    }

    interface IPrivacySettingsResponse {

        locale: string;
        agreementsWithTncTextDtos: IPrivacySettingsItem[];
    }

    interface IPrivacySettingsItem {

        tncId: TncId;
        tncTexts?: string[];
        defaultAgreement: boolean;
        userAgreement?: boolean;
        lastChanged?: string;
    }

    interface IPrivacySettingResponse {

        tnc: IPrivacySettingData;
        agreement?: IPrivacySettingAgreement;
    }

    interface IPrivacySettingData {

        tncId: TncId;
        orderNumber: number;
        defaultValue: boolean;
        lastChanged?: string;
        lastChangedByAdmin?: string;
    }

    interface IPrivacySettingAgreement {

        agreed: boolean;
        lastChanged?: string;
    }

    interface IPrivacySettingsStorageRequest {

        saveAgreements: IPrivacySettingsItemRequest[];
    }

    interface IConversation {

        id: string;
        type: "CONVERSATION";
        userInfo: IUserInfo;
        deviceInfo: IDeviceInfo;
        metaData: IMetaData;
        userInfoExtra: IUserInfoExtra;
        processingData: IProcessingData;
        metaDataExtra: IMetaDataExtra;

        request: IRequest;
        response: IResponse;
        timestamp: string;
    }

    interface IRequest {

        text: string;
        skillId: any;
    }

    interface IResponse {

        text: string;
        errorCode: string;
        card: any;
    }

    interface ILoginResponse {
        token: string;
    }

    interface IUserInfo {

        tenantId: string;
        userId: string;
        profileId: string;
        tncs: {
            listenVoice: boolean,
            dataPrivacy: boolean,
            tracking: boolean,
            push: boolean,
            impressum: boolean,
        },
        allowVoiceProcessing: boolean
    }

    interface IDeviceInfo {

    }

    interface IMetaData {

        created: string;
        lastChanged: string;
        testing: boolean,
        schemaVersion: number,
        deleted: boolean,
    }

    interface IUserInfoExtra {

        locale: string;
        timezoneId: string;
        conversationVote: string;
        userTrackingId: string;
    }

    interface IProcessingData {

        stt: IStt;
        nlu: INlu;
        invoke: IInvoke;
        tts: any;
    }

    interface INlu {

    }

    interface IStt {

        /**
         * selected text converted from speech
         */
        selectedStt: ITextConfidence;

        /**
         * other text candidates
         */
        sttCandidates: ITextConfidence[];

        /**
         * the used engine/service
         */
        usedSttEngine: string;

        /**
         * session id
         */
        sttSessionId: string;
    }

    interface IInvoke {

        skill: ISkill;
    }

    interface ISkill {

        facets: IFacet[];

        data: ISkillData;

        local: boolean;
    }

    interface IFacet {

        type: "plain";

        text: string;
    }

    interface ISkillData {

        key: string;

        value: string;

        args: string[];

        kwargs: {

            day_of_week: string;
        }
    }

    interface ITextConfidence {

        text: string;

        confidence: number;
    }

    interface IMetaDataExtra {

    }
}
