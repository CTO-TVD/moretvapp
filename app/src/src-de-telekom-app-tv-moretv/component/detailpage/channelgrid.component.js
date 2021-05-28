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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "../../translation/public", "../../public", "src/src-de-telekom/public", "underscore", "../public"], function (require, exports, React, public_1, public_2, public_3, public_4, public_5, _, public_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvDetailChannelgridComponent = void 0;
    var MtvDetailChannelgridComponent = (function (_super) {
        __extends(MtvDetailChannelgridComponent, _super);
        function MtvDetailChannelgridComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = { topPosition: 0, groupSelected: -1 };
            return _this;
        }
        MtvDetailChannelgridComponent_1 = MtvDetailChannelgridComponent;
        MtvDetailChannelgridComponent.prototype.onFocusIn = function () {
            this.setState({ focused: true });
        };
        MtvDetailChannelgridComponent.prototype.onFocusLost = function () {
            this.setState({ focused: false });
        };
        MtvDetailChannelgridComponent.prototype.pageloading = function (loading) {
            if (this.props.pageloading) {
                this.props.pageloading(loading);
            }
        };
        MtvDetailChannelgridComponent.prototype.goToAllChannelPage = function (packageId, channelGroupIndex) {
            if (this.props.goToAllChannelPage) {
                this.props.goToAllChannelPage({ packageId: packageId, channelGroupIndex: channelGroupIndex });
            }
        };
        MtvDetailChannelgridComponent.prototype.showChannelDetails = function (idx, row) {
            var _this = this;
            if (row && (!this.props.data.rows || this.props.data.rows[row].items.length <= idx)) {
                return;
            }
            var pack = _.find(this.props.packages, function (p) { return p.ID === _this.props.packageId; });
            var extraData = row !== undefined && this.props.data.rows ? { channels: this.props.data.rows[row].items, initialIdx: idx } : { channels: this.props.data.channels || [], initialIdx: idx };
            this.visibleDialog = public_4.MtvDetailpageComponent.ChannelDetails.createDialog(public_1.TVDialogHostService.getInstance(), extraData);
            this.visibleDialog
                .result(this)
                .then(function (result) {
                public_5.Logger.debug(function (log) { return log(public_5.LogMsg("showChannelDetails dialog closed with result " + result.resultId, MtvDetailChannelgridComponent_1.TAG)); });
                var idx = result.extraData ? result.extraData.initialIdx : undefined;
                var channel = idx !== undefined && result.extraData ? result.extraData.channels[idx] : undefined;
                if (channel) {
                    var extraData_1 = {
                        channelId: channel.ID,
                        channelTitle: channel.Title || "",
                        contentProvider: pack ? pack.ContentProvider : "unknown",
                        originTvPackageId: _this.props.packageId,
                        packages: _this.props.packages,
                        catalogs: _this.props.catalogs
                    };
                    _this.visibleDialog = public_4.MtvDetailpageComponent.TVPackages.createDialog(public_1.TVDialogHostService.getInstance(), extraData_1);
                    return _this.visibleDialog.result(_this);
                }
                else {
                    throw new Error("Missing Channel Info");
                }
            })
                .then(function (result) {
                if (result.resultId != "") {
                    _this.startIntent(new public_1.IntentMoreTV.Detailpage({ id: result.resultId }), { type: "replace" });
                }
            })
                .catch(function (error) {
                public_5.Logger.debug(function (log) { return log(public_5.LogMsg("showChannelDetails: dialog aborted -> " + error, MtvDetailChannelgridComponent_1.TAG)); });
                return null;
            });
        };
        MtvDetailChannelgridComponent.prototype.render = function () {
            var _this = this;
            var _a, _b, _c, _d;
            var style = {};
            style[public_2.Css.names.transform] = "translate(0px, " + -1 * public_2.Css.scale(this.state.topPosition) + "px)";
            return React.createElement("div", { className: [this.ID,].join(" ") },
                (this.props.data && this.props.data.channelCount > 0 && this.props.data.isUnstructuredGrid) && React.createElement("div", { id: "channelTitle", className: "h4_1" },
                    React.createElement("span", null, public_1.Filter.message(this, public_3.messagesMtv.PACKETVIEW_INC_CHANNELS)),
                    React.createElement("span", { className: "h4_2" },
                        "(",
                        this.props.data.channelCount,
                        ")")),
                React.createElement("div", { id: "grid", className: "" + (this.props.data.isUnstructuredGrid && "unstructured") },
                    React.createElement("div", { className: "animContainer " + public_2.Css.transitions.transformShort, style: style },
                        (((_a = this.props.data) === null || _a === void 0 ? void 0 : _a.isUnstructuredGrid) && ((_b = this.props.data) === null || _b === void 0 ? void 0 : _b.channels)) &&
                            React.createElement(public_1.NavigationContainer, { id: "unstructuredGrid", className: "grid_container", overrides: { down: "unstructuredGrid", up: "unstructuredGrid" }, strictHorizontal: true, onReady: function () { return _this.pageloading(false); }, onFocusInTree: function () { return _this.onFocusLost(); }, onFocusIn: function () { return _this.onFocusIn(); } }, this.props.data.channels.map(function (element, x) {
                                var px = (public_4.ContentMtvTiles.TileChannel.WIDTH - public_2.Css.dimensions.borderWidth) * (x % 5);
                                var py = (public_4.ContentMtvTiles.TileChannel.HEIGHT) * (Math.floor(x / 5));
                                var tileId = x.toString();
                                return React.createElement(public_1.NavigationElement, { id: tileId, key: x, className: "tileChannel", style: public_2.declaration().props({ top: py, left: px }).toStyle(), onFocusIn: function () {
                                        _this.setState({ topPosition: py });
                                    }, onClick: function () {
                                        _this.showChannelDetails(x);
                                    } },
                                    React.createElement(public_4.ContentMtvTiles.TileChannel, { data: { title: element.Title, image: element.Logo } }));
                            })),
                        (((_c = this.props.data) === null || _c === void 0 ? void 0 : _c.isStructuredGrid) && ((_d = this.props.data) === null || _d === void 0 ? void 0 : _d.rows)) &&
                            React.createElement(public_1.NavigationContainer, { id: "structuredGrid", className: "grid_container", overrides: { down: "structuredGrid", up: "structuredGrid" }, strictHorizontal: true, onReady: function () { return _this.pageloading(false); }, onFocusInTree: function () { return _this.onFocusLost(); }, onFocusIn: function () { return _this.onFocusIn(); } }, this.props.data.rows.map(function (row, y) {
                                var rowItemsCount = row.totalCount > 5 ? 4 : 5;
                                var py = ((public_4.ContentMtvTiles.TileChannel.HEIGHT + 44) * y);
                                return React.createElement("div", { id: y.toString(), key: y },
                                    React.createElement("div", { className: "subheadline singleline-ellipsis " + (_this.state.groupSelected == y ? "h4_1" : "h4_2"), style: public_2.declaration().props({ top: py }).toStyle() },
                                        public_1.Filter.message(_this, public_3.messagesMtv.PACKETVIEW_INC_CHANNELS_SUBPACKAGE),
                                        " ",
                                        row.title,
                                        row.totalCount && React.createElement("span", { className: "h4_2" },
                                            " (",
                                            row.totalCount,
                                            ")")),
                                    row.items.slice(0, rowItemsCount).map(function (element, x) {
                                        var px = (public_4.ContentMtvTiles.TileChannel.WIDTH - public_2.Css.dimensions.borderWidth) * (x % rowItemsCount);
                                        var tileId = y.toString() + x.toString();
                                        return React.createElement(public_1.NavigationElement, { id: tileId, key: y.toString() + x.toString(), className: "tileChannel", style: public_2.declaration().props({ top: py + MtvDetailChannelgridComponent_1.ROWTITLE_MARGIN, left: px }).toStyle(), onFocusIn: function () {
                                                _this.setState({ topPosition: py, groupSelected: y });
                                            }, onClick: function () {
                                                _this.showChannelDetails(x, row.index);
                                            } },
                                            React.createElement(public_4.ContentMtvTiles.TileChannel, { data: { title: element.Title, image: element.Logo } }));
                                    }),
                                    row.totalCount > 5 &&
                                        React.createElement(public_6.ButtonMtv.Standard, { id: y.toString() + rowItemsCount, text: "Alle anzeigen", type: "more", format: "m-bu-16-3-1", className: "morehelper", style: public_2.declaration().props({ top: py + MtvDetailChannelgridComponent_1.ROWTITLE_MARGIN, left: (public_4.ContentMtvTiles.TileChannel.WIDTH - public_2.Css.dimensions.borderWidth) * (4 % 5) }).toStyle(), onFocusIn: function () {
                                                _this.setState({ topPosition: py, groupSelected: y });
                                            }, onClick: function (e) {
                                                _this.goToAllChannelPage(_this.props.packageId, y);
                                            } }));
                            })))));
        };
        var MtvDetailChannelgridComponent_1;
        MtvDetailChannelgridComponent.classID = 0xC04;
        MtvDetailChannelgridComponent.COMPONENT_WIDTH = 1295;
        MtvDetailChannelgridComponent.ROWTITLE_MARGIN = 43;
        MtvDetailChannelgridComponent = MtvDetailChannelgridComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-channelgrid-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        position: "absolute",
                        width: 1104
                    })
                        .sub(public_2.selector("& #index")
                        .props({
                        flexShrink: 0
                    }))
                        .sub(public_2.selector(" #grid")
                        .props({
                        width: public_2.Css.dimensions.safeareaWidth + 2 * public_2.Css.dimensions.borderWidth,
                        height: public_2.Css.dimensions.screenHeight,
                        position: "absolute",
                        overflow: "hidden"
                    })
                        .sub(public_2.selector("& .unstructured")
                        .props({
                        top: 44
                    }))
                        .sub(public_2.selector("& .animContainer")
                        .props({
                        position: "absolute"
                    }))
                        .sub(public_2.selector("& .grid_container")
                        .props({
                        position: "absolute"
                    })
                        .sub(public_2.selector(".tileChannel")
                        .props({
                        width: 264,
                        height: 228,
                        overflow: "hidden",
                        display: "inline-block",
                        position: "absolute"
                    }))
                        .sub(public_2.selector("& .subheadline")
                        .props({
                        position: "absolute",
                        left: public_2.Css.dimensions.borderWidth
                    }))
                        .sub(public_2.selector("& .morehelper")
                        .props({
                        position: "absolute",
                        height: 229,
                        padding: public_2.Css.dimensions.borderWidth
                    })))
                        .sub(public_2.selector("h4_1")
                        .extend(public_2.Css.fonts2.a_fo_h4_mixin))
                        .sub(public_2.selector("h4_2")
                        .props({
                        color: public_2.Css.colors.A_CO_6,
                    })
                        .extend(public_2.Css.fonts2.a_fo_h4_mixin)))
                ]
            })
        ], MtvDetailChannelgridComponent);
        return MtvDetailChannelgridComponent;
    }(public_1.ReactBaseComponent));
    exports.MtvDetailChannelgridComponent = MtvDetailChannelgridComponent;
});
//# sourceMappingURL=channelgrid.component.js.map