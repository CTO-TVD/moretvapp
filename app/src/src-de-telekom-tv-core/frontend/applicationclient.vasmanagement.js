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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "underscore", "../backend/public", "../common/extensions", "./applicationclient"], function (require, exports, bluebird, public_1, _, backend, extensions_1, applicationclient_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VasManagement = void 0;
    var VasItemNotFoundError = (function (_super) {
        __extends(VasItemNotFoundError, _super);
        function VasItemNotFoundError() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.errorID = 0x612;
            return _this;
        }
        return VasItemNotFoundError;
    }(public_1.BaseError));
    var VasManagement = (function () {
        function VasManagement() {
        }
        VasManagement_1 = VasManagement;
        VasManagement.findVasItemByAppUrl = function (appUrl) {
            return VasManagement_1.findVasItemById("appUrl", appUrl, function (vasItem) { return vasItem.url; });
        };
        VasManagement.findVasItemByCmsId = function (cmsId) {
            return VasManagement_1.findVasItemById("CmsId", cmsId, function (vasItem) { return vasItem.cmsId || ""; });
        };
        VasManagement.findVasItemByZosaId = function (zosaId) {
            return VasManagement_1.findVasItemById("ZosaId", zosaId, function (vasItem) { return vasItem.zosaId; });
        };
        VasManagement.findVasItemByInstanceId = function (instanceId) {
            return VasManagement_1.findVasItemById("InstanceId", instanceId, function (vasItem) { return vasItem.dtExtensions.instanceId; });
        };
        VasManagement.findVasItemById = function (idType, id, getIdFunc) {
            return applicationclient_1.ApplicationClient.vasManagement.getAllVasItems()
                .then(function (allVasItems) {
                if (!allVasItems.some(function (vasItem) { return getIdFunc(vasItem) === id; })) {
                    throw new VasItemNotFoundError("The vasItem " + idType + ":" + id + " could not found be found.");
                }
                return allVasItems.filter(function (vasItem) { return getIdFunc(vasItem) === id; })[0];
            });
        };
        VasManagement.getChannelVasItems = function (channel) {
            return VasManagement_1.getAllVasItems()
                .then(function (allVasItems) {
                var channelVasItems = (channel.vasItems || [])
                    .map(function (channelVasItem) { return allVasItems.getItem(channelVasItem.zosaId); })
                    .filter(function (vasItem) { return public_1.Guard.isDefined(vasItem); })
                    .map(function (vasItem) { return vasItem; });
                return channelVasItems;
            });
        };
        VasManagement.getAllVasItems = function () {
            return backend.ServiceClientAuthenticationZosa
                .getCategories(backend.ServiceClientContextZosa.instance, { contentType: backend.zosaStatic.ZOSA_TYPE_VAS_ITEM, serviceProvider: null })
                .then(function (categories) {
                return bluebird.all(bluebird.map(categories.data.elements, function (category) {
                    return VasManagement_1.getVasItems({ category: category.zosaId, serviceProvider: null });
                }));
            })
                .then(function (data) {
                var result = [];
                data.forEach(function (list) { return list
                    .filter(function (item) { return !!item && (item.cmsId !== "RecordingChannel"); })
                    .forEach(function (item) { return result.push(item); }); });
                var filteredData = _.uniq(result, function (item) { return item.zosaId; });
                return new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); }, filteredData);
            });
        };
        VasManagement.getAppCatalogue = function () {
            return backend.ServiceClientAuthenticationZosa
                .getVasCategoryId(backend.ServiceClientContextZosa.instance)
                .then(function (vasCategoryIdResponse) {
                return backend.ServiceClientAuthenticationZosa
                    .getCategories(backend.ServiceClientContextZosa.instance, { serviceProviderCategoryIds: vasCategoryIdResponse.data ? [vasCategoryIdResponse.data] : undefined, serviceProvider: null })
                    .then(function (vasCategoriesResponse) {
                    return VasManagement_1.getVasItems({ category: vasCategoriesResponse.data.elements[0].zosaId, serviceProvider: null });
                });
            });
        };
        VasManagement.getVasItems = function (parameters) {
            var param = applicationclient_1.ApplicationClient.cloneParameter(parameters);
            var emptyVasItemsPromise;
            if (param === null || param === void 0 ? void 0 : param.vasItems) {
                param.vasItems = param.vasItems.filter(function (item) { return !!item; });
                if (param.vasItems.length == 0) {
                    emptyVasItemsPromise = bluebird.resolve(new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); }, []));
                }
            }
            return emptyVasItemsPromise || backend.ServiceClientAuthenticationZosa
                .getVasItems(backend.ServiceClientContextZosa.instance, parameters)
                .then(function (response) {
                var result = response.data.elements.map(function (vasItem) { return extensions_1.ZosaVasItemExtensions.update(vasItem); });
                return new public_1.IndexedList(function (item) { return ({ key: item.zosaId, value: item }); }, result);
            });
        };
        var VasManagement_1;
        VasManagement = VasManagement_1 = __decorate([
            public_1.logTag()
        ], VasManagement);
        return VasManagement;
    }());
    exports.VasManagement = VasManagement;
});
//# sourceMappingURL=applicationclient.vasmanagement.js.map