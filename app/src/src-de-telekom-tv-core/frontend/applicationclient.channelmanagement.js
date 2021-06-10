var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../backend/public", "../common/extensions", "./applicationclient", "./applicationclient.devicemanagement"], function (require, exports, bluebird, public_1, backend, extensions_1, applicationclient_1, applicationclient_devicemanagement_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChannelManagement = void 0;
    var ChannelManagementError = (function (_super) {
        __extends(ChannelManagementError, _super);
        function ChannelManagementError(errorCode, message) {
            var _this = _super.call(this, message) || this;
            _this.errorCode = errorCode;
            _this.errorID = 0x643;
            return _this;
        }
        ChannelManagementError.prototype.getAdditionalErrorCode = function () {
            return "" + this.errorCode;
        };
        return ChannelManagementError;
    }(public_1.BaseError));
    var ChannelChangeType;
    (function (ChannelChangeType) {
        ChannelChangeType[ChannelChangeType["setVisible"] = 0] = "setVisible";
        ChannelChangeType[ChannelChangeType["setInvisible"] = 1] = "setInvisible";
        ChannelChangeType[ChannelChangeType["addedFavouriteState"] = 2] = "addedFavouriteState";
        ChannelChangeType[ChannelChangeType["deleteFavouriteState"] = 3] = "deleteFavouriteState";
        ChannelChangeType[ChannelChangeType["channelNumber"] = 4] = "channelNumber";
    })(ChannelChangeType || (ChannelChangeType = {}));
    var ChannelManagement = (function () {
        function ChannelManagement() {
        }
        ChannelManagement_1 = ChannelManagement;
        ChannelManagement.addFavorites = function (channels) {
            if (channels && channels.length > 0) {
                return backend.ServiceClientAuthenticationZosa
                    .getFavoriteLists(backend.ServiceClientContextZosa.instance, { contentType: backend.zosaStatic.ZOSA_TYPE_CHANNEL_ITEM, serviceProvider: null })
                    .then(function (favoriteLists) {
                    return backend.ServiceClientAuthenticationZosa
                        .addFavorites(backend.ServiceClientContextZosa.instance, { contents: channels, favoriteList: favoriteLists.data.elements[0].zosaId })
                        .then(function (response) { return response.data; });
                });
            }
            return bluebird.resolve();
        };
        ChannelManagement.getFavouriteChannelLists = function () {
            return backend.ServiceClientAuthenticationZosa
                .getFavoriteLists(backend.ServiceClientContextZosa.instance, { contentType: backend.zosaStatic.ZOSA_TYPE_CHANNEL_ITEM, serviceProvider: null });
        };
        ChannelManagement.getChannelLists = function (activeListTitle, favoriteListTitle) {
            return ChannelManagement_1.getFavouriteChannelLists()
                .then(function (favoriteLists) {
                var _a;
                var activeChannelListIdPromise = applicationclient_1.ApplicationClient.userStorage.getActiveChannelListId(ChannelManagement_1.COMPLETE_LIST_ID);
                var completeChannelListPromise = ChannelManagement_1.getChannelIDs();
                var favoriteChannelListPromise;
                if (((_a = favoriteLists === null || favoriteLists === void 0 ? void 0 : favoriteLists.data) === null || _a === void 0 ? void 0 : _a.elements) && favoriteLists.data.elements.length > 0) {
                    favoriteChannelListPromise = ChannelManagement_1.getChannelIDs({ favoriteList: favoriteLists.data.elements[0].zosaId });
                }
                return bluebird.all([activeChannelListIdPromise, completeChannelListPromise, favoriteChannelListPromise || bluebird.resolve(undefined)])
                    .then(function (_a) {
                    var activeChannelListId = _a[0], completeChannelList = _a[1], favoriteChannelList = _a[2];
                    var channelLists = {
                        activeListId: activeChannelListId,
                        lists: [
                            {
                                count: completeChannelList.length,
                                title: activeListTitle,
                                zosaId: ChannelManagement_1.COMPLETE_LIST_ID,
                                zosaType: backend.zosaStatic.ZOSA_TYPE_FAVORITE_LIST_ITEM
                            }
                        ]
                    };
                    if (favoriteChannelList) {
                        channelLists.lists.push({
                            count: favoriteChannelList.length,
                            title: favoriteListTitle,
                            zosaId: favoriteLists.data.elements[0].zosaId,
                            zosaType: favoriteLists.data.elements[0].zosaType
                        });
                    }
                    return channelLists;
                });
            });
        };
        ChannelManagement.getSpecificStream = function (channel, videoDefinition, source) {
            var _a;
            return (_a = channel.streams) === null || _a === void 0 ? void 0 : _a.filter(function (stream) { return stream.videoDefinition == videoDefinition && ((stream.dtExtensions.isIPTVStream && source == "IPTV") || (!stream.dtExtensions.isIPTVStream && source == "SAT")); })[0];
        };
        ChannelManagement.getChannelByCmsId = function (cmsId) {
            return ChannelManagement_1.getChannels({ externalChannelIds: [cmsId], externalChannelIdType: backend.zosaStatic.EXTERNAL_ID_TYPE_CMS, serviceProvider: null })
                .then(function (response) { return response && response.length > 0 ? response[0] : undefined; });
        };
        ChannelManagement.getChannelByZosaId = function (zosaId, takeFirstChannelAsFallback) {
            if (takeFirstChannelAsFallback === void 0) { takeFirstChannelAsFallback = false; }
            return applicationclient_1.ApplicationClient.channelManagement.getCompleteChannelList()
                .then(function (channels) {
                var channel = channels.getItem(zosaId);
                if (channel)
                    return channel;
                return takeFirstChannelAsFallback ? channels[0] : undefined;
            });
        };
        ChannelManagement.getChannels = function (parameters) {
            var channelsPromise = ChannelManagement_1.getCompleteChannelList();
            var filteredChannelsPromise = applicationclient_1.ApplicationClient.userStorage.getActiveChannelListId(ChannelManagement_1.COMPLETE_LIST_ID)
                .then(function (activeChannelListId) {
                var params = __assign(__assign({}, parameters), { includeHidden: true, onlySubscribed: false });
                if (!parameters) {
                    if (params.favoriteList === undefined) {
                        params.favoriteList = activeChannelListId;
                    }
                }
                if (params.favoriteList === ChannelManagement_1.COMPLETE_LIST_ID) {
                    params.favoriteList = undefined;
                }
                return ChannelManagement_1.getChannelIDs(params)
                    .then(function (response) {
                    if ((activeChannelListId != ChannelManagement_1.COMPLETE_LIST_ID) && response && (response.length == 0)) {
                        params.favoriteList = undefined;
                        return applicationclient_1.ApplicationClient.userStorage.setActiveChannelListId(ChannelManagement_1.COMPLETE_LIST_ID)
                            .then(function () { return ChannelManagement_1.getChannelIDs(params); });
                    }
                    return response;
                });
            });
            return bluebird
                .all([channelsPromise, filteredChannelsPromise])
                .then(function (_a) {
                var channels = _a[0], filteredChannels = _a[1];
                if (public_1.Guard.isUndefined(channels) || (channels.length === 0)) {
                    throw new ChannelManagementError(1, "The channel list from the backend is empty!");
                }
                var data = filteredChannels
                    .map(function (item) { return channels.getItem(item.zosaId); })
                    .filter(public_1.Guard.isDefined)
                    .filter(function (item) { return ((!item.isHidden || (parameters === null || parameters === void 0 ? void 0 : parameters.includeHidden)) && ((item.dtExtensions.streamBestAvailableQuality != null) || !(parameters === null || parameters === void 0 ? void 0 : parameters.onlySubscribed))); });
                if (public_1.Guard.isUndefined(data) || (data.length === 0)) {
                    throw new ChannelManagementError(2, "The filtered channel list is empty! (includeHidden: '" + (parameters === null || parameters === void 0 ? void 0 : parameters.includeHidden) + "', onlySubscribed: '" + (parameters === null || parameters === void 0 ? void 0 : parameters.onlySubscribed) + "')");
                }
                return new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); }, data);
            });
        };
        ChannelManagement.getCategoriesForChannelItems = function (parentCategory) {
            var parameters = {
                contentType: backend.zosaStatic.ZOSA_TYPE_CHANNEL_ITEM,
                parentCategory: parentCategory,
                serviceProvider: null
            };
            return backend.ServiceClientAuthenticationZosa
                .getCategories(backend.ServiceClientContextZosa.instance, parameters)
                .then(function (response) {
                if (!parentCategory) {
                    var subCategoryId = response.data.elements.filter(function (item) { return item.title == "Genres"; })[0].zosaId;
                    var parameterSubCategory = {
                        contentType: backend.zosaStatic.ZOSA_TYPE_CHANNEL_ITEM,
                        parentCategory: subCategoryId,
                        serviceProvider: null
                    };
                    return backend.ServiceClientAuthenticationZosa
                        .getCategories(backend.ServiceClientContextZosa.instance, parameterSubCategory);
                }
                return response;
            });
        };
        ChannelManagement.getLastTunedChannel = function () {
            return ChannelManagement_1
                .getChannels({ favoriteList: ChannelManagement_1.COMPLETE_LIST_ID })
                .then(function (channels) {
                if (ChannelManagement_1.lastTunedChannelId) {
                    var lastTunedChannel = channels.getItem(ChannelManagement_1.lastTunedChannelId);
                    if (lastTunedChannel) {
                        return lastTunedChannel;
                    }
                    else {
                        ChannelManagement_1.lastTunedChannelId = channels[0].zosaId;
                        return channels[0];
                    }
                }
                else {
                    return applicationclient_1.ApplicationClient.playbackHistory
                        .getPlaybackHistory([2])
                        .then(function (playbackHistory) {
                        var lastPlayedChannelId = (playbackHistory.length > 0) ? playbackHistory[0].id : undefined;
                        var lastPlayedChannel = channels.getItem(lastPlayedChannelId);
                        if (lastPlayedChannel) {
                            ChannelManagement_1.lastTunedChannelId = lastPlayedChannel.zosaId;
                            return lastPlayedChannel;
                        }
                        else {
                            ChannelManagement_1.lastTunedChannelId = channels[0].zosaId;
                            return channels[0];
                        }
                    });
                }
            });
        };
        ChannelManagement.getLastTunedNonFunctionalChannel = function () {
            return ChannelManagement_1.getPreviousTunedNonFunctionalChannelFromHistory(0);
        };
        ChannelManagement.getPreviousTunedNonFunctionalChannelFromHistory = function (histroryIndex) {
            return ChannelManagement_1.getChannels({ favoriteList: ChannelManagement_1.COMPLETE_LIST_ID })
                .then(function (channels) {
                var nonFunctionalChannels = channels.filter(function (channel) { return channel && !channel.dtExtensions.isFunctionalChannel; });
                if (nonFunctionalChannels.length == 0) {
                    throw new ChannelManagementError(3, "Channel list contains no non-functional channels.");
                }
                return applicationclient_1.ApplicationClient.playbackHistory.getPlaybackHistory([2])
                    .then(function (playbackHistory) {
                    var tunedChannels = playbackHistory.map(function (item) { return channels.getItem(item.id); })
                        .filter(function (item) { return item && !item.dtExtensions.isFunctionalChannel; });
                    if (tunedChannels.length > histroryIndex)
                        return tunedChannels[histroryIndex];
                    return tunedChannels.length > 0 ? tunedChannels[tunedChannels.length - 1] : nonFunctionalChannels[0];
                });
            });
        };
        ChannelManagement.getLastPlayedStreamId = function () {
            return ChannelManagement_1.lastPlayedStreamId;
        };
        ChannelManagement.getLastTunedChannelId = function () {
            return ChannelManagement_1.lastTunedChannelId;
        };
        ChannelManagement.getNextChannel = function (channel) {
            return ChannelManagement_1
                .getChannels()
                .then(function (channels) {
                var newIndex = 0;
                var channelInList = channels.getItem(backend.convertToString(channel));
                if (channelInList) {
                    newIndex = channels.indexOf(channelInList);
                    newIndex++;
                    if (newIndex > (channels.length - 1)) {
                        newIndex = 0;
                    }
                }
                return channels[newIndex];
            });
        };
        ChannelManagement.getNonFunctionalChannels = function (parameters) {
            return ChannelManagement_1.getChannels(parameters)
                .then(function (channels) {
                var data = channels.filter(function (channel) { return !channel.dtExtensions.isFunctionalChannel; });
                return new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); }, data);
            });
        };
        ChannelManagement.getPreviousChannel = function (channel) {
            return ChannelManagement_1
                .getChannels()
                .then(function (channels) {
                var newIndex = 0;
                var channelInList = channels.getItem(backend.convertToString(channel));
                if (channelInList) {
                    newIndex = channels.indexOf(channelInList);
                    newIndex--;
                    if (newIndex < 0) {
                        newIndex = channels.length - 1;
                    }
                }
                return channels[newIndex];
            });
        };
        ChannelManagement.getChannelWithNeighbors = function (channel) {
            var result = {
                previous: channel,
                current: channel,
                next: channel
            };
            if ((channel === null) || (channel === undefined)) {
                return bluebird.resolve(result);
            }
            return ChannelManagement_1
                .getChannels()
                .then(function (channels) {
                var currentChannelNumber = channel.channelNumber;
                if (currentChannelNumber) {
                    var nextChannel = channels.filter(function (item) { return (item.channelNumber || 0) > currentChannelNumber; })[0] || channels[0];
                    var previousChannel = __spreadArrays(channels).reverse().filter(function (item) { return (item.channelNumber || Number.MAX_VALUE) < currentChannelNumber; })[0] || channels[channels.length - 1];
                    result.next = nextChannel;
                    result.previous = previousChannel;
                }
                else {
                    result.next = channels[0];
                    result.previous = channels[channels.length - 1];
                }
                return result;
            });
        };
        ChannelManagement.setLastPlayedStreamId = function (channelId) {
            ChannelManagement_1.lastPlayedStreamId = channelId;
        };
        ChannelManagement.setLastTunedChannelId = function (channelId) {
            ChannelManagement_1.lastTunedChannelId = channelId;
        };
        ChannelManagement.removeFavorites = function (channels) {
            if (channels && channels.length > 0) {
                return backend.ServiceClientAuthenticationZosa
                    .getFavoriteLists(backend.ServiceClientContextZosa.instance, { contentType: backend.zosaStatic.ZOSA_TYPE_CHANNEL_ITEM, serviceProvider: null })
                    .then(function (favoriteLists) {
                    return backend.ServiceClientAuthenticationZosa
                        .removeFavorites(backend.ServiceClientContextZosa.instance, { contents: channels, favoriteList: favoriteLists.data.elements[0].zosaId })
                        .then(function (response) { return response.data; });
                });
            }
            return bluebird.resolve();
        };
        ChannelManagement.clearCustomChannelNumbering = function () {
            return backend.ServiceClientAuthenticationZosa
                .clearCustomChannelNumbering(backend.ServiceClientContextZosa.instance, { serviceProvider: null });
        };
        ChannelManagement.getCustomChannelNumbering = function (device) {
            return backend.ServiceClientAuthenticationZosa.getCustomChannelNumbering(backend.ServiceClientContextZosa.instance, { serviceProvider: null, device: device })
                .catch(function (error) {
                if (error instanceof backend.ZosaNotFoundError) {
                    return undefined;
                }
                throw error;
            })
                .then(function (response) { return response ? response.data : undefined; });
        };
        ChannelManagement.setCustomChannelNumbering = function (numbering, device) {
            return backend.ServiceClientAuthenticationZosa.setCustomChannelNumbering(backend.ServiceClientContextZosa.instance, { serviceProvider: null, numbering: numbering, device: device })
                .then(function (response) { return response.data; });
        };
        ChannelManagement.getChannelChanges = function (oldChannelsState, newChannelsState) {
            var channelPairs = oldChannelsState.map(function (oldChannelsState) {
                var newChannelState = newChannelsState.some(function (newChannelsState) { return newChannelsState.zosaId == oldChannelsState.zosaId; }) ?
                    newChannelsState.filter(function (newChannelsState) { return newChannelsState.zosaId == oldChannelsState.zosaId; })[0] : undefined;
                return { oldState: oldChannelsState, newState: newChannelState };
            });
            var favouriteChanges = channelPairs
                .filter(function (channelPair) { return ChannelManagement_1.favouriteStateIsDifferent(channelPair.oldState, channelPair.newState); })
                .map(function (channelPair) { var _a; return (__assign(__assign({}, channelPair), { type: ((_a = channelPair.newState) === null || _a === void 0 ? void 0 : _a.isFavorited) ? ChannelChangeType.addedFavouriteState : ChannelChangeType.deleteFavouriteState })); });
            var visibilityChanges = channelPairs
                .filter(function (channelPair) { return ChannelManagement_1.visibilityIsDifferent(channelPair.oldState, channelPair.newState); })
                .map(function (channelPair) { var _a; return (__assign(__assign({}, channelPair), { type: ((_a = channelPair.newState) === null || _a === void 0 ? void 0 : _a.isHidden) ? ChannelChangeType.setInvisible : ChannelChangeType.setVisible })); });
            var channelNumberChanges = channelPairs
                .filter(function (channelPair) { return channelPair.oldState && channelPair.newState && channelPair.oldState.channelNumber != channelPair.newState.channelNumber; })
                .map(function (channelPair) { return (__assign(__assign({}, channelPair), { type: ChannelChangeType.channelNumber })); });
            return __spreadArrays(favouriteChanges, visibilityChanges, channelNumberChanges);
        };
        ChannelManagement.favouriteStateIsDifferent = function (item1, item2) {
            return public_1.Guard.isDefined(item1) && public_1.Guard.isDefined(item2) &&
                ((item1.isFavorited == true && item2.isFavorited != true) || (item2.isFavorited == true && item1.isFavorited != true));
        };
        ChannelManagement.visibilityIsDifferent = function (item1, item2) {
            return public_1.Guard.isDefined(item1) && public_1.Guard.isDefined(item2) &&
                ((item1.isHidden == true && item2.isHidden != true) || (item2.isHidden == true && item1.isHidden != true));
        };
        ChannelManagement.saveChannelChanges = function (oldChannelsState, newChannelsState) {
            var savePromises = [];
            var allChanges = ChannelManagement_1.getChannelChanges(oldChannelsState, newChannelsState);
            public_1.Logger.debug(function (log) {
                log(public_1.LogMsg(allChanges.length > 0 ? "Processing " + allChanges.length + " channel change(s):" : "There are no changes.", ChannelManagement_1.TAG));
            });
            if (allChanges.some(function (change) { return change.type == ChannelChangeType.channelNumber; })) {
                var zosaCustomChannelNumbers_1 = newChannelsState
                    .filter(function (channel) { return !channel.isHidden && public_1.Guard.isNumber(channel.channelNumber); })
                    .map(function (channel) { return ({ channelId: channel.zosaId, number: channel.channelNumber }); });
                savePromises.push(applicationclient_1.ApplicationClient.deviceManagement.getMyDevice()
                    .then(function (myDevice) { return applicationclient_1.ApplicationClient.channelManagement.setCustomChannelNumbering(zosaCustomChannelNumbers_1, myDevice.device.zosaId); }));
            }
            if (allChanges.some(function (change) { return change.type == ChannelChangeType.addedFavouriteState; })) {
                var newFavouriteChannelIds = allChanges
                    .filter(function (change) { return change.type == ChannelChangeType.addedFavouriteState; })
                    .map(function (change) { return change.newState; })
                    .filter(public_1.Guard.isDefined)
                    .map(function (newState) { return newState.zosaId; });
                savePromises.push(applicationclient_1.ApplicationClient.channelManagement.addFavorites(newFavouriteChannelIds));
            }
            if (allChanges.some(function (change) { return change.type == ChannelChangeType.deleteFavouriteState; })) {
                var removedFavouritesChannelIds = allChanges
                    .filter(function (change) { return change.type == ChannelChangeType.deleteFavouriteState; })
                    .map(function (change) { return change.newState; })
                    .filter(public_1.Guard.isDefined)
                    .map(function (newState) { return newState.zosaId; });
                savePromises.push(applicationclient_1.ApplicationClient.channelManagement.removeFavorites(removedFavouritesChannelIds));
            }
            return bluebird.all(savePromises).then(function (result) { return savePromises.length > 0; });
        };
        ChannelManagement.getChannelIDs = function (parameters) {
            return backend.ServiceClientAuthenticationZosa
                .getChannels(backend.ServiceClientContextZosa.instance, __assign(__assign({}, parameters), { itemFields: null }))
                .then(function (response) { return response.data.elements; });
        };
        ChannelManagement.getCompleteChannelList = function () {
            return backend.ServiceClientAuthenticationZosa.getChannels(backend.ServiceClientContextZosa.instance, { includeHidden: true, onlySubscribed: false })
                .then(function (response) {
                var funcCustom = function () {
                    var result = response.data.elements.map(function (channel) { return extensions_1.ZosaChannelItemExtensions.update(channel); });
                    return new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); }, result);
                };
                return response.custom || (response.custom = funcCustom());
            });
        };
        ChannelManagement.getCacheTime = function () {
            var parameters = {
                includeHidden: true,
                onlySubscribed: false
            };
            return backend.ServiceClientAuthenticationZosa
                .getChannels(backend.ServiceClientContextZosa.instance, parameters)
                .then(function (response) { return response.serviceData.responseTime; });
        };
        ChannelManagement.copyChannelListFromMasterStbEnabled = function () {
            var stbWhitelistSlave = [
                applicationclient_devicemanagement_1.DeviceModel.MRG5,
                applicationclient_devicemanagement_1.DeviceModel.MR401A,
                applicationclient_devicemanagement_1.DeviceModel.MR401B,
                applicationclient_devicemanagement_1.DeviceModel.MR201,
                applicationclient_devicemanagement_1.DeviceModel.MR200Z,
                applicationclient_devicemanagement_1.DeviceModel.MR400Z,
                applicationclient_devicemanagement_1.DeviceModel.MRENTRY,
                applicationclient_devicemanagement_1.DeviceModel.MR401A_ACN,
                applicationclient_devicemanagement_1.DeviceModel.MR401B_ACN,
                applicationclient_devicemanagement_1.DeviceModel.MR201_ACN,
                applicationclient_devicemanagement_1.DeviceModel.MR401A_ACN_DEV,
                applicationclient_devicemanagement_1.DeviceModel.MR401B_ACN_DEV,
                applicationclient_devicemanagement_1.DeviceModel.MR201_ACN_DEV
            ];
            var stbWhitelistMaster = [
                applicationclient_devicemanagement_1.DeviceModel.MRG5,
                applicationclient_devicemanagement_1.DeviceModel.MR401A,
                applicationclient_devicemanagement_1.DeviceModel.MR401B,
                applicationclient_devicemanagement_1.DeviceModel.MR400Z,
                applicationclient_devicemanagement_1.DeviceModel.MR601SAT,
                applicationclient_devicemanagement_1.DeviceModel.MR401A_ACN,
                applicationclient_devicemanagement_1.DeviceModel.MR401B_ACN,
                applicationclient_devicemanagement_1.DeviceModel.MR601SAT_ACN,
                applicationclient_devicemanagement_1.DeviceModel.MR401A_ACN_DEV,
                applicationclient_devicemanagement_1.DeviceModel.MR401B_ACN_DEV,
                applicationclient_devicemanagement_1.DeviceModel.MR601SAT_ACN_DEV
            ];
            return applicationclient_1.ApplicationClient.deviceManagement.getStbDevicesInfo(true)
                .then(function (devicesInfo) {
                if (devicesInfo.masterStb && devicesInfo.currentStb && devicesInfo.currentStb.zosaId != devicesInfo.masterStb.zosaId) {
                    if (public_1.Guard.isUndefined(devicesInfo.currentStb.deviceModel) || public_1.Guard.isUndefined(devicesInfo.masterStb.deviceModel)) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Copy channellist option is inactive because currentStb or master Stb deviceModel is undefined", ChannelManagement_1.TAG)); });
                    }
                    else if (stbWhitelistSlave.indexOf(applicationclient_devicemanagement_1.DeviceModel[devicesInfo.currentStb.deviceModel]) < 0) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Copy channellist option is inactive because Slave " + devicesInfo.currentStb.deviceModel + " not on whitelist [" + stbWhitelistSlave.join("|") + "]", ChannelManagement_1.TAG)); });
                    }
                    else if (stbWhitelistMaster.indexOf(applicationclient_devicemanagement_1.DeviceModel[devicesInfo.masterStb.deviceModel]) < 0) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Copy channellist option is inactive because Master " + devicesInfo.currentStb.deviceModel + " not on whitelist [" + stbWhitelistMaster.join("|") + "]", ChannelManagement_1.TAG)); });
                    }
                    else {
                        return applicationclient_1.ApplicationClient.channelManagement.getCustomChannelNumbering(devicesInfo.masterStb.zosaId)
                            .then(function (customChannelNumbering) {
                            if (customChannelNumbering && customChannelNumbering.length > 0) {
                                return true;
                            }
                            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Copy channellist option is inactive because master stb channel list is not customized.", ChannelManagement_1.TAG)); });
                            return false;
                        });
                    }
                }
                return false;
            });
        };
        ChannelManagement.copyChannelListFromMasterStb = function () {
            return applicationclient_devicemanagement_1.DeviceManagement.getStbDevicesInfo(false)
                .then(function (deviceInfo) { return deviceInfo.masterStb ?
                ChannelManagement_1.copyChannelList(deviceInfo.masterStb.zosaId, deviceInfo.currentStb.zosaId) :
                bluebird.resolve(); });
        };
        ChannelManagement.copyChannelList = function (sourceDeviceId, targetDeviceId) {
            return applicationclient_1.ApplicationClient.channelManagement.getCustomChannelNumbering(sourceDeviceId)
                .then(function (customChannelNumbers) { return customChannelNumbers && customChannelNumbers.length > 0 ?
                applicationclient_1.ApplicationClient.channelManagement.setCustomChannelNumbering(customChannelNumbers, targetDeviceId) :
                bluebird.resolve(); });
        };
        ChannelManagement.getCopyChannelListOptions = function (useCache) {
            if (useCache === void 0) { useCache = false; }
            var devicesInfo;
            return applicationclient_devicemanagement_1.DeviceManagement.getStbDevicesInfo(useCache)
                .then(function (deviceInfo) {
                devicesInfo = deviceInfo;
                return bluebird.all(devicesInfo.allStbs.map(function (stb) { return applicationclient_1.ApplicationClient.channelManagement.getCustomChannelNumbering(stb.zosaId); }));
            })
                .then(function (customChannelNumberings) {
                var allCustomChannelNumberings = customChannelNumberings
                    .map(function (customChannelNumbers, index) {
                    var stb = devicesInfo.allStbs[index];
                    var customChannelNumbering = {
                        stb: stb,
                        customChannelNumbers: customChannelNumbers || [],
                        isMaster: !!devicesInfo.masterStb && devicesInfo.masterStb.zosaId == stb.zosaId,
                        isCurrentStb: devicesInfo.currentStb.zosaId == stb.zosaId
                    };
                    return customChannelNumbering;
                })
                    .filter(function (customChannelNumbering) { return customChannelNumbering.customChannelNumbers.length > 0; });
                return {
                    currentDeviceId: devicesInfo.currentStb.zosaId,
                    customChannelNumberings: allCustomChannelNumberings.filter(function (customChannelNumbering) { return !customChannelNumbering.isCurrentStb; })
                };
            });
        };
        var ChannelManagement_1;
        ChannelManagement.COMPLETE_LIST_ID = "dt:ZHQ6Q29tcGxldGVDaGFubmVsTGlzdA==";
        __decorate([
            public_1.log2(function () { return ({ name: ChannelManagement_1.TAG }); })
        ], ChannelManagement, "addFavorites", null);
        __decorate([
            public_1.log2(function () { return ({ name: ChannelManagement_1.TAG }); })
        ], ChannelManagement, "getChannelByCmsId", null);
        __decorate([
            public_1.log2(function () { return ({ name: ChannelManagement_1.TAG }); })
        ], ChannelManagement, "getChannelByZosaId", null);
        __decorate([
            public_1.log2(function () { return ({ name: ChannelManagement_1.TAG }); })
        ], ChannelManagement, "getPreviousTunedNonFunctionalChannelFromHistory", null);
        __decorate([
            public_1.log2(function () { return ({ name: ChannelManagement_1.TAG }); })
        ], ChannelManagement, "getNonFunctionalChannels", null);
        __decorate([
            public_1.log2(function () { return ({ name: ChannelManagement_1.TAG }); })
        ], ChannelManagement, "removeFavorites", null);
        __decorate([
            public_1.log2(function () { return ({ name: ChannelManagement_1.TAG, parameters: [1] }); })
        ], ChannelManagement, "setCustomChannelNumbering", null);
        __decorate([
            public_1.log2(function () { return ({ name: ChannelManagement_1.TAG }); })
        ], ChannelManagement, "saveChannelChanges", null);
        __decorate([
            public_1.log2(function () { return ({ name: ChannelManagement_1.TAG }); })
        ], ChannelManagement, "getCompleteChannelList", null);
        __decorate([
            public_1.log2(function () { return ({ name: ChannelManagement_1.TAG }); })
        ], ChannelManagement, "copyChannelListFromMasterStbEnabled", null);
        __decorate([
            public_1.log2(function () { return ({ name: ChannelManagement_1.TAG }); })
        ], ChannelManagement, "copyChannelListFromMasterStb", null);
        __decorate([
            public_1.log2(function () { return ({ name: ChannelManagement_1.TAG }); })
        ], ChannelManagement, "copyChannelList", null);
        __decorate([
            public_1.log2(function () { return ({ name: ChannelManagement_1.TAG }); })
        ], ChannelManagement, "getCopyChannelListOptions", null);
        ChannelManagement = ChannelManagement_1 = __decorate([
            public_1.logTag()
        ], ChannelManagement);
        return ChannelManagement;
    }());
    exports.ChannelManagement = ChannelManagement;
});
//# sourceMappingURL=applicationclient.channelmanagement.js.map