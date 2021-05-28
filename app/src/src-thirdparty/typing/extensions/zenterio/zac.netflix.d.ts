declare namespace zenterio {

    namespace zac {

        namespace netflix {

            /**
             * Netflix requires its own state handling, since it has an additional state
             * (SUSPENDED), which is not supported by the internal AppManager of jsZAC.
             * These states exists for Netflix:
             *
             * Not Running - The Netflix app has not loaded any resources and is not
             *               visible to users. Starting Netflix from this state takes the
             *               longest amount of time.
             *
             * Suspended   - The Netflix app has sufficient access to system resources to
             *               perform minimal "housekeeping" tasks like periodic updates
             *               to the UI, recommendations, and error handling. It does not
             *               hold graphics or video memory. The Javascript UI loaded, but
             *               is not drawn onto the screen.
             *
             * Background  - Background mode is not yet supported by the Netflix
             *               integration. More information can be found in the Netflix
             *               documentation (see link below).
             *
             * Foreground  - The Netflix application is running normally and the UI or
             *               playback is visible to the user.
             *
             * Please note that state Background is not integrated here. More information
             * available at:
             * https://nrd.netflix.com/docs/development/nrdp43/platform-integration/app-launch-and-management
             */
            const enum states {

                UNKNOWN = 0,
                STOPPED = 1,
                STARTED = 2,
                SUSPENDED = 3
            }

            /**
             * Netflix application have two defined shutdown states; clean and dirty.
             * Clean shutdown is when Netflix application have:
             *  - Shuts down with a standard exit type
             *  - Writes all necessary log files
             *  - Releases memory
             * In order to perform a clean shutdown devices are required to pass an exit
             * type to the Netflix application. These exit types exists for Netflix:
             *
             * USER_KILL            - User kill from device UI for killing apps
             *
             * USER_NAV             - User navigated away (e.g. suspending the app)
             *
             * DIAL_STOP            - Terminated by DIAL 'stop' command
             *
             * LOW_RESOURCE         - Terminated due to low memory. Used internally when starting some
             *                        other app with netflix as one of the disposable apps.
             *                        Can also be used manually by the UI to stop Netflix when starting another app.
             *
             * LOW_POWER_STANDBY    - Netflix is hidden when the user presses the power button and the TV goes into low power standby
             *
             * SCREENSAVER          - Netflix loses visibility because of a screensaver
             *
             * SHUTDOWN             - Netflix is exited when the device is shut down or rebooted.
             *
             * UNKNOWN_EXIT         - Used when a partner device has no way to determine what
             *                        caused the Netflix application to terminate.
             *
             * TESTING              - Use during testing, if necessary, to avoid polluting the data.
             *                        Never use in production.
             *
             * More information can be found:
             * https://nrd.netflix.com/docs/development/nrdp42/platform-integration/app-launch-and-management
             */
            const enum exitTypes {

                USER_KILL = 1,
                USER_NAV = 2,
                DIAL_STOP = 3,
                LOW_RESOURCE = 4,
                LOW_POWER_STANDBY = 5,
                SCREENSAVER = 6,
                SHUTDOWN = 7,
                UNKNOWN_EXIT = 98,
                TESTING = 99
            }

            /**
             * The following additional parameters are passed inside of a source_type_payload parameter
             */
            interface ISourceTypePayload {

                /**
                 * A string representing the channel number that the Netflix app is on.
                 */
                chID?: string;

                /**
                 * A string representing the channel number preceding the Netflix channel number. Must set to -1 if the Netflix channel is the first channel in the EPG.
                 */
                prevChID?: string;

                /**
                 * A string representing the channel number following the Netflix channel number. Must set to -1 if the Netflix channel is the last channel in the EPG.
                 */
                nextChID?: string;

                /**
                 * Indicates the type of channels that surround the Netflix channel. This parameter is not specific to any content currently streaming in the channels.
                 */
                category?: SourceTypePayloadCategory;
            }

            /**
            * Indicates the type of channels that surround the Netflix channel. This parameter is not specific to any content currently streaming in the channels.
            *
            * Must be one of the following:
            *
            * BASIC_SD      - a grouping which includes the channels included in a basic package
            *
            * BASIC_HD      - same as BASIC_SD, high definition
            *
            * MOVIES_SD     - grouped amongst movie channels
            *
            * MOVIES_HD     - same as MOVIES_SD, high definition
            *
            * CHILDREN_SD   - grouped amongst children’s channels
            *
            * CHILDREN_HD   - same as CHILDREN_SD, high definition
            *
            * LEARNING_SD   - grouped amongst hobby/lifestyle/educational channels (ie, HGTV, Food Network, Discovery)
            *
            * LEARNING_HD   - same as HOBBY_SD, high definition
            *
            * INDIE_SD      - grouped amongst independent/foreign film channels
            *
            * INDIE_HD      - same as INDIE_SD, high definition
            *
            * OTHER         - none of the previous categories apply 
            *
            */
            const enum SourceTypePayloadCategory {

                BASIC_SD = "BASIC_SD",
                BASIC_HD = "BASIC_HD",
                MOVIES_SD = "MOVIES_SD",
                MOVIES_HD = "MOVIES_HD",
                CHILDREN_SD = "CHILDREN_SD",
                CHILDREN_HD = "CHILDREN_HD",
                LEARNING_SD = "LEARNING_SD",
                LEARNING_HD = "LEARNING_HD",
                INDIE_SD = "INDIE_SD",
                INDIE_HD = "INDIE_HD",
                OTHER = "OTHER"
            }
        }
    }
}
