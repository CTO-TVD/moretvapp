var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public"], function (require, exports, bluebird, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FrontDisplayService = void 0;
    var FrontDisplayService = (function (_super) {
        __extends(FrontDisplayService, _super);
        function FrontDisplayService() {
            var _this = _super.call(this) || this;
            _this.isActive = false;
            _this.canDisplayText = public_3.ApplicationClient.frontDisplay.canDisplayText();
            if (!_this.canDisplayText) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("STB display does not support text.", FrontDisplayService_1.TAG)); });
                return _this;
            }
            public_3.ApplicationClient.frontDisplay.onFrontDisplayStringChanged(function (event) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Received FrontDisplayStringChanged event, displayString: " + event.DisplayText, FrontDisplayService_1.TAG)); });
            });
            _this.activate();
            return _this;
        }
        FrontDisplayService_1 = FrontDisplayService;
        FrontDisplayService.prototype.activate = function () {
            var _this = this;
            if (this.isActive) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("FrontDisplayService is already active.", FrontDisplayService_1.TAG)); });
                return;
            }
            if (!this.canDisplayText) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Unable to activate because STB display does not support text.", FrontDisplayService_1.TAG)); });
                return;
            }
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Activating FrontDisplayService", FrontDisplayService_1.TAG)); });
            public_3.ApplicationClient.frontDisplay.showTime()
                .then(function () { _this.isActive = true; })
                .catch(public_1.ErrorManager.catchFunc(FrontDisplayService_1, 0x01));
        };
        FrontDisplayService.prototype.showTime = function () {
            if (!this.isActive) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Unable to showTime because FrontDisplayService is not active.", FrontDisplayService_1.TAG)); });
                return;
            }
            if (!this.canDisplayText) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Unable to showTime because STB display does not support text.", FrontDisplayService_1.TAG)); });
                return;
            }
            public_3.ApplicationClient.frontDisplay.showTime()
                .catch(public_1.ErrorManager.catchFunc(FrontDisplayService_1, 0x04));
        };
        FrontDisplayService.prototype.deactivate = function () {
            if (!this.isActive) {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("FrontDisplayService is already in-active.", FrontDisplayService_1.TAG)); });
                return;
            }
            public_1.Logger.debug(function (log) { return log(public_1.LogMsg("De-Activating FrontDisplayService", FrontDisplayService_1.TAG)); });
            this.isActive = false;
        };
        FrontDisplayService.prototype.setDisplayString = function (displayString, durationMs, scroll, showTimeAfterDuration) {
            var _this = this;
            if (scroll === void 0) { scroll = false; }
            if (showTimeAfterDuration === void 0) { showTimeAfterDuration = true; }
            return new bluebird(function (resolve, reject) {
                if (!_this.isActive) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Unable to setDisplayString because FrontDisplayService is not active.", FrontDisplayService_1.TAG)); });
                    resolve();
                }
                if (!_this.canDisplayText) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Unable to setDisplayString because STB display does not support text.", FrontDisplayService_1.TAG)); });
                    resolve();
                }
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("setDisplayString: " + displayString, FrontDisplayService_1.TAG)); });
                clearTimeout(_this.timeoutHandle);
                public_3.ApplicationClient.frontDisplay.setDisplayString(displayString, scroll)
                    .then(function () { return public_3.ApplicationClient.frontDisplay.hideTime(); })
                    .then(function () {
                    if (durationMs > 0) {
                        _this.timeoutHandle = setTimeout(function () {
                            if (showTimeAfterDuration) {
                                public_3.ApplicationClient.frontDisplay.showTime();
                            }
                            resolve();
                        }, durationMs);
                    }
                    else {
                        resolve();
                    }
                });
            });
        };
        var FrontDisplayService_1;
        FrontDisplayService.classID = 0x728;
        FrontDisplayService = FrontDisplayService_1 = __decorate([
            public_1.logTag()
        ], FrontDisplayService);
        return FrontDisplayService;
    }(public_2.ReactBaseService));
    exports.FrontDisplayService = FrontDisplayService;
});
//# sourceMappingURL=frontdisplay.service.js.map