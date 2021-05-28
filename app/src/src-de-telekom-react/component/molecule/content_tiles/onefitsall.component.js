var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../../base/public", "../../ui/contentimage/public", "../../ui/public", "../../molecule/badges/public", "../../../framework/navigation/public"], function (require, exports, React, public_1, public_2, public_3, public_4, public_5, public_6, public_7) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OfaTile = exports.ContentTileOneFitsAllStyle = void 0;
    var ContentTileOneFitsAllStyle = (function () {
        function ContentTileOneFitsAllStyle() {
        }
        Object.defineProperty(ContentTileOneFitsAllStyle, "PLAY_ICON", {
            get: function () {
                return public_1.Css.sprites.A_IC_024_48x48;
            },
            enumerable: false,
            configurable: true
        });
        ContentTileOneFitsAllStyle.HEIGHT = 226 + 12;
        ContentTileOneFitsAllStyle.WIDTH = 330 + 2 * public_1.Css.dimensions.borderWidth;
        ContentTileOneFitsAllStyle.COVER_HEIGHT = 186;
        ContentTileOneFitsAllStyle.COVER_WIDTH = 330;
        return ContentTileOneFitsAllStyle;
    }());
    exports.ContentTileOneFitsAllStyle = ContentTileOneFitsAllStyle;
    var ContentTileOneFitsAllComponent = (function (_super) {
        __extends(ContentTileOneFitsAllComponent, _super);
        function ContentTileOneFitsAllComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.thresholdIntersectionRatio = 0.5;
            _this.onDestroy(function () {
                if (_this.intersectionObserver) {
                    _this.intersectionObserver.disconnect();
                }
            });
            return _this;
        }
        ContentTileOneFitsAllComponent_1 = ContentTileOneFitsAllComponent;
        ContentTileOneFitsAllComponent.prototype.componentDidMount = function () {
            this.initializeIntersectionObserver();
        };
        ContentTileOneFitsAllComponent.prototype.componentDidUpdate = function (prevProps) {
            if (this.props.data != prevProps.data) {
                this.initializeIntersectionObserver();
            }
        };
        ContentTileOneFitsAllComponent.prototype.initializeIntersectionObserver = function () {
            var _this = this;
            var _a;
            if (((_a = this.props.data) === null || _a === void 0 ? void 0 : _a.onIntersectionExceedsThreshold) && window.IntersectionObserver && this.rootDivElement) {
                var callbackfunc = function (entries, observer) {
                    entries.forEach(function (entry) {
                        var _a;
                        if (entry.isIntersecting) {
                            if (_this.props.data && entry.intersectionRatio > _this.thresholdIntersectionRatio &&
                                (public_2.Guard.isUndefined(_this.previousIntersectionRatio) || _this.previousIntersectionRatio <= _this.thresholdIntersectionRatio)) {
                                public_2.Logger.debug(function (log) { var _a; return log(public_2.LogMsg("INTERSECTION RATIO THRESHOLD " + _this.thresholdIntersectionRatio + " EXCEEDED for '" + ((_a = _this.props.data) === null || _a === void 0 ? void 0 : _a.title) + "' => " + entry.intersectionRatio, ContentTileOneFitsAllComponent_1.TAG)); });
                                if ((_a = _this.props.data) === null || _a === void 0 ? void 0 : _a.onIntersectionExceedsThreshold) {
                                    _this.props.data.onIntersectionExceedsThreshold();
                                }
                            }
                            _this.previousIntersectionRatio = entry.intersectionRatio;
                        }
                    });
                };
                if (this.intersectionObserver) {
                    this.intersectionObserver.disconnect();
                }
                this.previousIntersectionRatio = undefined;
                this.intersectionObserver = new IntersectionObserver(callbackfunc, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] });
                this.intersectionObserver.observe(this.rootDivElement);
            }
        };
        ContentTileOneFitsAllComponent.prototype.shouldComponentUpdate = function (nextProps) {
            return this.props.badgeStyle != nextProps.badgeStyle
                || this.props.data != nextProps.data
                || this.props.disableFocusFrame != nextProps.disableFocusFrame
                || this.props.styles != nextProps.styles;
        };
        ContentTileOneFitsAllComponent.prototype.render = function () {
            var _this = this;
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            var functionalTile = ((_a = this.props.data) === null || _a === void 0 ? void 0 : _a.text) !== undefined;
            var hasLogo = this.props.data && (this.props.data.logo || this.props.data.icon);
            var hasOverlayLogo = (_b = this.props.data) === null || _b === void 0 ? void 0 : _b.overlayLogo;
            var hasImage = ((_c = this.props.data) === null || _c === void 0 ? void 0 : _c.image) || ((_d = this.props.data) === null || _d === void 0 ? void 0 : _d.imageIcon);
            var hasOverlayButton = (_e = this.props.data) === null || _e === void 0 ? void 0 : _e.overlayButtonIcon;
            var logoRef = ((_f = this.props.data) === null || _f === void 0 ? void 0 : _f.overlayLogo)
                ? public_2.ImageScale.rescale(this.props.data.overlayLogo, { x: ContentTileOneFitsAllStyle.COVER_WIDTH, ar: "keep" })
                : (((_g = this.props.data) === null || _g === void 0 ? void 0 : _g.logo) && public_2.ImageScale.rescale(this.props.data.logo, { y: 42, ar: "keep" })) || public_1.Css.images.inlineTransparentPixel;
            var imageRef = public_1.Css.images.inlineTransparentPixel;
            if (hasImage && ((_h = this.props.data) === null || _h === void 0 ? void 0 : _h.image)) {
                var scaledImage = public_2.ImageScale.rescale(this.props.data.image, { y: functionalTile && this.props.data.type != "channel" ? 72 : ContentTileOneFitsAllStyle.COVER_HEIGHT, ar: "keep", out: functionalTile ? undefined : "jpeg" });
                imageRef = this.props.data.disableImageScaling ? this.props.data.image : scaledImage;
            }
            var needsGradient = !hasOverlayLogo && (hasLogo || ((_j = this.props.data) === null || _j === void 0 ? void 0 : _j.badge)) && !hasOverlayButton;
            var showLogo = this.props.data && (this.props.data.overlayLogo || (this.props.data.logo && !((_k = this.props.data) === null || _k === void 0 ? void 0 : _k.icon)));
            var isChecked = (_l = this.props.data) === null || _l === void 0 ? void 0 : _l.isChecked;
            return React.createElement("div", { className: [this.ID].join(" "), style: this.props.styles ? this.props.styles.toStyle() : undefined, ref: function (r) { return _this.rootDivElement = r; } },
                React.createElement("div", { className: [
                        "content-wrapper",
                        functionalTile ? "content-functional " + (this.props.disableFocusFrame == true ? "" : "dttv-focus-frame") : undefined,
                    ].join(" ") },
                    React.createElement("div", { className: ["content-image-wrapper"].join(" ") },
                        !functionalTile &&
                            React.createElement(public_4.ContentImage.DynamicWidth, { className: [
                                    "content-image",
                                    this.props.disableFocusFrame == true ? "" : "dttv-focus-frame"
                                ].join(" "), data: {
                                    defaultImageClass: this.props.data ? this.props.data.defaultImageClass : undefined,
                                    imageUrl: imageRef
                                } }),
                        functionalTile &&
                            React.createElement(React.Fragment, null,
                                React.createElement("div", { className: ["content-image-simulator", hasImage ? undefined : "empty"].join(" ") },
                                    imageRef &&
                                        React.createElement("img", { className: [((_m = this.props.data) === null || _m === void 0 ? void 0 : _m.type) == "channel" ? "channel-image-small" : "content-image-small", hasImage && this.props.data && this.props.data.text !== undefined && this.props.data.text !== "" ? "spacer" : undefined].join(" "), src: imageRef }),
                                    ((!imageRef || imageRef === public_1.Css.images.inlineTransparentPixel) && this.props.data && this.props.data.imageIcon) &&
                                        React.createElement("div", { className: "image-icon-container" },
                                            React.createElement("div", { className: "dttv-icon image-icon " + this.props.data.imageIcon }))),
                                React.createElement("div", { className: [
                                        "content-text",
                                        public_1.Css.fonts2.a_fo_l1,
                                        hasImage && this.props.data && this.props.data.text !== undefined && this.props.data.text !== "" ? "spacer" : undefined,
                                        hasImage ? "singleline-ellipsis" : "threelines-ellipsis"
                                    ].join(" ") }, this.props.data && (public_2.Guard.isString(this.props.data.text) ? this.props.data.text : this.props.data.text ? this.props.data.text() : ""))))),
                React.createElement("div", { className: [
                        "content-image",
                        public_1.Css.globalStyleClasses.flash
                    ].join(" ") }),
                React.createElement("div", { className: ["content-title", public_1.Css.fonts2.a_fo_b2__, "singleline-ellipsis"].join(" ") },
                    React.createElement("span", { className: ["title", "singleline-ellipsis"].join(" ") }, ((_o = this.props.data) === null || _o === void 0 ? void 0 : _o.title) || "\u00A0"),
                    ((_p = this.props.data) === null || _p === void 0 ? void 0 : _p.titleIcon) && React.createElement("span", { className: ["icon", this.props.data.titleIcon].join(" ") })),
                needsGradient &&
                    React.createElement("div", { className: ["content-gradient", public_1.Css.gradients.A_SH_4_1].join(" ") }),
                showLogo &&
                    React.createElement("img", { src: logoRef, className: hasOverlayLogo ? "overlay-logo" : "content-logo" }),
                !showLogo && ((_q = this.props.data) === null || _q === void 0 ? void 0 : _q.icon) &&
                    React.createElement("div", { className: "dttv-icon content-logo " + ((_r = this.props.data) === null || _r === void 0 ? void 0 : _r.icon) }),
                React.createElement(public_5.TVProgressbarV2Component, { className: "content-progress", percentage: this.props.data ? this.props.data.progress : undefined }),
                !hasOverlayLogo && !hasOverlayButton &&
                    React.createElement(public_6.Badge.ContentTile, { className: hasLogo ? "badge-smallwidth" : undefined, text: (_s = this.props.data) === null || _s === void 0 ? void 0 : _s.badge, badgeStyle: this.props.badgeStyle }),
                hasOverlayButton &&
                    React.createElement(public_5.Button.RoundButtonNonNavigatable, { icon: (_t = this.props.data) === null || _t === void 0 ? void 0 : _t.overlayButtonIcon, className: "playbutton" }),
                isChecked &&
                    React.createElement("div", { className: ["surrounding-area", public_1.Css.sprites.A_IC_022_48x48].join(" ") }),
                this.props.children);
        };
        var ContentTileOneFitsAllComponent_1;
        ContentTileOneFitsAllComponent = ContentTileOneFitsAllComponent_1 = __decorate([
            public_3.reactComponent({
                ID: "m-02-joker-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        height: ContentTileOneFitsAllStyle.HEIGHT,
                        position: "relative",
                        width: ContentTileOneFitsAllStyle.WIDTH,
                        padding: public_1.Css.dimensions.borderWidth,
                        overflow: "hidden"
                    }),
                    public_1.selector("& .content-image")
                        .props({
                        width: ContentTileOneFitsAllStyle.COVER_WIDTH,
                        height: ContentTileOneFitsAllStyle.COVER_HEIGHT
                    }),
                    public_1.selector("& .content-gradient")
                        .props({
                        position: "absolute",
                        width: ContentTileOneFitsAllStyle.COVER_WIDTH,
                        height: ContentTileOneFitsAllStyle.COVER_HEIGHT
                    }),
                    public_1.selector("& .content-functional")
                        .props({
                        position: "absolute",
                        width: ContentTileOneFitsAllStyle.COVER_WIDTH,
                        height: ContentTileOneFitsAllStyle.COVER_HEIGHT,
                        backgroundColor: public_1.Css.colors.A_CO_1_10,
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    })
                        .sub(public_1.selector("& .content-image-simulator")
                        .props({
                        lineHeight: 0,
                    })
                        .sub(public_1.selector("&.empty")
                        .props({
                        display: "none"
                    })))
                        .sub(public_1.selector("& .content-image-small")
                        .props({
                        maxWidth: ContentTileOneFitsAllStyle.COVER_WIDTH,
                        maxHeight: 105
                    })
                        .sub(public_1.selector("&.spacer")
                        .props({
                        marginTop: 6
                    })))
                        .sub(public_1.selector("& .channel-image-small")
                        .props({
                        width: ContentTileOneFitsAllStyle.COVER_WIDTH,
                        height: ContentTileOneFitsAllStyle.COVER_HEIGHT
                    })
                        .sub(public_1.selector("&.spacer")
                        .props({
                        marginTop: 6
                    })))
                        .sub(public_1.selector("& .image-icon-container")
                        .props({
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }))
                        .sub(public_1.selector("& .content-text")
                        .props({
                        width: ContentTileOneFitsAllStyle.COVER_WIDTH,
                        paddingLeft: 35,
                        paddingRight: 35,
                        overflow: "hidden"
                    })
                        .sub(public_1.selector("&.spacer")
                        .props({
                        marginTop: 17
                    }))),
                    public_1.selector("& .content-title")
                        .props({
                        width: 312,
                        height: 36,
                        position: "absolute",
                        display: "flex",
                        top: ContentTileOneFitsAllStyle.COVER_HEIGHT + 15
                    })
                        .sub(public_1.selector("& > .icon")
                        .props({
                        flexShrink: 0,
                        marginTop: 3,
                        marginLeft: 12
                    })),
                    public_1.selector("& .title")
                        .props({
                        flexShrink: 1
                    }),
                    public_1.selector("& .content-logo")
                        .props({
                        position: "absolute",
                        top: 18,
                        left: 18
                    }),
                    public_1.selector("& .overlay-logo")
                        .props({
                        position: "absolute",
                        top: public_1.Css.dimensions.borderWidth,
                        left: public_1.Css.dimensions.borderWidth
                    }),
                    public_1.selector("& .content-progress")
                        .props({
                        left: public_1.Css.dimensions.borderWidth,
                        right: public_1.Css.dimensions.borderWidth,
                        top: ContentTileOneFitsAllStyle.COVER_HEIGHT
                    }),
                    public_1.selector("& .badge-smallwidth")
                        .props({
                        maxWidth: 210
                    }),
                    public_1.selector("& .playbutton")
                        .props({
                        margin: "auto",
                        width: ContentTileOneFitsAllStyle.COVER_WIDTH - 60,
                        top: 49,
                    }),
                    public_1.selector("& .surrounding-area")
                        .props({
                        position: "absolute",
                        top: 18,
                        right: 18
                    }),
                    public_1.selector("& ." + public_1.Css.globalStyleClasses.flash)
                        .props({
                        backgroundColor: public_1.Css.colors.global_focus_background_flash,
                        position: "absolute",
                        top: public_1.Css.dimensions.borderWidth,
                        left: public_1.Css.dimensions.borderWidth,
                        right: 0,
                        bottom: 0,
                        opacity: 0,
                        borderRadius: 0
                    })
                ]
            })
        ], ContentTileOneFitsAllComponent);
        return ContentTileOneFitsAllComponent;
    }(public_3.ReactBaseComponent));
    exports.OfaTile = public_7.makeFlashingElement(public_7.makeNavigationElement(ContentTileOneFitsAllComponent));
});
//# sourceMappingURL=onefitsall.component.js.map