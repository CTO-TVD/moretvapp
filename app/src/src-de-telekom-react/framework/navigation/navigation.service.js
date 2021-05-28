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
define(["require", "exports", "underscore", "./interfaces", "src/src-de-telekom/public", "../../base/public", "./layermanager.service"], function (require, exports, _, interfaces_1, public_1, public_2, layermanager_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NavigationService = void 0;
    var NavigationService = (function (_super) {
        __extends(NavigationService, _super);
        function NavigationService() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.layers = Object.create(null);
            _this.rootService = public_2.ReactRootService.getInstance();
            return _this;
        }
        NavigationService_1 = NavigationService;
        NavigationService.buildNavigationIDs = function (id) {
            var ids = id.split("::");
            var temp = [];
            var lastPart;
            for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
                var part = ids_1[_i];
                var path = lastPart ? lastPart + "::" + part : part;
                lastPart = path;
                temp.push(path);
            }
            return temp;
        };
        NavigationService.broadcastMessage = function (rootService, data, layerData) {
            if (layerData.actionCallbacks.length > 0) {
                public_1.Logger.error(function (log) { return log(public_1.LogMsg("The actionCallbacks for the current layer contains elements but should be empty. This is an invalid state. Callbacks: '" + layerData.actionCallbacks.length + "'", NavigationService_1.TAG)); });
            }
            if (data.blurIDs) {
                rootService.broadcastMessage(interfaces_1.NavigationBroadcastTypes.Change, {
                    blurIDs: data.blurIDs,
                    focusIDs: data.focusIDs,
                    phase: interfaces_1.NavigationBroadcastPhase.blur,
                    registerActionCallback: function (actionCallback) { return layerData.actionCallbacks.push(actionCallback); },
                    itemIsInPath: NavigationService_1.itemIsInPath
                });
            }
            if (data.focusIDs) {
                rootService.broadcastMessage(interfaces_1.NavigationBroadcastTypes.Change, {
                    blurIDs: data.blurIDs,
                    focusIDs: data.focusIDs,
                    phase: interfaces_1.NavigationBroadcastPhase.focus,
                    registerActionCallback: function (actionCallback) { return layerData.actionCallbacks.push(actionCallback); },
                    itemIsInPath: NavigationService_1.itemIsInPath
                });
            }
            while (layerData.actionCallbacks.length > 0) {
                try {
                    layerData.actionCallbacks.shift()();
                }
                catch (e) {
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("Error while executing function from focus callback. Error: " + public_1.StringTools.dataStringify(e), NavigationService_1.TAG)); });
                }
            }
            while (layerData.focusCallbacks.length > 0) {
                try {
                    layerData.focusCallbacks.pop()();
                }
                catch (e) {
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("Error while executing delayed focus function. Error: " + public_1.StringTools.dataStringify(e), NavigationService_1.TAG)); });
                }
            }
        };
        NavigationService.onFocus = function (rootService, layerData, element) {
            if (layerData.element === element)
                return;
            clearTimeout(layerData.onBlurTimer);
            layerData.onBlurTimer = undefined;
            var data = {};
            if (layerData.element) {
                layerData.element.setElementState(interfaces_1.NavigationFocusStates.blur);
                data.blurIDs = NavigationService_1.buildNavigationIDs(layerData.element.itemId);
            }
            layerData.element = element;
            layerData.element.setElementState(interfaces_1.NavigationFocusStates.focus);
            data.focusIDs = NavigationService_1.buildNavigationIDs(layerData.element.itemId);
            if (data.blurIDs) {
                var newData_1;
                var intersect = _.intersection(data.blurIDs, data.focusIDs);
                if (data.blurIDs.length == data.focusIDs.length && data.blurIDs.length == intersect.length) {
                    public_1.Logger.warn(function (log) { return log(public_1.LogMsg("focus change was detected with the same ID for blur and focus. Path: " + data.focusIDs.join(" | "), NavigationService_1.TAG)); });
                    newData_1 = {
                        blurIDs: data.blurIDs,
                        focusIDs: data.focusIDs
                    };
                }
                else {
                    intersect.pop();
                    newData_1 = {
                        blurIDs: _.difference(data.blurIDs, intersect),
                        focusIDs: _.difference(data.focusIDs, intersect)
                    };
                }
                public_1.Logger.debug(function (log) {
                    log(public_1.LogMsg("onFocus (focus/change): ids -> " + newData_1.focusIDs.join(" | "), NavigationService_1.TAG));
                });
                NavigationService_1.broadcastMessage(rootService, newData_1, layerData);
            }
            else {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("onFocus (focus/new): ids -> " + data.focusIDs.join(" | "), NavigationService_1.TAG)); });
                NavigationService_1.broadcastMessage(rootService, data, layerData);
            }
        };
        NavigationService.onBlur = function (rootService, layerData, element) {
            if (layerData.element !== element)
                return;
            if (layerData.onBlurTimer) {
                public_1.Logger.warn(function (log) { return log(public_1.LogMsg("onBlur was called while an active onBlur process. This is an invalid state!", NavigationService_1.TAG)); });
                return;
            }
            layerData.onBlurTimer = setTimeout(function () {
                layerData.onBlurTimer = undefined;
                if (layerData.element) {
                    var data_1 = {
                        blurIDs: NavigationService_1.buildNavigationIDs(layerData.element.itemId)
                    };
                    layerData.element.setElementState(interfaces_1.NavigationFocusStates.blur);
                    layerData.element = undefined;
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("onBlur  (blur/lost): ids -> " + data_1.blurIDs.join(" | "), NavigationService_1.TAG)); });
                    NavigationService_1.broadcastMessage(rootService, data_1, layerData);
                }
                else {
                    public_1.Logger.warn(function (log) { return log(public_1.LogMsg("onBlur was called while there is no layer element. This is an invalid state!", NavigationService_1.TAG)); });
                }
            }, NavigationService_1.TIMEBLURFOCUS);
        };
        NavigationService.prototype.getLayerData = function (element) {
            var layerId = element.itemId.substr(0, element.itemId.indexOf(":"));
            return this.layers[layerId] || (this.layers[layerId] = { actionCallbacks: [], focusCallbacks: [] });
        };
        NavigationService.prototype.focusElement = function (element) {
            var _this = this;
            var layerData = this.getLayerData(element);
            if (layerData.actionCallbacks.length > 0) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("The focus framework is active for the current layer. The execution of the focus call is delayed. This could be a problem in the application logic.", NavigationService_1.TAG)); });
                layerData.focusCallbacks.push(function () { return NavigationService_1.onFocus(_this.rootService, layerData, element); });
            }
            else {
                NavigationService_1.onFocus(this.rootService, layerData, element);
            }
        };
        NavigationService.prototype.blurElement = function (element) {
            var layerData = this.getLayerData(element);
            NavigationService_1.onBlur(this.rootService, layerData, element);
        };
        NavigationService.prototype.focus = function (id) {
            this.rootService.broadcastMessage(interfaces_1.NavigationBroadcastTypes.Focus, {
                data: id
            });
        };
        NavigationService.prototype.getFocusElementId = function (refElementId) {
            var element = this.getFocusElement(refElementId);
            return element ? element.itemId : undefined;
        };
        NavigationService.prototype.getFocusElement = function (refElementId) {
            var layerId = refElementId ? refElementId.substr(0, refElementId.indexOf(":")) : layermanager_service_1.TVLayerManagerService.ROOTLAYER;
            var layerData = this.layers[layerId];
            return layerData === null || layerData === void 0 ? void 0 : layerData.element;
        };
        var NavigationService_1;
        NavigationService.TIMEBLURFOCUS = 100;
        NavigationService.itemIsInPath = function (navigationId, itemId) {
            var relevantPath = typeof navigationId === "string" ? navigationId : navigationId[navigationId.length - 1];
            var index = (relevantPath + "::").indexOf(itemId + "::");
            if (index > 0) {
                public_1.Logger.error(function (log) { return log(public_1.LogMsg("The itemIsInPath function calculates an invalid index. relevantPath: '" + relevantPath + "', itemId: '" + itemId + "'", NavigationService_1.TAG)); });
            }
            return index === 0;
        };
        NavigationService = NavigationService_1 = __decorate([
            public_1.logTag()
        ], NavigationService);
        return NavigationService;
    }(public_2.ReactBaseService));
    exports.NavigationService = NavigationService;
});
//# sourceMappingURL=navigation.service.js.map