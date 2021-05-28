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
define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.keyframe = exports.selector = exports.declaration = exports.CssRgbaColor = exports.CssKeyframe = exports.CssSelector = exports.CssUnitValue = exports.CssStringValue = exports.CssConfiguration = exports.CssClassNames = exports.CssDeclaration = exports.CssFunctions = void 0;
    var PrefixTypes;
    (function (PrefixTypes) {
        PrefixTypes[PrefixTypes["None"] = 0] = "None";
        PrefixTypes[PrefixTypes["Default"] = 1] = "Default";
        PrefixTypes[PrefixTypes["Webkit"] = 2] = "Webkit";
        PrefixTypes[PrefixTypes["IE"] = 4] = "IE";
    })(PrefixTypes || (PrefixTypes = {}));
    var CssFunctions = (function () {
        function CssFunctions() {
        }
        CssFunctions.initFunctions = function () {
            var resolution = public_1.Configuration.instance ? (public_1.Configuration.instance.resolution || "1080p") : "1080p";
            switch (resolution) {
                case "720p":
                    CssFunctions.functions = {
                        scale: function (fhd) { return Math.round(fhd * 2 / 3); },
                        scaleBack: function (fhd) { return Math.round(fhd * 3 / 2); }
                    };
                    break;
                case "1080p":
                    CssFunctions.functions = {
                        scale: function (fhd) { return Math.round(fhd); },
                        scaleBack: function (fhd) { return Math.round(fhd); }
                    };
                    break;
                case "2160p":
                    CssFunctions.functions = {
                        scale: function (fhd) { return Math.round(fhd * 2); },
                        scaleBack: function (fhd) { return Math.round(fhd / 2); }
                    };
                    break;
                default:
                    CssFunctions.functions = {
                        scale: function (fhd) { return Math.round(fhd); },
                        scaleBack: function (fhd) { return Math.round(fhd); }
                    };
                    break;
            }
        };
        CssFunctions.add = function (style, callback) {
            if (!CssFunctions.styles[style]) {
                CssFunctions.appendStyle(callback(style));
                CssFunctions.styles[style] = true;
            }
            return style;
        };
        CssFunctions.scale = function (fhd) {
            if (!CssFunctions.functions) {
                CssFunctions.initFunctions();
            }
            return CssFunctions.functions.scale(fhd);
        };
        CssFunctions.scaleBack = function (fhd) {
            if (!CssFunctions.functions) {
                CssFunctions.initFunctions();
            }
            return CssFunctions.functions.scaleBack(fhd);
        };
        CssFunctions.appendStyle = function () {
            var style = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                style[_i] = arguments[_i];
            }
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = style.join("");
            if (document.head)
                document.head.appendChild(css);
        };
        CssFunctions.styles = Object.create(null);
        return CssFunctions;
    }());
    exports.CssFunctions = CssFunctions;
    var CssDeclaration = (function () {
        function CssDeclaration() {
            this.cssData = Object.create(null);
            this.config = CssConfiguration.config;
        }
        CssDeclaration.prototype.props = function (cssProps) {
            for (var propKey in cssProps) {
                var propValue = cssProps[propKey];
                if (public_1.Guard.isObject(propValue)) {
                    var propValueCast = propValue;
                    var important = propValueCast.important === true;
                    var autoscale = public_1.Guard.isBoolean(propValueCast.autoscale) ? propValueCast.autoscale : this.config.autoScale;
                    this.handleName(propKey, propValueCast.value, important, autoscale);
                }
                else {
                    this.handleName(propKey, propValue);
                }
            }
            return this;
        };
        CssDeclaration.prototype.get = function (cssName) {
            return this.handleName(cssName);
        };
        CssDeclaration.prototype.extend = function (declaration) {
            for (var key in declaration.cssData) {
                this.cssData[key] = declaration.cssData[key];
            }
            return this;
        };
        CssDeclaration.prototype.getDeclarationContent = function () {
            var result = "";
            for (var key in this.cssData) {
                var data = this.cssData[key];
                if (data)
                    result += "\t\t" + public_1.StringTools.convertToSnakeCase(key) + ": " + data.toString() + ";\n";
            }
            return result;
        };
        CssDeclaration.prototype.toString = function () {
            return this.getDeclarationContent();
        };
        CssDeclaration.prototype.toStyle = function () {
            var result = {};
            for (var key in this.cssData) {
                var data = this.cssData[key];
                if (data)
                    result[key] = data.toString();
            }
            return result;
        };
        CssDeclaration.prototype.handleName = function (cssName, cssValue, important, autoScale) {
            if (important === void 0) { important = false; }
            if (autoScale === void 0) { autoScale = this.config.autoScale; }
            var propConfig = CssDeclaration.cssPropConfig[cssName];
            var prefix = (propConfig === null || propConfig === void 0 ? void 0 : propConfig.prefix) || PrefixTypes.Default;
            if (public_1.Guard.isDefined(cssValue)) {
                if (public_1.Guard.isNumber(this.config.prefix)) {
                    if (this.config.prefix & prefix & PrefixTypes.Webkit) {
                        var propValue = this.handleValues((propConfig === null || propConfig === void 0 ? void 0 : propConfig.convert) ? propConfig.convert(cssValue, PrefixTypes.Webkit) : cssValue, propConfig === null || propConfig === void 0 ? void 0 : propConfig.unit, important, autoScale);
                        var cssKey = "Webkit" + public_1.StringTools.convertToCapitalize(cssName);
                        this.cssData[cssKey] = propValue;
                    }
                    if (this.config.prefix & prefix & PrefixTypes.IE) {
                        var propValue = this.handleValues((propConfig === null || propConfig === void 0 ? void 0 : propConfig.convert) ? propConfig.convert(cssValue, PrefixTypes.IE) : cssValue, propConfig === null || propConfig === void 0 ? void 0 : propConfig.unit, important, autoScale);
                        var cssKey = "Ms" + public_1.StringTools.convertToCapitalize(cssName);
                        this.cssData[cssKey] = propValue;
                    }
                    if (this.config.prefix & prefix & PrefixTypes.Default) {
                        var propValue = this.handleValues((propConfig === null || propConfig === void 0 ? void 0 : propConfig.convert) ? propConfig.convert(cssValue, PrefixTypes.Default) : cssValue, propConfig === null || propConfig === void 0 ? void 0 : propConfig.unit, important, autoScale);
                        var cssKey = cssName;
                        this.cssData[cssKey] = propValue;
                    }
                }
                return this;
            }
            else if (public_1.Guard.isNumber(this.config.prefix)) {
                if (this.config.prefix & prefix & PrefixTypes.Webkit) {
                    var cssValue_1 = this.cssData["Webkit" + public_1.StringTools.convertToCapitalize(cssName)];
                    if (cssValue_1)
                        return cssValue_1;
                }
                if (this.config.prefix & prefix & PrefixTypes.IE) {
                    var cssValue_2 = this.cssData["Ms" + public_1.StringTools.convertToCapitalize(cssName)];
                    if (cssValue_2)
                        return cssValue_2;
                }
                if (this.config.prefix & prefix & PrefixTypes.Default) {
                    var cssValue_3 = this.cssData[cssName];
                    if (cssValue_3)
                        return cssValue_3;
                }
            }
            return undefined;
        };
        CssDeclaration.prototype.handleValues = function (value, unit, important, autoScale) {
            if (typeof value === "undefined") {
                return undefined;
            }
            else if (typeof value === "number") {
                return new CssUnitValue(value, unit, important, autoScale);
            }
            else {
                return new CssStringValue(value, important);
            }
        };
        CssDeclaration.cssPropConfig = {
            alignItems: { prefix: PrefixTypes.Default | PrefixTypes.IE | PrefixTypes.Webkit },
            alignSelf: { prefix: PrefixTypes.Default | PrefixTypes.IE | PrefixTypes.Webkit },
            animation: { prefix: PrefixTypes.Default | PrefixTypes.IE | PrefixTypes.Webkit },
            animationDelay: { prefix: PrefixTypes.Default | PrefixTypes.IE | PrefixTypes.Webkit },
            animationTimingFunction: { prefix: PrefixTypes.Default | PrefixTypes.IE | PrefixTypes.Webkit },
            borderRadius: { unit: "px" },
            borderTopWidth: { unit: "px" },
            borderRightWidth: { unit: "px" },
            borderBottomWidth: { unit: "px" },
            borderLeftWidth: { unit: "px" },
            borderWidth: { unit: "px" },
            bottom: { unit: "px" },
            boxShadow: { unit: "px" },
            display: { convert: function (value) { return value === null || value === void 0 ? void 0 : value.replace(/^flex$/, "-webkit-flex"); } },
            filter: { prefix: PrefixTypes.Default | PrefixTypes.IE | PrefixTypes.Webkit },
            flex: { prefix: PrefixTypes.Default | PrefixTypes.IE | PrefixTypes.Webkit },
            flexDirection: { prefix: PrefixTypes.Default | PrefixTypes.IE | PrefixTypes.Webkit },
            flexGrow: { prefix: PrefixTypes.Default | PrefixTypes.IE | PrefixTypes.Webkit },
            flexShrink: { prefix: PrefixTypes.Default | PrefixTypes.IE | PrefixTypes.Webkit },
            flexWrap: { prefix: PrefixTypes.Default | PrefixTypes.IE | PrefixTypes.Webkit },
            fontSize: { unit: "px" },
            height: { unit: "px" },
            hyphens: { prefix: PrefixTypes.Default | PrefixTypes.IE | PrefixTypes.Webkit },
            justifyContent: { prefix: PrefixTypes.Default | PrefixTypes.IE | PrefixTypes.Webkit },
            left: { unit: "px" },
            lineHeight: { unit: "px" },
            margin: { unit: "px" },
            marginBottom: { unit: "px" },
            marginLeft: { unit: "px" },
            marginRight: { unit: "px" },
            marginTop: { unit: "px" },
            maxHeight: { unit: "px" },
            minHeight: { unit: "px" },
            maxWidth: { unit: "px" },
            minWidth: { unit: "px" },
            opacity: { convert: function (value) { return value === 0 ? 0.00001 : value === 1 ? 0.99999 : value; } },
            outlineWidth: { unit: "px" },
            outlineOffset: { unit: "px" },
            padding: { unit: "px" },
            paddingLeft: { unit: "px" },
            paddingRight: { unit: "px" },
            paddingBottom: { unit: "px" },
            paddingTop: { unit: "px" },
            right: { unit: "px" },
            top: { unit: "px" },
            transform: { prefix: PrefixTypes.Default | PrefixTypes.IE | PrefixTypes.Webkit },
            transformOrigin: { prefix: PrefixTypes.Default | PrefixTypes.IE | PrefixTypes.Webkit },
            transition: {
                prefix: PrefixTypes.Default | PrefixTypes.Webkit,
                convert: function (value, prefix) { return prefix === PrefixTypes.Webkit ? value === null || value === void 0 ? void 0 : value.replace(/transform/g, "-webkit-transform") : value; }
            },
            WebkitMarginAfter: { unit: "px" },
            WebkitMarginBefore: { unit: "px" },
            WebkitMarginStart: { unit: "px" },
            WebkitMarginEnd: { unit: "px" },
            WebkitPaddingStart: { unit: "px" },
            width: { unit: "px" }
        };
        return CssDeclaration;
    }());
    exports.CssDeclaration = CssDeclaration;
    var CssClassNames = (function () {
        function CssClassNames(baseClassName) {
            this.classNames = [];
            this.addClassName(baseClassName);
        }
        CssClassNames.prototype.addClassName = function (className) {
            this.classNames.push(className);
            return this;
        };
        CssClassNames.prototype.toString = function () {
            return this.classNames.join(" ");
        };
        return CssClassNames;
    }());
    exports.CssClassNames = CssClassNames;
    var CssConfiguration = (function () {
        function CssConfiguration() {
        }
        CssConfiguration.config = {
            autoScale: true,
            prefix: PrefixTypes.Default | PrefixTypes.Webkit
        };
        return CssConfiguration;
    }());
    exports.CssConfiguration = CssConfiguration;
    var CssStringValue = (function () {
        function CssStringValue(value, important) {
            this.value = value;
            this.important = important;
        }
        CssStringValue.prototype.getValueContent = function () {
            return this.value + (this.important ? " !important" : "");
        };
        CssStringValue.prototype.toString = function () {
            return this.getValueContent();
        };
        return CssStringValue;
    }());
    exports.CssStringValue = CssStringValue;
    var CssUnitValue = (function () {
        function CssUnitValue(value, unit, important, autoScale) {
            this.value = value;
            this.unit = unit;
            this.important = important;
            this.autoScale = autoScale;
        }
        CssUnitValue.prototype.getValueContent = function () {
            var unit = this.unit || "";
            if (this.autoScale && unit !== "%" && unit !== "") {
                return CssFunctions.scale(this.value) + unit + (this.important ? " !important" : "");
            }
            else {
                return this.value + unit + (this.important ? " !important" : "");
            }
        };
        CssUnitValue.prototype.toString = function () {
            return this.getValueContent();
        };
        return CssUnitValue;
    }());
    exports.CssUnitValue = CssUnitValue;
    var CssSelector = (function (_super) {
        __extends(CssSelector, _super);
        function CssSelector(selectors) {
            var _this = _super.call(this) || this;
            _this.subClasses = [];
            _this.selectors = [];
            for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
                var selector1 = selectors_1[_i];
                for (var _a = 0, _b = selector1.split(","); _a < _b.length; _a++) {
                    var selector2 = _b[_a];
                    _this.selectors.push(selector2.trim());
                }
            }
            return _this;
        }
        CssSelector.prototype.sub = function (subSelector) {
            if (Array.isArray(subSelector)) {
                for (var _i = 0, subSelector_1 = subSelector; _i < subSelector_1.length; _i++) {
                    var selector_1 = subSelector_1[_i];
                    this.subClasses.push(selector_1);
                }
            }
            else {
                this.subClasses.push(subSelector);
            }
            return this;
        };
        CssSelector.prototype.processSubClasses = function (currentResult) {
            var newSelectors = [];
            for (var _i = 0, _a = this.subClasses; _i < _a.length; _i++) {
                var subSelector = _a[_i];
                var newSelector = [];
                for (var _b = 0, _c = this.selectors; _b < _c.length; _b++) {
                    var sel = _c[_b];
                    for (var _d = 0, _e = subSelector.selectors; _d < _e.length; _d++) {
                        var sub = _e[_d];
                        newSelector.push(sub.indexOf("&") == -1 ? sel + " " + sub : sub.replace("&", sel));
                    }
                }
                var newSelectorData = new CssSelector(newSelector);
                newSelectorData.config = subSelector.config;
                newSelectorData.cssData = subSelector.cssData;
                for (var _f = 0, _g = subSelector.subClasses; _f < _g.length; _f++) {
                    var sub = _g[_f];
                    newSelectorData.sub(sub);
                }
                newSelectors.push(newSelectorData);
            }
            currentResult.push(this);
            for (var _h = 0, newSelectors_1 = newSelectors; _h < newSelectors_1.length; _h++) {
                var subSelector = newSelectors_1[_h];
                subSelector.processSubClasses(currentResult);
            }
            return currentResult;
        };
        CssSelector.prototype.getSelectorContent = function () {
            var content = this.getDeclarationContent();
            return content ? "\n\t" + this.selectors.join(", ") + " {\n" + content + "\t}\n" : "";
        };
        CssSelector.prototype.toString = function () {
            var result = this.processSubClasses([]);
            return result.map(function (item) { return item.getSelectorContent(); }).join("");
        };
        return CssSelector;
    }(CssDeclaration));
    exports.CssSelector = CssSelector;
    var CssKeyframe = (function () {
        function CssKeyframe(identifier) {
            this.identifier = identifier;
            this.blockList = [];
            this.config = CssConfiguration.config;
        }
        CssKeyframe.prototype.block = function (selector, declaration) {
            if (typeof selector == "number") {
                if (selector < 0 || selector > 100)
                    throw new public_1.IllegalArgumentError("The selector is invalid for a keyframe block definition. Value: '" + selector + "'");
                this.blockList.push({ selector: Math.round(selector), declaration: declaration });
            }
            else {
                this.blockList.push({ selector: selector, declaration: declaration });
            }
            return this;
        };
        CssKeyframe.prototype.getKeyframeContent = function () {
            var blockContent = "";
            for (var _i = 0, _a = this.blockList; _i < _a.length; _i++) {
                var block = _a[_i];
                blockContent += "\t" + block.selector;
                if (typeof block.selector == "number")
                    blockContent += "%";
                blockContent += " {\n" + block.declaration + "\t}\n";
            }
            var content = this.identifier + " {\n" + blockContent + "}\n";
            if (public_1.Guard.isNumber(this.config.prefix)) {
                if (this.config.prefix & PrefixTypes.Webkit) {
                    return "\n@-webkit-keyframes " + content + "\n@keyframes " + content;
                }
            }
            return "\n@keyframes " + content;
        };
        CssKeyframe.prototype.toString = function () {
            return this.getKeyframeContent();
        };
        return CssKeyframe;
    }());
    exports.CssKeyframe = CssKeyframe;
    var CssRgbaColor = (function () {
        function CssRgbaColor(red, green, blue, alpha) {
            if (alpha === void 0) { alpha = 1; }
            this.red = red;
            this.green = green;
            this.blue = blue;
            this.alpha = alpha;
            if (red < 0 || red > 255)
                throw new public_1.IllegalArgumentError("The 'red' parameter is outside the valid range of 0 to 255. Value: '" + red + "'");
            if (green < 0 || green > 255)
                throw new public_1.IllegalArgumentError("The 'green' parameter is outside the valid range of 0 to 255. Value: '" + green + "'");
            if (blue < 0 || blue > 255)
                throw new public_1.IllegalArgumentError("The 'blue' parameter is outside the valid range of 0 to 255. Value: '" + blue + "'");
            if (alpha < 0 || alpha > 1)
                throw new public_1.IllegalArgumentError("The 'alpha' parameter is outside the valid range of 0 to 1. Value: '" + alpha + "'");
        }
        CssRgbaColor.prototype.toString = function () {
            return "rgba(" + this.red + ", " + this.green + ", " + this.blue + ", " + this.alpha + ")";
        };
        return CssRgbaColor;
    }());
    exports.CssRgbaColor = CssRgbaColor;
    function declaration() {
        return new CssDeclaration();
    }
    exports.declaration = declaration;
    function selector() {
        var selectors = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selectors[_i] = arguments[_i];
        }
        return new CssSelector(selectors);
    }
    exports.selector = selector;
    function keyframe(identifier) {
        return new CssKeyframe(identifier);
    }
    exports.keyframe = keyframe;
});
//# sourceMappingURL=css.base.js.map