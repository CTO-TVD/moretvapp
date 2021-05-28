declare namespace zenterio {

    namespace zac {

        namespace disney {

            type DisneyAppParameterName = "placement" | "placementDetail" | "distributionPartner";

            /**
             * Specifies the category of the Disney entry point on the partner UI
             */
            const enum Placement {

                Fixed = "fixed_placement",
                Dedicated = "dedicated",
                Featured = "featured",
                Channel = "channel",
                UniversalSearch = "universal_search",
                VoiceSearch = "voice_search",
            }

            /**
             * Specifies the type of entry point within each placement category
             */
            const enum PlacementDetail {

                AppIcon = "app_icon",
                Dedicated = "dedicated",
                ChannelNumber = "channel_number",
                KeywordSearchResult = "keyword_search_result",
                VoiceSearchResult = "voice_search_result"
            }

            export interface IDisneyAppParameter {

                field: DisneyAppParameterName;
                value: string;
            }

            export interface IDisneyAppParameters {

                params: IDisneyAppParameter[];
            }
        }
    }
}
