declare namespace telekom.authentication {

    type Pin = "userpin"/** pcon */ | "avs" | "password";
    type dialogDataCallback = (type: Pin) => AuthManUserData;

    interface IContext {
        acr?: /*undefined:= "line" | */ Pin;
        scope?: string; // default implementd by corresponding system
        force?: boolean;

        /* in some cases the calls starts with a ILineContext 
         * but due to backend restrictions the level can be raised to PIN or AVS and therefore different dialogstexts are needed
         * which can only be provided on demand
         */
        dialogDataCallback?: dialogDataCallback
    }

    interface IPconContext extends IContext {
        acr: "userpin";
    }

    // duplicated from src-de-telekom-tv-core\common\authman.userdata.ts
    interface AuthManUserData {

        /**
         * the version of the current userData object
         */
        version: "0.1";

        /**
         * optional the id of the dialog, if not standard layout should be choosen depending on access type pin, passwor, etc.
         */
        dialogId?: string;

        /**
         * unique identifier for the content that is related to the request
         */
        contentId: string;

        /**
         * the dialog title
         */
        dialogTitle: string;

        /**
         * paragraph 1 at dialog
         */
        dialogParagraph1: string;

        /**
         * paragraph 2 at dialog
         */
        dialogParagraph2: string;

        /**
         * extension Jan2019 <= might be removed in UI20 dialgos  https://gard.telekom.de/gard/browse/NGTVNEW-16248
         */
        subtext?: string;

        /**
         * extension Jan2019 <= might be removed in UI20 dialgos
         * opaqueBackground: has higher restrictions; no transparency allowed & no forgotten buttons
         */
        opaqueBackground?: boolean;

        /**
         * extension Jan2019 <= might be removed in UI20 dialgos
         * removePinForgotten: has higher restrictions; no transparency allowed & no forgotten buttons
         */
        removePinForgotten?: boolean;
        
        /**
         * need to navigate back when dialog is canceled
         */
        navigateBackAtCancel?: boolean;
    }
}
