var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
define(["require", "exports", "src/src-de-telekom/public", "../backend/Zac/ServiceClientZac"], function (require, exports, public_1, ServiceClientZac_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SearchHistory = exports.SearchContext = void 0;
    var SearchContext;
    (function (SearchContext) {
        SearchContext["normal"] = "normal";
        SearchContext["kids"] = "kids";
        SearchContext["erotic"] = "erotic";
    })(SearchContext = exports.SearchContext || (exports.SearchContext = {}));
    var SearchHistory = (function () {
        function SearchHistory() {
        }
        SearchHistory_1 = SearchHistory;
        SearchHistory.addItem = function (query, context) {
            var _this = this;
            if (context === void 0) { context = SearchContext.normal; }
            var newItem = {
                query: query,
                timestamp: Date.now(),
                context: context
            };
            return this.getSearchHistory()
                .then(function (searchHistory) {
                if (!searchHistory[context]) {
                    searchHistory[context] = [];
                }
                for (var i = searchHistory[context].length; i--;) {
                    if (searchHistory[context][i].query === newItem.query &&
                        searchHistory[context][i].context === newItem.context) {
                        searchHistory[context].splice(i, 1);
                    }
                }
                searchHistory[context] = __spreadArray([newItem], searchHistory[context]).slice(0, _this.HISTORY_SIZE);
                ServiceClientZac_1.ServiceClientZac.writeItem(_this.SEARCH_HISTORY, JSON.stringify(searchHistory));
                return searchHistory[context];
            });
        };
        SearchHistory.getSearchHistoryContext = function (context) {
            if (context === void 0) { context = SearchContext.normal; }
            return SearchHistory_1.getSearchHistory().then(function (searchHistory) { return searchHistory[context] || []; });
        };
        SearchHistory.getSearchHistory = function () {
            return ServiceClientZac_1.ServiceClientZac.getUserStorageValue(this.SEARCH_HISTORY, "{}")
                .then(function (searchHistory) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getSearchHistory: load data from storage='" + searchHistory + "'", SearchHistory_1.TAG)); });
                var searchHistoryData = {};
                try {
                    searchHistoryData = JSON.parse(searchHistory);
                }
                catch (e) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getSearchHistory: could not parse string as SearchHistoryType:'" + searchHistory + "'", SearchHistory_1.TAG)); });
                }
                return Array.isArray(searchHistoryData) ? {} : searchHistoryData;
            });
        };
        SearchHistory.clearHistory = function (context) {
            var _this = this;
            if (context === void 0) { context = SearchContext.normal; }
            return SearchHistory_1.getSearchHistory().then(function (searchHistory) {
                searchHistory[context] = [];
                return ServiceClientZac_1.ServiceClientZac.writeItem(_this.SEARCH_HISTORY, JSON.stringify(searchHistory));
            });
        };
        var SearchHistory_1;
        SearchHistory.SEARCH_HISTORY = "SearchHistory.searchHistory";
        SearchHistory.HISTORY_SIZE = 4;
        SearchHistory = SearchHistory_1 = __decorate([
            public_1.logTag()
        ], SearchHistory);
        return SearchHistory;
    }());
    exports.SearchHistory = SearchHistory;
});
//# sourceMappingURL=applicationclient.searchhistory.js.map