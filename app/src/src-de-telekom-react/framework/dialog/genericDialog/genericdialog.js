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
define(["require", "exports", "react", "../../../service/keyeventmanager/public", "../../navigation/public", "../../../base/public", "../../../filter/public", "../../../component/public", "./genericdialog.template", "src/src-de-telekom-style/css", "src/src-de-telekom-style/public"], function (require, exports, React, public_1, public_2, public_3, public_4, public_5, genericdialog_template_1, css_1, public_6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TVGenericDialogComponent = void 0;
    var TVGenericDialogComponent = (function (_super) {
        __extends(TVGenericDialogComponent, _super);
        function TVGenericDialogComponent(props, context) {
            var _a, _b;
            var _this = _super.call(this, props, context) || this;
            _this.state = { isChecked: (_b = (_a = _this.props.model) === null || _a === void 0 ? void 0 : _a.extraData) === null || _b === void 0 ? void 0 : _b.isChecked, reset: {} };
            return _this;
        }
        TVGenericDialogComponent_1 = TVGenericDialogComponent;
        TVGenericDialogComponent.prototype.clickButton = function (id) {
            var _a;
            this.props.closeDialogWithResult({ resultId: id, extraData: ((_a = this.props.model) === null || _a === void 0 ? void 0 : _a.extraData) ? { isChecked: this.state.isChecked } : undefined });
        };
        TVGenericDialogComponent.prototype.onAnyKey = function (event) {
            if (event.virtualKey == public_1.TVKeyCodeConfig.BACK_KEY) {
                this.props.closeDialogWithResult({ resultId: "cancel" });
            }
            return true;
        };
        TVGenericDialogComponent.prototype.getButtonBarClass = function () {
            var _a, _b;
            if ((_b = (_a = this.props.model.extraData) === null || _a === void 0 ? void 0 : _a.alignments) === null || _b === void 0 ? void 0 : _b.buttonBar) {
                switch (this.props.model.extraData.alignments.buttonBar) {
                    case "left":
                        return public_5.Button.Bars.horizontal.left;
                    case "right":
                        return public_5.Button.Bars.horizontal.right;
                }
            }
            return public_5.Button.Bars.horizontal.center;
        };
        TVGenericDialogComponent.prototype.getMessageTextClassName = function () {
            var _a, _b, _c, _d;
            var classNames = [((_b = (_a = this.props.model) === null || _a === void 0 ? void 0 : _a.extraData) === null || _b === void 0 ? void 0 : _b.withCheckbox) ? "margin-to-checkbox" : "margin-to-controls"];
            if (this.props.model.customClass) {
                classNames.push(this.props.model.customClass);
            }
            if (((_d = (_c = this.props.model.extraData) === null || _c === void 0 ? void 0 : _c.alignments) === null || _d === void 0 ? void 0 : _d.text) == "left") {
                classNames.push("text-alignLeft");
            }
            return classNames.join(" ");
        };
        TVGenericDialogComponent.prototype.render = function () {
            var _this = this;
            var _a, _b, _c, _d, _e, _f;
            var title = public_4.Filter.join(this, (_a = this.props.model) === null || _a === void 0 ? void 0 : _a.title);
            var showHeaderH1 = !!(title && title.length <= 40);
            var navigationId = ((_b = this.props.model) === null || _b === void 0 ? void 0 : _b.navigationId) || "genericdialog";
            var keyhandling = this.props.model.suppressAllKeys
                ? React.createElement(public_2.NavigationKey, { keyFilter: "*", onKey: function (e) { return _this.onAnyKey(e); } })
                : React.createElement(React.Fragment, null,
                    React.createElement(public_2.NavigationKey, { keyFilter: "0-9", onKey: function () { return true; } }),
                    React.createElement(public_2.NavigationKey, { keyFilter: "keyset1", onKey: function () { return true; } }),
                    React.createElement(public_2.NavigationKey, { keyFilter: "keyset2", onKey: function () { return true; } }),
                    React.createElement(public_2.NavigationKey, { keyFilter: "keyset3", onKey: function () { return true; } }));
            var iconClasses = this.props.model.icon ? " icon " + this.props.model.icon : "";
            var styleDef = public_6.declaration().props({ borderTop: css_1.Css.scale(3) + "px solid " + css_1.Css.colors.A_CO_7, paddingTop: 36 }).toStyle();
            var dialogWidth = css_1.Css.scale(((_c = this.props.model.extraData) === null || _c === void 0 ? void 0 : _c.dialogWidth) ? this.props.model.extraData.dialogWidth : TVGenericDialogComponent_1.defaultDialogWidth);
            return React.createElement("div", { className: this.ID },
                React.createElement(public_2.NavigationContainer, { id: navigationId },
                    keyhandling,
                    React.createElement("div", { className: "dttv-genericdialog-v2", style: { width: dialogWidth } },
                        showHeaderH1 && React.createElement("h1", { className: "position-center " + iconClasses }, title),
                        !showHeaderH1 && title && React.createElement("p", { className: "margin-standard" },
                            " ",
                            title),
                        React.createElement("p", { className: this.getMessageTextClassName(), dangerouslySetInnerHTML: { __html: public_4.Filter.join(this, this.props.model.message) } }),
                        ((_e = (_d = this.props.model) === null || _d === void 0 ? void 0 : _d.extraData) === null || _e === void 0 ? void 0 : _e.withCheckbox) && React.createElement(public_5.Button.CheckboxV20Option, { id: "checkboxDialog", type: "small", className: "checkboxDialog", text: public_4.Filter.message(this, this.props.model.extraData.checkboxText), onClick: function () { return _this.setState(function (prevState) { return _this.setState({ isChecked: !prevState.isChecked, reset: {} }); }); }, isChecked: this.state.isChecked }),
                        React.createElement(public_2.NavigationContainer, { className: "" + this.getButtonBarClass(), style: ((_f = this.props.model.extraData) === null || _f === void 0 ? void 0 : _f.showBottomBorder) ? styleDef : undefined, id: "buttonContainer", autofocus: true, reset: this.state.reset }, (this.props.buttons || []).map(function (button) {
                            return React.createElement(public_5.Button.StandardV20, { id: button.id, key: button.id, text: public_4.Filter.join(_this, button.text), autofocus: button.autofocus, icon: button.icon, onClick: function (e) { return _this.clickButton(e.props.id); } });
                        })))));
        };
        var TVGenericDialogComponent_1;
        TVGenericDialogComponent.defaultDialogWidth = 966;
        TVGenericDialogComponent = TVGenericDialogComponent_1 = __decorate([
            public_3.reactComponent({
                ID: "generic-dialog-component",
                styles: genericdialog_template_1.GenericDialogTemplate.getTemplate()
            })
        ], TVGenericDialogComponent);
        return TVGenericDialogComponent;
    }(public_3.ReactBaseComponent));
    exports.TVGenericDialogComponent = TVGenericDialogComponent;
});
//# sourceMappingURL=genericdialog.js.map