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
define(["require", "exports", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "src/src-de-telekom-tv-moretv/public", "../pages/messageoverlay/generic_messageoverlay.component", "../translation/public"], function (require, exports, public_1, public_2, public_3, generic_messageoverlay_component_1, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvMessageOverlayComponent = void 0;
    var MtvMessageOverlayComponent = (function (_super) {
        __extends(MtvMessageOverlayComponent, _super);
        function MtvMessageOverlayComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MtvMessageOverlayComponent_1 = MtvMessageOverlayComponent;
        MtvMessageOverlayComponent.getSkyError = function (context) {
            return {
                title: public_1.Filter.message(context, public_4.messagesMtv.sky_overlayErrorUnknown_TITLE),
                text: public_1.Filter.message(context, public_4.messagesMtv.sky_overlayErrorUnknown_BODY_TEXT),
                suggestion: public_1.Filter.message(context, public_4.messagesMtv.sky_overlayErrorUnknown_SUGGESTION),
                okButtonText: public_1.Filter.message(context, public_4.messagesMtv.sky_overlayErrorUnknown_BTN_CLOSE)
            };
        };
        MtvMessageOverlayComponent.getError = function (context, error) {
            var errorCode = error ? error.code : undefined;
            switch (errorCode) {
                case public_3.MTVErrorCode.UNKNOWN:
                    return {
                        title: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorUnknown_TITLE),
                        text: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorUnknown_BODY_TEXT),
                        suggestion: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorUnknown_SUGGESTION),
                        okButtonText: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorUnknown_BTN_CLOSE)
                    };
                case public_3.MTVErrorCode.BARKERMAP_NO_MATCH:
                    return {
                        title: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorBarkermap_TITLE),
                        text: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorBarkermap_BODY_TEXT),
                        suggestion: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorBarkermap_SUGGESTION),
                        okButtonText: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorBarkermap_BTN_CLOSE)
                    };
                case public_3.MTVErrorCode.ERROR_BOOKING_CONDITION_NOSKY:
                    return {
                        title: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorNoSky_TITLE),
                        text: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorNoSky_BODY_TEXT),
                        suggestion: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorNoSky_SUGGESTION),
                        okButtonText: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorNoSky_BTN_CLOSE)
                    };
                default:
                    return {
                        title: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorUnknown_TITLE),
                        text: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorUnknown_BODY_TEXT),
                        suggestion: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorUnknown_SUGGESTION),
                        okButtonText: public_1.Filter.message(context, public_4.messagesMtv.overlayErrorUnknown_BTN_CLOSE)
                    };
            }
        };
        MtvMessageOverlayComponent.createSkyDialog = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.context, context = _c === void 0 ? public_1.Filter.context() : _c;
            var dialogService = public_1.TVDialogHostService.getInstance();
            return dialogService.show({
                title: undefined,
                message: undefined,
                extraData: this.getSkyError(context),
                icon: "icon-error",
                ignoreSafeArea: true,
                navigationId: "mtvMessage"
            }, MtvMessageOverlayComponent_1);
        };
        MtvMessageOverlayComponent.createDialogByError = function (_a) {
            var _b = _a.context, context = _b === void 0 ? public_1.Filter.context() : _b, error = _a.error;
            var dialogService = public_1.TVDialogHostService.getInstance();
            return dialogService.show({
                title: undefined,
                message: undefined,
                extraData: this.getError(context, error),
                icon: "icon-error",
                ignoreSafeArea: true,
                navigationId: "mtvMessage"
            }, MtvMessageOverlayComponent_1);
        };
        var MtvMessageOverlayComponent_1;
        MtvMessageOverlayComponent = MtvMessageOverlayComponent_1 = __decorate([
            public_2.logTag()
        ], MtvMessageOverlayComponent);
        return MtvMessageOverlayComponent;
    }(generic_messageoverlay_component_1.GenericMessageOverlayComponent));
    exports.MtvMessageOverlayComponent = MtvMessageOverlayComponent;
});
//# sourceMappingURL=messageoverlay.component.js.map