define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZacDialogRequest = void 0;
    var ZacDialogRequest = (function () {
        function ZacDialogRequest() {
            this.DIALOG_TYPE_UNDEFINED = 0;
            this.DIALOG_TYPE_INFORMATION = 1;
            this.DIALOG_TYPE_QUESTION = 2;
            this.DIALOG_TYPE_ATTENTION = 3;
            this.DIALOG_TYPE_LOCK = 4;
            this.DIALOG_TYPE_CONDITIONAL_ACCESS = 5;
            this.DIALOG_INPUTFIELD_NONE = 100;
            this.DIALOG_INPUTFIELD_TEXT = 200;
            this.DIALOG_INPUTFIELD_NUMERIC = 300;
            this.DIALOG_INPUTFIELD_PASSWORD = 400;
            this.DIALOG_INPUTFIELD_PIN = 500;
            this.DIALOG_INPUTFIELD_LOGIN = 600;
            this.DIALOG_SELECT_NONE = 1100;
            this.DIALOG_SELECT_ONE = 1200;
            this.DIALOG_SELECT_MULTIPLE = 1300;
            this.bottomText = "";
            this.header = "";
            this.id = (++ZacDialogRequest.id).toString();
            this.inputFieldLength = 0;
            this.inputFieldText = "";
            this.inputFieldType = 0;
            this.json = "";
            this.message = "";
            this.selectPolicy = 0;
            this.timeoutSecs = 0;
            this.type = 0;
        }
        ZacDialogRequest.prototype.PostAcknowledge = function (accept) {
            return 0;
        };
        ZacDialogRequest.prototype.PostCancel = function () {
            if (this.cancelResponseFunc)
                this.cancelResponseFunc();
            return 0;
        };
        ZacDialogRequest.prototype.PostResponse = function (response) {
            if (this.postResponseFunc)
                this.postResponseFunc(response);
            return 0;
        };
        ZacDialogRequest.id = 0;
        return ZacDialogRequest;
    }());
    exports.ZacDialogRequest = ZacDialogRequest;
});
//# sourceMappingURL=zacdialogrequest.js.map