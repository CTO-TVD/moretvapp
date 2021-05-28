declare namespace zenterio {

    namespace zac {

        namespace amazon {

            /**
            * When starting the app a launch reason is passed to the Amazon app.
            * 
            * --launch-reason
            * 
            * Specifies the reason that the Amazon Video application was launched.
            * 
            * Can be any of:
            *   "launcher"  - specifies that the application was started from a launcher e.g. icon in the system UI.
            *   "hotkey"    - specifies that the application was started by a special key on a device remote.
            *   "system"    - specifies that the application was started by the system without user interaction e.g.
            *                 can be used in combination with --start-in-background on system startup for app preloading.
            *   "test"      - specifies that the application was started for testing purposes e.g. by a test script.
            *
            * Example of string passed to app: "--launch-reason=system"
            */
            const enum LaunchReason {

                LAUNCHER = "launcher",
                HOTKEY = "hotkey",
                SYSTEM = "system",
                TEST = "test"
            }
        }
    }
}
