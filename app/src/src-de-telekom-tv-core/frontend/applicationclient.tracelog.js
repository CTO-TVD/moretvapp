var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "../backend/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TraceLog = void 0;
    var TraceLog = (function () {
        function TraceLog() {
        }
        TraceLog_1 = TraceLog;
        TraceLog.startTraceLogClient = function () {
            var sessionState = TraceLog_1.getSessionState();
            var settings = TraceLog_1.getSettings();
            var closable;
            TraceLog_1.onChangeEvent(function (event) {
                if (event && event.EventType === "SettingsChanged") {
                    settings = event;
                }
                if (event && event.EventType === "SessionStateChanged") {
                    if (settings && event.SessionState == "Ongoing") {
                        if (closable) {
                            closable();
                            closable = undefined;
                        }
                        closable = TraceLog_1.startNewTraceLogger(settings);
                    }
                    else {
                        if (closable) {
                            closable();
                            closable = undefined;
                        }
                    }
                }
            });
            if (settings && sessionState && sessionState.SessionState === "Ongoing") {
                closable = TraceLog_1.startNewTraceLogger(settings);
            }
        };
        TraceLog.startNewTraceLogger = function (settings) {
            if (settings.Level === "0")
                return undefined;
            var traceLevel = settings.Level === "3"
                ? public_1.LogLevel.debug
                : settings.Level === "2"
                    ? public_1.LogLevel.info
                    : public_1.LogLevel.error;
            var traceLogger = new LoggerTraceLog();
            traceLogger.setLogLevel(traceLevel);
            return public_1.Logger.registerAdditionalLogger(traceLogger);
        };
        TraceLog.getSessionState = function () {
            var result = public_2.ServiceClientZac.getCustomApiSqmTracelog(public_2.ServiceClientContextZac.instance).object.Call("GetSessionState");
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("GetSessionState RAW result: " + JSON.stringify(result), TraceLog_1.TAG)); });
            return result;
        };
        TraceLog.getSettings = function () {
            var result = public_2.ServiceClientZac.getCustomApiSqmTracelog(public_2.ServiceClientContextZac.instance).object.Call("GetSettings");
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("GetSettings RAW result: " + JSON.stringify(result), TraceLog_1.TAG)); });
            return result;
        };
        TraceLog.pushTraceLogEntry = function (input) {
            try {
                var result = public_2.ServiceClientZac.getCustomApiSqmTracelog(public_2.ServiceClientContextZac.instance).object.Call("PushTraceLogEntry", input);
                return result;
            }
            catch (_a) { }
            return undefined;
        };
        TraceLog.onChangeEvent = function (callback) {
            return public_2.ServiceClientZac.getCustomApiSqmTracelog(public_2.ServiceClientContextZac.instance).events.onCustomAPIEvent(function (event) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("onChangeEvent RAW event: " + JSON.stringify(event), TraceLog_1.TAG)); });
                callback(event);
            });
        };
        var TraceLog_1;
        TraceLog = TraceLog_1 = __decorate([
            public_1.logTag()
        ], TraceLog);
        return TraceLog;
    }());
    exports.TraceLog = TraceLog;
    var LoggerTraceLog = (function () {
        function LoggerTraceLog() {
            var _this = this;
            this.logLevel = public_1.LogLevel.info;
            var _loop_1 = function (level) {
                var levelstr = public_1.LogLevel[level];
                this_1[levelstr] = function (message) {
                    _this.print(level, message);
                };
            };
            var this_1 = this;
            for (var _i = 0, _a = public_1.Enums.getValues(public_1.LogLevel); _i < _a.length; _i++) {
                var level = _a[_i];
                _loop_1(level);
            }
        }
        LoggerTraceLog.prototype.getLogLevel = function () {
            return this.logLevel;
        };
        LoggerTraceLog.prototype.setLogLevel = function (newlevel) {
            var _this = this;
            this.logLevel = newlevel;
            var _loop_2 = function (level) {
                var levelstr = public_1.LogLevel[level];
                if (level >= newlevel) {
                    this_2[levelstr] = function (message) {
                        _this.print(level, message);
                    };
                }
                else {
                    this_2[levelstr] = function () { };
                }
            };
            var this_2 = this;
            for (var _i = 0, _a = public_1.Enums.getValues(public_1.LogLevel); _i < _a.length; _i++) {
                var level = _a[_i];
                _loop_2(level);
            }
        };
        LoggerTraceLog.prototype.print = function (level, message) {
            var traceLevel = (level === public_1.LogLevel.debug || level === public_1.LogLevel.verbose)
                ? "3"
                : level === public_1.LogLevel.info
                    ? "2"
                    : "1";
            TraceLog.pushTraceLogEntry({ Level: traceLevel, Message: message });
        };
        return LoggerTraceLog;
    }());
});
//# sourceMappingURL=applicationclient.tracelog.js.map