import { CssFunctions, selector } from "./css.base";

export function mediaPlayerStyles() {

    CssFunctions.appendStyle(

        selector(".dttv-show-mediaplayer-zac-main")
            .props({
                height: "100%",
                position: "absolute",
                width: "100%"
            }),

        selector(".dttv-hide-mediaplayer-zac-plugin")
            .props({
                height: 0,
                position: "absolute",
                width: 0
            }),

        selector(".dttv-mainplayer-container")
            .props({
                bottom: 0,
                left: 0,
                overflow: "hidden",
                position: "absolute",
                right: 0,
                top: 0
            })
    );
}
