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
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../base/public", "../../component/ui/circleprogressbar/circleprogressbar.component", "./volumecontrol.service"], function (require, exports, React, public_1, public_2, circleprogressbar_component_1, volumecontrol_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVVolumeControl = void 0;
    var TVVolumeControl = (function (_super) {
        __extends(TVVolumeControl, _super);
        function TVVolumeControl() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.volumeControlService = volumecontrol_service_1.TVVolumeControlService.getInstance();
            return _this;
        }
        TVVolumeControl.prototype.render = function () {
            if (this.props.volumeData) {
                var currentValue = this.props.volumeData.volume;
                var iconName = void 0;
                if (currentValue === 0) {
                    this.props.volumeData.isMuted = true;
                }
                if (this.props.volumeData.isMuted) {
                    currentValue = 0;
                    iconName = public_1.Css.sprites.A_IC_038_1_3_48x48;
                }
                else {
                    iconName = public_1.Css.sprites.A_IC_038_1_2_48x48;
                }
                var currentFormatedValue = currentValue.toString();
                if (currentFormatedValue.length < 2) {
                    currentFormatedValue = "0" + currentFormatedValue;
                }
                return React.createElement("div", { className: this.ID },
                    React.createElement("div", { className: "panel" },
                        React.createElement(circleprogressbar_component_1.TVCircleProgressBarComponent, { dttvWithtext: true, className: "volumeCtrl", dttvText: currentFormatedValue, dttvIcon: iconName, dttvValue: currentValue, dttvMaxvalue: this.volumeControlService.maximumValue, dttvSize: 168, dttvIconSize: 48, dttvTheme: "magenta" })));
            }
            return null;
        };
        TVVolumeControl = __decorate([
            public_2.reactComponent({
                ID: "tv-volumecontrol-component",
                styles: [
                    public_1.selector("& .panel")
                        .extend(public_1.Css.mixins.systemfeedbackPanel),
                    public_1.selector("& .volumeCtrl")
                        .props({
                        position: "absolute",
                        top: public_1.Css.dimensions.safeareaTop,
                        left: 24
                    })
                ]
            })
        ], TVVolumeControl);
        return TVVolumeControl;
    }(public_2.ReactBaseComponent));
    exports.TVVolumeControl = TVVolumeControl;
});
//# sourceMappingURL=volumecontrol.component.js.map