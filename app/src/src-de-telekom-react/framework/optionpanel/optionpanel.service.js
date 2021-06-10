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
define(["require", "exports", "bluebird", "src/src-de-telekom/public", "../../base/public", "../navigation/public"], function (require, exports, bluebird, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVOptionPanelService = exports.OptionPanelServiceError = void 0;
    var OptionPanelServiceError = (function (_super) {
        __extends(OptionPanelServiceError, _super);
        function OptionPanelServiceError(message, resultId) {
            var _this = _super.call(this, message) || this;
            _this.resultId = resultId;
            _this.errorID = 0x602;
            return _this;
        }
        return OptionPanelServiceError;
    }(public_1.BaseError));
    exports.OptionPanelServiceError = OptionPanelServiceError;
    var TVOptionPanelService = (function (_super) {
        __extends(TVOptionPanelService, _super);
        function TVOptionPanelService() {
            var _this = _super.call(this) || this;
            _this.layerKey = "optionPanelLayer";
            _this.layerService = public_3.TVLayerManagerService.getInstance();
            _this.optionPanelProcess = bluebird.resolve();
            return _this;
        }
        TVOptionPanelService.prototype.isOptionPanelOpen = function () {
            return this.layerService.isVisible(this.layerKey);
        };
        TVOptionPanelService.prototype.getNextOptionPanel = function () {
            return this.currentOptionPanel;
        };
        TVOptionPanelService.prototype.createNewOptionPanelData = function (data) {
            var deferred = public_1.Defer.defer();
            var optionPanel = {
                model: data,
                isFinished: false,
                result: deferred.promise.finally(function () { return optionPanel.isFinished = true; }),
                abortOptionPanel: function (result) { var _a; return deferred.reject(new OptionPanelServiceError("OptionPanel aborted.", ((_a = result === null || result === void 0 ? void 0 : result.resultItem) === null || _a === void 0 ? void 0 : _a.id) || "")); },
                closeOptionPanelWithResult: function (result) { return deferred.resolve({ resultItem: result === null || result === void 0 ? void 0 : result.resultItem }); }
            };
            return optionPanel;
        };
        TVOptionPanelService.prototype.close = function () {
            this.layerService.hide(this.layerKey);
        };
        TVOptionPanelService.prototype.show = function (data) {
            var _this = this;
            var optionPanel = this.createNewOptionPanelData(data);
            var deferred = public_1.Defer.defer();
            this.optionPanelProcess = this.optionPanelProcess
                .then(function () {
                var funcCloseEvent = function (result, isSuccess) {
                    isSuccess ? deferred.resolve(result) : deferred.reject(result);
                };
                if (optionPanel.isFinished) {
                    return optionPanel.result
                        .then(function (result) { return funcCloseEvent(result, true); })
                        .catch(function (result) { return funcCloseEvent(result, false); });
                }
                else {
                    return bluebird.resolve()
                        .then(function () {
                        _this.currentOptionPanel = optionPanel;
                        _this.layerService.show(_this.layerKey);
                        return optionPanel.result;
                    })
                        .then(function (result) { return funcCloseEvent(result, true); })
                        .delay(500)
                        .catch(function (result) { return funcCloseEvent(result, false); })
                        .delay(350)
                        .finally(function () {
                        _this.currentOptionPanel = undefined;
                        _this.layerService.hide(_this.layerKey);
                    })
                        .delay(150);
                }
            })
                .catch(function (error) { });
            return {
                abortOptionPanel: function (result) { return optionPanel.abortOptionPanel(result); },
                closeOptionPanelWithResult: function (result) { return optionPanel.closeOptionPanelWithResult(result); },
                result: function (autoDisposeReference) {
                    if (autoDisposeReference) {
                        autoDisposeReference.onDestroy(function () { return optionPanel.abortOptionPanel({ resultItem: undefined }); });
                        optionPanel.result.catch(function () { });
                    }
                    return deferred.promise;
                }
            };
        };
        return TVOptionPanelService;
    }(public_2.ReactBaseService));
    exports.TVOptionPanelService = TVOptionPanelService;
});
//# sourceMappingURL=optionpanel.service.js.map