define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacApp = void 0;
    var ZacApp = (function () {
        function ZacApp() {
        }
        ZacApp.prototype.AcceptsUserActionRequests = function (accepts) {
            return 0;
        };
        ZacApp.prototype.SettingGet = function (key) {
            var value = window.localStorage && window.localStorage.getItem(key);
            if (!value && key === "appcore.setting.device.firsttimeusage.start") {
                return "false";
            }
            if (!value && key === "HideNewYouthProtection") {
                return "true";
            }
            if (value === null) {
                throw new Error("Key not found!");
            }
            return value;
        };
        ZacApp.prototype.SettingSet = function (key, value, persist) {
            if (window.localStorage) {
                window.localStorage.setItem(key, value);
                return 0;
            }
            return -1;
        };
        ZacApp.prototype.SettingsDelete = function (settingPatten) {
            if (window.localStorage) {
                window.localStorage.removeItem(settingPatten);
                return 0;
            }
            return -1;
        };
        ZacApp.prototype.registerEventListener = function (evtName, evtHandlerFunction) {
            if (evtName === "DialogRequest") {
                this.dialogRequestFunc = evtHandlerFunction;
            }
            return 0;
        };
        ZacApp.prototype.unregisterEventListener = function (evtName, id) {
        };
        return ZacApp;
    }());
    exports.ZacApp = ZacApp;
});
//# sourceMappingURL=zacapp.js.map