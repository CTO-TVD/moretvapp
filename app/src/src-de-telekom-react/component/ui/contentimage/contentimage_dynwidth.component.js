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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "react", "src/src-de-telekom-style/public", "../../../base/public", "./contentimage.component"], function (require, exports, React, public_1, public_2, contentimage_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ContentImageDynamicWidthComponent = void 0;
    var ContentImageDynamicWidthComponent = (function (_super) {
        __extends(ContentImageDynamicWidthComponent, _super);
        function ContentImageDynamicWidthComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ContentImageDynamicWidthComponent.prototype.render = function () {
            return React.createElement(contentimage_component_1.ContentImageComponent, __assign({}, this.props, { className: [this.props.className, this.ID].join(" ") }));
        };
        ContentImageDynamicWidthComponent = __decorate([
            public_2.reactComponent({
                ID: "content-image-dynwidth-component",
                styles: [
                    public_1.selector("&")
                        .props({
                        overflow: "hidden"
                    }),
                    public_1.selector("&." + contentimage_component_1.ContentImageComponent.ID + "  > img")
                        .props({
                        width: { value: "initial", important: true },
                        left: "50%",
                        transform: "translate(-50%, 0%)"
                    })
                ]
            })
        ], ContentImageDynamicWidthComponent);
        return ContentImageDynamicWidthComponent;
    }(public_2.ReactBaseComponent));
    exports.ContentImageDynamicWidthComponent = ContentImageDynamicWidthComponent;
});
//# sourceMappingURL=contentimage_dynwidth.component.js.map