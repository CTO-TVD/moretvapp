var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "./BaseError", "rxjs", "rxjs/operators", "../eventmanager/eventmanager", "../util/log/public", "../util/StringTools"], function (require, exports, BaseError_1, rxjs_1, operators_1, eventmanager_1, public_1, StringTools_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ErrorManager = void 0;
    var ErrorManager = (function () {
        function ErrorManager() {
        }
        ErrorManager_1 = ErrorManager;
        ErrorManager.onError = function (callback) {
            return ErrorManager_1.eventManager.on("onError", callback, "ErrorManager");
        };
        ErrorManager.onCloseDialog = function (callback) {
            return ErrorManager_1.eventManager.on("onCloseDialog", callback, "ErrorManager");
        };
        ErrorManager.catch = function (error, classID, codeID) {
            ErrorManager_1.catchEvent({ error: error, classID: classID, codeID: codeID });
        };
        ErrorManager.closeDialog = function (error, classID, codeID) {
            ErrorManager_1.eventManager.broadcast("onCloseDialog", { error: error, classID: classID, codeID: codeID });
        };
        ErrorManager.catchEvent = function (errorData) {
            if (errorData) {
                if (errorData.error instanceof BaseError_1.PromiseCancelError) {
                    return;
                }
                public_1.Logger.error(function (log) { return log(public_1.LogMsg(StringTools_1.StringTools.dataStringify(errorData.error), ErrorManager_1.TAG)); });
                ErrorManager_1.eventManager.broadcast("onError", errorData);
            }
        };
        ErrorManager.catchFunc = function (classID, codeID) {
            return function (onReject) { return ErrorManager_1.catch(onReject, classID, codeID); };
        };
        var ErrorManager_1;
        ErrorManager.eventManager = new eventmanager_1.EventManager();
        ErrorManager.catchOperator = function (classID, codeID, selector) {
            return rxjs_1.pipe(operators_1.catchError(function (err, caught) {
                var _a;
                ErrorManager_1.catch(err, classID, codeID);
                return (_a = selector === null || selector === void 0 ? void 0 : selector(err, caught)) !== null && _a !== void 0 ? _a : rxjs_1.throwError(err);
            }));
        };
        ErrorManager = ErrorManager_1 = __decorate([
            public_1.logTag()
        ], ErrorManager);
        return ErrorManager;
    }());
    exports.ErrorManager = ErrorManager;
});
//# sourceMappingURL=error.manager.js.map