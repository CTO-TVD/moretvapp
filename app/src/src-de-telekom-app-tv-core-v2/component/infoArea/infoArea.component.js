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
define(["require", "exports", "react", "bluebird", "src/src-de-telekom/public", "src/src-de-telekom-react/public", "src/src-de-telekom-tv-core/public", "./clientUpdateInfo", "./infoDialog.component", "src/src-de-telekom-style/public"], function (require, exports, React, bluebird, public_1, public_2, public_3, clientUpdateInfo_1, infoDialog_component_1, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVInfoAreaComponent = exports.InfopageContentType = void 0;
    var InfopageContentType;
    (function (InfopageContentType) {
        InfopageContentType[InfopageContentType["SwUpdateInfoPage"] = 0] = "SwUpdateInfoPage";
        InfopageContentType[InfopageContentType["SettingsInfoPage"] = 1] = "SettingsInfoPage";
        InfopageContentType[InfopageContentType["OtherInfoPage"] = 2] = "OtherInfoPage";
    })(InfopageContentType = exports.InfopageContentType || (exports.InfopageContentType = {}));
    var TVInfoAreaComponent = (function (_super) {
        __extends(TVInfoAreaComponent, _super);
        function TVInfoAreaComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = { showInfoArea: false };
            return _this;
        }
        TVInfoAreaComponent_1 = TVInfoAreaComponent;
        TVInfoAreaComponent.prototype.componentDidMount = function () {
            var _this = this;
            var contentType = public_1.Guard.isDefined(this.props.dttvInfopageContenttype) ? this.props.dttvInfopageContenttype : InfopageContentType.OtherInfoPage;
            switch (contentType) {
                case InfopageContentType.OtherInfoPage:
                    this.updateCommonInfoPageProperties();
                    break;
                case InfopageContentType.SettingsInfoPage:
                    this.updateSettingsInfoPageProperties();
                    break;
                case InfopageContentType.SwUpdateInfoPage:
                    var infoFileUrl_1 = public_1.Configuration.instance.swupdateinfo.infoFileUrl.replace("$ModelName", public_3.ServiceClientZac.getSystemInformation().HwModel);
                    bluebird.all([
                        public_3.ApplicationClient.softwareUpgrade.getSoftwareUpdateInfo(2000, infoFileUrl_1),
                        public_3.ApplicationClient.contentManagement.getSubscriberInfo()
                    ])
                        .then(function (_a) {
                        var swUpdateInfo = _a[0], subscriberInfo = _a[1];
                        if (!subscriberInfo || !subscriberInfo.provisioningType) {
                            public_1.Logger.warn(function (log) { return log(public_1.LogMsg("Canot show dialog because subscriberInfo.provisioningType is empty.", TVInfoAreaComponent_1.TAG)); });
                        }
                        else {
                            var clientUpdateInfo_2 = new clientUpdateInfo_1.ClientUpdateInfo(infoFileUrl_1, swUpdateInfo, subscriberInfo.provisioningType, _this.props.dttvUpdateVersion);
                            if (clientUpdateInfo_2.html.length > 0) {
                                _this.infoDialogData = {
                                    title: "Software Update verfügbar",
                                    extraData: clientUpdateInfo_2.html,
                                    customClass: "text-alignLeft",
                                    ignoreSafeArea: true
                                };
                                _this.setState({ showInfoArea: true });
                                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Init complete with " + clientUpdateInfo_2.html.length + " item(s).", TVInfoAreaComponent_1.TAG)); });
                            }
                        }
                    })
                        .catch(public_1.ErrorManager.catchFunc(TVInfoAreaComponent_1, 0x01));
                    break;
                default:
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Unknown dttvInfopageContenttype value '" + contentType + "'", TVInfoAreaComponent_1.TAG)); });
                    break;
            }
        };
        TVInfoAreaComponent.prototype.componentDidUpdate = function (prevProps) {
            if (this.props.infoPageTitle !== prevProps.infoPageTitle && this.props.dttvInfopageContenttype == InfopageContentType.SettingsInfoPage) {
                this.updateSettingsInfoPageProperties();
            }
        };
        TVInfoAreaComponent.prototype.updateCommonInfoPageProperties = function () {
            this.updatePageProperties(this.props.title, this.props.message);
        };
        TVInfoAreaComponent.prototype.updateSettingsInfoPageProperties = function () {
            if (this.props.infoPageTitle) {
                this.updatePageProperties(this.props.infoPageTitle, this.props.infoPageDescription);
            }
            else {
                this.setState({ showInfoArea: false });
            }
        };
        TVInfoAreaComponent.prototype.updatePageProperties = function (titleKey, messageKey) {
            if (public_1.Guard.isDefined(titleKey) && public_1.Guard.isDefined(messageKey) && titleKey.length > 0 && messageKey.length > 0) {
                var title_1 = public_2.Filter.join(this, titleKey);
                var message = public_2.Filter.join(this, messageKey);
                this.infoDialogData = {
                    title: title_1,
                    message: message,
                    extraData: message,
                    customClass: "text-alignLeft",
                    ignoreSafeArea: true
                };
                var showInfoArea = this.infoDialogData.title &&
                    this.infoDialogData.message &&
                    title_1.length > 0 &&
                    message.length > 0;
                this.setState({ showInfoArea: !!showInfoArea });
                public_1.Logger.debug(function (log) { return log(public_1.LogMsg("Init complete with config entry " + title_1, TVInfoAreaComponent_1.TAG)); });
            }
            else {
                this.setState({ showInfoArea: false });
            }
        };
        TVInfoAreaComponent.prototype.onInfoClick = function () {
            if (this.state.showInfoArea && this.infoDialogData) {
                public_2.TVDialogHostService.getInstance()
                    .show(this.infoDialogData, infoDialog_component_1.InfoDialogComponent, { layer: this.getDialogLayer() })
                    .result(this)
                    .catch(function (error) {
                    public_1.Logger.debug(function (log) { return log(public_1.LogMsg("showDialogClick: dialog aborted -> " + error, TVInfoAreaComponent_1.TAG)); });
                });
            }
            return true;
        };
        TVInfoAreaComponent.prototype.getDialogLayer = function () {
            var _this = this;
            var defaultDialogLayer = public_2.DialogLayer.dialogLayer1;
            if (this.props.dttvDialogLayer != null) {
                var dialogLayer = public_2.DialogLayer[this.props.dttvDialogLayer];
                if (dialogLayer != null) {
                    return dialogLayer;
                }
                public_1.Logger.warn(function (log) { return log(public_1.LogMsg("Unable to parse dialogLayer value " + _this.props.dttvDialogLayer + " to ENUM DialogLayer", TVInfoAreaComponent_1.TAG)); });
            }
            return defaultDialogLayer;
        };
        TVInfoAreaComponent.prototype.render = function () {
            var _this = this;
            var classNames = [this.ID];
            if (this.props.style == "ux30") {
                classNames.push("ux30");
            }
            return React.createElement("div", { id: this.ID, className: classNames.join(" ") },
                React.createElement(public_2.NavigationKey, { keyFilter: "INFO_KEY", onKey: function () { return _this.onInfoClick(); } }),
                this.state.showInfoArea && React.createElement(public_2.HintComponent, { id: "hint", overrides: this.props.overrides, className: "hint", text: public_2.Filter.message(this, this.props.dttvText), iconClass: public_4.Css.sprites.A_IC_034_3_36x36, onClick: function () { return _this.onInfoClick(); } }));
        };
        var TVInfoAreaComponent_1;
        TVInfoAreaComponent.classID = 0x767;
        TVInfoAreaComponent = TVInfoAreaComponent_1 = __decorate([
            public_2.reactComponent({
                ID: "tv-info-area-component",
                styles: [
                    public_4.selector("&")
                        .props({
                        position: "absolute",
                        right: 72,
                        top: 64
                    }),
                    public_4.selector("&.ux30")
                        .props({
                        position: "absolute",
                        right: 105,
                        top: 72
                    })
                ]
            }),
            public_1.logTag()
        ], TVInfoAreaComponent);
        return TVInfoAreaComponent;
    }(public_2.ReactBaseComponent));
    exports.TVInfoAreaComponent = TVInfoAreaComponent;
});
//# sourceMappingURL=infoArea.component.js.map