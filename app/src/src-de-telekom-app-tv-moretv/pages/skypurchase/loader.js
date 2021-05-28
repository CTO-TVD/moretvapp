var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-moretv/public", "../../translation/public", "../util/util"], function (require, exports, bluebird, public_1, public_2, mtv, public_3, util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SkyPurchaseDataLoader = void 0;
    var SkyPurchaseDataLoader = (function () {
        function SkyPurchaseDataLoader(packageId) {
            this.packageId = packageId;
            var context = public_2.Filter.context();
            this.pinContext = {
                acr: "userpin",
                scope: mtv.ApplicationClient.DefaultScope,
                force: true,
                dialogDataCallback: function () { return ({
                    contentId: "12345789",
                    dialogTitle: public_2.Filter.message(context, public_3.messagesMtv.PURCHASE_PINDIALOG_TITLE),
                    dialogParagraph1: public_2.Filter.message(context, public_3.messagesMtv.PURCHASE_PINDIALOG_P1),
                    dialogParagraph2: public_2.Filter.message(context, public_3.messagesMtv.PURCHASE_PINDIALOG_P2),
                    version: "0.1",
                    dialogId: "2",
                }); }
            };
        }
        SkyPurchaseDataLoader.prototype.isSkyCustomer = function () {
            return mtv.ApplicationClient
                .getGrants()
                .then(function (grants) {
                return grants.IsSkyCustomer;
            })
                .catch(function (error) {
                return bluebird.reject(new Error("Error getting grants (isSkyCustomer?)"));
            });
        };
        SkyPurchaseDataLoader.prototype.getCatalogMetadata = function () {
            return mtv.ApplicationClient
                .getCatalog("Sky")
                .then(function (catalog) {
                if (!catalog) {
                    throw new Error("missing catalog data");
                }
                var tp = util_1.convertMtvThemepack(catalog);
                return {
                    background: tp.background,
                    themepack: tp.themepack,
                    catalog: catalog,
                    logo: catalog.Logo
                };
            });
        };
        SkyPurchaseDataLoader.prototype.getPackage = function () {
            if (this.packageId) {
                return mtv.ApplicationClient.getPackage(this.packageId);
            }
            throw new public_1.IllegalArgumentError("no packagae id set");
        };
        SkyPurchaseDataLoader.prototype.getCustomerData = function () {
            if (!this.pinContext) {
                throw new Error("not initialized");
            }
            return mtv.ApplicationClient
                .getCustomerData(this.pinContext)
                .then(function (customerdata) {
                if (!customerdata.BankAccountFamilyName) {
                    customerdata.BankAccountFamilyName = customerdata.FamilyName;
                }
                if (!customerdata.BankAccountFirstName) {
                    customerdata.BankAccountFirstName = customerdata.FirstName;
                }
                return customerdata;
            });
        };
        SkyPurchaseDataLoader.prototype.submitBooking = function (_a) {
            var agbPermission = _a.agbPermission, customerData = _a.customerData, marketingPermission = _a.marketingPermission;
            if (!this.pinContext) {
                throw new Error("not initialized");
            }
            if (!this.packageId) {
                throw new public_1.IllegalArgumentError("no packagae id set");
            }
            var transactionId = "no transactionId";
            return mtv.ApplicationClient.skyBooking(agbPermission, customerData, marketingPermission, transactionId, this.packageId, this.pinContext);
        };
        SkyPurchaseDataLoader = __decorate([
            public_1.logTag()
        ], SkyPurchaseDataLoader);
        return SkyPurchaseDataLoader;
    }());
    exports.SkyPurchaseDataLoader = SkyPurchaseDataLoader;
});
//# sourceMappingURL=loader.js.map