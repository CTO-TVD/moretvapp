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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../component/ui/public", "./optionpanel.interface", "../navigation/public", "../../base/public", "react-transition-group", "../../filter/public", "./optionpanel.service", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2, optionpanel_interface_1, public_3, public_4, react_transition_group_1, public_5, optionpanel_service_1, public_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVOptionPanelPage = void 0;
    var optionSeparator = {
        width: "auto",
        height: 3,
        background: public_1.Css.colors.A_CO_1_30,
        marginBottom: 24,
        marginLeft: 72,
        marginRight: 3,
        marginTop: 33,
        paddingBottom: 0,
        paddingTop: 0
    };
    var TVOptionPanelPage = (function (_super) {
        __extends(TVOptionPanelPage, _super);
        function TVOptionPanelPage(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.listConfiguration = {
                itemCount: 10,
                itemSize: 72
            };
            _this.closeOptionPanel = function () {
                _this.state.optionPanelData.abortOptionPanel({ resultItem: undefined });
                _this.setState({ show: false });
                return true;
            };
            _this.handleFocusFollow = function (item, state, position) {
                _this.setState({ position: position });
            };
            _this.focusRenderer = function (style) {
                var focusStyle = _this.state.position && {
                    width: _this.state.position.width,
                    height: _this.state.position.height
                };
                return React.createElement("div", { className: "focus_container", style: style },
                    React.createElement("div", { className: "focus", style: focusStyle }));
            };
            _this.itemRenderer = function (viewItem, navigationId) {
                return _this.itemRendererMain(viewItem.data, navigationId);
            };
            _this.itemRendererMain = function (viewItem, navigationId, focusClass) {
                if (focusClass === void 0) { focusClass = false; }
                if (viewItem) {
                    if (viewItem.type !== optionpanel_interface_1.OptionType.SEPARATOR) {
                        return React.createElement(public_3.NavigationElement, { className: "navigableItem", key: viewItem.id, id: viewItem.id, onClick: function () { return _this.clickHandler(viewItem); }, autofocus: viewItem.hasAutoFocus, onFocusIn: function (e) { return _this.setFocusedItem(e, viewItem); } },
                            React.createElement("li", { className: focusClass ? "listFocus" : "" },
                                React.createElement("div", { className: "dttv-flash" }),
                                (viewItem.type === optionpanel_interface_1.OptionType.CHECKABLE) && React.createElement("div", { className: "multi-symbol" + (viewItem.isChecked ? " checked" : "") }, "\u00A0"),
                                React.createElement("div", null, public_5.Filter.message(_this, viewItem.label)),
                                viewItem.amount && React.createElement("span", { className: "amount" }, viewItem.amount),
                                _this.hasValidItems(viewItem) && React.createElement("div", { className: "menu-symbol" }, "\u00A0")));
                    }
                    return React.createElement("li", { key: viewItem.id, className: "separator" }, "\u00A0");
                }
                else {
                    return null;
                }
            };
            _this.onSelectionChanged = function (index) {
                _this.selectedIndex = index;
            };
            var optionPanelService = optionpanel_service_1.TVOptionPanelService.getInstance();
            var optionPanelData = optionPanelService.getNextOptionPanel() || { model: null, abortOptionPanel: undefined };
            if (!optionPanelData.model || !optionPanelData.model.items) {
                if (optionPanelData.abortOptionPanel)
                    optionPanelData.abortOptionPanel({ resultItem: undefined });
                return _this;
            }
            var pathParts = _this.location.pathname.split("/");
            var data = optionPanelData.model;
            var _loop_1 = function (id) {
                if (id !== "") {
                    data = (data.items || []).filter(function (item) { return _this.encodeId(item.id) === id; })[0];
                }
            };
            for (var _i = 0, pathParts_1 = pathParts; _i < pathParts_1.length; _i++) {
                var id = pathParts_1[_i];
                _loop_1(id);
            }
            _this.listConfiguration.centralIndex = public_6.Guard.isDefined(data.centralIndex) ? data.centralIndex : 2;
            var items = (data.items || []).filter(function (item) { return item && !item.isHidden; });
            var autofocusIndex = 0;
            items.some(function (item, index) { return item.hasAutoFocus ? ((autofocusIndex = index), true) : false; });
            _this.state = {
                data: items.map(function (item, index) { return ({ index: index, data: item }); }),
                item: data,
                optionPanelData: optionPanelData,
                position: undefined,
                selection: { index: autofocusIndex },
                title: _this.isOptionModel(data) ? data.title : data.label,
                tunerQualityIcon: optionPanelData.model.sat ? _this.chooseSignalIcon(optionPanelData.model.sat.tunerQuality) : undefined,
                tunerStrengthIcon: optionPanelData.model.sat ? _this.chooseSignalIcon(optionPanelData.model.sat.tunerStrength) : undefined,
                percentageThresholdRed: 39,
                currentFeedbackText: optionPanelData.model.feedbackText1 ? optionPanelData.model.feedbackText1 : "",
                currentFeedbackText2: optionPanelData.model.feedbackText1 ? optionPanelData.model.feedbackText2 : "",
                movement: data !== optionPanelData.model ? "down" : "",
                show: false,
                renderPanel: true,
                showFeedback: !!optionPanelData.model.showFeedback,
                sepWidth: public_1.Css.scale(483)
            };
            for (var _a = 0, _b = data.items || []; _a < _b.length; _a++) {
                var item = _b[_a];
                if (_this.hasValidItems(item)) {
                    _this.props.onAddRoute(_this.location.pathname + _this.encodeId(item.id) + "/");
                }
            }
            return _this;
        }
        TVOptionPanelPage_1 = TVOptionPanelPage;
        TVOptionPanelPage.prototype.onPushstateLoad = function () {
            _super.prototype.onPushstateLoad.call(this);
            if (this.location.isBackNavigation) {
                this.state = __assign(__assign({}, this.state), { selection: public_6.Guard.isNumber(this.selectedIndex) ? { index: this.selectedIndex } : undefined, movement: "up" });
            }
        };
        TVOptionPanelPage.prototype.componentDidMount = function () {
            this.setState({ show: true });
        };
        TVOptionPanelPage.prototype.render = function () {
            var _this = this;
            var _a;
            var path = this.location.pathname;
            var scrollableContainer = [];
            var isSecondLevel = this.state.item && this.state.item !== this.state.optionPanelData.model;
            if (isSecondLevel) {
                scrollableContainer.push("secondLevel");
            }
            if (this.state.optionPanelData.model.sat) {
                scrollableContainer.push("sat");
            }
            if (this.state.optionPanelData.model.withReset && this.state.optionPanelData.model.showFeedback) {
                scrollableContainer.push("withReset");
            }
            return this.state.renderPanel &&
                React.createElement(react_transition_group_1.CSSTransition, { timeout: TVOptionPanelPage_1.transitionScaleInDuration, classNames: "close", in: this.state.show, onExited: function (node) { return _this.onExited(node); } },
                    React.createElement(react_transition_group_1.CSSTransition, { timeout: TVOptionPanelPage_1.transitionScaleInDuration, classNames: "show", in: this.state.show && this.state.movement === "" },
                        React.createElement(public_3.NavigationContainer, { id: "optionPanel_" + path, useCycle: ((_a = this.state.data) === null || _a === void 0 ? void 0 : _a.length) < 10, strictHorizontal: true, className: ["backgroundContainer", this.ID].join(" "), onFocusFollow: this.handleFocusFollow },
                            React.createElement(public_3.NavigationKey, { keyFilter: "RIGHT_KEY", onKey: function () {
                                    if (_this.focusedElement && _this.focusedItem && _this.focusedItem.items && _this.focusedItem.items.length > 0) {
                                        _this.focusedElement.click();
                                    }
                                    return true;
                                } }),
                            React.createElement(public_3.NavigationKey, { keyFilter: "LEFT_KEY", onKey: function () {
                                    if (_this.state.item !== _this.state.optionPanelData.model) {
                                        _this.startIntent(undefined, { type: "backward" });
                                        return true;
                                    }
                                    else {
                                        _this.state.optionPanelData.abortOptionPanel({ resultItem: undefined });
                                        _this.setState({ show: false });
                                        return true;
                                    }
                                } }),
                            React.createElement(public_3.NavigationKey, { keyFilter: "BACK_KEY", onKey: function () {
                                    if (_this.state.item !== _this.state.optionPanelData.model) {
                                        _this.startIntent(undefined, { type: "backward" });
                                        return true;
                                    }
                                    else {
                                        _this.state.optionPanelData.abortOptionPanel({ resultItem: undefined });
                                        _this.setState({ show: false });
                                        return true;
                                    }
                                } }),
                            React.createElement(public_3.NavigationKey, { keyFilter: "OPTION_KEY", onKey: this.closeOptionPanel }),
                            React.createElement(public_3.NavigationKey, { keyFilter: "BLUE_KEY", onKey: this.closeOptionPanel }),
                            React.createElement(public_3.NavigationKey, { keyFilter: "RED_KEY", onKey: this.closeOptionPanel }),
                            React.createElement(public_3.NavigationKey, { keyFilter: "GREEN_KEY", onKey: this.closeOptionPanel }),
                            React.createElement(public_3.NavigationKey, { keyFilter: "YELLOW_KEY", onKey: this.closeOptionPanel }),
                            React.createElement(public_3.NavigationKey, { keyFilter: "SEARCH_KEY", onKey: function () { return true; } }),
                            React.createElement("div", { className: "container " + this.state.movement + " " + (this.state.optionPanelData.model.sat ? "sat" : "") },
                                React.createElement("h3", null, public_5.Filter.message(this, this.state.title)),
                                React.createElement(react_transition_group_1.CSSTransition, { timeout: TVOptionPanelPage_1.transitionLeftRightDuration, classNames: this.state.movement, in: true, appear: true },
                                    React.createElement(React.Fragment, null,
                                        React.createElement("div", { className: "scrollableContainer " + scrollableContainer.join(" ") }, this.state.item && this.state.item !== this.state.optionPanelData.model ?
                                            React.createElement("ul", null,
                                                React.createElement(public_2.ListComponent, __assign({ focusRenderer: this.focusRenderer, itemRenderer: this.itemRenderer, items: this.state.data, onSelectionChanged: this.onSelectionChanged, selection: this.state.selection }, this.listConfiguration))) : React.createElement("ul", { className: "fitContent", ref: function (e) {
                                                if (e) {
                                                    var rect_1 = e.getBoundingClientRect();
                                                    _this.setState(function (prevState) { return (prevState.sepWidth != rect_1.width ? { sepWidth: rect_1.width } : null); });
                                                }
                                            } }, this.state.data.map(function (entry) { return _this.itemRendererMain(entry === null || entry === void 0 ? void 0 : entry.data, undefined, true); }))),
                                        React.createElement("ul", { className: "footer" },
                                            (this.state.showFeedback && !isSecondLevel) && React.createElement(React.Fragment, null,
                                                React.createElement("li", { className: "feedbackSeparator" }),
                                                React.createElement("li", { className: "headLine" }, public_5.Filter.message(this, this.state.optionPanelData.model.feedbackTitle)),
                                                React.createElement("li", { className: "filter" }, public_5.Filter.message(this, this.state.currentFeedbackText)),
                                                React.createElement("li", { className: "filter" }, public_5.Filter.message(this, this.state.currentFeedbackText2))),
                                            (!(this.state.showFeedback && !isSecondLevel) && this.state.optionPanelData.model.sat) && React.createElement(React.Fragment, null,
                                                React.createElement("li", { className: "feedbackSeparator" }),
                                                React.createElement("li", { className: "headLine" }, "\u00A0"),
                                                React.createElement("li", { className: "filter" }, "\u00A0"),
                                                React.createElement("li", { className: "filter" })),
                                            this.state.optionPanelData.model.sat && React.createElement("li", { className: "satinfo" },
                                                React.createElement("table", { style: { borderSpacing: 0 } },
                                                    React.createElement("tr", null,
                                                        React.createElement("td", { className: "signaltext " + public_1.Css.fonts2.a_fo_b2__ }, this.state.optionPanelData.model.sat.satLabelSatellite),
                                                        React.createElement("td", null,
                                                            React.createElement("div", { className: "tdimage" },
                                                                React.createElement("img", { className: "signalimage", src: public_1.Css.images.inlineTransparentPixel }))),
                                                        React.createElement("td", { className: "signalvalue " + public_1.Css.fonts2.a_fo_b2__ }, this.state.optionPanelData.model.sat.satName)),
                                                    React.createElement("tr", null,
                                                        React.createElement("td", { className: "signaltext " + public_1.Css.fonts2.a_fo_b2__ }, this.state.optionPanelData.model.sat.satLabelStrength),
                                                        React.createElement("td", null,
                                                            React.createElement("div", { className: "tdimage" },
                                                                React.createElement("img", { className: "signalimage " + this.state.tunerStrengthIcon, src: public_1.Css.images.inlineTransparentPixel }))),
                                                        React.createElement("td", { className: "signalvalue  " + (this.state.optionPanelData.model.sat.tunerStrength > (this.state.percentageThresholdRed || 0) ? "fontGrey" : "fontRed") },
                                                            this.state.optionPanelData.model.sat.tunerStrength,
                                                            "%")),
                                                    React.createElement("tr", null,
                                                        React.createElement("td", { className: "signaltext " + public_1.Css.fonts2.a_fo_b2__ }, this.state.optionPanelData.model.sat.satLabelQuality),
                                                        React.createElement("td", null,
                                                            React.createElement("div", { className: "tdimage" },
                                                                React.createElement("img", { className: "signalimage " + this.state.tunerQualityIcon, src: public_1.Css.images.inlineTransparentPixel }))),
                                                        React.createElement("td", { className: "signalvalue  " + (this.state.optionPanelData.model.sat.tunerQuality > (this.state.percentageThresholdRed || 0) ? "fontGrey" : "fontRed") },
                                                            this.state.optionPanelData.model.sat.tunerQuality,
                                                            "%")))))))))));
        };
        TVOptionPanelPage.prototype.onExited = function (node) {
            this.setState({ renderPanel: false });
        };
        TVOptionPanelPage.prototype.hasValidItems = function (item) {
            return (item === null || item === void 0 ? void 0 : item.items) && item.items.filter(function (item) { return !!item; }).length > 0;
        };
        TVOptionPanelPage.prototype.clickHandler = function (item) {
            var _this = this;
            if (item.items && item.items.length > 0) {
                if (this.hasValidItems(item)) {
                    this.startIntent({ pathname: this.location.pathname + this.encodeId(item.id) + "/" });
                }
            }
            else {
                if (item.type === optionpanel_interface_1.OptionType.CHECKABLE) {
                    if (item.groupId) {
                        if (!item.isChecked) {
                            this.resetGroup(this.state.item, item.groupId);
                            item.isChecked = !item.isChecked;
                        }
                    }
                    else {
                        item.isChecked = !item.isChecked;
                    }
                }
                this.setState(function (prevState) { return ({ data: prevState.data.map(public_2.ListComponent.clone()) }); });
                setTimeout(function () {
                    _this.state.optionPanelData.closeOptionPanelWithResult({ resultItem: item });
                });
                setTimeout(function () {
                    _this.setState({ show: false });
                }, 500);
            }
        };
        TVOptionPanelPage.prototype.encodeId = function (id) {
            return encodeURIComponent(id);
        };
        TVOptionPanelPage.prototype.isOptionModel = function (value) {
            return value.title !== undefined;
        };
        TVOptionPanelPage.prototype.setFocusedItem = function (element, viewItem) {
            this.focusedElement = element;
            this.focusedItem = viewItem;
            var selectedValues = [];
            var model = this.state.optionPanelData.model;
            if (model.showFeedback) {
                if (model.feedbackSingleSelection) {
                    if (viewItem.items) {
                        for (var _i = 0, _a = viewItem.items; _i < _a.length; _i++) {
                            var groupItem = _a[_i];
                            if (groupItem.isChecked) {
                                selectedValues.push(public_5.Filter.message(this, groupItem.selectionText ? groupItem.selectionText : groupItem.label));
                            }
                        }
                    }
                    else {
                        if (viewItem.selectionText) {
                            selectedValues.push(public_5.Filter.message(this, viewItem.selectionText));
                        }
                    }
                    if (selectedValues.length > 0) {
                        this.setState({
                            showFeedback: !!this.state.optionPanelData.model.showFeedback,
                            currentFeedbackText: selectedValues.join(", ")
                        });
                    }
                    else {
                        this.setState({
                            showFeedback: false
                        });
                    }
                }
            }
        };
        TVOptionPanelPage.prototype.resetGroup = function (parent, groupId) {
            if (!parent.items)
                return;
            for (var _i = 0, _a = parent.items; _i < _a.length; _i++) {
                var groupItem = _a[_i];
                if (groupId && groupItem.groupId === groupId) {
                    groupItem.isChecked = false;
                }
                this.resetGroup(groupItem, groupId);
            }
        };
        TVOptionPanelPage.prototype.chooseSignalIcon = function (value) {
            if (value >= 15 && value <= 25) {
                return public_1.Css.sprites.A_IC_115_1_4_36x36;
            }
            if (value >= 26 && value <= 50) {
                return public_1.Css.sprites.A_IC_115_1_3_36x36;
            }
            if (value >= 51 && value <= 75) {
                return public_1.Css.sprites.A_IC_115_1_2_36x36;
            }
            if (value >= 76) {
                return public_1.Css.sprites.A_IC_115_1_1_36x36;
            }
            return public_1.Css.sprites.A_IC_115_2_5_36x36;
        };
        var TVOptionPanelPage_1;
        TVOptionPanelPage.transitionLeftRightDuration = 200;
        TVOptionPanelPage.transitionScaleInDuration = 250;
        TVOptionPanelPage.blackPanelLeftPosition = 1089;
        __decorate([
            public_4.reactPushState()
        ], TVOptionPanelPage.prototype, "selectedIndex", void 0);
        TVOptionPanelPage = TVOptionPanelPage_1 = __decorate([
            public_4.reactComponent({
                ID: "option-panel-page",
                styles: [
                    public_1.selector("&.backgroundContainer")
                        .props({
                        position: "absolute",
                        width: public_1.Css.dimensions.screenWidth - (TVOptionPanelPage_1.blackPanelLeftPosition + public_1.Css.dimensions.safeareaLeft),
                        height: public_1.Css.dimensions.screenHeight,
                        top: 0,
                        overflow: "hidden",
                        left: TVOptionPanelPage_1.blackPanelLeftPosition + public_1.Css.dimensions.safeareaLeft,
                        backgroundColor: public_1.Css.colors.A_CO_4_90,
                        willChange: "transform, opacity"
                    }),
                    public_1.selector("& .container")
                        .props({
                        top: 78,
                        left: 54,
                        position: "absolute",
                        willChange: "transform"
                    })
                        .sub(public_1.selector("&.sat")
                        .props({
                        top: 72
                    }))
                        .sub(public_1.selector("> .scrollableContainer")
                        .props({
                        overflow: "hidden",
                        position: "relative",
                        top: 57,
                        width: 591,
                        height: 682,
                        willChange: "transform, opacity"
                    })
                        .sub(public_1.selector("&.sat")
                        .props({
                        height: 618
                    }))
                        .sub(public_1.selector("&.secondLevel:not(.sat)")
                        .props({
                        height: 730
                    }))
                        .sub(public_1.selector("&.withReset:not(.sat)")
                        .props({
                        height: 564
                    })))
                        .sub(public_1.selector("h3")
                        .extend(public_1.Css.fonts2.a_fo_h3_2_mixin)
                        .extend(public_1.Css.mixins.singlelineEllipsis)
                        .props({
                        marginBottom: 33,
                        paddingLeft: 72,
                        whiteSpace: "nowrap",
                        width: 580
                    }))
                        .sub(public_1.selector("&.sat h3")
                        .props({
                        marginBottom: 15
                    }))
                        .sub(public_1.selector("& .dttv-focused")
                        .sub(public_1.selector("li.listFocus::before")
                        .props({
                        opacity: 1
                    }))
                        .sub(public_1.selector("li:not([disabled]) .menu-symbol")
                        .props({
                        opacity: 1
                    }))
                        .sub(public_1.selector(".multi-symbol")
                        .props({
                        opacity: 0.1
                    })))
                        .sub(public_1.selector("ul")
                        .props({
                        margin: 0,
                        opacity: 1,
                        width: "inherit",
                        willChange: "transform"
                    })
                        .sub(public_1.selector("&.fitContent")
                        .props({
                        width: "-webkit-fit-content"
                    }))
                        .sub(public_1.selector("&.footer")
                        .props({
                        width: 546
                    })))
                        .sub(public_1.selector("li.listFocus")
                        .sub(public_1.selector("&::before")
                        .props({
                        content: "''",
                        position: "absolute",
                        top: -2,
                        right: 0,
                        bottom: 2,
                        left: 0,
                        background: public_1.Css.colors.A_CO_2,
                        opacity: 0,
                        zIndex: -1
                    })))
                        .sub(public_1.selector("li")
                        .props({
                        listStyle: "none"
                    })
                        .extend(public_1.Css.fonts2.a_fo_b1_2_mixin)
                        .props({
                        position: "relative",
                        display: "flex",
                        paddingBottom: 16,
                        paddingLeft: 72,
                        paddingRight: 48,
                        paddingTop: 13,
                        width: "min-content",
                        whiteSpace: "nowrap"
                    })
                        .sub(public_1.selector(".menu-symbol")
                        .props({
                        marginLeft: 36,
                        marginRight: -24,
                        marginTop: 12,
                        opacity: 0
                    })
                        .extend(public_1.Css.sprites.A_IC_013_2_24x24_mixin)
                        .props({
                        display: "inline-block"
                    }))
                        .sub(public_1.selector(".multi-symbol")
                        .props({
                        opacity: 0,
                        position: "absolute",
                        top: 21,
                        bottom: 0,
                        left: 24
                    })
                        .extend(public_1.Css.sprites.A_IC_009_2_30x30_mixin)
                        .sub(public_1.selector("&.checked")
                        .props({
                        opacity: 1
                    })))
                        .sub(public_1.selector("&.separator")
                        .props(optionSeparator)))
                        .sub(public_1.selector(".amount:not(:empty)")
                        .extend(public_1.Css.fonts2.a_fo_b1_2_mixin)
                        .props({
                        marginLeft: 12,
                        color: public_1.Css.colors.A_CO_1
                    })
                        .sub(public_1.selector("&::before")
                        .props({
                        content: "'('"
                    }))
                        .sub(public_1.selector("&::after")
                        .props({
                        content: "')'"
                    })))
                        .sub(public_1.selector(".feedbackSeparator")
                        .props({
                        marginTop: 48,
                        marginBottom: 24
                    })
                        .props(optionSeparator))
                        .sub(public_1.selector(".headLine, .filter")
                        .props({
                        marginTop: 0
                    })
                        .extend(public_1.Css.fonts2.a_fo_b2_2__mixin)
                        .props({
                        wordWrap: "break-word",
                        paddingBottom: 0
                    }))
                        .sub(public_1.selector(".headLine")
                        .props({
                        marginTop: -6
                    }))
                        .sub(public_1.selector(".filter")
                        .props({
                        maxHeight: 80,
                        overflow: "hidden",
                        whiteSpace: "normal",
                        width: 610
                    })
                        .extend(public_1.Css.mixins.twolineEllipsis))
                        .sub(public_1.selector("& .focus")
                        .props({
                        backgroundColor: public_1.Css.colors.A_CO_2,
                        position: "absolute",
                        visibility: "hidden"
                    }))
                        .sub(public_1.selector("& .hasFocus .focus")
                        .props({
                        visibility: "visible"
                    }))
                        .sub(public_1.selector("& .navigableItem")
                        .props({
                        width: "-webkit-fit-content"
                    }))
                        .sub(public_1.selector("& .satinfo")
                        .sub(public_1.selector("& .fontGrey")
                        .props({
                        color: public_1.Css.colors.A_CO_6
                    })
                        .extend(public_1.Css.fonts2.a_fo_b2___mixin))
                        .sub(public_1.selector("& .fontRed")
                        .props({
                        color: public_1.Css.colors.A_CO_12
                    })
                        .extend(public_1.Css.fonts2.a_fo_b2___mixin))
                        .sub(public_1.selector("& .signaltext")
                        .props({
                        padding: 0,
                        color: public_1.Css.colors.A_CO_6
                    }))
                        .sub(public_1.selector("& .signalimage")
                        .props({
                        marginRight: 21,
                        marginLeft: 48,
                        marginTop: 3
                    }))
                        .sub(public_1.selector("& .signalvalue ")
                        .props({
                        textAlign: "left",
                        padding: 0,
                        color: public_1.Css.colors.A_CO_6
                    }))
                        .sub(public_1.selector("& .tdimage")
                        .props({
                        padding: 0,
                        maxHeight: 42
                    }))
                        .sub(public_1.selector("& td")
                        .props({
                        padding: 0
                    }))),
                    public_1.selector("& .up-appear")
                        .props({
                        transform: "translate(-" + public_1.Css.scale(48) + "px)",
                        opacity: 0
                    }),
                    public_1.selector("& .up-appear.up-appear-active")
                        .props({
                        transform: "translate(0)",
                        opacity: 1,
                        transition: "transform " + TVOptionPanelPage_1.transitionLeftRightDuration + "ms ease, opacity " + TVOptionPanelPage_1.transitionLeftRightDuration + "ms ease"
                    }),
                    public_1.selector("& .down-appear")
                        .props({
                        transform: "translate(" + public_1.Css.scale(48) + "px)",
                        opacity: 0
                    }),
                    public_1.selector("& .down-appear.down-appear-active")
                        .props({
                        opacity: 1,
                        transform: "translate(0)",
                        transition: "transform " + TVOptionPanelPage_1.transitionLeftRightDuration + "ms ease, opacity " + TVOptionPanelPage_1.transitionLeftRightDuration + "ms ease"
                    }),
                    public_1.selector("&.show-enter")
                        .props({
                        opacity: 0,
                        transform: "translateX(25%)"
                    }),
                    public_1.selector("&.show-enter.show-enter-active")
                        .props({
                        transform: "translateX(0)",
                        opacity: 1,
                        transition: "transform " + TVOptionPanelPage_1.transitionScaleInDuration + "ms ease, opacity " + TVOptionPanelPage_1.transitionScaleInDuration + "ms ease"
                    }),
                    public_1.selector("&.close-exit")
                        .props({
                        opacity: 1,
                        transform: "translateX(0)"
                    }),
                    public_1.selector("&.close-exit.close-exit-active")
                        .props({
                        transform: "translateX(50%)",
                        opacity: 0,
                        transition: "transform " + TVOptionPanelPage_1.transitionScaleInDuration + "ms ease, opacity " + TVOptionPanelPage_1.transitionScaleInDuration + "ms ease"
                    })
                ]
            })
        ], TVOptionPanelPage);
        return TVOptionPanelPage;
    }(public_4.ReactBaseComponent));
    exports.TVOptionPanelPage = TVOptionPanelPage;
});
//# sourceMappingURL=optionpanel.page.js.map