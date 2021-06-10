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
define(["require", "exports", "react", "URIjs/URI", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public"], function (require, exports, React, urijs, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MtvRouterPage = void 0;
    var MtvRouterPage = (function (_super) {
        __extends(MtvRouterPage, _super);
        function MtvRouterPage(props, context) {
            var _this = _super.call(this, props, context) || this;
            if (public_3.Configuration.instance.startUrl) {
                var queries = urijs(public_3.Configuration.instance.startUrl).query(true);
                _this.state = {
                    pageloading: true,
                    scenario: queries["scenario"],
                    package: queries["package"],
                    channel: queries["channel"],
                    channelex: queries["channelex"],
                    quality: queries["quality"]
                };
            }
            return _this;
        }
        MtvRouterPage_1 = MtvRouterPage;
        MtvRouterPage.prototype.componentDidMount = function () {
            public_3.Logger.debug(function (log) { return log(public_3.LogMsg("Routing...", MtvRouterPage_1.TAG)); });
            this.navigateToPage();
        };
        MtvRouterPage.prototype.navigateToPage = function () {
            var params = new Map();
            if (this.state.scenario) {
                params.set("scenario", this.state.scenario);
            }
            if (this.state.package) {
                params.set("package", this.state.package);
            }
            if (this.state.channel) {
                params.set("channel", this.state.channel);
            }
            if (this.state.channelex) {
                params.set("channelex", this.state.channelex);
            }
            if (this.state.quality) {
                params.set("quality", this.state.quality);
            }
            this.startIntent(public_1.IntentMoreTV.Factory.create(params));
        };
        MtvRouterPage.prototype.render = function () {
            return React.createElement("div", { className: [this.ID, public_2.Css.globalStyleClasses.defaultBackgroundImage, "page"].join(" ") });
        };
        var MtvRouterPage_1;
        MtvRouterPage.classID = 0xC10;
        MtvRouterPage = MtvRouterPage_1 = __decorate([
            public_1.reactComponent({
                ID: "mtv-router-component",
                styles: [
                    public_2.selector("&")
                        .sub(public_2.selector("h1")
                        .props({
                        position: "fixed",
                        top: public_2.Css.dimensions.safeareaTop + 36,
                        left: public_2.Css.dimensions.safeareaLeft,
                        width: public_2.Css.dimensions.safeareaWidth
                    }))
                ]
            }),
            public_3.logTag()
        ], MtvRouterPage);
        return MtvRouterPage;
    }(public_1.ReactBaseComponent));
    exports.MtvRouterPage = MtvRouterPage;
});
//# sourceMappingURL=router.page.js.map