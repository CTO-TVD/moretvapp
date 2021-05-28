define(["require", "exports", "./css.base", "src/src-de-telekom/public"], function (require, exports, css_base_1, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CssFonts2 = void 0;
    var fileblob = public_1.Configuration.instance.fileblob || {};
    css_base_1.CssFunctions.appendStyle(css_base_1.selector("@font-face")
        .props({
        fontFamily: "'Tele-Neo'",
        fontStyle: "normal",
        fontWeight: 400,
        src: "url(" + (fileblob.TeleNeoRegular || "src/src-de-telekom-style/font/TeleNeoUI-Regular.woff") + ") format('woff')"
    }), css_base_1.selector("@font-face")
        .props({
        fontFamily: "'Tele-Neo'",
        fontStyle: "normal",
        fontWeight: 600,
        src: "url(" + (fileblob.TeleNeoMedium || "src/src-de-telekom-style/font/TeleNeoUI-Medium.woff") + ") format('woff')"
    }), css_base_1.selector("@font-face")
        .props({
        fontFamily: "'Tele-Neo'",
        fontStyle: "normal",
        fontWeight: 700,
        src: "url(" + (fileblob.TeleNeoBold || "src/src-de-telekom-style/font/TeleNeoUI-Bold.woff") + ") format('woff')"
    }), css_base_1.selector("@font-face")
        .props({
        fontFamily: "'Tele-Neo'",
        fontStyle: "normal",
        fontWeight: 900,
        src: "url(" + (fileblob.TeleNeoExtraBold || "src/src-de-telekom-style/font/TeleNeoUI-ExtraBold.woff") + ") format('woff')"
    }));
    var CssFonts2 = (function () {
        function CssFonts2() {
        }
        Object.defineProperty(CssFonts2, "a_fo_b1_1", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-b1-1-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_b1_1_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_b1_2", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-b1-2-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_b1_2_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_b1_3", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-b1-3-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_b1_3_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_b1_4", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-b1-4-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_b1_4_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_b2__", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-b2-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_b2___mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_b2_2", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-b2-2-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_b2_2__mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_b2_3", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-b2-3-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_b2_3__mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_h0", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-h0-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_h0_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_h1_1", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-h1-1-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_h1_1_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_h1_2", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-h1-2-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_h1_2_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_h2__", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-h2-1-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_h2___mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_h2_2", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-h2-2-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_h2_2__mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_h2_3", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-h2-3-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_h2_3__mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_h3_1", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-h3-1-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_h3_1_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_h3_2", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-h3-2-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_h3_2_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_h4", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-h4-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_h4_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_h5", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-h5-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_h5_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_h6", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-h6-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_h6_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_h6_1", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-h6-1-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_h6_1_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_h6_2", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-h6-2-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_h6_2_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_l1", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-l1-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_l1_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_l1_1", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-l1-1-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_l1_1_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CssFonts2, "a_fo_l1_2", {
            get: function () {
                return css_base_1.CssFunctions.add("a-fo-l1-2-ui20", function (style) { return css_base_1.selector("." + style).extend(CssFonts2.a_fo_l1_2_mixin); });
            },
            enumerable: false,
            configurable: true
        });
        CssFonts2.font_b1 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 36,
            lineHeight: 48,
            letterSpacing: "0.037em"
        });
        CssFonts2.font_b1_2 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 600,
            fontSize: 36,
            lineHeight: 42,
            letterSpacing: "0.05em"
        });
        CssFonts2.font_b1_3 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 700,
            fontSize: 36,
            lineHeight: 48,
            letterSpacing: "0.05em"
        });
        CssFonts2.font_b1_4 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 900,
            fontSize: 36,
            lineHeight: 48,
            letterSpacing: "0.05em",
            textTransform: "uppercase"
        });
        CssFonts2.font_b2 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 30,
            lineHeight: 40,
            letterSpacing: "0.07em"
        });
        CssFonts2.font_b2_2 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 30,
            lineHeight: 32,
            letterSpacing: "0.07em"
        });
        CssFonts2.font_b2_3 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 30,
            lineHeight: 30,
            letterSpacing: "0.07em"
        });
        CssFonts2.font_h0 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 96,
            lineHeight: 102,
            letterSpacing: "0.02em"
        });
        CssFonts2.font_h1_1 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 78,
            lineHeight: 84,
            letterSpacing: "0.02em"
        });
        CssFonts2.font_h1_2 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 700,
            fontSize: 78,
            lineHeight: 84,
            letterSpacing: "0.02em"
        });
        CssFonts2.font_h2__ = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 60,
            lineHeight: 66,
            letterSpacing: "0.025em"
        });
        CssFonts2.font_h2_2 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 600,
            fontSize: 60,
            lineHeight: 66,
            textTransform: "uppercase",
            letterSpacing: "0.02em"
        });
        CssFonts2.font_h2_3 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 42,
            lineHeight: 46,
            letterSpacing: "0.025em"
        });
        CssFonts2.font_h3_1 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 900,
            fontSize: 36,
            lineHeight: 42,
            letterSpacing: "0.09em",
            textTransform: "uppercase"
        });
        CssFonts2.font_h3_2 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 700,
            fontSize: 36,
            lineHeight: 42,
            letterSpacing: "0.085em",
            textTransform: "uppercase"
        });
        CssFonts2.font_h4 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 900,
            fontSize: 30,
            lineHeight: 36,
            letterSpacing: "0.1em",
            textTransform: "uppercase"
        });
        CssFonts2.font_h5 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 144,
            lineHeight: 96,
            letterSpacing: "0.01em"
        });
        CssFonts2.font_h6 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 48,
            lineHeight: 63,
            letterSpacing: "0.03em"
        });
        CssFonts2.font_h6_1 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 700,
            fontSize: 48,
            lineHeight: 63,
            letterSpacing: "0.03em"
        });
        CssFonts2.font_h6_2 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 48,
            lineHeight: 51,
            letterSpacing: "0.03em"
        });
        CssFonts2.font_l1 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 33,
            letterSpacing: "0.05em"
        });
        CssFonts2.font_l1_1 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 400,
            fontSize: 24,
            lineHeight: 33,
            textTransform: "uppercase",
            letterSpacing: "0.05em"
        });
        CssFonts2.font_l1_2 = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 900,
            fontSize: 24,
            lineHeight: 33,
            textTransform: "uppercase",
            letterSpacing: "0.05em"
        });
        CssFonts2.font_l1_labels_hints_deprecated_ = css_base_1.declaration()
            .props({
            fontFamily: "Tele-Neo",
            fontWeight: 600,
            fontSize: 27,
            lineHeight: 30,
            letterSpacing: "0.120em"
        });
        CssFonts2.a_fo_b1_1_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_b1);
        CssFonts2.a_fo_b1_2_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_b1_2);
        CssFonts2.a_fo_b1_3_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_b1_3);
        CssFonts2.a_fo_b1_4_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_b1_4);
        CssFonts2.a_fo_b2___mixin = css_base_1.declaration()
            .extend(CssFonts2.font_b2);
        CssFonts2.a_fo_b2_2__mixin = css_base_1.declaration()
            .extend(CssFonts2.font_b2_2);
        CssFonts2.a_fo_b2_3__mixin = css_base_1.declaration()
            .extend(CssFonts2.font_b2_3);
        CssFonts2.a_fo_h0_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_h0);
        CssFonts2.a_fo_h1_1_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_h1_1);
        CssFonts2.a_fo_h1_2_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_h1_2);
        CssFonts2.a_fo_h2___mixin = css_base_1.declaration()
            .extend(CssFonts2.font_h2__);
        CssFonts2.a_fo_h2_2__mixin = css_base_1.declaration()
            .extend(CssFonts2.font_h2_2);
        CssFonts2.a_fo_h2_3__mixin = css_base_1.declaration()
            .extend(CssFonts2.font_h2_3);
        CssFonts2.a_fo_h3_1_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_h3_1);
        CssFonts2.a_fo_h3_2_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_h3_2);
        CssFonts2.a_fo_h4_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_h4);
        CssFonts2.a_fo_h5_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_h5);
        CssFonts2.a_fo_h6_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_h6);
        CssFonts2.a_fo_h6_1_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_h6_1);
        CssFonts2.a_fo_h6_2_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_h6_2);
        CssFonts2.a_fo_l1_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_l1);
        CssFonts2.a_fo_l1_1_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_l1_1);
        CssFonts2.a_fo_l1_2_mixin = css_base_1.declaration()
            .extend(CssFonts2.font_l1_2);
        return CssFonts2;
    }());
    exports.CssFonts2 = CssFonts2;
});
//# sourceMappingURL=css.fontsneo2.js.map