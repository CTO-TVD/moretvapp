define(["require", "exports", "bluebird", "../backend/public"], function (require, exports, bluebird, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Amazon = void 0;
    var Amazon = (function () {
        function Amazon() {
        }
        Amazon.doFactoryReset = function () {
            return bluebird.try(function () { return public_1.ServiceClientZac.getCustomApiAmazon(public_1.ServiceClientContextZac.instance).object.Call("FactoryReset", null); });
        };
        Amazon.onAmazonStateChanged = function (callback) {
            return public_1.ServiceClientZac.getCustomApiAmazon(public_1.ServiceClientContextZac.instance).events.onCustomAPIEvent(callback);
        };
        return Amazon;
    }());
    exports.Amazon = Amazon;
});
//# sourceMappingURL=applicationclient.amazon.js.map