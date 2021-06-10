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
define(["require", "exports", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "src/src-de-telekom-tv-moretv/public", "src/src-de-telekom-app-tv-core-v2/public"], function (require, exports, public_1, public_2, mtv, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvTermsOfUseDialogWrapper = void 0;
    var MtvTermsOfUseDialogWrapper = (function (_super) {
        __extends(MtvTermsOfUseDialogWrapper, _super);
        function MtvTermsOfUseDialogWrapper(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = {
                prevProps: props,
                id: props.idObject ? props.idObject.id : "undefined"
            };
            return _this;
        }
        MtvTermsOfUseDialogWrapper_1 = MtvTermsOfUseDialogWrapper;
        MtvTermsOfUseDialogWrapper.prototype.componentWillUnmount = function () {
            if (this.termsOfUseDialog) {
                this.termsOfUseDialog.closeDialogWithResult({ resultId: "aborted" });
            }
        };
        MtvTermsOfUseDialogWrapper.getDerivedStateFromProps = function (nextProps, prevState) {
            return nextProps.idObject != prevState.prevProps.idObject
                ? { id: nextProps.idObject ? nextProps.idObject.id : -1, prevProps: nextProps }
                : { id: undefined, prevProps: nextProps };
        };
        MtvTermsOfUseDialogWrapper.prototype.componentDidUpdate = function () {
            if (this.state.id) {
                this.showTermsOfUse();
            }
        };
        MtvTermsOfUseDialogWrapper.prototype.showTermsOfUse = function () {
            var _this = this;
            mtv.ApplicationClient
                .getTermsOfUse(this.state.id)
                .then(function (termsOfUse) {
                var infoDialogData;
                if (termsOfUse) {
                    infoDialogData = {
                        title: termsOfUse.Title,
                        message: termsOfUse.Content,
                        customClass: "text-alignLeft",
                        extraData: termsOfUse.Content ? termsOfUse.Content : "",
                        ignoreSafeArea: true
                    };
                }
                else {
                    infoDialogData = {
                        title: "Dokument konnte nicht gefunden werden.",
                        message: "",
                        customClass: "text-alignLeft",
                        extraData: "",
                        ignoreSafeArea: true
                    };
                }
                var dialogService = public_1.TVDialogHostService.getInstance();
                _this.termsOfUseDialog = dialogService
                    .show(infoDialogData, public_3.InfoDialogComponent);
                _this.termsOfUseDialog.result(_this)
                    .catch(function (error) {
                    public_2.Logger.debug(function (log) { return log(public_2.LogMsg("showDialogClick: dialog aborted -> " + error, MtvTermsOfUseDialogWrapper_1.TAG)); });
                });
            })
                .catch(function (error) {
                public_2.Logger.debug(function (log) { return log(public_2.LogMsg("ERROR: Show DT Catalog: " + error.message, MtvTermsOfUseDialogWrapper_1.TAG)); });
                if (_this.props.onError) {
                    _this.props.onError(error);
                }
                public_2.ErrorManager.catch(error, MtvTermsOfUseDialogWrapper_1, 0x01);
            });
        };
        MtvTermsOfUseDialogWrapper.prototype.render = function () {
            return null;
        };
        var MtvTermsOfUseDialogWrapper_1;
        MtvTermsOfUseDialogWrapper.classID = 0xC09;
        MtvTermsOfUseDialogWrapper = MtvTermsOfUseDialogWrapper_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-termsofuse-wrapper"
            }),
            public_2.logTag()
        ], MtvTermsOfUseDialogWrapper);
        return MtvTermsOfUseDialogWrapper;
    }(public_1.ReactBaseComponent));
    exports.MtvTermsOfUseDialogWrapper = MtvTermsOfUseDialogWrapper;
});
//# sourceMappingURL=termsofuse.wrapper.js.map