define(["require", "exports", "./broadcasttime.component", "./cast.component", "./caststage.component", "./onefitsall.component", "./vod.component", "./functional.component"], function (require, exports, broadcasttime_component_1, cast_component_1, caststage_component_1, onefitsall_component_1, vod_component_1, functional_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContentTiles = void 0;
    var ContentTiles;
    (function (ContentTiles) {
        ContentTiles.Vod = vod_component_1.ContentTileVodComponent;
        ContentTiles.BroadcastingTime = broadcasttime_component_1.ContentTileBroadcastTimeComponent;
        ContentTiles.OFA = onefitsall_component_1.OfaTile;
        ContentTiles.OFAStyle = onefitsall_component_1.ContentTileOneFitsAllStyle;
        ContentTiles.Cast = cast_component_1.ContentTileCastComponent;
        ContentTiles.CastStage = caststage_component_1.ContentTileCastStageComponent;
        ContentTiles.FunctionalTile = functional_component_1.FunctionalTileComponent;
    })(ContentTiles = exports.ContentTiles || (exports.ContentTiles = {}));
});
//# sourceMappingURL=public.js.map