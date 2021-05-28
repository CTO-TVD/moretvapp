var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "../util/log/public", "./asynceventmanager", "../errorhandling/public", "../util/StringTools"], function (require, exports, bluebird, public_1, asynceventmanager_1, public_2, StringTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsyncEventChannel = void 0;
    var AsyncEventChannelError = (function (_super) {
        __extends(AsyncEventChannelError, _super);
        function AsyncEventChannelError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x00E;
            return _this;
        }
        return AsyncEventChannelError;
    }(public_2.BaseError));
    var AsyncEventChannel = (function () {
        function AsyncEventChannel(options) {
            this.cbShouldProcess = function () { return bluebird.resolve(true); };
            this.channels = [];
            this.asyncEventManager = new asynceventmanager_1.AsyncEventManager();
            this.hasAfterCallback = false;
            this.hasBeforeCallback = false;
            this.priority = (options === null || options === void 0 ? void 0 : options.priority) || 0;
            this.id = (options === null || options === void 0 ? void 0 : options.id) || (AsyncEventChannel_1.TAG + "_" + AsyncEventChannel_1.globalId++);
        }
        AsyncEventChannel_1 = AsyncEventChannel;
        AsyncEventChannel.prototype.sendMessage = function (data) {
            var item = { data: data };
            return this.sendItem(item).then(function () { return undefined; });
        };
        AsyncEventChannel.prototype.sendItem = function (item) {
            var _this = this;
            return this.cbShouldProcess(item)
                .then(function (shouldProcess) {
                if (shouldProcess) {
                    var process = bluebird.resolve();
                    if (_this.hasBeforeCallback) {
                        process = process.then(function () {
                            public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("cbBeforeProcessing, id: " + _this.id + ", data: " + StringTools_1.StringTools.dataStringify(item.data), AsyncEventChannel_1.TAG)); });
                            var resultBefore = _this.asyncEventManager.broadcast("onBefore", item.data);
                            return resultBefore;
                        });
                    }
                    var _loop_1 = function (channel) {
                        process = process.then(function () { return channel.sendItem(item); });
                    };
                    for (var _i = 0, _a = _this.channels; _i < _a.length; _i++) {
                        var channel = _a[_i];
                        _loop_1(channel);
                    }
                    if (_this.hasAfterCallback) {
                        process = process.then(function () {
                            public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("cbAfterProcessing, id: " + _this.id + ", data: " + StringTools_1.StringTools.dataStringify(item.data), AsyncEventChannel_1.TAG)); });
                            var resultAfter = _this.asyncEventManager.broadcast("onAfter", item.data);
                            return resultAfter;
                        });
                    }
                    return process;
                }
                return undefined;
            });
        };
        AsyncEventChannel.prototype.registerChannel = function (channel) {
            var _this = this;
            if (!channel) {
                throw new AsyncEventChannelError("The channel object is not defined.");
            }
            this.channels.push(channel);
            this.channels.sort(function (a, b) { return b.priority - a.priority; });
            return function () {
                var index = _this.channels.indexOf(channel);
                if (index !== -1) {
                    _this.channels.splice(index, 1);
                }
            };
        };
        AsyncEventChannel.prototype.shouldProcess = function (cb) {
            this.cbShouldProcess = function (item) { return bluebird.resolve().then(function () { return cb(item); }); };
        };
        AsyncEventChannel.prototype.onBefore = function (cb, id) {
            this.hasBeforeCallback = true;
            return this.asyncEventManager.on("onBefore", cb, id || AsyncEventChannel_1.TAG);
        };
        AsyncEventChannel.prototype.onAfter = function (cb, id) {
            this.hasAfterCallback = true;
            return this.asyncEventManager.on("onAfter", cb, id || AsyncEventChannel_1.TAG);
        };
        var AsyncEventChannel_1;
        AsyncEventChannel.globalId = 0;
        AsyncEventChannel = AsyncEventChannel_1 = __decorate([
            public_1.logTag()
        ], AsyncEventChannel);
        return AsyncEventChannel;
    }());
    exports.AsyncEventChannel = AsyncEventChannel;
});
//# sourceMappingURL=asynceventchannel.js.map