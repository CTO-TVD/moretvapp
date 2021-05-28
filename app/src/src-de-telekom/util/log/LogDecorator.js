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
define(["require", "exports", "rxjs/operators", "./Logger", "./LogMessage", "../StringTools", "../../configuration/configuration", "../../typing/guard", "../Stopwatch", "../../rxjs/operators"], function (require, exports, operators_1, Logger_1, LogMessage_1, StringTools_1, configuration_1, guard_1, Stopwatch_1, operators_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.log2 = exports.logTag = void 0;
    var logCount = 0;
    var defaultConfig = { inlen: 200, outlen: 200, outlenError: 500, name: "", logError: false, logType: "debug", monitorPromise: false, monitorThreshold: 1000 };
    function logTag() {
        return function (target) {
            target.TAG = (target.toString().match(/\w+/g) || {})[1];
            return target;
        };
    }
    exports.logTag = logTag;
    function log2(config) {
        return function (target, key, descriptor) {
            return logInternal(target, key, descriptor, function () { return (__assign(__assign({}, defaultConfig), (config === null || config === void 0 ? void 0 : config()))); });
        };
    }
    exports.log2 = log2;
    function logInternal(target, key, descriptor, configFunc) {
        var originalValue = descriptor.value;
        var config;
        descriptor.value = function () {
            var _a;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (config === undefined)
                config = configFunc();
            if ((_a = configuration_1.Configuration.instance.logging) === null || _a === void 0 ? void 0 : _a.decorator) {
                var newConfig = configuration_1.Configuration.instance.logging.decorator;
                config.inlen = typeof newConfig.inlen === "number" ? newConfig.inlen : config.inlen;
                config.outlen = typeof newConfig.outlen === "number" ? newConfig.outlen : config.outlen;
                config.outlenError = typeof newConfig.outlenError === "number" ? newConfig.outlenError : config.outlenError;
            }
            var a;
            var watch;
            var count = logCount++;
            var logMessage = config.logType === "debug" ? Logger_1.Logger.debug : Logger_1.Logger.verbose;
            var warnMessage = Logger_1.Logger.warn;
            var errorMessage = config.logError ? Logger_1.Logger.error : logMessage;
            logMessage(function (log) {
                if (a === undefined)
                    a = buildParameterString(config, args);
                log(LogMessage_1.LogMsg("Call '" + count + "' (entry): " + key + "(" + a + ")", config.name));
            });
            if (config.monitorPromise) {
                watch = new Stopwatch_1.Stopwatch().start();
            }
            try {
                var result_1 = originalValue.apply(this, args);
                logMessage(function (log) {
                    var r = buildLogString(config.outlen, function () { return StringTools_1.StringTools.dataStringify(result_1); });
                    log(LogMessage_1.LogMsg("Call '" + count + "' (result): " + key + "(" + a + ") => " + r, config.name));
                });
                if (guard_1.Guard.isPromise(result_1)) {
                    result_1
                        .then(function (data) {
                        logMessage(function (log) {
                            var r = buildLogString(config.outlen, function () { return StringTools_1.StringTools.dataStringify(data); });
                            log(LogMessage_1.LogMsg("Call '" + count + "' (promise): " + key + "(" + a + ") => " + r, config.name));
                        });
                        if (config.monitorPromise) {
                            var time_1 = Math.round(watch.stop().time);
                            if (time_1 > config.monitorThreshold) {
                                warnMessage(function (log) {
                                    if (a === undefined)
                                        a = buildParameterString(config, args);
                                    var r = buildLogString(config.outlen, function () { return StringTools_1.StringTools.dataStringify(data); });
                                    log(LogMessage_1.LogMsg("Call '" + count + "' (promise time: " + time_1 + "): " + key + "(" + a + ") => " + r, config.name));
                                });
                            }
                        }
                        return null;
                    })
                        .catch(function (error) {
                        errorMessage(function (log) {
                            if (a === undefined)
                                a = buildParameterString(config, args);
                            var r = buildLogString(config.outlenError, function () { return StringTools_1.StringTools.dataStringify(error); });
                            log(LogMessage_1.LogMsg("Call '" + count + "' (promise exception): " + key + "(" + a + ") => " + r, config.name));
                        });
                    });
                }
                else if (guard_1.Guard.isObservable(result_1)) {
                    return result_1
                        .pipe(operators_1.tap({
                        next: function (data) {
                            logMessage(function (log) {
                                var r = buildLogString(config.outlen, function () { return StringTools_1.StringTools.dataStringify(data); });
                                log(LogMessage_1.LogMsg("Call '" + count + "' (observable data): " + key + "(" + a + ") => " + r, config.name));
                            });
                        },
                        error: function (error) {
                            errorMessage(function (log) {
                                if (a === undefined)
                                    a = buildParameterString(config, args);
                                var r = buildLogString(config.outlenError, function () { return StringTools_1.StringTools.dataStringify(error); });
                                log(LogMessage_1.LogMsg("Call '" + count + "' (observable exception): " + key + "(" + a + ") => " + r, config.name));
                            });
                        },
                        complete: function () {
                            logMessage(function (log) {
                                log(LogMessage_1.LogMsg("Call '" + count + "' (observable complete): " + key + "(" + a + ") => <complete>", config.name));
                            });
                        }
                    }), operators_1.finalize(function () {
                        logMessage(function (log) {
                            log(LogMessage_1.LogMsg("Call '" + count + "' (observable finalize): " + key + "(" + a + ") => <finalize>", config.name));
                        });
                    }), operators_2.initialize(function () {
                        logMessage(function (log) {
                            log(LogMessage_1.LogMsg("Call '" + count + "' (observable initialize): " + key + "(" + a + ") => <initialize>", config.name));
                        });
                    }));
                }
                return result_1;
            }
            catch (error) {
                errorMessage(function (log) {
                    if (a === undefined)
                        a = buildParameterString(config, args);
                    var r = buildLogString(config.outlenError, function () { return StringTools_1.StringTools.dataStringify(error); });
                    log(LogMessage_1.LogMsg("Call '" + count + "' (result exception): " + key + "(" + a + ") => " + r, config.name));
                });
                throw error;
            }
        };
        return descriptor;
    }
    function buildParameterString(config, args) {
        return buildLogString(config.inlen, function () { return args
            .map(function (a, index) { return config.parameters && config.parameters.indexOf(index) == -1 ? "<suppressed>" : StringTools_1.StringTools.dataStringify(a); })
            .join(", "); });
    }
    function buildLogString(len, dataCallback) {
        var r = "<suppressed>";
        if (len > 0) {
            r = dataCallback();
            if (r.length > len) {
                r = r.substr(0, len) + " ... (truncated)";
            }
        }
        return r;
    }
});
//# sourceMappingURL=LogDecorator.js.map