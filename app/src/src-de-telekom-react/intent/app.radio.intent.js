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
    exports.IntentRadio = void 0;
    var prefix = "/appradio";
    var IntentRadio;
    (function (IntentRadio) {
        var Main = (function (_super) {
            __extends(Main, _super);
            function Main(data) {
                if (data === void 0) { data = {}; }
                return _super.call(this, Main.pathname, data) || this;
            }
            Main.pathname = prefix + "/main";
            return Main;
        }(public_1.BaseIntent));
        IntentRadio.Main = Main;
        var Player = (function (_super) {
            __extends(Player, _super);
            function Player() {
                return _super.call(this, Player.pathname, undefined) || this;
            }
            Player.pathname = Main.pathname + "/player";
            return Player;
        }(public_1.BaseIntent));
        IntentRadio.Player = Player;
        var Help = (function (_super) {
            __extends(Help, _super);
            function Help() {
                return _super.call(this, Help.pathname, undefined) || this;
            }
            Help.pathname = prefix + "/help";
            return Help;
        }(public_1.BaseIntent));
        IntentRadio.Help = Help;
        var ChannelList = (function (_super) {
            __extends(ChannelList, _super);
            function ChannelList() {
                return _super.call(this, ChannelList.pathname, undefined) || this;
            }
            ChannelList.pathname = Main.pathname + "/channellist";
            return ChannelList;
        }(public_1.BaseIntent));
        IntentRadio.ChannelList = ChannelList;
        var Favorites = (function (_super) {
            __extends(Favorites, _super);
            function Favorites() {
                return _super.call(this, Favorites.pathname, undefined) || this;
            }
            Favorites.pathname = Main.pathname + "/favorites";
            return Favorites;
        }(public_1.BaseIntent));
        IntentRadio.Favorites = Favorites;
        var SearchPage = (function (_super) {
            __extends(SearchPage, _super);
            function SearchPage() {
                return _super.call(this, SearchPage.pathname, undefined) || this;
            }
            SearchPage.pathname = Main.pathname + "/radiosearch";
            return SearchPage;
        }(public_1.BaseIntent));
        IntentRadio.SearchPage = SearchPage;
    })(IntentRadio = exports.IntentRadio || (exports.IntentRadio = {}));
});
//# sourceMappingURL=app.radio.intent.js.map