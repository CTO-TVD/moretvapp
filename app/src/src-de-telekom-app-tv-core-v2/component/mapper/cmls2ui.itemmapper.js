var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "src/src-de-telekom-react/public", "src/src-de-telekom/public", "../../translation/public"], function (require, exports, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cmls2UIItemMapper = void 0;
    var Cmls2UIItemMapper = (function () {
        function Cmls2UIItemMapper(context) {
            this.context = context;
        }
        Cmls2UIItemMapper.prototype.getPersonRole = function (roleName) {
            switch (roleName) {
                case "actor":
                    return public_1.Filter.message(public_1.Filter.context(), public_3.messagesCore.STB_SE_TI058_actor);
                case "director":
                    return public_1.Filter.message(public_1.Filter.context(), public_3.messagesCore.STB_SE_TI058_director);
                case "host":
                    return public_1.Filter.message(public_1.Filter.context(), public_3.messagesCore.STB_SE_TI058_host);
                case "other":
                    return public_1.Filter.message(public_1.Filter.context(), public_3.messagesCore.STB_SE_TI058_other);
                case "producer":
                    return public_1.Filter.message(public_1.Filter.context(), public_3.messagesCore.STB_SE_TI058_producer);
                case "singer":
                    return public_1.Filter.message(public_1.Filter.context(), public_3.messagesCore.STB_SE_TI058_singer);
                case "voice":
                    return public_1.Filter.message(public_1.Filter.context(), public_3.messagesCore.STB_SE_TI058_voice);
                case "writer":
                    return public_1.Filter.message(public_1.Filter.context(), public_3.messagesCore.STB_SE_TI058_writer);
                case "scriptWriter":
                    return public_1.Filter.message(public_1.Filter.context(), public_3.messagesCore.STB_SE_TI058_scriptWriter);
                default:
                    return public_1.Filter.message(public_1.Filter.context(), public_3.messagesCore.STB_SE_TI058_Unknown);
            }
        };
        Cmls2UIItemMapper.classID = 0x79A;
        Cmls2UIItemMapper = __decorate([
            public_2.logTag()
        ], Cmls2UIItemMapper);
        return Cmls2UIItemMapper;
    }());
    exports.Cmls2UIItemMapper = Cmls2UIItemMapper;
});
//# sourceMappingURL=cmls2ui.itemmapper.js.map