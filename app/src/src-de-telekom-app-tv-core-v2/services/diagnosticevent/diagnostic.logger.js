var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "src/src-de-telekom-tv-core/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticLogger = void 0;
    var DiagnosticLogger = (function () {
        function DiagnosticLogger() {
            var _loop_1 = function (level) {
                var levelstr = public_1.LogLevel[level];
                if (level >= public_1.LogLevel.warn) {
                    this_1[levelstr] = function (message) {
                        var regExp = /\[(.*?)\]/g;
                        var regExpResult = regExp.exec(message);
                        var componentTag = regExpResult != null && regExpResult.length > 0 ? regExpResult[0] : undefined;
                        if (componentTag != "[" + public_1.ErrorManager.TAG + "]") {
                            public_2.ApplicationClient.performance.ErrorEventObservable.next({
                                data: {
                                    classID: {
                                        classID: DiagnosticLogger_1.classID
                                    },
                                    codeID: 0,
                                    error: {
                                        errorID: 1,
                                        message: message,
                                        name: componentTag + " " + levelstr,
                                        getAdditionalErrorCode: function () { return undefined; }
                                    }
                                }
                            });
                        }
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
        DiagnosticLogger_1 = DiagnosticLogger;
        DiagnosticLogger.prototype.getLogLevel = function () {
            return public_1.LogLevel.warn;
        };
        DiagnosticLogger.prototype.setLogLevel = function (newlevel) {
        };
        var DiagnosticLogger_1;
        DiagnosticLogger.classID = 0x7C1;
        DiagnosticLogger = DiagnosticLogger_1 = __decorate([
            public_1.logTag()
        ], DiagnosticLogger);
        return DiagnosticLogger;
    }());
    exports.DiagnosticLogger = DiagnosticLogger;
});
//# sourceMappingURL=diagnostic.logger.js.map