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
    exports.ParagraphClass = void 0;
    var ParagraphClass = (function () {
        function ParagraphClass() {
        }
        Object.defineProperty(ParagraphClass, "class", {
            get: function () {
                return new CommonParagraph();
            },
            enumerable: false,
            configurable: true
        });
        return ParagraphClass;
    }());
    exports.ParagraphClass = ParagraphClass;
    var CommonParagraph = (function (_super) {
        __extends(CommonParagraph, _super);
        function CommonParagraph() {
            return _super.call(this, public_1.Css.add("paragraph", function (style) { return public_1.selector("." + style)
                .sub(public_1.selector("&.font-b1-2")
                .extend(public_1.Css.fonts2.a_fo_b1_2_mixin)
                .sub(public_1.selector("&.margin-standard")
                .props({
                marginBottom: 48
            }))
                .sub(public_1.selector("&.margin-to-controls")
                .props({
                marginBottom: 39
            })))
                .sub(public_1.selector("&.font-b1-1")
                .extend(public_1.Css.fonts2.a_fo_b1_1_mixin)
                .sub(public_1.selector("&.margin-standard")
                .props({
                marginBottom: 48
            }))
                .sub(public_1.selector("&.margin-to-controls")
                .props({
                marginBottom: 39
            })))
                .sub(public_1.selector("&.width1")
                .props({
                width: 1032
            }))
                .sub(public_1.selector("&.width2")
                .props({
                width: 1176
            }))
                .sub(public_1.selector("&.width3")
                .props({
                width: 1200
            }))
                .sub(public_1.selector("&.margin-standard")
                .props({
                marginBottom: 48
            }))
                .sub(public_1.selector("&.margin-to-h3")
                .props({
                marginBottom: 50
            }))
                .sub(public_1.selector("&.margin-to-controls")
                .props({
                marginBottom: 40
            }))
                .sub(public_1.selector("&.margin-to-controls-2")
                .props({
                marginBottom: 48
            }))
                .sub(public_1.selector("&.margin-to-controls-3")
                .props({
                marginBottom: 58
            }))
                .sub(public_1.selector("&.margin-to-controls-4")
                .props({
                marginBottom: 66
            }))
                .sub(public_1.selector("&.margin-to-controls-5")
                .props({
                marginBottom: 24
            }))
                .sub(public_1.selector("&.margin-to-controls-6")
                .props({
                marginBottom: 44
            }))
                .sub(public_1.selector("&.margin-to-controls-7")
                .props({
                marginBottom: 18
            }))
                .sub(public_1.selector("&.margin-to-controls-8")
                .props({
                marginBottom: 46
            }))
                .sub(public_1.selector("&.margin-to-controls-9")
                .props({
                marginBottom: 62
            }))
                .sub(public_1.selector("&.margin-to-controls-10")
                .props({
                marginBottom: 73
            }))
                .sub(public_1.selector("&.margin-to-controls-11")
                .props({
                marginBottom: 36
            }))
                .sub(public_1.selector("&.margin-to-controls-12")
                .props({
                marginBottom: 12
            }))
                .sub(public_1.selector("&.margin-to-controls-13")
                .props({
                marginBottom: 32
            })); })) || this;
        }
        Object.defineProperty(CommonParagraph.prototype, "fontb1_2", {
            get: function () {
                return this.addClassName("font-b1-2");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "fontb1_1", {
            get: function () {
                return this.addClassName("font-b1-1");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "width1", {
            get: function () {
                return this.addClassName("width1");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "width2", {
            get: function () {
                return this.addClassName("width2");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "width3", {
            get: function () {
                return this.addClassName("width3");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "marginStandard", {
            get: function () {
                return this.addClassName("margin-standard");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "marginToControls", {
            get: function () {
                return this.addClassName("margin-to-controls");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "marginToh3", {
            get: function () {
                return this.addClassName("margin-to-h3");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "marginToControls2", {
            get: function () {
                return this.addClassName("margin-to-controls-2");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "marginToControls3", {
            get: function () {
                return this.addClassName("margin-to-controls-3");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "marginToControls4", {
            get: function () {
                return this.addClassName("margin-to-controls-4");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "marginToControls5", {
            get: function () {
                return this.addClassName("margin-to-controls-5");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "marginToControls6", {
            get: function () {
                return this.addClassName("margin-to-controls-6");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "marginToControls7", {
            get: function () {
                return this.addClassName("margin-to-controls-7");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "marginToControls8", {
            get: function () {
                return this.addClassName("margin-to-controls-8");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "marginToControls9", {
            get: function () {
                return this.addClassName("margin-to-controls-9");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "marginToControls10", {
            get: function () {
                return this.addClassName("margin-to-controls-10");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "marginToControls12", {
            get: function () {
                return this.addClassName("margin-to-controls-12");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "marginToControls11", {
            get: function () {
                return this.addClassName("margin-to-controls-11");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CommonParagraph.prototype, "marginToControls13", {
            get: function () {
                return this.addClassName("margin-to-controls-13");
            },
            enumerable: false,
            configurable: true
        });
        return CommonParagraph;
    }(public_1.CssClassNames));
});
//# sourceMappingURL=textblock.js.map