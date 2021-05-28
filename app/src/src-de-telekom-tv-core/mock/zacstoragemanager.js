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
define(["require", "exports", "./zacphysicalstorage", "./eventgenerator", "src/src-de-telekom/public"], function (require, exports, zacphysicalstorage_1, eventgenerator_1, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacStorageManager = void 0;
    var ZacStorageManager = (function (_super) {
        __extends(ZacStorageManager, _super);
        function ZacStorageManager() {
            var _this = _super.call(this) || this;
            _this.CONNECTION_TYPE_UNKNOWN = 0;
            _this.CONNECTION_TYPE_USB = 1;
            _this.CONNECTION_TYPE_USB_REMOVABLE = 2;
            _this.CONNECTION_TYPE_SATA = 3;
            _this.FILESYSTEM_UNKNOWN = 0;
            _this.FILESYSTEM_EXT2 = 1;
            _this.FILESYSTEM_EXT3 = 2;
            _this.FILESYSTEM_EXT4 = 3;
            _this.FILESYSTEM_NTFS = 4;
            _this.FILESYSTEM_FAT32 = 5;
            _this.PHYSICAL_DEVICE = 0;
            _this.FILE_STORAGE = 1;
            _this.STATE_DISCONNECTED = 0;
            _this.STATE_OPERATIONAL = 1;
            _this.STATE_MOUNTING = 2;
            _this.STATE_FORMATTING = 3;
            _this.STATE_UNMOUNTED = 4;
            _this.FORMATTING_PROGRESS = 0;
            _this.FORMATTING_DONE = 1;
            _this.FORMATTING_FAILED = 2;
            _this.MOUNTING_PROGRESS = 3;
            _this.MOUNTING_FAILED = 4;
            _this.MOUNTING_DONE = 5;
            _this.FREE_SPACE_LOW_WARNING = 6;
            _this.DEVICE_ADDED = 0;
            _this.DEVICE_REMOVED = 1;
            _this.FILE_STORAGE_ADDED = 2;
            _this.FILE_STORAGE_REMOVED = 3;
            _this.KEY_SMART_STATUS = "KEY_SMART_STATUS";
            _this.KEY_SMART_TEMPERATURE = "KEY_SMART_TEMPERATURE";
            _this.KEY_MODEL_NAME = "KEY_MODEL_NAME";
            _this.KEY_SERIAL_NUMBER = "KEY_SERIAL_NUMBER";
            _this.KEY_FIRMWARE_REVISION = "KEY_FIRMWARE_REVISION";
            _this.PURPOSE_NOT_USED = 0;
            _this.PURPOSE_PVR = 1;
            _this.PURPOSE_LIVE_DELAY = 2;
            _this.physicalDevices = [new zacphysicalstorage_1.ZacPhysicalStorage(_this, 500 * 1024 * 1024, "Harddisc1")];
            _this.fileStorages = _this.physicalDevices[0].partitions;
            return _this;
        }
        ZacStorageManager_1 = ZacStorageManager;
        ZacStorageManager.prototype.getEventManagerId = function () { return "StorageListUpdated"; };
        ZacStorageManager.prototype.getLogSource = function () { return ZacStorageManager_1.TAG; };
        ZacStorageManager.prototype.GetStoragesForPurpose = function (purpose) {
            return (this.fileStorages && this.fileStorages[0] && this.fileStorages[0].information) ? [this.fileStorages[0].information.uuid] : [];
        };
        ZacStorageManager.prototype.SetStoragesForPurpose = function (purpose, fileSystemUUIDs) {
            return 0;
        };
        ZacStorageManager.prototype.FindStorage = function (uuid) {
            return this.fileStorages[0];
        };
        ZacStorageManager.prototype.sendStorageListUpdatedEvent = function (storage, eventType, delayMs) {
            var _this = this;
            setTimeout(function () {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Send StorageListUpdatedEvent", ZacStorageManager_1.TAG)); });
                var event = { storage: storage, eventType: eventType, name: storage.name };
                _this.eventManager.broadcast("StorageListUpdated", event);
            }, delayMs != null ? delayMs : 0);
        };
        var ZacStorageManager_1;
        ZacStorageManager = ZacStorageManager_1 = __decorate([
            public_1.logTag()
        ], ZacStorageManager);
        return ZacStorageManager;
    }(eventgenerator_1.EventGenerator));
    exports.ZacStorageManager = ZacStorageManager;
});
//# sourceMappingURL=zacstoragemanager.js.map