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
define(["require", "exports", "src/src-de-telekom/public", "./reactBaseService"], function (require, exports, public_1, reactBaseService_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReactRootService = void 0;
    var ReactRootService = (function (_super) {
        __extends(ReactRootService, _super);
        function ReactRootService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ReactRootService_1 = ReactRootService;
        ReactRootService.prototype.registerRootMessageComponent = function (component) {
            if (!this.rootMessageComponent) {
                this.rootMessageComponent = component;
                ReactRootService_1.isComplete = true;
            }
        };
        ReactRootService.prototype.broadcastMessage = function (id, message) {
            if (this.rootMessageComponent)
                this.rootMessageComponent.broadcastMessage(id, message);
            if (this.eventManager)
                this.eventManager.broadcast(id.ID, message);
        };
        ReactRootService.prototype.onMessage = function (id, evtHandlerFunction) {
            if (!this.eventManager) {
                this.eventManager = new public_1.EventManager();
            }
            return this.eventManager.on(id.ID, function (message) {
                evtHandlerFunction(message);
                return false;
            }, ReactRootService_1.TAG);
        };
        var ReactRootService_1;
        ReactRootService.isComplete = false;
        ReactRootService = ReactRootService_1 = __decorate([
            public_1.logTag()
        ], ReactRootService);
        return ReactRootService;
    }(reactBaseService_1.ReactBaseService));
    exports.ReactRootService = ReactRootService;
});
//# sourceMappingURL=reactRoot.service.js.map