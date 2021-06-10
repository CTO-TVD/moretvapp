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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../iconlineup.metadata.component", "../../formatter/public", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public"], function (require, exports, React, public_1, iconlineup_metadata_component_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MetadataSublineComponent = void 0;
    var MetadataSublineComponent = (function (_super) {
        __extends(MetadataSublineComponent, _super);
        function MetadataSublineComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MetadataSublineComponent.prototype.render = function () {
            var iconState = {
                showHd: false,
                showSd: false,
                showUhd: false,
                showHdr: false,
                showSatellite: false
            };
            if (this.props.data.channel && this.props.data.program && this.props.data.program.zosaId) {
                iconState.showHd = this.props.data.channel.dtExtensions.showHd;
                iconState.showSd = this.props.data.channel.dtExtensions.showSd;
                iconState.showUhd = !this.props.data.channel.dtExtensions.isHdr && this.props.data.channel.dtExtensions.showUhd;
                iconState.showHdr = this.props.data.channel.dtExtensions.isHdr && this.props.data.channel.dtExtensions.showUhd;
            }
            if (this.props.data.currentProgram && this.props.data.currentStream) {
                iconState.showHdr = false;
                iconState.showUhd = this.props.data.currentStream.videoDefinition == public_4.zosaStatic.VIDEO_DEFINITION_UHD;
                iconState.showHd = this.props.data.currentStream.videoDefinition == public_4.zosaStatic.VIDEO_DEFINITION_HD;
                iconState.showSd = !iconState.showHd && !iconState.showUhd;
                iconState.showSatellite = !this.props.data.currentStream.dtExtensions.isIPTVStream;
            }
            if (this.props.data.recording) {
                iconState.showHdr = false;
                iconState.showHd = this.props.data.recording.dtExtensions.showHd;
                iconState.showSd = this.props.data.recording.dtExtensions.showSd;
                iconState.showUhd = this.props.data.recording.dtExtensions.showUhd;
            }
            var text;
            if (this.props.data.preferredText) {
                text = this.props.data.preferredText;
            }
            else {
                text = (this.props.data.program && public_2.ProgramItemFormatter.formatMetadata(this, this.props.data.program, true))
                    || (this.props.data.recording && public_2.RecordingItemFormatter.formatMetadata(this, this.props.data.recording.dtExtensions.channel, this.props.data.recording))
                    || "";
            }
            return React.createElement("div", { className: this.ID },
                React.createElement("span", { className: public_1.Css.fonts2.a_fo_b2__ + " singleline-ellipsis" }, text),
                React.createElement(iconlineup_metadata_component_1.TVIconLineupMetadataComponent, { icons: iconState }));
        };
        MetadataSublineComponent = __decorate([
            public_3.reactComponent({
                ID: "metadata-subline-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        display: "flex"
                    }),
                    public_1.selector("& ." + iconlineup_metadata_component_1.TVIconLineupMetadataComponent.ID)
                        .props({
                        height: 30,
                        marginLeft: 24,
                        flexShrink: 0
                    })
                ]
            })
        ], MetadataSublineComponent);
        return MetadataSublineComponent;
    }(public_3.ReactBaseComponent));
    exports.MetadataSublineComponent = MetadataSublineComponent;
});
//# sourceMappingURL=metadata.subline.component.js.map