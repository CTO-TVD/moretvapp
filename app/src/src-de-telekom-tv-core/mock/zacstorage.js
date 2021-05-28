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
define(["require", "exports", "src/src-de-telekom/public", "./eventgenerator", "./zacstoragemanager"], function (require, exports, public_1, eventgenerator_1, zacstoragemanager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacStorage = void 0;
    var ZacStorage = (function (_super) {
        __extends(ZacStorage, _super);
        function ZacStorage() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.type = 0;
            _this.state = 1;
            _this.name = "SATA-1";
            _this.smartData = {};
            _this.totalSpaceKiB = 488386584;
            _this.freeSpaceKiB = 0;
            _this.information = null;
            _this.parent = null;
            _this.connectionType = 3;
            _this.partitions = [];
            return _this;
        }
        ZacStorage_1 = ZacStorage;
        ZacStorage.prototype.getEventManagerId = function () { return "StorageEvent"; };
        ZacStorage.prototype.getLogSource = function () { return ZacStorage_1.TAG; };
        ZacStorage.prototype.Format = function (label) {
            var storageManager = new zacstoragemanager_1.ZacStorageManager();
            this.sendStorageStateChangedEvent(storageManager.STATE_FORMATTING, 0);
            this.increaseProgress(storageManager, 0);
            return 0;
        };
        ZacStorage.prototype.increaseProgress = function (storageManager, percentage) {
            var _this = this;
            setTimeout(function () {
                if (percentage < 100) {
                    _this.sendStorageEvent(storageManager.FORMATTING_PROGRESS, percentage + 10);
                    _this.increaseProgress(storageManager, percentage + 10);
                }
                else {
                    _this.freeSpaceKiB = Math.round(_this.totalSpaceKiB * 0.95);
                    _this.sendStorageEvent(storageManager.FORMATTING_DONE);
                    _this.sendStorageStateChangedEvent(storageManager.STATE_MOUNTING, 1000);
                    _this.sendStorageStateChangedEvent(storageManager.STATE_OPERATIONAL, 1000);
                }
            }, 300);
        };
        ZacStorage.prototype.sendStorageEvent = function (eventType, value, delayMs) {
            var _this = this;
            setTimeout(function () {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("send StorageEvent", ZacStorage_1.TAG)); });
                var event = { storage: _this, eventType: eventType, value: value };
                _this.eventManager.broadcast("StorageEvent", event);
            }, delayMs != null ? delayMs : 0);
        };
        ZacStorage.prototype.sendStorageStateChangedEvent = function (state, delayMs) {
            var _this = this;
            setTimeout(function () {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Send StorageStateChangedEvent", ZacStorage_1.TAG)); });
                var event = { storage: _this, state: state };
                _this.eventManager.broadcast("StorageStateChangedEvent", event);
            }, delayMs != null ? delayMs : 0);
        };
        ZacStorage.prototype.Cancel = function () {
            return 4;
        };
        var ZacStorage_1;
        ZacStorage = ZacStorage_1 = __decorate([
            public_1.logTag()
        ], ZacStorage);
        return ZacStorage;
    }(eventgenerator_1.EventGenerator));
    exports.ZacStorage = ZacStorage;
});
//# sourceMappingURL=zacstorage.js.map