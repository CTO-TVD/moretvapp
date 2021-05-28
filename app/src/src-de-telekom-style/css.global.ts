import { CssFunctions, selector, keyframe, declaration } from "./css.base";

import { Css } from "./css";
import { ICssImages } from "./css.images.interface";
import { CssColors } from "./css.colors";
import { CssDimensions } from "./css.dimensions";

export function globalStyles() {

    CssFunctions.appendStyle(

        /* standard html, body and page style ... */

        selector("*, *::before, *::after, html")
            .props({
                boxSizing: "border-box"
            }),

        selector("body")
            .props({
                margin: 0,
                overflow: "hidden",
                position: "absolute",
                height: Css.dimensions.screenHeight,
                width: Css.dimensions.screenWidth
            })
            .extend(Css.fonts2.a_fo_b2___mixin),

        selector("ol, ul")
            .props({
                listStyle: "none",
                WebkitPaddingStart: 0
            }),

        selector("p")
            .extend(Css.fonts2.a_fo_b1_1_mixin)
            .props({
                color: Css.colors.A_CO_1,
                WebkitMarginAfter: 0,
                WebkitMarginBefore: 0,
                WebkitMarginStart: 0,
                WebkitMarginEnd: 0
            }),

        selector(":focus")
            .props({
                outline: "none"
            }),

        selector(".page")
            .props({
                position: "absolute",
                height: Css.dimensions.screenHeight,
                width: Css.dimensions.screenWidth,
                overflow: "hidden"
            }),

        selector(".react-root")
            .props({
                height: Css.dimensions.screenHeight,
                width: Css.dimensions.screenWidth,
                color: Css.colors.A_CO_1,
                padding: 0
            }),

        /* ... standard html, body and page style */

        selector(".singleline-ellipsis").extend(Css.mixins.singlelineEllipsis),
        selector(".twolines-ellipsis").extend(Css.mixins.twolineEllipsis),
        selector(".threelines-ellipsis").extend(Css.mixins.threelineEllipsis),
        selector(".fourlines-ellipsis").extend(Css.mixins.fourlineEllipsis),

        //  angular code is using  ".dttv-focused.dttv-focus-frame" [!sibling!] form focus.less file
        selector(".dttv-focused .dttv-focus-frame") // selector for react nested => angular on same element
            .props({
                outline: `${Css.scale(/*Css.dimensions.borderWidth*/ 3)}px solid ${Css.colors.A_CO_1}`, // reduce size 6->3 https://github.com/CTO-TVD/UIDesign/issues/186
            })
            .sub(
                selector("&:after")
                    .props({
                        content: "''",
                        display: "block",
                        boxShadow: `inset 0px 0px ${Css.scale(3)}px 0px rgba(0,0,0,0.3);`,
                        position: "absolute",
                        top: Css.dimensions.borderWidth,
                        left: Css.dimensions.borderWidth,
                        right: Css.dimensions.borderWidth,
                        bottom: Css.dimensions.borderWidth
                    })
            ),

        selector(".dttv-layer")
            .props({
                position: "absolute",
                top: 0,
                left: 0
            }),

        selector(".dttv-diagnostic-layer")
            .props({
                willChange: "transform",
                position: "fixed",
                backgroundColor: "yellow",
                opacity: 0.5,
                left: 48,
                top: 48,
                color: "black",
                fontSize: 21,
                lineHeight: 30,
                width: 1824,
                height: 135
            }),

        selector(".dttv-optionpanel-layer")
            .props({
                position: "absolute",
                top: 0,
                left: 0,
                height: Css.dimensions.screenHeight,
                width: Css.dimensions.screenWidth
            }),

        selector(".dttv-notification-layer")
            .props({
                position: "absolute",
                top: 0,
                left: 0,
                height: Css.dimensions.screenHeight,
                width: Css.dimensions.screenWidth
            }),

        selector(".dttv-remote-layer")
            .props({
                position: "absolute",
                top: Css.dimensions.screenHeight - Css.dimensions.remoteInteractionLayerHeight,
                left: 0,
                height: Css.dimensions.remoteInteractionLayerHeight,
                width: Css.dimensions.screenWidth
            }),

        selector(".dttv-dialog")
            .sub(selector("> .dialoghostContainer")
                .props({
                    position: "absolute",
                    top: Css.dimensions.safeareaTop,
                    left: Css.dimensions.safeareaLeft,
                    bottom: Css.dimensions.safeareaBottom,
                    right: Css.dimensions.safeareaRight,
                    height: Css.dimensions.screenHeight - Css.dimensions.safeareaTop - Css.dimensions.safeareaBottom,
                    width: Css.dimensions.screenWidth - Css.dimensions.safeareaLeft - Css.dimensions.safeareaRight
                }))
            .sub(selector("&.ignoresafearea")
                .sub(selector("> .dialoghostContainer")
                    .props({
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        height: Css.dimensions.screenHeight,
                        width: Css.dimensions.screenWidth
                    })))
            .sub(selector("> .background")
                .props({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: Css.dimensions.screenHeight,
                    width: Css.dimensions.screenWidth,
                    backgroundColor: Css.colors.global_background_very_low_transparent
                })
                .sub(selector("&.opaque")
                    .props({
                        backgroundColor: Css.colors.A_CO_3, // https://gard.telekom.de/gard/browse/NGTVNEW-16248
                    })
                )
            ),

        selector(".dttv-dialog-layer")
            .props({
                position: "absolute",
                top: 0,
                left: 0,
                height: Css.dimensions.screenHeight,
                width: Css.dimensions.screenWidth
            })
            .sub(selector("&.dimmed")
                .sub(selector(".container")
                    .props({
                        opacity: 0.5
                    }))),

        selector(".dttv-dialog-button-right")
            .props({
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            })
            .sub(selector(".dttv-vertical-buttonbar")
                .props({
                    width: 324
                }))
            .sub(selector(".content")
                .props({
                    display: "flex",
                    flexDirection: "column",
                    marginRight: 156,
                    width: 792
                })),

        // .minWidth(480) // https://github.com/CTO-TVD/de-telekom-app-tv-host-v2/issues/476
        // .maxWidth(703)),

        selector(".dttv-genericdialog")
            .props({
                position: "absolute",
                top: "38%",
                left: "50%",
                transform: "translate(-50%, -38%)",
                width: 840
            })
            .sub(selector("p")
                .props({
                    color: Css.colors.A_CO_1,
                    textAlign: "center"
                }))
            .sub(selector(".text-alignLeft")
                .props({
                    textAlign: "left"
                })
                .sub(selector("p")
                    .props({
                        textAlign: "left"
                    })))
            .sub(selector("h3")
                .props({
                    textTransform: "none"
                }))
            .sub(selector(".verticalscroll")
                .props({
                    height: "inherit",
                    maxHeight: 800
                }))
            .sub(selector(".verticalscroll.dttv-focused")
                .props({
                    outline: "none"
                }))
            .sub(selector("h1")
                .extend(Css.fonts2.a_fo_h6_2_mixin)
                .extend(Css.mixins.borderBottomGrey)
                .props({
                    textTransform: "none",
                    position: "relative",
                    width: "100%",
                    left: 0,
                    paddingBottom: 15,
                    marginBottom: 36
                })
                .sub(selector("&.icon-success::before")
                    .extend(Css.sprites.A_IC_009_1_36x36_mixin))
                .sub(selector("&.icon-info::before")
                    .extend(Css.sprites.A_IC_077_36x36_mixin))
                .sub(selector("&.icon-error::before")
                    .extend(Css.sprites.A_IC_069_36x36_mixin))
                .sub(selector("&.icon::before")
                    .props({
                        content: "''",
                        marginRight: 21,
                        display: "inline-block"
                    })))
    );
}

