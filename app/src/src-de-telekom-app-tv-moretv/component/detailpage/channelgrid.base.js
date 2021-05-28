define(["require", "exports", "src/src-de-telekom/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ChannelGridBase = void 0;
    var ChannelGridBase = (function () {
        function ChannelGridBase() {
        }
        ChannelGridBase.resolveChannels = function (refChannels, allChannels) {
            return refChannels
                ? refChannels.map(function (c) {
                    var it = allChannels.filter(function (it) { return it.ID == c; })[0];
                    var idx = allChannels.indexOf(it);
                    return idx >= 0 ? allChannels[idx] : undefined;
                }).filter(public_1.Guard.isObject)
                : [];
        };
        return ChannelGridBase;
    }());
    exports.ChannelGridBase = ChannelGridBase;
});
//# sourceMappingURL=channelgrid.base.js.map