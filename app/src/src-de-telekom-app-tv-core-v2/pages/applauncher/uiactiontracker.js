var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UIActionTracker = exports.UIAction = void 0;
    var UIAction;
    (function (UIAction) {
        UIAction["DeepLink"] = "DeepLink";
        UIAction["Tile"] = "Tile";
        UIAction["StructuredGrid"] = "StructuredGrid";
        UIAction["UnstructuredGrid"] = "UnstructuredGrid";
    })(UIAction = exports.UIAction || (exports.UIAction = {}));
    var UIActionTracker = (function () {
        function UIActionTracker() {
            this.actions = [];
        }
        UIActionTracker_1 = UIActionTracker;
        UIActionTracker.getInstance = function () {
            if (!this.instance) {
                this.instance = new this();
            }
            return this.instance;
        };
        UIActionTracker.prototype.getLastAction = function () {
            var lastAction = this.actions[0];
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("getLastAction: '" + lastAction.action + "'", UIActionTracker_1.TAG)); });
            return lastAction;
        };
        UIActionTracker.prototype.track = function (uiAction, metadata) {
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Track UI action: " + uiAction, UIActionTracker_1.TAG)); });
            var action = { action: uiAction, metadata: metadata };
            this.actions.unshift(action);
            this.actions = this.actions.slice(0, 5);
        };
        var UIActionTracker_1;
        UIActionTracker = UIActionTracker_1 = __decorate([
            public_1.logTag()
        ], UIActionTracker);
        return UIActionTracker;
    }());
    exports.UIActionTracker = UIActionTracker;
});
//# sourceMappingURL=uiactiontracker.js.map