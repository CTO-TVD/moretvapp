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
define(["require", "exports", "../errorhandling/BaseError", "../typing/guard"], function (require, exports, BaseError_1, guard_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StringTools = void 0;
    var StringTools = (function () {
        function StringTools() {
        }
        StringTools.convertToSnakeCase = function (value, separator) {
            separator = separator || "-";
            return value.replace(this.SNAKE_CASE_REGEXP, function (letter) { return separator + letter.toLowerCase(); });
        };
        StringTools.convertToCamelCase = function (value) {
            return value.replace(this.DASH_LOWERCASE_REGEXP, (function (all, letter) { return letter.toUpperCase(); }));
        };
        StringTools.convertToCapitalize = function (value) {
            return value.replace(this.CAPITALIZE_REGEXP, (function (all, g1, g2) { return g1 + g2.toUpperCase(); }));
        };
        StringTools.dataStringify = function (data) {
            var result = "";
            if (data === undefined) {
                result = "<undefined>";
            }
            else if (data === null) {
                result = "<null>";
            }
            else if (typeof data === "string") {
                result = data;
            }
            else if (typeof data === "number") {
                result = data.toString();
            }
            else if (data instanceof BaseError_1.BaseError) {
                var additionalErrorCode = data.getAdditionalErrorCode() ? "additionalErrorCode: '" + data.getAdditionalErrorCode() + "'" : "";
                result = "name: '" + data.name + "' message: '" + data.message + "' " + additionalErrorCode + " stack: '" + data.stack + "'";
            }
            else if (data instanceof Error) {
                result = "name: '" + data.name + "' message: '" + data.message + "' stack: '" + data.stack + "'";
            }
            else if (typeof data === "function") {
                result = "[function displayname: '" + (data.displayName ? data.displayName : "") + "' name: '" + (data.name ? data.name : "") + "']";
            }
            else {
                try {
                    result = JSON.stringify(data);
                    if (!result || result == "{}") {
                        result = data.toString ? data.toString() : "";
                    }
                }
                catch (ex) {
                    result = data.toString ? data.toString() : "";
                }
            }
            return result;
        };
        StringTools.convertToHexString = function (value, length) {
            if (length === void 0) { length = 8; }
            return "0x" + (Array(length).join("0") + value.toString(16)).slice(-length).toUpperCase();
        };
        StringTools.stripWithoutWhitespace = function () {
            return "";
        };
        StringTools.stripWithWhitespace = function (str, start, end) {
            return str.slice(start, end).replace(/\S/g, " ");
        };
        StringTools.stripJsonComments = function (str, opts) {
            opts = __assign({ whitespace: false }, opts);
            var currentChar;
            var nextChar;
            var insideString = false;
            var insideComment = 0;
            var offset = 0;
            var ret = "";
            var strip = opts.whitespace === false ? StringTools.stripWithoutWhitespace : StringTools.stripWithWhitespace;
            for (var i = 0; i < str.length; i++) {
                currentChar = str[i];
                nextChar = str[i + 1];
                if (!insideComment && currentChar === '"') {
                    var escaped = str[i - 1] === "\\" && str[i - 2] !== "\\";
                    if (!escaped) {
                        insideString = !insideString;
                    }
                }
                if (insideString) {
                    continue;
                }
                if (!insideComment && currentChar + nextChar === "//") {
                    ret += str.slice(offset, i);
                    offset = i;
                    insideComment = StringTools.singleComment;
                    i++;
                }
                else if (insideComment === StringTools.singleComment && currentChar + nextChar === "\r\n") {
                    i++;
                    insideComment = 0;
                    ret += strip(str, offset, i);
                    offset = i;
                    continue;
                }
                else if (insideComment === StringTools.singleComment && currentChar === "\n") {
                    insideComment = 0;
                    ret += strip(str, offset, i);
                    offset = i;
                }
                else if (!insideComment && currentChar + nextChar === "/*") {
                    ret += str.slice(offset, i);
                    offset = i;
                    insideComment = StringTools.multiComment;
                    i++;
                    continue;
                }
                else if (insideComment === StringTools.multiComment && currentChar + nextChar === "*/") {
                    i++;
                    insideComment = 0;
                    ret += strip(str, offset, i + 1);
                    offset = i + 1;
                    continue;
                }
            }
            return ret + (insideComment ? strip(str.substr(offset)) : str.substr(offset));
        };
        StringTools.generateUUID = function (pattern) {
            if (pattern === void 0) { pattern = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"; }
            var d = new Date().getTime();
            var uuid = pattern.replace(/[xyXY]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                switch (c) {
                    case "x":
                        return r.toString(16);
                    case "y":
                        return (r & 0x3 | 0x8).toString(16);
                    case "X":
                        return r.toString(16).toUpperCase();
                    case "Y":
                        return (r & 0x3 | 0x8).toString(16).toUpperCase();
                    default:
                        return r.toString(16);
                }
            });
            return uuid;
        };
        StringTools.tryDecodeURIComponent = function (value) {
            if (guard_1.Guard.isUndefined(value)) {
                return value;
            }
            try {
                return decodeURIComponent(value);
            }
            catch (e) {
                return undefined;
            }
        };
        StringTools.escapeHtml = function (data) {
            if (!data)
                return data;
            return data.replace(/["'&<>]/g, function (c) {
                switch (c) {
                    case "\"": return "&quot;";
                    case "'": return "&#39;";
                    case "&": return "&amp;";
                    case "<": return "&lt;";
                    case ">": return "&gt;";
                    default: return c;
                }
            });
        };
        StringTools.decodeApostroph = function (data) {
            if (!data)
                return data;
            return data.replace(/&#39;/gi, "'");
        };
        StringTools.SNAKE_CASE_REGEXP = /[A-Z]/g;
        StringTools.DASH_LOWERCASE_REGEXP = /-([a-z])/g;
        StringTools.CAPITALIZE_REGEXP = /(^|\s)([a-z])/g;
        StringTools.singleComment = 1;
        StringTools.multiComment = 2;
        return StringTools;
    }());
    exports.StringTools = StringTools;
});
//# sourceMappingURL=StringTools.js.map