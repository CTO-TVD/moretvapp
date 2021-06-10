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
define(["require", "exports", "../util/objectTools"], function (require, exports, objectTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IndexedList = void 0;
    var IndexedList = (function (_super) {
        __extends(IndexedList, _super);
        function IndexedList(extractKeyValue, items) {
            var _newTarget = this.constructor;
            var _this = _super.call(this) || this;
            objectTools_1.setPrototypeOf(_this, _newTarget.prototype);
            _this.extractKeyValue = extractKeyValue;
            if (items) {
                items.forEach(function (item) { return _this.push(item); });
            }
            return _this;
        }
        IndexedList.prototype.getAllKeys = function () {
            var _this = this;
            var allKeys = [];
            this.forEach(function (item) {
                if (item) {
                    allKeys.push(_this.extractKeyValue(item).key);
                }
            });
            return allKeys;
        };
        IndexedList.prototype.getItem = function (key, defaultValue) {
            var _this = this;
            var createStorage = function () {
                var keyItemStorage = Object.create(null);
                _this.forEach(function (item) {
                    if (item) {
                        var keyValue = _this.extractKeyValue(item);
                        keyItemStorage[keyValue.key] = keyValue.value;
                    }
                });
                return keyItemStorage;
            };
            var keyItemStorage = this.keyItemStorage || (this.keyItemStorage = createStorage());
            if (key !== undefined && keyItemStorage[key] !== undefined) {
                return keyItemStorage[key];
            }
            return defaultValue;
        };
        IndexedList.prototype.refresh = function () {
            this.keyItemStorage = undefined;
        };
        IndexedList.prototype.toArray = function () {
            return this;
        };
        return IndexedList;
    }(Array));
    exports.IndexedList = IndexedList;
});
//# sourceMappingURL=indexedlist.js.map