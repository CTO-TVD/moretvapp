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
define(["require", "exports", "src/src-de-telekom/public", "../backend/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacApp = void 0;
    function isCobaltCustomCommand(arg) {
        return public_1.Guard.isDefined(arg.cobalt_kSbSystemPlatformErrorTypeConnectionError);
    }
    var CobaltCustomCommandError = (function (_super) {
        __extends(CobaltCustomCommandError, _super);
        function CobaltCustomCommandError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x640;
            return _this;
        }
        return CobaltCustomCommandError;
    }(public_1.BaseError));
    var ZacApp = (function () {
        function ZacApp() {
        }
        ZacApp_1 = ZacApp;
        ZacApp.getCurrentApp = function () {
            return public_2.ServiceClientZac.getApp(public_2.ServiceClientContextZac.instance);
        };
        ZacApp.registerForCobaltErrors = function () {
            public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("registerForCobaltErrors - enter", ZacApp_1.TAG)); });
            var app = ZacApp_1.getCurrentApp();
            app.events.onCustomCmd(function (event) {
                try {
                    var command_1 = JSON.parse(decodeURIComponent(event.command));
                    public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("registerForCobaltErrors - onCustomCmd -> command: '" + public_1.StringTools.dataStringify(command_1) + "'", ZacApp_1.TAG)); });
                    if (isCobaltCustomCommand(command_1)) {
                        public_1.ErrorManager.catch(new CobaltCustomCommandError("Connection error."), ZacApp_1, 0x01);
                    }
                }
                catch (error) {
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("registerForCobaltErrors - onCustomCmd invalid JSON format", ZacApp_1.TAG)); });
                }
            });
            public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("registerForCobaltErrors - leave", ZacApp_1.TAG)); });
        };
        var ZacApp_1;
        ZacApp.classID = 0x105;
        ZacApp = ZacApp_1 = __decorate([
            public_1.logTag()
        ], ZacApp);
        return ZacApp;
    }());
    exports.ZacApp = ZacApp;
});
//# sourceMappingURL=applicationclient.app.js.map