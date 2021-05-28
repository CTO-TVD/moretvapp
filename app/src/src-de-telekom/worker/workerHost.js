define(["require", "exports", "../typing/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkerHost = void 0;
    var WorkerHost = (function () {
        function WorkerHost(worker) {
            var _this = this;
            this.worker = worker;
            this.worker.onmessage = function (event) { return _this.onMessage(event.data); };
            this.worker.console = {};
            ["log", "debug", "error", "info", "warn", "time", "timeEnd"].forEach(function (method) {
                _this.worker.console[method] = function () {
                    worker.postMessage({ id: 0, target: "logging", method: method, args: [].slice.call(arguments) });
                };
            });
            console.log("WorkerHost: constructed.");
            this.postMessage({ target: "hostloaded" });
        }
        WorkerHost.prototype.postMessage = function (message) {
            this.worker.postMessage(message);
        };
        WorkerHost.prototype.onStart = function (message) {
            var _this = this;
            console.log("WorkerHost: starting ...");
            require([message.codeFile], function (code) {
                var result = new code.create();
                var successFunc = function () {
                    var methods = [];
                    for (var key in _this.code) {
                        if (typeof _this.code[key] === "function") {
                            methods.push(key);
                        }
                    }
                    console.log("WorkerHost: started.");
                    _this.postMessage({ id: message.id, target: "result", resolve: { methods: methods } });
                };
                if (public_1.Guard.isPromise(result)) {
                    result.then(function (code) {
                        _this.code = code;
                        successFunc();
                    });
                }
                else {
                    _this.code = result;
                    successFunc();
                }
            });
        };
        WorkerHost.prototype.onMethod = function (message) {
            var _this = this;
            if (message.method === "getProp") {
                var result = this.code[message.args[0]];
                this.postMessage({ id: message.id, target: "result", resolve: result });
            }
            else if (message.method === "setProp") {
                this.code[message.args[0]] = message.args[1];
                this.postMessage({ id: message.id, target: "result", resolve: true });
            }
            else {
                var result = this.code[message.method].apply(null, message.args);
                if (public_1.Guard.isPromise(result)) {
                    result
                        .then(function (result) {
                        _this.postMessage({ id: message.id, target: "result", resolve: result });
                    })
                        .catch(function (error) {
                        _this.postMessage({ id: message.id, target: "result", reject: error });
                    });
                }
                else {
                    this.postMessage({ id: message.id, target: "result", reject: "Result is not a promise!" });
                }
            }
        };
        WorkerHost.prototype.onMessage = function (message) {
            console.log("WorkerHost: onMessage - " + JSON.stringify(message));
            if (this.isMessageMethod(message)) {
                this.onMethod(message);
            }
            else if (this.isMessageStart(message)) {
                this.onStart(message);
            }
        };
        WorkerHost.prototype.isMessageMethod = function (message) {
            return message.target === "method";
        };
        WorkerHost.prototype.isMessageStart = function (message) {
            return message.target === "start";
        };
        return WorkerHost;
    }());
    exports.WorkerHost = WorkerHost;
});
//# sourceMappingURL=workerHost.js.map