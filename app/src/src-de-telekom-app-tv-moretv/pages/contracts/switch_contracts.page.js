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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "react", "src/src-de-telekom-tv-moretv/public", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "src/src-de-telekom-app-tv-core-v2/public"], function (require, exports, React, mtv, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvSwitchContractsPage = void 0;
    var MtvSwitchContractsPage = (function (_super) {
        __extends(MtvSwitchContractsPage, _super);
        function MtvSwitchContractsPage() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MtvSwitchContractsPage_1 = MtvSwitchContractsPage;
        MtvSwitchContractsPage.prototype.componentDidMount = function () {
            var _this = this;
            if (this.location.isBackNavigation) {
                this.startIntent(undefined, { type: "backward" });
            }
            else {
                mtv.ApplicationClient.isMagentaHausCustomer()
                    .then(function (isMHC) {
                    if (!_this.destroyed) {
                        if (isMHC) {
                            _this.startMagentaHausApp();
                        }
                        else {
                            _this.startIntent(new public_1.IntentMoreTV.Contracts(), { type: "replace" });
                        }
                    }
                });
            }
        };
        MtvSwitchContractsPage.prototype.startMagentaHausApp = function () {
            var _a;
            var MagentaHausAppId = (_a = public_3.Configuration.instance.moretv) === null || _a === void 0 ? void 0 : _a.MagentaHausAppId;
            var additionalUrlParameters = [["scenario", "mysubscriptions"]];
            if (MagentaHausAppId != undefined) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Starting App: cmsId: '" + MagentaHausAppId + "' parameters: " + public_3.StringTools.dataStringify(additionalUrlParameters) + " ", MtvSwitchContractsPage_1.TAG)); });
            }
            else {
                public_1.TVNotificationService.getInstance().notifyError(public_4.messagesCore.STB_TM011_ERROR);
                public_3.Logger.error(function (log) { return log(public_3.LogMsg("Missing configuration: MagentaHausAppId", MtvSwitchContractsPage_1.TAG)); });
                this.startIntent(undefined, { type: "backward" });
            }
        };
        MtvSwitchContractsPage.prototype.render = function () {
            return React.createElement("div", { className: [this.ID, public_2.Css.globalStyleClasses.defaultBackgroundImage, "page"].join(" ") },
                React.createElement(public_1.NavigationContainer, { className: this.ID, id: "mtvcontractswitch" },
                    React.createElement(public_1.NavigationElement, { id: "dummy" })),
                React.createElement(public_1.BusyIndicatorComponent, { isBusy: true, delay: 0 }));
        };
        var MtvSwitchContractsPage_1;
        MtvSwitchContractsPage.classID = 0x80C;
        MtvSwitchContractsPage = MtvSwitchContractsPage_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-switchcontracts-component",
                styles: [
                    public_2.selector("&")
                ]
            }),
            public_3.logTag()
        ], MtvSwitchContractsPage);
        return MtvSwitchContractsPage;
    }(public_1.ReactBaseComponent));
    exports.MtvSwitchContractsPage = MtvSwitchContractsPage;
});
//# sourceMappingURL=switch_contracts.page.js.map