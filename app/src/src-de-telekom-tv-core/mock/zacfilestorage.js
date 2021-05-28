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
define(["require", "exports", "src/src-de-telekom/public", "./zacstorage", "./zacfilesysteminfo"], function (require, exports, public_1, zacstorage_1, zacfilesysteminfo_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacFileStorage = void 0;
    var ZacFileStorage = (function (_super) {
        __extends(ZacFileStorage, _super);
        function ZacFileStorage(storageManager, parent, totalSpaceKiB, freeSpaceKiB, name, fileSystemPath) {
            var _this = _super.call(this) || this;
            _this.parent = parent;
            _this.name = name;
            _this.totalSpaceKiB = totalSpaceKiB;
            _this.freeSpaceKiB = freeSpaceKiB;
            _this.type = storageManager.FILE_STORAGE;
            _this.state = storageManager.STATE_OPERATIONAL;
            _this.information = new zacfilesysteminfo_1.ZacFileSystemInfo();
            _this.information.fileSystem = storageManager.FILESYSTEM_NTFS;
            _this.information.label = "Partition1";
            _this.information.path = fileSystemPath;
            _this.information.recordingSupported = true;
            _this.information.usageMask = 0;
            _this.information.uuid = public_1.StringTools.generateUUID();
            return _this;
        }
        return ZacFileStorage;
    }(zacstorage_1.ZacStorage));
    exports.ZacFileStorage = ZacFileStorage;
});
//# sourceMappingURL=zacfilestorage.js.map