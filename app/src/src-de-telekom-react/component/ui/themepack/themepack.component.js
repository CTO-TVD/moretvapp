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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "src/src-de-telekom/public", "../../../base/public", "./themepack_constants", "../button/button2.component", "../button/imagebutton2lines.component", "../button/tabbutton.component"], function (require, exports, React, public_1, public_2, public_3, themepack_constants_1, button2_component_1, imagebutton2lines_component_1, tabbutton_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TvThemepack = void 0;
    var TvThemepack = (function (_super) {
        __extends(TvThemepack, _super);
        function TvThemepack() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TvThemepack_1 = TvThemepack;
        TvThemepack.prototype.shouldComponentUpdate = function (nextProps) {
            return nextProps.data != this.props.data;
        };
        TvThemepack.resolveColor = function (data, colorKey) {
            if (!data || !data.colors) {
                return undefined;
            }
            var colorValue;
            if (Array.isArray(colorKey)) {
                for (var _i = 0, colorKey_1 = colorKey; _i < colorKey_1.length; _i++) {
                    var key = colorKey_1[_i];
                    colorValue = data.colors.get(key);
                    if (colorValue) {
                        break;
                    }
                }
            }
            else {
                colorValue = data.colors.get(colorKey);
            }
            if (colorValue) {
                return public_2.ColorHelper.argbHexToRgbaString(colorValue);
            }
            return undefined;
        };
        TvThemepack.getBackgroundColor = function (data, colorKey, elements) {
            var rgba = this.resolveColor(data, colorKey);
            if (rgba && elements && elements.length > 0) {
                return elements
                    .map(function (k) { return "." + themepack_constants_1.TvThemepackKeys.CSSROOT + " " + k; })
                    .join(",\n")
                    + (" { background-color: " + rgba + " !important; } ");
            }
            return undefined;
        };
        TvThemepack.prototype.getStyles = function (data) {
            if (!data) {
                return "";
            }
            var styles = [];
            styles.push(TvThemepack_1.getBackgroundColor(data, themepack_constants_1.TvThemepackKeys.focusColor, [
                public_1.Css.contentStates.FOCUSED + " ." + button2_component_1.TVButtonOneLineIconOnlyComponent.ID,
                public_1.Css.contentStates.FOCUSED + " ." + imagebutton2lines_component_1.TVImageButton2LinesAndTextComponent.ID,
                public_1.Css.contentStates.FOCUSED + " ." + tabbutton_component_1.TVTabButtonComponent.ID
            ]));
            return styles.filter(public_2.Guard.isDefined).join("\n");
        };
        TvThemepack.prototype.render = function () {
            var styles = this.getStyles(this.props.data);
            return React.createElement("style", { type: "text/css" }, styles);
        };
        var TvThemepack_1;
        __decorate([
            public_2.Memoize.decorator()
        ], TvThemepack.prototype, "getStyles", null);
        TvThemepack = TvThemepack_1 = __decorate([
            public_3.reactComponent({
                ID: "themepack-component"
            })
        ], TvThemepack);
        return TvThemepack;
    }(public_3.ReactBaseComponent));
    exports.TvThemepack = TvThemepack;
});
//# sourceMappingURL=themepack.component.js.map