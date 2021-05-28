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
define(["require", "exports", "./zacstorage", "./zacfilestorage"], function (require, exports, zacstorage_1, zacfilestorage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacPhysicalStorage = void 0;
    var ZacPhysicalStorage = (function (_super) {
        __extends(ZacPhysicalStorage, _super);
        function ZacPhysicalStorage(storageManager, totalSpaceKiB, name) {
            var _this = _super.call(this) || this;
            _this.storageManager = storageManager;
            _this.type = storageManager.PHYSICAL_DEVICE;
            _this.state = storageManager.STATE_OPERATIONAL;
            _this.name = name;
            _this.totalSpaceKiB = totalSpaceKiB;
            _this.connectionType = storageManager.CONNECTION_TYPE_SATA;
            _this.partitions = [new zacfilestorage_1.ZacFileStorage(storageManager, _this, totalSpaceKiB, Math.round(0.95 * totalSpaceKiB), "partition1", "C:")];
            _this.smartData[storageManager.KEY_SMART_STATUS] = 1;
            return _this;
        }
        ZacPhysicalStorage.prototype.Format = function (label) {
            var _this = this;
            setTimeout(function () {
                var currentPartition = _this.partitions[0];
                currentPartition.sendStorageStateChangedEvent(_this.storageManager.STATE_DISCONNECTED);
                _this.storageManager.sendStorageListUpdatedEvent(currentPartition, _this.storageManager.FILE_STORAGE_REMOVED);
                var newPartition = new zacfilestorage_1.ZacFileStorage(_this.storageManager, _this, _this.totalSpaceKiB, Math.round(0.96 * _this.totalSpaceKiB), "newPartition", "C:");
                _this.partitions = [newPartition];
                _this.storageManager.sendStorageListUpdatedEvent(newPartition, _this.storageManager.FILE_STORAGE_ADDED);
                _this.sendStorageEvent(_this.storageManager.FORMATTING_PROGRESS, 90);
                newPartition.sendStorageStateChangedEvent(_this.storageManager.STATE_MOUNTING);
                newPartition.sendStorageEvent(_this.storageManager.MOUNTING_PROGRESS, 0);
                _this.sendStorageEvent(_this.storageManager.FORMATTING_PROGRESS, 95);
                _this.sendStorageEvent(_this.storageManager.FORMATTING_PROGRESS, 100);
                _this.sendStorageEvent(_this.storageManager.FORMATTING_DONE);
                newPartition.sendStorageEvent(_this.storageManager.MOUNTING_PROGRESS, 100);
                newPartition.sendStorageEvent(_this.storageManager.MOUNTING_DONE);
                newPartition.sendStorageStateChangedEvent(_this.storageManager.STATE_OPERATIONAL);
            }, 2000);
            return 0;
        };
        return ZacPhysicalStorage;
    }(zacstorage_1.ZacStorage));
    exports.ZacPhysicalStorage = ZacPhysicalStorage;
});
//# sourceMappingURL=zacphysicalstorage.js.map