define(["require", "exports", "zosaJS", "src/src-de-telekom/public"], function (require, exports, zosaJS, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DTZosaVasItemCustomProps = exports.DTZosaProgramItemCustomProps = exports.DTZosaChannelStreamItemCustomProps = exports.DTZosaChannelItemCustomProps = exports.zosaStatic = void 0;
    var zosa = new zosaJS();
    zosa.login = function () { throw new public_1.NotImplementedError(); };
    exports.zosaStatic = zosa;
    var DTZosaChannelItemCustomProps = (function () {
        function DTZosaChannelItemCustomProps() {
        }
        DTZosaChannelItemCustomProps.externalCode = "externalCode";
        return DTZosaChannelItemCustomProps;
    }());
    exports.DTZosaChannelItemCustomProps = DTZosaChannelItemCustomProps;
    var DTZosaChannelStreamItemCustomProps = (function () {
        function DTZosaChannelStreamItemCustomProps() {
        }
        DTZosaChannelStreamItemCustomProps.hdr = "HDR";
        return DTZosaChannelStreamItemCustomProps;
    }());
    exports.DTZosaChannelStreamItemCustomProps = DTZosaChannelStreamItemCustomProps;
    var DTZosaProgramItemCustomProps = (function () {
        function DTZosaProgramItemCustomProps() {
        }
        DTZosaProgramItemCustomProps.relatedVodIds = "relatedVodIds";
        DTZosaProgramItemCustomProps.tipCategory = "tipCategory";
        DTZosaProgramItemCustomProps.tipType = "tipType";
        return DTZosaProgramItemCustomProps;
    }());
    exports.DTZosaProgramItemCustomProps = DTZosaProgramItemCustomProps;
    var DTZosaVasItemCustomProps = (function () {
        function DTZosaVasItemCustomProps() {
        }
        DTZosaVasItemCustomProps.dayTimeEnd = "dayTimeEnd";
        DTZosaVasItemCustomProps.dayTimeStart = "dayTimeStart";
        return DTZosaVasItemCustomProps;
    }());
    exports.DTZosaVasItemCustomProps = DTZosaVasItemCustomProps;
});
//# sourceMappingURL=zosa.static.js.map