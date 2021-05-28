define(["require", "exports", "./css.base", "./css", "./css.colors", "./css.dimensions"], function (require, exports, css_base_1, css_1, css_colors_1, css_dimensions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CssGlobalStyles = exports.globalStyles = void 0;
    function globalStyles() {
        css_base_1.CssFunctions.appendStyle(css_base_1.selector("*, *::before, *::after, html")
            .props({
            boxSizing: "border-box"
        }), css_base_1.selector("body")
            .props({
            margin: 0,
            overflow: "hidden",
            position: "absolute",
            height: css_1.Css.dimensions.screenHeight,
            width: css_1.Css.dimensions.screenWidth
        })
            .extend(css_1.Css.fonts2.a_fo_b2___mixin), css_base_1.selector("ol, ul")
            .props({
            listStyle: "none",
            WebkitPaddingStart: 0
        }), css_base_1.selector("p")
            .extend(css_1.Css.fonts2.a_fo_b1_1_mixin)
            .props({
            color: css_1.Css.colors.A_CO_1,
            WebkitMarginAfter: 0,
            WebkitMarginBefore: 0,
            WebkitMarginStart: 0,
            WebkitMarginEnd: 0
        }), css_base_1.selector(":focus")
            .props({
            outline: "none"
        }), css_base_1.selector(".page")
            .props({
            position: "absolute",
            height: css_1.Css.dimensions.screenHeight,
            width: css_1.Css.dimensions.screenWidth,
            overflow: "hidden"
        }), css_base_1.selector(".react-root")
            .props({
            height: css_1.Css.dimensions.screenHeight,
            width: css_1.Css.dimensions.screenWidth,
            color: css_1.Css.colors.A_CO_1,
            padding: 0
        }), css_base_1.selector(".singleline-ellipsis").extend(css_1.Css.mixins.singlelineEllipsis), css_base_1.selector(".twolines-ellipsis").extend(css_1.Css.mixins.twolineEllipsis), css_base_1.selector(".threelines-ellipsis").extend(css_1.Css.mixins.threelineEllipsis), css_base_1.selector(".fourlines-ellipsis").extend(css_1.Css.mixins.fourlineEllipsis), css_base_1.selector(".dttv-focused .dttv-focus-frame")
            .props({
            outline: css_1.Css.scale(3) + "px solid " + css_1.Css.colors.A_CO_1,
        })
            .sub(css_base_1.selector("&:after")
            .props({
            content: "''",
            display: "block",
            boxShadow: "inset 0px 0px " + css_1.Css.scale(3) + "px 0px rgba(0,0,0,0.3);",
            position: "absolute",
            top: css_1.Css.dimensions.borderWidth,
            left: css_1.Css.dimensions.borderWidth,
            right: css_1.Css.dimensions.borderWidth,
            bottom: css_1.Css.dimensions.borderWidth
        })), css_base_1.selector(".dttv-layer")
            .props({
            position: "absolute",
            top: 0,
            left: 0
        }), css_base_1.selector(".dttv-diagnostic-layer")
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
        }), css_base_1.selector(".dttv-optionpanel-layer")
            .props({
            position: "absolute",
            top: 0,
            left: 0,
            height: css_1.Css.dimensions.screenHeight,
            width: css_1.Css.dimensions.screenWidth
        }), css_base_1.selector(".dttv-notification-layer")
            .props({
            position: "absolute",
            top: 0,
            left: 0,
            height: css_1.Css.dimensions.screenHeight,
            width: css_1.Css.dimensions.screenWidth
        }), css_base_1.selector(".dttv-remote-layer")
            .props({
            position: "absolute",
            top: css_1.Css.dimensions.screenHeight - css_1.Css.dimensions.remoteInteractionLayerHeight,
            left: 0,
            height: css_1.Css.dimensions.remoteInteractionLayerHeight,
            width: css_1.Css.dimensions.screenWidth
        }), css_base_1.selector(".dttv-dialog")
            .sub(css_base_1.selector("> .dialoghostContainer")
            .props({
            position: "absolute",
            top: css_1.Css.dimensions.safeareaTop,
            left: css_1.Css.dimensions.safeareaLeft,
            bottom: css_1.Css.dimensions.safeareaBottom,
            right: css_1.Css.dimensions.safeareaRight,
            height: css_1.Css.dimensions.screenHeight - css_1.Css.dimensions.safeareaTop - css_1.Css.dimensions.safeareaBottom,
            width: css_1.Css.dimensions.screenWidth - css_1.Css.dimensions.safeareaLeft - css_1.Css.dimensions.safeareaRight
        }))
            .sub(css_base_1.selector("&.ignoresafearea")
            .sub(css_base_1.selector("> .dialoghostContainer")
            .props({
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            height: css_1.Css.dimensions.screenHeight,
            width: css_1.Css.dimensions.screenWidth
        })))
            .sub(css_base_1.selector("> .background")
            .props({
            position: "absolute",
            top: 0,
            left: 0,
            height: css_1.Css.dimensions.screenHeight,
            width: css_1.Css.dimensions.screenWidth,
            backgroundColor: css_1.Css.colors.global_background_very_low_transparent
        })
            .sub(css_base_1.selector("&.opaque")
            .props({
            backgroundColor: css_1.Css.colors.A_CO_3,
        }))), css_base_1.selector(".dttv-dialog-layer")
            .props({
            position: "absolute",
            top: 0,
            left: 0,
            height: css_1.Css.dimensions.screenHeight,
            width: css_1.Css.dimensions.screenWidth
        })
            .sub(css_base_1.selector("&.dimmed")
            .sub(css_base_1.selector(".container")
            .props({
            opacity: 0.5
        }))), css_base_1.selector(".dttv-dialog-button-right")
            .props({
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
        })
            .sub(css_base_1.selector(".dttv-vertical-buttonbar")
            .props({
            width: 324
        }))
            .sub(css_base_1.selector(".content")
            .props({
            display: "flex",
            flexDirection: "column",
            marginRight: 156,
            width: 792
        })), css_base_1.selector(".dttv-genericdialog")
            .props({
            position: "absolute",
            top: "38%",
            left: "50%",
            transform: "translate(-50%, -38%)",
            width: 840
        })
            .sub(css_base_1.selector("p")
            .props({
            color: css_1.Css.colors.A_CO_1,
            textAlign: "center"
        }))
            .sub(css_base_1.selector(".text-alignLeft")
            .props({
            textAlign: "left"
        })
            .sub(css_base_1.selector("p")
            .props({
            textAlign: "left"
        })))
            .sub(css_base_1.selector("h3")
            .props({
            textTransform: "none"
        }))
            .sub(css_base_1.selector(".verticalscroll")
            .props({
            height: "inherit",
            maxHeight: 800
        }))
            .sub(css_base_1.selector(".verticalscroll.dttv-focused")
            .props({
            outline: "none"
        }))
            .sub(css_base_1.selector("h1")
            .extend(css_1.Css.fonts2.a_fo_h6_2_mixin)
            .extend(css_1.Css.mixins.borderBottomGrey)
            .props({
            textTransform: "none",
            position: "relative",
            width: "100%",
            left: 0,
            paddingBottom: 15,
            marginBottom: 36
        })
            .sub(css_base_1.selector("&.icon-success::before")
            .extend(css_1.Css.sprites.A_IC_009_1_36x36_mixin))
            .sub(css_base_1.selector("&.icon-info::before")
            .extend(css_1.Css.sprites.A_IC_077_36x36_mixin))
            .sub(css_base_1.selector("&.icon-error::before")
            .extend(css_1.Css.sprites.A_IC_069_36x36_mixin))
            .sub(css_base_1.selector("&.icon::before")
            .props({
            content: "''",
            marginRight: 21,
            display: "inline-block"
        }))));
    }
    exports.globalStyles = globalStyles;
    var CssGlobalStyles = (function () {
        function CssGlobalStyles(images) {
            this.images = images;
            this.defaultBackgroundImage = "defaultBackgroundImage";
            css_base_1.CssFunctions.appendStyle(css_base_1.selector("." + this.defaultBackgroundImage)
                .props({
                backgroundColor: css_1.Css.colors.backgroundColor
            }));
        }
        Object.defineProperty(CssGlobalStyles.prototype, "flash", {
            get: function () {
                return css_base_1.CssFunctions.add("dttv-flash", function (style) { return css_base_1.selector("." + style)
                    .props({
                    backgroundColor: css_colors_1.CssColors.global_focus_background_flash,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0,
                    borderRadius: css_dimensions_1.CssDimensions.borderRadius
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGlobalStyles.prototype, "flashSvg", {
            get: function () {
                return css_base_1.CssFunctions.add("dttv-flash", function (style) { return css_base_1.selector("." + style)
                    .props({
                    fill: css_colors_1.CssColors.global_focus_background_flash,
                    position: "absolute",
                    opacity: 0
                }); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGlobalStyles.prototype, "flashTransition", {
            get: function () {
                css_base_1.CssFunctions.add("flash-enter .dttv-flash", function (style) {
                    css_base_1.CssFunctions.appendStyle(css_base_1.keyframe("flashingEffect")
                        .block(0, css_base_1.declaration().props({ opacity: 0 }))
                        .block(50, css_base_1.declaration().props({ opacity: 1 }))
                        .block(100, css_base_1.declaration().props({ opacity: 0 })));
                    return css_base_1.selector("." + style)
                        .props({
                        animation: "flashingEffect 40ms linear"
                    });
                });
                return "flash";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGlobalStyles.prototype, "blinkTransition", {
            get: function () {
                return css_base_1.CssFunctions.add("blink", function (style) { return css_base_1.keyframe(style)
                    .block(0, css_base_1.declaration().props({ opacity: 0 }))
                    .block(50, css_base_1.declaration().props({ opacity: 1 }))
                    .block(100, css_base_1.declaration().props({ opacity: 0 })); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGlobalStyles.prototype, "fadeInNewElements", {
            get: function () {
                return css_base_1.CssFunctions.add("fadeInNewElements", function (style) { return css_base_1.keyframe(style)
                    .block(0, css_base_1.declaration().props({ opacity: 0 }))
                    .block(100, css_base_1.declaration().props({ opacity: 1 })); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssGlobalStyles.prototype, "presserTransition", {
            get: function () {
                return css_base_1.CssFunctions.add("presser", function (style) { return css_base_1.keyframe(style)
                    .block(0, css_base_1.declaration())
                    .block(50, css_base_1.declaration().props({ background: "#888" }))
                    .block(100, css_base_1.declaration()); });
            },
            enumerable: false,
            configurable: true
        });
        return CssGlobalStyles;
    }());
    exports.CssGlobalStyles = CssGlobalStyles;
});
//# sourceMappingURL=css.global.js.map