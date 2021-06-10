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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "./eventgenerator"], function (require, exports, public_1, eventgenerator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacSystemInfo = void 0;
    var ZacSystemInfo = (function (_super) {
        __extends(ZacSystemInfo, _super);
        function ZacSystemInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ZacSystemInfo_1 = ZacSystemInfo;
        ZacSystemInfo.prototype.getEventManagerId = function () { return "ZacSystemInfo"; };
        ZacSystemInfo.prototype.getLogSource = function () { return ZacSystemInfo_1.TAG; };
        ZacSystemInfo.prototype.Call = function (name, parameters) {
            if (name === "ping") {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("send CustomAPIEvent PingResponse", ZacSystemInfo_1.TAG)); });
                this.eventManager.broadcast("CustomAPIEvent", {
                    eventType: "PingEventResponse",
                    numberOfSuccessfulPings: parameters.numOfPackets,
                    numberOfFailedPings: 0,
                    maxPingDuration: 2,
                    avgPingDuration: 2
                });
            }
        };
        var ZacSystemInfo_1;
        ZacSystemInfo = ZacSystemInfo_1 = __decorate([
            public_1.logTag()
        ], ZacSystemInfo);
        return ZacSystemInfo;
    }(eventgenerator_1.EventGenerator));
    exports.ZacSystemInfo = ZacSystemInfo;
});
//# sourceMappingURL=zacsysteminfo.js.map