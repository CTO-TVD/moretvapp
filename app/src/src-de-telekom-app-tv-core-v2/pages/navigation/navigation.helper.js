var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom-tv-core/public", "src/src-de-telekom/public", "src/src-de-telekom-react/public"], function (require, exports, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NavigationHelper = void 0;
    var NavigationHelper = (function () {
        function NavigationHelper() {
        }
        NavigationHelper_1 = NavigationHelper;
        NavigationHelper.navigateToSearch = function (injectedComponent, searchContext) {
            var searchOptions = {
                calledBySearchKey: true,
                context: searchContext ? NavigationHelper_1.getSearchProfile(searchContext) : undefined
            };
            return injectedComponent.startIntent(undefined, { type: "exit", exitMarkerName: "application" })
                .then(function () { return injectedComponent.startIntent(new public_3.IntentCore.Search(searchOptions)); });
        };
        NavigationHelper.getSearchProfile = function (searchContext) {
            switch (searchContext) {
                case public_1.ApplicationClient.search.SEARCH_PROFILE_KIDS_IPTV:
                    return public_3.IntentCore.SearchContext.kids;
                case public_1.ApplicationClient.search.SEARCH_PROFILE_EROTIC_IPTV:
                    return public_3.IntentCore.SearchContext.erotic;
                default:
                    return public_3.IntentCore.SearchContext.normal;
            }
        };
        var NavigationHelper_1;
        NavigationHelper.classID = 0x7BB;
        NavigationHelper = NavigationHelper_1 = __decorate([
            public_2.logTag()
        ], NavigationHelper);
        return NavigationHelper;
    }());
    exports.NavigationHelper = NavigationHelper;
});
//# sourceMappingURL=navigation.helper.js.map