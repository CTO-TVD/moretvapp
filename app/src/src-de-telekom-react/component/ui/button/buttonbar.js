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
define(["require", "exports", "src/src-de-telekom-style/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HorizontalButtonBarId = exports.ControlBars = exports.ButtonBars = void 0;
    var ButtonBars = (function () {
        function ButtonBars() {
        }
        Object.defineProperty(ButtonBars, "horizontal", {
            get: function () {
                return new HorizontalButtonBar();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ButtonBars, "vertical", {
            get: function () {
                return new VerticalButtonBar();
            },
            enumerable: false,
            configurable: true
        });
        ButtonBars.tinyMargin = 3;
        return ButtonBars;
    }());
    exports.ButtonBars = ButtonBars;
    var ControlBars = (function () {
        function ControlBars() {
        }
        Object.defineProperty(ControlBars, "vertical", {
            get: function () {
                return new VerticalControlBar();
            },
            enumerable: false,
            configurable: true
        });
        return ControlBars;
    }());
    exports.ControlBars = ControlBars;
    var VerticalControlBar = (function (_super) {
        __extends(VerticalControlBar, _super);
        function VerticalControlBar() {
            return _super.call(this, public_1.Css.add("dttv-vertical-controlbar", function (style) { return public_1.selector("." + style)
                .props({
                fontSize: 0,
                display: "inline-block"
            })
                .sub(public_1.selector(".radiobutton")
                .props({
                textAlign: "left"
            }))
                .sub(public_1.selector("&.align-left")
                .props({
                marginLeft: -24
            }))
                .sub(public_1.selector("+ .dttv-vertical-controlbar")
                .props({
                marginTop: 26
            })); })) || this;
        }
        Object.defineProperty(VerticalControlBar.prototype, "alignLeft", {
            get: function () {
                return this.addClassName("align-left");
            },
            enumerable: false,
            configurable: true
        });
        return VerticalControlBar;
    }(public_1.CssClassNames));
    exports.HorizontalButtonBarId = { ID: "horizontal-buttonbar" };
    var HorizontalButtonBar = (function (_super) {
        __extends(HorizontalButtonBar, _super);
        function HorizontalButtonBar() {
            return _super.call(this, public_1.Css.add("horizontal-buttonbar", function (style) { return public_1.selector("." + style)
                .props({
                position: "relative"
            })
                .sub(public_1.selector("&.marginStandard")
                .props({
                marginBottom: 38
            }))
                .sub(public_1.selector("&.autostretch")
                .props({
                display: "flex"
            })
                .sub(public_1.selector("> .element-component")
                .props({
                width: "100%"
            })))
                .sub(public_1.selector("&.verticalAlignTop")
                .sub(public_1.selector("> .element-component")
                .props({
                verticalAlign: "top"
            })))
                .sub(public_1.selector("&.dttv-center")
                .props({
                textAlign: "center"
            }))
                .sub(public_1.selector("&.dttv-right")
                .props({
                textAlign: "right"
            }))
                .sub(public_1.selector("&.dttv-left")
                .props({
                textAlign: "left"
            }))
                .sub(public_1.selector("+ .horizontal-buttonbar")
                .props({
                marginTop: 14
            }))
                .sub(public_1.selector("> .element-component")
                .props({
                display: "inline-block",
                textAlign: "left"
            }))
                .sub(public_1.selector("> .element-component > .tv-button-component.secondary:not(.dttv-icon), > .element-component > .tv-button-component.primary:not(.dttv-icon)")
                .props({
                textAlign: "center"
            }))
                .sub(public_1.selector("> .element-component + .element-component")
                .props({
                marginLeft: 24
            }))
                .sub(public_1.selector("&.horizontalV20 > .element-component + .element-component")
                .props({
                marginLeft: 18
            }))
                .sub(public_1.selector("&.button20 > .element-component + .element-component")
                .props({
                marginLeft: 36
            }))
                .sub(public_1.selector("&.marginTiny > .element-component + .element-component")
                .props({
                marginLeft: ButtonBars.tinyMargin
            })); })) || this;
        }
        Object.defineProperty(HorizontalButtonBar.prototype, "autoStretch", {
            get: function () {
                return this.addClassName("autostretch");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HorizontalButtonBar.prototype, "center", {
            get: function () {
                return this.addClassName("dttv-center");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HorizontalButtonBar.prototype, "right", {
            get: function () {
                return this.addClassName("dttv-right");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HorizontalButtonBar.prototype, "left", {
            get: function () {
                return this.addClassName("dttv-left");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HorizontalButtonBar.prototype, "marginStandard", {
            get: function () {
                return this.addClassName("marginStandard");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HorizontalButtonBar.prototype, "marginTiny", {
            get: function () {
                return this.addClassName("marginTiny");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HorizontalButtonBar.prototype, "marginButton20", {
            get: function () {
                return this.addClassName("button20");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HorizontalButtonBar.prototype, "V20", {
            get: function () {
                return this.addClassName("horizontalV20");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(HorizontalButtonBar.prototype, "verticalAlignTop", {
            get: function () {
                return this.addClassName("verticalAlignTop");
            },
            enumerable: false,
            configurable: true
        });
        return HorizontalButtonBar;
    }(public_1.CssClassNames));
    var VerticalButtonBar = (function (_super) {
        __extends(VerticalButtonBar, _super);
        function VerticalButtonBar() {
            return _super.call(this, public_1.Css.add("vertical-buttonbar", function (style) { return public_1.selector("." + style)
                .props({
                display: "inline-block",
                position: "relative",
                verticalAlign: "top"
            })
                .sub(public_1.selector("+ .vertical-buttonbar")
                .props({
                marginLeft: 24
            }))
                .sub(public_1.selector("> .element-component")
                .props({
                textAlign: "left"
            }))
                .sub(public_1.selector("> .element-component + .element-component")
                .props({
                marginTop: 24
            })); })) || this;
        }
        return VerticalButtonBar;
    }(public_1.CssClassNames));
});
//# sourceMappingURL=buttonbar.js.map