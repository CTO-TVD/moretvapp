var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define(["require", "exports", "./configuration", "./configuration.interface", "./configurationJSON", "./feature", "./feature.rights", "./feature.items"], function (require, exports, configuration_1, configuration_interface_1, configurationJSON_1, feature_1, feature_rights_1, feature_items_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FeatureItems = exports.FeatureRights = void 0;
    __exportStar(configuration_1, exports);
    __exportStar(configuration_interface_1, exports);
    __exportStar(configurationJSON_1, exports);
    __exportStar(feature_1, exports);
    Object.defineProperty(exports, "FeatureRights", { enumerable: true, get: function () { return feature_rights_1.FeatureRights; } });
    Object.defineProperty(exports, "FeatureItems", { enumerable: true, get: function () { return feature_items_1.FeatureItems; } });
});
//# sourceMappingURL=public.js.map