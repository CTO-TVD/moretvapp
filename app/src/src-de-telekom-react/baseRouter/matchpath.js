define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.matchPath = void 0;
    var patternCache = Object.create(null);
    var cacheLimit = 10000;
    var cacheCount = 0;
    function generateRegex(options) {
        var key = options.path + "~" + options.exact + "~" + options.strict;
        if (patternCache[key])
            return patternCache[key];
        var escapedBrackets = "";
        if (options.path) {
            ("" + options.path).split("").forEach(function (c) {
                if (c === "(" || c === ")") {
                    escapedBrackets += "\\" + c;
                }
                else {
                    escapedBrackets += c;
                }
            });
        }
        var strRegEx = "^" + escapedBrackets;
        if (!options.strict) {
            if (strRegEx.lastIndexOf("/") == (strRegEx.length - 1))
                strRegEx += "?";
            else
                strRegEx += "/?";
        }
        if (options.exact) {
            strRegEx += "$";
        }
        cacheCount++;
        if (cacheCount < cacheLimit)
            return patternCache[key] = new RegExp(strRegEx);
        return new RegExp(strRegEx);
    }
    function matchPath(pathname, options) {
        var localPath = options.path && (public_1.Guard.isString(options.path) ? options.path : options.path.pathname) || "/";
        var localOptions = { path: localPath, exact: options.exact || false, strict: options.strict || false };
        if (!generateRegex(localOptions).test(pathname))
            return undefined;
        return {
            isExact: localOptions.path === pathname,
            path: localOptions.path,
            url: pathname
        };
    }
    exports.matchPath = matchPath;
});
//# sourceMappingURL=matchpath.js.map