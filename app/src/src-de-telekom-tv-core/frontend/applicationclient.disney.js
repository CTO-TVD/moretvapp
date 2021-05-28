define(["require", "exports", "bluebird", "../backend/public"], function (require, exports, bluebird, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Disney = void 0;
    var Disney = (function () {
        function Disney() {
        }
        Disney.doFactoryReset = function () {
            return bluebird.try(function () { return public_1.ServiceClientZac.getCustomApiDisney(public_1.ServiceClientContextZac.instance).object.Call("FactoryReset", null); });
        };
        Disney.onDisneyStateChanged = function (callback) {
            return public_1.ServiceClientZac.getCustomApiDisney(public_1.ServiceClientContextZac.instance).events.onCustomAPIEvent(callback);
        };
        return Disney;
    }());
    exports.Disney = Disney;
});
//# sourceMappingURL=applicationclient.disney.js.map