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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
define(["require", "exports", "react", "../../base/public", "src/src-de-telekom-style/public", "src/src-de-telekom/public"], function (require, exports, React, public_1, public_2, public_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticNotificationComponent = void 0;
    var DiagnosticNotificationComponent = (function (_super) {
        __extends(DiagnosticNotificationComponent, _super);
        function DiagnosticNotificationComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this.state = { notifications: undefined };
            return _this;
        }
        DiagnosticNotificationComponent_1 = DiagnosticNotificationComponent;
        DiagnosticNotificationComponent.prototype.componentDidMount = function () {
            var _this = this;
            DiagnosticNotificationComponent_1.onUpdate = function () {
                _this.setState({ notifications: DiagnosticNotificationComponent_1.notifyItems });
            };
            this.setState({ notifications: DiagnosticNotificationComponent_1.notifyItems });
        };
        DiagnosticNotificationComponent.prototype.componentWillUnmount = function () {
            DiagnosticNotificationComponent_1.notifyItems = [];
            DiagnosticNotificationComponent_1.counter = 0;
            DiagnosticNotificationComponent_1.onUpdate = undefined;
        };
        DiagnosticNotificationComponent.prototype.render = function () {
            var _a;
            return React.createElement("div", { className: this.ID }, (_a = this.state.notifications) === null || _a === void 0 ? void 0 : _a.map(function (item) { return React.createElement("div", { key: item.id },
                React.createElement("span", { className: "counter" }, item.id),
                React.createElement("div", { className: "message" }, item.message),
                React.createElement("div", null, item.body)); }));
        };
        DiagnosticNotificationComponent.notify = function (message, body) {
            var _this = this;
            if (body === void 0) { body = ""; }
            public_3.Logger.debug(function (log) {
                log(public_3.LogMsg("notify - message: " + message + ", body: " + body, DiagnosticNotificationComponent_1.TAG));
                var notification = {
                    id: ++_this.counter,
                    message: message,
                    body: body
                };
                _this.notifyItems = __spreadArray(__spreadArray([], _this.notifyItems), [notification]);
                if (_this.notifyItems.length > 8) {
                    _this.notifyItems.shift();
                }
                if (_this.onUpdate)
                    _this.onUpdate();
                setTimeout(function () {
                    _this.notifyItems = __spreadArray([], _this.notifyItems);
                    var index = _this.notifyItems.indexOf(notification);
                    if (index !== -1) {
                        _this.notifyItems.splice(index, 1);
                    }
                    if (_this.onUpdate)
                        _this.onUpdate();
                }, public_3.Configuration.instance.timings ? public_3.Configuration.instance.timings.diagnosticNotificationTimeout : 1000000);
            });
        };
        var DiagnosticNotificationComponent_1;
        DiagnosticNotificationComponent.notifyItems = [];
        DiagnosticNotificationComponent.counter = 0;
        DiagnosticNotificationComponent = DiagnosticNotificationComponent_1 = __decorate([
            public_1.reactComponent({
                ID: "diagnostic-notification-component",
                styles: [
                    public_2.selector("&")
                        .props({
                        bottom: 40,
                        position: "absolute",
                        right: 0,
                        textAlign: "right",
                        top: 90
                    }),
                    public_2.selector("& > div")
                        .props({
                        backgroundColor: "bisque",
                        color: "black",
                        borderColor: "black",
                        borderStyle: "solid",
                        borderWidth: 3,
                        borderRadius: public_2.Css.dimensions.borderRadius,
                        clear: "both",
                        float: "right",
                        margin: 8,
                        padding: 8,
                        position: "relative"
                    }),
                    public_2.selector("& .counter")
                        .props({
                        backgroundColor: "red",
                        borderRadius: 16,
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                        left: 3,
                        lineHeight: 32,
                        paddingLeft: 6,
                        paddingRight: 6,
                        position: "absolute",
                        textAlign: "center",
                        top: 3
                    }),
                    public_2.selector("& .message")
                        .props({
                        fontWeight: "bold"
                    })
                ]
            }),
            public_3.logTag()
        ], DiagnosticNotificationComponent);
        return DiagnosticNotificationComponent;
    }(public_1.ReactBaseComponent));
    exports.DiagnosticNotificationComponent = DiagnosticNotificationComponent;
});
//# sourceMappingURL=notification.component.js.map