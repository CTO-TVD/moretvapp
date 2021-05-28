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
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../../base/public", "../navigation/public"], function (require, exports, bluebird, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVNotificationService = void 0;
    var TVNotificationService = (function (_super) {
        __extends(TVNotificationService, _super);
        function TVNotificationService() {
            var _this = _super.call(this) || this;
            _this.layerKey = "notificationLayer";
            _this.notificationsNew = [];
            _this.notificationsProgress = [];
            _this.layerService = public_3.TVLayerManagerService.getInstance();
            _this.setOptions({
                delay: 5000,
                numberOfParallelNotifications: 1
            });
            return _this;
        }
        TVNotificationService_1 = TVNotificationService;
        TVNotificationService.prototype.getNextNotification = function () {
            if (this.notificationsNew.length > 0) {
                var notification = this.notificationsNew.splice(0, 1)[0];
                this.notificationsProgress.push(notification);
                return notification;
            }
            return undefined;
        };
        TVNotificationService.prototype.registerController = function (controller) {
            var _this = this;
            this.controller = controller;
            return function () {
                _this.controller = undefined;
            };
        };
        TVNotificationService.prototype.setOptions = function (options) {
            this.options = options;
        };
        TVNotificationService.prototype.getOptions = function () {
            return this.options;
        };
        TVNotificationService.prototype.notify = function (notification, timeoutMs) {
            var _this = this;
            if (timeoutMs === void 0) { timeoutMs = this.options.delay; }
            var data = __assign({
                timeout: timeoutMs,
                deferred: public_1.Defer.defer()
            }, notification);
            var notificationAllreadyExists = (this.notificationsNew.length > 0 && this.notificationsNew[this.notificationsNew.length - 1].message == notification.message) ||
                (this.notificationsNew.length == 0 && this.notificationsProgress.some(function (item) { return item.message == notification.message; }));
            var extendDelay = this.notificationsNew.length == 0 && this.notificationsProgress.some(function (item) { return item.message == notification.message; });
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("extending delay =>" + extendDelay + " for " + notification.message + "'", TVNotificationService_1.TAG)); });
            if (extendDelay && this.controller) {
                this.controller.onExtendRemovingTime();
            }
            if (notificationAllreadyExists && this.options.numberOfParallelNotifications <= 1 && !notification.showAdditional) {
                return {
                    result: bluebird.resolve(null),
                    closeNotification: function () { }
                };
            }
            this.notificationsNew.push(data);
            if (this.controller) {
                this.controller.onNewNotification();
            }
            this.checkAndRestartLayer();
            var result = data.deferred.promise
                .delay(0)
                .then(function () {
                var currentIndex = _this.notificationsProgress.indexOf(data);
                if (currentIndex !== -1)
                    _this.notificationsProgress.splice(currentIndex, 1);
                _this.checkAndRestartLayer();
                return null;
            });
            data.closeNotification = function () {
                var currentIndex = _this.notificationsNew.indexOf(data);
                if (currentIndex !== -1)
                    _this.notificationsNew.splice(currentIndex, 1);
                data.deferred.resolve();
            };
            return {
                result: result,
                closeNotification: function () { return data.closeNotification(); }
            };
        };
        TVNotificationService.prototype.notifyError = function (message) {
            return this.notify({
                notificationType: "error",
                message: message
            });
        };
        TVNotificationService.prototype.notifyInfo = function (message, timeoutMs) {
            if (timeoutMs === void 0) { timeoutMs = this.options.delay; }
            return this.notify({
                notificationType: "info",
                message: message
            }, timeoutMs);
        };
        TVNotificationService.prototype.notifyLocked = function (message) {
            return this.notify({
                notificationType: "locked",
                message: message
            });
        };
        TVNotificationService.prototype.notifyUnLocked = function (message) {
            return this.notify({
                notificationType: "unlocked",
                message: message
            });
        };
        TVNotificationService.prototype.notifySuccess = function (message) {
            return this.notify({
                notificationType: "success",
                message: message
            });
        };
        TVNotificationService.prototype.checkAndRestartLayer = function () {
            if ((this.notificationsNew.length == 0) && (this.notificationsProgress.length == 0)) {
                this.layerService.hide(this.layerKey);
            }
            else {
                this.layerService.show(this.layerKey);
            }
        };
        var TVNotificationService_1;
        TVNotificationService = TVNotificationService_1 = __decorate([
            public_1.logTag()
        ], TVNotificationService);
        return TVNotificationService;
    }(public_2.ReactBaseService));
    exports.TVNotificationService = TVNotificationService;
});
//# sourceMappingURL=notification.service.js.map