var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "./applicationclient.search"], function (require, exports, bluebird, public_1, applicationclient_search_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PersonDetails = exports.PersonDetailModules = void 0;
    var PersonDetailModules;
    (function (PersonDetailModules) {
        PersonDetailModules["TVContent"] = "tv";
        PersonDetailModules["VODContentMovies"] = "vodMain";
        PersonDetailModules["VODContentSeries"] = "vodSeries";
        PersonDetailModules["VODContentOther"] = "vodOther";
        PersonDetailModules["Erotic"] = "vodErotic";
    })(PersonDetailModules = exports.PersonDetailModules || (exports.PersonDetailModules = {}));
    var PersonDetails = (function () {
        function PersonDetails() {
        }
        PersonDetails_1 = PersonDetails;
        PersonDetails.getFilmography = function (personCmlsId, hideAdult, hideAgeRating, hideUnrated, hideErotic, startIndex, size) {
            var _this = this;
            if (startIndex === void 0) { startIndex = 0; }
            if (size === void 0) { size = 15; }
            var personFilmography = { categories: [], totalItems: 0, totalGroups: 0 };
            var searchparams = {
                searchProfileId: applicationclient_search_1.Search.SEARCH_PROFILE_FILMOGRAPHY_IPTV,
                query: personCmlsId,
                size: 0
            };
            return applicationclient_search_1.Search
                .search(searchparams)
                .then(function (results) {
                if (results.data && results.data.navigators) {
                    personFilmography.totalItems = results.data.totalItems;
                    personFilmography.totalGroups = results.data.totalGroups;
                    var groupResultPromises = _this.getGroupResults(personCmlsId, results.data, hideAdult, startIndex, size, hideAgeRating, hideUnrated, hideErotic);
                    return bluebird.all(groupResultPromises)
                        .then(function (categories) {
                        var _a;
                        (_a = personFilmography.categories).push.apply(_a, categories);
                        return personFilmography;
                    });
                }
                return {
                    categories: [],
                    totalItems: 0,
                    totalGroups: 0
                };
            });
        };
        PersonDetails.getPersonData = function (personId) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getPersonData", PersonDetails_1.TAG)); });
            var searchparams = {
                searchProfileId: applicationclient_search_1.Search.SEARCH_PROFILE_PERSONS,
                query: personId,
                size: 1
            };
            return applicationclient_search_1.Search.search(searchparams);
        };
        PersonDetails.getPersonGroupData = function (personId, groupId, hideAdult, startIndex, size, hideAgeRating, hideUnrated, hideErotic) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getPersonGroupData", PersonDetails_1.TAG)); });
            var searchparams = {
                searchProfileId: applicationclient_search_1.Search.SEARCH_PROFILE_FILMOGRAPHY_IPTV,
                groupId: groupId,
                query: personId,
                hideAdult: hideAdult,
                hideErotic: hideErotic,
                offset: startIndex,
                size: size
            };
            if (hideAgeRating) {
                searchparams.hideAgeRating = hideAgeRating.toString();
            }
            searchparams.hideUnrated = hideUnrated;
            return applicationclient_search_1.Search.search(searchparams);
        };
        PersonDetails.getGroupResult = function (personCmlsId, groupId, hideAdult, startIndex, size, hideAgeRating, hideUnrated, hideErotic) {
            var searchparams = {
                searchProfileId: applicationclient_search_1.Search.SEARCH_PROFILE_FILMOGRAPHY_IPTV,
                query: personCmlsId,
                filter: [groupId],
                offset: startIndex,
                size: size,
                hideAdult: hideAdult,
                hideErotic: hideErotic
            };
            if (hideAgeRating) {
                searchparams.hideAgeRating = hideAgeRating.toString();
            }
            searchparams.hideUnrated = hideUnrated;
            return applicationclient_search_1.Search.search(searchparams);
        };
        PersonDetails.getGroupResults = function (personCmlsId, resultsData, hideAdult, startIndex, size, hideAgeRating, hideUnrated, hideErotic) {
            var groupResults = [];
            if ((resultsData === null || resultsData === void 0 ? void 0 : resultsData.navigators) && resultsData.navigators.length > 0) {
                var _loop_1 = function (groupEntry) {
                    var groupResultPromise = this_1.getGroupResult(personCmlsId, resultsData.navigators[0].id + ":" + groupEntry.id, hideAdult, startIndex, size, hideAgeRating, hideUnrated, hideErotic)
                        .then(function (groupresult) {
                        var category = {
                            name: groupEntry.id,
                            size: groupresult.data.totalGroups,
                            items: groupresult.data.results
                        };
                        return category;
                    });
                    groupResults.push(groupResultPromise);
                };
                var this_1 = this;
                for (var _i = 0, _a = resultsData.navigators[0].entries; _i < _a.length; _i++) {
                    var groupEntry = _a[_i];
                    _loop_1(groupEntry);
                }
            }
            return groupResults;
        };
        var PersonDetails_1;
        PersonDetails = PersonDetails_1 = __decorate([
            public_1.logTag()
        ], PersonDetails);
        return PersonDetails;
    }());
    exports.PersonDetails = PersonDetails;
});
//# sourceMappingURL=applicationclient.persondetails.js.map