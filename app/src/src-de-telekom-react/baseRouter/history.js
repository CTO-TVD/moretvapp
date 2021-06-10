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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "./location", "../base/public"], function (require, exports, bluebird, public_1, location_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.History = void 0;
    var History = (function () {
        function History() {
            this.locations = [location_1.Location.createLocation({ pathname: "/" })];
            if (History_1.firstHistory) {
                History_1.firstHistory = false;
                try {
                    var hash = window.location.hash;
                    if (hash) {
                        var data = decodeURIComponent(hash.substr(1));
                        var urlData = JSON.parse(data);
                        this.locations.push(location_1.Location.createLocation({ pathname: urlData.path, data: urlData.data }));
                    }
                }
                catch (_a) { }
            }
        }
        History_1 = History;
        History.prototype.onChange = function (callback) {
            var _this = this;
            if (this.cbOnChange)
                throw new public_2.ReactRouterError("History can only be used by exact one <Router>");
            this.cbOnChange = callback;
            return function () {
                _this.cbOnChange = undefined;
            };
        };
        History.prototype.onSaveState = function (callback) {
            var _this = this;
            if (this.cbOnSaveState)
                throw new public_2.ReactRouterError("History can only be used by exact one <Router>");
            this.cbOnSaveState = callback;
            return function () {
                _this.cbOnSaveState = undefined;
            };
        };
        History.prototype.onCheck = function (callback) {
            var _this = this;
            if (this.cbOnCheck)
                throw new public_2.ReactRouterError("History can only be used by exact one <Router>");
            this.cbOnCheck = callback;
            return function () {
                _this.cbOnCheck = undefined;
            };
        };
        History.createHistory = function () {
            return new History_1();
        };
        Object.defineProperty(History.prototype, "location", {
            get: function () {
                return this.locations[this.locations.length - 1];
            },
            enumerable: false,
            configurable: true
        });
        History.prototype.startIntent = function (intent, options) {
            var _this = this;
            var localOptions = __assign({ type: "forward" }, options);
            if (this.intentQueue) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("startIntent has queued intent '" + JSON.stringify(intent) + "' and options '" + JSON.stringify(localOptions) + "'", History_1.TAG)); });
                return this.intentQueue = this.intentQueue.then(function () { return _this.startIntent(intent, localOptions); });
            }
            if (!this.cbOnCheck)
                throw new public_2.ReactRouterError("History is not configured completely. Check callback functions.");
            this.locations = __spreadArrays(this.locations);
            var currentLocations = this.locations;
            var newLocations = this.createNewLocations(currentLocations, intent, localOptions);
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("startIntent starts intent '" + JSON.stringify(intent) + "' and options '" + JSON.stringify(localOptions) + "'", History_1.TAG)); });
            var checkData = { count: 0 };
            return this.cbOnCheck(newLocations[newLocations.length - 1], { priority: localOptions.priority || "normal" }, checkData)
                .then(function () {
                if (!_this.cbOnSaveState || !_this.cbOnChange)
                    throw new public_2.ReactRouterError("History is not configured completely. Check callback functions.");
                if (currentLocations !== _this.locations)
                    throw new public_2.ReactRouterError("Intent was aborted by a newer started intent.");
                if (checkData.count == 0)
                    throw new public_2.ReactRouterNoRouteError("Intent was aborted because there is no target route available.");
                if (currentLocations !== newLocations) {
                    if (localOptions.type === "forward")
                        _this.cbOnSaveState();
                    if (localOptions.type === "forward" && newLocations.length > 1) {
                        var previousLocation = newLocations[newLocations.length - 2];
                        previousLocation.isExitMarker = !!localOptions.exitMarker;
                        previousLocation.exitMarkerName = localOptions.exitMarkerName;
                    }
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("startIntent success: '" + currentLocations[currentLocations.length - 1] + "' --> '" + newLocations[newLocations.length - 1] + "'", History_1.TAG)); });
                    _this.locations = newLocations;
                    _this.intentQueue = bluebird.resolve();
                    var intentQueue = void 0;
                    try {
                        _this.cbOnChange();
                    }
                    finally {
                        intentQueue = _this.intentQueue;
                        _this.intentQueue = undefined;
                    }
                    public_1.Logger.debug(function () { return window.history.replaceState({}, History_1.TAG, "#" + encodeURIComponent(_this.location.toString())); });
                    return intentQueue.then(function () { return ({ hasChanges: true }); });
                }
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("startIntent success without changes.", History_1.TAG)); });
                return { hasChanges: false };
            })
                .catch(function (error) {
                if (error instanceof public_2.ReactRouterError || error instanceof public_2.ReactRouterNoRouteError) {
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("startIntent was aborted by error: '" + public_1.StringTools.dataStringify(error) + "'", History_1.TAG)); });
                }
                else {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("startIntent was aborted by error: '" + public_1.StringTools.dataStringify(error) + "'", History_1.TAG)); });
                }
                return bluebird.reject(error);
            });
        };
        History.prototype.createNewLocations = function (locations, intent, options) {
            var newLocations = locations;
            if (options.type === "forward") {
                if (intent && public_1.Guard.isString(intent.pathname)) {
                    newLocations = __spreadArrays(locations, [location_1.Location.createLocation(intent)]);
                }
            }
            else if (options.type === "replace") {
                var item = locations[locations.length - 1];
                newLocations = __spreadArrays(locations.slice(0, locations.length - 1), [location_1.Location.createLocation(intent, item)]);
            }
            else if (options.type === "backward") {
                if (locations.length > 1) {
                    var item = locations[locations.length - 2];
                    newLocations = __spreadArrays(locations.slice(0, locations.length - 2), [location_1.Location.createLocation(intent, item, { isBackNavigation: true })]);
                }
            }
            else if (options.type === "exit") {
                if (locations.length > 1) {
                    if (options.exitMarkerName) {
                        var exitLocations = locations.slice(0, locations.length - 1).filter(function (location) { return location.isExitMarker && location.exitMarkerName === options.exitMarkerName; });
                        if (exitLocations.length > 0) {
                            var exitPosition = locations.indexOf(exitLocations[exitLocations.length - 1]);
                            var item = locations[exitPosition];
                            newLocations = __spreadArrays(locations.slice(0, exitPosition), [location_1.Location.createLocation(intent, item, { isBackNavigation: true, isExitNavigation: true })]);
                        }
                    }
                    else {
                        var exitLocations = locations.slice(0, locations.length - 1).filter(function (location) { return location.isExitMarker; });
                        var exitPosition = exitLocations.length > 0 ? locations.indexOf(exitLocations[exitLocations.length - 1]) : 0;
                        var item = locations[exitPosition];
                        newLocations = __spreadArrays(locations.slice(0, exitPosition), [location_1.Location.createLocation(intent, item, { isBackNavigation: true, isExitNavigation: true })]);
                    }
                }
            }
            if (newLocations[0].pathname !== "/")
                throw new public_2.ReactRouterError("The base route cannot be overwritten with a new pathname. Consider 'routeService.setBasePath' as an alternative.");
            return newLocations;
        };
        var History_1;
        History.firstHistory = true;
        History = History_1 = __decorate([
            public_1.logTag()
        ], History);
        return History;
    }());
    exports.History = History;
});
//# sourceMappingURL=history.js.map