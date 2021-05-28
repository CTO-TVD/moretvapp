var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
define(["require", "exports", "./Instrumentation/instrumentation.errors", "./Netflix/netflix.errors", "./Netflix/netflix.interfaces", "./Netflix/netflix.parameters", "./Netflix/ServiceClientAuthenticationNetflix", "./YouTube/ServiceClientAuthenticationYoutube", "./Zosa/ServiceClientAuthenticationZosa", "./VoiceHistory/ServiceClientAuthenticationVoiceHistory", "./Netflix/ServiceClientCacheNetflix", "./YouTube/ServiceClientCacheYoutube", "./Zosa/ServiceClientCacheZosa", "./Instrumentation/ServiceClientContextInstrumentation", "./Netflix/ServiceClientContextNetflix", "./YouTube/ServiceClientContextYoutube", "./Zac/ServiceClientContextZac", "./Zosa/ServiceClientContextZosa", "./VoiceHistory/ServiceClientContextVoiceHistory", "./Instrumentation/ServiceClientInstrumentation", "./Netflix/ServiceClientNetflix", "./YouTube/ServiceClientYoutube", "./VoiceHistory/ServiceClientVoiceHistory", "./Zac/ServiceClientZac", "./Zosa/serviceclientzosa.interface", "./Zosa/ServiceClientZosa", "./YouTube/youtube.errors", "./YouTube/youtube.parameter", "./Zac/zac.errors", "./Zosa/zosa.errors", "./Zosa/zosa.static"], function (require, exports, instrumentation_errors_1, netflix_errors_1, netflix_interfaces_1, netflix_parameters_1, ServiceClientAuthenticationNetflix_1, ServiceClientAuthenticationYoutube_1, ServiceClientAuthenticationZosa_1, ServiceClientAuthenticationVoiceHistory_1, ServiceClientCacheNetflix_1, ServiceClientCacheYoutube_1, ServiceClientCacheZosa_1, ServiceClientContextInstrumentation_1, ServiceClientContextNetflix_1, ServiceClientContextYoutube_1, ServiceClientContextZac_1, ServiceClientContextZosa_1, ServiceClientContextVoiceHistory_1, ServiceClientInstrumentation_1, ServiceClientNetflix_1, ServiceClientYoutube_1, ServiceClientVoiceHistory_1, ServiceClientZac_1, serviceclientzosa_interface_1, ServiceClientZosa_1, youtube_errors_1, youtube_parameter_1, zac_errors_1, zosa_errors_1, zosa_static_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isZosaItem = exports.convertToString = void 0;
    __exportStar(instrumentation_errors_1, exports);
    __exportStar(netflix_errors_1, exports);
    __exportStar(netflix_interfaces_1, exports);
    __exportStar(netflix_parameters_1, exports);
    __exportStar(ServiceClientAuthenticationNetflix_1, exports);
    __exportStar(ServiceClientAuthenticationYoutube_1, exports);
    __exportStar(ServiceClientAuthenticationZosa_1, exports);
    __exportStar(ServiceClientAuthenticationVoiceHistory_1, exports);
    __exportStar(ServiceClientCacheNetflix_1, exports);
    __exportStar(ServiceClientCacheYoutube_1, exports);
    __exportStar(ServiceClientCacheZosa_1, exports);
    __exportStar(ServiceClientContextInstrumentation_1, exports);
    __exportStar(ServiceClientContextNetflix_1, exports);
    __exportStar(ServiceClientContextYoutube_1, exports);
    __exportStar(ServiceClientContextZac_1, exports);
    __exportStar(ServiceClientContextZosa_1, exports);
    __exportStar(ServiceClientContextVoiceHistory_1, exports);
    __exportStar(ServiceClientInstrumentation_1, exports);
    __exportStar(ServiceClientNetflix_1, exports);
    __exportStar(ServiceClientYoutube_1, exports);
    __exportStar(ServiceClientVoiceHistory_1, exports);
    __exportStar(ServiceClientZac_1, exports);
    __exportStar(serviceclientzosa_interface_1, exports);
    __exportStar(ServiceClientZosa_1, exports);
    __exportStar(youtube_errors_1, exports);
    __exportStar(youtube_parameter_1, exports);
    __exportStar(zac_errors_1, exports);
    __exportStar(zosa_errors_1, exports);
    __exportStar(zosa_static_1, exports);
    function convertToString(item) {
        return isZosaItem(item) ? item.zosaId : item;
    }
    exports.convertToString = convertToString;
    function isZosaItem(arg) {
        return arg.zosaId !== undefined;
    }
    exports.isZosaItem = isZosaItem;
});
//# sourceMappingURL=public.js.map