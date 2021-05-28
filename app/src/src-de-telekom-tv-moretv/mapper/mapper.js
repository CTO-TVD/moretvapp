define(["require", "exports", "underscore"], function (require, exports, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mapper = void 0;
    var Mapper = (function () {
        function Mapper() {
        }
        Mapper.parseCatalogs = function (catalogs) {
            return _.map(catalogs, function (it) {
                return Mapper.parseCatalog(it);
            });
        };
        Mapper.parseCatalog = function (it) {
            return {
                ContentProvider: it.contentProvider,
                Title: it.title,
                Image: it.image,
                Backimage: it.backimage,
                Logo: it.logo,
                PrimePackage: it.primePackage,
                TermsOfUse: it.termsOfUse,
                PaymentInfo: it.paymentInfo,
                MarketingPermission: it.marketingPermission,
                Cover: Mapper.parseCover(it.cover),
                CoverSubscribed: Mapper.parseCover(it.cover_subscribed),
                CustomValues: Mapper.parseCatalogCustomValues(it.customValues),
                CustomImages: Mapper.parseCatalogCustomImages(it.customImages),
                DisplayGroups: it.displaygroups
                    ? _.map(it.displaygroups, function (d) {
                        return {
                            Title: d.title,
                            Packages: d.packages
                                ? d.packages.slice(0)
                                : []
                        };
                    })
                    : []
            };
        };
        Mapper.parseCover = function (it) {
            if (!it) {
                return undefined;
            }
            var r = {
                Title: it.title,
                Subtitle: it.subtitle,
                Image: it.image
            };
            return r;
        };
        Mapper.parseCatalogCustomValues = function (c) {
            if (!c) {
                return {};
            }
            return {
                BannerSubtitle: c.banner_Subtitle,
                BannerTitle: c.banner_Title,
                Description: c.description,
                Hotline: c.hotline,
                Subtitle: c.subtitle,
                wlButtonWithFocusColor: c.wlButtonWithFocusColor,
                wlFocusOutlineColor: c.wlFocusOutlineColor,
                wlTextColor: c.wlTextColor,
                wlTextOthersColor: c.wlTextOthersColor,
                wlLineOthersColor: c.wlLineOthersColor,
                wlOPTColor: c.wlOPTColor,
                wlCategoryFocusColor: c.wlCategoryFocusColor
            };
        };
        Mapper.parseCatalogCustomImages = function (c) {
            if (!c) {
                return {};
            }
            var r = {
                wlBackgroundImage: c.wlBackgroundImage,
                wlLogo: c.wlLogo,
                BannerImage: c.banner_Image
            };
            return r;
        };
        Mapper.parsePackages = function (packages) {
            return _.map(packages, function (p) {
                return Mapper.parsePackage(p);
            });
        };
        Mapper.parsePackage = function (p) {
            if (!p) {
                return undefined;
            }
            var channelCount = 0;
            var uniqueChannels = [];
            if (p.channelGroups) {
                _.each(p.channelGroups, function (g) {
                    if (g.channels) {
                        _.each(g.channels, function (c) {
                            if (uniqueChannels.indexOf(c) < 0) {
                                uniqueChannels.push(c);
                                channelCount++;
                            }
                        });
                    }
                });
            }
            return {
                ID: p.id || "",
                ContentProvider: p.contentProvider || "",
                Title: p.title,
                Subtitle: p.subTitle,
                Image: p.image,
                Logo: p.logo,
                TrailerUrl: p.trailerUrl,
                Description: p.descr,
                ShortDescription: p.shortdescr,
                Features: p.features,
                ContractDuration: p.contractDuration,
                TermsOfUse: p.termsOfUse,
                PriceInfo: p.priceInfo ? Mapper.paresPriceInfo(p.priceInfo) : undefined,
                CustomValues: p.customValues && Mapper.parsePackagCustomValues(p.customValues),
                ChannelGroups: p.channelGroups
                    ? _.map(p.channelGroups, function (c) {
                        return {
                            Title: c.title,
                            Channels: c.channels
                                ? c.channels.slice(0)
                                : []
                        };
                    })
                    : [],
                ChannelCount: channelCount
            };
        };
        Mapper.paresPriceInfo = function (p) {
            var r = {
                Period: p.period,
                Price: p.price,
                PriceInfoLong: p.priceInfoLong,
                PriceInfoShort: p.priceInfoShort
            };
            return r;
        };
        Mapper.parsePackagCustomValues = function (p) {
            var r = {
                ActivationFee: p.activationFee,
                ContractTerms: p.contractTerms,
                InfoText: p.infotext,
                IsHD: p.hdFlag === "HD",
                MinimumContractPeriod: p.minimumContractPeriod,
                OptionalServiceCodes: p.optionalServiceCodes,
                SmallPrint: p.smallPrint,
                ShortTitle: p.shortTitle,
                MySubscriptionsPromotion: p.mySubscriptionsPromotion,
                MhProductOfferingId: p.magentaHaus_ProductOfferingID
            };
            if (p.dataTransfer_opt1_title) {
                r.DataTransfer = {
                    Opt1: {
                        Text: p.dataTransfer_opt1_text,
                        Title: p.dataTransfer_opt1_title
                    },
                    Opt2: p.dataTransfer_opt2_title ? {
                        Title: p.dataTransfer_opt2_title,
                        Text: p.dataTransfer_opt2_text
                    } : undefined,
                    Text: p.dataTransfer_text,
                    Title: p.dataTransfer_title
                };
            }
            if (p.partner_opt1_title) {
                r.Partner = {
                    Opt1: {
                        Text: p.partner_opt1_text,
                        Title: p.partner_opt1_title
                    },
                    Opt2: p.partner_opt2_title ? {
                        Title: p.partner_opt2_title,
                        Text: p.partner_opt2_text
                    } : undefined,
                    Text: p.partner_text,
                    Title: p.partner_title
                };
            }
            if (p.tou_opt1_title) {
                r.TermsOfUse = {
                    Opt1: {
                        Text: p.tou_opt1_text,
                        Title: p.tou_opt1_title
                    },
                    Opt2: p.tou_opt2_title ? {
                        Title: p.tou_opt2_title,
                        Text: p.tou_opt2_text
                    } : undefined,
                    Text: p.tou_text,
                    Title: p.tou_title
                };
            }
            return r;
        };
        Mapper.parseChannels = function (cs) {
            return _.map(cs, function (c) {
                return Mapper.parseChannel(c);
            });
        };
        Mapper.parseChannel = function (i) {
            return {
                ContentProvider: i.contentProvider || "",
                Description: i.description,
                HD: i.hd,
                ID: i.id || "",
                Image: i.image,
                Logo: i.logo,
                SD: i.sd,
                ShortDescription: i.shortDescription,
                Title: i.title
            };
        };
        Mapper.parseTermsOfUses = function (cs) {
            return _.map(cs, function (c) {
                return Mapper.parseTermsOfUse(c);
            });
        };
        Mapper.parseTermsOfUse = function (i) {
            return {
                Content: i.content,
                ContentProvider: i.contentProvider || "",
                ID: i.id || "",
                Title: i.title
            };
        };
        Mapper.parsePrepareBooking = function (i, s) {
            return {
                State: i.state,
                Errorcode: i.errorcode,
                ErrorcodeDetail: i.errorcodedetail,
                TransactionId: i.transactionId,
                EmailAddress: i.confirmationemailaddress,
                Pricepermonth: i.pricepermonth,
                StatusCode: i.statuscode,
                HttpStatusCode: s
            };
        };
        Mapper.parseCustomerData = function (i, s) {
            return {
                Salutation: i.salutation,
                FamilyName: i.familyName,
                FirstName: i.firstName,
                Street: i.street,
                HouseNo: i.houseNo,
                PostalCode: i.postalCode,
                City: i.city,
                Addition: i.addition,
                Phone: i.phone,
                Email: i.email,
                DateOfBirth: i.dateOfBirth,
                Iban: i.iban,
                Bic: i.bic,
                BankAccountFamilyName: i.bankAccountFamilyName,
                BankAccountFirstName: i.bankAccountFirstName
            };
        };
        Mapper.parseSkyBooking = function (i) {
            var r = {
                Message: i.message,
                IsSkyCustomer: i.isSkyCustomer,
                SkyEntertainmentSd: i.skyEntertainmentSd,
                SkyStarterNspSd: i.skyStarterNspSd,
                SkyStarterSd: i.skyStarterSd,
                SkyWeltSd: i.skyWeltSd
            };
            return r;
        };
        Mapper.parseGrants = function (i) {
            return {
                IsSkyCustomer: i.isSkyCustomer || false
            };
        };
        Mapper.parseContracts = function (i, httpCode) {
            var _a, _b;
            if (httpCode == 202) {
                return { HttpStatusCode: httpCode };
            }
            var r = {
                State: i.taskState,
                HttpStatusCode: httpCode,
                Contratcs: undefined
            };
            r.Contratcs = new Map();
            if ((_a = i.vendorlist) === null || _a === void 0 ? void 0 : _a.dt) {
                r.Contratcs.set("DT", _.map(i.vendorlist.dt, function (c) {
                    return {
                        PackageID: c.productID,
                        StartDate: c.contractStartDate
                    };
                }));
            }
            if ((_b = i.vendorlist) === null || _b === void 0 ? void 0 : _b.sky) {
                if (i.vendorlist.sky.length > 0) {
                    r.Contratcs.set("Sky", [{}]);
                }
            }
            return r;
        };
        Mapper.parsePackageMappingTable = function (cs) {
            return _.map(cs, function (c) {
                return Mapper.parsePackageMapping(c);
            });
        };
        Mapper.parsePackageMapping = function (i) {
            if (!i) {
                return undefined;
            }
            var r = {
                channelId: i.channelId || "",
                package: i.package || "",
                packageSpecified: i.packageSpecified || false,
                documentGroup: i.documentGroup || ""
            };
            return r;
        };
        return Mapper;
    }());
    exports.Mapper = Mapper;
});
//# sourceMappingURL=mapper.js.map