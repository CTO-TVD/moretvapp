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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-moretv/public", "src/src-de-telekom-tv-core/public", "./catalogs/dt_overview.page", "./catalogs/sky_overview.page", "./detailpage/detailpage.page", "./detailpage/detail.page20", "./detailpage/channelgrid.page", "./dtpurchase/dt_purchase.page", "./skypurchase/public", "./upsellingpage", "./catalogs/displaygroup.page", "./contracts/contracts.page", "./contracts/switch_contracts.page", "src/src-de-telekom/public", "./router.page", "../translation/public"], function (require, exports, React, public_1, public_2, public_3, dt_overview_page_1, sky_overview_page_1, detailpage_page_1, detail_page20_1, channelgrid_page_1, dt_purchase_page_1, public_4, upsellingpage_1, displaygroup_page_1, contracts_page_1, switch_contracts_page_1, public_5, router_page_1, public_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppTvMtvPagesModule = void 0;
    var AppTvMtvPagesModule = (function (_super) {
        __extends(AppTvMtvPagesModule, _super);
        function AppTvMtvPagesModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AppTvMtvPagesModule.prototype.config = function () {
            if (!public_2.ServiceClientContext.instance) {
                public_2.ServiceClientContext.instance = new public_2.ServiceClientContext(function (input) { return public_3.ApplicationClient.authMan.getAccessToken(input); });
            }
        };
        AppTvMtvPagesModule.prototype.run = function () {
            var moreTvUX20 = (public_5.Feature.has(public_5.FeatureItems.moreTvUX20, public_5.FeatureRights.viewItems));
            public_1.RouteService.getInstance().setBasePath(public_1.IntentMoreTV.RouterPage);
            public_1.RouteService.getInstance().registerRoute([
                function (key) { return React.createElement(public_1.Route, { key: key, path: public_1.IntentMoreTV.RouterPage, component: router_page_1.MtvRouterPage, reloadOnChange: true }); },
                function (key) { return React.createElement(public_1.Route, { key: key, path: public_1.IntentMoreTV.OverviewDT, component: dt_overview_page_1.MtvDtOverviewPage, reloadOnChange: true }); },
                function (key) { return React.createElement(public_1.Route, { key: key, path: public_1.IntentMoreTV.OverviewSky, component: sky_overview_page_1.MtvSkyOverviewPage, reloadOnChange: true }); },
                function (key) { return React.createElement(public_1.Route, { key: key, path: public_1.IntentMoreTV.Detailpage, component: moreTvUX20 ? detail_page20_1.MtvDetailPage20 : detailpage_page_1.MtvDetailPage, reloadOnChange: true }); },
                function (key) { return React.createElement(public_1.Route, { key: key, path: public_1.IntentMoreTV.ChannelGridPage, component: channelgrid_page_1.MtvDetailChannelgridPage, reloadOnChange: true }); },
                function (key) { return React.createElement(public_1.Route, { key: key, path: public_1.IntentMoreTV.PurchaseDT, component: dt_purchase_page_1.MtvDtPurchasePage }); },
                function (key) { return React.createElement(public_1.Route, { key: key, path: public_1.IntentMoreTV.PurchaseSky, component: public_4.MtvSkyPurchasePage }); },
                function (key) { return React.createElement(public_1.Route, { key: key, path: public_1.IntentMoreTV.UpsellingPage, component: upsellingpage_1.MtvUpsellingPage }); },
                function (key) { return React.createElement(public_1.Route, { key: key, path: public_1.IntentMoreTV.DisplayGroup, component: displaygroup_page_1.MtvDisplayGroupPage }); },
                function (key) { return React.createElement(public_1.Route, { key: key, path: public_1.IntentMoreTV.Contracts, component: contracts_page_1.MtvContractsPage, reloadOnChange: true }); },
                function (key) { return React.createElement(public_1.Route, { key: key, path: public_1.IntentMoreTV.ContractsSwitch, component: switch_contracts_page_1.MtvSwitchContractsPage, reloadOnChange: false }); },
            ]);
        };
        AppTvMtvPagesModule = __decorate([
            public_1.reactSubModule(public_6.TranslationModule)
        ], AppTvMtvPagesModule);
        return AppTvMtvPagesModule;
    }(public_1.ReactBaseModule));
    exports.AppTvMtvPagesModule = AppTvMtvPagesModule;
});
//# sourceMappingURL=public.js.map