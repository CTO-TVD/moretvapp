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
define(["require", "exports", "../../base/public", "../../service/keyeventmanager/public", "./container", "./element", "./layer"], function (require, exports, public_1, public_2, container_1, element_1, layer_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NavigationKey = exports.NavigationKeyId = void 0;
    exports.NavigationKeyId = { ID: "key-component" };
    var NavigationKey = (function (_super) {
        __extends(NavigationKey, _super);
        function NavigationKey(props, context) {
            var _this = _super.call(this, props, context) || this;
            var parentContainer = _this.findParentComponent(element_1.NavigationElementId).component
                || _this.findParentComponent(container_1.NavigationContainerId).component
                || _this.findParentComponent(layer_1.LayerId).component;
            if (parentContainer) {
                _this.unregister = parentContainer.registerKeyComponent(_this);
            }
            else {
                throw new public_1.ReactBaseError("The key element has no parent element or container or layer. ID: " + _this.ID);
            }
            return _this;
        }
        NavigationKey.prototype.componentWillUnmount = function () {
            if (this.unregister)
                this.unregister();
            this.unregister = undefined;
        };
        NavigationKey.prototype.onKey = function (args) {
            if (!this.props.onKey)
                return false;
            var executeAction = false;
            if (this.props.keyFilter === args.virtualKey) {
                executeAction = true;
            }
            else if (this.props.keyFilter === "*") {
                executeAction = true;
            }
            else if (this.props.keyFilter === "0-9") {
                if (args.virtualKey === public_2.TVKeyCodeConfig.ZERO_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.ONE_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.TWO_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.THREE_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.FOUR_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.FIVE_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.SIX_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.SEVEN_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.EIGHT_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.NINE_KEY) {
                    executeAction = true;
                }
            }
            else if (this.props.keyFilter === "keyset1") {
                if (args.virtualKey === public_2.TVKeyCodeConfig.SEARCH_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.AUDIO_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.GUIDE_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.OPTION_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.RED_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.GREEN_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.YELLOW_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.BLUE_KEY) {
                    executeAction = true;
                }
            }
            else if (this.props.keyFilter === "keyset2") {
                if (args.virtualKey === public_2.TVKeyCodeConfig.CHANNEL_UP_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.CHANNEL_DOWN_KEY) {
                    executeAction = true;
                }
            }
            else if (this.props.keyFilter === "keyset3") {
                if (args.virtualKey === public_2.TVKeyCodeConfig.FBWD_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.FFWD_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.SKIP_FFWD_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.SKIP_FBWD_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.RECORD_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.RECORD_ONLY_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.PAUSEPLAY_KEY) {
                    executeAction = true;
                }
            }
            else if (this.props.keyFilter === "keysetshortcut") {
                if (args.virtualKey === public_2.TVKeyCodeConfig.SHORTCUT1_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.SHORTCUT2_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.SHORTCUT3_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.SHORTCUT4_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.SHORTCUT5_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.SHORTCUT6_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.SHORTCUT7_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.SHORTCUT8_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.SHORTCUT9_KEY) {
                    executeAction = true;
                }
            }
            else if (this.props.keyFilter === "tilecontext") {
                if (args.virtualKey === public_2.TVKeyCodeConfig.PAUSEPLAY_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.INFO_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.RECORD_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.RECORD_ONLY_KEY
                    || args.virtualKey === public_2.TVKeyCodeConfig.DELETE_KEY) {
                    executeAction = true;
                }
            }
            if (executeAction) {
                return this.props.onKey(args, this);
            }
            return false;
        };
        NavigationKey.prototype.render = function () {
            return null;
        };
        NavigationKey = __decorate([
            public_1.reactComponent({
                ID: exports.NavigationKeyId.ID
            })
        ], NavigationKey);
        return NavigationKey;
    }(public_1.ReactBaseComponent));
    exports.NavigationKey = NavigationKey;
});
//# sourceMappingURL=key.js.map