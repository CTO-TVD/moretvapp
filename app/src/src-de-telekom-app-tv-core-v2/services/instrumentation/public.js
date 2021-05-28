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
define(["require", "exports", "./instrumentation.service", "src/src-de-telekom-react/public", "./instrumentation.service", "./instrumentation.mqtt.messages"], function (require, exports, instrumentation_service_1, public_1, instrumentation_service_2, instrumentation_mqtt_messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InstrumentationModule = void 0;
    __exportStar(instrumentation_service_2, exports);
    __exportStar(instrumentation_mqtt_messages_1, exports);
    var InstrumentationModule = (function (_super) {
        __extends(InstrumentationModule, _super);
        function InstrumentationModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InstrumentationModule.prototype.run = function () {
            instrumentation_service_1.InstrumentationService.getInstance();
            instrumentation_service_1.InstrumentationService.onMessage.subscribe({
                next: function (data) {
                    switch (data.message) {
                        case "RecordingStarted":
                            public_1.TVNotificationService.getInstance().notifySuccess("Recording session is started.");
                            break;
                        case "RecordingStopped":
                            public_1.TVNotificationService.getInstance().notifySuccess("Recording session is stopped.");
                            break;
                        case "StartRecording":
                            public_1.TVNotificationService.getInstance().notifySuccess("Start a new recording session.");
                            break;
                        case "StopRecording":
                            public_1.TVNotificationService.getInstance().notifySuccess("Stop the current recording session.");
                            break;
                    }
                }
            });
        };
        return InstrumentationModule;
    }(public_1.ReactBaseModule));
    exports.InstrumentationModule = InstrumentationModule;
});
//# sourceMappingURL=public.js.map