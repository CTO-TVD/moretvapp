define(["require", "exports", "moment", "../../Enums", "../../net/http/RestClient", "../../net/entity/StringEntity", "./ILogger"], function (require, exports, moment, Enums_1, RestClient_1, StringEntity_1, ILogger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoggerWebservice = void 0;
    var LoggerWebservice = (function () {
        function LoggerWebservice(logConfig) {
            var _this = this;
            this.logLevel = ILogger_1.LogLevel.info;
            this.buffer = [];
            var _loop_1 = function (level) {
                var levelstr = ILogger_1.LogLevel[level];
                this_1[levelstr] = function (message) {
                    _this.print(levelstr, message);
                };
            };
            var this_1 = this;
            for (var _i = 0, _a = Enums_1.Enums.getValues(ILogger_1.LogLevel); _i < _a.length; _i++) {
                var level = _a[_i];
                _loop_1(level);
            }
            if (logConfig === null || logConfig === void 0 ? void 0 : logConfig.endpoint) {
                this.settings = {
                    endpoint: logConfig.endpoint,
                    filter: logConfig.msgfilter ? new RegExp(logConfig.msgfilter) : /./,
                    lines: logConfig.buffer ? logConfig.buffer.lines || 100 : 100,
                    time: (logConfig.buffer ? logConfig.buffer.time || 10 : 10) * 1000
                };
            }
        }
        LoggerWebservice.prototype.getLogLevel = function () {
            return this.logLevel;
        };
        LoggerWebservice.prototype.setLogLevel = function (newlevel) {
            var _this = this;
            this.logLevel = newlevel;
            var _loop_2 = function (level) {
                var levelstr = ILogger_1.LogLevel[level];
                if (level >= newlevel) {
                    this_2[levelstr] = function (message) {
                        _this.print(levelstr, message);
                    };
                }
                else {
                    this_2[levelstr] = function () { };
                }
            };
            var this_2 = this;
            for (var _i = 0, _a = Enums_1.Enums.getValues(ILogger_1.LogLevel); _i < _a.length; _i++) {
                var level = _a[_i];
                _loop_2(level);
            }
        };
        LoggerWebservice.prototype.print = function (level, message) {
            if (this.settings) {
                var logMessage = level.toUpperCase() + " | " + moment().format("YYYY-MM-DD HH:mm:ss.SSS") + " | " + message;
                if (this.settings.filter.test(logMessage)) {
                    this.bufferMessage(this.settings, logMessage);
                }
            }
        };
        LoggerWebservice.prototype.bufferMessage = function (settings, msg) {
            var _this = this;
            this.buffer.push(msg);
            if (this.buffer.length >= settings.lines) {
                this.outputToWebService(settings);
                if (this.timer) {
                    clearTimeout(this.timer);
                    this.timer = undefined;
                }
            }
            else if (!this.timer) {
                this.timer = setTimeout(function () {
                    _this.outputToWebService(settings);
                    _this.timer = undefined;
                }, settings.time);
            }
        };
        LoggerWebservice.prototype.outputToWebService = function (settings) {
            var msg = this.buffer.join("\r\n");
            this.buffer = [];
            RestClient_1.RestClient.instance.post(settings.endpoint, [{ key: "Content-type", value: "text/plain;charset=UTF-8" }], undefined, new StringEntity_1.StringEntity(msg));
        };
        return LoggerWebservice;
    }());
    exports.LoggerWebservice = LoggerWebservice;
});
//# sourceMappingURL=LoggerWebservice.js.map