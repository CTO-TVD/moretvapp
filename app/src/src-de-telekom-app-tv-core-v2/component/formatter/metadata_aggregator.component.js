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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
define(["require", "exports", "react", "src/src-de-telekom/public", "src/src-de-telekom-style/public", "src/src-de-telekom-tv-core/public", "src/src-de-telekom-react/public", "../../translation/public"], function (require, exports, React, public_1, public_2, public_3, public_4, public_5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MetadataAggregator = void 0;
    var MetadataAggregator = (function (_super) {
        __extends(MetadataAggregator, _super);
        function MetadataAggregator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MetadataAggregator.prototype.render = function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var videoQualityIcon;
            var upperCaseQuality = (_b = (_a = this.props.data) === null || _a === void 0 ? void 0 : _a.bestVideoQuality) === null || _b === void 0 ? void 0 : _b.toUpperCase();
            switch (upperCaseQuality) {
                case "UHD+HDR":
                    videoQualityIcon = public_2.Css.sprites.A_IC_137_1_78x30;
                    break;
                case "UHD":
                    videoQualityIcon = public_2.Css.sprites.A_IC_140_2_48x30;
                    break;
                case "HD":
                    videoQualityIcon = public_2.Css.sprites.A_IC_059_2_37x30;
                    break;
                case "SD":
                    videoQualityIcon = public_2.Css.sprites.A_IC_058_2_30x30;
                    break;
            }
            var audioQualityIcon;
            var upperCaseAudio = (_d = (_c = this.props.data) === null || _c === void 0 ? void 0 : _c.bestAudioQuality) === null || _d === void 0 ? void 0 : _d.toUpperCase();
            switch (upperCaseAudio) {
                case "DOLBY DIGITAL":
                    audioQualityIcon = public_2.Css.sprites.A_IC_062_3_36x30;
                    break;
                case "STEREO":
                    audioQualityIcon = public_2.Css.sprites.A_IC_063_2_36x30;
                    break;
            }
            var satIndicatorIcon = ((_e = this.props.data) === null || _e === void 0 ? void 0 : _e.satIndicatorIcon) ? public_2.Css.sprites.A_IC_079_24x24 : undefined;
            var folderIcon = public_2.Css.sprites.A_IC_055_1_36x36;
            var temporalIndicator = public_2.Css.sprites.A_IC_054_2_24x24;
            var badge;
            var parts = [];
            if (this.props.data) {
                if (this.props.data.$type == "vodasset") {
                    badge = React.createElement(React.Fragment, null,
                        React.createElement("div", { className: ["type", "vod", public_2.Css.fonts2.a_fo_l1_2, this.props.data.badge ? undefined : "nobadge"].join(" ") },
                            "VOD",
                            this.props.data.temporalIndicator &&
                                React.createElement("span", { className: [temporalIndicator, "dttv-icon", "typeicon"].join(" ") })),
                        this.props.data.badge &&
                            React.createElement("div", { className: ["badge", public_2.Css.fonts2.a_fo_l1_1].join(" ") }, public_1.Guard.isString(this.props.data.badge)
                                ? this.props.data.badge
                                : this.props.data.badge()));
                    parts = [
                        this.props.data.airdate,
                        this.props.data.duration,
                        this.props.data.multiassetInfo,
                        this.props.data.year,
                        this.props.data.genre,
                        this.props.data.parentalInformation,
                        this.props.data.rating && React.createElement(public_4.TvRatingstarsComponent, { steps: this.props.data.rating.stars, size: "24x24", className: "ratings" }),
                        this.props.data.type
                    ];
                }
                else if (this.props.data.$type == "recording") {
                    var active = this.props.data.recordingState === public_3.zosaStatic.RECORDING_STATE_ONGOING || this.props.data.recordingState === public_3.zosaStatic.RECORDING_STATE_SCHEDULED;
                    var channelLogo = this.props.data.channelLogo ? public_1.ImageScale.rescale(this.props.data.channelLogo, { y: 30, ar: "keep" }) : undefined;
                    var errorState = this.props.data.recordingState === public_3.zosaStatic.RECORDING_STATE_FAILED;
                    badge = this.props.data.badge &&
                        React.createElement(React.Fragment, null,
                            React.createElement("div", { className: ["type", "rec", public_2.Css.fonts2.a_fo_l1_2].join(" ") },
                                React.createElement("span", null, "REC"),
                                errorState && (React.createElement("span", { className: ["typeicon", public_2.Css.sprites.A_IC_169_24x24].join(" ") })),
                                (active && !errorState) && (this.props.data.seriesIndicator === undefined ? undefined
                                    : this.props.data.seriesIndicator
                                        ? React.createElement("span", { className: ["typeicon", public_2.Css.sprites.A_IC_049_2_50x24].join(" ") })
                                        : React.createElement("span", { className: ["typeicon", public_2.Css.sprites.A_IC_028_2_24x24].join(" ") }))),
                            React.createElement("div", { className: ["badge", public_2.Css.fonts2.a_fo_l1_1].join(" ") },
                                public_1.Guard.isDefined(this.props.data.restartIndicator) && React.createElement("span", { className: ["badgeicon", this.props.data.restartIndicator ? public_2.Css.sprites.A_IC_027_5_24x24 : public_2.Css.sprites.A_IC_027_6_24x24].join(" ") }),
                                this.props.data.badge && (public_1.Guard.isString(this.props.data.badge)
                                    ? this.props.data.badge
                                    : this.props.data.badge())));
                    parts = [
                        this.props.data.channelLogo ? React.createElement("img", { className: "channellogo", src: channelLogo }) : this.props.data.channelTitle ? this.props.data.channelTitle : React.createElement(React.Fragment, null, " "),
                        this.props.data.duration,
                        this.props.data.folderIndicator ? React.createElement("div", { className: [folderIcon, "dttv-icon", "icon"].join(" ") }) : undefined,
                        !this.props.reducedMetadata ? this.props.data.multiassetInfo : undefined,
                        !this.props.reducedMetadata ? this.props.data.productionYear : undefined,
                        !this.props.reducedMetadata ? this.props.data.genre : undefined,
                        !this.props.reducedMetadata ? this.props.data.parentalInformation : undefined
                    ];
                }
                else if (this.props.data.$type == "tv") {
                    var channelLogo = this.props.data.channelLogo ? public_1.ImageScale.rescale(this.props.data.channelLogo, { y: 30, ar: "keep" }) : undefined;
                    badge = this.props.data.badge &&
                        React.createElement(React.Fragment, null,
                            React.createElement("div", { className: ["type", "tv", public_2.Css.fonts2.a_fo_l1_2].join(" ") }, "TV"),
                            React.createElement("div", { className: ["badge", public_2.Css.fonts2.a_fo_l1_1].join(" ") },
                                public_1.Guard.isDefined(this.props.data.restartIndicator) && React.createElement("span", { className: ["badgeicon", this.props.data.restartIndicator ? public_2.Css.sprites.A_IC_027_5_24x24 : public_2.Css.sprites.A_IC_027_6_24x24].join(" ") }),
                                this.props.data.badge && (public_1.Guard.isString(this.props.data.badge)
                                    ? this.props.data.badge
                                    : this.props.data.badge())));
                    parts = [
                        this.props.data.channelLogo ? React.createElement("img", { className: "channellogo", src: channelLogo }) : this.props.data.channelTitle ? this.props.data.channelTitle : undefined,
                        this.props.data.duration,
                        !this.props.reducedMetadata ? this.props.data.multiassetInfo : undefined,
                        !this.props.reducedMetadata ? this.props.data.productionYear : undefined,
                        !this.props.reducedMetadata ? this.props.data.genre : undefined,
                        this.props.data.parentalInformation
                    ];
                }
                else if (this.props.data.$type == "channel") {
                    var genres = this.props.data.genres ? this.props.data.genres : [];
                    badge = this.props.data.badge &&
                        React.createElement(React.Fragment, null,
                            React.createElement("div", { className: ["type", "channel", public_2.Css.fonts2.a_fo_l1_2].join(" ") }, public_4.Filter.message(public_4.Filter.context(), public_5.messagesCore.STB_METAINFO_CHANNEL)),
                            React.createElement("div", { className: ["badge", public_2.Css.fonts2.a_fo_l1_1].join(" ") }, this.props.data.badge && (public_1.Guard.isString(this.props.data.badge)
                                ? this.props.data.badge
                                : this.props.data.badge())));
                    parts = __spreadArray([], genres);
                }
                else if (this.props.data.$type == "app") {
                    parts = [
                        this.props.data.genre,
                        this.props.data.parentalInformation
                    ];
                }
                if (this.props.data.$type == "tv+") {
                    badge = React.createElement(React.Fragment, null,
                        React.createElement("div", { className: ["type", "tvplus", public_2.Css.fonts2.a_fo_l1_2, this.props.data.badge ? undefined : "nobadge"].join(" ") }, "TV+"),
                        this.props.data.badge &&
                            React.createElement("div", { className: ["badge", public_2.Css.fonts2.a_fo_l1_1].join(" ") }, public_1.Guard.isString(this.props.data.badge)
                                ? this.props.data.badge
                                : this.props.data.badge()));
                    parts = [
                        this.props.data.channelsNumber,
                        this.props.data.contractDuration,
                    ];
                }
            }
            parts = parts.map(function (it) {
                if (public_1.Guard.isString(it) && it.length == 0) {
                    return undefined;
                }
                if (it == null) {
                    return undefined;
                }
                return it;
            });
            return React.createElement("div", { className: [this.ID, public_2.Css.fonts2.a_fo_b2__].join(" ") },
                !this.props.hideBadge && badge,
                parts
                    .filter(public_1.Guard.isDefined)
                    .map(function (it, x, arr) {
                    return React.createElement(React.Fragment, { key: x },
                        React.createElement("span", { className: "textelement" }, it),
                        x != arr.length - 1 && React.createElement("div", { className: "separator" }));
                }),
                (videoQualityIcon || audioQualityIcon || satIndicatorIcon) &&
                    React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "separator" }),
                        React.createElement("span", { className: "qualities" },
                            videoQualityIcon && React.createElement("span", { className: [videoQualityIcon, "dttv-icon", "icon"].join(" ") }, videoQualityIcon ? "" : (_f = this.props.data) === null || _f === void 0 ? void 0 : _f.bestVideoQuality),
                            audioQualityIcon && React.createElement("span", { className: [audioQualityIcon, "dttv-icon", "icon"].join(" ") }, audioQualityIcon ? "" : (_g = this.props.data) === null || _g === void 0 ? void 0 : _g.bestAudioQuality)),
                        ((_h = this.props.data) === null || _h === void 0 ? void 0 : _h.satIndicatorIcon) && React.createElement(React.Fragment, null,
                            React.createElement("div", { className: "separator" }),
                            React.createElement("span", { className: [satIndicatorIcon, "dttv-icon", "icon"].join(" ") }))));
        };
        MetadataAggregator = __decorate([
            public_4.reactComponent({
                ID: "metadata-aggregator-m07",
                styles: [
                    public_2.selector("&")
                        .props({
                        width: public_2.Css.dimensions.safeareaWidth_UI20,
                        height: 36,
                        display: "flex",
                        alignItems: "center"
                    })
                        .sub(public_2.selector(".type")
                        .props({
                        marginRight: 3,
                        display: "flex",
                        alignItems: "center",
                        borderRadius: public_2.Css.scale(3) + "px 0px 0px " + public_2.Css.scale(3) + "px",
                        paddingLeft: 12,
                        paddingRight: 9,
                        paddingTop: 3,
                        paddingBottom: 3,
                        height: 36,
                        textTransform: "uppercase"
                    })
                        .sub(public_2.selector("&.nobadge")
                        .props({
                        borderRadius: public_2.Css.scale(3) + "px " + public_2.Css.scale(3) + "px " + public_2.Css.scale(3) + "px " + public_2.Css.scale(3) + "px",
                        marginRight: 18
                    }))
                        .sub(public_2.selector("&.channel")
                        .props({
                        backgroundColor: public_2.Css.colors.A_CO_1_80,
                        color: public_2.Css.colors.A_CO_4
                    }))
                        .sub(public_2.selector("&.vod")
                        .props({
                        backgroundColor: public_2.Css.colors.A_CO_16
                    }))
                        .sub(public_2.selector("&.tv")
                        .props({
                        backgroundColor: public_2.Css.colors.A_CO_15
                    }))
                        .sub(public_2.selector("&.rec")
                        .props({
                        backgroundColor: public_2.Css.colors.A_CO_12
                    }))
                        .sub(public_2.selector("&.tvplus")
                        .props({
                        backgroundColor: public_2.Css.colors.A_CO_15
                    }))
                        .sub(public_2.selector("& + .channellogo")
                        .props({
                        marginLeft: 22
                    }))
                        .sub(public_2.selector("&.rec span")
                        .props({
                        float: "left"
                    }))
                        .sub(public_2.selector(".typeicon")
                        .props({
                        marginLeft: 15,
                        marginRight: 3
                    })))
                        .sub(public_2.selector(".qualities")
                        .props({
                        display: "flex"
                    }))
                        .sub(public_2.selector(".badge")
                        .props({
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: 11,
                        paddingRight: 11,
                        paddingTop: 3,
                        paddingBottom: 3,
                        marginRight: 18,
                        height: 36,
                        backgroundColor: public_2.Css.colors.A_CO_1_80,
                        color: public_2.Css.colors.A_CO_4,
                        borderRadius: "0px " + public_2.Css.scale(3) + "px " + public_2.Css.scale(3) + "px 0px",
                        textTransform: "uppercase"
                    })
                        .sub(public_2.selector(".badgeicon")
                        .props({
                        display: "inline-block",
                        marginRight: 12,
                    })))
                        .sub(public_2.selector(".icon")
                        .props({
                        display: "flex"
                    })
                        .sub(public_2.selector("& + .icon")
                        .props({
                        marginLeft: 9
                    }))
                        .sub(public_2.selector("& img + img")
                        .props({
                        marginLeft: 9
                    })))
                        .sub(public_2.selector(".ratings")
                        .props({
                        top: 3,
                    })),
                    public_2.selector("& .channellogo")
                        .props({
                        marginRight: 6,
                        verticalAlign: "text-top"
                    }),
                    public_2.selector("& .separator")
                        .props({
                        display: "inline-block",
                        borderLeft: public_2.Css.scale(3) + "px solid",
                        marginLeft: 18,
                        marginRight: 18,
                        width: 3,
                        height: 24
                    })
                ]
            }),
            public_1.logTag()
        ], MetadataAggregator);
        return MetadataAggregator;
    }(public_4.ReactBaseComponent));
    exports.MetadataAggregator = MetadataAggregator;
});
//# sourceMappingURL=metadata_aggregator.component.js.map