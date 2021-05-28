define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NavigationFocusStates = exports.NavigationBroadcastPhase = exports.NavigationBroadcastTypes = void 0;
    var NavigationBroadcastTypes;
    (function (NavigationBroadcastTypes) {
        NavigationBroadcastTypes.Change = { ID: "keyNavigationOnChange" };
        NavigationBroadcastTypes.Clear = { ID: "keyNavigationClear" };
        NavigationBroadcastTypes.Focus = { ID: "keyNavigationFocus" };
    })(NavigationBroadcastTypes = exports.NavigationBroadcastTypes || (exports.NavigationBroadcastTypes = {}));
    var NavigationBroadcastPhase;
    (function (NavigationBroadcastPhase) {
        NavigationBroadcastPhase[NavigationBroadcastPhase["none"] = 0] = "none";
        NavigationBroadcastPhase[NavigationBroadcastPhase["blur"] = 1] = "blur";
        NavigationBroadcastPhase[NavigationBroadcastPhase["focus"] = 2] = "focus";
    })(NavigationBroadcastPhase = exports.NavigationBroadcastPhase || (exports.NavigationBroadcastPhase = {}));
    var NavigationFocusStates;
    (function (NavigationFocusStates) {
        NavigationFocusStates[NavigationFocusStates["blur"] = 0] = "blur";
        NavigationFocusStates[NavigationFocusStates["focus"] = 1] = "focus";
    })(NavigationFocusStates = exports.NavigationFocusStates || (exports.NavigationFocusStates = {}));
});
//# sourceMappingURL=interfaces.js.map