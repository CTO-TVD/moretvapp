define(["require", "exports", "src/src-de-telekom-app-tv-core-v2/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppNavigatableBehavior = void 0;
    function AppNavigatableBehavior(_a) {
        var action = _a.action, id = _a.id, component = _a.component;
        return {
            onClick: function () {
                if (action) {
                    public_1.FlexActionMapper.executeAction(component, { action: action, contentId: id });
                }
            }
        };
    }
    exports.AppNavigatableBehavior = AppNavigatableBehavior;
});
//# sourceMappingURL=app.navigatable_behavior.js.map