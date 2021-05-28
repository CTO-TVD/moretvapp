define(["require", "exports", "./catalog.component", "./stage_multiline.component", "./info.component", "./cast_header.component", "./textblock", "./two_columns.component", "./catalog_meta.component", "./minipreview.component", "./headerandtext.component", "./miniplayerltv.component", "./miniplayervod.component"], function (require, exports, catalog_component_1, stage_multiline_component_1, info_component_1, cast_header_component_1, textblock_1, two_columns_component_1, catalog_meta_component_1, minipreview_component_1, headerandtext_component_1, miniplayerltv_component_1, miniplayervod_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Paragraphs = void 0;
    var Paragraphs;
    (function (Paragraphs) {
        Paragraphs.CatalogMeta = catalog_meta_component_1.ParagraphCatalogMetaComponent;
        Paragraphs.TwoColumns = two_columns_component_1.ParagraphTwoColumnComponent;
        Paragraphs.CatalogNoMetadata = catalog_component_1.ParagraphCatalogNoMetadataComponent;
        Paragraphs.HeaderAndText = headerandtext_component_1.ParagraphHeaderAndTextComponent;
        Paragraphs.CastHeader = cast_header_component_1.ParagraphCastHeaderComponent;
        Paragraphs.Info = info_component_1.ParagraphInfoComponent;
        Paragraphs.Standard = textblock_1.ParagraphClass;
        Paragraphs.MiniPreview = minipreview_component_1.MiniPreviewComponent;
        Paragraphs.MiniPlayerLTV = miniplayerltv_component_1.ParagraphMiniPlayerLTVComponent;
        Paragraphs.MiniPlayerVOD = miniplayervod_component_1.ParagraphMiniPlayerVODComponent;
        Paragraphs.StageMultiLine = stage_multiline_component_1.ParagraphStageMultiLineComponent;
    })(Paragraphs = exports.Paragraphs || (exports.Paragraphs = {}));
});
//# sourceMappingURL=public.js.map