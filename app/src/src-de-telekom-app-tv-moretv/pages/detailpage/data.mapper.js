var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "underscore", "src/src-de-telekom/public", "src/src-de-telekom-react/public", "../../translation/public", "../../behavior/public"], function (require, exports, _, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvDetailPageDataMapper = void 0;
    var MtvDetailPageDataMapper = (function () {
        function MtvDetailPageDataMapper() {
        }
        MtvDetailPageDataMapper_1 = MtvDetailPageDataMapper;
        MtvDetailPageDataMapper.mapChannels = function (context, asset, packages, catalog, packageId) {
            var list = [];
            if (asset === null || asset === void 0 ? void 0 : asset.channels) {
                var _loop_1 = function (channel) {
                    if (!(_.find(list, function (ch) { return ch.id === channel.ID; }))) {
                        list.push(MtvDetailPageDataMapper_1.convertChannels(context, channel, packages, catalog, list.length, asset, packageId));
                    }
                };
                for (var _i = 0, _a = asset.channels; _i < _a.length; _i++) {
                    var channel = _a[_i];
                    _loop_1(channel);
                }
            }
            return list;
        };
        MtvDetailPageDataMapper.mapRows = function (context, asset, packages, catalog, packageId) {
            var list = [];
            if (asset === null || asset === void 0 ? void 0 : asset.rows) {
                for (var _i = 0, _a = asset.rows; _i < _a.length; _i++) {
                    var row = _a[_i];
                    list.push(MtvDetailPageDataMapper_1.convertRows(context, row, packages, catalog, list.length, asset, packageId));
                }
            }
            return list;
        };
        MtvDetailPageDataMapper.convertRows = function (context, rows, packages, catalog, idx, asset, packageId) {
            var list = [];
            var _loop_2 = function (channels) {
                if (!(_.find(list, function (ch) { return ch.id === channels.ID; }))) {
                    var channel = __assign({ index: list.length, id: channels ? channels.ID : undefined, image: channels ? channels.Logo : undefined, title: channels ? channels.Title : undefined, disableImageScaling: (channels === null || channels === void 0 ? void 0 : channels.Logo) ? true : false, description: channels ? channels.ShortDescription : undefined }, public_4.MtvChannelNavigatableBehavior({ packages: packages, catalogs: catalog, behavior: {}, component: context, index: list.length, row: idx, asset: asset, packageId: packageId }));
                    list.push(channel);
                }
            };
            for (var _i = 0, _a = rows.items; _i < _a.length; _i++) {
                var channels = _a[_i];
                _loop_2(channels);
            }
            var row = {
                index: idx,
                title: rows ? rows.title : undefined,
                channels: list.map(function (it, x) { return ({ index: x, data: it }); })
            };
            return row;
        };
        MtvDetailPageDataMapper.convertChannels = function (context, channels, packages, catalog, index, asset, packageId) {
            var channel = __assign({ index: index, id: channels ? channels.ID : undefined, image: channels ? channels.Logo : undefined, title: channels ? channels.Title : undefined, disableImageScaling: (channels === null || channels === void 0 ? void 0 : channels.Logo) ? true : false, description: channels ? channels.ShortDescription : undefined }, public_4.MtvChannelNavigatableBehavior({ packages: packages, catalogs: catalog, behavior: {}, component: context, index: index, asset: asset, packageId: packageId }));
            return channel;
        };
        MtvDetailPageDataMapper.mapInfoTable = function (context, pk) {
            var _a, _b;
            var result = [];
            if ((_a = pk.PriceInfo) === null || _a === void 0 ? void 0 : _a.PriceInfoShort) {
                result.push({
                    key: public_2.Filter.message(context, public_3.messagesVod.STB_VD_TI030),
                    value: public_2.Filter.message(context, pk.PriceInfo.PriceInfoShort)
                });
            }
            if ((_b = pk.PriceInfo) === null || _b === void 0 ? void 0 : _b.PriceInfoLong) {
                result.push({
                    key: public_2.Filter.message(context, public_3.messagesVod.STB_VD_TI030),
                    value: public_2.Filter.message(context, pk.PriceInfo.PriceInfoLong)
                });
            }
            if (pk.ContractDuration) {
                result.push({
                    key: "Mindestvertragslaufzeit",
                    value: public_2.Filter.message(context, pk.ContractDuration)
                });
            }
            return result;
        };
        MtvDetailPageDataMapper.mapOffersMetadata = function (context, pk) {
            var parentLink;
            var parentButtonCaptionKey;
            var offers = {
                title: pk.Title
            };
            var secondary = {
                parentButtonTitle: public_2.Filter.message(context, parentButtonCaptionKey),
                parentLink: parentLink,
                broadcasts: [],
                trailersLink: [],
                marked: false,
                tagLinkAdd: undefined,
                tagLinkRemove: undefined,
                hasMoreInfo: pk.Description != undefined && pk.Description.length > 0,
                deleteLicenceTitle: undefined
            };
            if (pk.TrailerUrl) {
                secondary.trailersLink = [pk.TrailerUrl];
            }
            secondary.tagLinkAdd = undefined;
            secondary.tagLinkRemove = undefined;
            return { meta: offers, secondaryActions: secondary };
        };
        var MtvDetailPageDataMapper_1;
        MtvDetailPageDataMapper.classID = 0x805;
        MtvDetailPageDataMapper = MtvDetailPageDataMapper_1 = __decorate([
            public_1.logTag()
        ], MtvDetailPageDataMapper);
        return MtvDetailPageDataMapper;
    }());
    exports.MtvDetailPageDataMapper = MtvDetailPageDataMapper;
});
//# sourceMappingURL=data.mapper.js.map