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
define(["require", "exports", "bluebird", "src/src-de-telekom-tv-moretv/public", "underscore", "../util/public", "src/src-de-telekom/public"], function (require, exports, bluebird, mtv, _, util, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SkyCatalogDataLoader = void 0;
    var SkyCatalogDataLoader = (function () {
        function SkyCatalogDataLoader() {
        }
        SkyCatalogDataLoader.loadData = function () {
            var result = { rows: [] };
            return mtv.ApplicationClient
                .getCatalog(mtv.ApplicationClient.PROVIDER_SKY)
                .then(function (cat) {
                if (!cat) {
                    throw new public_1.IllegalArgumentError("no catalog could be loaded");
                }
                result.title = cat.Title;
                result = __assign(__assign({}, result), util.convertMtvThemepack(cat));
                if (cat.CustomImages !== undefined && !_.isEmpty(cat.CustomImages.BannerImage)) {
                    result.teaser = {
                        image: cat.CustomImages.BannerImage,
                        title: cat.CustomValues ? cat.CustomValues.BannerTitle : undefined,
                        subtitle: cat.CustomValues ? cat.CustomValues.BannerSubtitle : undefined,
                        price: undefined,
                        period: undefined,
                        packageRef: cat.PrimePackage,
                        termsOfUse: undefined,
                        termsOfUseType: undefined,
                    };
                }
                else {
                    result.teaser = undefined;
                }
                return cat;
            })
                .then(function (cat) {
                return mtv.ApplicationClient
                    .getGroupAndPacketsByCatalog(cat);
            })
                .then(function (groups) {
                if (!groups) {
                    throw new public_1.IllegalArgumentError("no catalog groups/packets could be loaded");
                }
                for (var gi = 0; gi < groups.length; gi++) {
                    var g = groups[gi];
                    var showAll = g.Packages.length > 4;
                    var rawItems = g.Packages.slice(0, showAll ? 3 : 4);
                    var items = _.map(rawItems, function (p, i) {
                        var _a;
                        var subtitle;
                        if (p.PriceInfo) {
                            subtitle = p.PriceInfo.Period
                                ? p.PriceInfo.Period + " " + p.PriceInfo.Price
                                : "" + p.PriceInfo.Price;
                        }
                        if (subtitle && subtitle.length > 0) {
                            subtitle = subtitle.charAt(0).toUpperCase() + subtitle.slice(1);
                        }
                        var result = {
                            title: p.Title,
                            image: p.Image,
                            subtitle: subtitle,
                            meta: public_1.Guard.isNumber(p.ChannelCount) && p.ChannelCount > 0 ? "(" + p.ChannelCount + ")" : "",
                            detailRef: p.ID,
                            termsOfUse: p.TermsOfUse,
                            termsOfUseType: ((_a = p.PriceInfo) === null || _a === void 0 ? void 0 : _a.Price) && p.PriceInfo.Price.indexOf("*") >= 0 ? "*info" : "info"
                        };
                        return result;
                    });
                    if (showAll) {
                        items.push({
                            more: true,
                            termsOfUse: undefined,
                            termsOfUseType: undefined,
                            detailRef: undefined,
                            image: undefined,
                            meta: undefined,
                            subtitle: undefined,
                            title: undefined
                        });
                    }
                    if (!result.rows) {
                        result.rows = [];
                    }
                    result.rows[gi] = {
                        index: gi,
                        title: g.Title,
                        items: items,
                        totalCount: g.Packages.length
                    };
                }
            })
                .then(function () {
                var _a;
                if (!!((_a = result === null || result === void 0 ? void 0 : result.teaser) === null || _a === void 0 ? void 0 : _a.packageRef)) {
                    return mtv.ApplicationClient
                        .getPackage(result.teaser.packageRef);
                }
                else {
                    return bluebird.resolve(null);
                }
            })
                .then(function (p) {
                var _a;
                if (!p) {
                    return result;
                }
                if (result === null || result === void 0 ? void 0 : result.teaser) {
                    result.teaser.packageRef = p.ID;
                    result.teaser.termsOfUse = p.TermsOfUse;
                    result.teaser.termsOfUseType = ((_a = p.PriceInfo) === null || _a === void 0 ? void 0 : _a.Price) && p.PriceInfo.Price.indexOf("*") >= 0 ? "*info" : "info";
                }
                return result;
            });
        };
        SkyCatalogDataLoader.loadGroup = function (provider, group) {
            var result = { rows: [], total: 0 };
            return mtv.ApplicationClient
                .getCatalog(provider)
                .then(function (cat) {
                if (!cat) {
                    throw new public_1.IllegalArgumentError("no catalog could be loaded");
                }
                result = __assign(__assign({}, result), util.convertMtvThemepack(cat));
                return cat;
            })
                .then(function (cat) {
                return mtv.ApplicationClient
                    .getGroupAndPacketsByCatalog(cat);
            })
                .then(function (groups) {
                if (groups) {
                    var gs = groups.filter(function (g) { return g.Title === group; });
                    if (!gs || gs.length === 0 || !gs[0] || !gs[0].Packages) {
                        return undefined;
                    }
                    var sourcelist = _.map(gs[0].Packages, function (packagae, i) {
                        var _a;
                        var subtitle;
                        if (packagae.PriceInfo) {
                            subtitle = packagae.PriceInfo.Period
                                ? packagae.PriceInfo.Period + " " + packagae.PriceInfo.Price
                                : "" + packagae.PriceInfo.Price;
                        }
                        var result = {
                            focusid: ~~(i / 4) + "+" + i % 4,
                            index: i + 1,
                            title: packagae.Title,
                            image: packagae.Image,
                            subtitle: subtitle,
                            meta: (packagae.ChannelCount && packagae.ChannelCount > 0) ? "(" + packagae.ChannelCount + ")" : "",
                            detailRef: packagae.ID,
                            termsOfUse: packagae.TermsOfUse,
                            termsOfUseType: ((_a = packagae.PriceInfo) === null || _a === void 0 ? void 0 : _a.Price) && packagae.PriceInfo.Price.indexOf("*") >= 0 ? "*info" : "info"
                        };
                        return result;
                    });
                    result.total = sourcelist.length;
                    if (result.rows) {
                        for (var i = 0, j = 0; i < sourcelist.length; i += 4, j++) {
                            result.rows[j] = {
                                index: j,
                                items: sourcelist.slice(i, i + 4),
                                totalCount: undefined
                            };
                        }
                    }
                }
                return result;
            });
        };
        return SkyCatalogDataLoader;
    }());
    exports.SkyCatalogDataLoader = SkyCatalogDataLoader;
});
//# sourceMappingURL=sky_data.loader.js.map