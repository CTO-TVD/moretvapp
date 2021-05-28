define(["require", "exports", "./tile16x9.component", "./tilechannel.component", "./sky_tile.component"], function (require, exports, tile16x9_component_1, tilechannel_component_1, sky_tile_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContentMtvTiles = void 0;
    var ContentMtvTiles;
    (function (ContentMtvTiles) {
        ContentMtvTiles.Tile16x9 = tile16x9_component_1.ContentTile16x9Component;
        ContentMtvTiles.TileChannel = tilechannel_component_1.ContentTileChannelComponent;
        ContentMtvTiles.SkyTile = sky_tile_component_1.DttvComponent16x9MtvSkyComponent;
    })(ContentMtvTiles = exports.ContentMtvTiles || (exports.ContentMtvTiles = {}));
});
//# sourceMappingURL=public.js.map