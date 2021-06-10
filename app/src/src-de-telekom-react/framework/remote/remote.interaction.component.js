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
define(["require", "exports", "react", "react-transition-group", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../base/public", "../../component/ui/busyindicator/busyindicator.component"], function (require, exports, React, react_transition_group_1, public_1, public_2, public_3, busyindicator_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoteInteractionComponent = void 0;
    var RemoteInteractionComponent = (function (_super) {
        __extends(RemoteInteractionComponent, _super);
        function RemoteInteractionComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RemoteInteractionComponent_1 = RemoteInteractionComponent;
        RemoteInteractionComponent.prototype.determineProcessingIconClassNames = function (icon) {
            var styles = ["dttv-icon"];
            if (icon === "voicecloud") {
                styles.push("processing-icon");
                styles.push(public_1.Css.sprites.A_IC_208_144x144);
            }
            return styles.join(" ");
        };
        RemoteInteractionComponent.prototype.determineUserTextClassNames = function (systemText, userText, confirmationType) {
            var styles = ["text", "singleline-ellipsis", "userText", "lowerTextLine"];
            if (public_2.Guard.isNonEmptyString(userText) && public_2.Guard.isNonEmptyString(systemText)) {
                styles.push("offset");
            }
            switch (confirmationType) {
                case "negative": {
                    styles.push("negativeConfirmation");
                    break;
                }
                case "neutral": {
                    styles.push("neutralConfirmation");
                    break;
                }
                case "positive": {
                    styles.push("positiveConfirmation");
                    break;
                }
            }
            return styles.join(" ");
        };
        Object.defineProperty(RemoteInteractionComponent, "negativeConfirmationAnimation", {
            get: function () {
                var name = "shaking-text";
                return public_1.Css.add(name, function () { return public_1.keyframe(name)
                    .block(0, public_1.declaration()
                    .props({
                    transform: "translateX(0)",
                    opacity: 1
                }))
                    .block(5, public_1.declaration()
                    .props({
                    opacity: .67
                }))
                    .block(20, public_1.declaration()
                    .props({
                    transform: "translateX(3px)",
                    opacity: .67
                }))
                    .block(40, public_1.declaration()
                    .props({
                    transform: "translateX(0)",
                    opacity: .5
                }))
                    .block(60, public_1.declaration()
                    .props({
                    transform: "translateX(-3px)",
                    opacity: .62
                }))
                    .block(80, public_1.declaration()
                    .props({
                    transform: "translateX(3px)",
                    opacity: .88
                }))
                    .block(100, public_1.declaration()
                    .props({
                    transform: "translateX(0)",
                    opacity: 1
                })); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RemoteInteractionComponent, "neutralConfirmationAnimation", {
            get: function () {
                var name = "jumping-text";
                return public_1.Css.add(name, function () { return public_1.keyframe(name)
                    .block(0, public_1.declaration()
                    .props({
                    transform: "translateY(0)",
                    opacity: 1
                }))
                    .block(5, public_1.declaration()
                    .props({
                    opacity: .5
                }))
                    .block(25, public_1.declaration()
                    .props({
                    transform: "translateY(-4px)",
                    opacity: .5
                }))
                    .block(50, public_1.declaration()
                    .props({
                    transform: "translateY(-20px)",
                    opacity: 1
                }))
                    .block(75, public_1.declaration()
                    .props({
                    transform: "translateY(-20px)",
                    opacity: 1
                }))
                    .block(100, public_1.declaration()
                    .props({
                    transform: "translateY(0)",
                    opacity: 1
                })); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(RemoteInteractionComponent, "positiveConfirmationAnimation", {
            get: function () {
                var name = "fadeout-text";
                return public_1.Css.add(name, function () { return public_1.keyframe(name)
                    .block(0, public_1.declaration()
                    .props({
                    transform: "translateY(0)",
                    opacity: 1
                }))
                    .block(5, public_1.declaration()
                    .props({
                    opacity: .5
                }))
                    .block(20, public_1.declaration()
                    .props({
                    transform: "translateY(6px)",
                    opacity: .5
                }))
                    .block(40, public_1.declaration()
                    .props({
                    transform: "translateY(-28px)",
                    opacity: 1
                }))
                    .block(60, public_1.declaration()
                    .props({
                    transform: "translateY(-28px)",
                    opacity: 1
                }))
                    .block(80, public_1.declaration()
                    .props({
                    transform: "translateY(18px)",
                    opacity: 0
                }))
                    .block(100, public_1.declaration()
                    .props({
                    transform: "translateY(32px)",
                    opacity: 0
                })); });
            },
            enumerable: false,
            configurable: true
        });
        RemoteInteractionComponent.prototype.onExited = function (node) {
            this.setState({ backgroundClosed: true });
        };
        RemoteInteractionComponent.prototype.render = function () {
            var _this = this;
            var _a, _b;
            var isVisible = public_2.Guard.isDefined(this.props.notification);
            var _c = __assign({}, this.props.notification), confirmationType = _c.confirmationType, isBusy = _c.isBusy, systemText = _c.systemText, userText = _c.userText, icon = _c.icon;
            return React.createElement("div", { className: "" + this.ID },
                !((_a = this.state) === null || _a === void 0 ? void 0 : _a.backgroundClosed) &&
                    React.createElement(react_transition_group_1.CSSTransition, { timeout: public_1.Css.transitions.shortMs, onExited: function (node) { return _this.onExited(node); }, classNames: "fade", in: isVisible, appear: true },
                        React.createElement("div", { className: "background" })),
                React.createElement(react_transition_group_1.SwitchTransition, null,
                    React.createElement(react_transition_group_1.CSSTransition, { key: "" + isVisible, timeout: { appear: public_1.Css.transitions.middleMs, exit: public_1.Css.transitions.middleMs }, classNames: "componentAnimation", in: isVisible, appear: true, addEndListener: function (node, done) { return node.addEventListener("transitionend", done, false); } },
                        React.createElement("div", { className: "container" }, ((_b = this.props.notification) === null || _b === void 0 ? void 0 : _b.isBusy) ? null : React.createElement(React.Fragment, null,
                            React.createElement(react_transition_group_1.SwitchTransition, null,
                                React.createElement(react_transition_group_1.CSSTransition, { key: "" + userText, timeout: { appear: public_1.Css.transitions.middleMs, enter: public_2.Guard.isNonEmptyString(systemText) ? 0 : public_1.Css.transitions.middleMs }, classNames: "textAnimation", in: public_2.Guard.isNonEmptyString(userText), appear: true, exit: false, addEndListener: function (node, done) { return node.addEventListener("transitionend", done, false); } },
                                    React.createElement("div", { className: this.determineUserTextClassNames(systemText, userText, confirmationType) }, userText))),
                            React.createElement(react_transition_group_1.SwitchTransition, null,
                                React.createElement(react_transition_group_1.CSSTransition, { key: "" + systemText, timeout: { appear: public_1.Css.transitions.shortMs, enter: public_1.Css.transitions.shortMs }, classNames: "textAnimation", in: public_2.Guard.isNonEmptyString(systemText), appear: true, exit: false, addEndListener: function (node, done) { return node.addEventListener("transitionend", done, false); } },
                                    React.createElement("div", { className: ["text", "singleline-ellipsis", "systemText", "lowerTextLine"].join(" ") }, systemText))))))),
                React.createElement(react_transition_group_1.CSSTransition, { timeout: 10000, classNames: "busyAnimation", appear: true, in: isBusy, addEndListener: function (node, done) { return node.addEventListener("transitionend", done, false); } },
                    React.createElement("div", { className: "busyContainer" },
                        React.createElement(busyindicator_component_1.BusyIndicatorComponent, { isBusy: isBusy ? isBusy : false, size: "small", closeDelay: 800, delay: 0 }))),
                React.createElement(react_transition_group_1.SwitchTransition, null,
                    React.createElement(react_transition_group_1.CSSTransition, { key: isVisible + "-" + icon, timeout: { appear: public_1.Css.transitions.middleMs, enter: public_1.Css.transitions.middleMs, exit: public_2.Guard.isNonEmptyString(icon) ? public_1.Css.transitions.middleMs : 0 }, classNames: "processingIconAnimation", in: public_2.Guard.isNonEmptyString(icon), appear: true, addEndListener: function (node, done) { return node.addEventListener("transitionend", done, false); } },
                        React.createElement("div", { className: this.determineProcessingIconClassNames(icon) }))));
        };
        var RemoteInteractionComponent_1;
        RemoteInteractionComponent.lowerTextLineBottom = 79;
        RemoteInteractionComponent.iconBottom = 40;
        RemoteInteractionComponent.iconSize = 144;
        RemoteInteractionComponent.busyIndicatorSize = 72;
        RemoteInteractionComponent.busyIndicatorBottom = 76;
        __decorate([
            public_2.Memoize.decorator()
        ], RemoteInteractionComponent.prototype, "determineProcessingIconClassNames", null);
        __decorate([
            public_2.Memoize.decorator()
        ], RemoteInteractionComponent.prototype, "determineUserTextClassNames", null);
        RemoteInteractionComponent = RemoteInteractionComponent_1 = __decorate([
            public_3.reactComponent({
                ID: "remote-interaction-component",
                styles: [
                    public_1.selector("&, & .container, & .background")
                        .props({
                        position: "absolute",
                        bottom: 0,
                        height: public_1.Css.dimensions.remoteInteractionLayerHeight,
                        width: public_1.Css.dimensions.screenWidth
                    }),
                    public_1.selector("& .background")
                        .props({
                        height: 714,
                        backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.00) 5%, rgba(0,0,0,1) 100%)"
                    }),
                    public_1.selector("& .processing-icon")
                        .props({
                        position: "absolute",
                        bottom: RemoteInteractionComponent_1.iconBottom,
                        left: "50%",
                        height: RemoteInteractionComponent_1.iconSize,
                        width: RemoteInteractionComponent_1.iconSize,
                        marginLeft: RemoteInteractionComponent_1.iconSize / 2 * -1,
                    }),
                    public_1.selector("& .busyContainer")
                        .props({
                        position: "absolute",
                        height: RemoteInteractionComponent_1.busyIndicatorSize,
                        width: RemoteInteractionComponent_1.busyIndicatorSize,
                        opacity: 0,
                        left: "50%",
                        marginLeft: RemoteInteractionComponent_1.busyIndicatorSize / 2 * -1,
                        bottom: RemoteInteractionComponent_1.busyIndicatorBottom,
                        willChange: "opacity, transform"
                    }),
                    public_1.selector("& .text")
                        .props({
                        position: "absolute",
                        width: 1662,
                        left: 129,
                        textAlign: "center"
                    }),
                    public_1.selector("& .lowerTextLine")
                        .props({
                        bottom: RemoteInteractionComponent_1.lowerTextLineBottom,
                        marginBottom: 0,
                        transition: "margin " + public_1.Css.transitions.middle + " ease"
                    })
                        .sub(public_1.selector("&.offset")
                        .props({
                        marginBottom: 48,
                        transition: "margin " + public_1.Css.transitions.middle + " ease",
                    })),
                    public_1.selector("& .userText")
                        .extend(public_1.Css.fonts2.a_fo_b1_3_mixin)
                        .sub(public_1.selector("&.negativeConfirmation")
                        .props({
                        animation: RemoteInteractionComponent_1.negativeConfirmationAnimation + " " + public_1.Css.transitions.middle
                    }))
                        .sub(public_1.selector("&.positiveConfirmation")
                        .props({
                        animation: RemoteInteractionComponent_1.positiveConfirmationAnimation + " " + public_1.Css.transitions.long,
                        animationFillMode: "forwards",
                        animationDelay: "5s"
                    }))
                        .sub(public_1.selector("&.neutralConfirmation")
                        .props({
                        animation: RemoteInteractionComponent_1.neutralConfirmationAnimation + " " + public_1.Css.transitions.short
                    })),
                    public_1.selector("& .systemText")
                        .extend(public_1.Css.fonts2.a_fo_b1_1_mixin),
                    public_1.selector("& .fade-appear")
                        .props({
                        opacity: 0
                    }),
                    public_1.selector("& .fade-appear.fade-appear-active")
                        .props({
                        opacity: 1,
                        transition: "opacity " + public_1.Css.transitions.short
                    }),
                    public_1.selector("& .fade-exit")
                        .props({
                        opacity: 1
                    }),
                    public_1.selector("& .fade-exit.fade-exit-active")
                        .props({
                        opacity: 0,
                        transition: "opacity " + public_1.Css.transitions.short
                    }),
                    public_1.selector("& .componentAnimation-appear")
                        .props({
                        opacity: 0
                    })
                        .sub(public_1.selector("&.componentAnimation-appear-active")
                        .props({
                        opacity: 1,
                        transition: "opacity " + public_1.Css.transitions.middle
                    })),
                    public_1.selector("& .componentAnimation-exit")
                        .sub(public_1.selector("& .lowerTextLine")
                        .props({
                        bottom: RemoteInteractionComponent_1.lowerTextLineBottom,
                        opacity: 1
                    }))
                        .sub(public_1.selector("&.componentAnimation-exit-active")
                        .sub(public_1.selector("& .lowerTextLine")
                        .props({
                        bottom: 27,
                        opacity: 0,
                        transition: "bottom " + public_1.Css.transitions.middle + " ease, opacity " + public_1.Css.transitions.middle
                    }))),
                    public_1.selector("& .processingIconAnimation-appear, & .processingIconAnimation-enter")
                        .props({
                        transform: "scale(0)",
                        opacity: 0
                    })
                        .sub(public_1.selector("&.processingIconAnimation-appear-active, &.processingIconAnimation-enter-active")
                        .props({
                        transform: "scale(1)",
                        opacity: 1,
                        transition: "transform " + public_1.Css.transitions.middle + " ease-out, opacity " + public_1.Css.transitions.veryshort + " linear"
                    })),
                    public_1.selector("& .processingIconAnimation-exit")
                        .props({
                        opacity: 1,
                        transform: "scale(1)"
                    })
                        .sub(public_1.selector("&.processingIconAnimation-exit-active")
                        .props({
                        opacity: 0,
                        transform: "scale(0)",
                        transition: "transform " + public_1.Css.transitions.middle + " ease-in, opacity " + public_1.Css.transitions.veryshort + " linear"
                    })),
                    public_1.selector("& .busyAnimation-enter-done")
                        .props({
                        opacity: 1,
                        transform: "scale(1)"
                    }),
                    public_1.selector("& .busyAnimation-appear, & .busyAnimation-enter")
                        .props({
                        opacity: 0,
                        transform: "scale(0)"
                    })
                        .sub(public_1.selector("&.busyAnimation-appear-active, &.busyAnimation-enter-active")
                        .props({
                        opacity: 1,
                        transform: "scale(1)",
                        transition: "transform " + public_1.Css.transitions.middle + " ease-out, opacity " + public_1.Css.transitions.middle,
                        transitionDelay: "0.2s",
                    })),
                    public_1.selector("& .busyAnimation-exit")
                        .props({
                        opacity: 1,
                        transform: "scale(1)"
                    })
                        .sub(public_1.selector("&.busyAnimation-exit-active")
                        .props({
                        opacity: 0,
                        transform: "scale(0)",
                        transition: "transform " + public_1.Css.transitions.middle + " ease-in, opacity " + public_1.Css.transitions.middle
                    })),
                    public_1.selector("& .textAnimation-appear, & .textAnimation-enter")
                        .props({
                        bottom: 27,
                        opacity: 0
                    })
                        .sub(public_1.selector("&.textAnimation-appear-active, &.textAnimation-enter-active")
                        .props({
                        bottom: RemoteInteractionComponent_1.lowerTextLineBottom,
                        opacity: 1,
                        transition: "bottom " + public_1.Css.transitions.middle + " ease, opacity " + public_1.Css.transitions.middle
                    })
                        .sub(public_1.selector("&.negativeConfirmation")
                        .props({
                        animation: "''"
                    })))
                ]
            }),
            public_2.logTag()
        ], RemoteInteractionComponent);
        return RemoteInteractionComponent;
    }(public_3.ReactBaseComponent));
    exports.RemoteInteractionComponent = RemoteInteractionComponent;
});
//# sourceMappingURL=remote.interaction.component.js.map