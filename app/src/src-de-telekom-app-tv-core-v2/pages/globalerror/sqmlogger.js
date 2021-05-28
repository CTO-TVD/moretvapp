var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "src/src-de-telekom-tv-core/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SqmLogger = void 0;
    var SqmLogger = (function () {
        function SqmLogger() {
            var _this = this;
            var _loop_1 = function (level) {
                var levelstr = public_1.LogLevel[level];
                if (level >= public_1.LogLevel.warn) {
                    this_1[levelstr] = function (message) {
                        try {
                            _this.print(level, message);
                        }
                        catch (_a) { }
                    };
                }
                else {
                    this_1[levelstr] = function () { };
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = public_1.Enums.getValues(public_1.LogLevel); _i < _a.length; _i++) {
                var level = _a[_i];
                _loop_1(level);
            }
        }
        SqmLogger_1 = SqmLogger;
        SqmLogger.prototype.getLogLevel = function () {
            return public_1.LogLevel.warn;
        };
        SqmLogger.prototype.setLogLevel = function (newlevel) {
        };
        SqmLogger.prototype.print = function (level, message) {
            if (message && message.indexOf("[" + public_1.ErrorManager.TAG + "]") !== -1) {
                return;
            }
            var buildInfo = public_1.Configuration.instance.buildinfo;
            var buildInfoText = buildInfo != null ? "(" + buildInfo.majorVersion + "." + buildInfo.buildVersion + " (" + buildInfo.buildDate + ")) " : "(unknown) ";
            var sqmEvent = {
                ErrorEventType: level == public_1.LogLevel.error ? "Device Internal Error" : "Device Internal Warning",
                ErrorMessage: buildInfoText + message,
                ErrorCode: ""
            };
            public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("writing logging information to SQM.", SqmLogger_1.TAG)); });
            public_2.ServiceClientZac.pushSqmEvent(public_2.ServiceClientContextZac.instance, sqmEvent);
            public_1.Logger.verbose(function (log) { return log(public_1.LogMsg("logging information was written to SQM.", SqmLogger_1.TAG)); });
        };
        var SqmLogger_1;
        SqmLogger = SqmLogger_1 = __decorate([
            public_1.logTag()
        ], SqmLogger);
        return SqmLogger;
    }());
    exports.SqmLogger = SqmLogger;
});
//# sourceMappingURL=sqmlogger.js.map