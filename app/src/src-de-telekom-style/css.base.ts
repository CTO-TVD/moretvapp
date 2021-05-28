import * as CSS from "csstype";

import { Configuration, Guard, IllegalArgumentError, StringTools } from "src/src-de-telekom/public";

enum PrefixTypes {

    None = 0,
    Default = 1 << 0,
    Webkit = 1 << 1,
    IE = 1 << 2
}

export class CssFunctions {

    private static functions: {
        scale: (fhd: number) => number;
        scaleBack: (fhd: number) => number;
    };

    private static styles: { [key: string]: boolean } = Object.create(null);

    private static initFunctions() {

        const resolution = Configuration.instance ? (Configuration.instance.resolution || "1080p") : "1080p";

        switch (resolution) {

            case "720p":

                CssFunctions.functions = {
                    scale: fhd => Math.round(fhd * 2 / 3),
                    scaleBack: fhd => Math.round(fhd * 3 / 2)
                };

                break;

            case "1080p":

                CssFunctions.functions = {
                    scale: fhd => Math.round(fhd),
                    scaleBack: fhd => Math.round(fhd)
                };

                break;

            case "2160p":

                CssFunctions.functions = {
                    scale: fhd => Math.round(fhd * 2),
                    scaleBack: fhd => Math.round(fhd / 2)
                };

                break;

            default:

                CssFunctions.functions = {
                    scale: fhd => Math.round(fhd),
                    scaleBack: fhd => Math.round(fhd)
                };

                break;
        }
    }

    public static add(style: string, callback: (style: string) => CssDeclaration | CssKeyframe): string {

        if (!CssFunctions.styles[style]) {

            CssFunctions.appendStyle(callback(style));

            CssFunctions.styles[style] = true;
        }

        return style;
    }

    public static scale(fhd: number): number {

        if (!CssFunctions.functions) {

            CssFunctions.initFunctions();
        }

        return CssFunctions.functions.scale(fhd);
    }

    public static scaleBack(fhd: number): number {

        if (!CssFunctions.functions) {

            CssFunctions.initFunctions();
        }

        return CssFunctions.functions.scaleBack(fhd);
    }

    public static appendStyle(...style: (string | CssDeclaration | CssSelector | CssKeyframe)[]) {

        const css = document.createElement("style");

        css.type = "text/css";
        css.innerHTML = style.join("");

        if (document.head) document.head.appendChild(css);
    }
}

type CssPropertiesType = CSS.Properties<string | number> & {
    src?: string;
    WebkitMarginAfter?: string | number;
    WebkitMarginBefore?: string | number;
    WebkitMaskBoxImage?: string;
};

type CssPropertiesDataType = {
    [P in keyof CssPropertiesType]: CssPropertiesType[P] | { value: CssPropertiesType[P]; autoscale?: boolean; important?: boolean };
};

type CssPropertyNameType = keyof CssPropertiesType;

type CssPropertyUnit = "" | "%" | "px";

interface ICssPropConfig<T extends CssPropertyNameType> {

    prefix?: PrefixTypes;
    unit?: CssPropertyUnit;
    convert?: (value: CssPropertiesType[T], prefix: PrefixTypes) => CssPropertiesType[T];
}

export class CssDeclaration {

    protected cssData: { [key: string]: CssValueType } = Object.create(null);
    protected config = CssConfiguration.config;

