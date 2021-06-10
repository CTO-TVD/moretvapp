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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define(["require", "exports", "./uar.service", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/public", "src/src-de-telekom-app-tv-core-v2/framework/public", "./uar.mqtt.messages", "./uar.password.dialog", "./uar.pin.dialog", "./uar.remoteaccess.dialog", "./uar.service"], function (require, exports, uar_service_1, public_1, public_2, public_3, public_4, uar_mqtt_messages_1, uar_password_dialog_1, uar_pin_dialog_1, uar_remoteaccess_dialog_1, uar_service_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UarModule = void 0;
    __exportStar(uar_mqtt_messages_1, exports);
    __exportStar(uar_password_dialog_1, exports);
    __exportStar(uar_pin_dialog_1, exports);
    __exportStar(uar_remoteaccess_dialog_1, exports);
    __exportStar(uar_service_2, exports);
    var UarModule = (function (_super) {
        __extends(UarModule, _super);
        function UarModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UarModule.prototype.run = function () {
            var uarService = uar_service_1.UarService.getInstance();
            uarService.registerForUar(public_2.ApplicationClient.app.getCurrentApp());
            uarService.getAVSBlockingStatus()
                .then(function (blocked) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("UarModule getAVSBlockingStatus " + blocked, "UarModule")); });
                if (!blocked) {
                    public_3.Logger.debug(function (log) { return log(public_3.LogMsg("UarModule parentalUnblock(AVS)", "UarModule")); });
                    public_4.PconGroupedContentLockManager.resetAvsLock()
                        .catch(function () { return undefined; });
                }
            });
        };
        return UarModule;
    }(public_1.ReactBaseModule));
    exports.UarModule = UarModule;
});
//# sourceMappingURL=public.js.map