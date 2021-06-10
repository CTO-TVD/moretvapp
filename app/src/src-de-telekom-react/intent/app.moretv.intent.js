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
define(["require", "exports", "../baseRouter/public", "src/src-de-telekom/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IntentMoreTV = void 0;
    var prefix = "/appmtv";
    var IntentMoreTV;
    (function (IntentMoreTV) {
        var Factory = (function () {
            function Factory() {
            }
            Factory.create = function (params) {
                var scenario = params.get("scenario");
                var pid = params.get("package");
                var channelex = params.get("channelex");
                switch (scenario) {
                    case "portal_dt": return new OverviewDT();
                    case "portal_sky": return new OverviewSky();
                    case "detail": return new Detailpage({ id: pid });
                    case "mysubscriptions": return public_2.Feature.has(public_2.FeatureItems.moreTvMagentaHaus, public_2.FeatureRights.viewItems) ? new ContractsSwitch() : new Contracts();
                    case "termsofuse": return new TermsOfUse({ id: pid });
                    case "upselling": return new UpsellingPage({ id: channelex, quality: params.get("quality") });
                    default:
                        return new OverviewDT();
                        ;
                }
            };
            return Factory;
        }());
        IntentMoreTV.Factory = Factory;
        var OverviewDT = (function (_super) {
            __extends(OverviewDT, _super);
            function OverviewDT(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, OverviewDT.pathname, data) || this;
            }
            OverviewDT.pathname = prefix + "/catalogs/dt";
            return OverviewDT;
        }(public_1.BaseIntent));
        IntentMoreTV.OverviewDT = OverviewDT;
        var OverviewSky = (function (_super) {
            __extends(OverviewSky, _super);
            function OverviewSky(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, OverviewSky.pathname, data) || this;
            }
            OverviewSky.pathname = prefix + "/catalogs/sky";
            return OverviewSky;
        }(public_1.BaseIntent));
        IntentMoreTV.OverviewSky = OverviewSky;
        var RouterPage = (function (_super) {
            __extends(RouterPage, _super);
            function RouterPage(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, RouterPage.pathname, data) || this;
            }
            RouterPage.pathname = prefix + "/router";
            return RouterPage;
        }(public_1.BaseIntent));
        IntentMoreTV.RouterPage = RouterPage;
        var UpsellingPage = (function (_super) {
            __extends(UpsellingPage, _super);
            function UpsellingPage(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, UpsellingPage.pathname, data) || this;
            }
            UpsellingPage.pathname = prefix + "/upselling";
            return UpsellingPage;
        }(public_1.BaseIntent));
        IntentMoreTV.UpsellingPage = UpsellingPage;
        var Detailpage = (function (_super) {
            __extends(Detailpage, _super);
            function Detailpage(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, Detailpage.pathname, data) || this;
            }
            Detailpage.pathname = prefix + "/package";
            return Detailpage;
        }(public_1.BaseIntent));
        IntentMoreTV.Detailpage = Detailpage;
        var Channeldetailpage = (function (_super) {
            __extends(Channeldetailpage, _super);
            function Channeldetailpage(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, Channeldetailpage.pathname, data) || this;
            }
            Channeldetailpage.pathname = prefix + "/channel";
            return Channeldetailpage;
        }(public_1.BaseIntent));
        IntentMoreTV.Channeldetailpage = Channeldetailpage;
        var ChannelGridPage = (function (_super) {
            __extends(ChannelGridPage, _super);
            function ChannelGridPage(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, ChannelGridPage.pathname, data) || this;
            }
            ChannelGridPage.pathname = prefix + "/allchannels";
            return ChannelGridPage;
        }(public_1.BaseIntent));
        IntentMoreTV.ChannelGridPage = ChannelGridPage;
        var PurchaseDT = (function (_super) {
            __extends(PurchaseDT, _super);
            function PurchaseDT(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, PurchaseDT.pathname, data) || this;
            }
            PurchaseDT.pathname = prefix + "/purchase/dt";
            return PurchaseDT;
        }(public_1.BaseIntent));
        IntentMoreTV.PurchaseDT = PurchaseDT;
        var PurchaseStepOpt1 = (function (_super) {
            __extends(PurchaseStepOpt1, _super);
            function PurchaseStepOpt1() {
                return _super.call(this, PurchaseStepOpt1.pathname, undefined) || this;
            }
            PurchaseStepOpt1.pathname = PurchaseDT.pathname + "/step1";
            return PurchaseStepOpt1;
        }(public_1.BaseIntent));
        IntentMoreTV.PurchaseStepOpt1 = PurchaseStepOpt1;
        var PurchaseStepOpt2 = (function (_super) {
            __extends(PurchaseStepOpt2, _super);
            function PurchaseStepOpt2() {
                return _super.call(this, PurchaseStepOpt2.pathname, undefined) || this;
            }
            PurchaseStepOpt2.pathname = PurchaseDT.pathname + "/step2";
            return PurchaseStepOpt2;
        }(public_1.BaseIntent));
        IntentMoreTV.PurchaseStepOpt2 = PurchaseStepOpt2;
        var PurchaseStep1 = (function (_super) {
            __extends(PurchaseStep1, _super);
            function PurchaseStep1() {
                return _super.call(this, PurchaseStep1.pathname, undefined) || this;
            }
            PurchaseStep1.pathname = PurchaseDT.pathname + "/step3";
            return PurchaseStep1;
        }(public_1.BaseIntent));
        IntentMoreTV.PurchaseStep1 = PurchaseStep1;
        var PurchaseStep2 = (function (_super) {
            __extends(PurchaseStep2, _super);
            function PurchaseStep2() {
                return _super.call(this, PurchaseStep2.pathname, undefined) || this;
            }
            PurchaseStep2.pathname = PurchaseDT.pathname + "/step4";
            return PurchaseStep2;
        }(public_1.BaseIntent));
        IntentMoreTV.PurchaseStep2 = PurchaseStep2;
        var PurchaseStep3 = (function (_super) {
            __extends(PurchaseStep3, _super);
            function PurchaseStep3() {
                return _super.call(this, PurchaseStep3.pathname, undefined) || this;
            }
            PurchaseStep3.pathname = PurchaseDT.pathname + "/step5";
            return PurchaseStep3;
        }(public_1.BaseIntent));
        IntentMoreTV.PurchaseStep3 = PurchaseStep3;
        var PurchaseSky = (function (_super) {
            __extends(PurchaseSky, _super);
            function PurchaseSky(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, PurchaseSky.pathname, data) || this;
            }
            PurchaseSky.pathname = prefix + "/purchase/sky";
            return PurchaseSky;
        }(public_1.BaseIntent));
        IntentMoreTV.PurchaseSky = PurchaseSky;
        var PurchaseSkyStep1 = (function (_super) {
            __extends(PurchaseSkyStep1, _super);
            function PurchaseSkyStep1(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, PurchaseSkyStep1.pathname, data) || this;
            }
            PurchaseSkyStep1.pathname = PurchaseSky.pathname + "/step1";
            return PurchaseSkyStep1;
        }(public_1.BaseIntent));
        IntentMoreTV.PurchaseSkyStep1 = PurchaseSkyStep1;
        var PurchaseSkyStep2 = (function (_super) {
            __extends(PurchaseSkyStep2, _super);
            function PurchaseSkyStep2(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, PurchaseSkyStep2.pathname, data) || this;
            }
            PurchaseSkyStep2.pathname = PurchaseSky.pathname + "/step2";
            return PurchaseSkyStep2;
        }(public_1.BaseIntent));
        IntentMoreTV.PurchaseSkyStep2 = PurchaseSkyStep2;
        var PurchaseSkyStep3 = (function (_super) {
            __extends(PurchaseSkyStep3, _super);
            function PurchaseSkyStep3(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, PurchaseSkyStep3.pathname, data) || this;
            }
            PurchaseSkyStep3.pathname = PurchaseSky.pathname + "/step3";
            return PurchaseSkyStep3;
        }(public_1.BaseIntent));
        IntentMoreTV.PurchaseSkyStep3 = PurchaseSkyStep3;
        var PurchaseSkyStep4 = (function (_super) {
            __extends(PurchaseSkyStep4, _super);
            function PurchaseSkyStep4(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, PurchaseSkyStep4.pathname, data) || this;
            }
            PurchaseSkyStep4.pathname = PurchaseSky.pathname + "/step4";
            return PurchaseSkyStep4;
        }(public_1.BaseIntent));
        IntentMoreTV.PurchaseSkyStep4 = PurchaseSkyStep4;
        var PurchaseSkyStep5 = (function (_super) {
            __extends(PurchaseSkyStep5, _super);
            function PurchaseSkyStep5(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, PurchaseSkyStep5.pathname, data) || this;
            }
            PurchaseSkyStep5.pathname = PurchaseSky.pathname + "/step5";
            return PurchaseSkyStep5;
        }(public_1.BaseIntent));
        IntentMoreTV.PurchaseSkyStep5 = PurchaseSkyStep5;
        var PurchaseSkyStep6 = (function (_super) {
            __extends(PurchaseSkyStep6, _super);
            function PurchaseSkyStep6(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, PurchaseSkyStep6.pathname, data) || this;
            }
            PurchaseSkyStep6.pathname = PurchaseSky.pathname + "/step6";
            return PurchaseSkyStep6;
        }(public_1.BaseIntent));
        IntentMoreTV.PurchaseSkyStep6 = PurchaseSkyStep6;
        var PurchaseSkyAlreadyBooked = (function (_super) {
            __extends(PurchaseSkyAlreadyBooked, _super);
            function PurchaseSkyAlreadyBooked(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, PurchaseSkyAlreadyBooked.pathname, data) || this;
            }
            PurchaseSkyAlreadyBooked.pathname = PurchaseSky.pathname + "/alreadybooked";
            return PurchaseSkyAlreadyBooked;
        }(public_1.BaseIntent));
        IntentMoreTV.PurchaseSkyAlreadyBooked = PurchaseSkyAlreadyBooked;
        var TermsOfUse = (function (_super) {
            __extends(TermsOfUse, _super);
            function TermsOfUse(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, TermsOfUse.pathname, data) || this;
            }
            TermsOfUse.pathname = prefix + "/termsofuse";
            return TermsOfUse;
        }(public_1.BaseIntent));
        IntentMoreTV.TermsOfUse = TermsOfUse;
        var DisplayGroup = (function (_super) {
            __extends(DisplayGroup, _super);
            function DisplayGroup(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, DisplayGroup.pathname, data) || this;
            }
            DisplayGroup.pathname = prefix + "/displaygroup";
            return DisplayGroup;
        }(public_1.BaseIntent));
        IntentMoreTV.DisplayGroup = DisplayGroup;
        var Contracts = (function (_super) {
            __extends(Contracts, _super);
            function Contracts(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, Contracts.pathname, data) || this;
            }
            Contracts.pathname = prefix + "/contracts";
            return Contracts;
        }(public_1.BaseIntent));
        IntentMoreTV.Contracts = Contracts;
        var ContractsSwitch = (function (_super) {
            __extends(ContractsSwitch, _super);
            function ContractsSwitch(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, ContractsSwitch.pathname, data) || this;
            }
            ContractsSwitch.pathname = prefix + "/switchcontracts";
            return ContractsSwitch;
        }(public_1.BaseIntent));
        IntentMoreTV.ContractsSwitch = ContractsSwitch;
    })(IntentMoreTV = exports.IntentMoreTV || (exports.IntentMoreTV = {}));
});
//# sourceMappingURL=app.moretv.intent.js.map