define(["require", "exports", "rxjs/operators", "rxjs"], function (require, exports, operators_1, rxjs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.filterMqttMessage = exports.filterMessage = exports.filterGrants = void 0;
    exports.filterGrants = function () { return operators_1.filter(function (item) { return item.$type === "grants"; }); };
    exports.filterMessage = function () { return operators_1.filter(function (item) { return item.$type === "message"; }); };
    exports.filterMqttMessage = function (messageType) {
        return rxjs_1.pipe(exports.filterMessage(), operators_1.filter(function (data) { var _a; return ((_a = data.mqttMessage.payload) === null || _a === void 0 ? void 0 : _a.$type) === messageType; }), operators_1.map(function (data) { return data.mqttMessage; }));
    };
});
//# sourceMappingURL=mqtt.interfaces.js.map