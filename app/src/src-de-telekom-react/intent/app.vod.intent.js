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
define(["require", "exports", "../baseRouter/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IntentVod = void 0;
    var prefix = "/appvod";
    var IntentVod;
    (function (IntentVod) {
        var DetailPage = (function (_super) {
            __extends(DetailPage, _super);
            function DetailPage(data) {
                return _super.call(this, DetailPage.pathname, data) || this;
            }
            DetailPage.pathname = prefix + "/detail";
            return DetailPage;
        }(public_1.BaseIntent));
        IntentVod.DetailPage = DetailPage;
        var Main = (function (_super) {
            __extends(Main, _super);
            function Main(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, Main.pathname, data) || this;
            }
            Main.pathname = prefix + "/main";
            return Main;
        }(public_1.BaseIntent));
        IntentVod.Main = Main;
        var UnstructuredGrid = (function (_super) {
            __extends(UnstructuredGrid, _super);
            function UnstructuredGrid(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, UnstructuredGrid.pathname, data) || this;
            }
            UnstructuredGrid.pathname = prefix + "/list";
            return UnstructuredGrid;
        }(public_1.BaseIntent));
        IntentVod.UnstructuredGrid = UnstructuredGrid;
        var StartMenu = (function (_super) {
            __extends(StartMenu, _super);
            function StartMenu() {
                return _super.call(this, StartMenu.pathname, undefined) || this;
            }
            StartMenu.pathname = prefix + "/startmenu";
            return StartMenu;
        }(public_1.BaseIntent));
        IntentVod.StartMenu = StartMenu;
        var PlayMovie = (function (_super) {
            __extends(PlayMovie, _super);
            function PlayMovie(data) {
                return _super.call(this, PlayMovie.pathname, data) || this;
            }
            PlayMovie.pathname = prefix + "/playmovie";
            return PlayMovie;
        }(public_1.BaseIntent));
        IntentVod.PlayMovie = PlayMovie;
        var PlayTrailer = (function (_super) {
            __extends(PlayTrailer, _super);
            function PlayTrailer(data) {
                return _super.call(this, PlayTrailer.pathname, data) || this;
            }
            PlayTrailer.pathname = prefix + "/playtrailer";
            return PlayTrailer;
        }(public_1.BaseIntent));
        IntentVod.PlayTrailer = PlayTrailer;
        var PlayerPage = (function (_super) {
            __extends(PlayerPage, _super);
            function PlayerPage(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, PlayerPage.pathname, data) || this;
            }
            PlayerPage.pathname = prefix + "/playerpage";
            return PlayerPage;
        }(public_1.BaseIntent));
        IntentVod.PlayerPage = PlayerPage;
        var PostrollPage = (function (_super) {
            __extends(PostrollPage, _super);
            function PostrollPage(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, PostrollPage.pathname, data) || this;
            }
            PostrollPage.pathname = prefix + "/postrollpage";
            return PostrollPage;
        }(public_1.BaseIntent));
        IntentVod.PostrollPage = PostrollPage;
        var PurchasePage = (function (_super) {
            __extends(PurchasePage, _super);
            function PurchasePage(data) {
                return _super.call(this, PurchasePage.pathname, data) || this;
            }
            PurchasePage.pathname = prefix + "/purchasepage";
            return PurchasePage;
        }(public_1.BaseIntent));
        IntentVod.PurchasePage = PurchasePage;
        var MpsPurchasePage = (function (_super) {
            __extends(MpsPurchasePage, _super);
            function MpsPurchasePage(data) {
                return _super.call(this, MpsPurchasePage.pathname, data) || this;
            }
            MpsPurchasePage.pathname = prefix + "/purchasepage";
            return MpsPurchasePage;
        }(public_1.BaseIntent));
        IntentVod.MpsPurchasePage = MpsPurchasePage;
        var ProductSuggestion = (function (_super) {
            __extends(ProductSuggestion, _super);
            function ProductSuggestion() {
                return _super.call(this, ProductSuggestion.pathname, undefined) || this;
            }
            ProductSuggestion.pathname = PurchasePage.pathname + "/productsuggestion";
            return ProductSuggestion;
        }(public_1.BaseIntent));
        IntentVod.ProductSuggestion = ProductSuggestion;
        var ProductDetail = (function (_super) {
            __extends(ProductDetail, _super);
            function ProductDetail() {
                return _super.call(this, ProductDetail.pathname, undefined) || this;
            }
            ProductDetail.pathname = PurchasePage.pathname + "/productdetail";
            return ProductDetail;
        }(public_1.BaseIntent));
        IntentVod.ProductDetail = ProductDetail;
        var FourKHint = (function (_super) {
            __extends(FourKHint, _super);
            function FourKHint() {
                return _super.call(this, FourKHint.pathname, undefined) || this;
            }
            FourKHint.pathname = PurchasePage.pathname + "/fourkhint";
            return FourKHint;
        }(public_1.BaseIntent));
        IntentVod.FourKHint = FourKHint;
        var Confirmation = (function (_super) {
            __extends(Confirmation, _super);
            function Confirmation() {
                return _super.call(this, Confirmation.pathname, undefined) || this;
            }
            Confirmation.pathname = PurchasePage.pathname + "/confirmation";
            return Confirmation;
        }(public_1.BaseIntent));
        IntentVod.Confirmation = Confirmation;
        var CouponEntry = (function (_super) {
            __extends(CouponEntry, _super);
            function CouponEntry() {
                return _super.call(this, CouponEntry.pathname, undefined) || this;
            }
            CouponEntry.pathname = PurchasePage.pathname + "/couponentry";
            return CouponEntry;
        }(public_1.BaseIntent));
        IntentVod.CouponEntry = CouponEntry;
        var CouponOverview = (function (_super) {
            __extends(CouponOverview, _super);
            function CouponOverview() {
                return _super.call(this, CouponOverview.pathname, undefined) || this;
            }
            CouponOverview.pathname = PurchasePage.pathname + "/couponoverview";
            return CouponOverview;
        }(public_1.BaseIntent));
        IntentVod.CouponOverview = CouponOverview;
        var TestContainer = (function (_super) {
            __extends(TestContainer, _super);
            function TestContainer() {
                return _super.call(this, TestContainer.pathname, undefined) || this;
            }
            TestContainer.pathname = prefix + "/testcontainer";
            return TestContainer;
        }(public_1.BaseIntent));
        IntentVod.TestContainer = TestContainer;
    })(IntentVod = exports.IntentVod || (exports.IntentVod = {}));
});
//# sourceMappingURL=app.vod.intent.js.map