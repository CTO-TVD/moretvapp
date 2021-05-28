var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "react", "bluebird", "src/src-de-telekom/public", "./util", "src/src-de-telekom-app-tv-core-v2/public", "src/src-de-telekom-style/public"], function (require, exports, React, bluebird, public_1, util, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvPackageStageUtil = void 0;
    var MtvPackageStageUtil = (function () {
        function MtvPackageStageUtil() {
        }
        MtvPackageStageUtil.loadAssetPreviewData = function (_a) {
            var pk = _a.pk, prioImage = _a.prioImage, auth = _a.auth, scaleImageCb = _a.scaleImageCb;
            var meta = public_2.MetaDataFormatter.createMetalineObjectForMtvPackage({ packet: pk });
            var previewData = {
                logos: pk.Logo ? [pk.Logo] : undefined,
                title: pk.Title,
                detailRef: undefined,
                image: undefined,
                description: pk.ShortDescription,
                isSpecial: prioImage != undefined,
                metaline: function () { return React.createElement(public_2.MetadataAggregator, { data: meta }); },
                metalineShort: function () { return React.createElement(public_2.MetadataAggregator, { data: meta, hideBadge: true }); }
            };
            var url = scaleImageCb ? scaleImageCb(prioImage || pk.Image)
                : prioImage || pk.Image ? public_1.ImageScale.rescale(prioImage || pk.Image, { y: public_3.Css.dimensions.SceneImageHeight, x: public_3.Css.dimensions.SceneImageWidth, ar: "ignore", out: "jpeg" }) : public_3.Css.images.inlineTransparentPixel;
            return bluebird
                .all([previewData, util.loadImage(url)])
                .then(function (_a) {
                var data = _a[0], image = _a[1];
                data.image = image;
                return data;
            });
        };
        MtvPackageStageUtil.classID = 0x811;
        MtvPackageStageUtil = __decorate([
            public_1.logTag()
        ], MtvPackageStageUtil);
        return MtvPackageStageUtil;
    }());
    exports.MtvPackageStageUtil = MtvPackageStageUtil;
});
//# sourceMappingURL=mtv_packagestage.js.map