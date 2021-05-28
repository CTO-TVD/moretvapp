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
define(["require", "exports", "src/src-de-telekom/public", "rxjs/operators", "rxjs", "src/src-de-telekom-style/public", "../../base/public", "../navigation/public", "src/src-de-telekom/rxjs/operators"], function (require, exports, public_1, operators_1, rxjs_1, public_2, public_3, public_4, operators_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoteService = void 0;
    var RemoteService = (function (_super) {
        __extends(RemoteService, _super);
        function RemoteService() {
            var _this = _super.call(this) || this;
            _this.autocloseRemoteInteractionLayerBusyIndicatorMs = 7 * 1000;
            _this.positiveConfirmationTimeoutMs = 5300;
            _this.notifyOperator = function () {
                var lastTimeStamp;
                return rxjs_1.pipe(operators_1.filter(function (item) { return !(public_1.Guard.isNumber(lastTimeStamp) && public_1.Guard.isNumber(item.timeStampMs) && lastTimeStamp > item.timeStampMs); }), operators_1.switchMap(function (item) {
                    var data = __assign(__assign({}, item), { timeout: public_1.Guard.isNumber(item.timeout) ? item.timeout : _this.getOptions().delay });
                    lastTimeStamp = item.timeStampMs;
                    public_4.TVLayerManagerService.getInstance().show(RemoteService_1.layerKey, data);
                    var timeout = data.isBusy ? _this.autocloseRemoteInteractionLayerBusyIndicatorMs : data.confirmationType == "positive" ? _this.positiveConfirmationTimeoutMs : data.timeout;
                    return rxjs_1.timer(timeout);
                }), operators_1.mergeMap(function () {
                    public_4.TVLayerManagerService.getInstance().show(RemoteService_1.layerKey, undefined);
                    return rxjs_1.timer(public_2.Css.transitions.shortMs);
                }), operators_1.tap(function () { return RemoteService_1.getInstance().hideLayer(); }), operators_1.finalize(function () {
                    RemoteService_1.getInstance().hideLayer();
                }), operators_2.initialize(function () { return public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Initialize for notify operator.", RemoteService_1.TAG)); }); }));
            };
            _this.setOptions({ delay: 5000 });
            return _this;
        }
        RemoteService_1 = RemoteService;
        RemoteService.prototype.setOptions = function (options) {
            this.options = options;
        };
        RemoteService.prototype.getOptions = function () {
            return this.options;
        };
        RemoteService.prototype.fadeOutLayer = function () {
            if (this.isLayerVisible()) {
                public_4.TVLayerManagerService.getInstance().show(RemoteService_1.layerKey, undefined);
            }
        };
        RemoteService.prototype.hideLayer = function () {
            public_4.TVLayerManagerService.getInstance().hide(RemoteService_1.layerKey);
        };
        RemoteService.prototype.isLayerVisible = function () {
            return public_4.TVLayerManagerService.getInstance().isVisible(RemoteService_1.layerKey);
        };
        var RemoteService_1;
        RemoteService.layerKey = "remoteLayer";
        RemoteService = RemoteService_1 = __decorate([
            public_1.logTag()
        ], RemoteService);
        return RemoteService;
    }(public_3.ReactBaseService));
    exports.RemoteService = RemoteService;
});
//# sourceMappingURL=remote.service.js.map