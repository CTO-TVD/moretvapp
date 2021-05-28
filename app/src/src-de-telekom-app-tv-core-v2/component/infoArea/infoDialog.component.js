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
define(["require", "exports", "react", "src/src-de-telekom-react/public", "src/src-de-telekom-style/public", "../../translation/public", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2, public_3, public_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InfoDialogComponent = void 0;
    var InfoDialogComponent = (function (_super) {
        __extends(InfoDialogComponent, _super);
        function InfoDialogComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = { showCloseButton: true, pos: 0 };
            return _this;
        }
        InfoDialogComponent_1 = InfoDialogComponent;
        InfoDialogComponent.prototype.getTextBlockItems = function (data) {
            return [{ id: "continuousTextItem_0", text: data }];
        };
        InfoDialogComponent.prototype.render = function () {
            var _this = this;
            var _a;
            var title = public_1.Filter.join(this, (_a = this.props.model) === null || _a === void 0 ? void 0 : _a.title);
            var showHeaderH1 = !!(title && title.length <= 40);
            var iconClasses = this.props.model.icon ? " icon " + this.props.model.icon : "";
            return React.createElement(public_1.NavigationContainer, { className: this.ID, id: "infodialog" },
                React.createElement(public_1.NavigationKey, { keyFilter: "0-9", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset1", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset2", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "keyset3", onKey: function () { return true; } }),
                React.createElement(public_1.NavigationKey, { keyFilter: "INFO_KEY", onKey: function () {
                        _this.props.closeDialogWithResult({ resultId: "infoKey" });
                        return true;
                    } }),
                React.createElement(public_1.HintComponent, { id: "hint", className: "hint", text: public_1.Filter.message(this, public_3.messagesCore.STB_INFODIALOG_CLOSE), iconClass: public_2.Css.sprites.A_IC_029_2_36x36, onClick: function () { return _this.props.closeDialogWithResult({ resultId: "back" }); } }),
                React.createElement("div", { className: "info-dialog" },
                    showHeaderH1 &&
                        React.createElement("h1", { className: "position-center " + iconClasses }, title),
                    !showHeaderH1 && title &&
                        React.createElement("p", { className: public_1.Paragraphs.Standard.class.marginStandard + " " + public_2.Css.fonts2.a_fo_b1_2 }, title),
                    React.createElement("div", { className: public_1.Paragraphs.Standard.class.marginToControls + " info-area " + this.props.model.customClass },
                        React.createElement(public_1.TextBlockComponent, { fontClass: public_2.Css.fonts2.a_fo_b1_1, id: "textblock", items: this.getTextBlockItems(this.props.model.extraData), step: 42, pageFactor: 9, speedFactor: 4, contentPostionTop: 21, onPositionChanged: function (pos) { return _this.setState(function (prevState) { return (prevState.pos != pos ? { pos: pos, showCloseButton: pos <= 0 } : undefined); }); }, onEndReached: function (endReached) { if (endReached && _this.props.model.callFunc)
                                _this.props.model.callFunc(); } }))));
        };
        var InfoDialogComponent_1;
        InfoDialogComponent.dialogWidth = 1152;
        __decorate([
            public_4.Memoize.decorator()
        ], InfoDialogComponent.prototype, "getTextBlockItems", null);
        InfoDialogComponent = InfoDialogComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "tv-infodialog-component",
                styles: [
                    public_2.selector("& .info-dialog")
                        .props({
                        height: "100%",
                        width: InfoDialogComponent_1.dialogWidth,
                        position: "relative",
                        marginLeft: "auto",
                        marginRight: "auto",
                        top: 186
                    })
                        .sub(public_2.selector("h1")
                        .extend(public_2.Css.fonts2.a_fo_h2___mixin)
                        .props({
                        textTransform: "none",
                        position: "relative",
                        width: "100%",
                        left: 0,
                        paddingBottom: 11,
                        borderBottom: public_2.Css.scale(3) + "px solid " + public_2.Css.colors.global_focus_background
                    }))
                        .sub(public_2.selector("p")
                        .props({
                        color: public_2.Css.colors.A_CO_1
                    })
                        .extend(public_2.Css.fonts2.a_fo_b1_1_mixin))
                        .sub(public_2.selector("h4")
                        .props({
                        color: public_2.Css.colors.A_CO_1,
                        marginBottom: 16
                    })
                        .extend(public_2.Css.fonts2.a_fo_h4_mixin))
                        .sub(public_2.selector(".info-area")
                        .props({
                        height: 705,
                        width: InfoDialogComponent_1.dialogWidth,
                        position: "relative"
                    }))
                        .sub(public_2.selector(".iconlineup-arrows-component")
                        .props({
                        paddingTop: 36
                    })),
                    public_2.selector("& .hint")
                        .props({
                        position: "absolute",
                        right: 72,
                        top: 64
                    })
                ]
            })
        ], InfoDialogComponent);
        return InfoDialogComponent;
    }(public_1.ReactBaseComponent));
    exports.InfoDialogComponent = InfoDialogComponent;
});
//# sourceMappingURL=infoDialog.component.js.map