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
define(["require", "exports", "../util/log/public", "./eventmanager", "../errorhandling/public", "../util/StringTools"], function (require, exports, public_1, eventmanager_1, public_2, StringTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EventChannel = void 0;
    var EventChannelError = (function (_super) {
        __extends(EventChannelError, _super);
        function EventChannelError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x00D;
            return _this;
        }
        return EventChannelError;
    }(public_2.BaseError));
    var EventChannel = (function () {
        function EventChannel(options) {
            this.channels = [];
            this.eventManager = new eventmanager_1.EventManager();
            this.hasAfterCallback = false;
            this.hasBeforeCallback = false;
            this.priority = (options === null || options === void 0 ? void 0 : options.priority) || 0;
            this.id = (options === null || options === void 0 ? void 0 : options.id) || (EventChannel_1.TAG + "_" + EventChannel_1.globalId++);
        }
        EventChannel_1 = EventChannel;
        EventChannel.prototype.sendMessage = function (data) {
            var item = { data: data, canceled: false };
            this.sendItem(item);
        };
        EventChannel.prototype.sendItem = function (item) {
            var _this = this;
            var _a;
            if (!item.canceled && (((_a = this.cbShouldProcess) === null || _a === void 0 ? void 0 : _a.call(this, item)) || !this.cbShouldProcess)) {
                if (this.hasBeforeCallback) {
                    public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("cbBeforeProcessing, id: " + _this.id + ", data: " + StringTools_1.StringTools.dataStringify(item.data), EventChannel_1.TAG)); });
                    var resultBefore = this.eventManager.broadcast("onBefore", item.data);
                    item.canceled = item.canceled || resultBefore;
                }
                for (var _i = 0, _b = this.channels; _i < _b.length; _i++) {
                    var channel = _b[_i];
                    channel.sendItem(item);
                    if (item.canceled)
                        break;
                }
                if (this.hasAfterCallback && !item.canceled) {
                    public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("cbAfterProcessing, id: " + _this.id + ", data: " + StringTools_1.StringTools.dataStringify(item.data), EventChannel_1.TAG)); });
                    var resultAfter = this.eventManager.broadcast("onAfter", item.data);
                    item.canceled = item.canceled || resultAfter;
                }
            }
        };
        EventChannel.prototype.registerChannel = function (channel) {
            var _this = this;
            if (!channel) {
                throw new EventChannelError("The channel object is not defined.");
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
        EventChannel.prototype.shouldProcess = function (cb) {
            this.cbShouldProcess = cb;
        };
        EventChannel.prototype.onBefore = function (cb, id) {
            this.hasBeforeCallback = true;
            return this.eventManager.on("onBefore", cb, id || EventChannel_1.TAG);
        };
        EventChannel.prototype.onAfter = function (cb, id) {
            this.hasAfterCallback = true;
            return this.eventManager.on("onAfter", cb, id || EventChannel_1.TAG);
        };
        var EventChannel_1;
        EventChannel.globalId = 0;
        EventChannel = EventChannel_1 = __decorate([
            public_1.logTag()
        ], EventChannel);
        return EventChannel;
    }());
    exports.EventChannel = EventChannel;
});
//# sourceMappingURL=eventchannel.js.map