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
define(["require", "exports", "react", "rxjs", "rxjs/operators", "../../../baseRouter/public", "src/src-de-telekom-style/public", "../../../filter/public", "../list/public", "../../../framework/public", "../../../base/public", "react-transition-group", "src/src-de-telekom/public", "../../molecule/content/mask.component"], function (require, exports, React, rxjs_1, operators_1, public_1, public_2, public_3, public_4, public_5, public_6, react_transition_group_1, public_7, mask_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MenuPageComponent = void 0;
    var MaskedBackground = function (_a) {
        var _b = _a.backgroundOpacity, backgroundOpacity = _b === void 0 ? 1 : _b, _c = _a.backgroundImageSrc, backgroundImageSrc = _c === void 0 ? public_2.Css.images.inlineTransparentPixel : _c;
        return React.createElement("div", { className: ["background", public_2.Css.globalStyleClasses.defaultBackgroundImage].join(" ") },
            React.createElement("div", { className: "basicbackground" }),
            backgroundImageSrc && backgroundImageSrc != "" && backgroundImageSrc != public_2.Css.images.inlineTransparentPixel &&
                React.createElement(mask_component_1.Mask, { className: "maskedcover", type: "miniPreview" },
                    React.createElement("img", { className: "coverBackground", style: { opacity: backgroundOpacity }, src: backgroundImageSrc })));
    };
    var MenuPageComponent = (function (_super) {
        __extends(MenuPageComponent, _super);
        function MenuPageComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.complete = false;
            _this.initRoute = "";
            _this.listConfiguration = {
                itemCount: _this.props.menuItems.length,
                itemSize: 96
            };
            _this.handleFocusFollow = function (item, state, position) {
                _this.setState({ position: position });
            };
            _this.onFocusInTree = function (e, type) {
                _this.setState({ expanded: true });
            };
            _this.onFocusOutTree = function (e, type) {
                _this.setState({ expanded: false, initialFocus: false });
            };
            _this.onSelectionChanged = function (index) {
                _this.selectedIndex = index;
            };
            _this.focusRenderer = function (style) {
                var focusStyle = _this.state.position && {
                    width: _this.state.position.width,
                    height: _this.state.position.height
                };
                var focusClasses = ["focus"];
                if (_this.state.initialFocus) {
                    focusClasses.push("initial");
                }
                return React.createElement("div", { className: "focus_container", style: style },
                    React.createElement("div", { className: focusClasses.join(" "), style: focusStyle }));
            };
            _this.itemRenderer = function (viewItem, navigationId) {
                var _a, _b;
                var iconUnderline = public_7.Guard.isNumber(_this.selectedIndex) && _this.selectedIndex == viewItem.index ? true : false;
                var iconClasses = [(_a = viewItem.data) === null || _a === void 0 ? void 0 : _a.icon, "menuicon"];
                var underlineClases = ["underline"];
                if (!iconUnderline || (_this.state.initialFocus && viewItem.focused)) {
                    underlineClases.push("hidden");
                }
                return React.createElement(public_5.NavigationElement, { className: "navigableItem", key: navigationId, id: navigationId, onClick: function (e) { return _this.clickHandler(e); }, onFocusIn: function () { return _this.onItemFocusIn(viewItem.data); }, onReady: function (e) { return viewItem.data && _this.readySubroute(new viewItem.data.intent(), e); } },
                    React.createElement("div", { className: "menuItem" },
                        React.createElement("div", { className: "iconPosition" },
                            React.createElement("div", { className: iconClasses.join(" "), style: iconUnderline ? { opacity: 1 } : undefined }),
                            React.createElement("div", { className: underlineClases.join(" ") })),
                        React.createElement("div", { className: "dttv-flash" }),
                        React.createElement("div", { className: "menutext" }, public_3.Filter.join(_this, (_b = viewItem.data) === null || _b === void 0 ? void 0 : _b.text))));
            };
            _this.state = {
                suppressInitialMenuFocus: _this.props.suppressInitialMenuFocus,
                expanded: (_this.props.notNavigatable) ? false : _this.location.isBackNavigation && _this.props.suppressFocusOnBackNavigation ? false : true,
                initialized: false,
                initialFocus: true
            };
            _this.selectedIndex = 0;
            var notifierObservable = MenuPageComponent_1.MenuPageBackgroundNotifier
                .pipe(operators_1.switchMap(function (item) {
                if (item.timerNext > 0) {
                    _this.setState({ backgroundOpacity: item.backgroundOpacity });
                }
                return rxjs_1.timer(item.timerNext).pipe(operators_1.tap(function () {
                    _this.setState({ backgroundOpacity: 1, backgroundImageSrc: item.backgroundImageSrc });
                }));
            }), operators_1.takeUntil(_this.destroyNotifier));
            notifierObservable.subscribe();
            _this.onDestroy(function () {
                clearInterval(_this.debouncerTimeoutHandle);
                _this.debouncerTimeoutHandle = undefined;
            });
            return _this;
        }
        MenuPageComponent_1 = MenuPageComponent;
        MenuPageComponent.prototype.onPushstateSave = function (args) {
            if (this.state.backgroundImageSrc != public_2.Css.images.inlineTransparentPixel) {
                this.backgroundImageSrc = this.state.backgroundImageSrc;
            }
            _super.prototype.onPushstateSave.call(this, args);
        };
        MenuPageComponent.prototype.onPushstateLoad = function () {
            _super.prototype.onPushstateLoad.call(this);
            if (this.location.isBackNavigation) {
                this.state = __assign(__assign({}, this.state), { suppressInitialMenuFocus: false });
            }
            if (this.location.isBackNavigation && public_7.Guard.isDefined(this.backgroundImageSrc)) {
                this.state = __assign(__assign({}, this.state), { backgroundOpacity: 0.97, backgroundImageSrc: this.backgroundImageSrc });
            }
        };
        MenuPageComponent.prototype.clickHandler = function (e) {
            e.moveFocus("right");
        };
        MenuPageComponent.prototype.focusSubroute = function (menuItem) {
            if (!this.initRoute || this.complete) {
                this.setState(function (prevState) {
                    if (!prevState.menuItem || prevState.menuItem.id != menuItem.id) {
                        return { headerComponent: undefined, menuItem: menuItem };
                    }
                    return { menuItem: menuItem };
                });
                this.startIntent(new menuItem.intent(), { type: "replace" });
            }
            else {
                this.setState({ menuItem: menuItem });
            }
        };
        MenuPageComponent.prototype.onItemFocusIn = function (menuItem) {
            var _this = this;
            if (menuItem) {
                if (!this.state.initialized) {
                    this.setState({ initialized: true });
                    this.focusSubroute(menuItem);
                }
                else {
                    this.setState({ suppressInitialMenuFocus: false });
                    if (public_7.Guard.isNumber(this.debouncerTimeoutHandle)) {
                        clearTimeout(this.debouncerTimeoutHandle);
                        this.debouncerTimeoutHandle = undefined;
                    }
                    this.debouncerTimeoutHandle = setTimeout(function () {
                        _this.focusSubroute(menuItem);
                        _this.debouncerTimeoutHandle = undefined;
                    }, MenuPageComponent_1.debounceDelayForFocus);
                }
            }
        };
        MenuPageComponent.prototype.readySubroute = function (intent, e) {
            if (this.initRoute === intent.pathname && !(this.props.suppressFocusOnBackNavigation && this.location.isBackNavigation)) {
                e.focus();
            }
        };
        MenuPageComponent.prototype.render = function () {
            var _this = this;
            var _a, _b;
            var menuItems = this.props.menuItems.map(function (item, index) { return ({ index: index, data: item }); });
            var pagePanelClasses = ["page-panel"];
            var allContentClasses = ["all-content"];
            var menuPanelClasses = ["menu-panel"];
            var containerMenuItemsClasses = ["containerMenuItems"];
            if (this.props.menuType == "recording") {
                menuPanelClasses.push("recordingMenuWidth");
                containerMenuItemsClasses.push("recordingMenuWidth");
                containerMenuItemsClasses.push("recordingMenuVerticalPosition");
            }
            if (this.state.expanded && !this.props.suppressMainPageTransparency) {
                pagePanelClasses.push("page-semi");
            }
            if (this.props.noOffsetPagePanel) {
                pagePanelClasses.push("page-nooffset");
            }
            if ((!this.state.expanded && this.props.suppressFocusOnBackNavigation && this.location.isBackNavigation)
                || this.props.notNavigatable || this.state.suppressInitialMenuFocus) {
                allContentClasses.push("all-content-transition-exit-done");
            }
            return menuItems && menuItems.length > 0 && React.createElement(public_5.NavigationContainer, { strictHorizontal: false, strictVertical: true, id: this.props.id, onReady: function () { return _this.complete = true; } },
                React.createElement(public_5.NavigationKey, { keyFilter: "BACK_KEY", onKey: function (key, e) {
                        if (!_this.state.expanded && !_this.props.notNavigatable) {
                            var component = e.findParentComponent(public_5.NavigationContainerId).component;
                            if (component)
                                component.focus("menu-items");
                            return true;
                        }
                        return false;
                    } }),
                React.createElement(public_5.NavigationKey, { keyFilter: "RIGHT_KEY", onKey: function (key, e) { return public_7.Guard.isNumber(_this.debouncerTimeoutHandle) && public_7.Guard.isDefined(_this.selectedIndex); } }),
                React.createElement("div", { className: [this.ID].join(" ") },
                    React.createElement(MaskedBackground, { backgroundOpacity: this.state.backgroundOpacity, backgroundImageSrc: this.state.backgroundImageSrc }),
                    React.createElement(react_transition_group_1.CSSTransition, { timeout: MenuPageComponent_1.transitionMovementToExpandedDuration, classNames: "all-content-transition", in: this.state.expanded },
                        React.createElement("div", { className: allContentClasses.join(" ") },
                            React.createElement("div", { className: menuPanelClasses.join(" ") },
                                React.createElement(public_5.NavigationContainer, { id: "menu-items", onFocusFollow: this.handleFocusFollow, onFocusInTree: this.onFocusInTree, onFocusOutTree: this.onFocusOutTree, strictHorizontal: true, strictVertical: true, disabled: this.props.notNavigatable, useCycle: true },
                                    React.createElement("div", { className: containerMenuItemsClasses.join(" ") },
                                        React.createElement("div", { className: "menu-header" }, public_3.Filter.message(this, this.props.headerText)),
                                        React.createElement(public_4.ListComponent, __assign({ className: "listContainer", focusRenderer: this.focusRenderer, itemRenderer: this.itemRenderer, onSelectionChanged: this.onSelectionChanged, items: menuItems }, this.listConfiguration))))),
                            React.createElement(public_5.NavigationContainer, { id: "pagecontainer", strictHorizontal: true },
                                !this.state.expanded && ((_b = (_a = this.state).headerComponent) === null || _b === void 0 ? void 0 : _b.call(_a)),
                                React.createElement("div", { className: pagePanelClasses.join(" ") }, this.props.menuItems.map(function (menuItem, index) { return React.createElement(public_1.Route, { key: "ar" + index, path: new menuItem.intent(), render: function (e) {
                                        _this.initRoute = e.location.pathname;
                                        return React.createElement(menuItem.page, { takeFocus: _this.state.suppressInitialMenuFocus, onHeaderComponent: function (headerComponent) { return _this.setState({ headerComponent: headerComponent }); } });
                                    } }); })))))));
        };
        var MenuPageComponent_1;
        MenuPageComponent.transitionMovementToExpandedDuration = 280;
        MenuPageComponent.transitionMovementToCollapsedDuration = 220;
        MenuPageComponent.BACKGROOUND_WIDTH = 1475;
        MenuPageComponent.BACKGROOUND_HEIGHT = 830;
        MenuPageComponent.menuPanelWidth = 591;
        MenuPageComponent.menuPanelRecordingWidth = 447;
        MenuPageComponent.menuItemsRecordingTop = 315;
        MenuPageComponent.menuPanelWidthCollapsed = 162;
        MenuPageComponent.pagePanelTop = 66;
        MenuPageComponent.menuPanelTop = 99;
        MenuPageComponent.debounceDelayForFocus = 500;
        MenuPageComponent.MenuPageBackgroundNotifier = new rxjs_1.Subject();
        MenuPageComponent.defaultProps = {
            id: "",
            headerText: "<please provide text>",
            menuItems: []
        };
        __decorate([
            public_6.reactPushState(true)
        ], MenuPageComponent.prototype, "selectedIndex", void 0);
        __decorate([
            public_6.reactPushState(true)
        ], MenuPageComponent.prototype, "backgroundImageSrc", void 0);
        MenuPageComponent = MenuPageComponent_1 = __decorate([
            public_6.reactComponent({
                ID: "menupage-component-new",
                styles: [
                    public_2.selector("&")
                        .props({
                        width: public_2.Css.dimensions.screenWidth,
                        height: public_2.Css.dimensions.screenHeight
                    }),
                    public_2.selector("& ." + public_4.ListContentItemComponent.ID + ".listItem")
                        .props({
                        width: "100%"
                    }),
                    public_2.selector("& .all-content")
                        .props({
                        position: "absolute",
                        top: 0,
                        display: "-webkit-flex"
                    }),
                    public_2.selector("& .menu-panel")
                        .props({
                        position: "relative",
                        width: MenuPageComponent_1.menuPanelWidth,
                        height: public_2.Css.dimensions.screenHeight,
                        backgroundColor: public_2.Css.colors.A_CO_4_55,
                        willChange: "width"
                    })
                        .sub(public_2.selector("&.recordingMenuWidth")
                        .props({
                        width: MenuPageComponent_1.menuPanelRecordingWidth
                    }))
                        .sub(public_2.selector("&.recordingMenuVerticalPosition")
                        .props({
                        position: "absolute",
                        top: MenuPageComponent_1.menuItemsRecordingTop
                    }))
                        .sub(public_2.selector("& .listContainer")
                        .props({
                        position: "initial"
                    }))
                        .sub(public_2.selector("& .menutext")
                        .props({
                        opacity: 1
                    }))
                        .sub(public_2.selector("& .menuicon")
                        .props({
                        opacity: 1
                    }))
                        .sub(public_2.selector("& .iconPosition")
                        .props({
                        position: "relative",
                        top: 3,
                        left: -25
                    }))
                        .sub(public_2.selector("& .underline")
                        .props({
                        position: "relative",
                        backgroundColor: public_2.Css.colors.A_CO_1,
                        height: 6,
                        top: 7
                    })
                        .sub(public_2.selector("&.hidden")
                        .props({
                        opacity: 0
                    })))
                        .sub(public_2.selector("& .menu-header")
                        .extend(public_2.Css.fonts2.a_fo_b1_3_mixin)
                        .props({
                        textTransform: "uppercase",
                        paddingLeft: 3,
                        width: "inherit",
                        opacity: 1,
                        marginLeft: 51,
                        marginBottom: 33
                    }))
                        .sub(public_2.selector("& .focus")
                        .props({
                        backgroundColor: public_2.Css.colors.A_CO_2,
                        position: "absolute",
                        visibility: "hidden"
                    }))
                        .sub(public_2.selector("& .hasFocus .focus.initial")
                        .props({
                        visibility: "visible"
                    }))
                        .sub(public_2.selector("& .containerMenuItems")
                        .extend(public_2.Css.fonts2.a_fo_b1_1_mixin)
                        .props({
                        width: MenuPageComponent_1.menuPanelWidth,
                        position: "absolute",
                        top: MenuPageComponent_1.menuPanelTop
                    })
                        .sub(public_2.selector("&.recordingMenuWidth")
                        .props({
                        width: MenuPageComponent_1.menuPanelRecordingWidth
                    }))
                        .sub(public_2.selector("&.recordingMenuVerticalPosition")
                        .props({
                        position: "absolute",
                        top: MenuPageComponent_1.menuItemsRecordingTop
                    }))
                        .sub(public_2.selector("& .menuItem")
                        .extend(public_2.Css.fonts2.a_fo_b1_2_mixin)
                        .props({
                        paddingTop: 21,
                        paddingBottom: 21,
                        paddingLeft: 81,
                        paddingRight: 36,
                        display: "flex",
                        alignItems: "center"
                    }))),
                    public_2.selector("& .page-panel")
                        .props({
                        position: "relative",
                        top: MenuPageComponent_1.pagePanelTop,
                        paddingLeft: 15,
                        height: public_2.Css.dimensions.screenHeight - MenuPageComponent_1.pagePanelTop,
                        width: public_2.Css.dimensions.screenWidth - MenuPageComponent_1.menuPanelWidthCollapsed,
                        opacity: 1,
                        willChange: "opacity"
                    }),
                    public_2.selector("& .page-semi")
                        .props({
                        opacity: 0.5
                    }),
                    public_2.selector("& .page-nooffset")
                        .props({
                        top: 0,
                        height: public_2.Css.dimensions.screenHeight
                    }),
                    public_2.selector("& .settingspage-header")
                        .props({
                        backgroundImage: "none"
                    }),
                    public_2.selector("& .basicbackground")
                        .props({
                        position: "absolute",
                        width: "inherit",
                        height: "inherit"
                    }),
                    public_2.selector("& .background")
                        .props({
                        width: "inherit",
                        height: "inherit"
                    }),
                    public_2.selector("& .maskedcover")
                        .props({
                        position: "absolute",
                        textAlign: "right",
                        right: 0,
                        width: "100%",
                        height: "100%",
                        maxWidth: MenuPageComponent_1.BACKGROOUND_WIDTH,
                        maxHeight: MenuPageComponent_1.BACKGROOUND_HEIGHT,
                        willChange: "opacity"
                    }),
                    public_2.selector("& .maskedcover .coverBackground")
                        .props({
                        height: "inherit",
                        transition: "opacity 200ms linear",
                    }),
                    public_2.selector("& .all-content-transition-enter")
                        .sub(public_2.selector("& .menu-panel")
                        .props({
                        width: MenuPageComponent_1.menuPanelWidthCollapsed,
                        transition: "width " + MenuPageComponent_1.transitionMovementToCollapsedDuration + "ms " + public_2.Css.transitions.easeOutQuad
                    }))
                        .sub(public_2.selector("&-active")
                        .sub(public_2.selector("& .menu-panel")
                        .props({
                        width: MenuPageComponent_1.menuPanelWidth,
                        transition: "width " + MenuPageComponent_1.transitionMovementToCollapsedDuration + "ms " + public_2.Css.transitions.easeOutQuad
                    }))
                        .sub(public_2.selector("& .menu-panel.recordingMenuWidth")
                        .props({
                        width: MenuPageComponent_1.menuPanelRecordingWidth
                    }))
                        .sub(public_2.selector("& .menu-panel.recordingMenuVerticalPosition")
                        .props({
                        position: "absolute",
                        top: MenuPageComponent_1.menuItemsRecordingTop
                    })))
                        .sub(public_2.selector("&-done")
                        .sub(public_2.selector("& .menu-panel")
                        .props({
                        width: MenuPageComponent_1.menuPanelWidth,
                        transition: "width " + MenuPageComponent_1.transitionMovementToCollapsedDuration + "ms " + public_2.Css.transitions.easeOutQuad
                    }))
                        .sub(public_2.selector("& .menu-panel.recordingMenuWidth")
                        .props({
                        width: MenuPageComponent_1.menuPanelRecordingWidth
                    }))
                        .sub(public_2.selector("& .menu-panel.recordingMenuVerticalPosition")
                        .props({
                        position: "absolute",
                        top: MenuPageComponent_1.menuItemsRecordingTop
                    }))
                        .sub(public_2.selector("& .hasFocus .focus")
                        .props({
                        visibility: "visible"
                    }))
                        .sub(public_2.selector("& .underline")
                        .props({
                        opacity: 0
                    }))),
                    public_2.selector("& .all-content-transition-exit")
                        .sub(public_2.selector("& .menu-panel")
                        .props({
                        width: MenuPageComponent_1.menuPanelWidthCollapsed,
                        transition: "width " + MenuPageComponent_1.transitionMovementToExpandedDuration + "ms " + public_2.Css.transitions.easeOutQuad
                    }))
                        .sub(public_2.selector("& .menu-header")
                        .props({
                        opacity: 0
                    }))
                        .sub(public_2.selector("& .menutext")
                        .props({
                        opacity: 0
                    }))
                        .sub(public_2.selector("& .menuicon")
                        .props({
                        opacity: 0.3
                    }))
                        .sub(public_2.selector("&-active")
                        .sub(public_2.selector("& .menu-panel")
                        .props({
                        width: MenuPageComponent_1.menuPanelWidthCollapsed,
                        transition: "width " + MenuPageComponent_1.transitionMovementToExpandedDuration + "ms " + public_2.Css.transitions.easeOutQuad
                    })))
                        .sub(public_2.selector("&-done")
                        .sub(public_2.selector("& .menu-panel")
                        .props({
                        width: MenuPageComponent_1.menuPanelWidthCollapsed
                    }))
                        .sub(public_2.selector("& .menu-header")
                        .props({
                        opacity: 0
                    }))
                        .sub(public_2.selector("& .menutext")
                        .props({
                        opacity: 0
                    }))
                        .sub(public_2.selector("& .menuicon")
                        .props({
                        opacity: 0.3
                    })))
                ]
            })
        ], MenuPageComponent);
        return MenuPageComponent;
    }(public_6.ReactBaseComponent));
    exports.MenuPageComponent = MenuPageComponent;
});
//# sourceMappingURL=menupage.component.js.map