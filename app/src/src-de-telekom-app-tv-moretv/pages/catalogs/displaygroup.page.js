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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "src/src-de-telekom-style/public", "../../component/content_tiles/sky_tile.component", "../../component/public", "../../public", "./sky_data.loader"], function (require, exports, React, public_1, public_2, public_3, sky_tile_component_1, public_4, public_5, sky_data_loader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvDisplayGroupPage = void 0;
    var MtvDisplayGroupPage = (function (_super) {
        __extends(MtvDisplayGroupPage, _super);
        function MtvDisplayGroupPage(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.rowheight = sky_tile_component_1.DttvComponent16x9MtvSkyComponent.HEIGHT;
            _this.showErrorDialog = function (error, goBack) {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("SHOW DIALOG for error code " + error, MtvDisplayGroupPage_1.TAG)); });
                _this.genericDialog = error
                    ? public_4.MtvMessageOverlayComponent.createDialogByError({ error: error })
                    : public_4.MtvMessageOverlayComponent.createSkyDialog();
                _this.genericDialog
                    .result(_this)
                    .then(function (result) {
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("MTVGenericErrorComponent dialog closed with result " + result.resultId + " ", MtvDisplayGroupPage_1.TAG)); });
                })
                    .catch(function (error) {
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("showDialogClick: dialog aborted -> " + error + " ", MtvDisplayGroupPage_1.TAG)); });
                })
                    .finally(function () {
                    if (goBack) {
                        public_2.Logger.debug(function (log) { return log(public_2.LogMsg("navigating back", MtvDisplayGroupPage_1.TAG)); });
                        _this.startIntent(undefined, { type: "backward" });
                    }
                });
            };
            _this.showTermsOfUse = function () {
                _this.setState(function (prevState) { return ({ showTermsOfUse: { id: prevState.associatedTermesOfUse || "" } }); });
                return true;
            };
            var intent = new public_1.IntentMoreTV.DisplayGroup(_this.location.intent.data);
            _this.state = {
                title: intent.data.group,
                topPosition: 0,
                hinttextType: "info"
            };
            return _this;
        }
        MtvDisplayGroupPage_1 = MtvDisplayGroupPage;
        MtvDisplayGroupPage.prototype.componentDidMount = function () {
            var _this = this;
            var intent = new public_1.IntentMoreTV.DisplayGroup(this.location.intent.data);
            if (!!intent.data.provider && !!intent.data.group) {
                sky_data_loader_1.SkyCatalogDataLoader
                    .loadGroup(intent.data.provider, intent.data.group)
                    .then(function (data) {
                    if (data === null || data === void 0 ? void 0 : data.rows) {
                        data.rows.forEach(function (row, rowIndex) {
                            row.topPosition = _this.rowheight * rowIndex;
                            row.styles = public_3.declaration()
                                .props({
                                position: "absolute",
                                top: _this.rowheight * rowIndex,
                                height: _this.rowheight
                            })
                                .toStyle();
                            row.items.forEach(function (item, lineIndex) {
                                item.styles = public_3.declaration()
                                    .props({
                                    left: (sky_tile_component_1.DttvComponent16x9MtvSkyComponent.WIDTH + 24) * (lineIndex % 4),
                                    top: 0,
                                    position: "absolute"
                                })
                                    .toStyle();
                            });
                        });
                        _this.setState(data);
                    }
                    else {
                        throw new Error("loadGroup: Missing data.");
                    }
                })
                    .catch(function (error) {
                    public_2.Logger.error(function (log) { return log(public_2.LogMsg("Error loadgroup for " + intent.data.provider + " " + intent.data.group + " ", MtvDisplayGroupPage_1.TAG)); });
                    _this.showErrorDialog(error, true);
                });
            }
            else {
                public_2.Logger.error(function (log) { return log(public_2.LogMsg("Missing data: provider or group", MtvDisplayGroupPage_1.TAG)); });
                this.showErrorDialog(undefined, true);
            }
        };
        MtvDisplayGroupPage.prototype.componentWillUnmount = function () {
            if (this.genericDialog) {
                this.genericDialog.closeDialogWithResult({ resultId: "aborted" });
            }
        };
        MtvDisplayGroupPage.prototype.render = function () {
            var _this = this;
            var _a;
            var style = {};
            style[public_3.Css.names.transform] = "translate(0px, " + -1 * public_3.Css.scale(this.state.topPosition) + "px) translateZ(0px)";
            return React.createElement("div", { className: [this.ID, "mtv", "dtvod", public_3.Css.globalStyleClasses.defaultBackgroundImage, public_1.TvThemepackKeys.CSSROOT].join(" ") },
                React.createElement(public_1.TvBackgroundSustainer, { image: (_a = this.state.background) === null || _a === void 0 ? void 0 : _a.image }),
                React.createElement(public_1.TvThemepack, { data: this.state.themepack }),
                React.createElement(public_1.NavigationKey, { keyFilter: "INFO_KEY", onKey: this.showTermsOfUse }),
                React.createElement(public_4.MtvTermsOfUseDialogWrapper, { idObject: this.state.showTermsOfUse, onError: this.showErrorDialog }),
                React.createElement("h1", { style: { textTransform: "uppercase" }, className: public_3.Css.fonts2.a_fo_b1_1 },
                    this.state.title,
                    "\u00A0",
                    this.state.total &&
                        React.createElement("span", { style: { textTransform: "uppercase", color: public_3.Css.colors.A_CO_6 }, className: public_3.Css.fonts2.a_fo_b1_1 },
                            "(",
                            this.state.index,
                            "/",
                            this.state.total,
                            ")")),
                this.state.rows &&
                    React.createElement(public_1.NavigationContainer, { id: "mtvCatalog#PackagesInGroup", className: "grid_container" },
                        React.createElement("div", { className: "grid" },
                            React.createElement("div", { className: "animContainer " + public_3.Css.transitions.transformShort, style: style }, this.state.rows.map(function (row) {
                                return React.createElement("div", { className: "row dttv-create-layer", style: row.styles },
                                    React.createElement(public_1.NavigationWatcher, { onFocusInTree: function () {
                                            _this.setState({ topPosition: row.topPosition || 0 });
                                        } }, row.items.map(function (item, ix) {
                                        return React.createElement(public_1.NavigationWatcher, { onFocusIn: function () { return _this.setState({
                                                associatedTermesOfUse: item.termsOfUse,
                                                hinttextType: item.termsOfUseType || "info",
                                                index: item.index
                                            }); } },
                                            React.createElement(public_5.ContentMtvTiles.SkyTile, { key: ix, style: item.styles, asset: item, autofocus: false, focusId: "lane_" + row.index + "_" + ix, "dttv-focusin": "$ctrl.updateToU(item)" }));
                                    })));
                            })))));
        };
        var MtvDisplayGroupPage_1;
        MtvDisplayGroupPage = MtvDisplayGroupPage_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-displaygroup-page",
                styles: [
                    public_3.selector("&")
                        .props({
                        width: public_3.Css.dimensions.screenWidth,
                        height: public_3.Css.dimensions.screenHeight
                    }),
                    public_3.selector("& .grid")
                        .props({
                        position: "absolute",
                        top: public_3.Css.dimensions.safeareaTop + 138,
                        left: public_3.Css.dimensions.safeareaLeft - public_3.Css.dimensions.borderWidth,
                        width: public_3.Css.dimensions.safeareaWidth + 2 * public_3.Css.dimensions.borderWidth,
                        height: public_3.Css.dimensions.screenHeight,
                        overflow: "hidden"
                    }),
                    public_3.selector("& .animContainer")
                        .props({
                        position: "absolute"
                    }),
                    public_3.selector("& .row")
                        .props({
                        position: "absolute"
                    }),
                    public_3.selector("& h1")
                        .props({
                        position: "fixed",
                        top: public_3.Css.dimensions.safeareaTop + 36,
                        left: public_3.Css.dimensions.safeareaLeft
                    })
                ]
            }),
            public_2.logTag()
        ], MtvDisplayGroupPage);
        return MtvDisplayGroupPage;
    }(public_1.ReactBaseComponent));
    exports.MtvDisplayGroupPage = MtvDisplayGroupPage;
});
//# sourceMappingURL=displaygroup.page.js.map