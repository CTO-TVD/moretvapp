define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FeatureItemStructure = exports.FeatureItems = void 0;
    var FeatureItems;
    (function (FeatureItems) {
        FeatureItems[FeatureItems["root"] = 0] = "root";
        FeatureItems[FeatureItems["app"] = 1] = "app";
        FeatureItems[FeatureItems["recording"] = 2] = "recording";
        FeatureItems[FeatureItems["clientpvr"] = 3] = "clientpvr";
        FeatureItems[FeatureItems["mixedpvr"] = 4] = "mixedpvr";
        FeatureItems[FeatureItems["timeshift"] = 5] = "timeshift";
        FeatureItems[FeatureItems["hardware"] = 6] = "hardware";
        FeatureItems[FeatureItems["hdd"] = 7] = "hdd";
        FeatureItems[FeatureItems["bluetooth"] = 8] = "bluetooth";
        FeatureItems[FeatureItems["extendedpowermanagement"] = 9] = "extendedpowermanagement";
        FeatureItems[FeatureItems["longpress"] = 10] = "longpress";
        FeatureItems[FeatureItems["fullremote"] = 11] = "fullremote";
        FeatureItems[FeatureItems["voiceKeySupport"] = 12] = "voiceKeySupport";
        FeatureItems[FeatureItems["multiroom"] = 13] = "multiroom";
        FeatureItems[FeatureItems["apps"] = 14] = "apps";
        FeatureItems[FeatureItems["usb"] = 15] = "usb";
        FeatureItems[FeatureItems["media"] = 16] = "media";
        FeatureItems[FeatureItems["video"] = 17] = "video";
        FeatureItems[FeatureItems["pip"] = 18] = "pip";
        FeatureItems[FeatureItems["streamuhd"] = 19] = "streamuhd";
        FeatureItems[FeatureItems["content"] = 20] = "content";
        FeatureItems[FeatureItems["avscontent"] = 21] = "avscontent";
        FeatureItems[FeatureItems["blockedcontent"] = 22] = "blockedcontent";
        FeatureItems[FeatureItems["videoondemand"] = 23] = "videoondemand";
        FeatureItems[FeatureItems["vodDeleteLicence"] = 24] = "vodDeleteLicence";
        FeatureItems[FeatureItems["vodBingeWatchImprovement"] = 25] = "vodBingeWatchImprovement";
        FeatureItems[FeatureItems["moretv"] = 26] = "moretv";
        FeatureItems[FeatureItems["moreTvRelatedPackages"] = 27] = "moreTvRelatedPackages";
        FeatureItems[FeatureItems["moreTvMySubscriptionsVendors"] = 28] = "moreTvMySubscriptionsVendors";
        FeatureItems[FeatureItems["moreTvMySubscriptionsPackages"] = 29] = "moreTvMySubscriptionsPackages";
        FeatureItems[FeatureItems["moreTvMagentaHaus"] = 30] = "moreTvMagentaHaus";
        FeatureItems[FeatureItems["moreTvUX20"] = 31] = "moreTvUX20";
        FeatureItems[FeatureItems["catchup"] = 32] = "catchup";
        FeatureItems[FeatureItems["services"] = 33] = "services";
        FeatureItems[FeatureItems["softwareupdate"] = 34] = "softwareupdate";
        FeatureItems[FeatureItems["streamconflict"] = 35] = "streamconflict";
        FeatureItems[FeatureItems["resourceconflict"] = 36] = "resourceconflict";
        FeatureItems[FeatureItems["satellite"] = 37] = "satellite";
        FeatureItems[FeatureItems["satellitesubscriber"] = 38] = "satellitesubscriber";
        FeatureItems[FeatureItems["extendedui"] = 39] = "extendedui";
        FeatureItems[FeatureItems["useshortcuts"] = 40] = "useshortcuts";
        FeatureItems[FeatureItems["searchNetflix"] = 41] = "searchNetflix";
        FeatureItems[FeatureItems["searchYoutube"] = 42] = "searchYoutube";
        FeatureItems[FeatureItems["seriesRecordingNewOverlay"] = 43] = "seriesRecordingNewOverlay";
        FeatureItems[FeatureItems["demoarea"] = 44] = "demoarea";
        FeatureItems[FeatureItems["remoteMessage"] = 45] = "remoteMessage";
        FeatureItems[FeatureItems["remoteMessageGroupSearch"] = 46] = "remoteMessageGroupSearch";
        FeatureItems[FeatureItems["uacALA"] = 47] = "uacALA";
    })(FeatureItems = exports.FeatureItems || (exports.FeatureItems = {}));
    var FeatureItemStructure = (function () {
        function FeatureItemStructure() {
        }
        FeatureItemStructure.structure = [
            {
                item: FeatureItems.app,
                parent: FeatureItems.root
            },
            {
                item: FeatureItems.recording,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.mixedpvr,
                parent: FeatureItems.recording
            },
            {
                item: FeatureItems.clientpvr,
                parent: FeatureItems.recording
            },
            {
                item: FeatureItems.timeshift,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.hardware,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.hdd,
                parent: FeatureItems.hardware
            },
            {
                item: FeatureItems.bluetooth,
                parent: FeatureItems.hardware
            },
            {
                item: FeatureItems.extendedpowermanagement,
                parent: FeatureItems.hardware
            },
            {
                item: FeatureItems.longpress,
                parent: FeatureItems.hardware
            },
            {
                item: FeatureItems.fullremote,
                parent: FeatureItems.hardware
            },
            {
                item: FeatureItems.voiceKeySupport,
                parent: FeatureItems.hardware
            },
            {
                item: FeatureItems.multiroom,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.apps,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.usb,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.media,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.video,
                parent: FeatureItems.media
            },
            {
                item: FeatureItems.pip,
                parent: FeatureItems.video
            },
            {
                item: FeatureItems.streamuhd,
                parent: FeatureItems.video
            },
            {
                item: FeatureItems.content,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.avscontent,
                parent: FeatureItems.content
            },
            {
                item: FeatureItems.blockedcontent,
                parent: FeatureItems.content
            },
            {
                item: FeatureItems.videoondemand,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.vodDeleteLicence,
                parent: FeatureItems.videoondemand
            },
            {
                item: FeatureItems.vodBingeWatchImprovement,
                parent: FeatureItems.videoondemand
            },
            {
                item: FeatureItems.moretv,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.moreTvMySubscriptionsPackages,
                parent: FeatureItems.moretv
            },
            {
                item: FeatureItems.moreTvMySubscriptionsVendors,
                parent: FeatureItems.moretv
            },
            {
                item: FeatureItems.moreTvRelatedPackages,
                parent: FeatureItems.moretv
            },
            {
                item: FeatureItems.moreTvMagentaHaus,
                parent: FeatureItems.moretv
            },
            {
                item: FeatureItems.moreTvUX20,
                parent: FeatureItems.moretv
            },
            {
                item: FeatureItems.catchup,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.services,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.softwareupdate,
                parent: FeatureItems.services
            },
            {
                item: FeatureItems.streamconflict,
                parent: FeatureItems.services
            },
            {
                item: FeatureItems.resourceconflict,
                parent: FeatureItems.services
            },
            {
                item: FeatureItems.satellite,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.satellitesubscriber,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.extendedui,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.useshortcuts,
                parent: FeatureItems.extendedui
            },
            {
                item: FeatureItems.searchNetflix,
                parent: FeatureItems.extendedui
            },
            {
                item: FeatureItems.searchYoutube,
                parent: FeatureItems.extendedui
            },
            {
                item: FeatureItems.seriesRecordingNewOverlay,
                parent: FeatureItems.extendedui
            },
            {
                item: FeatureItems.demoarea,
                parent: FeatureItems.extendedui
            },
            {
                item: FeatureItems.remoteMessage,
                parent: FeatureItems.app
            },
            {
                item: FeatureItems.remoteMessageGroupSearch,
                parent: FeatureItems.remoteMessage
            },
            {
                item: FeatureItems.uacALA,
                parent: FeatureItems.app
            }
        ];
        return FeatureItemStructure;
    }());
    exports.FeatureItemStructure = FeatureItemStructure;
});
//# sourceMappingURL=feature.items.js.map