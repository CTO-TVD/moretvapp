var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
define(["require", "exports", "underscore", "bluebird", "moment", "../backend/public", "src/src-de-telekom/public", "./applicationclient", "../common/extensions"], function (require, exports, _, bluebird, moment, backend, public_1, applicationclient_1, extensions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProgramManagement = void 0;
    var ProgramManagement = (function () {
        function ProgramManagement() {
        }
        ProgramManagement_1 = ProgramManagement;
        ProgramManagement.createProgramsUpdatedObservers = function (observedRegions) {
            var _a;
            var parameters = {
                observedRegions: observedRegions,
                pollingPeriod: ((_a = public_1.Configuration.instance.zenterio) === null || _a === void 0 ? void 0 : _a.programsUpdatedObserverPollingPeriodSeconds) || 1800
            };
            return backend.ServiceClientAuthenticationZosa
                .createProgramsUpdatedObserver(backend.ServiceClientContextZosa.instance, parameters)
                .then(function (response) { return response.data; });
        };
        ProgramManagement.getMediaPersons = function (mediaPersons) {
            var parameters = {
                mediaPersons: mediaPersons
            };
            return backend.ServiceClientAuthenticationZosa
                .getMediaPersons(backend.ServiceClientContextZosa.instance, parameters)
                .then(function (response) { return response.data.elements; });
        };
        ProgramManagement.getProgramDetails = function (programId) {
            return ProgramManagement_1
                .getPrograms({
                itemFields: ["long"],
                programs: [programId]
            })
                .then(function (response) { return response[0]; });
        };
        ProgramManagement.getPrograms = function (parameters) {
            var param = applicationclient_1.ApplicationClient.cloneParameter(parameters);
            var emptyProgramsPromise;
            if (param === null || param === void 0 ? void 0 : param.programs) {
                param.programs = param.programs.filter(public_1.Guard.isString);
                if (param.programs.length == 0) {
                    emptyProgramsPromise = bluebird.resolve(new public_1.MetaInfoCache(new public_1.MetaInfoService(new public_1.MetaInfoData({ elements: [] }))));
                }
            }
            var channelsPromise = applicationclient_1.ApplicationClient.channelManagement.getCompleteChannelList();
            var programsPromise = emptyProgramsPromise || backend.ServiceClientAuthenticationZosa.getPrograms(backend.ServiceClientContextZosa.instance, param);
            return bluebird.all([channelsPromise, programsPromise])
                .then(function (_a) {
                var channels = _a[0], programs = _a[1];
                var result = programs.data.elements
                    .filter(public_1.Guard.isObject)
                    .filter(function (program) { return public_1.Guard.isDefined(channels.getItem(program.channelId)); })
                    .map(function (program) { return extensions_1.ZosaProgramItemExtensions.update(program, channels.getItem(program.channelId)); });
                return new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); }, result);
            });
        };
        ProgramManagement.getProgramsForChannels = function (channels, startTime, endTime) {
            var completeChannelList;
            return applicationclient_1.ApplicationClient.channelManagement.getCompleteChannelList()
                .then(function (allChannels) {
                completeChannelList = allChannels;
                var getProgramsPromises = channels.map(function (channel) {
                    var extendedChannel = allChannels.getItem(channel.zosaId);
                    if (!extendedChannel) {
                        return bluebird.resolve([]);
                    }
                    var params = {
                        startTime: startTime,
                        endTime: endTime,
                        channel: channel.zosaId
                    };
                    return backend.ServiceClientAuthenticationZosa.getPrograms(backend.ServiceClientContextZosa.instance, params)
                        .then(function (response) { return response.data.elements; });
                });
                return bluebird.all(getProgramsPromises);
            })
                .then(function (responses) {
                return responses.map(function (channelPrograms) {
                    var result = channelPrograms
                        .filter(public_1.Guard.isObject)
                        .map(function (program) { return extensions_1.ZosaProgramItemExtensions.update(program, completeChannelList.getItem(program.channelId)); });
                    return new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); }, result);
                });
            });
        };
        ProgramManagement.getCurrentProgramAtEpg = function (channel, timeshiftOffset) {
            if (timeshiftOffset === void 0) { timeshiftOffset = 0; }
            var currentTime = new Date(new Date().valueOf() - timeshiftOffset);
            return ProgramManagement_1
                .getProgramRange(channel, currentTime)
                .then(function (response) {
                if (response.length > 0) {
                    var currentIndex_1 = -1;
                    response.forEach(function (item, index) {
                        if (item.startTime <= currentTime && currentTime < item.endTime) {
                            currentIndex_1 = index;
                        }
                    });
                    return (currentIndex_1 != -1) ? response[currentIndex_1] : undefined;
                }
                return undefined;
            });
        };
        ProgramManagement.getCurrentProgramsAtEpg = function (channels) {
            var currentTime = new Date(new Date().valueOf());
            return ProgramManagement_1.getProgramRanges(channels, currentTime)
                .then(function (channelProgramLists) {
                return channels.map(function (channel, channelIndex) {
                    var channelPrograms = channelProgramLists[channelIndex];
                    if (channelPrograms.length > 0) {
                        var currentIndex_2 = -1;
                        channelPrograms.forEach(function (item, index) {
                            if (item.startTime <= currentTime && currentTime < item.endTime) {
                                currentIndex_2 = index;
                            }
                        });
                        return (currentIndex_2 != -1) ? channelPrograms[currentIndex_2] : undefined;
                    }
                    return undefined;
                });
            });
        };
        ProgramManagement.getOtherProgramInstances = function (program) {
            if (program && !program.cmsId) {
                return bluebird.resolve(undefined);
            }
            var parameters = {
                content: program.zosaId,
                contentTypes: [backend.zosaStatic.ZOSA_TYPE_PROGRAM_ITEM],
                serviceProvider: null
            };
            return backend.ServiceClientAuthenticationZosa
                .getOtherInstances(backend.ServiceClientContextZosa.instance, parameters)
                .then(function (response) {
                return ProgramManagement_1
                    .getPrograms({
                    programs: response.data.elements.map(function (program) { return program.zosaId; })
                });
            })
                .then(function (response) {
                return _.sortBy(response, "startTime");
            });
        };
        ProgramManagement.getNextOnChannel = function (channel, itemsCount) {
            return ProgramManagement_1.attachProgramItems(channel, new Date(), itemsCount, []);
        };
        ProgramManagement.attachProgramItems = function (channel, timeFrom, itemsCount, items) {
            return ProgramManagement_1.getProgramRange(channel, timeFrom)
                .then(function (newItems) {
                if (newItems.length == 0) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("attachProgramItems interrupted because getProgramRange result was empty.", ProgramManagement_1.TAG)); });
                    return bluebird.resolve(items);
                }
                var skipFirstItem = ((items.length > 0) && (items[items.length - 1].zosaId === newItems[0].zosaId));
                var newArray = __spreadArray(__spreadArray([], items), (skipFirstItem ? newItems.slice(1) : newItems).filter(function (newItem) { return moment(newItem.startTime).isAfter(new Date()); }));
                return newArray.length < itemsCount ?
                    ProgramManagement_1.attachProgramItems(channel, new Date(timeFrom.getTime() + (6 * 60 * 60 * 1000)), itemsCount, newArray) :
                    bluebird.resolve(newArray.slice(0, itemsCount));
            });
        };
        ProgramManagement.getProgramRange = function (channel, currentTime) {
            var hours = currentTime.getHours();
            var startTime = new Date(currentTime.valueOf());
            var endTime = new Date(currentTime.valueOf());
            if ((0 <= hours) && (hours < 6)) {
                startTime.setHours(0, 0, 0, 0);
                endTime.setHours(6, 0, 0, 0);
            }
            else if ((6 <= hours) && (hours < 12)) {
                startTime.setHours(6, 0, 0, 0);
                endTime.setHours(12, 0, 0, 0);
            }
            else if ((12 <= hours) && (hours < 18)) {
                startTime.setHours(12, 0, 0, 0);
                endTime.setHours(18, 0, 0, 0);
            }
            else {
                startTime.setHours(18, 0, 0, 0);
                endTime.setHours(24, 0, 0, 0);
            }
            return ProgramManagement_1
                .getPrograms({
                channel: typeof channel === "string" ? channel : channel.zosaId,
                startTime: startTime,
                endTime: endTime
            });
        };
        ProgramManagement.getProgramRanges = function (channels, currentTime) {
            var hours = currentTime.getHours();
            var startTime = new Date(currentTime.valueOf());
            var endTime = new Date(currentTime.valueOf());
            if ((0 <= hours) && (hours < 6)) {
                startTime.setHours(0, 0, 0, 0);
                endTime.setHours(6, 0, 0, 0);
            }
            else if ((6 <= hours) && (hours < 12)) {
                startTime.setHours(6, 0, 0, 0);
                endTime.setHours(12, 0, 0, 0);
            }
            else if ((12 <= hours) && (hours < 18)) {
                startTime.setHours(12, 0, 0, 0);
                endTime.setHours(18, 0, 0, 0);
            }
            else {
                startTime.setHours(18, 0, 0, 0);
                endTime.setHours(24, 0, 0, 0);
            }
            return ProgramManagement_1.getProgramsForChannels(channels, startTime, endTime);
        };
        ProgramManagement.registerNonSatelliteChannelsObserver = function () {
            var _a;
            var currentObserver;
            var observerFunc = function () {
                applicationclient_1.ApplicationClient.channelManagement
                    .getCompleteChannelList()
                    .then(function (channelList) {
                    var startDate = new Date();
                    startDate.setDate(startDate.getDate());
                    var endDate = new Date();
                    endDate.setDate(endDate.getDate() + 14);
                    var observedRegions = [];
                    channelList
                        .filter(function (channel) { return channel.dtExtensions.channelTransmissionType !== 2; })
                        .forEach(function (channel) {
                        if (!channel.dtExtensions.isFunctionalChannel) {
                            observedRegions.push({ channelId: channel.zosaId, endTime: endDate.valueOf(), startTime: startDate.valueOf() });
                        }
                    });
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("registerNonSatelliteChannelsObserver: creating observer for " + observedRegions.length + " channels.", ProgramManagement_1.TAG)); });
                    return ProgramManagement_1
                        .createProgramsUpdatedObservers(observedRegions);
                })
                    .then(function (observer) {
                    currentObserver = observer;
                    if (observer) {
                        public_1.Logger.debug(function (log) { return log(public_1.LogMsg("registerNonSatelliteChannelsObserver: oberver created", ProgramManagement_1.TAG)); });
                        observer.setOnProgramsUpdated(function (event) {
                            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("ProgramsUpdatedObserverEvent for non satellite channel: " + JSON.stringify(event), ProgramManagement_1.TAG)); });
                            public_1.CacheManager.next({ reason: "ProgramUpdate" });
                        });
                    }
                })
                    .catch(public_1.ErrorManager.catchFunc(ProgramManagement_1, 0x01));
            };
            setInterval(function () {
                if (currentObserver) {
                    currentObserver.destroy();
                    currentObserver = undefined;
                }
                observerFunc();
            }, (((_a = public_1.Configuration.instance.zenterio) === null || _a === void 0 ? void 0 : _a.programsUpdatedObserverRecreationPeriodSeconds) || 3600) * 1000);
            observerFunc();
        };
        ProgramManagement.registerSatelliteChannelObserver = function (channel) {
            if ((channel === null || channel === void 0 ? void 0 : channel.dtExtensions) && channel.dtExtensions.channelTransmissionType === 2) {
                if (!ProgramManagement_1.satelliteChannelObservers.some(function (item) { return item.channelId === channel.zosaId; })) {
                    var startDate = new Date();
                    startDate.setDate(startDate.getDate());
                    var endDate = new Date();
                    endDate.setDate(endDate.getDate() + 14);
                    var observedRegions = [{ channelId: channel.zosaId, endTime: endDate.valueOf(), startTime: startDate.valueOf() }];
                    ProgramManagement_1
                        .createProgramsUpdatedObservers(observedRegions)
                        .then(function (observer) {
                        if (observer) {
                            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("registerSatelliteChannelsObserver: oberver created", ProgramManagement_1.TAG)); });
                            observer.setOnProgramsUpdated(function (event) {
                                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("ProgramsUpdatedObserverEvent for satellite channel: " + JSON.stringify(event), ProgramManagement_1.TAG)); });
                                public_1.CacheManager.next({ reason: "ProgramUpdate" });
                            });
                            ProgramManagement_1.satelliteChannelObservers.push({ channelId: channel.zosaId, observer: observer });
                            if (ProgramManagement_1.satelliteChannelObservers.length > 20) {
                                var removedObserver = ProgramManagement_1.satelliteChannelObservers.pop();
                                if (removedObserver === null || removedObserver === void 0 ? void 0 : removedObserver.observer) {
                                    removedObserver.observer.destroy();
                                }
                            }
                        }
                    })
                        .catch(public_1.ErrorManager.catchFunc(ProgramManagement_1, 0x02));
                }
            }
        };
        var ProgramManagement_1;
        ProgramManagement.classID = 0x104;
        ProgramManagement.satelliteChannelObservers = [];
        __decorate([
            public_1.log2(function () { return ({ name: ProgramManagement_1.TAG }); })
        ], ProgramManagement, "getCurrentProgramAtEpg", null);
        __decorate([
            public_1.log2(function () { return ({ name: ProgramManagement_1.TAG }); })
        ], ProgramManagement, "getCurrentProgramsAtEpg", null);
        __decorate([
            public_1.log2(function () { return ({ name: ProgramManagement_1.TAG, parameters: [1, 2] }); })
        ], ProgramManagement, "attachProgramItems", null);
        ProgramManagement = ProgramManagement_1 = __decorate([
            public_1.logTag()
        ], ProgramManagement);
        return ProgramManagement;
    }());
    exports.ProgramManagement = ProgramManagement;
});
//# sourceMappingURL=applicationclient.programmanagement.js.map