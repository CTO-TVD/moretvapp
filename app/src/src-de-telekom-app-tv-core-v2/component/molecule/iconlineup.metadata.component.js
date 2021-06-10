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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public"], function (require, exports, React, public_1, public_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVIconLineupMetadataComponent = void 0;
    var TVIconLineupMetadataComponent = (function (_super) {
        __extends(TVIconLineupMetadataComponent, _super);
        function TVIconLineupMetadataComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TVIconLineupMetadataComponent_1 = TVIconLineupMetadataComponent;
        TVIconLineupMetadataComponent.getAllIcons = function (iconState) {
            return [
                {
                    name: public_2.Css.sprites.A_IC_079_36x36,
                    show: function () { return !!iconState.showSatellite; }
                },
                {
                    name: public_2.Css.sprites.A_IC_060_2_36x36,
                    show: function () { return !!iconState.show3d; }
                },
                {
                    name: public_2.Css.sprites.A_IC_139_2_48x36,
                    show: function () { return !!iconState.showHdr; }
                },
                {
                    name: public_2.Css.sprites.A_IC_124_2_36x36,
                    show: function () { return !!iconState.showUhd; }
                },
                {
                    name: public_2.Css.sprites.A_IC_059_2_36x36,
                    show: function () { return !!iconState.showHd; }
                },
                {
                    name: public_2.Css.sprites.A_IC_058_2_36x36,
                    show: function () { return !!iconState.showSd; }
                },
                {
                    name: public_2.Css.sprites.A_IC_063_2_36x36,
                    show: function () { return !!iconState.showStereo; }
                },
                {
                    name: public_2.Css.sprites.A_IC_062_2_36x36,
                    show: function () { return !!iconState.showDolby; }
                },
                {
                    name: public_2.Css.sprites.A_IC_067_2_36x36,
                    show: function () { return !!iconState.showSubtitles; }
                },
                {
                    name: public_2.Css.sprites.A_IC_061_2_36x36,
                    show: function () { return !!iconState.showTwoLanguages; }
                },
                {
                    name: public_2.Css.sprites.A_IC_065_2_36x36,
                    show: function () { return !!iconState.showAudioDescription; }
                }
            ];
        };
        TVIconLineupMetadataComponent.prototype.render = function () {
            return React.createElement(public_1.IconLineupBaseComponent, { className: this.ID, icons: TVIconLineupMetadataComponent_1.getAllIcons(this.props.icons) });
        };
        var TVIconLineupMetadataComponent_1;
        TVIconLineupMetadataComponent = TVIconLineupMetadataComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "iconlineup-metadata-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        flexShrink: 0,
                        height: 36
                    }),
                    public_2.selector("& *:not(:first-child)")
                        .props({
                        marginLeft: 12
                    })
                ]
            })
        ], TVIconLineupMetadataComponent);
        return TVIconLineupMetadataComponent;
    }(public_1.ReactBaseComponent));
    exports.TVIconLineupMetadataComponent = TVIconLineupMetadataComponent;
});
//# sourceMappingURL=iconlineup.metadata.component.js.map