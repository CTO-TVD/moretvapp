var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "../backend/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FrontDisplay = exports.FrontDisplaySymbol = void 0;
    var FrontDisplaySymbol;
    (function (FrontDisplaySymbol) {
        FrontDisplaySymbol[FrontDisplaySymbol["Tv"] = 0] = "Tv";
        FrontDisplaySymbol[FrontDisplaySymbol["Radio"] = 1] = "Radio";
        FrontDisplaySymbol[FrontDisplaySymbol["Scramble"] = 2] = "Scramble";
    })(FrontDisplaySymbol = exports.FrontDisplaySymbol || (exports.FrontDisplaySymbol = {}));
    var FrontDisplay = (function () {
        function FrontDisplay() {
        }
        FrontDisplay_1 = FrontDisplay;
        FrontDisplay.canDisplayText = function () {
            return (FrontDisplay_1.getCapabilities() & public_2.ServiceClientContextZac.instance.zacAPI.System.FrontDisplay.CAP_DISPLAYTEXT) > 0;
        };
        FrontDisplay.getCapabilities = function () {
            var frontDisplay = public_2.ServiceClientZac.getFrontDisplay(public_2.ServiceClientContextZac.instance);
            var capabilities = frontDisplay.object.GetCapabilities();
            public_1.Logger.debug(function (log) {
                log(public_1.LogMsg("CAP_DISPLAY4x7SEG: " + frontDisplay.object.CAP_DISPLAY4x7SEG, FrontDisplay_1.TAG));
                log(public_1.LogMsg("CAP_DISPLAYLED: " + frontDisplay.object.CAP_DISPLAYLED, FrontDisplay_1.TAG));
                log(public_1.LogMsg("CAP_DISPLAYTEXT: " + frontDisplay.object.CAP_DISPLAYTEXT, FrontDisplay_1.TAG));
                log(public_1.LogMsg("Capabilities value: " + capabilities, FrontDisplay_1.TAG));
            });
            return capabilities;
        };
        FrontDisplay.hideTime = function () {
            return public_2.ServiceClientZac.evaluateZacResponse(function () { return public_2.ServiceClientZac.getFrontDisplay(public_2.ServiceClientContextZac.instance).object.ShowTime(false); });
        };
        FrontDisplay.onFrontDisplayStringChanged = function (evtHandlerFunction) {
            return public_2.ServiceClientZac.getFrontDisplay(public_2.ServiceClientContextZac.instance).events.onFrontDisplayStringChanged(evtHandlerFunction);
        };
        FrontDisplay.setDisplayString = function (displayString, scroll) {
            return public_2.ServiceClientZac.evaluateZacResponse(function () { return public_2.ServiceClientZac.getFrontDisplay(public_2.ServiceClientContextZac.instance).object.SetString(displayString, scroll); });
        };
        FrontDisplay.setSymbol = function (symbol, active) {
            var frontDisplay = public_2.ServiceClientZac.getFrontDisplay(public_2.ServiceClientContextZac.instance);
            var zacSymbol;
            switch (symbol) {
                case FrontDisplaySymbol.Tv:
                    zacSymbol = frontDisplay.object.SYMBOL_TV;
                    break;
                case FrontDisplaySymbol.Radio:
                    zacSymbol = frontDisplay.object.SYMBOL_RADIO;
                    break;
                case FrontDisplaySymbol.Scramble:
                    zacSymbol = frontDisplay.object.SYMBOL_SCRAMBLE;
                    break;
            }
            return public_2.ServiceClientZac.evaluateZacResponse(function () { return frontDisplay.object.SetSymbol(zacSymbol, active); });
        };
        FrontDisplay.showTime = function () {
            return public_2.ServiceClientZac.evaluateZacResponse(function () { return public_2.ServiceClientZac.getFrontDisplay(public_2.ServiceClientContextZac.instance).object.ShowTime(true); });
        };
        var FrontDisplay_1;
        FrontDisplay = FrontDisplay_1 = __decorate([
            public_1.logTag()
        ], FrontDisplay);
        return FrontDisplay;
    }());
    exports.FrontDisplay = FrontDisplay;
});
//# sourceMappingURL=applicationclient.frontdisplay.js.map