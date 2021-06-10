var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "URIjs/URI", "src/src-de-telekom/public"], function (require, exports, urijs, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SearchParameter = exports.DiscoveryParameter = exports.CategoriesParameter = void 0;
    var BaseParameter = (function () {
        function BaseParameter(deviceType, esn, language, partnerId) {
            this.deviceType = deviceType;
            this.esn = esn;
            this.language = language;
            this.partnerId = partnerId;
        }
        BaseParameter.prototype.getKeyString = function () {
            var data = new urijs("");
            (this.getPostData() || []).forEach(function (item) { return data.addQuery(item.key, item.value); });
            return data.query();
        };
        BaseParameter.prototype.getPostData = function () {
            var data = [];
            data.push(new public_1.KeyValuePair("deviceType", this.deviceType));
            data.push(new public_1.KeyValuePair("esn", this.esn));
            data.push(new public_1.KeyValuePair("language", this.language));
            data.push(new public_1.KeyValuePair("partnerId", this.partnerId));
            return data;
        };
        return BaseParameter;
    }());
    var CategoriesParameter = (function (_super) {
        __extends(CategoriesParameter, _super);
        function CategoriesParameter(deviceType, esn, language, partnerId, options) {
            var _this = _super.call(this, deviceType, esn, language, partnerId) || this;
            _this.options = options;
            return _this;
        }
        CategoriesParameter.prototype.getPostData = function () {
            var data = _super.prototype.getPostData.call(this);
            data.push(new public_1.KeyValuePair("options", public_1.StringTools.dataStringify(this.options)));
            return data;
        };
        return CategoriesParameter;
    }(BaseParameter));
    exports.CategoriesParameter = CategoriesParameter;
    var DiscoveryParameter = (function (_super) {
        __extends(DiscoveryParameter, _super);
        function DiscoveryParameter(deviceType, esn, language, partnerId, options) {
            var _this = _super.call(this, deviceType, esn, language, partnerId) || this;
            _this.options = options;
            return _this;
        }
        DiscoveryParameter.prototype.getPostData = function () {
            var data = _super.prototype.getPostData.call(this);
            data.push(new public_1.KeyValuePair("options", public_1.StringTools.dataStringify(this.options)));
            return data;
        };
        return DiscoveryParameter;
    }(BaseParameter));
    exports.DiscoveryParameter = DiscoveryParameter;
    var SearchParameter = (function (_super) {
        __extends(SearchParameter, _super);
        function SearchParameter(deviceType, esn, language, partnerId, options) {
            var _this = _super.call(this, deviceType, esn, language, partnerId) || this;
            _this.options = options;
            return _this;
        }
        SearchParameter.prototype.getPostData = function () {
            var data = _super.prototype.getPostData.call(this);
            data.push(new public_1.KeyValuePair("options", public_1.StringTools.dataStringify(this.options)));
            return data;
        };
        return SearchParameter;
    }(BaseParameter));
    exports.SearchParameter = SearchParameter;
});
//# sourceMappingURL=netflix.parameters.js.map