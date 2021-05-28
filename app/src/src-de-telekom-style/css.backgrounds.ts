import { selector, CssFunctions } from "./css.base";
import { CssColors } from "./css.colors";

/**
 * Based on atomic design: A-BG Background
 *
 * Covering:
 * Provides some basic styles.
 *
 * https://ngtv.preview.denkwerk.com/STB/Atoms/a-bg-background
 */

export class CssBackgrounds {

    public static get a_bg_4() {

        return CssFunctions.add("a-bg-4",
            style => selector("." + style)
                .props({
                    backgroundColor: CssColors.global_background_high_transparent
                })
        );
    }

    public static get a_bg_5() {

        return CssFunctions.add("a-bg-5",
            style => selector("." + style)
                .props({
                    backgroundColor: CssColors.A_CO_4_75
                })
        );
    }

    public static get a_bg_6() {

        return CssFunctions.add("a-bg-6",
            style => selector("." + style)
                .props({
                    backgroundColor: CssColors.A_CO_4_90
                })
        );
    }

    public static get default_image_background() {

        return CssFunctions.add("default-image-background",
            style => selector("." + style)
                .props({
                    backgroundColor: CssColors.A_CO_13
                })
        );
    }
}
