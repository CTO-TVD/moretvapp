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
define(["require", "exports", "src/src-de-telekom-react/public", "src/src-de-telekom-app-tv-core-v2/public", "../public", "underscore"], function (require, exports, public_1, public_2, public_3, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvChannelNavigatableBehavior = exports.ZosaChannelNavigatableBehavior = exports.VodChannelNavigatableBehavior = void 0;
    function VodChannelNavigatableBehavior(_a) {
        var action = _a.action, id = _a.id, behavior = _a.behavior, component = _a.component;
        return __assign(__assign({}, behavior), { onClick: action
                ? function () {
                    if (action) {
                        public_2.FlexActionMapper.executeAction(component, { action: action, contentId: id });
                    }
                }
                : behavior.onClick });
    }
    exports.VodChannelNavigatableBehavior = VodChannelNavigatableBehavior;
    function ZosaChannelNavigatableBehavior(_a) {
        var behavior = _a.behavior;
        return __assign(__assign({}, behavior), { onKey: function (event) {
                if (event.virtualKey == public_1.TVKeyCodeConfig.INFO_KEY) {
                    return true;
                }
                return behavior.onKey ? behavior.onKey(event) : false;
            } });
    }
    exports.ZosaChannelNavigatableBehavior = ZosaChannelNavigatableBehavior;
    function MtvChannelNavigatableBehavior(_a) {
        var packages = _a.packages, catalogs = _a.catalogs, behavior = _a.behavior, component = _a.component, index = _a.index, row = _a.row, asset = _a.asset, packageId = _a.packageId;
        var onClick = packages !== undefined ? function () {
            var pack = _.find(packages, function (p) { return p.ID === packageId; });
            var extraData = row !== undefined && asset.rows ? { channels: asset.rows[index].items, initialIdx: index } : { channels: asset.channels || [], initialIdx: index };
            var visibleDialog = public_3.MtvDetailpageComponent.ChannelDetails.createDialog(public_1.TVDialogHostService.getInstance(), extraData);
            visibleDialog
                .result()
                .then(function (result) {
                var idx = result.extraData ? result.extraData.initialIdx : undefined;
                var channel = idx !== undefined && result.extraData ? result.extraData.channels[idx] : undefined;
                if (channel && packages && catalogs) {
                    var extraData_1 = {
                        channelId: channel.ID,
                        channelTitle: channel.Title || "",
                        contentProvider: pack ? pack.ContentProvider : "unknown",
                        originTvPackageId: packageId,
                        packages: packages,
                        catalogs: catalogs
                    };
                    visibleDialog = public_3.MtvDetailpageComponent.TVPackages.createDialog(public_1.TVDialogHostService.getInstance(), extraData_1);
                    return visibleDialog.result();
                }
                else {
                    throw new Error("Missing Channel Info");
                }
            })
                .then(function (result) {
                if (result.resultId != "") {
                    component.startIntent(new public_1.IntentMoreTV.Detailpage({ id: result.resultId }), { type: "replace" });
                }
            })
                .catch(function (error) {
                return null;
            });
        } : function () { };
        return __assign(__assign({}, behavior), { onClick: onClick, onKey: function (event) {
                if (event.virtualKey == public_1.TVKeyCodeConfig.INFO_KEY) {
                    onClick();
                    return true;
                }
                return behavior.onKey ? behavior.onKey(event) : false;
            } });
    }
    exports.MtvChannelNavigatableBehavior = MtvChannelNavigatableBehavior;
});
//# sourceMappingURL=channel.navigatable_behavior.js.map