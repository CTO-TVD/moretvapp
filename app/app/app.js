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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "react", "src/src-de-telekom-app-tv-core-v2/public", "src/src-de-telekom-app-tv-moretv/pages/public", "src/src-de-telekom-react/public", "./root"], function (require, exports, React, public_1, public_2, public_3, root_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.startApp = void 0;
    var MainModule = (function (_super) {
        __extends(MainModule, _super);
        function MainModule() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MainModule = __decorate([
            public_3.reactSubModule(public_2.AppTvMtvPagesModule),
            public_3.reactSubModule(public_1.AppTvCoreModule),
            public_3.reactSubModule(public_3.ReactCoreModule)
        ], MainModule);
        return MainModule;
    }(public_3.ReactBaseModule));
    function startApp() {
        new MainModule().start(function () {
            var element = React.createElement(public_3.TranslationComponent, null,
                React.createElement(root_1.Root, null, function () {
                    return React.createElement(public_3.BrowserRouter, { mainRouter: true },
                        React.createElement(React.Fragment, null,
                            React.createElement(public_3.NavigationKey, { keyFilter: "BACK_KEY", onKey: function (key, e) {
                                    e.startIntent(undefined, { type: "exit" });
                                    return true;
                                } }),
                            React.createElement(public_3.NavigationKey, { keyFilter: "EXIT_KEY", onKey: function (key, e) {
                                    e.startIntent(undefined, { type: "exit" });
                                    return true;
                                } }),
                            React.createElement(public_3.NavigationKey, { keyFilter: "AUTOCLOSE_1_KEY", onKey: function (key, e) {
                                    e.startIntent(undefined, { type: "exit" });
                                    return true;
                                } }),
                            React.createElement(public_3.NavigationKey, { keyFilter: "MENU_KEY", onKey: function (key, e) {
                                    e.startIntent(undefined, { type: "exit", exitMarkerName: "application", priority: "high" })
                                        .then(function () { return e.startIntent(new public_3.IntentCore.MenuHub()); });
                                    return true;
                                } }),
                            React.createElement(public_3.ColorkeyComponent, null)));
                }));
            return element;
        }, "react-root");
    }
    exports.startApp = startApp;
});
//# sourceMappingURL=app.js.map