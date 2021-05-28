define(["require", "exports", "../../../translation/public", "src/src-de-telekom-react/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppAssets = void 0;
    var AppAssets = (function () {
        function AppAssets() {
        }
        AppAssets.getAgeRatingDisplayName = function (context, childProtectionRating) {
            switch (childProtectionRating) {
                case "Andere 0":
                case "TOI 0":
                case "NEUTRAL 0": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_0);
                case "Andere 6":
                case "TOI 6":
                case "NEUTRAL 6": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_6);
                case "Andere 12":
                case "TOI 12":
                case "NEUTRAL 12": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_12);
                case "Andere 16":
                case "TOI 16":
                case "NEUTRAL 16":
                case "NEUTRAL 16_PIN": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_16);
                case "Andere 18":
                case "TOI 18":
                case "NEUTRAL 18":
                case "NEUTRAL 18_EL": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_18);
                case "FSK 0": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_FSK_0);
                case "FSK 6": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_FSK_6);
                case "FSK 12": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_FSK_12);
                case "FSK 16":
                case "FSK 16_PIN": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_FSK_16);
                case "FSK 18_Alt":
                case "FSK 18":
                case "FSK 18_Neu": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_FSK_18);
                case "FSF 0": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_FSF_0);
                case "FSF 6": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_FSF_6);
                case "FSF 12": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_FSF_12);
                case "FSF 16": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_FSF_16);
                case "FSF 18": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_FSF_18);
                case "OAF":
                case "FSK OAF":
                case "FSF OAF":
                case "Andere oaf": return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_OAF);
                case "Unbekannt":
                default: return public_2.Filter.message(context, public_1.messagesVod.ChildProtectionDisplayName_Unknown);
            }
        };
        return AppAssets;
    }());
    exports.AppAssets = AppAssets;
});
//# sourceMappingURL=app_assets.js.map