define(["require", "exports", "../promise/util"], function (require, exports, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkerClient = void 0;
    var WorkerClient = (function () {
        function WorkerClient() {
            var _this = this;
            this.messageCount = 0;
            this.messages = {};
            this.worker = new Worker(window.__karma__ ? "base/config.js" : "config.js");
            this.deferHostLoaded = util_1.Defer.defer();
            this.worker.onmessage = function (event) {
                var message = event.data;
                if (_this.isMessageResult(message)) {
                    console.log("WorkerClient message: ", event.data);
                    if (message.id !== undefined && _this.messages[message.id]) {
                        if (message.reject !== undefined) {
                            _this.messages[message.id].reject(message.reject);
                        }
                        else {
                            _this.messages[message.id].resolve(message.resolve);
                        }
                        delete _this.messages[message.id];
                    }
                }
                else if (_this.isMessageLogging(message)) {
                    console[message.method].apply(console, message.args);
                }
                else if (_this.isMessageHostLoaded(message)) {
                    _this.deferHostLoaded.resolve();
                }
            };
            this.worker.onerror = function (event) {
                console.error("WorkerClient error: ", event);
            };
        }
        WorkerClient.prototype.startHost = function (codeFile) {
            var _this = this;
            return this.deferHostLoaded.promise
                .then(function () { return _this.postMessage({ target: "start", codeFile: codeFile }); })
                .then(function (result) {
                var proxyType = {};
                var localThis = _this;
                var _loop_1 = function (method) {
                    proxyType[method] = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return localThis.postMessage({ target: "method", method: method, args: args });
                    };
                };
                for (var _i = 0, _a = result.methods; _i < _a.length; _i++) {
                    var method = _a[_i];
                    _loop_1(method);
                }
                proxyType.getProp = function (prop) {
                    return localThis.postMessage({ target: "method", method: "getProp", args: [prop] });
                };
                proxyType.setProp = function (prop, value) {
                    return localThis.postMessage({ target: "method", method: "setProp", args: [prop, value] });
                };
                return proxyType;
            });
        };
        WorkerClient.prototype.postMessage = function (message) {
            message.id = this.messageCount++;
            this.worker.postMessage(message);
            this.messages[message.id] = util_1.Defer.defer();
            return this.messages[message.id].promise;
        };
        WorkerClient.prototype.isMessageHostLoaded = function (message) {
            return message.target === "hostloaded";
        };
        WorkerClient.prototype.isMessageResult = function (message) {
            return message.target === "result";
        };
        WorkerClient.prototype.isMessageLogging = function (message) {
            return message.target === "logging";
        };
        return WorkerClient;
    }());
    exports.WorkerClient = WorkerClient;
});
//# sourceMappingURL=workerClient.js.map