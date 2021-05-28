var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "../util/log/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Storage = void 0;
    var Storage = (function () {
        function Storage() {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("constructor", Storage_1.TAG)); });
            if (window.localStorage) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("storage is available.", Storage_1.TAG)); });
                this.available = true;
            }
            else {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("storage is not available.", Storage_1.TAG)); });
                this.available = false;
            }
        }
        Storage_1 = Storage;
        Object.defineProperty(Storage.prototype, "length", {
            get: function () {
                return window.localStorage.length;
            },
            enumerable: false,
            configurable: true
        });
        Storage.prototype.key = function (index) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("key -- index: " + index + ", return: " + window.localStorage.key(index), Storage_1.TAG)); });
            return window.localStorage.key(index);
        };
        Storage.prototype.getItem = function (key) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getItem -- key: " + key + ", return: " + window.localStorage.getItem(key), Storage_1.TAG)); });
            return window.localStorage.getItem(key);
        };
        Storage.prototype.setItem = function (key, data) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("setItem -- key: " + key + ", data: " + data, Storage_1.TAG)); });
            if (data) {
                window.localStorage.setItem(key, data);
            }
            else {
                this.removeItem(key);
            }
        };
        Storage.prototype.removeItem = function (key) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("removeItem -- key: " + key, Storage_1.TAG)); });
            window.localStorage.removeItem(key);
        };
        Storage.prototype.clear = function () {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("clear", Storage_1.TAG)); });
            window.localStorage.clear();
        };
        var Storage_1;
        Storage = Storage_1 = __decorate([
            public_1.logTag()
        ], Storage);
        return Storage;
    }());
    exports.Storage = Storage;
});
//# sourceMappingURL=Storage.js.map