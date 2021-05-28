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
define(["require", "exports", "./preview.component", "./offer.component", "./description.component", "./channelgrid.component", "./channeldetails.component", "./tvpackages.component", "./channelgrid.base"], function (require, exports, preview_component_1, offer_component_1, description_component_1, channelgrid_component_1, channeldetails_component_1, tvpackages_component_1, channelgrid_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvDetailpageComponent = void 0;
    __exportStar(channelgrid_base_1, exports);
    var MtvDetailpageComponent;
    (function (MtvDetailpageComponent) {
        MtvDetailpageComponent.DetailPreview = preview_component_1.MtvDetailPreviewComponent;
        MtvDetailpageComponent.DetailOffer = offer_component_1.MtvDetailOfferComponent;
        MtvDetailpageComponent.DetailDescription = description_component_1.MtvDetailDescriptionComponent;
        MtvDetailpageComponent.DetailChannelgrid = channelgrid_component_1.MtvDetailChannelgridComponent;
        MtvDetailpageComponent.ChannelDetails = channeldetails_component_1.MtvChannelDetailComponent;
        MtvDetailpageComponent.TVPackages = tvpackages_component_1.MtvTvPackagesComponent;
    })(MtvDetailpageComponent = exports.MtvDetailpageComponent || (exports.MtvDetailpageComponent = {}));
});
//# sourceMappingURL=public.js.map