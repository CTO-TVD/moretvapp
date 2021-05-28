var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "bluebird", "src/src-de-telekom-tv-core/public", "../../pages/uar/public", "src/src-de-telekom/public"], function (require, exports, bluebird, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PconGroupedContentLockManager = void 0;
    var PconGroupedContentLockManager = (function () {
        function PconGroupedContentLockManager() {
        }
        PconGroupedContentLockManager_1 = PconGroupedContentLockManager;
        PconGroupedContentLockManager.getAgeRatingValue = function () {
            return PconGroupedContentLockManager_1.getParentalControlConfiguration()
                .then(function (result) {
                var firstLocked = [0, 6, 12, 16, 18]
                    .map(function (age) { return ({ ageItem: result.ageRatingCfg[age], age: age }); })
                    .filter(function (ageItem) { return ageItem.ageItem.isLocked; })[0];
                return firstLocked ? firstLocked.age.toString() : undefined;
            });
        };
        PconGroupedContentLockManager.isUnratedLocked = function () {
            return PconGroupedContentLockManager_1.getParentalControlConfiguration()
                .then(function (result) { return result.parentalCtrlCfg.UnratedContent.isLocked; });
        };
        PconGroupedContentLockManager.isAvsLocked = function () {
            return public_1.ApplicationClient.parentalControlManagement.getParentalBlockingStatus(public_2.UarService.getInstance().getAVSGetParentalBlockingStatusParams())
                .then(function (result) { return (result === null || result === void 0 ? void 0 : result.data) ? result.data.isBlocked : true; });
        };
        PconGroupedContentLockManager.isPconLocked = function () {
            return bluebird.all([
                public_1.ApplicationClient.parentalControlManagement.isComfortFeatureActive(),
                public_1.ApplicationClient.parentalControlManagement.getParentalBlockingStatus({ scenario: PconGroupedContentLockManager_1.groupedContentScenario })
            ])
                .then(function (_a) {
                var comfortFeatureActiveResult = _a[0], parentalBlockingResult = _a[1];
                return comfortFeatureActiveResult.data.isActive ? false : ((parentalBlockingResult === null || parentalBlockingResult === void 0 ? void 0 : parentalBlockingResult.data) ? parentalBlockingResult.data.isBlocked : true);
            });
        };
        PconGroupedContentLockManager.getGroupedContentLockInfo = function () {
            return bluebird.all([
                PconGroupedContentLockManager_1.isPconLocked(),
                PconGroupedContentLockManager_1.maskContentEroticCategory(),
                PconGroupedContentLockManager_1.isUnratedLocked(),
                PconGroupedContentLockManager_1.getAgeRatingValue()
            ])
                .then(function (_a) {
                var isPconLocked = _a[0], maskedInfo = _a[1], isUnratedLocked = _a[2], ageRatingValue = _a[3];
                return ({ isPconLocked: isPconLocked, maskedInfo: maskedInfo, isUnratedLocked: isUnratedLocked, ageRatingValue: ageRatingValue });
            });
        };
        PconGroupedContentLockManager.maskContentEroticCategory = function () {
            return PconGroupedContentLockManager_1.getParentalControlConfiguration()
                .then(function (result) { return ({
                maskedContent: result.parentalCtrlCfg.MaskRatedContent.isLocked,
                eroticCategory: result.parentalCtrlCfg.EroticCategory.isLocked
            }); });
        };
        PconGroupedContentLockManager.resetPconLock = function () {
            return public_1.ApplicationClient.parentalControlManagement.resetParentalUnblockingIfBlocked({ scenario: PconGroupedContentLockManager_1.groupedContentScenario });
        };
        PconGroupedContentLockManager.resetAvsLock = function () {
            return public_1.ApplicationClient.parentalControlManagement.resetParentalUnblockingIfBlocked(public_2.UarService.getInstance().getAVSResetParentalUnblockParams());
        };
        PconGroupedContentLockManager.unlockAvs = function () {
            return public_2.UarService.getInstance().parentalUnblock(public_2.UarService.getInstance().getAVSUnblockParentalParams(), false, true)
                .thenReturn();
        };
        PconGroupedContentLockManager.unlockPcon = function (waitforDialogClose) {
            if (waitforDialogClose === void 0) { waitforDialogClose = false; }
            return public_2.UarService.getInstance().parentalUnblock({ scenario: PconGroupedContentLockManager_1.groupedContentScenario }, waitforDialogClose)
                .thenReturn();
        };
        PconGroupedContentLockManager.getParentalControlConfiguration = function () {
            return public_1.ApplicationClient.parentalControlManagement.getParentalControlConfiguration()
                .then(function (result) {
                if (result == null || result.data == null) {
                    throw new Error("Parental control result is NULL.");
                }
                return result.data;
            });
        };
        var PconGroupedContentLockManager_1;
        PconGroupedContentLockManager.searchGroupedContent = {
            contentTitle: "LiveTvGroupedContent",
            contentType: public_1.ParentalUnlockArea.Visibilty
        };
        PconGroupedContentLockManager.groupedContentScenario = JSON.stringify(PconGroupedContentLockManager_1.searchGroupedContent);
        __decorate([
            public_3.log2(function () { return ({ name: PconGroupedContentLockManager_1.TAG }); })
        ], PconGroupedContentLockManager, "resetPconLock", null);
        __decorate([
            public_3.log2(function () { return ({ name: PconGroupedContentLockManager_1.TAG }); })
        ], PconGroupedContentLockManager, "resetAvsLock", null);
        __decorate([
            public_3.log2(function () { return ({ name: PconGroupedContentLockManager_1.TAG }); })
        ], PconGroupedContentLockManager, "unlockAvs", null);
        __decorate([
            public_3.log2(function () { return ({ name: PconGroupedContentLockManager_1.TAG }); })
        ], PconGroupedContentLockManager, "unlockPcon", null);
        PconGroupedContentLockManager = PconGroupedContentLockManager_1 = __decorate([
            public_3.logTag()
        ], PconGroupedContentLockManager);
        return PconGroupedContentLockManager;
    }());
    exports.PconGroupedContentLockManager = PconGroupedContentLockManager;
});
//# sourceMappingURL=PconGroupedContentLockManager.js.map