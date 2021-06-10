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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "../../translation/public", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvTvPackagesComponent = void 0;
    var MtvTvPackagesComponent = (function (_super) {
        __extends(MtvTvPackagesComponent, _super);
        function MtvTvPackagesComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.listConfiguration = {
                itemCount: 6,
                centralIndex: 1,
                itemSize: 100,
                focusedItemSize: 150
            };
            _this.itemRenderer = function (viewItem, navigationId) {
                var _a, _b, _c;
                var classNames = ["item"];
                return React.createElement(public_1.NavigationElement, { id: navigationId, onClick: _this.onItemClick },
                    React.createElement("div", { className: classNames.join(" ") },
                        React.createElement("div", { id: "iconalignhelper" }, React.createElement("img", { className: "image", src: (_a = viewItem.data) === null || _a === void 0 ? void 0 : _a.Logo })),
                        React.createElement("div", { id: "title", className: public_2.Css.fonts2.a_fo_h6_2 + " singleline-ellipsis" }, React.createElement("span", null, (_b = viewItem.data) === null || _b === void 0 ? void 0 : _b.Title)),
                        viewItem.data && viewItem.focused &&
                            React.createElement("p", { id: "subtitle", className: public_2.Css.fonts2.a_fo_b2__ + " singleline-ellipsis" }, React.createElement("span", { id: "description" }, (_c = viewItem.data) === null || _c === void 0 ? void 0 :
                                _c.Description,
                                " ",
                                public_1.Filter.message(_this, public_3.messagesMtv.PACKAGESLISTVIEW_DESCRIPTION),
                                " "))));
            };
            _this.focusRenderer = function (style, focusItem) {
                return React.createElement("div", { className: "focus_container", style: style },
                    React.createElement("div", { className: "focus" }));
            };
            _this.onItemClick = function () {
                if (_this.state.selection) {
                    var stateItem = _this.state.data[_this.state.selection.index];
                    var packID = stateItem === null || stateItem === void 0 ? void 0 : stateItem.data;
                    if (packID) {
                        _this.props.closeDialogWithResult({ resultId: packID.ID });
                    }
                    else {
                        _this.props.closeDialogWithResult({ resultId: "" });
                    }
                }
            };
            _this.onSelectionChanged = function (index) {
                if (index !== undefined)
                    _this.setState({ selection: { index: index } });
            };
            var logoMap = {};
            for (var _i = 0, _a = _this.props.model.extraData.catalogs; _i < _a.length; _i++) {
                var c = _a[_i];
                if (c.ContentProvider)
                    logoMap[c.ContentProvider] = c.Logo;
            }
            var dataItems = [];
            var filteredPacks = _this.filterPackages();
            filteredPacks
                .forEach(function (item, index) {
                item.Logo = logoMap[item.ContentProvider];
                item.Description = item.ChannelCount ? item.ChannelCount.toString() : undefined;
                dataItems[index] = { index: index, data: item, isTemporary: false };
            });
            _this.state = { data: dataItems, focusItem: { counter: 0 }, selection: { index: 0 } };
            return _this;
        }
        MtvTvPackagesComponent_1 = MtvTvPackagesComponent;
        MtvTvPackagesComponent.prototype.filterPackages = function () {
            var _this = this;
            var resolveRelatedPackages = public_4.Feature.has(public_4.FeatureItems.moreTvRelatedPackages, public_4.FeatureRights.viewItems);
            var p1 = resolveRelatedPackages
                ? this.props.model.extraData.packages.filter(function (p) {
                    if (!p.ChannelGroups || p.ChannelGroups.length === 0) {
                        return false;
                    }
                    for (var i = 0; p.ChannelGroups.length; i++) {
                        if (!p.ChannelGroups[i] || !p.ChannelGroups[i].Channels) {
                            return false;
                        }
                        if (p.ChannelGroups[i].Channels.indexOf(_this.props.model.extraData.channelId) >= 0) {
                            return true;
                        }
                    }
                    return false;
                })
                : this.props.model.extraData.packages.filter(function (p) {
                    return p.ID === _this.props.model.extraData.originTvPackageId ? true : false;
                });
            var p2a = [];
            var p2b = [];
            for (var _i = 0, p1_1 = p1; _i < p1_1.length; _i++) {
                var it_1 = p1_1[_i];
                if (it_1.ContentProvider == this.props.model.extraData.contentProvider) {
                    p2a.push(it_1);
                }
                else {
                    p2b.push(it_1);
                }
            }
            p2a.sort(function (a, b) {
                if (b.PriceInfo && a.PriceInfo) {
                    return parseInt(b.PriceInfo.Price || "0", 10) - parseInt(a.PriceInfo.Price || "0", 10);
                }
                else
                    return 0;
            });
            p2b.sort(function (a, b) {
                if (b.PriceInfo && a.PriceInfo) {
                    return parseInt(b.PriceInfo.Price || "0", 10) - parseInt(a.PriceInfo.Price || "0", 10);
                }
                else
                    return 0;
            });
            return __spreadArrays(p2a, p2b);
        };
        MtvTvPackagesComponent.createDialog = function (dialogService, extraData) {
            return dialogService.show({
                extraData: extraData,
                icon: undefined,
                ignoreSafeArea: true
            }, MtvTvPackagesComponent_1);
        };
        MtvTvPackagesComponent.prototype.render = function () {
            var extraData = this.props.model.extraData;
            return React.createElement(public_1.NavigationContainer, { className: this.ID, id: "channelDetails", useCycle: true },
                React.createElement(public_1.NavigationKey, { keyFilter: "0-9", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset1", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset2", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset3", onKey: function () { return true; } }),
                React.createElement("div", { className: "content" },
                    React.createElement("div", { id: "head" },
                        React.createElement("div", { id: "channelName", className: public_2.Css.fonts2.a_fo_h6_2 + " singleline-ellipsis" }, extraData.channelTitle),
                        React.createElement("hr", null),
                        React.createElement(public_1.NavigationContainer, { id: "listNavCo" },
                            React.createElement("div", { className: "cropmaskTopBottom" },
                                React.createElement("div", { className: "packageList" },
                                    React.createElement(public_1.ListComponent, __assign({ disableDefaultClipping: true, focusRenderer: this.focusRenderer, itemRenderer: this.itemRenderer, items: this.state.data, onRetrieveData: undefined, onSelectionChanged: this.onSelectionChanged, focusItem: this.state.focusItem, selection: this.state.selection }, this.listConfiguration)))))),
                    this.state.selection !== undefined && this.state.selection.index >= 0 &&
                        React.createElement("div", { className: "listscroller" },
                            React.createElement(public_1.ListScrollIndicatorComponent, { selectionIndex: this.state.selection.index, totalCount: this.state.data.length, listConfiguration: this.listConfiguration }))));
        };
        var MtvTvPackagesComponent_1;
        MtvTvPackagesComponent.COMPONENT_WIDTH = 415;
        MtvTvPackagesComponent = MtvTvPackagesComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-tvpackages-component",
                styles: [
                    public_2.selector("& .content")
                        .props({
                        position: "absolute",
                        top: public_2.Css.dimensions.safeareaTop + 63,
                        left: public_2.Css.dimensions.safeareaLeft + 262,
                        width: 1176,
                        height: 897
                    }),
                    public_2.selector("& #head")
                        .props({
                        position: "absolute",
                        textAlign: "center",
                        width: "inherit"
                    }),
                    public_2.selector("& hr")
                        .props({
                        backgroundColor: public_2.Css.colors.global_focus_background,
                        borderColor: public_2.Css.colors.global_focus_background,
                        height: 3,
                        position: "absolute",
                        top: 48,
                        width: "inherit"
                    }),
                    public_2.selector("& .cropmaskTopBottom")
                        .props({
                        position: "absolute",
                        top: 114,
                        width: 1176,
                        height: 640,
                        overflow: "hidden"
                    }),
                    public_2.selector("& .item")
                        .props({
                        display: "block",
                        textAlign: "left",
                        width: 1176,
                        height: "inherit"
                    }),
                    public_2.selector("& .image")
                        .props({
                        height: 48,
                        maxWidth: 81,
                        position: "absolute"
                    }),
                    public_2.selector("& #iconalignhelper")
                        .props({
                        position: "absolute",
                        top: 27,
                        height: 48,
                        textAlign: "center",
                        left: 45
                    }),
                    public_2.selector("& #title")
                        .props({
                        color: public_2.Css.colors.A_CO_1,
                        right: 48,
                        position: "absolute",
                        left: 191,
                        top: 24,
                        height: 50
                    }),
                    public_2.selector("& #subtitle")
                        .props({
                        color: public_2.Css.colors.A_CO_1,
                        width: 468,
                        position: "absolute",
                        top: 83,
                        left: 191
                    }),
                    public_2.selector("& .focus")
                        .props({
                        backgroundColor: public_2.Css.colors.global_focus_background,
                        position: "absolute",
                        height: 150,
                        width: 1176,
                        visibility: "visible"
                    }),
                    public_2.selector("& .packageList")
                        .props({
                        position: "absolute",
                        width: "inherit",
                        height: 640
                    }),
                    public_2.selector("& .listscroller")
                        .props({
                        position: "absolute",
                        width: 1176,
                        bottom: 0
                    }),
                    public_2.selector("& .focus_container")
                        .props({
                        transition: "transform " + public_2.Css.transitions.easeOutQuad + " " + public_2.Css.transitions.middle
                    })
                ]
            })
        ], MtvTvPackagesComponent);
        return MtvTvPackagesComponent;
    }(public_1.ReactBaseComponent));
    exports.MtvTvPackagesComponent = MtvTvPackagesComponent;
});
//# sourceMappingURL=tvpackages.component.js.map