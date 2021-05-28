define(["require", "exports", "src/src-de-telekom-style/public"], function (require, exports, public_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GenericDialogTemplate = void 0;
    var GenericDialogTemplate = (function () {
        function GenericDialogTemplate() {
        }
        GenericDialogTemplate.getTemplate = function () {
            return [
                public_1.selector("& .dttv-genericdialog-v2")
                    .props({
                    position: "absolute",
                    top: "38%",
                    left: "50%",
                    transform: "translate(-50%, -38%)",
                    width: 966
                })
                    .sub(public_1.selector("p")
                    .props({
                    color: public_1.Css.colors.A_CO_1
                })
                    .extend(public_1.Css.fonts2.a_fo_b1_1_mixin)
                    .props({
                    textAlign: "center"
                }))
                    .sub(public_1.selector(".text-alignLeft")
                    .props({
                    textAlign: "left"
                })
                    .sub(public_1.selector("p")
                    .props({
                    textAlign: "left"
                })))
                    .sub(public_1.selector("h3")
                    .props({
                    textTransform: "none"
                }))
                    .sub(public_1.selector(".verticalscroll")
                    .props({
                    height: "inherit",
                    maxHeight: 800
                }))
                    .sub(public_1.selector(".verticalscroll.dttv-focused")
                    .props({
                    outline: "none"
                }))
                    .sub(public_1.selector("h1")
                    .extend(public_1.Css.fonts2.a_fo_h2___mixin)
                    .extend(public_1.Css.mixins.borderBottomGrey)
                    .props({
                    textTransform: "none",
                    position: "relative",
                    width: "100%",
                    left: 0,
                    paddingBottom: 12,
                    marginBottom: 20
                })
                    .sub(public_1.selector("&.icon-success::before")
                    .extend(public_1.Css.sprites.A_IC_009_1_48x48_mixin))
                    .sub(public_1.selector("&.icon-info::before")
                    .extend(public_1.Css.sprites.A_IC_077_48x48_mixin))
                    .sub(public_1.selector("&.icon-error::before")
                    .extend(public_1.Css.sprites.A_IC_069_48x48_mixin))
                    .sub(public_1.selector("&.icon::before")
                    .props({
                    content: "''",
                    marginRight: 21,
                    marginBottom: -4,
                    display: "inline-block"
                }))),
                public_1.selector("& .checkboxDialog")
                    .props({
                    marginRight: "auto",
                    marginLeft: "auto",
                    width: "-webkit-fit-content",
                    marginBottom: 60
                }),
                public_1.selector("& .margin-standard")
                    .props({
                    marginBottom: 48
                }),
                public_1.selector("& .margin-to-controls")
                    .props({
                    marginBottom: 36
                }),
                public_1.selector("& .margin-to-checkbox")
                    .props({
                    marginBottom: 28
                })
            ];
        };
        return GenericDialogTemplate;
    }());
    exports.GenericDialogTemplate = GenericDialogTemplate;
});
//# sourceMappingURL=genericdialog.template.js.map