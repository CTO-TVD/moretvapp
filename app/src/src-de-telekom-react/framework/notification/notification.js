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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../base/public", "react-transition-group", "../../filter/public", "./notification.service"], function (require, exports, React, public_1, public_2, public_3, react_transition_group_1, public_4, notification_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVNotificationComponent = void 0;
    var TVNotificationComponent = (function (_super) {
        __extends(TVNotificationComponent, _super);
        function TVNotificationComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.notifications = [];
            _this.currentCount = 0;
            _this.notificationService = notification_service_1.TVNotificationService.getInstance();
            _this.unregisterController = _this.notificationService.registerController(_this);
            _this.processNextItem(true);
            return _this;
        }
        TVNotificationComponent_1 = TVNotificationComponent;
        TVNotificationComponent.prototype.componentWillUnmount = function () {
            this.unregisterController();
        };
        TVNotificationComponent.prototype.onNewNotification = function () {
            this.processNextItem();
        };
        TVNotificationComponent.prototype.animationEvent = function (event, phase, notification) {
            var _this = this;
            if ((event == "leave") && (phase == "close")) {
                if (!notification.showAdditional)
                    this.currentCount--;
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("animationEvent: currentCount = " + _this.currentCount, TVNotificationComponent_1.TAG)); });
                setTimeout(function () { return notification.deferred.resolve(); }, 300);
            }
        };
        TVNotificationComponent.prototype.removeCurrentItem = function (notification) {
            this.notifications = this.notifications.filter(function (item) { return item !== notification; });
            this.animationEvent("leave", "close", notification);
        };
        TVNotificationComponent.prototype.triggerRemoveCurrentItem = function (notification) {
            this.removeCurrentItem(notification);
            this.setState({});
        };
        TVNotificationComponent.prototype.onExtendRemovingTime = function () {
            var _this = this;
            if (this.notifications.length == 1 && this.notificationService.getOptions().numberOfParallelNotifications == 1 && !this.notifications[0].showAdditional) {
                var notification_1 = this.notifications[0];
                clearTimeout(this.currentTimeout);
                this.currentTimeout = setTimeout(function () { return _this.triggerRemoveCurrentItem(notification_1); }, notification_1.timeout);
            }
        };
        TVNotificationComponent.prototype.processNextItem = function (initial) {
            var _this = this;
            if (initial === void 0) { initial = false; }
            var _loop_1 = function () {
                var notification = this_1.notificationService.getNextNotification();
                if (notification) {
                    notification.closeNotification = function () { return _this.triggerRemoveCurrentItem(notification); };
                    this_1.notifications = __spreadArrays(this_1.notifications, [notification]);
                    this_1.currentTimeout = setTimeout(function () { return _this.triggerRemoveCurrentItem(notification); }, notification.timeout);
                    if (initial)
                        this_1.state = {};
                    else
                        this_1.setState({});
                    if (!notification.showAdditional)
                        this_1.currentCount++;
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("processNextItem: currentCount = " + _this.currentCount, TVNotificationComponent_1.TAG)); });
                }
                else {
                    return "break";
                }
            };
            var this_1 = this;
            while (this.currentCount < this.notificationService.getOptions().numberOfParallelNotifications) {
                var state_1 = _loop_1();
                if (state_1 === "break")
                    break;
            }
        };
        TVNotificationComponent.prototype.onExited = function (node) {
            this.processNextItem();
        };
        TVNotificationComponent.prototype.render = function () {
            var _this = this;
            return React.createElement("div", { className: "" + this.ID },
                React.createElement(react_transition_group_1.TransitionGroup, null, this.notifications.map(function (notification, index) {
                    return React.createElement(react_transition_group_1.CSSTransition, { key: index, timeout: TVNotificationComponent_1.transitionFadeInDuration, classNames: "fadeIn", appear: true, onExited: function (node) { return _this.onExited(node); } },
                        React.createElement("div", { className: "container" },
                            React.createElement("div", { className: "icon " + notification.notificationType + (index == 0 ? " firstrow" : "") }),
                            React.createElement("div", { className: "label" + (index == 0 ? " firstrow" : "") }, public_4.Filter.join(_this, notification.message))));
                })));
        };
        var TVNotificationComponent_1;
        TVNotificationComponent.transitionFadeInDuration = 200;
        TVNotificationComponent = TVNotificationComponent_1 = __decorate([
            public_3.reactComponent({
                ID: "notification-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        position: "absolute",
                        left: "50%",
                        transform: "translate(-50%, 0%)"
                    })
                        .sub(public_1.selector("& .container")
                        .props({
                        willChange: "transform, opacity",
                        backgroundColor: public_1.Css.colors.global_background_notification,
                        maxWidth: 840,
                        color: public_1.Css.colors.A_CO_1
                    })
                        .extend(public_1.Css.fonts2.a_fo_b1_1_mixin)
                        .sub(public_1.selector("& .label")
                        .props({
                        marginLeft: 108,
                        paddingRight: 42,
                        paddingBottom: 28
                    })
                        .sub(public_1.selector("&.firstrow")
                        .props({
                        paddingTop: public_1.Css.dimensions.safeareaTop + 21
                    })))
                        .sub(public_1.selector("& .icon")
                        .props({
                        position: "relative",
                        top: 5,
                        left: 50,
                        verticalAlign: "middle",
                        float: "left"
                    })
                        .sub(public_1.selector("&.firstrow")
                        .props({
                        top: public_1.Css.dimensions.safeareaTop + 26
                    })))
                        .sub(public_1.selector(".success")
                        .extend(public_1.Css.sprites.A_IC_009_1_36x36_mixin))
                        .sub(public_1.selector(".info")
                        .extend(public_1.Css.sprites.A_IC_077_36x36_mixin))
                        .sub(public_1.selector(".error")
                        .extend(public_1.Css.sprites.A_IC_029_1_36x36_mixin))
                        .sub(public_1.selector(".unlocked")
                        .extend(public_1.Css.sprites.A_IC_046_5_36x36_mixin))
                        .sub(public_1.selector(".locked")
                        .extend(public_1.Css.sprites.A_IC_046_1_36x36_mixin))),
                    public_1.selector("& .fadeIn-enter")
                        .props({
                        transform: "translate(0,-" + public_1.Css.scale(50) + "px)",
                        opacity: 0
                    }),
                    public_1.selector("& .fadeIn-enter.fadeIn-enter-active")
                        .props({
                        opacity: 1,
                        transform: "translate(0,0)",
                        transition: "opacity " + TVNotificationComponent_1.transitionFadeInDuration + "ms " + public_1.Css.transitions.easeOutQuad + ", transform " + TVNotificationComponent_1.transitionFadeInDuration + "ms " + public_1.Css.transitions.easeOutQuad
                    }),
                    public_1.selector("& .fadeIn-appear")
                        .props({
                        transform: "translate(0,-" + public_1.Css.scale(50) + "px)",
                        opacity: 0
                    }),
                    public_1.selector("& .fadeIn-appear.fadeIn-appear-active")
                        .props({
                        opacity: 1,
                        transform: "translate(0,0)",
                        transition: "opacity " + TVNotificationComponent_1.transitionFadeInDuration + "ms " + public_1.Css.transitions.easeOutQuad + ", transform " + TVNotificationComponent_1.transitionFadeInDuration + "ms " + public_1.Css.transitions.easeOutQuad
                    }),
                    public_1.selector("& .fadeIn-exit")
                        .props({
                        transform: "translate(0,0)",
                        opacity: 1
                    }),
                    public_1.selector("& .fadeIn-exit.fadeIn-exit-active")
                        .props({
                        opacity: 0,
                        transform: "translate(0,-" + public_1.Css.scale(50) + "px)",
                        transition: "opacity " + TVNotificationComponent_1.transitionFadeInDuration + "ms " + public_1.Css.transitions.easeOutQuad + ", transform " + TVNotificationComponent_1.transitionFadeInDuration + "ms " + public_1.Css.transitions.easeOutQuad
                    })
                ]
            }),
            public_2.logTag()
        ], TVNotificationComponent);
        return TVNotificationComponent;
    }(public_3.ReactBaseComponent));
    exports.TVNotificationComponent = TVNotificationComponent;
});
//# sourceMappingURL=notification.js.map