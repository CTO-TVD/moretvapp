var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom/public", "./tvms.loader", "../../component/infoArea/infoDialog.component", "bluebird", "moment", "src/src-de-telekom-react/public", "../../public", "src/src-de-telekom/util/public"], function (require, exports, public_1, tvms_loader_1, infoDialog_component_1, bluebird, moment, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TvmsMessageReader = void 0;
    var TvmsMessageReader = (function () {
        function TvmsMessageReader() {
        }
        TvmsMessageReader_1 = TvmsMessageReader;
        TvmsMessageReader.showTvMessage = function (event) {
            var _this = this;
            if (!event || !event.message || !event.message.body) {
                public_1.Logger.warn(function (log) { return log(public_1.LogMsg("Invalid tv message event format:  " + JSON.stringify(event), TvmsMessageReader_1.TAG)); });
                return bluebird.resolve(null);
            }
            var tvMessage;
            try {
                tvMessage = JSON.parse(event.message.body);
            }
            catch (error) {
                public_1.Logger.warn(function (log) { return log(public_1.LogMsg("Failed to parse tvmessage:  " + JSON.stringify(tvMessage) + ". Error: " + error, TvmsMessageReader_1.TAG)); });
            }
            if (this.isMessageValid(tvMessage)) {
                return public_2.TVDialogHostService.getInstance().showConfirmationDialog(public_3.messagesCore.STB_TM_0001, public_3.messagesCore.STB_TM_0002, public_3.messagesCore.STB_TM_0003, public_3.messagesCore.STB_TM_0004, { layer: public_2.DialogLayer.dialogLayer3 })
                    .then(function (confirmed) { return confirmed ? _this.showInfoDialog(tvMessage) : null; })
                    .catch(function (error) {
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("Error handling TVMS message:  " + JSON.stringify(event) + ". Error: " + error, TvmsMessageReader_1.TAG)); });
                    public_1.ErrorManager.catch(error, TvmsMessageReader_1, 0x01);
                    return bluebird.resolve(null);
                });
            }
            else {
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Message timed out:  " + JSON.stringify(event) + ".", TvmsMessageReader_1.TAG)); });
            }
            return bluebird.resolve(null);
        };
        TvmsMessageReader.showInfoDialog = function (tvMessage) {
            var _this = this;
            if (tvMessage === null || tvMessage === void 0 ? void 0 : tvMessage.content) {
                return tvms_loader_1.TvmsLoader.getTvmsMessage(tvMessage.content)
                    .then(function (response) {
                    var infoDialogData = {
                        title: _this.getField(response, "title"),
                        message: _this.getField(response, "message"),
                        extraData: _this.getField(response, "message"),
                        customClass: "text-alignLeft",
                        disableAnimation: true,
                        ignoreSafeArea: true
                    };
                    return public_2.TVDialogHostService.getInstance()
                        .show(infoDialogData, infoDialog_component_1.InfoDialogComponent, { layer: public_2.DialogLayer.dialogLayer4 })
                        .result();
                })
                    .catch(function (error) {
                    public_1.Logger.error(function (log) { return log(public_1.LogMsg("Error retrieving and showing TVMS message dialog. Event:  " + JSON.stringify(event) + ". Error:" + error, TvmsMessageReader_1.TAG)); });
                    public_1.ErrorManager.catch(error, TvmsMessageReader_1, 0x02);
                });
            }
            else if (tvMessage === null || tvMessage === void 0 ? void 0 : tvMessage.messageData) {
                var infoDialogData = {
                    title: tvMessage === null || tvMessage === void 0 ? void 0 : tvMessage.messageData.title,
                    message: tvMessage === null || tvMessage === void 0 ? void 0 : tvMessage.messageData.message,
                    extraData: tvMessage === null || tvMessage === void 0 ? void 0 : tvMessage.messageData.message,
                    customClass: "text-alignLeft",
                    disableAnimation: true,
                    ignoreSafeArea: true
                };
                return public_2.TVDialogHostService.getInstance()
                    .show(infoDialogData, infoDialog_component_1.InfoDialogComponent, { layer: public_2.DialogLayer.dialogLayer4 })
                    .result();
            }
            return bluebird.resolve(null);
        };
        TvmsMessageReader.isMessageValid = function (tvMessage) {
            if (!tvMessage)
                return false;
            var validUntil = moment();
            try {
                validUntil = moment.utc(tvMessage.validTime, "YYYYMMDDHHmmss").local();
            }
            catch (error) {
                public_1.Logger.warn(function (log) { return log(public_1.LogMsg("Failed to parse vadlidTime property of tvmessage:  " + JSON.stringify(tvMessage) + ". Error:" + error, TvmsMessageReader_1.TAG)); });
            }
            var now = moment();
            return now.isSameOrBefore(validUntil);
        };
        TvmsMessageReader.getField = function (tvmsMessage, property) {
            var result = "";
            if (tvmsMessage === null || tvmsMessage === void 0 ? void 0 : tvmsMessage.items) {
                var filtered = tvmsMessage.items.filter(function (item) { return item && item.key === property; });
                if (filtered && filtered.length >= 0) {
                    result = filtered[0].value;
                }
            }
            return result;
        };
        var TvmsMessageReader_1;
        TvmsMessageReader.classID = 0x77C;
        __decorate([
            public_4.log2(function () { return ({ name: TvmsMessageReader_1.TAG }); })
        ], TvmsMessageReader, "showInfoDialog", null);
        TvmsMessageReader = TvmsMessageReader_1 = __decorate([
            public_1.logTag()
        ], TvmsMessageReader);
        return TvmsMessageReader;
    }());
    exports.TvmsMessageReader = TvmsMessageReader;
});
//# sourceMappingURL=tvms.messagereader.js.map