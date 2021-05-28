define(["require", "exports", "../backend/public"], function (require, exports, backend) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VodManagement = void 0;
    var VodManagement = (function () {
        function VodManagement() {
        }
        VodManagement.createVod = function (parameters) {
            return backend.ServiceClientAuthenticationZosa
                .createVod(backend.ServiceClientContextZosa.instance, parameters);
        };
        VodManagement.getVods = function (parameters) {
            return backend.ServiceClientAuthenticationZosa
                .getVods(backend.ServiceClientContextZosa.instance, parameters);
        };
        return VodManagement;
    }());
    exports.VodManagement = VodManagement;
});
//# sourceMappingURL=applicationclient.vodmanagement.js.map