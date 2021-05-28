define(["require", "exports", "./ILogger", "./LoggerWebservice", "./LoggerConsole", "./LoggerNoOutput", "../../configuration/configuration", "./LogMessage", "../../net/http/RestClient", "../StringTools"], function (require, exports, ILogger_1, LoggerWebservice_1, LoggerConsole_1, LoggerNoOutput_1, configuration_1, LogMessage_1, RestClient_1, StringTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Logger = void 0;
    var Logger = (function () {
        function Logger() {
        }
        Logger.setLoggerFromConfig = function (logConfig) {
            if (logConfig) {
                if (typeof window !== "undefined" && window.__karma__) {
                    Logger.mainLogger = new LoggerNoOutput_1.LoggerNoOutput();
                }
                else {
                    if (logConfig.loggertype === "webservice") {
                        Logger.mainLogger = new LoggerWebservice_1.LoggerWebservice(logConfig);
                    }
                    else if (logConfig.loggertype === "console") {
                        Logger.mainLogger = new LoggerConsole_1.LoggerConsole();
                    }
                    else if (logConfig.loggertype === "nooutput") {
                        Logger.mainLogger = new LoggerNoOutput_1.LoggerNoOutput();
                    }
                }
                if (logConfig.loglevel) {
                    Logger.mainLogger.setLogLevel(ILogger_1.LogLevel[logConfig.loglevel]);
                }
            }
        };
        Logger.setLogger = function (mainLogger) {
            Logger.mainLogger = mainLogger;
        };
        Logger.getLogger = function () {
            return Logger.mainLogger;
        };
        Logger.toggle = function () {
            RestClient_1.RestClient.instance.get("http://192.168.2.222:8089/", [{ key: "Content-Type", value: "application/json;charset=UTF-8" }])
                .then(function (result) {
                if (result.statusCode == 200) {
                    var configJson_1 = StringTools_1.StringTools.stripJsonComments(result.responseData);
                    configuration_1.Configuration.instance.logging = JSON.parse(configJson_1);
                    Logger.debug(function (log) { return log(LogMessage_1.LogMsg("Load new configuration settings. Config: " + configJson_1, "Logger")); });
                    Logger.setLoggerFromConfig(configuration_1.Configuration.instance.logging);
                }
            })
                .catch(function (err) {
                Logger.debug(function (log) { return log(LogMessage_1.LogMsg("Cannot load configuration settings. Error: " + StringTools_1.StringTools.dataStringify(err), "Logger")); });
            });
        };
        Logger.registerAdditionalLogger = function (logger) {
            Logger.additionalLoggers.push(logger);
            return function () {
                var index = Logger.additionalLoggers.indexOf(logger);
                if (index !== -1) {
                    Logger.additionalLoggers.splice(index, 1);
                }
            };
        };
        Logger.callFunc = function (func, logger) {
            try {
                func(logger);
            }
            catch (error) {
                Logger.error(function (log) { return log(LogMessage_1.LogMsg("Error within logging code. " + (error.stack || error), "Logger")); });
            }
        };
        Logger.verbose = function (func) {
            if (Logger.mainLogger && Logger.mainLogger.getLogLevel() <= ILogger_1.LogLevel.verbose) {
                Logger.callFunc(func, Logger.mainLogger.verbose);
            }
            for (var _i = 0, _a = Logger.additionalLoggers; _i < _a.length; _i++) {
                var logger = _a[_i];
                if (logger && logger.getLogLevel() <= ILogger_1.LogLevel.verbose) {
                    Logger.callFunc(func, logger.verbose);
                }
            }
        };
        Logger.debug = function (func) {
            if (Logger.mainLogger && Logger.mainLogger.getLogLevel() <= ILogger_1.LogLevel.debug) {
                Logger.callFunc(func, Logger.mainLogger.debug);
            }
            for (var _i = 0, _a = Logger.additionalLoggers; _i < _a.length; _i++) {
                var logger = _a[_i];
                if (logger && logger.getLogLevel() <= ILogger_1.LogLevel.debug) {
                    Logger.callFunc(func, logger.debug);
                }
            }
        };
        Logger.info = function (func) {
            if (Logger.mainLogger && Logger.mainLogger.getLogLevel() <= ILogger_1.LogLevel.info) {
                Logger.callFunc(func, Logger.mainLogger.info);
            }
            for (var _i = 0, _a = Logger.additionalLoggers; _i < _a.length; _i++) {
                var logger = _a[_i];
                if (logger && logger.getLogLevel() <= ILogger_1.LogLevel.info) {
                    Logger.callFunc(func, logger.info);
                }
            }
        };
        Logger.warn = function (func) {
            if (Logger.mainLogger && Logger.mainLogger.getLogLevel() <= ILogger_1.LogLevel.warn) {
                Logger.callFunc(func, Logger.mainLogger.warn);
            }
            for (var _i = 0, _a = Logger.additionalLoggers; _i < _a.length; _i++) {
                var logger = _a[_i];
                if (logger && logger.getLogLevel() <= ILogger_1.LogLevel.warn) {
                    Logger.callFunc(func, logger.warn);
                }
            }
        };
        Logger.error = function (func) {
            if (Logger.mainLogger && Logger.mainLogger.getLogLevel() <= ILogger_1.LogLevel.error) {
                Logger.callFunc(func, Logger.mainLogger.error);
            }
            for (var _i = 0, _a = Logger.additionalLoggers; _i < _a.length; _i++) {
                var logger = _a[_i];
                if (logger && logger.getLogLevel() <= ILogger_1.LogLevel.error) {
                    Logger.callFunc(func, logger.error);
                }
            }
        };
        Logger.additionalLoggers = [];
        return Logger;
    }());
    exports.Logger = Logger;
});
//# sourceMappingURL=Logger.js.map