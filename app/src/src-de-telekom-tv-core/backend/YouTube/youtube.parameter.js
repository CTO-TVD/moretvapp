var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "URIjs/URI", "src/src-de-telekom/public"], function (require, exports, urijs, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SearchListParameter = void 0;
    var BaseParameter = (function () {
        function BaseParameter() {
        }
        BaseParameter.prototype.getKeyString = function () {
            var data = new urijs("");
            (this.getPostData() || []).forEach(function (item) { return data.addQuery(item.key, item.value); });
            return data.query();
        };
        BaseParameter.prototype.getPostData = function () {
            var data = [];
            return data;
        };
        return BaseParameter;
    }());
    var SearchListParameter = (function (_super) {
        __extends(SearchListParameter, _super);
        function SearchListParameter(searchString, maxResults, order, safeSearch, pageToken) {
            var _this = _super.call(this) || this;
            _this.searchString = searchString;
            _this.maxResults = maxResults;
            _this.order = order;
            _this.safeSearch = safeSearch;
            _this.pageToken = pageToken;
            return _this;
        }
        SearchListParameter.prototype.getPostData = function () {
            var data = _super.prototype.getPostData.call(this);
            data.push(new public_1.KeyValuePair("searchString", this.searchString));
            data.push(new public_1.KeyValuePair("maxResults", this.maxResults.toString()));
            if (public_1.Guard.isDefined(this.order)) {
                data.push(new public_1.KeyValuePair("order", this.order));
            }
            if (public_1.Guard.isDefined(this.pageToken)) {
                data.push(new public_1.KeyValuePair("pageToken", this.pageToken));
            }
            if (public_1.Guard.isDefined(this.safeSearch)) {
                data.push(new public_1.KeyValuePair("safeSearch", this.safeSearch));
            }
            return data;
        };
        return SearchListParameter;
    }(BaseParameter));
    exports.SearchListParameter = SearchListParameter;
});
//# sourceMappingURL=youtube.parameter.js.map