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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
define(["require", "exports", "rxjs", "../backend/public", "bluebird", "lokijs", "moment", "src/src-de-telekom/public"], function (require, exports, rxjs_1, backend, bluebird, lokijs, moment, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServiceClientZosaMock = void 0;
    var getProgramsMode;
    (function (getProgramsMode) {
        getProgramsMode[getProgramsMode["Normal"] = 0] = "Normal";
        getProgramsMode[getProgramsMode["OtherInstances"] = 1] = "OtherInstances";
    })(getProgramsMode || (getProgramsMode = {}));
    var ServiceClientZosaMock = (function () {
        function ServiceClientZosaMock() {
            var _this = this;
            this.DEVICE_TYPE_STB = 1;
            this.masterStbIndex = 0;
            this.tdsFlags = {};
            this.eventManager = new public_1.EventManager();
            this.subjectOnRecordingChanged = new rxjs_1.Subject();
            this.comfortFeatureSecondsTimeoutHandle = 0;
            this.comfortFeatureActiveSeconds = 0;
            this.comfortFeatureDurationSeconds = 240;
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("constructor called.", ServiceClientZosaMock_1.TAG)); });
            this.tdsFlags.p100 = "1";
            this.tdsFlags.p172 = "0";
            this.tdsFlags.p169 = "1";
            this.tdsFlags.p170 = "1";
            this.tdsFlags.p171 = "1";
            this.tdsFlags.p173 = "0";
            window.resolveStreamMapping = function (id) {
                return _this.getDatabase()
                    .then(function (db) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
                    var streamItems = db.getCollection("streams");
                    var channels = db.getCollection("channels");
                    var playbackHistory = db.getCollection("playbackHistory");
                    var channel = channels.chain().find({ $or: [{ zosaId: { $eq: id } }, { "streams.zosaId": { $eq: id } }, { "pipStream.zosaId": { $eq: id } }] }).data()[0];
                    var channelStream = (_b = (_a = channel.streams) === null || _a === void 0 ? void 0 : _a.filter(function (stream) { return (stream.zosaId === id); })[0]) !== null && _b !== void 0 ? _b : (_c = channel.streams) === null || _c === void 0 ? void 0 : _c[0];
                    var pipStream = ((_d = channel.pipStream) === null || _d === void 0 ? void 0 : _d.zosaId) === id;
                    var streams = streamItems.chain().data()[((_e = channel.channelNumber) !== null && _e !== void 0 ? _e : 0) % streamItems.count()];
                    var selectedStream = pipStream ? streams.pipStream
                        : (((_g = (_f = streams.channelStreams) === null || _f === void 0 ? void 0 : _f.uhd) === null || _g === void 0 ? void 0 : _g.videoDefinition) === (channelStream === null || channelStream === void 0 ? void 0 : channelStream.videoDefinition)) ? (_h = streams.channelStreams) === null || _h === void 0 ? void 0 : _h.uhd
                            : (((_k = (_j = streams.channelStreams) === null || _j === void 0 ? void 0 : _j.hd) === null || _k === void 0 ? void 0 : _k.videoDefinition) === (channelStream === null || channelStream === void 0 ? void 0 : channelStream.videoDefinition)) ? (_l = streams.channelStreams) === null || _l === void 0 ? void 0 : _l.hd
                                : (((_o = (_m = streams.channelStreams) === null || _m === void 0 ? void 0 : _m.sd) === null || _o === void 0 ? void 0 : _o.videoDefinition) === (channelStream === null || channelStream === void 0 ? void 0 : channelStream.videoDefinition)) ? (_p = streams.channelStreams) === null || _p === void 0 ? void 0 : _p.sd
                                    : (_t = (_r = (_q = streams.channelStreams) === null || _q === void 0 ? void 0 : _q.uhd) !== null && _r !== void 0 ? _r : (_s = streams.channelStreams) === null || _s === void 0 ? void 0 : _s.hd) !== null && _t !== void 0 ? _t : (_u = streams.channelStreams) === null || _u === void 0 ? void 0 : _u.sd;
                    var url = selectedStream === null || selectedStream === void 0 ? void 0 : selectedStream.url;
                    var result = playbackHistory
                        .chain()
                        .find({ zosaType: { $in: backend.zosaStatic.ZOSA_TYPE_CHANNEL_ITEM } })
                        .simplesort("$loki")
                        .data();
                    playbackHistory.remove(result);
                    var lastTunedChannel = result[1] || result[0];
                    if (lastTunedChannel) {
                        playbackHistory.insert(lastTunedChannel);
                    }
                    playbackHistory.insert({
                        zosaId: channel.zosaId,
                        zosaType: backend.zosaStatic.ZOSA_TYPE_CHANNEL_ITEM
                    });
                    return { channel: channel, url: url, streamId: (_v = channelStream === null || channelStream === void 0 ? void 0 : channelStream.zosaId) !== null && _v !== void 0 ? _v : "" };
                });
            };
        }
        ServiceClientZosaMock_1 = ServiceClientZosaMock;
        ServiceClientZosaMock.prototype.getOnRecordingChangedSubject = function () {
            return this.subjectOnRecordingChanged;
        };
        ServiceClientZosaMock.prototype.login = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()))
                .then(function (response) {
                if (context.url != parameters.url) {
                    throw new backend.ZosaCommunicationError("zosa connection failure", { code: 0, message: "" });
                }
                return response;
            });
        };
        ServiceClientZosaMock.prototype.serviceProviderLogin = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.createProgramsUpdatedObserver = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.getDFCC = function (context) {
            return public_1.RestClient.instance
                .get("mockData/zosa/getDfcc.json")
                .then(function (data) { return new public_1.MetaInfoService(new public_1.MetaInfoData(data.responseData)); });
        };
        ServiceClientZosaMock.prototype.getPrograms = function (context, parameters, mode) {
            var _this = this;
            if (mode === void 0) { mode = getProgramsMode.Normal; }
            var param = __assign(__assign({}, parameters), { itemFields: parameters.itemFields || [], offset: parameters.offset || 0, limit: parameters.limit || Number.MAX_VALUE });
            var serviceData = new public_1.MetaInfoServiceData();
            var funcClone = function (program, channel, channelId, zosaId) {
                var _a, _b;
                var obj = _this.clone(program);
                obj.channelId = channelId;
                obj.clientPvrAllowed = ((_a = channel.streams) === null || _a === void 0 ? void 0 : _a[0]) ? channel.streams[0].clientPvrAllowed : false;
                obj.clientPvrSupported = ((_b = channel.streams) === null || _b === void 0 ? void 0 : _b[0]) ? channel.streams[0].clientPvrSupported : false;
                obj.cmsId = obj.zosaId;
                obj.zosaId = zosaId;
                return obj;
            };
            var funcCloneOtherInstances = function (program, channel, channelId, zosaId) {
                var obj = {};
                obj.ratableId = program.ratableId;
                obj.zosaId = zosaId;
                return obj;
            };
            return this.getDatabase()
                .then(function (db) {
                var programs = db.getCollection("programs");
                var channels = db.getCollection("channels").chain();
                var result = programs.chain().where(function (item) { return (!param.startTime || (param.startTime < item.endTime)) && (!param.endTime || (param.endTime >= item.startTime)); });
                var processingData = [];
                if (param.channel) {
                    var channelId_1 = _this.convertToString(param.channel);
                    var channel_1 = channels.where(function (item) { return item.zosaId == channelId_1; }).data()[0];
                    processingData = result
                        .where(function (item) { return channelId_1.indexOf(item.channelId) == 0; })
                        .map(function (program) { return funcClone(program, channel_1, channelId_1, program.zosaId + ":" + channelId_1); })
                        .data();
                }
                else if (param.programs) {
                    var _loop_1 = function (programId) {
                        var filteredPrograms = result
                            .copy()
                            .where(function (item) { return programId.indexOf(item.zosaId) == 0; })
                            .map(function (program) {
                            var channel = channels.copy().where(function (item) { return programId.indexOf(item.zosaId) > -1; }).data()[0];
                            return funcClone(program, channel, channel.zosaId, program.zosaId + ":" + channel.zosaId);
                        })
                            .data();
                        processingData.push.apply(processingData, filteredPrograms);
                    };
                    for (var _i = 0, _a = _this.convertToStrings(param.programs); _i < _a.length; _i++) {
                        var programId = _a[_i];
                        _loop_1(programId);
                    }
                }
                else if (param.externalProgramIds) {
                    var _loop_2 = function (externalProgramId) {
                        var filteredPrograms = result
                            .copy()
                            .where(function (item) { return public_1.Guard.isDefined(item.cmsId) && externalProgramId.indexOf(item.cmsId) !== -1 || externalProgramId.indexOf(item.zosaId) !== -1; })
                            .map(function (program) {
                            var channel = channels.copy().where(function (item) { return item.zosaId.indexOf(program.channelId) > -1; }).data()[0];
                            return funcClone(program, channel, channel.zosaId, program.zosaId + ":" + channel.zosaId);
                        })
                            .data();
                        processingData.push.apply(processingData, filteredPrograms);
                    };
                    for (var _b = 0, _c = param.externalProgramIds; _b < _c.length; _b++) {
                        var externalProgramId = _c[_b];
                        _loop_2(externalProgramId);
                    }
                }
                else {
                    var programData_1 = result.copy().data();
                    channels.data().forEach(function (channel) {
                        var channelId = channel.zosaId.split(":")[0];
                        var filteredPrograms = programData_1
                            .filter(function (item) { return channelId === item.channelId; })
                            .map(function (program) {
                            switch (mode) {
                                case getProgramsMode.Normal:
                                    return funcClone(program, channel, channel.zosaId, program.zosaId + ":" + channel.zosaId);
                                case getProgramsMode.OtherInstances:
                                    return funcCloneOtherInstances(program, channel, channel.zosaId, program.zosaId + ":" + channel.zosaId);
                            }
                        });
                        processingData.push.apply(processingData, filteredPrograms);
                    });
                }
                var total = processingData.length;
                processingData = processingData.slice(param.offset, param.offset + param.limit);
                serviceData.responseTime = new Date();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(_this.convertToList(param.itemFields, processingData, param.offset, total)), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.clearCustomChannelNumbering = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.getChannels = function (context, parameters) {
            var _this = this;
            var param = __assign(__assign({}, parameters), { itemFields: parameters.itemFields || [], offset: parameters.offset || 0, limit: parameters.limit || Number.MAX_VALUE });
            var serviceData = new public_1.MetaInfoServiceData();
            return this.getDatabase()
                .then(function (db) {
                var channels = db.getCollection("channels");
                var categoryMapping = db.getCollection("categoryMapping");
                var favoriteMapping = db.getCollection("favoriteMapping");
                var result = channels.chain();
                if (param.favoriteList) {
                    var favoriteListId_1 = _this.convertToString(param.favoriteList);
                    var favoriteChannelIds = favoriteMapping.where(function (item) { return item.favoriteId == favoriteListId_1; }).map(function (item) { return item.itemZosaId; });
                    result = result.find({ zosaId: { $in: favoriteChannelIds } });
                }
                else if (param.category) {
                    var categoryId_1 = _this.convertToString(param.category);
                    var categoryChannelIds = categoryMapping.where(function (item) { return item.categoryId == categoryId_1; }).map(function (item) { return item.channelIds; })[0];
                    result = result.find({ zosaId: { $in: categoryChannelIds } });
                }
                if (param.channels) {
                    var channelIds = _this.convertToStrings(param.channels);
                    result = result.find({ zosaId: { $in: channelIds } });
                }
                if ((param.includeHidden !== undefined) && !param.includeHidden) {
                    result = result.find({ isHidden: { $eq: false } });
                }
                var total = result.count();
                result = result
                    .simplesort("$loki")
                    .offset(param.offset)
                    .limit(param.limit);
                serviceData.responseTime = new Date();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(_this.convertToList(param.itemFields, result.data(), param.offset, total)), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.getCustomChannelNumbering = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.setCustomChannelNumbering = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.getDevices = function (context, parameters) {
            var _this = this;
            var param = __assign(__assign({}, parameters), { itemFields: parameters.itemFields || [], offset: parameters.offset || 0, limit: parameters.limit || Number.MAX_VALUE });
            var serviceData = new public_1.MetaInfoServiceData();
            return this.getDatabase()
                .then(function (db) {
                var result = db.getCollection("devices").chain();
                var total = result.count();
                result = result.offset(param.offset).limit(param.limit);
                serviceData.responseTime = new Date();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(_this.convertToList(param.itemFields, result.data(), param.offset, total)), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.getMediaPersons = function (context, parameters) {
            var _this = this;
            var param = __assign(__assign({}, parameters), { itemFields: parameters.itemFields || [], offset: parameters.offset || 0, limit: parameters.limit || Number.MAX_VALUE });
            var serviceData = new public_1.MetaInfoServiceData();
            return this.getDatabase()
                .then(function (db) {
                var result = db.getCollection("mediaPersons").chain();
                if (parameters.mediaPersons) {
                    var mediaPersonsIds_1 = _this.convertToStrings(parameters.mediaPersons);
                    result = result.where(function (item) { return mediaPersonsIds_1.indexOf(item.zosaId) != -1; });
                }
                var total = result.count();
                result = result.offset(param.offset).limit(param.limit);
                serviceData.responseTime = new Date();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(_this.convertToList(param.itemFields, result.data(), param.offset, total)), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.getOtherInstances = function (context, parameters) {
            var _this = this;
            var serviceData = new public_1.MetaInfoServiceData();
            return this.getPrograms(context, { itemFields: ["ratableId"] }, getProgramsMode.OtherInstances)
                .then(function (response) {
                var groups = response.data.elements.filter(public_1.Guard.isObject).filter(function (value) { return parameters.content.toString().indexOf(value.zosaId) == 0; });
                var otherInstances = groups.map(function (group) { return response.data.elements.filter(public_1.Guard.isObject).filter(function (value) { return value.ratableId == group.ratableId; }); });
                var getProgramsParameter = {
                    endTime: parameters.endTime,
                    itemFields: parameters.itemFields,
                    programs: [],
                    startTime: parameters.startTime
                };
                otherInstances.forEach(function (others) { return others
                    .filter(function (instance) { return (parameters.content.toString().indexOf(instance.zosaId) == -1); })
                    .forEach(function (value) { return getProgramsParameter.programs.push(value.zosaId); }); });
                return _this.getPrograms(context, getProgramsParameter);
            })
                .then(function (response) {
                var result = response.data.elements.filter(public_1.Guard.isObject);
                serviceData.responseTime = new Date();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(_this.convertToList(parameters.itemFields, result, 0, result.length)), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.getItems = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.deleteMarkedRecordingConflicts = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.getNextRecordingConflict = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.getParentRecordings = function (context, parameters) {
            var _this = this;
            var param = __assign(__assign({}, parameters), { itemFields: parameters.itemFields || [] });
            var serviceData = new public_1.MetaInfoServiceData();
            return this.getDatabase()
                .then(function (db) {
                var result = db.getCollection("parentRecordings")
                    .chain()
                    .data();
                serviceData.responseTime = new Date();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(_this.convertToList(param.itemFields, result, 0, result.length)), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.getRecordingSpaceInfo = function (context, parameters) {
            var _this = this;
            var serviceData = new public_1.MetaInfoServiceData();
            return this.getDatabase()
                .then(function (db) {
                var result = db.getCollection("recordingSpaceInfo").chain();
                var time = moment();
                var factor = 1 - (time.diff(time.clone().startOf("day"), "minutes") / 1440);
                result.update(function (item) {
                    var _a, _b;
                    item.availableKiB = Math.floor(factor * ((_a = item.totalKiB) !== null && _a !== void 0 ? _a : 0));
                    item.availableSeconds = Math.floor(factor * ((_b = item.totalSeconds) !== null && _b !== void 0 ? _b : 0));
                });
                if (parameters.recordingSpaceType) {
                    result = result.find({ recordingSpaceType: { $in: parameters.recordingSpaceType } });
                }
                var total = result.count();
                serviceData.responseTime = new Date();
                var itemFields = ["availableKiB", "availableSeconds", "deviceId", "recordingSpaceType", "totalKiB", "totalSeconds"];
                return new public_1.MetaInfoService(new public_1.MetaInfoData(_this.convertToList(itemFields, result.data(), 0, total)), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.getRecordings = function (context, parameters) {
            var _this = this;
            var param = __assign(__assign({}, parameters), { itemFields: parameters.itemFields || [], offset: parameters.offset || 0, limit: parameters.limit || Number.MAX_VALUE, state: parameters.state || backend.zosaStatic.RECORDING_STATE_NONE });
            var serviceData = new public_1.MetaInfoServiceData();
            return this.getDatabase()
                .then(function (db) {
                var currentTime = new Date().valueOf();
                var result = db.getCollection("recordings").chain();
                if (param.recordings) {
                    var recordingIds = _this.convertToStrings(param.recordings);
                    result = result.find({ zosaId: { $in: recordingIds } });
                }
                if (param.parentRecording) {
                    result = result.find({ parentRecordingIds: { $contains: param.parentRecording } });
                }
                if (param.state) {
                    result = result.where(function (item) { return (item.recordingState & param.state) > 0; });
                }
                result.update(function (recording) {
                    if (currentTime <= (recording.startTime - recording.startMargin)) {
                        recording.duration = 0;
                    }
                    if ((currentTime > (recording.startTime - recording.startMargin)) && (currentTime < (recording.endTime + recording.endMargin))) {
                        recording.duration = currentTime - recording.startTime;
                        recording.recordingState = backend.zosaStatic.RECORDING_STATE_ONGOING;
                    }
                    if (currentTime >= (recording.endTime + recording.endMargin)) {
                        recording.duration = recording.endTime - recording.startTime;
                        recording.recordingState = backend.zosaStatic.RECORDING_STATE_COMPLETE;
                    }
                    recording.sizeKB = recording.duration / 1000 * (4000 / 8);
                });
                var total = result.count();
                result = result.offset(param.offset).limit(param.limit);
                serviceData.responseTime = new Date();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(_this.convertToList(param.itemFields, result.data(), param.offset, total)), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.removeRecordings = function (context, parameters) {
            var _this = this;
            return this.getDatabase()
                .then(function (db) {
                var recordings = db.getCollection("recordings");
                var parentRecordings = db.getCollection("parentRecordings");
                if (_this.isZosaRemoveRecordingsParamsByIds(parameters)) {
                    var param = __assign({}, parameters);
                    for (var _i = 0, _a = _this.convertToStrings(param.recordings); _i < _a.length; _i++) {
                        var recordingId = _a[_i];
                        var recordingToRemove = recordings.chain().find({ zosaId: { $eq: recordingId } }).data();
                        var parentRecordingToRemove = parentRecordings.chain().find({ zosaId: { $eq: recordingId } }).data();
                        if (recordingToRemove && (recordingToRemove.length > 0)) {
                            recordings.remove(recordingToRemove);
                        }
                        if (parentRecordingToRemove && (parentRecordingToRemove.length > 0)) {
                            parentRecordings.remove(parentRecordingToRemove);
                        }
                    }
                }
                else {
                    var param_1 = __assign(__assign({}, parameters), { state: parameters.state || backend.zosaStatic.RECORDING_STATE_NONE });
                    var result = recordings.chain();
                    if (param_1.parentRecording) {
                        var parentRecordingId = _this.convertToString(param_1.parentRecording);
                        result = result.find({ parentRecordingId: { $eq: parentRecordingId } });
                    }
                    if (param_1.state) {
                        result = result.where(function (item) { return (item.recordingState & param_1.state) > 0; });
                    }
                    if (param_1.type) {
                        result = result.find({ recordingType: { $eq: param_1.type } });
                    }
                    recordings.remove(result.data());
                }
                return new public_1.MetaInfoService(new public_1.MetaInfoData());
            });
        };
        ServiceClientZosaMock.prototype.scheduleIntervalRecording = function (context, parameters) {
            var _this = this;
            return this.getDatabase()
                .then(function (db) {
                var recordings = db.getCollection("recordings");
                var channelId = _this.convertToString(parameters.channel);
                var recordingId = "rec:" + _this.randomZosaId();
                var currentTime = new Date().valueOf();
                var newItem = {
                    channelId: channelId,
                    description: parameters.description,
                    endMargin: parameters.endMargin,
                    endTime: parameters.endTime,
                    recordingState: parameters.startTime.valueOf() <= currentTime ? backend.zosaStatic.RECORDING_STATE_ONGOING : backend.zosaStatic.RECORDING_STATE_SCHEDULED,
                    recordingType: parameters.type,
                    startMargin: parameters.startMargin,
                    startTime: parameters.startTime,
                    title: parameters.name || moment().format("DD_MM_YYYY_HH_mm"),
                    zosaId: recordingId,
                    zosaType: backend.zosaStatic.ZOSA_TYPE_RECORDING_ITEM,
                    videoDefinition: parameters.videoDefinition
                };
                recordings.insert(newItem);
                return new public_1.MetaInfoService(new public_1.MetaInfoData({ recordingId: recordingId }));
            });
        };
        ServiceClientZosaMock.prototype.scheduleProgramRecording = function (context, parameters) {
            var _this = this;
            return this.getDatabase()
                .then(function (db) {
                return _this.getPrograms(context, { itemFields: ["channelId", "endTime", "episodeName", "episodeNumber", "images", "seriesId", "seasonName", "seasonNumber", "startTime", "title"] })
                    .then(function (programs) {
                    var parentRecordings = db.getCollection("parentRecordings");
                    var recordings = db.getCollection("recordings");
                    var programId = _this.convertToString(parameters.program);
                    var program = programs.data.elements.filter(public_1.Guard.isObject).filter(function (item) { return programId.indexOf(item.zosaId) == 0; })[0];
                    var channelId = _this.convertToString(parameters.channel);
                    var recordingId;
                    var parentRecordingId;
                    var parentRecording;
                    if (parameters.isSeries) {
                        parentRecordingId = "rec:" + _this.randomZosaId();
                        parentRecording = {
                            channelId: channelId,
                            endMargin: 300000,
                            parentType: backend.zosaStatic.PARENT_RECORDING_TYPE_SERIES,
                            recordingType: parameters.type,
                            startMargin: 180000,
                            title: program.seriesName || program.title,
                            zosaId: parentRecordingId,
                            zosaType: backend.zosaStatic.ZOSA_TYPE_PARENT_RECORDING_ITEM
                        };
                    }
                    var allPrograms = parameters.isSeries ? programs.data.elements.filter(public_1.Guard.isObject).filter(function (item) { return (item.seriesId == program.seriesId) && (channelId.indexOf(item.channelId) == 0); }) : [program];
                    for (var _i = 0, allPrograms_1 = allPrograms; _i < allPrograms_1.length; _i++) {
                        var item = allPrograms_1[_i];
                        var newItem = {
                            channelId: item.channelId,
                            description: parameters.description,
                            endMargin: parameters.endMargin,
                            endTime: item.endTime.valueOf(),
                            images: item.images,
                            programId: item.zosaId,
                            recordingState: backend.zosaStatic.RECORDING_STATE_SCHEDULED,
                            recordingType: parameters.type,
                            startMargin: parameters.startMargin,
                            startTime: item.startTime.valueOf(),
                            title: item.title || moment().format("DD_MM_YYYY_HH_mm"),
                            zosaId: "rec:" + _this.randomZosaId(),
                            zosaType: backend.zosaStatic.ZOSA_TYPE_RECORDING_ITEM
                        };
                        if (parentRecording) {
                            newItem.parentRecordingId = parentRecording.zosaId;
                            newItem.episodeName = item.episodeName || (public_1.Guard.isString(item.title) ? item.title : undefined);
                            newItem.episodeNumber = item.episodeNumber;
                            newItem.seasonNumber = item.seasonNumber;
                        }
                        recordingId = newItem.zosaId;
                        recordings.insert(newItem);
                    }
                    if (parentRecording) {
                        parentRecordings.insert(parentRecording);
                    }
                    return new public_1.MetaInfoService(new public_1.MetaInfoData({ recordingId: (parameters.isSeries ? parentRecordingId : recordingId) }));
                });
            });
        };
        ServiceClientZosaMock.prototype.updateParentRecording = function (context, parameters) {
            return this.getDatabase()
                .then(function (db) { return new public_1.MetaInfoService(new public_1.MetaInfoData()); });
        };
        ServiceClientZosaMock.prototype.updateRecording = function (context, parameters) {
            var _this = this;
            return this.getDatabase()
                .then(function (db) {
                var recordings = db.getCollection("recordings");
                var recordingId = _this.convertToString(parameters.recording);
                var recording = recordings.chain().find({ zosaId: { $eq: recordingId } }).data()[0];
                if (recording) {
                    recording.description = parameters.description || recording.description;
                    recording.endMargin = parameters.endMargin || recording.endMargin;
                    recording.endTime = parameters.endTime ? parameters.endTime.valueOf() : recording.endTime;
                    recording.startMargin = parameters.startMargin || recording.startMargin;
                    recording.startTime = parameters.startTime ? parameters.startTime.valueOf() : recording.startTime;
                    recording.title = parameters.name || recording.title;
                    recording.videoDefinition = parameters.videoDefinition || recording.videoDefinition;
                    if (parameters.stop) {
                        recording.endMargin = 0;
                        recording.endTime = new Date().valueOf();
                    }
                }
                return new public_1.MetaInfoService(new public_1.MetaInfoData());
            });
        };
        ServiceClientZosaMock.prototype.updateRecordingConflict = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.getServiceProviders = function (context, parameters) {
            var _this = this;
            var param = __assign(__assign({}, parameters), { itemFields: ["icon", "isMainServiceProvider", "name", "title", "zosaId", "zosaType"] });
            var serviceData = new public_1.MetaInfoServiceData();
            return this.getDatabase()
                .then(function (db) {
                var result = db.getCollection("serviceProviders").chain();
                var total = result.count();
                serviceData.responseTime = new Date();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(_this.convertToList(param.itemFields, result.data(), 0, total)), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.getSubscriberInfo = function (context, parameters) {
            var zosaSubscriberInfo = {
                customProps: [
                    { key: "hddWhiteList", value: "[{\"HDDType\":\"ST500VT000-1DK142\",\"HDDPartNumber\":\"*\",\"HDDFirmware\":\"0001SDC1\"},{},{\"HDDType\":\"TOSHIBA MQ01ABD050V\",\"HDDPartNumber\":\"*\",\"HDDFirmware\":\"AX0C1Q\"}]" },
                    { key: "InterstitialPagePerST", value: "default:33903;BASISTV_DT:33903;BASISTV_PREVIEW_DT:33903;BASISTV_OTT_DT:33903;IPTV_PREVIEW_DT:33903;" },
                    { key: "portalUrl", value: "https://appepidat30002.tu0.sngtv.t-online.de:33227/EPG/NGTV_MR401/index.html?resolution=720p&subscriber_type=IPTV_PREVIEW_DT" },
                    { key: "provisioningType", value: "IPTV_PREVIEW_DT" },
                    { key: "satHouseholdWhiteList", value: "MR401B,MR601SAT,MR201" },
                    { key: "satHouseholdDeletionList", value: "MRSAT,MR201" },
                    { key: "Netflix_Disc_Partner_ID", value: "<<MOCK>>" },
                    { key: "Netflix_Disc_Partner_Key", value: "<<DEMO>>" }
                ]
            };
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(zosaSubscriberInfo)));
        };
        ServiceClientZosaMock.prototype.search = function (context, parameters) {
            var param = __assign(__assign({}, parameters), { query: parameters.query || "" });
            var serviceData = new public_1.MetaInfoServiceData();
            var path = "";
            if (param.query) {
                path = "mockData/search/search_" + param.query.toLowerCase() + "_" + param.searchProfileId.toLowerCase() + ".json";
            }
            if (param.groupId) {
                path = "mockData/search/search_" + param.groupId.toLowerCase() + ".json";
            }
            var queryData = ["12387", "16490", "72076", "321349", "a4bfd297"];
            var queryHash = this.hashCodeNum(param.query);
            var queryMock = queryData[queryHash % 5];
            if (param.searchProfileId === "persons") {
                path = "mockData/person/search_" + queryMock + "_person.json";
            }
            if (param.searchProfileId === "filmography_iptv" && !param.filter) {
                path = "mockData/person/search_" + queryMock + "_filmography.json";
            }
            if (param.searchProfileId === "filmography_iptv" && param.filter) {
                path = "mockData/person/search_" + queryMock + "_filmography_" + param.filter[0].split(":")[0] + "_" + param.filter[0].split(":")[1] + ".json";
            }
            return public_1.RestClient.instance
                .get(path, [{ key: "Content-type", value: "text/plain;charset=UTF-8" }])
                .then(function (data) {
                var responseData = JSON.parse(data.responseData);
                serviceData.responseTime = new Date();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(responseData), serviceData);
            })
                .catch(function (reason) {
                serviceData.responseTime = new Date();
                return new public_1.MetaInfoService(new public_1.MetaInfoData({
                    totalItems: 0,
                    totalGroups: 0,
                    offset: 0,
                    sort: "",
                    navigators: [],
                    results: []
                }), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.updateDevice = function (context, parameters) {
            return this.getDatabase()
                .then(function (db) {
                var devices = db.getCollection("devices");
                var device = devices.chain().find({ zosaId: { $eq: parameters.device } }).data()[0];
                device.name = parameters.name;
                return new public_1.MetaInfoService(new public_1.MetaInfoData());
            });
        };
        ServiceClientZosaMock.prototype.getCategories = function (context, parameters) {
            var _this = this;
            var param = __assign(__assign({}, parameters), { itemFields: parameters.itemFields || [], offset: parameters.offset || 0, limit: parameters.limit || Number.MAX_VALUE });
            var serviceData = new public_1.MetaInfoServiceData();
            return this.getDatabase()
                .then(function (db) {
                var categories = db.getCollection("categories");
                var result = categories.chain();
                if (param.categories) {
                    var categoryIds = _this.convertToStrings(param.categories);
                    result = result.find({ zosaId: { $in: categoryIds } });
                }
                else {
                    var parentCategoryId = param.parentCategory ? _this.convertToString(param.parentCategory) : undefined;
                    result = result.find({ parentId: { $eq: parentCategoryId } });
                }
                var total = result.count();
                result = result
                    .simplesort("$loki")
                    .offset(param.offset)
                    .limit(param.limit);
                serviceData.responseTime = new Date();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(_this.convertToList(param.itemFields, result.data(), param.offset, total)), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.getVasItems = function (context, parameters) {
            var _this = this;
            var param = __assign(__assign({}, parameters), { itemFields: parameters.itemFields || [], offset: parameters.offset || 0, limit: parameters.limit || Number.MAX_VALUE });
            var serviceData = new public_1.MetaInfoServiceData();
            return this.getDatabase()
                .then(function (db) {
                var vasItems = db.getCollection("vasItems");
                var result = vasItems.chain();
                var total = result.count();
                result = result
                    .simplesort("$loki")
                    .offset(param.offset)
                    .limit(param.limit);
                serviceData.responseTime = new Date();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(_this.convertToList(param.itemFields, result.data(), param.offset, total)), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.getVods = function (context, parameters) {
            return this.getDatabase()
                .then(function (db) {
                var serviceData = new public_1.MetaInfoServiceData();
                var vods = db.getCollection("vods");
                var data = { elements: vods.data };
                serviceData.responseTime = new Date();
                return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(data), serviceData));
            });
        };
        ServiceClientZosaMock.prototype.createPlaybackSession = function (context, parameters) {
            var serviceData = new public_1.MetaInfoServiceData();
            var data = {
                destroy: function (params) { return {}; },
                setOnStopPlayback: function () { return function () { }; },
                setOnUpdateCur: function () { return function () { }; },
                storePlaybackPosition: function (params) { return {}; }
            };
            data.mediaUrl = (parameters.media) ? parameters.media.url : "";
            serviceData.responseTime = new Date();
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(data), serviceData));
        };
        ServiceClientZosaMock.prototype.addFavorites = function (context, parameters) {
            var _this = this;
            return this.getDatabase()
                .then(function (db) {
                var channels = db.getCollection("channels");
                var favoriteMapping = db.getCollection("favoriteMapping");
                var favoriteListId = _this.convertToString(parameters.favoriteList);
                for (var _i = 0, _a = parameters.contents; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var itemId = _this.convertToString(item);
                    if (favoriteMapping.chain().find({ $and: [{ favoriteId: { $eq: favoriteListId } }, { itemZosaId: { $eq: itemId } }] }).count() == 0) {
                        favoriteMapping.insert({ favoriteId: favoriteListId, itemZosaId: itemId });
                        var channel = channels.chain().find({ zosaId: { $eq: itemId } }).data();
                        if (channel.length > 0) {
                            channel[0].isFavorited = true;
                        }
                    }
                }
                return new public_1.MetaInfoService(new public_1.MetaInfoData());
            });
        };
        ServiceClientZosaMock.prototype.getFavoriteLists = function (context, parameters) {
            var _this = this;
            var param = __assign(__assign({}, parameters), { itemFields: parameters.itemFields || [], offset: parameters.offset || 0, limit: parameters.limit || Number.MAX_VALUE });
            var serviceData = new public_1.MetaInfoServiceData();
            return this.getDatabase()
                .then(function (db) {
                var result = db.getCollection("favoriteLists").chain();
                if (param.contentType) {
                    result = result.find({ contentType: { $eq: param.contentType } });
                }
                var total = result.count();
                result = result.offset(param.offset).limit(param.limit);
                serviceData.responseTime = new Date();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(_this.convertToList(param.itemFields, result.data(), param.offset, total)), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.removeFavorites = function (context, parameters) {
            var _this = this;
            return this.getDatabase()
                .then(function (db) {
                var channels = db.getCollection("channels");
                var favoriteMapping = db.getCollection("favoriteMapping");
                var favoriteListId = _this.convertToString(parameters.favoriteList);
                var itemIds = _this.convertToStrings(parameters.contents);
                var result = favoriteMapping.chain().find({ $and: [{ favoriteId: { $eq: favoriteListId } }, { itemZosaId: { $in: itemIds } }] });
                favoriteMapping.remove(result.data());
                for (var _i = 0, itemIds_1 = itemIds; _i < itemIds_1.length; _i++) {
                    var itemId = itemIds_1[_i];
                    var channel = channels.chain().find({ zosaId: { $eq: itemId } }).data();
                    if (channel.length > 0) {
                        channel[0].isFavorited = false;
                    }
                }
                return new public_1.MetaInfoService(new public_1.MetaInfoData());
            });
        };
        ServiceClientZosaMock.prototype.getBandwidthInfo = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()))
                .then(function (response) {
                response.data = {
                    subscriberUsedBitrate: 18002.0,
                    subscriberMaxBitrate: 17000.0,
                    deviceMaxBitrate: 101999.0,
                    deviceUsedBitrate: 9001.0,
                    bookings: [{
                            device: {
                                title: "Maik MR401B",
                                zosaId: "zosa:FFxKQxpWAwQMQwdWVlFKX15TV1VDWQ",
                                zosaType: "DeviceItem",
                                deviceType: 1
                            },
                            lanBitrate: 1.0,
                            wanBitrate: 1.0,
                            taskId: "885",
                            bookingType: 0,
                            zosaType: "BandwidthBookingItem",
                            zosaId: "zosa:FFxKQxpWBRYYQwdWX1lPQxtWVlFKX15TV1VDWQ"
                        }, {
                            device: {
                                title: "Maik MREntry",
                                zosaId: "zosa:FFxKQxpWAwQMQwdWVlFKX15TV1VCVg",
                                zosaType: "DeviceItem",
                                deviceType: 1
                            },
                            lanBitrate: 1.0,
                            wanBitrate: 1.0,
                            taskId: "835",
                            bookingType: 0,
                            zosaType: "BandwidthBookingItem",
                            zosaId: "zosa:FFxKQxpWBRYYQwdWX1JPQxtWVlFKX15TV1VCVg"
                        }, {
                            lanBitrate: 9000.0,
                            device: {
                                title: "Maik MR401B",
                                zosaId: "zosa:FFxKQxpWAwQMQwdWVlFKX15TV1VDWQ",
                                zosaType: "DeviceItem",
                                deviceType: 1
                            },
                            wanBitrate: 9000.0,
                            videoDefinition: 2,
                            content: {
                                title: "Kabel 1",
                                zosaId: "fdcac892:85a7c2ba1fe",
                                zosaType: "ChannelItem"
                            },
                            taskId: "886",
                            bookingType: 2,
                            zosaId: "zosa:FFxKQxpWBRYYQwdWX1lMQxtWVlFKX15TV1VDWQ",
                            zosaType: "BandwidthBookingItem"
                        }, {
                            lanBitrate: 9000.0,
                            device: {
                                title: "Maik MREntry",
                                zosaId: "zosa:FFxKQxpWAwQMQwdWVlFKX15TV1VCVg",
                                zosaType: "DeviceItem",
                                deviceType: 1
                            },
                            wanBitrate: 9000.0,
                            videoDefinition: 2,
                            content: {
                                title: "ZDF",
                                zosaId: "79b06fdf:f235e115554",
                                zosaType: "ChannelItem"
                            },
                            taskId: "869",
                            bookingType: 2,
                            zosaId: "zosa:FFxKQxpWBRYYQwdWX1dDQxtWVlFKX15TV1VCVg",
                            zosaType: "BandwidthBookingItem"
                        }]
                };
                return response;
            });
        };
        ServiceClientZosaMock.prototype.releaseBandwidthBookings = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.getRecommendation = function (context, parameters) {
            var serviceData = new public_1.MetaInfoServiceData();
            return this.getDatabase()
                .then(function (db) {
                var data = { results: [] };
                if (parameters.scenarioId == "i2i-vod") {
                    var vodRecommendations = db.getCollection("vodRecommendations").chain().data();
                    var index = Math.floor(Math.random() * vodRecommendations.length);
                    data = vodRecommendations[index];
                }
                else if (parameters.scenarioId == "i2i-tv" && parameters.itemId) {
                    var filterValues_1 = parameters.itemId.substring(parameters.itemId.length - 2);
                    var programs = db.getCollection("programs");
                    var result = programs.chain().where(function (item) { return item.zosaId.indexOf(filterValues_1) !== -1; });
                    var processingData = result
                        .copy()
                        .map(function (program) { return ({ id: "x_" + program.zosaId, type: "tvBroadcast" }); })
                        .limit(15)
                        .data();
                    data.results = processingData;
                }
                return new public_1.MetaInfoService(new public_1.MetaInfoData(data), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.getVasCategoryId = function (context) {
            var serviceData = new public_1.MetaInfoServiceData();
            var vasCategoryId = "cat:a7ba1286";
            serviceData.responseTime = new Date();
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(vasCategoryId), serviceData));
        };
        ServiceClientZosaMock.prototype.getTdsParameters = function (context, parameterNames) {
            var _this = this;
            var serviceData = new public_1.MetaInfoServiceData();
            serviceData.responseTime = new Date();
            var response = [];
            parameterNames.forEach(function (parameterName) {
                var parameterValue = _this.tdsFlags[parameterName];
                if (parameterValue) {
                    response.push({ key: parameterName, value: parameterValue });
                }
            });
            var data = {
                retcode: "0",
                retmsg: "0000",
                parameters: response.length > 0 ? response : undefined
            };
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(data), serviceData));
        };
        ServiceClientZosaMock.prototype.setTdsParameters = function (context, parameters) {
            var _this = this;
            parameters.forEach(function (parameter) {
                if (public_1.Guard.isUndefined(parameter.value)) {
                    delete _this.tdsFlags[parameter.key];
                }
                else {
                    _this.tdsFlags[parameter.key] = parameter.value;
                }
            });
            var serviceData = new public_1.MetaInfoServiceData();
            serviceData.responseTime = new Date();
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(), serviceData));
        };
        ServiceClientZosaMock.prototype.getCustomizeConfigParameters = function (context, parameters) {
            var serviceData = new public_1.MetaInfoServiceData();
            serviceData.responseTime = new Date();
            var a = [{ key: "Default_RecCfgSeriesTimeMode", value: "0" }, { key: "OPTEnhance", value: "0" }, { key: "Default_RecCfgPrePadding", value: "2" }, { key: "SAT_SUBSCRIBER_TYPES", value: "SATHYBRID_DT,SATHYBRID_LOWBANDWIDTH_DT,SATHYBRID_MIGRATED_DT,SATHYBRID_OTT_DT,SATHYBRID_OTT_PREVIEW_DT,SATHYBRID_PREVIEW_DT,SATHYBRIDSATONLY_DT,SATHYBRID_ABTESTING_DT" }, { key: "Default_RecCfgOneClickEnable", value: "0" }, { key: "EPGTemplatUpgradeInterval", value: "240" }, { key: "Default_RecCfgPVRType", value: "1" }, { key: "OTT_PRODUCT_LANDINGPAGE_URL", value: "www.telekom.de/magenta-zuhause/magenta-tv-plus" }, { key: "WebRadioServiceAdress", value: "https://itvmusica-bl-sl0.ver.sda.t-online.de/radiorest/rest" }, { key: "UnratedName", value: "Keine Altersangabe" }, { key: "CFG_Queue_Max_Data_Items_STB_UsageEvents", value: "200" }, { key: "ChannelScopePerSatellite", value: "4|1,1000,2999|2,3000,4999|3,5000,6999|4,7000,8999" }, { key: "contentTypeNavigatorID", value: "type" }, { key: "Default_RecCfgPostPadding", value: "5" }, { key: "recomScenarioId4tv", value: "i2i-tv" }, { key: "recomScenarioId4vod", value: "i2i-vod" }, { key: "OTTChannelNameSpace", value: "3" }, { key: "WebRadioCodecs", value: "wma;mp3" }, { key: "sqmLoginSeed", value: "FkhXAuwgkNVbW5Sd3lfCzWjf9cssOfjKPaWVQevmUGbiFDpZ1CQmtYA21M9rezA" }, { key: "bufferLength", value: "10" }, { key: "partnerNavigatorID", value: "partnerIds" }, { key: "DRAPostPhoneTime", value: "3600" }, { key: "availabilityNavigatorID", value: "availability" }, { key: "StartPageDisableChannel", value: "top8_sat.1;top8_prosieben;top8_kabel-eins;" }, { key: "YouTubeAPIKey", value: "AIzaSyA57z2R2xzcL7Fg1PEeoQHHiiHg1bTcRmk" }, { key: "YouTubeSearchURL", value: "https://www.googleapis.com/youtube/v3/search" }, { key: "VASCategoryID", value: "2000000143" }, { key: "FailedRecordingsCleanUp_MaxAge", value: "28" }, { key: "InterstitialPagePerST", value: "default:34228;BASISTV_DT:33877;BASISTV_PREVIEW_DT:33877;BASISTV_OTT_DT:33877;BASISTV_OTT_PREVIEW_DT:33877;" }, { key: "CFG_Queue_Max_Hot_Stat_STB_UsageEvents", value: "100" }, { key: "AdultName", value: "Erwachsenenangebot" }, { key: "LessThan_TimeLength", value: "10" }, { key: "channelCategoryID", value: "2000000002" }, { key: "LoginRetryTime", value: "120" }, { key: "WebRadioImageAddress", value: "https://itvmusica-bl-sl0.ver.sda.t-online.de/radiorest" }, { key: "IPTVChannelNameSpaceName", value: "IPTV" }, { key: "LocalTSTVLength", value: "90" }, { key: "CFG_Interval_Duration_STB_UsageEvents", value: "3600" }, { key: "DefaultRatingSystem", value: "Sonstige" }, { key: "BandWidthLocalEnable", value: "1" }, { key: "sqmLoginSalt", value: "E6i6VsStmqqfwkXIwlkpmH2B1ytweI4ANxMZo3jg3cIyORrNIy1x2NlYF4U0Zmm" }, { key: "LessThan_TimeLength_TV", value: "10" }, { key: "YouTubeNumberPerPage", value: "20" }, { key: "AVSPINURL", value: "PIN" }, { key: "SAT_HOUSEHOLD_WHITELIST", value: "MR201,MR201_ACN,MR601SAT,MR601SAT_ACN,MRG5" }, { key: "upgradeInfoUrl", value: "https://svc65.main.xpx.t-online.de/pls/ui-notification/ui_notification.json" }, { key: "ATI_TRACKING_SITE_ID", value: "588883" }, { key: "SATChannelQueryPageInfo", value: "0" }, { key: "InstantRestartPostPadding", value: "5" }, { key: "Enable_HDDIDSupport_ANIDRange", value: "0" }, { key: "RetryNum", value: "5" }, { key: "trackingSiteId", value: "565083" }, { key: "YouTubeSafeSearch", value: "strict" }, { key: "ATI_TRACKING_URL", value: "https://logs1204.xiti.com/hit.xiti" }, { key: "YouTubeSearchPublishedBefore", value: "24" }, { key: "DiagnoseIGMP", value: "16213" }, { key: "ChannelCategoryID", value: "2000000002" }, { key: "TOPMenuID", value: "29188" }, { key: "trackingUrl", value: "https://logs1204" }, { key: "ScallingServerURL", value: "https://ngisstest.t-online.de/iss?client=vtu_ngtv" }, { key: "TMCPassword", value: "01949702902ec20f206d0b0cb11d7c33" }, { key: "Netflix_Disc_Partner_ID", value: "DT-TEST" }, { key: "SplashScreenDisplayTime", value: "3" }, { key: "PromotionPackageCustomerType", value: "GUEST,IPTV,IPTV_OTT_DT,IPTV_DT,OTT_DT,IPTV_OTT_PREVIEW_DT,IPTV_PREVIEW_DT,OTT_PREVIEW_DT,BASISTV_DT,BASISTV_OTT_DT,DOUBLE_PLAY_ONLY_DT,REGISTERED_ONLY_DT,MSTV_IPTV_DT,MSTV_SAT_DT,BASISTV_PREVIEW_DT,BASISTV_OTT_PREVIEW_DT,SATHYBRID_DT,SATHYBRID_PREVIEW_DT,SATHYBRID_OTT_DT,SATHYBRID_OTT_PREVIEW_DT,SATHYBRID_MIGRATED_DT,IPTV_MIGRATED_DT,OTT_NONDTISP_DT,SATHYBRIDSATONLY_DT,GUESTOTT_DT,IPTV_ABTESTING_DT,SATHYBRID_ABTESTING_DT,IPTV_COAX_DT,IPTV_COAX_OTT_DT,IPTV_OTT_ABTESTING_DT,SATHYBRID_OTT_ABTESTING_DT,EROTIC_LOUNGE,OTT_EWE" }, { key: "CFG_Max_Local_Storage_Time_STB_UsageEvents", value: "168" }, { key: "YouTubeSwitch", value: "1" }, { key: "Default_RecCfgKeepMode", value: "0" }, { key: "IPTVChannelNameSpace", value: "2" }, { key: "VODConfigueURL", value: "https://x3wcps.t-online.de/bootstrap/iptv2015/v1/manifest?model=%model%&deviceId=%deviceId%&appname=vod&appVersion=%appVersion%&firmware=%firmware%&runtimeVersion=%runtimeVersion%&duid=%duid%|resolution=hdr" }, { key: "SAT_HOUSEHOLD_DELETION_LIST", value: "MR400,MR200,MR200Z,MR400Z,MR401A,MR401A_ACN,MR401B,MR401B_ACN,MR601SAT,MR601SAT_ACN,MRENTRY,MRENTRY_ACN" }, { key: "PIN_WAIT_TIME3", value: "5" }, { key: "PIN_WAIT_TIME2", value: "5" }, { key: "PIN_WAIT_TIME1", value: "5" }, { key: "WebRadioDeviceName", value: "NGTV.STB" }, { key: "PromotionPackagePlatform", value: "Windows,Mac,iOS,Android" }, { key: "PCONPINURL", value: "PIN" }, { key: "sqmLoginAccount", value: "stbAccenture" }, { key: "ChannelSubscribeVASID", value: "MehrTV" }, { key: "LocalChanCategoryID", value: "2000000028" }, { key: "YoutubeID", value: "20" }, { key: "HybridSTBDeviceGroupID", value: "17" }, { key: "ATI_VOICE_PAGE_HITS_ENABLED", value: true }, { key: "Default_RecCfgSingleOrSeries", value: "Series" }, { key: "DeriveSATChannelQueryPageInfo", value: "0" }, { key: "Netflix_Disc_Partner_Key", value: "e64ff120228147b3a88f49594a256e2ce4c533b68cdf9d73c61ae86e74ae4c80" }, { key: "AVSPeriod", value: "300" }, { key: "TMCUsername", value: "IptvTestcpe" }, { key: "STBTOPMenuID", value: "29189" }, { key: "CFG_Queue_Max_Play_Time_STB_UsageEvents", value: "10" }, { key: "LessThan_TimeLength_VOD", value: "0" }, { key: "ottLiveStreamDelay", value: "23" }, { key: "UpdateCheckInterval", value: "1" }, { key: "ageRatingNavigatorID", value: "ageRating" }, { key: "OTTChannelNameSpaceName", value: "OTT" }];
            var data = {
                retcode: "0",
                extensionInfo: a
            };
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(data), serviceData));
        };
        ServiceClientZosaMock.prototype.getBandwithManagerServerUrl = function (context) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData("https://getBandwithManagerServerUrl/")));
        };
        ServiceClientZosaMock.prototype.getLoginInformation = function (context) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData({ loginUrl: "mock", loginNumberOfTries: "1" })));
        };
        ServiceClientZosaMock.prototype.getMasterStb = function (context) {
            var _this = this;
            var getDevicesParams = {
                serviceProvider: null,
                deviceTypes: [this.DEVICE_TYPE_STB]
            };
            if (this.masterStbIndex < 0) {
                return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData("dummy")));
            }
            return this.getDevices(context, getDevicesParams)
                .then(function (response) {
                var stbs = response.data.elements;
                if (stbs[_this.masterStbIndex]) {
                    return new public_1.MetaInfoService(new public_1.MetaInfoData(stbs[_this.masterStbIndex].zosaId), response.serviceData);
                }
                else {
                    throw new backend.ZosaNotFoundError("Device not found", { code: 12, message: "Device not found" });
                }
            });
        };
        ServiceClientZosaMock.prototype.resetMasterStb = function (context) {
            this.masterStbIndex = -1;
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.setMasterStb = function (context, parameters) {
            var _this = this;
            var getDevicesParams = {
                serviceProvider: null,
                deviceTypes: [this.DEVICE_TYPE_STB]
            };
            return this.getDevices(context, getDevicesParams)
                .then(function (response) {
                _this.masterStbIndex = response.data.elements.map(function (device) { return device.zosaId; }).indexOf(parameters.MasterSTB);
                return new public_1.MetaInfoService(new public_1.MetaInfoData(), response.serviceData);
            });
        };
        ServiceClientZosaMock.prototype.getSatellites = function (context) {
            return this.getDatabase()
                .then(function (db) {
                var result = db.getCollection("satellites").chain().data();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(result));
            });
        };
        ServiceClientZosaMock.prototype.getReferenceTransponders = function (context, satelliteId) {
            return this.getDatabase()
                .then(function (db) {
                var result = db.getCollection("referenceTransponders").chain().data();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(result));
            });
        };
        ServiceClientZosaMock.prototype.getSatelliteConfig = function (context) {
            if (!ServiceClientZosaMock_1.S_SATELLITE_CONIG) {
                ServiceClientZosaMock_1.S_SATELLITE_CONIG = [{ satelliteId: "0192E", satellitePosition: 192 }];
            }
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(ServiceClientZosaMock_1.S_SATELLITE_CONIG)));
        };
        ServiceClientZosaMock.prototype.setSatelliteConfig = function (context, parameters) {
            var _this = this;
            ServiceClientZosaMock_1.S_SATELLITE_CONIG = parameters;
            setTimeout(function () { _this.eventManager.broadcast("onDataUpdated", { channels: true }); }, 3000);
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(undefined)));
        };
        ServiceClientZosaMock.prototype.createVod = function (context, parameters) {
            return this.getDatabase()
                .then(function (db) {
                var vods = db.getCollection("vods");
                var vodItem = vods.data["0"];
                vodItem.title = "VodItem automatically changed at: " + new Date();
                vodItem.zosaId = parameters.playUrl;
                for (var _i = 0, _a = vodItem.customProps; _i < _a.length; _i++) {
                    var item = _a[_i];
                    switch (item.key) {
                        case "playUrl":
                            item.value = parameters.playUrl;
                            break;
                        case "playDrmLAUrl":
                            item.valueOf = parameters.playDrmLAUrl;
                            break;
                        case "playDrmKeyId":
                            item.valueOf = parameters.playDrmKeyId;
                            break;
                        case "playDrmLAPB":
                            item.valueOf = parameters.playDrmLAPB;
                            break;
                        case "bandwidthType":
                            item.valueOf = parameters.bandwidthType;
                            break;
                        case "movieId":
                            item.valueOf = parameters.movieId;
                            break;
                        default:
                            break;
                    }
                }
                return new public_1.MetaInfoService(new public_1.MetaInfoData());
            });
        };
        ServiceClientZosaMock.prototype.isPlatformReachable = function (context) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(true)));
        };
        ServiceClientZosaMock.prototype.getConfig = function (context) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData({ url: "", version: "" })));
        };
        ServiceClientZosaMock.prototype.getConfigurableUserSettings = function (context, parameters) {
            var serviceData = new public_1.MetaInfoServiceData();
            return this.getDatabase()
                .then(function (db) {
                var configurableUserSettings = db.getCollection("configurableUserSettings").chain().data();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(configurableUserSettings), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.getConfigurableUserSettingsValues = function (context, parameters) {
            var serviceData = new public_1.MetaInfoServiceData();
            return this.getDatabase()
                .then(function (db) {
                var configurableUserSettingsValues = db.getCollection("configurableUserSettingsValues").chain().data();
                return new public_1.MetaInfoService(new public_1.MetaInfoData(configurableUserSettingsValues), serviceData);
            });
        };
        ServiceClientZosaMock.prototype.setConfigurableUserSettingsValues = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.getParentalControlConfiguration = function (context) {
            if (this.parentalControlConfiguration == null) {
                var ageRating18 = {
                    editable: true,
                    isLocked: true
                };
                var ageRating16 = {
                    editable: true,
                    isLocked: true
                };
                var ageRating12 = {
                    editable: true,
                    isLocked: false
                };
                var ageRating6 = {
                    editable: true,
                    isLocked: false
                };
                var ageRating0 = {
                    editable: true,
                    isLocked: false
                };
                var ageRatingsCfg = {
                    0: ageRating0,
                    6: ageRating6,
                    12: ageRating12,
                    16: ageRating16,
                    18: ageRating18
                };
                var parentalControlFeaturesConfig = {
                    SubscribedContent: { editable: true, isLocked: true },
                    UnratedContent: { editable: true, isLocked: true },
                    EroticCategory: { editable: true, isLocked: true },
                    MaskRatedContent: { editable: true, isLocked: true },
                    ComfortFeature: { editable: true, isSupported: true, isLocked: false, timeDuration: 14400 }
                };
                this.parentalControlConfiguration = {
                    ageRatingCfg: ageRatingsCfg,
                    parentalCtrlCfg: parentalControlFeaturesConfig
                };
            }
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(this.parentalControlConfiguration)));
        };
        ServiceClientZosaMock.prototype.setParentalControlConfiguration = function (context, parameters) {
            this.parentalControlConfiguration = parameters;
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.removeOtherStbDevices = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.getBandwidthManagerType = function (context) {
            var response = { BandwidthManagerType: "remote" };
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(response)));
        };
        ServiceClientZosaMock.prototype.getDTSubscriberInfo = function (context) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.setSubscriberInfo = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.setImageDownloadConfig = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.activateComfortFeature = function (context) {
            var _this = this;
            if (this.comfortFeatureState == null) {
                this.comfortFeatureState = { isActive: true };
            }
            else {
                this.comfortFeatureState.isActive = true;
            }
            this.comfortFeatureActiveSeconds = this.comfortFeatureDurationSeconds;
            this.comfortFeatureSecondsTimeoutHandle = setTimeout(function () {
                if (_this.comfortFeatureActiveSeconds > 1) {
                    _this.comfortFeatureActiveSeconds--;
                }
            }, 1000);
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.deactivateComfortFeature = function (context) {
            if (this.comfortFeatureSecondsTimeoutHandle) {
                clearTimeout(this.comfortFeatureSecondsTimeoutHandle);
            }
            this.comfortFeatureActiveSeconds = 0;
            if (this.comfortFeatureState == null) {
                this.comfortFeatureState = { isActive: false };
            }
            else {
                this.comfortFeatureState.isActive = false;
            }
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.isComfortFeatureActive = function (context) {
            if (this.comfortFeatureState == null) {
                this.comfortFeatureState = { isActive: false };
            }
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(this.comfortFeatureState)));
        };
        ServiceClientZosaMock.prototype.getComfortFeatureStatus = function (context) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData({ comfortFeatureRemainingTime: this.comfortFeatureActiveSeconds })));
        };
        ServiceClientZosaMock.prototype.getParentalBlockingStatus = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData({ isBlocked: true })));
        };
        ServiceClientZosaMock.prototype.parentalUnblock = function (context, parameters) {
            var result = {
                isBlocked: false,
                unblockingPending: false
            };
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData(result)));
        };
        ServiceClientZosaMock.prototype.resetAllParentalUnblockings = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.resetParentalUnblocking = function (context, parameters) {
            return bluebird.resolve(new public_1.MetaInfoService(new public_1.MetaInfoData()));
        };
        ServiceClientZosaMock.prototype.onDataUpdated = function (evtHandlerFunction) {
            return this.eventManager.on("onDataUpdated", evtHandlerFunction, ServiceClientZosaMock_1.TAG);
        };
        ServiceClientZosaMock.prototype.onMessage = function (evtHandlerFunction) {
            return this.eventManager.on("onMessage", evtHandlerFunction, ServiceClientZosaMock_1.TAG);
        };
        ServiceClientZosaMock.prototype.onParentalBlockingChanged = function (evtHandlerFunction) {
            return this.eventManager.on("onParentalBlockingChanged", evtHandlerFunction, ServiceClientZosaMock_1.TAG);
        };
        ServiceClientZosaMock.prototype.onRecordingBandwidthConflict = function (evtHandlerFunction) {
            return this.eventManager.on("onRecordingBandwidthConflict", evtHandlerFunction, ServiceClientZosaMock_1.TAG);
        };
        ServiceClientZosaMock.prototype.onRecordingChanged = function (evtHandlerFunction) {
            return this.eventManager.on("onRecordingChanged", evtHandlerFunction, ServiceClientZosaMock_1.TAG);
        };
        ServiceClientZosaMock.prototype.onServiceProviderSessionError = function (evtHandlerFunction) {
            return this.eventManager.on("onServiceProviderSessionError", evtHandlerFunction, ServiceClientZosaMock_1.TAG);
        };
        ServiceClientZosaMock.prototype.onSessionError = function (evtHandlerFunction) {
            return this.eventManager.on("onSessionError", evtHandlerFunction, ServiceClientZosaMock_1.TAG);
        };
        ServiceClientZosaMock.prototype.onCustomApiCreateVod = function (evtHandlerFunction) {
            return this.eventManager.on("onCustomApi" + "DT-CreateVod", evtHandlerFunction, ServiceClientZosaMock_1.TAG);
        };
        ServiceClientZosaMock.prototype.onCustomApiMasterStb = function (evtHandlerFunction) {
            return this.eventManager.on("onCustomApi" + "MasterSTB", evtHandlerFunction, ServiceClientZosaMock_1.TAG);
        };
        ServiceClientZosaMock.prototype.onCustomApiDFCC = function (evtHandlerFunction) {
            return this.eventManager.on("onCustomApi" + "DT-Dfcc", evtHandlerFunction, ServiceClientZosaMock_1.TAG);
        };
        ServiceClientZosaMock.prototype.getDatabase = function () {
            if (!this.localDatabasePromise) {
                var database_1 = new lokijs("localDatabase.json");
                var promises = [];
                promises.push(this.loadColllection(database_1, "getCatalogues", "catalogues", ["id"]));
                promises.push(this.loadColllection(database_1, "getCategories", "categories", ["parentId", "zosaId"]));
                promises.push(this.loadColllection(database_1, "getCategoryMappings", "categoryMapping"));
                promises.push(this.loadColllection(database_1, "getChannels", "channels", ["zosaId"]));
                promises.push(this.loadColllection(database_1, "getDevices", "devices"));
                promises.push(this.loadColllection(database_1, "getEditorials", "editorials", ["id"]));
                promises.push(this.loadColllection(database_1, "getFavoriteLists", "favoriteLists"));
                promises.push(this.loadColllection(database_1, "getFavoriteMapping", "favoriteMapping"));
                promises.push(this.loadColllection(database_1, "getHubs", "hubs", ["id"]));
                promises.push(this.loadColllection(database_1, "getMediaPersons", "mediaPersons", ["zosaId"]));
                promises.push(this.loadColllection(database_1, "getMenus", "menus", ["id"]));
                promises.push(this.loadColllection(database_1, "getParentRecordings", "parentRecordings", ["zosaId"]));
                promises.push(this.loadColllection(database_1, "getPlaybackHistory", "playbackHistory"));
                promises.push(this.loadColllection(database_1, "getVods", "vods"));
                promises.push(this.loadColllection(database_1, "getProfiles", "profiles"));
                promises.push(this.loadColllection(database_1, "getPrograms", "programs", ["zosaId"]));
                promises.push(this.loadColllection(database_1, "getRecordings", "recordings", ["zosaId"]));
                promises.push(this.loadColllection(database_1, "getRecordingSpaceInfo", "recordingSpaceInfo"));
                promises.push(this.loadColllection(database_1, "getServiceProviders", "serviceProviders"));
                promises.push(this.loadColllection(database_1, "getStreamMapping", "streamMapping"));
                promises.push(this.loadColllection(database_1, "getStreams", "streams", ["id"]));
                promises.push(this.loadColllection(database_1, "getVasItems", "vasItems"));
                promises.push(this.loadColllection(database_1, "getVodRecommendations", "vodRecommendations"));
                promises.push(this.loadColllection(database_1, "getConfigurableUserSettings", "configurableUserSettings"));
                promises.push(this.loadColllection(database_1, "getConfigurableUserSettingsValues", "configurableUserSettingsValues"));
                promises.push(this.loadColllection(database_1, "getSatellites", "satellites"));
                this.localDatabasePromise = bluebird.all(promises).then(function () { return database_1; });
            }
            return this.localDatabasePromise;
        };
        ServiceClientZosaMock.prototype.loadColllection = function (database, action, collectionName, collectionIndices) {
            var _this = this;
            if (collectionIndices === void 0) { collectionIndices = []; }
            return public_1.RestClient.instance
                .get("mockData/zosa/" + action + ".json")
                .then(function (data) {
                var items = JSON.parse(public_1.StringTools.stripJsonComments(data.responseData), _this.dateParser);
                var itemCollection = database.addCollection(collectionName, { indices: collectionIndices });
                itemCollection.insert(items);
                itemCollection.ensureAllIndexes();
            });
        };
        ServiceClientZosaMock.prototype.convertToList = function (itemFields, data, offset, total) {
            var _this = this;
            var result = {};
            itemFields = itemFields ? __spreadArray(__spreadArray([], itemFields), ["zosaId", "zosaType"]) : [];
            result.elements = data.map(function (value) { return _this.clone(value, itemFields); });
            result.offset = offset;
            result.total = total;
            return result;
        };
        ServiceClientZosaMock.prototype.convertToString = function (item) {
            return this.isZosaItem(item) ? item.zosaId : item;
        };
        ServiceClientZosaMock.prototype.convertToStrings = function (items) {
            var result = [];
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var obj = items_1[_i];
                result.push(this.convertToString(obj));
            }
            return result;
        };
        ServiceClientZosaMock.prototype.dateParser = function (key, value) {
            var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
            if (typeof value === "string") {
                var isISODate = reISO.exec(value);
                if (isISODate) {
                    return new Date(value);
                }
            }
            return value;
        };
        ServiceClientZosaMock.prototype.clone = function (obj, itemFields) {
            if (itemFields === void 0) { itemFields = []; }
            var target = {};
            for (var i in obj) {
                if ((i != "$loki") && (i != "meta") && ((itemFields.indexOf(i) >= 0) || (itemFields.length == 0)) && obj.hasOwnProperty(i)) {
                    target[i] = obj[i];
                }
            }
            return target;
        };
        ServiceClientZosaMock.prototype.randomZosaId = function () {
            return "yy-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0;
                var v = c == "x" ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        ServiceClientZosaMock.prototype.hashCodeNum = function (value) {
            var hash = 0;
            var index = value.length;
            while (index) {
                hash = (hash * 33) ^ value.charCodeAt(--index);
            }
            return (hash >>> 0);
        };
        ServiceClientZosaMock.prototype.isZosaItem = function (arg) {
            return arg.zosaId !== undefined;
        };
        ServiceClientZosaMock.prototype.isZosaRemoveRecordingsParamsByIds = function (arg) {
            return arg.recordings !== undefined;
        };
        var ServiceClientZosaMock_1;
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "login", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "serviceProviderLogin", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "createProgramsUpdatedObserver", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, outlen: 0, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getDFCC", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, outlen: 0, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getPrograms", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "clearCustomChannelNumbering", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getChannels", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getCustomChannelNumbering", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "setCustomChannelNumbering", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getDevices", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getMediaPersons", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getOtherInstances", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getItems", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "deleteMarkedRecordingConflicts", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getNextRecordingConflict", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getParentRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getRecordingSpaceInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "removeRecordings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "scheduleIntervalRecording", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "scheduleProgramRecording", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "updateParentRecording", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "updateRecording", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "updateRecordingConflict", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getServiceProviders", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getSubscriberInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "search", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "updateDevice", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getCategories", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getVasItems", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getVods", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "createPlaybackSession", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "addFavorites", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getFavoriteLists", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "removeFavorites", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getBandwidthInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "releaseBandwidthBookings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getRecommendation", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getVasCategoryId", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getTdsParameters", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "setTdsParameters", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getCustomizeConfigParameters", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG }); })
        ], ServiceClientZosaMock.prototype, "getBandwithManagerServerUrl", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG }); })
        ], ServiceClientZosaMock.prototype, "getLoginInformation", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getMasterStb", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "resetMasterStb", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "setMasterStb", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG }); })
        ], ServiceClientZosaMock.prototype, "getSatellites", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG }); })
        ], ServiceClientZosaMock.prototype, "getReferenceTransponders", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG }); })
        ], ServiceClientZosaMock.prototype, "getSatelliteConfig", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "setSatelliteConfig", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "createVod", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "isPlatformReachable", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getConfig", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getConfigurableUserSettings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getConfigurableUserSettingsValues", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "setConfigurableUserSettingsValues", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getParentalControlConfiguration", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "setParentalControlConfiguration", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getDTSubscriberInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "setSubscriberInfo", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "setImageDownloadConfig", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "activateComfortFeature", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "deactivateComfortFeature", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "isComfortFeatureActive", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getComfortFeatureStatus", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "getParentalBlockingStatus", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "parentalUnblock", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "resetAllParentalUnblockings", null);
        __decorate([
            public_1.log2(function () { return ({ name: ServiceClientZosaMock_1.TAG, parameters: [1] }); })
        ], ServiceClientZosaMock.prototype, "resetParentalUnblocking", null);
        ServiceClientZosaMock = ServiceClientZosaMock_1 = __decorate([
            public_1.logTag()
        ], ServiceClientZosaMock);
        return ServiceClientZosaMock;
    }());
    exports.ServiceClientZosaMock = ServiceClientZosaMock;
});
//# sourceMappingURL=zosaws.js.map