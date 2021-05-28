define(["require", "exports", "src/src-de-telekom/loader"], function (require, exports, loader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        loader_1.load("./config/app.config.json")
            .then(function () {
            require(["app/app"], function (app) {
                console.info("[config] application files and code were loaded completely. Start duration: " + (new Date().valueOf() - window.__portalStartTime) + " ms -- current local time: " + new Date().toString());
                app.startApp();
            });
        });
    })();
});
//# sourceMappingURL=config.js.map