var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "../backend/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Youtube = void 0;
    var Youtube = (function () {
        function Youtube() {
        }
        Youtube_1 = Youtube;
        Youtube.searchList = function (searchString, _a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.offset, offset = _c === void 0 ? 0 : _c, _d = _b.maxResults, maxResults = _d === void 0 ? 15 : _d, _e = _b.order, order = _e === void 0 ? "relevance" : _e, _f = _b.safeSearch, safeSearch = _f === void 0 ? "strict" : _f;
            var parameters = new public_2.SearchListParameter(searchString, maxResults, order, safeSearch);
            return public_2.ServiceClientAuthenticationYoutube.searchList(public_2.ServiceClientContextYoutube.instance, parameters);
        };
        var Youtube_1;
        Youtube.classID = 0xB84;
        __decorate([
            public_1.log2(function () { return ({ name: Youtube_1.TAG }); })
        ], Youtube, "searchList", null);
        Youtube = Youtube_1 = __decorate([
            public_1.logTag()
        ], Youtube);
        return Youtube;
    }());
    exports.Youtube = Youtube;
});
//# sourceMappingURL=applicationclient.youtube.js.map