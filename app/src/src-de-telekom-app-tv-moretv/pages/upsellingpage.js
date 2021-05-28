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
define(["require", "exports", "react", "underscore", "src/src-de-telekom-tv-moretv/public", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../component/public"], function (require, exports, React, _, mtv, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvUpsellingPage = void 0;
    var MtvUpsellingPage = (function (_super) {
        __extends(MtvUpsellingPage, _super);
        function MtvUpsellingPage(props, context) {
            var _this = _super.call(this, props, context) || this;
            var intent = new public_1.IntentMoreTV.UpsellingPage(_this.location.intent.data);
            var mappedQuality;
            switch (intent.data.quality) {
                case "1":
                    mappedQuality = "sd";
                    break;
                case "2":
                    mappedQuality = "hd";
                    break;
                case "3":
                    mappedQuality = "uhd";
                    break;
                default:
                    mappedQuality = "unknown";
                    break;
            }
            _this.state = { pageloading: true, id: intent.data.id, quality: intent.data.quality, mappedQuality: mappedQuality };
            _this.navigateToPackage();
            return _this;
        }
        MtvUpsellingPage_1 = MtvUpsellingPage;
        MtvUpsellingPage.prototype.navigateToPackage = function () {
            var _this = this;
            mtv.ApplicationClient
                .getPackageMappingTable()
                .then(function (mappingTable) {
                var pack;
                if (_this.state.quality) {
                    pack = _.find(mappingTable, function (m) { return m.channelId === _this.state.id + "/" + _this.state.mappedQuality; });
                    if (pack) {
                        var p_1 = pack;
                        public_3.Logger.debug(function (log) { return log(public_3.LogMsg("resolved " + _this.state.id + "/" + _this.state.mappedQuality + " to " + p_1.package + " / " + p_1.documentGroup, MtvUpsellingPage_1.TAG)); });
                    }
                }
                if (!pack) {
                    pack = _.find(mappingTable, function (m) { return m.channelId === _this.state.id; });
                    if (pack) {
                        var p_2 = pack;
                        public_3.Logger.debug(function (log) { return log(public_3.LogMsg("resolved " + _this.state.id + "/" + _this.state.mappedQuality + " to " + p_2.package + " / " + p_2.documentGroup, MtvUpsellingPage_1.TAG)); });
                    }
                }
                if (pack === undefined) {
                    public_3.Logger.warn(function (log) { return log(public_3.LogMsg("BarkerMap: No match found for " + _this.state.id, MtvUpsellingPage_1.TAG)); });
                    throw new mtv.MtvError("BarkerMap: No match found", mtv.MTVErrorCode.BARKERMAP_NO_MATCH);
                }
                _this.navigateToChoiceOrPackage(pack);
            })
                .catch(function (error) {
                _this.setState({ pageloading: false });
                _this.showErrorDialog(error);
            });
        };
        MtvUpsellingPage.prototype.showErrorDialog = function (error) {
            var _this = this;
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("SHOW DIALOG for error code " + error, MtvUpsellingPage_1.TAG)); });
            public_4.MtvMessageOverlayComponent
                .createDialogByError({ error: error })
                .result(this)
                .then(function (result) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("MTVGenericErrorComponent dialog closed with result " + result.resultId + " ", MtvUpsellingPage_1.TAG)); });
                _this.startIntent(undefined, { type: "exit" });
            })
                .catch(function (error) {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("showDialogClick: dialog aborted -> " + error + " ", MtvUpsellingPage_1.TAG)); });
                _this.startIntent(undefined, { type: "exit" });
            });
        };
        MtvUpsellingPage.prototype.navigateToChoiceOrPackage = function (pack) {
            var _this = this;
            var DG = pack.documentGroup;
            if (DG && DG != "") {
                try {
                    public_3.Logger.warn(function (log) { return log(public_3.LogMsg("Upselling navigation: Undhandled DG: " + DG + " at channelID: " + _this.state.id + "/" + _this.state.mappedQuality + ". Navigate to package: " + pack.package, MtvUpsellingPage_1.TAG)); });
                    this.startIntent(new public_1.IntentMoreTV.Detailpage({ id: pack.package }), { type: "replace" });
                }
                catch (error) {
                    public_3.Logger.error(function (log) { return log(public_3.LogMsg("Upselling navigation: Error getting resource: " + DG, MtvUpsellingPage_1.TAG)); });
                    this.setState({ pageloading: false });
                    this.showErrorDialog(error);
                }
                ;
            }
            else {
                public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Upselling navigation:No DG found. Navigate to package: " + pack.package, MtvUpsellingPage_1.TAG)); });
                this.startIntent(new public_1.IntentMoreTV.Detailpage({ id: pack.package }), { type: "replace" });
            }
        };
        MtvUpsellingPage.prototype.render = function () {
            return React.createElement("div", { className: [this.ID, public_2.Css.globalStyleClasses.defaultBackgroundImage, "page"].join(" ") },
                React.createElement(public_1.BusyIndicatorComponent, { isBusy: this.state.pageloading, delay: 0 }));
        };
        var MtvUpsellingPage_1;
        MtvUpsellingPage.classID = 0xC08;
        MtvUpsellingPage = MtvUpsellingPage_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-upselling-component",
                styles: [
                    public_2.selector("&")
                        .sub(public_2.selector("h1")
                        .props({
                        position: "fixed",
                        top: public_2.Css.dimensions.safeareaTop + 36,
                        left: public_2.Css.dimensions.safeareaLeft,
                        width: public_2.Css.dimensions.safeareaWidth
                    }))
                ]
            }),
            public_3.logTag()
        ], MtvUpsellingPage);
        return MtvUpsellingPage;
    }(public_1.ReactBaseComponent));
    exports.MtvUpsellingPage = MtvUpsellingPage;
});
//# sourceMappingURL=upsellingpage.js.map