define(["require", "exports", "src/src-de-telekom/public", "../backend/Zosa/zosa.static"], function (require, exports, public_1, zosa_static_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZosaVasItemExtensions = exports.ZosaRecordingItemExtensions = exports.ZosaProgramItemExtensions = exports.ZosaParentRecordingItemExtensions = exports.ZosaChannelItemExtensions = void 0;
    function ensureBoolean(value, defaultValue) {
        if (defaultValue === void 0) { defaultValue = false; }
        return (value == null) ? defaultValue : value;
    }
    function getAgeRating(item) {
        var agerating = item.parentalRating;
        if (!public_1.Guard.isNumber(agerating)) {
            agerating = item.minViewingAge;
        }
        return agerating;
    }
    function getCustomProperty(customProps, key) {
        return (customProps || []).filter(function (value) { return (value.key === key); })[0];
    }
    function getImageByType(allImages, imageTypes, options) {
        var _loop_1 = function (imageType) {
            var image = (allImages || []).filter(function (item) { return item.serviceProviderImageType == imageType; })[0];
            if (image) {
                if (options) {
                    image.url = public_1.ImageScale.scale(image.url, options);
                }
                return { value: image };
            }
        };
        for (var _i = 0, _a = imageTypes || []; _i < _a.length; _i++) {
            var imageType = _a[_i];
            var state_1 = _loop_1(imageType);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return { serviceProviderImageType: "", url: "" };
    }
    var ZosaChannelItemExtensions = (function () {
        function ZosaChannelItemExtensions() {
        }
        ZosaChannelItemExtensions.update = function (channel) {
            var _a;
            var extendedChannelItem = channel;
            var cpExternalCode = getCustomProperty(channel.customProps, "externalCode");
            var functionalChannelType = ZosaChannelItemExtensions.getFunctionalChannelType(channel, cpExternalCode);
            var isFunctionalChannel = ensureBoolean(channel.channelType == zosa_static_1.zosaStatic.CHANNEL_TYPE_APPLICATION);
            var isLocalTvChannel = isFunctionalChannel && (functionalChannelType == 2);
            var channelLogoImageTypeNew = isFunctionalChannel ? ZosaChannelItemExtensions.IMAGE_TYPE_FUNCTIONAL_CHANNEL_LOGO : ZosaChannelItemExtensions.IMAGE_TYPE_CHANNEL_LOGO;
            var channelLogoNew = getImageByType(channel.images, [channelLogoImageTypeNew], { ar: "keep", y: 72 });
            var barkerPoster = getImageByType(channel.images, [ZosaChannelItemExtensions.IMAGE_TYPE_BARKER_POSTER, ZosaChannelItemExtensions.IMAGE_TYPE_CHANNEL_FALLBACK]);
            var titleImage = getImageByType(channel.images, [ZosaChannelItemExtensions.IMAGE_TYPE_POSTER]);
            var backgroundImage = getImageByType(channel.images, [ZosaChannelItemExtensions.IMAGE_TYPE_CHANNEL_BACKGROUND]);
            var ageRating = getAgeRating(channel);
            var streams = (extendedChannelItem.streams || []).map(function (stream) { return ZosaChannelStreamItemExtensions.update(stream, channel); });
            var hasIPTVStreams = streams.some(function (item) { return item.dtExtensions.isIPTVStream; });
            var hasSATStreams = streams.some(function (item) { return !item.dtExtensions.isIPTVStream; });
            var channelTransmissionType;
            if (hasIPTVStreams && hasSATStreams) {
                channelTransmissionType = 1;
            }
            else if (hasSATStreams && !hasIPTVStreams) {
                channelTransmissionType = 2;
            }
            else {
                channelTransmissionType = 0;
            }
            var streamBestAvailableQuality;
            var stream = ZosaChannelItemExtensions.hasStream(streams, zosa_static_1.zosaStatic.VIDEO_DEFINITION_UHD, channelTransmissionType);
            var showUhd = (stream != null);
            var isHdr = !!((_a = stream === null || stream === void 0 ? void 0 : stream.customProps) === null || _a === void 0 ? void 0 : _a.filter(function (item) { return item.key == zosa_static_1.DTZosaChannelStreamItemCustomProps.hdr && item.value == "true"; })[0]);
            if (showUhd) {
                streamBestAvailableQuality = stream;
            }
            stream = ZosaChannelItemExtensions.hasStream(streams, zosa_static_1.zosaStatic.VIDEO_DEFINITION_HD, channelTransmissionType);
            var showHd = !showUhd && (stream != null);
            if (showHd) {
                streamBestAvailableQuality = stream;
            }
            stream = ZosaChannelItemExtensions.hasStream(streams, zosa_static_1.zosaStatic.VIDEO_DEFINITION_SD, channelTransmissionType);
            var showSd = !showUhd && !showHd && (stream != null);
            if (showSd) {
                streamBestAvailableQuality = stream;
            }
            var customProperties = {
                externalCode: cpExternalCode === null || cpExternalCode === void 0 ? void 0 : cpExternalCode.value
            };
            var dtExtensions = {
                ageRating: ageRating,
                barkerPoster: barkerPoster,
                channelLogoNew: channelLogoNew,
                channelTransmissionType: channelTransmissionType,
                customProperties: customProperties,
                functionalChannelType: functionalChannelType,
                isFunctionalChannel: isFunctionalChannel,
                isHdr: isHdr,
                isLocalTvChannel: isLocalTvChannel,
                showHd: showHd,
                showSd: showSd,
                showUhd: showUhd,
                streamBestAvailableQuality: streamBestAvailableQuality,
                titleImage: titleImage,
                backgroundImage: backgroundImage
            };
            extendedChannelItem.dtExtensions = dtExtensions;
            extendedChannelItem.streams = streams;
            if (!public_1.Feature.has(public_1.FeatureItems.apps, public_1.FeatureRights.viewItems)) {
                extendedChannelItem.vasItems = undefined;
            }
            if (!public_1.Feature.has(public_1.FeatureItems.pip, public_1.FeatureRights.viewItems)) {
                extendedChannelItem.pipStream = undefined;
            }
            extendedChannelItem.$type = "channelItem";
            return extendedChannelItem;
        };
        ZosaChannelItemExtensions.getFunctionalChannelType = function (channel, cpExternalCode) {
            var type = 0;
            if ((channel.channelType == zosa_static_1.zosaStatic.CHANNEL_TYPE_APPLICATION) && cpExternalCode) {
                switch (cpExternalCode.value) {
                    case "LocalTV":
                        type = 2;
                        break;
                    default:
                        type = 1;
                        break;
                }
            }
            return type;
        };
        ZosaChannelItemExtensions.hasStream = function (streams, videoDefinition, channelTransmissionType) {
            if (!streams) {
                return undefined;
            }
            if (channelTransmissionType == 2) {
                return (streams.length > 0) ? streams.filter(function (stream) { return stream.videoDefinition == videoDefinition; })[0] : undefined;
            }
            else {
                return (streams.length > 0) ? streams.filter(function (stream) { return stream.videoDefinition == videoDefinition && stream.dtExtensions.isIPTVStream; })[0] : undefined;
            }
        };
        ZosaChannelItemExtensions.IMAGE_TYPE_BARKER_POSTER = "99";
        ZosaChannelItemExtensions.IMAGE_TYPE_FUNCTIONAL_CHANNEL_LOGO = "21";
        ZosaChannelItemExtensions.IMAGE_TYPE_CHANNEL_LOGO = "15";
        ZosaChannelItemExtensions.IMAGE_TYPE_CHANNEL_BACKGROUND = "14";
        ZosaChannelItemExtensions.IMAGE_TYPE_CHANNEL_FALLBACK = "7";
        ZosaChannelItemExtensions.IMAGE_TYPE_POSTER = "1";
        return ZosaChannelItemExtensions;
    }());
    exports.ZosaChannelItemExtensions = ZosaChannelItemExtensions;
    var ZosaChannelStreamItemExtensions = (function () {
        function ZosaChannelStreamItemExtensions() {
        }
        ZosaChannelStreamItemExtensions.update = function (channelStream, channel) {
            var extendedChannelStreamItem = channelStream;
            var cPVRPossible = ensureBoolean(channelStream.livePlayAllowed && channelStream.clientPvrSupported && channelStream.clientPvrAllowed);
            var instantRestartAvailable = ensureBoolean(channelStream.livePlayAllowed && channelStream.instantRestartAllowed && channelStream.instantRestartSupported);
            var isIPTVStream = ensureBoolean(!channelStream.transmissionType || channelStream.transmissionType === zosa_static_1.zosaStatic.TRANSMISSION_TYPE_IPTV || channelStream.transmissionType === zosa_static_1.zosaStatic.TRANSMISSION_TYPE_UNKNOWN);
            var livePlayPossible = ensureBoolean(channelStream.livePlayAllowed && channelStream.livePlaySupported);
            var dtExtensions = {
                cPVRPossible: cPVRPossible,
                instantRestartAvailable: instantRestartAvailable,
                isIPTVStream: isIPTVStream,
                livePlayPossible: livePlayPossible
            };
            extendedChannelStreamItem.dtExtensions = dtExtensions;
            return extendedChannelStreamItem;
        };
        return ZosaChannelStreamItemExtensions;
    }());
    var ZosaParentRecordingItemExtensions = (function () {
        function ZosaParentRecordingItemExtensions() {
        }
        ZosaParentRecordingItemExtensions.update = function (parentRecording, channel) {
            var extendedParentRecording = parentRecording;
            var isManualParentRecording = parentRecording.parentType == zosa_static_1.zosaStatic.PARENT_RECORDING_TYPE_PERIODIC;
            var dtExtensions = {
                channel: channel,
                isManualParentRecording: isManualParentRecording
            };
            extendedParentRecording.dtExtensions = dtExtensions;
            extendedParentRecording.$type = "parentRecordingItem";
            return extendedParentRecording;
        };
        return ZosaParentRecordingItemExtensions;
    }());
    exports.ZosaParentRecordingItemExtensions = ZosaParentRecordingItemExtensions;
    var ZosaProgramItemExtensions = (function () {
        function ZosaProgramItemExtensions() {
        }
        ZosaProgramItemExtensions.update = function (program, channel) {
            var extendedProgramItem = program;
            var canCatchUp = false;
            var catchUpItemId;
            if (public_1.Feature.has(public_1.FeatureItems.catchup, public_1.FeatureRights.viewItems)) {
                var catchUpItem = (program.customProps || []).filter(function (value) { return (value.key == zosa_static_1.DTZosaProgramItemCustomProps.relatedVodIds); })[0];
                if (catchUpItem === null || catchUpItem === void 0 ? void 0 : catchUpItem.value) {
                    canCatchUp = true;
                    catchUpItemId = JSON.parse(catchUpItem.value)[0];
                }
            }
            var hasAudioDescription = (program.audioTrackInfo || []).some(function (value) { return (value.audioSupplementary == zosa_static_1.zosaStatic.SUPPLEMENTARY_AUDIO_DESCRIPTION); });
            var isDolby = (program.audioTrackInfo || []).some(function (value) { return (value.audioChannel == zosa_static_1.zosaStatic.AUDIO_CHANNEL_MULTICHANNEL); });
            var isLocked = ensureBoolean(program.isBlocked);
            var isStereo = (program.audioTrackInfo || []).some(function (value) { return (value.audioChannel == zosa_static_1.zosaStatic.AUDIO_CHANNEL_STEREO) || (value.audioChannel == zosa_static_1.zosaStatic.AUDIO_CHANNEL_JOINT_STEREO); });
            var isTvTip = (program.customProps || []).some(function (value) { return (value.key == zosa_static_1.DTZosaProgramItemCustomProps.tipType); });
            var isTwoChannelSound = (program.audioTrackInfo || []).some(function (value) { return (value.audioChannel == zosa_static_1.zosaStatic.AUDIO_CHANNEL_DUAL_MONO); });
            var startTime = program.startTime.valueOf();
            var endTime = program.endTime.valueOf();
            var now = new Date().valueOf();
            var isAiring = startTime <= now && endTime > now;
            var prefix = program.seriesName ? program.seriesName : (program.title ? program.title : "");
            var postfix = program.episodeName;
            var compoundTitle = postfix ? prefix + " - " + postfix : prefix;
            var cover = getImageByType(program.images, [ZosaProgramItemExtensions.IMAGE_TYPE_PROGRAM_COVER_MAIN_WIDE,
                ZosaProgramItemExtensions.IMAGE_TYPE_PROGRAM_COVER_SECONDARY_WIDE,
                ZosaProgramItemExtensions.IMAGE_TYPE_PROGRAM_COVER_MAIN,
                ZosaProgramItemExtensions.IMAGE_TYPE_PROGRAM_CHANNEL_FALLBACK,
                ZosaProgramItemExtensions.IMAGE_TYPE_PROGRAM_BACKGROUND
            ]);
            var ageRating = getAgeRating(program);
            var dtExtensions = {
                ageRating: ageRating,
                canCatchUp: canCatchUp,
                catchUpItemId: catchUpItemId,
                channel: channel,
                compoundTitle: compoundTitle,
                cover: cover,
                hasAudioDescription: hasAudioDescription,
                isDolby: isDolby,
                isLocked: isLocked,
                isStereo: isStereo,
                isTvTip: isTvTip,
                isTwoChannelSound: isTwoChannelSound,
                isAiring: isAiring
            };
            extendedProgramItem.dtExtensions = dtExtensions;
            extendedProgramItem.$type = "programItem";
            return extendedProgramItem;
        };
        ZosaProgramItemExtensions.IMAGE_TYPE_PROGRAM_BACKGROUND = "7";
        ZosaProgramItemExtensions.IMAGE_TYPE_PROGRAM_CHANNEL_FALLBACK = "20";
        ZosaProgramItemExtensions.IMAGE_TYPE_PROGRAM_COVER_MAIN = "1";
        ZosaProgramItemExtensions.IMAGE_TYPE_PROGRAM_COVER_MAIN_WIDE = "17";
        ZosaProgramItemExtensions.IMAGE_TYPE_PROGRAM_COVER_SECONDARY_WIDE = "18";
        return ZosaProgramItemExtensions;
    }());
    exports.ZosaProgramItemExtensions = ZosaProgramItemExtensions;
    var ZosaRecordingItemExtensions = (function () {
        function ZosaRecordingItemExtensions() {
        }
        ZosaRecordingItemExtensions.update = function (recording, program, channel) {
            var showUhd = recording.videoDefinition === zosa_static_1.zosaStatic.VIDEO_DEFINITION_UHD;
            var showHd = !showUhd && (recording.videoDefinition === zosa_static_1.zosaStatic.VIDEO_DEFINITION_HD);
            var showSd = !showHd && !showUhd && (recording.videoDefinition === zosa_static_1.zosaStatic.VIDEO_DEFINITION_SD);
            var recordingState = recording.recordingState;
            var isManualRecording = recording.programId == null || recording.programId == undefined;
            var isActive = (recordingState == zosa_static_1.zosaStatic.RECORDING_STATE_ONGOING) || (recordingState == zosa_static_1.zosaStatic.RECORDING_STATE_SCHEDULED);
            var isActiveSeriesRecording = isActive && (recording.parentRecordingId !== undefined);
            var isActiveRecording = isActive && (recording.parentRecordingId === undefined);
            var isPlayable = (recordingState == zosa_static_1.zosaStatic.RECORDING_STATE_COMPLETE) || (recordingState == zosa_static_1.zosaStatic.RECORDING_STATE_PARTIALLY_COMPLETE) || (recordingState == zosa_static_1.zosaStatic.RECORDING_STATE_ONGOING);
            var isLocked = ensureBoolean(recording.isBlocked);
            var ageRating = recording.minProgramViewingAge != null ? recording.minProgramViewingAge : getAgeRating(recording);
            var unLockAgeRating = getAgeRating(recording);
            var prefix = recording.seriesName ? recording.seriesName : (recording.title ? recording.title : "");
            var postfix = recording.episodeName;
            var compoundTitle = postfix ? prefix + " - " + postfix : prefix;
            var epsiodeInfo = public_1.Guard.isNumber(recording.episodeNumber) ? "E" + recording.episodeNumber : "";
            var seriesInfo = public_1.Guard.isNumber(recording.seasonNumber) ? "S" + recording.seasonNumber : "";
            var episodeAndSeriesInfo = (seriesInfo + epsiodeInfo).length > 0 ? (seriesInfo + (seriesInfo.length > 0 ? " " : "") + epsiodeInfo + " ") : "";
            var extendedEpisodeTitle = recording.episodeName ? "" + episodeAndSeriesInfo + recording.episodeName : "" + episodeAndSeriesInfo + recording.title;
            var programPoster = program ? program.dtExtensions.cover : { serviceProviderImageType: "", url: "" };
            var imageBackground;
            var imageFullHd;
            var imageMiddle;
            var imageSmall;
            if (recording.recordingState === zosa_static_1.zosaStatic.RECORDING_STATE_SCHEDULED) {
                imageFullHd = programPoster;
                imageBackground = programPoster;
                imageMiddle = programPoster;
                imageSmall = programPoster;
            }
            else {
                var oldImagePoster = getImageByType(recording.images, [ZosaRecordingItemExtensions.IMAGE_TYPE_PROGRAM_COVER_MAIN_WIDE, ZosaRecordingItemExtensions.IMAGE_TYPE_PROGRAM_COVER_SECONDARY_WIDE, ZosaRecordingItemExtensions.IMAGE_TYPE_PROGRAM_COVER_MAIN]);
                var localImageFullHd = getImageByType(recording.images, [ZosaRecordingItemExtensions.IMAGE_TYPE_RECORDING_FULLSIZE_HD]);
                var localImageBackground = getImageByType(recording.images, [ZosaRecordingItemExtensions.IMAGE_TYPE_RECORDING_BACKGROUND]);
                var localImageMiddle = getImageByType(recording.images, [ZosaRecordingItemExtensions.IMAGE_TYPE_RECORDING_MIDDLE]);
                var localImageSmall = getImageByType(recording.images, [ZosaRecordingItemExtensions.IMAGE_TYPE_RECORDING_SMALL]);
                imageFullHd = localImageFullHd.url.length > 0 ? localImageFullHd : oldImagePoster.url.length > 0 ? oldImagePoster : programPoster;
                imageBackground = localImageBackground.url.length > 0 ? localImageBackground : oldImagePoster.url.length > 0 ? oldImagePoster : programPoster;
                imageMiddle = localImageMiddle.url.length > 0 ? localImageMiddle : oldImagePoster.url.length > 0 ? oldImagePoster : programPoster;
                imageSmall = localImageSmall.url.length > 0 ? localImageSmall : programPoster;
            }
            var dtExtensions = {
                ageRating: ageRating,
                channel: channel,
                compoundTitle: compoundTitle,
                imageBackground: imageBackground,
                imageFullHd: imageFullHd,
                imageMiddle: imageMiddle,
                imageSmall: imageSmall,
                isActiveRecording: isActiveRecording,
                isActiveSeriesRecording: isActiveSeriesRecording,
                isLocked: isLocked,
                isManualRecording: isManualRecording,
                isPlayable: isPlayable,
                program: program,
                recordingState: recordingState,
                showHd: showHd,
                showSd: showSd,
                showUhd: showUhd,
                unLockAgeRating: unLockAgeRating,
                extendedEpisodeTitle: extendedEpisodeTitle
            };
            var extendedRecording = recording;
            extendedRecording.dtExtensions = dtExtensions;
            extendedRecording.$type = "recordingItem";
            return extendedRecording;
        };
        ZosaRecordingItemExtensions.IMAGE_TYPE_PROGRAM_COVER_MAIN = "1";
        ZosaRecordingItemExtensions.IMAGE_TYPE_PROGRAM_COVER_MAIN_WIDE = "17";
        ZosaRecordingItemExtensions.IMAGE_TYPE_PROGRAM_COVER_SECONDARY_WIDE = "18";
        ZosaRecordingItemExtensions.IMAGE_TYPE_RECORDING_FULLSIZE_HD = "1000";
        ZosaRecordingItemExtensions.IMAGE_TYPE_RECORDING_BACKGROUND = "1001";
        ZosaRecordingItemExtensions.IMAGE_TYPE_RECORDING_MIDDLE = "1002";
        ZosaRecordingItemExtensions.IMAGE_TYPE_RECORDING_SMALL = "1003";
        return ZosaRecordingItemExtensions;
    }());
    exports.ZosaRecordingItemExtensions = ZosaRecordingItemExtensions;
    var ZosaVasItemExtensions = (function () {
        function ZosaVasItemExtensions() {
        }
        ZosaVasItemExtensions.update = function (vasItem) {
            var extendedVasItem = vasItem;
            var ageRating = getAgeRating(vasItem);
            var cover = getImageByType(vasItem.images, [ZosaVasItemExtensions.IMAGE_TYPE_TITLE_IMAGE]);
            var poster = getImageByType(vasItem.images, [ZosaVasItemExtensions.IMAGE_TYPE_POSTER_IMAGE]);
            var isLocked = ensureBoolean(vasItem.isLocked || vasItem.isBlocked);
            var instanceId = vasItem.cmsId ? vasItem.cmsId.toLowerCase().indexOf("netflix") === 0 ? "netflix" : vasItem.cmsId.toLowerCase() : "";
            var cpResolution = getCustomProperty(vasItem.customProps, "RESOLUTION");
            var cpKeyMappingId = getCustomProperty(vasItem.customProps, "KEY_MAPPING_ID");
            var cpManifestName = getCustomProperty(vasItem.customProps, "MANIFEST_NAME");
            var cpDialAppName = getCustomProperty(vasItem.customProps, "DIAL_APP_NAME");
            var cpDialEnabled = getCustomProperty(vasItem.customProps, "DIAL_ENABLE");
            var cpDialAllowStop = getCustomProperty(vasItem.customProps, "DIAL_ALLOW_STOP");
            var cpTurnVideoOff = getCustomProperty(vasItem.customProps, "TURN_VIDEO_OFF");
            var cpShowPrivacyWarning = getCustomProperty(vasItem.customProps, "DATAPRIVACY_WARNING");
            var cpToken = getCustomProperty(vasItem.customProps, "TOKEN_IDENTIFIER");
            var customProperties = {
                dialAllowStop: cpDialAllowStop && !!cpDialAllowStop.value && (cpDialAllowStop.value === "true"),
                dialAppName: cpDialAppName === null || cpDialAppName === void 0 ? void 0 : cpDialAppName.value,
                dialEnabled: cpDialEnabled && !!cpDialEnabled.value && (cpDialEnabled.value === "true"),
                keyMappingId: cpKeyMappingId === null || cpKeyMappingId === void 0 ? void 0 : cpKeyMappingId.value,
                manifestName: cpManifestName === null || cpManifestName === void 0 ? void 0 : cpManifestName.value,
                resolution: cpResolution === null || cpResolution === void 0 ? void 0 : cpResolution.value,
                turnVideoOff: cpTurnVideoOff && !!cpTurnVideoOff.value && (cpTurnVideoOff.value === "true"),
                showAppDataprivacyWarning: cpShowPrivacyWarning && !!cpShowPrivacyWarning.value && (cpShowPrivacyWarning.value === "true"),
                token: cpToken === null || cpToken === void 0 ? void 0 : cpToken.value
            };
            var dtExtensions = {
                ageRating: ageRating,
                cover: cover,
                customProperties: customProperties,
                instanceId: instanceId,
                isLocked: isLocked,
                poster: poster
            };
            extendedVasItem.dtExtensions = dtExtensions;
            extendedVasItem.$type = "vasItem";
            return extendedVasItem;
        };
        ZosaVasItemExtensions.IMAGE_TYPE_POSTER_IMAGE = "1";
        ZosaVasItemExtensions.IMAGE_TYPE_TITLE_IMAGE = "4";
        return ZosaVasItemExtensions;
    }());
    exports.ZosaVasItemExtensions = ZosaVasItemExtensions;
});
//# sourceMappingURL=extensions.js.map