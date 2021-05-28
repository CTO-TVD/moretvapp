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
define(["require", "exports", "src/src-de-telekom/public", "../base/reactBaseError"], function (require, exports, public_1, reactBaseError_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Location = void 0;
    var Location = (function () {
        function Location(locationToClone) {
            if (locationToClone) {
                this.internalId = locationToClone.id;
                this.internalPathname = locationToClone.pathname;
                this.internalState = locationToClone.state;
                this.internalIsBackNavigation = locationToClone.isBackNavigation;
                this.internalIsExitNavigation = locationToClone.isExitNavigation;
                this.internalIsExitMarker = locationToClone.isExitMarker;
                this.internalExitMarkerName = locationToClone.exitMarkerName;
                this.internalIntent = Location.cloneIntent(locationToClone.intent);
            }
            else {
                this.internalId = Location.globalId++;
                this.internalIsBackNavigation = false;
                this.internalIsExitNavigation = false;
                this.internalIsExitMarker = false;
            }
        }
        Object.defineProperty(Location.prototype, "id", {
            get: function () {
                return this.internalId;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Location.prototype, "pathname", {
            get: function () {
                if (this.internalPathname === undefined)
                    throw new reactBaseError_1.ReactRouterError("The internalPathname must be defined.");
                return this.internalPathname;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Location.prototype, "intent", {
            get: function () {
                if (!this.internalIntent)
                    throw new reactBaseError_1.ReactRouterError("The internalIntent must be defined.");
                return this.internalIntent;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Location.prototype, "isBackNavigation", {
            get: function () {
                return this.internalIsBackNavigation;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Location.prototype, "isExitNavigation", {
            get: function () {
                return this.internalIsExitNavigation;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Location.prototype, "isExitMarker", {
            get: function () {
                return this.internalIsExitMarker;
            },
            set: function (isExitMarker) {
                this.internalIsExitMarker = isExitMarker;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Location.prototype, "exitMarkerName", {
            get: function () {
                return this.internalExitMarkerName;
            },
            set: function (exitMarkerName) {
                this.internalExitMarkerName = exitMarkerName;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Location.prototype, "state", {
            get: function () {
                return this.internalState;
            },
            set: function (state) {
                this.internalState = state && JSON.parse(JSON.stringify(state));
            },
            enumerable: false,
            configurable: true
        });
        Location.prototype.toString = function () {
            return JSON.stringify({ id: this.id, path: this.intent.pathname, isBackNavigation: this.isBackNavigation, isExitMarker: this.isExitMarker });
        };
        Location.cloneIntent = function (intent) {
            var clone = { pathname: intent.pathname };
            if (public_1.Guard.isDefined(intent.data)) {
                if (public_1.Guard.isPureObject(intent.data)) {
                    clone.data = JSON.parse(JSON.stringify(intent.data));
                }
                else {
                    throw new reactBaseError_1.ReactRouterError("Datatype is not valid for the IIntent.");
                }
            }
            return clone;
        };
        Location.createLocation = function (intent, location, options) {
            if (options === void 0) { options = {}; }
            var intentClone = intent && Location.cloneIntent(intent);
            var locationClone = new Location(location);
            if (intentClone) {
                if (intentClone.pathname)
                    locationClone.internalPathname = intentClone.pathname;
                if (locationClone.internalIntent) {
                    if (locationClone.internalIntent.data || intentClone.data) {
                        locationClone.internalIntent.data = __assign(__assign({}, locationClone.internalIntent.data), intentClone.data);
                    }
                }
                else {
                    locationClone.internalIntent = intentClone;
                }
                locationClone.internalIntent.pathname = locationClone.internalPathname;
            }
            locationClone.internalIsBackNavigation = !!options.isBackNavigation;
            locationClone.internalIsExitNavigation = !!options.isExitNavigation;
            return locationClone;
        };
        Location.globalId = 0;
        return Location;
    }());
    exports.Location = Location;
});
//# sourceMappingURL=location.js.map