    private static readonly cssPropConfig: { [key in CssPropertyNameType]?: ICssPropConfig<key> } = {

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
        display: { convert: value => value?.replace(/^flex$/, "-webkit-flex") },
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
        opacity: { convert: value => value === 0 ? 0.00001 : value === 1 ? 0.99999 : value },
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
            convert: (value, prefix) => prefix === PrefixTypes.Webkit ? value?.replace(/transform/g, "-webkit-transform") : value
        },
        WebkitMarginAfter: { unit: "px" },
        WebkitMarginBefore: { unit: "px" },
        WebkitMarginStart: { unit: "px" },
        WebkitMarginEnd: { unit: "px" },
        WebkitPaddingStart: { unit: "px" },
        width: { unit: "px" }
    };

    public props(cssProps: CssPropertiesDataType): this {

        for (const propKey in cssProps) {

            const propValue = cssProps[propKey as CssPropertyNameType];

            if (Guard.isObject(propValue)) {

                const propValueCast = propValue as any;

                const important = propValueCast.important === true;
                const autoscale = Guard.isBoolean(propValueCast.autoscale) ? propValueCast.autoscale : this.config.autoScale;

                this.handleName(propKey as CssPropertyNameType, propValueCast.value, important, autoscale);
            }
            else {

                this.handleName(propKey as CssPropertyNameType, propValue);
            }
        }

        return this;
    }

    public get(cssName: CssPropertyNameType): CssValueType {

        return this.handleName(cssName);
    }

    public extend(declaration: CssDeclaration): this {

        for (const key in declaration.cssData) {

            this.cssData[key] = declaration.cssData[key];
        }

        return this;
    }

    protected getDeclarationContent() {

        let result = "";

        for (const key in this.cssData) {

            const data = this.cssData[key];

            if (data) result += `\t\t${StringTools.convertToSnakeCase(key)}: ${data.toString()};\n`;
        }

        return result;
    }

    public toString() {

        return this.getDeclarationContent();
    }

    public toStyle() {

        const result = {};

        for (const key in this.cssData) {

            const data = this.cssData[key];

            if (data) result[key] = data.toString();
        }

        return result;
    }

    private handleName<T extends CssPropertyNameType>(cssName: T): CssValueType;
    private handleName<T extends CssPropertyNameType>(cssName: T, cssValue?: CssPropertiesType[T], important?: boolean, autoScale?: boolean): this;
    private handleName<T extends CssPropertyNameType>(cssName: T, cssValue?: CssPropertiesType[T], important = false, autoScale = this.config.autoScale): this | CssValueType {

        const propConfig = CssDeclaration.cssPropConfig[cssName];
        const prefix = propConfig?.prefix || PrefixTypes.Default;

        if (Guard.isDefined(cssValue)) {

            if (Guard.isNumber(this.config.prefix)) {

                if (this.config.prefix & prefix & PrefixTypes.Webkit) {

                    const propValue = this.handleValues(propConfig?.convert ? propConfig.convert(cssValue as any, PrefixTypes.Webkit) : cssValue, propConfig?.unit, important, autoScale);

                    const cssKey = "Webkit" + StringTools.convertToCapitalize(cssName);
                    this.cssData[cssKey] = propValue;
                }

                if (this.config.prefix & prefix & PrefixTypes.IE) {

                    const propValue = this.handleValues(propConfig?.convert ? propConfig.convert(cssValue as any, PrefixTypes.IE) : cssValue, propConfig?.unit, important, autoScale);

                    const cssKey = "Ms" + StringTools.convertToCapitalize(cssName);
                    this.cssData[cssKey] = propValue;
                }

                if (this.config.prefix & prefix & PrefixTypes.Default) {

                    const propValue = this.handleValues(propConfig?.convert ? propConfig.convert(cssValue as any, PrefixTypes.Default) : cssValue, propConfig?.unit, important, autoScale);

                    const cssKey = cssName;
                    this.cssData[cssKey] = propValue;
                }
            }

            return this;
        }
        else if (Guard.isNumber(this.config.prefix)) {

            if (this.config.prefix & prefix & PrefixTypes.Webkit) {

                const cssValue = this.cssData["Webkit" + StringTools.convertToCapitalize(cssName)];
                if (cssValue) return cssValue;
            }

            if (this.config.prefix & prefix & PrefixTypes.IE) {

                const cssValue = this.cssData["Ms" + StringTools.convertToCapitalize(cssName)];
                if (cssValue) return cssValue;
            }

            if (this.config.prefix & prefix & PrefixTypes.Default) {

                const cssValue = this.cssData[cssName];
                if (cssValue) return cssValue;
            }
        }

        return undefined;
    }

    private handleValues(value?: number | string, unit?: CssPropertyUnit, important?: boolean, autoScale?: boolean): CssValueType {

        if (typeof value === "undefined") {
            return undefined;
        }
        else if (typeof value === "number") {
            return new CssUnitValue(value, unit, important, autoScale);
        }
        else {
            return new CssStringValue(value, important);
        }
    }
}

export class CssClassNames {

    private classNames: string[] = [];

    public constructor(baseClassName: string) {

        this.addClassName(baseClassName);
    }

    protected addClassName(className: string) {

        this.classNames.push(className);

        return this;
    }

    public toString() {

        return this.classNames.join(" ");
    }
}

export interface ICssConfiguration {

    readonly autoScale?: boolean;
    readonly prefix?: number;
}

export class CssConfiguration {

    public static readonly config: ICssConfiguration = {
        autoScale: true,
        prefix: PrefixTypes.Default | PrefixTypes.Webkit
    };
}

export class CssStringValue {

    public constructor(public readonly value: string, public readonly important?: boolean) {
    }

    public getValueContent(): string {

        return this.value + (this.important ? " !important" : "");
    }

    public toString(): string {

        return this.getValueContent();
    }
}

export class CssUnitValue {

    public constructor(public readonly value: number, public readonly unit?: CssPropertyUnit, public readonly important?: boolean, public readonly autoScale?: boolean) {
    }