export class CssGlobalStyles {

    constructor(protected images: ICssImages) {

        CssFunctions.appendStyle(
            selector(`.${this.defaultBackgroundImage}`)
                .props({
                    backgroundColor: Css.colors.backgroundColor
                }));
    }

    public readonly defaultBackgroundImage = "defaultBackgroundImage";

    public get flash() {

        return CssFunctions.add("dttv-flash",
            style => selector("." + style)
                .props({
                    backgroundColor: CssColors.global_focus_background_flash,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0,
                    borderRadius: CssDimensions.borderRadius
                })
        );
    }

    public get flashSvg() {

        return CssFunctions.add("dttv-flash",
            style => selector("." + style)
                .props({
                    fill: CssColors.global_focus_background_flash,
                    position: "absolute",
                    opacity: 0
                })
        );
    }

    public get flashTransition() {

        CssFunctions.add("flash-enter .dttv-flash",
            style => {

                CssFunctions.appendStyle(keyframe("flashingEffect")
                    .block(0, declaration().props({ opacity: 0 }))
                    .block(50, declaration().props({ opacity: 1 }))
                    .block(100, declaration().props({ opacity: 0 })));

                return selector("." + style)
                    .props({
                        animation: "flashingEffect 40ms linear"
                    });
            }
        );

        return "flash";
    }

    public get blinkTransition() {

        return CssFunctions.add("blink",
            style => keyframe(style)
                .block(0, declaration().props({ opacity: 0 }))
                .block(50, declaration().props({ opacity: 1 }))
                .block(100, declaration().props({ opacity: 0 })));
    }

    /**
     * React applying the 'show' class is react to fast => workaround use timeout and apply 'show' class
     *  this snippet is using keyframes don't need timeouts
     *  .sub(selector(".view")
     *      .opacity(0)
     *      .sub(selector("&.show")
     *         .animation(`${Css.globalStyleClasses.fadeInNewElements} 400ms ease-in-out`)
     *         .opacity(1)
     *         )
     *     )
     *
     * cons:
     * - not yet reversable
     * do not combine transition on same element
     */
    public get fadeInNewElements() {

        return CssFunctions.add("fadeInNewElements",
            style => keyframe(style)
                .block(0, declaration().props({ opacity: 0 }))
                .block(100, declaration().props({ opacity: 1 })));
    }

    public get presserTransition() {

        return CssFunctions.add("presser",
            style => keyframe(style)
                .block(0, declaration())
                .block(50, declaration().props({ background: "#888" }))
                .block(100, declaration()));
    }
}
