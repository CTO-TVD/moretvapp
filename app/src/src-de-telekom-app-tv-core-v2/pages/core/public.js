var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "src/src-de-telekom-react/public", "./livetv/public"], function (require, exports, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CoreModule = exports.LiveTVPlayerService = void 0;
    Object.defineProperty(exports, "LiveTVPlayerService", { enumerable: true, get: function () { return public_2.LiveTVPlayerService; } });
    var CoreModule = (function (_super) {
        __extends(CoreModule, _super);
        function CoreModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CoreModule.classID = 0x775;
        return CoreModule;
    }(public_1.ReactBaseModule));
    exports.CoreModule = CoreModule;
});
//# sourceMappingURL=public.js.map