    public getValueContent(): string {

        const unit = this.unit || "";

        if (this.autoScale && unit !== "%" && unit !== "") {
            return CssFunctions.scale(this.value) + unit + (this.important ? " !important" : "");
        }
        else {
            return this.value + unit + (this.important ? " !important" : "");
        }
    }

    public toString(): string {

        return this.getValueContent();
    }
}

export type CssValueType = CssUnitValue | CssStringValue | undefined;

export class CssSelector extends CssDeclaration {

    private readonly selectors: string[];
    private readonly subClasses: CssSelector[] = [];

    public constructor(selectors: string[]) {

        super();

        this.selectors = [];

        for (const selector1 of selectors) {

            for (const selector2 of selector1.split(",")) {

                this.selectors.push(selector2.trim());
            }
        }
    }

    public sub(subSelector: CssSelector | CssSelector[]): this {

        if (Array.isArray(subSelector)) {

            for (const selector of subSelector) {
                this.subClasses.push(selector);
            }
        }
        else {
            this.subClasses.push(subSelector);
        }

        return this;
    }

    private processSubClasses(currentResult: CssSelector[]): CssSelector[] {

        const newSelectors: CssSelector[] = [];

        // build new sub classes with corrected selector path
        for (const subSelector of this.subClasses) {

            const newSelector: string[] = [];

            for (const sel of this.selectors) {

                for (const sub of subSelector.selectors) {

                    newSelector.push(sub.indexOf("&") == -1 ? `${sel} ${sub}` : sub.replace("&", sel));
                }
            }

            const newSelectorData = new CssSelector(newSelector);
            newSelectorData.config = subSelector.config;
            newSelectorData.cssData = subSelector.cssData;

            for (const sub of subSelector.subClasses) {

                newSelectorData.sub(sub);
            }

            newSelectors.push(newSelectorData);
        }

        currentResult.push(this);

        // process all sub classes
        for (const subSelector of newSelectors) {

            subSelector.processSubClasses(currentResult);
        }

        return currentResult;
    }

    private getSelectorContent() {

        const content = this.getDeclarationContent();

        return content ? `\n\t${this.selectors.join(", ")} {\n${content}\t}\n` : "";
    }

    public toString() {

        const result = this.processSubClasses([]);

        return result.map(item => item.getSelectorContent()).join("");
    }
}

type CssKeyframeSelector = number | "from" | "to";

export class CssKeyframe {

    private blockList: { selector: CssKeyframeSelector; declaration: CssDeclaration }[] = [];
    private config: ICssConfiguration;

    constructor(public identifier: string) {
        this.config = CssConfiguration.config;
    }

    public block(selector: CssKeyframeSelector, declaration: CssDeclaration) {

        if (typeof selector == "number") {

            if (selector < 0 || selector > 100) throw new IllegalArgumentError(`The selector is invalid for a keyframe block definition. Value: '${selector}'`);

            this.blockList.push({ selector: Math.round(selector), declaration: declaration });
        }
        else {

            this.blockList.push({ selector: selector, declaration: declaration });
        }

        return this;
    }

    public getKeyframeContent() {

        let blockContent = "";

        for (const block of this.blockList) {

            blockContent += `\t${block.selector}`;

            if (typeof block.selector == "number") blockContent += `%`;

            blockContent += ` {\n${block.declaration}\t}\n`;
        }

        const content = `${this.identifier} {\n${blockContent}}\n`;

        if (Guard.isNumber(this.config.prefix)) {

            if (this.config.prefix & PrefixTypes.Webkit) {

                return `\n@-webkit-keyframes ${content}\n@keyframes ${content}`;
            }
        }

        return `\n@keyframes ${content}`;
    }

    public toString() {

        return this.getKeyframeContent();
    }
}

export class CssRgbaColor {

    public constructor(public red: number, public green: number, public blue: number, public alpha = 1) {

        if (red < 0 || red > 255) throw new IllegalArgumentError(`The 'red' parameter is outside the valid range of 0 to 255. Value: '${red}'`);

        if (green < 0 || green > 255) throw new IllegalArgumentError(`The 'green' parameter is outside the valid range of 0 to 255. Value: '${green}'`);

        if (blue < 0 || blue > 255) throw new IllegalArgumentError(`The 'blue' parameter is outside the valid range of 0 to 255. Value: '${blue}'`);

        if (alpha < 0 || alpha > 1) throw new IllegalArgumentError(`The 'alpha' parameter is outside the valid range of 0 to 1. Value: '${alpha}'`);
    }

    public toString() {

        return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    }
}

export type CssColor = CssRgbaColor;

export function declaration(): CssDeclaration {

    return new CssDeclaration();
}

export function selector(...selectors: string[]): CssSelector {

    return new CssSelector(selectors);
}

export function keyframe(identifier: string): CssKeyframe {

    return new CssKeyframe(identifier);
}
