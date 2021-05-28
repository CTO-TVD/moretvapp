define(["require", "exports", "URIjs/URI", "./feature.interface", "./configuration"], function (require, exports, urijs, feature_interface_1, configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FeatureSourceUrl = void 0;
    var FeatureSourceUrl = (function () {
        function FeatureSourceUrl() {
        }
        FeatureSourceUrl.process = function (source, assignment) {
            if (typeof source.query !== "string") {
                throw new feature_interface_1.FeatureError("FeatureSourceUrl: query must be of type string.");
            }
            if (!source.rule || typeof source.rule.assignment !== "string") {
                throw new feature_interface_1.FeatureError("FeatureSourceUrl: rule.assignment must be of type string.");
            }
            if (!source.rule || typeof source.rule.expression !== "string") {
                throw new feature_interface_1.FeatureError("FeatureSourceUrl: rule.expression must be of type string.");
            }
            if (configuration_1.Configuration.instance.startUrl) {
                var queries = urijs(configuration_1.Configuration.instance.startUrl).query(true);
                var hostname = urijs(configuration_1.Configuration.instance.startUrl).hostname();
                var pathname = urijs(configuration_1.Configuration.instance.startUrl).pathname();
                var value = queries[source.query];
                if ((new RegExp(source.rule.expression).test(value)) ||
                    (source.query == "hostname" && new RegExp(source.rule.expression).test(hostname)) ||
                    (source.query == "path" && new RegExp(source.rule.expression).test(pathname))) {
                    var assignments = configuration_1.Configuration.instance.features.assignment;
                    if (assignments.indexOf(source.rule.assignment) === -1) {
                        assignments.push(source.rule.assignment);
                    }
                }
            }
        };
        FeatureSourceUrl.type = "urlSource";
        return FeatureSourceUrl;
    }());
    exports.FeatureSourceUrl = FeatureSourceUrl;
});
//# sourceMappingURL=feature.source.js.map