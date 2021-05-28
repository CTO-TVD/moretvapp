var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../backend/public", "./applicationclient.graphql", "./applicationclient.userstorage", "./applicationclient.system", "./applicationclient.tds", "../backend/Rest/ServiceClientRest.errors"], function (require, exports, bluebird, public_1, public_2, graphQL, applicationclient_userstorage_1, applicationclient_system_1, applicationclient_tds_1, ServiceClientRest_errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Netflix = exports.NetflixLaneType = exports.NetflixInteractionId = void 0;
    var AspectRatio;
    (function (AspectRatio) {
        AspectRatio["FIXED"] = "FIXED";
        AspectRatio["FLEX"] = "FLEX";
    })(AspectRatio || (AspectRatio = {}));
    var NetflixInteractionId;
    (function (NetflixInteractionId) {
        NetflixInteractionId["SuspendedAfterAppRestart"] = "161ef87b";
        NetflixInteractionId["SuspendedAtPowerOn"] = "ee4255bf";
        NetflixInteractionId["StartPageContinueWatchingRow"] = "81b5f887";
        NetflixInteractionId["StartPageNetflixDiscoveryRow"] = "fce3710d";
        NetflixInteractionId["StartPagePopularAppsRow"] = "12d16895";
        NetflixInteractionId["MyContentDiscoveryRow"] = "af5cb32a";
        NetflixInteractionId["CategoriesRowMovies"] = "c4b91622";
        NetflixInteractionId["CategoryRowsSeries"] = "c397d0a8";
        NetflixInteractionId["AppsPageLastUsedAppsIcon"] = "57ab0ea7";
        NetflixInteractionId["AppsPageVideoApps"] = "9fbd7339";
        NetflixInteractionId["StartPageStage"] = "6bdd530a";
        NetflixInteractionId["RcuQuickLaunchUserAssigned"] = "73470066";
        NetflixInteractionId["ChannelInfoBar"] = "d92b7347";
        NetflixInteractionId["ChannelSurf"] = "3091dbe0";
        NetflixInteractionId["EpgGrid"] = "83a6db72";
        NetflixInteractionId["Dial"] = "09ef39bd";
    })(NetflixInteractionId = exports.NetflixInteractionId || (exports.NetflixInteractionId = {}));
    var NetflixLaneType;
    (function (NetflixLaneType) {
        NetflixLaneType["DISCOVERY"] = "DISCOVERY";
        NetflixLaneType["KIDS_TV"] = "KIDS_TV";
        NetflixLaneType["MOVIES"] = "MOVIES";
        NetflixLaneType["SHOWS"] = "SHOWS";
    })(NetflixLaneType = exports.NetflixLaneType || (exports.NetflixLaneType = {}));
    var Netflix = (function () {
        function Netflix() {
        }
        Netflix_1 = Netflix;
        Netflix.getOverrides = function () {
            return Netflix_1.overrides;
        };
        Netflix.setOverrideForceExpiration = function (forceExpiration) {
            Netflix_1.overrides.forceExpiration = forceExpiration;
        };
        Netflix.setOverrideForceMinRefreshInterval = function (forceMinRefreshInterval) {
            Netflix_1.overrides.forceMinRefreshInterval = forceMinRefreshInterval;
        };
        Netflix.setOverrideForceMaxRefreshInterval = function (forceMaxRefreshInterval) {
            Netflix_1.overrides.forceMaxRefreshInterval = forceMaxRefreshInterval;
        };
        Netflix.setOverrideForceStatus = function (forceStatus) {
            Netflix_1.overrides.forceStatus = forceStatus;
        };
        Netflix.setOverrideForceNonPersonalized = function (forceNonPersonalized) {
            Netflix_1.overrides.forceNonPersonalized = forceNonPersonalized;
        };
        Netflix.setOverrideForceMaxDeepLinkLength = function (forceMaxDeepLinkLength) {
            Netflix_1.overrides.forceMaxDeepLinkLength = forceMaxDeepLinkLength;
        };
        Netflix.setOverrideForceEmptyTiles = function (forceEmptyTiles) {
            Netflix_1.overrides.forceEmptyTiles = forceEmptyTiles;
        };
        Netflix.resetOverrides = function () {
            Netflix_1.overrides = {};
        };
        Netflix.netflixBooked = function () {
            return applicationclient_tds_1.Tds.isFlagSet(applicationclient_tds_1.TdsParameterName.IndicateNetflixBooked)
                .catch(function (error) {
                public_1.ErrorManager.catch(error, applicationclient_tds_1.Tds, 0x01);
                return false;
            });
        };
        Netflix.doFactoryReset = function () {
            return bluebird.try(function () { return public_2.ServiceClientZac.getCustomApiNetflix(public_2.ServiceClientContextZac.instance).object.Call("FactoryReset", null); });
        };
        Netflix.search = function (query, interactionId) {
            var variableValues = {
                query: query,
                limit: 14
            };
            return Netflix_1.executeNetflixGraphQL(Netflix_1.getSearchOperation(interactionId), variableValues, function (response) { return response.data.search.tiles; }, interactionId);
        };
        Netflix.discover = function (interactionId) {
            var variableValues = {
                groupLimit: 10,
                tileLimit: 10
            };
            var discoveryOperation = Netflix_1.getDiscoveryOperation(interactionId);
            discoveryOperation.overrides = Netflix_1.overrides;
            return Netflix_1.executeNetflixGraphQL(Netflix_1.getDiscoveryOperation(interactionId), variableValues, function (response) { return Netflix_1.getDiscoveryResultTiles(response); }, interactionId);
        };
        Netflix.getDiscoveryResultTiles = function (response) {
            var result = [];
            response.data.discovery.groups.forEach(function (group) {
                group.tiles.forEach(function (tile) {
                    result.push(tile);
                });
            });
            return result;
        };
        Netflix.getCategory = function (categoryId, interactionId) {
            var variableValues = {
                ids: [categoryId],
                limit: 15
            };
            return Netflix_1.executeNetflixGraphQL(Netflix_1.getCategoriesOperation(interactionId), variableValues, function (response) { return response.data.categories.groups[0].tiles; }, interactionId);
        };
        Netflix.sendImpressionEvent = function (title, deepLink) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("SendImpressionEvent: TITLE: " + title + ", DEEPLINK: " + deepLink, Netflix_1.TAG)); });
            public_2.ServiceClientAuthenticationNetflix.executeGraphQLQuery(public_2.ServiceClientContextNetflix.instance, "SendImpressionEvent", Netflix_1.getNetflixRequestData(Netflix_1.getImpressionOperation(), { deepLinks: [deepLink] }))
                .catch(public_1.ErrorManager.catchFunc(Netflix_1, 0x01));
        };
        Netflix.getEsnInfo = function () {
            return public_2.ServiceClientAuthenticationNetflix.getEsn(public_2.ServiceClientContextNetflix.instance, Netflix_1.getEsn())
                .then(function (response) { return response.data; });
        };
        Netflix.storeEsn = function () {
            return public_2.ServiceClientAuthenticationNetflix.storeEsn(public_2.ServiceClientContextNetflix.instance, Netflix_1.getEsn(), Netflix_1.getDeviceId())
                .then(function (response) {
                if (response.data.Error) {
                    throw new public_2.NetflixEsnBundleError("Store ESN failed", response.data.Error);
                }
            })
                .then(function () { return applicationclient_userstorage_1.UserStorage.setNetflixSilentSignInInfo(); });
        };
        Netflix.deleteEsn = function () {
            return public_2.ServiceClientAuthenticationNetflix.deleteEsn(public_2.ServiceClientContextNetflix.instance, Netflix_1.getEsn())
                .then(function (response) {
                if (response.data.Error) {
                    throw new public_2.NetflixEsnBundleError("Delete ESN failed", response.data.Error);
                }
            })
                .then(function () { return applicationclient_userstorage_1.UserStorage.deleteNetflixSilentSignInInfo(); });
        };
        Netflix.anyOverrideSet = function (overrides) {
            for (var key in overrides) {
                if (public_1.Guard.isDefined(key)) {
                    return true;
                }
            }
            return false;
        };
        Netflix.getNetflixRequestData = function (operation, variableValues) {
            return {
                esn: Netflix_1.getEsn(),
                language: public_2.ServiceClientContextNetflix.instance.language,
                version: applicationclient_system_1.System.getUiVersion(),
                platformTime: Math.round((new Date()).getTime() / 1000),
                variables: variableValues,
                overrides: Netflix_1.anyOverrideSet(Netflix_1.overrides) ? Netflix_1.overrides : undefined,
                query: graphQL.GraphQL.operationToString(operation, false)
            };
        };
        Netflix.checkNetflixVariableValues = function (operation, variableValues) {
            try {
                var graphQlVariableValues = {};
                for (var name_1 in variableValues) {
                    graphQlVariableValues[name_1] = variableValues[name_1];
                }
                graphQL.GraphQL.checkVariableValues(operation, graphQlVariableValues);
                return bluebird.resolve();
            }
            catch (error) {
                return bluebird.reject(error);
            }
        };
        Netflix.getCachesInformation = function () {
            return public_2.ServiceClientCacheNetflix.getCachesInformation();
        };
        Netflix.clearCache = function () {
            return public_2.ServiceClientCacheNetflix.clearCacheDet();
        };
        Netflix.preloadCache = function (preloadDataInteractionId) {
            if (preloadDataInteractionId === void 0) { preloadDataInteractionId = NetflixInteractionId.SuspendedAfterAppRestart; }
            return public_2.ServiceClientCacheNetflix.clearCacheDet()
                .then(function () {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Preloading all Netflix data", Netflix_1.TAG)); });
                return bluebird.all([
                    Netflix_1.discover(preloadDataInteractionId),
                    Netflix_1.getCategory("MOVIES", preloadDataInteractionId),
                    Netflix_1.getCategory("TV_SHOWS", preloadDataInteractionId)
                ]);
            })
                .catch(public_1.ErrorManager.catchFunc(Netflix_1, 0x02));
        };
        Netflix.executeNetflixGraphQL = function (operation, variableValues, getTilesFunc, interactionId, attemptIndex) {
            if (attemptIndex === void 0) { attemptIndex = 0; }
            var maxNumAttempts = 10;
            variableValues.heroPreferredHeight = Netflix_1.imageScale(Netflix_1.HERO_IMAGE_HEIGHT);
            variableValues.heroPreferredWidth = Netflix_1.imageScale(Netflix_1.HERO_IMAGE_WIDTH);
            variableValues.tilePreferredHeight = Netflix_1.imageScale(Netflix_1.TILE_IMAGE_HEIGHT);
            variableValues.tilePreferredWidth = Netflix_1.imageScale(Netflix_1.TILE_IMAGE_WIDTH);
            variableValues.tileAspectRatioMode = AspectRatio.FIXED;
            variableValues.heroAspectRatioMode = AspectRatio.FIXED;
            return Netflix_1.checkNetflixVariableValues(operation, variableValues)
                .then(function () { return public_2.ServiceClientAuthenticationNetflix.executeGraphQLQuery(public_2.ServiceClientContextNetflix.instance, operation.name, Netflix_1.getNetflixRequestData(operation, variableValues)); })
                .then(function (results) {
                if (results) {
                    var allTiles = getTilesFunc(results.data);
                    var responseTiles = allTiles.slice(0, 15).map(function (tile, index) { return ({
                        deepLink: tile.deepLink,
                        images: !tile.images || !tile.images.tile ? undefined : {
                            tileImage: {
                                preferredHeight: tile.images.tile.height,
                                preferredWidth: tile.images.tile.width,
                                url: tile.images.tile.url
                            }
                        },
                        title: tile.title,
                        tileIndex: index,
                        interactionId: interactionId,
                        actors: tile.actors,
                        genres: tile.genres,
                        directors: tile.directors,
                        duration: tile.duration,
                        numEpisodes: tile.episodesCount,
                        latestReleaseYear: tile.latestReleaseYear,
                        numSeasons: tile.seasonsCount,
                        maturityRating: tile.maturityRating,
                        ratingBoard: tile.ratingBoard,
                        shortDescription: tile.shortDescription,
                        description: tile.description
                    }); });
                    return {
                        tiles: responseTiles,
                        totalCount: allTiles.length
                    };
                }
                return {
                    tiles: [],
                    totalCount: 0
                };
            })
                .catch(function (error) {
                if (attemptIndex >= maxNumAttempts) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg(operation.name + " failed after " + (attemptIndex + 1) + " attempts.", public_2.ServiceClientAuthenticationNetflix.TAG)); });
                    throw error;
                }
                if (error instanceof ServiceClientRest_errors_1.ServiceClientRestBaseError && public_1.Guard.isDefined(error.code) && error.code >= 500 && error.code < 600) {
                    var delayTimeMs = Math.pow(2, attemptIndex + 1) * 100;
                    var noiseFactorMs = delayTimeMs * 0.2;
                    var delayMinMs = delayTimeMs - noiseFactorMs;
                    var delayMaxMs = delayTimeMs + noiseFactorMs;
                    var delayTimeWithSpreadMs_1 = Math.floor(Math.random() * (delayMaxMs - delayMinMs) + delayMinMs);
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg(operation.name + " request, attempt " + (attemptIndex + 1) + ", failed with HTTP-STATUS " + error.code + " - RETRY after " + delayTimeWithSpreadMs_1 + " ms ...}", public_2.ServiceClientAuthenticationNetflix.TAG)); });
                    return bluebird.delay(delayTimeWithSpreadMs_1)
                        .then(function () { return Netflix_1.executeNetflixGraphQL(operation, variableValues, getTilesFunc, interactionId, attemptIndex + 1); });
                }
                throw error;
            });
        };
        Netflix.getDeviceType = function () {
            return Netflix_1.getEsn().split("=")[0];
        };
        Netflix.getEsn = function () {
            return public_2.ServiceClientZac.getSystemInformation().NetflixEsn || "";
        };
        Netflix.getDeviceId = function () {
            return public_2.ServiceClientZac.getSystemInformation().GUID || "";
        };
        Netflix.onNetflixStateChanged = function (callback) {
            return public_2.ServiceClientZac.getCustomApiNetflix(public_2.ServiceClientContextZac.instance).events.onCustomAPIEvent(callback);
        };
        Netflix.getDiscoveryOperation = function (interactionId) {
            var groupLimitVariable = { name: "groupLimit", type: "Int" };
            var tileLimitVariable = { name: "tileLimit", type: "Int" };
            return {
                name: "Discovery",
                type: "query",
                variables: [
                    groupLimitVariable,
                    tileLimitVariable,
                    { name: "heroPreferredHeight", type: "Int" },
                    { name: "heroPreferredWidth", type: "Int" },
                    { name: "tilePreferredHeight", type: "Int" },
                    { name: "tilePreferredWidth", type: "Int" },
                    { name: "heroAspectRatioMode", type: "Enum", enum: "AspectRatio" },
                    { name: "tileAspectRatioMode", type: "Enum", enum: "AspectRatio" }
                ],
                enums: [
                    { name: "AspectRatio", values: ["FIXED", "FLEX"] },
                    { name: "DisplayType", values: ["GRID", "ROW"] }
                ],
                responseType: {
                    name: "discovery",
                    arguments: [
                        { name: "display", enum: "DisplayType", value: "ROW" },
                        { name: "interactionID", value: interactionId }
                    ],
                    fields: [
                        {
                            definition: {
                                name: "groups",
                                arguments: [
                                    { name: "limit", variable: groupLimitVariable.name }
                                ],
                                fields: [
                                    {
                                        definition: "title"
                                    },
                                    {
                                        definition: {
                                            name: "tiles",
                                            arguments: [
                                                { name: "limit", variable: tileLimitVariable.name }
                                            ],
                                            fragments: [
                                                {
                                                    isInline: true,
                                                    onTypeName: "SignUpTile",
                                                    fields: Netflix_1.getResponseFieldsForSignUpTile()
                                                },
                                                {
                                                    isInline: true,
                                                    onTypeName: "ProfileTile",
                                                    fields: Netflix_1.getResponseFieldsForProfileTile()
                                                },
                                                {
                                                    isInline: true,
                                                    onTypeName: "VideoTile",
                                                    fields: Netflix_1.getResponseFieldsForTile()
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            };
        };
        Netflix.getSearchOperation = function (interactionId) {
            return {
                name: "Search",
                type: "query",
                variables: [
                    { name: "query", type: "String" },
                    { name: "limit", type: "Int" },
                    { name: "heroPreferredHeight", type: "Int" },
                    { name: "heroPreferredWidth", type: "Int" },
                    { name: "tilePreferredHeight", type: "Int" },
                    { name: "tilePreferredWidth", type: "Int" },
                    { name: "heroAspectRatioMode", type: "Enum", enum: "AspectRatio" },
                    { name: "tileAspectRatioMode", type: "Enum", enum: "AspectRatio" }
                ],
                responseType: {
                    name: "search",
                    arguments: [
                        { name: "query", variable: "query" },
                        { name: "interactionID", value: interactionId }
                    ],
                    fields: [{
                            definition: {
                                name: "tiles",
                                arguments: [
                                    { name: "limit", variable: "limit" }
                                ],
                                fields: Netflix_1.getResponseFieldsForTile()
                            }
                        }]
                }
            };
        };
        Netflix.getCategoriesOperation = function (interactionId) {
            return {
                name: "Categories",
                type: "query",
                variables: [
                    { name: "ids", type: "String", isArray: true },
                    { name: "limit", type: "Int" },
                    { name: "heroPreferredHeight", type: "Int" },
                    { name: "heroPreferredWidth", type: "Int" },
                    { name: "tilePreferredHeight", type: "Int" },
                    { name: "tilePreferredWidth", type: "Int" },
                    { name: "heroAspectRatioMode", type: "Enum", enum: "AspectRatio" },
                    { name: "tileAspectRatioMode", type: "Enum", enum: "AspectRatio" }
                ],
                enums: [
                    { name: "AspectRatio", values: ["FIXED", "FLEX"] },
                    { name: "DisplayType", values: ["GRID", "ROW"] }
                ],
                responseType: {
                    name: "categories",
                    arguments: [
                        { name: "ids", variable: "ids" },
                        { name: "interactionID", value: interactionId }
                    ],
                    fields: [
                        {
                            definition: {
                                name: "groups",
                                fields: [
                                    { definition: "id" },
                                    {
                                        definition: {
                                            name: "tiles",
                                            arguments: [
                                                { name: "limit", variable: "limit" }
                                            ],
                                            fields: Netflix_1.getResponseFieldsForTile()
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            };
        };
        Netflix.getImpressionOperation = function () {
            return {
                name: "SendImpressionEvent",
                type: "mutation",
                variables: [
                    { name: "deepLinks", type: "String", isArray: true },
                ],
                enums: [
                    { name: "ImpressionType", values: ["PRESENT"] }
                ],
                responseType: {
                    name: "sendImpressionEvent",
                    arguments: [
                        { name: "type", value: "PRESENT", enum: "ImpressionType" },
                        { name: "deepLinks", variable: "deepLinks" }
                    ],
                    fields: [
                        { definition: "status" }
                    ]
                }
            };
        };
        Netflix.getResponseFieldsForProfileTile = function () {
            return [
                { definition: "title" },
                { definition: "deepLink" },
                { definition: "description" },
                Netflix_1.getImagesField()
            ];
        };
        Netflix.getResponseFieldsForSignUpTile = function () {
            return [
                { definition: "title" },
                { definition: "deepLink" },
                { definition: "description" },
                { definition: "shortDescription" },
                Netflix_1.getImagesField()
            ];
        };
        Netflix.getResponseFieldsForTile = function () {
            return [
                { definition: "title" },
                { definition: "actors" },
                { definition: "description" },
                { definition: "directors" },
                { definition: "duration" },
                { definition: "genres" },
                { definition: "latestReleaseYear" },
                { definition: "maturityRating" },
                { definition: "episodesCount" },
                { definition: "seasonsCount" },
                { definition: "ratingBoard" },
                { definition: "shortDescription" },
                { definition: "deepLink" },
                Netflix_1.getImagesField()
            ];
        };
        Netflix.getImagesField = function () {
            return {
                definition: {
                    name: "images",
                    fields: [
                        {
                            definition: {
                                name: "tile",
                                arguments: [
                                    { name: "width", variable: "tilePreferredWidth" },
                                    { name: "height", variable: "tilePreferredHeight" },
                                    { name: "aspectRatioMode", variable: "tileAspectRatioMode" }
                                ],
                                fields: [
                                    { definition: "url" },
                                    { definition: "width" },
                                    { definition: "height" }
                                ]
                            }
                        },
                        {
                            definition: {
                                name: "hero",
                                arguments: [
                                    { name: "width", variable: "heroPreferredWidth" },
                                    { name: "height", variable: "heroPreferredHeight" },
                                    { name: "aspectRatioMode", variable: "heroAspectRatioMode" }
                                ],
                                fields: [
                                    { definition: "url" },
                                    { definition: "width" },
                                    { definition: "height" }
                                ]
                            }
                        }
                    ]
                }
            };
        };
        var Netflix_1;
        Netflix.classID = 0x76F;
        Netflix.overrides = {};
        Netflix.HERO_IMAGE_HEIGHT = 830;
        Netflix.HERO_IMAGE_WIDTH = 1475;
        Netflix.TILE_IMAGE_HEIGHT = 186;
        Netflix.TILE_IMAGE_WIDTH = 330;
        Netflix.imageScale = function (value) { return Math.round(value); };
        __decorate([
            public_1.log2(function () { return ({ name: applicationclient_tds_1.Tds.TAG }); })
        ], Netflix, "netflixBooked", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG }); })
        ], Netflix, "doFactoryReset", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG }); })
        ], Netflix, "search", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG, outlen: 50000 }); })
        ], Netflix, "discover", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG, outlen: 50000 }); })
        ], Netflix, "getCategory", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG }); })
        ], Netflix, "sendImpressionEvent", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG }); })
        ], Netflix, "getEsnInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG }); })
        ], Netflix, "storeEsn", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG }); })
        ], Netflix, "deleteEsn", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG }); })
        ], Netflix, "getCachesInformation", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG }); })
        ], Netflix, "clearCache", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG }); })
        ], Netflix, "preloadCache", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG }); })
        ], Netflix, "executeNetflixGraphQL", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG }); })
        ], Netflix, "getDiscoveryOperation", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG }); })
        ], Netflix, "getSearchOperation", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG }); })
        ], Netflix, "getCategoriesOperation", null);
        __decorate([
            public_1.log2(function () { return ({ name: Netflix_1.TAG }); })
        ], Netflix, "getImpressionOperation", null);
        Netflix = Netflix_1 = __decorate([
            public_1.logTag()
        ], Netflix);
        return Netflix;
    }());
    exports.Netflix = Netflix;
});
//# sourceMappingURL=applicationclient.netflix.js.map